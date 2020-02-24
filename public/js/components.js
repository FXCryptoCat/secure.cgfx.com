/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = a.document,
        e = c.slice,
        f = c.concat,
        g = c.push,
        h = c.indexOf,
        i = {},
        j = i.toString,
        k = i.hasOwnProperty,
        l = {},
        m = "1.12.4",
        n = function(a, b) {
            return new n.fn.init(a, b)
        },
        o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this)
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a) {
            return n.each(this, a)
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (n.isPlainObject(c) || (b = n.isArray(c))) ? (b ? (b = !1, f = a && n.isArray(a) ? a : []) : f = a && n.isPlainObject(a) ? a : {}, g[d] = n.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a)
        },
        isArray: Array.isArray || function(a) {
            return "array" === n.type(a)
        },
        isWindow: function(a) {
            return null != a && a == a.window
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            try {
                if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (c) {
                return !1
            }
            if (!l.ownFirst)
                for (b in a) return k.call(a, b);
            for (b in a);
            return void 0 === b || k.call(a, b)
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a
        },
        globalEval: function(b) {
            b && n.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b)
            })(b)
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) {
                for (c = a.length; c > d; d++)
                    if (b.call(a[d], d, a[d]) === !1) break
            } else
                for (d in a)
                    if (b.call(a[d], d, a[d]) === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "")
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : g.call(c, a)), c
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (h) return h.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, e, g = 0,
                h = [];
            if (s(a))
                for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e);
            else
                for (g in a) e = b(a[g], g, c), null != e && h.push(e);
            return f.apply([], h)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), n.isFunction(a) ? (c = e.call(arguments, 2), d = function() {
                return a.apply(b || this, c.concat(e.call(arguments)))
            }, d.guid = a.guid = a.guid || n.guid++, d) : void 0
        },
        now: function() {
            return +new Date
        },
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = !!a && "length" in a && a.length,
            c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = ga(),
            z = ga(),
            A = ga(),
            B = function(a, b) {
                return a === b && (l = !0), 0
            },
            C = 1 << 31,
            D = {}.hasOwnProperty,
            E = [],
            F = E.pop,
            G = E.push,
            H = E.push,
            I = E.slice,
            J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b) return c;
                return -1
            },
            K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            L = "[\\x20\\t\\r\\n\\f]",
            M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]",
            O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)",
            P = new RegExp(L + "+", "g"),
            Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"),
            R = new RegExp("^" + L + "*," + L + "*"),
            S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"),
            T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"),
            U = new RegExp(O),
            V = new RegExp("^" + M + "$"),
            W = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M + "|[*])"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + K + ")$", "i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
            },
            X = /^(?:input|select|textarea|button)$/i,
            Y = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            _ = /[+~]/,
            aa = /'|\\/g,
            ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"),
            ca = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            },
            da = function() {
                m()
            };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument,
                x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a)))
                    if (f = o[1]) {
                        if (9 === x) {
                            if (!(j = b.getElementById(f))) return d;
                            if (j.id === f) return d.push(j), d
                        } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d
                    } else {
                        if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                        if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), d
                    }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a;
                    else if ("object" !== b.nodeName.toLowerCase()) {
                        (k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&"): b.setAttribute("id", k = u), r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']";
                        while (h--) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e)
        }

        function ga() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function ha(a) {
            return a[u] = !0, a
        }

        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ja(a, b) {
            var c = a.split("|"),
                e = c.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ka(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    e = a.parentNode,
                    f = b.parentNode,
                    g = [a],
                    h = [b];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                c = a;
                while (c = c.parentNode) g.unshift(c);
                c = b;
                while (c = c.parentNode) h.unshift(c);
                while (g[d] === h[d]) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0
            }, n) : n
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b)
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return fa(b, n, null, [a]).length > 0
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fa.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fa.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h,
                            t = !1;
                        if (q) {
                            if (f) {
                                while (p) {
                                    m = b;
                                    while (m = m[p])
                                        if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if (1 === m.nodeType && ++t && m === b) {
                                        k[a] = [w, n, t];
                                        break
                                    }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1)
                                while (m = ++n && m && m[p] || (t = n = 0) || o.pop())
                                    if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
                            return t -= e, t === d || t % d === 0 && t / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                    }
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0
                    }
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === o
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return Y.test(a.nodeName)
                },
                input: function(a) {
                    return X.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: na(function() {
                    return [0]
                }),
                last: na(function(a, b) {
                    return [b - 1]
                }),
                eq: na(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = la(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = ma(b);

        function pa() {}
        pa.prototype = d.filters = d.pseudos, d.setFilters = new pa, g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0)
        };

        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function ra(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j, k = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                            if (i[d] = k, k[2] = a(b, c, g)) return !0
                        }
            }
        }

        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c
        }

        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
            return g
        }

        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || ta(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ua(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ua(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                    return a === b
                }, h, !0), l = ra(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null, e
                }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [ra(sa(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                            value: " " === a[i - 2].type ? "*" : ""
                        })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a))
                    }
                    m.push(c)
                }
            return sa(m)
        }

        function xa(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, o, q, r = 0,
                        s = "0",
                        t = f && [],
                        u = [],
                        v = j,
                        x = f || e && d.find.TAG("*", k),
                        y = w += null == v ? 1 : Math.random() || .1,
                        z = x.length;
                    for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                        if (e && l) {
                            o = 0, g || l.ownerDocument === n || (m(l), h = !p);
                            while (q = a[o++])
                                if (q(l, g || n, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = y)
                        }
                        c && ((l = !q && l) && r--, f && t.push(l))
                    }
                    if (r += s, c && s !== r) {
                        o = 0;
                        while (q = b[o++]) q(t, u, g, h);
                        if (f) {
                            if (r > 0)
                                while (s--) t[s] || u[s] || (u[s] = F.call(i));
                            u = ua(u)
                        }
                        H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i)
                    }
                    return k && (w = y, j = v), t
                };
            return c ? ha(f) : f
        }
        return h = fa.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a
            }
            return f
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = W.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ia(function(a) {
            return null == a.getAttribute("disabled")
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fa
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && n(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        v = function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        },
        w = n.expr.match.needsContext,
        x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        y = /^.[^:#\[\.,]*$/;

    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function(a) {
            return n.inArray(a, b) > -1 !== c
        })
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (n.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) n.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? n.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0))
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = n.fn.init = function(a, b, c) {
            var e, f;
            if (!a) return this;
            if (c = c || A, "string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : B.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
                if (e[1]) {
                    if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), x.test(e[1]) && n.isPlainObject(b))
                        for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                    return this
                }
                if (f = d.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return A.find(a);
                    this.length = 1, this[0] = f
                }
                return this.context = d, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
        };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/,
        E = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    n.fn.extend({
        has: function(a) {
            var b, c = n(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (n.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? n.inArray(this[0], n(a)) : n.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function F(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return u(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c)
        },
        next: function(a) {
            return F(a, "nextSibling")
        },
        prev: function(a) {
            return F(a, "previousSibling")
        },
        nextAll: function(a) {
            return u(a, "nextSibling")
        },
        prevAll: function(a) {
            return u(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c)
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return v(a.firstChild)
        },
        contents: function(a) {
            return n.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : n.merge([], a.childNodes)
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (E[a] || (e = n.uniqueSort(e)), D.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var G = /\S+/g;

    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [],
            g = [],
            h = -1,
            i = function() {
                for (e = a.once, d = b = !0; g.length; h = -1) {
                    c = g.shift();
                    while (++h < f.length) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1)
                }
                a.memory || (c = !1), b = !1, e && (f = c ? [] : "")
            },
            j = {
                add: function() {
                    return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                        n.each(b, function(b, c) {
                            n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c)
                        })
                    }(arguments), c && !b && i()), this
                },
                remove: function() {
                    return n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, f, c)) > -1) f.splice(c, 1), h >= c && h--
                    }), this
                },
                has: function(a) {
                    return a ? n.inArray(a, f) > -1 : f.length > 0
                },
                empty: function() {
                    return f && (f = []), this
                },
                disable: function() {
                    return e = g = [], f = c = "", this
                },
                disabled: function() {
                    return !f
                },
                lock: function() {
                    return e = !0, c || j.disable(), this
                },
                locked: function() {
                    return !!e
                },
                fireWith: function(a, c) {
                    return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this
                },
                fire: function() {
                    return j.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!d
                }
            };
        return j
    }, n.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", n.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", n.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", n.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = e.call(arguments),
                d = c.length,
                f = 1 !== d || a && n.isFunction(a.promise) ? d : 0,
                g = 1 === f ? a : n.Deferred(),
                h = function(a, b, c) {
                    return function(d) {
                        b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (d > 1)
                for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [n]), n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))))
        }
    });

    function J() {
        d.addEventListener ? (d.removeEventListener("DOMContentLoaded", K), a.removeEventListener("load", K)) : (d.detachEvent("onreadystatechange", K), a.detachEvent("onload", K))
    }

    function K() {
        (d.addEventListener || "load" === a.event.type || "complete" === d.readyState) && (J(), n.ready())
    }
    n.ready.promise = function(b) {
        if (!I)
            if (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll) a.setTimeout(n.ready);
            else if (d.addEventListener) d.addEventListener("DOMContentLoaded", K), a.addEventListener("load", K);
        else {
            d.attachEvent("onreadystatechange", K), a.attachEvent("onload", K);
            var c = !1;
            try {
                c = null == a.frameElement && d.documentElement
            } catch (e) {}
            c && c.doScroll && ! function f() {
                if (!n.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (b) {
                        return a.setTimeout(f, 50)
                    }
                    J(), n.ready()
                }
            }()
        }
        return I.promise(b)
    }, n.ready.promise();
    var L;
    for (L in n(l)) break;
    l.ownFirst = "0" === L, l.inlineBlockNeedsLayout = !1, n(function() {
            var a, b, c, e;
            c = d.getElementsByTagName("body")[0], c && c.style && (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", l.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(e))
        }),
        function() {
            var a = d.createElement("div");
            l.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                l.deleteExpando = !1
            }
            a = null
        }();
    var M = function(a) {
            var b = n.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        },
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(O, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                } catch (e) {}
                n.data(a, b, c)
            } else c = void 0;
        }
        return c
    }

    function Q(a) {
        var b;
        for (b in a)
            if (("data" !== b || !n.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function R(a, b, d, e) {
        if (M(a)) {
            var f, g, h = n.expando,
                i = a.nodeType,
                j = i ? n.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || n.guid++ : h), j[k] || (j[k] = i ? {} : {
                toJSON: n.noop
            }), "object" != typeof b && "function" != typeof b || (e ? j[k] = n.extend(j[k], b) : j[k].data = n.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[n.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[n.camelCase(b)])) : f = g, f
        }
    }

    function S(a, b, c) {
        if (M(a)) {
            var d, e, f = a.nodeType,
                g = f ? n.cache : a,
                h = f ? a[n.expando] : n.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    n.isArray(b) ? b = b.concat(n.map(b, n.camelCase)) : b in d ? b = [b] : (b = n.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--) delete d[b[e]];
                    if (c ? !Q(d) : !n.isEmptyObject(d)) return
                }(c || (delete g[h].data, Q(g[h]))) && (f ? n.cleanData([a], !0) : l.deleteExpando || g != g.window ? delete g[h] : g[h] = void 0)
            }
        }
    }
    n.extend({
            cache: {},
            noData: {
                "applet ": !0,
                "embed ": !0,
                "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(a) {
                return a = a.nodeType ? n.cache[a[n.expando]] : a[n.expando], !!a && !Q(a)
            },
            data: function(a, b, c) {
                return R(a, b, c)
            },
            removeData: function(a, b) {
                return S(a, b)
            },
            _data: function(a, b, c) {
                return R(a, b, c, !0)
            },
            _removeData: function(a, b) {
                return S(a, b, !0)
            }
        }), n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0],
                    g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = n.data(f), 1 === f.nodeType && !n._data(f, "parsedAttrs"))) {
                        c = g.length;
                        while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                        n._data(f, "parsedAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    n.data(this, a)
                }) : arguments.length > 1 ? this.each(function() {
                    n.data(this, a, b)
                }) : f ? P(f, a, n.data(f, a)) : void 0
            },
            removeData: function(a) {
                return this.each(function() {
                    n.removeData(this, a)
                })
            }
        }), n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue", d = n._data(a, b), c && (!d || n.isArray(c) ? d = n._data(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b),
                    d = c.length,
                    e = c.shift(),
                    f = n._queueHooks(a, b),
                    g = function() {
                        n.dequeue(a, b)
                    };
                "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return n._data(a, c) || n._data(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        n._removeData(a, b + "queue"), n._removeData(a, c)
                    })
                })
            }
        }), n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1,
                    e = n.Deferred(),
                    f = this,
                    g = this.length,
                    h = function() {
                        --d || e.resolveWith(f, [f])
                    };
                "string" != typeof a && (b = a, a = void 0), a = a || "fx";
                while (g--) c = n._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
                return h(), e.promise(b)
            }
        }),
        function() {
            var a;
            l.shrinkWrapBlocks = function() {
                if (null != a) return a;
                a = !1;
                var b, c, e;
                return c = d.getElementsByTagName("body")[0], c && c.style ? (b = d.createElement("div"), e = d.createElement("div"), e.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(e).appendChild(b), "undefined" != typeof b.style.zoom && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(d.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(e), a) : void 0
            }
        }();
    var T = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        U = new RegExp("^(?:([+-])=|)(" + T + ")([a-z%]*)$", "i"),
        V = ["Top", "Right", "Bottom", "Left"],
        W = function(a, b) {
            return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        };

    function X(a, b, c, d) {
        var e, f = 1,
            g = 20,
            h = d ? function() {
                return d.cur()
            } : function() {
                return n.css(a, b, "")
            },
            i = h(),
            j = c && c[3] || (n.cssNumber[b] ? "" : "px"),
            k = (n.cssNumber[b] || "px" !== j && +i) && U.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g)
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e
    }
    var Y = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c) Y(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                    return j.call(n(a), c)
                })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        Z = /^(?:checkbox|radio)$/i,
        $ = /<([\w:-]+)/,
        _ = /^$|\/(?:java|ecma)script/i,
        aa = /^\s+/,
        ba = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ca(a) {
        var b = ba.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }! function() {
        var a = d.createElement("div"),
            b = d.createDocumentFragment(),
            c = d.createElement("input");
        a.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", l.leadingWhitespace = 3 === a.firstChild.nodeType, l.tbody = !a.getElementsByTagName("tbody").length, l.htmlSerialize = !!a.getElementsByTagName("link").length, l.html5Clone = "<:nav></:nav>" !== d.createElement("nav").cloneNode(!0).outerHTML, c.type = "checkbox", c.checked = !0, b.appendChild(c), l.appendChecked = c.checked, a.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!a.cloneNode(!0).lastChild.defaultValue, b.appendChild(a), c = d.createElement("input"), c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), a.appendChild(c), l.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, l.noCloneEvent = !!a.addEventListener, a[n.expando] = 1, l.attributes = !a.getAttribute(n.expando)
    }();
    var da = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: l.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    da.optgroup = da.option, da.tbody = da.tfoot = da.colgroup = da.caption = da.thead, da.th = da.td;

    function ea(a, b) {
        var c, d, e = 0,
            f = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || n.nodeName(d, b) ? f.push(d) : n.merge(f, ea(d, b));
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], f) : f
    }

    function fa(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) n._data(c, "globalEval", !b || n._data(b[d], "globalEval"))
    }
    var ga = /<|&#?\w+;/,
        ha = /<tbody/i;

    function ia(a) {
        Z.test(a.type) && (a.defaultChecked = a.checked)
    }

    function ja(a, b, c, d, e) {
        for (var f, g, h, i, j, k, m, o = a.length, p = ca(b), q = [], r = 0; o > r; r++)
            if (g = a[r], g || 0 === g)
                if ("object" === n.type(g)) n.merge(q, g.nodeType ? [g] : g);
                else if (ga.test(g)) {
            i = i || p.appendChild(b.createElement("div")), j = ($.exec(g) || ["", ""])[1].toLowerCase(), m = da[j] || da._default, i.innerHTML = m[1] + n.htmlPrefilter(g) + m[2], f = m[0];
            while (f--) i = i.lastChild;
            if (!l.leadingWhitespace && aa.test(g) && q.push(b.createTextNode(aa.exec(g)[0])), !l.tbody) {
                g = "table" !== j || ha.test(g) ? "<table>" !== m[1] || ha.test(g) ? 0 : i : i.firstChild, f = g && g.childNodes.length;
                while (f--) n.nodeName(k = g.childNodes[f], "tbody") && !k.childNodes.length && g.removeChild(k)
            }
            n.merge(q, i.childNodes), i.textContent = "";
            while (i.firstChild) i.removeChild(i.firstChild);
            i = p.lastChild
        } else q.push(b.createTextNode(g));
        i && p.removeChild(i), l.appendChecked || n.grep(ea(q, "input"), ia), r = 0;
        while (g = q[r++])
            if (d && n.inArray(g, d) > -1) e && e.push(g);
            else if (h = n.contains(g.ownerDocument, g), i = ea(p.appendChild(g), "script"), h && fa(i), c) {
            f = 0;
            while (g = i[f++]) _.test(g.type || "") && c.push(g)
        }
        return i = null, p
    }! function() {
        var b, c, e = d.createElement("div");
        for (b in {
                submit: !0,
                change: !0,
                focusin: !0
            }) c = "on" + b, (l[b] = c in a) || (e.setAttribute(c, "t"), l[b] = e.attributes[c].expando === !1);
        e = null
    }();
    var ka = /^(?:input|select|textarea)$/i,
        la = /^key/,
        ma = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        na = /^(?:focusinfocus|focusoutblur)$/,
        oa = /^([^.]*)(?:\.(.+)|)/;

    function pa() {
        return !0
    }

    function qa() {
        return !1
    }

    function ra() {
        try {
            return d.activeElement
        } catch (a) {}
    }

    function sa(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) sa(a, h, c, d, b[h], f);
            return a
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = qa;
        else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments)
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c)
        })
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = n.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) {
                    return "undefined" == typeof n || a && n.event.triggered === a.type ? void 0 : n.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(G) || [""], h = b.length;
                while (h--) f = oa.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = n.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = n.event.special[o] || {}, l = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (m = g[o]) || (m = g[o] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), n.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = n.hasData(a) && n._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(G) || [""], j = b.length;
                while (j--)
                    if (h = oa.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length;
                        while (f--) g = m[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(k) && (delete r.handle, n._removeData(a, "events"))
            }
        },
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [e || d],
                q = k.call(b, "type") ? b.type : b,
                r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (i = m = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !na.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), q = r.shift(), r.sort()), h = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : n.makeArray(c, [b]), l = n.event.special[q] || {}, f || !l.trigger || l.trigger.apply(e, c) !== !1)) {
                if (!f && !l.noBubble && !n.isWindow(e)) {
                    for (j = l.delegateType || q, na.test(j + q) || (i = i.parentNode); i; i = i.parentNode) p.push(i), m = i;
                    m === (e.ownerDocument || d) && p.push(m.defaultView || m.parentWindow || a)
                }
                o = 0;
                while ((i = p[o++]) && !b.isPropagationStopped()) b.type = o > 1 ? j : l.bindType || q, g = (n._data(i, "events") || {})[b.type] && n._data(i, "handle"), g && g.apply(i, c), g = h && i[h], g && g.apply && M(i) && (b.result = g.apply(i, c), b.result === !1 && b.preventDefault());
                if (b.type = q, !f && !b.isDefaultPrevented() && (!l._default || l._default.apply(p.pop(), c) === !1) && M(e) && h && e[q] && !n.isWindow(e)) {
                    m = e[h], m && (e[h] = null), n.event.triggered = q;
                    try {
                        e[q]()
                    } catch (s) {}
                    n.event.triggered = void 0, m && (e[h] = m)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [],
                i = e.call(arguments),
                j = (n._data(this, "events") || {})[a.type] || [],
                k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type,
                g = a,
                h = this.fixHooks[f];
            h || (this.fixHooks[f] = h = ma.test(f) ? this.mouseHooks : la.test(f) ? this.keyHooks : {}), e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length;
            while (b--) c = e[b], a[c] = g[c];
            return a.target || (a.target = g.srcElement || d), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, h.filter ? h.filter(a, g) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button,
                    h = b.fromElement;
                return null == a.pageX && null != b.clientX && (e = a.target.ownerDocument || d, f = e.documentElement, c = e.body, a.pageX = b.clientX + (f && f.scrollLeft || c && c.scrollLeft || 0) - (f && f.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (f && f.scrollTop || c && c.scrollTop || 0) - (f && f.clientTop || c && c.clientTop || 0)), !a.relatedTarget && h && (a.relatedTarget = h === a.target ? b.toElement : h), a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== ra() && this.focus) try {
                        return this.focus(), !1
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ra() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return n.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event, c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = d.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c)
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && ("undefined" == typeof a[d] && (a[d] = null), a.detachEvent(d, c))
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? pa : qa) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: qa,
        isPropagationStopped: qa,
        isImmediatePropagationStopped: qa,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = pa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = pa, a && !this.isSimulated && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = pa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.submit || (n.event.special.submit = {
        setup: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = n.nodeName(b, "input") || n.nodeName(b, "button") ? n.prop(b, "form") : void 0;
                c && !n._data(c, "submit") && (n.event.add(c, "submit._submit", function(a) {
                    a._submitBubble = !0
                }), n._data(c, "submit", !0))
            })
        },
        postDispatch: function(a) {
            a._submitBubble && (delete a._submitBubble, this.parentNode && !a.isTrigger && n.event.simulate("submit", this.parentNode, a))
        },
        teardown: function() {
            return n.nodeName(this, "form") ? !1 : void n.event.remove(this, "._submit")
        }
    }), l.change || (n.event.special.change = {
        setup: function() {
            return ka.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (n.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._justChanged = !0)
            }), n.event.add(this, "click._change", function(a) {
                this._justChanged && !a.isTrigger && (this._justChanged = !1), n.event.simulate("change", this, a)
            })), !1) : void n.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                ka.test(b.nodeName) && !n._data(b, "change") && (n.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || n.event.simulate("change", this.parentNode, a)
                }), n._data(b, "change", !0))
            })
        },
        handle: function(a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return n.event.remove(this, "._change"), !ka.test(this.nodeName)
        }
    }), l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a))
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b);
                e || d.addEventListener(a, c, !0), n._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = n._data(d, b) - 1;
                e ? n._data(d, b, e) : (d.removeEventListener(a, c, !0), n._removeData(d, b))
            }
        }
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return sa(this, a, b, c, d)
        },
        one: function(a, b, c, d) {
            return sa(this, a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = qa), this.each(function() {
                n.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ta = / jQuery\d+="(?:null|\d+)"/g,
        ua = new RegExp("<(?:" + ba + ")[\\s/>]", "i"),
        va = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        wa = /<script|<style|<link/i,
        xa = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ya = /^true\/(.*)/,
        za = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        Aa = ca(d),
        Ba = Aa.appendChild(d.createElement("div"));

    function Ca(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function Da(a) {
        return a.type = (null !== n.find.attr(a, "type")) + "/" + a.type, a
    }

    function Ea(a) {
        var b = ya.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function Fa(a, b) {
        if (1 === b.nodeType && n.hasData(a)) {
            var c, d, e, f = n._data(a),
                g = n._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) n.event.add(b, c, h[c][d])
            }
            g.data && (g.data = n.extend({}, g.data))
        }
    }

    function Ga(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !l.noCloneEvent && b[n.expando]) {
                e = n._data(b);
                for (d in e.events) n.removeEvent(b, d, e.handle);
                b.removeAttribute(n.expando)
            }
            "script" === c && b.text !== a.text ? (Da(b).text = a.text, Ea(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), l.html5Clone && a.innerHTML && !n.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Z.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue)
        }
    }

    function Ha(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0,
            o = a.length,
            p = o - 1,
            q = b[0],
            r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && xa.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d)
        });
        if (o && (k = ja(b, a[0].ownerDocument, !1, a, d), e = k.firstChild, 1 === k.childNodes.length && (k = e), e || d)) {
            for (i = n.map(ea(k, "script"), Da), h = i.length; o > m; m++) g = k, m !== p && (g = n.clone(g, !0, !0), h && n.merge(i, ea(g, "script"))), c.call(a[m], g, m);
            if (h)
                for (j = i[i.length - 1].ownerDocument, n.map(i, Ea), m = 0; h > m; m++) g = i[m], _.test(g.type || "") && !n._data(g, "globalEval") && n.contains(j, g) && (g.src ? n._evalUrl && n._evalUrl(g.src) : n.globalEval((g.text || g.textContent || g.innerHTML || "").replace(za, "")));
            k = e = null
        }
        return a
    }

    function Ia(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(ea(d)), d.parentNode && (c && n.contains(d.ownerDocument, d) && fa(ea(d, "script")), d.parentNode.removeChild(d));
        return a
    }
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(va, "<$1></$2>")
        },
        clone: function(a, b, c) {
            var d, e, f, g, h, i = n.contains(a.ownerDocument, a);
            if (l.html5Clone || n.isXMLDoc(a) || !ua.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Ba.innerHTML = a.outerHTML, Ba.removeChild(f = Ba.firstChild)), !(l.noCloneEvent && l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                for (d = ea(f), h = ea(a), g = 0; null != (e = h[g]); ++g) d[g] && Ga(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ea(a), d = d || ea(f), g = 0; null != (e = h[g]); g++) Fa(e, d[g]);
                else Fa(a, f);
            return d = ea(f, "script"), d.length > 0 && fa(d, !i && ea(a, "script")), d = h = e = null, f
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = n.expando, j = n.cache, k = l.attributes, m = n.event.special; null != (d = a[h]); h++)
                if ((b || M(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) m[e] ? n.event.remove(d, e) : n.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], k || "undefined" == typeof d.removeAttribute ? d[i] = void 0 : d.removeAttribute(i), c.push(f))
                }
        }
    }), n.fn.extend({
        domManip: Ha,
        detach: function(a) {
            return Ia(this, a, !0)
        },
        remove: function(a) {
            return Ia(this, a)
        },
        text: function(a) {
            return Y(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().append((this[0] && this[0].ownerDocument || d).createTextNode(a))
            }, null, a, arguments.length)
        },
        append: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return Ha(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = Ca(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return Ha(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && n.cleanData(ea(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && n.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b)
            })
        },
        html: function(a) {
            return Y(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(ta, "") : void 0;
                if ("string" == typeof a && !wa.test(a) && (l.htmlSerialize || !ua.test(a)) && (l.leadingWhitespace || !aa.test(a)) && !da[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ea(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = [];
            return Ha(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(ea(this)), c && c.replaceChild(b, this))
            }, a)
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = n(a), h = f.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), n(f[d])[b](c), g.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ja, Ka = {
        HTML: "block",
        BODY: "block"
    };

    function La(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body),
            d = n.css(c[0], "display");
        return c.detach(), d
    }

    function Ma(a) {
        var b = d,
            c = Ka[a];
        return c || (c = La(a, b), "none" !== c && c || (Ja = (Ja || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ja[0].contentWindow || Ja[0].contentDocument).document, b.write(), b.close(), c = La(a, b), Ja.detach()), Ka[a] = c), c
    }
    var Na = /^margin/,
        Oa = new RegExp("^(" + T + ")(?!px)[a-z%]+$", "i"),
        Pa = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e
        },
        Qa = d.documentElement;
    ! function() {
        var b, c, e, f, g, h, i = d.createElement("div"),
            j = d.createElement("div");
        if (j.style) {
            j.style.cssText = "float:left;opacity:.5", l.opacity = "0.5" === j.style.opacity, l.cssFloat = !!j.style.cssFloat, j.style.backgroundClip = "content-box", j.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === j.style.backgroundClip, i = d.createElement("div"), i.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", j.innerHTML = "", i.appendChild(j), l.boxSizing = "" === j.style.boxSizing || "" === j.style.MozBoxSizing || "" === j.style.WebkitBoxSizing, n.extend(l, {
                reliableHiddenOffsets: function() {
                    return null == b && k(), f
                },
                boxSizingReliable: function() {
                    return null == b && k(), e
                },
                pixelMarginRight: function() {
                    return null == b && k(), c
                },
                pixelPosition: function() {
                    return null == b && k(), b
                },
                reliableMarginRight: function() {
                    return null == b && k(), g
                },
                reliableMarginLeft: function() {
                    return null == b && k(), h
                }
            });

            function k() {
                var k, l, m = d.documentElement;
                m.appendChild(i), j.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", b = e = h = !1, c = g = !0, a.getComputedStyle && (l = a.getComputedStyle(j), b = "1%" !== (l || {}).top, h = "2px" === (l || {}).marginLeft, e = "4px" === (l || {
                    width: "4px"
                }).width, j.style.marginRight = "50%", c = "4px" === (l || {
                    marginRight: "4px"
                }).marginRight, k = j.appendChild(d.createElement("div")), k.style.cssText = j.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", k.style.marginRight = k.style.width = "0", j.style.width = "1px", g = !parseFloat((a.getComputedStyle(k) || {}).marginRight), j.removeChild(k)), j.style.display = "none", f = 0 === j.getClientRects().length, f && (j.style.display = "", j.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", j.childNodes[0].style.borderCollapse = "separate", k = j.getElementsByTagName("td"), k[0].style.cssText = "margin:0;border:0;padding:0;display:none", f = 0 === k[0].offsetHeight, f && (k[0].style.display = "", k[1].style.display = "none", f = 0 === k[0].offsetHeight)), m.removeChild(i)
            }
        }
    }();
    var Ra, Sa, Ta = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ra = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b)
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), c && !l.pixelMarginRight() && Oa.test(g) && Na.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f), void 0 === g ? g : g + ""
    }) : Qa.currentStyle && (Ra = function(a) {
        return a.currentStyle
    }, Sa = function(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ra(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Oa.test(g) && !Ta.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
    });

    function Ua(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }
    var Va = /alpha\([^)]*\)/i,
        Wa = /opacity\s*=\s*([^)]*)/i,
        Xa = /^(none|table(?!-c[ea]).+)/,
        Ya = new RegExp("^(" + T + ")(.*)$", "i"),
        Za = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        $a = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        _a = ["Webkit", "O", "Moz", "ms"],
        ab = d.createElement("div").style;

    function bb(a) {
        if (a in ab) return a;
        var b = a.charAt(0).toUpperCase() + a.slice(1),
            c = _a.length;
        while (c--)
            if (a = _a[c] + b, a in ab) return a
    }

    function cb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = n._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && W(d) && (f[g] = n._data(d, "olddisplay", Ma(d.nodeName)))) : (e = W(d), (c && "none" !== c || !e) && n._data(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function db(a, b, c) {
        var d = Ya.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function eb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + V[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + V[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + V[f] + "Width", !0, e))) : (g += n.css(a, "padding" + V[f], !0, e), "padding" !== c && (g += n.css(a, "border" + V[f] + "Width", !0, e)));
        return g
    }

    function fb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ra(a),
            g = l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Sa(a, b, f), (0 > e || null == e) && (e = a.style[b]), Oa.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + eb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Sa(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": l.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b),
                    i = a.style;
                if (b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = U.exec(c)) && e[1] && (c = X(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
                    i[b] = c
                } catch (j) {}
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = bb(h) || h), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Sa(a, b, d)), "normal" === f && b in $a && (f = $a[b]), "" === c || c ? (e = parseFloat(f), c === !0 || isFinite(e) ? e || 0 : f) : f
        }
    }), n.each(["height", "width"], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Xa.test(n.css(a, "display")) && 0 === a.offsetWidth ? Pa(a, Za, function() {
                    return fb(a, b, d)
                }) : fb(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && Ra(a);
                return db(a, c, d ? eb(a, b, d, l.boxSizing && "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), l.opacity || (n.cssHooks.opacity = {
        get: function(a, b) {
            return Wa.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = n.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === n.trim(f.replace(Va, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Va.test(f) ? f.replace(Va, e) : f + " " + e)
        }
    }), n.cssHooks.marginRight = Ua(l.reliableMarginRight, function(a, b) {
        return b ? Pa(a, {
            display: "inline-block"
        }, Sa, [a, "marginRight"]) : void 0
    }), n.cssHooks.marginLeft = Ua(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Sa(a, "marginLeft")) || (n.contains(a.ownerDocument, a) ? a.getBoundingClientRect().left - Pa(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + V[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Na.test(a) || (n.cssHooks[a + b].set = db)
    }), n.fn.extend({
        css: function(a, b) {
            return Y(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (n.isArray(b)) {
                    for (d = Ra(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return cb(this, !0)
        },
        hide: function() {
            return cb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                W(this) ? n(this).show() : n(this).hide()
            })
        }
    });

    function gb(a, b, c, d, e) {
        return new gb.prototype.init(a, b, c, d, e)
    }
    n.Tween = gb, gb.prototype = {
        constructor: gb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = gb.propHooks[this.prop];
            return a && a.get ? a.get(this) : gb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = gb.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : gb.propHooks._default.set(this), this
        }
    }, gb.prototype.init.prototype = gb.prototype, gb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0)
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit)
            }
        }
    }, gb.propHooks.scrollTop = gb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        },
        _default: "swing"
    }, n.fx = gb.prototype.init, n.fx.step = {};
    var hb, ib, jb = /^(?:toggle|show|hide)$/,
        kb = /queueHooks$/;

    function lb() {
        return a.setTimeout(function() {
            hb = void 0
        }), hb = n.now()
    }

    function mb(a, b) {
        var c, d = {
                height: a
            },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = V[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function nb(a, b, c) {
        for (var d, e = (qb.tweeners[b] || []).concat(qb.tweeners["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ob(a, b, c) {
        var d, e, f, g, h, i, j, k, m = this,
            o = {},
            p = a.style,
            q = a.nodeType && W(a),
            r = n._data(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, m.always(function() {
            m.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = n.css(a, "display"), k = "none" === j ? n._data(a, "olddisplay") || Ma(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (l.inlineBlockNeedsLayout && "inline" !== Ma(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", l.shrinkWrapBlocks() || m.always(function() {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], jb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || n.style(a, d)
            } else j = void 0;
        if (n.isEmptyObject(o)) "inline" === ("none" === j ? Ma(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = n._data(a, "fxshow", {}), f && (r.hidden = !q), q ? n(a).show() : m.done(function() {
                n(a).hide()
            }), m.done(function() {
                var b;
                n._removeData(a, "fxshow");
                for (b in o) n.style(a, b, o[b])
            });
            for (d in o) g = nb(q ? r[d] : 0, d, m), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function pb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function qb(a, b, c) {
        var d, e, f = 0,
            g = qb.prefilters.length,
            h = n.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = hb || lb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {},
                    easing: n.easing._default
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: hb || lb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (pb(k, j.opts.specialEasing); g > f; f++)
            if (d = qb.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), d;
        return n.map(k, nb, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    n.Animation = n.extend(qb, {
            tweeners: {
                "*": [function(a, b) {
                    var c = this.createTween(a, b);
                    return X(c.elem, a, U.exec(b), c), c
                }]
            },
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(G);
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], qb.tweeners[c] = qb.tweeners[c] || [], qb.tweeners[c].unshift(b)
            },
            prefilters: [ob],
            prefilter: function(a, b) {
                b ? qb.prefilters.unshift(a) : qb.prefilters.push(a)
            }
        }), n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
            }, d
        }, n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(W).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a),
                    f = n.speed(b, c, d),
                    g = function() {
                        var b = qb(this, n.extend({}, a), f);
                        (e || n._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = n.timers,
                        g = n._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && kb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    !b && c || n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = n._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = n.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(mb(b, !0), a, d, e)
            }
        }), n.each({
            slideDown: mb("show"),
            slideUp: mb("hide"),
            slideToggle: mb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), n.timers = [], n.fx.tick = function() {
            var a, b = n.timers,
                c = 0;
            for (hb = n.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || n.fx.stop(), hb = void 0
        }, n.fx.timer = function(a) {
            n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
        }, n.fx.interval = 13, n.fx.start = function() {
            ib || (ib = a.setInterval(n.fx.tick, n.fx.interval))
        }, n.fx.stop = function() {
            a.clearInterval(ib), ib = null
        }, n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, n.fn.delay = function(b, c) {
            return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
                var e = a.setTimeout(c, b);
                d.stop = function() {
                    a.clearTimeout(e)
                }
            })
        },
        function() {
            var a, b = d.createElement("input"),
                c = d.createElement("div"),
                e = d.createElement("select"),
                f = e.appendChild(d.createElement("option"));
            c = d.createElement("div"), c.setAttribute("className", "t"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = c.getElementsByTagName("a")[0], b.setAttribute("type", "checkbox"), c.appendChild(b), a = c.getElementsByTagName("a")[0], a.style.cssText = "top:1px", l.getSetAttribute = "t" !== c.className, l.style = /top/.test(a.getAttribute("style")), l.hrefNormalized = "/a" === a.getAttribute("href"), l.checkOn = !!b.value, l.optSelected = f.selected, l.enctype = !!d.createElement("form").enctype, e.disabled = !0, l.optDisabled = !f.disabled, b = d.createElement("input"), b.setAttribute("value", ""), l.input = "" === b.getAttribute("value"), b.value = "t", b.setAttribute("type", "radio"), l.radioValue = "t" === b.value
        }();
    var rb = /\r/g,
        sb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(rb, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(sb, " ")
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                            if (b = n(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = n.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], n.inArray(n.valHooks.option.get(d), f) > -1) try {
                            d.selected = c = !0
                        } catch (h) {
                            d.scrollHeight
                        } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), n.each(["radio", "checkbox"], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var tb, ub, vb = n.expr.attrHandle,
        wb = /^(?:checked|selected)$/i,
        xb = l.getSetAttribute,
        yb = l.input;
    n.fn.extend({
        attr: function(a, b) {
            return Y(this, n.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ub : tb)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), null == d ? void 0 : d))
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(G);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) ? yb && xb || !wb.test(c) ? a[d] = !1 : a[n.camelCase("default-" + c)] = a[d] = !1 : n.attr(a, c, ""), a.removeAttribute(xb ? c : d)
        }
    }), ub = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : yb && xb || !wb.test(c) ? a.setAttribute(!xb && n.propFix[c] || c, c) : a[n.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = vb[b] || n.find.attr;
        yb && xb || !wb.test(b) ? vb[b] = function(a, b, d) {
            var e, f;
            return d || (f = vb[b], vb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, vb[b] = f), e
        } : vb[b] = function(a, b, c) {
            return c ? void 0 : a[n.camelCase("default-" + b)] ? b.toLowerCase() : null
        }
    }), yb && xb || (n.attrHooks.value = {
        set: function(a, b, c) {
            return n.nodeName(a, "input") ? void(a.defaultValue = b) : tb && tb.set(a, b, c)
        }
    }), xb || (tb = {
        set: function(a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, vb.id = vb.name = vb.coords = function(a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, n.valHooks.button = {
        get: function(a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        },
        set: tb.set
    }, n.attrHooks.contenteditable = {
        set: function(a, b, c) {
            tb.set(a, "" === b ? !1 : b, c)
        }
    }, n.each(["width", "height"], function(a, b) {
        n.attrHooks[b] = {
            set: function(a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), l.style || (n.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || void 0
        },
        set: function(a, b) {
            return a.style.cssText = b + ""
        }
    });
    var zb = /^(?:input|select|textarea|button|object)$/i,
        Ab = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return Y(this, n.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return a = n.propFix[a] || a, this.each(function() {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {}
            })
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (3 !== f && 8 !== f && 2 !== f) return 1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : zb.test(a.nodeName) || Ab.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.hrefNormalized || n.each(["href", "src"], function(a, b) {
        n.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4)
            }
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex)
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        n.propFix[this.toLowerCase()] = this
    }), l.enctype || (n.propFix.enctype = "encoding");
    var Bb = /[\t\r\n\f]/g;

    function Cb(a) {
        return n.attr(a, "class") || ""
    }
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, Cb(this)))
            });
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++]) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, Cb(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) {
                b = a.match(G) || [];
                while (c = this[i++])
                    if (e = Cb(c), d = 1 === c.nodeType && (" " + e + " ").replace(Bb, " ")) {
                        g = 0;
                        while (f = b[g++])
                            while (d.indexOf(" " + f + " ") > -1) d = d.replace(" " + f + " ", " ");
                        h = n.trim(d), e !== h && n.attr(c, "class", h)
                    }
            }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, Cb(this), b), b)
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) {
                    d = 0, e = n(this), f = a.match(G) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else void 0 !== a && "boolean" !== c || (b = Cb(this), b && n._data(this, "__className__", b), n.attr(this, "class", b || a === !1 ? "" : n._data(this, "__className__") || ""))
            })
        },
        hasClass: function(a) {
            var b, c, d = 0;
            b = " " + a + " ";
            while (c = this[d++])
                if (1 === c.nodeType && (" " + Cb(c) + " ").replace(Bb, " ").indexOf(b) > -1) return !0;
            return !1
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }
    });
    var Db = a.location,
        Eb = n.now(),
        Fb = /\?/,
        Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    n.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = n.trim(b + "");
        return e && !n.trim(e.replace(Gb, function(a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : n.error("Invalid JSON: " + b)
    }, n.parseXML = function(b) {
        var c, d;
        if (!b || "string" != typeof b) return null;
        try {
            a.DOMParser ? (d = new a.DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new a.ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), c
    };
    var Hb = /#.*$/,
        Ib = /([?&])_=[^&]*/,
        Jb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Kb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Lb = /^(?:GET|HEAD)$/,
        Mb = /^\/\//,
        Nb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ob = {},
        Pb = {},
        Qb = "*/".concat("*"),
        Rb = Db.href,
        Sb = Nb.exec(Rb.toLowerCase()) || [];

    function Tb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Ub(a, b, c, d) {
        var e = {},
            f = a === Pb;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Vb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && n.extend(!0, a, c), a
    }

    function Wb(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) {
                    i.unshift(g);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Xb(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Rb,
            type: "GET",
            isLocal: Kb.test(Sb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Qb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? Vb(Vb(a, n.ajaxSettings), b) : Vb(n.ajaxSettings, a)
        },
        ajaxPrefilter: Tb(Ob),
        ajaxTransport: Tb(Pb),
        ajax: function(b, c) {
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var d, e, f, g, h, i, j, k, l = n.ajaxSetup({}, c),
                m = l.context || l,
                o = l.context && (m.nodeType || m.jquery) ? n(m) : n.event,
                p = n.Deferred(),
                q = n.Callbacks("once memory"),
                r = l.statusCode || {},
                s = {},
                t = {},
                u = 0,
                v = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === u) {
                            if (!k) {
                                k = {};
                                while (b = Jb.exec(g)) k[b[1].toLowerCase()] = b[2]
                            }
                            b = k[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === u ? g : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return u || (a = t[c] = t[c] || a, s[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return u || (l.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > u)
                                for (b in a) r[b] = [r[b], a[b]];
                            else w.always(a[w.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || v;
                        return j && j.abort(b), y(0, b), this
                    }
                };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, l.url = ((b || l.url || Rb) + "").replace(Hb, "").replace(Mb, Sb[1] + "//"), l.type = c.method || c.type || l.method || l.type, l.dataTypes = n.trim(l.dataType || "*").toLowerCase().match(G) || [""], null == l.crossDomain && (d = Nb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Sb[1] && d[2] === Sb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Sb[3] || ("http:" === Sb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = n.param(l.data, l.traditional)), Ub(Ob, l, c, w), 2 === u) return w;
            i = n.event && l.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Lb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Ib.test(f) ? f.replace(Ib, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (n.lastModified[f] && w.setRequestHeader("If-Modified-Since", n.lastModified[f]), n.etag[f] && w.setRequestHeader("If-None-Match", n.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", l.contentType), w.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Qb + "; q=0.01" : "") : l.accepts["*"]);
            for (e in l.headers) w.setRequestHeader(e, l.headers[e]);
            if (l.beforeSend && (l.beforeSend.call(m, w, l) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (e in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) w[e](l[e]);
            if (j = Ub(Pb, l, c, w)) {
                if (w.readyState = 1, i && o.trigger("ajaxSend", [w, l]), 2 === u) return w;
                l.async && l.timeout > 0 && (h = a.setTimeout(function() {
                    w.abort("timeout")
                }, l.timeout));
                try {
                    u = 1, j.send(s, y)
                } catch (x) {
                    if (!(2 > u)) throw x;
                    y(-1, x)
                }
            } else y(-1, "No Transport");

            function y(b, c, d, e) {
                var k, s, t, v, x, y = c;
                2 !== u && (u = 2, h && a.clearTimeout(h), j = void 0, g = e || "", w.readyState = b > 0 ? 4 : 0, k = b >= 200 && 300 > b || 304 === b, d && (v = Wb(l, w, d)), v = Xb(l, v, w, k), k ? (l.ifModified && (x = w.getResponseHeader("Last-Modified"), x && (n.lastModified[f] = x), x = w.getResponseHeader("etag"), x && (n.etag[f] = x)), 204 === b || "HEAD" === l.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = v.state, s = v.data, t = v.error, k = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), w.status = b, w.statusText = (c || y) + "", k ? p.resolveWith(m, [s, y, w]) : p.rejectWith(m, [w, y, t]), w.statusCode(r), r = void 0, i && o.trigger(k ? "ajaxSuccess" : "ajaxError", [w, l, k ? s : t]), q.fireWith(m, [w, y]), i && (o.trigger("ajaxComplete", [w, l]), --n.active || n.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a))
        }
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, n.fn.extend({
        wrapAll: function(a) {
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = n(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b))
            }) : this.each(function() {
                var b = n(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    });

    function Yb(a) {
        return a.style && a.style.display || n.css(a, "display")
    }

    function Zb(a) {
        if (!n.contains(a.ownerDocument || d, a)) return !0;
        while (a && 1 === a.nodeType) {
            if ("none" === Yb(a) || "hidden" === a.type) return !0;
            a = a.parentNode
        }
        return !1
    }
    n.expr.filters.hidden = function(a) {
        return l.reliableHiddenOffsets() ? a.offsetWidth <= 0 && a.offsetHeight <= 0 && !a.getClientRects().length : Zb(a)
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a)
    };
    var $b = /%20/g,
        _b = /\[\]$/,
        ac = /\r?\n/g,
        bc = /^(?:submit|button|image|reset|file)$/i,
        cc = /^(?:input|select|textarea|keygen)/i;

    function dc(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || _b.test(a) ? d(a, e) : dc(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== n.type(b)) d(a, b);
        else
            for (e in b) dc(a + "[" + e + "]", b[e], c, d)
    }
    n.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) dc(c, a[c], b, e);
        return d.join("&").replace($b, "+")
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && cc.test(this.nodeName) && !bc.test(a) && (this.checked || !Z.test(a))
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(ac, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(ac, "\r\n")
                }
            }).get()
        }
    }), n.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
        return this.isLocal ? ic() : d.documentMode > 8 ? hc() : /^(get|post|head|put|delete|options)$/i.test(this.type) && hc() || ic()
    } : hc;
    var ec = 0,
        fc = {},
        gc = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in fc) fc[a](void 0, !0)
    }), l.cors = !!gc && "withCredentials" in gc, gc = l.ajax = !!gc, gc && n.ajaxTransport(function(b) {
        if (!b.crossDomain || l.cors) {
            var c;
            return {
                send: function(d, e) {
                    var f, g = b.xhr(),
                        h = ++ec;
                    if (g.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields)
                        for (f in b.xhrFields) g[f] = b.xhrFields[f];
                    b.mimeType && g.overrideMimeType && g.overrideMimeType(b.mimeType), b.crossDomain || d["X-Requested-With"] || (d["X-Requested-With"] = "XMLHttpRequest");
                    for (f in d) void 0 !== d[f] && g.setRequestHeader(f, d[f] + "");
                    g.send(b.hasContent && b.data || null), c = function(a, d) {
                        var f, i, j;
                        if (c && (d || 4 === g.readyState))
                            if (delete fc[h], c = void 0, g.onreadystatechange = n.noop, d) 4 !== g.readyState && g.abort();
                            else {
                                j = {}, f = g.status, "string" == typeof g.responseText && (j.text = g.responseText);
                                try {
                                    i = g.statusText
                                } catch (k) {
                                    i = ""
                                }
                                f || !b.isLocal || b.crossDomain ? 1223 === f && (f = 204) : f = j.text ? 200 : 404
                            }
                        j && e(f, i, j, g.getAllResponseHeaders())
                    }, b.async ? 4 === g.readyState ? a.setTimeout(c) : g.onreadystatechange = fc[h] = c : c()
                },
                abort: function() {
                    c && c(void 0, !0)
                }
            }
        }
    });

    function hc() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function ic() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }
    n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = d.head || n("head")[0] || d.documentElement;
            return {
                send: function(e, f) {
                    b = d.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || f(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var jc = [],
        kc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = jc.pop() || n.expando + "_" + Eb++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (kc.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && kc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(kc, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, jc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a),
            f = !c && [];
        return e ? [b.createElement(e[1])] : (e = ja([a], b, f), f && f.length && n(f).remove(), n.merge([], e.childNodes))
    };
    var lc = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && lc) return lc.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h, a.length)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [a.responseText, b, a])
            })
        }), this
    }, n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem
        }).length
    };

    function mc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"),
                l = n(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && n.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = {
                    top: 0,
                    left: 0
                },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, e) ? ("undefined" != typeof e.getBoundingClientRect && (d = e.getBoundingClientRect()), c = mc(f), {
                top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
            }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = {
                        top: 0,
                        left: 0
                    },
                    d = this[0];
                return "fixed" === n.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (c = a.offset()), c.top += n.css(a[0], "borderTopWidth", !0), c.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - n.css(d, "marginTop", !0),
                    left: b.left - c.left - n.css(d, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Qa
            })
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = /Y/.test(b);
        n.fn[a] = function(d) {
            return Y(this, function(a, d, e) {
                var f = mc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? n(f).scrollLeft() : e, c ? e : n(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), n.each(["top", "left"], function(a, b) {
        n.cssHooks[b] = Ua(l.pixelPosition, function(a, c) {
            return c ? (c = Sa(a, b), Oa.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return Y(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    }), n.fn.size = function() {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n
    });
    var nc = a.jQuery,
        oc = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = oc), b && a.jQuery === n && (a.jQuery = nc), n
    }, b || (a.jQuery = a.$ = n), n
});

! function(t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.Tether = e()
}(this, function(t, e, o) {
    "use strict";

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t) {
        var e = t.getBoundingClientRect(),
            o = {};
        for (var i in e) o[i] = e[i];
        if (t.ownerDocument !== document) {
            var r = t.ownerDocument.defaultView.frameElement;
            if (r) {
                var s = n(r);
                o.top += s.top, o.bottom += s.top, o.left += s.left, o.right += s.left
            }
        }
        return o
    }

    function r(t) {
        var e = getComputedStyle(t) || {},
            o = e.position,
            i = [];
        if ("fixed" === o) return [t];
        for (var n = t;
            (n = n.parentNode) && n && 1 === n.nodeType;) {
            var r = void 0;
            try {
                r = getComputedStyle(n)
            } catch (s) {}
            if ("undefined" == typeof r || null === r) return i.push(n), i;
            var a = r,
                f = a.overflow,
                l = a.overflowX,
                h = a.overflowY;
            /(auto|scroll)/.test(f + h + l) && ("absolute" !== o || ["relative", "absolute", "fixed"].indexOf(r.position) >= 0) && i.push(n)
        }
        return i.push(t.ownerDocument.body), t.ownerDocument !== document && i.push(t.ownerDocument.defaultView), i
    }

    function s() {
        A && document.body.removeChild(A), A = null
    }

    function a(t) {
        var e = void 0;
        t === document ? (e = document, t = document.documentElement) : e = t.ownerDocument;
        var o = e.documentElement,
            i = n(t),
            r = P();
        return i.top -= r.top, i.left -= r.left, "undefined" == typeof i.width && (i.width = document.body.scrollWidth - i.left - i.right), "undefined" == typeof i.height && (i.height = document.body.scrollHeight - i.top - i.bottom), i.top = i.top - o.clientTop, i.left = i.left - o.clientLeft, i.right = e.body.clientWidth - i.width - i.left, i.bottom = e.body.clientHeight - i.height - i.top, i
    }

    function f(t) {
        return t.offsetParent || document.documentElement
    }

    function l() {
        if (M) return M;
        var t = document.createElement("div");
        t.style.width = "100%", t.style.height = "200px";
        var e = document.createElement("div");
        h(e.style, {
            position: "absolute",
            top: 0,
            left: 0,
            pointerEvents: "none",
            visibility: "hidden",
            width: "200px",
            height: "150px",
            overflow: "hidden"
        }), e.appendChild(t), document.body.appendChild(e);
        var o = t.offsetWidth;
        e.style.overflow = "scroll";
        var i = t.offsetWidth;
        o === i && (i = e.clientWidth), document.body.removeChild(e);
        var n = o - i;
        return M = {
            width: n,
            height: n
        }
    }

    function h() {
        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            e = [];
        return Array.prototype.push.apply(e, arguments), e.slice(1).forEach(function(e) {
            if (e)
                for (var o in e)({}).hasOwnProperty.call(e, o) && (t[o] = e[o])
        }), t
    }

    function d(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.remove(e)
        });
        else {
            var o = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
                i = c(t).replace(o, " ");
            g(t, i)
        }
    }

    function p(t, e) {
        if ("undefined" != typeof t.classList) e.split(" ").forEach(function(e) {
            e.trim() && t.classList.add(e)
        });
        else {
            d(t, e);
            var o = c(t) + (" " + e);
            g(t, o)
        }
    }

    function u(t, e) {
        if ("undefined" != typeof t.classList) return t.classList.contains(e);
        var o = c(t);
        return new RegExp("(^| )" + e + "( |$)", "gi").test(o)
    }

    function c(t) {
        return t.className instanceof t.ownerDocument.defaultView.SVGAnimatedString ? t.className.baseVal : t.className
    }

    function g(t, e) {
        t.setAttribute("class", e)
    }

    function m(t, e, o) {
        o.forEach(function(o) {
            e.indexOf(o) === -1 && u(t, o) && d(t, o)
        }), e.forEach(function(e) {
            u(t, e) || p(t, e)
        })
    }

    function i(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function v(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }

    function y(t, e) {
        var o = arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
        return t + o >= e && e >= t - o
    }

    function b() {
        return "undefined" != typeof performance && "undefined" != typeof performance.now ? performance.now() : +new Date
    }

    function w() {
        for (var t = {
                top: 0,
                left: 0
            }, e = arguments.length, o = Array(e), i = 0; i < e; i++) o[i] = arguments[i];
        return o.forEach(function(e) {
            var o = e.top,
                i = e.left;
            "string" == typeof o && (o = parseFloat(o, 10)), "string" == typeof i && (i = parseFloat(i, 10)), t.top += o, t.left += i
        }), t
    }

    function C(t, e) {
        return "string" == typeof t.left && t.left.indexOf("%") !== -1 && (t.left = parseFloat(t.left, 10) / 100 * e.width), "string" == typeof t.top && t.top.indexOf("%") !== -1 && (t.top = parseFloat(t.top, 10) / 100 * e.height), t
    }

    function O(t, e) {
        return "scrollParent" === e ? e = t.scrollParents[0] : "window" === e && (e = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset]), e === document && (e = e.documentElement), "undefined" != typeof e.nodeType && ! function() {
            var t = e,
                o = a(e),
                i = o,
                n = getComputedStyle(e);
            if (e = [i.left, i.top, o.width + i.left, o.height + i.top], t.ownerDocument !== document) {
                var r = t.ownerDocument.defaultView;
                e[0] += r.pageXOffset, e[1] += r.pageYOffset, e[2] += r.pageXOffset, e[3] += r.pageYOffset
            }
            G.forEach(function(t, o) {
                t = t[0].toUpperCase() + t.substr(1), "Top" === t || "Left" === t ? e[o] += parseFloat(n["border" + t + "Width"]) : e[o] -= parseFloat(n["border" + t + "Width"])
            })
        }(), e
    }
    var E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        x = void 0;
    "undefined" == typeof x && (x = {
        modules: []
    });
    var A = null,
        T = function() {
            var t = 0;
            return function() {
                return ++t
            }
        }(),
        S = {},
        P = function() {
            var t = A;
            t && document.body.contains(t) || (t = document.createElement("div"), t.setAttribute("data-tether-id", T()), h(t.style, {
                top: 0,
                left: 0,
                position: "absolute"
            }), document.body.appendChild(t), A = t);
            var e = t.getAttribute("data-tether-id");
            return "undefined" == typeof S[e] && (S[e] = n(t), k(function() {
                delete S[e]
            })), S[e]
        },
        M = null,
        W = [],
        k = function(t) {
            W.push(t)
        },
        _ = function() {
            for (var t = void 0; t = W.pop();) t()
        },
        B = function() {
            function t() {
                i(this, t)
            }
            return E(t, [{
                key: "on",
                value: function(t, e, o) {
                    var i = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3];
                    "undefined" == typeof this.bindings && (this.bindings = {}), "undefined" == typeof this.bindings[t] && (this.bindings[t] = []), this.bindings[t].push({
                        handler: e,
                        ctx: o,
                        once: i
                    })
                }
            }, {
                key: "once",
                value: function(t, e, o) {
                    this.on(t, e, o, !0)
                }
            }, {
                key: "off",
                value: function(t, e) {
                    if ("undefined" != typeof this.bindings && "undefined" != typeof this.bindings[t])
                        if ("undefined" == typeof e) delete this.bindings[t];
                        else
                            for (var o = 0; o < this.bindings[t].length;) this.bindings[t][o].handler === e ? this.bindings[t].splice(o, 1) : ++o
                }
            }, {
                key: "trigger",
                value: function(t) {
                    if ("undefined" != typeof this.bindings && this.bindings[t]) {
                        for (var e = 0, o = arguments.length, i = Array(o > 1 ? o - 1 : 0), n = 1; n < o; n++) i[n - 1] = arguments[n];
                        for (; e < this.bindings[t].length;) {
                            var r = this.bindings[t][e],
                                s = r.handler,
                                a = r.ctx,
                                f = r.once,
                                l = a;
                            "undefined" == typeof l && (l = this), s.apply(l, i), f ? this.bindings[t].splice(e, 1) : ++e
                        }
                    }
                }
            }]), t
        }();
    x.Utils = {
        getActualBoundingClientRect: n,
        getScrollParents: r,
        getBounds: a,
        getOffsetParent: f,
        extend: h,
        addClass: p,
        removeClass: d,
        hasClass: u,
        updateClasses: m,
        defer: k,
        flush: _,
        uniqueId: T,
        Evented: B,
        getScrollBarSize: l,
        removeUtilElements: s
    };
    var z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        E = function() {
            function t(t, e) {
                for (var o = 0; o < e.length; o++) {
                    var i = e[o];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, o, i) {
                return o && t(e.prototype, o), i && t(e, i), e
            }
        }(),
        j = function(t, e, o) {
            for (var i = !0; i;) {
                var n = t,
                    r = e,
                    s = o;
                i = !1, null === n && (n = Function.prototype);
                var a = Object.getOwnPropertyDescriptor(n, r);
                if (void 0 !== a) {
                    if ("value" in a) return a.value;
                    var f = a.get;
                    if (void 0 === f) return;
                    return f.call(s)
                }
                var l = Object.getPrototypeOf(n);
                if (null === l) return;
                t = l, e = r, o = s, i = !0, a = l = void 0
            }
        };
    if ("undefined" == typeof x) throw new Error("You must include the utils.js file before tether.js");
    var Y = x.Utils,
        r = Y.getScrollParents,
        a = Y.getBounds,
        f = Y.getOffsetParent,
        h = Y.extend,
        p = Y.addClass,
        d = Y.removeClass,
        m = Y.updateClasses,
        k = Y.defer,
        _ = Y.flush,
        l = Y.getScrollBarSize,
        s = Y.removeUtilElements,
        L = function() {
            if ("undefined" == typeof document) return "";
            for (var t = document.createElement("div"), e = ["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"], o = 0; o < e.length; ++o) {
                var i = e[o];
                if (void 0 !== t.style[i]) return i
            }
        }(),
        D = [],
        X = function() {
            D.forEach(function(t) {
                t.position(!1)
            }), _()
        };
    ! function() {
        var t = null,
            e = null,
            o = null,
            i = function n() {
                return "undefined" != typeof e && e > 16 ? (e = Math.min(e - 16, 250), void(o = setTimeout(n, 250))) : void("undefined" != typeof t && b() - t < 10 || (null != o && (clearTimeout(o), o = null), t = b(), X(), e = b() - t))
            };
        "undefined" != typeof window && "undefined" != typeof window.addEventListener && ["resize", "scroll", "touchmove"].forEach(function(t) {
            window.addEventListener(t, i)
        })
    }();
    var F = {
            center: "center",
            left: "right",
            right: "left"
        },
        H = {
            middle: "middle",
            top: "bottom",
            bottom: "top"
        },
        N = {
            top: 0,
            left: 0,
            middle: "50%",
            center: "50%",
            bottom: "100%",
            right: "100%"
        },
        U = function(t, e) {
            var o = t.left,
                i = t.top;
            return "auto" === o && (o = F[e.left]), "auto" === i && (i = H[e.top]), {
                left: o,
                top: i
            }
        },
        V = function(t) {
            var e = t.left,
                o = t.top;
            return "undefined" != typeof N[t.left] && (e = N[t.left]), "undefined" != typeof N[t.top] && (o = N[t.top]), {
                left: e,
                top: o
            }
        },
        R = function(t) {
            var e = t.split(" "),
                o = z(e, 2),
                i = o[0],
                n = o[1];
            return {
                top: i,
                left: n
            }
        },
        q = R,
        I = function(t) {
            function e(t) {
                var o = this;
                i(this, e), j(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.position = this.position.bind(this), D.push(this), this.history = [], this.setOptions(t, !1), x.modules.forEach(function(t) {
                    "undefined" != typeof t.initialize && t.initialize.call(o)
                }), this.position()
            }
            return v(e, t), E(e, [{
                key: "getClass",
                value: function() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                        e = this.options.classes;
                    return "undefined" != typeof e && e[t] ? this.options.classes[t] : this.options.classPrefix ? this.options.classPrefix + "-" + t : t
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    var e = this,
                        o = arguments.length <= 1 || void 0 === arguments[1] || arguments[1],
                        i = {
                            offset: "0 0",
                            targetOffset: "0 0",
                            targetAttachment: "auto auto",
                            classPrefix: "tether"
                        };
                    this.options = h(i, t);
                    var n = this.options,
                        s = n.element,
                        a = n.target,
                        f = n.targetModifier;
                    if (this.element = s, this.target = a, this.targetModifier = f, "viewport" === this.target ? (this.target = document.body, this.targetModifier = "visible") : "scroll-handle" === this.target && (this.target = document.body, this.targetModifier = "scroll-handle"), ["element", "target"].forEach(function(t) {
                            if ("undefined" == typeof e[t]) throw new Error("Tether Error: Both element and target must be defined");
                            "undefined" != typeof e[t].jquery ? e[t] = e[t][0] : "string" == typeof e[t] && (e[t] = document.querySelector(e[t]))
                        }), p(this.element, this.getClass("element")), this.options.addTargetClasses !== !1 && p(this.target, this.getClass("target")), !this.options.attachment) throw new Error("Tether Error: You must provide an attachment");
                    this.targetAttachment = q(this.options.targetAttachment), this.attachment = q(this.options.attachment), this.offset = R(this.options.offset), this.targetOffset = R(this.options.targetOffset), "undefined" != typeof this.scrollParents && this.disable(), "scroll-handle" === this.targetModifier ? this.scrollParents = [this.target] : this.scrollParents = r(this.target), this.options.enabled !== !1 && this.enable(o)
                }
            }, {
                key: "getTargetBounds",
                value: function() {
                    if ("undefined" == typeof this.targetModifier) return a(this.target);
                    if ("visible" === this.targetModifier) {
                        if (this.target === document.body) return {
                            top: pageYOffset,
                            left: pageXOffset,
                            height: innerHeight,
                            width: innerWidth
                        };
                        var t = a(this.target),
                            e = {
                                height: t.height,
                                width: t.width,
                                top: t.top,
                                left: t.left
                            };
                        return e.height = Math.min(e.height, t.height - (pageYOffset - t.top)), e.height = Math.min(e.height, t.height - (t.top + t.height - (pageYOffset + innerHeight))), e.height = Math.min(innerHeight, e.height), e.height -= 2, e.width = Math.min(e.width, t.width - (pageXOffset - t.left)), e.width = Math.min(e.width, t.width - (t.left + t.width - (pageXOffset + innerWidth))), e.width = Math.min(innerWidth, e.width), e.width -= 2, e.top < pageYOffset && (e.top = pageYOffset), e.left < pageXOffset && (e.left = pageXOffset), e
                    }
                    if ("scroll-handle" === this.targetModifier) {
                        var t = void 0,
                            o = this.target;
                        o === document.body ? (o = document.documentElement, t = {
                            left: pageXOffset,
                            top: pageYOffset,
                            height: innerHeight,
                            width: innerWidth
                        }) : t = a(o);
                        var i = getComputedStyle(o),
                            n = o.scrollWidth > o.clientWidth || [i.overflow, i.overflowX].indexOf("scroll") >= 0 || this.target !== document.body,
                            r = 0;
                        n && (r = 15);
                        var s = t.height - parseFloat(i.borderTopWidth) - parseFloat(i.borderBottomWidth) - r,
                            e = {
                                width: 15,
                                height: .975 * s * (s / o.scrollHeight),
                                left: t.left + t.width - parseFloat(i.borderLeftWidth) - 15
                            },
                            f = 0;
                        s < 408 && this.target === document.body && (f = -11e-5 * Math.pow(s, 2) - .00727 * s + 22.58), this.target !== document.body && (e.height = Math.max(e.height, 24));
                        var l = this.target.scrollTop / (o.scrollHeight - s);
                        return e.top = l * (s - e.height - f) + t.top + parseFloat(i.borderTopWidth), this.target === document.body && (e.height = Math.max(e.height, 24)), e
                    }
                }
            }, {
                key: "clearCache",
                value: function() {
                    this._cache = {}
                }
            }, {
                key: "cache",
                value: function(t, e) {
                    return "undefined" == typeof this._cache && (this._cache = {}), "undefined" == typeof this._cache[t] && (this._cache[t] = e.call(this)), this._cache[t]
                }
            }, {
                key: "enable",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    this.options.addTargetClasses !== !1 && p(this.target, this.getClass("enabled")), p(this.element, this.getClass("enabled")), this.enabled = !0, this.scrollParents.forEach(function(e) {
                        e !== t.target.ownerDocument && e.addEventListener("scroll", t.position)
                    }), e && this.position()
                }
            }, {
                key: "disable",
                value: function() {
                    var t = this;
                    d(this.target, this.getClass("enabled")), d(this.element, this.getClass("enabled")), this.enabled = !1, "undefined" != typeof this.scrollParents && this.scrollParents.forEach(function(e) {
                        e.removeEventListener("scroll", t.position)
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    var t = this;
                    this.disable(), D.forEach(function(e, o) {
                        e === t && D.splice(o, 1)
                    }), 0 === D.length && s()
                }
            }, {
                key: "updateAttachClasses",
                value: function(t, e) {
                    var o = this;
                    t = t || this.attachment, e = e || this.targetAttachment;
                    var i = ["left", "top", "bottom", "right", "middle", "center"];
                    "undefined" != typeof this._addAttachClasses && this._addAttachClasses.length && this._addAttachClasses.splice(0, this._addAttachClasses.length), "undefined" == typeof this._addAttachClasses && (this._addAttachClasses = []);
                    var n = this._addAttachClasses;
                    t.top && n.push(this.getClass("element-attached") + "-" + t.top), t.left && n.push(this.getClass("element-attached") + "-" + t.left), e.top && n.push(this.getClass("target-attached") + "-" + e.top), e.left && n.push(this.getClass("target-attached") + "-" + e.left);
                    var r = [];
                    i.forEach(function(t) {
                        r.push(o.getClass("element-attached") + "-" + t), r.push(o.getClass("target-attached") + "-" + t)
                    }), k(function() {
                        "undefined" != typeof o._addAttachClasses && (m(o.element, o._addAttachClasses, r), o.options.addTargetClasses !== !1 && m(o.target, o._addAttachClasses, r), delete o._addAttachClasses)
                    })
                }
            }, {
                key: "position",
                value: function() {
                    var t = this,
                        e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
                    if (this.enabled) {
                        this.clearCache();
                        var o = U(this.targetAttachment, this.attachment);
                        this.updateAttachClasses(this.attachment, o);
                        var i = this.cache("element-bounds", function() {
                                return a(t.element)
                            }),
                            n = i.width,
                            r = i.height;
                        if (0 === n && 0 === r && "undefined" != typeof this.lastSize) {
                            var s = this.lastSize;
                            n = s.width, r = s.height
                        } else this.lastSize = {
                            width: n,
                            height: r
                        };
                        var h = this.cache("target-bounds", function() {
                                return t.getTargetBounds()
                            }),
                            d = h,
                            p = C(V(this.attachment), {
                                width: n,
                                height: r
                            }),
                            u = C(V(o), d),
                            c = C(this.offset, {
                                width: n,
                                height: r
                            }),
                            g = C(this.targetOffset, d);
                        p = w(p, c), u = w(u, g);
                        for (var m = h.left + u.left - p.left, v = h.top + u.top - p.top, y = 0; y < x.modules.length; ++y) {
                            var b = x.modules[y],
                                O = b.position.call(this, {
                                    left: m,
                                    top: v,
                                    targetAttachment: o,
                                    targetPos: h,
                                    elementPos: i,
                                    offset: p,
                                    targetOffset: u,
                                    manualOffset: c,
                                    manualTargetOffset: g,
                                    scrollbarSize: S,
                                    attachment: this.attachment
                                });
                            if (O === !1) return !1;
                            "undefined" != typeof O && "object" == typeof O && (v = O.top, m = O.left)
                        }
                        var E = {
                                page: {
                                    top: v,
                                    left: m
                                },
                                viewport: {
                                    top: v - pageYOffset,
                                    bottom: pageYOffset - v - r + innerHeight,
                                    left: m - pageXOffset,
                                    right: pageXOffset - m - n + innerWidth
                                }
                            },
                            A = this.target.ownerDocument,
                            T = A.defaultView,
                            S = void 0;
                        return T.innerHeight > A.documentElement.clientHeight && (S = this.cache("scrollbar-size", l), E.viewport.bottom -= S.height), T.innerWidth > A.documentElement.clientWidth && (S = this.cache("scrollbar-size", l), E.viewport.right -= S.width), ["", "static"].indexOf(A.body.style.position) !== -1 && ["", "static"].indexOf(A.body.parentElement.style.position) !== -1 || (E.page.bottom = A.body.scrollHeight - v - r, E.page.right = A.body.scrollWidth - m - n), "undefined" != typeof this.options.optimizations && this.options.optimizations.moveElement !== !1 && "undefined" == typeof this.targetModifier && ! function() {
                            var e = t.cache("target-offsetparent", function() {
                                    return f(t.target)
                                }),
                                o = t.cache("target-offsetparent-bounds", function() {
                                    return a(e)
                                }),
                                i = getComputedStyle(e),
                                n = o,
                                r = {};
                            if (["Top", "Left", "Bottom", "Right"].forEach(function(t) {
                                    r[t.toLowerCase()] = parseFloat(i["border" + t + "Width"])
                                }), o.right = A.body.scrollWidth - o.left - n.width + r.right, o.bottom = A.body.scrollHeight - o.top - n.height + r.bottom, E.page.top >= o.top + r.top && E.page.bottom >= o.bottom && E.page.left >= o.left + r.left && E.page.right >= o.right) {
                                var s = e.scrollTop,
                                    l = e.scrollLeft;
                                E.offset = {
                                    top: E.page.top - o.top + s - r.top,
                                    left: E.page.left - o.left + l - r.left
                                }
                            }
                        }(), this.move(E), this.history.unshift(E), this.history.length > 3 && this.history.pop(), e && _(), !0
                    }
                }
            }, {
                key: "move",
                value: function(t) {
                    var e = this;
                    if ("undefined" != typeof this.element.parentNode) {
                        var o = {};
                        for (var i in t) {
                            o[i] = {};
                            for (var n in t[i]) {
                                for (var r = !1, s = 0; s < this.history.length; ++s) {
                                    var a = this.history[s];
                                    if ("undefined" != typeof a[i] && !y(a[i][n], t[i][n])) {
                                        r = !0;
                                        break
                                    }
                                }
                                r || (o[i][n] = !0)
                            }
                        }
                        var l = {
                                top: "",
                                left: "",
                                right: "",
                                bottom: ""
                            },
                            d = function(t, o) {
                                var i = "undefined" != typeof e.options.optimizations,
                                    n = i ? e.options.optimizations.gpu : null;
                                if (n !== !1) {
                                    var r = void 0,
                                        s = void 0;
                                    if (t.top ? (l.top = 0, r = o.top) : (l.bottom = 0, r = -o.bottom), t.left ? (l.left = 0, s = o.left) : (l.right = 0, s = -o.right), window.matchMedia) {
                                        var a = window.matchMedia("only screen and (min-resolution: 1.3dppx)").matches || window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3)").matches;
                                        a || (s = Math.round(s), r = Math.round(r))
                                    }
                                    l[L] = "translateX(" + s + "px) translateY(" + r + "px)", "msTransform" !== L && (l[L] += " translateZ(0)")
                                } else t.top ? l.top = o.top + "px" : l.bottom = o.bottom + "px", t.left ? l.left = o.left + "px" : l.right = o.right + "px"
                            },
                            p = !1;
                        if ((o.page.top || o.page.bottom) && (o.page.left || o.page.right) ? (l.position = "absolute", d(o.page, t.page)) : (o.viewport.top || o.viewport.bottom) && (o.viewport.left || o.viewport.right) ? (l.position = "fixed", d(o.viewport, t.viewport)) : "undefined" != typeof o.offset && o.offset.top && o.offset.left ? ! function() {
                                l.position = "absolute";
                                var i = e.cache("target-offsetparent", function() {
                                    return f(e.target)
                                });
                                f(e.element) !== i && k(function() {
                                    e.element.parentNode.removeChild(e.element), i.appendChild(e.element)
                                }), d(o.offset, t.offset), p = !0
                            }() : (l.position = "absolute", d({
                                top: !0,
                                left: !0
                            }, t.page)), !p)
                            if (this.options.bodyElement) this.options.bodyElement.appendChild(this.element);
                            else {
                                for (var u = !0, c = this.element.parentNode; c && 1 === c.nodeType && "BODY" !== c.tagName;) {
                                    if ("static" !== getComputedStyle(c).position) {
                                        u = !1;
                                        break
                                    }
                                    c = c.parentNode
                                }
                                u || (this.element.parentNode.removeChild(this.element), this.element.ownerDocument.body.appendChild(this.element))
                            }
                        var g = {},
                            m = !1;
                        for (var n in l) {
                            var v = l[n],
                                b = this.element.style[n];
                            b !== v && (m = !0, g[n] = v)
                        }
                        m && k(function() {
                            h(e.element.style, g), e.trigger("repositioned")
                        })
                    }
                }
            }]), e
        }(B);
    I.modules = [], x.position = X;
    var $ = h(I, x),
        z = function() {
            function t(t, e) {
                var o = [],
                    i = !0,
                    n = !1,
                    r = void 0;
                try {
                    for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
                } catch (f) {
                    n = !0, r = f
                } finally {
                    try {
                        !i && a["return"] && a["return"]()
                    } finally {
                        if (n) throw r
                    }
                }
                return o
            }
            return function(e, o) {
                if (Array.isArray(e)) return e;
                if (Symbol.iterator in Object(e)) return t(e, o);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }(),
        Y = x.Utils,
        a = Y.getBounds,
        h = Y.extend,
        m = Y.updateClasses,
        k = Y.defer,
        G = ["left", "top", "right", "bottom"];
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = t.targetAttachment;
            if (!this.options.constraints) return !0;
            var r = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                s = r.height,
                f = r.width;
            if (0 === f && 0 === s && "undefined" != typeof this.lastSize) {
                var l = this.lastSize;
                f = l.width, s = l.height
            }
            var d = this.cache("target-bounds", function() {
                    return e.getTargetBounds()
                }),
                p = d.height,
                u = d.width,
                c = [this.getClass("pinned"), this.getClass("out-of-bounds")];
            this.options.constraints.forEach(function(t) {
                var e = t.outOfBoundsClass,
                    o = t.pinnedClass;
                e && c.push(e), o && c.push(o)
            }), c.forEach(function(t) {
                ["left", "top", "right", "bottom"].forEach(function(e) {
                    c.push(t + "-" + e)
                })
            });
            var g = [],
                v = h({}, n),
                y = h({}, this.attachment);
            return this.options.constraints.forEach(function(t) {
                var r = t.to,
                    a = t.attachment,
                    l = t.pin;
                "undefined" == typeof a && (a = "");
                var h = void 0,
                    d = void 0;
                if (a.indexOf(" ") >= 0) {
                    var c = a.split(" "),
                        m = z(c, 2);
                    d = m[0], h = m[1]
                } else h = d = a;
                var b = O(e, r);
                "target" !== d && "both" !== d || (o < b[1] && "top" === v.top && (o += p, v.top = "bottom"), o + s > b[3] && "bottom" === v.top && (o -= p, v.top = "top")), "together" === d && ("top" === v.top && ("bottom" === y.top && o < b[1] ? (o += p, v.top = "bottom", o += s, y.top = "top") : "top" === y.top && o + s > b[3] && o - (s - p) >= b[1] && (o -= s - p, v.top = "bottom", y.top = "bottom")), "bottom" === v.top && ("top" === y.top && o + s > b[3] ? (o -= p, v.top = "top", o -= s, y.top = "bottom") : "bottom" === y.top && o < b[1] && o + (2 * s - p) <= b[3] && (o += s - p, v.top = "top", y.top = "top")), "middle" === v.top && (o + s > b[3] && "top" === y.top ? (o -= s, y.top = "bottom") : o < b[1] && "bottom" === y.top && (o += s, y.top = "top"))), "target" !== h && "both" !== h || (i < b[0] && "left" === v.left && (i += u, v.left = "right"), i + f > b[2] && "right" === v.left && (i -= u, v.left = "left")), "together" === h && (i < b[0] && "left" === v.left ? "right" === y.left ? (i += u, v.left = "right", i += f, y.left = "left") : "left" === y.left && (i += u, v.left = "right", i -= f, y.left = "right") : i + f > b[2] && "right" === v.left ? "left" === y.left ? (i -= u, v.left = "left", i -= f, y.left = "right") : "right" === y.left && (i -= u, v.left = "left", i += f, y.left = "left") : "center" === v.left && (i + f > b[2] && "left" === y.left ? (i -= f, y.left = "right") : i < b[0] && "right" === y.left && (i += f, y.left = "left"))), "element" !== d && "both" !== d || (o < b[1] && "bottom" === y.top && (o += s, y.top = "top"), o + s > b[3] && "top" === y.top && (o -= s, y.top = "bottom")), "element" !== h && "both" !== h || (i < b[0] && ("right" === y.left ? (i += f, y.left = "left") : "center" === y.left && (i += f / 2, y.left = "left")), i + f > b[2] && ("left" === y.left ? (i -= f, y.left = "right") : "center" === y.left && (i -= f / 2, y.left = "right"))), "string" == typeof l ? l = l.split(",").map(function(t) {
                    return t.trim()
                }) : l === !0 && (l = ["top", "left", "right", "bottom"]), l = l || [];
                var w = [],
                    C = [];
                o < b[1] && (l.indexOf("top") >= 0 ? (o = b[1], w.push("top")) : C.push("top")), o + s > b[3] && (l.indexOf("bottom") >= 0 ? (o = b[3] - s, w.push("bottom")) : C.push("bottom")), i < b[0] && (l.indexOf("left") >= 0 ? (i = b[0], w.push("left")) : C.push("left")), i + f > b[2] && (l.indexOf("right") >= 0 ? (i = b[2] - f, w.push("right")) : C.push("right")), w.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.pinnedClass ? e.options.pinnedClass : e.getClass("pinned"), g.push(t), w.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), C.length && ! function() {
                    var t = void 0;
                    t = "undefined" != typeof e.options.outOfBoundsClass ? e.options.outOfBoundsClass : e.getClass("out-of-bounds"), g.push(t), C.forEach(function(e) {
                        g.push(t + "-" + e)
                    })
                }(), (w.indexOf("left") >= 0 || w.indexOf("right") >= 0) && (y.left = v.left = !1), (w.indexOf("top") >= 0 || w.indexOf("bottom") >= 0) && (y.top = v.top = !1), v.top === n.top && v.left === n.left && y.top === e.attachment.top && y.left === e.attachment.left || (e.updateAttachClasses(y, v), e.trigger("update", {
                    attachment: y,
                    targetAttachment: v
                }))
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, g, c), m(e.element, g, c)
            }), {
                top: o,
                left: i
            }
        }
    });
    var Y = x.Utils,
        a = Y.getBounds,
        m = Y.updateClasses,
        k = Y.defer;
    x.modules.push({
        position: function(t) {
            var e = this,
                o = t.top,
                i = t.left,
                n = this.cache("element-bounds", function() {
                    return a(e.element)
                }),
                r = n.height,
                s = n.width,
                f = this.getTargetBounds(),
                l = o + r,
                h = i + s,
                d = [];
            o <= f.bottom && l >= f.top && ["left", "right"].forEach(function(t) {
                var e = f[t];
                e !== i && e !== h || d.push(t)
            }), i <= f.right && h >= f.left && ["top", "bottom"].forEach(function(t) {
                var e = f[t];
                e !== o && e !== l || d.push(t)
            });
            var p = [],
                u = [],
                c = ["left", "top", "right", "bottom"];
            return p.push(this.getClass("abutted")), c.forEach(function(t) {
                p.push(e.getClass("abutted") + "-" + t)
            }), d.length && u.push(this.getClass("abutted")), d.forEach(function(t) {
                u.push(e.getClass("abutted") + "-" + t)
            }), k(function() {
                e.options.addTargetClasses !== !1 && m(e.target, u, p), m(e.element, u, p)
            }), !0
        }
    });
    var z = function() {
        function t(t, e) {
            var o = [],
                i = !0,
                n = !1,
                r = void 0;
            try {
                for (var s, a = t[Symbol.iterator](); !(i = (s = a.next()).done) && (o.push(s.value), !e || o.length !== e); i = !0);
            } catch (f) {
                n = !0, r = f
            } finally {
                try {
                    !i && a["return"] && a["return"]()
                } finally {
                    if (n) throw r
                }
            }
            return o
        }
        return function(e, o) {
            if (Array.isArray(e)) return e;
            if (Symbol.iterator in Object(e)) return t(e, o);
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }
    }();
    return x.modules.push({
        position: function(t) {
            var e = t.top,
                o = t.left;
            if (this.options.shift) {
                var i = this.options.shift;
                "function" == typeof this.options.shift && (i = this.options.shift.call(this, {
                    top: e,
                    left: o
                }));
                var n = void 0,
                    r = void 0;
                if ("string" == typeof i) {
                    i = i.split(" "), i[1] = i[1] || i[0];
                    var s = i,
                        a = z(s, 2);
                    n = a[0], r = a[1], n = parseFloat(n, 10), r = parseFloat(r, 10)
                } else n = i.top, r = i.left;
                return e += n, o += r, {
                    top: e,
                    left: o
                }
            }
        }
    }), $
});
/*!
 * Bootstrap v4.0.0-alpha.5 (https://getbootstrap.com)
 * Copyright 2011-2016 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(a) {
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
}(jQuery), + function() {
    function a(a, b) {
        if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !b || "object" != typeof b && "function" != typeof b ? a : b
    }

    function b(a, b) {
        if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
        a.prototype = Object.create(b && b.prototype, {
            constructor: {
                value: a,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
    }

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }
    var d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(a) {
            return typeof a
        } : function(a) {
            return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
        },
        e = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        f = function(a) {
            function b(a) {
                return {}.toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
            }

            function c(a) {
                return (a[0] || a).nodeType
            }

            function d() {
                return {
                    bindType: h.end,
                    delegateType: h.end,
                    handle: function(b) {
                        if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
                    }
                }
            }

            function e() {
                if (window.QUnit) return !1;
                var a = document.createElement("bootstrap");
                for (var b in j)
                    if (void 0 !== a.style[b]) return {
                        end: j[b]
                    };
                return !1
            }

            function f(b) {
                var c = this,
                    d = !1;
                return a(this).one(k.TRANSITION_END, function() {
                    d = !0
                }), setTimeout(function() {
                    d || k.triggerTransitionEnd(c)
                }, b), this
            }

            function g() {
                h = e(), a.fn.emulateTransitionEnd = f, k.supportsTransitionEnd() && (a.event.special[k.TRANSITION_END] = d())
            }
            var h = !1,
                i = 1e6,
                j = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                k = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(a) {
                        do a += ~~(Math.random() * i); while (document.getElementById(a));
                        return a
                    },
                    getSelectorFromElement: function(a) {
                        var b = a.getAttribute("data-target");
                        return b || (b = a.getAttribute("href") || "", b = /^#[a-z]/i.test(b) ? b : null), b
                    },
                    reflow: function(a) {
                        new Function("bs", "return bs")(a.offsetHeight)
                    },
                    triggerTransitionEnd: function(b) {
                        a(b).trigger(h.end)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(h)
                    },
                    typeCheckConfig: function(a, d, e) {
                        for (var f in e)
                            if (e.hasOwnProperty(f)) {
                                var g = e[f],
                                    h = d[f],
                                    i = void 0;
                                if (i = h && c(h) ? "element" : b(h), !new RegExp(g).test(i)) throw new Error(a.toUpperCase() + ": " + ('Option "' + f + '" provided type "' + i + '" ') + ('but expected type "' + g + '".'))
                            }
                    }
                };
            return g(), k
        }(jQuery),
        g = (function(a) {
            var b = "alert",
                d = "4.0.0-alpha.5",
                g = "bs.alert",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = {
                    DISMISS: '[data-dismiss="alert"]'
                },
                m = {
                    CLOSE: "close" + h,
                    CLOSED: "closed" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                n = {
                    ALERT: "alert",
                    FADE: "fade",
                    IN: "in"
                },
                o = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return b.prototype.close = function(a) {
                        a = a || this._element;
                        var b = this._getRootElement(a),
                            c = this._triggerCloseEvent(b);
                        c.isDefaultPrevented() || this._removeElement(b)
                    }, b.prototype.dispose = function() {
                        a.removeData(this._element, g), this._element = null
                    }, b.prototype._getRootElement = function(b) {
                        var c = f.getSelectorFromElement(b),
                            d = !1;
                        return c && (d = a(c)[0]), d || (d = a(b).closest("." + n.ALERT)[0]), d
                    }, b.prototype._triggerCloseEvent = function(b) {
                        var c = a.Event(m.CLOSE);
                        return a(b).trigger(c), c
                    }, b.prototype._removeElement = function(b) {
                        return a(b).removeClass(n.IN), f.supportsTransitionEnd() && a(b).hasClass(n.FADE) ? void a(b).one(f.TRANSITION_END, a.proxy(this._destroyElement, this, b)).emulateTransitionEnd(k) : void this._destroyElement(b)
                    }, b.prototype._destroyElement = function(b) {
                        a(b).detach().trigger(m.CLOSED).remove()
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            e || (e = new b(this), d.data(g, e)), "close" === c && e[c](this)
                        })
                    }, b._handleDismiss = function(a) {
                        return function(b) {
                            b && b.preventDefault(), a.close(this)
                        }
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(m.CLICK_DATA_API, l.DISMISS, o._handleDismiss(new o)), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface
            }, o
        }(jQuery), function(a) {
            var b = "button",
                d = "4.0.0-alpha.5",
                f = "bs.button",
                g = "." + f,
                h = ".data-api",
                i = a.fn[b],
                j = {
                    ACTIVE: "active",
                    BUTTON: "btn",
                    FOCUS: "focus"
                },
                k = {
                    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
                    DATA_TOGGLE: '[data-toggle="buttons"]',
                    INPUT: "input",
                    ACTIVE: ".active",
                    BUTTON: ".btn"
                },
                l = {
                    CLICK_DATA_API: "click" + g + h,
                    FOCUS_BLUR_DATA_API: "focus" + g + h + " " + ("blur" + g + h)
                },
                m = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return b.prototype.toggle = function() {
                        var b = !0,
                            c = a(this._element).closest(k.DATA_TOGGLE)[0];
                        if (c) {
                            var d = a(this._element).find(k.INPUT)[0];
                            if (d) {
                                if ("radio" === d.type)
                                    if (d.checked && a(this._element).hasClass(j.ACTIVE)) b = !1;
                                    else {
                                        var e = a(c).find(k.ACTIVE)[0];
                                        e && a(e).removeClass(j.ACTIVE)
                                    }
                                b && (d.checked = !a(this._element).hasClass(j.ACTIVE), a(this._element).trigger("change")), d.focus()
                            }
                        } else this._element.setAttribute("aria-pressed", !a(this._element).hasClass(j.ACTIVE));
                        b && a(this._element).toggleClass(j.ACTIVE)
                    }, b.prototype.dispose = function() {
                        a.removeData(this._element, f), this._element = null
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(f);
                            d || (d = new b(this), a(this).data(f, d)), "toggle" === c && d[c]()
                        })
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(l.CLICK_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                b.preventDefault();
                var c = b.target;
                a(c).hasClass(j.BUTTON) || (c = a(c).closest(k.BUTTON)), m._jQueryInterface.call(a(c), "toggle")
            }).on(l.FOCUS_BLUR_DATA_API, k.DATA_TOGGLE_CARROT, function(b) {
                var c = a(b.target).closest(k.BUTTON)[0];
                a(c).toggleClass(j.FOCUS, /^focus(in)?$/.test(b.type))
            }), a.fn[b] = m._jQueryInterface, a.fn[b].Constructor = m, a.fn[b].noConflict = function() {
                return a.fn[b] = i, m._jQueryInterface
            }, m
        }(jQuery), function(a) {
            var b = "carousel",
                g = "4.0.0-alpha.5",
                h = "bs.carousel",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = 37,
                n = 39,
                o = {
                    interval: 5e3,
                    keyboard: !0,
                    slide: !1,
                    pause: "hover",
                    wrap: !0
                },
                p = {
                    interval: "(number|boolean)",
                    keyboard: "boolean",
                    slide: "(boolean|string)",
                    pause: "(string|boolean)",
                    wrap: "boolean"
                },
                q = {
                    NEXT: "next",
                    PREVIOUS: "prev"
                },
                r = {
                    SLIDE: "slide" + i,
                    SLID: "slid" + i,
                    KEYDOWN: "keydown" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i,
                    LOAD_DATA_API: "load" + i + j,
                    CLICK_DATA_API: "click" + i + j
                },
                s = {
                    CAROUSEL: "carousel",
                    ACTIVE: "active",
                    SLIDE: "slide",
                    RIGHT: "right",
                    LEFT: "left",
                    ITEM: "carousel-item"
                },
                t = {
                    ACTIVE: ".active",
                    ACTIVE_ITEM: ".active.carousel-item",
                    ITEM: ".carousel-item",
                    NEXT_PREV: ".next, .prev",
                    INDICATORS: ".carousel-indicators",
                    DATA_SLIDE: "[data-slide], [data-slide-to]",
                    DATA_RIDE: '[data-ride="carousel"]'
                },
                u = function() {
                    function j(b, d) {
                        c(this, j), this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this._config = this._getConfig(d), this._element = a(b)[0], this._indicatorsElement = a(this._element).find(t.INDICATORS)[0], this._addEventListeners()
                    }
                    return j.prototype.next = function() {
                        this._isSliding || this._slide(q.NEXT)
                    }, j.prototype.nextWhenVisible = function() {
                        document.hidden || this.next()
                    }, j.prototype.prev = function() {
                        this._isSliding || this._slide(q.PREVIOUS)
                    }, j.prototype.pause = function(b) {
                        b || (this._isPaused = !0), a(this._element).find(t.NEXT_PREV)[0] && f.supportsTransitionEnd() && (f.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                    }, j.prototype.cycle = function(b) {
                        b || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval(a.proxy(document.visibilityState ? this.nextWhenVisible : this.next, this), this._config.interval))
                    }, j.prototype.to = function(b) {
                        var c = this;
                        this._activeElement = a(this._element).find(t.ACTIVE_ITEM)[0];
                        var d = this._getItemIndex(this._activeElement);
                        if (!(b > this._items.length - 1 || b < 0)) {
                            if (this._isSliding) return void a(this._element).one(r.SLID, function() {
                                return c.to(b)
                            });
                            if (d === b) return this.pause(), void this.cycle();
                            var e = b > d ? q.NEXT : q.PREVIOUS;
                            this._slide(e, this._items[b])
                        }
                    }, j.prototype.dispose = function() {
                        a(this._element).off(i), a.removeData(this._element, h), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                    }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c
                    }, j.prototype._addEventListeners = function() {
                        this._config.keyboard && a(this._element).on(r.KEYDOWN, a.proxy(this._keydown, this)), "hover" !== this._config.pause || "ontouchstart" in document.documentElement || a(this._element).on(r.MOUSEENTER, a.proxy(this.pause, this)).on(r.MOUSELEAVE, a.proxy(this.cycle, this))
                    }, j.prototype._keydown = function(a) {
                        if (a.preventDefault(), !/input|textarea/i.test(a.target.tagName)) switch (a.which) {
                            case m:
                                this.prev();
                                break;
                            case n:
                                this.next();
                                break;
                            default:
                                return
                        }
                    }, j.prototype._getItemIndex = function(b) {
                        return this._items = a.makeArray(a(b).parent().find(t.ITEM)), this._items.indexOf(b)
                    }, j.prototype._getItemByDirection = function(a, b) {
                        var c = a === q.NEXT,
                            d = a === q.PREVIOUS,
                            e = this._getItemIndex(b),
                            f = this._items.length - 1,
                            g = d && 0 === e || c && e === f;
                        if (g && !this._config.wrap) return b;
                        var h = a === q.PREVIOUS ? -1 : 1,
                            i = (e + h) % this._items.length;
                        return i === -1 ? this._items[this._items.length - 1] : this._items[i]
                    }, j.prototype._triggerSlideEvent = function(b, c) {
                        var d = a.Event(r.SLIDE, {
                            relatedTarget: b,
                            direction: c
                        });
                        return a(this._element).trigger(d), d
                    }, j.prototype._setActiveIndicatorElement = function(b) {
                        if (this._indicatorsElement) {
                            a(this._indicatorsElement).find(t.ACTIVE).removeClass(s.ACTIVE);
                            var c = this._indicatorsElement.children[this._getItemIndex(b)];
                            c && a(c).addClass(s.ACTIVE)
                        }
                    }, j.prototype._slide = function(b, c) {
                        var d = this,
                            e = a(this._element).find(t.ACTIVE_ITEM)[0],
                            g = c || e && this._getItemByDirection(b, e),
                            h = Boolean(this._interval),
                            i = b === q.NEXT ? s.LEFT : s.RIGHT;
                        if (g && a(g).hasClass(s.ACTIVE)) return void(this._isSliding = !1);
                        var j = this._triggerSlideEvent(g, i);
                        if (!j.isDefaultPrevented() && e && g) {
                            this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(g);
                            var k = a.Event(r.SLID, {
                                relatedTarget: g,
                                direction: i
                            });
                            f.supportsTransitionEnd() && a(this._element).hasClass(s.SLIDE) ? (a(g).addClass(b), f.reflow(g), a(e).addClass(i), a(g).addClass(i), a(e).one(f.TRANSITION_END, function() {
                                a(g).removeClass(i).removeClass(b), a(g).addClass(s.ACTIVE), a(e).removeClass(s.ACTIVE).removeClass(b).removeClass(i), d._isSliding = !1, setTimeout(function() {
                                    return a(d._element).trigger(k)
                                }, 0)
                            }).emulateTransitionEnd(l)) : (a(e).removeClass(s.ACTIVE), a(g).addClass(s.ACTIVE), this._isSliding = !1, a(this._element).trigger(k)), h && this.cycle()
                        }
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = a.extend({}, o, a(this).data());
                            "object" === ("undefined" == typeof b ? "undefined" : d(b)) && a.extend(e, b);
                            var f = "string" == typeof b ? b : e.slide;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "number" == typeof b) c.to(b);
                            else if ("string" == typeof f) {
                                if (void 0 === c[f]) throw new Error('No method named "' + f + '"');
                                c[f]()
                            } else e.interval && (c.pause(), c.cycle())
                        })
                    }, j._dataApiClickHandler = function(b) {
                        var c = f.getSelectorFromElement(this);
                        if (c) {
                            var d = a(c)[0];
                            if (d && a(d).hasClass(s.CAROUSEL)) {
                                var e = a.extend({}, a(d).data(), a(this).data()),
                                    g = this.getAttribute("data-slide-to");
                                g && (e.interval = !1), j._jQueryInterface.call(a(d), e), g && a(d).data(h).to(g), b.preventDefault()
                            }
                        }
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), j
                }();
            return a(document).on(r.CLICK_DATA_API, t.DATA_SLIDE, u._dataApiClickHandler), a(window).on(r.LOAD_DATA_API, function() {
                a(t.DATA_RIDE).each(function() {
                    var b = a(this);
                    u._jQueryInterface.call(b, b.data())
                })
            }), a.fn[b] = u._jQueryInterface, a.fn[b].Constructor = u, a.fn[b].noConflict = function() {
                return a.fn[b] = k, u._jQueryInterface
            }, u
        }(jQuery), function(a) {
            var b = "collapse",
                g = "4.0.0-alpha.5",
                h = "bs.collapse",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 600,
                m = {
                    toggle: !0,
                    parent: ""
                },
                n = {
                    toggle: "boolean",
                    parent: "string"
                },
                o = {
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    CLICK_DATA_API: "click" + i + j
                },
                p = {
                    IN: "in",
                    COLLAPSE: "collapse",
                    COLLAPSING: "collapsing",
                    COLLAPSED: "collapsed"
                },
                q = {
                    WIDTH: "width",
                    HEIGHT: "height"
                },
                r = {
                    ACTIVES: ".card > .in, .card > .collapsing",
                    DATA_TOGGLE: '[data-toggle="collapse"]'
                },
                s = function() {
                    function i(b, d) {
                        c(this, i), this._isTransitioning = !1, this._element = b, this._config = this._getConfig(d), this._triggerArray = a.makeArray(a('[data-toggle="collapse"][href="#' + b.id + '"],' + ('[data-toggle="collapse"][data-target="#' + b.id + '"]'))), this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                    }
                    return i.prototype.toggle = function() {
                        a(this._element).hasClass(p.IN) ? this.hide() : this.show()
                    }, i.prototype.show = function() {
                        var b = this;
                        if (!this._isTransitioning && !a(this._element).hasClass(p.IN)) {
                            var c = void 0,
                                d = void 0;
                            if (this._parent && (c = a.makeArray(a(r.ACTIVES)), c.length || (c = null)), !(c && (d = a(c).data(h), d && d._isTransitioning))) {
                                var e = a.Event(o.SHOW);
                                if (a(this._element).trigger(e), !e.isDefaultPrevented()) {
                                    c && (i._jQueryInterface.call(a(c), "hide"), d || a(c).data(h, null));
                                    var g = this._getDimension();
                                    a(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[g] = 0, this._element.setAttribute("aria-expanded", !0), this._triggerArray.length && a(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                                    var j = function() {
                                        a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.IN), b._element.style[g] = "", b.setTransitioning(!1), a(b._element).trigger(o.SHOWN)
                                    };
                                    if (!f.supportsTransitionEnd()) return void j();
                                    var k = g[0].toUpperCase() + g.slice(1),
                                        m = "scroll" + k;
                                    a(this._element).one(f.TRANSITION_END, j).emulateTransitionEnd(l), this._element.style[g] = this._element[m] + "px"
                                }
                            }
                        }
                    }, i.prototype.hide = function() {
                        var b = this;
                        if (!this._isTransitioning && a(this._element).hasClass(p.IN)) {
                            var c = a.Event(o.HIDE);
                            if (a(this._element).trigger(c), !c.isDefaultPrevented()) {
                                var d = this._getDimension(),
                                    e = d === q.WIDTH ? "offsetWidth" : "offsetHeight";
                                this._element.style[d] = this._element[e] + "px", f.reflow(this._element), a(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.IN), this._element.setAttribute("aria-expanded", !1), this._triggerArray.length && a(this._triggerArray).addClass(p.COLLAPSED).attr("aria-expanded", !1), this.setTransitioning(!0);
                                var g = function() {
                                    b.setTransitioning(!1), a(b._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(o.HIDDEN)
                                };
                                return this._element.style[d] = "", f.supportsTransitionEnd() ? void a(this._element).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : void g()
                            }
                        }
                    }, i.prototype.setTransitioning = function(a) {
                        this._isTransitioning = a
                    }, i.prototype.dispose = function() {
                        a.removeData(this._element, h), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                    }, i.prototype._getConfig = function(c) {
                        return c = a.extend({}, m, c), c.toggle = Boolean(c.toggle), f.typeCheckConfig(b, c, n), c
                    }, i.prototype._getDimension = function() {
                        var b = a(this._element).hasClass(q.WIDTH);
                        return b ? q.WIDTH : q.HEIGHT
                    }, i.prototype._getParent = function() {
                        var b = this,
                            c = a(this._config.parent)[0],
                            d = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                        return a(c).find(d).each(function(a, c) {
                            b._addAriaAndCollapsedClass(i._getTargetFromElement(c), [c])
                        }), c
                    }, i.prototype._addAriaAndCollapsedClass = function(b, c) {
                        if (b) {
                            var d = a(b).hasClass(p.IN);
                            b.setAttribute("aria-expanded", d), c.length && a(c).toggleClass(p.COLLAPSED, !d).attr("aria-expanded", d)
                        }
                    }, i._getTargetFromElement = function(b) {
                        var c = f.getSelectorFromElement(b);
                        return c ? a(c)[0] : null
                    }, i._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this),
                                e = c.data(h),
                                f = a.extend({}, m, c.data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                            if (!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || (e = new i(this, f), c.data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b]()
                            }
                        })
                    }, e(i, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return m
                        }
                    }]), i
                }();
            return a(document).on(o.CLICK_DATA_API, r.DATA_TOGGLE, function(b) {
                b.preventDefault();
                var c = s._getTargetFromElement(this),
                    d = a(c).data(h),
                    e = d ? "toggle" : a(this).data();
                s._jQueryInterface.call(a(c), e)
            }), a.fn[b] = s._jQueryInterface, a.fn[b].Constructor = s, a.fn[b].noConflict = function() {
                return a.fn[b] = k, s._jQueryInterface
            }, s
        }(jQuery), function(a) {
            var b = "dropdown",
                d = "4.0.0-alpha.5",
                g = "bs.dropdown",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 27,
                l = 38,
                m = 40,
                n = 3,
                o = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    CLICK: "click" + h,
                    CLICK_DATA_API: "click" + h + i,
                    KEYDOWN_DATA_API: "keydown" + h + i
                },
                p = {
                    BACKDROP: "dropdown-backdrop",
                    DISABLED: "disabled",
                    OPEN: "open"
                },
                q = {
                    BACKDROP: ".dropdown-backdrop",
                    DATA_TOGGLE: '[data-toggle="dropdown"]',
                    FORM_CHILD: ".dropdown form",
                    ROLE_MENU: '[role="menu"]',
                    ROLE_LISTBOX: '[role="listbox"]',
                    NAVBAR_NAV: ".navbar-nav",
                    VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'
                },
                r = function() {
                    function b(a) {
                        c(this, b), this._element = a, this._addEventListeners()
                    }
                    return b.prototype.toggle = function() {
                        if (this.disabled || a(this).hasClass(p.DISABLED)) return !1;
                        var c = b._getParentFromElement(this),
                            d = a(c).hasClass(p.OPEN);
                        if (b._clearMenus(), d) return !1;
                        if ("ontouchstart" in document.documentElement && !a(c).closest(q.NAVBAR_NAV).length) {
                            var e = document.createElement("div");
                            e.className = p.BACKDROP, a(e).insertBefore(this), a(e).on("click", b._clearMenus)
                        }
                        var f = {
                                relatedTarget: this
                            },
                            g = a.Event(o.SHOW, f);
                        return a(c).trigger(g), !g.isDefaultPrevented() && (this.focus(), this.setAttribute("aria-expanded", "true"), a(c).toggleClass(p.OPEN), a(c).trigger(a.Event(o.SHOWN, f)), !1)
                    }, b.prototype.dispose = function() {
                        a.removeData(this._element, g), a(this._element).off(h), this._element = null
                    }, b.prototype._addEventListeners = function() {
                        a(this._element).on(o.CLICK, this.toggle)
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this).data(g);
                            if (d || a(this).data(g, d = new b(this)), "string" == typeof c) {
                                if (void 0 === d[c]) throw new Error('No method named "' + c + '"');
                                d[c].call(this)
                            }
                        })
                    }, b._clearMenus = function(c) {
                        if (!c || c.which !== n) {
                            var d = a(q.BACKDROP)[0];
                            d && d.parentNode.removeChild(d);
                            for (var e = a.makeArray(a(q.DATA_TOGGLE)), f = 0; f < e.length; f++) {
                                var g = b._getParentFromElement(e[f]),
                                    h = {
                                        relatedTarget: e[f]
                                    };
                                if (a(g).hasClass(p.OPEN) && !(c && "click" === c.type && /input|textarea/i.test(c.target.tagName) && a.contains(g, c.target))) {
                                    var i = a.Event(o.HIDE, h);
                                    a(g).trigger(i), i.isDefaultPrevented() || (e[f].setAttribute("aria-expanded", "false"), a(g).removeClass(p.OPEN).trigger(a.Event(o.HIDDEN, h)))
                                }
                            }
                        }
                    }, b._getParentFromElement = function(b) {
                        var c = void 0,
                            d = f.getSelectorFromElement(b);
                        return d && (c = a(d)[0]), c || b.parentNode
                    }, b._dataApiKeydownHandler = function(c) {
                        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName) && (c.preventDefault(), c.stopPropagation(), !this.disabled && !a(this).hasClass(p.DISABLED))) {
                            var d = b._getParentFromElement(this),
                                e = a(d).hasClass(p.OPEN);
                            if (!e && c.which !== k || e && c.which === k) {
                                if (c.which === k) {
                                    var f = a(d).find(q.DATA_TOGGLE)[0];
                                    a(f).trigger("focus")
                                }
                                return void a(this).trigger("click")
                            }
                            var g = a.makeArray(a(q.VISIBLE_ITEMS));
                            if (g = g.filter(function(a) {
                                    return a.offsetWidth || a.offsetHeight
                                }), g.length) {
                                var h = g.indexOf(c.target);
                                c.which === l && h > 0 && h--, c.which === m && h < g.length - 1 && h++, h < 0 && (h = 0), g[h].focus()
                            }
                        }
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(o.KEYDOWN_DATA_API, q.DATA_TOGGLE, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_MENU, r._dataApiKeydownHandler).on(o.KEYDOWN_DATA_API, q.ROLE_LISTBOX, r._dataApiKeydownHandler).on(o.CLICK_DATA_API, r._clearMenus).on(o.CLICK_DATA_API, q.DATA_TOGGLE, r.prototype.toggle).on(o.CLICK_DATA_API, q.FORM_CHILD, function(a) {
                a.stopPropagation()
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = j, r._jQueryInterface
            }, r
        }(jQuery), function(a) {
            var b = "modal",
                g = "4.0.0-alpha.5",
                h = "bs.modal",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = 300,
                m = 150,
                n = 27,
                o = {
                    backdrop: !0,
                    keyboard: !0,
                    focus: !0,
                    show: !0
                },
                p = {
                    backdrop: "(boolean|string)",
                    keyboard: "boolean",
                    focus: "boolean",
                    show: "boolean"
                },
                q = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    FOCUSIN: "focusin" + i,
                    RESIZE: "resize" + i,
                    CLICK_DISMISS: "click.dismiss" + i,
                    KEYDOWN_DISMISS: "keydown.dismiss" + i,
                    MOUSEUP_DISMISS: "mouseup.dismiss" + i,
                    MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
                    CLICK_DATA_API: "click" + i + j
                },
                r = {
                    SCROLLBAR_MEASURER: "modal-scrollbar-measure",
                    BACKDROP: "modal-backdrop",
                    OPEN: "modal-open",
                    FADE: "fade",
                    IN: "in"
                },
                s = {
                    DIALOG: ".modal-dialog",
                    DATA_TOGGLE: '[data-toggle="modal"]',
                    DATA_DISMISS: '[data-dismiss="modal"]',
                    FIXED_CONTENT: ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed"
                },
                t = function() {
                    function j(b, d) {
                        c(this, j), this._config = this._getConfig(d), this._element = b, this._dialog = a(b).find(s.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                    }
                    return j.prototype.toggle = function(a) {
                        return this._isShown ? this.hide() : this.show(a)
                    }, j.prototype.show = function(b) {
                        var c = this,
                            d = a.Event(q.SHOW, {
                                relatedTarget: b
                            });
                        a(this._element).trigger(d), this._isShown || d.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), a(document.body).addClass(r.OPEN), this._setEscapeEvent(), this._setResizeEvent(), a(this._element).on(q.CLICK_DISMISS, s.DATA_DISMISS, a.proxy(this.hide, this)), a(this._dialog).on(q.MOUSEDOWN_DISMISS, function() {
                            a(c._element).one(q.MOUSEUP_DISMISS, function(b) {
                                a(b.target).is(c._element) && (c._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(a.proxy(this._showElement, this, b)))
                    }, j.prototype.hide = function(b) {
                        b && b.preventDefault();
                        var c = a.Event(q.HIDE);
                        a(this._element).trigger(c), this._isShown && !c.isDefaultPrevented() && (this._isShown = !1, this._setEscapeEvent(), this._setResizeEvent(), a(document).off(q.FOCUSIN), a(this._element).removeClass(r.IN), a(this._element).off(q.CLICK_DISMISS), a(this._dialog).off(q.MOUSEDOWN_DISMISS), f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._element).one(f.TRANSITION_END, a.proxy(this._hideModal, this)).emulateTransitionEnd(l) : this._hideModal())
                    }, j.prototype.dispose = function() {
                        a.removeData(this._element, h), a(window).off(i), a(document).off(i), a(this._element).off(i), a(this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._originalBodyPadding = null, this._scrollbarWidth = null
                    }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, o, c), f.typeCheckConfig(b, c, p), c
                    }, j.prototype._showElement = function(b) {
                        var c = this,
                            d = f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE);
                        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, d && f.reflow(this._element), a(this._element).addClass(r.IN), this._config.focus && this._enforceFocus();
                        var e = a.Event(q.SHOWN, {
                                relatedTarget: b
                            }),
                            g = function() {
                                c._config.focus && c._element.focus(), a(c._element).trigger(e)
                            };
                        d ? a(this._dialog).one(f.TRANSITION_END, g).emulateTransitionEnd(l) : g()
                    }, j.prototype._enforceFocus = function() {
                        var b = this;
                        a(document).off(q.FOCUSIN).on(q.FOCUSIN, function(c) {
                            document === c.target || b._element === c.target || a(b._element).has(c.target).length || b._element.focus()
                        })
                    }, j.prototype._setEscapeEvent = function() {
                        var b = this;
                        this._isShown && this._config.keyboard ? a(this._element).on(q.KEYDOWN_DISMISS, function(a) {
                            a.which === n && b.hide()
                        }) : this._isShown || a(this._element).off(q.KEYDOWN_DISMISS)
                    }, j.prototype._setResizeEvent = function() {
                        this._isShown ? a(window).on(q.RESIZE, a.proxy(this._handleUpdate, this)) : a(window).off(q.RESIZE)
                    }, j.prototype._hideModal = function() {
                        var b = this;
                        this._element.style.display = "none", this._element.setAttribute("aria-hidden", "true"), this._showBackdrop(function() {
                            a(document.body).removeClass(r.OPEN), b._resetAdjustments(), b._resetScrollbar(), a(b._element).trigger(q.HIDDEN)
                        })
                    }, j.prototype._removeBackdrop = function() {
                        this._backdrop && (a(this._backdrop).remove(), this._backdrop = null)
                    }, j.prototype._showBackdrop = function(b) {
                        var c = this,
                            d = a(this._element).hasClass(r.FADE) ? r.FADE : "";
                        if (this._isShown && this._config.backdrop) {
                            var e = f.supportsTransitionEnd() && d;
                            if (this._backdrop = document.createElement("div"), this._backdrop.className = r.BACKDROP, d && a(this._backdrop).addClass(d), a(this._backdrop).appendTo(document.body), a(this._element).on(q.CLICK_DISMISS, function(a) {
                                    return c._ignoreBackdropClick ? void(c._ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" === c._config.backdrop ? c._element.focus() : c.hide()))
                                }), e && f.reflow(this._backdrop), a(this._backdrop).addClass(r.IN), !b) return;
                            if (!e) return void b();
                            a(this._backdrop).one(f.TRANSITION_END, b).emulateTransitionEnd(m)
                        } else if (!this._isShown && this._backdrop) {
                            a(this._backdrop).removeClass(r.IN);
                            var g = function() {
                                c._removeBackdrop(), b && b()
                            };
                            f.supportsTransitionEnd() && a(this._element).hasClass(r.FADE) ? a(this._backdrop).one(f.TRANSITION_END, g).emulateTransitionEnd(m) : g()
                        } else b && b()
                    }, j.prototype._handleUpdate = function() {
                        this._adjustDialog()
                    }, j.prototype._adjustDialog = function() {
                        var a = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && a && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !a && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                    }, j.prototype._resetAdjustments = function() {
                        this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                    }, j.prototype._checkScrollbar = function() {
                        this._isBodyOverflowing = document.body.clientWidth < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                    }, j.prototype._setScrollbar = function() {
                        var b = parseInt(a(s.FIXED_CONTENT).css("padding-right") || 0, 10);
                        this._originalBodyPadding = document.body.style.paddingRight || "", this._isBodyOverflowing && (document.body.style.paddingRight = b + this._scrollbarWidth + "px")
                    }, j.prototype._resetScrollbar = function() {
                        document.body.style.paddingRight = this._originalBodyPadding
                    }, j.prototype._getScrollbarWidth = function() {
                        var a = document.createElement("div");
                        a.className = r.SCROLLBAR_MEASURER, document.body.appendChild(a);
                        var b = a.offsetWidth - a.clientWidth;
                        return document.body.removeChild(a), b
                    }, j._jQueryInterface = function(b, c) {
                        return this.each(function() {
                            var e = a(this).data(h),
                                f = a.extend({}, j.Default, a(this).data(), "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b);
                            if (e || (e = new j(this, f), a(this).data(h, e)), "string" == typeof b) {
                                if (void 0 === e[b]) throw new Error('No method named "' + b + '"');
                                e[b](c)
                            } else f.show && e.show(c)
                        })
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return o
                        }
                    }]), j
                }();
            return a(document).on(q.CLICK_DATA_API, s.DATA_TOGGLE, function(b) {
                var c = this,
                    d = void 0,
                    e = f.getSelectorFromElement(this);
                e && (d = a(e)[0]);
                var g = a(d).data(h) ? "toggle" : a.extend({}, a(d).data(), a(this).data());
                "A" === this.tagName && b.preventDefault();
                var i = a(d).one(q.SHOW, function(b) {
                    b.isDefaultPrevented() || i.one(q.HIDDEN, function() {
                        a(c).is(":visible") && c.focus()
                    })
                });
                t._jQueryInterface.call(a(d), g, this)
            }), a.fn[b] = t._jQueryInterface, a.fn[b].Constructor = t, a.fn[b].noConflict = function() {
                return a.fn[b] = k, t._jQueryInterface
            }, t
        }(jQuery), function(a) {
            var b = "scrollspy",
                g = "4.0.0-alpha.5",
                h = "bs.scrollspy",
                i = "." + h,
                j = ".data-api",
                k = a.fn[b],
                l = {
                    offset: 10,
                    method: "auto",
                    target: ""
                },
                m = {
                    offset: "number",
                    method: "string",
                    target: "(string|element)"
                },
                n = {
                    ACTIVATE: "activate" + i,
                    SCROLL: "scroll" + i,
                    LOAD_DATA_API: "load" + i + j
                },
                o = {
                    DROPDOWN_ITEM: "dropdown-item",
                    DROPDOWN_MENU: "dropdown-menu",
                    NAV_LINK: "nav-link",
                    NAV: "nav",
                    ACTIVE: "active"
                },
                p = {
                    DATA_SPY: '[data-spy="scroll"]',
                    ACTIVE: ".active",
                    LIST_ITEM: ".list-item",
                    LI: "li",
                    LI_DROPDOWN: "li.dropdown",
                    NAV_LINKS: ".nav-link",
                    DROPDOWN: ".dropdown",
                    DROPDOWN_ITEMS: ".dropdown-item",
                    DROPDOWN_TOGGLE: ".dropdown-toggle"
                },
                q = {
                    OFFSET: "offset",
                    POSITION: "position"
                },
                r = function() {
                    function j(b, d) {
                        c(this, j), this._element = b, this._scrollElement = "BODY" === b.tagName ? window : b, this._config = this._getConfig(d), this._selector = this._config.target + " " + p.NAV_LINKS + "," + (this._config.target + " " + p.DROPDOWN_ITEMS), this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, a(this._scrollElement).on(n.SCROLL, a.proxy(this._process, this)), this.refresh(), this._process()
                    }
                    return j.prototype.refresh = function() {
                        var b = this,
                            c = this._scrollElement !== this._scrollElement.window ? q.POSITION : q.OFFSET,
                            d = "auto" === this._config.method ? c : this._config.method,
                            e = d === q.POSITION ? this._getScrollTop() : 0;
                        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight();
                        var g = a.makeArray(a(this._selector));
                        g.map(function(b) {
                            var c = void 0,
                                g = f.getSelectorFromElement(b);
                            return g && (c = a(g)[0]), c && (c.offsetWidth || c.offsetHeight) ? [a(c)[d]().top + e, g] : null
                        }).filter(function(a) {
                            return a
                        }).sort(function(a, b) {
                            return a[0] - b[0]
                        }).forEach(function(a) {
                            b._offsets.push(a[0]), b._targets.push(a[1])
                        })
                    }, j.prototype.dispose = function() {
                        a.removeData(this._element, h), a(this._scrollElement).off(i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                    }, j.prototype._getConfig = function(c) {
                        if (c = a.extend({}, l, c), "string" != typeof c.target) {
                            var d = a(c.target).attr("id");
                            d || (d = f.getUID(b), a(c.target).attr("id", d)), c.target = "#" + d
                        }
                        return f.typeCheckConfig(b, c, m), c
                    }, j.prototype._getScrollTop = function() {
                        return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop
                    }, j.prototype._getScrollHeight = function() {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                    }, j.prototype._process = function() {
                        var a = this._getScrollTop() + this._config.offset,
                            b = this._getScrollHeight(),
                            c = this._config.offset + b - this._scrollElement.offsetHeight;
                        if (this._scrollHeight !== b && this.refresh(), a >= c) {
                            var d = this._targets[this._targets.length - 1];
                            this._activeTarget !== d && this._activate(d)
                        }
                        if (this._activeTarget && a < this._offsets[0]) return this._activeTarget = null, void this._clear();
                        for (var e = this._offsets.length; e--;) {
                            var f = this._activeTarget !== this._targets[e] && a >= this._offsets[e] && (void 0 === this._offsets[e + 1] || a < this._offsets[e + 1]);
                            f && this._activate(this._targets[e])
                        }
                    }, j.prototype._activate = function(b) {
                        this._activeTarget = b, this._clear();
                        var c = this._selector.split(",");
                        c = c.map(function(a) {
                            return a + '[data-target="' + b + '"],' + (a + '[href="' + b + '"]')
                        });
                        var d = a(c.join(","));
                        d.hasClass(o.DROPDOWN_ITEM) ? (d.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(o.ACTIVE), d.addClass(o.ACTIVE)) : d.parents(p.LI).find(p.NAV_LINKS).addClass(o.ACTIVE), a(this._scrollElement).trigger(n.ACTIVATE, {
                            relatedTarget: b
                        })
                    }, j.prototype._clear = function() {
                        a(this._selector).filter(p.ACTIVE).removeClass(o.ACTIVE)
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) && b || null;
                            if (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return l
                        }
                    }]), j
                }();
            return a(window).on(n.LOAD_DATA_API, function() {
                for (var b = a.makeArray(a(p.DATA_SPY)), c = b.length; c--;) {
                    var d = a(b[c]);
                    r._jQueryInterface.call(d, d.data())
                }
            }), a.fn[b] = r._jQueryInterface, a.fn[b].Constructor = r, a.fn[b].noConflict = function() {
                return a.fn[b] = k, r._jQueryInterface
            }, r
        }(jQuery), function(a) {
            var b = "tab",
                d = "4.0.0-alpha.5",
                g = "bs.tab",
                h = "." + g,
                i = ".data-api",
                j = a.fn[b],
                k = 150,
                l = {
                    HIDE: "hide" + h,
                    HIDDEN: "hidden" + h,
                    SHOW: "show" + h,
                    SHOWN: "shown" + h,
                    CLICK_DATA_API: "click" + h + i
                },
                m = {
                    DROPDOWN_MENU: "dropdown-menu",
                    ACTIVE: "active",
                    FADE: "fade",
                    IN: "in"
                },
                n = {
                    A: "a",
                    LI: "li",
                    DROPDOWN: ".dropdown",
                    UL: "ul:not(.dropdown-menu)",
                    FADE_CHILD: "> .nav-item .fade, > .fade",
                    ACTIVE: ".active",
                    ACTIVE_CHILD: "> .nav-item > .active, > .active",
                    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
                    DROPDOWN_TOGGLE: ".dropdown-toggle",
                    DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
                },
                o = function() {
                    function b(a) {
                        c(this, b), this._element = a
                    }
                    return b.prototype.show = function() {
                        var b = this;
                        if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE || !a(this._element).hasClass(m.ACTIVE)) {
                            var c = void 0,
                                d = void 0,
                                e = a(this._element).closest(n.UL)[0],
                                g = f.getSelectorFromElement(this._element);
                            e && (d = a.makeArray(a(e).find(n.ACTIVE)), d = d[d.length - 1]);
                            var h = a.Event(l.HIDE, {
                                    relatedTarget: this._element
                                }),
                                i = a.Event(l.SHOW, {
                                    relatedTarget: d
                                });
                            if (d && a(d).trigger(h), a(this._element).trigger(i), !i.isDefaultPrevented() && !h.isDefaultPrevented()) {
                                g && (c = a(g)[0]), this._activate(this._element, e);
                                var j = function() {
                                    var c = a.Event(l.HIDDEN, {
                                            relatedTarget: b._element
                                        }),
                                        e = a.Event(l.SHOWN, {
                                            relatedTarget: d
                                        });
                                    a(d).trigger(c), a(b._element).trigger(e)
                                };
                                c ? this._activate(c, c.parentNode, j) : j()
                            }
                        }
                    }, b.prototype.dispose = function() {
                        a.removeClass(this._element, g), this._element = null
                    }, b.prototype._activate = function(b, c, d) {
                        var e = a(c).find(n.ACTIVE_CHILD)[0],
                            g = d && f.supportsTransitionEnd() && (e && a(e).hasClass(m.FADE) || Boolean(a(c).find(n.FADE_CHILD)[0])),
                            h = a.proxy(this._transitionComplete, this, b, e, g, d);
                        e && g ? a(e).one(f.TRANSITION_END, h).emulateTransitionEnd(k) : h(), e && a(e).removeClass(m.IN)
                    }, b.prototype._transitionComplete = function(b, c, d, e) {
                        if (c) {
                            a(c).removeClass(m.ACTIVE);
                            var g = a(c).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                            g && a(g).removeClass(m.ACTIVE), c.setAttribute("aria-expanded", !1)
                        }
                        if (a(b).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0), d ? (f.reflow(b), a(b).addClass(m.IN)) : a(b).removeClass(m.FADE), b.parentNode && a(b.parentNode).hasClass(m.DROPDOWN_MENU)) {
                            var h = a(b).closest(n.DROPDOWN)[0];
                            h && a(h).find(n.DROPDOWN_TOGGLE).addClass(m.ACTIVE), b.setAttribute("aria-expanded", !0)
                        }
                        e && e()
                    }, b._jQueryInterface = function(c) {
                        return this.each(function() {
                            var d = a(this),
                                e = d.data(g);
                            if (e || (e = e = new b(this), d.data(g, e)), "string" == typeof c) {
                                if (void 0 === e[c]) throw new Error('No method named "' + c + '"');
                                e[c]()
                            }
                        })
                    }, e(b, null, [{
                        key: "VERSION",
                        get: function() {
                            return d
                        }
                    }]), b
                }();
            return a(document).on(l.CLICK_DATA_API, n.DATA_TOGGLE, function(b) {
                b.preventDefault(), o._jQueryInterface.call(a(this), "show")
            }), a.fn[b] = o._jQueryInterface, a.fn[b].Constructor = o, a.fn[b].noConflict = function() {
                return a.fn[b] = j, o._jQueryInterface
            }, o
        }(jQuery), function(a) {
            if (void 0 === window.Tether) throw new Error("Bootstrap tooltips require Tether (http://tether.io/)");
            var b = "tooltip",
                g = "4.0.0-alpha.5",
                h = "bs.tooltip",
                i = "." + h,
                j = a.fn[b],
                k = 150,
                l = "bs-tether",
                m = {
                    animation: !0,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    selector: !1,
                    placement: "top",
                    offset: "0 0",
                    constraints: []
                },
                n = {
                    animation: "boolean",
                    template: "string",
                    title: "(string|element|function)",
                    trigger: "string",
                    delay: "(number|object)",
                    html: "boolean",
                    selector: "(string|boolean)",
                    placement: "(string|function)",
                    offset: "string",
                    constraints: "array"
                },
                o = {
                    TOP: "bottom center",
                    RIGHT: "middle left",
                    BOTTOM: "top center",
                    LEFT: "middle right"
                },
                p = {
                    IN: "in",
                    OUT: "out"
                },
                q = {
                    HIDE: "hide" + i,
                    HIDDEN: "hidden" + i,
                    SHOW: "show" + i,
                    SHOWN: "shown" + i,
                    INSERTED: "inserted" + i,
                    CLICK: "click" + i,
                    FOCUSIN: "focusin" + i,
                    FOCUSOUT: "focusout" + i,
                    MOUSEENTER: "mouseenter" + i,
                    MOUSELEAVE: "mouseleave" + i
                },
                r = {
                    FADE: "fade",
                    IN: "in"
                },
                s = {
                    TOOLTIP: ".tooltip",
                    TOOLTIP_INNER: ".tooltip-inner"
                },
                t = {
                    element: !1,
                    enabled: !1
                },
                u = {
                    HOVER: "hover",
                    FOCUS: "focus",
                    CLICK: "click",
                    MANUAL: "manual"
                },
                v = function() {
                    function j(a, b) {
                        c(this, j), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._tether = null, this.element = a, this.config = this._getConfig(b), this.tip = null, this._setListeners()
                    }
                    return j.prototype.enable = function() {
                        this._isEnabled = !0
                    }, j.prototype.disable = function() {
                        this._isEnabled = !1
                    }, j.prototype.toggleEnabled = function() {
                        this._isEnabled = !this._isEnabled
                    }, j.prototype.toggle = function(b) {
                        if (b) {
                            var c = this.constructor.DATA_KEY,
                                d = a(b.currentTarget).data(c);
                            d || (d = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(c, d)), d._activeTrigger.click = !d._activeTrigger.click, d._isWithActiveTrigger() ? d._enter(null, d) : d._leave(null, d)
                        } else {
                            if (a(this.getTipElement()).hasClass(r.IN)) return void this._leave(null, this);
                            this._enter(null, this)
                        }
                    }, j.prototype.dispose = function() {
                        clearTimeout(this._timeout), this.cleanupTether(), a.removeData(this.element, this.constructor.DATA_KEY), a(this.element).off(this.constructor.EVENT_KEY), this.tip && a(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._tether = null, this.element = null, this.config = null, this.tip = null
                    }, j.prototype.show = function() {
                        var b = this,
                            c = a.Event(this.constructor.Event.SHOW);
                        if (this.isWithContent() && this._isEnabled) {
                            a(this.element).trigger(c);
                            var d = a.contains(this.element.ownerDocument.documentElement, this.element);
                            if (c.isDefaultPrevented() || !d) return;
                            var e = this.getTipElement(),
                                g = f.getUID(this.constructor.NAME);
                            e.setAttribute("id", g), this.element.setAttribute("aria-describedby", g), this.setContent(), this.config.animation && a(e).addClass(r.FADE);
                            var h = "function" == typeof this.config.placement ? this.config.placement.call(this, e, this.element) : this.config.placement,
                                i = this._getAttachment(h);
                            a(e).data(this.constructor.DATA_KEY, this).appendTo(document.body), a(this.element).trigger(this.constructor.Event.INSERTED), this._tether = new Tether({
                                attachment: i,
                                element: e,
                                target: this.element,
                                classes: t,
                                classPrefix: l,
                                offset: this.config.offset,
                                constraints: this.config.constraints,
                                addTargetClasses: !1
                            }), f.reflow(e), this._tether.position(), a(e).addClass(r.IN);
                            var k = function() {
                                var c = b._hoverState;
                                b._hoverState = null, a(b.element).trigger(b.constructor.Event.SHOWN), c === p.OUT && b._leave(null, b)
                            };
                            if (f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE)) return void a(this.tip).one(f.TRANSITION_END, k).emulateTransitionEnd(j._TRANSITION_DURATION);
                            k()
                        }
                    }, j.prototype.hide = function(b) {
                        var c = this,
                            d = this.getTipElement(),
                            e = a.Event(this.constructor.Event.HIDE),
                            g = function() {
                                c._hoverState !== p.IN && d.parentNode && d.parentNode.removeChild(d), c.element.removeAttribute("aria-describedby"), a(c.element).trigger(c.constructor.Event.HIDDEN), c.cleanupTether(), b && b()
                            };
                        a(this.element).trigger(e), e.isDefaultPrevented() || (a(d).removeClass(r.IN), f.supportsTransitionEnd() && a(this.tip).hasClass(r.FADE) ? a(d).one(f.TRANSITION_END, g).emulateTransitionEnd(k) : g(), this._hoverState = "")
                    }, j.prototype.isWithContent = function() {
                        return Boolean(this.getTitle())
                    }, j.prototype.getTipElement = function() {
                        return this.tip = this.tip || a(this.config.template)[0]
                    }, j.prototype.setContent = function() {
                        var b = a(this.getTipElement());
                        this.setElementContent(b.find(s.TOOLTIP_INNER), this.getTitle()), b.removeClass(r.FADE).removeClass(r.IN), this.cleanupTether()
                    }, j.prototype.setElementContent = function(b, c) {
                        var e = this.config.html;
                        "object" === ("undefined" == typeof c ? "undefined" : d(c)) && (c.nodeType || c.jquery) ? e ? a(c).parent().is(b) || b.empty().append(c) : b.text(a(c).text()): b[e ? "html" : "text"](c)
                    }, j.prototype.getTitle = function() {
                        var a = this.element.getAttribute("data-original-title");
                        return a || (a = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), a
                    }, j.prototype.cleanupTether = function() {
                        this._tether && this._tether.destroy()
                    }, j.prototype._getAttachment = function(a) {
                        return o[a.toUpperCase()]
                    }, j.prototype._setListeners = function() {
                        var b = this,
                            c = this.config.trigger.split(" ");
                        c.forEach(function(c) {
                            if ("click" === c) a(b.element).on(b.constructor.Event.CLICK, b.config.selector, a.proxy(b.toggle, b));
                            else if (c !== u.MANUAL) {
                                var d = c === u.HOVER ? b.constructor.Event.MOUSEENTER : b.constructor.Event.FOCUSIN,
                                    e = c === u.HOVER ? b.constructor.Event.MOUSELEAVE : b.constructor.Event.FOCUSOUT;
                                a(b.element).on(d, b.config.selector, a.proxy(b._enter, b)).on(e, b.config.selector, a.proxy(b._leave, b))
                            }
                        }), this.config.selector ? this.config = a.extend({}, this.config, {
                            trigger: "manual",
                            selector: ""
                        }) : this._fixTitle()
                    }, j.prototype._fixTitle = function() {
                        var a = d(this.element.getAttribute("data-original-title"));
                        (this.element.getAttribute("title") || "string" !== a) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                    }, j.prototype._enter = function(b, c) {
                        var d = this.constructor.DATA_KEY;
                        return c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusin" === b.type ? u.FOCUS : u.HOVER] = !0), a(c.getTipElement()).hasClass(r.IN) || c._hoverState === p.IN ? void(c._hoverState = p.IN) : (clearTimeout(c._timeout), c._hoverState = p.IN, c.config.delay && c.config.delay.show ? void(c._timeout = setTimeout(function() {
                            c._hoverState === p.IN && c.show()
                        }, c.config.delay.show)) : void c.show())
                    }, j.prototype._leave = function(b, c) {
                        var d = this.constructor.DATA_KEY;
                        if (c = c || a(b.currentTarget).data(d), c || (c = new this.constructor(b.currentTarget, this._getDelegateConfig()), a(b.currentTarget).data(d, c)), b && (c._activeTrigger["focusout" === b.type ? u.FOCUS : u.HOVER] = !1), !c._isWithActiveTrigger()) return clearTimeout(c._timeout), c._hoverState = p.OUT, c.config.delay && c.config.delay.hide ? void(c._timeout = setTimeout(function() {
                            c._hoverState === p.OUT && c.hide()
                        }, c.config.delay.hide)) : void c.hide()
                    }, j.prototype._isWithActiveTrigger = function() {
                        for (var a in this._activeTrigger)
                            if (this._activeTrigger[a]) return !0;
                        return !1
                    }, j.prototype._getConfig = function(c) {
                        return c = a.extend({}, this.constructor.Default, a(this.element).data(), c), c.delay && "number" == typeof c.delay && (c.delay = {
                            show: c.delay,
                            hide: c.delay
                        }), f.typeCheckConfig(b, c, this.constructor.DefaultType), c
                    }, j.prototype._getDelegateConfig = function() {
                        var a = {};
                        if (this.config)
                            for (var b in this.config) this.constructor.Default[b] !== this.config[b] && (a[b] = this.config[b]);
                        return a
                    }, j._jQueryInterface = function(b) {
                        return this.each(function() {
                            var c = a(this).data(h),
                                e = "object" === ("undefined" == typeof b ? "undefined" : d(b)) ? b : null;
                            if ((c || !/dispose|hide/.test(b)) && (c || (c = new j(this, e), a(this).data(h, c)), "string" == typeof b)) {
                                if (void 0 === c[b]) throw new Error('No method named "' + b + '"');
                                c[b]()
                            }
                        })
                    }, e(j, null, [{
                        key: "VERSION",
                        get: function() {
                            return g
                        }
                    }, {
                        key: "Default",
                        get: function() {
                            return m
                        }
                    }, {
                        key: "NAME",
                        get: function() {
                            return b
                        }
                    }, {
                        key: "DATA_KEY",
                        get: function() {
                            return h
                        }
                    }, {
                        key: "Event",
                        get: function() {
                            return q
                        }
                    }, {
                        key: "EVENT_KEY",
                        get: function() {
                            return i
                        }
                    }, {
                        key: "DefaultType",
                        get: function() {
                            return n
                        }
                    }]), j
                }();
            return a.fn[b] = v._jQueryInterface, a.fn[b].Constructor = v, a.fn[b].noConflict = function() {
                return a.fn[b] = j, v._jQueryInterface
            }, v
        }(jQuery));
    (function(f) {
        var h = "popover",
            i = "4.0.0-alpha.5",
            j = "bs.popover",
            k = "." + j,
            l = f.fn[h],
            m = f.extend({}, g.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }),
            n = f.extend({}, g.DefaultType, {
                content: "(string|element|function)"
            }),
            o = {
                FADE: "fade",
                IN: "in"
            },
            p = {
                TITLE: ".popover-title",
                CONTENT: ".popover-content"
            },
            q = {
                HIDE: "hide" + k,
                HIDDEN: "hidden" + k,
                SHOW: "show" + k,
                SHOWN: "shown" + k,
                INSERTED: "inserted" + k,
                CLICK: "click" + k,
                FOCUSIN: "focusin" + k,
                FOCUSOUT: "focusout" + k,
                MOUSEENTER: "mouseenter" + k,
                MOUSELEAVE: "mouseleave" + k
            },
            r = function(g) {
                function l() {
                    return c(this, l), a(this, g.apply(this, arguments))
                }
                return b(l, g), l.prototype.isWithContent = function() {
                    return this.getTitle() || this._getContent()
                }, l.prototype.getTipElement = function() {
                    return this.tip = this.tip || f(this.config.template)[0]
                }, l.prototype.setContent = function() {
                    var a = f(this.getTipElement());
                    this.setElementContent(a.find(p.TITLE), this.getTitle()), this.setElementContent(a.find(p.CONTENT), this._getContent()), a.removeClass(o.FADE).removeClass(o.IN), this.cleanupTether()
                }, l.prototype._getContent = function() {
                    return this.element.getAttribute("data-content") || ("function" == typeof this.config.content ? this.config.content.call(this.element) : this.config.content)
                }, l._jQueryInterface = function(a) {
                    return this.each(function() {
                        var b = f(this).data(j),
                            c = "object" === ("undefined" == typeof a ? "undefined" : d(a)) ? a : null;
                        if ((b || !/destroy|hide/.test(a)) && (b || (b = new l(this, c), f(this).data(j, b)), "string" == typeof a)) {
                            if (void 0 === b[a]) throw new Error('No method named "' + a + '"');
                            b[a]()
                        }
                    })
                }, e(l, null, [{
                    key: "VERSION",
                    get: function() {
                        return i
                    }
                }, {
                    key: "Default",
                    get: function() {
                        return m
                    }
                }, {
                    key: "NAME",
                    get: function() {
                        return h
                    }
                }, {
                    key: "DATA_KEY",
                    get: function() {
                        return j
                    }
                }, {
                    key: "Event",
                    get: function() {
                        return q
                    }
                }, {
                    key: "EVENT_KEY",
                    get: function() {
                        return k
                    }
                }, {
                    key: "DefaultType",
                    get: function() {
                        return n
                    }
                }]), l
            }(g);
        return f.fn[h] = r._jQueryInterface, f.fn[h].Constructor = r, f.fn[h].noConflict = function() {
            return f.fn[h] = l, r._jQueryInterface
        }, r
    })(jQuery)
}();
/**
 * lc_switch.js
 * Version: 1.0
 * Author: LCweb - Luca Montanari
 * Website: http://www.lcweb.it
 * Licensed under the MIT license
 */

(function(a) {
    if ("undefined" != typeof a.fn.lc_switch) return !1;
    a.fn.lc_switch = function(d, f) {
        a.fn.lcs_destroy = function() {
            a(this).each(function() {
                a(this).parents(".lcs_wrap").children().not("input").remove();
                a(this).unwrap()
            });
            return !0
        };
        a.fn.lcs_on = function() {
            a(this).each(function() {
                var b = a(this).parents(".lcs_wrap"),
                    c = b.find("input");
                "function" == typeof a.fn.prop ? b.find("input").prop("checked", !0) : b.find("input").attr("checked", !0);
                b.find("input").trigger("lcs-on");
                b.find("input").trigger("lcs-statuschange");
                b.find(".lcs_switch").removeClass("lcs_off").addClass("lcs_on");
                if (b.find(".lcs_switch").hasClass("lcs_radio_switch")) {
                    var d = c.attr("name");
                    b.parents("form").find("input[name=" + d + "]").not(c).lcs_off()
                }
            });
            return !0
        };
        a.fn.lcs_off = function() {
            a(this).each(function() {
                var b = a(this).parents(".lcs_wrap");
                "function" == typeof a.fn.prop ? b.find("input").prop("checked", !1) : b.find("input").attr("checked", !1);
                b.find("input").trigger("lcs-off");
                b.find("input").trigger("lcs-statuschange");
                b.find(".lcs_switch").removeClass("lcs_on").addClass("lcs_off")
            });
            return !0
        };
        return this.each(function() {
            if (!a(this).parent().hasClass("lcs_wrap")) {
                var b = "undefined" == typeof d ? "ON" : d,
                    c = "undefined" == typeof f ? "OFF" : f,
                    b = b ? '<div class="lcs_label lcs_label_on">' + b + "</div>" : "",
                    c = c ? '<div class="lcs_label lcs_label_off">' + c + "</div>" : "",
                    g = a(this).is(":disabled") ? !0 : !1,
                    e = a(this).is(":checked") ? !0 : !1,
                    e = "" + (e ? " lcs_on" : " lcs_off");
                g && (e += " lcs_disabled");
                b = '<div class="lcs_switch ' + e + '"><div class="lcs_cursor"></div>' + b + c + "</div>";
                !a(this).is(":input") || "checkbox" != a(this).attr("type") &&
                    "radio" != a(this).attr("type") || (a(this).wrap('<div class="lcs_wrap"></div>'), a(this).parent().append(b), a(this).parent().find(".lcs_switch").addClass("lcs_" + a(this).attr("type") + "_switch"))
            }
        })
    };
    a(document).ready(function() {
        a(document).delegate(".lcs_switch:not(.lcs_disabled)", "click tap", function(d) {
            a(this).hasClass("lcs_on") ? a(this).hasClass("lcs_radio_switch") || a(this).lcs_off() : a(this).lcs_on()
        });
        a(document).delegate(".lcs_wrap input", "change", function() {
            a(this).is(":checked") ? a(this).lcs_on() :
                a(this).lcs_off()
        })
    })
})(jQuery);

/*!
 * jQuery Mousewheel 3.1.12
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS style for Browserify
        module.exports = factory;
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {

    var toFix = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
        toBind = ('onwheel' in document || document.documentMode >= 9) ? ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
        slice = Array.prototype.slice,
        nullLowestDeltaTimeout, lowestDelta;

    if ($.event.fixHooks) {
        for (var i = toFix.length; i;) {
            $.event.fixHooks[toFix[--i]] = $.event.mouseHooks;
        }
    }

    var special = $.event.special.mousewheel = {
        version: '3.1.12',

        setup: function() {
            if (this.addEventListener) {
                for (var i = toBind.length; i;) {
                    this.addEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = handler;
            }
            // Store the line height and page height for this particular element
            $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
            $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
        },

        teardown: function() {
            if (this.removeEventListener) {
                for (var i = toBind.length; i;) {
                    this.removeEventListener(toBind[--i], handler, false);
                }
            } else {
                this.onmousewheel = null;
            }
            // Clean up the data we added to the element
            $.removeData(this, 'mousewheel-line-height');
            $.removeData(this, 'mousewheel-page-height');
        },

        getLineHeight: function(elem) {
            var $elem = $(elem),
                $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
            if (!$parent.length) {
                $parent = $('body');
            }
            return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
        },

        getPageHeight: function(elem) {
            return $(elem).height();
        },

        settings: {
            adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
            normalizeOffset: true // calls getBoundingClientRect for each event
        }
    };

    $.fn.extend({
        mousewheel: function(fn) {
            return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
        },

        unmousewheel: function(fn) {
            return this.unbind('mousewheel', fn);
        }
    });


    function handler(event) {
        var orgEvent = event || window.event,
            args = slice.call(arguments, 1),
            delta = 0,
            deltaX = 0,
            deltaY = 0,
            absDelta = 0,
            offsetX = 0,
            offsetY = 0;
        event = $.event.fix(orgEvent);
        event.type = 'mousewheel';

        // Old school scrollwheel delta
        if ('detail' in orgEvent) {
            deltaY = orgEvent.detail * -1;
        }
        if ('wheelDelta' in orgEvent) {
            deltaY = orgEvent.wheelDelta;
        }
        if ('wheelDeltaY' in orgEvent) {
            deltaY = orgEvent.wheelDeltaY;
        }
        if ('wheelDeltaX' in orgEvent) {
            deltaX = orgEvent.wheelDeltaX * -1;
        }

        // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
        if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
            deltaX = deltaY * -1;
            deltaY = 0;
        }

        // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
        delta = deltaY === 0 ? deltaX : deltaY;

        // New school wheel delta (wheel event)
        if ('deltaY' in orgEvent) {
            deltaY = orgEvent.deltaY * -1;
            delta = deltaY;
        }
        if ('deltaX' in orgEvent) {
            deltaX = orgEvent.deltaX;
            if (deltaY === 0) {
                delta = deltaX * -1;
            }
        }

        // No change actually happened, no reason to go any further
        if (deltaY === 0 && deltaX === 0) {
            return;
        }

        // Need to convert lines and pages to pixels if we aren't already in pixels
        // There are three delta modes:
        //   * deltaMode 0 is by pixels, nothing to do
        //   * deltaMode 1 is by lines
        //   * deltaMode 2 is by pages
        if (orgEvent.deltaMode === 1) {
            var lineHeight = $.data(this, 'mousewheel-line-height');
            delta *= lineHeight;
            deltaY *= lineHeight;
            deltaX *= lineHeight;
        } else if (orgEvent.deltaMode === 2) {
            var pageHeight = $.data(this, 'mousewheel-page-height');
            delta *= pageHeight;
            deltaY *= pageHeight;
            deltaX *= pageHeight;
        }

        // Store lowest absolute delta to normalize the delta values
        absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));

        if (!lowestDelta || absDelta < lowestDelta) {
            lowestDelta = absDelta;

            // Adjust older deltas if necessary
            if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
                lowestDelta /= 40;
            }
        }

        // Adjust older deltas if necessary
        if (shouldAdjustOldDeltas(orgEvent, absDelta)) {
            // Divide all the things by 40!
            delta /= 40;
            deltaX /= 40;
            deltaY /= 40;
        }

        // Get a whole, normalized value for the deltas
        delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / lowestDelta);
        deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / lowestDelta);
        deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / lowestDelta);

        // Normalise offsetX and offsetY properties
        if (special.settings.normalizeOffset && this.getBoundingClientRect) {
            var boundingRect = this.getBoundingClientRect();
            offsetX = event.clientX - boundingRect.left;
            offsetY = event.clientY - boundingRect.top;
        }

        // Add information to the event object
        event.deltaX = deltaX;
        event.deltaY = deltaY;
        event.deltaFactor = lowestDelta;
        event.offsetX = offsetX;
        event.offsetY = offsetY;
        // Go ahead and set deltaMode to 0 since we converted to pixels
        // Although this is a little odd since we overwrite the deltaX/Y
        // properties with normalized deltas.
        event.deltaMode = 0;

        // Add event and delta to the front of the arguments
        args.unshift(event, delta, deltaX, deltaY);

        // Clearout lowestDelta after sometime to better
        // handle multiple device types that give different
        // a different lowestDelta
        // Ex: trackpad = 3 and mouse wheel = 120
        if (nullLowestDeltaTimeout) {
            clearTimeout(nullLowestDeltaTimeout);
        }
        nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

        return ($.event.dispatch || $.event.handle).apply(this, args);
    }

    function nullLowestDelta() {
        lowestDelta = null;
    }

    function shouldAdjustOldDeltas(orgEvent, absDelta) {
        // If this is an older event and the delta is divisable by 120,
        // then we are assuming that the browser is treating this as an
        // older mouse wheel event and that we should divide the deltas
        // by 40 to try and get a more usable deltaFactor.
        // Side note, this actually impacts the reported scroll distance
        // in older browsers and can cause scrolling to be slower than native.
        // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
        return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
    }

}));

/**
 * @author trixta
 * @version 1.2
 */
(function($) {

    var mwheelI = {
            pos: [-260, -260]
        },
        minDif = 3,
        doc = document,
        root = doc.documentElement,
        body = doc.body,
        longDelay, shortDelay;

    function unsetPos() {
        if (this === mwheelI.elem) {
            mwheelI.pos = [-260, -260];
            mwheelI.elem = false;
            minDif = 3;
        }
    }

    $.event.special.mwheelIntent = {
        setup: function() {
            var jElm = $(this).bind('mousewheel', $.event.special.mwheelIntent.handler);
            if (this !== doc && this !== root && this !== body) {
                jElm.bind('mouseleave', unsetPos);
            }
            jElm = null;
            return true;
        },
        teardown: function() {
            $(this)
                .unbind('mousewheel', $.event.special.mwheelIntent.handler)
                .unbind('mouseleave', unsetPos);
            return true;
        },
        handler: function(e, d) {
            var pos = [e.clientX, e.clientY];
            if (this === mwheelI.elem || Math.abs(mwheelI.pos[0] - pos[0]) > minDif || Math.abs(mwheelI.pos[1] - pos[1]) > minDif) {
                mwheelI.elem = this;
                mwheelI.pos = pos;
                minDif = 250;

                clearTimeout(shortDelay);
                shortDelay = setTimeout(function() {
                    minDif = 10;
                }, 200);
                clearTimeout(longDelay);
                longDelay = setTimeout(function() {
                    minDif = 3;
                }, 1500);
                e = $.extend({}, e, {
                    type: 'mwheelIntent'
                });
                return ($.event.dispatch || $.event.handle).apply(this, arguments);
            }
        }
    };
    $.fn.extend({
        mwheelIntent: function(fn) {
            return fn ? this.bind("mwheelIntent", fn) : this.trigger("mwheelIntent");
        },

        unmwheelIntent: function(fn) {
            return this.unbind("mwheelIntent", fn);
        }
    });

    $(function() {
        body = doc.body;
        //assume that document is always scrollable, doesn't hurt if not
        $(doc).bind('mwheelIntent.mwheelIntentDefault', $.noop);
    });
})(jQuery);

/*!
 * jScrollPane - v2.0.23 - 2016-01-28
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2014 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
!
function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function(a) {
    a.fn.jScrollPane = function(b) {
        function c(b, c) {
            function d(c) {
                var f, h, j, k, l, o, p = !1,
                    q = !1;
                if (N = c, void 0 === O) l = b.scrollTop(), o = b.scrollLeft(), b.css({
                    overflow: "hidden",
                    padding: 0
                }), P = b.innerWidth() + rb, Q = b.innerHeight(), b.width(P), O = a('<div class="jspPane" />').css("padding", qb).append(b.children()), R = a('<div class="" />').css({
                    width: P + "px",
                    height: Q + "px"
                }).append(O).appendTo(b);
                else {
                    if (b.css("width", ""), p = N.stickToBottom && A(), q = N.stickToRight && B(), k = b.innerWidth() + rb != P || b.outerHeight() != Q, k && (P = b.innerWidth() + rb, Q = b.innerHeight(), R.css({
                            width: P + "px",
                            height: Q + "px"
                        })), !k && sb == S && O.outerHeight() == T) return void b.width(P);
                    sb = S, O.css("width", ""), b.width(P), R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
                }
                O.css("overflow", "visible"), S = c.contentWidth ? c.contentWidth : O[0].scrollWidth, T = O[0].scrollHeight, O.css("overflow", ""), U = S / P, V = T / Q, W = V > 1, X = U > 1, X || W ? (b.addClass("jspScrollable"), f = N.maintainPosition && ($ || bb), f && (h = y(), j = z()), e(), g(), i(), f && (w(q ? S - P : h, !1), v(p ? T - Q : j, !1)), F(), C(), L(), N.enableKeyboardNavigation && H(), N.clickOnTrack && m(), J(), N.hijackInternalLinks && K()) : (b.removeClass("jspScrollable"), O.css({
                    top: 0,
                    left: 0,
                    width: R.width() - rb
                }), D(), G(), I(), n()), N.autoReinitialise && !pb ? pb = setInterval(function() {
                    d(N)
                }, N.autoReinitialiseDelay) : !N.autoReinitialise && pb && clearInterval(pb), l && b.scrollTop(0) && v(l, !1), o && b.scrollLeft(0) && w(o, !1), b.trigger("jsp-initialised", [X || W])
            }

            function e() {
                W && (R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'), a('<div class="jspDragBottom" />'))), a('<div class="jspCap jspCapBottom" />'))), cb = R.find(">.jspVerticalBar"), db = cb.find(">.jspTrack"), Y = db.find(">.jspDrag"), N.showArrows && (hb = a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", k(0, -1)).bind("click.jsp", E), ib = a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", k(0, 1)).bind("click.jsp", E), N.arrowScrollOnHover && (hb.bind("mouseover.jsp", k(0, -1, hb)), ib.bind("mouseover.jsp", k(0, 1, ib))), j(db, N.verticalArrowPositions, hb, ib)), fb = Q, R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
                    fb -= a(this).outerHeight()
                }), Y.hover(function() {
                    Y.addClass("jspHover")
                }, function() {
                    Y.removeClass("jspHover")
                }).bind("mousedown.jsp", function(b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", E), Y.addClass("jspActive");
                    var c = b.pageY - Y.position().top;
                    return a("html").bind("mousemove.jsp", function(a) {
                        p(a.pageY - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", o), !1
                }), f())
            }

            function f() {
                db.height(fb + "px"), $ = 0, eb = N.verticalGutter + db.outerWidth(), O.width(P - eb - rb);
                try {
                    0 === cb.position().left && O.css("margin-left", eb + "px")
                } catch (a) {}
            }

            function g() {
                X && (R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'), a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'), a('<div class="jspDragRight" />'))), a('<div class="jspCap jspCapRight" />'))), jb = R.find(">.jspHorizontalBar"), kb = jb.find(">.jspTrack"), _ = kb.find(">.jspDrag"), N.showArrows && (nb = a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", k(-1, 0)).bind("click.jsp", E), ob = a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", k(1, 0)).bind("click.jsp", E), N.arrowScrollOnHover && (nb.bind("mouseover.jsp", k(-1, 0, nb)), ob.bind("mouseover.jsp", k(1, 0, ob))), j(kb, N.horizontalArrowPositions, nb, ob)), _.hover(function() {
                    _.addClass("jspHover")
                }, function() {
                    _.removeClass("jspHover")
                }).bind("mousedown.jsp", function(b) {
                    a("html").bind("dragstart.jsp selectstart.jsp", E), _.addClass("jspActive");
                    var c = b.pageX - _.position().left;
                    return a("html").bind("mousemove.jsp", function(a) {
                        r(a.pageX - c, !1)
                    }).bind("mouseup.jsp mouseleave.jsp", o), !1
                }), lb = R.innerWidth(), h())
            }

            function h() {
                R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
                    lb -= a(this).outerWidth()
                }), kb.width(lb + "px"), bb = 0
            }

            function i() {
                if (X && W) {
                    var b = kb.outerHeight(),
                        c = db.outerWidth();
                    fb -= b, a(jb).find(">.jspCap:visible,>.jspArrow").each(function() {
                        lb += a(this).outerWidth()
                    }), lb -= c, Q -= c, P -= b, kb.parent().append(a('<div class="jspCorner" />').css("width", b + "px")), f(), h()
                }
                X && O.width(R.outerWidth() - rb + "px"), T = O.outerHeight(), V = T / Q, X && (mb = Math.ceil(1 / U * lb), mb > N.horizontalDragMaxWidth ? mb = N.horizontalDragMaxWidth : mb < N.horizontalDragMinWidth && (mb = N.horizontalDragMinWidth), _.width(mb + "px"), ab = lb - mb, s(bb)), W && (gb = Math.ceil(1 / V * fb), gb > N.verticalDragMaxHeight ? gb = N.verticalDragMaxHeight : gb < N.verticalDragMinHeight && (gb = N.verticalDragMinHeight), Y.height(gb + "px"), Z = fb - gb, q($))
            }

            function j(a, b, c, d) {
                var e, f = "before",
                    g = "after";
                "os" == b && (b = /Mac/.test(navigator.platform) ? "after" : "split"), b == f ? g = b : b == g && (f = b, e = c, c = d, d = e), a[f](c)[g](d)
            }

            function k(a, b, c) {
                return function() {
                    return l(a, b, this, c), this.blur(), !1
                }
            }

            function l(b, c, d, e) {
                d = a(d).addClass("jspActive");
                var f, g, h = !0,
                    i = function() {
                        0 !== b && tb.scrollByX(b * N.arrowButtonSpeed), 0 !== c && tb.scrollByY(c * N.arrowButtonSpeed), g = setTimeout(i, h ? N.initialDelay : N.arrowRepeatFreq), h = !1
                    };
                i(), f = e ? "mouseout.jsp" : "mouseup.jsp", e = e || a("html"), e.bind(f, function() {
                    d.removeClass("jspActive"), g && clearTimeout(g), g = null, e.unbind(f)
                })
            }

            function m() {
                n(), W && db.bind("mousedown.jsp", function(b) {
                    if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                        var c, d = a(this),
                            e = d.offset(),
                            f = b.pageY - e.top - $,
                            g = !0,
                            h = function() {
                                var a = d.offset(),
                                    e = b.pageY - a.top - gb / 2,
                                    j = Q * N.scrollPagePercent,
                                    k = Z * j / (T - Q);
                                if (0 > f) $ - k > e ? tb.scrollByY(-j) : p(e);
                                else {
                                    if (!(f > 0)) return void i();
                                    e > $ + k ? tb.scrollByY(j) : p(e)
                                }
                                c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                            },
                            i = function() {
                                c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                            };
                        return h(), a(document).bind("mouseup.jsp", i), !1
                    }
                }), X && kb.bind("mousedown.jsp", function(b) {
                    if (void 0 === b.originalTarget || b.originalTarget == b.currentTarget) {
                        var c, d = a(this),
                            e = d.offset(),
                            f = b.pageX - e.left - bb,
                            g = !0,
                            h = function() {
                                var a = d.offset(),
                                    e = b.pageX - a.left - mb / 2,
                                    j = P * N.scrollPagePercent,
                                    k = ab * j / (S - P);
                                if (0 > f) bb - k > e ? tb.scrollByX(-j) : r(e);
                                else {
                                    if (!(f > 0)) return void i();
                                    e > bb + k ? tb.scrollByX(j) : r(e)
                                }
                                c = setTimeout(h, g ? N.initialDelay : N.trackClickRepeatFreq), g = !1
                            },
                            i = function() {
                                c && clearTimeout(c), c = null, a(document).unbind("mouseup.jsp", i)
                            };
                        return h(), a(document).bind("mouseup.jsp", i), !1
                    }
                })
            }

            function n() {
                kb && kb.unbind("mousedown.jsp"), db && db.unbind("mousedown.jsp")
            }

            function o() {
                a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), Y && Y.removeClass("jspActive"), _ && _.removeClass("jspActive")
            }

            function p(c, d) {
                if (W) {
                    0 > c ? c = 0 : c > Z && (c = Z);
                    var e = new a.Event("jsp-will-scroll-y");
                    if (b.trigger(e, [c]), !e.isDefaultPrevented()) {
                        var f = c || 0,
                            g = 0 === f,
                            h = f == Z,
                            i = c / Z,
                            j = -i * (T - Q);
                        void 0 === d && (d = N.animateScroll), d ? tb.animate(Y, "top", c, q, function() {
                            b.trigger("jsp-user-scroll-y", [-j, g, h])
                        }) : (Y.css("top", c), q(c), b.trigger("jsp-user-scroll-y", [-j, g, h]))
                    }
                }
            }

            function q(a) {
                void 0 === a && (a = Y.position().top), R.scrollTop(0), $ = a || 0;
                var c = 0 === $,
                    d = $ == Z,
                    e = a / Z,
                    f = -e * (T - Q);
                (ub != c || wb != d) && (ub = c, wb = d, b.trigger("jsp-arrow-change", [ub, wb, vb, xb])), t(c, d), O.css("top", f), b.trigger("jsp-scroll-y", [-f, c, d]).trigger("scroll")
            }

            function r(c, d) {
                if (X) {
                    0 > c ? c = 0 : c > ab && (c = ab);
                    var e = new a.Event("jsp-will-scroll-x");
                    if (b.trigger(e, [c]), !e.isDefaultPrevented()) {
                        var f = c || 0,
                            g = 0 === f,
                            h = f == ab,
                            i = c / ab,
                            j = -i * (S - P);
                        void 0 === d && (d = N.animateScroll), d ? tb.animate(_, "left", c, s, function() {
                            b.trigger("jsp-user-scroll-x", [-j, g, h])
                        }) : (_.css("left", c), s(c), b.trigger("jsp-user-scroll-x", [-j, g, h]))
                    }
                }
            }

            function s(a) {
                void 0 === a && (a = _.position().left), R.scrollTop(0), bb = a || 0;
                var c = 0 === bb,
                    d = bb == ab,
                    e = a / ab,
                    f = -e * (S - P);
                (vb != c || xb != d) && (vb = c, xb = d, b.trigger("jsp-arrow-change", [ub, wb, vb, xb])), u(c, d), O.css("left", f), b.trigger("jsp-scroll-x", [-f, c, d]).trigger("scroll")
            }

            function t(a, b) {
                N.showArrows && (hb[a ? "addClass" : "removeClass"]("jspDisabled"), ib[b ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function u(a, b) {
                N.showArrows && (nb[a ? "addClass" : "removeClass"]("jspDisabled"), ob[b ? "addClass" : "removeClass"]("jspDisabled"))
            }

            function v(a, b) {
                var c = a / (T - Q);
                p(c * Z, b)
            }

            function w(a, b) {
                var c = a / (S - P);
                r(c * ab, b)
            }

            function x(b, c, d) {
                var e, f, g, h, i, j, k, l, m, n = 0,
                    o = 0;
                try {
                    e = a(b)
                } catch (p) {
                    return
                }
                for (f = e.outerHeight(), g = e.outerWidth(), R.scrollTop(0), R.scrollLeft(0); !e.is(".jspPane");)
                    if (n += e.position().top, o += e.position().left, e = e.offsetParent(), /^body|html$/i.test(e[0].nodeName)) return;
                h = z(), j = h + Q, h > n || c ? l = n - N.horizontalGutter : n + f > j && (l = n - Q + f + N.horizontalGutter), isNaN(l) || v(l, d), i = y(), k = i + P, i > o || c ? m = o - N.horizontalGutter : o + g > k && (m = o - P + g + N.horizontalGutter), isNaN(m) || w(m, d)
            }

            function y() {
                return -O.position().left
            }

            function z() {
                return -O.position().top
            }

            function A() {
                var a = T - Q;
                return a > 20 && a - z() < 10
            }

            function B() {
                var a = S - P;
                return a > 20 && a - y() < 10
            }

            function C() {
                R.unbind(zb).bind(zb, function(a, b, c, d) {
                    bb || (bb = 0), $ || ($ = 0);
                    var e = bb,
                        f = $,
                        g = a.deltaFactor || N.mouseWheelSpeed;
                    return tb.scrollBy(c * g, -d * g, !1), e == bb && f == $
                })
            }

            function D() {
                R.unbind(zb)
            }

            function E() {
                return !1
            }

            function F() {
                O.find(":input,a").unbind("focus.jsp").bind("", function(a) {
                    x(a.target, !1)
                })
            }

            function G() {
                O.find(":input,a").unbind("focus.jsp")
            }

            function H() {
                function c() {
                    var a = bb,
                        b = $;
                    switch (d) {
                        case 40:
                            tb.scrollByY(N.keyboardSpeed, !1);
                            break;
                        case 38:
                            tb.scrollByY(-N.keyboardSpeed, !1);
                            break;
                        case 34:
                        case 32:
                            tb.scrollByY(Q * N.scrollPagePercent, !1);
                            break;
                        case 33:
                            tb.scrollByY(-Q * N.scrollPagePercent, !1);
                            break;
                        case 39:
                            tb.scrollByX(N.keyboardSpeed, !1);
                            break;
                        case 37:
                            tb.scrollByX(-N.keyboardSpeed, !1)
                    }
                    return e = a != bb || b != $
                }
                var d, e, f = [];
                X && f.push(jb[0]), W && f.push(cb[0]), O.bind("focus.jsp", function() {
                    b.focus()
                }), b.attr("tabindex", 0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp", function(b) {
                    if (b.target === this || f.length && a(b.target).closest(f).length) {
                        var g = bb,
                            h = $;
                        switch (b.keyCode) {
                            case 40:
                            case 38:
                            case 34:
                            case 32:
                            case 33:
                            case 39:
                            case 37:
                                d = b.keyCode, c();
                                break;
                            case 35:
                                v(T - Q), d = null;
                                break;
                            case 36:
                                v(0), d = null
                        }
                        return e = b.keyCode == d && g != bb || h != $, !e
                    }
                }).bind("keypress.jsp", function(b) {
                    return b.keyCode == d && c(), b.target === this || f.length && a(b.target).closest(f).length ? !e : void 0
                }), N.hideFocus ? (b.css("outline", "none"), "hideFocus" in R[0] && b.attr("hideFocus", !0)) : (b.css("outline", ""), "hideFocus" in R[0] && b.attr("hideFocus", !1))
            }

            function I() {
                b.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"), O.unbind(".jsp")
            }

            function J() {
                if (location.hash && location.hash.length > 1) {
                    var b, c, d = escape(location.hash.substr(1));
                    try {
                        b = a("#" + d + ', a[name="' + d + '"]')
                    } catch (e) {
                        return
                    }
                    b.length && O.find(d) && (0 === R.scrollTop() ? c = setInterval(function() {
                        R.scrollTop() > 0 && (x(b, !0), a(document).scrollTop(R.position().top), clearInterval(c))
                    }, 50) : (x(b, !0), a(document).scrollTop(R.position().top)))
                }
            }

            function K() {
                a(document.body).data("jspHijack") || (a(document.body).data("jspHijack", !0), a(document.body).delegate('a[href*="#"]', "click", function(b) {
                    var c, d, e, f, g, h, i = this.href.substr(0, this.href.indexOf("#")),
                        j = location.href;
                    if (-1 !== location.href.indexOf("#") && (j = location.href.substr(0, location.href.indexOf("#"))), i === j) {
                        c = escape(this.href.substr(this.href.indexOf("#") + 1));
                        try {
                            d = a("#" + c + ', a[name="' + c + '"]')
                        } catch (k) {
                            return
                        }
                        d.length && (e = d.closest(".jspScrollable"), f = e.data("jsp"), f.scrollToElement(d, !0), e[0].scrollIntoView && (g = a(window).scrollTop(), h = d.offset().top, (g > h || h > g + a(window).height()) && e[0].scrollIntoView()), b.preventDefault())
                    }
                }))
            }

            function L() {
                var a, b, c, d, e, f = !1;
                R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp", function(g) {
                    var h = g.originalEvent.touches[0];
                    a = y(), b = z(), c = h.pageX, d = h.pageY, e = !1, f = !0
                }).bind("touchmove.jsp", function(g) {
                    if (f) {
                        var h = g.originalEvent.touches[0],
                            i = bb,
                            j = $;
                        return tb.scrollTo(a + c - h.pageX, b + d - h.pageY), e = e || Math.abs(c - h.pageX) > 5 || Math.abs(d - h.pageY) > 5, i == bb && j == $
                    }
                }).bind("touchend.jsp", function() {
                    f = !1
                }).bind("click.jsp-touchclick", function() {
                    return e ? (e = !1, !1) : void 0
                })
            }

            function M() {
                var a = z(),
                    c = y();
                b.removeClass("jspScrollable").unbind(".jsp"), O.unbind(".jsp"), b.replaceWith(yb.append(O.children())), yb.scrollTop(a), yb.scrollLeft(c), pb && clearInterval(pb)
            }
            var N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, ab, bb, cb, db, eb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, qb, rb, sb, tb = this,
                ub = !0,
                vb = !0,
                wb = !1,
                xb = !1,
                yb = b.clone(!1, !1).empty(),
                zb = a.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
            "border-box" === b.css("box-sizing") ? (qb = 0, rb = 0) : (qb = b.css("paddingTop") + " " + b.css("paddingRight") + " " + b.css("paddingBottom") + " " + b.css("paddingLeft"), rb = (parseInt(b.css("paddingLeft"), 10) || 0) + (parseInt(b.css("paddingRight"), 10) || 0)), a.extend(tb, {
                reinitialise: function(b) {
                    b = a.extend({}, N, b), d(b)
                },
                scrollToElement: function(a, b, c) {
                    x(a, b, c)
                },
                scrollTo: function(a, b, c) {
                    w(a, c), v(b, c)
                },
                scrollToX: function(a, b) {
                    w(a, b)
                },
                scrollToY: function(a, b) {
                    v(a, b)
                },
                scrollToPercentX: function(a, b) {
                    w(a * (S - P), b)
                },
                scrollToPercentY: function(a, b) {
                    v(a * (T - Q), b)
                },
                scrollBy: function(a, b, c) {
                    tb.scrollByX(a, c), tb.scrollByY(b, c)
                },
                scrollByX: function(a, b) {
                    var c = y() + Math[0 > a ? "floor" : "ceil"](a),
                        d = c / (S - P);
                    r(d * ab, b)
                },
                scrollByY: function(a, b) {
                    var c = z() + Math[0 > a ? "floor" : "ceil"](a),
                        d = c / (T - Q);
                    p(d * Z, b)
                },
                positionDragX: function(a, b) {
                    r(a, b)
                },
                positionDragY: function(a, b) {
                    p(a, b)
                },
                animate: function(a, b, c, d, e) {
                    var f = {};
                    f[b] = c, a.animate(f, {
                        duration: N.animateDuration,
                        easing: N.animateEase,
                        queue: !1,
                        step: d,
                        complete: e
                    })
                },
                getContentPositionX: function() {
                    return y()
                },
                getContentPositionY: function() {
                    return z()
                },
                getContentWidth: function() {
                    return S
                },
                getContentHeight: function() {
                    return T
                },
                getPercentScrolledX: function() {
                    return y() / (S - P)
                },
                getPercentScrolledY: function() {
                    return z() / (T - Q)
                },
                getIsScrollableH: function() {
                    return X
                },
                getIsScrollableV: function() {
                    return W
                },
                getContentPane: function() {
                    return O
                },
                scrollToBottom: function(a) {
                    p(Z, a)
                },
                hijackInternalLinks: a.noop,
                destroy: function() {
                    M()
                }
            }), d(c)
        }
        return b = a.extend({}, a.fn.jScrollPane.defaults, b), a.each(["arrowButtonSpeed", "trackClickSpeed", "keyboardSpeed"], function() {
            b[this] = b[this] || b.speed
        }), this.each(function() {
            var d = a(this),
                e = d.data("jsp");
            e ? e.reinitialise(b) : (a("script", d).filter('[type="text/javascript"],:not([type])').remove(), e = new c(d, b), d.data("jsp", e))
        })
    }, a.fn.jScrollPane.defaults = {
        showArrows: !1,
        maintainPosition: !0,
        stickToBottom: !1,
        stickToRight: !1,
        clickOnTrack: !0,
        autoReinitialise: !1,
        autoReinitialiseDelay: 500,
        verticalDragMinHeight: 0,
        verticalDragMaxHeight: 99999,
        horizontalDragMinWidth: 0,
        horizontalDragMaxWidth: 99999,
        contentWidth: void 0,
        animateScroll: !1,
        animateDuration: 300,
        animateEase: "linear",
        hijackInternalLinks: !1,
        verticalGutter: 4,
        horizontalGutter: 4,
        mouseWheelSpeed: 3,
        arrowButtonSpeed: 0,
        arrowRepeatFreq: 50,
        arrowScrollOnHover: !1,
        trackClickSpeed: 0,
        trackClickRepeatFreq: 70,
        verticalArrowPositions: "split",
        horizontalArrowPositions: "split",
        enableKeyboardNavigation: !0,
        hideFocus: !1,
        keyboardSpeed: 0,
        initialDelay: 300,
        speed: 30,
        scrollPagePercent: .8
    }
});