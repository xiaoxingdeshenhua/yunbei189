(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/goods" ], {
    "2b4a": function(t, f, l) {
        (function(r) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var h = n(l("4795")), t = l("2f62"), s = n(l("6f73")), e = l("c1ef"), i = l("1127");
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
            function a(r) {
                for (var t = 1; t < arguments.length; t++) {
                    var s = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(s), !0).forEach(function(t) {
                        var e, n, o;
                        e = r, o = s[n = t], n in e ? Object.defineProperty(e, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(s)) : o(Object(s)).forEach(function(t) {
                        Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(s, t));
                    });
                }
                return r;
            }
            function c(t, e, n, o, r, s, i) {
                try {
                    var a = t[s](i), c = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(c) : Promise.resolve(c).then(o, r);
            }
            function u(a) {
                return function() {
                    var t = this, i = arguments;
                    return new Promise(function(e, n) {
                        var o = a.apply(t, i);
                        function r(t) {
                            c(o, e, n, r, s, "next", t);
                        }
                        function s(t) {
                            c(o, e, n, r, s, "throw", t);
                        }
                        r(void 0);
                    });
                };
            }
            var d = {
                components: {
                    goods: function() {
                        l.e("components/goods/index").then(function() {
                            return resolve(l("38ef"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    shopCarAnimation: function() {
                        Promise.all([ l.e("common/vendor"), l.e("components/fly-in-cart/fly-in-cart") ]).then(function() {
                            return resolve(l("287a"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    goodsCar: function() {
                        l.e("components/goods/goods-car").then(function() {
                            return resolve(l("0e67"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    spec: function() {
                        l.e("components/goods/spec").then(function() {
                            return resolve(l("fed6"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    load: function() {
                        l.e("components/common/load").then(function() {
                            return resolve(l("de6d"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgPopup: function() {
                        l.e("components/common/popup").then(function() {
                            return resolve(l("da89"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgModal: function() {
                        l.e("components/common/modal").then(function() {
                            return resolve(l("ee48"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    uniFab: function() {
                        l.e("components/third/uni-fab").then(function() {
                            return resolve(l("151d"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    tips: function() {
                        l.e("components/common/tips").then(function() {
                            return resolve(l("e52e"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    MgSwiper: function() {
                        l.e("components/swiper/swiper").then(function() {
                            return resolve(l("04a9"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    MgImg: function() {
                        l.e("components/common/mg-img").then(function() {
                            return resolve(l("e668"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    customCoupon: function() {
                        l.e("components/swiper/coupon").then(function() {
                            return resolve(l("1abb"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    tcyhq: function() {
                        l.e("components/template/tcyhq").then(function() {
                            return resolve(l("014b"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    tcgg: function() {
                        l.e("components/template/tcgg").then(function() {
                            return resolve(l("9989"));
                        }.bind(null, l)).catch(l.oe);
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
                        goodsList: [],
                        windows_height: 500,
                        swiperList: [],
                        catrgoryList: [],
                        goodsNum: 0,
                        sIndex: 0,
                        right_height: [],
                        rsiv: "",
                        rscroll: "myscroll",
                        left_height: 0,
                        lsiv: "",
                        rsiv2: "",
                        other_height: 0,
                        showGg: !1,
                        showLoading: !0,
                        buyType: 1,
                        showShopInfo: !1,
                        outin: "1",
                        goodsInfo: {},
                        getsjxx: !1,
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
                        tcyhqshow: !1,
                        tcCoupon: {},
                        tcggshow: !1,
                        tcggList: [],
                        showCar: !1,
                        query: {}
                    };
                },
                mixins: [ e.utilMixins ],
                onLoad: function(n) {
                    var o = this;
                    return u(h.default.mark(function t() {
                        var e;
                        return h.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n.storeId ? e = getApp().globalData.selectStore = n.storeId : getApp().globalData.selectStore ? e = getApp().globalData.selectStore : n.scene && (e = getApp().globalData.selectStore = decodeURIComponent(n.scene)), 
                                o.storeId = e, o.distance = n.distance, o.query = n, t.next = 6, o.getLoginInfo({
                                    inviteId: n.userId
                                });

                              case 6:
                                o.getDw(), o.getSystem().then(function() {
                                    o.util.setNT(o.system.name);
                                }), o.getConfig({
                                    key: "orderset",
                                    api: "config",
                                    params: {
                                        ident: "orderset"
                                    }
                                }), o.getLayout();

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShow: function() {
                    this.storeInfo.id && r.getStorageSync("payPage") && (this.refreshInfo(), console.log("从支付页返回"));
                },
                computed: a({}, (0, t.mapState)([ "carList", "sjxx", "allStore" ]), {}, (0, t.mapState)({
                    storeInfo: function(t) {
                        return t.config.storeInfo;
                    },
                    orderset: function(t) {
                        return t.config.orderset;
                    }
                }), {
                    ModeArr: function() {
                        var t = [];
                        return this.sjxx.orderSet && this.orderset && (3 == this.sjxx.orderSet.data.support ? (t = [ {
                            name: this.orderset.mentionName,
                            value: "1"
                        }, {
                            name: this.orderset.customName,
                            value: "2"
                        } ], 2 == this.orderset.buyType && t.reverse(), this.buyType = this.orderset.buyType, 
                        this.query.type && (this.buyType = this.query.type)) : 2 == this.sjxx.orderSet.data.support || 1 == this.sjxx.orderSet.data.support && (this.buyType = 2)), 
                        t;
                    },
                    yysj: function() {
                        var t = "";
                        if (this.getsjxx) {
                            var e = this.sjxx.storeInfo;
                            1 == e.timeArrType ? t = "24小时营业" : (t = "".concat(s.default.timeToDate(e.timeArr[0][0], "hh:mm"), "-").concat(s.default.timeToDate(e.timeArr[0][1], "hh:mm")), 
                            e.timeArr[1] && (t += " " + "".concat(s.default.timeToDate(e.timeArr[1][0], "hh:mm"), "-").concat(s.default.timeToDate(e.timeArr[1][1], "hh:mm"))));
                        }
                        return t;
                    },
                    cshow: function() {
                        return 0 < this.carList.length;
                    },
                    leftpb: function() {
                        return 1 == this.system.outTabbar ? this.cshow ? "305rpx" : "115rpx" : this.cshow ? "115rpx" : "0";
                    },
                    rightpb: function() {
                        return 1 == this.system.outTabbar ? this.cshow ? "245rpx" : "115rpx" : this.cshow ? "115rpx" : "0";
                    }
                }),
                methods: a({}, (0, t.mapActions)([ "getSjxx", "getAllStore", "getConfig", "cshCar", "addCar", "decCar" ]), {}, (0, 
                t.mapMutations)([ "setCarList" ]), {
                    getDw: function() {
                        var o = this;
                        return u(h.default.mark(function t() {
                            var e, n;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, (0, i.getDw)({
                                        t: 0
                                    });

                                  case 2:
                                    if (e = t.sent, o.storeId) {
                                        t.next = 9;
                                        break;
                                    }
                                    return t.next = 6, o.getAllStore({
                                        lat: e.latitude,
                                        lng: e.longitude,
                                        page: 1,
                                        size: 200
                                    });

                                  case 6:
                                    o.getConfig({
                                        key: "storeInfo",
                                        data: o.allStore.data[0]
                                    }), o.storeId = getApp().globalData.selectStore = o.allStore.data[0].id, o.nostoreId = !0;

                                  case 9:
                                    return o.cshCar(o.storeId), o.refreshInfo(), t.next = 13, o.init();

                                  case 13:
                                    o.getStoreData(), getApp().sgheight ? o.windows_height = getApp().sgheight : (n = +(r.getSystemInfoSync().windowHeight - r.upx2px(240)).toFixed(2), 
                                    o.windows_height = getApp().sgheight = n);

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    changeStore: function(t) {
                        this.getConfig({
                            key: "storeInfo",
                            data: t
                        }), this.buyType = 1, this.sIndex = 0, this.rsiv = "r0", this.outin = 1, this.storeId = t.id, 
                        this.setCarList([]), this.init(), this.refreshInfo(), this.getStoreData(), getApp().globalData.selectStore = t.id, 
                        console.log("changeStore", t);
                    },
                    getWindowCoupon: function() {
                        var o = this;
                        return u(h.default.mark(function t() {
                            var e, n;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.util.request({
                                        url: o.api.WindowCoupon,
                                        data: {
                                            storeId: o.storeId,
                                            userId: o.user.userId,
                                            location: 2
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
                        return u(h.default.mark(function t() {
                            var e, n;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.util.request({
                                        url: o.api.StoreAd,
                                        data: {
                                            type: 4,
                                            location: 1,
                                            storeId: o.storeId,
                                            userId: o.uId,
                                            isDelete: 1 != r.getStorageSync("tcgg") ? 1 : 2
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, o.tcggList = n, o.tcggList.length && setTimeout(function() {
                                        o.tcggshow = !0;
                                    }, 200), r.setStorageSync("tcgg", 1);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    refreshInfo: function() {
                        var o = this;
                        return u(h.default.mark(function t() {
                            var e, n;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = getApp().globalData.gdlocation, t.next = 3, o.getSjxx({
                                        storeId: o.storeId,
                                        item: o.outin,
                                        lat: e.latitude,
                                        lng: e.longitude,
                                        userId: o.user.userId || ""
                                    });

                                  case 3:
                                    if (n = t.sent, o.getsjxx = !0, !o.nostoreId) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 7:
                                    o.getConfig({
                                        key: "storeInfo",
                                        data: {
                                            id: o.storeId,
                                            name: n.storeInfo.name,
                                            distance: o.distance || s.default.getDistance(e.latitude, e.longitude, n.storeInfo.lat, n.storeInfo.lng)
                                        }
                                    });

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getStoreData: function() {
                        var o = this;
                        return u(h.default.mark(function t() {
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    o.util.request({
                                        url: o.api.StoreAd,
                                        data: {
                                            type: 3,
                                            location: 1,
                                            storeId: o.storeId
                                        }
                                    }).then(function(t) {
                                        o.lbswiper.swiper.children = t.data || [];
                                    }), o.util.request({
                                        url: o.api.RecommendDishesList,
                                        data: {
                                            storeId: o.storeId,
                                            userId: o.uId,
                                            page: 1,
                                            size: 10,
                                            item: 1
                                        }
                                    }).then(function(t) {
                                        if (o.carList.length) for (var e = 0; e < o.carList.length; e++) for (var n = 0; n < t.data.length; n++) t.data[n].goodsId == o.carList[e].goodsId && (t.data[n].num += o.carList[e].num);
                                        o.goodsList = t.data;
                                    });

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    init: function() {
                        var l = arguments, g = this;
                        return u(h.default.mark(function t() {
                            var e, n, o, r, s, i, a, c, u, d, f;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = 0 < l.length && void 0 !== l[0] ? l[0] : 1, g.showLoading = !1, t.next = 4, 
                                    g.util.request({
                                        url: g.api.sjspsl,
                                        data: {
                                            type: 1,
                                            storeId: g.storeId
                                        }
                                    });

                                  case 4:
                                    if (n = t.sent, g.goodsNum = n.data, !(n.data <= 150)) {
                                        t.next = 26;
                                        break;
                                    }
                                    return t.next = 9, g.util.request({
                                        url: g.api.DishesListAll,
                                        data: {
                                            item: e,
                                            storeId: g.storeId,
                                            userId: g.uId
                                        }
                                    });

                                  case 9:
                                    if (o = t.sent, r = o.data, g.carList.length) for (s = 0; s < g.carList.length; s++) for (i = 0; i < r.length; i++) for (a = 0; a < r[i].goods.length; a++) r[i].goods[a].goodsId == g.carList[s].goodsId && (r[i].goods[a].num += g.carList[s].num);
                                    g.catrgoryList = r, g.$nextTick(function() {
                                        g.getHeightList();
                                    }), g.getWindowCoupon(), g.getTcgg(), t.t0 = h.default.keys(r);

                                  case 17:
                                    if ((t.t1 = t.t0()).done) {
                                        t.next = 24;
                                        break;
                                    }
                                    if (c = t.t1.value, 1 != r[c].required) {
                                        t.next = 22;
                                        break;
                                    }
                                    return g.havebxp = !0, t.abrupt("break", 24);

                                  case 22:
                                    t.next = 17;
                                    break;

                                  case 24:
                                    t.next = 43;
                                    break;

                                  case 26:
                                    return t.next = 28, g.util.request({
                                        url: g.api.DishesTypeList,
                                        data: {
                                            item: e,
                                            storeId: g.storeId
                                        }
                                    });

                                  case 28:
                                    return u = t.sent, d = u.data, g.catrgoryList = d, t.next = 33, g.getDishsByType(0);

                                  case 33:
                                    g.getWindowCoupon(), g.getTcgg(), t.t2 = h.default.keys(d);

                                  case 36:
                                    if ((t.t3 = t.t2()).done) {
                                        t.next = 43;
                                        break;
                                    }
                                    if (f = t.t3.value, 1 != d[f].required) {
                                        t.next = 41;
                                        break;
                                    }
                                    return g.havebxp = !0, t.abrupt("break", 43);

                                  case 41:
                                    t.next = 36;
                                    break;

                                  case 43:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getHeightList: function() {
                        var o = this;
                        r.createSelectorQuery().selectAll(".c-item").boundingClientRect(function(t) {
                            var e = [], n = 0;
                            t.forEach(function(t) {
                                n += t.height, e.push(n);
                            }), o.right_height = e;
                        }).exec();
                    },
                    choose: function(t) {
                        var e = this;
                        if (this.goodsNum <= 150) {
                            if (this.sIndex == t) return;
                            this.sIndex = t, this.noscroll = !0, this.lsiv = "l".concat(t - 3), this.rsiv = "r".concat(t), 
                            setTimeout(function() {
                                e.noscroll = !1;
                            }, 500);
                        } else {
                            if (this.sIndex == t) return;
                            this.sIndex = t, this.swiperChange(t);
                        }
                    },
                    rscMethod: function(t, e) {
                        t && this.myscroll(e);
                    },
                    myscroll: function(t) {
                        if (t.detail.scrollHeight - this.windows_height != t.detail.scrollTop && !this.noscroll) for (var e = t.detail.scrollTop, n = 0; n < this.right_height.length; n++) if (e < this.right_height[0]) this.sIndex = 0, 
                        this.lsiv = "l0"; else if (e >= this.right_height[n - 1] && e < this.right_height[n]) {
                            this.sIndex = n, this.lsiv = "l".concat(n - 3), this.rsiv = "";
                            break;
                        }
                    },
                    choose2: function(t) {},
                    swiperChange: function(e) {
                        var n = this;
                        return u(h.default.mark(function t() {
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n.rsiv2 = "", setTimeout(function() {
                                        n.rsiv2 = "r0";
                                    }, 50), n.lsiv = "l".concat(e - 3), 0 == n.catrgoryList[e].goods.length && (n.util.showLoading(), 
                                    n.getDishsByType(e), n.$nextTick(function() {
                                        r.hideLoading();
                                    }));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getDishsByType: function(s) {
                        var i = this;
                        return u(h.default.mark(function t() {
                            var e, n, o, r;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, i.util.request({
                                        url: i.api.DishesList,
                                        data: {
                                            item: 1,
                                            userId: i.uId,
                                            typeId: i.catrgoryList[s].id || "",
                                            required: 1 == i.catrgoryList[s].required ? 1 : "",
                                            storeId: i.storeId
                                        }
                                    });

                                  case 2:
                                    for (e = t.sent, n = e.data, o = 0; o < i.carList.length; o++) for (r = 0; r < n.length; r++) n[r].goodsId == i.carList[o].goodsId && (n[r].num += i.carList[o].num);
                                    i.catrgoryList[s].goods = n;

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    rigthUpper: function(t) {},
                    refreshList: function() {
                        for (var t = this.carList, e = this.catrgoryList, n = 0, o = e.length; n < o; n++) for (var r = 0, s = e[n].goods.length; r < s; r++) for (var i = e[n].goods[r].num = 0; i < t.length; i++) e[n].goods[r].goodsId == t[i].goodsId && (e[n].goods[r].num += t[i].num);
                        for (var a = this.goodsList, c = 0, u = a.length; c < u; c++) for (var d = a[c].num = 0; d < t.length; d++) a[c].goodsId == t[d].goodsId && (a[c].num += t[d].num);
                    },
                    dec: function(d) {
                        var f = this;
                        return u(h.default.mark(function t() {
                            var e, n, o, r, s, i, a, c, u;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, f.decCar({
                                        g: d,
                                        outin: f.outin
                                    });

                                  case 2:
                                    for (e = t.sent, n = f.catrgoryList, o = 0, r = n.length; o < r; o++) for (s = 0, 
                                    i = n[o].goods.length; s < i; s++) n[o].goods[s].goodsId == d.goodsId && (n[o].goods[s].num -= e.gnum);
                                    for (a = f.goodsList, c = 0, u = a.length; c < u; c++) a[c].goodsId == d.goodsId && (a[c].num -= e.gnum);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    add: function(d) {
                        var f = this;
                        return u(h.default.mark(function t() {
                            var e, n, o, r, s, i, a, c, u;
                            return h.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (!(1 != d.g.isSpec && 1 != d.g.isMaterial && 1 != d.g.isAttribute || d.g.hasOwnProperty("groupId"))) {
                                        t.next = 13;
                                        break;
                                    }
                                    return t.next = 3, f.addCar({
                                        g: d.g,
                                        outin: f.outin
                                    });

                                  case 3:
                                    if (!(e = t.sent).isxg) {
                                        t.next = 6;
                                        break;
                                    }
                                    return t.abrupt("return");

                                  case 6:
                                    for (n = f.catrgoryList, o = 0, r = n.length; o < r; o++) for (s = 0, i = n[o].goods.length; s < i; s++) n[o].goods[s].goodsId == d.g.goodsId && (n[o].goods[s].num += e.gnum);
                                    for (a = f.goodsList, c = 0, u = a.length; c < u; c++) a[c].goodsId == d.g.goodsId && (a[c].num += e.gnum);
                                    d.e && f.addShopCar(d.e, f.getImgS(d.g.icon)), t.next = 15;
                                    break;

                                  case 13:
                                    f.showGg = !0, f.goodsInfo = d.g;

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    addShopCar: function(t, e) {
                        this.$refs.carAnmation.touchOnGoods(t, e);
                    },
                    celarCar: function(t) {
                        for (var e = this.catrgoryList, n = 0, o = e.length; n < o; n++) for (var r = 0, s = e[n].goods.length; r < s; r++) e[n].goods[r].num = 0;
                        for (var i = this.goodsList, a = 0, c = i.length; a < c; a++) i[a].num = 0;
                    },
                    changeBuyType: function() {
                        this.buyType = 1 == this.buyType ? 2 : 1;
                    },
                    trigger: function(t) {
                        this.go({
                            t: 1 < t.index ? 1 : 2,
                            url: t.item.url
                        }), console.log(t);
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
                            url: "sjjs?type=2&info=" + encodeURIComponent(JSON.stringify(this.sjxx.storeInfo))
                        });
                    }
                }),
                onShareAppMessage: function() {
                    var t = "yb_cy/shop/goods?storeId=".concat(this.storeId, "&userId=").concat(this.uId);
                    return this.util.mpShare({
                        t: this.sjxx.storeInfo.name,
                        p: t
                    });
                }
            };
            f.default = d;
        }).call(this, l("543d").default);
    },
    "2d06": function(t, e, n) {},
    5840: function(t, e, n) {
        var o = function() {
            var s = this, t = (s.$createElement, s._self._c, Number(s.getsjxx && s.sjxx.storeInfo.newMoney)), e = s.__map(s.catrgoryList, function(t, e) {
                var n = s.lfName(t.name), o = s.lsName(t.name), r = s.lsName(t.name);
                return {
                    $orig: s.__get_orig(t),
                    m1: n,
                    m2: o,
                    m3: r
                };
            });
            s._isMounted || (s.e0 = function(t) {
                2 == s.system.defaultStore && s.go({
                    t: 3 == s.system.decorationModel ? 3 : 1,
                    url: "select?page=goods&id=" + s.storeInfo.id
                });
            }, s.e1 = function(t) {
                s.showShopInfo = !s.showShopInfo;
            }, s.e2 = function(t) {
                s.tcyhqshow = !1;
            }), s.$mp.data = Object.assign({}, {
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
    "7ff1": function(t, e, n) {
        var o = n("923c");
        n.n(o).a;
    },
    "8c6a": function(t, e, n) {
        n.r(e);
        var o = n("2b4a"), r = n.n(o);
        for (var s in o) "default" !== s && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(s);
        e.default = r.a;
    },
    "923c": function(t, e, n) {},
    b285: function(t, e, n) {
        n.r(e);
        var o = n("5840"), r = n("8c6a");
        for (var s in r) "default" !== s && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(s);
        n("b4e6"), n("7ff1");
        var i = n("f0c5"), a = Object(i.a)(r.default, o.b, o.c, !1, null, "79041fec", null, !1, o.a, void 0);
        e.default = a.exports;
    },
    b4e6: function(t, e, n) {
        var o = n("2d06");
        n.n(o).a;
    },
    c617: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("b285")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "c617", "common/runtime", "common/vendor" ] ] ]);