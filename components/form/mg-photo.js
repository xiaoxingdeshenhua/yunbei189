(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/form/mg-photo" ], {
    3886: function(t, e, n) {
        n.r(e);
        var r = n("c092"), a = n("38c7");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("f040");
        var i = n("f0c5"), c = Object(i.a)(a.default, r.b, r.c, !1, null, "29438176", null, !1, r.a, void 0);
        e.default = c.exports;
    },
    "38c7": function(t, e, n) {
        n.r(e);
        var r = n("cfab"), a = n.n(r);
        for (var o in r) "default" !== o && function(t) {
            n.d(e, t, function() {
                return r[t];
            });
        }(o);
        e.default = a.a;
    },
    "67ff": function(t, e, n) {},
    c092: function(t, e, n) {
        var r = function() {
            this.$createElement;
            this._self._c;
        }, a = [];
        n.d(e, "b", function() {
            return r;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
    },
    cfab: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var r, u = (r = n("4795")) && r.__esModule ? r : {
            default: r
        }, l = n("1127");
        function s(t) {
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (t = function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0;
                    }
                }(t))) {
                    var e = 0, n = function() {};
                    return {
                        s: n,
                        n: function() {
                            return e >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[e++]
                            };
                        },
                        e: function(t) {
                            throw t;
                        },
                        f: n
                    };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            var r, a, o = !0, i = !1;
            return {
                s: function() {
                    r = t[Symbol.iterator]();
                },
                n: function() {
                    var t = r.next();
                    return o = t.done, t;
                },
                e: function(t) {
                    i = !0, a = t;
                },
                f: function() {
                    try {
                        o || null == r.return || r.return();
                    } finally {
                        if (i) throw a;
                    }
                }
            };
        }
        function c(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
            return r;
        }
        function p(t, e, n, r, a, o, i) {
            try {
                var c = t[o](i), f = c.value;
            } catch (t) {
                return void n(t);
            }
            c.done ? e(f) : Promise.resolve(f).then(r, a);
        }
        var a = {
            components: {
                MgCell: function() {
                    n.e("components/common/mg-cell").then(function() {
                        return resolve(n("ef6e"));
                    }.bind(null, n)).catch(n.oe);
                }
            },
            props: {
                cname: "",
                max: {
                    type: String,
                    default: "9"
                },
                fileList: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                pt: {
                    type: String,
                    default: ""
                },
                mark: {
                    type: [ String, Number ],
                    default: ""
                },
                pkey: {
                    type: String,
                    default: ""
                },
                icon: {
                    type: String,
                    default: "iconjia"
                },
                title: "",
                ftitle: "",
                w: ""
            },
            data: function() {
                return {
                    filePaths: [],
                    files: []
                };
            },
            computed: {},
            watch: {
                fileList: {
                    handler: function(t) {
                        this.filePaths = Object.assign([], t.map(function(t) {
                            return {
                                url: t
                            };
                        })), t.length && this.$emit("change-img", {
                            p: this.filePaths,
                            mark: this.mark,
                            pkey: this.pkey
                        });
                    },
                    immediate: !0
                }
            },
            methods: {
                add: function() {
                    var c, f = this;
                    return c = u.default.mark(function t() {
                        var e, n, r, a, o, i, c;
                        return u.default.wrap(function(t) {
                            for (;;) switch (t.prev = t.next) {
                              case 0:
                                return t.next = 2, (0, l.choosePhoto)({
                                    num: f.max - f.filePaths.length
                                });

                              case 2:
                                if (e = t.sent, "weChat" == f.api.platform) {
                                    t.next = 8;
                                    break;
                                }
                                f.filePaths = f.filePaths.concat(e.map(function(t) {
                                    return {
                                        tmp: 1,
                                        url: t
                                    };
                                })), f.$emit("change-img", {
                                    p: f.filePaths,
                                    mark: f.mark,
                                    pkey: f.pkey
                                }), t.next = 32;
                                break;

                              case 8:
                                n = [], r = s(e), t.prev = 10, r.s();

                              case 12:
                                if ((a = r.n()).done) {
                                    t.next = 21;
                                    break;
                                }
                                return o = a.value, t.next = 16, (0, l.uploadImage)(o);

                              case 16:
                                i = t.sent, c = i.serverId, n.push(c);

                              case 19:
                                t.next = 12;
                                break;

                              case 21:
                                t.next = 26;
                                break;

                              case 23:
                                t.prev = 23, t.t0 = t.catch(10), r.e(t.t0);

                              case 26:
                                return t.prev = 26, r.f(), t.finish(26);

                              case 29:
                                f.filePaths = f.filePaths.concat(e.map(function(t) {
                                    return {
                                        tmp: 1,
                                        url: t
                                    };
                                })), f.files = f.files.concat(n.map(function(t) {
                                    return {
                                        tmp: 1,
                                        url: t
                                    };
                                })), f.$emit("change-img", {
                                    p: f.files,
                                    mark: f.mark,
                                    pkey: f.pkey
                                });

                              case 32:
                                console.log(f.api.platform, e);

                              case 33:
                              case "end":
                                return t.stop();
                            }
                        }, t, null, [ [ 10, 23, 26, 29 ] ]);
                    }), function() {
                        var t = this, i = arguments;
                        return new Promise(function(e, n) {
                            var r = c.apply(t, i);
                            function a(t) {
                                p(r, e, n, a, o, "next", t);
                            }
                            function o(t) {
                                p(r, e, n, a, o, "throw", t);
                            }
                            a(void 0);
                        });
                    }();
                },
                deletePic: function(t) {
                    this.filePaths.splice(t, 1), "weChat" != this.api.platform ? this.$emit("change-img", {
                        p: this.filePaths,
                        mark: this.mark,
                        pkey: this.pkey
                    }) : (this.files.splice(t, 1), this.$emit("change-img", {
                        p: this.files,
                        mark: this.mark,
                        pkey: this.pkey
                    }));
                }
            }
        };
        e.default = a;
    },
    f040: function(t, e, n) {
        var r = n("67ff");
        n.n(r).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/form/mg-photo-create-component", {
    "components/form/mg-photo-create-component": function(t, e, n) {
        n("543d").createComponent(n("3886"));
    }
}, [ [ "components/form/mg-photo-create-component" ] ] ]);