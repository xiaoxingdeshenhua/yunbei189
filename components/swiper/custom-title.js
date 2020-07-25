(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/custom-title" ], {
    "0444": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, r = (o = e("4795")) && o.__esModule ? o : {
            default: o
        };
        function i(t, n, e, o, r, a, u) {
            try {
                var c = t[a](u), i = c.value;
            } catch (t) {
                return void e(t);
            }
            c.done ? n(i) : Promise.resolve(i).then(o, r);
        }
        e("2f62");
        var a = {
            name: "searchBox",
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {
                            backgroundColor: "#fff",
                            color: "#000",
                            fontWeight: "normal",
                            radius: 1,
                            subTitle: "副标题",
                            title: "标题",
                            titleStyle: 1,
                            topMargin: 0,
                            typesetting: 1
                        };
                    }
                },
                u: {
                    type: String,
                    default: "px"
                },
                color: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {};
            },
            methods: {},
            created: function() {
                return c = r.default.mark(function t() {
                    return r.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }), function() {
                    var t = this, u = arguments;
                    return new Promise(function(n, e) {
                        var o = c.apply(t, u);
                        function r(t) {
                            i(o, n, e, r, a, "next", t);
                        }
                        function a(t) {
                            i(o, n, e, r, a, "throw", t);
                        }
                        r(void 0);
                    });
                }();
                var c;
            }
        };
        n.default = a;
    },
    "3ad0": function(t, n, e) {
        var o = e("b7ae");
        e.n(o).a;
    },
    "777d": function(t, n, e) {
        e.r(n);
        var o = e("7dd4"), r = e("9516");
        for (var a in r) "default" !== a && function(t) {
            e.d(n, t, function() {
                return r[t];
            });
        }(a);
        e("3ad0");
        var u = e("f0c5"), c = Object(u.a)(r.default, o.b, o.c, !1, null, "9f80742a", null, !1, o.a, void 0);
        n.default = c.exports;
    },
    "7dd4": function(t, n, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return r;
        }), e.d(n, "a", function() {});
    },
    9516: function(t, n, e) {
        e.r(n);
        var o = e("0444"), r = e.n(o);
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        n.default = r.a;
    },
    b7ae: function(t, n, e) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/custom-title-create-component", {
    "components/swiper/custom-title-create-component": function(t, n, e) {
        e("543d").createComponent(e("777d"));
    }
}, [ [ "components/swiper/custom-title-create-component" ] ] ]);