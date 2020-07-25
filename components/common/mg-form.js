(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/mg-form" ], {
    "0fd2": function(n, o, t) {},
    "47b4": function(n, o, t) {
        var e = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return c;
        }), t.d(o, "a", function() {});
    },
    "556b": function(n, o, t) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        o.default = {
            name: "mg-form",
            props: {},
            data: function() {
                return {};
            },
            methods: {
                formSubmit: function(n) {
                    this.formId(n.detail.formId);
                }
            }
        };
    },
    95839: function(n, o, t) {
        var e = t("0fd2");
        t.n(e).a;
    },
    a84f: function(n, o, t) {
        t.r(o);
        var e = t("556b"), c = t.n(e);
        for (var f in e) "default" !== f && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(f);
        o.default = c.a;
    },
    b8f6: function(n, o, t) {
        t.r(o);
        var e = t("47b4"), c = t("a84f");
        for (var f in c) "default" !== f && function(n) {
            t.d(o, n, function() {
                return c[n];
            });
        }(f);
        t("95839");
        var a = t("f0c5"), r = Object(a.a)(c.default, e.b, e.c, !1, null, "4c41d49a", null, !1, e.a, void 0);
        o.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/mg-form-create-component", {
    "components/common/mg-form-create-component": function(n, o, t) {
        t("543d").createComponent(t("b8f6"));
    }
}, [ [ "components/common/mg-form-create-component" ] ] ]);