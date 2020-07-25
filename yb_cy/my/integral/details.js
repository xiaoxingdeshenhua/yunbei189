(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/my/integral/details" ], {
    "0385": function(e, t, n) {},
    "896d": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("9950")).default);
        }).call(this, n("543d").createPage);
    },
    9950: function(e, t, n) {
        n.r(t);
        var r = n("f284"), o = n("d811");
        for (var a in o) "default" !== a && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(a);
        n("ab17");
        var s = n("f0c5"), i = Object(s.a)(o.default, r.b, r.c, !1, null, "794a7d09", null, !1, r.a, void 0);
        t.default = i.exports;
    },
    ab17: function(e, t, n) {
        var r = n("0385");
        n.n(r).a;
    },
    b7f0: function(e, i, u) {
        (function(n) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var o = t(u("4795")), e = u("2f62");
            function t(e) {
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
            function c(e, t, n, r, o, a, s) {
                try {
                    var i = e[a](s), c = i.value;
                } catch (e) {
                    return void n(e);
                }
                i.done ? t(c) : Promise.resolve(c).then(r, o);
            }
            function a(i) {
                return function() {
                    var e = this, s = arguments;
                    return new Promise(function(t, n) {
                        var r = i.apply(e, s);
                        function o(e) {
                            c(r, t, n, o, a, "next", e);
                        }
                        function a(e) {
                            c(r, t, n, o, a, "throw", e);
                        }
                        o(void 0);
                    });
                };
            }
            var s = {
                name: "details",
                components: {
                    MgSwiper: function() {
                        u.e("components/swiper/swiper").then(function() {
                            return resolve(u("04a9"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    mgRtext: function() {
                        Promise.all([ u.e("common/vendor"), u.e("components/swiper/rich-text") ]).then(function() {
                            return resolve(u("7cad"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    mgPopup: function() {
                        u.e("components/common/popup").then(function() {
                            return resolve(u("da89"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    getAddress: function() {
                        u.e("components/address/get-address").then(function() {
                            return resolve(u("392c"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    addGoods: function() {
                        u.e("components/goods/add-goods").then(function() {
                            return resolve(u("eb11"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    MgImg: function() {
                        u.e("components/common/mg-img").then(function() {
                            return resolve(u("e668"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    getZtjf: function() {
                        u.e("components/address/get-ztjf").then(function() {
                            return resolve(u("e701"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    ziList: function() {
                        u.e("components/integral/zi-list").then(function() {
                            return resolve(u("c7f9"));
                        }.bind(null, u)).catch(u.oe);
                    },
                    numberBox: function() {
                        u.e("components/form/number-box").then(function() {
                            return resolve(u("9a6c"));
                        }.bind(null, u)).catch(u.oe);
                    }
                },
                data: function() {
                    return {
                        swiper: {
                            class: "",
                            padding: 0,
                            swiper: {
                                children: [ {
                                    icon: ""
                                } ]
                            },
                            duration: "",
                            mode: "",
                            height: "500",
                            radius: "0",
                            auto: !0,
                            interval: 5
                        },
                        isShare: !1,
                        co: {
                            details: []
                        },
                        showLoading: !0,
                        loading: !1,
                        payObj: {},
                        showTime: !1,
                        wmAddress: "",
                        ziAddress: "",
                        params: {
                            userId: "",
                            selfId: "",
                            goodsId: "",
                            convertNum: "1",
                            deliveryMode: "",
                            userAddId: ""
                        },
                        dlDatl: "",
                        config: "",
                        ModeArr: [ {
                            icon: "iconddys",
                            name: "快递配送",
                            value: "1"
                        }, {
                            icon: "iconshangjia",
                            name: "到店自取",
                            value: "2"
                        } ],
                        showGg: !1,
                        zitiList: {},
                        maxNum: 1
                    };
                },
                onLoad: function(n) {
                    var r = this;
                    return a(o.default.mark(function e() {
                        var t;
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                t = n.scene ? decodeURIComponent(n.scene) : n.id, r.id = t, r.getSystem(r), r.util.setNT(r.mySwitch.jfName + "商城-商品详情"), 
                                r.params.userId = r.user.userId, r.getConfig(), r.getData(), r.getziList(), console.log("%c options ", "color: white; background-color: #2274A5", r.isShare, n, r.user.integral);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ (t(u("6f73")), u("c1ef")).utilMixins ],
                computed: function(o) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? r(Object(a), !0).forEach(function(e) {
                            var t, n, r;
                            t = o, r = a[n = e], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(a)) : r(Object(a)).forEach(function(e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(a, e));
                        });
                    }
                    return o;
                }({}, (0, e.mapState)("dndc", [ "mySwitch" ]), {
                    xjMoney: function() {
                        if (this.dlDatl) {
                            var e, t, n = +this.params.convertNum, r = +this.dlDatl.score, o = +this.dlDatl.money;
                            return console.log(n, o), e = +(n * o).toFixed(2), t = n * r, console.log(e, t), 
                            {
                                total: e,
                                totalScore: t
                            };
                        }
                    }
                }),
                methods: {
                    getConfig: function() {
                        var r = this;
                        return a(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.config,
                                        data: {
                                            ident: "integral"
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, r.config = n, "1" == r.config && (r.params.deliveryMode = 1), 
                                    "2" == r.config && (r.params.deliveryMode = 2);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getData: function() {
                        var r = this;
                        return a(o.default.mark(function e() {
                            var t, n;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.IntegralGoodsInfo,
                                        mask: 1,
                                        data: {
                                            goodsId: r.id
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, console.log("详情", n), r.swiper.swiper.children[0].icon = n.icon, 
                                    r.co.details = n.notice, r.dlDatl = n, r.maxNum = n.num, r.params.goodsId = n.id, 
                                    console.log("类别", n.type), 1 == n.type && (r.params.deliveryMode = 1), r.showLoading = !1;

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    refreshAddress: function(e) {
                        this.wmAddress = e;
                    },
                    getWmAddress: function() {
                        var n = this;
                        return a(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.util.request({
                                        url: n.api.ReceivingAddress,
                                        data: {
                                            userId: n.user.userId
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n.wmAddress = t && t.data;

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getziAddress: function() {
                        var n = this;
                        return a(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.util.request({
                                        url: n.api.MentionPointList,
                                        data: {}
                                    });

                                  case 2:
                                    t = e.sent, n.ziAddress = t && t.data[0], n.params.selfId = n.ziAddress.id;

                                  case 5:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getziList: function() {
                        var n = this;
                        return a(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, n.util.request({
                                        url: n.api.MentionPointList,
                                        data: {}
                                    });

                                  case 2:
                                    t = e.sent, n.zitiList = t && t.data;

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    preview: function(e, t) {
                        console.log("src: " + e);
                    },
                    navigate: function(e, t) {
                        console.log("href: " + e), n.showModal({
                            content: "点击链接为：" + e,
                            showCancel: !1
                        });
                    },
                    clickMode: function(e) {
                        this.util.showLoading("设置中..."), this.params.deliveryMode = e.value, setTimeout(function() {
                            n.hideLoading();
                        }, 500), console.log(e.name);
                    },
                    bindChange: function(e) {
                        console.log("Changenum", e), this.params.convertNum = e;
                    },
                    ztshow: function(e) {
                        this.showGg = !0;
                    },
                    chooseAdd: function(e) {
                        console.log("自提id，地址，title", e), console.log("自提列表显示", this.ziAddress), this.ziAddress.address = e.address, 
                        this.ziAddress.title = e.title, this.params.selfId = e.e;
                    },
                    ljdh: function() {
                        var t = this;
                        return a(o.default.mark(function e() {
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    t.showTime = !0, "1" == t.dlDatl.type && (t.getWmAddress(), t.getziAddress());

                                  case 2:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    qrdh: function() {
                        var n = this;
                        return a(o.default.mark(function e() {
                            var t;
                            return o.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if ("2" != n.dlDatl.type) {
                                        e.next = 6;
                                        break;
                                    }
                                    console.log("虚拟兑换"), n.params.selfId = "", n.params.userAddId = "", e.next = 19;
                                    break;

                                  case 6:
                                    if (console.log("实物兑换"), "1" != n.params.deliveryMode) {
                                        e.next = 15;
                                        break;
                                    }
                                    if (console.log("收货地址", n.wmAddress), n.params.userAddId = n.wmAddress.id, n.params.selfId = "", 
                                    n.wmAddress) {
                                        e.next = 13;
                                        break;
                                    }
                                    return e.abrupt("return", n.util.message("请选择收货地址后下单", 3));

                                  case 13:
                                    e.next = 19;
                                    break;

                                  case 15:
                                    if (n.params.userAddId = "", console.log("自提地址", n.zitiList, n.ziAddress), n.ziAddress) {
                                        e.next = 19;
                                        break;
                                    }
                                    return e.abrupt("return", n.util.message("请选择自提地址后下单", 3));

                                  case 19:
                                    return console.log("%c options ", "color: white; background-color: #2274A5", n.params), 
                                    n.loading = !0, e.next = 23, n.util.request({
                                        url: n.api.SaveIntegralorder,
                                        method: "POST",
                                        mask: "下单中",
                                        data: n.params
                                    });

                                  case 23:
                                    if (t = e.sent, console.log("ljdh orderRes", t, n.xjMoney.total, n.xjMoney.totalScore), 
                                    !t) {
                                        e.next = 35;
                                        break;
                                    }
                                    if (console.log("有现金兑换", t, n.xjMoney.total), !(0 < n.xjMoney.total)) {
                                        e.next = 31;
                                        break;
                                    }
                                    n.go({
                                        t: 2,
                                        url: "/yb_cy/other/mg-pay?payObj=" + encodeURIComponent(JSON.stringify({
                                            orderId: t.data,
                                            orderType: 4,
                                            info: {
                                                money: n.xjMoney.total,
                                                type: "下单支付",
                                                go: {
                                                    t: 3,
                                                    url: "/yb_cy/my/integral/integral-record"
                                                }
                                            }
                                        }))
                                    }), e.next = 33;
                                    break;

                                  case 31:
                                    return n.go({
                                        t: 1,
                                        url: "/yb_cy/my/integral/integral-record"
                                    }), e.abrupt("return", n.util.message("兑换成功", 1));

                                  case 33:
                                    e.next = 36;
                                    break;

                                  case 35:
                                    n.loading = !1;

                                  case 36:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    }
                },
                created: function() {
                    return a(o.default.mark(function e() {
                        return o.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                }
            };
            i.default = s;
        }).call(this, u("543d").default);
    },
    d811: function(e, t, n) {
        n.r(t);
        var r = n("b7f0"), o = n.n(r);
        for (var a in r) "default" !== a && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(a);
        t.default = o.a;
    },
    f284: function(e, t, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, o = [];
        n.d(t, "b", function() {
            return r;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
    }
}, [ [ "896d", "common/runtime", "common/vendor" ] ] ]);