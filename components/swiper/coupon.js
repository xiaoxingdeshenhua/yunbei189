(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/coupon" ], {
    "1abb": function(e, n, t) {
        t.r(n);
        var o = t("f21f"), r = t("e90b");
        for (var u in r) "default" !== u && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(u);
        t("9cc8");
        var c = t("f0c5"), a = Object(c.a)(r.default, o.b, o.c, !1, null, "ccf9e1fe", null, !1, o.a, void 0);
        n.default = a.exports;
    },
    "1fbe": function(e, n, t) {},
    "9cc8": function(e, n, t) {
        var o = t("1fbe");
        t.n(o).a;
    },
    de54: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, r = (o = t("4795")) && o.__esModule ? o : {
            default: o
        };
        function i(e, n, t, o, r, u, c) {
            try {
                var a = e[u](c), i = a.value;
            } catch (e) {
                return void t(e);
            }
            a.done ? n(i) : Promise.resolve(i).then(o, r);
        }
        function u(a) {
            return function() {
                var e = this, c = arguments;
                return new Promise(function(n, t) {
                    var o = a.apply(e, c);
                    function r(e) {
                        i(o, n, t, r, u, "next", e);
                    }
                    function u(e) {
                        i(o, n, t, r, u, "throw", e);
                    }
                    r(void 0);
                });
            };
        }
        t("2f62");
        var c = {
            name: "coupon",
            components: {
                mgCoupon: function() {
                    Promise.all([ t.e("common/vendor"), t.e("components/common/mg-coupon") ]).then(function() {
                        return resolve(t("ac48"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {
                            infoTitle: "优惠券",
                            isBottom: 0,
                            topMargin: 0
                        };
                    }
                },
                storeInfo: {},
                u: {
                    type: String,
                    default: "px"
                },
                color: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    list: []
                };
            },
            watch: {
                storeInfo: {
                    handler: function(e) {
                        var n = this;
                        return u(r.default.mark(function e() {
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n.storeInfo.id && n.refresh();

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    immediate: !0
                }
            },
            methods: {
                refresh: function() {
                    var o = this;
                    return u(r.default.mark(function e() {
                        var n, t;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.util.request({
                                    url: o.api.Coupons,
                                    data: {
                                        storeId: o.storeInfo.id,
                                        page: 1,
                                        size: 10,
                                        userId: o.uId
                                    }
                                });

                              case 2:
                                n = e.sent, t = n.data, o.list = t;

                              case 5:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                btntap: function(t) {
                    var o = this;
                    return u(r.default.mark(function e() {
                        var n;
                        return r.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, o.util.request({
                                    url: o.api.ReceiveCoupon,
                                    method: "POST",
                                    mask: 1,
                                    data: {
                                        couponId: t,
                                        userId: o.uId
                                    }
                                });

                              case 2:
                                n = e.sent, o.refresh(), n && o.util.message("领取成功", 1), console.log(t);

                              case 6:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        n.default = c;
    },
    e90b: function(e, n, t) {
        t.r(n);
        var o = t("de54"), r = t.n(o);
        for (var u in o) "default" !== u && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(u);
        n.default = r.a;
    },
    f21f: function(e, n, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/coupon-create-component", {
    "components/swiper/coupon-create-component": function(e, n, t) {
        t("543d").createComponent(t("1abb"));
    }
}, [ [ "components/swiper/coupon-create-component" ] ] ]);