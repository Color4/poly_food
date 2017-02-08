! function t(e, n, r) {
    function i(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var u = "function" == typeof require && require;
                if (!a && u) return u(s, !0);
                if (o) return o(s, !0);
                var c = new Error("Cannot find module '" + s + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            var l = n[s] = {
                exports: {}
            };
            e[s][0].call(l.exports, function(t) {
                var n = e[s][1][t];
                return i(n ? n : t)
            }, l, l.exports, t, e, n, r)
        }
        return n[s].exports
    }
    for (var o = "function" == typeof require && require, s = 0; s < r.length; s++) i(r[s]);
    return i
}({
    1: [function(t, e, n) {
        "use strict";
        t("./src/lib/polyfills");
        var r = t("./src/setup"),
            i = t("./src/options"),
            o = t("./src/api"),
            s = t("./src/lib/types"),
            a = function(t) {
                t = i(t);
                var e = {
                        options: t
                    },
                    n = o(e);
                e.api = n;
                var a = r(e);
                return n.addTo = a.addTo, n.remove = a.remove, n.types = s, n.options = t, n
            };
        e.exports = a, window.mapboxgl = window.mapboxgl || {}, window.mapboxgl.Draw = a
    }, {
        "./src/api": 13,
        "./src/lib/polyfills": 26,
        "./src/lib/types": 30,
        "./src/options": 37,
        "./src/setup": 39
    }],
    2: [function(t, e, n) {}, {}],
    3: [function(t, e, n) {
        (function(t) {
            function e(t, e) {
                for (var n = 0, r = t.length - 1; r >= 0; r--) {
                    var i = t[r];
                    "." === i ? t.splice(r, 1) : ".." === i ? (t.splice(r, 1), n++) : n && (t.splice(r, 1), n--)
                }
                if (e)
                    for (; n--; n) t.unshift("..");
                return t
            }

            function r(t, e) {
                if (t.filter) return t.filter(e);
                for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t) && n.push(t[r]);
                return n
            }
            var i = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                o = function(t) {
                    return i.exec(t).slice(1)
                };
            n.resolve = function() {
                for (var n = "", i = !1, o = arguments.length - 1; o >= -1 && !i; o--) {
                    var s = o >= 0 ? arguments[o] : t.cwd();
                    if ("string" != typeof s) throw new TypeError("Arguments to path.resolve must be strings");
                    s && (n = s + "/" + n, i = "/" === s.charAt(0))
                }
                return n = e(r(n.split("/"), function(t) {
                    return !!t
                }), !i).join("/"), (i ? "/" : "") + n || "."
            }, n.normalize = function(t) {
                var i = n.isAbsolute(t),
                    o = "/" === s(t, -1);
                return t = e(r(t.split("/"), function(t) {
                    return !!t
                }), !i).join("/"), t || i || (t = "."), t && o && (t += "/"), (i ? "/" : "") + t
            }, n.isAbsolute = function(t) {
                return "/" === t.charAt(0)
            }, n.join = function() {
                var t = Array.prototype.slice.call(arguments, 0);
                return n.normalize(r(t, function(t, e) {
                    if ("string" != typeof t) throw new TypeError("Arguments to path.join must be strings");
                    return t
                }).join("/"))
            }, n.relative = function(t, e) {
                function r(t) {
                    for (var e = 0; e < t.length && "" === t[e]; e++);
                    for (var n = t.length - 1; n >= 0 && "" === t[n]; n--);
                    return e > n ? [] : t.slice(e, n - e + 1)
                }
                t = n.resolve(t).substr(1), e = n.resolve(e).substr(1);
                for (var i = r(t.split("/")), o = r(e.split("/")), s = Math.min(i.length, o.length), a = s, u = 0; s > u; u++)
                    if (i[u] !== o[u]) {
                        a = u;
                        break
                    }
                for (var c = [], u = a; u < i.length; u++) c.push("..");
                return c = c.concat(o.slice(a)), c.join("/")
            }, n.sep = "/", n.delimiter = ":", n.dirname = function(t) {
                var e = o(t),
                    n = e[0],
                    r = e[1];
                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
            }, n.basename = function(t, e) {
                var n = o(t)[2];
                return e && n.substr(-1 * e.length) === e && (n = n.substr(0, n.length - e.length)), n
            }, n.extname = function(t) {
                return o(t)[3]
            };
            var s = "b" === "ab".substr(-1) ? function(t, e, n) {
                return t.substr(e, n)
            } : function(t, e, n) {
                return 0 > e && (e = t.length + e), t.substr(e, n)
            }
        }).call(this, t("_process"))
    }, {
        _process: 4
    }],
    4: [function(t, e, n) {
        function r() {
            l && a && (l = !1, a.length ? c = a.concat(c) : p = -1, c.length && i())
        }

        function i() {
            if (!l) {
                var t = setTimeout(r);
                l = !0;
                for (var e = c.length; e;) {
                    for (a = c, c = []; ++p < e;) a && a[p].run();
                    p = -1, e = c.length
                }
                a = null, l = !1, clearTimeout(t)
            }
        }

        function o(t, e) {
            this.fun = t, this.array = e
        }

        function s() {}
        var a, u = e.exports = {},
            c = [],
            l = !1,
            p = -1;
        u.nextTick = function(t) {
            var e = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
            c.push(new o(t, e)), 1 !== c.length || l || setTimeout(i, 0)
        }, o.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, u.title = "browser", u.browser = !0, u.env = {}, u.argv = [], u.version = "", u.versions = {}, u.on = s, u.addListener = s, u.once = s, u.off = s, u.removeListener = s, u.removeAllListeners = s, u.emit = s, u.binding = function(t) {
            throw new Error("process.binding is not supported")
        }, u.cwd = function() {
            return "/"
        }, u.chdir = function(t) {
            throw new Error("process.chdir is not supported")
        }, u.umask = function() {
            return 0
        }
    }, {}],
    5: [function(t, e, n) {
        function r(t, e) {
            var n, r = [];
            if ("object" == typeof t) n = t;
            else {
                if ("string" != typeof t) return [{
                    message: "Expected string or object as input",
                    line: 0
                }];
                try {
                    n = i.parse(t)
                } catch (s) {
                    var a = s.message.match(/line (\d+)/),
                        u = parseInt(a[1], 10);
                    return [{
                        line: u - 1,
                        message: s.message,
                        error: s
                    }]
                }
            }
            return r = r.concat(o.hint(n, e))
        }
        var i = t("jsonlint-lines"),
            o = t("./object");
        e.exports.hint = r
    }, {
        "./object": 7,
        "jsonlint-lines": 6
    }],
    6: [function(t, e, n) {
        (function(r) {
            var i = function() {
                function t() {
                    this.yy = {}
                }
                var e = function(t, e, n, r) {
                        for (n = n || {}, r = t.length; r--; n[t[r]] = e);
                        return n
                    },
                    n = [1, 12],
                    r = [1, 13],
                    i = [1, 9],
                    o = [1, 10],
                    s = [1, 11],
                    a = [1, 14],
                    u = [1, 15],
                    c = [14, 18, 22, 24],
                    l = [18, 22],
                    p = [22, 24],
                    f = {
                        trace: function() {},
                        yy: {},
                        symbols_: {
                            error: 2,
                            JSONString: 3,
                            STRING: 4,
                            JSONNumber: 5,
                            NUMBER: 6,
                            JSONNullLiteral: 7,
                            NULL: 8,
                            JSONBooleanLiteral: 9,
                            TRUE: 10,
                            FALSE: 11,
                            JSONText: 12,
                            JSONValue: 13,
                            EOF: 14,
                            JSONObject: 15,
                            JSONArray: 16,
                            "{": 17,
                            "}": 18,
                            JSONMemberList: 19,
                            JSONMember: 20,
                            ":": 21,
                            ",": 22,
                            "[": 23,
                            "]": 24,
                            JSONElementList: 25,
                            $accept: 0,
                            $end: 1
                        },
                        terminals_: {
                            2: "error",
                            4: "STRING",
                            6: "NUMBER",
                            8: "NULL",
                            10: "TRUE",
                            11: "FALSE",
                            14: "EOF",
                            17: "{",
                            18: "}",
                            21: ":",
                            22: ",",
                            23: "[",
                            24: "]"
                        },
                        productions_: [0, [3, 1],
                            [5, 1],
                            [7, 1],
                            [9, 1],
                            [9, 1],
                            [12, 2],
                            [13, 1],
                            [13, 1],
                            [13, 1],
                            [13, 1],
                            [13, 1],
                            [13, 1],
                            [15, 2],
                            [15, 3],
                            [20, 3],
                            [19, 1],
                            [19, 3],
                            [16, 2],
                            [16, 3],
                            [25, 1],
                            [25, 3]
                        ],
                        performAction: function(t, e, n, r, i, o, s) {
                            var a = o.length - 1;
                            switch (i) {
                                case 1:
                                    this.$ = t.replace(/\\(\\|")/g, "$1").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\t/g, "   ").replace(/\\v/g, "\x0B").replace(/\\f/g, "\f").replace(/\\b/g, "\b");
                                    break;
                                case 2:
                                    this.$ = Number(t);
                                    break;
                                case 3:
                                    this.$ = null;
                                    break;
                                case 4:
                                    this.$ = !0;
                                    break;
                                case 5:
                                    this.$ = !1;
                                    break;
                                case 6:
                                    return this.$ = o[a - 1];
                                case 13:
                                    this.$ = {}, Object.defineProperty(this.$, "__line__", {
                                        value: this._$.first_line,
                                        enumerable: !1
                                    });
                                    break;
                                case 14:
                                case 19:
                                    this.$ = o[a - 1], Object.defineProperty(this.$, "__line__", {
                                        value: this._$.first_line,
                                        enumerable: !1
                                    });
                                    break;
                                case 15:
                                    this.$ = [o[a - 2], o[a]];
                                    break;
                                case 16:
                                    this.$ = {}, this.$[o[a][0]] = o[a][1];
                                    break;
                                case 17:
                                    this.$ = o[a - 2], void 0 !== o[a - 2][o[a][0]] && (this.$.__duplicateProperties__ || Object.defineProperty(this.$, "__duplicateProperties__", {
                                        value: [],
                                        enumerable: !1
                                    }), this.$.__duplicateProperties__.push(o[a][0])), o[a - 2][o[a][0]] = o[a][1];
                                    break;
                                case 18:
                                    this.$ = [], Object.defineProperty(this.$, "__line__", {
                                        value: this._$.first_line,
                                        enumerable: !1
                                    });
                                    break;
                                case 20:
                                    this.$ = [o[a]];
                                    break;
                                case 21:
                                    this.$ = o[a - 2], o[a - 2].push(o[a])
                            }
                        },
                        table: [{
                            3: 5,
                            4: n,
                            5: 6,
                            6: r,
                            7: 3,
                            8: i,
                            9: 4,
                            10: o,
                            11: s,
                            12: 1,
                            13: 2,
                            15: 7,
                            16: 8,
                            17: a,
                            23: u
                        }, {
                            1: [3]
                        }, {
                            14: [1, 16]
                        }, e(c, [2, 7]), e(c, [2, 8]), e(c, [2, 9]), e(c, [2, 10]), e(c, [2, 11]), e(c, [2, 12]), e(c, [2, 3]), e(c, [2, 4]), e(c, [2, 5]), e([14, 18, 21, 22, 24], [2, 1]), e(c, [2, 2]), {
                            3: 20,
                            4: n,
                            18: [1, 17],
                            19: 18,
                            20: 19
                        }, {
                            3: 5,
                            4: n,
                            5: 6,
                            6: r,
                            7: 3,
                            8: i,
                            9: 4,
                            10: o,
                            11: s,
                            13: 23,
                            15: 7,
                            16: 8,
                            17: a,
                            23: u,
                            24: [1, 21],
                            25: 22
                        }, {
                            1: [2, 6]
                        }, e(c, [2, 13]), {
                            18: [1, 24],
                            22: [1, 25]
                        }, e(l, [2, 16]), {
                            21: [1, 26]
                        }, e(c, [2, 18]), {
                            22: [1, 28],
                            24: [1, 27]
                        }, e(p, [2, 20]), e(c, [2, 14]), {
                            3: 20,
                            4: n,
                            20: 29
                        }, {
                            3: 5,
                            4: n,
                            5: 6,
                            6: r,
                            7: 3,
                            8: i,
                            9: 4,
                            10: o,
                            11: s,
                            13: 30,
                            15: 7,
                            16: 8,
                            17: a,
                            23: u
                        }, e(c, [2, 19]), {
                            3: 5,
                            4: n,
                            5: 6,
                            6: r,
                            7: 3,
                            8: i,
                            9: 4,
                            10: o,
                            11: s,
                            13: 31,
                            15: 7,
                            16: 8,
                            17: a,
                            23: u
                        }, e(l, [2, 17]), e(l, [2, 15]), e(p, [2, 21])],
                        defaultActions: {
                            16: [2, 6]
                        },
                        parseError: function(t, e) {
                            function n(t, e) {
                                this.message = t, this.hash = e
                            }
                            if (!e.recoverable) throw n.prototype = Error, new n(t, e);
                            this.trace(t)
                        },
                        parse: function(t) {
                            var e = this,
                                n = [0],
                                r = [null],
                                i = [],
                                o = this.table,
                                s = "",
                                a = 0,
                                u = 0,
                                c = 0,
                                l = 2,
                                p = 1,
                                f = i.slice.call(arguments, 1),
                                h = Object.create(this.lexer),
                                d = {
                                    yy: {}
                                };
                            for (var y in this.yy) Object.prototype.hasOwnProperty.call(this.yy, y) && (d.yy[y] = this.yy[y]);
                            h.setInput(t, d.yy), d.yy.lexer = h, d.yy.parser = this, "undefined" == typeof h.yylloc && (h.yylloc = {});
                            var g = h.yylloc;
                            i.push(g);
                            var m = h.options && h.options.ranges;
                            "function" == typeof d.yy.parseError ? this.parseError = d.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
                            for (var v, _, b, x, w, k, L, S, O, E = function() {
                                    var t;
                                    return t = h.lex() || p, "number" != typeof t && (t = e.symbols_[t] || t), t
                                }, P = {};;) {
                                if (b = n[n.length - 1], this.defaultActions[b] ? x = this.defaultActions[b] : ((null === v || "undefined" == typeof v) && (v = E()), x = o[b] && o[b][v]), "undefined" == typeof x || !x.length || !x[0]) {
                                    var C = "";
                                    O = [];
                                    for (k in o[b]) this.terminals_[k] && k > l && O.push("'" + this.terminals_[k] + "'");
                                    C = h.showPosition ? "Parse error on line " + (a + 1) + ":\n" + h.showPosition() + "\nExpecting " + O.join(", ") + ", got '" + (this.terminals_[v] || v) + "'" : "Parse error on line " + (a + 1) + ": Unexpected " + (v == p ? "end of input" : "'" + (this.terminals_[v] || v) + "'"), this.parseError(C, {
                                        text: h.match,
                                        token: this.terminals_[v] || v,
                                        line: h.yylineno,
                                        loc: g,
                                        expected: O
                                    })
                                }
                                if (x[0] instanceof Array && x.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + b + ", token: " + v);
                                switch (x[0]) {
                                    case 1:
                                        n.push(v), r.push(h.yytext), i.push(h.yylloc), n.push(x[1]), v = null, _ ? (v = _, _ = null) : (u = h.yyleng, s = h.yytext, a = h.yylineno, g = h.yylloc, c > 0 && c--);
                                        break;
                                    case 2:
                                        if (L = this.productions_[x[1]][1], P.$ = r[r.length - L], P._$ = {
                                                first_line: i[i.length - (L || 1)].first_line,
                                                last_line: i[i.length - 1].last_line,
                                                first_column: i[i.length - (L || 1)].first_column,
                                                last_column: i[i.length - 1].last_column
                                            }, m && (P._$.range = [i[i.length - (L || 1)].range[0], i[i.length - 1].range[1]]), w = this.performAction.apply(P, [s, u, a, d.yy, x[1], r, i].concat(f)), "undefined" != typeof w) return w;
                                        L && (n = n.slice(0, -1 * L * 2), r = r.slice(0, -1 * L), i = i.slice(0, -1 * L)), n.push(this.productions_[x[1]][0]), r.push(P.$), i.push(P._$), S = o[n[n.length - 2]][n[n.length - 1]], n.push(S);
                                        break;
                                    case 3:
                                        return !0
                                }
                            }
                            return !0
                        }
                    },
                    h = function() {
                        var t = {
                            EOF: 1,
                            parseError: function(t, e) {
                                if (!this.yy.parser) throw new Error(t);
                                this.yy.parser.parseError(t, e)
                            },
                            setInput: function(t, e) {
                                return this.yy = e || this.yy || {}, this._input = t, this._more = this._backtrack = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
                                    first_line: 1,
                                    first_column: 0,
                                    last_line: 1,
                                    last_column: 0
                                }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
                            },
                            input: function() {
                                var t = this._input[0];
                                this.yytext += t, this.yyleng++, this.offset++, this.match += t, this.matched += t;
                                var e = t.match(/(?:\r\n?|\n).*/g);
                                return e ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), t
                            },
                            unput: function(t) {
                                var e = t.length,
                                    n = t.split(/(?:\r\n?|\n)/g);
                                this._input = t + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - e), this.offset -= e;
                                var r = this.match.split(/(?:\r\n?|\n)/g);
                                this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), n.length - 1 && (this.yylineno -= n.length - 1);
                                var i = this.yylloc.range;
                                return this.yylloc = {
                                    first_line: this.yylloc.first_line,
                                    last_line: this.yylineno + 1,
                                    first_column: this.yylloc.first_column,
                                    last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - e
                                }, this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - e]), this.yyleng = this.yytext.length, this
                            },
                            more: function() {
                                return this._more = !0, this
                            },
                            reject: function() {
                                return this.options.backtrack_lexer ? (this._backtrack = !0, this) : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            less: function(t) {
                                this.unput(this.match.slice(t))
                            },
                            pastInput: function() {
                                var t = this.matched.substr(0, this.matched.length - this.match.length);
                                return (t.length > 20 ? "..." : "") + t.substr(-20).replace(/\n/g, "")
                            },
                            upcomingInput: function() {
                                var t = this.match;
                                return t.length < 20 && (t += this._input.substr(0, 20 - t.length)), (t.substr(0, 20) + (t.length > 20 ? "..." : "")).replace(/\n/g, "")
                            },
                            showPosition: function() {
                                var t = this.pastInput(),
                                    e = new Array(t.length + 1).join("-");
                                return t + this.upcomingInput() + "\n" + e + "^"
                            },
                            test_match: function(t, e) {
                                var n, r, i;
                                if (this.options.backtrack_lexer && (i = {
                                        yylineno: this.yylineno,
                                        yylloc: {
                                            first_line: this.yylloc.first_line,
                                            last_line: this.last_line,
                                            first_column: this.yylloc.first_column,
                                            last_column: this.yylloc.last_column
                                        },
                                        yytext: this.yytext,
                                        match: this.match,
                                        matches: this.matches,
                                        matched: this.matched,
                                        yyleng: this.yyleng,
                                        offset: this.offset,
                                        _more: this._more,
                                        _input: this._input,
                                        yy: this.yy,
                                        conditionStack: this.conditionStack.slice(0),
                                        done: this.done
                                    }, this.options.ranges && (i.yylloc.range = this.yylloc.range.slice(0))), r = t[0].match(/(?:\r\n?|\n).*/g), r && (this.yylineno += r.length), this.yylloc = {
                                        first_line: this.yylloc.last_line,
                                        last_line: this.yylineno + 1,
                                        first_column: this.yylloc.last_column,
                                        last_column: r ? r[r.length - 1].length - r[r.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                                    }, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._backtrack = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], n = this.performAction.call(this, this.yy, this, e, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), n) return n;
                                if (this._backtrack) {
                                    for (var o in i) this[o] = i[o];
                                    return !1
                                }
                                return !1
                            },
                            next: function() {
                                if (this.done) return this.EOF;
                                this._input || (this.done = !0);
                                var t, e, n, r;
                                this._more || (this.yytext = "", this.match = "");
                                for (var i = this._currentRules(), o = 0; o < i.length; o++)
                                    if (n = this._input.match(this.rules[i[o]]), n && (!e || n[0].length > e[0].length)) {
                                        if (e = n, r = o, this.options.backtrack_lexer) {
                                            if (t = this.test_match(n, i[o]), t !== !1) return t;
                                            if (this._backtrack) {
                                                e = !1;
                                                continue
                                            }
                                            return !1
                                        }
                                        if (!this.options.flex) break
                                    }
                                return e ? (t = this.test_match(e, i[r]), t !== !1 ? t : !1) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                                    text: "",
                                    token: null,
                                    line: this.yylineno
                                })
                            },
                            lex: function() {
                                var t = this.next();
                                return t ? t : this.lex()
                            },
                            begin: function(t) {
                                this.conditionStack.push(t)
                            },
                            popState: function() {
                                var t = this.conditionStack.length - 1;
                                return t > 0 ? this.conditionStack.pop() : this.conditionStack[0]
                            },
                            _currentRules: function() {
                                return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules
                            },
                            topState: function(t) {
                                return t = this.conditionStack.length - 1 - Math.abs(t || 0), t >= 0 ? this.conditionStack[t] : "INITIAL"
                            },
                            pushState: function(t) {
                                this.begin(t)
                            },
                            stateStackSize: function() {
                                return this.conditionStack.length
                            },
                            options: {},
                            performAction: function(t, e, n, r) {
                                switch (n) {
                                    case 0:
                                        break;
                                    case 1:
                                        return 6;
                                    case 2:
                                        return e.yytext = e.yytext.substr(1, e.yyleng - 2), 4;
                                    case 3:
                                        return 17;
                                    case 4:
                                        return 18;
                                    case 5:
                                        return 23;
                                    case 6:
                                        return 24;
                                    case 7:
                                        return 22;
                                    case 8:
                                        return 21;
                                    case 9:
                                        return 10;
                                    case 10:
                                        return 11;
                                    case 11:
                                        return 8;
                                    case 12:
                                        return 14;
                                    case 13:
                                        return "INVALID"
                                }
                            },
                            rules: [/^(?:\s+)/, /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/, /^(?:"(?:\\[\\"bfnrt\/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/, /^(?:\{)/, /^(?:\})/, /^(?:\[)/, /^(?:\])/, /^(?:,)/, /^(?::)/, /^(?:true\b)/, /^(?:false\b)/, /^(?:null\b)/, /^(?:$)/, /^(?:.)/],
                            conditions: {
                                INITIAL: {
                                    rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                                    inclusive: !0
                                }
                            }
                        };
                        return t
                    }();
                return f.lexer = h, t.prototype = f, f.Parser = t, new t
            }();
            "undefined" != typeof t && "undefined" != typeof n && (n.parser = i, n.Parser = i.Parser, n.parse = function() {
                return i.parse.apply(i, arguments)
            }, n.main = function(e) {
                e[1] || (console.log("Usage: " + e[0] + " FILE"), r.exit(1));
                var i = t("fs").readFileSync(t("path").normalize(e[1]), "utf8");
                return n.parser.parse(i)
            }, "undefined" != typeof e && t.main === e && n.main(r.argv.slice(1)))
        }).call(this, t("_process"))
    }, {
        _process: 4,
        fs: 2,
        path: 3
    }],
    7: [function(t, e, n) {
        function r(t, e) {
            function n(t) {
                e && e.noDuplicateMembers === !1 || !t.__duplicateProperties__ || v.push({
                    message: "An object contained duplicate members, making parsing ambigous: " + t.__duplicateProperties__.join(", "),
                    line: t.__line__
                }), t.type ? _[t.type] ? _[t.type](t) : v.push({
                    message: "The type " + t.type + " is unknown",
                    line: t.__line__
                }) : v.push({
                    message: "The type property is required and was not found",
                    line: t.__line__
                })
            }

            function r(t, e) {
                return t.every(function(t) {
                    return null !== t && typeof t === e
                })
            }

            function i(t, e, n) {
                if ("undefined" == typeof t[e]) return v.push({
                    message: '"' + e + '" property required',
                    line: t.__line__
                });
                if ("array" === n) {
                    if (!Array.isArray(t[e])) return v.push({
                        message: '"' + e + '" property should be an array, but is an ' + typeof t[e] + " instead",
                        line: t.__line__
                    })
                } else if (n && typeof t[e] !== n) return v.push({
                    message: '"' + e + '" property should be ' + n + ", but is an " + typeof t[e] + " instead",
                    line: t.__line__
                })
            }

            function o(t) {
                if (u(t), c(t), !i(t, "features", "array")) {
                    if (!r(t.features, "object")) return v.push({
                        message: "Every feature must be an object",
                        line: t.__line__
                    });
                    t.features.forEach(m)
                }
            }

            function s(t, e) {
                return Array.isArray(t) ? t.length < 2 ? v.push({
                    message: "position must have 2 or more elements",
                    line: t.__line__ || e
                }) : r(t, "number") ? void 0 : v.push({
                    message: "each element in a position must be a number",
                    line: t.__line__ || e
                }) : v.push({
                    message: "position should be an array, is a " + typeof t + " instead",
                    line: t.__line__ || e
                })
            }

            function a(t, e, n, r) {
                if (void 0 === r && void 0 !== t.__line__ && (r = t.__line__), 0 === n) return s(t, r);
                if (1 === n && e)
                    if ("LinearRing" === e) {
                        if (!Array.isArray(t[t.length - 1])) return v.push({
                            message: "a number was found where a coordinate array should have been found: this needs to be nested more deeply",
                            line: r
                        });
                        t.length < 4 && v.push({
                            message: "a LinearRing of coordinates needs to have four or more positions",
                            line: r
                        }), !t.length || t[t.length - 1].length === t[0].length && t[t.length - 1].every(function(e, n) {
                            return t[0][n] === e
                        }) || v.push({
                            message: "the first and last positions in a LinearRing of coordinates must be the same",
                            line: r
                        })
                    } else "Line" === e && t.length < 2 && v.push({
                        message: "a line needs to have two or more coordinates to be valid",
                        line: r
                    });
                else Array.isArray(t) ? t.forEach(function(t) {
                    a(t, e, n - 1, t.__line__ || r)
                }) : v.push({
                    message: "a number was found where a coordinate array should have been found: this needs to be nested more deeply",
                    line: r
                })
            }

            function u(t) {
                if (t.crs)
                    if ("object" == typeof t.crs) {
                        var e = i(t.crs, "type", "string"),
                            n = i(t.crs, "properties", "object");
                        e || n || ("name" === t.crs.type ? i(t.crs.properties, "name", "string") : "link" === t.crs.type ? i(t.crs.properties, "href", "string") : v.push({
                            message: 'The type of a crs must be either "name" or "link"',
                            line: t.__line__
                        }))
                    } else v.push({
                        message: "the value of the crs property must be an object, not a " + typeof t.crs,
                        line: t.__line__
                    })
            }

            function c(t) {
                if (t.bbox)
                    if (Array.isArray(t.bbox)) {
                        if (!r(t.bbox, "number")) return v.push({
                            message: "each element in a bbox property must be a number",
                            line: t.bbox.__line__
                        })
                    } else v.push({
                        message: "bbox property must be an array of numbers, but is a " + typeof t.bbox,
                        line: t.__line__
                    })
            }

            function l(t) {
                u(t), c(t), i(t, "coordinates", "array") || s(t.coordinates)
            }

            function p(t) {
                u(t), c(t), i(t, "coordinates", "array") || a(t.coordinates, "LinearRing", 2)
            }

            function f(t) {
                u(t), c(t), i(t, "coordinates", "array") || a(t.coordinates, "LinearRing", 3)
            }

            function h(t) {
                u(t), c(t), i(t, "coordinates", "array") || a(t.coordinates, "Line", 1)
            }

            function d(t) {
                u(t), c(t), i(t, "coordinates", "array") || a(t.coordinates, "Line", 2)
            }

            function y(t) {
                u(t), c(t), i(t, "coordinates", "array") || a(t.coordinates, "", 1)
            }

            function g(t) {
                u(t), c(t), i(t, "geometries", "array") || (r(t.geometries, "object") || v.push({
                    message: "The geometries array in a GeometryCollection must contain only geometry objects",
                    line: t.__line__
                }), t.geometries.forEach(function(t) {
                    t && n(t)
                }))
            }

            function m(t) {
                u(t), c(t), void 0 !== t.id && "string" != typeof t.id && "number" != typeof t.id && v.push({
                    message: 'Feature "id" property must have a string or number value',
                    line: t.__line__
                }), "Feature" !== t.type && v.push({
                    message: "GeoJSON features must have a type=feature property",
                    line: t.__line__
                }), i(t, "properties", "object"), i(t, "geometry", "object") || t.geometry && n(t.geometry)
            }
            var v = [],
                _ = {
                    Point: l,
                    Feature: m,
                    MultiPoint: y,
                    LineString: h,
                    MultiLineString: d,
                    FeatureCollection: o,
                    GeometryCollection: g,
                    Polygon: p,
                    MultiPolygon: f
                };
            return "object" != typeof t || null === t || void 0 === t ? (v.push({
                message: "The root of a GeoJSON object must be an object.",
                line: 0
            }), v) : (n(t), v.forEach(function(t) {
                t.hasOwnProperty("line") && void 0 === t.line && delete t.line
            }), v)
        }
        e.exports.hint = r
    }, {}],
    8: [function(t, e, n) {
        var r = e.exports = function(t, e) {
            if (e || (e = 16), void 0 === t && (t = 128), 0 >= t) return "0";
            for (var n = Math.log(Math.pow(2, t)) / Math.log(e), i = 2; n === 1 / 0; i *= 2) n = Math.log(Math.pow(2, t / i)) / Math.log(e) * i;
            for (var o = n - Math.floor(n), s = "", i = 0; i < Math.floor(n); i++) {
                var a = Math.floor(Math.random() * e).toString(e);
                s = a + s
            }
            if (o) {
                var u = Math.pow(e, o),
                    a = Math.floor(Math.random() * u).toString(e);
                s = a + s
            }
            var c = parseInt(s, e);
            return c !== 1 / 0 && c >= Math.pow(2, t) ? r(t, e) : s
        };
        r.rack = function(t, e, n) {
            var i = function(i) {
                    var s = 0;
                    do {
                        if (s++ > 10) {
                            if (!n) throw new Error("too many ID collisions, use more bits");
                            t += n
                        }
                        var a = r(t, e)
                    } while (Object.hasOwnProperty.call(o, a));
                    return o[a] = i, a
                },
                o = i.hats = {};
            return i.get = function(t) {
                return i.hats[t]
            }, i.set = function(t, e) {
                return i.hats[t] = e, i
            }, i.bits = t || 128, i.base = e || 16, i
        }
    }, {}],
    9: [function(t, e, n) {
        "use strict";

        function r(t, e) {
            this.x = t, this.y = e
        }
        e.exports = r, r.prototype = {
            clone: function() {
                return new r(this.x, this.y)
            },
            add: function(t) {
                return this.clone()._add(t)
            },
            sub: function(t) {
                return this.clone()._sub(t)
            },
            mult: function(t) {
                return this.clone()._mult(t)
            },
            div: function(t) {
                return this.clone()._div(t)
            },
            rotate: function(t) {
                return this.clone()._rotate(t)
            },
            matMult: function(t) {
                return this.clone()._matMult(t)
            },
            unit: function() {
                return this.clone()._unit()
            },
            perp: function() {
                return this.clone()._perp()
            },
            round: function() {
                return this.clone()._round()
            },
            mag: function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            },
            equals: function(t) {
                return this.x === t.x && this.y === t.y
            },
            dist: function(t) {
                return Math.sqrt(this.distSqr(t))
            },
            distSqr: function(t) {
                var e = t.x - this.x,
                    n = t.y - this.y;
                return e * e + n * n
            },
            angle: function() {
                return Math.atan2(this.y, this.x)
            },
            angleTo: function(t) {
                return Math.atan2(this.y - t.y, this.x - t.x)
            },
            angleWith: function(t) {
                return this.angleWithSep(t.x, t.y)
            },
            angleWithSep: function(t, e) {
                return Math.atan2(this.x * e - this.y * t, this.x * t + this.y * e)
            },
            _matMult: function(t) {
                var e = t[0] * this.x + t[1] * this.y,
                    n = t[2] * this.x + t[3] * this.y;
                return this.x = e, this.y = n, this
            },
            _add: function(t) {
                return this.x += t.x, this.y += t.y, this
            },
            _sub: function(t) {
                return this.x -= t.x, this.y -= t.y, this
            },
            _mult: function(t) {
                return this.x *= t, this.y *= t, this
            },
            _div: function(t) {
                return this.x /= t, this.y /= t, this
            },
            _unit: function() {
                return this._div(this.mag()), this
            },
            _perp: function() {
                var t = this.y;
                return this.y = this.x, this.x = -t, this
            },
            _rotate: function(t) {
                var e = Math.cos(t),
                    n = Math.sin(t),
                    r = e * this.x - n * this.y,
                    i = n * this.x + e * this.y;
                return this.x = r, this.y = i, this
            },
            _round: function() {
                return this.x = Math.round(this.x), this.y = Math.round(this.y), this
            }
        }, r.convert = function(t) {
            return t instanceof r ? t : Array.isArray(t) ? new r(t[0], t[1]) : t
        }
    }, {}],
    10: [function(t, e, n) {
        var r = t("geojson-area").geometry;
        e.exports = function(t) {
            if ("FeatureCollection" === t.type) {
                for (var e = 0, n = 0; e < t.features.length; e++) t.features[e].geometry && (n += r(t.features[e].geometry));
                return n
            }
            return r("Feature" === t.type ? t.geometry : t)
        }
    }, {
        "geojson-area": 11
    }],
    11: [function(t, e, n) {
        function r(t) {
            var e, n = 0;
            switch (t.type) {
                case "Polygon":
                    return o(t.coordinates);
                case "MultiPolygon":
                    for (e = 0; e < t.coordinates.length; e++) n += o(t.coordinates[e]);
                    return n;
                case "Point":
                case "MultiPoint":
                case "LineString":
                case "MultiLineString":
                    return 0;
                case "GeometryCollection":
                    for (e = 0; e < t.geometries.length; e++) n += r(t.geometries[e]);
                    return n
            }
        }

        function o(t) {
            var e = 0;
            if (t && t.length > 0) {
                e += Math.abs(s(t[0]));
                for (var n = 1; n < t.length; n++) e -= Math.abs(s(t[n]))
            }
            return e
        }

        function s(t) {
            var e, n, r, o, s, c, l = 0,
                p = t.length;
            if (p > 2) {
                for (i = 0; i < p; i++) i === p - 2 ? (o = p - 2, s = p - 1, c = 0) : i === p - 1 ? (o = p - 1, s = 0, c = 1) : (o = i, s = i + 1, c = i + 2), e = t[o], n = t[s], r = t[c], l += (a(r[0]) - a(e[0])) * Math.sin(a(n[1]));
                l = l * u.RADIUS * u.RADIUS / 2
            }
            return l
        }

        function a(t) {
            return t * Math.PI / 180
        }
        var u = t("wgs84");
        e.exports.geometry = r, e.exports.ring = s
    }, {
        wgs84: 12
    }],
    12: [function(t, e, n) {
        e.exports.RADIUS = 6378137, e.exports.FLATTENING = 1 / 298.257223563, e.exports.POLAR_RADIUS = 6356752.3142
    }, {}],
    13: [function(t, e, n) {
        "use strict";
        var r = t("hat"),
            i = t("./lib/features_at"),
            o = t("geojsonhint"),
            s = {
                Polygon: t("./feature_types/polygon"),
                LineString: t("./feature_types/line_string"),
                Point: t("./feature_types/point")
            };
        e.exports = function(t) {
            return {
                getFeatureIdsAt: function(e, n) {
                    var r = i({
                        point: {
                            x: e,
                            y: n
                        }
                    }, t);
                    return r.map(function(t) {
                        return t.properties.id
                    })
                },
                add: function(e) {
                    var n = this,
                        i = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                    if ("FeatureCollection" === e.type || e.geometry || (e = {
                            type: "Feature",
                            id: e.id,
                            properties: e.properties || {},
                            geometry: e
                        }), i) {
                        var a = o.hint(e);
                        if (a.length) throw new Error(a[0].message);
                        ("FeatureCollection" === e.type ? e.features : [e]).forEach(function(t) {
                            if (void 0 === s[t.geometry.type]) throw new Error("Invalid feature type. Must be Point, Polygon or LineString")
                        })
                    }
                    if ("FeatureCollection" === e.type) return e.features.map(function(t) {
                        return n.add(t, !1)
                    });
                    e = JSON.parse(JSON.stringify(e)), e.id = e.id || r();
                    var u = s[e.geometry.type],
                        c = new u(t, e);
                    return t.store.add(c), t.store.render(), e.id
                },
                get: function(e) {
                    var n = t.store.get(e);
                    return n ? n.toGeoJSON() : void 0
                },
                getAll: function() {
                    return {
                        type: "FeatureCollection",
                        features: t.store.getAll().map(function(t) {
                            return t.toGeoJSON()
                        })
                    }
                },
                "delete": function(e) {
                    t.store["delete"]([e]), t.store.render()
                },
                deleteAll: function() {
                    t.store["delete"](t.store.getAll().map(function(t) {
                        return t.id
                    })), t.store.render()
                },
                changeMode: function(e, n) {
                    t.events.changeMode(e, n)
                },
                trash: function() {
                    t.events.fire("trash")
                }
            }
        }
    }, {
        "./feature_types/line_string": 16,
        "./feature_types/point": 17,
        "./feature_types/polygon": 18,
        "./lib/features_at": 22,
        geojsonhint: 5,
        hat: 8
    }],
    14: [function(t, e, n) {
        "use strict";
        var r = t("./lib/mode_handler"),
            i = t("./lib/get_features_and_set_cursor"),
            o = t("./lib/is_click"),
            s = {
                simple_select: t("./modes/simple_select"),
                direct_select: t("./modes/direct_select"),
                draw_point: t("./modes/draw_point"),
                draw_line_string: t("./modes/draw_line_string"),
                draw_polygon: t("./modes/draw_polygon")
            };
        e.exports = function(t) {
            var e = {
                    isDown: !1
                },
                n = {},
                a = "simple_select",
                u = r(s.simple_select(t), t);
            n.drag = function(n) {
                o(e, {
                    point: n.point,
                    time: (new Date).getTime()
                }) ? n.originalEvent.stopPropagation() : (t.ui.setClass({
                    mouse: "drag"
                }), u.drag(n))
            }, n.mousemove = function(r) {
                if (e.isDown) n.drag(r);
                else {
                    var o = i(r, t);
                    r.featureTarget = o, u.mousemove(r)
                }
            }, n.mousedown = function(n) {
                e = {
                    isDown: !0,
                    time: (new Date).getTime(),
                    point: n.point
                };
                var r = i(n, t);
                n.featureTarget = r, u.mousedown(n)
            }, n.mouseup = function(n) {
                e.isDown = !1;
                var r = i(n, t);
                n.featureTarget = r, o(e, {
                    point: n.point,
                    time: (new Date).getTime()
                }) ? u.click(n) : u.mouseup(n)
            }, n.trash = function() {
                u.trash()
            };
            var c = function(t) {
                return !(8 === t || t >= 48 && 57 >= t)
            };
            n.keydown = function(e) {
                8 === e.keyCode ? (e.preventDefault(), l.fire("trash")) : c(e.keyCode) ? u.keydown(e) : 49 === e.keyCode ? t.api.changeMode("draw_point") : 50 === e.keyCode ? t.api.changeMode("draw_line_string") : 51 === e.keyCode && t.api.changeMode("draw_polygon")
            }, n.keyup = function(t) {
                c(t.keyCode) && u.keyup(t)
            }, n.zoomend = function() {
                t.store.changeZoom()
            };
            var l = {
                currentModeName: function() {
                    return a
                },
                currentModeRender: function(t, e) {
                    return u.render(t, e)
                },
                changeMode: function(e, n) {
                    u.stop();
                    var i = s[e];
                    if (void 0 === i) throw new Error(e + " is not valid");
                    a = e;
                    var o = i(t, n);
                    u = r(o, t), t.map.fire("draw.modechange", {
                        mode: e,
                        opts: n
                    }), t.store.setDirty(), t.store.render()
                },
                fire: function(t, e) {
                    n[t] && n[t](e)
                },
                addEventListeners: function() {
                    t.map.on("mousemove", n.mousemove), t.map.on("mousedown", n.mousedown), t.map.on("mouseup", n.mouseup), t.container.addEventListener("keydown", n.keydown), t.container.addEventListener("keyup", n.keyup)
                },
                removeEventListeners: function() {
                    t.map.off("mousemove", n.mousemove), t.map.off("mousedown", n.mousedown), t.map.off("mouseup", n.mouseup), t.container.removeEventListener("keydown", n.keydown), t.container.removeEventListener("keyup", n.keyup)
                }
            };
            return l
        }
    }, {
        "./lib/get_features_and_set_cursor": 23,
        "./lib/is_click": 24,
        "./lib/mode_handler": 25,
        "./modes/direct_select": 32,
        "./modes/draw_line_string": 33,
        "./modes/draw_point": 34,
        "./modes/draw_polygon": 35,
        "./modes/simple_select": 36
    }],
    15: [function(t, e, n) {
        "use strict";
        var r = t("hat"),
            i = function(t, e) {
                this.ctx = t, this.properties = e.properties || {}, this.coordinates = e.geometry.coordinates, this.atLastRender = null, this.id = e.id || r(), this.type = e.geometry.type, t.store.add(this)
            };
        i.prototype.changed = function() {
            this.ctx.store.featureChanged(this.id)
        }, i.prototype.setCoordinates = function(t) {
            this.coordinates = t, this.changed()
        }, i.prototype.getCoordinates = function() {
            return JSON.parse(JSON.stringify(this.coordinates))
        }, i.prototype.toGeoJSON = function() {
            return JSON.parse(JSON.stringify({
                id: this.id,
                type: "Feature",
                properties: this.properties,
                geometry: {
                    coordinates: this.getCoordinates(),
                    type: this.type
                }
            }))
        }, i.prototype.internal = function(t) {
            return {
                type: "Feature",
                properties: {
                    id: this.id,
                    meta: "feature",
                    "meta:type": this.type,
                    active: "false",
                    mode: t
                },
                geometry: {
                    coordinates: this.getCoordinates(),
                    type: this.type
                }
            }
        }, e.exports = i
    }, {
        hat: 8
    }],
    16: [function(t, e, n) {
        "use strict";
        var r = t("./feature"),
            i = function(t, e) {
                r.call(this, t, e)
            };
        i.prototype = Object.create(r.prototype), i.prototype.isValid = function() {
            return this.coordinates.length > 1
        }, i.prototype.addCoordinate = function(t, e, n) {
            this.changed(), this.selectedCoords = {};
            var r = parseInt(t, 10);
            this.coordinates.splice(r, 0, [e, n])
        }, i.prototype.getCoordinate = function(t) {
            var e = parseInt(t, 10);
            return JSON.parse(JSON.stringify(this.coordinates[e]))
        }, i.prototype.removeCoordinate = function(t) {
            this.changed(), this.coordinates.splice(parseInt(t, 10), 1)
        }, i.prototype.updateCoordinate = function(t, e, n) {
            this.changed();
            var r = parseInt(t, 10);
            this.coordinates[r] = [e, n]
        }, e.exports = i
    }, {
        "./feature": 15
    }],
    17: [function(t, e, n) {
        "use strict";
        var r = t("./feature"),
            i = function(t, e) {
                r.call(this, t, e)
            };
        i.prototype = Object.create(r.prototype), i.prototype.isValid = function() {
            return "number" == typeof this.coordinates[0]
        }, i.prototype.updateCoordinate = function(t, e, n) {
            this.changed(), this.coordinates = [e, n]
        }, e.exports = i
    }, {
        "./feature": 15
    }],
    18: [function(t, e, n) {
        "use strict";
        var r = t("./feature"),
            i = function(t, e) {
                r.call(this, t, e), this.coordinates = this.coordinates.map(function(t) {
                    return t.slice(0, -1)
                })
            };
        i.prototype = Object.create(r.prototype), i.prototype.isValid = function() {
            return this.coordinates.every(function(t) {
                return t.length > 2
            })
        }, i.prototype.addCoordinate = function(t, e, n) {
            this.changed();
            var r = t.split(".").map(function(t) {
                    return parseInt(t, 10)
                }),
                i = this.coordinates[r[0]];
            i.splice(r[1], 0, [e, n])
        }, i.prototype.removeCoordinate = function(t) {
            this.changed();
            var e = t.split(".").map(function(t) {
                    return parseInt(t, 10)
                }),
                n = this.coordinates[e[0]];
            n && (n.splice(e[1], 1), n.length < 3 && this.coordinates.splice(e[0], 1))
        }, i.prototype.getCoordinate = function(t) {
            var e = t.split(".").map(function(t) {
                    return parseInt(t, 10)
                }),
                n = this.coordinates[e[0]];
            return JSON.parse(JSON.stringify(n[e[1]]))
        }, i.prototype.getCoordinates = function() {
            return this.coordinates.map(function(t) {
                return t.concat([t[0]])
            })
        }, i.prototype.updateCoordinate = function(t, e, n) {
            this.changed();
            var r = t.split("."),
                i = parseInt(r[0], 10),
                o = parseInt(r[1], 10);
            void 0 === this.coordinates[i] && (this.coordinates[i] = []), this.coordinates[i][o] = [e, n]
        }, e.exports = i
    }, {
        "./feature": 15
    }],
    19: [function(t, e, n) {
        "use strict";
        var r = t("./to_midpoint"),
            i = t("./to_vertex");
        e.exports = function(t, e, n, o, s) {
            for (var a = null, u = null, c = null, l = 0; l < t.geometry.coordinates.length; l++)
                if ("Polygon" === t.geometry.type) {
                    for (var p = t.geometry.coordinates[l], f = 0; f < p.length - 1; f++) {
                        var h = p[f],
                            d = l + "." + f;
                        a = i(t.properties.id, h, d, s.indexOf(d) > -1), c = c ? c : a, n(a), f > 0 && e && n(r(t.properties.id, u, a, o)), u = a
                    }
                    e && n(r(t.properties.id, a, c, o))
                } else {
                    var h = t.geometry.coordinates[l],
                        d = "" + l;
                    a = i(t.properties.id, h, d, s.indexOf(d) > -1), n(a), l > 0 && e && n(r(t.properties.id, u, a, o)), u = a
                }
        }
    }, {
        "./to_midpoint": 28,
        "./to_vertex": 29
    }],
    20: [function(t, e, n) {
        "use strict";
        e.exports = {
            isOfMetaType: function(t) {
                return function(e) {
                    var n = e.featureTarget;
                    return n ? n.properties.meta === t : !1
                }
            },
            noFeature: function(t) {
                return void 0 === t.featureTarget
            },
            isFeature: function(t) {
                return void 0 !== t.featureTarget && "feature" === t.featureTarget.properties.meta
            },
            isShiftDown: function(t) {
                return t.originalEvent.shiftKey === !0
            },
            isEscapeKey: function(t) {
                return 27 === t.keyCode
            },
            isEnterKey: function(t) {
                return 13 === t.keyCode
            }
        }
    }, {}],
    21: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e) {
            var n = t.x - e.x,
                r = t.y - e.y;
            return Math.sqrt(n * n + r * r)
        }
    }, {}],
    22: [function(t, e, n) {
        "use strict";
        var r = t("turf-area"),
            i = ["feature", "midpoint", "vertex"],
            o = {
                Polygon: 2,
                Point: 0,
                LineString: 1
            },
            s = function(t, e) {
                var n = o[t.geometry.type] - o[e.geometry.type];
                return 0 === n && "Polygon" === t.geometry.type ? t.area - e.area : n
            };
        e.exports = function(t, e) {
            var n = .5,
                o = e.map.queryRenderedFeatures([
                    [t.point.x - n, t.point.y - n],
                    [t.point.x + n, t.point.y + n]
                ], {});
            return o = o.filter(function(t) {
                var e = t.properties.meta;
                return -1 !== i.indexOf(e)
            }).map(function(t) {
                return "Polygon" === t.geometry.type && (t.area = r({
                    type: "Feature",
                    property: {},
                    geometry: t.geometry
                })), t
            }), o.sort(s), o
        }
    }, {
        "turf-area": 10
    }],
    23: [function(t, e, n) {
        "use strict";
        var r = t("./features_at");
        e.exports = function(t, e) {
            var n = r(t, e);
            return n[0] ? e.ui.setClass({
                feature: n[0].properties.meta,
                mouse: "hover"
            }) : e.ui.setClass({
                mouse: "none"
            }), n[0]
        }
    }, {
        "./features_at": 22
    }],
    24: [function(t, e, n) {
        "use strict";
        var r = t("./euclidean_distance"),
            i = 4,
            o = 12;
        e.exports = function(t, e) {
            t.point = t.point || e.point, t.time = t.time || e.time;
            var n = r(t.point, e.point);
            return i > n || o > n && e.time - t.time < 500
        }
    }, {
        "./euclidean_distance": 21
    }],
    25: [function(t, e, n) {
        "use strict";
        var r = function(t, e) {
            var n = {
                    drag: [],
                    click: [],
                    doubleclick: [],
                    mousemove: [],
                    mousedown: [],
                    mouseup: [],
                    keydown: [],
                    keyup: [],
                    trash: []
                },
                r = {
                    on: function(t, e, r) {
                        if (void 0 === n[t]) throw new Error("Invalid event type: " + t);
                        n[t].push({
                            selector: e,
                            fn: r
                        })
                    },
                    off: function(t, e, r) {
                        n[t] = n[t].filter(function(t) {
                            return t.selector !== e || t.fn !== r
                        })
                    },
                    fire: function(t, n) {
                        var r = e.events.currentModeName();
                        e.map.fire("draw." + r + "." + t, n)
                    },
                    render: function(t) {
                        e.store.featureChanged(t)
                    }
                },
                i = function(t, i) {
                    for (var o = n[t], s = o.length; s--;) {
                        var a = o[s];
                        if (a.selector(i)) {
                            a.fn.call(r, i), e.store.render();
                            break
                        }
                    }
                };
            return t.start.call(r), {
                render: t.render || function(t) {
                    return t
                },
                stop: t.stop || function() {},
                drag: function(t) {
                    i("drag", t)
                },
                click: function(t) {
                    i("click", t)
                },
                mousemove: function(t) {
                    i("mousemove", t)
                },
                mousedown: function(t) {
                    i("mousedown", t)
                },
                mouseup: function(t) {
                    i("mouseup", t)
                },
                keydown: function(t) {
                    i("keydown", t)
                },
                keyup: function(t) {
                    i("keyup", t)
                },
                trash: function(t) {
                    i("trash", t)
                }
            }
        };
        e.exports = r
    }, {}],
    26: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            "function" != typeof Object.assign && ! function() {
                Object.assign = function(t) {
                    if (void 0 === t || null === t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), n = 1; n < arguments.length; n++) {
                        var r = arguments[n];
                        if (void 0 !== r && null !== r)
                            for (var i in r) r.hasOwnProperty(i) && (e[i] = r[i])
                    }
                    return e
                }
            }()
        }
    }, {}],
    27: [function(t, e, n) {
        "use strict";
        e.exports = [{
            id: "gl-draw-active-line",
            type: "line",
            filter: ["all", ["==", "$type", "LineString"],
                ["==", "active", "true"]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "#FF9800",
                "line-dasharray": [.2, 2],
                "line-width": 4
            },
            interactive: !0
        }, {
            id: "gl-draw-active-polygon",
            type: "fill",
            filter: ["all", ["==", "active", "true"],
                ["==", "$type", "Polygon"]
            ],
            paint: {
                "fill-color": "#FF9800",
                "fill-opacity": .25
            },
            interactive: !0
        }, {
            id: "gl-draw-active-polygon-stroke",
            type: "line",
            filter: ["all", ["==", "active", "true"],
                ["==", "$type", "Polygon"]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "#FF9800",
                "line-dasharray": [.2, 2],
                "line-width": 4
            },
            interactive: !0
        }, {
            id: "gl-draw-point-mid-outline",
            type: "circle",
            filter: ["all", ["==", "$type", "Point"],
                ["==", "meta", "midpoint"]
            ],
            paint: {
                "circle-radius": 7,
                "circle-opacity": .65,
                "circle-color": "#fff"
            },
            interactive: !0
        }, {
            id: "gl-draw-point-mid",
            type: "circle",
            filter: ["all", ["==", "$type", "Point"],
                ["==", "meta", "midpoint"]
            ],
            paint: {
                "circle-radius": 6,
                "circle-opacity": .65,
                "circle-color": "#FF9800"
            },
            interactive: !0
        }, {
            id: "gl-draw-polygon",
            type: "fill",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "Polygon"]
            ],
            paint: {
                "fill-color": "#03A9F4",
                "fill-outline-color": "#03A9F4",
                "fill-opacity": .25
            },
            interactive: !0
        }, {
            id: "gl-draw-polygon-stroke",
            type: "line",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "Polygon"]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "#03A9F4",
                "line-width": 3
            },
            interactive: !0
        }, {
            id: "gl-draw-line",
            type: "line",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "LineString"]
            ],
            layout: {
                "line-cap": "round",
                "line-join": "round"
            },
            paint: {
                "line-color": "#03A9F4",
                "line-width": 3
            },
            interactive: !0
        }, {
            id: "gl-draw-active-point",
            type: "circle",
            filter: ["all", ["==", "$type", "Point"],
                ["==", "active", "true"],
                ["!=", "meta", "midpoint"]
            ],
            paint: {
                "circle-radius": 9,
                "circle-color": "#fff"
            },
            interactive: !0
        }, {
            id: "gl-draw-active-point-highlight",
            type: "circle",
            filter: ["all", ["==", "$type", "Point"],
                ["!=", "meta", "midpoint"],
                ["==", "active", "true"]
            ],
            paint: {
                "circle-radius": 7,
                "circle-color": "#EF6C00"
            },
            interactive: !0
        }, {
            id: "gl-draw-polygon-point-outline",
            type: "circle",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "Point"],
                ["==", "meta", "vertex"]
            ],
            paint: {
                "circle-radius": 9,
                "circle-color": "#fff"
            },
            interactive: !0
        }, {
            id: "gl-draw-polygon-point",
            type: "circle",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "Point"],
                ["==", "meta", "vertex"]
            ],
            paint: {
                "circle-radius": 7,
                "circle-color": "#FF9800"
            },
            interactive: !0
        }, {
            id: "gl-draw-point-point-outline",
            type: "circle",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "Point"],
                ["==", "meta", "feature"]
            ],
            paint: {
                "circle-radius": 9,
                "circle-color": "#fff"
            },
            interactive: !0
        }, {
            id: "gl-draw-point",
            type: "circle",
            filter: ["all", ["==", "active", "false"],
                ["==", "$type", "Point"],
                ["==", "meta", "feature"]
            ],
            paint: {
                "circle-radius": 7,
                "circle-color": "#03A9F4"
            },
            interactive: !0
        }]
    }, {}],
    28: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n, r) {
            var i = e.geometry.coordinates,
                o = n.geometry.coordinates,
                s = r.project([i[0], i[1]]),
                a = r.project([o[0], o[1]]),
                u = r.unproject([(s.x + a.x) / 2, (s.y + a.y) / 2]);
            return {
                type: "Feature",
                properties: {
                    meta: "midpoint",
                    parent: t,
                    lng: u.lng,
                    lat: u.lat,
                    coord_path: n.properties.coord_path
                },
                geometry: {
                    type: "Point",
                    coordinates: [u.lng, u.lat]
                }
            }
        }
    }, {}],
    29: [function(t, e, n) {
        "use strict";
        e.exports = function(t, e, n, r) {
            return {
                type: "Feature",
                properties: {
                    meta: "vertex",
                    parent: t,
                    coord_path: n,
                    active: "" + r
                },
                geometry: {
                    type: "Point",
                    coordinates: e
                }
            }
        }
    }, {}],
    30: [function(t, e, n) {
        "use strict";
        var r = {
            POLYGON: "polygon",
            LINE: "line_string",
            POINT: "point"
        };
        e.exports = r
    }, {}],
    31: [function(t, e, n) {
        "use strict";

        function r(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e] in a) return t[e]
        }

        function i(t, e, n) {
            var r, i, o, s;
            return s = function() {
                r = !1, i && (o.apply(n, i), i = !1)
            }, o = function() {
                r ? i = arguments : (t.apply(n, arguments), setTimeout(s, e), r = !0)
            }
        }
        var o = t("point-geometry"),
            s = {};
        s.mousePos = function(t, e) {
            var n = e.getBoundingClientRect();
            return new o(t.clientX - n.left - e.clientLeft, t.clientY - n.top - e.clientTop)
        }, s.create = function(t, e, n, r) {
            var i = document.createElement(t);
            if (e && (i.className = e), r)
                for (var o in r) i.setAttribute(o, r[o]);
            return n && n.appendChild(i), i
        }, s.removeClass = function(t, e) {
            Array.prototype.forEach.call(t, function(t) {
                t.classList.remove(e)
            })
        };
        var a = document.documentElement.style,
            u = r(["transform", "WebkitTransform"]);
        s.setTransform = function(t, e) {
            t.style[u] = e
        };
        var c, l = r(["userSelect", "MozUserSelect", "WebkitUserSelect", "msUserSelect"]);
        s.disableSelection = function() {
            l && (c = a[l], a[l] = "none")
        }, s.enableSelection = function() {
            l && (a[l] = c)
        }, e.exports.createButton = function(t, e, n) {
            var r = {
                title: e.title
            };
            e.id && (r.id = e.id);
            var i = s.create("button", e.className, t, r);
            return i.addEventListener("click", function(t) {
                t.preventDefault(), t.stopPropagation();
                var r = t.target;
                r.classList.contains("active") ? r.classList.remove("active") : (s.removeClass(document.querySelectorAll("." + n), "active"), r.classList.add("active"), e.fn())
            }, !0), i
        }, e.exports.translate = function(t, e, n, r) {
            t = JSON.parse(JSON.stringify(t));
            var i, o, s = n.x - e.x,
                a = n.y - e.y,
                u = t.geometry;
            if ("Polygon" === u.type)
                for (i = u.coordinates[0].length, o = 0; i > o; o++) u.coordinates[0][o] = p(u.coordinates[0][o], s, a, r);
            else if ("LineString" === u.type)
                for (i = u.coordinates.length, o = 0; i > o; o++) u.coordinates[o] = p(u.coordinates[o], s, a, r);
            else u.coordinates = p(u.coordinates, s, a, r);
            return t
        };
        var p = function(t, e, n, r) {
            var i = r.project([t[0], t[1]]);
            return i = r.unproject([i.x + e, i.y + n]), [i.lng, i.lat]
        };
        e.exports.throttle = i, e.exports.DOM = s, e.exports.translatePoint = p
    }, {
        "point-geometry": 9
    }],
    32: [function(t, e, n) {
        "use strict";
        var r = t("../lib/common_selectors"),
            i = r.noFeature,
            o = r.isOfMetaType,
            s = r.isShiftDown,
            a = t("../lib/add_coords");
        e.exports = function(t, e) {
            var n = e.featureId,
                r = t.store.get(n);
            if ("Point" === r.type) throw new TypeError("direct_select mode doesn't handle point features");
            var u = e.isDragging || !1,
                c = e.startPos || null,
                l = null,
                p = null,
                f = e.coordPath ? [e.coordPath] : [],
                h = function(t) {
                    u = !0, c = t.lngLat;
                    var e = t.featureTarget.properties,
                        n = f.indexOf(e.coord_path);
                    s(t) || -1 !== n ? s(t) && -1 === n && f.push(e.coord_path) : f = [e.coord_path]
                },
                d = function(t) {
                    u = !0, c = t.lngLat;
                    var e = t.featureTarget.properties;
                    r.addCoordinate(e.coord_path, e.lng, e.lat), f = [e.coord_path]
                },
                y = function() {
                    l = f.map(function(t) {
                        return r.getCoordinate(t)
                    }), p = l.length
                };
            return {
                start: function() {
                    this.on("mousedown", o("vertex"), h), this.on("mousedown", o("midpoint"), d), this.on("drag", function() {
                        return u
                    }, function(t) {
                        t.originalEvent.stopPropagation(), null === l && y();
                        for (var e = t.lngLat.lng - c.lng, n = t.lngLat.lat - c.lat, i = 0; p > i; i++) {
                            var o = f[i],
                                s = l[i],
                                a = s[0] + e,
                                u = s[1] + n;
                            r.updateCoordinate(o, a, u)
                        }
                    }), this.on("mouseup", function() {
                        return !0
                    }, function() {
                        u = !1, l = null, p = null, c = null
                    }), this.on("click", i, function() {
                        t.events.changeMode("simple_select")
                    }), this.on("trash", function() {
                        return f.length > 0
                    }, function() {
                        f.sort().reverse().forEach(function(t) {
                            return r.removeCoordinate(t)
                        }), f = [], r.isValid() === !1 && (t.store["delete"]([n]), t.events.changeMode("simple_select"))
                    }), this.on("trash", function() {
                        return 0 === f.length
                    }, function() {
                        t.events.changeMode("simple_select", [n])
                    })
                },
                stop: function() {},
                render: function(e, r) {
                    n === e.properties.id ? (e.properties.active = "true", r(e), a(e, !0, r, t.map, f)) : (e.properties.active = "false", r(e))
                }
            }
        }
    }, {
        "../lib/add_coords": 19,
        "../lib/common_selectors": 20
    }],
    33: [function(t, e, n) {
        "use strict";
        var r = t("../lib/common_selectors"),
            i = r.isEnterKey,
            o = r.isEscapeKey,
            s = t("../feature_types/line_string"),
            a = t("../lib/types");
        e.exports = function(t) {
            var e = new s(t, {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "LineString",
                        coordinates: []
                    }
                }),
                n = function() {
                    t.events.changeMode("simple_select"), t.store["delete"]([e.id])
                },
                r = 0,
                u = function(n) {
                    t.ui.setClass({
                        mouse: "add"
                    }), e.updateCoordinate(r, n.lngLat.lng, n.lngLat.lat)
                },
                c = function(n) {
                    t.ui.setClass({
                        mouse: "add"
                    }), r > 0 && e.coordinates[0][0] === n.lngLat.lng && e.coordinates[0][1] === n.lngLat.lat ? l() : r > 0 && e.coordinates[r - 1][0] === n.lngLat.lng && e.coordinates[r - 1][1] === n.lngLat.lat ? l() : (e.updateCoordinate(r, n.lngLat.lng, n.lngLat.lat), r++)
                },
                l = function() {
                    e.removeCoordinate("" + r), r--, t.events.changeMode("simple_select", [e.id])
                };
            return {
                start: function() {
                    t.ui.setClass({
                        mouse: "add"
                    }), t.ui.setButtonActive(a.LINE), this.on("mousemove", function() {
                        return !0
                    }, u), this.on("click", function() {
                        return !0
                    }, c), this.on("keyup", o, n), this.on("keyup", i, l), this.on("trash", function() {
                        return !0
                    }, n)
                },
                stop: function() {
                    t.ui.setButtonInactive(a.LINE), e.isValid() || t.store["delete"]([e.id])
                },
                render: function(t, n) {
                    void 0 !== t.geometry.coordinates[0] && (t.properties.active = t.properties.id === e.id ? "true" : "false", t.properties.meta = "true" === t.properties.active ? "feature" : t.properties.meta, n(t))
                }
            }
        }
    }, {
        "../feature_types/line_string": 16,
        "../lib/common_selectors": 20,
        "../lib/types": 30
    }],
    34: [function(t, e, n) {
        "use strict";
        var r = t("../lib/common_selectors"),
            i = r.isEnterKey,
            o = r.isEscapeKey,
            s = t("../feature_types/point"),
            a = t("../lib/types");
        e.exports = function(t) {
            var e = new s(t, {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Point",
                        coordinates: []
                    }
                }),
                n = function() {
                    t.events.changeMode("simple_select"), t.store["delete"]([e.id])
                },
                r = function() {
                    t.ui.setClass({
                        mouse: "add"
                    })
                },
                u = !1,
                c = function(n) {
                    t.ui.setClass({
                        mouse: "add"
                    }), u = !0, e.updateCoordinate("", n.lngLat.lng, n.lngLat.lat), t.events.changeMode("simple_select", [e.id])
                };
            return {
                start: function() {
                    t.ui.setClass({
                        mouse: "add"
                    }), t.ui.setButtonActive(a.POINT), this.on("mousemove", function() {
                        return !0
                    }, r), this.on("click", function() {
                        return !0
                    }, c), this.on("keyup", o, n), this.on("keyup", i, n), this.on("trash", function() {
                        return !0
                    }, n)
                },
                stop: function() {
                    t.ui.setButtonInactive(a.POINT), u === !1 && t.store["delete"]([e.id])
                },
                render: function(t, n) {
                    t.properties.active = t.properties.id === e.id ? "true" : "false", "false" === t.properties.active && n(t)
                }
            }
        }
    }, {
        "../feature_types/point": 17,
        "../lib/common_selectors": 20,
        "../lib/types": 30
    }],
    35: [function(t, e, n) {
        "use strict";
        var r = t("../lib/common_selectors"),
            i = r.isEnterKey,
            o = r.isEscapeKey,
            s = t("../feature_types/polygon"),
            a = t("../lib/types");
        e.exports = function(t) {
            var e = new s(t, {
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Polygon",
                        coordinates: [
                            []
                        ]
                    }
                }),
                n = function() {
                    t.events.changeMode("simple_select"), t.store["delete"]([e.id])
                },
                r = 0,
                u = function(n) {
                    t.ui.setClass({
                        mouse: "add"
                    }), e.updateCoordinate("0." + r, n.lngLat.lng, n.lngLat.lat)
                },
                c = function(n) {
                    t.ui.setClass({
                        mouse: "add"
                    }), r > 0 && e.coordinates[0][0][0] === n.lngLat.lng && e.coordinates[0][0][1] === n.lngLat.lat ? l() : r > 0 && e.coordinates[0][r - 1][0] === n.lngLat.lng && e.coordinates[0][r - 1][1] === n.lngLat.lat ? l() : (e.updateCoordinate("0." + r, n.lngLat.lng, n.lngLat.lat), r++)
                },
                l = function() {
                    e.removeCoordinate("0." + r), r--, t.events.changeMode("simple_select", [e.id])
                };
            return {
                start: function() {
                    t.ui.setClass({
                        mouse: "add"
                    }), t.ui.setButtonActive(a.POLYGON), this.on("mousemove", function() {
                        return !0
                    }, u), this.on("click", function() {
                        return !0
                    }, c), this.on("keyup", o, n), this.on("keyup", i, l), this.on("trash", function() {
                        return !0
                    }, n)
                },
                stop: function() {
                    t.ui.setButtonInactive(a.POLYGON), e.isValid() || t.store["delete"]([e.id])
                },
                render: function(t, n) {
                    if (t.properties.active = t.properties.id === e.id ? "true" : "false", t.properties.meta = "true" === t.properties.active ? "feature" : t.properties.meta, "true" === t.properties.active && 1 === r) {
                        var i = [
                            [t.geometry.coordinates[0][0][0], t.geometry.coordinates[0][0][1]],
                            [t.geometry.coordinates[0][1][0], t.geometry.coordinates[0][1][1]]
                        ];
                        n({
                            type: "Feature",
                            properties: t.properties,
                            geometry: {
                                coordinates: i,
                                type: "LineString"
                            }
                        })
                    } else("false" === t.properties.active || r > 1) && n(t)
                }
            }
        }
    }, {
        "../feature_types/polygon": 18,
        "../lib/common_selectors": 20,
        "../lib/types": 30
    }],
    36: [function(t, e, n) {
        "use strict";
        var r = t("../lib/common_selectors"),
            i = r.noFeature,
            o = r.isShiftDown,
            s = r.isFeature,
            a = r.isOfMetaType,
            u = t("../lib/add_coords");
        e.exports = function(t, e) {
            var n = {};
            (e || []).forEach(function(e) {
                n[e] = t.store.get(e)
            });
            var r = null,
                c = !1,
                l = null,
                p = null,
                f = null,
                h = function(t) {
                    if (s(t)) {
                        var e = t.featureTarget.properties;
                        return void 0 !== n[e.id] && "Point" !== n[e.id].type
                    }
                    return !1
                },
                d = function() {
                    var t = Object.keys(n);
                    l = t.map(function(t) {
                        return n[t].getCoordinates()
                    }), p = t.map(function(t) {
                        return n[t]
                    }), f = t.length
                },
                y = function(e) {
                    t.api.changeMode("direct_select", {
                        featureId: e.featureTarget.properties.id
                    })
                };
            return {
                start: function() {
                    this.on("click", i, function() {
                        var t = this,
                            e = Object.keys(n);
                        n = {}, e.forEach(function(e) {
                            return t.render(e)
                        }), this.fire("selected.end", {
                            featureIds: e
                        })
                    }), this.on("mousedown", a("vertex"), function(e) {
                        t.api.changeMode("direct_select", {
                            featureId: e.featureTarget.properties.parent,
                            coordPath: e.featureTarget.properties.coord_path,
                            isDragging: !0,
                            startPos: e.lngLat
                        })
                    }), this.on("mousedown", s, function(e) {
                        var i = this;
                        c = !0, r = e.lngLat;
                        var s = e.featureTarget.properties.id,
                            a = void 0 !== n[s];
                        if (a && !o(e)) this.on("click", h, y);
                        else if (a && o(e)) delete n[s], this.fire("selected.end", {
                            featureIds: [s]
                        }), this.render(s);
                        else if (!a && o(e)) n[s] = t.store.get(s), this.fire("selected.start", {
                            featureIds: [s]
                        }), this.render(s);
                        else {
                            var u = Object.keys(n);
                            u.forEach(function(t) {
                                return i.render(t)
                            }), n = {}, n[s] = t.store.get(s), this.fire("selected.end", {
                                featureIds: u
                            }), this.fire("selected.start", {
                                featureIds: [s]
                            }), this.render(s)
                        }
                    }), this.on("mouseup", function() {
                        return !0
                    }, function() {
                        c = !1, l = null, p = null, f = null
                    }), this.on("drag", function() {
                        return c
                    }, function(t) {
                        this.off("click", h, y), t.originalEvent.stopPropagation(), null === l && d();
                        for (var e = t.lngLat.lng - r.lng, n = t.lngLat.lat - r.lat, i = function(t) {
                                return [t[0] + e, t[1] + n]
                            }, o = function(t) {
                                return t.map(function(t) {
                                    return [t[0] + e, t[1] + n]
                                })
                            }, s = 0; f > s; s++) {
                            var a = p[s];
                            "Point" === a.type ? a.setCoordinates([l[s][0] + e, l[s][1] + n]) : "LineString" === a.type ? a.setCoordinates(l[s].map(i)) : "Polygon" === a.type && a.setCoordinates(l[s].map(o))
                        }
                    }), this.on("trash", function() {
                        return !0
                    }, function() {
                        c = !1, l = null, p = null, f = null, t.store["delete"](Object.keys(n)), n = {}
                    })
                },
                render: function(e, r) {
                    e.properties.active = n[e.properties.id] ? "true" : "false", "true" === e.properties.active && u(e, !1, r, t.map, []), r(e)
                }
            }
        }
    }, {
        "../lib/add_coords": 19,
        "../lib/common_selectors": 20
    }],
    37: [function(t, e, n) {
        "use strict";
        var r = t("hat"),
            i = {
                defaultMode: "simple_select",
                position: "top-left",
                keybindings: !0,
                displayControlsDefault: !0,
                styles: t("./lib/theme"),
                controls: {}
            },
            o = {
                point: !0,
                line_string: !0,
                polygon: !0,
                trash: !0
            },
            s = {
                point: !1,
                line_string: !1,
                polygon: !1,
                trash: !1
            };
        e.exports = function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {
                controls: {}
            } : arguments[0];
            return t.displayControlsDefault === !1 ? t.controls = Object.assign(s, t.controls) : t.controls = Object.assign(o, t.controls), t = Object.assign(i, t), t.styles = t.styles.reduce(function(t, e) {
                if (e.id = e.id || r(), e.source) t.push(e);
                else {
                    var n = e.id;
                    e.id = n + ".hot", e.source = "mapbox-gl-draw-hot", t.push(JSON.parse(JSON.stringify(e))), e.id = n + ".cold", e.source = "mapbox-gl-draw-cold", t.push(JSON.parse(JSON.stringify(e)))
                }
                return t
            }, []), t
        }
    }, {
        "./lib/theme": 27,
        hat: 8
    }],
    38: [function(t, e, n) {
        "use strict";
        e.exports = function() {
            var t = this,
                e = this.ctx.map && void 0 !== this.ctx.map.getSource("mapbox-gl-draw-hot");
            if (e) {
                var n, r, i;
                ! function() {
                    n = t.ctx.events.currentModeName(), t.ctx.ui.setClass({
                        mode: n
                    }), r = [], i = [], t.isDirty ? i = t.featureIds : (r = t.changedIds.filter(function(e) {
                        return void 0 !== t.features[e]
                    }), i = t.sources.hot.filter(function(t) {
                        return t.properties.id && -1 === r.indexOf(t.properties.id) && void 0 !== this.features[t.properties.id]
                    }.bind(t)).map(function(t) {
                        return t.properties.id
                    })), t.sources.hot = [];
                    var e = t.sources.cold.length;
                    t.sources.cold = t.isDirty ? [] : t.sources.cold.filter(function(t) {
                        var e = t.properties.id || t.properties.parent;
                        return -1 === r.indexOf(e)
                    });
                    var o = [];
                    r.concat(i).map(function(t) {
                        return r.indexOf(t) > -1 ? {
                            source: "hot",
                            id: t
                        } : {
                            source: "cold",
                            id: t
                        }
                    }).forEach(function(t) {
                        var e = t.id,
                            r = t.source,
                            i = this.features[e],
                            s = i.internal(n);
                        "hot" === r && i.isValid() && o.push(i.toGeoJSON()), this.ctx.events.currentModeRender(s, function(t) {
                            this.sources[r].push(t)
                        }.bind(this))
                    }.bind(t)), e !== t.sources.cold.length && t.ctx.map.getSource("mapbox-gl-draw-cold").setData({
                        type: "FeatureCollection",
                        features: t.sources.cold
                    }), t.ctx.map.getSource("mapbox-gl-draw-hot").setData({
                        type: "FeatureCollection",
                        features: t.sources.hot
                    }), o.length && t.ctx.map.fire("draw.changed", {
                        features: o
                    })
                }()
            }
            this.isDirty = !1, this.changedIds = []
        }
    }, {}],
    39: [function(t, e, n) {
        "use strict";
        var r = t("./events"),
            i = t("./store"),
            o = t("./ui");
        e.exports = function(t) {
            t.events = r(t), t.map = null, t.container = null, t.store = null, o(t);
            var e = {
                addTo: function(n) {
                    return t.map = n, e.onAdd(n), this
                },
                remove: function() {
                    return e.removeLayers(), t.ui.removeButtons(), t.events.removeEventListeners(), t.map = null, t.container = null, t.store = null, this
                },
                onAdd: function(n) {
                    t.container = n.getContainer(), t.store = new i(t), t.ui.addButtons(), n.style.loaded() ? (t.events.addEventListeners(), e.addLayers()) : n.on("load", function() {
                        t.events.addEventListeners(), e.addLayers()
                    })
                },
                addLayers: function() {
                    t.map.addSource("mapbox-gl-draw-cold", {
                        data: {
                            type: "FeatureCollection",
                            features: []
                        },
                        type: "geojson"
                    }), t.map.addSource("mapbox-gl-draw-hot", {
                        data: {
                            type: "FeatureCollection",
                            features: []
                        },
                        type: "geojson"
                    }), t.options.styles.forEach(function(e) {
                        t.map.addLayer(e)
                    }), t.store.render()
                },
                removeLayers: function() {
                    t.options.styles.forEach(function(e) {
                        t.map.removeLayer(e.id)
                    }), t.map.removeSource("mapbox-gl-draw-cold"), t.map.removeSource("mapbox-gl-draw-hot")
                }
            };
            return e
        }
    }, {
        "./events": 14,
        "./store": 40,
        "./ui": 41
    }],
    40: [function(t, e, n) {
        "use strict";
        var r = t("./lib/util"),
            i = r.throttle,
            o = t("./render"),
            s = e.exports = function(t) {
                this.ctx = t, this.features = {}, this.featureIds = [], this.sources = {
                    hot: [],
                    cold: []
                }, this.render = i(o, 16, this), this.isDirty = !1, this.changedIds = []
            };
        s.prototype.setDirty = function() {
            this.isDirty = !0
        }, s.prototype.featureChanged = function(t) {
            -1 === this.changedIds.indexOf(t) && this.changedIds.push(t)
        }, s.prototype.add = function(t) {
            return this.featureChanged(t.id), this.features[t.id] = t, -1 === this.featureIds.indexOf(t.id) && this.featureIds.push(t.id), t.id
        }, s.prototype.get = function(t) {
            return this.features[t]
        }, s.prototype.getAll = function() {
            var t = this;
            return Object.keys(this.features).map(function(e) {
                return t.features[e]
            })
        }, s.prototype["delete"] = function(t) {
            var e = this,
                n = [];
            t.forEach(function(t) {
                var r = e.featureIds.indexOf(t);
                if (-1 !== r) {
                    var i = e.get(t);
                    n.push(i.toGeoJSON()), delete e.features[t], e.featureIds.splice(r, 1)
                }
            }), n.length > 0 && (this.isDirty = !0, this.ctx.map.fire("draw.deleted", {
                featureIds: n
            }))
        }
    }, {
        "./lib/util": 31,
        "./render": 38
    }],
    41: [function(t, e, n) {
        "use strict";
        var r = t("./lib/types"),
            i = t("./lib/util"),
            o = i.createButton;
        e.exports = function(t) {
            var e = {},
                n = {
                    mode: null,
                    feature: null,
                    mouse: null
                },
                i = {
                    mode: null,
                    feature: null,
                    mouse: null
                },
                s = !1,
                a = ["mode", "feature", "mouse"];
            window.usedClasses = {}, requestAnimationFrame(function u() {
                if (t.container) {
                    if (s) {
                        var e = [],
                            r = [],
                            o = [];
                        i.feature = "none" === i.mouse ? null : i.feature, a.forEach(function(t) {
                            o.push(t + "-" + i[t]), i[t] !== n[t] && (e.push(t + "-" + n[t]), null !== i[t] && r.push(t + "-" + i[t]))
                        }), window.usedClasses[o.join(",")] = !0, e.length && (t.container.classList.remove.apply(t.container.classList, e), t.container.classList.add.apply(t.container.classList, r)), a.forEach(function(t) {
                            n[t] = i[t]
                        }), s = !1
                    }
                    requestAnimationFrame(u)
                }
            }), t.ui = {
                setClass: function(t) {
                    a.forEach(function(e) {
                        t[e] && (i[e] = t[e], i[e] !== n[e] && (s = !0))
                    })
                },
                addButtons: function() {
                    var n = "mapbox-gl-draw_ctrl-draw-btn",
                        i = t.options.controls,
                        s = "mapboxgl-ctrl-";
                    switch (t.options.position) {
                        case "top-left":
                        case "top-right":
                        case "bottom-left":
                        case "bottom-right":
                            s += t.options.position;
                            break;
                        default:
                            s += "top-left"
                    }
                    var a = t.container.getElementsByClassName(s)[0],
                        u = a.getElementsByClassName("mapboxgl-ctrl-group")[0];
                    if (!u) {
                        u = document.createElement("div"), u.className = "mapboxgl-ctrl-group mapboxgl-ctrl";
                        var c = a.getElementsByClassName("mapboxgl-ctrl-attrib")[0];
                        c ? a.insertBefore(u, c) : a.appendChild(u)
                    }
                    i.line_string && (e[r.LINE] = o(u, {
                        className: n + " mapbox-gl-draw_line",
                        title: "LineString tool " + (t.options.keybindings && "(l)"),
                        fn: function() {
                            return t.api.changeMode("draw_line_string")
                        }
                    }, n)), i[r.POLYGON] && (e[r.POLYGON] = o(u, {
                        className: n + " mapbox-gl-draw_polygon",
                        title: "Polygon tool " + (t.options.keybindings && "(p)"),
                        fn: function() {
                            return t.api.changeMode("draw_polygon")
                        }
                    }, n)), i[r.POINT] && (e[r.POINT] = o(u, {
                        className: n + " mapbox-gl-draw_point",
                        title: "Marker tool " + (t.options.keybindings && "(m)"),
                        fn: function() {
                            return t.api.changeMode("draw_point")
                        }
                    }, n)), i.trash && (e.trash = o(u, {
                        className: n + " mapbox-gl-draw_trash",
                        title: "delete",
                        fn: function() {
                            t.api.trash(), t.ui.setButtonInactive("trash")
                        }
                    }, n))
                },
                setButtonActive: function(t) {
                    e[t] && "trash" !== t && e[t].classList.add("active")
                },
                setButtonInactive: function(t) {
                    e[t] && e[t].classList.remove("active")
                },
                setAllInactive: function() {
                    var t = Object.keys(e);
                    t.forEach(function(t) {
                        if ("trash" !== t) {
                            var n = e[t];
                            n.classList.remove("active")
                        }
                    })
                },
                removeButtons: function() {
                    var t = Object.keys(e);
                    t.forEach(function(t) {
                        var n = e[t];
                        n.parentNode && n.parentNode.removeChild(n), e[t] = null
                    })
                }
            }
        }
    }, {
        "./lib/types": 30,
        "./lib/util": 31
    }]
}, {}, [1]);