(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/other/web-view" ], {
    "342d": function(n, t, e) {
        e.r(t);
        var o = e("e2d1"), u = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = u.a;
    },
    "6d09": function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("a865")).default);
        }).call(this, e("543d").createPage);
    },
    a865: function(n, t, e) {
        e.r(t);
        var o = e("f785"), u = e("342d");
        for (var a in u) "default" !== a && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(a);
        var c = e("f0c5"), f = Object(c.a)(u.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = f.exports;
    },
    e2d1: function(n, e, t) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                data: function() {
                    return {
                        src: ""
                    };
                },
                onLoad: function(n) {
                    this.src = JSON.parse(decodeURIComponent(n.src));
                },
                methods: {
                    getMessage: function(n) {
                        t.showModal({
                            content: JSON.stringify(n.detail),
                            showCancel: !1
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, t("543d").default);
    },
    f785: function(n, t, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return u;
        }), e.d(t, "a", function() {});
    }
}, [ [ "6d09", "common/runtime", "common/vendor" ] ] ]);