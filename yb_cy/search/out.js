(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/search/out" ], {
    "3e83": function(t, a, o) {
        (function(r) {
            Object.defineProperty(a, "__esModule", {
                value: !0
            }), a.default = void 0;
            var t, s = (t = o("4795")) && t.__esModule ? t : {
                default: t
            };
            function c(t, e, r, n, s, i, a) {
                try {
                    var o = t[i](a), c = o.value;
                } catch (t) {
                    return void r(t);
                }
                o.done ? e(c) : Promise.resolve(c).then(n, s);
            }
            function i(o) {
                return function() {
                    var t = this, a = arguments;
                    return new Promise(function(e, r) {
                        var n = o.apply(t, a);
                        function s(t) {
                            c(n, e, r, s, i, "next", t);
                        }
                        function i(t) {
                            c(n, e, r, s, i, "throw", t);
                        }
                        s(void 0);
                    });
                };
            }
            function e(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), r.push.apply(r, n);
                }
                return r;
            }
            var n = {
                name: "order-index",
                components: {
                    jzz: function() {
                        o.e("components/common/jzz").then(function() {
                            return resolve(o("707a"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                data: function() {
                    return {
                        history: [],
                        key: "",
                        issearch: !1,
                        dataList: [],
                        isget: !1,
                        mygd: !1,
                        params: {
                            storeId: "",
                            page: 1,
                            size: 10,
                            keywords: "",
                            item: ""
                        }
                    };
                },
                onLoad: function(t) {
                    this.util.setNT(this.sjxx.storeInfo.name), this.params.storeId = this.sjxx.storeInfo.id, 
                    "index" != t.page && "shop" != t.page || (this.params.item = 1), this.query = t, 
                    r.getStorageSync("searchHistory") || r.setStorageSync("searchHistory", []), this.history = r.getStorageSync("searchHistory");
                },
                onReachBottom: function() {
                    !this.mygd && this.isget && (this.isget = !1, this.getList());
                },
                computed: function(s) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? e(Object(i), !0).forEach(function(t) {
                            var e, r, n;
                            e = s, n = i[r = t], r in e ? Object.defineProperty(e, r, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : e[r] = n;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(i)) : e(Object(i)).forEach(function(t) {
                            Object.defineProperty(s, t, Object.getOwnPropertyDescriptor(i, t));
                        });
                    }
                    return s;
                }({}, (0, o("2f62").mapState)([ "sjxx" ])),
                methods: {
                    setKey: function(t) {
                        this.params.keywords = t, this.confirm();
                    },
                    cleanKey: function() {
                        this.params.keywords = "", this.issearch = !1, this.isget = !1, this.mygd = !1, 
                        this.params.page = 1, this.dataList = [];
                    },
                    clear: function() {
                        var e = this;
                        return i(s.default.mark(function t() {
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.prev = 0, t.next = 3, e.util.modal("确认情况搜索历史吗？");

                                  case 3:
                                    e.history = [], t.next = 8;
                                    break;

                                  case 6:
                                    t.prev = 6, t.t0 = t.catch(0);

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t, null, [ [ 0, 6 ] ]);
                        }))();
                    },
                    confirm: function(t) {
                        if (!this.params.keywords) return this.util.message("请输入搜索内容", 3);
                        this.issearch = !0, this.isget = !1, this.mygd = !1, this.params.page = 1, this.dataList = [], 
                        this.getList(), this.setHistory();
                    },
                    getList: function() {
                        var n = this;
                        return i(s.default.mark(function t() {
                            var e, r;
                            return s.default.wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                  case 0:
                                    return t.next = 2, n.util.request({
                                        url: n.api.RecommendDishesList,
                                        method: "POST",
                                        data: n.params
                                    });

                                  case 2:
                                    e = t.sent, r = e.data, n.dataList = n.dataList.concat(r), n.isget = !0, n.mygd = n.params.size > r.length, 
                                    n.params.page++;

                                  case 8:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                        }))();
                    },
                    setHistory: function() {
                        var e = this, t = r.getStorageSync("searchHistory");
                        -1 == t.findIndex(function(t) {
                            return t == e.params.keywords;
                        }) && (t.push(this.params.keywords), r.setStorageSync("searchHistory", t)), this.history = r.getStorageSync("searchHistory");
                    },
                    goDl: function(t) {
                        1 == this.params.item && ("index" == this.query.page ? this.go({
                            t: 1,
                            url: "/yb_cy/shop/goods-dl?id=" + t.id + "&gid=" + t.goodsId
                        }) : this.go({
                            t: 2,
                            url: "/yb_cy/shop/goods-dl?id=" + t.id + "&gid=" + t.goodsId + "&page=shopGoods"
                        }));
                    }
                }
            };
            a.default = n;
        }).call(this, o("543d").default);
    },
    5088: function(t, e, r) {},
    "8de4": function(t, e, r) {
        r.r(e);
        var n = r("3e83"), s = r.n(n);
        for (var i in n) "default" !== i && function(t) {
            r.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = s.a;
    },
    9352: function(t, e, r) {
        var n = function() {
            this.$createElement;
            this._self._c;
        }, s = [];
        r.d(e, "b", function() {
            return n;
        }), r.d(e, "c", function() {
            return s;
        }), r.d(e, "a", function() {});
    },
    a574: function(t, e, r) {
        r.r(e);
        var n = r("9352"), s = r("8de4");
        for (var i in s) "default" !== i && function(t) {
            r.d(e, t, function() {
                return s[t];
            });
        }(i);
        r("d143");
        var a = r("f0c5"), o = Object(a.a)(s.default, n.b, n.c, !1, null, "04cbae0e", null, !1, n.a, void 0);
        e.default = o.exports;
    },
    c6ca: function(t, e, r) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            r("c27a"), e(r("66fd")), t(e(r("a574")).default);
        }).call(this, r("543d").createPage);
    },
    d143: function(t, e, r) {
        var n = r("5088");
        r.n(n).a;
    }
}, [ [ "c6ca", "common/runtime", "common/vendor" ] ] ]);