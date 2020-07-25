(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/notice-group" ], {
    "082e": function(n, e, t) {
        t.r(e);
        var o = t("3c71"), c = t("eed0");
        for (var r in c) "default" !== r && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(r);
        t("e5c8");
        var i = t("f0c5"), u = Object(i.a)(c.default, o.b, o.c, !1, null, "3d8a34dd", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "257b": function(n, e, t) {},
    "3c71": function(n, e, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
    },
    7994: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o, c = (o = t("4795")) && o.__esModule ? o : {
            default: o
        };
        function a(n, e, t, o, c, r, i) {
            try {
                var u = n[r](i), a = u.value;
            } catch (n) {
                return void t(n);
            }
            u.done ? e(a) : Promise.resolve(a).then(o, c);
        }
        t("2f62");
        var r = {
            name: "searchBox",
            components: {
                uniNoticeBar: function() {
                    t.e("components/third/uni-notice-bar").then(function() {
                        return resolve(t("6b70"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {
                            icon: [],
                            link: {},
                            notice: {},
                            txtOrImg: 1
                        };
                    }
                },
                sjxx: {
                    type: Object,
                    default: {}
                },
                u: {
                    type: String,
                    default: "px"
                },
                type: {
                    type: String,
                    default: "1"
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
                    notice: ""
                };
            },
            watch: {
                sjxx: {
                    handler: function(n) {
                        n.storeInfo && (this.notice = n.storeInfo.notice);
                    },
                    immediate: !0
                }
            },
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            },
            created: function() {
                return u = c.default.mark(function n() {
                    return c.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }), function() {
                    var n = this, i = arguments;
                    return new Promise(function(e, t) {
                        var o = u.apply(n, i);
                        function c(n) {
                            a(o, e, t, c, r, "next", n);
                        }
                        function r(n) {
                            a(o, e, t, c, r, "throw", n);
                        }
                        c(void 0);
                    });
                }();
                var u;
            }
        };
        e.default = r;
    },
    e5c8: function(n, e, t) {
        var o = t("257b");
        t.n(o).a;
    },
    eed0: function(n, e, t) {
        t.r(e);
        var o = t("7994"), c = t.n(o);
        for (var r in o) "default" !== r && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(r);
        e.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/notice-group-create-component", {
    "components/swiper/notice-group-create-component": function(n, e, t) {
        t("543d").createComponent(t("082e"));
    }
}, [ [ "components/swiper/notice-group-create-component" ] ] ]);