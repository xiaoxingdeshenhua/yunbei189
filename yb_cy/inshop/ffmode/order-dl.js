(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/ffmode/order-dl" ], {
    "33a1": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("b5c0")).default);
        }).call(this, n("543d").createPage);
    },
    "4b19": function(e, t, n) {
        var r = function() {
            var r = this, e = (r.$createElement, r._self._c, r.__map(r.info.goods, function(e, t) {
                var n = r.itemTotal(e);
                return {
                    $orig: r.__get_orig(e),
                    m0: n
                };
            })), t = r.timeToDate(r.info.createdAt), n = r.payName(r.info.payMode);
            r._isMounted || (r.e0 = function(e) {
                return r.util.makeTel(r.info.storeTel);
            }, r.e1 = function(e) {
                return r.util.fz(r.info.outTradeNo);
            }), r.$mp.data = Object.assign({}, {
                $root: {
                    l0: e,
                    m1: t,
                    m2: n
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "9e7b": function(e, t, n) {
        var r = n("ab37");
        n.n(r).a;
    },
    ab37: function(e, t, n) {},
    b5c0: function(e, t, n) {
        n.r(t);
        var r = n("4b19"), o = n("dd01");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("9e7b");
        var a = n("f0c5"), c = Object(a.a)(o.default, r.b, r.c, !1, null, "37076ad6", null, !1, r.a, void 0);
        t.default = c.exports;
    },
    c2bc: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = c(n("4795")), r = n("2f62"), i = n("c1ef"), a = c(n("6f73"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function u(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function f(o) {
            for (var e = 1; e < arguments.length; e++) {
                var i = null != arguments[e] ? arguments[e] : {};
                e % 2 ? u(Object(i), !0).forEach(function(e) {
                    var t, n, r;
                    t = o, r = i[n = e], n in t ? Object.defineProperty(t, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = r;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : u(Object(i)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                });
            }
            return o;
        }
        function s(e, t, n, r, o, i, a) {
            try {
                var c = e[i](a), u = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        function d(c) {
            return function() {
                var e = this, a = arguments;
                return new Promise(function(t, n) {
                    var r = c.apply(e, a);
                    function o(e) {
                        s(r, t, n, o, i, "next", e);
                    }
                    function i(e) {
                        s(r, t, n, o, i, "throw", e);
                    }
                    o(void 0);
                });
            };
        }
        var l = {
            name: "order-dl",
            components: {
                bkB: function() {
                    n.e("components/common/block-b").then(function() {
                        return resolve(n("0c75"));
                    }.bind(null, n)).catch(n.oe);
                },
                MgCell: function() {
                    n.e("components/common/mg-cell").then(function() {
                        return resolve(n("ef6e"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    info: {},
                    stime: "",
                    latitude: "",
                    longitude: "",
                    covers: [],
                    line: [],
                    sjxx: {},
                    loading: !1
                };
            },
            onLoad: function(t) {
                var n = this;
                return d(o.default.mark(function e() {
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return n.util.setNT("订单详情"), n.orderId = t.id, e.next = 4, n.getDndcConfig();

                          case 4:
                            n.getInfo();

                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            mixins: [ i.utilMixins ],
            computed: f({}, (0, r.mapState)("dndc", [ "dndcConfig" ]), {
                orderState: function() {
                    var e = "", t = "";
                    switch (+this.info.state) {
                      case 1:
                        e = "待支付", t = "请尽快支付";
                        break;

                      case 2:
                        e = "待接单", t = "请等待商家待接单";
                        break;

                      case 3:
                        e = "已关闭", t = "订单已关闭";
                        break;

                      case 4:
                        e = "订单制作中", t = "请耐心等待商家备餐";
                        break;

                      case 5:
                        e = "订单已完成", t = "感谢您对我们的信任，期待再次光临";
                    }
                    return {
                        str1: e,
                        str2: t,
                        str3: ""
                    };
                },
                zqmArr: function() {
                    return this.info.selfCode && this.info.selfCode.split("");
                },
                sl: function() {
                    return this.info.symbol || this.system.symbol;
                }
            }),
            methods: f({}, (0, r.mapActions)("dndc", [ "getDndcConfig" ]), {
                getInfo: function() {
                    var r = this;
                    return d(o.default.mark(function e() {
                        var t, n;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, r.util.request({
                                    url: r.api.InOrderInfo,
                                    mask: "加载中",
                                    data: {
                                        orderId: r.orderId
                                    }
                                });

                              case 2:
                                t = e.sent, (n = t.data) && (1 == (r.info = n).state && r.djs(n.createdAt));

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                itemTotal: function(e) {
                    return +(+(0 < e.vipMoney && e.vipMoney < e.money && e.vipMoney || e.money) * e.num).toFixed(2);
                },
                getJldata: function(e) {
                    if (e) {
                        var t = "";
                        return e.forEach(function(e) {
                            t += e.name + ",";
                        }), t.substr(0, t.length - 1);
                    }
                },
                djs: function(e) {
                    var t = this;
                    if (1 == this.info.state) {
                        var n = this.dateToTime(), r = +e + 60 * this.dndcConfig.waitTime + 2;
                        n < r && (this.stime = a.default.countDownTime(r - n), this.dsq = setInterval(d(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    (r -= 1) == n && (clearInterval(t.dsq), t.util.message("加载中", 2), a.default.stfn(function() {
                                        t.go({
                                            t: 5,
                                            url: "/yb_cy/inshop/order?idx=3"
                                        });
                                    })), t.stime = a.default.countDownTime(r - n);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        })), 1e3));
                    }
                }
            }),
            onUnload: function() {
                this.dsq && clearInterval(this.dsq);
            }
        };
        t.default = l;
    },
    dd01: function(e, t, n) {
        n.r(t);
        var r = n("c2bc"), o = n.n(r);
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = o.a;
    }
}, [ [ "33a1", "common/runtime", "common/vendor" ] ] ]);