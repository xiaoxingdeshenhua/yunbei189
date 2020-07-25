(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/sq-btn" ], {
    "0df4": function(e, t, n) {
        n.r(t);
        var o = n("112b"), r = n("f2dc");
        for (var s in r) "default" !== s && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(s);
        n("50aa");
        var a = n("f0c5"), i = Object(a.a)(r.default, o.b, o.c, !1, null, "048561f3", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "112b": function(e, t, n) {
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__get_style([ {
                width: e.w + "rpx",
                height: e.h + "rpx",
                lineHeight: e.h + "rpx"
            }, e.sname ])), n = e.__get_style([ {
                width: e.w + "rpx",
                height: e.h + "rpx",
                lineHeight: e.h + "rpx"
            }, e.sname ]), o = e.__get_style([ {
                width: e.w + "rpx",
                height: e.h + "rpx",
                lineHeight: e.h + "rpx"
            }, e.sname ]);
            e._isMounted || (e.e0 = function(e) {
                return this.$emit("refresh");
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    s1: n,
                    s2: o
                }
            });
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "4c04": function(e, t, n) {
        (function(a) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0, n("2f62");
            var e = {
                name: "sq-btn",
                props: {
                    cname: "",
                    sname: "",
                    w: "",
                    h: "",
                    t: "",
                    type: {
                        type: String,
                        default: "1"
                    }
                },
                data: function() {
                    return {};
                },
                watch: {},
                methods: {
                    getUserInfo: function() {
                        var t = this;
                        a.getUserInfo({
                            success: function(e) {
                                t.refreshUser({
                                    portrait: portrait,
                                    userName: userName,
                                    userId: userId
                                }).then(function(e) {
                                    t.$emit("refresh");
                                }), console.log("getUserInfo success", e);
                            },
                            fail: function(e) {
                                console.log("getUserInfo fail", e), a.showModal({
                                    title: "温馨提示",
                                    content: "获取头像等信息失败",
                                    showCancel: !1
                                });
                            }
                        });
                    },
                    mpGetUserInfo: function(e) {
                        var t = this;
                        if (console.log("mpGetUserInfo", e), "getUserInfo:ok" == e.detail.errMsg) {
                            var n = e.detail.userInfo.avatarUrl, o = e.detail.userInfo.nickName, r = this.user.userId;
                            this.refreshUser({
                                portrait: n,
                                userName: o,
                                userId: r
                            }).then(function(e) {
                                t.$emit("refresh");
                            }), console.log(n, o, r);
                        } else a.showModal({
                            title: "温馨提示",
                            content: "获取头像等信息失败",
                            showCancel: !1
                        });
                    },
                    mpGetphonenumber: function(e) {
                        var t = this;
                        if (console.log("mpGetphonenumber", e), "getPhoneNumber:ok" == e.detail.errMsg) {
                            var n = getApp().globalData.session_key, o = e.detail.encryptedData, r = e.detail.iv, s = this.user.userId;
                            this.util.request({
                                url: this.api.Decrypt,
                                method: "POST",
                                data: {
                                    userId: s,
                                    sessionKey: n,
                                    data: o,
                                    iv: r
                                }
                            }).then(function(e) {
                                e.data && t.$emit("refresh", e.data), t.refreshUser({
                                    userId: s
                                }), console.log(e);
                            }), console.log(n, o, r);
                        } else a.showModal({
                            title: "温馨提示",
                            content: "授权手机号失败",
                            showCancel: !1
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, n("543d").default);
    },
    "50aa": function(e, t, n) {
        var o = n("cedd");
        n.n(o).a;
    },
    cedd: function(e, t, n) {},
    f2dc: function(e, t, n) {
        n.r(t);
        var o = n("4c04"), r = n.n(o);
        for (var s in o) "default" !== s && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(s);
        t.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/sq-btn-create-component", {
    "components/common/sq-btn-create-component": function(e, t, n) {
        n("543d").createComponent(n("0df4"));
    }
}, [ [ "components/common/sq-btn-create-component" ] ] ]);