(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/integral/goods-list" ], {
    "05ef": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = n("2f62");
        function a(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(t);
                e && (o = o.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, o);
            }
            return n;
        }
        var r = {
            name: "goods-list",
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                list: {
                    type: Array,
                    default: []
                },
                color: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            computed: function(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var c = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(c), !0).forEach(function(e) {
                        var t, n, o;
                        t = r, o = c[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : a(Object(c)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                    });
                }
                return r;
            }({}, (0, o.mapState)("dndc", [ "mySwitch" ]), {
                goodsList: function() {
                    return this.list;
                }
            }),
            methods: {
                onClick: function() {
                    this.$emit("click");
                }
            }
        };
        t.default = r;
    },
    "0665": function(e, t, n) {
        n.r(t);
        var o = n("a109"), r = n("e048");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("8fe5");
        var a = n("f0c5"), i = Object(a.a)(r.default, o.b, o.c, !1, null, "7469f5ac", null, !1, o.a, void 0);
        t.default = i.exports;
    },
    "4d4e": function(e, t, n) {},
    "8fe5": function(e, t, n) {
        var o = n("4d4e");
        n.n(o).a;
    },
    a109: function(e, t, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    e048: function(e, t, n) {
        n.r(t);
        var o = n("05ef"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/integral/goods-list-create-component", {
    "components/integral/goods-list-create-component": function(e, t, n) {
        n("543d").createComponent(n("0665"));
    }
}, [ [ "components/integral/goods-list-create-component" ] ] ]);