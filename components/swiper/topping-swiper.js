(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/topping-swiper" ], {
    "1a05": function(e, n, t) {
        t.r(n);
        var o = t("548a"), r = t("af9c");
        for (var c in r) "default" !== c && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(c);
        var a = t("f0c5"), i = Object(a.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = i.exports;
    },
    "548a": function(e, n, t) {
        var o = function() {
            var e = this, n = (e.$createElement, e._self._c, e.util.getSb());
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: n
                }
            });
        }, r = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
    },
    af9c: function(e, n, t) {
        t.r(n);
        var o = t("ef75"), r = t.n(o);
        for (var c in o) "default" !== c && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(c);
        n.default = r.a;
    },
    ef75: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, r = (o = t("4795")) && o.__esModule ? o : {
            default: o
        };
        function u(e, n, t, o, r, c, a) {
            try {
                var i = e[c](a), u = i.value;
            } catch (e) {
                return void t(e);
            }
            i.done ? n(u) : Promise.resolve(u).then(o, r);
        }
        t("2f62");
        var c = {
            name: "searchBox",
            components: {
                customSwiper: function() {
                    t.e("components/swiper/swiper").then(function() {
                        return resolve(t("04a9"));
                    }.bind(null, t)).catch(t.oe);
                },
                searchBox: function() {
                    t.e("components/swiper/search-box").then(function() {
                        return resolve(t("5a1f"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                cname: "",
                bgc: {
                    type: String,
                    default: "bf"
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
                return {};
            },
            computed: {
                swiper: function() {
                    return {
                        topMargin: 0,
                        leftRightPadding: 0,
                        upDownPadding: this.co.upDownPadding,
                        swiper: this.co.swiper || [],
                        duration: "",
                        mode: "",
                        height: this.co.height,
                        radius: this.co.radius,
                        auto: !0,
                        interval: this.co.interval
                    };
                },
                search: function() {
                    return {
                        borderStyle: 0,
                        search: this.co.search,
                        city: this.co.address,
                        fontStyle: "left",
                        height: 45,
                        keyWords: "",
                        recommendSearch: 1,
                        shape: 1,
                        shopName: "",
                        showMore: 1
                    };
                }
            },
            methods: {},
            created: function() {
                return i = r.default.mark(function e() {
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }), function() {
                    var e = this, a = arguments;
                    return new Promise(function(n, t) {
                        var o = i.apply(e, a);
                        function r(e) {
                            u(o, n, t, r, c, "next", e);
                        }
                        function c(e) {
                            u(o, n, t, r, c, "throw", e);
                        }
                        r(void 0);
                    });
                }();
                var i;
            }
        };
        n.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/topping-swiper-create-component", {
    "components/swiper/topping-swiper-create-component": function(e, n, t) {
        t("543d").createComponent(t("1a05"));
    }
}, [ [ "components/swiper/topping-swiper-create-component" ] ] ]);