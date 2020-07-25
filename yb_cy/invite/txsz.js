(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/invite/txsz" ], {
    "0f92": function(e, t, n) {
        var r = n("8b13");
        n.n(r).a;
    },
    "11ec": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("83b8")).default);
        }).call(this, n("543d").createPage);
    },
    4191: function(e, t, n) {
        var r = function() {
            var e = this, t = (e.$createElement, e._self._c, {
                background: "transparent"
            });
            e.$mp.data = Object.assign({}, {
                $root: {
                    a0: t,
                    a1: {
                        fontWeight: "bold"
                    }
                }
            });
        }, a = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
    },
    "607b": function(e, t, n) {
        n.r(t);
        var r = n("8e3b"), a = n.n(r);
        for (var u in r) "default" !== u && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(u);
        t.default = a.a;
    },
    "83b8": function(e, t, n) {
        n.r(t);
        var r = n("4191"), a = n("607b");
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        n("0f92");
        var o = n("f0c5"), i = Object(o.a)(a.default, r.b, r.c, !1, null, "6492971a", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    "8b13": function(e, t, n) {},
    "8e3b": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var c = i(n("4795")), r = n("2f62"), a = n("c1ef"), u = i(n("6f73")), o = n("1127");
        function i(e) {
            return e && e.__esModule ? e : {
                default: e
            };
        }
        function s(t, e) {
            var n = Object.keys(t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(t);
                e && (r = r.filter(function(e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })), n.push.apply(n, r);
            }
            return n;
        }
        function l(e, t, n, r, a, u, o) {
            try {
                var i = e[u](o), c = i.value;
            } catch (e) {
                return void n(e);
            }
            i.done ? t(c) : Promise.resolve(c).then(r, a);
        }
        function f(i) {
            return function() {
                var e = this, o = arguments;
                return new Promise(function(t, n) {
                    var r = i.apply(e, o);
                    function a(e) {
                        l(r, t, n, a, u, "next", e);
                    }
                    function u(e) {
                        l(r, t, n, a, u, "throw", e);
                    }
                    a(void 0);
                });
            };
        }
        var p = {
            name: "order-index",
            components: {
                mgCell: function() {
                    n.e("components/common/mg-cell").then(function() {
                        return resolve(n("ef6e"));
                    }.bind(null, n)).catch(n.oe);
                },
                mgInput: function() {
                    n.e("components/form/mg-input").then(function() {
                        return resolve(n("6831"));
                    }.bind(null, n)).catch(n.oe);
                },
                mgPhoto: function() {
                    n.e("components/form/mg-photo").then(function() {
                        return resolve(n("3886"));
                    }.bind(null, n)).catch(n.oe);
                },
                navTab: function() {
                    n.e("components/swiper/nav-tab").then(function() {
                        return resolve(n("2040"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            data: function() {
                return {
                    loading: !1,
                    tabs: [],
                    aIdx: 0,
                    uploadArr: [ {
                        mark: "0",
                        pkey: "txImg",
                        w: "174rpx",
                        max: "1",
                        fileList: [],
                        uploadList: []
                    } ],
                    params: {
                        txType: "",
                        txTel: "",
                        txUserId: "",
                        txUserName: "",
                        txImg: "",
                        bank: "",
                        subbranch: "",
                        cardNumber: "",
                        fullName: "",
                        aliName: "",
                        aliNumber: ""
                    }
                };
            },
            onLoad: function(e) {
                var i = this;
                return f(c.default.mark(function e() {
                    var t, n, r, a, u, o;
                    return c.default.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                          case 0:
                            return i.util.setNT("提现设置"), i.params.txUserId = i.uId, i.params.txUserName = i.user.userName, 
                            t = [], (n = i.fxsInfo.txType).includes("1") && t.push({
                                name: "微信",
                                icon: "iconwxzf",
                                type: "1",
                                color: "#19B320"
                            }), n.includes("3") && t.push({
                                name: "支付宝",
                                icon: "iconzfb",
                                type: "3",
                                color: "#1E9ADE"
                            }), n.includes("2") && t.push({
                                name: "银行卡",
                                icon: "iconyhk",
                                type: "2",
                                color: "#F3BD2D"
                            }), n.includes("4") && t.push({
                                name: "余额",
                                icon: "iconyhk",
                                type: "4",
                                color: "#F3BD2D"
                            }), i.tabs = t, e.next = 11, i.util.request({
                                url: i.api.SaveTxSet,
                                data: {
                                    userId: i.uId
                                }
                            });

                          case 11:
                            if (r = e.sent, 0 < (a = r.data).txType) {
                                for (u in i.params) i.params[u] = a[u];
                                i.uploadArr[0].fileList = a.txImg.split(","), o = i.tabs.findIndex(function(e) {
                                    return e.type == a.txType;
                                }), i.aIdx = -1 == o ? 0 : o, console.log(i.params, i.aIdx);
                            }

                          case 14:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                }))();
            },
            mixins: [ a.utilMixins ],
            computed: function(a) {
                for (var e = 1; e < arguments.length; e++) {
                    var u = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(u), !0).forEach(function(e) {
                        var t, n, r;
                        t = a, r = u[n = e], n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(u)) : s(Object(u)).forEach(function(e) {
                        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(u, e));
                    });
                }
                return a;
            }({}, (0, r.mapState)("dndc", [ "fxsInfo" ])),
            methods: {
                changeTab: function(e) {},
                changeImg: function(e) {
                    this.uploadArr[e.mark].uploadList = this.params[e.pkey] = e.p;
                },
                save: function() {
                    var r = this;
                    return f(c.default.mark(function e() {
                        var t, n;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (r.params.txType = r.tabs[r.aIdx].type, t = [], 1 == r.params.txType ? t = [ "bank", "subbranch", "cardNumber", "fullName", "aliName", "aliNumber" ] : 2 == r.params.txType ? t = [ "txUserId", "txUserName", "txImg", "aliName", "aliNumber" ] : 3 == r.params.txType ? t = [ "bank", "subbranch", "cardNumber", "fullName", "txUserId", "txUserName" ] : 4 == r.params.txType && (t = [ "bank", "subbranch", "cardNumber", "fullName", "aliName", "aliNumber", "txImg" ]), 
                                n = [].concat(t), u.default.isFailParams({
                                    field: r.params,
                                    filter: n,
                                    tips: {
                                        txType: "请选择提现方式",
                                        txTel: "请输入手机号",
                                        txUserId: "请输入用户id",
                                        txUserName: "请输入用户昵称",
                                        txImg: "请上传提现收款码",
                                        bank: "请输入所属银行",
                                        subbranch: "请输入所属支行",
                                        cardNumber: "请输入卡号",
                                        fullName: "请输入开户人姓名",
                                        aliName: "请输入支付宝姓名",
                                        aliNumber: "请输入支付宝账号"
                                    }
                                })) {
                                    e.next = 9;
                                    break;
                                }
                                return e.abrupt("return");

                              case 9:
                                if (u.default.isTelCode(r.params.txTel)) {
                                    e.next = 11;
                                    break;
                                }
                                return e.abrupt("return", r.util.message("请输入正确的手机号", 3));

                              case 11:
                                r.loading = !0, r.util.showLoading("图片上传中"), Promise.all(r.uploadArr.map(function(e) {
                                    return (0, o.uploadImg)({
                                        files: e.uploadList
                                    });
                                })).then(function() {
                                    var t = f(c.default.mark(function e(t) {
                                        var n;
                                        return c.default.wrap(function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                              case 0:
                                                return (n = u.default.deepCopy(r.params)).txImg = t[0], e.next = 4, r.util.request({
                                                    url: r.api.SaveTxSet,
                                                    method: "POST",
                                                    mask: 1,
                                                    data: n
                                                });

                                              case 4:
                                                e.sent ? (r.util.message("保存成功", 1, 1e3), u.default.swnb(1e3)) : r.loading = !1;

                                              case 6:
                                              case "end":
                                                return e.stop();
                                            }
                                        }, e);
                                    }));
                                    return function(e) {
                                        return t.apply(this, arguments);
                                    };
                                }());

                              case 14:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            }
        };
        t.default = p;
    }
}, [ [ "11ec", "common/runtime", "common/vendor" ] ] ]);