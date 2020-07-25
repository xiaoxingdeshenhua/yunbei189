(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/goods/goods-car" ], {
    "046c": function(t, e, n) {
        n.r(e);
        var o = n("9473"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    "0e67": function(t, e, n) {
        n.r(e);
        var o = n("852e"), r = n("046c");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        n("5a9a");
        var c = n("f0c5"), s = Object(c.a)(r.default, o.b, o.c, !1, null, "4bb37dac", null, !1, o.a, void 0);
        e.default = s.exports;
    },
    "13fc": function(t, e, n) {},
    "5a9a": function(t, e, n) {
        var o = n("13fc");
        n.n(o).a;
    },
    "852e": function(t, e, n) {
        var o = function() {
            var o = this, t = (o.$createElement, o._self._c, o.__get_style([ {
                bottom: o.carBtm + "rpx"
            }, o.sname ])), e = o.__map(o.carList, function(t, e) {
                var n = o.itemTotal(t.price, t.num);
                return {
                    $orig: o.__get_orig(t),
                    m0: n
                };
            });
            o._isMounted || (o.e0 = function(t) {
                o.qsText.reach && o.isLogin && o.goPay();
            }), o.$mp.data = Object.assign({}, {
                $root: {
                    s0: t,
                    l0: e
                }
            });
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    9473: function(t, l, f) {
        (function(r) {
            Object.defineProperty(l, "__esModule", {
                value: !0
            }), l.default = void 0;
            var a = n(f("4795")), t = f("2f62"), e = n(f("6f73"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function i(t, e, n, o, r, a, c) {
                try {
                    var s = t[a](c), i = s.value;
                } catch (t) {
                    return void n(t);
                }
                s.done ? e(i) : Promise.resolve(i).then(o, r);
            }
            function c(s) {
                return function() {
                    var t = this, c = arguments;
                    return new Promise(function(e, n) {
                        var o = s.apply(t, c);
                        function r(t) {
                            i(o, e, n, r, a, "next", t);
                        }
                        function a(t) {
                            i(o, e, n, r, a, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(a), !0).forEach(function(t) {
                        var e, n, o;
                        e = r, o = a[n = t], n in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : o(Object(a)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return r;
            }
            var u = {
                name: "goods-car",
                components: {
                    addGoods: function() {
                        f.e("components/goods/add-goods").then(function() {
                            return resolve(f("eb11"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    mgPopup: function() {
                        f.e("components/common/popup").then(function() {
                            return resolve(f("da89"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    sqBtn: function() {
                        f.e("components/common/sq-btn").then(function() {
                            return resolve(f("0df4"));
                        }.bind(null, f)).catch(f.oe);
                    }
                },
                props: {
                    cName: {
                        type: String,
                        default: ""
                    },
                    sname: "",
                    carBtm: {
                        type: String,
                        default: ""
                    },
                    carlistPab: {
                        type: String,
                        default: ""
                    },
                    zIndex: {
                        type: Number,
                        default: 999
                    },
                    ingopay: {
                        type: String,
                        default: "1"
                    },
                    buytype: {
                        type: Number,
                        default: 1
                    },
                    sjxx: "",
                    havebxp: ""
                },
                data: function() {
                    return {
                        showCar: !1
                    };
                },
                watch: {
                    showCar: function(t) {
                        this.$emit("update:show", t);
                    }
                },
                computed: s({}, (0, t.mapState)([ "carList" ]), {
                    cshow: function() {
                        return 1 == this.sjxx.storeInfo.isOpen && 0 < this.carList.length || 1 != this.sjxx.storeInfo.isOpen && 0 < this.carList.length && this.sjxx.orderSet.data.orders;
                    },
                    xxshow: function() {
                        return 1 != this.sjxx.storeInfo.isOpen && (0 == this.carList.length || !this.sjxx.orderSet.data.orders);
                    },
                    getTotal: function() {
                        var e = 0, n = 0, o = 0;
                        return this.carList.forEach(function(t) {
                            e += t.price * t.num + t.boxMoney * t.num, n += t.boxMoney * t.num, o += t.num;
                        }), {
                            total: +e.toFixed(2),
                            bzf: +n.toFixed(2),
                            num: o
                        };
                    },
                    carPrice: function() {
                        var t = this.mjInfo.mjMoney;
                        return {
                            reduceMoney: t,
                            nowPrice: +(this.getTotal.total - t).toFixed(2)
                        };
                    },
                    mjInfo: function() {
                        var t = this.sjxx.user, e = this.getTotal.total, n = [], o = "", r = 0, a = -1, c = "";
                        return this.sjxx.newStoreSet.data.length || this.sjxx.vipStoreSet.data.length || this.sjxx.storeSet.data.length ? (1 == t.isNew && this.sjxx.newStoreSet.data.length ? (n = [].concat(this.sjxx.newStoreSet.data).reverse(), 
                        o = this.sjxx.newStoreSet.type) : 1 == t.isVip && this.sjxx.vipStoreSet.data.length ? (n = [].concat(this.sjxx.vipStoreSet.data).reverse(), 
                        o = this.sjxx.vipStoreSet.type) : (n = [].concat(this.sjxx.storeSet.data).reverse(), 
                        o = this.sjxx.storeSet.type), n.length && (1 == o ? (r = Math.floor(e / n[0].full) * n[0].reduce, 
                        c = Math.floor(e / n[0].full) <= 0 ? "每满".concat(this.sl + n[0].full, "减").concat(n[0].reduce) : "已减".concat(this.sl + r)) : (-1 < (a = n.findIndex(function(t) {
                            return e >= t.full;
                        })) && (r = n[a].reduce), -1 == a ? c = "满".concat(this.sl).concat(n[n.length - 1].full, "减").concat(this.sl).concat(n[n.length - 1].reduce, ",还差").concat(this.sl).concat((n[n.length - 1].full - e).toFixed(2)) : 0 == a ? c = "已减".concat(this.sl + r) : 0 < a && (c = "已减".concat(this.sl + r, ",再满").concat(this.sl + n[a - 1].full, "减").concat(this.sl + n[a - 1].reduce))))) : r = 0, 
                        +this.sjxx.storeInfo.deliveryStartMoney > e && (c = "还差".concat(this.sl).concat((+this.sjxx.storeInfo.deliveryStartMoney - e).toFixed(2), "起送")), 
                        {
                            mjMoney: r,
                            text: c,
                            discount: [].concat(n).reverse()
                        };
                    },
                    qsText: function() {
                        var t = this.getTotal.total, e = +this.sjxx.storeInfo.deliveryStartMoney, n = "", o = !1;
                        if (t <= 0) n = 2 == this.buytype ? this.sl + e + "起送" : "请添加"; else if (t < e && 2 == this.buytype) {
                            var r = e - t;
                            n = "差".concat(this.sl) + r.toFixed(2) + "起送";
                        } else n = "去结算", o = !0;
                        return {
                            text: n,
                            reach: o
                        };
                    }
                }),
                methods: s({}, (0, t.mapMutations)([ "setCarList" ]), {
                    linkShop: function() {
                        this.util.makeTel(this.sjxx.storeInfo.tel);
                    },
                    openCar: function() {
                        this.showCar = !0;
                    },
                    dec: function(t) {
                        this.$emit("dec", t), !this.carList.length && (this.showCar = !1);
                    },
                    add: function(t) {
                        this.$emit("add", {
                            g: t
                        });
                    },
                    clearCar: function() {
                        var e = this;
                        return c(a.default.mark(function t() {
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, e.util.modal("确认清空购物车吗？");

                                  case 3:
                                    e.setCarList([]), e.$emit("celar"), e.$store.getters.hcCar(), e.showCar = !1, t.next = 11;
                                    break;

                                  case 9:
                                    t.prev = 9, t.t0 = t.catch(0);

                                  case 11:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 9 ] ]);
                        }))();
                    },
                    goPay: function() {
                        var o = this;
                        return c(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (1 != o.ingopay) {
                                        t.next = 16;
                                        break;
                                    }
                                    if (o.util.showLoading(), e = o.carList.findIndex(function(t) {
                                        return 1 == t.required;
                                    }), n = "", !(e < 0 && o.havebxp)) {
                                        t.next = 8;
                                        break;
                                    }
                                    n = "请选择必选品", r.hideLoading(), t.next = 13;
                                    break;

                                  case 8:
                                    return r.setStorageSync("carInfo", {
                                        carList: o.carList,
                                        getTotal: o.getTotal,
                                        mjInfo: o.mjInfo,
                                        carPrice: o.carPrice,
                                        sjxx: o.sjxx,
                                        buyType: o.buytype
                                    }), r.navigateTo({
                                        url: "pay-order?id=1&name=uniapp"
                                    }), o.showCar = !1, r.hideLoading(), t.abrupt("return");

                                  case 13:
                                    o.util.message(n, 3, 1500), t.next = 17;
                                    break;

                                  case 16:
                                    o.$emit("gopay");

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    itemTotal: function(t, e) {
                        return (t * e).toFixed(2);
                    },
                    colorToRGB: function(t) {
                        return e.default.colorToRGB(t);
                    }
                }),
                created: function() {}
            };
            l.default = u;
        }).call(this, f("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/goods/goods-car-create-component", {
    "components/goods/goods-car-create-component": function(t, e, n) {
        n("543d").createComponent(n("0e67"));
    }
}, [ [ "components/goods/goods-car-create-component" ] ] ]);