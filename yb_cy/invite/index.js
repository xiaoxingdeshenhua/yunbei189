(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/invite/index" ], {
    "2f4a": function(n, e, t) {},
    5528: function(n, s, f) {
        (function(n) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var o = t(f("4795")), e = f("2f62");
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            function r(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter(function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable;
                    })), t.push.apply(t, r);
                }
                return t;
            }
            function a(o) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? r(Object(a), !0).forEach(function(n) {
                        var e, t, r;
                        e = o, r = a[t = n], t in e ? Object.defineProperty(e, t, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(n) {
                        Object.defineProperty(o, n, Object.getOwnPropertyDescriptor(a, n));
                    });
                }
                return o;
            }
            function c(n, e, t, r, o, a, i) {
                try {
                    var u = n[a](i), c = u.value;
                } catch (n) {
                    return void t(n);
                }
                u.done ? e(c) : Promise.resolve(c).then(r, o);
            }
            function i(u) {
                return function() {
                    var n = this, i = arguments;
                    return new Promise(function(e, t) {
                        var r = u.apply(n, i);
                        function o(n) {
                            c(r, e, t, o, a, "next", n);
                        }
                        function a(n) {
                            c(r, e, t, o, a, "throw", n);
                        }
                        o(void 0);
                    });
                };
            }
            var u = {
                name: "invite",
                components: {
                    uniNavBar: function() {
                        f.e("components/third/uni-nav-bar").then(function() {
                            return resolve(f("7f1a"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    MgImg: function() {
                        f.e("components/common/mg-img").then(function() {
                            return resolve(f("e668"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    MgCell: function() {
                        f.e("components/common/mg-cell").then(function() {
                            return resolve(f("ef6e"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    mgModal: function() {
                        f.e("components/common/modal").then(function() {
                            return resolve(f("ee48"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    mgShare: function() {
                        f.e("components/template/share").then(function() {
                            return resolve(f("f25a"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    load: function() {
                        f.e("components/common/load").then(function() {
                            return resolve(f("de6d"));
                        }.bind(null, f)).catch(f.oe);
                    }
                },
                data: function() {
                    return {
                        showLoading: !0,
                        opcity: 0,
                        iconOpcity: .5,
                        hdInfo: {},
                        params: {
                            userId: "",
                            name: "",
                            tel: ""
                        },
                        fxsInfo: {},
                        loading: !1,
                        lbarr: [ 1, 2, 3 ],
                        syarr: [ {
                            num: 0,
                            url: "yx-syxq?t=1",
                            name: "在路上收益"
                        }, {
                            num: 0,
                            url: "yx-syxq",
                            name: "累计收益"
                        }, {
                            num: 0,
                            url: "yx-wdfs",
                            name: "成功邀请"
                        } ],
                        jtarr: [ {
                            img: "yq",
                            name: "邀请新人好友"
                        }, {
                            img: "gwc",
                            name: ""
                        }, {
                            img: "hb",
                            name: "获得赏金"
                        } ],
                        hbarr: [],
                        fxshow: !1,
                        shareshow: !1,
                        mdmshow: !1,
                        mdmimg: ""
                    };
                },
                onLoad: function(n) {
                    var r = this;
                    return i(o.default.mark(function n() {
                        return o.default.wrap(function(n) {
                            for (;;) switch (n.prev = n.next) {
                              case 0:
                                r.getLoginInfo().then(i(o.default.mark(function n() {
                                    var e, t;
                                    return o.default.wrap(function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                          case 0:
                                            return r.params.userId = r.uId, n.next = 3, r.util.request({
                                                url: r.api.oldWithNew,
                                                data: {
                                                    userId: r.uId
                                                }
                                            });

                                          case 3:
                                            e = n.sent, t = e.data, r.showLoading = !1, r.hdInfo = t || {}, r.hbarr = r.hdInfo.oldData || [], 
                                            r.getSy();

                                          case 9:
                                          case "end":
                                            return n.stop();
                                        }
                                    }, n);
                                }))), r.getLdxConfig().then(function() {
                                    r.jtarr[1].name = "好友消费满" + r.ldxConfig.consumeMoney;
                                }), r.getSylb(), r.getSystem(), r.getSwitchConfig();

                              case 5:
                              case "end":
                                return n.stop();
                            }
                        }, n);
                    }))();
                },
                mixins: [ (t(f("6f73")), f("c1ef")).utilMixins ],
                computed: a({}, (0, e.mapState)("dndc", [ "ldxConfig", "mySwitch" ]), {
                    nzmoney: function() {
                        var n = this.hdInfo.oldData;
                        if (n && n.length) return 1 < n.length ? "".concat(n[0].money, "-").concat(n[n.length - 1].money) : "".concat(n[0].money);
                    }
                }),
                methods: a({}, (0, e.mapActions)("dndc", [ "getLdxConfig", "getSwitchConfig" ]), {
                    ljyq: function(n) {
                        var e = this.fxsInfo.state;
                        e ? 1 == e ? this.util.message("请等待平台审核您的申请", 3) : 3 == e ? this.util.message("您的申请已被拒绝", 3) : 2 == e && (1 == n ? this.shareshow = !0 : this.mdmshow = !0) : this.go({
                            url: "sqfx"
                        });
                    },
                    hdgz: function() {
                        n.setStorageSync("fwb", this.hdInfo.introduce), this.go({
                            t: 1,
                            url: "/yb_cy/my/other/gywm?t=".concat(this.hdInfo.name, "&p=6")
                        });
                    },
                    getSy: function() {
                        var r = this;
                        return i(o.default.mark(function n() {
                            var e, t;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, r.util.request({
                                        url: r.api.DistributionInfo,
                                        data: {
                                            userId: r.uId
                                        }
                                    });

                                  case 2:
                                    e = n.sent, (t = e.data) && (r.fxsInfo = t, r.syarr[0].num = +t.freezeMoney, r.syarr[1].num = +t.commission, 
                                    r.syarr[2].num = +t.people, r.util.request({
                                        url: r.api.miniCode,
                                        data: {
                                            userId: r.uId
                                        }
                                    }).then(function(n) {
                                        r.mdmimg = n.data;
                                    }));

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    },
                    getSylb: function() {
                        var r = this;
                        return i(o.default.mark(function n() {
                            var e, t;
                            return o.default.wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                  case 0:
                                    return n.next = 2, r.util.request({
                                        url: r.api.incomeList
                                    });

                                  case 2:
                                    e = n.sent, t = e.data, r.lbarr = t;

                                  case 5:
                                  case "end":
                                    return n.stop();
                                }
                            }, n);
                        }))();
                    }
                }),
                onPageScroll: function(n) {
                    if (!(1 <= this.opcity && 1 <= n.scrollTop / 64)) {
                        var e = n.scrollTop / 64;
                        this.opcity = e, this.iconOpcity = .5 * (1 - e < 0 ? 0 : 1 - e);
                    }
                },
                onShareAppMessage: function() {
                    this.shareshow = !1;
                    var n = "yb_cy/index/index?userId=".concat(this.uId);
                    return this.util.mpShare({
                        t: this.hdInfo.shareTitle,
                        i: this.hdInfo.shareImg && this.getSingleImg(this.hdInfo.shareImg),
                        p: n
                    });
                }
            };
            s.default = u;
        }).call(this, f("543d").default);
    },
    "897bb": function(n, e, t) {
        t.r(e);
        var r = t("d0ab"), o = t("a1e6");
        for (var a in o) "default" !== a && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(a);
        t("9786");
        var i = t("f0c5"), u = Object(i.a)(o.default, r.b, r.c, !1, null, "cf5cf66a", null, !1, r.a, void 0);
        e.default = u.exports;
    },
    9786: function(n, e, t) {
        var r = t("2f4a");
        t.n(r).a;
    },
    a1e6: function(n, e, t) {
        t.r(e);
        var r = t("5528"), o = t.n(r);
        for (var a in r) "default" !== a && function(n) {
            t.d(e, n, function() {
                return r[n];
            });
        }(a);
        e.default = o.a;
    },
    d0ab: function(n, e, t) {
        var r = function() {
            var e = this, n = (e.$createElement, e._self._c, e.timeToDate(e.hdInfo.startAt, "yyyy-MM-dd")), t = e.timeToDate(e.hdInfo.endAt, "yyyy-MM-dd");
            e._isMounted || (e.e0 = function(n) {
                e.shareshow = !0;
            }, e.e1 = function(n) {
                return e.util.preImg({
                    idx: 0,
                    urls: [ e.mdmimg ]
                });
            }, e.e2 = function(n) {
                e.mdmshow = !1;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    m0: n,
                    m1: t
                }
            });
        }, o = [];
        t.d(e, "b", function() {
            return r;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
    },
    e7b7: function(n, e, t) {
        (function(n) {
            function e(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            t("c27a"), e(t("66fd")), n(e(t("897bb")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "e7b7", "common/runtime", "common/vendor" ] ] ]);