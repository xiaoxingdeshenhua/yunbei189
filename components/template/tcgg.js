(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/template/tcgg" ], {
    "35e1": function(e, n, t) {
        var o = t("8f93");
        t.n(o).a;
    },
    "3fcc": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, c = (o = t("4795")) && o.__esModule ? o : {
            default: o
        };
        function i(e, n, t, o, c, r, a) {
            try {
                var u = e[r](a), i = u.value;
            } catch (e) {
                return void t(e);
            }
            u.done ? n(i) : Promise.resolve(i).then(o, c);
        }
        t("2f62");
        var r = {
            name: "searchBox",
            components: {
                mgModal: function() {
                    t.e("components/common/modal").then(function() {
                        return resolve(t("ee48"));
                    }.bind(null, t)).catch(t.oe);
                },
                MgSwiper: function() {
                    t.e("components/swiper/swiper").then(function() {
                        return resolve(t("04a9"));
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
                value: {
                    type: Boolean,
                    default: !1
                },
                list: {
                    type: Array,
                    default: []
                },
                color: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    swiper: {
                        class: "bs20",
                        swiper: {
                            children: []
                        },
                        duration: "",
                        mode: "",
                        height: "733",
                        radius: 20,
                        auto: !0,
                        interval: 5
                    }
                };
            },
            computed: {
                show: {
                    get: function() {
                        return this.value;
                    },
                    set: function(e) {
                        this.$emit("input", e);
                    }
                }
            },
            watch: {
                list: {
                    handler: function(n) {
                        var u, t = this;
                        return u = c.default.mark(function e() {
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    n.length && (t.swiper.swiper.children = n);

                                  case 1:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }), function() {
                            var e = this, a = arguments;
                            return new Promise(function(n, t) {
                                var o = u.apply(e, a);
                                function c(e) {
                                    i(o, n, t, c, r, "next", e);
                                }
                                function r(e) {
                                    i(o, n, t, c, r, "throw", e);
                                }
                                c(void 0);
                            });
                        }();
                    },
                    immediate: !0
                }
            },
            methods: {}
        };
        n.default = r;
    },
    "8f93": function(e, n, t) {},
    9989: function(e, n, t) {
        t.r(n);
        var o = t("fcc9"), c = t("c556");
        for (var r in c) "default" !== r && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(r);
        t("35e1");
        var a = t("f0c5"), u = Object(a.a)(c.default, o.b, o.c, !1, null, "01900a9b", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    c556: function(e, n, t) {
        t.r(n);
        var o = t("3fcc"), c = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = c.a;
    },
    fcc9: function(e, n, t) {
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(e) {
                n.show = !1;
            });
        }, c = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/template/tcgg-create-component", {
    "components/template/tcgg-create-component": function(e, n, t) {
        t("543d").createComponent(t("9989"));
    }
}, [ [ "components/template/tcgg-create-component" ] ] ]);