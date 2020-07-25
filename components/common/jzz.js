(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/jzz" ], {
    2301: function(n, o, e) {
        e.r(o);
        var t = e("8181"), a = e.n(t);
        for (var c in t) "default" !== c && function(n) {
            e.d(o, n, function() {
                return t[n];
            });
        }(c);
        o.default = a.a;
    },
    "5fdde": function(n, o, e) {
        var t = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        e.d(o, "b", function() {
            return t;
        }), e.d(o, "c", function() {
            return a;
        }), e.d(o, "a", function() {});
    },
    "707a": function(n, o, e) {
        e.r(o);
        var t = e("5fdde"), a = e("2301");
        for (var c in a) "default" !== c && function(n) {
            e.d(o, n, function() {
                return a[n];
            });
        }(c);
        e("bfca");
        var u = e("f0c5"), f = Object(u.a)(a.default, t.b, t.c, !1, null, "268039de", null, !1, t.a, void 0);
        o.default = f.exports;
    },
    8181: function(n, o, e) {
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = void 0;
        var t = {
            name: "mg-img",
            props: {
                bgcolor: "",
                mygd: {
                    type: Boolean,
                    default: !1
                },
                nodata: ""
            },
            data: function() {
                return {};
            }
        };
        o.default = t;
    },
    a4a8: function(n, o, e) {},
    bfca: function(n, o, e) {
        var t = e("a4a8");
        e.n(t).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/jzz-create-component", {
    "components/common/jzz-create-component": function(n, o, e) {
        e("543d").createComponent(e("707a"));
    }
}, [ [ "components/common/jzz-create-component" ] ] ]);