(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/goods-dl" ], {
    "184a": function(e, t, n) {
        n.r(t);
        var o = n("bcd2"), r = n("426d");
        for (var i in r) "default" !== i && function(e) {
            n.d(t, e, function() {
                return r[e];
            });
        }(i);
        var c = n("f0c5"), a = Object(c.a)(r.default, o.b, o.c, !1, null, "88a44424", null, !1, o.a, void 0);
        t.default = a.exports;
    },
    "426d": function(e, t, n) {
        n.r(t);
        var o = n("6d0c"), r = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = r.a;
    },
    "6d0c": function(e, f, l) {
        (function(n) {
            Object.defineProperty(f, "__esModule", {
                value: !0
            }), f.default = void 0;
            var i = o(l("4795")), e = l("2f62"), t = (o(l("6f73")), l("c1ef")), c = l("1127");
            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            function a(t, e) {
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
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(i), !0).forEach(function(e) {
                        var t, n, o;
                        t = r, o = i[n = e], n in t ? Object.defineProperty(t, n, {
                            value: o,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = o;
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function(e) {
                        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e));
                    });
                }
                return r;
            }
            function s(e, t, n, o, r, i, c) {
                try {
                    var a = e[i](c), s = a.value;
                } catch (e) {
                    return void n(e);
                }
                a.done ? t(s) : Promise.resolve(s).then(o, r);
            }
            function u(a) {
                return function() {
                    var e = this, c = arguments;
                    return new Promise(function(t, n) {
                        var o = a.apply(e, c);
                        function r(e) {
                            s(o, t, n, r, i, "next", e);
                        }
                        function i(e) {
                            s(o, t, n, r, i, "throw", e);
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
                    return u(i.default.mark(function e() {
                        var t;
                        return i.default.wrap(function(e) {
                            for (;;) switch (e.prev = e.next) {
                              case 0:
                                if (t = n.scene ? decodeURIComponent(n.scene) : n.id, o.id = t, o.getSystem(o), 
                                o.isShare = 1 == getCurrentPages().length, !o.isShare) {
                                    e.next = 7;
                                    break;
                                }
                                return e.next = 7, o.getLoginInfo({
                                    inviteId: n.userId
                                });

                              case 7:
                                o.getData(), o.isShare || (o.lastPage = o.util.getPage()), "shopGoods" == n.page && (o.isshopGoods = !0), 
                                console.log("%c options ", "color: white; background-color: #2274A5", o.isShare, o.isshopGoods, n);

                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                    }))();
                },
                mixins: [ t.utilMixins ],
                computed: r({}, (0, e.mapState)([ "carList", "sjxx" ]), {
                    canUseShopGoods: function() {
                        return !this.isShare && this.isshopGoods;
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
                        return u(i.default.mark(function e() {
                            return i.default.wrap(function(e) {
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
                            t: this.isShare ? 3 : 2,
                            url: "/yb_cy/shop/goods?storeId=".concat(this.co.storeId, "&isgl=1")
                        });
                    },
                    getData: function() {
                        var r = this;
                        return u(i.default.mark(function e() {
                            var t, n, o;
                            return i.default.wrap(function(e) {
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
                                    return t = e.sent, (n = t.data).num = 0, r.co = n, r.util.setNT(n.name), r.swiper.swiper.children = n.media.map(function(e) {
                                        return {
                                            icon: e
                                        };
                                    }), r.cshCar(n.storeId), r.changeNum(), e.next = 12, (0, c.getDw)({
                                        t: 0
                                    });

                                  case 12:
                                    o = e.sent, r.isShare && r.getSjxx({
                                        storeId: n.storeId,
                                        item: r.outin,
                                        lat: o.latitude,
                                        lng: o.longitude,
                                        userId: r.user.userId || ""
                                    });

                                  case 14:
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
                    return u(i.default.mark(function e() {
                        return i.default.wrap(function(e) {
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
    bcd2: function(e, t, n) {
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
    }
}, [ [ "f46d", "common/runtime", "common/vendor" ] ] ]);