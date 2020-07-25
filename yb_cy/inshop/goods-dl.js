(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/inshop/goods-dl" ], {
    "4bf7": function(t, e, n) {
        n.r(e);
        var o = n("81f2"), r = n("b808");
        for (var i in r) "default" !== i && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(i);
        n("826f");
        var s = n("f0c5"), c = Object(s.a)(r.default, o.b, o.c, !1, null, "f6da6144", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "4bff": function(t, f, l) {
        (function(r) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var i = n(l("4795")), t = l("2f62"), e = (n(l("6f73")), l("c1ef")), s = l("1127");
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
            function c(r) {
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
                    var c = t[i](s), a = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(a) : Promise.resolve(a).then(o, r);
            }
            function u(c) {
                return function() {
                    var t = this, s = arguments;
                    return new Promise(function(e, n) {
                        var o = c.apply(t, s);
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
            var d = {
                name: "bzf",
                components: {
                    MgSwiper: function() {
                        l.e("components/swiper/swiper").then(function() {
                            return resolve(l("04a9"));
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
                    goods: function() {
                        l.e("components/goods/index").then(function() {
                            return resolve(l("38ef"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    uParse: function() {
                        Promise.all([ l.e("common/vendor"), l.e("components/uParse/src/wxParse") ]).then(function() {
                            return resolve(l("a5dc"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    uniNavBar: function() {
                        l.e("components/third/uni-nav-bar").then(function() {
                            return resolve(l("7f1a"));
                        }.bind(null, l)).catch(l.oe);
                    },
                    mgRtext: function() {
                        Promise.all([ l.e("common/vendor"), l.e("components/swiper/rich-text") ]).then(function() {
                            return resolve(l("7cad"));
                        }.bind(null, l)).catch(l.oe);
                    }
                },
                data: function() {
                    return {
                        opcity: 0,
                        iconOpcity: .5,
                        swiper: {
                            class: "",
                            padding: 0,
                            swiper: {
                                children: []
                            },
                            duration: "",
                            mode: "",
                            height: "750",
                            radius: "0",
                            auto: !0,
                            interval: 5
                        },
                        isShare: !1,
                        isshopGoods: !1,
                        co: null,
                        showGg: !1,
                        outin: "1",
                        goodsInfo: {},
                        storeInfo: {}
                    };
                },
                onLoad: function(n) {
                    var o = this;
                    return u(i.default.mark(function t() {
                        var e;
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                if (e = n.scene ? decodeURIComponent(n.scene) : n.id, o.id = e, o.getSystem(o), 
                                o.isShare = 1 == getCurrentPages().length, !o.isShare) {
                                    t.next = 8;
                                    break;
                                }
                                return t.next = 7, o.getLoginInfo();

                              case 7:
                                o.setCarList([]);

                              case 8:
                                o.getData(), o.isShare || (o.lastPage = o.util.getPage()), "shopGoods" == n.page ? o.isshopGoods = !0 : o.setCarList([]), 
                                r.setStorageSync("ingdl", !0), console.log("%c options ", "color: white; background-color: #2274A5", o.isShare, o.isshopGoods, n);

                              case 13:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                mixins: [ e.utilMixins ],
                computed: c({}, (0, t.mapState)([ "carList", "sjxx" ]), {
                    canUseShopGoods: function() {
                        return !this.isShare && this.isshopGoods;
                    }
                }),
                methods: c({}, (0, t.mapActions)([ "getSjxx", "addCar", "decCar" ]), {}, (0, t.mapMutations)([ "setCarList" ]), {
                    changeNum: function() {
                        this.co.num = 0;
                        for (var t = this.carList, e = 0, n = t.length; e < n; e++) t[e].goodsId == this.co.goodsId && (this.co.num += t[e].num);
                    },
                    dec: function(t) {
                        this.canUseShopGoods ? this.lastPage.$vm.dec(t) : this.decCar({
                            g: t
                        }), this.changeNum();
                    },
                    add: function(e) {
                        if (1 != e.g.isSpec && 1 != e.g.isMaterial && 1 != e.g.isAttribute || e.g.hasOwnProperty("groupId")) {
                            var t = this.carList.find(function(t) {
                                return t.goodsId == e.g.goodsId && t.groupId == e.g.groupId && t.jlids == e.g.jlids;
                            }) || {
                                num: 0
                            };
                            if (t.num >= e.g.outStock) return this.util.message("此商品库存不足", 3);
                            if (99 == t.num) return this.util.message("最多添加99个", 3);
                            if (this.canUseShopGoods) {
                                for (var n = this.lastPage.$vm.catrgoryList, o = 0, r = n.length; o < r; o++) for (var i = 0, s = n[o].goods.length; i < s; i++) n[o].goods[i].goodsId == e.g.goodsId && n[o].goods[i].num++;
                                for (var c = this.lastPage.$vm.goodsList, a = 0, u = c.length; a < u; a++) c[a].goodsId == e.g.goodsId && c[a].num++;
                            }
                            this.addCar({
                                g: e.g,
                                outin: this.outin
                            }), e.e && this.addShopCar(e.e, this.getImgS(e.g.icon));
                        } else this.showGg = !0, this.goodsInfo = e.g;
                        this.changeNum();
                    },
                    addShopCar: function(t, e) {
                        this.$refs.carAnmation.touchOnGoods(t, e);
                    },
                    celarCar: function(t) {
                        this.canUseShopGoods && this.lastPage.$vm.celarCar(), this.changeNum();
                    },
                    gopay: function() {
                        this.canUseShopGoods ? this.go({
                            t: 4
                        }) : this.go({
                            t: this.isShare ? 3 : 2,
                            url: "/yb_cy/shop/goods?storeId=".concat(this.co.storeId, "&isgl=1")
                        });
                    },
                    getData: function() {
                        var r = this;
                        return u(i.default.mark(function t() {
                            var e, n, o;
                            return i.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, r.util.request({
                                        url: r.api.DishesInfo,
                                        mask: 1,
                                        data: {
                                            id: r.id,
                                            userId: r.uId
                                        }
                                    });

                                  case 2:
                                    return e = t.sent, (n = e.data).num = 0, r.co = n, r.swiper.swiper.children = n.media.map(function(t) {
                                        return {
                                            icon: t
                                        };
                                    }), r.changeNum(), t.next = 10, (0, s.getDw)({
                                        t: 0
                                    });

                                  case 10:
                                    o = t.sent, r.isShare && r.getSjxx({
                                        storeId: n.storeId,
                                        item: r.outin,
                                        lat: o.latitude,
                                        lng: o.longitude,
                                        userId: r.user.userId || ""
                                    });

                                  case 12:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    itemBoxMoney: function(t, e) {
                        return (t * e).toFixed(1);
                    }
                }),
                created: function() {
                    return u(i.default.mark(function t() {
                        return i.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                onPageScroll: function(t) {
                    if (!(1 <= this.opcity && 1 <= t.scrollTop / 64)) {
                        var e = t.scrollTop / 64;
                        this.opcity = e, this.iconOpcity = .5 * (1 - e < 0 ? 0 : 1 - e);
                    }
                }
            };
            f.default = d;
        }).call(this, l("543d").default);
    },
    "81f2": function(t, e, n) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, r = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return r;
        }), n.d(e, "a", function() {});
    },
    "826f": function(t, e, n) {
        var o = n("e59b");
        n.n(o).a;
    },
    "8d56": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("4bf7")).default);
        }).call(this, n("543d").createPage);
    },
    b808: function(t, e, n) {
        n.r(e);
        var o = n("4bff"), r = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = r.a;
    },
    e59b: function(t, e, n) {}
}, [ [ "8d56", "common/runtime", "common/vendor" ] ] ]);