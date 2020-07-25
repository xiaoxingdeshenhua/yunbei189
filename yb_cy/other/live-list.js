(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/other/live-list" ], {
    "6a4d": function(t, e, n) {
        var a = n("76f1c");
        n.n(a).a;
    },
    "76f1c": function(t, e, n) {},
    "882d": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("e963")).default);
        }).call(this, n("543d").createPage);
    },
    "8e06": function(t, e, n) {
        var a = function() {
            var a = this, t = (a.$createElement, a._self._c, a.__map(a.dataList, function(t, e) {
                var n = a.ls(t);
                return {
                    $orig: a.__get_orig(t),
                    m0: n
                };
            }));
            a.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    a2a1: function(t, e, n) {
        n.r(e);
        var a = n("dd16"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    },
    dd16: function(t, a, r) {
        (function(e) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t, o = (t = r("4795")) && t.__esModule ? t : {
                default: t
            };
            function c(t, e, n, a, o, r, i) {
                try {
                    var u = t[r](i), c = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(c) : Promise.resolve(c).then(a, o);
            }
            var n = {
                name: "order-index",
                components: {
                    jzz: function() {
                        r.e("components/common/jzz").then(function() {
                            return resolve(r("707a"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                data: function() {
                    return {
                        params: {
                            page: 0,
                            size: 10
                        }
                    };
                },
                onLoad: function(t) {
                    this.getSystem(), this.util.setNT("直播列表"), this.getList(), this.getLayout();
                },
                mixins: [ (r("2f62"), r("c1ef")).sljz ],
                computed: {},
                methods: {
                    getList: function() {
                        var u, a = this;
                        return u = o.default.mark(function t() {
                            var e, n;
                            return o.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, a.util.request({
                                        url: a.api.LiveList,
                                        method: "POST",
                                        data: a.params
                                    });

                                  case 2:
                                    e = t.sent, (n = e.data).room_info ? (a.dataList = a.dataList.concat(n.room_info), 
                                    a.isget = !0, a.mygd = a.params.size > n.room_info.length, a.params.page++) : a.isget = a.mygd = !0;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }), function() {
                            var t = this, i = arguments;
                            return new Promise(function(e, n) {
                                var a = u.apply(t, i);
                                function o(t) {
                                    c(a, e, n, o, r, "next", t);
                                }
                                function r(t) {
                                    c(a, e, n, o, r, "throw", t);
                                }
                                o(void 0);
                            });
                        }();
                    },
                    ls: function(t) {
                        var e = "";
                        switch (t.live_status) {
                          case 101:
                            e = "直播中";
                            break;

                          case 102:
                            e = "未开始";
                            break;

                          case 103:
                            e = "已结束";
                            break;

                          case 104:
                            e = "禁播";
                            break;

                          case 105:
                            e = "暂停中";
                            break;

                          case 106:
                            e = "异常";
                            break;

                          case 107:
                            e = "已过期";
                        }
                        return e;
                    },
                    goDl: function(t) {
                        e.navigateTo({
                            url: "plugin-private://wx2b03c6e691cd7370/pages/live-player-plugin?room_id=".concat(t.roomid)
                        });
                    }
                },
                onShareAppMessage: function() {
                    return {
                        title: "邀你一起看直播！"
                    };
                }
            };
            a.default = n;
        }).call(this, r("543d").default);
    },
    e963: function(t, e, n) {
        n.r(e);
        var a = n("8e06"), o = n("a2a1");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        n("6a4d");
        var i = n("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "4169a8f3", null, !1, a.a, void 0);
        e.default = u.exports;
    }
}, [ [ "882d", "common/runtime", "common/vendor" ] ] ]);