(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/mg-cell" ], {
    "35c7": function(n, t, e) {
        var c = function() {
            var n = this, t = (n.$createElement, n._self._c, n.__get_style([ {
                background: n.bgc
            }, n.sname ]));
            n.$mp.data = Object.assign({}, {
                $root: {
                    s0: t
                }
            });
        }, o = [];
        e.d(t, "b", function() {
            return c;
        }), e.d(t, "c", function() {
            return o;
        }), e.d(t, "a", function() {});
    },
    "81af": function(n, t, e) {
        var c = e("d1e3");
        e.n(c).a;
    },
    bdf6: function(n, t, e) {
        e.r(t);
        var c = e("cada"), o = e.n(c);
        for (var a in c) "default" !== a && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(a);
        t.default = o.a;
    },
    cada: function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = {
            name: "mg-cell",
            props: {
                bgc: {
                    type: String,
                    default: ""
                },
                last: "",
                cname: "",
                noc: "",
                sname: "",
                isl: "",
                isr: "",
                ht: "",
                hw: "",
                img: "",
                m: {
                    type: String,
                    default: "aspectFill"
                },
                w: "",
                h: "",
                brs: "",
                btt: "",
                bttc: "",
                bbt: "",
                ft: "",
                ftc: "",
                color: "",
                arrow: "",
                hc: {
                    type: String,
                    value: ""
                }
            },
            data: function() {
                return {};
            },
            computed: {},
            methods: {
                maskTap: function() {
                    this.$emit("input", !1);
                }
            }
        };
        t.default = c;
    },
    d1e3: function(n, t, e) {},
    ef6e: function(n, t, e) {
        e.r(t);
        var c = e("35c7"), o = e("bdf6");
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        e("81af");
        var r = e("f0c5"), l = Object(r.a)(o.default, c.b, c.c, !1, null, "0cce9c88", null, !1, c.a, void 0);
        t.default = l.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/mg-cell-create-component", {
    "components/common/mg-cell-create-component": function(n, t, e) {
        e("543d").createComponent(e("ef6e"));
    }
}, [ [ "components/common/mg-cell-create-component" ] ] ]);