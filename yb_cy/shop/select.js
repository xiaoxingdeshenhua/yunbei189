(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/select" ], {
    "0ffe": function(t, e, n) {
        n.r(e);
        var o = n("dde6"), a = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = a.a;
    },
    "26f0": function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("c27a"), e(n("66fd")), t(e(n("320c")).default);
        }).call(this, n("543d").createPage);
    },
    "320c": function(t, e, n) {
        n.r(e);
        var o = n("cf84"), a = n("0ffe");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("f825");
        var r = n("f0c5"), c = Object(r.a)(a.default, o.b, o.c, !1, null, "2721f858", null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "9fc6": function(t, e, n) {},
    cf84: function(t, e, n) {
        var o = function() {
            var o = this, t = (o.$createElement, o._self._c, o.__map(o.addList, function(t, e) {
                var n = o.yysj(t);
                return {
                    $orig: o.__get_orig(t),
                    m0: n
                };
            }));
            o.$mp.data = Object.assign({}, {
                $root: {
                    l0: t
                }
            });
        }, a = [];
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    dde6: function(t, a, i) {
        (function(r) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var c = e(i("4795")), t = (i("2f62"), i("c1ef")), n = e(i("6f73"));
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function u(t, e, n, o, a, i, r) {
                try {
                    var c = t[i](r), u = c.value;
                } catch (t) {
                    return void n(t);
                }
                c.done ? e(u) : Promise.resolve(u).then(o, a);
            }
            function s(c) {
                return function() {
                    var t = this, r = arguments;
                    return new Promise(function(e, n) {
                        var o = c.apply(t, r);
                        function a(t) {
                            u(o, e, n, a, i, "next", t);
                        }
                        function i(t) {
                            u(o, e, n, a, i, "throw", t);
                        }
                        a(void 0);
                    });
                };
            }
            var o = {
                components: {
                    navTab: function() {
                        i.e("components/swiper/nav-tab").then(function() {
                            return resolve(i("2040"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    bkB: function() {
                        i.e("components/common/block-b").then(function() {
                            return resolve(i("0c75"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    sqtc: function() {
                        i.e("components/common/sqtc").then(function() {
                            return resolve(i("9ff0"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    TabBar: function() {
                        i.e("components/common/tabbar").then(function() {
                            return resolve(i("f13c"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    jzz: function() {
                        i.e("components/common/jzz").then(function() {
                            return resolve(i("707a"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    MgSwiper: function() {
                        i.e("components/swiper/swiper").then(function() {
                            return resolve(i("04a9"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                data: function() {
                    return {
                        swiper: {
                            class: "",
                            swiper: {
                                children: []
                            },
                            duration: "",
                            mode: "",
                            height: "450",
                            radius: 0,
                            auto: !0,
                            interval: 5
                        },
                        latitude: 39.909,
                        longitude: 116.39742,
                        covers: [],
                        aIdx: 0,
                        tabs: [ {
                            name: "门店选择"
                        }, {
                            name: "常用/收藏"
                        } ],
                        addList: [],
                        showSq: !1,
                        lastPageId: "",
                        height: "",
                        hasTabbar: !1,
                        isget: !1,
                        mygd: !1,
                        params: {
                            lat: "",
                            lng: "",
                            isCollection: "",
                            userId: "",
                            page: 1,
                            size: 200
                        }
                    };
                },
                onLoad: function(n) {
                    var o = this;
                    return s(c.default.mark(function t() {
                        var e;
                        return c.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return o.getSystem().then(function() {
                                    o.swiper.swiper.children = o.system.media.map(function(t) {
                                        return {
                                            icon: t
                                        };
                                    });
                                }), t.next = 3, o.getLoginInfo();

                              case 3:
                                o.params.userId = o.uId, r.getLocation({
                                    type: "gcj02",
                                    success: function(t) {
                                        o.latitude = o.params.lat = t.latitude, o.longitude = o.params.lng = t.longitude, 
                                        1 == o.system.defaultStore && (o.params.size = 1), o.getStoreList(), getApp().globalData.gdlocation = t, 
                                        console.log("当前位置res：", t);
                                    },
                                    fail: function(t) {
                                        o.getStoreList(), o.util.getSetting("userLocation").then(function(t) {
                                            2 == t && (o.showSq = !0);
                                        }), console.log("fail", t);
                                    }
                                }), o.lastPageId = n.id, o.query = n, e = o.util.getSb(), o.height = parseInt(e.windowHeight - 546 * e.rate), 
                                console.log("options", n);

                              case 10:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                },
                mixins: [ t.utilMixins ],
                computed: {},
                methods: {
                    tel: function(t) {
                        this.util.makeTel(t);
                    },
                    dh: function(t) {
                        this.util.ckWz(t);
                    },
                    yysj: function(t) {
                        var e = "";
                        return 1 == t.timeLimit ? e = "24小时营业" : (e = "".concat(n.default.timeToDate(t.times[0][0], "hh:mm"), "-").concat(n.default.timeToDate(t.times[0][1], "hh:mm")), 
                        t.times[1] && (e += " " + "".concat(n.default.timeToDate(t.times[1][0], "hh:mm"), "-").concat(n.default.timeToDate(t.times[1][1], "hh:mm")))), 
                        e;
                    },
                    changeTab: function(t) {
                        this.isget = this.mygd = !1, this.params.isCollection = 1 == t ? 1 : "", this.getStoreList();
                    },
                    getStoreList: function() {
                        var o = this;
                        return s(c.default.mark(function t() {
                            var e, n;
                            return c.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.util.request({
                                        url: o.api.StoreList,
                                        mask: 1,
                                        data: o.params
                                    });

                                  case 2:
                                    e = t.sent, n = e.data, o.covers = n.map(function(t) {
                                        return {
                                            id: t.id,
                                            latitude: t.lat,
                                            longitude: t.lng,
                                            iconPath: o.getSingleImg(t.icon),
                                            width: "25",
                                            height: "25",
                                            callout: {
                                                content: t.name + ">",
                                                color: "#333",
                                                fontSize: 11,
                                                borderRadius: 3,
                                                bgColor: "#fff",
                                                padding: 7,
                                                display: "ALWAYS",
                                                textAlign: "center"
                                            }
                                        };
                                    }), o.addList = n, o.isget = !0, o.mygd = !0;

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    selectStore: function(o, a) {
                        var i = this;
                        return s(c.default.mark(function t() {
                            var e, n;
                            return c.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    if (i.latitude = o.lat, i.longitude = o.lng, i.lastPageId != o.id || 3 == i.system.decorationModel) {
                                        t.next = 4;
                                        break;
                                    }
                                    return t.abrupt("return", r.showModal({
                                        title: "提示",
                                        content: "你选中的是当前所在店铺，是否返回上级页面继续点单",
                                        success: function(t) {
                                            t.confirm && i.go({
                                                t: 4
                                            });
                                        }
                                    }));

                                  case 4:
                                    return e = i.util.getPage(), "", n = 1 != o.isOpen ? "[".concat(o.name, "] 休息中 确认切换到该门店吗？") : 0 == a ? "确认切换到[".concat(o.name, "]门店吗？") : "您当前所在位置距离该门店较远 确认切换到该门店吗？", 
                                    t.prev = 6, t.next = 9, i.util.modal(n);

                                  case 9:
                                    "goods" == i.query.page && 3 != i.system.decorationModel ? (i.go({
                                        t: 4
                                    }), e.$vm.changeStore(o)) : 1 == i.system.jumpModel ? (getApp().globalData.selectStore = o.id, 
                                    i.go({
                                        t: 1,
                                        url: "/yb_cy/shop/goods?storeId=".concat(o.id, "&distance=").concat(o.distance)
                                    })) : "index" == i.query.page ? (i.go({
                                        t: 4
                                    }), e.$vm.changeStore(o)) : i.go({
                                        t: 1,
                                        url: "/yb_cy/shop/index?storeId=".concat(o.id, "&distance=").concat(o.distance, "&notg=1")
                                    }), t.next = 14;
                                    break;

                                  case 12:
                                    t.prev = 12, t.t0 = t.catch(6);

                                  case 14:
                                    console.log(o, a);

                                  case 15:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 6, 12 ] ]);
                        }))();
                    },
                    markertap: function(n) {
                        var t = this.addList.find(function(t, e) {
                            return t.id == n.markerId;
                        }), e = this.addList.findIndex(function(t, e) {
                            return t.id == n.markerId;
                        });
                        this.selectStore(t, e), console.log(n, t, e);
                    },
                    tbrh: function(t) {
                        console.log(t), this.hasTabbar = !0;
                    },
                    scsj: function(e, n) {
                        var o = this;
                        return s(c.default.mark(function t() {
                            return c.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, o.util.request({
                                        url: o.api.SaveCollection,
                                        method: "POST",
                                        mask: 1,
                                        data: {
                                            userId: o.uId,
                                            type: "1",
                                            dataId: e.id
                                        }
                                    });

                                  case 2:
                                    t.sent && (o.addList[n].collection = 1 == o.addList[n].collection ? 2 : 1, o.util.message("操作成功", 1));

                                  case 4:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    }
                },
                created: function() {
                    return s(c.default.mark(function t() {
                        return c.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            };
            a.default = o;
        }).call(this, i("543d").default);
    },
    f825: function(t, e, n) {
        var o = n("9fc6");
        n.n(o).a;
    }
}, [ [ "26f0", "common/runtime", "common/vendor" ] ] ]);