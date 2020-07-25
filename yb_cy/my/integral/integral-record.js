(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/integral/integral-record" ], {
    "445c": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = r(n("4795"));
        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function u(t, e, n, r, a, c, o) {
            try {
                var i = t[c](o), u = i.value;
            } catch (t) {
                return void n(t);
            }
            i.done ? e(u) : Promise.resolve(u).then(r, a);
        }
        function c(i) {
            return function() {
                var t = this, o = arguments;
                return new Promise(function(e, n) {
                    var r = i.apply(t, o);
                    function a(t) {
                        u(r, e, n, a, c, "next", t);
                    }
                    function c(t) {
                        u(r, e, n, a, c, "throw", t);
                    }
                    a(void 0);
                });
            };
        }
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        var i = {
            name: "integralRecord",
            components: {
                navTab: function() {
                    n.e("components/swiper/nav-tab").then(function() {
                        return resolve(n("2040"));
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
                        name: "未完成"
                    }, {
                        name: "已完成"
                    } ],
                    params: {
                        userId: "",
                        page: 1,
                        size: 10
                    },
                    dlData: [],
                    isget: !1,
                    mygd: !1
                };
            },
            onLoad: function(t) {
                this.getSystem(this), this.util.setNT("兑换记录"), this.params.userId = this.user.userId, 
                this.getData();
            },
            computed: function(a) {
                for (var t = 1; t < arguments.length; t++) {
                    var c = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(c), !0).forEach(function(t) {
                        var e, n, r;
                        e = a, r = c[n = t], n in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c)) : o(Object(c)).forEach(function(t) {
                        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(c, t));
                    });
                }
                return a;
            }({}, (0, n("2f62").mapState)("dndc", [ "mySwitch" ])),
            methods: {
                getData: function() {
                    var r = this;
                    return c(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.util.request({
                                    url: r.api.IntegralOrderList,
                                    mask: 1,
                                    data: r.params
                                });

                              case 2:
                                e = t.sent, n = e.data, r.dlData = r.dlData.concat(n), r.isget = !0, r.mygd = r.params.size > n.length, 
                                r.params.page++;

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                changeTab: function(t) {
                    this.isget = this.mygd = !1, this.params.page = 1, this.params.size = 10;
                    var e = "";
                    switch (t) {
                      case 0:
                        e = "1";
                        break;

                      case 1:
                        e = "2";
                    }
                    this.params.type = e, this.dlData = [], this.getData();
                },
                qrsh: function(e) {
                    var n = this;
                    return c(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, n.util.request({
                                    url: n.api.IntegralOrderComplete,
                                    mask: 1,
                                    method: "POST",
                                    data: {
                                        orderId: e
                                    }
                                });

                              case 2:
                                t.sent && (n.util.message("收货成功", 1, 1e3), n.changeTab(n.aIdx));

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            },
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getData());
            },
            created: function() {
                return c(a.default.mark(function t() {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            }
        };
        e.default = i;
    },
    "747c": function(t, e, n) {
        n.r(e);
        var r = n("445c"), a = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = a.a;
    },
    9979: function(t, e, n) {
        var r = n("9e5c");
        n.n(r).a;
    },
    "9e5c": function(t, e, n) {},
    aa0a: function(t, e, n) {
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
    aec8: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("e061")).default);
        }).call(this, n("543d").createPage);
    },
    e061: function(t, e, n) {
        n.r(e);
        var r = n("aa0a"), a = n("747c");
        for (var c in a) "default" !== c && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(c);
        n("9979");
        var o = n("f0c5"), i = Object(o.a)(a.default, r.b, r.c, !1, null, "158f1e4e", null, !1, r.a, void 0);
        e.default = i.exports;
    }
}, [ [ "aec8", "common/runtime", "common/vendor" ] ] ]);