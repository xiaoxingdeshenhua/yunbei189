(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/form/mg-radio" ], {
    "08a3": function(n, t, e) {},
    2997: function(n, t, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return a;
        }), e.d(t, "a", function() {});
    },
    "4b28": function(n, t, e) {
        e.r(t);
        var o = e("2997"), a = e("a23e");
        for (var r in a) "default" !== r && function(n) {
            e.d(t, n, function() {
                return a[n];
            });
        }(r);
        e("6a81");
        var c = e("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, "7d30a0ea", null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "6a81": function(n, t, e) {
        var o = e("08a3");
        e.n(o).a;
    },
    7395: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            components: {
                MgCell: function() {
                    e.e("components/common/mg-cell").then(function() {
                        return resolve(e("ef6e"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            props: {
                arr: "",
                value: "",
                color: "",
                rtype: {
                    type: String,
                    default: "1"
                },
                ranktype: {
                    type: String,
                    default: "1"
                },
                bttc: {
                    type: String,
                    default: ""
                },
                last: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    items: [],
                    current: ""
                };
            },
            computed: {
                radioVal: {
                    get: function() {
                        return this.value;
                    },
                    set: function(n) {
                        this.$emit("input", n);
                    }
                }
            },
            methods: {
                radioChange: function(n) {
                    this.radioVal = n.detail.value, this.$emit("change", n.detail.value);
                }
            }
        };
        t.default = o;
    },
    a23e: function(n, t, e) {
        e.r(t);
        var o = e("7395"), a = e.n(o);
        for (var r in o) "default" !== r && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(r);
        t.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/form/mg-radio-create-component", {
    "components/form/mg-radio-create-component": function(n, t, e) {
        e("543d").createComponent(e("4b28"));
    }
}, [ [ "components/form/mg-radio-create-component" ] ] ]);