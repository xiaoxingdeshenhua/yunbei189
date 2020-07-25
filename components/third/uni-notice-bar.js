(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/third/uni-notice-bar" ], {
    "02d2": function(t, e, n) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                name: "UniNoticeBar",
                components: {},
                props: {
                    text: {
                        type: String,
                        default: ""
                    },
                    moreText: {
                        type: String,
                        default: ""
                    },
                    backgroundColor: {
                        type: String,
                        default: "#fffbe8"
                    },
                    speed: {
                        type: [ String, Number ],
                        default: 50
                    },
                    color: {
                        type: String,
                        default: "#de8c17"
                    },
                    single: {
                        type: [ String, Boolean ],
                        default: !1
                    },
                    scrollable: {
                        type: [ String, Boolean ],
                        default: !1
                    },
                    showIcon: {
                        type: [ String, Boolean ],
                        default: !1
                    },
                    showGetMore: {
                        type: [ String, Boolean ],
                        default: !1
                    },
                    showClose: {
                        type: [ String, Boolean ],
                        default: !1
                    }
                },
                data: function() {
                    return {
                        elId: "Uni_".concat(Math.ceil(1e6 * Math.random()).toString(36)),
                        show: !0,
                        animation: ""
                    };
                },
                watch: {
                    text: function(t, e) {
                        var n = this;
                        this.$nextTick(function() {
                            setTimeout(n.setAnimation, 0);
                        });
                    }
                },
                onReady: function() {
                    this.setAnimation();
                },
                methods: {
                    clickMore: function() {
                        this.$emit("getmore");
                    },
                    onClick: function(t) {
                        var e = t.touches ? t.touches[0] ? t.touches[0].clientX : t.changedTouches[0].clientX : t.detail.clientX;
                        n.upx2px(48) + 12 > e && "true" === String(this.showClose) && (this.show = !1, this.$emit("close")), 
                        this.$emit("click");
                    },
                    setAnimation: function() {
                        var e = this;
                        !1 !== this.scrollable && "false" !== this.scrollable && n.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec(function(t) {
                            e.animation = "notice ".concat(t[0].width / e.speed, "s linear infinite both");
                        });
                    }
                }
            };
            e.default = t;
        }).call(this, n("543d").default);
    },
    1282: function(t, e, n) {
        var o = n("2ce3");
        n.n(o).a;
    },
    "2ce3": function(t, e, n) {},
    "6aab": function(t, e, n) {
        n.r(e);
        var o = n("02d2"), i = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = i.a;
    },
    "6b70": function(t, e, n) {
        n.r(e);
        var o = n("c6f6"), i = n("6aab");
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        n("1282");
        var a = n("f0c5"), l = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = l.exports;
    },
    c6f6: function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, i = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/third/uni-notice-bar-create-component", {
    "components/third/uni-notice-bar-create-component": function(t, e, n) {
        n("543d").createComponent(n("6b70"));
    }
}, [ [ "components/third/uni-notice-bar-create-component" ] ] ]);