(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/block-b" ], {
    "0c75": function(o, e, n) {
        n.r(e);
        var t = n("6c9a"), c = n("0e70");
        for (var a in c) "default" !== a && function(o) {
            n.d(e, o, function() {
                return c[o];
            });
        }(a);
        var l = n("f0c5"), r = Object(l.a)(c.default, t.b, t.c, !1, null, "72588308", null, !1, t.a, void 0);
        e.default = r.exports;
    },
    "0e70": function(o, e, n) {
        n.r(e);
        var t = n("1963"), c = n.n(t);
        for (var a in t) "default" !== a && function(o) {
            n.d(e, o, function() {
                return t[o];
            });
        }(a);
        e.default = c.a;
    },
    1963: function(o, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var t = {
            name: "popup",
            props: {
                cName: {
                    type: String,
                    default: ""
                },
                sname: "",
                type: {
                    type: String,
                    default: "1"
                },
                t: {
                    type: String,
                    default: ""
                },
                color: {
                    type: String,
                    default: ""
                },
                block: {
                    type: String,
                    default: ""
                }
            },
            methods: {}
        };
        e.default = t;
    },
    "6c9a": function(o, e, n) {
        var t = function() {
            var o = this, e = (o.$createElement, o._self._c, o.__get_style([ {
                background: o.color,
                borderColor: o.color,
                display: o.block && "block"
            }, o.sname ])), n = o.__get_style([ {
                color: o.color,
                borderColor: o.color,
                display: o.block && "block"
            }, o.sname ]);
            o.$mp.data = Object.assign({}, {
                $root: {
                    s0: e,
                    s1: n
                }
            });
        }, c = [];
        n.d(e, "b", function() {
            return t;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/block-b-create-component", {
    "components/common/block-b-create-component": function(o, e, n) {
        n("543d").createComponent(n("0c75"));
    }
}, [ [ "components/common/block-b-create-component" ] ] ]);