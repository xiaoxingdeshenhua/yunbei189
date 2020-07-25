(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/order/order-dl" ], {
    "198e": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("80fc")).default);
        }).call(this, n("543d").createPage);
    },
    "4fb6": function(e, t, n) {},
    "70f0": function(e, t, n) {
        var o = function() {
            var r = this, e = (r.$createElement, r._self._c, r.timeToDate(r.info.serviceTime, "yyyy-MM-dd")), t = r.__map(r.info.goods, function(e, t) {
                var n = r.itemTotal(e), o = r.getJldata(e.material);
                return {
                    $orig: r.__get_orig(e),
                    m1: n,
                    m2: o
                };
            }), n = r.timeToDate(r.info.serviceTime), o = r.timeToDate(r.info.serviceTime), i = r.timeToDate(r.info.createdAt), a = r.payName(r.info.payMode), c = {
                color: r.tColor
            };
            r._isMounted || (r.e0 = function(e) {
                return r.util.makeTel(r.info.otherInfo.riderTel);
            }, r.e1 = function(e) {
                return r.util.makeTel(r.info.storeTel);
            }, r.e2 = function(e) {
                return r.util.makeTel(r.info.storeTel);
            }, r.e3 = function(e) {
                return r.util.fz(r.info.outTradeNo);
            }, r.e4 = function(e) {
                r.showRed = !1;
            }), r.$mp.data = Object.assign({}, {
                $root: {
                    m0: e,
                    l0: t,
                    m3: n,
                    m4: o,
                    m5: i,
                    m6: a,
                    a0: c
                }
            });
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    "7bb9": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = c(n("4795")), o = n("2f62"), i = n("c1ef"), a = c(n("6f73"));
        function c(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s(e, t, n, o, r, i, a) {
            try {
                var c = e[i](a), s = c.value;
            } catch (e) {
                return void n(e);
            }
            c.done ? t(s) : Promise.resolve(s).then(o, r);
        }
        function u(c) {
            return function() {
                var e = this, a = arguments;
                return new Promise(function(t, n) {
                    var o = c.apply(e, a);
                    function r(e) {
                        s(o, t, n, r, i, "next", e);
                    }
                    function i(e) {
                        s(o, t, n, r, i, "throw", e);
                    }
                    r(void 0);
                });
            };
        }
        function f(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        var d = {
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
                },
                mgPopup: function() {
                    n.e("components/common/popup").then(function() {
                        return resolve(n("da89"));
                    }.bind(null, n)).catch(n.oe);
                },
                sqBtn: function() {
                    n.e("components/common/sq-btn").then(function() {
                        return resolve(n("0df4"));
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
                    showRed: !1,
                    hbId: ""
                };
            },
            onLoad: function(e) {
                this.util.setNT("订单详情"), this.orderId = e.id, this.getInfo();
            },
            mixins: [ i.utilMixins ],
            computed: function(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(i), !0).forEach(function(e) {
                        var t, n, o;
                        t = r, o = i[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return r;
            }({}, (0, o.mapState)({
                orderset: function(e) {
                    return e.config.orderset || {};
                }
            }), {
                orderState: function() {
                    var e = "", t = "", n = "";
                    switch (+this.info.state) {
                      case 1:
                        e = "等待支付", t = "请尽快支付";
                        break;

                      case 2:
                        e = "等待商家接单", t = "请耐心等待商家接单";
                        break;

                      case 3:
                        e = "商家已接单", t = 1 != this.info.deliveryMode ? "请耐心等待配送" : "请尽快到店自取";
                        break;

                      case 4:
                        1 != this.info.deliveryMode ? (e = "订单配送中", t = "正在配送中", n = "".concat(this.info.deliveryModeName)) : (e = "待取货", 
                        t = "请您尽快到店取货", n = "取货码:".concat(this.info.selfCode));
                        break;

                      case 5:
                      case 6:
                        e = "订单已完成", t = "感谢您对我们的信任，期待再次光临";
                        break;

                      case 7:
                        e = "订单已取消", t = "感谢您对我们的信任，期待再次光临";
                        break;

                      case 8:
                        e = "商家拒单", t = "非常抱歉！感谢您对我们的信任，期待再次光临";
                        break;

                      case 9:
                        e = "申请退款中", t = "请耐心等待商家处理";
                        break;

                      case 10:
                        e = "订单已退款", t = "感谢您对我们的信任，期待再次光临";
                        break;

                      case 11:
                        e = "订单退款拒绝", t = "感谢您对我们的信任，如有疑问请联系商家";
                    }
                    return {
                        str1: e,
                        str2: t,
                        str3: n
                    };
                },
                zqmArr: function() {
                    return console.log(this.info.selfCode && this.info.selfCode.split("")), this.info.selfCode && this.info.selfCode.split("");
                },
                sl: function() {
                    return this.info.symbol || this.system.symbol;
                }
            }),
            methods: {
                getInfo: function() {
                    var o = this;
                    return u(r.default.mark(function e() {
                        var t, n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.util.request({
                                    url: o.api.OrderInfo,
                                    mask: "加载中",
                                    data: {
                                        orderId: o.orderId
                                    }
                                });

                              case 2:
                                t = e.sent, (n = t.data) && (o.getisPop(), o.getConfig(), 1 == (o.info = n).state && o.djs(n.createdAt), 
                                4 == n.state && 2 < n.deliveryMode && (o.latitude = n.userLat, o.longitude = n.userLng, 
                                o.covers = [ {
                                    latitude: +n.userLat,
                                    longitude: +n.userLng,
                                    iconPath: "",
                                    width: "25",
                                    height: "25",
                                    callout: {
                                        content: "".concat(n.receivedName, "(").concat(n.sex, ")"),
                                        color: "#333",
                                        fontSize: 12,
                                        borderRadius: 10,
                                        bgColor: "#fff",
                                        padding: 5,
                                        display: "ALWAYS",
                                        textAlign: "center"
                                    }
                                }, {
                                    latitude: +n.storeLat,
                                    longitude: +n.storeLng,
                                    iconPath: o.getImgS(n.storeIcon),
                                    width: "25",
                                    height: "25",
                                    callout: {
                                        content: n.storeName,
                                        color: "#333",
                                        fontSize: 12,
                                        borderRadius: 10,
                                        bgColor: "#fff",
                                        padding: 5,
                                        display: "ALWAYS",
                                        textAlign: "center"
                                    }
                                } ], n.otherInfo && n.otherInfo.riderLat && (o.covers = o.covers.concat([ {
                                    latitude: +n.otherInfo.riderLat,
                                    longitude: +n.otherInfo.riderLat,
                                    iconPath: "/static/qs.png",
                                    width: "25",
                                    height: "25",
                                    callout: {
                                        content: n.otherInfo.riderName,
                                        color: "#333",
                                        fontSize: 12,
                                        borderRadius: 10,
                                        bgColor: "#fff",
                                        padding: 5,
                                        display: "ALWAYS",
                                        textAlign: "center"
                                    }
                                } ]))));

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                itemTotal: function(e) {
                    var t = +(0 < e.vipMoney && e.vipMoney < e.money && e.vipMoney || e.money);
                    return e.material && e.material.length && e.material.forEach(function(e) {
                        t += e.number * e.outPrice;
                    }), +(t * e.num).toFixed(2);
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
                        var n = this.dateToTime(), o = +e + 60 * this.orderset.cancel;
                        n < o && (this.stime = a.default.countDownTime(o - n), this.dsq = setInterval(u(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    (o -= 1) == n && (clearInterval(t.dsq), t.go({
                                        t: 4
                                    })), t.stime = a.default.countDownTime(o - n);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        })), 1e3));
                    }
                },
                psxq: function() {},
                ckwz: function() {
                    this.util.ckWz({
                        lat: this.info.storeLat,
                        lng: this.info.storeLng,
                        name: this.info.storeName,
                        address: this.info.storeAddress
                    });
                },
                getisPop: function() {
                    var o = this;
                    return u(r.default.mark(function e() {
                        var t, n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.util.request({
                                    url: o.api.bonusPackage_isPop,
                                    data: {
                                        orderId: o.orderId
                                    }
                                });

                              case 2:
                                t = e.sent, n = t.data, o.hbId = n;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                getConfig: function() {
                    var o = this;
                    return u(r.default.mark(function e() {
                        var t, n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.util.request({
                                    url: o.api.config,
                                    data: {
                                        ident: "divideset"
                                    }
                                });

                              case 2:
                                t = e.sent, n = t.data, o.config = n;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                showhb: function() {
                    this.showRed = !0;
                },
                fhb: function() {
                    this.showRed = !1;
                }
            },
            onUnload: function() {
                this.dsq && clearInterval(this.dsq);
            },
            onShareAppMessage: function() {
                var e = "yb_cy/order/gfhb?id=".concat(this.hbId, "&userId=").concat(this.uId);
                return {
                    title: this.config.redName,
                    imageUrl: this.getSingleImg(this.config.icon),
                    path: "/" + e
                };
            }
        };
        t.default = d;
    },
    "80fc": function(e, t, n) {
        n.r(t);
        var o = n("70f0"), r = n("cf79");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        n("9df3");
        var a = n("f0c5"), c = Object(a.a)(r.default, o.b, o.c, !1, null, "8d40f356", null, !1, o.a, void 0);
        t.default = c.exports;
    },
    "9df3": function(e, t, n) {
        var o = n("4fb6");
        n.n(o).a;
    },
    cf79: function(e, t, n) {
        n.r(t);
        var o = n("7bb9"), r = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = r.a;
    }
}, [ [ "198e", "common/runtime", "common/vendor" ] ] ]);