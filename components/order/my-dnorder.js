(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/order/my-dnorder" ], {
    "187b": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = i(n("4795")), o = n("2f62"), r = n("c1ef"), a = i(n("6f73"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e, n, o, r, c, a) {
            try {
                var i = t[c](a), u = i.value;
            } catch (t) {
                return void n(t);
            }
            i.done ? e(u) : Promise.resolve(u).then(o, r);
        }
        function s(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        var f = {
            name: "my-dnorder",
            components: {
                bkB: function() {
                    n.e("components/common/block-b").then(function() {
                        return resolve(n("0c75"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                otype: {
                    type: Number,
                    default: 1
                }
            },
            data: function() {
                return {
                    stateArr: [ "", "待付款", "已支付", "已关闭" ],
                    ztstateArr: [ "" ],
                    stime: ""
                };
            },
            mixins: [ r.utilMixins ],
            computed: function(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(c), !0).forEach(function(t) {
                        var e, n, o;
                        e = r, o = c[n = t], n in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : s(Object(c)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(c, t));
                    });
                }
                return r;
            }({}, (0, o.mapState)("dndc", [ "dndcConfig" ]), {
                tColor: function() {
                    return "#FF5B0A";
                }
            }),
            methods: {
                goDL: function() {
                    var t;
                    switch (this.otype) {
                      case 1:
                        t = "/yb_cy/inshop/order-dl?id=" + this.co.id;
                        break;

                      default:
                        t = "/yb_cy/inshop/syorder-dl?id=" + this.co.id;
                    }
                    this.go({
                        t: 1,
                        url: t
                    });
                },
                gosjDL: function() {
                    this.go({
                        t: 2,
                        url: "/yb_cy/shop/index?storeId=".concat(this.co.storeId)
                    });
                },
                getState: function() {
                    return 1 == this.otype ? this.stateArr[+this.co.state] : 2 == this.otype ? "已完成" : void 0;
                },
                stateColor: function() {
                    var t = "";
                    switch (+this.co.state) {
                      case 1:
                        t = this.tColor;
                        break;

                      case 7:
                        t = "";
                        break;

                      case 8:
                      case 11:
                        t = "#f00";
                        break;

                      default:
                        t = "#999";
                    }
                    return t;
                },
                djs: function(t) {
                    var i, n = this;
                    if (1 == this.co.state) {
                        var o = this.dateToTime(), r = +t + 60 * this.dndcConfig.waitTime;
                        if (o < r) {
                            var e = a.default.countDownTime(r - o);
                            this.stime = "，剩余 ".concat(e[2], ":").concat(e[3]), this.dsq = setInterval((i = c.default.mark(function t() {
                                var e;
                                return c.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        (r -= 1) == o && (clearInterval(n.dsq), n.$emit("operation", {
                                            t: "qxdd",
                                            co: n.co
                                        })), e = a.default.countDownTime(r - o), n.stime = "，剩余 ".concat(e[2], ":").concat(e[3]);

                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }), function() {
                                var t = this, a = arguments;
                                return new Promise(function(e, n) {
                                    var o = i.apply(t, a);
                                    function r(t) {
                                        u(o, e, n, r, c, "next", t);
                                    }
                                    function c(t) {
                                        u(o, e, n, r, c, "throw", t);
                                    }
                                    r(void 0);
                                });
                            }), 1e3);
                        }
                    }
                }
            }
        };
        e.default = f;
    },
    "22d6": function(t, e, n) {
        n.r(e);
        var o = n("187b"), r = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = r.a;
    },
    "29a2": function(t, e, n) {
        n.r(e);
        var o = n("8171"), r = n("22d6");
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        n("fe1b");
        var a = n("f0c5"), i = Object(a.a)(r.default, o.b, o.c, !1, null, "50af59e0", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    8171: function(t, e, n) {
        var o = function() {
            var t = this, e = (t.$createElement, t._self._c, t.stateColor()), n = t.getState(), o = t.timeToDate(t.co.createdAt), r = t.stateColor(), c = t.getState(), a = t.timeToDate(t.co.createdAt);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: n,
                    m2: o,
                    m3: r,
                    m4: c,
                    m5: a
                }
            });
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    f337: function(t, e, n) {},
    fe1b: function(t, e, n) {
        var o = n("f337");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/order/my-dnorder-create-component", {
    "components/order/my-dnorder-create-component": function(t, e, n) {
        n("543d").createComponent(n("29a2"));
    }
}, [ [ "components/order/my-dnorder-create-component" ] ] ]);