(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/dmf" ], {
    1892: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("c27a"), n(t("66fd")), e(n(t("5de0")).default);
        }).call(this, t("543d").createPage);
    },
    "20fc": function(e, s, f) {
        (function(r) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var u = n(f("4795")), e = f("2f62"), o = n(f("6f73"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function t(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })), t.push.apply(t, o);
                }
                return t;
            }
            function c(e, n, t, o, r, a, u) {
                try {
                    var i = e[a](u), c = i.value;
                } catch (e) {
                    return void t(e);
                }
                i.done ? n(c) : Promise.resolve(c).then(o, r);
            }
            function i(i) {
                return function() {
                    var e = this, u = arguments;
                    return new Promise(function(n, t) {
                        var o = i.apply(e, u);
                        function r(e) {
                            c(o, n, t, r, a, "next", e);
                        }
                        function a(e) {
                            c(o, n, t, r, a, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var a = {
                name: "bzf",
                components: {
                    MgCell: function() {
                        f.e("components/common/mg-cell").then(function() {
                            return resolve(f("ef6e"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    sqBtn: function() {
                        f.e("components/common/sq-btn").then(function() {
                            return resolve(f("0df4"));
                        }.bind(null, f)).catch(f.oe);
                    }
                },
                data: function() {
                    return {
                        money: "",
                        params: {
                            userId: "",
                            money: "",
                            storeId: "",
                            useCouponId: ""
                        },
                        sjxx: {},
                        mdconfig: null,
                        loading: !1,
                        kyhb: {
                            n: 0,
                            data: []
                        },
                        couponInfo: null
                    };
                },
                onLoad: function(r) {
                    var a = this;
                    return i(u.default.mark(function e() {
                        var n, t, o;
                        return u.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return a.getSystem(), a.util.setNT("买单"), a.getConfig(), n = r.scene ? decodeURIComponent(r.scene) : a.sjxxs.storeInfo.id, 
                                a.params.storeId = n, a.getLoginInfo().then(function() {
                                    a.params.userId = a.uId, a.refreshUser({
                                        userId: a.uId
                                    }, !0), a.getyhqArr();
                                }), e.next = 8, a.util.request({
                                    url: a.api.StoreInfo,
                                    data: {
                                        storeId: n
                                    }
                                });

                              case 8:
                                t = e.sent, o = t.data, a.sjxx = o, console.log(r);

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                computed: function(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? t(Object(a), !0).forEach(function(e) {
                            var n, t, o;
                            n = r, o = a[t = e], t in n ? Object.defineProperty(n, t, {
                                value: o,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[t] = o;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function(e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e));
                        });
                    }
                    return r;
                }({}, (0, e.mapState)({
                    sjxxs: function(e) {
                        return e.sjxx;
                    }
                }), {
                    yhq: function() {
                        return this.mdconfig && -1 < this.mdconfig.discount.indexOf("1");
                    },
                    vip: function() {
                        return this.isVip && this.mdconfig && -1 < this.mdconfig.discount.indexOf("3");
                    },
                    zkmoney: function() {
                        var e = 0, n = +(this.couponInfo && this.couponInfo.money || 0);
                        return this.vip && this.user.discount && (e = (10 - this.user.discount) / 10 * (this.money - n)), 
                        +e.toFixed(2);
                    },
                    total: function() {
                        var e = 0, n = +(this.couponInfo && this.couponInfo.money || 0), t = this.zkmoney;
                        return (e = +(this.money - n - t).toFixed(2)) <= 0 && (e = .01), e;
                    }
                }),
                methods: {
                    minput: function(e) {
                        this.couponInfo = null, this.changeUsecoupon(), console.log(e.detail.value);
                    },
                    changeUsecoupon: function() {
                        var e = 0, n = o.default.deepCopy(this.yhqArr);
                        for (var t in n) 1 == n[t].isUse && (this.money >= +n[t].full || 1 == n[t].isLimit ? e += n[t].isUse = 1 : n[t].isUse = 2);
                        this.kyhb = {
                            n: e,
                            data: n
                        }, r.setStorageSync("kyhb", this.kyhb), console.log(this.money, n);
                    },
                    getConfig: function() {
                        var o = this;
                        return i(u.default.mark(function e() {
                            var n, t;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.util.request({
                                        url: o.api.config,
                                        data: {
                                            ident: "cashierset"
                                        }
                                    });

                                  case 2:
                                    n = e.sent, t = n.data, o.mdconfig = t;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getyhqArr: function() {
                        var o = this;
                        return i(u.default.mark(function e() {
                            var n, t;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return o.util.showLoading(), r.setStorageSync("kyhb", {
                                        n: 0,
                                        data: []
                                    }), e.next = 4, o.util.request({
                                        url: o.api.AvailableCoupon,
                                        method: "POST",
                                        data: {
                                            type: 3,
                                            userId: o.params.userId,
                                            storeId: o.params.storeId
                                        }
                                    });

                                  case 4:
                                    n = e.sent, (t = n.data) && (o.yhqArr = t, o.changeUsecoupon()), r.hideLoading();

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    changeCoupon: function(e) {
                        this.couponInfo = e || null, this.params.useCouponId = e ? e.id : "", console.log(e);
                    },
                    qdzf: function() {
                        var t = this;
                        return i(u.default.mark(function e() {
                            var n;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (t.money) {
                                        e.next = 2;
                                        break;
                                    }
                                    return e.abrupt("return", t.util.message("请输入金额", 3));

                                  case 2:
                                    return t.params.money = t.money, t.loading = !0, e.next = 6, t.util.request({
                                        url: t.api.SaveCashierOrder,
                                        method: "POST",
                                        mask: "下单中",
                                        data: t.params
                                    });

                                  case 6:
                                    (n = e.sent) ? t.go({
                                        t: 2,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: n.data,
                                            orderType: 2,
                                            info: {
                                                money: t.total,
                                                type: "买单支付",
                                                cancel: 1,
                                                go: {
                                                    t: 3,
                                                    url: "/yb_cy/index/index"
                                                }
                                            }
                                        }))
                                    }) : t.loading = !1;

                                  case 8:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                }
            };
            s.default = a;
        }).call(this, f("543d").default);
    },
    "3d6f": function(e, n, t) {},
    "5de0": function(e, n, t) {
        t.r(n);
        var o = t("b639"), r = t("e1dc");
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        t("dcb9"), t("e282");
        var u = t("f0c5"), i = Object(u.a)(r.default, o.b, o.c, !1, null, "49c92ca6", null, !1, o.a, void 0);
        n.default = i.exports;
    },
    a3ee: function(e, n, t) {},
    b639: function(e, n, t) {
        var o = function() {
            this.$createElement;
            var e = (this._self._c, {
                padding: "50rpx"
            });
            this.$mp.data = Object.assign({}, {
                $root: {
                    a0: e,
                    a1: {
                        borderRadius: "48rpx",
                        fontSize: "34rpx",
                        color: "#fff"
                    }
                }
            });
        }, r = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
    },
    dcb9: function(e, n, t) {
        var o = t("a3ee");
        t.n(o).a;
    },
    e1dc: function(e, n, t) {
        t.r(n);
        var o = t("20fc"), r = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    e282: function(e, n, t) {
        var o = t("3d6f");
        t.n(o).a;
    }
}, [ [ "1892", "common/runtime", "common/vendor" ] ] ]);