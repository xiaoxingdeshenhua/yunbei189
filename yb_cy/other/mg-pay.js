(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/other/mg-pay", "components/common/mg-cell" ], {
    "35c7": function(e, t, n) {
        var a = function() {
            var e = this, t = (e.$createElement, e._self._c, e.__get_style([ {
                background: e.bgc
            }, e.sname ]));
            e.$mp.data = Object.assign({}, {
                $root: {
                    s0: t
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    4390: function(e, t, n) {
        n.r(t);
        var a = n("d64b"), o = n("4a74");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("997b");
        var i = n("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "0b420294", null, !1, a.a, void 0);
        t.default = u.exports;
    },
    "4a74": function(e, t, n) {
        n.r(t);
        var a = n("f460"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    "673b": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("4390")).default);
        }).call(this, n("543d").createPage);
    },
    "81af": function(e, t, n) {
        var a = n("d1e3");
        n.n(a).a;
    },
    "89ac": function(e, t, n) {},
    "997b": function(e, t, n) {
        var a = n("89ac");
        n.n(a).a;
    },
    bdf6: function(e, t, n) {
        n.r(t);
        var a = n("cada"), o = n.n(a);
        for (var r in a) "default" !== r && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(r);
        t.default = o.a;
    },
    cada: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            name: "mg-cell",
            props: {
                bgc: {
                    type: String,
                    default: ""
                },
                last: "",
                cname: "",
                noc: "",
                sname: "",
                isl: "",
                isr: "",
                ht: "",
                hw: "",
                img: "",
                m: {
                    type: String,
                    default: "aspectFill"
                },
                w: "",
                h: "",
                brs: "",
                btt: "",
                bttc: "",
                bbt: "",
                ft: "",
                ftc: "",
                color: "",
                arrow: "",
                hc: {
                    type: String,
                    value: ""
                }
            },
            data: function() {
                return {};
            },
            computed: {},
            methods: {
                maskTap: function() {
                    this.$emit("input", !1);
                }
            }
        };
        t.default = a;
    },
    d1e3: function(e, t, n) {},
    d64b: function(e, t, n) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    ef6e: function(e, t, n) {
        n.r(t);
        var a = n("35c7"), o = n("bdf6");
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        n("81af");
        var i = n("f0c5"), u = Object(i.a)(o.default, a.b, a.c, !1, null, "0cce9c88", null, !1, a.a, void 0);
        t.default = u.exports;
    },
    f460: function(e, r, d) {
        (function(i) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var u = t(d("4795")), e = d("2f62"), c = (t(d("ef6e")), t(d("6f73")));
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function n(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, a);
                }
                return n;
            }
            function a(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(r), !0).forEach(function(e) {
                        var t, n, a;
                        t = o, a = r[n = e], n in t ? Object.defineProperty(t, n, {
                            value: a,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = a;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(r, e));
                    });
                }
                return o;
            }
            function f(e, t, n, a, o, r, i) {
                try {
                    var u = e[r](i), c = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(c) : Promise.resolve(c).then(a, o);
            }
            function s(u) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(t, n) {
                        var a = u.apply(e, i);
                        function o(e) {
                            f(a, t, n, o, r, "next", e);
                        }
                        function r(e) {
                            f(a, t, n, o, r, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                name: "mg-pay",
                components: {
                    mgPopup: function() {
                        d.e("components/common/popup").then(function() {
                            return resolve(d("da89"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    mgModal: function() {
                        d.e("components/common/modal").then(function() {
                            return resolve(d("ee48"));
                        }.bind(null, d)).catch(d.oe);
                    }
                },
                data: function() {
                    return {
                        loading: !1,
                        payObj: {},
                        payArr: [],
                        showCoupon: !1,
                        stime: "",
                        info: null
                    };
                },
                onLoad: function(a) {
                    var o = this;
                    return s(u.default.mark(function e() {
                        var t, n;
                        return u.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (i.getProvider({
                                    service: "payment",
                                    success: function(e) {
                                        e.provider.indexOf("wxpay") ? o.provider = "wxpay" : e.provider.indexOf("alipay") ? o.provider = "alipay" : e.provider.indexOf("baidu") ? o.provider = "baidu" : e.provider.indexOf("toutiao") && (o.provider = "toutiao"), 
                                        console.log(e.provider);
                                    }
                                }), o.payObj = JSON.parse(decodeURIComponent(a.payObj)), o.refreshUser({
                                    userId: o.uId
                                }, !0), o.getPayConfig().then(function(e) {
                                    o.getPayArr();
                                }), 1 != o.payObj.orderType) {
                                    e.next = 10;
                                    break;
                                }
                                return e.next = 7, o.util.request({
                                    url: o.api.OrderInfo,
                                    mask: 1,
                                    data: {
                                        orderId: o.payObj.orderId
                                    }
                                });

                              case 7:
                                t = e.sent, (n = t.data) && (1 == (o.info = n).state && o.djs(n.createdAt));

                              case 10:
                                i.setStorageSync("payPage", !0), i.setStorageSync("payedCoupon", !1), console.log(a, o.payObj);

                              case 13:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onUnload: function() {
                    var e = this;
                    setTimeout(function() {
                        i.removeStorageSync("payPage"), e.dsq && clearInterval(e.dsq);
                    }, 1e3);
                },
                mixins: [ d("c1ef").utilMixins ],
                computed: a({}, (0, e.mapState)([ "payConfig" ]), {
                    pmoney: function() {
                        return Number(this.payObj.info && this.payObj.info.money || 0).toFixed(2);
                    }
                }),
                methods: a({}, (0, e.mapActions)([ "getPayConfig" ]), {
                    getPayArr: function() {
                        var e = [];
                        switch ("mini" == this.api.platform ? e.push({
                            name: "微信支付",
                            value: "wx",
                            img: "/static/pay/wxzf.png",
                            checked: !0
                        }) : "ali" == this.api.platform ? e.push({
                            name: "支付宝支付",
                            value: "zfb",
                            img: "/static/pay/zfbzf.png",
                            checked: !0
                        }) : "baidu" == this.api.platform ? e.push({
                            name: "百度支付",
                            value: "baidu",
                            img: "/static/pay/bdzf.png",
                            checked: !0
                        }) : "toutiao" == this.api.platform && e.push({
                            name: "在线支付",
                            value: "toutiao",
                            img: "/static/pay/ttzf.png",
                            checked: !0
                        }), +this.payObj.orderType) {
                          case 3:
                            break;

                          default:
                            1 == this.payConfig.balancePayChange && e.push({
                                name: "余额支付",
                                value: "ye",
                                img: "/static/pay/yezf.png"
                            });
                        }
                        this.payArr = e;
                    },
                    djs: function(e) {
                        var t = this, n = this.dateToTime(), a = +e + 900;
                        n < a && (this.stime = c.default.countDownTime(a - n), this.dsq = setInterval(s(u.default.mark(function e() {
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    (a -= 1) == n && (clearInterval(t.dsq), t.go({
                                        t: 4
                                    })), t.stime = c.default.countDownTime(a - n);

                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        })), 1e3));
                    },
                    formSubmit: function(o) {
                        var r = this;
                        return s(u.default.mark(function e() {
                            var n, t, a;
                            return u.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (n = c.default.deepCopy(r.payObj), "ye" != o.detail.value.radiogroup) {
                                        e.next = 5;
                                        break;
                                    }
                                    if (n.payType = 1, !(+r.pmoney > +r.user.balance)) {
                                        e.next = 5;
                                        break;
                                    }
                                    return e.abrupt("return", r.util.message("您的余额不足支付", 3));

                                  case 5:
                                    return console.log(o.detail.value, n), r.loading = !0, e.next = 9, r.util.request({
                                        url: r.api.pay,
                                        method: "POST",
                                        mask: 1,
                                        data: n
                                    });

                                  case 9:
                                    (t = e.sent) && ("ye" != o.detail.value.radiogroup ? i.requestPayment({
                                        provider: r.provider,
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            if (r.util.message("支付成功", 1), i.setStorageSync("payedCoupon", {
                                                orderId: n.orderId,
                                                paymoney: r.pmoney
                                            }), 4 == n.info.go.t) {
                                                var t = r.util.getPage();
                                                t.$vm.paySuccess && t.$vm.paySuccess();
                                            }
                                            setTimeout(function() {
                                                r.go(n.info.go);
                                            }, 1e3);
                                        },
                                        fail: function(e) {
                                            if (r.util.message("取消支付", 2), n.info.cancel) return r.loading = !1;
                                            setTimeout(function() {
                                                r.go(n.info.go);
                                            }, 1e3), console.log("fail:" + JSON.stringify(e));
                                        },
                                        complete: function(e) {
                                            console.log("paymentcomplete", e);
                                        }
                                    }) : (r.util.message("支付成功", 1), i.setStorageSync("payedCoupon", {
                                        orderId: n.orderId,
                                        paymoney: r.pmoney
                                    }), 4 == n.info.go.t && ((a = r.util.getPage()).$vm.paySuccess && a.$vm.paySuccess()), 
                                    setTimeout(function() {
                                        r.go(n.info.go);
                                    }, 1e3))), console.log("formSubmit payres", t);

                                  case 12:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                })
            };
            r.default = o;
        }).call(this, d("543d").default);
    }
}, [ [ "673b", "common/runtime", "common/vendor" ] ] ]);