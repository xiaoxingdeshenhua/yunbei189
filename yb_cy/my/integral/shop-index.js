(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/integral/shop-index" ], {
    "3bd1": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r, a = (r = n("4795")) && r.__esModule ? r : {
            default: r
        }, o = n("2f62");
        function i(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function c(a) {
            for (var t = 1; t < arguments.length; t++) {
                var o = null != arguments[t] ? arguments[t] : {};
                t % 2 ? i(Object(o), !0).forEach(function(t) {
                    var e, n, r;
                    e = a, r = o[n = t], n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach(function(t) {
                    Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(o, t));
                });
            }
            return a;
        }
        function u(t, e, n, r, a, o, i) {
            try {
                var c = t[o](i), u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, a);
        }
        function s(c) {
            return function() {
                var t = this, i = arguments;
                return new Promise(function(e, n) {
                    var r = c.apply(t, i);
                    function a(t) {
                        u(r, e, n, a, o, "next", t);
                    }
                    function o(t) {
                        u(r, e, n, a, o, "throw", t);
                    }
                    a(void 0);
                });
            };
        }
        var l = {
            name: "jfsc",
            components: {
                MgImg: function() {
                    n.e("components/common/mg-img").then(function() {
                        return resolve(n("e668"));
                    }.bind(null, n)).catch(n.oe);
                },
                entryButtonGroup: function() {
                    n.e("components/swiper/entry-button-group").then(function() {
                        return resolve(n("b5a6"));
                    }.bind(null, n)).catch(n.oe);
                },
                goodsList: function() {
                    n.e("components/integral/goods-list").then(function() {
                        return resolve(n("0665"));
                    }.bind(null, n)).catch(n.oe);
                },
                jzz: function() {
                    n.e("components/common/jzz").then(function() {
                        return resolve(n("707a"));
                    }.bind(null, n)).catch(n.oe);
                },
                noticeGroup: function() {
                    n.e("components/swiper/notice-group").then(function() {
                        return resolve(n("082e"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    swiper: {
                        class: "",
                        padding: 0,
                        swiper: {
                            children: []
                        },
                        duration: "",
                        mode: "",
                        height: "244",
                        radius: "0",
                        auto: !0,
                        interval: 5
                    },
                    ebg: {
                        class: "",
                        active: !0,
                        hidedot: !0,
                        padding: 0,
                        topMargin: 0,
                        buttonNumberOfCol: 5,
                        buttonNumberOfRow: 1,
                        color: "#666",
                        entryButtonList: [],
                        shape: 1,
                        autoplay: !0,
                        circular: !0,
                        interval: "5000"
                    },
                    dataList: [],
                    hotList: [],
                    isget: !1,
                    mygd: !1,
                    params: {
                        typeId: "",
                        page: 1,
                        size: 10,
                        sort: ""
                    },
                    integral: "",
                    ggConfig: {
                        txtOrImg: 1,
                        icon: [ {
                            url: "/static/wd/vip/gg.png"
                        } ]
                    },
                    ggList: []
                };
            },
            onLoad: function(t) {
                var e = this;
                return s(a.default.mark(function t() {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.getSystem(), e.getSwitchConfig().then(function() {
                                e.util.setNT(e.mySwitch.jfName + "商城");
                            }), e.getCategory(), e.getAd(), e.getList(), e.getHotList(), e.integral = e.user.integral, 
                            e.util.request({
                                url: e.api.IntegralexchangeList
                            }).then(function(t) {
                                console.log(t), e.ggList = t.data.map(function(t) {
                                    return {
                                        content: "".concat(t.userName, "成功兑换了").concat(t.goodsName)
                                    };
                                });
                            });

                          case 8:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            computed: c({}, (0, o.mapState)("dndc", [ "mySwitch" ])),
            methods: c({}, (0, o.mapActions)("dndc", [ "getSwitchConfig" ]), {
                myIntegral: function() {
                    this.go({
                        t: 1,
                        url: "/yb_cy/my/integral/my-integral"
                    });
                },
                integralRecord: function() {
                    this.go({
                        t: 1,
                        url: "/yb_cy/my/integral/integral-record"
                    });
                },
                getAd: function() {
                    var n = this;
                    return s(a.default.mark(function t() {
                        var e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.util.request({
                                    url: n.api.PlatformAdList,
                                    data: {}
                                });

                              case 2:
                                e = t.sent, n.swiper.swiper.children = e.data.map(function(t) {
                                    return {
                                        icon: t.icon
                                    };
                                });

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                tabType: function(t) {
                    this.isget = this.mygd = !1, this.params.page = 1, this.params.typeId = t.id, this.dataList = [], 
                    this.getList(), console.log(t);
                },
                getList: function() {
                    var r = this;
                    return s(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.util.request({
                                    url: r.api.IntegralGoodsList,
                                    method: "POST",
                                    data: r.params
                                });

                              case 2:
                                e = t.sent, n = e.data, r.dataList = r.dataList.concat(n), r.isget = !0, r.mygd = r.params.size > n.length, 
                                r.params.page++;

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getHotList: function() {
                    var r = this;
                    return s(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.util.request({
                                    url: r.api.IntegralGoodsList,
                                    method: "POST",
                                    data: {
                                        typeId: "",
                                        page: 1,
                                        size: 10,
                                        sort: "hot"
                                    }
                                });

                              case 2:
                                e = t.sent, n = e.data, r.hotList = r.hotList.concat(n);

                              case 5:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                getCategory: function() {
                    var n = this;
                    return s(a.default.mark(function t() {
                        var e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.util.request({
                                    url: n.api.IntegralCategoryList,
                                    method: "POST",
                                    data: {}
                                });

                              case 2:
                                e = t.sent, n.ebg.entryButtonList = e.data.map(function(t) {
                                    return {
                                        url: t.icon,
                                        label: t.name,
                                        id: t.id
                                    };
                                });

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }),
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getList());
            }
        };
        e.default = l;
    },
    7804: function(t, e, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    "7b69": function(t, e, n) {
        n.r(e);
        var r = n("7804"), a = n("a4b9");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("a6a0");
        var i = n("f0c5"), c = Object(i.a)(a.default, r.b, r.c, !1, null, "5478237d", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    a41a: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("7b69")).default);
        }).call(this, n("543d").createPage);
    },
    a4b9: function(t, e, n) {
        n.r(e);
        var r = n("3bd1"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    a6a0: function(t, e, n) {
        var r = n("d446");
        n.n(r).a;
    },
    d446: function(t, e, n) {}
}, [ [ "a41a", "common/runtime", "common/vendor" ] ] ]);