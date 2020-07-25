(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/other/gywm" ], {
    "470d": function(e, t, n) {
        var r = n("cb95");
        n.n(r).a;
    },
    "5b21": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("fda9")).default);
        }).call(this, n("543d").createPage);
    },
    "601d": function(e, t, n) {
        n.r(t);
        var r = n("d98b"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    "7b9c": function(e, t, n) {},
    cb95: function(e, t, n) {},
    d50f: function(e, t, n) {
        var r = n("7b9c");
        n.n(r).a;
    },
    d98b: function(e, r, a) {
        (function(f) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var e, l = (e = a("4795")) && e.__esModule ? e : {
                default: e
            };
            function t(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function s(e, t, n, r, a, o, c) {
                try {
                    var u = e[o](c), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(i) : Promise.resolve(i).then(r, a);
            }
            var n = {
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
                        content: ""
                    };
                },
                onLoad: function(c) {
                    var u, i = this;
                    return u = l.default.mark(function e() {
                        var t, n, r, a, o;
                        return l.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                i.getSystem(), i.util.setNT(c.t), t = "", e.t0 = +c.p, e.next = 1 === e.t0 ? 6 : 2 === e.t0 ? 8 : 3 === e.t0 ? 14 : 4 === e.t0 ? 16 : 5 === e.t0 ? 18 : 6 === e.t0 ? 23 : 7 === e.t0 ? 23 : 8 === e.t0 ? 25 : 30;
                                break;

                              case 6:
                                return t = i.system.introduction, e.abrupt("break", 30);

                              case 8:
                                return e.next = 10, i.util.request({
                                    url: i.api.HelpInfo,
                                    data: {
                                        id: c.id
                                    }
                                });

                              case 10:
                                return n = e.sent, r = n.data, t = r.content, e.abrupt("break", 30);

                              case 14:
                                return t = i.vipConfig.cardNotice, e.abrupt("break", 30);

                              case 16:
                                return t = f.getStorageSync("fwb"), e.abrupt("break", 30);

                              case 18:
                                return e.next = 20, i.util.request({
                                    url: i.api.config,
                                    data: {
                                        ident: "rechargeset"
                                    }
                                });

                              case 20:
                                return a = e.sent, t = a.data.rechargeAgreement, e.abrupt("break", 30);

                              case 23:
                                return t = f.getStorageSync("fwb"), e.abrupt("break", 30);

                              case 25:
                                return e.next = 27, i.util.request({
                                    url: i.api.config,
                                    data: {
                                        ident: "integral"
                                    }
                                });

                              case 27:
                                return o = e.sent, t = o.data.notice, e.abrupt("break", 30);

                              case 30:
                                i.content = t, console.log(c);

                              case 32:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }), function() {
                        var e = this, c = arguments;
                        return new Promise(function(t, n) {
                            var r = u.apply(e, c);
                            function a(e) {
                                s(r, t, n, a, o, "next", e);
                            }
                            function o(e) {
                                s(r, t, n, a, o, "throw", e);
                            }
                            a(void 0);
                        });
                    }();
                },
                computed: function(a) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? t(Object(o), !0).forEach(function(e) {
                            var t, n, r;
                            t = a, r = o[n = e], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : t(Object(o)).forEach(function(e) {
                            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return a;
                }({}, (0, a("2f62").mapState)([ "vipConfig" ])),
                methods: {
                    preview: function(e, t) {
                        console.log("src: " + e);
                    },
                    navigate: function(e, t) {
                        console.log("href: " + e), f.showModal({
                            content: "点击链接为：" + e,
                            showCancel: !1
                        });
                    }
                }
            };
            r.default = n;
        }).call(this, a("543d").default);
    },
    e38d: function(e, t, n) {
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
    fda9: function(e, t, n) {
        n.r(t);
        var r = n("e38d"), a = n("601d");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("470d"), n("d50f");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, "ae22c9ae", null, !1, r.a, void 0);
        t.default = u.exports;
    }
}, [ [ "5b21", "common/runtime", "common/vendor" ] ] ]);