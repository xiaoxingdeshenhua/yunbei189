(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/goods" ], {
    "0043": function(t, e, n) {
        var o = n("fb3b");
        n.n(o).a;
    },
    1267: function(t, e, n) {
        var o = function() {
            var i = this, t = (i.$createElement, i._self._c, Number(i.sjxx && i.sjxx.storeInfo.newMoney)), e = i.__map(i.catrgoryList, function(t, e) {
                var n = i.lfName(t.name), o = i.lsName(t.name), r = i.lsName(t.name);
                return {
                    $orig: i.__get_orig(t),
                    m1: n,
                    m2: o,
                    m3: r
                };
            });
            i._isMounted || (i.e0 = function(t) {
                i.showShopInfo = !i.showShopInfo;
            }, i.e1 = function(t) {
                i.tcyhqshow = !1;
            }), i.$mp.data = Object.assign({}, {
                $root: {
                    m0: t,
                    l0: e
                }
            });
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "1e71": function(t, e, n) {
        n.r(e);
        var o = n("72db"), r = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    4122: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("9649")).default);
        }).call(this, n("543d").createPage);
    },
    "72db": function(t, i, c) {
        (function(f) {
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var l = n(c("4795")), t = c("2f62"), h = n(c("6f73")), e = c("c1ef"), s = c("1127");
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function g(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(i), !0).forEach(function(t) {
                        var e, n, o;
                        e = r, o = i[n = t], n in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(i, t));
                    });
                }
                return r;
            }
            function a(t, e, n, o, r, i, s) {
                try {
                    var u = t[i](s), a = u.value;
                } catch (t) {
                    return void n(t);
                }
                u.done ? e(a) : Promise.resolve(a).then(o, r);
            }
            function u(u) {
                return function() {
                    var t = this, s = arguments;
                    return new Promise(function(e, n) {
                        var o = u.apply(t, s);
                        function r(t) {
                            a(o, e, n, r, i, "next", t);
                        }
                        function i(t) {
                            a(o, e, n, r, i, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var r = {
                components: {
                    goods: function() {
                        c.e("components/goods/index").then(function() {
                            return resolve(c("38ef"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    shopCarAnimation: function() {
                        Promise.all([ c.e("common/vendor"), c.e("components/fly-in-cart/fly-in-cart") ]).then(function() {
                            return resolve(c("287a"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    goodsCar: function() {
                        c.e("components/goods/olgoods-car").then(function() {
                            return resolve(c("d71e"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    spec: function() {
                        c.e("components/goods/spec").then(function() {
                            return resolve(c("fed6"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    load: function() {
                        c.e("components/common/load").then(function() {
                            return resolve(c("de6d"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    mgPopup: function() {
                        c.e("components/common/popup").then(function() {
                            return resolve(c("da89"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    mgModal: function() {
                        c.e("components/common/modal").then(function() {
                            return resolve(c("ee48"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    uniFab: function() {
                        c.e("components/third/uni-fab").then(function() {
                            return resolve(c("151d"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    tips: function() {
                        c.e("components/common/tips").then(function() {
                            return resolve(c("e52e"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    MgSwiper: function() {
                        c.e("components/swiper/swiper").then(function() {
                            return resolve(c("04a9"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    MgCell: function() {
                        c.e("components/common/mg-cell").then(function() {
                            return resolve(c("ef6e"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    MgImg: function() {
                        c.e("components/common/mg-img").then(function() {
                            return resolve(c("e668"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    customCoupon: function() {
                        c.e("components/swiper/coupon").then(function() {
                            return resolve(c("1abb"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    tcyhq: function() {
                        c.e("components/template/tcyhq").then(function() {
                            return resolve(c("014b"));
                        }.bind(null, c)).catch(c.oe);
                    },
                    tcgg: function() {
                        c.e("components/template/tcgg").then(function() {
                            return resolve(c("9989"));
                        }.bind(null, c)).catch(c.oe);
                    }
                },
                data: function() {
                    return {
                        lbswiper: {
                            class: "p2",
                            padding: 0,
                            swiper: {
                                children: []
                            },
                            duration: "",
                            mode: "",
                            height: "260",
                            radius: "0",
                            auto: !0,
                            interval: 5
                        },
                        swiper: {
                            class: "p2",
                            padding: 0,
                            swiper: {
                                children: []
                            },
                            duration: "",
                            mode: "",
                            height: "280",
                            radius: "0",
                            auto: !0,
                            interval: 5
                        },
                        goodsList: [],
                        windows_height: 0,
                        swiperList: [],
                        catrgoryList: [],
                        goodsNum: 0,
                        sIndex: 0,
                        right_height: [],
                        rsiv: "",
                        left_height: 0,
                        lsiv: "",
                        rCurrent: 0,
                        rsiv2: "",
                        other_height: 0,
                        showGg: !1,
                        showLoading: !0,
                        buyType: 1,
                        showShopInfo: !1,
                        outin: "2",
                        goodsInfo: {},
                        storeInfo: {},
                        sjxx: null,
                        havebxp: !1,
                        horizontal: "right",
                        vertical: "bottom",
                        direction: "vertical",
                        pattern: {
                            color: "#7A7E83",
                            backgroundColor: "#fff",
                            selectedColor: "#007AFF",
                            buttonColor: "#fff"
                        },
                        tableId: "",
                        showTable: !1,
                        tcyhqshow: !1,
                        tcCoupon: {},
                        tcggshow: !1,
                        tcggList: [],
                        parr: [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12" ],
                        paIx: "",
                        carNum: 0
                    };
                },
                mixins: [ e.utilMixins ],
                onLoad: function(r) {
                    var i = this;
                    return u(l.default.mark(function t() {
                        var e, n, o;
                        return l.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (i.getSystem(), e = r.scene ? decodeURIComponent(r.scene) : r.tableId, i.query = r, 
                                i.tableId = e) {
                                    t.next = 6;
                                    break;
                                }
                                return t.abrupt("return", i.tips());

                              case 6:
                                return t.next = 8, Promise.all([ i.getLoginInfo(), i.getDndcConfig() ]);

                              case 8:
                                if (n = {}, 1 != i.dndcConfig.location) {
                                    t.next = 13;
                                    break;
                                }
                                return t.next = 12, (0, s.getDw)({
                                    t: 0
                                });

                              case 12:
                                n = t.sent;

                              case 13:
                                return i.showLoading = !1, t.next = 16, i.util.request({
                                    url: i.api.TableInfo,
                                    method: "POST",
                                    data: {
                                        id: e,
                                        userId: i.uId,
                                        lat: n.latitude || "",
                                        lng: n.longitude || ""
                                    }
                                });

                              case 16:
                                if (!(o = t.sent)) {
                                    t.next = 22;
                                    break;
                                }
                                o.data.tableId = e, i.storeInfo = {
                                    id: o.data.storeId,
                                    tableInfo: o.data
                                }, t.next = 23;
                                break;

                              case 22:
                                return t.abrupt("return", i.tips());

                              case 23:
                                i.supdCarbp = {
                                    userId: i.uId,
                                    item: 2,
                                    storeId: i.storeInfo.id,
                                    tableId: e
                                }, i.getDw();

                              case 25:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShow: function() {
                    this.storeInfo.id && !f.getStorageSync("ingdl") ? this.refreshList() : f.setStorageSync("ingdl", !1);
                },
                computed: g({}, (0, t.mapState)("dndc", [ "dndcConfig" ]), {}, (0, t.mapState)([ "scarList" ]), {
                    yysj: function() {
                        var t = "";
                        if (this.sjxx) {
                            var e = this.sjxx.storeInfo;
                            1 == e.timeArrType ? t = "24小时营业" : (t = "".concat(h.default.timeToDate(e.timeArr[0][0], "hh:mm"), "-").concat(h.default.timeToDate(e.timeArr[0][1], "hh:mm")), 
                            e.timeArr[1] && (t += " " + "".concat(h.default.timeToDate(e.timeArr[1][0], "hh:mm"), "-").concat(h.default.timeToDate(e.timeArr[1][1], "hh:mm"))));
                        }
                        return t;
                    }
                }),
                methods: g({}, (0, t.mapActions)([ "getSjxx", "supdCar", "getMycar" ]), {}, (0, 
                t.mapActions)("dndc", [ "getDndcConfig" ]), {}, (0, t.mapMutations)([ "setCarList" ]), {
                    refreshList: function() {
                        this.util.showLoading(), this.carNum = 0;
                        var e = [], t = this.scarList.userInfo || [], n = this.catrgoryList;
                        t.forEach(function(t) {
                            e = e.concat(t.goodsArr);
                        });
                        for (var o = h.default.deepCopy(e.filter(function(e, t, n) {
                            return n.findIndex(function(t) {
                                return t.goodsId == e.goodsId;
                            }) == t;
                        })), r = 0; r < o.length; r++) {
                            for (var i = o[r].num = 0; i < e.length; i++) o[r].goodsId == e[i].goodsId && (o[r].num += +e[i].num);
                            this.carNum += o[r].num;
                        }
                        for (var s = 0; s < n.length; s++) for (var u = 0; u < n[s].goods.length; u++) for (var a = n[s].goods[u].num = 0; a < o.length; a++) n[s].goods[u].goodsId == o[a].goodsId && (n[s].goods[u].num += +o[a].num);
                        for (var c = 0; c < this.goodsList.length; c++) for (var d = this.goodsList[c].num = 0; d < o.length; d++) this.goodsList[c].goodsId == o[d].goodsId && (this.goodsList[c].num += +o[d].num);
                        f.hideLoading();
                    },
                    tips: function() {
                        var e = this;
                        f.showModal({
                            title: "提示",
                            content: "未获取到桌位信息或者超出商家范围",
                            showCancel: !1,
                            success: function(t) {
                                e.go({
                                    t: 3,
                                    url: "/yb_cy/my/index"
                                });
                            }
                        });
                    },
                    getDw: function() {
                        var n = this;
                        return u(l.default.mark(function t() {
                            var e;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n.init(), n.refreshInfo(), n.getStoreData(), e = n.util.getSb(), n.windows_height = (e.windowHeight - 100 * e.rate).toFixed(2);

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getWindowCoupon: function() {
                        var o = this;
                        return u(l.default.mark(function t() {
                            var e, n;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.util.request({
                                        url: o.api.WindowCoupon,
                                        data: {
                                            storeId: o.storeInfo.id,
                                            userId: o.user.userId,
                                            location: 3
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, o.tcCoupon = n || {}, o.tcCoupon.couponInfo && o.tcCoupon.couponInfo.length && setTimeout(function() {
                                        o.tcyhqshow = !0;
                                    }, 200);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getTcgg: function() {
                        var o = this;
                        return u(l.default.mark(function t() {
                            var e, n;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.util.request({
                                        url: o.api.StoreAd,
                                        data: {
                                            type: 4,
                                            location: 2,
                                            storeId: o.storeInfo.id,
                                            userId: o.uId,
                                            isDelete: 1 != f.getStorageSync("tcgg") ? 1 : 2
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, o.tcggList = n, o.tcggList.length && setTimeout(function() {
                                        o.tcggshow = !0;
                                    }, 200), f.setStorageSync("tcgg", 1);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    refreshInfo: function() {
                        var n = this;
                        return u(l.default.mark(function t() {
                            var e;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.getSjxx({
                                        storeId: n.storeInfo.id,
                                        item: n.outin,
                                        userId: n.uId
                                    });

                                  case 2:
                                    e = t.sent, n.sjxx = e, n.util.setNT(e.storeInfo.name), 1 == e.inStoreSet.multiplayerMode ? n.storeInfo.tableInfo.orderInfo ? n.query.tableId || n.go({
                                        t: 3,
                                        url: "/yb_cy/inshop/order-dl?id=" + n.storeInfo.tableInfo.orderInfo.id
                                    }) : setTimeout(function() {
                                        n.showTable = !0;
                                    }, 200) : n.storeInfo.tableInfo.orderInfo ? n.go({
                                        t: 3,
                                        url: "/yb_cy/inshop/order-dl?id=" + n.storeInfo.tableInfo.orderInfo.id
                                    }) : setTimeout(function() {
                                        n.showTable = !0;
                                    }, 200);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getStoreData: function() {
                        var e = this;
                        return u(l.default.mark(function t() {
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e.util.request({
                                        url: e.api.StoreAd,
                                        data: {
                                            type: 3,
                                            location: 2,
                                            storeId: e.storeInfo.id
                                        }
                                    }).then(function(t) {
                                        e.lbswiper.swiper.children = t.data || [];
                                    }), e.util.request({
                                        url: e.api.RecommendDishesList,
                                        data: {
                                            storeId: e.storeInfo.id,
                                            userId: e.uId,
                                            page: 1,
                                            size: 10,
                                            item: 2
                                        }
                                    }).then(function(t) {
                                        e.goodsList = t.data;
                                    });

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    init: function() {
                        var i = arguments, s = this;
                        return u(l.default.mark(function t() {
                            var e, n, o, r;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = 0 < i.length && void 0 !== i[0] ? i[0] : 2, t.next = 3, s.util.request({
                                        url: s.api.DishesListAll,
                                        data: {
                                            item: e,
                                            storeId: s.storeInfo.id,
                                            userId: s.user.userId
                                        }
                                    });

                                  case 3:
                                    n = t.sent, o = n.data, s.catrgoryList = o, s.goodsNum = 100, s.getWindowCoupon(), 
                                    s.getTcgg(), s.$nextTick(function() {
                                        s.getHeightList();
                                    }), t.t0 = l.default.keys(o);

                                  case 11:
                                    if ((t.t1 = t.t0()).done) {
                                        t.next = 18;
                                        break;
                                    }
                                    if (r = t.t1.value, 1 != o[r].required) {
                                        t.next = 16;
                                        break;
                                    }
                                    return s.havebxp = !0, t.abrupt("break", 18);

                                  case 16:
                                    t.next = 11;
                                    break;

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getHeightList: function() {
                        var o = this;
                        f.createSelectorQuery().selectAll(".c-item").boundingClientRect(function(t) {
                            var e = [], n = o.swiper.swiper.children.length ? f.upx2px(320) : 0;
                            t.forEach(function(t) {
                                n += t.height, e.push(n);
                            }), o.right_height = e;
                        }).exec();
                    },
                    choose: function(t) {
                        var e = this;
                        this.sIndex != t && (this.sIndex = t, this.noscroll = !0, this.rsiv = "r".concat(t), 
                        setTimeout(function() {
                            e.noscroll = !1;
                        }, 500));
                    },
                    myscroll: function(t) {
                        if (t.detail.scrollHeight - this.windows_height != t.detail.scrollTop && !this.noscroll) for (var e = t.detail.scrollTop, n = 0; n < this.right_height.length; n++) if (e < this.right_height[0]) this.sIndex = 0, 
                        this.lsiv = "l0"; else if (e >= this.right_height[n - 1] && e < this.right_height[n]) {
                            this.sIndex = n, this.lsiv = "l".concat(n - 3), this.rsiv = "";
                            break;
                        }
                    },
                    updList: function(d) {
                        var f = this;
                        return u(l.default.mark(function t() {
                            var e, n, o, r, i, s, u, a, c;
                            return l.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, f.supdCar(g({}, f.supdCarbp, {
                                        goodsArr: JSON.stringify({
                                            updType: d.updType,
                                            goodsId: d.g.goodsId,
                                            groupId: d.g.groupId || "",
                                            num: 1,
                                            material: d.g.material || [],
                                            attribute: d.g.sxdata || ""
                                        })
                                    }));

                                  case 3:
                                    for (e = t.sent, f.carNum = 1 == d.updType ? f.carNum + e : f.carNum - e, n = f.catrgoryList, 
                                    o = 0, r = n.length; o < r; o++) for (i = 0, s = n[o].goods.length; i < s; i++) n[o].goods[i].goodsId == d.g.goodsId && (n[o].goods[i].num = 1 == d.updType ? n[o].goods[i].num + e : n[o].goods[i].num - e);
                                    for (u = f.goodsList, a = 0, c = u.length; a < c; a++) u[a].goodsId == d.g.goodsId && (u[a].num = 1 == d.updType ? u[a].num + e : u[a].num - e);
                                    t.next = 13;
                                    break;

                                  case 11:
                                    t.prev = 11, t.t0 = t.catch(0);

                                  case 13:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 11 ] ]);
                        }))();
                    },
                    dec: function(t) {
                        2 != t.addwz && this.updList({
                            updType: 2,
                            g: t.g
                        });
                    },
                    add: function(t) {
                        1 != t.g.isSpec && 1 != t.g.isMaterial && 1 != t.g.isAttribute || t.g.hasOwnProperty("groupId") ? 2 != t.addwz && this.updList({
                            updType: 1,
                            g: t.g
                        }) : (this.showGg = !0, this.goodsInfo = t.g);
                    },
                    celarCar: function(t) {
                        for (var e = this.catrgoryList, n = 0, o = e.length; n < o; n++) for (var r = 0, i = e[n].goods.length; r < i; r++) e[n].goods[r].num = 0;
                        for (var s = this.goodsList, u = 0, a = s.length; u < a; u++) s[u].num = 0;
                    },
                    lfName: function(t) {
                        return t.substr(0, 2), t.substr(2, 4), t.substr(0, 2);
                    },
                    lsName: function(t) {
                        return t.substr(2, 5);
                    },
                    ckda: function() {
                        this.go({
                            t: 1,
                            url: "/yb_cy/shop/sjjs?type=2&info=" + encodeURIComponent(JSON.stringify(this.sjxx.storeInfo))
                        });
                    },
                    ljdc: function() {
                        if ("" == this.paIx) return this.util.message("请选择人数", 3);
                        this.storeInfo.tableInfo.pnum = this.paIx, this.showTable = !1;
                    },
                    dcParr: function(t) {
                        this.paIx = t;
                    }
                })
            };
            i.default = r;
        }).call(this, c("543d").default);
    },
    "82a0": function(t, e, n) {},
    9649: function(t, e, n) {
        n.r(e);
        var o = n("1267"), r = n("1e71");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("0043"), n("fb55");
        var s = n("f0c5"), u = Object(s.a)(r.default, o.b, o.c, !1, null, "6ee4b064", null, !1, o.a, void 0);
        e.default = u.exports;
    },
    fb3b: function(t, e, n) {},
    fb55: function(t, e, n) {
        var o = n("82a0");
        n.n(o).a;
    }
}, [ [ "4122", "common/runtime", "common/vendor" ] ] ]);