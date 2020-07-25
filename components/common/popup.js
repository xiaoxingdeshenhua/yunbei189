(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/popup" ], {
    ad19: function(n, o, t) {
        t.r(o);
        var e = t("d191"), a = t.n(e);
        for (var u in e) "default" !== u && function(n) {
            t.d(o, n, function() {
                return e[n];
            });
        }(u);
        o.default = a.a;
    },
    d191: function(n, o, t) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var e = {
            name: "popup",
            props: {
                className: {
                    type: String,
                    default: ""
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                position: {
                    type: String,
                    default: "bottom"
                },
                mask: {
                    type: Boolean,
                    default: !0
                },
                animation: {
                    type: Boolean,
                    default: !0
                },
                zIndex: {
                    type: String,
                    default: "999"
                },
                close: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {};
            },
            computed: {},
            methods: {
                maskTap: function() {
                    this.close && this.$emit("input", !1);
                }
            }
        };
        o.default = e;
    },
    da89: function(n, o, t) {
        t.r(o);
        var e = t("f00e"), a = t("ad19");
        for (var u in a) "default" !== u && function(n) {
            t.d(o, n, function() {
                return a[n];
            });
        }(u);
        t("f949");
        var c = t("f0c5"), p = Object(c.a)(a.default, e.b, e.c, !1, null, "0a6ed646", null, !1, e.a, void 0);
        o.default = p.exports;
    },
    f00e: function(n, o, t) {
        var e = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        t.d(o, "b", function() {
            return e;
        }), t.d(o, "c", function() {
            return a;
        }), t.d(o, "a", function() {});
    },
    f949: function(n, o, t) {
        var e = t("fb462");
        t.n(e).a;
    },
    fb462: function(n, o, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/popup-create-component", {
    "components/common/popup-create-component": function(n, o, t) {
        t("543d").createComponent(t("da89"));
    }
}, [ [ "components/common/popup-create-component" ] ] ]);