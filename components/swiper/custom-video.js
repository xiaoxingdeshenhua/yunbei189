(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/custom-video" ], {
    "2c395": function(n, e, t) {
        t.r(e);
        var o = t("c95f"), r = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = r.a;
    },
    "6e680": function(n, e, t) {
        t.r(e);
        var o = t("6f09"), r = t("2c395");
        for (var c in r) "default" !== c && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(c);
        var u = t("f0c5"), a = Object(u.a)(r.default, o.b, o.c, !1, null, "708f9219", null, !1, o.a, void 0);
        e.default = a.exports;
    },
    "6f09": function(n, e, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return r;
        }), t.d(e, "a", function() {});
    },
    c95f: function(n, r, c) {
        (function(e) {
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var n, t = (n = c("4795")) && n.__esModule ? n : {
                default: n
            };
            function i(n, e, t, o, r, c, u) {
                try {
                    var a = n[c](u), i = a.value;
                } catch (n) {
                    return void t(n);
                }
                a.done ? e(i) : Promise.resolve(i).then(o, r);
            }
            c("2f62");
            var o = {
                name: "searchBox",
                props: {
                    co: {
                        type: Object,
                        default: function() {
                            return {
                                icon: [ {
                                    url: ""
                                } ],
                                topMargin: 0,
                                videocon: {
                                    links: "",
                                    title: "视频名"
                                }
                            };
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
                    return {};
                },
                methods: {
                    videoErrorCallback: function(n) {
                        e.showModal({
                            content: n.target.errMsg,
                            showCancel: !1
                        });
                    }
                },
                created: function() {
                    return a = t.default.mark(function n() {
                        return t.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }), function() {
                        var n = this, u = arguments;
                        return new Promise(function(e, t) {
                            var o = a.apply(n, u);
                            function r(n) {
                                i(o, e, t, r, c, "next", n);
                            }
                            function c(n) {
                                i(o, e, t, r, c, "throw", n);
                            }
                            r(void 0);
                        });
                    }();
                    var a;
                }
            };
            r.default = o;
        }).call(this, c("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/custom-video-create-component", {
    "components/swiper/custom-video-create-component": function(n, e, t) {
        t("543d").createComponent(t("6e680"));
    }
}, [ [ "components/swiper/custom-video-create-component" ] ] ]);