(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/order/hb" ], {
    "0571": function(e, t, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    },
    "5bd3": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("e3e4")).default);
        }).call(this, n("543d").createPage);
    },
    "711e": function(e, t, n) {
        var r = n("a9a8");
        n.n(r).a;
    },
    "7a3b": function(e, o, u) {
        (function(a) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var e, c = (e = u("4795")) && e.__esModule ? e : {
                default: e
            };
            function i(e, t, n, r, o, a, c) {
                try {
                    var u = e[a](c), i = u.value;
                } catch (e) {
                    return void n(e);
                }
                u.done ? t(i) : Promise.resolve(i).then(r, o);
            }
            function t(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function n(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? t(Object(a), !0).forEach(function(e) {
                        var t, n, r;
                        t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : t(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return o;
            }
            var r = {
                name: "order-hb",
                components: {},
                data: function() {
                    return {
                        hbh: "",
                        img: "",
                        show: !1
                    };
                },
                onLoad: function(e) {
                    this.util.showLoading("海报生成中"), this.util.setNT("海报"), this.query = n({}, e, {
                        co: JSON.parse(decodeURIComponent(e.co))
                    }), this.getCanvas(), console.log(this.query, 600 / this.util.getSb().rate);
                },
                computed: n({}, (0, u("2f62").mapState)("dndc", [ "fxsInfo" ])),
                methods: {
                    getCanvas: function() {
                        var u, o = this;
                        return u = c.default.mark(function e() {
                            var t, n, r;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    e.t0 = +o.query.type, e.next = 1 === e.t0 ? 3 : 5;
                                    break;

                                  case 3:
                                    try {
                                        t = a.createCanvasContext("hbctx"), n = o.query.co.bgimg, r = o.query.co.code, t.fillRect(0, 0, 325, 450), 
                                        t.drawImage(n, 0, 0, 325, 450), t.save(), t.beginPath(), t.arc(160, 360, 60, 0, 2 * Math.PI), 
                                        t.clip(), t.drawImage(r, 100, 300, 120, 120), t.restore(), t.draw(), setTimeout(function() {
                                            a.canvasToTempFilePath({
                                                canvasId: "hbctx",
                                                success: function(e) {
                                                    o.show = !0, o.img = e.tempFilePath;
                                                },
                                                complete: function(e) {
                                                    a.hideLoading(), console.log(e);
                                                }
                                            });
                                        }, 200);
                                    } catch (e) {
                                        o.util.message("生成失败", 2);
                                    }
                                    return e.abrupt("break", 6);

                                  case 5:
                                    return e.abrupt("break", 6);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }), function() {
                            var e = this, c = arguments;
                            return new Promise(function(t, n) {
                                var r = u.apply(e, c);
                                function o(e) {
                                    i(r, t, n, o, a, "next", e);
                                }
                                function a(e) {
                                    i(r, t, n, o, a, "throw", e);
                                }
                                o(void 0);
                            });
                        }();
                    },
                    bc: function() {
                        var t = this;
                        a.saveImageToPhotosAlbum({
                            filePath: this.img,
                            success: function(e) {
                                a.showModal({
                                    content: "图片已保存到相册，赶紧晒一下吧~",
                                    showCancel: !1,
                                    confirmText: "好的",
                                    success: function() {
                                        t.go({
                                            t: 4
                                        });
                                    }
                                });
                            }
                        });
                    }
                }
            };
            o.default = r;
        }).call(this, u("543d").default);
    },
    "84d9": function(e, t, n) {
        n.r(t);
        var r = n("7a3b"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    a9a8: function(e, t, n) {},
    e3e4: function(e, t, n) {
        n.r(t);
        var r = n("0571"), o = n("84d9");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("711e");
        var c = n("f0c5"), u = Object(c.a)(o.default, r.b, r.c, !1, null, "e2d8e450", null, !1, r.a, void 0);
        t.default = u.exports;
    }
}, [ [ "5bd3", "common/runtime", "common/vendor" ] ] ]);