(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/signin/my-coupon" ], {
    "3a98": function(t, n, e) {
        var a = e("9e9f");
        e.n(a).a;
    },
    4168: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("c27a"), n(e("66fd")), t(n(e("fec2")).default);
        }).call(this, e("543d").createPage);
    },
    "4fb2": function(t, n, e) {
        e.r(n);
        var a = e("fb46"), r = e.n(a);
        for (var o in a) "default" !== o && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(o);
        n.default = r.a;
    },
    "8a66": function(t, n, e) {
        var a = function() {
            var a = this, t = (a.$createElement, a._self._c, a.__map(a.dlData, function(t, n) {
                var e = a.timeToDate(t.endAt, "yyyy-MM-dd");
                return {
                    $orig: a.__get_orig(t),
                    m0: e
                };
            }));
            a.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, r = [];
        e.d(n, "b", function() {
            return a;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    "9e9f": function(t, n, e) {},
    fb46: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var a, r = (a = e("4795")) && a.__esModule ? a : {
            default: a
        };
        function c(t, n, e, a, r, o, u) {
            try {
                var i = t[o](u), c = i.value;
            } catch (t) {
                return void e(t);
            }
            i.done ? n(c) : Promise.resolve(c).then(a, r);
        }
        function o(i) {
            return function() {
                var t = this, u = arguments;
                return new Promise(function(n, e) {
                    var a = i.apply(t, u);
                    function r(t) {
                        c(a, n, e, r, o, "next", t);
                    }
                    function o(t) {
                        c(a, n, e, r, o, "throw", t);
                    }
                    r(void 0);
                });
            };
        }
        var u = {
            name: "mySignin",
            components: {
                jzz: function() {
                    e.e("components/common/jzz").then(function() {
                        return resolve(e("707a"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    params: {
                        userId: "",
                        page: 1,
                        size: 10,
                        type: 5
                    },
                    dlData: [],
                    isget: !1,
                    mygd: !1
                };
            },
            onLoad: function() {
                this.getSystem(this), this.util.setNT("我的优惠券"), this.params.userId = this.user.userId, 
                this.getData();
            },
            mixins: [ (e("2f62"), e("c1ef")).utilMixins ],
            computed: {},
            methods: {
                getData: function() {
                    var a = this;
                    return o(r.default.mark(function t() {
                        var n, e;
                        return r.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.util.request({
                                    url: a.api.MyCoupon,
                                    mask: 1,
                                    data: a.params
                                });

                              case 2:
                                n = t.sent, e = n.data, console.log("优惠券明细", e), a.dlData = a.dlData.concat(e), 
                                a.isget = !0, a.mygd = a.params.size > e.length, a.params.page++;

                              case 9:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                integralMall: function() {
                    this.go({
                        t: 1,
                        url: "/yb_cy/my/integral/shop-index"
                    });
                }
            },
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getData());
            },
            created: function() {
                return o(r.default.mark(function t() {
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            }
        };
        n.default = u;
    },
    fec2: function(t, n, e) {
        e.r(n);
        var a = e("8a66"), r = e("4fb2");
        for (var o in r) "default" !== o && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(o);
        e("3a98");
        var u = e("f0c5"), i = Object(u.a)(r.default, a.b, a.c, !1, null, "d7a3ed3e", null, !1, a.a, void 0);
        n.default = i.exports;
    }
}, [ [ "4168", "common/runtime", "common/vendor" ] ] ]);