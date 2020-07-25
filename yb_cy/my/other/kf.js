(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/other/kf" ], {
    "1a35": function(n, t, e) {
        e.r(t);
        var o = e("f048"), u = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = u.a;
    },
    "37dd": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("6faa")).default);
        }).call(this, e("543d").createPage);
    },
    "6a2c": function(n, t, e) {},
    "6faa": function(n, t, e) {
        e.r(t);
        var o = e("9f5d"), u = e("1a35");
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        e("9583");
        var f = e("f0c5"), a = Object(f.a)(u.default, o.b, o.c, !1, null, "4ccf69d6", null, !1, o.a, void 0);
        t.default = a.exports;
    },
    9583: function(n, t, e) {
        var o = e("6a2c");
        e.n(o).a;
    },
    "9f5d": function(n, t, e) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(n) {
                return t.util.makeTel(t.system.tel);
            });
        }, u = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {});
    },
    f048: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, e("2f62");
        var o = {
            name: "kf",
            components: {
                mgPopup: function() {
                    e.e("components/common/popup").then(function() {
                        return resolve(e("da89"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    showSq: !0
                };
            },
            onLoad: function(n) {
                this.getSystem({
                    normal: 1
                }), this.util.setNT("联系客服");
            },
            computed: {},
            methods: {
                zxkf: function() {
                    this.go({
                        t: 1,
                        url: "/yb_cy/other/web-view?src=" + encodeURIComponent(JSON.stringify(this.system.serviceUrl))
                    });
                }
            }
        };
        t.default = o;
    }
}, [ [ "37dd", "common/runtime", "common/vendor" ] ] ]);