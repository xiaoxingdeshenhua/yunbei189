(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/rich-text" ], {
    "0f7e": function(t, c, r) {
        (function(n) {
            Object.defineProperty(c, "__esModule", {
                value: !0
            }), c.default = void 0;
            var t, e = (t = r("4795")) && t.__esModule ? t : {
                default: t
            };
            function u(t, e, n, o, c, r, a) {
                try {
                    var i = t[r](a), u = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(u) : Promise.resolve(u).then(o, c);
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
                    preview: function(t, e) {
                        console.log("src: " + t);
                    },
                    navigate: function(t, e) {
                        console.log("href: " + t), n.showModal({
                            content: "点击链接为：" + t,
                            showCancel: !1
                        });
                    }
                },
                created: function() {
                    return i = e.default.mark(function t() {
                        return e.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }), function() {
                        var t = this, a = arguments;
                        return new Promise(function(e, n) {
                            var o = i.apply(t, a);
                            function c(t) {
                                u(o, e, n, c, r, "next", t);
                            }
                            function r(t) {
                                u(o, e, n, c, r, "throw", t);
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
    "57fb": function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    },
    "7cad": function(t, e, n) {
        n.r(e);
        var o = n("57fb"), c = n("9c90");
        for (var r in c) "default" !== r && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(r);
        var a = n("f0c5"), i = Object(a.a)(c.default, o.b, o.c, !1, null, "20a80889", null, !1, o.a, void 0);
        e.default = i.exports;
    },
    "9c90": function(t, e, n) {
        n.r(e);
        var o = n("0f7e"), c = n.n(o);
        for (var r in o) "default" !== r && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(r);
        e.default = c.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/rich-text-create-component", {
    "components/swiper/rich-text-create-component": function(t, e, n) {
        n("543d").createComponent(n("7cad"));
    }
}, [ [ "components/swiper/rich-text-create-component" ] ] ]);