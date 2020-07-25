(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/order" ], {
    4146: function(e, t, r) {
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, {
                padding: "10rpx 30rpx",
                minWidth: "140rpx"
            }), r = t.cTR(t.tColor);
            t._isMounted || (t.e0 = function(e) {
                t.showCoupon = !1;
            }), t.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    m0: r
                }
            });
        }, a = [];
        r.d(t, "b", function() {
            return n;
        }), r.d(t, "c", function() {
            return a;
        }), r.d(t, "a", function() {});
    },
    "41e8": function(e, t, r) {
        var n = r("fee9");
        r.n(n).a;
    },
    7780: function(e, t, r) {
        r.r(t);
        var n = r("cdd9"), a = r.n(n);
        for (var o in n) "default" !== o && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(o);
        t.default = a.a;
    },
    "94bf": function(e, t, r) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            r("c27a"), t(r("66fd")), e(t(r("d472")).default);
        }).call(this, r("543d").createPage);
    },
    cdd9: function(e, t, r) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var n, o = (n = r("4795")) && n.__esModule ? n : {
            default: n
        }, a = r("2f62");
        function s(t, e) {
            var r = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(t);
                e && (n = n.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), r.push.apply(r, n);
            }
            return r;
        }
        function i(a) {
            for (var e = 1; e < arguments.length; e++) {
                var o = null != arguments[e] ? arguments[e] : {};
                e % 2 ? s(Object(o), !0).forEach(function(e) {
                    var t, r, n;
                    t = a, n = o[r = e], r in t ? Object.defineProperty(t, r, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[r] = n;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : s(Object(o)).forEach(function(e) {
                    Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                });
            }
            return a;
        }
        function c(e, t, r, n, a, o, s) {
            try {
                var i = e[o](s), c = i.value;
            } catch (e) {
                return void r(e);
            }
            i.done ? t(c) : Promise.resolve(c).then(n, a);
        }
        function u(i) {
            return function() {
                var e = this, s = arguments;
                return new Promise(function(t, r) {
                    var n = i.apply(e, s);
                    function a(e) {
                        c(n, t, r, a, o, "next", e);
                    }
                    function o(e) {
                        c(n, t, r, a, o, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var d = {
            name: "orderIndex",
            components: {
                navTab: function() {
                    r.e("components/swiper/nav-tab").then(function() {
                        return resolve(r("2040"));
                    }.bind(null, r)).catch(r.oe);
                },
                myOrder: function() {
                    r.e("components/order/my-dnorder").then(function() {
                        return resolve(r("29a2"));
                    }.bind(null, r)).catch(r.oe);
                },
                jzz: function() {
                    r.e("components/common/jzz").then(function() {
                        return resolve(r("707a"));
                    }.bind(null, r)).catch(r.oe);
                },
                TabBar: function() {
                    r.e("components/common/tabbar").then(function() {
                        return resolve(r("f13c"));
                    }.bind(null, r)).catch(r.oe);
                },
                mgModal: function() {
                    r.e("components/common/modal").then(function() {
                        return resolve(r("ee48"));
                    }.bind(null, r)).catch(r.oe);
                },
                mgCoupon: function() {
                    Promise.all([ r.e("common/vendor"), r.e("components/common/mg-coupon") ]).then(function() {
                        return resolve(r("ac48"));
                    }.bind(null, r)).catch(r.oe);
                },
                mgCell: function() {
                    r.e("components/common/mg-cell").then(function() {
                        return resolve(r("ef6e"));
                    }.bind(null, r)).catch(r.oe);
                },
                bkB: function() {
                    r.e("components/common/block-b").then(function() {
                        return resolve(r("0c75"));
                    }.bind(null, r)).catch(r.oe);
                }
            },
            data: function() {
                return {
                    aIdx: 0,
                    tabs: [],
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
            onLoad: function(n) {
                var a = this;
                return u(o.default.mark(function e() {
                    var t, r;
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return a.getSystem({
                                nosetNB: 1
                            }), a.util.setNT("店内订单"), e.next = 4, a.getLoginInfo();

                          case 4:
                            return e.next = 6, a.getSwitchConfig();

                          case 6:
                            t = [ {
                                name: "快餐",
                                type: 4
                            }, {
                                name: "堂食",
                                type: 1
                            }, {
                                name: "收银",
                                type: 2
                            } ], r = +n.idx || 0, 1 == a.mySwitch.isAppointment && t.push({
                                name: "预约",
                                type: 3
                            }), a.tabs = t, a.params.userId = a.uId, a.aIdx = t.findIndex(function(e) {
                                return e.type == r + 1;
                            }), a.changeTab(a.aIdx);

                          case 12:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getList());
            },
            onShow: function() {
                var t = this;
                return u(o.default.mark(function e() {
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            t.params.userId && t.refresh();

                          case 1:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            mixins: [ r("c1ef").utilMixins ],
            computed: i({}, (0, a.mapState)("dndc", [ "mySwitch" ]), {
                hasLabel: function() {
                    return 0 < this.labelArr.length;
                }
            }),
            methods: i({}, (0, a.mapActions)("dndc", [ "getSwitchConfig" ]), {
                ljck: function() {
                    this.showCoupon = !1, this.go({
                        t: 1,
                        url: "/yb_cy/my/coupon/my"
                    });
                },
                paySuccess: function() {
                    console.log("paySuccess");
                },
                operation: function(r) {
                    var n = this;
                    return u(o.default.mark(function e() {
                        var t;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.orderInfo = r.co, t = {}, e.t0 = r.t, e.next = "qxdd" === e.t0 ? 5 : "sqtk" === e.t0 ? 7 : "cd" === e.t0 ? 9 : "qrsh" === e.t0 ? 11 : "scdd" === e.t0 ? 13 : "lxsj" === e.t0 ? 15 : "pj" === e.t0 ? 16 : "ljzf" === e.t0 ? 17 : 19;
                                break;

                              case 5:
                                return n.qxdd(r.tip), e.abrupt("return");

                              case 7:
                                return t = {
                                    title: "您确认申请退款吗？",
                                    url: "OrderRefund",
                                    params: {
                                        orderId: r.co.id
                                    }
                                }, e.abrupt("break", 19);

                              case 9:
                                return t = {
                                    title: "您确认催单吗？",
                                    url: "Reminder",
                                    params: {
                                        userId: n.user.userId,
                                        orderId: r.co.id
                                    }
                                }, e.abrupt("break", 19);

                              case 11:
                                return t = {
                                    title: "您确认已收到货吗？",
                                    url: "Receiving",
                                    params: {
                                        orderId: r.co.id
                                    }
                                }, e.abrupt("break", 19);

                              case 13:
                                return t = {
                                    title: "您确认删除订单吗？",
                                    url: "OrderDel",
                                    params: {
                                        orderId: r.co.id
                                    }
                                }, e.abrupt("break", 19);

                              case 15:
                                return e.abrupt("return", n.util.makeTel(r.co.storeTel));

                              case 16:
                                return e.abrupt("return", n.util.message("功能持续完善中,敬请期待", 3));

                              case 17:
                                return n.go({
                                    t: 1,
                                    url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                        orderId: n.orderInfo.id,
                                        orderType: 5,
                                        userId: n.uId,
                                        info: {
                                            money: n.orderInfo.money,
                                            type: "下单支付",
                                            cancel: 1,
                                            go: {
                                                t: 4
                                            }
                                        }
                                    }))
                                }), e.abrupt("return");

                              case 19:
                                return console.log(r, t), e.prev = 20, e.next = 23, n.util.modal(t.title);

                              case 23:
                                e.next = 28;
                                break;

                              case 25:
                                return e.prev = 25, e.t1 = e.catch(20), e.abrupt("return");

                              case 28:
                                return e.next = 30, n.util.request({
                                    url: n.api[t.url],
                                    method: "POST",
                                    mask: 1,
                                    data: t.params
                                });

                              case 30:
                                e.sent && (n.refresh(), n.util.message("操作成功", 1));

                              case 32:
                              case "end":
                                return e.stop();
                            }
                        }, e, null, [ [ 20, 25 ] ]);
                    }))();
                },
                qxdd: function(t) {
                    var r = this;
                    return u(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (console.log("qxdd"), !t) {
                                    e.next = 10;
                                    break;
                                }
                                return e.prev = 2, e.next = 5, r.util.modal("您确认取消订单吗？");

                              case 5:
                                e.next = 10;
                                break;

                              case 7:
                                return e.prev = 7, e.t0 = e.catch(2), e.abrupt("return");

                              case 10:
                                return e.next = 12, r.util.request({
                                    url: r.api.tsqxdd,
                                    method: "POST",
                                    mask: "取消订单中",
                                    data: {
                                        orderId: r.orderInfo.id
                                    }
                                });

                              case 12:
                                e.sent && (r.refresh(), r.util.message("操作成功", 1));

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
                    this.dataList = [], this.tabs[e].type) {
                      case 1:
                        this.labelArr = [ "全部", "待付款", "已支付", "已关闭" ], this.params.api = "MyInOrder", this.iparams = {
                            state: ""
                        };
                        break;

                      case 2:
                        this.labelArr = [], this.params.api = "CashierOrderList", this.iparams = {};
                        break;

                      case 4:
                        this.labelArr = [ "全部", "待付款", "待接单", "制作中", "已完成", "已关闭" ], this.params.api = "MyInOrder", 
                        this.iparams = {
                            state: "",
                            orderMode: 2
                        };
                    }
                    this.getList();
                },
                lTab: function(e) {
                    if (this.laIdx = e, this.isget = this.mygd = !1, this.params.page = 1, this.params.size = 10, 
                    this.dataList = [], 1 == this.tabs[this.aIdx].type) {
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
                    } else if (4 == this.tabs[this.aIdx].type) {
                        var r = "";
                        switch (e) {
                          case 0:
                            r = "";
                            break;

                          case 1:
                            r = "1";
                            break;

                          case 2:
                            r = "2";
                            break;

                          case 3:
                            r = "4";
                            break;

                          case 4:
                            r = "5";
                            break;

                          case 5:
                            r = "3";
                        }
                        this.iparams.state = r;
                    }
                    this.getList();
                },
                getList: function() {
                    var n = this;
                    return u(o.default.mark(function e() {
                        var t, r;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, n.util.request({
                                    url: n.api[n.params.api],
                                    data: i({}, n.params, {}, n.iparams)
                                });

                              case 2:
                                t = e.sent, r = t.data, n.dataList = n.dataList.concat(r), n.isget = !0, n.mygd = n.params.size > r.length, 
                                n.params.page++;

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            })
        };
        t.default = d;
    },
    d472: function(e, t, r) {
        r.r(t);
        var n = r("4146"), a = r("7780");
        for (var o in a) "default" !== o && function(e) {
            r.d(t, e, function() {
                return a[e];
            });
        }(o);
        r("41e8");
        var s = r("f0c5"), i = Object(s.a)(a.default, n.b, n.c, !1, null, "094d9120", null, !1, n.a, void 0);
        t.default = i.exports;
    },
    fee9: function(e, t, r) {}
}, [ [ "94bf", "common/runtime", "common/vendor" ] ] ]);