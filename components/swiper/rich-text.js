(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/rich-text" ], {
    "0f7e": function(e, c, r) {
        (function(n) {
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.default = void 0;
            var e, t = (e = r("4795")) && e.__esModule ? e : {
                default: e
            };
            function u(e, t, n, o, c, r, a) {
                try {
                    var i = e[r](a), u = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(u) : Promise.resolve(u).then(o, c);
            }
            r("2f62");
            var o = {
                name: "searchBox",
                components: {
                    uParse: function() {
                        Promise.all([ r.e("common/vendor"), r.e("components/uParse/src/wxParse") ]).then(function() {
                            return resolve(r("a5dc"));
                        }.bind(null, r)).catch(r.oe);
                    }
                },
                props: {
                    type: {
                        type: String,
                        default: "1"
                    },
                    co: {
                        type: Object,
                        default: function() {
                            return {
                                richText: "",
                                topMargin: 0
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
                    },
                    content: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {};
                },
                computed: {
                    nodes: function() {
                        return 1 == this.type ? this.co.richText.replace(/\<img/gi, '<img style="width:100%;height:auto"') : this.content.replace(/\<img/gi, '<img style="width:100%;height:auto"');
                    }
                },
                methods: {
                    preview: function(e, t) {
                        console.log("src: " + e);
                    },
                    navigate: function(e, t) {
                        console.log("href: " + e), n.showModal({
                            content: "点击链接为：" + e,
                            showCancel: !1
                        });
                    }
                },
                created: function() {
                    return i = t.default.mark(function e() {
                        return t.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }), function() {
                        var e = this, a = arguments;
                        return new Promise(function(t, n) {
                            var o = i.apply(e, a);
                            function c(e) {
                                u(o, t, n, c, r, "next", e);
                            }
                            function r(e) {
                                u(o, t, n, c, r, "throw", e);
                            }
                            c(void 0);
                        });
                    }();
                    var i;
                }
            };
            c.default = o;
        }).call(this, r("543d").default);
    },
    "7cad": function(e, t, n) {
        n.r(t);
        var o = n("a49c"), c = n("9c90");
        for (var r in c) "default" !== r && function(e) {
            n.d(t, e, function() {
                return c[e];
            });
        }(r);
        var a = n("f0c5"), i = Object(a.a)(c.default, o.b, o.c, !1, null, "613ccee4", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "9c90": function(e, t, n) {
        n.r(t);
        var o = n("0f7e"), c = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = c.a;
    },
    a49c: function(e, t, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return c;
        }), n.d(t, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/rich-text-create-component", {
    "components/swiper/rich-text-create-component": function(e, t, n) {
        n("543d").createComponent(n("7cad"));
    }
}, [ [ "components/swiper/rich-text-create-component" ] ] ]);