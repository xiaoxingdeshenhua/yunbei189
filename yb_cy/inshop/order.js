(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/order" ], {
    7780: function(e, t, n) {
        n.r(t);
        var r = n("cdd9"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    8433: function(e, t, n) {},
    "94bf": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("d472")).default);
        }).call(this, n("543d").createPage);
    },
    cb71: function(e, t, n) {
        var r = n("8433");
        n.n(r).a;
    },
    cdd9: function(e, i, d) {
        (function(a) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var e, o = (e = d("4795")) && e.__esModule ? e : {
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
            function c(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(o), !0).forEach(function(e) {
                        var t, n, r;
                        t = a, r = o[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return a;
            }
            function s(e, t, n, r, a, o, c) {
                try {
                    var u = e[o](c), s = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(s) : Promise.resolve(s).then(r, a);
            }
            function u(u) {
                return function() {
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
                };
            }
            var r = {
                name: "orderIndex",
                components: {
                    navTab: function() {
                        d.e("components/swiper/nav-tab").then(function() {
                            return resolve(d("2040"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    myOrder: function() {
                        d.e("components/order/my-dnorder").then(function() {
                            return resolve(d("29a2"));
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
                    mgCell: function() {
                        d.e("components/common/mg-cell").then(function() {
                            return resolve(d("ef6e"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    bkB: function() {
                        d.e("components/common/block-b").then(function() {
                            return resolve(d("0c75"));
                        }.bind(null, d)).catch(d.oe);
                    }
                },
                data: function() {
                    return {
                        aIdx: 0,
                        tabs: [ {
                            name: "堂食"
                        }, {
                            name: "收银"
                        } ],
                        labelArr: [],
                        laIdx: 0,
                        dataList: [],
                        isget: !1,
                        mygd: !1,
                        params: {
                            userId: "",
                            size: 10,
                            page: 1
                        },
                        iparams: {
                            state: ""
                        },
                        tcCoupon: {},
                        showCoupon: !1
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return u(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n.getSystem({
                                    nosetNB: 1
                                }), n.util.setNT("堂食订单"), n.getDndcConfig(), e.next = 5, n.getLoginInfo();

                              case 5:
                                n.params.userId = n.uId, n.aIdx = +t.idx || 0, n.changeTab(n.aIdx);

                              case 8:
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
                    var r = this;
                    return u(o.default.mark(function e() {
                        var t, n;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (!a.getStorageSync("payedCoupon")) {
                                    e.next = 9;
                                    break;
                                }
                                return e.next = 3, r.util.request({
                                    url: r.api.redbag,
                                    method: "POST",
                                    mask: 1,
                                    data: {
                                        orderId: a.getStorageSync("payedCoupon").orderId
                                    }
                                });

                              case 3:
                                t = e.sent, n = t.data, r.tcCoupon = n || {}, r.tcCoupon.paymoney = a.getStorageSync("payedCoupon").paymoney, 
                                a.setStorageSync("payedCoupon", !1), r.tcCoupon.couponInfo && r.tcCoupon.couponInfo.length && setTimeout(function() {
                                    r.showCoupon = !0;
                                }, 100);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ d("c1ef").utilMixins ],
                computed: c({}, (0, t.mapState)("dndc", [ "dcConfig" ]), {
                    hasLabel: function() {
                        return 0 < this.labelArr.length;
                    }
                }),
                methods: c({}, (0, t.mapActions)("dndc", [ "getPayConfig", "getDndcConfig" ]), {
                    ljck: function() {
                        this.showCoupon = !1, this.go({
                            t: 1,
                            url: "/yb_cy/my/coupon/my"
                        });
                    },
                    paySuccess: function() {
                        this.refresh(), console.log("paySuccess");
                    },
                    operation: function(n) {
                        var r = this;
                        return u(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    r.orderInfo = n.co, t = {}, e.t0 = n.t, e.next = "qxdd" === e.t0 ? 5 : "sqtk" === e.t0 ? 7 : "cd" === e.t0 ? 9 : "qrsh" === e.t0 ? 11 : "scdd" === e.t0 ? 13 : "lxsj" === e.t0 ? 15 : "pj" === e.t0 ? 16 : "ljzf" === e.t0 ? 17 : 19;
                                    break;

                                  case 5:
                                    return r.qxdd(n.tip), e.abrupt("return");

                                  case 7:
                                    return t = {
                                        title: "您确认申请退款吗？",
                                        url: "OrderRefund",
                                        params: {
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 19);

                                  case 9:
                                    return t = {
                                        title: "您确认催单吗？",
                                        url: "Reminder",
                                        params: {
                                            userId: r.user.userId,
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 19);

                                  case 11:
                                    return t = {
                                        title: "您确认已收到货吗？",
                                        url: "Receiving",
                                        params: {
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 19);

                                  case 13:
                                    return t = {
                                        title: "您确认删除订单吗？",
                                        url: "OrderDel",
                                        params: {
                                            orderId: n.co.id
                                        }
                                    }, e.abrupt("break", 19);

                                  case 15:
                                    return e.abrupt("return", r.util.makeTel(n.co.storeTel));

                                  case 16:
                                    return e.abrupt("return", r.util.message("功能持续完善中,敬请期待", 3));

                                  case 17:
                                    return r.go({
                                        t: 1,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: r.orderInfo.id,
                                            orderType: 5,
                                            userId: r.uId,
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

                                  case 19:
                                    return console.log(n, t), e.prev = 20, e.next = 23, r.util.modal(t.title);

                                  case 23:
                                    e.next = 28;
                                    break;

                                  case 25:
                                    return e.prev = 25, e.t1 = e.catch(20), e.abrupt("return");

                                  case 28:
                                    return e.next = 30, r.util.request({
                                        url: r.api[t.url],
                                        method: "POST",
                                        mask: 1,
                                        data: t.params
                                    });

                                  case 30:
                                    e.sent && (r.refresh(), r.util.message("操作成功", 1));

                                  case 32:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 20, 25 ] ]);
                        }))();
                    },
                    qxdd: function(t) {
                        var n = this;
                        return u(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (console.log("qxdd"), !t) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.prev = 2, e.next = 5, n.util.modal("您确认取消订单吗？");

                                  case 5:
                                    e.next = 10;
                                    break;

                                  case 7:
                                    return e.prev = 7, e.t0 = e.catch(2), e.abrupt("return");

                                  case 10:
                                    return e.next = 12, n.util.request({
                                        url: n.api.OrderCancel,
                                        method: "POST",
                                        mask: "取消订单中",
                                        data: {
                                            orderId: n.orderInfo.id
                                        }
                                    });

                                  case 12:
                                    e.sent && (n.refresh(), n.util.message("操作成功", 1));

                                  case 14:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 2, 7 ] ]);
                        }))();
                    },
                    refresh: function() {
                        this.changeTab(this.aIdx);
                    },
                    changeTab: function(e) {
                        switch (this.laIdx = 0, this.isget = this.mygd = !1, this.params.page = 1, this.params.size = 10, 
                        this.dataList = [], e) {
                          case 0:
                            this.labelArr = [ "全部", "待付款", "已支付", "已关闭" ], this.params.api = "MyInOrder", this.iparams = {
                                state: ""
                            };
                            break;

                          case 1:
                            this.labelArr = [], this.params.api = "CashierOrderList", this.iparams = {};
                        }
                        this.getList();
                    },
                    lTab: function(e) {
                        if (this.laIdx = e, this.isget = this.mygd = !1, this.params.page = 1, this.params.size = 10, 
                        this.dataList = [], 0 == this.aIdx) {
                            var t = "";
                            switch (e) {
                              case 0:
                                t = "";
                                break;

                              case 1:
                                t = "1";
                                break;

                              case 2:
                                t = "2";
                                break;

                              case 3:
                                t = "3";
                            }
                            this.iparams.state = t;
                        }
                        this.getList();
                    },
                    getList: function() {
                        var r = this;
                        return u(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api[r.params.api],
                                        data: c({}, r.params, {}, r.iparams)
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
            i.default = r;
        }).call(this, d("543d").default);
    },
    d472: function(e, t, n) {
        n.r(t);
        var r = n("efb5"), a = n("7780");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        n("cb71");
        var c = n("f0c5"), u = Object(c.a)(a.default, r.b, r.c, !1, null, "ef7c52c4", null, !1, r.a, void 0);
        t.default = u.exports;
    },
    efb5: function(e, t, n) {
        var r = function() {
            var t = this, e = (t.$createElement, t._self._c, {
                padding: "10rpx 30rpx",
                minWidth: "140rpx"
            }), n = t.cTR(t.tColor);
            t._isMounted || (t.e0 = function(e) {
                t.showCoupon = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    m0: n
                }
            });
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    }
}, [ [ "94bf", "common/runtime", "common/vendor" ] ] ]);