(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/invite/sqfx" ], {
    "07ac": function(e, n, t) {
        t.r(n);
        var r = t("1ad8"), o = t("235d");
        for (var a in o) "default" !== a && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(a);
        t("477b");
        var u = t("f0c5"), i = Object(u.a)(o.default, r.b, r.c, !1, null, "78cf5ca6", null, !1, r.a, void 0);
        n.default = i.exports;
    },
    "1ad8": function(e, n, t) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        t.d(n, "b", function() {
            return r;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
    },
    "235d": function(e, n, t) {
        t.r(n);
        var r = t("37a2"), o = t.n(r);
        for (var a in r) "default" !== a && function(e) {
            t.d(n, e, function() {
                return r[e];
            });
        }(a);
        n.default = o.a;
    },
    "37a2": function(e, n, t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = u(t("4795")), r = t("2f62"), a = u(t("6f73"));
        function u(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function i(n, e) {
            var t = Object.keys(n);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(n);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })), t.push.apply(t, r);
            }
            return t;
        }
        function c(o) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? i(Object(a), !0).forEach(function(e) {
                    var n, t, r;
                    n = o, r = a[t = e], t in n ? Object.defineProperty(n, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = r;
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : i(Object(a)).forEach(function(e) {
                    Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                });
            }
            return o;
        }
        function f(e, n, t, r, o, a, u) {
            try {
                var i = e[a](u), c = i.value;
            } catch (e) {
                return void t(e);
            }
            i.done ? n(c) : Promise.resolve(c).then(r, o);
        }
        function s(i) {
            return function() {
                var e = this, u = arguments;
                return new Promise(function(n, t) {
                    var r = i.apply(e, u);
                    function o(e) {
                        f(r, n, t, o, a, "next", e);
                    }
                    function a(e) {
                        f(r, n, t, o, a, "throw", e);
                    }
                    o(void 0);
                });
            };
        }
        var l = {
            components: {
                mgInput: function() {
                    t.e("components/form/mg-input").then(function() {
                        return resolve(t("6831"));
                    }.bind(null, t)).catch(t.oe);
                },
                mgRadio: function() {
                    t.e("components/form/mg-radio").then(function() {
                        return resolve(t("4b28"));
                    }.bind(null, t)).catch(t.oe);
                },
                MgCell: function() {
                    t.e("components/common/mg-cell").then(function() {
                        return resolve(t("ef6e"));
                    }.bind(null, t)).catch(t.oe);
                },
                bkB: function() {
                    t.e("components/common/block-b").then(function() {
                        return resolve(t("0c75"));
                    }.bind(null, t)).catch(t.oe);
                },
                sqBtn: function() {
                    t.e("components/common/sq-btn").then(function() {
                        return resolve(t("0df4"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            data: function() {
                return {
                    t: "digit",
                    params: {
                        userId: "",
                        name: "",
                        tel: ""
                    },
                    loading: !1,
                    isbj: !1
                };
            },
            onLoad: function(n) {
                var t = this;
                return s(o.default.mark(function e() {
                    return o.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            n.userId && (t.isbj = !0), t.util.setNT("申请"), t.getLoginInfo().then(function() {
                                t.getFxzx({
                                    that: t,
                                    uId: t.uId,
                                    notcheck: 1
                                }), t.params.userId = t.uId, t.params.tel = t.user.tel || "", t.isbj && (t.params.realName = t.user.realName);
                            });

                          case 3:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            mixins: [ t("c1ef").utilMixins ],
            computed: c({}, (0, r.mapState)("dndc", [ "fxsInfo" ]), {
                swiper: function() {
                    return {
                        topMargin: 0,
                        leftRightPadding: 0,
                        upDownPadding: 0,
                        swiper: {
                            children: [ {
                                url: this.fxsInfo.bgAd
                            } ]
                        },
                        duration: "",
                        height: "250",
                        radius: "0",
                        auto: !0,
                        interval: 5
                    };
                }
            }),
            methods: c({}, (0, r.mapActions)("dndc", [ "getFxzx" ]), {
                save: function() {
                    var r = this;
                    return s(o.default.mark(function e() {
                        var n, t;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (n = [], t = a.default.isFailParams({
                                    field: r.params,
                                    filter: n,
                                    tips: {
                                        userId: "缺少用户id",
                                        name: "请输入姓名",
                                        tel: "请输入手机号"
                                    }
                                }), console.log(r.params), t) {
                                    e.next = 7;
                                    break;
                                }
                                return e.abrupt("return");

                              case 7:
                                if (a.default.isTelCode(r.params.tel)) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt("return", r.util.message("请输入正确的手机号", 3));

                              case 9:
                                return r.loading = !0, e.next = 12, r.util.request({
                                    url: r.api.saveDistribution,
                                    method: "POST",
                                    mask: 1,
                                    data: r.params
                                });

                              case 12:
                                e.sent ? (r.util.message("提交成功", 1, 1e3), a.default.stfn(function() {
                                    r.go({
                                        t: 3,
                                        url: "/yb_cy/my/index"
                                    });
                                })) : r.loading = !1;

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            })
        };
        n.default = l;
    },
    "455d": function(e, n, t) {},
    "477b": function(e, n, t) {
        var r = t("455d");
        t.n(r).a;
    },
    ca51: function(e, n, t) {
        (function(e) {
            function n(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            t("c27a"), n(t("66fd")), e(n(t("07ac")).default);
        }).call(this, t("543d").createPage);
    }
}, [ [ "ca51", "common/runtime", "common/vendor" ] ] ]);