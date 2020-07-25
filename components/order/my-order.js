(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/order/my-order" ], {
    "26ea": function(t, e, n) {
        var r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.stateColor()), n = t.getState(), r = t.timeToDate(t.co.createdAt);
            t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    m1: n,
                    m2: r
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    a6aa: function(t, e, n) {
        n.r(e);
        var r = n("b557"), o = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = o.a;
    },
    b557: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var c = i(n("4795")), r = n("2f62"), o = n("c1ef"), a = i(n("6f73"));
        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e, n, r, o, c, a) {
            try {
                var i = t[c](a), u = i.value;
            } catch (t) {
                return void n(t);
            }
            i.done ? e(u) : Promise.resolve(u).then(r, o);
        }
        function s(i) {
            return function() {
                var t = this, a = arguments;
                return new Promise(function(e, n) {
                    var r = i.apply(t, a);
                    function o(t) {
                        u(r, e, n, o, c, "next", t);
                    }
                    function c(t) {
                        u(r, e, n, o, c, "throw", t);
                    }
                    o(void 0);
                });
            };
        }
        function f(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        var d = {
            name: "tabbar",
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
                }
            },
            data: function() {
                return {
                    stateArr: [ "", "等待支付", "已付款", "已接单", "配送中", "已完成", "已评价", "已取消", "拒单", "待商家处理", "退款已通过", "退款已拒绝" ],
                    ztstateArr: [ "", "等待支付", "已付款", "已接单", "待取货", "已完成", "已评价", "已取消", "拒单", "待商家处理", "退款已通过", "退款已拒绝" ],
                    stime: ""
                };
            },
            mixins: [ o.utilMixins ],
            computed: function(o) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(c), !0).forEach(function(t) {
                        var e, n, r;
                        e = o, r = c[n = t], n in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : f(Object(c)).forEach(function(t) {
                        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
                    });
                }
                return o;
            }({}, (0, r.mapState)({
                orderset: function(t) {
                    return t.config.orderset || {};
                }
            })),
            methods: {
                onClick: function() {
                    this.$emit("click");
                },
                getState: function() {
                    return 1 != this.co.deliveryMode ? this.stateArr[+this.co.state] : this.ztstateArr[+this.co.state];
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
                        t = "#333";
                    }
                    return t;
                },
                djs: function(t) {
                    var n = this;
                    if (1 == this.co.state) {
                        var r = this.dateToTime(), o = +t + 60 * this.orderset.cancel;
                        if (r < o) {
                            var e = a.default.countDownTime(o - r);
                            this.stime = "，剩余 ".concat(e[2], ":").concat(e[3]), this.dsq = setInterval(s(c.default.mark(function t() {
                                var e;
                                return c.default.wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                      case 0:
                                        (o -= 1) == r && (clearInterval(n.dsq), n.$emit("operation", {
                                            t: "qxdd",
                                            co: n.co
                                        })), e = a.default.countDownTime(o - r), n.stime = "，剩余 ".concat(e[2], ":").concat(e[3]);

                                      case 4:
                                      case "end":
                                        return t.stop();
                                    }
                                }, t);
                            })), 1e3);
                        }
                    }
                }
            },
            created: function() {
                var e = this;
                return s(c.default.mark(function t() {
                    return c.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.djs(e.co.createdAt);

                          case 1:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            destroyed: function() {
                clearInterval(this.dsq);
            }
        };
        e.default = d;
    },
    ca18: function(t, e, n) {
        n.r(e);
        var r = n("26ea"), o = n("a6aa");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        var a = n("f0c5"), i = Object(a.a)(o.default, r.b, r.c, !1, null, "bba07f68", null, !1, r.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/order/my-order-create-component", {
    "components/order/my-order-create-component": function(t, e, n) {
        n("543d").createComponent(n("ca18"));
    }
}, [ [ "components/order/my-order-create-component" ] ] ]);