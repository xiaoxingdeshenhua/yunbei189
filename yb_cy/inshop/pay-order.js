(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/pay-order" ], {
    "2a2f": function(e, t, n) {
        var r = n("4844");
        n.n(r).a;
    },
    "3ffd": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("a927")).default);
        }).call(this, n("543d").createPage);
    },
    4844: function(e, t, n) {},
    "73e8": function(e, f, l) {
        (function(s) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var i = n(l("4795")), e = l("c1ef"), t = l("2f62"), u = n(l("6f73"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
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
            function o(o) {
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
            }
            function c(e, t, n, r, o, a, s) {
                try {
                    var i = e[a](s), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function d(i) {
                return function() {
                    var e = this, s = arguments;
                    return new Promise(function(t, n) {
                        var r = i.apply(e, s);
                        function o(e) {
                            c(r, t, n, o, a, "next", e);
                        }
                        function a(e) {
                            c(r, t, n, o, a, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var a = {
                name: "pay-order",
                components: {
                    getAddress: function() {
                        l.e("components/address/get-address").then(function() {
                            return resolve(l("392c"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    getZtd: function() {
                        l.e("components/address/get-ztd").then(function() {
                            return resolve(l("95ce"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgPay: function() {
                        l.e("components/common/mg-pay").then(function() {
                            return resolve(l("32f1"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgPopup: function() {
                        l.e("components/common/popup").then(function() {
                            return resolve(l("da89"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    bkB: function() {
                        l.e("components/common/block-b").then(function() {
                            return resolve(l("0c75"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    sqBtn: function() {
                        l.e("components/common/sq-btn").then(function() {
                            return resolve(l("0df4"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    MgCell: function() {
                        l.e("components/common/mg-cell").then(function() {
                            return resolve(l("ef6e"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    load: function() {
                        l.e("components/common/load").then(function() {
                            return resolve(l("de6d"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    numberBox: function() {
                        l.e("components/form/number-box").then(function() {
                            return resolve(l("9a6c"));
                        }.bind(null, l)).catch(l.oe);
                    }
                },
                data: function() {
                    return {
                        maxNum: 50,
                        tableInfo: {},
                        showLoading: !0,
                        carInfo: {},
                        params: {
                            people: 0,
                            storeId: "",
                            userId: "",
                            tableId: "",
                            useCouponId: "",
                            userNote: "",
                            eatType: ""
                        },
                        loading: !1,
                        payObj: {},
                        deliveryPreferential: 0,
                        yhqPreferential: 0,
                        kyhb: {
                            n: 0,
                            data: []
                        },
                        couponInfo: null,
                        orderMuster: {},
                        goodsArr: []
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return d(i.default.mark(function e() {
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.util.setNT("下单"), n.tableInfo = JSON.parse(decodeURIComponent(t.tableInfo)), n.params.people = n.tableInfo.pnum || 3, 
                                n.params.storeId = n.tableInfo.storeId, n.params.userId = n.uId, n.params.tableId = n.tableInfo.tableId, 
                                n.params.eatType = n.sjxx.inStoreSet.balanceMode, n.supdCarbp = {
                                    userId: n.uId,
                                    item: 2,
                                    storeId: n.tableInfo.storeId,
                                    tableId: n.tableInfo.tableId
                                }, n.getGoodsArr(), console.log(n.tableInfo);

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ e.utilMixins ],
                computed: o({}, (0, t.mapState)([ "scarList", "sjxx" ]), {
                    carList: function() {
                        return this.scarList.userInfo || [];
                    },
                    getTotal: function() {
                        var t = 0, n = 0;
                        return this.goodsArr.forEach(function(e) {
                            t += e.price * e.num, n += +e.num;
                        }), {
                            total: +t.toFixed(2),
                            num: n
                        };
                    },
                    zwf: function() {
                        return +(this.params.people * this.sjxx.inStoreSet.boxMoney).toFixed(2);
                    },
                    xjMoney: function() {
                        if (this.scarList.money) {
                            var e = this.scarList.money, t = +(this.couponInfo && this.couponInfo.money || 0), n = 0, r = 0;
                            return (n = +(e + this.zwf - t).toFixed(2)) <= 0 && (n = .01), this.yhqPreferential = t, 
                            0 < this.system.taxRatio && (r = +(n * (this.system.taxRatio / 100)).toFixed(2)), 
                            {
                                total: n,
                                slje: r
                            };
                        }
                    },
                    jsInfo: function() {
                        if (this.scarList.money) {
                            var e = this.scarList.money + this.zwf - this.xjMoney.total, t = this.xjMoney.total + this.xjMoney.slje;
                            return {
                                yhzj: +e.toFixed(2),
                                hjMoney: +t.toFixed(2)
                            };
                        }
                    }
                }),
                methods: o({}, (0, t.mapActions)([ "getMycar" ]), {
                    bindChange: function(e) {
                        this.params.people = e;
                    },
                    clickMode: function(e) {
                        this.util.showLoading("设置中..."), this.params.deliveryMode = e.value, setTimeout(function() {
                            s.hideLoading();
                        }, 500), console.log(e, this.params);
                    },
                    bindTimeChange: function(e) {
                        this.wmIndex = e.detail.value;
                    },
                    refreshAddress: function(e) {
                        this.wmAddress = e, this.params.userAddId = e.id, this.checkQsj();
                    },
                    setTel: function(e) {
                        this.params.userTel = e;
                    },
                    checkQsj: function() {
                        var t = this;
                        +this.wmAddress.startMoney > this.carInfo.getTotal.total && s.showModal({
                            title: "提示",
                            content: "您的商品总计金额".concat(this.sl + this.carInfo.getTotal.total, "，未达到此收货地址的起送价").concat(this.sl + this.wmAddress.startMoney),
                            showCancel: !1,
                            success: function(e) {
                                t.util.getPage().$vm.sjxx.storeInfo.deliveryStartMoney = t.wmAddress.startMoney, 
                                t.go({
                                    t: 4
                                });
                            }
                        }), console.log(+this.wmAddress.startMoney, this.carInfo.getTotal.total);
                    },
                    getOrderset: function() {
                        var o = this;
                        return d(i.default.mark(function e() {
                            var t, n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.util.request({
                                        url: o.api.config,
                                        data: {
                                            ident: "orderset"
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, 1 == (r = o.carInfo.sjxx.orderSet.data.support) ? o.ModeArr = [ {
                                        icon: "iconps",
                                        name: n.customName,
                                        value: "2"
                                    } ] : 2 == r ? (o.ModeArr = [ {
                                        icon: "iconmd",
                                        name: n.mentionName,
                                        value: "1"
                                    } ], o.params.deliveryMode = 1) : 3 == r && (o.ModeArr = [ {
                                        icon: "iconps",
                                        name: n.customName,
                                        value: "2"
                                    }, {
                                        icon: "iconmd",
                                        name: n.mentionName,
                                        value: "1"
                                    } ]);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getWmAddress: function() {
                        var n = this;
                        return d(i.default.mark(function e() {
                            var t;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.util.request({
                                        url: n.api.ReceivingAddress,
                                        data: {
                                            storeId: n.carInfo.sjxx.storeInfo.id,
                                            userId: n.user.userId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n.wmAddress = t && t.data, n.wmAddress && (n.params.userAddId = t.data.id, 
                                    2 != n.carInfo.sjxx.orderSet.data.support && n.checkQsj()), console.log(t);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getGoodsArr: function() {
                        var a = this;
                        return d(i.default.mark(function e() {
                            var t, n, r, o;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return a.util.showLoading(), e.next = 3, a.getMycar(a.supdCarbp);

                                  case 3:
                                    for (t = [], a.carList.forEach(function(e) {
                                        t = t.concat(e.goodsArr);
                                    }), n = u.default.deepCopy(t.filter(function(t, e, n) {
                                        return n.findIndex(function(e) {
                                            return e.goodsId == t.goodsId && e.data == t.data && e.jldata == t.jldata && e.attribute == t.attribute;
                                        }) == e;
                                    })), r = 0; r < n.length; r++) for (n[r].num = 0, o = 0; o < t.length; o++) n[r].goodsId == t[o].goodsId && n[r].data == t[o].data && n[r].jldata == t[o].jldata && n[r].attribute == t[o].attribute && (n[r].num += +t[o].num);
                                    a.goodsArr = n, a.carArr = t, a.getyhqArr();

                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getyhqArr: function() {
                        var a = this;
                        return d(i.default.mark(function e() {
                            var t, n, r, o;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return s.setStorageSync("kyhb", {
                                        n: 0,
                                        data: []
                                    }), e.next = 3, a.util.request({
                                        url: a.api.AvailableCoupon,
                                        method: "POST",
                                        data: {
                                            tableId: a.params.tableId,
                                            userId: a.params.userId,
                                            storeId: a.params.storeId,
                                            type: 2
                                        }
                                    });

                                  case 3:
                                    if (t = e.sent, n = t.data) {
                                        for (o in r = 0, n) 1 == n[o].isUse && (r += 1);
                                        a.kyhb = {
                                            n: r,
                                            data: n
                                        }, s.setStorageSync("kyhb", a.kyhb);
                                    }
                                    s.hideLoading();

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    changeCoupon: function(e) {
                        this.couponInfo = e || null, this.params.useCouponId = e ? e.id : "", console.log(e);
                    },
                    getOrderMuster: function() {
                        var r = this;
                        return d(i.default.mark(function e() {
                            var t, n;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.orderMuster,
                                        method: "POST",
                                        data: {
                                            userId: r.params.userId,
                                            storeId: r.params.storeId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, r.orderMuster = n || {
                                        newMoney: 0
                                    };

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getyjTime: function() {
                        var o = this;
                        return d(i.default.mark(function e() {
                            var t, n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.util.request({
                                        url: o.api.AppointmentTime,
                                        data: {
                                            storeId: o.params.storeId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, (o.yjTime = n)[0] && (n[0].time[0].zttimeTitle = "立即自取", 
                                    o.yjrV = n[0].time[0]), r = o.dateToTime(), o.wmTime = [ {
                                        time: o.timeToDate(r + 60 * (o.carInfo.sjxx.storeInfo.deliveryTime || 30)),
                                        timeTitle: "尽快送达" + o.timeToDate(r + 60 * (o.carInfo.sjxx.storeInfo.deliveryTime || 30), "hh:mm"),
                                        zttimeTitle: "立即自取"
                                    } ];

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    yjlClick: function(e) {
                        var t = this;
                        this.yjIndex = e, this.rsiv = "r", setTimeout(function() {
                            t.rsiv = "r".concat(Object.keys(t.yjTime[e].time)[0]);
                        }, 10);
                    },
                    yjrClick: function(e) {
                        var t = this;
                        this.yjrV = e, console.log(e), setTimeout(function() {
                            t.showTime = !1;
                        }, 200);
                    },
                    itemTotal: function(e, t) {
                        return (e * t).toFixed(2);
                    },
                    ljzf: function() {
                        var o = this;
                        return d(i.default.mark(function e() {
                            var t, n, r;
                            return i.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (o.jsInfo && o.jsInfo.hjMoney) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return", o.util.message("金额需大于0", 3));

                                  case 2:
                                    if (o.loading = !0, 1 != o.sjxx.inStoreSet.multiplayerMode) {
                                        e.next = 10;
                                        break;
                                    }
                                    return n = JSON.stringify(o.carArr.map(function(e) {
                                        return {
                                            goodsId: e.goodsId,
                                            data: e.data || "",
                                            num: e.num,
                                            jldata: e.jldata || "",
                                            attribute: e.attribute || ""
                                        };
                                    })), e.next = 7, o.util.request({
                                        url: o.api.IsChange,
                                        method: "POST",
                                        mask: 1,
                                        data: {
                                            tableId: o.params.tableId,
                                            goodsArr: n
                                        }
                                    });

                                  case 7:
                                    t = e.sent, e.next = 11;
                                    break;

                                  case 10:
                                    t = {
                                        data: 2
                                    };

                                  case 11:
                                    if (1 != t.data) {
                                        e.next = 15;
                                        break;
                                    }
                                    s.showModal({
                                        title: "提示",
                                        content: "购物车已发生改变",
                                        showCancel: !1,
                                        confirmText: "立即刷新",
                                        success: function(e) {
                                            o.getGoodsArr().then(function() {
                                                o.loading = !1;
                                            });
                                        }
                                    }), e.next = 21;
                                    break;

                                  case 15:
                                    if (2 != t.data) {
                                        e.next = 21;
                                        break;
                                    }
                                    return e.next = 18, o.util.request({
                                        url: o.api.SaveInStoreOrder,
                                        method: "POST",
                                        mask: "下单中",
                                        data: o.params
                                    });

                                  case 18:
                                    r = e.sent, console.log("ljzf orderRes", r), r ? (1 == o.params.eatType ? o.go({
                                        t: 3,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: r.data,
                                            orderType: 5,
                                            userId: o.uId,
                                            info: {
                                                money: o.jsInfo.hjMoney,
                                                type: "下单支付",
                                                go: {
                                                    t: 3,
                                                    url: "/yb_cy/inshop/order-dl?id=" + r.data
                                                }
                                            }
                                        }))
                                    }) : 2 == o.params.eatType && o.go({
                                        t: 3,
                                        url: "/yb_cy/inshop/order-dl?id=" + r.data
                                    }), s.setStorageSync("note", o.params.userNote)) : o.loading = !1;

                                  case 21:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }),
                created: function() {
                    return d(i.default.mark(function e() {
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            };
            f.default = a;
        }).call(this, l("543d").default);
    },
    a617: function(e, t, n) {
        var r = function() {
            var r = this, e = (r.$createElement, r._self._c, r.__map(r.goodsArr, function(e, t) {
                var n = r.itemTotal(e.price, e.num);
                return {
                    $orig: r.__get_orig(e),
                    m0: n
                };
            }));
            r.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    a927: function(e, t, n) {
        n.r(t);
        var r = n("a617"), o = n("f449");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("2a2f");
        var s = n("f0c5"), i = Object(s.a)(o.default, r.b, r.c, !1, null, "f6869778", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    f449: function(e, t, n) {
        n.r(t);
        var r = n("73e8"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    }
}, [ [ "3ffd", "common/runtime", "common/vendor" ] ] ]);