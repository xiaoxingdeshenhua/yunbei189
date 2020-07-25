(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/bz" ], {
    "6c47": function(t, e, n) {},
    "70e8": function(t, e, n) {
        n.r(e);
        var r = n("e99c"), o = n.n(r);
        for (var c in r) "default" !== c && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(c);
        e.default = o.a;
    },
    "9f6e": function(t, e, n) {},
    aa13: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("cde8")).default);
        }).call(this, n("543d").createPage);
    },
    b0f1: function(t, e, n) {
        var r = n("6c47");
        n.n(r).a;
    },
    cafa: function(t, e, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    cde8: function(t, e, n) {
        n.r(e);
        var r = n("cafa"), o = n("70e8");
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        n("b0f1"), n("e027");
        var a = n("f0c5"), i = Object(a.a)(o.default, r.b, r.c, !1, null, "6c8f4450", null, !1, r.a, void 0);
        e.default = i.exports;
    },
    e027: function(t, e, n) {
        var r = n("9f6e");
        n.n(r).a;
    },
    e99c: function(t, r, o) {
        (function(t) {
            function e(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            Object.defineProperty(r, "__esModule", {
                value: !0
            }), r.default = void 0;
            var n = {
                name: "order-index",
                data: function() {
                    return {
                        note: "",
                        loading: !1
                    };
                },
                onLoad: function(t) {
                    this.util.setNT("订单备注"), this.note = t.note || "";
                },
                computed: function(o) {
                    for (var t = 1; t < arguments.length; t++) {
                        var c = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? e(Object(c), !0).forEach(function(t) {
                            var e, n, r;
                            e = o, r = c[n = t], n in e ? Object.defineProperty(e, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : e(Object(c)).forEach(function(t) {
                            Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(c, t));
                        });
                    }
                    return o;
                }({}, (0, o("2f62").mapState)([ "sjxx" ]), {
                    larr: function() {
                        return (t.getStorageSync("note") ? [ t.getStorageSync("note") ] : []).concat(this.sjxx.orderSet.data.noteTag || []);
                    }
                }),
                methods: {
                    djnote: function(t) {
                        var e = this.note + t + "，", n = this.note.substring(this.note.length - 1, 1);
                        if (50 < e.length) return this.util.message("上限50字哦", 3);
                        this.note += "，" == n || "," == n || "" == n ? t + "，" : "，" + t;
                    },
                    save: function() {
                        this.loading = !0, this.util.getPage().$vm.params.userNote = this.note, this.go({
                            t: 4
                        });
                    }
                }
            };
            r.default = n;
        }).call(this, o("543d").default);
    }
}, [ [ "aa13", "common/runtime", "common/vendor" ] ] ]);