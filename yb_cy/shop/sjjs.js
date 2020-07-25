(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/sjjs" ], {
    2236: function(n, t, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {});
    },
    "2b65": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o, u = (o = e("4795")) && o.__esModule ? o : {
            default: o
        };
        function a(n, t, e, o, u, r, i) {
            try {
                var c = n[r](i), a = c.value;
            } catch (n) {
                return void e(n);
            }
            c.done ? t(a) : Promise.resolve(a).then(o, u);
        }
        function r(c) {
            return function() {
                var n = this, i = arguments;
                return new Promise(function(t, e) {
                    var o = c.apply(n, i);
                    function u(n) {
                        a(o, t, e, u, r, "next", n);
                    }
                    function r(n) {
                        a(o, t, e, u, r, "throw", n);
                    }
                    u(void 0);
                });
            };
        }
        e("2f62");
        var i = {
            name: "bzf",
            components: {
                MgImg: function() {
                    e.e("components/common/mg-img").then(function() {
                        return resolve(e("e668"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    info: {},
                    list: []
                };
            },
            onLoad: function(t) {
                var e = this;
                return r(u.default.mark(function n() {
                    return u.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                            e.getSystem(), e.info = JSON.parse(decodeURIComponent(t.info)), 1 == t.type ? (e.util.setNT("商家环境"), 
                            e.list = e.info.media.map(function(n) {
                                return e.getImgS(n);
                            })) : 2 == t.type && (e.util.setNT("食品安全档案"), e.list = e.info.license.map(function(n) {
                                return e.getImgS(n);
                            }));

                          case 3:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            },
            computed: {},
            methods: {
                yl: function(n) {
                    this.util.preImg({
                        idx: n,
                        urls: this.list
                    });
                }
            },
            created: function() {
                return r(u.default.mark(function n() {
                    return u.default.wrap(function(n) {
                        for (;;) switch (n.prev = n.next) {
                          case 0:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                }))();
            }
        };
        t.default = i;
    },
    "2f70": function(n, t, e) {
        e.r(t);
        var o = e("2b65"), u = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = u.a;
    },
    4984: function(n, t, e) {
        var o = e("9a7a");
        e.n(o).a;
    },
    8407: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("c577")).default);
        }).call(this, e("543d").createPage);
    },
    "9a7a": function(n, t, e) {},
    c577: function(n, t, e) {
        e.r(t);
        var o = e("2236"), u = e("2f70");
        for (var r in u) "default" !== r && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(r);
        e("4984");
        var i = e("f0c5"), c = Object(i.a)(u.default, o.b, o.c, !1, null, "0551e3b2", null, !1, o.a, void 0);
        t.default = c.exports;
    }
}, [ [ "8407", "common/runtime", "common/vendor" ] ] ]);