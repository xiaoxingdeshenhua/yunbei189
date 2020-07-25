(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/swiper" ], {
    "04a9": function(e, t, n) {
        n.r(t);
        var r = n("ebbb"), o = n("14dc");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("62eb");
        var a = n("f0c5"), c = Object(a.a)(o.default, r.b, r.c, !1, null, "12095702", null, !1, r.a, void 0);
        t.default = c.exports;
    },
    "14dc": function(e, t, n) {
        n.r(t);
        var r = n("7fef"), o = n.n(r);
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        t.default = o.a;
    },
    "62eb": function(e, t, n) {
        var r = n("b24a");
        n.n(r).a;
    },
    "7fef": function(e, i, a) {
        (function(n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var e, o = (e = a("4795")) && e.__esModule ? e : {
                default: e
            };
            function u(e, t, n, r, o, i, a) {
                try {
                    var c = e[i](a), u = c.value;
                } catch (e) {
                    return void n(e);
                }
                c.done ? t(u) : Promise.resolve(u).then(r, o);
            }
            function t(c) {
                return function() {
                    var e = this, a = arguments;
                    return new Promise(function(t, n) {
                        var r = c.apply(e, a);
                        function o(e) {
                            u(r, t, n, o, i, "next", e);
                        }
                        function i(e) {
                            u(r, t, n, o, i, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            a("2f62");
            var r = {
                name: "swiper",
                props: {
                    co: {
                        type: Object,
                        default: function() {
                            return {
                                class: "",
                                topMargin: 0,
                                leftRightPadding: 0,
                                upDownPadding: 0,
                                swiper: {
                                    children: []
                                },
                                duration: "",
                                mode: "",
                                height: "",
                                radius: "",
                                auto: !0,
                                interval: 5
                            };
                        }
                    },
                    storeInfo: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
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
                        StoreAd: []
                    };
                },
                computed: {
                    list: function() {
                        return 1 != this.co.reverseThree ? this.co.swiper.children : this.StoreAd;
                    }
                },
                watch: {
                    storeInfo: {
                        handler: function(e) {
                            var r = this;
                            return t(o.default.mark(function e() {
                                var t, n;
                                return o.default.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                      case 0:
                                        if (!r.storeInfo.id || 1 != r.co.reverseThree) {
                                            e.next = 6;
                                            break;
                                        }
                                        return e.next = 3, r.util.request({
                                            url: r.api.StoreAd,
                                            data: {
                                                type: 1,
                                                storeId: r.storeInfo.id
                                            }
                                        });

                                      case 3:
                                        t = e.sent, n = t.data, r.StoreAd = n;

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
                methods: {
                    goTo: function(e) {
                        var t = this.list[e];
                        if (t.entry) this.goUrl(t.entry); else if (t.link) switch (t.link.type) {
                          case "webUrl":
                            this.go({
                                t: 1,
                                url: "/yb_cy/other/web-view?src=" + encodeURIComponent(JSON.stringify(t.link.url))
                            });
                            break;

                          case "miniUrl":
                            n.navigateTo({
                                url: t.link.url
                            });
                            break;

                          case "mini":
                            n.navigateToMiniProgram({
                                appId: t.link.url,
                                path: t.link.xcx_name
                            });
                        }
                    }
                },
                created: function() {
                    return t(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            };
            i.default = r;
        }).call(this, a("543d").default);
    },
    b24a: function(e, t, n) {},
    ebbb: function(e, t, n) {
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, e.getSjgd(e.co.height));
            e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/swiper-create-component", {
    "components/swiper/swiper-create-component": function(e, t, n) {
        n("543d").createComponent(n("04a9"));
    }
}, [ [ "components/swiper/swiper-create-component" ] ] ]);