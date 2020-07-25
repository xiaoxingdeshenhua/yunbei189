(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/pay-order" ], {
    "02b8": function(e, t, r) {},
    "05de": function(e, t, r) {
        var n = function() {
            var n = this, e = (n.$createElement, n._self._c, {
                color: n.tColor,
                borderColor: n.tColor
            }), t = n.__map(n.carInfo.carList, function(e, t) {
                var r = n.itemTotal(e.price, e.num);
                return {
                    $orig: n.__get_orig(e),
                    m0: r
                };
            });
            n._isMounted || (n.e0 = function(e) {
                n.showTime = !0;
            }, n.e1 = function(e) {
                n.showTime = !0;
            }, n.e2 = function(e) {
                n.showTime = !1;
            }), n.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    l0: t
                }
            });
        }, o = [];
        r.d(t, "b", function() {
            return n;
        }), r.d(t, "c", function() {
            return o;
        }), r.d(t, "a", function() {});
    },
    "2a76": function(e, i, l) {
        (function(u) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var c = r(l("4795")), e = l("c1ef"), t = l("2f62"), d = r(l("6f73"));
            function r(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function n(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, n);
                }
                return r;
            }
            function o(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(a), !0).forEach(function(e) {
                        var t, r, n;
                        t = o, n = a[r = e], r in t ? Object.defineProperty(t, r, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[r] = n;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return o;
            }
            function m(e, t, r, n, o, a, s) {
                try {
                    var i = e[a](s), u = i.value;
                } catch (e) {
                    return void r(e);
                }
                i.done ? t(u) : Promise.resolve(u).then(n, o);
            }
            function s(i) {
                return function() {
                    var e = this, s = arguments;
                    return new Promise(function(t, r) {
                        var n = i.apply(e, s);
                        function o(e) {
                            m(n, t, r, o, a, "next", e);
                        }
                        function a(e) {
                            m(n, t, r, o, a, "throw", e);
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
                    mgRadio: function() {
                        l.e("components/form/mg-radio").then(function() {
                            return resolve(l("4b28"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgAgree: function() {
                        l.e("components/form/mg-agree").then(function() {
                            return resolve(l("d2af"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    load: function() {
                        l.e("components/common/load").then(function() {
                            return resolve(l("de6d"));
                        }.bind(null, l)).catch(l.oe);
                    }
                },
                data: function() {
                    return {
                        showLoading: !1,
                        closePay: !1,
                        showPay: !1,
                        carInfo: {},
                        ModeArr: [],
                        wmAddress: "",
                        params: {
                            goodsArr: [],
                            storeId: "",
                            userAddId: "",
                            deliveryMode: "2",
                            payMode: "",
                            userNote: "",
                            userId: "",
                            serviceAt: "",
                            appointment: "",
                            serviceTime: "",
                            userTel: "",
                            useCouponId: "",
                            isOut: "1"
                        },
                        loading: !1,
                        payObj: {},
                        showTime: !1,
                        wmIndex: 0,
                        wmTime: [],
                        yjIndex: 0,
                        yjTime: [],
                        rsiv: "",
                        yjrV: {},
                        deliveryPreferential: 0,
                        yhqPreferential: 0,
                        kyhb: {
                            n: 0,
                            data: []
                        },
                        couponInfo: null,
                        orderMuster: {},
                        ztTypeArr: [],
                        agree: !0
                    };
                },
                onLoad: function() {
                    var i = this;
                    return s(c.default.mark(function e() {
                        var s;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return i.util.setNT("提交订单"), i.agree = 1 == i.system.isCheck, i.util.showLoading(), 
                                i.carInfo = u.getStorageSync("carInfo"), e.next = 6, i.util.request({
                                    url: i.api.wmjysp,
                                    ct: 1,
                                    method: "POST",
                                    mask: 1,
                                    data: {
                                        storeId: i.carInfo.sjxx.storeInfo.id,
                                        userId: i.uId,
                                        goodsArr: i.carInfo.carList.map(function(e) {
                                            return {
                                                price: (e.price * e.num).toFixed(2),
                                                goodsId: e.goodsId,
                                                groupId: e.groupId || "",
                                                attribute: e.sxdata || "",
                                                num: e.num,
                                                material: e.material || []
                                            };
                                        })
                                    }
                                });

                              case 6:
                                if (0 === (s = e.sent).data) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt("return", u.showModal({
                                    title: "提示",
                                    content: "商品信息不同步！",
                                    showCancel: !1,
                                    confirmText: "立即刷新",
                                    success: function(e) {
                                        var t = i.$store.state.carList, r = [], n = s.data.join();
                                        for (var o in t) n.indexOf(o) < 0 && r.push(t[o]);
                                        i.setCarList(r), i.$store.getters.hcCar();
                                        var a = i.util.getPage();
                                        i.util.showLoading(), a.$vm.refreshList(), d.default.swnb(100);
                                    }
                                }));

                              case 9:
                                i.getOrderset(), i.getWmAddress(), i.params.goodsArr = JSON.stringify(i.carInfo.carList.map(function(e) {
                                    return {
                                        goodsId: e.goodsId,
                                        groupId: e.groupId || "",
                                        attribute: e.sxdata || "",
                                        num: e.num,
                                        material: e.material || []
                                    };
                                })), i.params.storeId = i.carInfo.sjxx.storeInfo.id, i.params.userId = i.user.userId, 
                                i.params.userTel = i.user.userTel, i.getyjTime(), i.getyhqArr(), i.getOrderMuster();

                              case 18:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ e.utilMixins ],
                computed: o({}, (0, t.mapState)({
                    orderset: function(e) {
                        return e.config.orderset;
                    }
                }), {
                    xjMoney: function() {
                        if (this.carInfo.carPrice) {
                            var e = this.carInfo.carPrice.nowPrice, t = +(this.wmAddress && this.wmAddress.deliveryMoney || 0), r = +(this.couponInfo && this.couponInfo.money || 0), n = 0, o = 0, a = e - r - +this.orderMuster.newMoney;
                            return this.deliveryPreferential = 0, 1 == this.params.deliveryMode ? t = 0 : 1 == this.orderMuster.isDelivery ? (t = 0, 
                            this.wmAddress && (this.deliveryPreferential = this.wmAddress.deliveryMoney)) : this.wmAddress && a >= this.wmAddress.fullMoney && 0 < this.wmAddress.fullMoney && (t = 0, 
                            this.deliveryPreferential = this.wmAddress.deliveryMoney), a <= 0 && (a = .01), 
                            (n = +(a + t).toFixed(2)) <= 0 && (n = .01), this.yhqPreferential = r, 0 < this.system.taxRatio && (o = +(n * (this.system.taxRatio / 100)).toFixed(2)), 
                            {
                                total: n,
                                psf: t,
                                slje: o
                            };
                        }
                    },
                    jsInfo: function() {
                        if (this.carInfo.carPrice) {
                            var e = this.carInfo.carPrice.nowPrice + Number(this.wmAddress && this.wmAddress.deliveryMoney || 0) - this.xjMoney.total, t = this.xjMoney.total + this.xjMoney.slje;
                            return {
                                yhzj: +e.toFixed(2),
                                hjMoney: +t.toFixed(2)
                            };
                        }
                    },
                    timearrow: function() {
                        return this.yjTime.length;
                    },
                    appointment: function() {
                        return this.yjrV.timeTitle && -1 == this.yjrV.timeTitle.indexOf("立即送出");
                    },
                    ljsctext: function() {
                        return 1 == this.params.deliveryMode ? this.yjrV.timeTitle ? "立即自取" : "" : this.yjrV.timeTitle ? "约".concat(this.yjrV.timeTitle.substring(4, 9), "送达") : "";
                    }
                }),
                methods: o({}, (0, t.mapMutations)([ "setCarList" ]), {
                    clickMode: function(e) {
                        var t = this;
                        e.value != this.params.deliveryMode && (this.util.showLoading("设置中..."), this.params.deliveryMode = e.value, 
                        setTimeout(function() {
                            u.hideLoading(), 1 != e.value && t.checkQsj();
                        }, 500), console.log(e, this.params));
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
                        var r = this;
                        this.wmAddress && +this.wmAddress.startMoney > this.carInfo.getTotal.total && u.showModal({
                            title: "提示",
                            content: "您的商品总计金额".concat(this.sl + this.carInfo.getTotal.total, "，未达到此收货地址的起送价").concat(this.sl + this.wmAddress.startMoney),
                            showCancel: !1,
                            success: function(e) {
                                var t = r.util.getPage();
                                t.$vm.sjxx.storeInfo.deliveryStartMoney = r.wmAddress.startMoney, t.$vm.buyType = 2, 
                                r.go({
                                    t: 4
                                });
                            }
                        }), console.log(this.wmAddress, this.carInfo.getTotal.total);
                    },
                    getOrderset: function() {
                        var o = this;
                        return s(c.default.mark(function e() {
                            var t, r, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t = o.orderset, r = o.carInfo.sjxx.orderSet.data.support, n = o.carInfo.sjxx.orderSet.data.mode, 
                                    1 == r ? o.ModeArr = [ {
                                        icon: "iconps",
                                        name: t.customName,
                                        value: "2"
                                    } ] : 2 == r ? o.ModeArr = [ {
                                        icon: "iconmd",
                                        name: t.mentionName,
                                        value: "1"
                                    } ] : 3 == r && (o.ModeArr = [ {
                                        icon: "iconps",
                                        name: t.customName,
                                        value: "2"
                                    }, {
                                        icon: "iconmd",
                                        name: t.mentionName,
                                        value: "1"
                                    } ]), o.params.deliveryMode = o.carInfo.buyType, 1 == n ? o.ztTypeArr = [ {
                                        value: "1",
                                        name: "店内就餐"
                                    } ] : 2 == n ? (o.ztTypeArr = [ {
                                        value: "2",
                                        name: "打包带走"
                                    } ], o.params.isOut = 2) : 3 == n && (o.ztTypeArr = [ {
                                        value: "1",
                                        name: "店内就餐"
                                    }, {
                                        value: "2",
                                        name: "打包带走"
                                    } ]), u.setStorageSync("fwb", t.orderAgreement);

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getWmAddress: function() {
                        var r = this;
                        return s(c.default.mark(function e() {
                            var t;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.ReceivingAddress,
                                        data: {
                                            storeId: r.carInfo.sjxx.storeInfo.id,
                                            userId: r.user.userId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, r.wmAddress = t && t.data, r.wmAddress && (r.params.userAddId = t.data.id, 
                                    1 != r.params.deliveryMode && r.checkQsj()), r.showLoading = !0, console.log(t, r.params.deliveryMode);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getyhqArr: function() {
                        var a = this;
                        return s(c.default.mark(function e() {
                            var t, r, n, o;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return u.setStorageSync("kyhb", {
                                        n: 0,
                                        data: []
                                    }), e.next = 3, a.util.request({
                                        url: a.api.AvailableCoupon,
                                        method: "POST",
                                        data: {
                                            goodsArr: a.params.goodsArr,
                                            userId: a.params.userId,
                                            storeId: a.params.storeId
                                        }
                                    });

                                  case 3:
                                    if (t = e.sent, r = t.data) {
                                        for (o in n = 0, r) 1 == r[o].isUse && (n += 1);
                                        a.kyhb = {
                                            n: n,
                                            data: r
                                        }, u.setStorageSync("kyhb", a.kyhb);
                                    }
                                    u.hideLoading();

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
                        var n = this;
                        return s(c.default.mark(function e() {
                            var t, r;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.util.request({
                                        url: n.api.orderMuster,
                                        method: "POST",
                                        data: {
                                            userId: n.params.userId,
                                            storeId: n.params.storeId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, r = t.data, n.orderMuster = r || {
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
                        return s(c.default.mark(function e() {
                            var t, r, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.util.request({
                                        url: o.api.AppointmentTime,
                                        data: {
                                            storeId: o.params.storeId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, (r = t.data)[0] && (2 == o.carInfo.sjxx.storeInfo.isOpen && r[0].time.splice(0, 1), 
                                    0 == r[0].time.length && r.splice(0, 1), r[0] && (o.yjrV = r[0].time[0], -1 != r[0].time[0].timeTitle.indexOf("立即送出") ? r[0].time[0].zttimeTitle = "立即自取" : r[0].time[0].zttimeTitle = r[0].time[0].timeTitle)), 
                                    o.yjTime = r, n = o.dateToTime(), o.wmTime = [ {
                                        time: o.timeToDate(n + 60 * (o.carInfo.sjxx.storeInfo.deliveryTime || 30)),
                                        timeTitle: "尽快送达" + o.timeToDate(n + 60 * (o.carInfo.sjxx.storeInfo.deliveryTime || 30), "hh:mm"),
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
                        var r = this;
                        return s(c.default.mark(function e() {
                            var t;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (2 != r.params.deliveryMode) {
                                        e.next = 5;
                                        break;
                                    }
                                    if (r.params.userAddId) {
                                        e.next = 3;
                                        break;
                                    }
                                    return e.abrupt("return", r.$refs.getaddress.goChoose());

                                  case 3:
                                    e.next = 11;
                                    break;

                                  case 5:
                                    if (d.default.isTelCode(r.params.userTel)) {
                                        e.next = 9;
                                        break;
                                    }
                                    return e.abrupt("return", r.util.message("请输入合理的预留手机号", 3));

                                  case 9:
                                    if (r.agree) {
                                        e.next = 11;
                                        break;
                                    }
                                    return e.abrupt("return", r.util.message("请阅读并同意服务协议", 3));

                                  case 11:
                                    return 2 == r.params.deliveryMode ? r.yjTime.length ? (r.params.serviceAt = r.yjrV.timeTitle, 
                                    r.params.serviceTime = r.yjrV.time, r.params.appointment = r.appointment ? 1 : "") : (r.params.serviceAt = r.wmTime[r.wmIndex].timeTitle, 
                                    r.params.serviceTime = r.wmTime[r.wmIndex].time, r.params.appointment = "") : r.yjTime.length ? (r.params.serviceAt = r.appointment ? r.yjrV.timeTitle : "立即自取", 
                                    r.params.serviceTime = r.yjrV.time, r.params.appointment = r.appointment ? 1 : "") : (r.params.serviceAt = r.wmTime[r.wmIndex].zttimeTitle, 
                                    r.params.serviceTime = r.wmTime[r.wmIndex].time, r.params.appointment = ""), r.loading = !0, 
                                    e.next = 15, r.requestSM("outOrder");

                                  case 15:
                                    return e.next = 17, r.util.request({
                                        url: r.api.SaveOrder,
                                        method: "POST",
                                        mask: "下单中",
                                        data: r.params
                                    });

                                  case 17:
                                    t = e.sent, console.log("ljzf orderRes", t), t ? (r.setCarList([]), r.$store.getters.hcCar(), 
                                    r.util.getPage().$vm.celarCar(), r.go({
                                        t: 2,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: t.data,
                                            orderType: 1,
                                            info: {
                                                money: r.jsInfo.hjMoney,
                                                type: "下单支付",
                                                go: {
                                                    t: 3,
                                                    url: "/yb_cy/order/index"
                                                }
                                            }
                                        }))
                                    }), u.setStorageSync("note", r.params.userNote)) : r.loading = !1;

                                  case 20:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }),
                created: function() {
                    return s(c.default.mark(function e() {
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            };
            i.default = a;
        }).call(this, l("543d").default);
    },
    "6d4d": function(e, t, r) {
        r.r(t);
        var n = r("2a76"), o = r.n(n);
        for (var a in n) "default" !== a && function(e) {
            r.d(t, e, function() {
                return n[e];
            });
        }(a);
        t.default = o.a;
    },
    "89e0": function(e, t, r) {
        var n = r("02b8");
        r.n(n).a;
    },
    afc8: function(e, t, r) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            r("c27a"), t(r("66fd")), e(t(r("d562")).default);
        }).call(this, r("543d").createPage);
    },
    d562: function(e, t, r) {
        r.r(t);
        var n = r("05de"), o = r("6d4d");
        for (var a in o) "default" !== a && function(e) {
            r.d(t, e, function() {
                return o[e];
            });
        }(a);
        r("89e0");
        var s = r("f0c5"), i = Object(s.a)(o.default, n.b, n.c, !1, null, "705cd441", null, !1, n.a, void 0);
        t.default = i.exports;
    }
}, [ [ "afc8", "common/runtime", "common/vendor" ] ] ]);