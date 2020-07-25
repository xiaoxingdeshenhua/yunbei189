(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/ffmode/goods" ], {
    "1b9b": function(t, e, n) {
        n.r(e);
        var r = n("385c"), o = n("8281");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n("356b"), n("3f34");
        var s = n("f0c5"), a = Object(s.a)(o.default, r.b, r.c, !1, null, "9cdb74d4", null, !1, r.a, void 0);
        e.default = a.exports;
    },
    "2aa7": function(t, e, n) {},
    "356b": function(t, e, n) {
        var r = n("e2ad");
        n.n(r).a;
    },
    "385c": function(t, e, n) {
        var r = function() {
            var u = this, t = (u.$createElement, u._self._c, u.__map(u.catrgoryList, function(t, e) {
                var n = u.lfName(t.name), r = u.lsName(t.name), o = u.lsName(t.name);
                return {
                    $orig: u.__get_orig(t),
                    m0: n,
                    m1: r,
                    m2: o
                };
            }));
            u._isMounted || (u.e0 = function(t) {
                u.showShopInfo = !u.showShopInfo;
            }, u.e1 = function(t) {
                u.tcyhqshow = !1;
            }), u.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, o = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
    },
    "3e78": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("1b9b")).default);
        }).call(this, n("543d").createPage);
    },
    "3f34": function(t, e, n) {
        var r = n("2aa7");
        n.n(r).a;
    },
    8281: function(t, e, n) {
        n.r(e);
        var r = n("fa2f"), o = n.n(r);
        for (var u in r) "default" !== u && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(u);
        e.default = o.a;
    },
    e2ad: function(t, e, n) {},
    fa2f: function(t, u, s) {
        (function(i) {
            Object.defineProperty(u, "__esModule", {
                value: !0
            }), u.default = void 0;
            var d = n(s("4795")), t = s("2f62"), f = n(s("6f73")), e = s("c1ef");
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
            function l(o) {
                for (var t = 1; t < arguments.length; t++) {
                    var u = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? r(Object(u), !0).forEach(function(t) {
                        var e, n, r;
                        e = o, r = u[n = t], n in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(u)) : r(Object(u)).forEach(function(t) {
                        Object.defineProperty(o, t, Object.getOwnPropertyDescriptor(u, t));
                    });
                }
                return o;
            }
            function c(t, e, n, r, o, u, s) {
                try {
                    var a = t[u](s), c = a.value;
                } catch (t) {
                    return void n(t);
                }
                a.done ? e(c) : Promise.resolve(c).then(r, o);
            }
            function p(a) {
                return function() {
                    var t = this, s = arguments;
                    return new Promise(function(e, n) {
                        var r = a.apply(t, s);
                        function o(t) {
                            c(r, e, n, o, u, "next", t);
                        }
                        function u(t) {
                            c(r, e, n, o, u, "throw", t);
                        }
                        o(void 0);
                    });
                };
            }
            s("1127");
            var o = {
                components: {
                    goods: function() {
                        s.e("components/goods/index").then(function() {
                            return resolve(s("38ef"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    shopCarAnimation: function() {
                        Promise.all([ s.e("common/vendor"), s.e("components/fly-in-cart/fly-in-cart") ]).then(function() {
                            return resolve(s("287a"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    goodsCar: function() {
                        s.e("yb_cy/inshop/ffmode/goods-car").then(function() {
                            return resolve(s("fe1e"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    spec: function() {
                        s.e("components/goods/spec").then(function() {
                            return resolve(s("fed6"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    load: function() {
                        s.e("components/common/load").then(function() {
                            return resolve(s("de6d"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    mgPopup: function() {
                        s.e("components/common/popup").then(function() {
                            return resolve(s("da89"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    mgModal: function() {
                        s.e("components/common/modal").then(function() {
                            return resolve(s("ee48"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    uniFab: function() {
                        s.e("components/third/uni-fab").then(function() {
                            return resolve(s("151d"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    tips: function() {
                        s.e("components/common/tips").then(function() {
                            return resolve(s("e52e"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    MgSwiper: function() {
                        s.e("components/swiper/swiper").then(function() {
                            return resolve(s("04a9"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    MgCell: function() {
                        s.e("components/common/mg-cell").then(function() {
                            return resolve(s("ef6e"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    MgImg: function() {
                        s.e("components/common/mg-img").then(function() {
                            return resolve(s("e668"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    customCoupon: function() {
                        s.e("components/swiper/coupon").then(function() {
                            return resolve(s("1abb"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    tcyhq: function() {
                        s.e("components/template/tcyhq").then(function() {
                            return resolve(s("014b"));
                        }.bind(null, s)).catch(s.oe);
                    },
                    tcgg: function() {
                        s.e("components/template/tcgg").then(function() {
                            return resolve(s("9989"));
                        }.bind(null, s)).catch(s.oe);
                    }
                },
                data: function() {
                    return {
                        goodsList: [],
                        windows_height: 0,
                        swiperList: [],
                        catrgoryList: [],
                        goodsNum: 0,
                        sIndex: 0,
                        lsiv: "",
                        rCurrent: 0,
                        rsiv: "",
                        showGg: !1,
                        showLoading: !0,
                        buyType: 1,
                        showShopInfo: !1,
                        outin: "2",
                        goodsInfo: {},
                        storeInfo: {},
                        sjxx: null,
                        havebxp: !1,
                        tcyhqshow: !1,
                        tcCoupon: {},
                        tcggshow: !1,
                        tcggList: [],
                        showCar: !1,
                        carNum: 0
                    };
                },
                mixins: [ e.utilMixins ],
                onLoad: function(e) {
                    var n = this;
                    return p(d.default.mark(function t() {
                        return d.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return n.getSystem(), n.storeId = f.default.getOptions(e, {
                                    key: "storeId",
                                    q1: n.sjxxs.storeInfo && n.sjxxs.storeInfo.id
                                }), t.next = 4, n.getLoginInfo();

                              case 4:
                                n.supdCarbp = {
                                    userId: n.uId,
                                    item: 3,
                                    storeId: n.storeId,
                                    mask: 1
                                }, n.getDw();

                              case 6:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onShow: function() {},
                computed: l({}, (0, t.mapState)({
                    sjxxs: function(t) {
                        return t.sjxx;
                    },
                    scarList: function(t) {
                        return t.scarList.userInfo && t.scarList.userInfo[0].goodsArr || [];
                    }
                }), {}, (0, t.mapState)("dndc", [ "dndcConfig" ]), {
                    yysj: function() {
                        var t = "";
                        if (this.sjxx) {
                            var e = this.sjxx.storeInfo;
                            1 == e.timeArrType ? t = "24小时营业" : (t = "".concat(f.default.timeToDate(e.timeArr[0][0], "hh:mm"), "-").concat(f.default.timeToDate(e.timeArr[0][1], "hh:mm")), 
                            e.timeArr[1] && (t += " " + "".concat(f.default.timeToDate(e.timeArr[1][0], "hh:mm"), "-").concat(f.default.timeToDate(e.timeArr[1][1], "hh:mm"))));
                        }
                        return t;
                    }
                }),
                methods: l({}, (0, t.mapActions)([ "getSjxx", "supdCar", "getMycar", "clearMycar" ]), {}, (0, 
                t.mapActions)("dndc", [ "getDndcConfig" ]), {}, (0, t.mapMutations)([ "setCarList" ]), {
                    refreshList: function() {
                        this.util.showLoading(), this.carNum = 0;
                        var e = [], t = this.scarList.userInfo || [], n = this.catrgoryList;
                        t.forEach(function(t) {
                            e = e.concat(t.goodsArr);
                        });
                        for (var r = f.default.deepCopy(e.filter(function(e, t, n) {
                            return n.findIndex(function(t) {
                                return t.goodsId == e.goodsId;
                            }) == t;
                        })), o = 0; o < r.length; o++) {
                            for (var u = r[o].num = 0; u < e.length; u++) r[o].goodsId == e[u].goodsId && (r[o].num += +e[u].num);
                            this.carNum += r[o].num;
                        }
                        for (var s = 0; s < n.length; s++) for (var a = 0; a < n[s].goods.length; a++) for (var c = n[s].goods[a].num = 0; c < r.length; c++) n[s].goods[a].goodsId == r[c].goodsId && (n[s].goods[a].num += +r[c].num);
                        i.hideLoading();
                    },
                    getDw: function() {
                        var e = this;
                        return p(d.default.mark(function t() {
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    e.init(), e.refreshInfo();

                                  case 2:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getWindowCoupon: function() {
                        var r = this;
                        return p(d.default.mark(function t() {
                            var e, n;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.WindowCoupon,
                                        data: {
                                            storeId: r.storeId,
                                            userId: r.user.userId,
                                            location: 3
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r.tcCoupon = n || {}, r.tcCoupon.couponInfo && r.tcCoupon.couponInfo.length && setTimeout(function() {
                                        r.tcyhqshow = !0;
                                    }, 200);

                                  case 6:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getTcgg: function() {
                        var r = this;
                        return p(d.default.mark(function t() {
                            var e, n;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.StoreAd,
                                        data: {
                                            type: 4,
                                            location: 2,
                                            storeId: r.storeId,
                                            userId: r.uId,
                                            isDelete: 1 != i.getStorageSync("tcgg") ? 1 : 2
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r.tcggList = n, r.tcggList.length && setTimeout(function() {
                                        r.tcggshow = !0;
                                    }, 200), i.setStorageSync("tcgg", 1);

                                  case 7:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    refreshInfo: function() {
                        var n = this;
                        return p(d.default.mark(function t() {
                            var e;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, n.getSjxx({
                                        storeId: n.storeId,
                                        item: 3,
                                        userId: n.uId
                                    });

                                  case 3:
                                    e = t.sent, n.sjxx = e, n.showLoading = !1, n.util.setNT(e.storeInfo.name), t.next = 12;
                                    break;

                                  case 9:
                                    t.prev = 9, t.t0 = t.catch(0), f.default.stfn(function() {
                                        n.go({
                                            t: 3,
                                            url: "/yb_cy/shop/index"
                                        });
                                    });

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 9 ] ]);
                        }))();
                    },
                    init: function() {
                        var o = arguments, u = this;
                        return p(d.default.mark(function t() {
                            var e, n, r;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return e = 0 < o.length && void 0 !== o[0] ? o[0] : 2, t.next = 3, Promise.all([ u.util.request({
                                        url: u.api.DishesTypeList,
                                        data: {
                                            item: e,
                                            storeId: u.storeId
                                        }
                                    }), u.getMycar(u.supdCarbp) ]);

                                  case 3:
                                    return n = t.sent, u.catrgoryList = n[0].data, t.next = 7, u.getDishsByType(0);

                                  case 7:
                                    t.t0 = d.default.keys(n[0].data);

                                  case 8:
                                    if ((t.t1 = t.t0()).done) {
                                        t.next = 15;
                                        break;
                                    }
                                    if (r = t.t1.value, 1 != n[0].data[r].required) {
                                        t.next = 13;
                                        break;
                                    }
                                    return u.havebxp = !0, t.abrupt("break", 15);

                                  case 13:
                                    t.next = 8;
                                    break;

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    choose: function(t) {
                        this.rCurrent = t;
                    },
                    swiperChange: function(e) {
                        var n = this;
                        return p(d.default.mark(function t() {
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    n.sIndex = n.rCurrent = e.detail.current, n.rsiv = "", n.lsiv = "l".concat(e.detail.current - 3), 
                                    setTimeout(function() {
                                        n.rsiv = "r0";
                                    }, 50), 0 == n.catrgoryList[e.detail.current].goods.length && (n.util.showLoading(), 
                                    n.getDishsByType(e.detail.current), n.$nextTick(function() {
                                        i.hideLoading();
                                    }));

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    getDishsByType: function(u) {
                        var s = this;
                        return p(d.default.mark(function t() {
                            var e, n, r, o;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.util.request({
                                        url: s.api.DishesList,
                                        data: {
                                            item: 1,
                                            userId: s.uId,
                                            typeId: s.catrgoryList[u].id || "",
                                            required: 1 == s.catrgoryList[u].required ? 1 : "",
                                            storeId: s.storeId
                                        }
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, r = 0;

                                  case 5:
                                    if (!(r < s.scarList.length)) {
                                        t.next = 17;
                                        break;
                                    }
                                    o = 0;

                                  case 7:
                                    if (!(o < n.length)) {
                                        t.next = 14;
                                        break;
                                    }
                                    if (n[o].goodsId != s.scarList[r].goodsId) {
                                        t.next = 11;
                                        break;
                                    }
                                    return n[o].num += +s.scarList[r].num, t.abrupt("break", 14);

                                  case 11:
                                    o++, t.next = 7;
                                    break;

                                  case 14:
                                    r++, t.next = 5;
                                    break;

                                  case 17:
                                    s.catrgoryList[u].goods = n;

                                  case 18:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    updList: function(a) {
                        var c = this;
                        return p(d.default.mark(function t() {
                            var e, n, r, o, u, s;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (t.prev = 0, 2 == a.addwz) {
                                        t.next = 7;
                                        break;
                                    }
                                    return t.next = 4, c.supdCar(l({}, c.supdCarbp, {
                                        goodsArr: JSON.stringify({
                                            updType: a.updType,
                                            goodsId: a.g.goodsId,
                                            groupId: a.g.groupId || "",
                                            num: 1,
                                            material: a.g.material || [],
                                            attribute: a.g.sxdata || ""
                                        })
                                    }));

                                  case 4:
                                    e = t.sent, t.next = 10;
                                    break;

                                  case 7:
                                    return t.next = 9, c.supdCar({
                                        carId: a.g.id,
                                        carNum: a.num,
                                        updType: a.updType
                                    });

                                  case 9:
                                    e = t.sent;

                                  case 10:
                                    for (c.getMycar(c.supdCarbp), n = c.catrgoryList, r = 0, o = n.length; r < o; r++) for (u = 0, 
                                    s = n[r].goods.length; u < s; u++) n[r].goods[u].goodsId == a.g.goodsId && (n[r].goods[u].num = 1 == a.updType ? n[r].goods[u].num + e : n[r].goods[u].num - e);
                                    t.next = 17;
                                    break;

                                  case 15:
                                    t.prev = 15, t.t0 = t.catch(0);

                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 15 ] ]);
                        }))();
                    },
                    dec: function(t) {
                        2 != t.addwz ? this.updList({
                            updType: 2,
                            g: t.g
                        }) : this.updList({
                            addwz: 2,
                            updType: 2,
                            num: +t.g.num - 1,
                            g: t.g
                        });
                    },
                    add: function(t) {
                        2 != t.addwz ? 1 != t.g.isSpec && 1 != t.g.isMaterial && 1 != t.g.isAttribute || t.g.hasOwnProperty("groupId") ? this.updList({
                            updType: 1,
                            g: t.g
                        }) : (this.showGg = !0, this.goodsInfo = t.g) : this.updList({
                            addwz: 2,
                            updType: 1,
                            num: +t.g.num + 1,
                            g: t.g
                        });
                    },
                    celarCar: function(t) {
                        var s = this;
                        return p(d.default.mark(function t() {
                            var e, n, r, o, u;
                            return d.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, s.clearMycar(l({}, s.supdCarbp, {
                                        item: 3
                                    }));

                                  case 2:
                                    for (s.getMycar(s.supdCarbp), e = s.catrgoryList, n = 0, r = e.length; n < r; n++) for (o = 0, 
                                    u = e[n].goods.length; o < u; o++) e[n].goods[o].num = 0;

                                  case 5:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
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
                    }
                })
            };
            u.default = o;
        }).call(this, s("543d").default);
    }
}, [ [ "3e78", "common/runtime", "common/vendor" ] ] ]);