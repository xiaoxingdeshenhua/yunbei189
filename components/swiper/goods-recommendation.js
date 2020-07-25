(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/goods-recommendation" ], {
    4161: function(e, n, t) {
        var o = t("c9e3");
        t.n(o).a;
    },
    "4ea0": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, r = (o = t("4795")) && o.__esModule ? o : {
            default: o
        };
        function i(e, n, t, o, r, a, c) {
            try {
                var u = e[a](c), i = u.value;
            } catch (e) {
                return void t(e);
            }
            u.done ? n(i) : Promise.resolve(i).then(o, r);
        }
        function a(u) {
            return function() {
                var e = this, c = arguments;
                return new Promise(function(n, t) {
                    var o = u.apply(e, c);
                    function r(e) {
                        i(o, n, t, r, a, "next", e);
                    }
                    function a(e) {
                        i(o, n, t, r, a, "throw", e);
                    }
                    r(void 0);
                });
            };
        }
        t("2f62");
        var c = {
            name: "searchBox",
            components: {
                tjGoods: function() {
                    t.e("components/goods/tj-goods").then(function() {
                        return resolve(t("e548"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {
                            infoTitle: "",
                            isBottom: 0,
                            reverseTwo: 0,
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
                        var o = this;
                        return a(r.default.mark(function e() {
                            var n, t;
                            return r.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!o.storeInfo.id) {
                                        e.next = 6;
                                        break;
                                    }
                                    return e.next = 3, o.util.request({
                                        url: o.api.RecommendDishesList,
                                        data: {
                                            storeId: o.storeInfo.id,
                                            userId: o.user.userId,
                                            page: 1,
                                            size: 10
                                        }
                                    });

                                  case 3:
                                    n = e.sent, t = n.data, o.list = t;

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    immediate: !0
                }
            },
            created: function() {
                return a(r.default.mark(function e() {
                    return r.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            }
        };
        n.default = c;
    },
    "7bb95": function(e, n, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return r;
        }), t.d(n, "a", function() {});
    },
    abdf: function(e, n, t) {
        t.r(n);
        var o = t("4ea0"), r = t.n(o);
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        n.default = r.a;
    },
    c9e3: function(e, n, t) {},
    e306: function(e, n, t) {
        t.r(n);
        var o = t("7bb95"), r = t("abdf");
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        t("4161");
        var c = t("f0c5"), u = Object(c.a)(r.default, o.b, o.c, !1, null, "04d8580c", null, !1, o.a, void 0);
        n.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/goods-recommendation-create-component", {
    "components/swiper/goods-recommendation-create-component": function(e, n, t) {
        t("543d").createComponent(t("e306"));
    }
}, [ [ "components/swiper/goods-recommendation-create-component" ] ] ]);