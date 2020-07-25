(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/coupon/center" ], {
    6457: function(t, e, n) {
        var a = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    9154: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("bd38")).default);
        }).call(this, n("543d").createPage);
    },
    "9d9d": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a, o = (a = n("4795")) && a.__esModule ? a : {
            default: a
        };
        function i(t, e, n, a, o, r, u) {
            try {
                var s = t[r](u), i = s.value;
            } catch (t) {
                return void n(t);
            }
            s.done ? e(i) : Promise.resolve(i).then(a, o);
        }
        function r(s) {
            return function() {
                var t = this, u = arguments;
                return new Promise(function(e, n) {
                    var a = s.apply(t, u);
                    function o(t) {
                        i(a, e, n, o, r, "next", t);
                    }
                    function r(t) {
                        i(a, e, n, o, r, "throw", t);
                    }
                    o(void 0);
                });
            };
        }
        n("2f62");
        var u = {
            name: "myCoupon",
            components: {
                navTab: function() {
                    n.e("components/swiper/nav-tab").then(function() {
                        return resolve(n("2040"));
                    }.bind(null, n)).catch(n.oe);
                },
                mgCoupon: function() {
                    Promise.all([ n.e("common/vendor"), n.e("components/common/mg-coupon") ]).then(function() {
                        return resolve(n("ac48"));
                    }.bind(null, n)).catch(n.oe);
                },
                jzz: function() {
                    n.e("components/common/jzz").then(function() {
                        return resolve(n("707a"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    aIdx: 0,
                    tabs: [ {
                        name: "未领取",
                        type: 1
                    }, {
                        name: "已领取",
                        type: 2
                    } ],
                    dataList: [],
                    isget: !1,
                    mygd: !1,
                    params: {
                        storeId: "",
                        page: 1,
                        size: 10,
                        userId: "",
                        isReceive: "1"
                    }
                };
            },
            onLoad: function(e) {
                var n = this;
                return r(o.default.mark(function t() {
                    return o.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            return n.getSystem().then(function() {
                                n.util.setNT(e.storeId ? e.name + "领券中心" : n.system.name + "领券中心");
                            }), t.next = 3, n.getLoginInfo();

                          case 3:
                            n.params.storeId = e.storeId || "", n.params.userId = n.uId, n.aIdx = +e.idx || 0, 
                            n.changeTab(n.aIdx), console.log(e);

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getList());
            },
            computed: {},
            methods: {
                refresh: function() {
                    this.changeTab(this.aIdx);
                },
                changeTab: function(t) {
                    this.isget = this.mygd = !1, this.params.page = 1, this.params.size = 10, this.params.isReceive = this.tabs[t].type, 
                    this.dataList = [], this.getList();
                },
                getList: function() {
                    var a = this;
                    return r(o.default.mark(function t() {
                        var e, n;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.util.request({
                                    url: a.api.Coupons,
                                    method: "POST",
                                    data: a.params
                                });

                              case 2:
                                e = t.sent, n = e.data, a.dataList = a.dataList.concat(n), a.isget = !0, a.mygd = a.params.size > n.length, 
                                a.params.page++;

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                btntap: function(n) {
                    var a = this;
                    return r(o.default.mark(function t() {
                        var e;
                        return o.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, a.util.request({
                                    url: a.api.ReceiveCoupon,
                                    method: "POST",
                                    mask: 1,
                                    data: {
                                        couponId: n,
                                        userId: a.uId
                                    }
                                });

                              case 2:
                                e = t.sent, a.refresh(), e && a.util.message("领取成功", 1);

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        e.default = u;
    },
    bd38: function(t, e, n) {
        n.r(e);
        var a = n("6457"), o = n("e52b");
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        var u = n("f0c5"), s = Object(u.a)(o.default, a.b, a.c, !1, null, "b076fc66", null, !1, a.a, void 0);
        e.default = s.exports;
    },
    e52b: function(t, e, n) {
        n.r(e);
        var a = n("9d9d"), o = n.n(a);
        for (var r in a) "default" !== r && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(r);
        e.default = o.a;
    }
}, [ [ "9154", "common/runtime", "common/vendor" ] ] ]);