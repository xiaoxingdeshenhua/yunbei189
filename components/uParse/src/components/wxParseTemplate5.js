(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/uParse/src/components/wxParseTemplate5" ], {
    "10de": function(e, n, t) {
        t.r(n);
        var o = t("eb12"), c = t("d464");
        for (var r in c) "default" !== r && function(e) {
            t.d(n, e, function() {
                return c[e];
            });
        }(r);
        var a = t("f0c5"), s = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = s.exports;
    },
    d464: function(e, n, t) {
        t.r(n);
        var o = t("fca5"), c = t.n(o);
        for (var r in o) "default" !== r && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(r);
        n.default = c.a;
    },
    eb12: function(e, n, t) {
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
    fca5: function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = {
            name: "wxParseTemplate5",
            props: {
                node: {}
            },
            components: {
                wxParseTemplate: function() {
                    t.e("components/uParse/src/components/wxParseTemplate6").then(function() {
                        return resolve(t("c17d"));
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
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/uParse/src/components/wxParseTemplate5-create-component", {
    "components/uParse/src/components/wxParseTemplate5-create-component": function(e, n, t) {
        t("543d").createComponent(t("10de"));
    }
}, [ [ "components/uParse/src/components/wxParseTemplate5-create-component" ] ] ]);