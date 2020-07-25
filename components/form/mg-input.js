(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/form/mg-input" ], {
    3291: function(t, n, e) {
        var o = e("3a80");
        e.n(o).a;
    },
    "3a80": function(t, n, e) {},
    "54e9": function(t, n, e) {
        e.r(n);
        var o = e("6347"), u = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = u.a;
    },
    6347: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "mg-input",
            components: {
                MgCell: function() {
                    e.e("components/common/mg-cell").then(function() {
                        return resolve(e("ef6e"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                cname: {
                    type: String,
                    default: "p23"
                },
                sname: "",
                formt: {
                    type: String,
                    default: "1"
                },
                hw: {
                    type: String,
                    default: ""
                },
                isl: {
                    type: String,
                    default: ""
                },
                isr: {
                    type: String,
                    default: ""
                },
                ht: {
                    type: String,
                    default: ""
                },
                htc: {
                    type: String,
                    default: ""
                },
                ft: {
                    type: String,
                    default: ""
                },
                ftc: {
                    type: String,
                    default: ""
                },
                arrow: {
                    type: String,
                    default: ""
                },
                dis: {
                    type: [ Boolean, String ],
                    default: !1
                },
                t: {
                    type: String,
                    default: "text"
                },
                value: {
                    type: String,
                    default: ""
                },
                icn: {
                    type: String,
                    default: ""
                },
                max: {
                    type: Number,
                    default: 50
                },
                pr: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            computed: {
                inputVal: {
                    get: function() {
                        return this.value;
                    },
                    set: function(t) {
                        this.$emit("input", t);
                    }
                }
            },
            methods: {
                switchChange: function(t) {
                    this.$emit("input", t.detail.value ? "1" : "2"), console.log(t.detail.value);
                },
                maskTap: function() {
                    this.$emit("input", !1);
                }
            }
        };
        n.default = o;
    },
    6831: function(t, n, e) {
        e.r(n);
        var o = e("840a"), u = e("54e9");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("3291");
        var i = e("f0c5"), r = Object(i.a)(u.default, o.b, o.c, !1, null, "938cd0d8", null, !1, o.a, void 0);
        n.default = r.exports;
    },
    "840a": function(t, n, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/form/mg-input-create-component", {
    "components/form/mg-input-create-component": function(t, n, e) {
        e("543d").createComponent(e("6831"));
    }
}, [ [ "components/form/mg-input-create-component" ] ] ]);