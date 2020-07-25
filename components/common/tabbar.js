(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/tabbar" ], {
    "1f19": function(t, e, n) {
        n.r(e);
        var o = n("8073"), r = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = r.a;
    },
    8073: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = a(n("4795")), r = n("2f62"), s = a(n("6f73"));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            };
        }
        function l(t, e, n, o, r, a, c) {
            try {
                var i = t[a](c), l = i.value;
            } catch (t) {
                return void n(t);
            }
            i.done ? e(l) : Promise.resolve(l).then(o, r);
        }
        function c(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                t && (o = o.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        var i = {
            name: "tabbar",
            props: {
                type: {
                    type: Object,
                    default: function() {
                        return {
                            message: "hello"
                        };
                    }
                },
                color: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            computed: function(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? c(Object(a), !0).forEach(function(t) {
                        var e, n, o;
                        e = r, o = a[n = t], n in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return r;
            }({}, (0, r.mapState)([ "layout" ]), {
                navbar: function() {
                    if (getApp().globalData.tabbar) {
                        var t = s.default.deepCopy(getApp().globalData.tabbar), e = this.util.getRoute(), n = !1;
                        for (var o in t.navs) t.navs[o].link == "/" + e ? n = t.navs[o].active = !0 : t.navs[o].active = !1;
                        return n ? this.$emit("refresh", !0) : t = null, t;
                    }
                    if (this.layout.nav) {
                        var r = this.layout.nav, a = {
                            border_color: "rgba(0,0,0,0.05)",
                            bottomTabStyle: 0,
                            color: this.system.color,
                            colorOff: "#888",
                            navs: []
                        };
                        if (r.config && r.config.bottomTabList.length) {
                            a.bottomTabStyle = r.config.bottomTabStyle, a.color = r.config.color;
                            var c = JSON.parse(JSON.stringify(r.config.bottomTabList));
                            for (var i in c) c[i].link = this.changeUrl(c[i].link);
                            a.navs = c;
                        } else a.navs = [ {
                            icon2: "icondc",
                            legend: "点单",
                            link: "/yb_cy/shop/goods"
                        }, {
                            icon2: "icondd",
                            legend: "订单",
                            link: "/yb_cy/order/index"
                        }, {
                            icon2: "iconwd",
                            legend: "我的",
                            link: "/yb_cy/my/index"
                        } ];
                        getApp().globalData.tabbar = s.default.deepCopy(a);
                        var l = this.util.getRoute(), u = !1;
                        for (var f in a.navs) a.navs[f].link == "/" + l ? u = a.navs[f].active = !0 : a.navs[f].active = !1;
                        return u ? this.$emit("refresh", !0) : a = null, a;
                    }
                }
            }),
            methods: {
                djtab: function(t) {
                    t.active || this.go({
                        t: 2,
                        url: t.link
                    });
                }
            },
            created: function() {
                return i = o.default.mark(function t() {
                    return o.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }), function() {
                    var t = this, c = arguments;
                    return new Promise(function(e, n) {
                        var o = i.apply(t, c);
                        function r(t) {
                            l(o, e, n, r, a, "next", t);
                        }
                        function a(t) {
                            l(o, e, n, r, a, "throw", t);
                        }
                        r(void 0);
                    });
                }();
                var i;
            }
        };
        e.default = i;
    },
    "9df7": function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    f13c: function(t, e, n) {
        n.r(e);
        var o = n("9df7"), r = n("1f19");
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        var c = n("f0c5"), i = Object(c.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = i.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/tabbar-create-component", {
    "components/common/tabbar-create-component": function(t, e, n) {
        n("543d").createComponent(n("f13c"));
    }
}, [ [ "components/common/tabbar-create-component" ] ] ]);