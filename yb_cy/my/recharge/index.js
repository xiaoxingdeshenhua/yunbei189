(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/recharge/index" ], {
    "0d7c": function(e, n, t) {
        var r = t("9561");
        t.n(r).a;
    },
    "6e68": function(e, n, t) {
        var r = function() {
            var e = this, n = (e.$createElement, e._self._c, {
                background: "#4781FE"
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: n
                }
            });
        }, o = [];
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    7431: function(e, n, t) {
        t.r(n);
        var r = t("8349"), o = t.n(r);
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        n.default = o.a;
    },
    8349: function(e, s, d) {
        (function(o) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var a = n(d("4795")), e = d("2f62");
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function t(n, e) {
                var t = Object.keys(n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })), t.push.apply(t, r);
                }
                return t;
            }
            function r(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? t(Object(a), !0).forEach(function(e) {
                        var n, t, r;
                        n = o, r = a[t = e], t in n ? Object.defineProperty(n, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : n[t] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return o;
            }
            function i(e, n, t, r, o, a, c) {
                try {
                    var u = e[a](c), i = u.value;
                } catch (e) {
                    return void t(e);
                }
                u.done ? n(i) : Promise.resolve(i).then(r, o);
            }
            function c(u) {
                return function() {
                    var e = this, c = arguments;
                    return new Promise(function(n, t) {
                        var r = u.apply(e, c);
                        function o(e) {
                            i(r, n, t, o, a, "next", e);
                        }
                        function a(e) {
                            i(r, n, t, o, a, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            n(d("6f73"));
            var u = {
                name: "index",
                components: {
                    MgImg: function() {
                        d.e("components/common/mg-img").then(function() {
                            return resolve(d("e668"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgInput: function() {
                        d.e("components/form/mg-input").then(function() {
                            return resolve(d("6831"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    uniFab: function() {
                        d.e("components/third/uni-fab").then(function() {
                            return resolve(d("151d"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgAgree: function() {
                        d.e("components/form/mg-agree").then(function() {
                            return resolve(d("d2af"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    sqBtn: function() {
                        d.e("components/common/sq-btn").then(function() {
                            return resolve(d("0df4"));
                        }.bind(null, d)).catch(d.oe);
                    }
                },
                data: function() {
                    return {
                        rMoney: [],
                        balanced: "",
                        params: {
                            money: "",
                            userId: ""
                        },
                        loading: !1,
                        isAgree: !0,
                        pattern: {
                            color: "#7A7E83",
                            backgroundColor: "#fff",
                            selectedColor: "#007AFF",
                            buttonColor: "#007AFF"
                        },
                        content: [ {
                            icon: "iconzy",
                            text: "首页",
                            url: "/yb_cy/index/index"
                        }, {
                            icon: "icondd",
                            text: "订单",
                            url: "/yb_cy/order/index"
                        }, {
                            icon: "iconwd",
                            text: "我的",
                            url: "/yb_cy/my/index"
                        } ]
                    };
                },
                onLoad: function() {
                    var e = this;
                    this.getSystem().then(function() {
                        e.isAgree = 1 == e.system.isCheck;
                    }), this.util.setNT("充值"), this.getLoginInfo().then(function() {
                        e.params.userId = e.uId, e.balanceData();
                    }), this.getSwitchConfig(), this.rechargeRule();
                },
                onShow: function() {
                    var r = this;
                    return c(a.default.mark(function e() {
                        var n, t;
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (r.loading = !1, !o.getStorageSync("payedCoupon")) {
                                    e.next = 8;
                                    break;
                                }
                                return e.next = 4, r.util.request({
                                    url: r.api.RechargePop,
                                    method: "POST",
                                    mask: 1,
                                    data: {
                                        orderId: o.getStorageSync("payedCoupon").orderId
                                    }
                                });

                              case 4:
                                n = e.sent, t = n.data, o.setStorageSync("payedCoupon", !1), 1 == t && o.showModal({
                                    title: "提示",
                                    content: "您已成为会员，请完善资料",
                                    confirmText: "完善资料",
                                    success: function(e) {
                                        e.confirm ? r.go({
                                            t: 2,
                                            url: "/yb_cy/my/vip/open?userId=" + r.uId
                                        }) : r.go({
                                            t: 4
                                        });
                                    }
                                });

                              case 8:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                computed: r({}, (0, e.mapState)("dndc", [ "mySwitch" ])),
                methods: r({}, (0, e.mapActions)("dndc", [ "getSwitchConfig" ]), {
                    rechargeRule: function() {
                        var r = this;
                        return c(a.default.mark(function e() {
                            var n, t;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.RechargeRule
                                    });

                                  case 2:
                                    n = e.sent, t = n.data, r.rMoney = t;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    balanceData: function() {
                        var r = this;
                        return c(a.default.mark(function e() {
                            var n, t;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.UserBalance,
                                        data: {
                                            type: 1,
                                            userId: r.user.id
                                        }
                                    });

                                  case 2:
                                    n = e.sent, t = n.data, r.balanced = t;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    clickMode: function(e) {
                        this.util.showLoading("设置中..."), this.params.money = e.money, setTimeout(function() {
                            o.hideLoading();
                        }, 200);
                    },
                    checkboxChange: function(e) {
                        console.log(e.detail.value, this.isAgree), 1 == this.isAgree ? this.isAgree = !1 : this.isAgree = !0;
                    },
                    paySuccess: function() {
                        var n = this;
                        return c(a.default.mark(function e() {
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n.refreshUser({
                                        userId: n.uId
                                    }, !0), n.balanceData(), console.log("paySuccess");

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    save: function() {
                        var t = this;
                        return c(a.default.mark(function e() {
                            var n;
                            return a.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("" != t.params.money) {
                                        e.next = 4;
                                        break;
                                    }
                                    t.util.message("请选择充值金额", 3), e.next = 16;
                                    break;

                                  case 4:
                                    if (0 != t.isAgree) {
                                        e.next = 8;
                                        break;
                                    }
                                    return e.abrupt("return", t.util.message("请阅读并勾选充值服务协议", 3));

                                  case 8:
                                    return t.loading = !0, e.next = 11, t.requestSM("recharge");

                                  case 11:
                                    return e.next = 13, t.util.request({
                                        url: t.api.RechargeOrder,
                                        method: "POST",
                                        mask: "下单中",
                                        data: t.params
                                    });

                                  case 13:
                                    n = e.sent, console.log("cz res", n, t.params.money), n ? t.go({
                                        t: 1,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: n.data,
                                            orderType: 3,
                                            info: {
                                                money: t.params.money,
                                                type: "充值支付",
                                                cancel: 1,
                                                go: {
                                                    t: 4,
                                                    url: "/yb_cy/my/index"
                                                }
                                            }
                                        }))
                                    }) : t.loading = !1;

                                  case 16:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    trigger: function(e) {
                        this.go({
                            t: 3,
                            url: e.item.url
                        }), console.log(e);
                    }
                }),
                created: function() {
                    return c(a.default.mark(function e() {
                        return a.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            };
            s.default = u;
        }).call(this, d("543d").default);
    },
    9561: function(e, n, t) {},
    a100: function(e, n, t) {
        t.r(n);
        var r = t("6e68"), o = t("7431");
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("0d7c");
        var c = t("f0c5"), u = Object(c.a)(o.default, r.b, r.c, !1, null, "46041bde", null, !1, r.a, void 0);
        n.default = u.exports;
    },
    c6dd: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("c27a"), n(t("66fd")), e(n(t("a100")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "c6dd", "common/runtime", "common/vendor" ] ] ]);