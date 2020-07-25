(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/other/gywmtwo" ], {
    "1bc6": function(e, t, n) {},
    "1d4a": function(e, t, n) {
        n.r(t);
        var o = n("61a0"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "1d94": function(e, t, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "61a0": function(e, c, a) {
        (function(n) {
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.default = void 0;
            var e, o = (e = a("4795")) && e.__esModule ? e : {
                default: e
            };
            function t(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function i(e, t, n, o, r, c, a) {
                try {
                    var u = e[c](a), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(i) : Promise.resolve(i).then(o, r);
            }
            var r = {
                name: "gywm",
                components: {
                    mgRtext: function() {
                        Promise.all([ a.e("common/vendor"), a.e("components/swiper/rich-text") ]).then(function() {
                            return resolve(a("7cad"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        loading: !1,
                        content: "",
                        systemData: ""
                    };
                },
                onLoad: function(e) {
                    var u, t = this;
                    return u = o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.getSystem(), t.util.setNT("关于我们"), console.log(t.system);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }), function() {
                        var e = this, a = arguments;
                        return new Promise(function(t, n) {
                            var o = u.apply(e, a);
                            function r(e) {
                                i(o, t, n, r, c, "next", e);
                            }
                            function c(e) {
                                i(o, t, n, r, c, "throw", e);
                            }
                            r(void 0);
                        });
                    }();
                },
                computed: function(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var c = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? t(Object(c), !0).forEach(function(e) {
                            var t, n, o;
                            t = r, o = c[n = e], n in t ? Object.defineProperty(t, n, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = o;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : t(Object(c)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                        });
                    }
                    return r;
                }({}, (0, a("2f62").mapState)([ "vipConfig" ])),
                methods: {
                    preview: function(e, t) {
                        console.log("src: " + e);
                    },
                    navigate: function(e, t) {
                        console.log("href: " + e), n.showModal({
                            content: "点击链接为：" + e,
                            showCancel: !1
                        });
                    }
                }
            };
            c.default = r;
        }).call(this, a("543d").default);
    },
    "92f4": function(e, t, n) {
        var o = n("1bc6");
        n.n(o).a;
    },
    "96b6": function(e, t, n) {
        n.r(t);
        var o = n("1d94"), r = n("1d4a");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("92f4");
        var a = n("f0c5"), u = Object(a.a)(r.default, o.b, o.c, !1, null, "25159df7", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    a1e9: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("96b6")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "a1e9", "common/runtime", "common/vendor" ] ] ]);