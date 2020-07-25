(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/coupon/coupon-dl" ], {
    "19c4": function(n, t, e) {
        e.r(t);
        var o = e("6f0c"), c = e("5c43");
        for (var a in c) "default" !== a && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(a);
        var u = e("f0c5"), i = Object(u.a)(c.default, o.b, o.c, !1, null, "09e8c4a8", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "5c43": function(n, t, e) {
        e.r(t);
        var o = e("b529"), c = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = c.a;
    },
    "6f0c": function(n, t, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {});
    },
    "962c": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("19c4")).default);
        }).call(this, e("543d").createPage);
    },
    b529: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o, a = (o = e("4795")) && o.__esModule ? o : {
            default: o
        };
        function r(n, t, e, o, c, a, u) {
            try {
                var i = n[a](u), r = i.value;
            } catch (n) {
                return void e(n);
            }
            i.done ? t(r) : Promise.resolve(r).then(o, c);
        }
        var c = {
            name: "couponDl",
            components: {
                mgCoupon: function() {
                    Promise.all([ e.e("common/vendor"), e.e("components/common/mg-coupon") ]).then(function() {
                        return resolve(e("ac48"));
                    }.bind(null, e)).catch(e.oe);
                },
                MgCell: function() {
                    e.e("components/common/mg-cell").then(function() {
                        return resolve(e("ef6e"));
                    }.bind(null, e)).catch(e.oe);
                },
                mgRtext: function() {
                    Promise.all([ e.e("common/vendor"), e.e("components/swiper/rich-text") ]).then(function() {
                        return resolve(e("7cad"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    content: "",
                    dataInfo: {}
                };
            },
            onLoad: function(o) {
                var i, c = this;
                return i = a.default.mark(function n() {
                    var t, e;
                    return a.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return c.util.setNT("优惠券详情"), n.next = 3, c.util.request({
                                url: c.api.CouponInfo,
                                method: "POST",
                                mask: 1,
                                data: {
                                    couponId: o.id
                                }
                            });

                          case 3:
                            t = n.sent, e = t.data, c.dataInfo = e;

                          case 6:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }), function() {
                    var n = this, u = arguments;
                    return new Promise(function(t, e) {
                        var o = i.apply(n, u);
                        function c(n) {
                            r(o, t, e, c, a, "next", n);
                        }
                        function a(n) {
                            r(o, t, e, c, a, "throw", n);
                        }
                        c(void 0);
                    });
                }();
            },
            mixins: [ (e("2f62"), e("c1ef")).utilMixins ],
            computed: {
                fullName: function() {
                    return 2 == this.dataInfo.isLimit ? "满".concat(Number(this.dataInfo.full), "元可用") : "无门槛";
                },
                sycjName: function() {
                    if (this.dataInfo.item) {
                        var n = this.dataInfo.item, t = [];
                        return -1 < n.indexOf(1) && t.push("外卖可用"), -1 < n.indexOf(2) && t.push("堂食可用"), 
                        -1 < n.indexOf(3) && t.push("当面付可用"), t.toString();
                    }
                },
                dateText: function() {
                    return 2 == this.dataInfo.timeType && this.dataInfo.day ? "领取后".concat(this.dataInfo.day, "日内有效") : "有效期至".concat(this.timeToDate(this.dataInfo.endAt, "yyyy-MM-dd"));
                }
            },
            methods: {}
        };
        t.default = c;
    }
}, [ [ "962c", "common/runtime", "common/vendor" ] ] ]);