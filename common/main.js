(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    "0fb8": function(e, t, n) {
        n.r(t);
        var r = n("76f1"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    "590f": function(e, t, n) {},
    "5be6": function(e, t, n) {
        n.r(t);
        var r = n("0fb8");
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        n("7cc9");
        var a = n("f0c5"), c = Object(a.a)(r.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        t.default = c.exports;
    },
    "76f1": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var r = a(n("4795")), o = a(n("27cd"));
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function f(e, t, n, r, o, a, c) {
            try {
                var f = e[a](c), u = f.value;
            } catch (e) {
                return void n(e);
            }
            f.done ? t(u) : Promise.resolve(u).then(r, o);
        }
        var u, c, i = {
            globalData: {
                siteInfo: o.default,
                onImgurl: o.default.siteroot.match(/(\S*)app/)[1] + "addons/yb_cy/appfile/"
            },
            onLaunch: function() {},
            onShow: (u = r.default.mark(function e(t) {
                var n;
                return r.default.wrap(function(e) {
                    for (;;) switch (e.prev = e.next) {
                      case 0:
                        if (!t) {
                            e.next = 8;
                            break;
                        }
                        if (!t.hasOwnProperty("referrerInfo")) {
                            e.next = 8;
                            break;
                        }
                        if ("wxeb490c6f9b154ef9" != t.referrerInfo.appId) {
                            e.next = 8;
                            break;
                        }
                        if (!t.referrerInfo.extraData) {
                            e.next = 8;
                            break;
                        }
                        return e.next = 6, this.util.request({
                            url: this.api.ActivateMembership,
                            method: "POST",
                            data: {
                                activate_ticket: t.referrerInfo.extraData.activate_ticket,
                                card_id: t.referrerInfo.extraData.card_id,
                                code: t.referrerInfo.extraData.code,
                                userId: this.$store.state.user.userId
                            }
                        });

                      case 6:
                        n = e.sent, console.log("%c extraData ", "color: white; background-color: #34aaff", t.referrerInfo, n.data);

                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e, this);
            }), c = function() {
                var e = this, c = arguments;
                return new Promise(function(t, n) {
                    var r = u.apply(e, c);
                    function o(e) {
                        f(r, t, n, o, a, "next", e);
                    }
                    function a(e) {
                        f(r, t, n, o, a, "throw", e);
                    }
                    o(void 0);
                });
            }, function(e) {
                return c.apply(this, arguments);
            }),
            onHide: function() {}
        };
        t.default = i;
    },
    "7cc9": function(e, t, n) {
        var r = n("590f");
        n.n(r).a;
    },
    a41d: function(e, t, i) {
        (function(e) {
            i("c27a");
            var t = f(i("66fd")), n = f(i("5be6")), r = f(i("66e7")), o = f(i("4e1e")), a = f(i("f7d4")), c = f(i("b2fb"));
            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function u(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            t.default.prototype.util = o.default, t.default.prototype.api = a.default, t.default.config.productionTip = !1, 
            t.default.use(c.default), t.default.component("tab-bar", function() {
                i.e("components/common/tabbar").then(function() {
                    return resolve(i("f13c"));
                }.bind(null, i)).catch(i.oe);
            }), t.default.component("mg-img", function() {
                i.e("components/common/mg-img").then(function() {
                    return resolve(i("e668"));
                }.bind(null, i)).catch(i.oe);
            }), t.default.component("mg-swiper", function() {
                i.e("components/swiper/swiper").then(function() {
                    return resolve(i("04a9"));
                }.bind(null, i)).catch(i.oe);
            }), t.default.component("mg-cell", function() {
                i.e("components/common/mg-cell").then(function() {
                    return resolve(i("ef6e"));
                }.bind(null, i)).catch(i.oe);
            }), t.default.component("mg-form", function() {
                i.e("components/common/mg-form").then(function() {
                    return resolve(i("b8f6"));
                }.bind(null, i)).catch(i.oe);
            }), n.default.mpType = "app", e(new t.default(function(o) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? u(Object(a), !0).forEach(function(e) {
                        var t, n, r;
                        t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : u(Object(a)).forEach(function(e) {
                        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                    });
                }
                return o;
            }({
                store: r.default
            }, n.default))).$mount();
        }).call(this, i("543d").createApp);
    }
}, [ [ "a41d", "common/runtime", "common/vendor" ] ] ]);