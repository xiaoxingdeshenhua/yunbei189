(global.webpackJsonp = global.webpackJsonp || []).push([ [ "yb_cy/shop/sptj" ], {
    "0229": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("c27a"), n(e("66fd")), t(n(e("4675")).default);
        }).call(this, e("543d").createPage);
    },
    "0ea3": function(t, n, e) {
        var o = e("effb");
        e.n(o).a;
    },
    4675: function(t, n, e) {
        e.r(n);
        var o = e("783f"), a = e("9d81");
        for (var r in a) "default" !== r && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(r);
        e("0ea3");
        var c = e("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, "408ec0ea", null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "783f": function(t, n, e) {
        var o = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
    },
    "9d81": function(t, n, e) {
        e.r(n);
        var o = e("c37f"), a = e.n(o);
        for (var r in o) "default" !== r && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(r);
        n.default = a.a;
    },
    c37f: function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o, a = (o = e("4795")) && o.__esModule ? o : {
            default: o
        };
        function i(t, n, e, o, a, r, c) {
            try {
                var u = t[r](c), i = u.value;
            } catch (t) {
                return void e(t);
            }
            u.done ? n(i) : Promise.resolve(i).then(o, a);
        }
        function r(u) {
            return function() {
                var t = this, c = arguments;
                return new Promise(function(n, e) {
                    var o = u.apply(t, c);
                    function a(t) {
                        i(o, n, e, a, r, "next", t);
                    }
                    function r(t) {
                        i(o, n, e, a, r, "throw", t);
                    }
                    a(void 0);
                });
            };
        }
        e("2f62");
        var c = {
            name: "bzf",
            components: {
                MgCell: function() {
                    e.e("components/common/mg-cell").then(function() {
                        return resolve(e("ef6e"));
                    }.bind(null, e)).catch(e.oe);
                },
                jzz: function() {
                    e.e("components/common/jzz").then(function() {
                        return resolve(e("707a"));
                    }.bind(null, e)).catch(e.oe);
                },
                tjGoods: function() {
                    e.e("components/goods/tj-goods").then(function() {
                        return resolve(e("e548"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    dataList: [],
                    isget: !1,
                    mygd: !1,
                    params: {
                        storeId: "",
                        page: 1,
                        size: 10
                    },
                    r: ""
                };
            },
            onLoad: function(n) {
                var e = this;
                return r(a.default.mark(function t() {
                    return a.default.wrap(function(t) {
                        for (;;) switch (t.prev = t.next) {
                          case 0:
                            e.params.storeId = n.id, e.getList(), e.r = n.r, e.util.setNT(n.t), console.log(n);

                          case 5:
                          case "end":
                            return t.stop();
                        }
                    }, t);
                }))();
            },
            onReachBottom: function() {
                !this.mygd && this.isget && (this.isget = !1, this.getList()), console.log("onReachBottom");
            },
            computed: {},
            methods: {
                getList: function() {
                    var o = this;
                    return r(a.default.mark(function t() {
                        var n, e;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, o.util.request({
                                    url: o.api.RecommendDishesList,
                                    data: o.params
                                });

                              case 2:
                                n = t.sent, e = n.data, o.dataList = o.dataList.concat(e), o.isget = !0, o.mygd = o.params.size > e.length, 
                                o.params.page++;

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }))();
                }
            }
        };
        n.default = c;
    },
    effb: function(t, n, e) {}
}, [ [ "0229", "common/runtime", "common/vendor" ] ] ]);