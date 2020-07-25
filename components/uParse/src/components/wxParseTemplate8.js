(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uParse/src/components/wxParseTemplate8" ], {
    "34a6": function(e, n, t) {
        t.r(n);
        var o = t("7f09"), c = t("6949");
        for (var r in c) "default" !== r && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(r);
        var a = t("f0c5"), s = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = s.exports;
    },
    6949: function(e, n, t) {
        t.r(n);
        var o = t("eb3c"), c = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = c.a;
    },
    "7f09": function(e, n, t) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, c = [];
        t.d(n, "b", function() {
            return o;
        }), t.d(n, "c", function() {
            return c;
        }), t.d(n, "a", function() {});
    },
    eb3c: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "wxParseTemplate8",
            props: {
                node: {}
            },
            components: {
                wxParseTemplate: function() {
                    t.e("components/uParse/src/components/wxParseTemplate9").then(function() {
                        return resolve(t("333f"));
                    }.bind(null, t)).catch(t.oe);
                },
                wxParseImg: function() {
                    t.e("components/uParse/src/components/wxParseImg").then(function() {
                        return resolve(t("ebd7"));
                    }.bind(null, t)).catch(t.oe);
                },
                wxParseVideo: function() {
                    t.e("components/uParse/src/components/wxParseVideo").then(function() {
                        return resolve(t("7852"));
                    }.bind(null, t)).catch(t.oe);
                },
                wxParseAudio: function() {
                    t.e("components/uParse/src/components/wxParseAudio").then(function() {
                        return resolve(t("fd54"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            inject: [ "uparse" ],
            methods: {
                wxParseATap: function(e) {
                    var n = e.currentTarget.dataset.href;
                    n && this.uparse.navigate(n, e);
                }
            }
        };
        n.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uParse/src/components/wxParseTemplate8-create-component", {
    "components/uParse/src/components/wxParseTemplate8-create-component": function(e, n, t) {
        t("543d").createComponent(t("34a6"));
    }
}, [ [ "components/uParse/src/components/wxParseTemplate8-create-component" ] ] ]);