(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/invite/yx-syxq" ], {
    "3ed7": function(t, n, e) {},
    "8ce1": function(t, n, e) {
        e.r(n);
        var a = e("b4ea"), r = e.n(a);
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        n.default = r.a;
    },
    a57f: function(t, n, e) {
        e.r(n);
        var a = e("dac0"), r = e("8ce1");
        for (var o in r) "default" !== o && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(o);
        e("d4a1");
        var u = e("f0c5"), c = Object(u.a)(r.default, a.b, a.c, !1, null, "0ee0a146", null, !1, a.a, void 0);
        n.default = c.exports;
    },
    b4ea: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a, r = (a = e("4795")) && a.__esModule ? a : {
            default: a
        }, o = (e("2f62"), e("c1ef"));
        function i(t, n, e, a, r, o, u) {
            try {
                var c = t[o](u), i = c.value;
            } catch (t) {
                return void e(t);
            }
            c.done ? n(i) : Promise.resolve(i).then(a, r);
        }
        function u(c) {
            return function() {
                var t = this, u = arguments;
                return new Promise(function(n, e) {
                    var a = c.apply(t, u);
                    function r(t) {
                        i(a, n, e, r, o, "next", t);
                    }
                    function o(t) {
                        i(a, n, e, r, o, "throw", t);
                    }
                    r(void 0);
                });
            };
        }
        var c = {
            name: "wdfs",
            components: {
                navTab: function() {
                    e.e("components/swiper/nav-tab").then(function() {
                        return resolve(e("2040"));
                    }.bind(null, e)).catch(e.oe);
                },
                jzz: function() {
                    e.e("components/common/jzz").then(function() {
                        return resolve(e("707a"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    params: {
                        userId: "",
                        size: 10,
                        page: 1,
                        state: ""
                    }
                };
            },
            onLoad: function(n) {
                var e = this;
                return u(r.default.mark(function t() {
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return e.getSystem(), e.util.setNT(1 == n.t ? "在路上收益" : "累计收益"), t.next = 4, e.getLoginInfo();

                          case 4:
                            e.params.userId = e.uId, e.params.state = n.t || "", e.getList(), console.log(n);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            mixins: [ o.sljz, o.utilMixins ],
            computed: {},
            methods: {
                getList: function() {
                    var a = this;
                    return u(r.default.mark(function t() {
                        var n, e;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.util.request({
                                    url: a.api.myInviteNewBonus,
                                    method: "POST",
                                    data: a.params
                                });

                              case 2:
                                n = t.sent, e = n.data, a.dataList = a.dataList.concat(e), a.isget = !0, a.mygd = a.params.size > e.length, 
                                a.params.page++;

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        n.default = c;
    },
    d4a1: function(t, n, e) {
        var a = e("3ed7");
        e.n(a).a;
    },
    d867: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("c27a"), n(e("66fd")), t(n(e("a57f")).default);
        }).call(this, e("543d").createPage);
    },
    dac0: function(t, n, e) {
        var a = function() {
            var a = this, t = (a.$createElement, a._self._c, a.__map(a.dataList, function(t, n) {
                var e = a.timeToDate(t.createdAt);
                return {
                    $orig: a.__get_orig(t),
                    m0: e
                };
            }));
            a.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, r = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    }
}, [ [ "d867", "common/runtime", "common/vendor" ] ] ]);