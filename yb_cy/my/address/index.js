(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/address/index" ], {
    "68c3": function(e, t, n) {
        n.r(t);
        var r = n("ef97"), o = n("a340");
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        var u = n("f0c5"), a = Object(u.a)(o.default, r.b, r.c, !1, null, "15ab7447", null, !1, r.a, void 0);
        t.default = a.exports;
    },
    a340: function(e, t, n) {
        n.r(t);
        var r = n("a58f"), o = n.n(r);
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        t.default = o.a;
    },
    a58f: function(e, s, f) {
        (function(t) {
            Object.defineProperty(s, "__esModule", {
                value: !0
            }), s.default = void 0;
            var c = n(f("4795")), e = f("2f62"), u = n(f("6f73"));
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r);
                }
                return n;
            }
            function i(e, t, n, r, o, c, u) {
                try {
                    var a = e[c](u), i = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(i) : Promise.resolve(i).then(r, o);
            }
            function a(a) {
                return function() {
                    var e = this, u = arguments;
                    return new Promise(function(t, n) {
                        var r = a.apply(e, u);
                        function o(e) {
                            i(r, t, n, o, c, "next", e);
                        }
                        function c(e) {
                            i(r, t, n, o, c, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var o = {
                components: {
                    mgInput: function() {
                        f.e("components/form/mg-input").then(function() {
                            return resolve(f("6831"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    mgRadio: function() {
                        f.e("components/form/mg-radio").then(function() {
                            return resolve(f("4b28"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    bkB: function() {
                        f.e("components/common/block-b").then(function() {
                            return resolve(f("0c75"));
                        }.bind(null, f)).catch(f.oe);
                    },
                    jzz: function() {
                        f.e("components/common/jzz").then(function() {
                            return resolve(f("707a"));
                        }.bind(null, f)).catch(f.oe);
                    }
                },
                data: function() {
                    return {
                        dataList: [],
                        isget: !1,
                        mygd: !1
                    };
                },
                onLoad: function(t) {
                    var n = this;
                    return a(c.default.mark(function e() {
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.getSystem({
                                    normal: 1
                                }), n.query = t, console.log(t);

                              case 3:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onShow: function() {
                    this.getData();
                },
                methods: function(o) {
                    for (var e = 1; e < arguments.length; e++) {
                        var c = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(c), !0).forEach(function(e) {
                            var t, n, r;
                            t = o, r = c[n = e], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(c)) : r(Object(c)).forEach(function(e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(c, e));
                        });
                    }
                    return o;
                }({}, (0, e.mapActions)([ "" ]), {
                    getData: function() {
                        var n = this;
                        return a(c.default.mark(function e() {
                            var t;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.util.request({
                                        url: n.api.MyAddress,
                                        data: {
                                            userId: n.user.userId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n.dataList = t.data || [], n.isget = n.mygd = !0;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    chooseAdd: function(r) {
                        var o = this;
                        return a(c.default.mark(function e() {
                            var t, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (console.log(r, o.query), !o.query.from) {
                                        e.next = 7;
                                        break;
                                    }
                                    return o.util.showLoading("设置地址..."), e.next = 5, o.util.request({
                                        url: o.api.ReceivingAddress,
                                        data: {
                                            storeId: o.query.storeId || "",
                                            addressId: r,
                                            userId: o.user.userId
                                        }
                                    });

                                  case 5:
                                    (t = e.sent) && (n = o.util.getPage(), u.default.swnb(), setTimeout(function() {
                                        n.$vm.refreshAddress(t.data);
                                    }, 100));

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    xzdz: function() {
                        this.go({
                            t: 1,
                            url: "address"
                        });
                    },
                    chooseAddress: function() {
                        t.authorize({
                            scope: "scope.address",
                            success: function(e) {
                                t.chooseAddress({
                                    success: function(e) {
                                        console.log(e);
                                    }
                                });
                            },
                            fail: function(e) {
                                t.showModal({
                                    title: "温馨提示",
                                    content: "获收货地址授权失败",
                                    confirmText: "去设置",
                                    success: function(e) {
                                        e.confirm ? t.openSetting({
                                            success: function(e) {
                                                console.log(e.authSetting);
                                            }
                                        }) : e.cancel;
                                    }
                                }), console.log(e);
                            }
                        });
                    },
                    labelColor: function(e) {
                        return "公司" == e ? "#94B2D8" : "家" == e ? "#DF8884" : "#A0B888";
                    }
                })
            };
            s.default = o;
        }).call(this, f("543d").default);
    },
    b019: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("68c3")).default);
        }).call(this, n("543d").createPage);
    },
    ef97: function(e, t, n) {
        var r = function() {
            var r = this, e = (r.$createElement, r._self._c, r.__map(r.dataList, function(e, t) {
                var n = r.labelColor(e.label);
                return {
                    $orig: r.__get_orig(e),
                    m0: n
                };
            }));
            r.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
}, [ [ "b019", "common/runtime", "common/vendor" ] ] ]);