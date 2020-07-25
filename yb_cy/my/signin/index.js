(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/signin/index" ], {
    1416: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("8156")).default);
        }).call(this, n("543d").createPage);
    },
    "142f": function(t, e, n) {
        n.r(e);
        var r = n("facc"), o = n.n(r);
        for (var a in r) "default" !== a && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(a);
        e.default = o.a;
    },
    "2e75": function(t, e, n) {
        var r = n("d8b8");
        n.n(r).a;
    },
    8156: function(t, e, n) {
        n.r(e);
        var r = n("bbe1"), o = n("142f");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("2e75");
        var i = n("f0c5"), c = Object(i.a)(o.default, r.b, r.c, !1, null, "ed0935a4", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    bbe1: function(t, e, n) {
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
    d8b8: function(t, e, n) {},
    facc: function(t, d, g) {
        (function(o) {
            Object.defineProperty(d, "__esModule", {
                value: !0
            }), d.default = void 0;
            var a = n(g("4795")), t = g("2f62"), e = g("c1ef"), i = g("1127"), c = n(g("6f73"));
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function u(o) {
                for (var t = 1; t < arguments.length; t++) {
                    var a = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(a), !0).forEach(function(t) {
                        var e, n, r;
                        e = o, r = a[n = t], n in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(t) {
                        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(a, t));
                    });
                }
                return o;
            }
            function s(t, e, n, r, o, a, i) {
                try {
                    var c = t[a](i), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(r, o);
            }
            function f(c) {
                return function() {
                    var t = this, i = arguments;
                    return new Promise(function(e, n) {
                        var r = c.apply(t, i);
                        function o(t) {
                            s(r, e, n, o, a, "next", t);
                        }
                        function a(t) {
                            s(r, e, n, o, a, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            var l = {
                name: "index",
                components: {
                    MgImg: function() {
                        g.e("components/common/mg-img").then(function() {
                            return resolve(g("e668"));
                        }.bind(null, g)).catch(g.oe);
                    }
                },
                data: function() {
                    return {
                        goSignin: "",
                        dataRecord: "",
                        totalSignDay: 0,
                        totalDay: 0,
                        mySignData: "",
                        config: "",
                        dataList: [],
                        showLoading: !0,
                        storeInfo: {}
                    };
                },
                onLoad: function() {
                    var r = this;
                    return f(a.default.mark(function t() {
                        var e, n;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return r.getSystem(r), o.setNavigationBarTitle({
                                    title: "签到"
                                }), e = c.default.formatTime(new Date()), n = new Date().getTime(), console.log(e, n), 
                                r.getDates(n), t.next = 7, r.getLoginInfo();

                              case 7:
                                r.weekSignRecord(), r.mySign(), r.getSwitchConfig(), r.getConfig(), r.getList(), 
                                r.getDw();

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                mixins: [ e.utilMixins ],
                computed: u({}, (0, t.mapState)("dndc", [ "mySwitch" ]), {
                    jsqd: function() {
                        if (this.dataRecord) {
                            var t = this.dataRecord, e = 0, n = c.default.formatTime(new Date()).substring(0, 10), r = t.findIndex(function(t) {
                                return t.time == n;
                            });
                            console.log("本周签到记录", this.dataRecord), console.log("今天", r);
                            for (var o = 0; o < t.length; o++) o < r ? (console.log("已签到", o, t[o]), 1 == t[o].sign ? (t[o].type = 1, 
                            t[o].btnName = "已签到", t[o].icon = "/static/wd/signin/gou.png") : t[o].type = 2) : o == r ? 1 == t[o].sign ? (t[o].type = 1, 
                            t[o].btnName = "已签到", t[o].icon = "/static/wd/signin/gou.png") : (t[o].type = 3, 
                            t[o].btnName = "签到", t[o].icon = "/static/wd/signin/jb.png") : (t[o].type = 4, t[o].icon = "/static/wd/signin/jb.png"), 
                            t[o].name = o + 1, 1 == t[o].sign && e++;
                            e = +e;
                            var a = +(t.length - e), i = t;
                            return console.log("连续天数", e), console.log("签到记录2", t), console.log("返回数据", e, a, i), 
                            {
                                totalSignDay: e,
                                totalDay: a,
                                weeklist: i
                            };
                        }
                    }
                }),
                methods: u({}, (0, t.mapActions)("dndc", [ "getSwitchConfig" ]), {
                    getConfig: function() {
                        var r = this;
                        return f(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.config,
                                        data: {
                                            ident: "signin"
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r.config = n, console.log("签到系统设置", r.config);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    weekSignRecord: function() {
                        var r = this;
                        return f(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.WeekSignRecord,
                                        method: "POST",
                                        data: {
                                            userId: r.user.userId
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r.dataRecord = n.record, r.showBtn(), r.showLoading = !1;

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    mySign: function() {
                        var r = this;
                        return f(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.MySign,
                                        method: "POST",
                                        data: {
                                            userId: r.user.userId
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r.mySignData = n, console.log("我的签到", n);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    showBtn: function() {
                        var n = this;
                        return f(a.default.mark(function t() {
                            var e;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e = n.jsqd.weeklist.map(function(t) {
                                        return {
                                            type: t.type
                                        };
                                    }), console.log(e[n.jsqd.totalSignDay].type), 3 == e[n.jsqd.totalSignDay].type ? (console.log("今天未签到"), 
                                    n.goSignin = "1") : (console.log("今天已签到"), n.goSignin = "2");

                                  case 3:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    ljqd: function() {
                        var r = this;
                        return f(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.requestSM("sign");

                                  case 2:
                                    if (e = r.jsqd.totalSignDay + 1, console.log(e), "1" != r.goSignin) {
                                        t.next = 12;
                                        break;
                                    }
                                    return t.next = 7, r.util.request({
                                        url: r.api.Sign,
                                        method: "POST",
                                        data: {
                                            day: e,
                                            userId: r.user.userId
                                        }
                                    });

                                  case 7:
                                    n = t.sent, r.weekSignRecord(), r.mySign(), 0 == n.errno && r.util.message("签到成功", 1), 
                                    console.log(n.message);

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getDw: function() {
                        var r = this;
                        return f(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, i.getDw)({
                                        t: 0
                                    });

                                  case 2:
                                    return e = t.sent, t.next = 5, r.util.request({
                                        url: r.api.StoreList,
                                        data: {
                                            lat: e.latitude,
                                            lng: e.longitude
                                        }
                                    });

                                  case 5:
                                    n = t.sent, r.storeInfo = n.data[0], console.log(r.storeInfo);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getList: function() {
                        var r = this;
                        return f(a.default.mark(function t() {
                            var e, n;
                            return a.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.IntegralGoodsList,
                                        method: "POST",
                                        data: r.params
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, console.log(n, r.dataList), r.dataList = r.dataList.concat(n);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    mysignin: function(t) {
                        this.go({
                            t: 1,
                            url: "/yb_cy/my/signin/my-signin?type=" + t.type
                        });
                    },
                    mycoupon: function() {
                        this.go({
                            t: 1,
                            url: "/yb_cy/my/signin/my-coupon"
                        });
                    },
                    getDates: function(t) {
                        for (var e = new Date(t), n = e.getTime(), r = e.getDay(), o = [], a = 0; a < 7; a++) o.push(new Date(n + 864e5 * (a - (r + 6) % 7)).toLocaleDateString().replace(/\//g, "-"));
                        for (var i in o) o[i] = o[i].split("-").map(c.default.formatNumber).join("-");
                        return console.log(o), o;
                    }
                }),
                created: function() {
                    return f(a.default.mark(function t() {
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            };
            d.default = l;
        }).call(this, g("543d").default);
    }
}, [ [ "1416", "common/runtime", "common/vendor" ] ] ]);