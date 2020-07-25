(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/index/index" ], {
    "2e58": function(e, n, t) {
        t.r(n);
        var o = t("893d"), r = t("c27c");
        for (var c in r) "default" !== c && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(c);
        t("33d4"), t("785b");
        var i = t("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, "478a9c2d", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "33d4": function(e, n, t) {
        var o = t("8fe1");
        t.n(o).a;
    },
    "40d9": function(e, n, t) {},
    "785b": function(e, n, t) {
        var o = t("40d9");
        t.n(o).a;
    },
    "893d": function(e, n, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
    },
    "8fe1": function(e, n, t) {},
    c27c: function(e, n, t) {
        t.r(n);
        var o = t("f252"), r = t.n(o);
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = r.a;
    },
    c3fd: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("c27a"), n(t("66fd")), e(n(t("2e58")).default);
        }).call(this, t("543d").createPage);
    },
    f252: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, i = (o = t("4795")) && o.__esModule ? o : {
            default: o
        }, r = t("2f62");
        function u(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(n);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, o);
            }
            return t;
        }
        function c(r) {
            for (var e = 1; e < arguments.length; e++) {
                var c = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(c), !0).forEach(function(e) {
                    var n, t, o;
                    n = r, o = c[t = e], t in n ? Object.defineProperty(n, t, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = o;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : u(Object(c)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                });
            }
            return r;
        }
        function a(e, n, t, o, r, c, i) {
            try {
                var u = e[c](i), a = u.value;
            } catch (e) {
                return void t(e);
            }
            u.done ? n(a) : Promise.resolve(a).then(o, r);
        }
        var s = {
            components: {
                MgSwiper: function() {
                    t.e("components/swiper/swiper").then(function() {
                        return resolve(t("04a9"));
                    }.bind(null, t)).catch(t.oe);
                },
                load: function() {
                    t.e("components/common/load").then(function() {
                        return resolve(t("de6d"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    indexUrl: "",
                    swiper: {
                        class: "h100",
                        padding: 0,
                        swiper: {
                            children: []
                        },
                        duration: "",
                        mode: "",
                        height: "100",
                        radius: "0",
                        auto: !0,
                        interval: 5
                    },
                    second: ""
                };
            },
            onLoad: function(r) {
                var u, c = this;
                return u = i.default.mark(function e() {
                    var n, t, o;
                    return i.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n = r.scene ? decodeURIComponent(r.scene) : r.userId, c.getLoginInfo({
                                inviteId: n
                            }), e.next = 4, Promise.all([ c.getSystem(), c.getLayout() ]);

                          case 4:
                            e.sent, "", o = c.system.decorationModel, t = 1 == o ? "/yb_cy/shop/goods" : 2 == o ? "/yb_cy/shop/index" : 3 == o ? "/yb_cy/shop/select" : "/yb_cy/shop/goods", 
                            c.indexUrl = t, c.go({
                                t: 3,
                                url: c.indexUrl
                            }), c.util.setNT(c.system.name);

                          case 10:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }), function() {
                    var e = this, i = arguments;
                    return new Promise(function(n, t) {
                        var o = u.apply(e, i);
                        function r(e) {
                            a(o, n, t, r, c, "next", e);
                        }
                        function c(e) {
                            a(o, n, t, r, c, "throw", e);
                        }
                        r(void 0);
                    });
                }();
            },
            computed: c({}, (0, r.mapState)([ "layout", "hasKp" ]), {
                launch: function() {
                    return this.layout.launch && this.layout.launch.config || {};
                }
            }),
            methods: c({}, (0, r.mapMutations)([ "setHasKp" ]), {
                tg: function() {
                    this.go({
                        t: 3,
                        url: this.indexUrl
                    }), this.setHasKp(!0), clearInterval(this.dsq);
                }
            }),
            onUnload: function() {
                this.dsq && clearInterval(this.dsq);
            }
        };
        n.default = s;
    }
}, [ [ "c3fd", "common/runtime", "common/vendor" ] ] ]);