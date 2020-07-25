(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/vip/wkk" ], {
    "2dc6": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("7b84")).default);
        }).call(this, e("543d").createPage);
    },
    "76b4": function(n, f, s) {
        (function(n) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var t, r = (t = s("4795")) && t.__esModule ? t : {
                default: t
            }, e = s("2f62");
            function o(t, n) {
                var e = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    n && (o = o.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(t, n).enumerable;
                    })), e.push.apply(e, o);
                }
                return e;
            }
            function c(r) {
                for (var n = 1; n < arguments.length; n++) {
                    var c = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? o(Object(c), !0).forEach(function(n) {
                        var t, e, o;
                        t = r, o = c[e = n], e in t ? Object.defineProperty(t, e, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : o(Object(c)).forEach(function(n) {
                        Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(c, n));
                    });
                }
                return r;
            }
            function a(n, t, e, o, r, c, i) {
                try {
                    var u = n[c](i), a = u.value;
                } catch (n) {
                    return void e(n);
                }
                u.done ? t(a) : Promise.resolve(a).then(o, r);
            }
            function i(u) {
                return function() {
                    var n = this, i = arguments;
                    return new Promise(function(t, e) {
                        var o = u.apply(n, i);
                        function r(n) {
                            a(o, t, e, r, c, "next", n);
                        }
                        function c(n) {
                            a(o, t, e, r, c, "throw", n);
                        }
                        r(void 0);
                    });
                };
            }
            var u = {
                name: "order-index",
                components: {
                    MgImg: function() {
                        s.e("components/common/mg-img").then(function() {
                            return resolve(s("e668"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    entryButtonGroup: function() {
                        s.e("components/swiper/entry-button-group").then(function() {
                            return resolve(s("b5a6"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    mgCoupon: function() {
                        Promise.all([ s.e("common/vendor"), s.e("components/common/mg-coupon") ]).then(function() {
                            return resolve(s("ac48"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    sqBtn: function() {
                        s.e("components/common/sq-btn").then(function() {
                            return resolve(s("0df4"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    load: function() {
                        s.e("components/common/load").then(function() {
                            return resolve(s("de6d"));
                        }.bind(null, s)).catch(s.oe);
                    }
                },
                data: function() {
                    return {
                        list: []
                    };
                },
                onLoad: function(n) {
                    var t = this;
                    return i(r.default.mark(function n() {
                        return r.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                t.util.setNB("#211c1c"), t.getSystem(), t.getLoginInfo().then(function() {
                                    t.refreshUser({
                                        userId: t.uId,
                                        nomask: 1
                                    }, !0);
                                }), t.getVipConfig().then(function(n) {
                                    t.util.setNT(t.vipConfig.title);
                                }), t.getCardCoupons(), t.getSwitchConfig();

                              case 6:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                computed: c({}, (0, e.mapState)([ "vipConfig" ]), {
                    btng: function() {
                        return {
                            buttonNumberOfCol: 4,
                            buttonNumberOfRow: 2,
                            color: "#333",
                            entryButtonList: this.vipConfig.powerList ? this.vipConfig.powerList.map(function(n) {
                                return {
                                    url: n.icon,
                                    label: n.name
                                };
                            }) : [],
                            shape: 3,
                            autoplay: !0,
                            circular: !0,
                            interval: "5000"
                        };
                    }
                }),
                methods: c({}, (0, e.mapActions)([ "getVipConfig" ]), {}, (0, e.mapActions)("dndc", [ "getSwitchConfig" ]), {
                    getCardCoupons: function() {
                        var o = this;
                        return i(r.default.mark(function n() {
                            var t, e;
                            return r.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, o.util.request({
                                        url: o.api.CardCoupons
                                    });

                                  case 2:
                                    t = n.sent, e = t.data, o.list = e;

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    btntap: function() {
                        var t = this;
                        0 < this.user.rankId || n.showModal({
                            title: "温馨提示",
                            content: "开通会员卡即可享受会员专享优惠券",
                            cancelText: "暂不开通",
                            confirmText: "立即开通",
                            success: function(n) {
                                n.confirm && t.go({
                                    t: 1,
                                    url: "open"
                                });
                            }
                        });
                    }
                }),
                onShareAppMessage: function() {
                    return {
                        title: this.vipConfig.title
                    };
                }
            };
            f.default = u;
        }).call(this, s("543d").default);
    },
    "7b84": function(n, t, e) {
        e.r(t);
        var o = e("c2c1"), r = e("eef8");
        for (var c in r) "default" !== c && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(c);
        e("ea80");
        var i = e("f0c5"), u = Object(i.a)(r.default, o.b, o.c, !1, null, "2e452483", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    c2c1: function(n, t, e) {
        var o = function() {
            this.$createElement;
            var n = (this._self._c, {
                fontSize: "18px",
                height: "100rpx",
                background: "linear-gradient(to right, #f7d492, #f7c241)",
                borderRadius: "50rpx",
                color: "#713C0E",
                boxShadow: "0rpx 5rpx 20rpx 0 #f7d492"
            });
            this.$mp.data = Object.assign({}, {
                $root: {
                    a0: n
                }
            });
        }, r = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {});
    },
    cb2c: function(n, t, e) {},
    ea80: function(n, t, e) {
        var o = e("cb2c");
        e.n(o).a;
    },
    eef8: function(n, t, e) {
        e.r(t);
        var o = e("76b4"), r = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = r.a;
    }
}, [ [ "2dc6", "common/runtime", "common/vendor" ] ] ]);