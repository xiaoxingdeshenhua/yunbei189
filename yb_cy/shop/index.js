(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/index" ], {
    "0739": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("6335")).default);
        }).call(this, n("543d").createPage);
    },
    "0931": function(e, t, n) {
        n.r(t);
        var o = n("d2a8"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    6335: function(e, t, n) {
        n.r(t);
        var o = n("b443"), r = n("0931");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        n("a583");
        var i = n("f0c5"), s = Object(i.a)(r.default, o.b, o.c, !1, null, "437b9cb1", null, !1, o.a, void 0);
        t.default = s.exports;
    },
    a583: function(e, t, n) {
        var o = n("ef3c");
        n.n(o).a;
    },
    b443: function(e, t, n) {
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c, t._isMounted || (t.e0 = function(e) {
                t.tcyhqshow = !1;
            });
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    },
    d2a8: function(e, f, d) {
        (function(r) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var e, c = (e = d("4795")) && e.__esModule ? e : {
                default: e
            }, t = d("2f62"), n = d("c1ef"), i = d("1127");
            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function s(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var c = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(c), !0).forEach(function(e) {
                        var t, n, o;
                        t = r, o = c[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : o(Object(c)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                    });
                }
                return r;
            }
            function u(e, t, n, o, r, c, i) {
                try {
                    var s = e[c](i), u = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(u) : Promise.resolve(u).then(o, r);
            }
            function a(s) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(t, n) {
                        var o = s.apply(e, i);
                        function r(e) {
                            u(o, t, n, r, c, "next", e);
                        }
                        function c(e) {
                            u(o, t, n, r, c, "throw", e);
                        }
                        r(void 0);
                    });
                };
            }
            var l = {
                name: "shopIndex",
                components: {
                    uniNavBar: function() {
                        d.e("components/third/uni-nav-bar").then(function() {
                            return resolve(d("7f1a"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    customSwiper: function() {
                        d.e("components/swiper/swiper").then(function() {
                            return resolve(d("04a9"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    toppingSwiper: function() {
                        d.e("components/swiper/topping-swiper").then(function() {
                            return resolve(d("1a05"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    searchBox: function() {
                        d.e("components/swiper/search-box").then(function() {
                            return resolve(d("5a1f"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    entryButtonGroup: function() {
                        d.e("components/swiper/entry-button-group").then(function() {
                            return resolve(d("b5a6"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    noticeGroup: function() {
                        d.e("components/swiper/notice-group").then(function() {
                            return resolve(d("082e"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    imageGroup: function() {
                        d.e("components/swiper/image-group").then(function() {
                            return resolve(d("14e5"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    magicCube: function() {
                        d.e("components/swiper/magic-cube").then(function() {
                            return resolve(d("781c"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    customTitle: function() {
                        d.e("components/swiper/custom-title").then(function() {
                            return resolve(d("777d"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    whiteSpace: function() {
                        d.e("components/swiper/white-space").then(function() {
                            return resolve(d("2e1e"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    richText: function() {
                        Promise.all([ d.e("common/vendor"), d.e("components/swiper/rich-text") ]).then(function() {
                            return resolve(d("7cad"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    segmentLine: function() {
                        d.e("components/swiper/segment-line").then(function() {
                            return resolve(d("378f"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    customAudio: function() {
                        d.e("components/swiper/custom-audio").then(function() {
                            return resolve(d("2e20"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    customVideo: function() {
                        d.e("components/swiper/custom-video").then(function() {
                            return resolve(d("6e680"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    bigImage: function() {
                        d.e("components/swiper/big-image").then(function() {
                            return resolve(d("1cc8"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    nearbyStore: function() {
                        d.e("components/swiper/nearby-store").then(function() {
                            return resolve(d("d5b3"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    goodsRecommendation: function() {
                        d.e("components/swiper/goods-recommendation").then(function() {
                            return resolve(d("e306"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    storeEvaluate: function() {
                        d.e("components/swiper/store-evaluate").then(function() {
                            return resolve(d("83c1"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    customCoupon: function() {
                        d.e("components/swiper/coupon").then(function() {
                            return resolve(d("1abb"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    storeInformation: function() {
                        d.e("components/swiper/store-information").then(function() {
                            return resolve(d("0512"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    TabBar: function() {
                        d.e("components/common/tabbar").then(function() {
                            return resolve(d("f13c"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    load: function() {
                        d.e("components/common/load").then(function() {
                            return resolve(d("de6d"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    tcyhq: function() {
                        d.e("components/template/tcyhq").then(function() {
                            return resolve(d("014b"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    tcgg: function() {
                        d.e("components/template/tcgg").then(function() {
                            return resolve(d("9989"));
                        }.bind(null, d)).catch(d.oe);
                    },
                    footc: function() {
                        d.e("components/common/footc").then(function() {
                            return resolve(d("372d"));
                        }.bind(null, d)).catch(d.oe);
                    }
                },
                data: function() {
                    return {
                        opcity: 0,
                        storeInfo: {},
                        storeList: [],
                        showLoading: !0,
                        adata: "",
                        windows_height: "",
                        tcyhqshow: !1,
                        tcCoupon: {},
                        tcggshow: !1,
                        tcggList: [],
                        swiper: {
                            class: "h100",
                            padding: 0,
                            swiper: {
                                children: []
                            },
                            duration: "",
                            mode: "",
                            height: "100",
                            radius: "0",
                            auto: !0,
                            interval: 5
                        },
                        second: "",
                        query: {}
                    };
                },
                onLoad: function(n) {
                    var o = this;
                    return a(c.default.mark(function e() {
                        var t;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return e.next = 2, Promise.all([ o.getSystem({
                                    nofc: 1
                                }), o.getLayout() ]);

                              case 2:
                                return o.showLoading = !1, o.query = n, o.swiper.swiper.children = o.launch.pictureList || [], 
                                o.launch.switch && !o.hasKp ? (o.second = +o.launch.duration, o.dsq = setInterval(function() {
                                    o.second--, o.second <= 0 && o.tg();
                                }, 1e3)) : o.tg(), n.storeId ? t = n.storeId : getApp().globalData.selectStore ? t = getApp().globalData.selectStore : n.scene && (t = decodeURIComponent(n.scene)), 
                                o.storeId = t, e.next = 10, o.getLoginInfo({
                                    inviteId: n.userId
                                });

                              case 10:
                                o.getDw(), wx.showShareMenu({
                                    menus: [ "shareAppMessage", "shareTimeline" ]
                                });

                              case 12:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onShow: function() {
                    var n = this;
                    return a(c.default.mark(function e() {
                        var t;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                n.storeInfo.id && n.$store.state.sjxx.storeInfo && (n.storeInfo.id != n.$store.state.sjxx.storeInfo.id ? (t = n.storeArr.find(function(e) {
                                    return e.id == getApp().globalData.selectStore;
                                }), n.changeStore(t)) : console.log("sjxx没有改"));

                              case 1:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ n.utilMixins ],
                computed: s({}, (0, t.mapState)([ "layout", "hasKp", "allStore", "sjxx" ]), {
                    launch: function() {
                        return this.layout.launch && this.layout.launch.config || {};
                    },
                    page: function() {
                        return this.layout.page || [];
                    }
                }),
                methods: s({}, (0, t.mapActions)([ "getSjxx", "getAllStore" ]), {}, (0, t.mapMutations)([ "setHasKp" ]), {
                    isFirstCmp: function(t, e) {
                        return this.page.findIndex(function(e) {
                            return e.cmpName == t;
                        }) == e;
                    },
                    getCmpConfig: function(t) {
                        var e = this.page.find(function(e) {
                            return e.cmpName == t;
                        });
                        return e ? e.config : {};
                    },
                    hasCmp: function(t) {
                        return this.page.some(function(e) {
                            return e.cmpName == t;
                        });
                    },
                    tg: function() {
                        this.setHasKp(!0), 1 == this.system.decorationModel ? this.go({
                            t: 3,
                            url: "/yb_cy/shop/goods"
                        }) : 3 != this.system.decorationModel || this.query.notg || this.go({
                            t: 3,
                            url: "/yb_cy/shop/select"
                        }), clearInterval(this.dsq);
                    },
                    getDw: function() {
                        var o = this;
                        return a(c.default.mark(function e() {
                            var t, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!getApp().globalData.selectStore || !o.allStore.data) {
                                        e.next = 4;
                                        break;
                                    }
                                    t = o.allStore.data, e.next = 10;
                                    break;

                                  case 4:
                                    return e.next = 6, (0, i.getDw)({
                                        t: 0
                                    });

                                  case 6:
                                    return n = e.sent, e.next = 9, o.getAllStore({
                                        lat: n.latitude,
                                        lng: n.longitude,
                                        page: 1,
                                        size: 200
                                    });

                                  case 9:
                                    t = o.allStore.data;

                                  case 10:
                                    e.prev = 10, o.storeId ? (o.storeInfo = t.find(function(e) {
                                        return e.id == o.storeId;
                                    }), getApp().globalData.selectStore = o.storeInfo.id) : (o.storeInfo = t[0], getApp().globalData.selectStore = t[0].id), 
                                    e.next = 17;
                                    break;

                                  case 14:
                                    return e.prev = 14, e.t0 = e.catch(10), e.abrupt("return");

                                  case 17:
                                    o.getWindowCoupon(), o.getTcgg(), o.refreshInfo(), o.storeArr = t, o.getStorelist(), 
                                    o.windows_height = o.util.getSb().h;

                                  case 23:
                                  case "end":
                                    return e.stop();
                                }
                            }, e, null, [ [ 10, 14 ] ]);
                        }))();
                    },
                    getWindowCoupon: function() {
                        var o = this;
                        return a(c.default.mark(function e() {
                            var t, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.util.request({
                                        url: o.api.WindowCoupon,
                                        data: {
                                            storeId: o.storeInfo.id,
                                            userId: o.user.userId,
                                            location: 1
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, o.tcCoupon = n || {}, o.tcCoupon.couponInfo && o.tcCoupon.couponInfo.length && setTimeout(function() {
                                        o.tcyhqshow = !0;
                                    }, 200);

                                  case 6:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    getTcgg: function() {
                        var o = this;
                        return a(c.default.mark(function e() {
                            var t, n;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, o.util.request({
                                        url: o.api.StoreAd,
                                        data: {
                                            type: 4,
                                            location: 3,
                                            storeId: o.storeInfo.id,
                                            userId: o.uId,
                                            isDelete: 1 != r.getStorageSync("tcgg") ? 1 : 2
                                        }
                                    });

                                  case 2:
                                    t = e.sent, n = t.data, o.tcggList = n, o.tcggList.length && setTimeout(function() {
                                        o.tcggshow = !0;
                                    }, 200), r.setStorageSync("tcgg", 1);

                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    refreshInfo: function() {
                        var n = this;
                        return a(c.default.mark(function e() {
                            var t;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return t = getApp().globalData.gdlocation, e.next = 3, n.getSjxx({
                                        storeId: n.storeInfo.id,
                                        item: 1,
                                        lat: t.latitude,
                                        lng: t.longitude,
                                        userId: n.user.userId
                                    });

                                  case 3:
                                    e.sent;

                                  case 4:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    changeStore: function(e) {
                        r.pageScrollTo({
                            scrollTop: 0,
                            duration: 100
                        }), this.storeInfo = e, this.getWindowCoupon(), this.getTcgg(), this.refreshInfo(), 
                        this.getStorelist(), getApp().globalData.selectStore = e.id, console.log("changeStore", e);
                    },
                    getStorelist: function() {
                        var t = this, e = this.storeArr.findIndex(function(e) {
                            return e.id == t.storeInfo.id;
                        }), n = JSON.parse(JSON.stringify(this.storeArr));
                        n.splice(e, 1), this.storeList = n;
                    },
                    changeStoreInfo: function() {
                        this.storeInfo.name = "123";
                    }
                }),
                onPullDownRefresh: function() {
                    var n = this;
                    return a(c.default.mark(function e() {
                        var t;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return n.util.showLoading(), t = n.util.getPage(1), getApp().globalData.selectStore = null, 
                                r.setStorageSync("firstdwtime", 0), n.$store.state.system = {}, n.$store.state.layout = {}, 
                                e.next = 8, t.onLoad(n.query);

                              case 8:
                                r.hideLoading(), r.stopPullDownRefresh();

                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onPageScroll: function(e) {
                    if (!(1 <= this.opcity && 1 <= e.scrollTop / 64)) {
                        var t = e.scrollTop / 64;
                        this.opcity = t;
                    }
                },
                onShareAppMessage: function() {
                    var e = "yb_cy/shop/index?storeId=".concat(this.storeId, "&userId=").concat(this.uId);
                    return this.util.mpShare({
                        t: this.storeInfo.name,
                        p: e
                    });
                },
                onShareTimeline: function(e) {
                    return {
                        title: this.system.shareTitle,
                        imageUrl: this.getImgS(this.system.shareImg)
                    };
                },
                onUnload: function() {
                    this.dsq && clearInterval(this.dsq);
                }
            };
            f.default = l;
        }).call(this, d("543d").default);
    },
    ef3c: function(e, t, n) {}
}, [ [ "0739", "common/runtime", "common/vendor" ] ] ]);