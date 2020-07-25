(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/integral/order-dl" ], {
    "0d46": function(e, t, n) {},
    "2b4f": function(e, t, n) {
        n.r(t);
        var r = n("a894"), o = n("48ab");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("f8ca");
        var c = n("f0c5"), i = Object(c.a)(o.default, r.b, r.c, !1, null, "3e868e49", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    "48ab": function(e, t, n) {
        n.r(t);
        var r = n("c590"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "7d6a": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("2b4f")).default);
        }).call(this, n("543d").createPage);
    },
    a894: function(e, t, n) {
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.timeToDate(e.dlDatl.payAt, "yyyy-MM-dd hh:mm"));
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    c590: function(e, i, f) {
        (function(n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var e, o = (e = f("4795")) && e.__esModule ? e : {
                default: e
            }, t = f("2f62");
            function u(e, t, n, r, o, a, c) {
                try {
                    var i = e[a](c), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function a(i) {
                return function() {
                    var e = this, c = arguments;
                    return new Promise(function(t, n) {
                        var r = i.apply(e, c);
                        function o(e) {
                            u(r, t, n, o, a, "next", e);
                        }
                        function a(e) {
                            u(r, t, n, o, a, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            var c = {
                name: "orderDl",
                components: {
                    MgCell: function() {
                        f.e("components/common/mg-cell").then(function() {
                            return resolve(f("ef6e"));
                        }.bind(null, f)).catch(f.oe);
                    }
                },
                data: function() {
                    return {
                        dlDatl: ""
                    };
                },
                onLoad: function(e) {
                    var t;
                    console.log(e), t = e.scene ? decodeURIComponent(e.scene) : e.id, this.id = t, this.getSystem(this), 
                    n.setNavigationBarTitle({
                        title: this.mySwitch.jfName + "商城-订单详情"
                    }), this.getData();
                },
                mixins: [ f("c1ef").utilMixins ],
                computed: function(o) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(a), !0).forEach(function(e) {
                            var t, n, r;
                            t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                        });
                    }
                    return o;
                }({}, (0, t.mapState)("dndc", [ "mySwitch" ])),
                methods: {
                    getData: function() {
                        var r = this;
                        return a(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.IntegralOrderInfo,
                                        mask: 1,
                                        data: {
                                            orderId: r.id
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, console.log("详情", n), r.dlDatl = n, r.showLoading = !1;

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                },
                created: function() {
                    return a(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            };
            i.default = c;
        }).call(this, f("543d").default);
    },
    f8ca: function(e, t, n) {
        var r = n("0d46");
        n.n(r).a;
    }
}, [ [ "7d6a", "common/runtime", "common/vendor" ] ] ]);