(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/goods/tj-goods" ], {
    "0d77": function(o, n, t) {},
    "3e77": function(o, n, t) {
        t.r(n);
        var e = t("e8a7"), a = t.n(e);
        for (var c in e) "default" !== c && function(o) {
            t.d(n, o, function() {
                return e[o];
            });
        }(c);
        n.default = a.a;
    },
    8644: function(o, n, t) {
        var e = t("0d77");
        t.n(e).a;
    },
    e29b: function(o, n, t) {
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        t.d(n, "b", function() {
            return e;
        }), t.d(n, "c", function() {
            return a;
        }), t.d(n, "a", function() {});
    },
    e548: function(o, n, t) {
        t.r(n);
        var e = t("e29b"), a = t("3e77");
        for (var c in a) "default" !== c && function(o) {
            t.d(n, o, function() {
                return a[o];
            });
        }(c);
        t("8644");
        var u = t("f0c5"), d = Object(u.a)(a.default, e.b, e.c, !1, null, "77586f16", null, !1, e.a, void 0);
        n.default = d.exports;
    },
    e8a7: function(o, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0, t("2f62");
        var e = {
            name: "searchBox",
            props: {
                list: {
                    type: Array,
                    default: []
                },
                type: {
                    type: String,
                    default: "0"
                }
            },
            data: function() {
                return {};
            },
            methods: {
                goDl: function(o) {
                    this.go({
                        t: 1,
                        url: "/yb_cy/shop/goods-dl?id=" + o.id + "&gid=" + o.goodsId
                    });
                }
            }
        };
        n.default = e;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/goods/tj-goods-create-component", {
    "components/goods/tj-goods-create-component": function(o, n, t) {
        t("543d").createComponent(t("e548"));
    }
}, [ [ "components/goods/tj-goods-create-component" ] ] ]);