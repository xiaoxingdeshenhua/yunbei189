(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/invite/fxzx" ], {
    "46bc": function(t, e, n) {},
    "703f": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("74f9")).default);
        }).call(this, n("543d").createPage);
    },
    "74f9": function(t, e, n) {
        n.r(e);
        var r = n("8974"), o = n("f93a");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("9837");
        var u = n("f0c5"), i = Object(u.a)(o.default, r.b, r.c, !1, null, "a28d827a", null, !1, r.a, void 0);
        e.default = i.exports;
    },
    8974: function(t, e, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "906a": function(t, i, f) {
        (function(s) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var t, l = (t = f("4795")) && t.__esModule ? t : {
                default: t
            }, e = f("2f62");
            function n(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function r(o) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? n(Object(a), !0).forEach(function(t) {
                        var e, n, r;
                        e = o, r = a[n = t], n in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : n(Object(a)).forEach(function(t) {
                        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return o;
            }
            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t;
                }(t) || function(t, e) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                        var n = [], r = !0, o = !1, a = void 0;
                        try {
                            for (var u, i = t[Symbol.iterator](); !(r = (u = i.next()).done) && (n.push(u.value), 
                            !e || n.length !== e); r = !0) ;
                        } catch (t) {
                            o = !0, a = t;
                        } finally {
                            try {
                                r || null == i.return || i.return();
                            } finally {
                                if (o) throw a;
                            }
                        }
                        return n;
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return o(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }();
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function c(t, e, n, r, o, a, u) {
                try {
                    var i = t[a](u), c = i.value;
                } catch (t) {
                    return void n(t);
                }
                i.done ? e(c) : Promise.resolve(c).then(r, o);
            }
            function a(i) {
                return function() {
                    var t = this, u = arguments;
                    return new Promise(function(e, n) {
                        var r = i.apply(t, u);
                        function o(t) {
                            c(r, e, n, o, a, "next", t);
                        }
                        function a(t) {
                            c(r, e, n, o, a, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var u = {
                name: "fxzx",
                components: {
                    uniNoticeBar: function() {
                        f.e("components/third/uni-notice-bar").then(function() {
                            return resolve(f("6b70"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    mgShare: function() {
                        f.e("components/template/share").then(function() {
                            return resolve(f("f25a"));
                        }.bind(null, f)).catch(f.oe);
                    }
                },
                data: function() {
                    return {
                        shareshow: !1,
                        lbarr: [],
                        shareCo: {}
                    };
                },
                onLoad: function(t) {
                    var f = this;
                    return a(l.default.mark(function t() {
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                f.getSystem(), f.util.setNT("推广中心"), f.getLoginInfo().then(a(l.default.mark(function t() {
                                    var e, n, r, o, a, u, i, c;
                                    return l.default.wrap(function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                          case 0:
                                            return t.next = 2, f.getFxzx({
                                                that: f,
                                                uId: f.uId
                                            });

                                          case 2:
                                            return t.next = 4, f.util.request({
                                                url: f.api.miniCode,
                                                data: {
                                                    userId: f.uId
                                                }
                                            });

                                          case 4:
                                            return e = t.sent, n = e.data, t.prev = 6, t.next = 9, s.getImageInfo({
                                                src: f.fxsInfo.shareAd
                                            });

                                          case 9:
                                            return r = t.sent, (o = d(r, 2))[0], a = o[1], t.next = 15, s.getImageInfo({
                                                src: n
                                            });

                                          case 15:
                                            u = t.sent, (i = d(u, 2))[0], c = i[1], f.shareCo = {
                                                isget: !0,
                                                bgimg: a.path,
                                                code: c.path
                                            }, t.next = 25;
                                            break;

                                          case 22:
                                            t.prev = 22, t.t0 = t.catch(6), console.log("图片error", t.t0);

                                          case 25:
                                          case "end":
                                            return t.stop();
                                        }
                                    }, t, null, [ [ 6, 22 ] ]);
                                }))), f.getSylb();

                              case 4:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                computed: r({}, (0, e.mapState)("dndc", [ "fxsInfo" ]), {
                    swiper: function() {
                        return {
                            topMargin: 20,
                            leftRightPadding: 0,
                            upDownPadding: 0,
                            swiper: {
                                children: [ {
                                    url: this.fxsInfo.ad
                                } ]
                            },
                            duration: "",
                            height: "210",
                            radius: "0",
                            auto: !0,
                            interval: 5
                        };
                    },
                    syarr: function() {
                        return [ {
                            t: "今日预计收益",
                            url: "syxq?t=1",
                            n: this.fxsInfo.todayIncome
                        }, {
                            t: "累计收益",
                            url: "yxsy",
                            n: this.fxsInfo.totalIncome
                        } ];
                    },
                    txarr: function() {
                        return [ {
                            t: "可提现金额",
                            url: "tx",
                            c: "#F10D24",
                            n: this.fxsInfo.available
                        }, {
                            t: "已提现金额",
                            url: "txmx?t=1",
                            c: "#999",
                            n: this.fxsInfo.been
                        }, {
                            t: "冻结中金额",
                            url: "txmx?t=2",
                            c: "#14A118",
                            n: this.fxsInfo.freezeMoney
                        } ];
                    },
                    hbarr: function() {
                        return [ {
                            t: "直接伙伴",
                            n: this.fxsInfo.fristNum
                        }, {
                            hide: 1 != this.fxsInfo.grade,
                            t: "间接伙伴",
                            n: this.fxsInfo.secondNum
                        } ];
                    },
                    tjarr: function() {
                        return [ {
                            t: "今日订单",
                            url: "syxq?t=1",
                            n: this.fxsInfo.todayOrder
                        }, {
                            t: "已完成订单",
                            url: "syxq?t=2",
                            n: this.fxsInfo.completeOrder
                        }, {
                            t: "在途中订单",
                            url: "syxq?t=3",
                            n: this.fxsInfo.openOrder
                        } ];
                    }
                }),
                methods: r({}, (0, e.mapActions)("dndc", [ "getFxzx" ]), {
                    ljyq: function() {
                        this.shareshow = !0;
                    },
                    goDl: function(t) {
                        this.go({
                            url: t.url
                        });
                    },
                    getSylb: function() {
                        var r = this;
                        return a(l.default.mark(function t() {
                            var e, n;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.incomeList
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r.lbarr = n;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                }),
                onShareAppMessage: function() {
                    this.shareshow = !1;
                    var t = "yb_cy/index/index?userId=".concat(this.uId);
                    return this.util.mpShare({
                        t: "快来看看吧！",
                        i: this.fxsInfo.ad && this.getImgS(this.fxsInfo.ad),
                        p: t
                    });
                }
            };
            i.default = u;
        }).call(this, f("543d").default);
    },
    9837: function(t, e, n) {
        var r = n("46bc");
        n.n(r).a;
    },
    f93a: function(t, e, n) {
        n.r(e);
        var r = n("906a"), o = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = o.a;
    }
}, [ [ "703f", "common/runtime", "common/vendor" ] ] ]);