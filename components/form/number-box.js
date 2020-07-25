(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/form/number-box" ], {
    "10b1": function(t, e, n) {},
    "1fb6": function(t, e, n) {
        var u = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return u;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    2695: function(t, e, n) {
        var u = n("10b1");
        n.n(u).a;
    },
    "9a3e": function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var u = {
            name: "UniNumberBox",
            props: {
                value: {
                    type: [ Number, String ],
                    default: 1
                },
                min: {
                    type: Number,
                    default: 0
                },
                max: {
                    type: Number,
                    default: 1
                },
                step: {
                    type: Number,
                    default: 1
                },
                disabled: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    inputValue: 0
                };
            },
            watch: {
                value: function(t) {
                    this.inputValue = +t;
                },
                inputValue: function(t, e) {
                    +t != +e && this.$emit("change", t);
                }
            },
            created: function() {
                this.inputValue = +this.value;
            },
            methods: {
                _calcValue: function(t) {
                    if (!this.disabled) {
                        var e = this._getDecimalScale(), n = this.inputValue * e, u = this.step * e;
                        "minus" === t ? n -= u : "plus" === t && (n += u), n < this.min || n > this.max || (this.inputValue = n / e);
                    }
                },
                _getDecimalScale: function() {
                    var t = 1;
                    return ~~this.step !== this.step && (t = Math.pow(10, (this.step + "").split(".")[1].length)), 
                    t;
                },
                _onBlur: function(t) {
                    var e = t.detail.value;
                    e ? ((e = +e) > this.max ? e = this.max : e < this.min && (e = this.min), this.inputValue = e) : this.inputValue = 0;
                }
            }
        };
        e.default = u;
    },
    "9a6c": function(t, e, n) {
        n.r(e);
        var u = n("1fb6"), a = n("f87d");
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        n("2695");
        var o = n("f0c5"), c = Object(o.a)(a.default, u.b, u.c, !1, null, null, null, !1, u.a, void 0);
        e.default = c.exports;
    },
    f87d: function(t, e, n) {
        n.r(e);
        var u = n("9a3e"), a = n.n(u);
        for (var i in u) "default" !== i && function(t) {
            n.d(e, t, function() {
                return u[t];
            });
        }(i);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/form/number-box-create-component", {
    "components/form/number-box-create-component": function(t, e, n) {
        n("543d").createComponent(n("9a6c"));
    }
}, [ [ "components/form/number-box-create-component" ] ] ]);