(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/swiper/custom-audio" ], {
    "057c": function(n, t, o) {
        o.r(t);
        var e = o("9ad2"), u = o.n(e);
        for (var c in e) "default" !== c && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(c);
        t.default = u.a;
    },
    "11e8": function(n, t, o) {
        var e = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return u;
        }), o.d(t, "a", function() {});
    },
    "2e20": function(n, t, o) {
        o.r(t);
        var e = o("11e8"), u = o("057c");
        for (var c in u) "default" !== c && function(n) {
            o.d(t, n, function() {
                return u[n];
            });
        }(c);
        o("7126");
        var a = o("f0c5"), i = Object(a.a)(u.default, e.b, e.c, !1, null, "0e49e629", null, !1, e.a, void 0);
        t.default = i.exports;
    },
    "66a6": function(n, t, o) {},
    7126: function(n, t, o) {
        var e = o("66a6");
        o.n(e).a;
    },
    "9ad2": function(n, e, u) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, u("2f62");
            var o, n = {
                name: "searchBox",
                props: {
                    co: {
                        type: Object,
                        default: function() {
                            return {
                                autio: {
                                    title: "音频名",
                                    author: "作者",
                                    links: ""
                                },
                                color: "#fb6638",
                                icon: [ {
                                    url: null,
                                    link: ""
                                } ],
                                topMargin: 0
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
                    return {
                        ypsc: "",
                        isplay: !1,
                        audioAction: {
                            method: "pause"
                        }
                    };
                },
                methods: {
                    bfzt: function() {
                        o.paused ? (this.isplay = !0, o.play()) : (this.isplay = !1, o.pause());
                    }
                },
                mounted: function() {
                    var n = this;
                    setTimeout(function() {
                        (o = t.createInnerAudioContext()).src = n.co.autio.links || "https://img-cdn-qiniu.dcloud.net.cn/uniapp/audio/music.mp3", 
                        o.onError(function(n) {
                            console.log(n);
                        });
                    }, 100);
                }
            };
            e.default = n;
        }).call(this, u("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/swiper/custom-audio-create-component", {
    "components/swiper/custom-audio-create-component": function(n, t, o) {
        o("543d").createComponent(o("2e20"));
    }
}, [ [ "components/swiper/custom-audio-create-component" ] ] ]);