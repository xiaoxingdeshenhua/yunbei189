(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/other/yjfk" ], {
    "0263": function(n, t, e) {
        var u = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        e.d(t, "b", function() {
            return u;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
    },
    3622: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("c27a"), t(e("66fd")), n(t(e("c81d")).default);
        }).call(this, e("543d").createPage);
    },
    7156: function(n, t, e) {
        e.r(t);
        var u = e("740a"), o = e.n(u);
        for (var c in u) "default" !== c && function(n) {
            e.d(t, n, function() {
                return u[n];
            });
        }(c);
        t.default = o.a;
    },
    "740a": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, e("2f62");
        t.default = {
            name: "order-index",
            data: function() {
                return {};
            },
            onLoad: function(n) {
                this.getSystem(), this.util.setNT("联系客服");
            },
            computed: {},
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            }
        };
    },
    c81d: function(n, t, e) {
        e.r(t);
        var u = e("0263"), o = e("7156");
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        var a = e("f0c5"), i = Object(a.a)(o.default, u.b, u.c, !1, null, "a5ca3562", null, !1, u.a, void 0);
        t.default = i.exports;
    }
}, [ [ "3622", "common/runtime", "common/vendor" ] ] ]);