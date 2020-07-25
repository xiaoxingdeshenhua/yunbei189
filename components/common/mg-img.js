(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/mg-img" ], {
    "16b7": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "mg-img",
            props: {
                cname: "",
                sname: "",
                src: "",
                local: "",
                m: {
                    type: String,
                    default: "aspectFill"
                }
            },
            data: function() {
                return {};
            },
            methods: {
                getUrl: function(n) {
                    if (n) return -1 < n.indexOf("http") || -1 < n.indexOf("/static/") || -1 < n.indexOf("base64") || 1 == this.local ? n : this.url + n;
                }
            },
            computed: {}
        };
        e.default = o;
    },
    "7e79": function(n, e, t) {
        t.r(e);
        var o = t("16b7"), c = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = c.a;
    },
    b876: function(n, e, t) {
        var o = function() {
            var n = this, e = (n.$createElement, n._self._c, n.__get_style([ n.sname ])), t = n.getUrl(n.src);
            n.$mp.data = Object.assign({}, {
                $root: {
                    s0: e,
                    m0: t
                }
            });
        }, c = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
    },
    e668: function(n, e, t) {
        t.r(e);
        var o = t("b876"), c = t("7e79");
        for (var a in c) "default" !== a && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        var r = t("f0c5"), u = Object(r.a)(c.default, o.b, o.c, !1, null, "1eca9b38", null, !1, o.a, void 0);
        e.default = u.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/mg-img-create-component", {
    "components/common/mg-img-create-component": function(n, e, t) {
        t("543d").createComponent(t("e668"));
    }
}, [ [ "components/common/mg-img-create-component" ] ] ]);