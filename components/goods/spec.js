(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/goods/spec" ], {
    2287: function(t, n, o) {
        var e = o("6cec");
        o.n(e).a;
    },
    "6cec": function(t, n, o) {},
    cf19: function(t, n, o) {
        o.r(n);
        var e = o("fc85"), a = o.n(e);
        for (var r in e) "default" !== r && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(r);
        n.default = a.a;
    },
    fc85: function(t, n, o) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e, a = (e = o("4795")) && e.__esModule ? e : {
            default: e
        };
        function s(t, n, o, e, a, r, i) {
            try {
                var c = t[r](i), s = c.value;
            } catch (t) {
                return void o(t);
            }
            c.done ? n(s) : Promise.resolve(s).then(e, a);
        }
        var r = {
            name: "popup",
            components: {
                mgModal: function() {
                    o.e("components/common/modal").then(function() {
                        return resolve(o("ee48"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            props: {
                co: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                cname: {
                    type: String,
                    default: ""
                },
                value: {
                    type: Boolean,
                    default: !1
                },
                width: {
                    type: String,
                    default: "70%"
                },
                zindex: {
                    type: Number,
                    default: 999
                },
                outin: {
                    type: String,
                    default: "1"
                },
                storeid: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    loading: !1,
                    goodsInfo: {}
                };
            },
            methods: {
                clickSpec: function(t, n) {
                    var o = this.goodsInfo.spec;
                    for (var e in o[t].specVal) o[t].specVal[e].a = e == n ? 1 : 0;
                },
                clickAttribute: function(t, n) {
                    var o = this.goodsInfo.attribute;
                    for (var e in o[t].value) o[t].value[e].a = e == n ? 1 : 0;
                },
                clickMaterial: function(t) {
                    this.goodsInfo.material, this.$set(this.goodsInfo.material[t], "a", 1 == this.goodsInfo.material[t].a ? 0 : 1);
                },
                jrgwc: function(t) {
                    var n = Object.assign({}, this.xzSpecInfo), o = {
                        jlmoney: this.xzJlInfo.money,
                        material: this.xzJlInfo.arr.map(function(t) {
                            return {
                                materialId: t.id,
                                num: 1
                            };
                        }),
                        jldata: "",
                        jlids: ""
                    }, e = {
                        sxdata: ""
                    };
                    n.groupId = n.id || "", delete n.id, e.sxdata = this.xzSxInfo.arr.map(function(t) {
                        return t.value;
                    }).toString(), this.xzJlInfo.arr.forEach(function(t) {
                        o.jldata += t.name + ",", o.jlids += t.id + ",";
                    }), o.jldata = o.jldata.substr(0, o.jldata.length - 1), o.jlids = o.jlids.substr(0, o.jlids.length - 1);
                    var a = Object.assign({}, this.co, n, e, o);
                    this.$emit("add", {
                        g: a,
                        e: t
                    }), this.showGg = !1;
                }
            },
            computed: {
                showGg: {
                    get: function() {
                        return this.value;
                    },
                    set: function(t) {
                        this.$emit("input", t);
                    }
                },
                xzSpecInfo: function() {
                    if (1 == this.goodsInfo.isSpec && this.goodsInfo.spec.length) {
                        var t = this.goodsInfo.spec, n = [];
                        for (var o in t) for (var e in t[o].specVal) if (t[o].specVal[e].a) {
                            n.push(t[o].specVal[e].name);
                            break;
                        }
                        return this.goodsInfo.specGroup.find(function(t) {
                            return t.data == n.toString();
                        });
                    }
                    return {};
                },
                xzSxInfo: function() {
                    var t = {
                        arr: []
                    };
                    if (1 == this.goodsInfo.isAttribute && this.goodsInfo.attribute.length) {
                        var n = this.goodsInfo.attribute, o = [];
                        for (var e in n) for (var a in n[e].value) if (n[e].value[a].a) {
                            o.push(n[e].value[a]);
                            break;
                        }
                        t.arr = o;
                    }
                    return t;
                },
                xzJlInfo: function() {
                    var n = this, o = {
                        money: 0,
                        arr: []
                    };
                    if (1 == this.goodsInfo.isMaterial && this.goodsInfo.material.length) {
                        var e = [];
                        this.goodsInfo.material.forEach(function(t) {
                            t.a && (o.money += 1 == n.outin ? +t.outPrice : +t.inPrice, e.push(t));
                        }), o.money = +o.money.toFixed(2), o.arr = e;
                    }
                    return o;
                }
            },
            watch: {
                co: function(t) {
                    var c, e = this;
                    return c = a.default.mark(function t() {
                        var n, o;
                        return a.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return e.goodsInfo = {}, t.next = 3, e.util.request({
                                    url: e.api.GoodSpec,
                                    mask: 1,
                                    data: {
                                        goodsId: e.co.goodsId,
                                        storeId: e.storeid,
                                        userId: e.uId
                                    }
                                });

                              case 3:
                                n = t.sent, o = n.data, 1 == e.co.isSpec && o.spec && o.spec.forEach(function(t) {
                                    t.specVal = t.specVal.map(function(t, n) {
                                        return {
                                            name: t,
                                            a: 0 == n ? 1 : 0
                                        };
                                    });
                                }), 1 == e.co.isAttribute && o.attribute && o.attribute.forEach(function(t) {
                                    t.value.forEach(function(t, n) {
                                        t.a = 0 == n ? 1 : 0;
                                    });
                                }), e.goodsInfo = Object.assign({}, e.co, o);

                              case 8:
                              case "end":
                                return t.stop();
                            }
                        }, t);
                    }), function() {
                        var t = this, i = arguments;
                        return new Promise(function(n, o) {
                            var e = c.apply(t, i);
                            function a(t) {
                                s(e, n, o, a, r, "next", t);
                            }
                            function r(t) {
                                s(e, n, o, a, r, "throw", t);
                            }
                            a(void 0);
                        });
                    }();
                }
            }
        };
        n.default = r;
    },
    fcb5: function(t, n, o) {
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c, n._isMounted || (n.e0 = function(t) {
                n.showGg = !1;
            });
        }, a = [];
        o.d(n, "b", function() {
            return e;
        }), o.d(n, "c", function() {
            return a;
        }), o.d(n, "a", function() {});
    },
    fed6: function(t, n, o) {
        o.r(n);
        var e = o("fcb5"), a = o("cf19");
        for (var r in a) "default" !== r && function(t) {
            o.d(n, t, function() {
                return a[t];
            });
        }(r);
        o("2287");
        var i = o("f0c5"), c = Object(i.a)(a.default, e.b, e.c, !1, null, "49a7498e", null, !1, e.a, void 0);
        n.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/goods/spec-create-component", {
    "components/goods/spec-create-component": function(t, n, o) {
        o("543d").createComponent(o("fed6"));
    }
}, [ [ "components/goods/spec-create-component" ] ] ]);