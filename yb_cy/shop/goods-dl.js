(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/goods-dl" ], {
    "184a": function(e, t, n) {
        n.r(t);
        var o = n("f4ac"), r = n("426d");
        for (var c in r) "default" !== c && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(c);
        var i = n("f0c5"), s = Object(i.a)(r.default, o.b, o.c, !1, null, "4c465fb0", null, !1, o.a, void 0);
        t.default = s.exports;
    },
    "426d": function(e, t, n) {
        n.r(t);
        var o = n("6d0c"), r = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = r.a;
    },
    "6d0c": function(e, f, l) {
        (function(n) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var c = o(l("4795")), e = l("2f62"), t = (o(l("6f73")), l("c1ef")), i = l("1127");
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, o);
                }
                return n;
            }
            function r(r) {
                for (var e = 1; e < arguments.length; e++) {
                    var c = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(c), !0).forEach(function(e) {
                        var t, n, o;
                        t = r, o = c[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(c)) : s(Object(c)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(c, e));
                    });
                }
                return r;
            }
            function a(e, t, n, o, r, c, i) {
                try {
                    var s = e[c](i), a = s.value;
                } catch (e) {
                    return void n(e);
                }
                s.done ? t(a) : Promise.resolve(a).then(o, r);
            }
            function u(s) {
                return function() {
                    var e = this, i = arguments;
                    return new Promise(function(t, n) {
                        var o = s.apply(e, i);
                        function r(e) {
                            a(o, t, n, r, c, "next", e);
                        }
                        function c(e) {
                            a(o, t, n, r, c, "throw", e);
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
                    return u(c.default.mark(function e() {
                        var t;
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                return t = n.scene ? decodeURIComponent(n.scene) : n.id, o.id = t, o.getSystem(o), 
                                e.next = 5, o.getLoginInfo({
                                    inviteId: n.userId
                                });

                              case 5:
                                o.getData(), "shopGoods" == n.page && (o.isshopGoods = !0), o.isshopGoods && (o.lastPage = o.util.getPage()), 
                                console.log("%c options ", "color: white; background-color: #2274A5", o.isshopGoods, n);

                              case 9:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ t.utilMixins ],
                computed: r({}, (0, e.mapState)([ "carList", "sjxx" ]), {
                    canUseShopGoods: function() {
                        return this.isshopGoods;
                    }
                }),
                methods: r({}, (0, e.mapActions)([ "getSjxx", "cshCar", "addCar", "decCar" ]), {}, (0, 
                e.mapMutations)([ "setCarList" ]), {
                    changeNum: function() {
                        this.co.num = 0;
                        for (var e = this.carList, t = 0, n = e.length; t < n; t++) e[t].goodsId == this.co.goodsId && (this.co.num += e[t].num);
                    },
                    dec: function(e) {
                        this.canUseShopGoods ? this.lastPage.$vm.dec(e) : this.decCar({
                            g: e,
                            outin: this.outin
                        }), this.changeNum();
                    },
                    add: function(t) {
                        var n = this;
                        return u(c.default.mark(function e() {
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    if (!(1 != t.g.isSpec && 1 != t.g.isMaterial && 1 != t.g.isAttribute || t.g.hasOwnProperty("groupId"))) {
                                        e.next = 10;
                                        break;
                                    }
                                    return e.next = 3, n.addCar({
                                        g: t.g,
                                        outin: n.outin
                                    });

                                  case 3:
                                    if (!e.sent.isxg) {
                                        e.next = 6;
                                        break;
                                    }
                                    return e.abrupt("return");

                                  case 6:
                                    n.canUseShopGoods && n.lastPage.$vm.refreshList(), t.e && n.addShopCar(t.e, n.getImgS(t.g.icon)), 
                                    e.next = 12;
                                    break;

                                  case 10:
                                    n.showGg = !0, n.goodsInfo = t.g;

                                  case 12:
                                    n.changeNum();

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    addShopCar: function(e, t) {
                        this.$refs.carAnmation.touchOnGoods(e, t);
                    },
                    celarCar: function(e) {
                        this.canUseShopGoods && this.lastPage.$vm.celarCar(), this.changeNum();
                    },
                    gopay: function() {
                        this.canUseShopGoods ? this.go({
                            t: 4
                        }) : this.go({
                            t: 3,
                            url: "/yb_cy/shop/goods?storeId=".concat(this.co.storeId, "&isgl=1")
                        });
                    },
                    getData: function() {
                        var r = this;
                        return u(c.default.mark(function e() {
                            var t, n, o;
                            return c.default.wrap(function(e) {
                                for (;;) switch (e.prev = e.next) {
                                  case 0:
                                    return e.next = 2, r.util.request({
                                        url: r.api.DishesInfo,
                                        mask: 1,
                                        data: {
                                            id: r.id,
                                            userId: r.uId
                                        }
                                    });

                                  case 2:
                                    return t = e.sent, (n = t.data).num = 0, r.co = n, r.swiper.swiper.children = n.media.map(function(e) {
                                        return {
                                            icon: e
                                        };
                                    }), r.cshCar(n.storeId), r.changeNum(), e.next = 11, (0, i.getDw)({
                                        t: 0
                                    });

                                  case 11:
                                    o = e.sent, r.sjxx.storeInfo || r.getSjxx({
                                        storeId: n.storeId,
                                        item: r.outin,
                                        lat: o.latitude,
                                        lng: o.longitude,
                                        userId: r.user.userId || ""
                                    });

                                  case 13:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                        }))();
                    },
                    itemBoxMoney: function(e, t) {
                        return (e * t).toFixed(1);
                    },
                    preview: function(e, t) {
                        console.log("src: " + e);
                    },
                    navigate: function(e, t) {
                        console.log("href: " + e), n.showModal({
                            content: "点击链接为：" + e,
                            showCancel: !1
                        });
                    }
                }),
                created: function() {
                    return u(c.default.mark(function e() {
                        return c.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                onPageScroll: function(e) {
                    if (!(1 <= this.opcity && 1 <= e.scrollTop / 64)) {
                        var t = e.scrollTop / 64;
                        this.opcity = t, this.iconOpcity = .5 * (1 - t < 0 ? 0 : 1 - t);
                    }
                },
                onShareAppMessage: function() {
                    var e = "yb_cy/shop/goods-dl?id=".concat(this.id, "&userId=").concat(this.uId);
                    return this.util.mpShare({
                        t: this.co.name,
                        i: this.getSingleImg(this.co.media[0]),
                        p: e
                    });
                }
            };
            f.default = d;
        }).call(this, l("543d").default);
    },
    f46d: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("c27a"), t(n("66fd")), e(t(n("184a")).default);
        }).call(this, n("543d").createPage);
    },
    f4ac: function(e, t, n) {
        var o = function() {
            this.$createElement;
            var e = (this._self._c, {
                backgroundColor: "#fff"
            });
            this.$mp.data = Object.assign({}, {
                $root: {
                    a0: e
                }
            });
        }, r = [];
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return r;
        }), n.d(t, "a", function() {});
    }
}, [ [ "f46d", "common/runtime", "common/vendor" ] ] ]);