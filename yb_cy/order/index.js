(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/order/index" ], {
    "1f2d": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("5fdd")).default);
        }).call(this, n("543d").createPage);
    },
    "529b": function(e, t, n) {
        var r = n("dec7");
        n.n(r).a;
    },
    "5fdd": function(e, t, n) {
        n.r(t);
        var r = n("ec3c"), o = n("7c89");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("529b");
        var c = n("f0c5"), u = Object(c.a)(o.default, r.b, r.c, !1, null, "0b768a24", null, !1, r.a, void 0);
        t.default = u.exports;
    },
    "7c89": function(e, t, n) {
        n.r(t);
        var r = n("f56c"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    dec7: function(e, t, n) {},
    ec3c: function(e, t, n) {
        var r = function() {
            var t = this, e = (t.$createElement, t._self._c, t.cTR(t.tColor));
            t._isMounted || (t.e0 = function(e) {
                t.showCoupon = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    m0: e
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    f56c: function(e, s, d) {
        (function(a) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var e, c = (e = d("4795")) && e.__esModule ? e : {
                default: e
            }, t = d("2f62");
            function n(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function r(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach(function(e) {
                        var t, n, r;
                        t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return o;
            }
            function i(e, t, n, r, o, a, c) {
                try {
                    var u = e[a](c), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(i) : Promise.resolve(i).then(r, o);
            }
            function u(u) {
                return function() {
                    var e = this, c = arguments;
                    return new Promise(function(t, n) {
                        var r = u.apply(e, c);
                        function o(e) {
                            i(r, t, n, o, a, "next", e);
                        }
                        function a(e) {
                            i(r, t, n, o, a, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                name: "orderIndex",
                components: {
                    navTab: function() {
                        d.e("components/swiper/nav-tab").then(function() {
                            return resolve(d("2040"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    myOrder: function() {
                        d.e("components/order/my-order").then(function() {
                            return resolve(d("ca18"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    jzz: function() {
                        d.e("components/common/jzz").then(function() {
                            return resolve(d("707a"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    TabBar: function() {
                        d.e("components/common/tabbar").then(function() {
                            return resolve(d("f13c"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgModal: function() {
                        d.e("components/common/modal").then(function() {
                            return resolve(d("ee48"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgCoupon: function() {
                        Promise.all([ d.e("common/vendor"), d.e("components/common/mg-coupon") ]).then(function() {
                            return resolve(d("ac48"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    MgCell: function() {
                        d.e("components/common/mg-cell").then(function() {
                            return resolve(d("ef6e"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgPopup: function() {
                        d.e("components/common/popup").then(function() {
                            return resolve(d("da89"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgRadio: function() {
                        d.e("components/form/mg-radio").then(function() {
                            return resolve(d("4b28"));
                        }.bind(null, d)).catch(d.oe);
                    }
                },
                data: function() {
                    return {
                        aIdx: 0,
                        tabs: [ {
                            name: "全部订单"
                        }, {
                            name: "待付款"
                        }, {
                            name: "待评价"
                        }, {
                            name: "退款/售后"
                        } ],
                        dataList: [],
                        isget: !1,
                        mygd: !1,
                        params: {
                            userId: "",
                            size: 10,
                            page: 1,
                            state: ""
                        },
                        tcCoupon: {},
                        showCoupon: !1,
                        showCancel: !1,
                        yyArr: [],
                        yyradio: ""
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return u(c.default.mark(function e() {
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n.getSystem(), n.util.setNT("我的订单"), e.next = 4, n.getLoginInfo();

                              case 4:
                                return n.params.userId = n.user.userId || "", n.aIdx = +t.idx || 0, e.next = 8, 
                                n.getConfig({
                                    key: "orderset",
                                    api: "config",
                                    params: {
                                        ident: "orderset"
                                    }
                                });

                              case 8:
                                n.changeTab(n.aIdx), n.util.request({
                                    url: n.api.Lable,
                                    data: {
                                        type: 2
                                    }
                                }).then(function(e) {
                                    e.data.forEach(function(e) {
                                        e.value = e.id;
                                    }), n.qxyyArr = e.data.concat([ {
                                        value: -1,
                                        name: "其他原因"
                                    } ]);
                                }), n.util.request({
                                    url: n.api.Lable,
                                    data: {
                                        type: 3
                                    }
                                }).then(function(e) {
                                    e.data.forEach(function(e) {
                                        e.value = e.id;
                                    }), n.tkyyArr = e.data.concat([ {
                                        value: -1,
                                        name: "其他原因"
                                    } ]);
                                });

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onReachBottom: function() {
                    !this.mygd && this.isget && (this.isget = !1, this.getList()), console.log("onReachBottom");
                },
                onShow: function() {
                    var o = this;
                    return u(c.default.mark(function e() {
                        var t, n, r;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!(t = a.getStorageSync("payedCoupon"))) {
                                    e.next = 10;
                                    break;
                                }
                                return e.next = 4, o.util.request({
                                    url: o.api.redbag,
                                    method: "POST",
                                    mask: 1,
                                    data: {
                                        orderId: t.orderId
                                    }
                                });

                              case 4:
                                n = e.sent, r = n.data, o.tcCoupon = r || {}, o.tcCoupon.paymoney = t.paymoney, 
                                a.setStorageSync("payedCoupon", !1), o.tcCoupon.couponInfo && o.tcCoupon.couponInfo.length ? setTimeout(function() {
                                    o.showCoupon = !0, setTimeout(function() {
                                        o.go({
                                            t: 1,
                                            url: "/yb_cy/order/order-dl?id=" + t.orderId
                                        });
                                    }, 1e3);
                                }, 100) : o.go({
                                    t: 1,
                                    url: "/yb_cy/order/order-dl?id=" + t.orderId
                                });

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ d("c1ef").utilMixins ],
                computed: r({}, (0, t.mapState)("dndc", [ "dcConfig" ])),
                methods: r({}, (0, t.mapActions)([ "getConfig" ]), {}, (0, t.mapActions)("dndc", [ "getPayConfig" ]), {
                    ljck: function() {
                        this.showCoupon = !1, this.go({
                            t: 1,
                            url: "/yb_cy/my/coupon/my"
                        });
                    },
                    paySuccess: function() {
                        this.refresh(), console.log("paySuccess");
                    },
                    qdyy: function() {
                        var t = this;
                        this.showCancel = !1, "qxdd" == this.operationt ? (this.qxyy = this.qxyyArr.find(function(e) {
                            return e.value == t.yyradio;
                        }).name, this.qxdd(1)) : (this.qxyy = this.tkyyArr.find(function(e) {
                            return e.value == t.yyradio;
                        }).name, this.operation({
                            t: "tk",
                            co: this.orderInfo
                        }));
                    },
                    operation: function(n) {
                        var r = this;
                        return u(c.default.mark(function e() {
                            var t;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    r.orderInfo = n.co, r.operationt = n.t, t = {}, e.t0 = n.t, e.next = "qxdd" === e.t0 ? 6 : "sqtk" === e.t0 ? 15 : "tk" === e.t0 ? 19 : "cd" === e.t0 ? 23 : "qrsh" === e.t0 ? 25 : "scdd" === e.t0 ? 27 : "lxsj" === e.t0 ? 29 : "pj" === e.t0 ? 30 : "ljzf" === e.t0 ? 31 : 33;
                                    break;

                                  case 6:
                                    if (!n.tip) {
                                        e.next = 13;
                                        break;
                                    }
                                    return r.yyradio = "", r.yyArr = r.qxyyArr, r.showCancel = !0, e.abrupt("return");

                                  case 13:
                                    return e.abrupt("return", r.qxdd());

                                  case 14:
                                    return e.abrupt("return");

                                  case 15:
                                    return r.yyradio = "", r.yyArr = r.tkyyArr, r.showCancel = !0, e.abrupt("return");

                                  case 19:
                                    return e.next = 21, r.requestSM("refund");

                                  case 21:
                                    return t = {
                                        title: "您确认取消订单吗？",
                                        url: "OrderRefund",
                                        params: {
                                            orderId: n.co.id,
                                            note: r.qxyy
                                        }
                                    }, e.abrupt("break", 33);

                                  case 23:
                                    return t = {
                                        title: "您确认催单吗？",
                                        url: "Reminder",
                                        params: {
                                            userId: r.user.userId,
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 33);

                                  case 25:
                                    return t = {
                                        title: "您确认已收到货吗？",
                                        url: "Receiving",
                                        params: {
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 33);

                                  case 27:
                                    return t = {
                                        title: "您确认删除订单吗？",
                                        url: "OrderDel",
                                        params: {
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 33);

                                  case 29:
                                    return e.abrupt("return", r.util.makeTel(n.co.storeTel));

                                  case 30:
                                    return e.abrupt("return", r.go({
                                        t: 1,
                                        url: "/yb_cy/order/pl?orderId=" + n.co.id + "&storeName=" + n.co.storeName
                                    }));

                                  case 31:
                                    return r.go({
                                        t: 1,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: r.orderInfo.id,
                                            orderType: 1,
                                            info: {
                                                money: r.orderInfo.money,
                                                type: "下单支付",
                                                cancel: 1,
                                                go: {
                                                    t: 4
                                                }
                                            }
                                        }))
                                    }), e.abrupt("return");

                                  case 33:
                                    return console.log(n, t), e.prev = 34, e.next = 37, r.util.modal(t.title);

                                  case 37:
                                    e.next = 42;
                                    break;

                                  case 39:
                                    return e.prev = 39, e.t1 = e.catch(34), e.abrupt("return");

                                  case 42:
                                    return e.next = 44, r.util.request({
                                        url: r.api[t.url],
                                        method: "POST",
                                        mask: 1,
                                        data: t.params
                                    });

                                  case 44:
                                    e.sent && (r.refresh(), r.util.message("操作成功", 1));

                                  case 46:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 34, 39 ] ]);
                        }))();
                    },
                    qxdd: function(t) {
                        var n = this;
                        return u(c.default.mark(function e() {
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!t) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.prev = 1, e.next = 4, n.util.modal("您确认取消订单吗？");

                                  case 4:
                                    e.next = 9;
                                    break;

                                  case 6:
                                    return e.prev = 6, e.t0 = e.catch(1), e.abrupt("return");

                                  case 9:
                                    return e.next = 11, n.util.request({
                                        url: n.api.OrderCancel,
                                        method: "POST",
                                        mask: "取消订单中",
                                        data: {
                                            orderId: n.orderInfo.id,
                                            note: t ? n.qxyy : ""
                                        }
                                    });

                                  case 11:
                                    e.sent && (n.refresh(), n.util.message("操作成功", 1));

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 1, 6 ] ]);
                        }))();
                    },
                    refresh: function() {
                        this.changeTab(this.aIdx);
                    },
                    changeTab: function(e) {
                        this.isget = this.mygd = !1, this.params.page = 1;
                        var t = "";
                        switch (e) {
                          case 0:
                            t = "";
                            break;

                          case 1:
                            t = "1";
                            break;

                          case 2:
                            t = "5";
                            break;

                          case 3:
                            t = "8,9,10,11";
                        }
                        this.params.state = t, this.dataList = [], this.getList();
                    },
                    getList: function() {
                        var r = this;
                        return u(c.default.mark(function e() {
                            var t, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.MyOrder,
                                        method: "POST",
                                        data: r.params
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, r.dataList = r.dataList.concat(n), r.isget = !0, r.mygd = r.params.size > n.length, 
                                    r.params.page++;

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                })
            };
            s.default = o;
        }).call(this, d("543d").default);
    }
}, [ [ "1f2d", "common/runtime", "common/vendor" ] ] ]);