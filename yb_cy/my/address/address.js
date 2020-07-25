(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/address/address" ], {
    5092: function(e, t, n) {
        n.r(t);
        var r = n("e557"), a = n("d06d");
        for (var o in a) "default" !== o && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(o);
        var u = n("f0c5"), s = Object(u.a)(a.default, r.b, r.c, !1, null, "1bdd5ebb", null, !1, r.a, void 0);
        t.default = s.exports;
    },
    a8f2: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("5092")).default);
        }).call(this, n("543d").createPage);
    },
    d06d: function(e, t, n) {
        n.r(t);
        var r = n("f0f5"), a = n.n(r);
        for (var o in r) "default" !== o && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(o);
        t.default = a.a;
    },
    e557: function(e, t, n) {
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, {
                background: "transparent"
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: t
                }
            });
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    f0f5: function(e, i, l) {
        (function(e) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var o = n(l("4795")), t = l("2f62"), r = n(l("6f73"));
            function n(e) {
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
            function c(e, t, n, r, a, o, u) {
                try {
                    var s = e[o](u), c = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(r, a);
            }
            function s(s) {
                return function() {
                    var e = this, u = arguments;
                    return new Promise(function(t, n) {
                        var r = s.apply(e, u);
                        function a(e) {
                            c(r, t, n, a, o, "next", e);
                        }
                        function o(e) {
                            c(r, t, n, a, o, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            var a = {
                components: {
                    mgInput: function() {
                        l.e("components/form/mg-input").then(function() {
                            return resolve(l("6831"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgRadio: function() {
                        l.e("components/form/mg-radio").then(function() {
                            return resolve(l("4b28"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    MgCell: function() {
                        l.e("components/common/mg-cell").then(function() {
                            return resolve(l("ef6e"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    bkB: function() {
                        l.e("components/common/block-b").then(function() {
                            return resolve(l("0c75"));
                        }.bind(null, l)).catch(l.oe);
                    }
                },
                data: function() {
                    return {
                        t: "digit",
                        params: {
                            userId: "",
                            userName: "",
                            sex: "先生",
                            userTel: "",
                            address: "",
                            details: "",
                            label: "公司",
                            lat: "",
                            lng: "",
                            id: ""
                        },
                        sexArr: [ {
                            value: "先生",
                            name: "先生"
                        }, {
                            value: "女士",
                            name: "女士",
                            checked: "true"
                        } ],
                        labels: [ "公司", "家", "学校" ],
                        loading: !1,
                        isEdit: !1
                    };
                },
                onLoad: function(r) {
                    var a = this;
                    return s(o.default.mark(function e() {
                        var t, n;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (a.getSystem({
                                    normal: 1
                                }), !r.id) {
                                    e.next = 10;
                                    break;
                                }
                                return a.isEdit = !0, e.next = 5, a.util.request({
                                    url: a.api.AddressInfo,
                                    data: {
                                        id: r.id
                                    }
                                });

                              case 5:
                                for (n in t = e.sent, a.params) a.params[n] = t.data[n];
                                console.log(r, a.params), e.next = 11;
                                break;

                              case 10:
                                a.params.userId = a.user.userId;

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                methods: function(a) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? u(Object(o), !0).forEach(function(e) {
                            var t, n, r;
                            t = a, r = o[n = e], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : u(Object(o)).forEach(function(e) {
                            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return a;
                }({}, (0, t.mapActions)([ "" ]), {
                    label: function(e) {
                        this.params.label = e;
                    },
                    chooseLocation: function() {
                        var t = this;
                        e.chooseLocation({
                            success: function(e) {
                                t.params.address = e.address, t.params.details = e.name, t.params.lat = e.latitude, 
                                t.params.lng = e.longitude, console.log(e);
                            }
                        });
                    },
                    save: function() {
                        var n = this;
                        return s(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (console.log(n.params), t = [ "lat", "lng" ], n.params.id || t.push("id"), r.default.isFailParams({
                                        field: n.params,
                                        filter: t,
                                        tips: {
                                            userId: "缺少用户id",
                                            userName: "请输入联系人",
                                            userTel: "输入手机号",
                                            address: "请选择地址",
                                            details: "请输入门牌号等详细地址",
                                            label: "请选择标签",
                                            id: "缺少地址id"
                                        }
                                    })) {
                                        e.next = 8;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 8:
                                    if (r.default.isTelCode(n.params.userTel)) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.abrupt("return", n.util.message("请输入正确的手机号", 3));

                                  case 10:
                                    return n.loading = !0, e.next = 13, n.util.request({
                                        url: n.api.SaveUserAddress,
                                        method: "POST",
                                        mask: 1,
                                        data: n.params
                                    });

                                  case 13:
                                    e.sent ? (n.util.message("保存成功", 1, 1e3), r.default.swnb(1e3)) : n.loading = !1;

                                  case 15:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    deleteAdd: function() {
                        var t = this;
                        return s(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.prev = 0, e.next = 3, t.util.modal("确认删除此地址吗？");

                                  case 3:
                                    return e.next = 5, t.util.request({
                                        url: t.api.DelUserAddress,
                                        method: "POST",
                                        mask: 1,
                                        data: {
                                            id: t.params.id
                                        }
                                    });

                                  case 5:
                                    e.sent && (t.util.message("删除成功", 1, 1e3), r.default.swnb(1e3)), e.next = 11;
                                    break;

                                  case 9:
                                    e.prev = 9, e.t0 = e.catch(0);

                                  case 11:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 0, 9 ] ]);
                        }))();
                    }
                })
            };
            i.default = a;
        }).call(this, l("543d").default);
    }
}, [ [ "a8f2", "common/runtime", "common/vendor" ] ] ]);