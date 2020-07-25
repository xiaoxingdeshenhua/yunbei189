(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/order/my-dnorder" ], {
    "187b": function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = i(o("4795")), n = o("2f62"), r = o("c1ef"), a = i(o("6f73"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function s(t, e, o, n, r, c, a) {
            try {
                var i = t[c](a), s = i.value;
            } catch (t) {
                return void o(t);
            }
            i.done ? e(s) : Promise.resolve(s).then(n, r);
        }
        function u(e, t) {
            var o = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), o.push.apply(o, n);
            }
            return o;
        }
        var d = {
            name: "my-dnorder",
            components: {
                bkB: function() {
                    o.e("components/common/block-b").then(function() {
                        return resolve(o("0c75"));
                    }.bind(null, o)).catch(o.oe);
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
                    kcstateArr: [ "待付款", "待接单", "已关闭", "制作中", "已完成" ],
                    ztstateArr: [ "" ],
                    stime: ""
                };
            },
            mixins: [ r.utilMixins ],
            computed: function(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? u(Object(c), !0).forEach(function(t) {
                        var e, o, n;
                        e = r, n = c[o = t], o in e ? Object.defineProperty(e, o, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[o] = n;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : u(Object(c)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(c, t));
                    });
                }
                return r;
            }({}, (0, n.mapState)("dndc", [ "dndcConfig" ]), {
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

                      case 2:
                        t = "/yb_cy/inshop/syorder-dl?id=" + this.co.id;
                        break;

                      case 4:
                        t = "/yb_cy/inshop/ffmode/order-dl?id=" + this.co.id;
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
                    return 1 == this.otype ? this.stateArr[+this.co.state] : 2 == this.otype ? "已完成" : 4 == this.otype ? this.kcstateArr[+this.co.state - 1] : void 0;
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
                    var i, o = this;
                    if (1 == this.co.state) {
                        var n = this.dateToTime(), r = +t + 60 * this.dndcConfig.waitTime;
                        if (n < r) {
                            var e = a.default.countDownTime(r - n);
                            this.stime = "，剩余 ".concat(e[2], ":").concat(e[3]), this.dsq = setInterval((i = c.default.mark(function t() {
                                var e;
                                return c.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        (r -= 1) == n && (clearInterval(o.dsq), o.$emit("operation", {
                                            t: "qxdd",
                                            co: o.co
                                        })), e = a.default.countDownTime(r - n), o.stime = "，剩余 ".concat(e[2], ":").concat(e[3]);

                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            }), function() {
                                var t = this, a = arguments;
                                return new Promise(function(e, o) {
                                    var n = i.apply(t, a);
                                    function r(t) {
                                        s(n, e, o, r, c, "next", t);
                                    }
                                    function c(t) {
                                        s(n, e, o, r, c, "throw", t);
                                    }
                                    r(void 0);
                                });
                            }), 1e3);
                        }
                    }
                }
            }
        };
        e.default = d;
    },
    "1f6c": function(t, e, o) {
        var n = o("3d1f");
        o.n(n).a;
    },
    "22d6": function(t, e, o) {
        o.r(e);
        var n = o("187b"), r = o.n(n);
        for (var c in n) "default" !== c && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(c);
        e.default = r.a;
    },
    "29a2": function(t, e, o) {
        o.r(e);
        var n = o("a390"), r = o("22d6");
        for (var c in r) "default" !== c && function(t) {
            o.d(e, t, function() {
                return r[t];
            });
        }(c);
        o("1f6c");
        var a = o("f0c5"), i = Object(a.a)(r.default, n.b, n.c, !1, null, "21f9eede", null, !1, n.a, void 0);
        e.default = i.exports;
    },
    "3d1f": function(t, e, o) {},
    a390: function(t, e, o) {
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.stateColor()), o = t.getState(), n = t.timeToDate(t.co.createdAt), r = t.stateColor(), c = t.getState(), a = t.timeToDate(t.co.createdAt), i = t.stateColor(), s = t.getState(), u = t.timeToDate(t.co.createdAt);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: o,
                    m2: n,
                    m3: r,
                    m4: c,
                    m5: a,
                    m6: i,
                    m7: s,
                    m8: u
                }
            });
        }, r = [];
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return r;
        }), o.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/order/my-dnorder-create-component", {
    "components/order/my-dnorder-create-component": function(t, e, o) {
        o("543d").createComponent(o("29a2"));
    }
}, [ [ "components/order/my-dnorder-create-component" ] ] ]);