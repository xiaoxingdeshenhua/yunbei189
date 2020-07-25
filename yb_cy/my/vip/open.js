(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/vip/open" ], {
    4058: function(e, t, n) {
        n.r(t);
        var r = n("5101"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    5101: function(e, f, l) {
        (function(e) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var r = n(l("4795")), t = l("2f62"), a = n(l("6f73"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function o(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(o), !0).forEach(function(e) {
                        var t, n, r;
                        t = a, r = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach(function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return a;
            }
            function c(e, t, n, r, a, o, u) {
                try {
                    var i = e[o](u), c = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(c) : Promise.resolve(c).then(r, a);
            }
            function i(i) {
                return function() {
                    var e = this, u = arguments;
                    return new Promise(function(t, n) {
                        var r = i.apply(e, u);
                        function a(e) {
                            c(r, t, n, a, o, "next", e);
                        }
                        function o(e) {
                            c(r, t, n, a, o, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var s = {
                components: {
                    mgInput: function() {
                        l.e("components/form/mg-input").then(function() {
                            return resolve(l("6831"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgRadio: function() {
                        l.e("components/form/mg-radio").then(function() {
                            return resolve(l("4b28"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    MgCell: function() {
                        l.e("components/common/mg-cell").then(function() {
                            return resolve(l("ef6e"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    bkB: function() {
                        l.e("components/common/block-b").then(function() {
                            return resolve(l("0c75"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    sqBtn: function() {
                        l.e("components/common/sq-btn").then(function() {
                            return resolve(l("0df4"));
                        }.bind(null, l)).catch(l.oe);
                    }
                },
                data: function() {
                    return {
                        t: "digit",
                        params: {
                            userId: "",
                            userTel: "",
                            birthday: "",
                            sex: "男",
                            realName: ""
                        },
                        sexArr: [ {
                            value: "男",
                            name: "男"
                        }, {
                            value: "女",
                            name: "女",
                            checked: "true"
                        } ],
                        loading: !1,
                        isEdit: !1,
                        date: "",
                        endDate: "",
                        isbj: !1
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return i(r.default.mark(function e() {
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.userId && (n.isbj = !0), n.getSystem(), n.getVipConfig().then(function(e) {
                                    n.util.setNT("".concat(n.vipConfig.title, "-").concat(n.isbj ? "修改资料" : "免费领取"));
                                }), n.date = n.endDate = n.timeToDate(n.dateToTime(), "yyyy-MM-dd"), n.getLoginInfo().then(function() {
                                    n.params.userId = n.uId, n.params.userTel = n.user.userTel || "", n.isbj && (n.params.realName = n.user.realName, 
                                    n.params.sex = n.user.sex, n.date = n.timeToDate(n.user.birthday, "yyyy-MM-dd"));
                                });

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ l("c1ef").utilMixins ],
                computed: o({}, (0, t.mapState)([ "vipConfig" ])),
                methods: o({}, (0, t.mapActions)([ "getVipConfig" ]), {
                    setTel: function(e) {
                        this.params.userTel = e;
                    },
                    bindDateChange: function(e) {
                        this.date = e.target.value;
                    },
                    chooseLocation: function() {
                        var t = this;
                        e.chooseLocation({
                            success: function(e) {
                                t.params.address = e.address, t.params.details = e.name, t.params.lat = e.latitude, 
                                t.params.lng = e.longitude, console.log(e);
                            }
                        });
                    },
                    save: function() {
                        var n = this;
                        return i(r.default.mark(function e() {
                            var t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (n.params.birthday = n.dateToTime(n.date), t = [], a.default.isFailParams({
                                        field: n.params,
                                        filter: t,
                                        tips: {
                                            userId: "缺少用户id",
                                            realName: "请输入姓名",
                                            userTel: "请输入手机号",
                                            birthday: "请选择生日"
                                        }
                                    })) {
                                        e.next = 7;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 7:
                                    if (a.default.isTelCode(n.params.userTel)) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.abrupt("return", n.util.message("请输入正确的手机号", 3));

                                  case 9:
                                    return n.loading = !0, e.next = 12, n.requestSM("vip");

                                  case 12:
                                    return e.next = 14, n.util.request({
                                        url: n.api[n.isbj ? "SaveUser" : "ReceiveCard"],
                                        method: "POST",
                                        mask: 1,
                                        data: n.params
                                    });

                                  case 14:
                                    e.sent ? (n.util.message("提交成功", 1, 1e3), n.refreshUser({
                                        userId: n.uId
                                    }, !0), a.default.swnb(1e3)) : n.loading = !1;

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                })
            };
            f.default = s;
        }).call(this, l("543d").default);
    },
    "94f3": function(e, t, n) {
        n.r(t);
        var r = n("b791"), a = n("4058");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("9af0");
        var u = n("f0c5"), i = Object(u.a)(a.default, r.b, r.c, !1, null, "222b2ad5", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    "96fe": function(e, t, n) {},
    "9af0": function(e, t, n) {
        var r = n("96fe");
        n.n(r).a;
    },
    b791: function(e, t, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    bcf6: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("94f3")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "bcf6", "common/runtime", "common/vendor" ] ] ]);