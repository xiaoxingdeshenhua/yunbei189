(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/ffmode/pay-order" ], {
    2554: function(e, f, d) {
        (function(i) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var u = n(d("4795")), e = d("c1ef"), t = d("2f62");
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
            function c(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i), c = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            function s(u) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(t, n) {
                        var r = u.apply(e, i);
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
            n(d("6f73"));
            var a = {
                name: "ff-payOrder",
                components: {
                    mgPopup: function() {
                        d.e("components/common/popup").then(function() {
                            return resolve(d("da89"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    bkB: function() {
                        d.e("components/common/block-b").then(function() {
                            return resolve(d("0c75"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    sqBtn: function() {
                        d.e("components/common/sq-btn").then(function() {
                            return resolve(d("0df4"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    MgCell: function() {
                        d.e("components/common/mg-cell").then(function() {
                            return resolve(d("ef6e"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    load: function() {
                        d.e("components/common/load").then(function() {
                            return resolve(d("de6d"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    numberBox: function() {
                        d.e("components/form/number-box").then(function() {
                            return resolve(d("9a6c"));
                        }.bind(null, d)).catch(d.oe);
                    }
                },
                data: function() {
                    return {
                        ModeArr: [],
                        maxNum: 50,
                        tableInfo: {},
                        showLoading: !0,
                        carInfo: {},
                        params: {
                            people: 0,
                            storeId: "",
                            userId: "",
                            useCouponId: "",
                            userNote: "",
                            isOut: "1"
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
                        orderMuster: {}
                    };
                },
                onLoad: function(e) {
                    var t = this;
                    return s(u.default.mark(function e() {
                        return u.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t.util.setNT("下单"), t.carInfo = i.getStorageSync("carInfo"), t.params.storeId = t.sjxx.storeInfo.id, 
                                t.params.userId = t.uId, t.supdCarbp = {
                                    userId: t.uId,
                                    item: 3,
                                    storeId: t.params.storeId
                                }, t.getOrderset(), t.getGoodsArr();

                              case 7:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ e.utilMixins ],
                computed: o({}, (0, t.mapState)([ "scarList", "sjxx" ]), {
                    carList: function() {
                        return this.scarList.userInfo && this.scarList.userInfo[0].goodsArr || [];
                    },
                    getTotal: function() {
                        var t = 0;
                        return this.carList.forEach(function(e) {
                            t += +e.num;
                        }), {
                            num: t
                        };
                    },
                    zwf: function() {
                        var e = this.sjxx.orderSet.fastData;
                        return {
                            tip: (1 == e.packingMode ? "每单收费" : "每份商品收费") + this.sl + e.packingMoney,
                            money: 1 == this.params.isOut ? 0 : +(1 == e.packingMode ? e.packingMoney : this.getTotal.num * e.packingMoney).toFixed(2)
                        };
                    },
                    xjMoney: function() {
                        if (this.scarList.money) {
                            var e = this.scarList.money, t = +(this.couponInfo && this.couponInfo.money || 0), n = 0, r = 0;
                            return (n = +(e + this.zwf.money - t).toFixed(2)) <= 0 && (n = .01), this.yhqPreferential = t, 
                            0 < this.system.taxRatio && (r = +(n * (this.system.taxRatio / 100)).toFixed(2)), 
                            {
                                total: n,
                                slje: r
                            };
                        }
                    },
                    jsInfo: function() {
                        if (this.scarList.money) {
                            var e = this.scarList.money + this.zwf.money - this.xjMoney.total, t = this.xjMoney.total + this.xjMoney.slje;
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
                        this.util.showLoading("设置中..."), this.params.isOut = e.value, setTimeout(function() {
                            i.hideLoading();
                        }, 500), console.log(e, this.params);
                    },
                    bindTimeChange: function(e) {
                        this.wmIndex = e.detail.value;
                    },
                    setTel: function(e) {
                        this.params.userTel = e;
                    },
                    getOrderset: function() {
                        var t = this;
                        return s(u.default.mark(function e() {
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.ModeArr = [ {
                                        icon: "iconmd",
                                        name: "店内就餐",
                                        value: "1"
                                    }, {
                                        icon: "iconddys",
                                        name: "打包带走",
                                        value: "2"
                                    } ];

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getGoodsArr: function() {
                        var t = this;
                        return s(u.default.mark(function e() {
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, t.getMycar(t.supdCarbp);

                                  case 2:
                                    t.getyhqArr();

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getyhqArr: function() {
                        var a = this;
                        return s(u.default.mark(function e() {
                            var t, n, r, o;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return i.setStorageSync("kyhb", {
                                        n: 0,
                                        data: []
                                    }), e.next = 3, a.util.request({
                                        url: a.api.AvailableCoupon,
                                        method: "POST",
                                        data: {
                                            userId: a.params.userId,
                                            storeId: a.params.storeId,
                                            type: 4
                                        }
                                    });

                                  case 3:
                                    if (t = e.sent, n = t.data) {
                                        for (o in r = 0, n) 1 == n[o].isUse && (r += 1);
                                        a.kyhb = {
                                            n: r,
                                            data: n
                                        }, i.setStorageSync("kyhb", a.kyhb);
                                    }
                                    a.showLoading = !1;

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
                    itemTotal: function(e, t) {
                        return (e * t).toFixed(2);
                    },
                    ljzf: function() {
                        var n = this;
                        return s(u.default.mark(function e() {
                            var t;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (n.jsInfo && n.jsInfo.hjMoney) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return", n.util.message("金额需大于0", 3));

                                  case 2:
                                    return n.loading = !0, e.next = 5, n.requestSM("fastOrder");

                                  case 5:
                                    return e.next = 7, n.util.request({
                                        url: n.api.kcxd,
                                        method: "POST",
                                        mask: "下单中",
                                        data: n.params
                                    });

                                  case 7:
                                    (t = e.sent) ? (n.go({
                                        t: 3,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: t.data,
                                            orderType: 5,
                                            userId: n.uId,
                                            info: {
                                                money: n.jsInfo.hjMoney,
                                                type: "下单支付",
                                                go: {
                                                    t: 3,
                                                    url: "/yb_cy/inshop/order?idx=3"
                                                }
                                            }
                                        }))
                                    }), i.setStorageSync("note", n.params.userNote)) : n.loading = !1;

                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }),
                created: function() {
                    return s(u.default.mark(function e() {
                        return u.default.wrap(function(e) {
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
        }).call(this, d("543d").default);
    },
    "30fe": function(e, t, n) {
        n.r(t);
        var r = n("2554"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "43d3": function(e, t, n) {
        var r = n("7de8");
        n.n(r).a;
    },
    "7de8": function(e, t, n) {},
    "846c": function(e, t, n) {
        n.r(t);
        var r = n("d9cc"), o = n("30fe");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("43d3");
        var i = n("f0c5"), u = Object(i.a)(o.default, r.b, r.c, !1, null, "3d490a56", null, !1, r.a, void 0);
        t.default = u.exports;
    },
    b403: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("846c")).default);
        }).call(this, n("543d").createPage);
    },
    d9cc: function(e, t, n) {
        var r = function() {
            var r = this, e = (r.$createElement, r._self._c, r.__map(r.carList, function(e, t) {
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
    }
}, [ [ "b403", "common/runtime", "common/vendor" ] ] ]);