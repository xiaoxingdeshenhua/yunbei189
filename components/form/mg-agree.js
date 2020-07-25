(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/form/mg-agree" ], {
    1276: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                MgCell: function() {
                    t.e("components/common/mg-cell").then(function() {
                        return resolve(t("ef6e"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                title: "",
                value: "",
                color: "",
                p: ""
            },
            data: function() {
                return {};
            },
            computed: {
                cbVal: {
                    get: function() {
                        return this.value;
                    },
                    set: function(n) {
                        this.$emit("input", n);
                    }
                }
            },
            methods: {
                checkboxChange: function(n) {
                    this.cbVal = !this.cbVal;
                }
            }
        };
        e.default = o;
    },
    "3cb6": function(n, e, t) {
        t.r(e);
        var o = t("1276"), c = t.n(o);
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        e.default = c.a;
    },
    a8bd: function(n, e, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
    },
    a95e: function(n, e, t) {},
    d2af: function(n, e, t) {
        t.r(e);
        var o = t("a8bd"), c = t("3cb6");
        for (var a in c) "default" !== a && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(a);
        t("fb32");
        var u = t("f0c5"), r = Object(u.a)(c.default, o.b, o.c, !1, null, "935e72e6", null, !1, o.a, void 0);
        e.default = r.exports;
    },
    fb32: function(n, e, t) {
        var o = t("a95e");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/form/mg-agree-create-component", {
    "components/form/mg-agree-create-component": function(n, e, t) {
        t("543d").createComponent(t("d2af"));
    }
}, [ [ "components/form/mg-agree-create-component" ] ] ]);