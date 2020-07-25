(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/other/bzzx" ], {
    5939: function(n, t, e) {
        e.r(t);
        var o = e("8086"), r = e.n(o);
        for (var u in o) "default" !== u && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(u);
        t.default = r.a;
    },
    "795e": function(n, t, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {});
    },
    8086: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o, r = (o = e("4795")) && o.__esModule ? o : {
            default: o
        };
        function i(n, t, e, o, r, u, a) {
            try {
                var c = n[u](a), i = c.value;
            } catch (n) {
                return void e(n);
            }
            c.done ? t(i) : Promise.resolve(i).then(o, r);
        }
        e("2f62");
        var u = {
            name: "order-index",
            components: {
                jzz: function() {
                    e.e("components/common/jzz").then(function() {
                        return resolve(e("707a"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    arr: []
                };
            },
            onLoad: function(n) {
                var c, o = this;
                return c = r.default.mark(function n() {
                    var t, e;
                    return r.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            return o.getSystem(), o.util.setNT("帮助中心"), n.next = 4, o.util.request({
                                url: o.api.HelpList
                            });

                          case 4:
                            t = n.sent, e = t.data, o.arr = e;

                          case 7:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }), function() {
                    var n = this, a = arguments;
                    return new Promise(function(t, e) {
                        var o = c.apply(n, a);
                        function r(n) {
                            i(o, t, e, r, u, "next", n);
                        }
                        function u(n) {
                            i(o, t, e, r, u, "throw", n);
                        }
                        r(void 0);
                    });
                }();
            },
            computed: {},
            methods: {
                goDl: function(n) {
                    this.go({
                        t: 1,
                        url: "/yb_cy/my/other/gywm?t=".concat(n.title, "&p=2&id=").concat(n.id)
                    });
                }
            }
        };
        t.default = u;
    },
    af19: function(n, t, e) {
        e.r(t);
        var o = e("795e"), r = e("5939");
        for (var u in r) "default" !== u && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(u);
        var a = e("f0c5"), c = Object(a.a)(r.default, o.b, o.c, !1, null, "58633656", null, !1, o.a, void 0);
        t.default = c.exports;
    },
    eb8e: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("af19")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "eb8e", "common/runtime", "common/vendor" ] ] ]);