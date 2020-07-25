(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/bzf" ], {
    1161: function(t, c, a) {
        (function(t) {
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.default = void 0;
            var e, n = (e = a("4795")) && e.__esModule ? e : {
                default: e
            };
            function i(t, e, n, r, o, c, a) {
                try {
                    var u = t[c](a), i = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(i) : Promise.resolve(i).then(r, o);
            }
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            var o = {
                name: "bzf",
                data: function() {
                    return {};
                },
                onLoad: function() {
                    this.getSystem(this), t.setNavigationBarTitle({
                        title: "包装费说明"
                    });
                },
                computed: function(o) {
                    for (var t = 1; t < arguments.length; t++) {
                        var c = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? r(Object(c), !0).forEach(function(t) {
                            var e, n, r;
                            e = o, r = c[n = t], n in e ? Object.defineProperty(e, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : r(Object(c)).forEach(function(t) {
                            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
                        });
                    }
                    return o;
                }({}, (0, a("2f62").mapState)([ "carList" ]), {
                    getBoxMoney: function() {
                        var e = 0;
                        return this.carList.forEach(function(t) {
                            e += t.boxMoney * t.num;
                        }), +e.toFixed(2);
                    }
                }),
                methods: {
                    itemBoxMoney: function(t, e) {
                        return (t * e).toFixed(1);
                    }
                },
                created: function() {
                    return u = n.default.mark(function t() {
                        return n.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }), function() {
                        var t = this, a = arguments;
                        return new Promise(function(e, n) {
                            var r = u.apply(t, a);
                            function o(t) {
                                i(r, e, n, o, c, "next", t);
                            }
                            function c(t) {
                                i(r, e, n, o, c, "throw", t);
                            }
                            o(void 0);
                        });
                    }();
                    var u;
                }
            };
            c.default = o;
        }).call(this, a("543d").default);
    },
    "32e5": function(t, e, n) {
        var r = function() {
            var r = this, t = (r.$createElement, r._self._c, r.__map(r.carList, function(t, e) {
                var n = r.itemBoxMoney(t.boxMoney, t.num);
                return {
                    $orig: r.__get_orig(t),
                    m0: n
                };
            }));
            r.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "378fa": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("dc4b")).default);
        }).call(this, n("543d").createPage);
    },
    c8a2: function(t, e, n) {
        n.r(e);
        var r = n("1161"), o = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = o.a;
    },
    dc4b: function(t, e, n) {
        n.r(e);
        var r = n("32e5"), o = n("c8a2");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        var a = n("f0c5"), u = Object(a.a)(o.default, r.b, r.c, !1, null, "16b4bfcd", null, !1, r.a, void 0);
        e.default = u.exports;
    }
}, [ [ "378fa", "common/runtime", "common/vendor" ] ] ]);