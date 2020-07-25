(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/mg-coupon" ], {
    "42c7": function(t, e, o) {
        o.r(e);
        var n = o("d30d"), c = o.n(n);
        for (var i in n) "default" !== i && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = c.a;
    },
    "7e6b": function(t, e, o) {
        var n = o("b708");
        o.n(n).a;
    },
    "818b": function(t, e, o) {
        var n = function() {
            var e = this, t = (e.$createElement, e._self._c, Number(e.co.money)), o = e.useTypeName(e.co.activityType), n = e.useTypeName(e.co.activityType), c = Number(e.co.money), i = e.useTypeName(e.co.activityType), a = Number(e.co.money), u = e.useTypeName(e.co.activityType), s = Number(e.co.money), p = e.useTypeName(e.co.activityType), m = e.useTypeName(e.co.activityType), r = Number(e.co.money), y = Number(e.co.money), f = e.useTypeName(e.co.activityType), d = e.useTypeName(e.co.activityType);
            e._isMounted || (e.e0 = function(t) {
                t.stopPropagation(), e.active = !e.active;
            }, e.e1 = function(t) {
                1 == e.co.isUse ? e.$emit("change", e.co.id) : e.goTo();
            }, e.e2 = function(t) {
                t.stopPropagation(), e.active = !e.active;
            }), e.$mp.data = Object.assign({}, {
                $root: {
                    m0: t,
                    m1: o,
                    m2: n,
                    m3: c,
                    m4: i,
                    m5: a,
                    m6: u,
                    m7: s,
                    m8: p,
                    m9: m,
                    m10: r,
                    m11: y,
                    m12: f,
                    m13: d
                }
            });
        }, c = [];
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return c;
        }), o.d(e, "a", function() {});
    },
    ac48: function(t, e, o) {
        o.r(e);
        var n = o("818b"), c = o("42c7");
        for (var i in c) "default" !== i && function(t) {
            o.d(e, t, function() {
                return c[t];
            });
        }(i);
        o("7e6b");
        var a = o("f0c5"), u = Object(a.a)(c.default, n.b, n.c, !1, null, "63f2b094", null, !1, n.a, void 0);
        e.default = u.exports;
    },
    b708: function(t, e, o) {},
    d30d: function(t, e, o) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, o("2f62");
        var n = o("c1ef"), c = {
            name: "searchBox",
            components: {
                mgRtext: function() {
                    Promise.all([ o.e("common/vendor"), o.e("components/swiper/rich-text") ]).then(function() {
                        return resolve(o("7cad"));
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
                gttype: {
                    type: String,
                    default: ""
                },
                ptype: {
                    type: String,
                    default: "1"
                },
                ttype: {
                    type: String,
                    default: "1"
                },
                cname: {
                    type: String,
                    default: ""
                },
                u: {
                    type: String,
                    default: "px"
                },
                color: {
                    type: String,
                    default: ""
                }
            },
            data: function() {
                return {
                    active: !1,
                    disabled: !1
                };
            },
            mixins: [ n.utilMixins ],
            computed: {
                typeName: function() {
                    if (1 != this.gttype) {
                        var t, e = "";
                        return 1 == this.ttype ? 1 == this.co.isReceive ? (t = "立即领取", 6 != this.ptype ? (this.ptype, 
                        e = "#ff3a48") : e = "#EAC28F") : (t = "已领取", 6 == this.ptype && (t = "立即查看", e = this.color)) : 1 == this.co.state ? (t = "立即使用", 
                        e = "#ff3a48") : 2 == this.co.state ? t = "已使用" : 3 == this.co.state && (t = "已失效"), 
                        {
                            t: t,
                            c: e
                        };
                    }
                },
                fullName: function() {
                    return 2 == this.co.isLimit ? "满".concat(Number(this.co.full), "元可用") : "无门槛";
                },
                sycjName: function() {
                    if (this.co.item) {
                        var t = this.co.item, e = [];
                        return -1 < t.indexOf(1) && e.push("外卖可用"), -1 < t.indexOf(2) && e.push("堂食可用"), 
                        -1 < t.indexOf(3) && e.push("当面付可用"), e.toString();
                    }
                },
                dateText: function() {
                    return 1 == this.ptype && 2 == this.ttype ? "有效期至".concat(this.timeToDate(this.co.endAt, "yyyy-MM-dd")) : 2 == this.co.timeType && this.co.day ? "领取后".concat(this.co.day, "日内有效") : "有效期至".concat(this.timeToDate(this.co.endAt, "yyyy-MM-dd"));
                }
            },
            methods: {
                useTypeName: function(t) {
                    var e;
                    switch (+t) {
                      case 1:
                        e = "全门店通用";
                        break;

                      case 2:
                      case 6:
                        e = "指定商户可用";
                        break;

                      case 7:
                        e = "指定商品可用";
                        break;

                      case 8:
                        e = "指定分类可用";
                    }
                    return e;
                },
                goTo: function() {
                    this.go({
                        t: 1,
                        url: "/yb_cy/my/coupon/coupon-dl?id=" + (this.co.couponId ? this.co.couponId : this.co.id)
                    });
                },
                btnClick: function() {
                    var t = this;
                    this.typeName.c && (this.disabled = !0, setTimeout(function() {
                        t.disabled = !1;
                    }, 1e3), this.$emit("btntap"));
                }
            }
        };
        e.default = c;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/mg-coupon-create-component", {
    "components/common/mg-coupon-create-component": function(t, e, o) {
        o("543d").createComponent(o("ac48"));
    }
}, [ [ "components/common/mg-coupon-create-component" ] ] ]);