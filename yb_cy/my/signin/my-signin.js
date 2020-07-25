(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/signin/my-signin" ], {
    "164d": function(t, e, n) {
        var r = n("3527");
        n.n(r).a;
    },
    3527: function(t, e, n) {},
    4364: function(t, e, n) {
        n.r(e);
        var r = n("8884"), a = n("e960");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("164d");
        var o = n("f0c5"), c = Object(o.a)(a.default, r.b, r.c, !1, null, "3b4fa1d7", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    "557f": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r, a = (r = n("4795")) && r.__esModule ? r : {
            default: r
        }, i = n("2f62");
        function u(t, e, n, r, a, i, o) {
            try {
                var c = t[i](o), u = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(u) : Promise.resolve(u).then(r, a);
        }
        function o(c) {
            return function() {
                var t = this, o = arguments;
                return new Promise(function(e, n) {
                    var r = c.apply(t, o);
                    function a(t) {
                        u(r, e, n, a, i, "next", t);
                    }
                    function i(t) {
                        u(r, e, n, a, i, "throw", t);
                    }
                    a(void 0);
                });
            };
        }
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function s(a) {
            for (var t = 1; t < arguments.length; t++) {
                var i = null != arguments[t] ? arguments[t] : {};
                t % 2 ? c(Object(i), !0).forEach(function(t) {
                    var e, n, r;
                    e = a, r = i[n = t], n in e ? Object.defineProperty(e, n, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = r;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : c(Object(i)).forEach(function(t) {
                    Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(i, t));
                });
            }
            return a;
        }
        var f = {
            name: "mySignin",
            components: {
                jzz: function() {
                    n.e("components/common/jzz").then(function() {
                        return resolve(n("707a"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    params: {
                        userId: "",
                        page: 1,
                        size: 10
                    },
                    dlData: [],
                    isget: !1,
                    mygd: !1,
                    integral: "",
                    type: ""
                };
            },
            onLoad: function(t) {
                this.getSystem(this), this.util.setNT("我的" + (1 == t.type ? this.mySwitch.jfName : "签到")), 
                this.params.userId = this.user.userId, this.integral = this.user.integral, this.getData(), 
                this.type = t.type;
            },
            mixins: [ n("c1ef").utilMixins ],
            computed: s({}, (0, i.mapState)("dndc", [ "mySwitch" ])),
            methods: {
                getData: function() {
                    var r = this;
                    return o(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, r.util.request({
                                    url: r.api.MySignRecord,
                                    mask: 1,
                                    data: r.params
                                });

                              case 2:
                                e = t.sent, n = e.data, console.log("签到明细", n), r.dlData = r.dlData.concat(n), r.isget = !0, 
                                r.mygd = r.params.size > n.length, r.params.page++;

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
                },
                integralRule: function() {
                    this.go({
                        t: 1,
                        url: "/yb_cy/my/other/gywm?t=".concat(this.mySwitch.jfName, "规则&p=8")
                    });
                }
            },
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getData());
            },
            created: function() {
                return o(a.default.mark(function t() {
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
        e.default = f;
    },
    8884: function(t, e, n) {
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
    e960: function(t, e, n) {
        n.r(e);
        var r = n("557f"), a = n.n(r);
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        e.default = a.a;
    },
    f699: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("4364")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "f699", "common/runtime", "common/vendor" ] ] ]);