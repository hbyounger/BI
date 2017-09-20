! function () {
    function formatLngAndLat(t, e) {
        return e = void 0 === e ? 2 : e, new Number(t).toFixed(e) + "°"
    }
    var __inline = function (t) {
        $(document.body).append('<script src="/static/js/lib/mapv/' + t + ' "></script>')
    };
    void 0 == CanvasRenderingContext2D.prototype.ellipse && (CanvasRenderingContext2D.prototype.ellipse = function (t, e, i, n, a, o, r, s) {
        this.save(), this.translate(t, e), this.rotate(a), this.scale(i, n), this.arc(0, 0, 1, o, r, s), this.restore()
    }), "function" != typeof Path2D && function () {
        function t(t) {
            if (this.ops_ = [], void 0 != t)
                if ("string" == typeof t) try {
                    this.ops_ = parser.parse(t)
                } catch (t) {} else {
                    if (!t.hasOwnProperty("ops_")) throw "Error: " + typeof t + "is not a valid argument to Path";
                    this.ops_ = t.ops_.slice(0)
                }
        }
        parser = function () {
            function t(t, e, i, n, a, o) {
                this.message = t, this.expected = e, this.found = i, this.offset = n, this.line = a, this.column = o, this.name = "SyntaxError"
            }

            function e(e) {
                function i(t) {
                    return we !== t && (we > t && (we = 0, be = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    }), function (t, i, n) {
                        var a, o;
                        for (a = i; a < n; a++) o = e.charAt(a), "\n" === o ? (t.seenCR || t.line++, t.column = 1, t.seenCR = !1) : "\r" === o || "\u2028" === o || "\u2029" === o ? (t.line++, t.column = 1, t.seenCR = !0) : (t.column++, t.seenCR = !1)
                    }(be, we, t), we = t), be
                }

                function n(t) {
                    ye < xe || (ye > xe && (xe = ye, Ce = []), Ce.push(t))
                }

                function a(n, a, o) {
                    var r = i(o),
                        s = o < e.length ? e.charAt(o) : null;
                    return null !== a && function (t) {
                        var e = 1;
                        for (t.sort(function (t, e) {
                                return t.description < e.description ? -1 : t.description > e.description ? 1 : 0
                            }); e < t.length;) t[e - 1] === t[e] ? t.splice(e, 1) : e++
                    }(a), new t(null !== n ? n : function (t, e) {
                        var i, n, a, o = new Array(t.length);
                        for (a = 0; a < t.length; a++) o[a] = t[a].description;
                        return i = t.length > 1 ? o.slice(0, -1).join(", ") + " or " + o[t.length - 1] : o[0], n = e ? '"' + function (t) {
                            function e(t) {
                                return t.charCodeAt(0).toString(16).toUpperCase()
                            }
                            return t.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\x08/g, "\\b").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\f/g, "\\f").replace(/\r/g, "\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g, function (t) {
                                return "\\x0" + e(t)
                            }).replace(/[\x10-\x1F\x80-\xFF]/g, function (t) {
                                return "\\x" + e(t)
                            }).replace(/[\u0180-\u0FFF]/g, function (t) {
                                return "\\u0" + e(t)
                            }).replace(/[\u1080-\uFFFF]/g, function (t) {
                                return "\\u" + e(t)
                            })
                        }(e) + '"' : "end of input", "Expected " + i + " but " + n + " found."
                    }(a, s), a, s, o, r.line, r.column)
                }

                function o() {
                    var t, e, i, n, a;
                    for (t = ye, e = [], i = Z(); i !== ct;) e.push(i), i = Z();
                    if (e !== ct)
                        if (i = r(), i === ct && (i = ft), i !== ct) {
                            for (n = [], a = Z(); a !== ct;) n.push(a), a = Z();
                            n !== ct ? (_e = t, e = mt(i), t = e) : (ye = t, t = gt)
                        } else ye = t, t = gt;
                    else ye = t, t = gt;
                    return t
                }

                function r() {
                    var t, e, i, n, a;
                    if (t = ye, (e = s()) !== ct) {
                        for (i = ye, n = [], a = Z(); a !== ct;) n.push(a), a = Z();
                        n !== ct ? (a = r(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function s() {
                    var t, e, i, n, a;
                    if (t = ye, (e = p()) !== ct) {
                        for (i = ye, n = [], a = Z(); a !== ct;) n.push(a), a = Z();
                        n !== ct ? (a = l(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function l() {
                    var t, e, i, n, a;
                    if (t = ye, (e = h()) !== ct) {
                        for (i = ye, n = [], a = Z(); a !== ct;) n.push(a), a = Z();
                        n !== ct ? (a = l(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function h() {
                    var t;
                    return t = u(), t === ct && (t = d()) === ct && (t = f()) === ct && (t = v()) === ct && (t = y()) === ct && (t = b()) === ct && (t = M()) === ct && (t = L()) === ct && (t = P()), t
                }

                function p() {
                    var t, i, a, o;
                    if (t = ye, vt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(yt)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = c(), o !== ct ? (_e = t, i = _t(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function c() {
                    var t, e, i, n, a;
                    return t = ye, e = E(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = g(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function u() {
                    var t, i;
                    return t = ye, bt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(xt)), i !== ct && (_e = t, i = Ct()), t = i
                }

                function d() {
                    var t, i, a, o;
                    if (t = ye, Mt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(Tt)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = g(), o !== ct ? (_e = t, i = Dt(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function g() {
                    var t, e, i, n, a;
                    return t = ye, e = E(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = g(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function f() {
                    var t, i, a, o;
                    if (t = ye, Lt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(At)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = m(), o !== ct ? (_e = t, i = Pt(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function m() {
                    var t, e, i, n, a;
                    return t = ye, e = R(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = m(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function v() {
                    var t, i, a, o;
                    if (t = ye, St.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(kt)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = m(), o !== ct ? (_e = t, i = Et(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function y() {
                    var t, i, a, o;
                    if (t = ye, Rt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(Ot)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = _(), o !== ct ? (_e = t, i = Bt(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function _() {
                    var t, e, i, n, a;
                    return t = ye, e = w(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = _(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function w() {
                    var t, e, i, n, a, o;
                    return t = ye, e = E(), e !== ct ? (i = F(), i === ct && (i = ft), i !== ct ? (n = E(), n !== ct ? (a = F(), a === ct && (a = ft), a !== ct ? (o = E(), o !== ct ? (_e = t, e = It(e, n, o), t = e) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function b() {
                    var t, i, a, o;
                    if (t = ye, Ft.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(zt)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = x(), o !== ct ? (_e = t, i = Nt(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function x() {
                    var t, e, i, n, a;
                    return t = ye, e = C(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = x(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function C() {
                    var t, e, i, n;
                    return t = ye, e = E(), e !== ct ? (i = F(), i === ct && (i = ft), i !== ct ? (n = E(), n !== ct ? (_e = t, e = jt(e, n), t = e) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function M() {
                    var t, i, a, o;
                    if (t = ye, qt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(Wt)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = T(), o !== ct ? (_e = t, i = Gt(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function T() {
                    var t, e, i, n, a;
                    return t = ye, e = D(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = T(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function D() {
                    var t, e, i, n;
                    return t = ye, e = E(), e !== ct ? (i = F(), i === ct && (i = ft), i !== ct ? (n = E(), n !== ct ? (_e = t, e = jt(e, n), t = e) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function L() {
                    var t, i, a, o;
                    if (t = ye, Zt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(Ht)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = A(), o !== ct ? (_e = t, i = $t(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function A() {
                    var t, e, i, n, a;
                    return t = ye, e = E(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = A(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function P() {
                    var t, i, a, o;
                    if (t = ye, Yt.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(Ut)), i !== ct) {
                        for (a = [], o = Z(); o !== ct;) a.push(o), o = Z();
                        a !== ct ? (o = S(), o !== ct ? (_e = t, i = Vt(i, o), t = i) : (ye = t, t = gt)) : (ye = t, t = gt)
                    } else ye = t, t = gt;
                    return t
                }

                function S() {
                    var t, e, i, n, a;
                    return t = ye, e = k(), e !== ct ? (i = ye, n = F(), n === ct && (n = ft), n !== ct ? (a = S(), a !== ct ? (n = [n, a], i = n) : (ye = i, i = gt)) : (ye = i, i = gt), i === ct && (i = ft), i !== ct ? (_e = t, e = wt(e, i), t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function k() {
                    var t, e, i, n, a, o, r, s, l, h, p, c;
                    return t = ye, e = O(), e !== ct ? (i = F(), i === ct && (i = ft), i !== ct ? (n = O(), n !== ct ? (a = F(), a === ct && (a = ft), a !== ct ? (o = B(), o !== ct ? (r = F(), r !== ct ? (s = I(), s !== ct ? (l = F(), l === ct && (l = ft), l !== ct ? (h = I(), h !== ct ? (p = F(), p === ct && (p = ft), p !== ct ? (c = E(), c !== ct ? (_e = t, e = Xt(e, n, o, s, h, c), t = e) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function E() {
                    var t, e, i, n;
                    return t = ye, e = R(), e !== ct ? (i = F(), i === ct && (i = ft), i !== ct ? (n = R(), n !== ct ? (_e = t, e = Kt(e, n), t = e) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function R() {
                    var t, e;
                    return t = ye, e = B(), e !== ct && (_e = t, e = Qt(e)), t = e
                }

                function O() {
                    var t;
                    return t = N(), t === ct && (t = G()), t
                }

                function B() {
                    var t, e, i;
                    return t = ye, e = W(), e === ct && (e = ft), e !== ct ? (i = N(), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t === ct && (t = ye, e = W(), e === ct && (e = ft), e !== ct ? (i = G(), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)) : (ye = t, t = gt)), t
                }

                function I() {
                    var t;
                    return 48 === e.charCodeAt(ye) ? (t = Jt, ye++) : (t = ct, 0 === Me && n(te)), t === ct && (49 === e.charCodeAt(ye) ? (t = ee, ye++) : (t = ct, 0 === Me && n(ie))), t
                }

                function F() {
                    var t, e, i, n, a;
                    if (t = ye, e = [], (i = Z()) !== ct)
                        for (; i !== ct;) e.push(i), i = Z();
                    else e = gt;
                    if (e !== ct)
                        if (i = z(), i === ct && (i = ft), i !== ct) {
                            for (n = [], a = Z(); a !== ct;) n.push(a), a = Z();
                            n !== ct ? (e = [e, i, n], t = e) : (ye = t, t = gt)
                        } else ye = t, t = gt;
                    else ye = t, t = gt;
                    if (t === ct)
                        if (t = ye, (e = z()) !== ct) {
                            for (i = [], n = Z(); n !== ct;) i.push(n), n = Z();
                            i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)
                        } else ye = t, t = gt;
                    return t
                }

                function z() {
                    var t;
                    return 44 === e.charCodeAt(ye) ? (t = ne, ye++) : (t = ct, 0 === Me && n(ae)), t
                }

                function N() {
                    var t, e, i;
                    return t = ye, e = j(), e !== ct ? (i = q(), i === ct && (i = ft), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)) : (ye = t, t = gt), t === ct && (t = ye, e = G(), e !== ct ? (i = q(), i !== ct ? (e = [e, i], t = e) : (ye = t, t = gt)) : (ye = t, t = gt)), t
                }

                function j() {
                    var t, i, a, o;
                    return t = ye, i = G(), i === ct && (i = ft), i !== ct ? (46 === e.charCodeAt(ye) ? (a = oe, ye++) : (a = ct, 0 === Me && n(re)), a !== ct ? (o = G(), o !== ct ? (i = [i, a, o], t = i) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t === ct && (t = ye, i = G(), i !== ct ? (46 === e.charCodeAt(ye) ? (a = oe, ye++) : (a = ct, 0 === Me && n(re)), a !== ct ? (i = [i, a], t = i) : (ye = t, t = gt)) : (ye = t, t = gt)), t
                }

                function q() {
                    var t, i, a, o;
                    return t = ye, se.test(e.charAt(ye)) ? (i = e.charAt(ye), ye++) : (i = ct, 0 === Me && n(le)), i !== ct ? (a = W(), a === ct && (a = ft), a !== ct ? (o = G(), o !== ct ? (i = [i, a, o], t = i) : (ye = t, t = gt)) : (ye = t, t = gt)) : (ye = t, t = gt), t
                }

                function W() {
                    var t;
                    return 43 === e.charCodeAt(ye) ? (t = he, ye++) : (t = ct, 0 === Me && n(pe)), t === ct && (45 === e.charCodeAt(ye) ? (t = ce, ye++) : (t = ct, 0 === Me && n(ue))), t
                }

                function G() {
                    var t, i, a;
                    if (t = ye, i = [], de.test(e.charAt(ye)) ? (a = e.charAt(ye), ye++) : (a = ct, 0 === Me && n(ge)), a !== ct)
                        for (; a !== ct;) i.push(a), de.test(e.charAt(ye)) ? (a = e.charAt(ye), ye++) : (a = ct, 0 === Me && n(ge));
                    else i = gt;
                    return i !== ct && (_e = t, i = fe(i)), t = i
                }

                function Z() {
                    var t;
                    return me.test(e.charAt(ye)) ? (t = e.charAt(ye), ye++) : (t = ct, 0 === Me && n(ve)), t
                }

                function H(t, e) {
                    return "mlazhvcsqt".indexOf(t) === -1 ? Te = e : (Te[0] += e[0], Te[1] += e[1]), Pe = t, Te.slice(0)
                }

                function $(t, e) {
                    for (var i = [], n = Te.slice(0), a = 0; a < e.length; a += 2) {
                        Te = n.slice(0);
                        var o = H(t, e.slice(a, a + 2));
                        i = i.concat(o), a == e.length - 4 && (De = o.slice(0))
                    }
                    return i
                }

                function Y() {
                    "CcSsQqTt".indexOf(Pe) == -1 && (De = Te.slice(0));
                    var t = [0, 0];
                    return t[0] = 2 * Te[0] - De[0], t[1] = 2 * Te[1] - De[1], t
                }

                function U(t, e) {
                    var i = [e, 0];
                    return "H" == t && (i[1] = Te[1]), H(t, i)
                }

                function V(t, e) {
                    var i = [0, e];
                    return "V" == t && (i[0] = Te[0]), H(t, i)
                }

                function X(t, e) {
                    var i = [t];
                    if (e && e.length > 1)
                        for (var n = e[1], a = 0; a < n.length; a++) i.push(n[a]);
                    return i
                }

                function K(t) {
                    return Math.sqrt(Math.pow(t[0], 2) + Math.pow(t[1], 2))
                }

                function Q(t, e) {
                    return t[0] * e[0] + t[1] * e[1]
                }

                function J(t, e) {
                    return Q(t, e) / (K(t) * K(e))
                }

                function tt(t, e) {
                    var i = 1;
                    return t[0] * e[1] - t[1] * e[0] < 0 && (i = -1), i * Math.acos(J(t, e))
                }

                function et(t, e) {
                    var i = Math.cos(e),
                        n = Math.sin(e);
                    return [i * t[0] + n * t[1], -1 * n * t[0] + i * t[1]]
                }

                function it(t, e) {
                    var i = Math.cos(e),
                        n = Math.sin(e);
                    return [i * t[0] - n * t[1], n * t[0] + i * t[1]]
                }

                function nt(t, e) {
                    return [(t[0] - e[0]) / 2, (t[1] - e[1]) / 2]
                }

                function at(t, e) {
                    return [(t[0] + e[0]) / 2, (t[1] + e[1]) / 2]
                }

                function ot(t, e) {
                    return [t[0] * e[0], t[1] * e[1]]
                }

                function rt(t, e) {
                    return [t * e[0], t * e[1]]
                }

                function st(t, e) {
                    return [t[0] + e[0], t[1] + e[1]]
                }

                function lt(t, e, i, n, a, o, r) {
                    if (0 == e || 0 == i) return void Le.push({
                        type: "lineTo",
                        args: r
                    });
                    var n = n * (Math.PI / 180);
                    e = Math.abs(e), i = Math.abs(i);
                    var s = et(nt(t, r), n),
                        l = ot(s, s),
                        h = Math.pow(e, 2),
                        p = Math.pow(i, 2),
                        c = Math.sqrt(l[0] / h + l[1] / p);
                    c > 1 && (e *= c, i *= c, h = Math.pow(e, 2), p = Math.pow(i, 2));
                    var u = Math.sqrt((h * p - h * l[1] - p * l[0]) / (h * l[1] + p * l[0]));
                    a == o && (u *= -1);
                    var d = rt(u, [e * s[1] / i, -i * s[0] / e]),
                        g = st(it(d, n), at(t, r)),
                        f = [(s[0] - d[0]) / e, (s[1] - d[1]) / i],
                        m = [(-1 * s[0] - d[0]) / e, (-1 * s[1] - d[1]) / i],
                        v = tt([1, 0], f),
                        y = tt(f, m),
                        _ = v,
                        w = v + y;
                    Le.push({
                        type: "save",
                        args: []
                    }, {
                        type: "translate",
                        args: [g[0], g[1]]
                    }, {
                        type: "rotate",
                        args: [n]
                    }, {
                        type: "scale",
                        args: [e, i]
                    }, {
                        type: "arc",
                        args: [0, 0, 1, _, w, 1 - o]
                    }, {
                        type: "restore",
                        args: []
                    })
                }
                var ht, pt = arguments.length > 1 ? arguments[1] : {},
                    ct = {},
                    ut = {
                        svg_path: o
                    },
                    dt = o,
                    gt = ct,
                    ft = null,
                    mt = function (t) {
                        return Le
                    },
                    vt = /^[Mm]/,
                    yt = {
                        type: "class",
                        value: "[Mm]",
                        description: "[Mm]"
                    },
                    _t = function (t, e) {
                        var i = t;
                        Ae && (i = "M", Ae = !1), Le.push({
                            type: "moveTo",
                            args: H(i, e[0])
                        });
                        for (var n = 1; n < e.length; n++) Le.push({
                            type: "lineTo",
                            args: H(t, e[n])
                        })
                    },
                    wt = function (t, e) {
                        return X(t, e)
                    },
                    bt = /^[Zz]/,
                    xt = {
                        type: "class",
                        value: "[Zz]",
                        description: "[Zz]"
                    },
                    Ct = function () {
                        Le.push({
                            type: "closePath",
                            args: []
                        })
                    },
                    Mt = /^[Ll]/,
                    Tt = {
                        type: "class",
                        value: "[Ll]",
                        description: "[Ll]"
                    },
                    Dt = function (t, e) {
                        for (var i = 0; i < e.length; i++) Le.push({
                            type: "lineTo",
                            args: H(t, e[i])
                        })
                    },
                    Lt = /^[Hh]/,
                    At = {
                        type: "class",
                        value: "[Hh]",
                        description: "[Hh]"
                    },
                    Pt = function (t, e) {
                        for (var i = 0; i < e.length; i++) Le.push({
                            type: "lineTo",
                            args: U(t, e[i])
                        })
                    },
                    St = /^[Vv]/,
                    kt = {
                        type: "class",
                        value: "[Vv]",
                        description: "[Vv]"
                    },
                    Et = function (t, e) {
                        for (var i = 0; i < e.length; i++) Le.push({
                            type: "lineTo",
                            args: V(t, e[i])
                        })
                    },
                    Rt = /^[Cc]/,
                    Ot = {
                        type: "class",
                        value: "[Cc]",
                        description: "[Cc]"
                    },
                    Bt = function (t, e) {
                        for (var i = 0; i < e.length; i++) Le.push({
                            type: "bezierCurveTo",
                            args: $(t, e[i])
                        })
                    },
                    It = function (t, e, i) {
                        return t.concat(e, i)
                    },
                    Ft = /^[Ss]/,
                    zt = {
                        type: "class",
                        value: "[Ss]",
                        description: "[Ss]"
                    },
                    Nt = function (t, e) {
                        for (var i = 0; i < e.length; i++) Le.push({
                            type: "bezierCurveTo",
                            args: Y().concat($(t, e[i]))
                        })
                    },
                    jt = function (t, e) {
                        return t.concat(e)
                    },
                    qt = /^[Qq]/,
                    Wt = {
                        type: "class",
                        value: "[Qq]",
                        description: "[Qq]"
                    },
                    Gt = function (t, e) {
                        for (var i = 0; i < e.length; i++) Le.push({
                            type: "quadraticCurveTo",
                            args: $(t, e[i])
                        })
                    },
                    Zt = /^[Tt]/,
                    Ht = {
                        type: "class",
                        value: "[Tt]",
                        description: "[Tt]"
                    },
                    $t = function (t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = Y();
                            Le.push({
                                type: "quadraticCurveTo",
                                args: n.concat($(t, e[i]))
                            }), De = n.slice(0)
                        }
                    },
                    Yt = /^[Aa]/,
                    Ut = {
                        type: "class",
                        value: "[Aa]",
                        description: "[Aa]"
                    },
                    Vt = function (t, e) {
                        for (var i = 0; i < e.length; i++) {
                            var n = [Te.slice()],
                                a = [H(t, e[i].slice(-2))];
                            absArgs = n.concat(e[i].slice(0, -2), a), lt.apply(this, absArgs)
                        }
                    },
                    Xt = function (t, e, i, n, a, o) {
                        return [parseFloat(t), parseFloat(e), parseFloat(i.join("")), parseInt(n), parseInt(a), o[0], o[1]]
                    },
                    Kt = function (t, e) {
                        return [t, e]
                    },
                    Qt = function (t) {
                        return parseFloat(t.join(""))
                    },
                    Jt = "0",
                    te = {
                        type: "literal",
                        value: "0",
                        description: '"0"'
                    },
                    ee = "1",
                    ie = {
                        type: "literal",
                        value: "1",
                        description: '"1"'
                    },
                    ne = ",",
                    ae = {
                        type: "literal",
                        value: ",",
                        description: '","'
                    },
                    oe = ".",
                    re = {
                        type: "literal",
                        value: ".",
                        description: '"."'
                    },
                    se = /^[eE]/,
                    le = {
                        type: "class",
                        value: "[eE]",
                        description: "[eE]"
                    },
                    he = "+",
                    pe = {
                        type: "literal",
                        value: "+",
                        description: '"+"'
                    },
                    ce = "-",
                    ue = {
                        type: "literal",
                        value: "-",
                        description: '"-"'
                    },
                    de = /^[0-9]/,
                    ge = {
                        type: "class",
                        value: "[0-9]",
                        description: "[0-9]"
                    },
                    fe = function (t) {
                        return t.join("")
                    },
                    me = /^[ \t\n\r]/,
                    ve = {
                        type: "class",
                        value: "[ \\t\\n\\r]",
                        description: "[ \\t\\n\\r]"
                    },
                    ye = 0,
                    _e = 0,
                    we = 0,
                    be = {
                        line: 1,
                        column: 1,
                        seenCR: !1
                    },
                    xe = 0,
                    Ce = [],
                    Me = 0;
                if ("startRule" in pt) {
                    if (!(pt.startRule in ut)) throw new Error("Can't start parsing from rule \"" + pt.startRule + '".');
                    dt = ut[pt.startRule]
                }
                var Te = [0, 0],
                    De = [0, 0],
                    Le = [],
                    Ae = !0,
                    Pe = "";
                if ((ht = dt()) !== ct && ye === e.length) return ht;
                throw ht !== ct && ye < e.length && n({
                    type: "end",
                    description: "end of input"
                }), a(null, Ce, xe)
            }
            return function (t, e) {
                function i() {
                    this.constructor = t
                }
                i.prototype = e.prototype, t.prototype = new i
            }(t, Error), {
                SyntaxError: t,
                parse: e
            }
        }();
        for (var e = ["closePath", "moveTo", "lineTo", "quadraticCurveTo", "bezierCurveTo", "rect", "arc", "arcTo", "ellipse", "isPointInPath", "isPointInStroke"], i = 0; i < e.length; i++) {
            var n = e[i];
            t.prototype[n] = function (t) {
                return function () {
                    this.ops_.push({
                        type: t,
                        args: Array.prototype.slice.call(arguments, 0)
                    })
                }
            }(n)
        }
        t.prototype.addPath = function (t, e) {
            var i = !1;
            e && e.hasOwnProperty("a") && e.hasOwnProperty("b") && e.hasOwnProperty("c") && e.hasOwnProperty("d") && e.hasOwnProperty("e") && e.hasOwnProperty("f") && (i = !0, this.ops_.push({
                type: "save",
                args: []
            }), this.ops_.push({
                type: "transform",
                args: [e.a, e.b, e.c, e.d, e.e, e.f]
            })), this.ops_ = this.ops_.concat(t.ops_), i && this.ops_.push({
                type: "restore",
                args: []
            })
        }, original_fill = CanvasRenderingContext2D.prototype.fill, original_stroke = CanvasRenderingContext2D.prototype.stroke, original_clip = CanvasRenderingContext2D.prototype.clip, original_is_point_in_path = CanvasRenderingContext2D.prototype.isPointInPath, original_is_point_in_stroke = CanvasRenderingContext2D.prototype.isPointInStroke, CanvasRenderingContext2D.prototype.fill = function (e) {
            if (e instanceof t) {
                this.beginPath();
                for (var i = 0, n = e.ops_.length; i < n; i++) {
                    var a = e.ops_[i];
                    CanvasRenderingContext2D.prototype[a.type].apply(this, a.args)
                }
                original_fill.apply(this, Array.prototype.slice.call(arguments, 1))
            } else original_fill.apply(this, arguments)
        }, CanvasRenderingContext2D.prototype.stroke = function (e) {
            if (e instanceof t) {
                this.beginPath();
                for (var i = 0, n = e.ops_.length; i < n; i++) {
                    var a = e.ops_[i];
                    CanvasRenderingContext2D.prototype[a.type].apply(this, a.args)
                }
                original_stroke.call(this)
            } else original_stroke.call(this)
        }, CanvasRenderingContext2D.prototype.clip = function (e) {
            if (e instanceof t) {
                this.beginPath();
                for (var i = 0, n = e.ops_.length; i < n; i++) {
                    var a = e.ops_[i];
                    CanvasRenderingContext2D.prototype[a.type].apply(this, a.args)
                }
                original_clip.apply(this, Array.prototype.slice.call(arguments, 1))
            } else original_clip.apply(this, arguments)
        }, CanvasRenderingContext2D.prototype.isPointInPath = function (e) {
            if (e instanceof t) {
                this.beginPath();
                for (var i = 0, n = e.ops_.length; i < n; i++) {
                    var a = e.ops_[i];
                    CanvasRenderingContext2D.prototype[a.type].apply(this, a.args)
                }
                return original_is_point_in_path.apply(this, Array.prototype.slice.call(arguments, 1))
            }
            return original_is_point_in_path.apply(this, arguments)
        }, CanvasRenderingContext2D.prototype.isPointInStroke = function (e) {
            if (e instanceof t) {
                this.beginPath();
                for (var i = 0, n = e.ops_.length; i < n; i++) {
                    var a = e.ops_[i];
                    CanvasRenderingContext2D.prototype[a.type].apply(this, a.args)
                }
                return original_is_point_in_stroke.apply(this, Array.prototype.slice.call(arguments, 1))
            }
            return original_is_point_in_stroke.apply(this, arguments)
        }, Path2D = t
    }();
    var BMapLib = window.BMapLib = BMapLib || {};
    ! function () {
        function t(t, e, i) {
            var n, a;
            return t.insertAdjacentHTML ? t.insertAdjacentHTML(e, i) : (n = t.ownerDocument.createRange(), e = e.toUpperCase(), "AFTERBEGIN" == e || "BEFOREEND" == e ? (n.selectNodeContents(t), n.collapse("AFTERBEGIN" == e)) : (a = "BEFOREBEGIN" == e, n[a ? "setStartBefore" : "setEndAfter"](t), n.collapse(a)), n.insertNode(n.createContextualFragment(i))), t
        }

        function e(e, i) {
            return t(e, "beforeEnd", i), e.lastChild
        }

        function i(t) {
            var t = window.event || t;
            t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
        }

        function n(t) {
            var t = window.event || t;
            return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
        }

        function a(t, e, i) {
            t && (e = e.replace(/^on/i, "").toLowerCase(), t.addEventListener ? t.addEventListener(e, i, !1) : t.attachEvent && t.attachEvent("on" + e, i))
        }

        function o(t, e, i) {
            t && (e = e.replace(/^on/i, "").toLowerCase(), t.removeEventListener ? t.removeEventListener(e, i, !1) : t.detachEvent && t.detachEvent("on" + e, i))
        }

        function r() {
            this._map = null, this._html = "<div style='background:transparent url(https://api.map.baidu.com/images/blank.gif);position:absolute;left:0;top:0;width:100%;height:100%;z-index:1000' unselectable='on'></div>", this._maskElement = null, this._cursor = "default", this._inUse = !1
        }

        function s(t) {
            var e = {
                duration: 1e3,
                fps: 30,
                delay: 0,
                transition: h.linear,
                onStop: function () {}
            };
            if (t)
                for (var i in t) e[i] = t[i];
            if (this._opts = e, e.delay) {
                var n = this;
                setTimeout(function () {
                    n._beginTime = (new Date).getTime(), n._endTime = n._beginTime + n._opts.duration, n._launch()
                }, e.delay)
            } else this._beginTime = (new Date).getTime(), this._endTime = this._beginTime + this._opts.duration, this._launch()
        }
        var l = BMapLib.RectangleZoom = function (t, e) {
            t && (this._map = t, this._opts = {
                zoomType: 0,
                followText: "",
                followTextStyle: {
                    color: "#333",
                    borderColor: "#7ABCE9"
                },
                strokeWeight: 2,
                strokeColor: "#111",
                style: "solid",
                fillColor: "#ccc",
                opacity: .4,
                cursor: "crosshair",
                autoClose: !1,
                onClose: null
            }, this._setOptions(e), this._opts.strokeWeight = this._opts.strokeWeight <= 0 ? 1 : this._opts.strokeWeight, this._opts.opacity = this._opts.opacity < 0 ? 0 : this._opts.opacity > 1 ? 1 : this._opts.opacity, (this._opts.zoomType < 0 || this._opts.zoomType > 1) && (this._opts.zoomType = 0), this._isOpen = !1, this._fDiv = null, this._followTitle = null, this._operationMask = new r)
        };
        l.prototype._setOptions = function (t) {
            if (t)
                for (var e in t) void 0 !== t[e] && (this._opts[e] = t[e])
        }, l.prototype.setStrokeColor = function (t) {
            "string" == typeof t && (this._opts.strokeColor = t, this._updateStyle())
        }, l.prototype.setLineStroke = function (t) {
            "number" == typeof t && Math.round(t) > 0 && (this._opts.strokeWeight = Math.round(t), this._updateStyle())
        }, l.prototype.setLineStyle = function (t) {
            "solid" != t && "dashed" != t || (this._opts.style = t, this._updateStyle())
        }, l.prototype.setOpacity = function (t) {
            "number" == typeof t && t >= 0 && t <= 1 && (this._opts.opacity = t, this._updateStyle())
        }, l.prototype.setFillColor = function (t) {
            this._opts.fillColor = t, this._updateStyle()
        }, l.prototype.setCursor = function (t) {
            this._opts.cursor = t, this._operationMask.setCursor(this._opts.cursor)
        }, l.prototype._updateStyle = function () {
            if (this._fDiv) {
                this._fDiv.style.border = [this._opts.strokeWeight, "px ", this._opts.style, " ", this._opts.color].join("");
                var t = this._fDiv.style,
                    e = this._opts.opacity;
                t.opacity = e, t.MozOpacity = e, t.KhtmlOpacity = e, t.filter = "alpha(opacity=" + 100 * e + ")"
            }
        }, l.prototype.getCursor = function () {
            return this._opts.cursor
        }, l.prototype._bind = function () {
            this.setCursor(this._opts.cursor);
            var t = this;
            if (a(this._map.getContainer(), "mousemove", function (e) {
                    if (t._isOpen && t._followTitle) {
                        e = window.event || e;
                        if ((e.target || e.srcElement) != t._operationMask.getDom()) return void t._followTitle.hide();
                        t._mapMoving || t._followTitle.show();
                        var i = t._operationMask.getDrawPoint(e, !0);
                        t._followTitle.setPosition(i)
                    }
                }), this._opts.followText) {
                this._followTitle = new BMap.Label(this._opts.followText, {
                    offset: new BMap.Size(14, 14)
                });
                this._followTitle.setStyles(this._opts.followTextStyle)
            }
        }, l.prototype.open = function () {
            if (1 == this._isOpen) return !0;
            if (!BMapLib._toolInUse) {
                this._isOpen = !0, BMapLib._toolInUse = !0, this.binded || (this._bind(), this.binded = !0), this._followTitle && (this._map.addOverlay(this._followTitle), this._followTitle.hide());
                var e = this,
                    r = this._map,
                    l = 0;
                /msie (\d+\.\d)/i.test(navigator.userAgent) && (l = document.documentMode || +RegExp.$1);
                var h = function (o) {
                        if (o = window.event || o, !(0 != o.button && !l || l && 1 != o.button) && (l && e._operationMask.getDom().setCapture && e._operationMask.getDom().setCapture(), e._isOpen)) return e._bind.isZooming = !0, a(e._operationMask.getDom(), "mousemove", p), a(e._operationMask.getDom(), "mouseup", c), e._bind.mx = o.offsetX || 0, e._bind.my = o.offsetY || 0, e._bind.ix = o.pageX || o.clientX || 0, e._bind.iy = o.pageY || o.clientY || 0, t(e._operationMask.getDom(), "beforeBegin", e._generateHTML()), e._fDiv = e._operationMask.getDom().previousSibling, e._fDiv.style.width = "0", e._fDiv.style.height = "0", e._fDiv.style.left = e._bind.mx + "px", e._fDiv.style.top = e._bind.my + "px", i(o), n(o)
                    },
                    p = function (t) {
                        if (1 == e._isOpen && 1 == e._bind.isZooming) {
                            var t = window.event || t,
                                a = t.pageX || t.clientX || 0,
                                o = t.pageY || t.clientY || 0,
                                s = e._bind.dx = a - e._bind.ix,
                                l = e._bind.dy = o - e._bind.iy,
                                h = Math.abs(s) - e._opts.strokeWeight,
                                p = Math.abs(l) - e._opts.strokeWeight;
                            e._fDiv.style.width = (h < 0 ? 0 : h) + "px", e._fDiv.style.height = (p < 0 ? 0 : p) + "px";
                            var c = [r.getSize().width, r.getSize().height];
                            return s >= 0 ? (e._fDiv.style.right = "auto", e._fDiv.style.left = e._bind.mx + "px", e._bind.mx + s >= c[0] - 2 * e._opts.strokeWeight && (e._fDiv.style.width = c[0] - e._bind.mx - 2 * e._opts.strokeWeight + "px", e._followTitle && e._followTitle.hide())) : (e._fDiv.style.left = "auto", e._fDiv.style.right = c[0] - e._bind.mx + "px", e._bind.mx + s <= 2 * e._opts.strokeWeight && (e._fDiv.style.width = e._bind.mx - 2 * e._opts.strokeWeight + "px", e._followTitle && e._followTitle.hide())), l >= 0 ? (e._fDiv.style.bottom = "auto", e._fDiv.style.top = e._bind.my + "px", e._bind.my + l >= c[1] - 2 * e._opts.strokeWeight && (e._fDiv.style.height = c[1] - e._bind.my - 2 * e._opts.strokeWeight + "px", e._followTitle && e._followTitle.hide())) : (e._fDiv.style.top = "auto", e._fDiv.style.bottom = c[1] - e._bind.my + "px", e._bind.my + l <= 2 * e._opts.strokeWeight && (e._fDiv.style.height = e._bind.my - 2 * e._opts.strokeWeight + "px", e._followTitle && e._followTitle.hide())), i(t), n(t)
                        }
                    },
                    c = function (t) {
                        if (1 == e._isOpen) {
                            o(document, "mousemove", p), o(document, "mouseup", c), l && e._operationMask.getDom().releaseCapture && e._operationMask.getDom().releaseCapture();
                            var a = parseInt(e._fDiv.style.left) + parseInt(e._fDiv.style.width) / 2,
                                h = parseInt(e._fDiv.style.top) + parseInt(e._fDiv.style.height) / 2,
                                u = [r.getSize().width, r.getSize().height];
                            isNaN(a) && (a = u[0] - parseInt(e._fDiv.style.right) - parseInt(e._fDiv.style.width) / 2), isNaN(h) && (h = u[1] - parseInt(e._fDiv.style.bottom) - parseInt(e._fDiv.style.height) / 2);
                            var d = Math.min(u[0] / Math.abs(e._bind.dx), u[1] / Math.abs(e._bind.dy));
                            d = Math.floor(d);
                            var g = new BMap.Pixel(a - parseInt(e._fDiv.style.width) / 2, h - parseInt(e._fDiv.style.height) / 2),
                                f = new BMap.Pixel(a + parseInt(e._fDiv.style.width) / 2, h + parseInt(e._fDiv.style.height) / 2),
                                m = r.pixelToPoint(g),
                                v = r.pixelToPoint(f),
                                y = new BMap.Bounds(m, v);
                            delete e._bind.dx, delete e._bind.dy, delete e._bind.ix, delete e._bind.iy, isNaN(d) ? targetZoomLv = r.getZoom() + (0 == e._opts.zoomType ? 1 : -1) : 0 == e._opts.zoomType ? (targetZoomLv = Math.round(r.getZoom() + Math.log(d) / Math.log(2)), targetZoomLv < r.getZoom() && (targetZoomLv = r.getZoom())) : (targetZoomLv = Math.round(r.getZoom() + Math.log(1 / d) / Math.log(2)), targetZoomLv > r.getZoom() && (targetZoomLv = r.getZoom()));
                            var _ = r.pixelToPoint({
                                x: a,
                                y: h
                            }, r.getZoom());
                            r.centerAndZoom(_, targetZoomLv);
                            var w = e._operationMask.getDrawPoint(t);
                            e._followTitle && (e._followTitle.setPosition(w), e._followTitle.show()), e._bind.isZooming = !1, e._fDiv.parentNode.removeChild(e._fDiv), e._fDiv = null
                        }
                        var b = y.getSouthWest(),
                            x = y.getNorthEast(),
                            C = new BMap.Point(x.lng, b.lat),
                            M = new BMap.Point(b.lng, x.lat),
                            T = new BMap.Polygon([b, M, x, C]);
                        return T.setStrokeWeight(1), T.setStrokeOpacity(.8), T.setStrokeColor("#7ABCE9"), T.setFillColor(""), r.addOverlay(T), new s({
                            duration: 240,
                            fps: 20,
                            delay: 500,
                            render: function (t) {
                                var e = .3 * (1 - t);
                                T.setStrokeOpacity(e)
                            },
                            finish: function () {
                                r.removeOverlay(T), T = null
                            }
                        }), e._opts.autoClose && setTimeout(function () {
                            1 == e._isOpen && e.close()
                        }, 70), i(t), n(t)
                    };
                return this._operationMask.show(this._map), this.setCursor(this._opts.cursor), this._isBeginDrawBinded || (a(this._operationMask.getDom(), "mousedown", h), this._isBeginDrawBinded = !0), !0
            }
        }, l.prototype.close = function () {
            this._isOpen && (this._isOpen = !1, BMapLib._toolInUse = !1, this._followTitle && this._followTitle.hide(), this._operationMask.hide(), this._opts.onClose && "function" == typeof this._opts.onClose && this._opts.onClose())
        }, l.prototype._generateHTML = function () {
            return ["<div style='position:absolute;z-index:300;border:", this._opts.strokeWeight, "px ", this._opts.style, " ", this._opts.strokeColor, "; opacity:", this._opts.opacity, "; background: ", this._opts.fillColor, "; filter:alpha(opacity=", Math.round(100 * this._opts.opacity), "); width:0; height:0; font-size:0'></div>"].join("")
        }, r.prototype.show = function (t) {
            this._map || (this._map = t), this._inUse = !0, this._maskElement || this._createMask(t), this._maskElement.style.display = "block"
        }, r.prototype._createMask = function (t) {
            if (this._map = t, this._map) {
                var o = this._maskElement = e(this._map.getContainer(), this._html),
                    r = function (t) {
                        return i(t), n(t)
                    };
                a(o, "mouseup", function (t) {
                    2 == t.button && r(t)
                }), a(o, "contextmenu", r), o.style.display = "none"
            }
        }, r.prototype.getDrawPoint = function (t, e) {
            t = window.event || t;
            var i = t.offsetX || 0,
                n = t.offsetY || 0,
                a = t.target || t.srcElement;
            if (a != this.getDom() && 1 == e)
                for (; a && a != this._map.getContainer();) 0 == a.clientWidth && 0 == a.clientHeight && a.offsetParent && "td" == a.offsetParent.nodeName.toLowerCase() || (i += a.offsetLeft, n += a.offsetTop), a = a.offsetParent;
            if (!(a != this.getDom() && a != this._map.getContainer() || void 0 === i || void 0 === n || isNaN(i) || isNaN(n))) return this._map.pixelToPoint(new BMap.Pixel(i, n))
        }, r.prototype.hide = function () {
            this._map && (this._inUse = !1, this._maskElement && (this._maskElement.style.display = "none"))
        }, r.prototype.getDom = function () {
            return this._maskElement || this._createMask(this._map), this._maskElement
        }, r.prototype.setCursor = function (t) {
            this._cursor = t || "default", this._maskElement && (this._maskElement.style.cursor = this._cursor)
        }, s.prototype._launch = function () {
            var t = this,
                e = (new Date).getTime();
            if (e >= t._endTime) return "function" == typeof t._opts.render && t._opts.render(t._opts.transition(1)), void("function" == typeof t._opts.finish && t._opts.finish());
            t.schedule = t._opts.transition((e - t._beginTime) / t._opts.duration), "function" == typeof t._opts.render && t._opts.render(t.schedule), t.terminative || (t._timer = setTimeout(function () {
                t._launch()
            }, 1e3 / t._opts.fps))
        };
        var h = {
            linear: function (t) {
                return t
            },
            reverse: function (t) {
                return 1 - t
            },
            easeInQuad: function (t) {
                return t * t
            },
            easeInCubic: function (t) {
                return Math.pow(t, 3)
            },
            easeOutQuad: function (t) {
                return -(t * (t - 2))
            },
            easeOutCubic: function (t) {
                return Math.pow(t - 1, 3) + 1
            },
            easeInOutQuad: function (t) {
                return t < .5 ? t * t * 2 : -2 * (t - 2) * t - 1
            },
            easeInOutCubic: function (t) {
                return t < .5 ? 4 * Math.pow(t, 3) : 4 * Math.pow(t - 1, 3) + 1
            },
            easeInOutSine: function (t) {
                return (1 - Math.cos(Math.PI * t)) / 2
            }
        }
    }();
    var BMapLib = window.BMapLib = BMapLib || {},
        BMAP_DRAWING_MARKER = "marker",
        BMAP_DRAWING_POLYLINE = "polyline",
        BMAP_DRAWING_CIRCLE = "circle",
        BMAP_DRAWING_RECTANGLE = "rectangle",
        BMAP_DRAWING_POLYGON = "polygon";
    ! function () {
        function t() {
            this._enableEdgeMove = !1
        }

        function e(t, e) {
            this.drawingManager = t, e = this.drawingToolOptions = e || {}, this.defaultAnchor = BMAP_ANCHOR_TOP_LEFT, this.defaultOffset = new BMap.Size(10, 10), this.defaultDrawingModes = [BMAP_DRAWING_MARKER, BMAP_DRAWING_CIRCLE, BMAP_DRAWING_POLYLINE, BMAP_DRAWING_POLYGON, BMAP_DRAWING_RECTANGLE], e.drawingModes ? this.drawingModes = e.drawingModes : this.drawingModes = this.defaultDrawingModes, e.anchor && this.setAnchor(e.anchor), e.offset && this.setOffset(e.offset)
        }

        function i(t) {
            for (var e = o.length; e--;) o[e] != t && o[e].close()
        }
        var n = n || {
            guid: "$BAIDU$"
        };
        ! function () {
            window[n.guid] = {}, n.extend = function (t, e) {
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }, n.lang = n.lang || {}, n.lang.guid = function () {
                return "TANGRAM__" + (window[n.guid]._counter++).toString(36)
            }, window[n.guid]._counter = window[n.guid]._counter || 1, window[n.guid]._instances = window[n.guid]._instances || {}, n.lang.Class = function (t) {
                this.guid = t || n.lang.guid(), window[n.guid]._instances[this.guid] = this
            }, window[n.guid]._instances = window[n.guid]._instances || {}, n.lang.isString = function (t) {
                return "[object String]" == Object.prototype.toString.call(t)
            }, n.lang.isFunction = function (t) {
                return "[object Function]" == Object.prototype.toString.call(t)
            }, n.lang.Class.prototype.toString = function () {
                return "[object " + (this._className || "Object") + "]"
            }, n.lang.Class.prototype.dispose = function () {
                delete window[n.guid]._instances[this.guid];
                for (var t in this) n.lang.isFunction(this[t]) || delete this[t];
                this.disposed = !0
            }, n.lang.Event = function (t, e) {
                this.type = t, this.returnValue = !0, this.target = e || null, this.currentTarget = null
            }, n.lang.Class.prototype.addEventListener = function (t, e, i) {
                if (n.lang.isFunction(e)) {
                    !this.__listeners && (this.__listeners = {});
                    var a, o = this.__listeners;
                    if ("string" == typeof i && i) {
                        if (/[^\w\-]/.test(i)) throw "nonstandard key:" + i;
                        e.hashCode = i, a = i
                    }
                    0 != t.indexOf("on") && (t = "on" + t), "object" != typeof o[t] && (o[t] = {}), a = a || n.lang.guid(), e.hashCode = a, o[t][a] = e
                }
            }, n.lang.Class.prototype.removeEventListener = function (t, e) {
                if (n.lang.isFunction(e)) e = e.hashCode;
                else if (!n.lang.isString(e)) return;
                !this.__listeners && (this.__listeners = {}), 0 != t.indexOf("on") && (t = "on" + t);
                var i = this.__listeners;
                i[t] && i[t][e] && delete i[t][e]
            }, n.lang.Class.prototype.dispatchEvent = function (t, e) {
                n.lang.isString(t) && (t = new n.lang.Event(t)), !this.__listeners && (this.__listeners = {}), e = e || {};
                for (var i in e) t[i] = e[i];
                var i, a = this.__listeners,
                    o = t.type;
                if (t.target = t.target || this, t.currentTarget = this, 0 != o.indexOf("on") && (o = "on" + o), n.lang.isFunction(this[o]) && this[o].apply(this, arguments), "object" == typeof a[o])
                    for (i in a[o]) a[o][i].apply(this, arguments);
                return t.returnValue
            }, n.lang.inherits = function (t, e, i) {
                var n, a, o = t.prototype,
                    r = new Function;
                r.prototype = e.prototype, a = t.prototype = new r;
                for (n in o) a[n] = o[n];
                t.prototype.constructor = t, t.superClass = e.prototype, "string" == typeof i && (a._className = i)
            }, n.dom = n.dom || {}, n._g = n.dom._g = function (t) {
                return n.lang.isString(t) ? document.getElementById(t) : t
            }, n.g = n.dom.g = function (t) {
                return "string" == typeof t || t instanceof String ? document.getElementById(t) : t && t.nodeName && (1 == t.nodeType || 9 == t.nodeType) ? t : null
            }, n.insertHTML = n.dom.insertHTML = function (t, e, i) {
                t = n.dom.g(t);
                var a, o;
                return t.insertAdjacentHTML ? t.insertAdjacentHTML(e, i) : (a = t.ownerDocument.createRange(), e = e.toUpperCase(), "AFTERBEGIN" == e || "BEFOREEND" == e ? (a.selectNodeContents(t), a.collapse("AFTERBEGIN" == e)) : (o = "BEFOREBEGIN" == e, a[o ? "setStartBefore" : "setEndAfter"](t), a.collapse(o)), a.insertNode(a.createContextualFragment(i))), t
            }, n.ac = n.dom.addClass = function (t, e) {
                t = n.dom.g(t);
                for (var i = e.split(/\s+/), a = t.className, o = " " + a + " ", r = 0, s = i.length; r < s; r++) o.indexOf(" " + i[r] + " ") < 0 && (a += (a ? " " : "") + i[r]);
                return t.className = a, t
            }, n.event = n.event || {}, n.event._listeners = n.event._listeners || [], n.on = n.event.on = function (t, e, i) {
                e = e.replace(/^on/i, ""), t = n._g(t);
                var a, o = function (e) {
                        i.call(t, e)
                    },
                    r = n.event._listeners,
                    s = n.event._eventFilter,
                    l = e;
                return e = e.toLowerCase(), s && s[e] && (a = s[e](t, e, o), l = a.type, o = a.listener), t.addEventListener ? t.addEventListener(l, o, !1) : t.attachEvent && t.attachEvent("on" + l, o), r[r.length] = [t, e, i, o, l], t
            }, n.un = n.event.un = function (t, e, i) {
                t = n._g(t), e = e.replace(/^on/i, "").toLowerCase();
                for (var a, o, r, s = n.event._listeners, l = s.length, h = !i; l--;) a = s[l], a[1] !== e || a[0] !== t || !h && a[2] !== i || (o = a[4], r = a[3], t.removeEventListener ? t.removeEventListener(o, r, !1) : t.detachEvent && t.detachEvent("on" + o, r), s.splice(l, 1));
                return t
            }, n.getEvent = n.event.getEvent = function (t) {
                return window.event || t
            }, n.getTarget = n.event.getTarget = function (t) {
                var t = n.getEvent(t);
                return t.target || t.srcElement
            }, n.preventDefault = n.event.preventDefault = function (t) {
                var t = n.getEvent(t);
                t.preventDefault ? t.preventDefault() : t.returnValue = !1
            }, n.stopBubble = n.event.stopBubble = function (t) {
                t = n.getEvent(t), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0
            }, n.browser = n.browser || {}, /msie (\d+\.\d)/i.test(navigator.userAgent) && (n.browser.ie = n.ie = document.documentMode || +RegExp.$1)
        }();
        var a = BMapLib.DrawingManager = function (t, e) {
            t && (o.push(this), e = e || {}, this._initialize(t, e))
        };
        n.lang.inherits(a, n.lang.Class, "DrawingManager"), a.prototype.open = function () {
            if (1 == this._isOpen) return !0;
            i(this), this._open()
        }, a.prototype.close = function () {
            if (0 == this._isOpen) return !0;
            var t = this;
            this._close(), setTimeout(function () {
                t._map.enableDoubleClickZoom()
            }, 2e3)
        }, a.prototype.setDrawingMode = function (t) {
            this._drawingType != t && (i(this), this._setDrawingMode(t))
        }, a.prototype.getDrawingMode = function () {
            return this._drawingType
        }, a.prototype.enableCalculate = function () {
            this._enableCalculate = !0, this._addGeoUtilsLibrary()
        }, a.prototype.disableCalculate = function () {
            this._enableCalculate = !1
        }, a.prototype._initialize = function (t, i) {
            if (this._map = t, this._opts = i, this._drawingType = i.drawingMode || BMAP_DRAWING_MARKER, i.enableDrawingTool) {
                var n = new e(this, i.drawingToolOptions);
                this._drawingTool = n, t.addControl(n)
            }
            if (i.enableCalculate === !0 ? this.enableCalculate() : this.disableCalculate(), this._opts.followText) {
                this._followTitle = new BMap.Label(this._opts.followText, {
                    offset: new BMap.Size(14, 14)
                });
                this._followTitle.setStyles(this._opts.followTextStyle), this._map.addOverlay(this._followTitle), this._followTitle.hide()
            }
            this._isOpen = !(i.isOpen !== !0), this._isOpen && this._open(), this.markerOptions = i.markerOptions || {}, this.circleOptions = i.circleOptions || {}, this.polylineOptions = i.polylineOptions || {}, this.polygonOptions = i.polygonOptions || {}, this.rectangleOptions = i.rectangleOptions || {}, this.controlButton = "right" == i.controlButton ? "right" : "left"
        }, a.prototype._open = function () {
            this._isOpen = !0, this._mask || (this._mask = new t), this._map.addOverlay(this._mask), this._setDrawingMode(this._drawingType)
        }, a.prototype._setDrawingMode = function (t) {
            if (this._drawingType = t, this._isOpen) switch (this._mask.__listeners = {}, t) {
                case BMAP_DRAWING_MARKER:
                    this._bindMarker();
                    break;
                case BMAP_DRAWING_CIRCLE:
                    this._bindCircle();
                    break;
                case BMAP_DRAWING_POLYLINE:
                case BMAP_DRAWING_POLYGON:
                    this._bindPolylineOrPolygon();
                    break;
                case BMAP_DRAWING_RECTANGLE:
                    this._bindRectangle()
            }
            this._drawingTool && this._isOpen && this._drawingTool.setStyleByDrawingMode(t)
        }, a.prototype._close = function () {
            this._isOpen = !1, this._mask && this._map.removeOverlay(this._mask), this._followTitle && this._followTitle.hide(), this._drawingTool && this._drawingTool.setStyleByDrawingMode("hander")
        }, a.prototype._bindMarker = function () {
            var t = this,
                e = this._map,
                i = this._mask,
                n = function (i) {
                    var n = new BMap.Marker(i.point, t.markerOptions);
                    e.addOverlay(n), t._dispatchOverlayComplete(n)
                };
            i.addEventListener("click", n)
        }, a.prototype._bindCircle = function () {
            var t = this,
                e = this._map,
                i = this._mask,
                a = null,
                o = null,
                r = function (r) {
                    ("right" != t.controlButton || 1 != r.button && 0 != r.button) && (o = r.point, a = new BMap.Circle(o, 0, t.circleOptions), e.addOverlay(a), i.enableEdgeMove(), i.addEventListener("mousemove", s), n.on(document, "mouseup", l))
                },
                s = function (e) {
                    a.setRadius(t._map.getDistance(o, e.point))
                },
                l = function (e) {
                    var r = t._calculate(a, e.point);
                    t._dispatchOverlayComplete(a, r), o = null, i.disableEdgeMove(), i.removeEventListener("mousemove", s), n.un(document, "mouseup", l)
                },
                h = function (e) {
                    n.preventDefault(e), n.stopBubble(e), "right" == t.controlButton && 1 == e.button || null == o && r(e)
                };
            i.addEventListener("mousedown", h)
        }, a.prototype._bindPolylineOrPolygon = function () {
            var t = this,
                e = this._map,
                i = this._mask,
                a = [],
                o = null;
            overlay = null, isBinded = !1;
            var r = function (n) {
                    ("right" != t.controlButton || 1 != n.button && 0 != n.button) && (a.push(n.point), o = a.concat(a[a.length - 1]), 1 == a.length ? (t._drawingType == BMAP_DRAWING_POLYLINE ? overlay = new BMap.Polyline(o, t.polylineOptions) : t._drawingType == BMAP_DRAWING_POLYGON && (overlay = new BMap.Polygon(o, t.polygonOptions)), e.addOverlay(overlay)) : overlay.setPath(o), isBinded || (isBinded = !0, i.enableEdgeMove(), i.addEventListener("mousemove", s), i.addEventListener("dblclick", l)), t._followTitle && (t._followTitle.setPosition(n.point), t._followTitle.show()))
                },
                s = function (e) {
                    overlay.setPositionAt(o.length - 1, e.point), t._followTitle && t._followTitle.setPosition(e.point), n.stopBubble(e)
                },
                l = function (e) {
                    n.stopBubble(e), isBinded = !1, i.disableEdgeMove(), i.removeEventListener("mousedown", r), i.removeEventListener("mousemove", s), i.removeEventListener("dblclick", l), "right" == t.controlButton ? a.push(e.point) : n.ie <= 8 || a.pop(), overlay.setPath(a);
                    var h = t._calculate(overlay, a.pop());
                    t._dispatchOverlayComplete(overlay, h), a.length = 0, o.length = 0, t.close()
                };
            i.addEventListener("mousedown", r), i.addEventListener("dblclick", function (t) {
                n.stopBubble(t)
            })
        }, a.prototype._bindRectangle = function () {
            var t = this,
                e = this._map,
                i = this._mask,
                a = null,
                o = null,
                r = function (r) {
                    if (n.stopBubble(r), n.preventDefault(r), "right" != t.controlButton || 1 != r.button && 0 != r.button) {
                        o = r.point;
                        var h = o;
                        a = new BMap.Polygon(t._getRectanglePoint(o, h), t.rectangleOptions), e.addOverlay(a), i.enableEdgeMove(), i.addEventListener("mousemove", s), n.on(document, "mouseup", l)
                    }
                },
                s = function (e) {
                    a.setPath(t._getRectanglePoint(o, e.point))
                },
                l = function (e) {
                    var r = t._calculate(a, a.getPath()[2]);
                    t._dispatchOverlayComplete(a, r), o = null, i.disableEdgeMove(), i.removeEventListener("mousemove", s), n.un(document, "mouseup", l)
                };
            i.addEventListener("mousedown", r)
        }, a.prototype._calculate = function (t, e) {
            var i = {
                data: 0,
                label: null
            };
            if (this._enableCalculate && BMapLib.GeoUtils) {
                switch (t.toString()) {
                    case "[object Polyline]":
                        i.data = BMapLib.GeoUtils.getPolylineDistance(t);
                        break;
                    case "[object Polygon]":
                        i.data = BMapLib.GeoUtils.getPolygonArea(t);
                        break;
                    case "[object Circle]":
                        var n = t.getRadius();
                        i.data = Math.PI * n * n
                }!i.data || i.data < 0 ? i.data = 0 : i.data = i.data.toFixed(2), i.label = this._addLabel(e, i.data)
            }
            return i
        }, a.prototype._addGeoUtilsLibrary = function () {
            if (!BMapLib.GeoUtils) {
                var t = document.createElement("script");
                t.setAttribute("type", "text/javascript"), t.setAttribute("src", "https://api.map.baidu.com/library/GeoUtils/1.2/src/GeoUtils_min.js"), document.body.appendChild(t)
            }
        }, a.prototype._addLabel = function (t, e) {
            var i = new BMap.Label(e, {
                position: t
            });
            return this._map.addOverlay(i), i
        }, a.prototype._getRectanglePoint = function (t, e) {
            return [new BMap.Point(t.lng, t.lat), new BMap.Point(e.lng, t.lat), new BMap.Point(e.lng, e.lat), new BMap.Point(t.lng, e.lat)]
        }, a.prototype._dispatchOverlayComplete = function (t, e) {
            var i = {
                overlay: t,
                drawingMode: this._drawingType
            };
            e && (i.calculate = e.data || null, i.label = e.label || null), this.dispatchEvent(this._drawingType + "complete", t), this.dispatchEvent("overlaycomplete", i)
        }, a.prototype.isPointInRect = function (t, e) {
            if (!(t instanceof BMap.Point && e instanceof BMap.Bounds)) return !1;
            var i = e.getSouthWest(),
                n = e.getNorthEast();
            return t.lng >= i.lng && t.lng <= n.lng && t.lat >= i.lat && t.lat <= n.lat
        }, a.prototype.isPointInPolygon = function (t, e) {
            if (!(t instanceof BMap.Point && e instanceof BMap.Polygon)) return !1;
            var i = e.getBounds();
            if (!this.isPointInRect(t, i)) return !1;
            var n, a, o = e.getPath(),
                r = o.length,
                s = 0,
                l = t;
            n = o[0];
            for (var h = 1; h <= r; ++h) {
                if (l.equals(n)) return !0;
                if (a = o[h % r], l.lat < Math.min(n.lat, a.lat) || l.lat > Math.max(n.lat, a.lat)) n = a;
                else {
                    if (l.lat > Math.min(n.lat, a.lat) && l.lat < Math.max(n.lat, a.lat)) {
                        if (l.lng <= Math.max(n.lng, a.lng)) {
                            if (n.lat == a.lat && l.lng >= Math.min(n.lng, a.lng)) return !0;
                            if (n.lng == a.lng) {
                                if (n.lng == l.lng) return !0;
                                ++s
                            } else {
                                var p = (l.lat - n.lat) * (a.lng - n.lng) / (a.lat - n.lat) + n.lng;
                                if (Math.abs(l.lng - p) < 2e-10) return !0;
                                l.lng < p && ++s
                            }
                        }
                    } else if (l.lat == a.lat && l.lng <= a.lng) {
                        var c = o[(h + 1) % r];
                        l.lat >= Math.min(n.lat, c.lat) && l.lat <= Math.max(n.lat, c.lat) ? ++s : s += 2
                    }
                    n = a
                }
            }
            return s % 2 != 0
        }, t.prototype = new BMap.Overlay, t.prototype.dispatchEvent = n.lang.Class.prototype.dispatchEvent, t.prototype.addEventListener = n.lang.Class.prototype.addEventListener, t.prototype.removeEventListener = n.lang.Class.prototype.removeEventListener, t.prototype.initialize = function (t) {
            var e = this;
            this._map = t;
            var i = this.container = document.createElement("div"),
                n = this._map.getSize();
            return i.style.cssText = "position:absolute;background:url(about:blank);cursor:crosshair;width:" + n.width + "px;height:" + n.height + "px", this._map.addEventListener("resize", function (t) {
                e._adjustSize(t.size)
            }), this._map.getPanes().floatPane.appendChild(i), this._bind(), i
        }, t.prototype.draw = function () {
            var t = this._map,
                e = t.pixelToPoint(new BMap.Pixel(0, 0)),
                i = t.pointToOverlayPixel(e);
            this.container.style.left = i.x + "px", this.container.style.top = i.y + "px"
        }, t.prototype.enableEdgeMove = function () {
            this._enableEdgeMove = !0
        }, t.prototype.disableEdgeMove = function () {
            clearInterval(this._edgeMoveTimer), this._enableEdgeMove = !1
        }, t.prototype._bind = function () {
            for (var t = this, e = (this._map, this.container), i = null, a = null, o = function (t) {
                    return {
                        x: t.clientX,
                        y: t.clientY
                    }
                }, r = function (e) {
                    var r = e.type;
                    e = n.getEvent(e), point = t.getDrawPoint(e);
                    var s = function (i) {
                        e.point = point, t.dispatchEvent(e)
                    };
                    "mousedown" == r && (i = o(e));
                    var l = o(e);
                    "click" == r ? Math.abs(l.x - i.x) < 5 && Math.abs(l.y - i.y) < 5 && (a && Math.abs(l.x - a.x) < 5 && Math.abs(l.y - a.y) < 5 ? a = null : (s(), a = o(e))) : s()
                }, s = ["click", "mousedown", "mousemove", "mouseup", "dblclick"], l = s.length; l--;) n.on(e, s[l], r);
            n.on(e, "mousemove", function (e) {
                t._enableEdgeMove && t.mousemoveAction(e)
            })
        }, t.prototype.mousemoveAction = function (t) {
            var e = this._map,
                i = this,
                n = e.pointToPixel(this.getDrawPoint(t)),
                a = function (t) {
                    var e = t.clientX,
                        i = t.clientY;
                    return t.changedTouches && (e = t.changedTouches[0].clientX, i = t.changedTouches[0].clientY), new BMap.Pixel(e, i)
                }(t),
                o = a.x - n.x,
                r = a.y - n.y;
            n = new BMap.Pixel(a.x - o, a.y - r), this._draggingMovePixel = n;
            e.pixelToPoint(n);
            this._panByX = this._panByY = 0, n.x <= 20 || n.x >= e.width - 20 || n.y <= 50 || n.y >= e.height - 10 ? (n.x <= 20 ? this._panByX = 8 : n.x >= e.width - 20 && (this._panByX = -8), n.y <= 50 ? this._panByY = 8 : n.y >= e.height - 10 && (this._panByY = -8), this._edgeMoveTimer || (this._edgeMoveTimer = setInterval(function () {
                e.panBy(i._panByX, i._panByY, {
                    noAnimation: !0
                })
            }, 30))) : this._edgeMoveTimer && (clearInterval(this._edgeMoveTimer), this._edgeMoveTimer = null)
        }, t.prototype._adjustSize = function (t) {
            this.container.style.width = t.width + "px", this.container.style.height = t.height + "px"
        }, t.prototype.getDrawPoint = function (t) {
            var e = this._map,
                i = n.getTarget(t),
                a = t.offsetX || t.layerX || 0,
                o = t.offsetY || t.layerY || 0;
            for (1 != i.nodeType && (i = i.parentNode); i && i != e.getContainer();) 0 == i.clientWidth && 0 == i.clientHeight && i.offsetParent && "TD" == i.offsetParent.nodeName || (a += i.offsetLeft || 0, o += i.offsetTop || 0), i = i.offsetParent;
            var r = new BMap.Pixel(a, o);
            return e.pixelToPoint(r)
        }, e.prototype = new BMap.Control, e.prototype.initialize = function (t) {
            var e = this.container = document.createElement("div");
            e.className = "BMapLib_Drawing";
            var i = this.panel = document.createElement("div");
            return i.className = "BMapLib_Drawing_panel", this.drawingToolOptions && this.drawingToolOptions.scale && this._setScale(this.drawingToolOptions.scale), e.appendChild(i), i.innerHTML = this._generalHtml(), this._bind(i), t.getContainer().appendChild(e), e
        }, e.prototype._generalHtml = function (t) {
            var e = {};
            e.hander = "拖动地图", e[BMAP_DRAWING_MARKER] = "画点", e[BMAP_DRAWING_CIRCLE] = "画圆", e[BMAP_DRAWING_POLYLINE] = "画折线", e[BMAP_DRAWING_POLYGON] = "画多边形", e[BMAP_DRAWING_RECTANGLE] = "画矩形";
            var i = function (t, i) {
                    return '<a class="' + t + '" drawingType="' + i + '" href="javascript:void(0)" title="' + e[i] + '" onfocus="this.blur()"></a>'
                },
                n = [];
            n.push(i("BMapLib_box BMapLib_hander", "hander"));
            for (var a = 0, o = this.drawingModes.length; a < o; a++) {
                var r = "BMapLib_box BMapLib_" + this.drawingModes[a];
                a == o - 1 && (r += " BMapLib_last"), n.push(i(r, this.drawingModes[a]))
            }
            return n.join("")
        }, e.prototype._setScale = function (t) {
            var e = -parseInt((390 - 390 * t) / 2, 10),
                i = -parseInt((50 - 50 * t) / 2, 10);
            this.container.style.cssText = ["-moz-transform: scale(" + t + ");", "-o-transform: scale(" + t + ");", "-webkit-transform: scale(" + t + ");", "transform: scale(" + t + ");", "margin-left:" + e + "px;", "margin-top:" + i + "px;", "*margin-left:0px;", "*margin-top:0px;", "margin-left:0px\\0;", "margin-top:0px\\0;", "filter: progid:DXImageTransform.Microsoft.Matrix(", "M11=" + t + ",", "M12=0,", "M21=0,", "M22=" + t + ",", "SizingMethod='auto expand');"].join("")
        }, e.prototype._bind = function (t) {
            var e = this;
            n.on(this.panel, "click", function (t) {
                var i = n.getTarget(t),
                    a = i.getAttribute("drawingType");
                e.setStyleByDrawingMode(a), e._bindEventByDraingMode(a), e.drawingManager.dispatchEvent("setDrawingMode", {
                    drawingType: a
                })
            })
        }, e.prototype.setStyleByDrawingMode = function (t) {
            if (t)
                for (var e = this.panel.getElementsByTagName("a"), i = 0, n = e.length; i < n; i++) {
                    var a = e[i];
                    if (a.getAttribute("drawingType") == t) {
                        var o = "BMapLib_box BMapLib_" + t + "_hover";
                        i == n - 1 && (o += " BMapLib_last"), a.className = o
                    } else a.className = a.className.replace(/_hover/, "")
                }
        }, e.prototype._bindEventByDraingMode = function (t) {
            var e = this.drawingManager;
            "hander" == t ? (e.close(), e._map.enableDoubleClickZoom()) : (e.setDrawingMode(t), e.open(), e._map.disableDoubleClickZoom())
        };
        var o = []
    }(), window.VizToolControl = {}, window.BMap ? (window.VizToolControl = function (t) {
            this._gisMap = t.gisMap, this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT, this.defaultOffset = new BMap.Size(0, 0)
        }, VizToolControl.prototype = new BMap.Control, VizToolControl.prototype.initialize = function (t) {
            var e = this.init(t);
            return t.getContainer().appendChild(e), e
        }) : window.L && (window.VizToolControl = L.Control.extend({
            _gisMap: null,
            includes: L.Mixin.Events,
            onAdd: function (t) {
                return this._gisMap = this.options.gisMap, this._disableRectangleZoom = !this.options.rectangleZoom, this.init(t)
            }
        })), VizToolControl.prototype.init = function (t) {
            function e(e) {
                o.selectFrameOverlay = e, l.find("li.select-frame").removeClass("active");
                for (var i = [], a = o._gisMap.getDrawedLayers(), r = 0; r < a.length; r++) {
                    var s = a[r],
                        h = s.getCanvas(),
                        p = s.getDrawedElements(),
                        c = s.getDrawOptions().shape,
                        u = s.getDrawOptions().fillStyle;
                    if ("bubble" === s.getType() && $(h).is(":visible"))
                        for (var f = 0; f < p.length; f++) {
                            var m = p[f].data,
                                v = window.BMap ? new BMap.Point(m.lng, m.lat) : {
                                    lat: m.lat,
                                    lng: m.lng
                                };
                            n.isPointInPolygon(v, e) && (m.color || (m.color = u), i.push({
                                shape: c,
                                point: m,
                                layerIndex: r
                            }))
                        }
                }
                if (i.length) {
                    var y = $("<div>");
                    i.forEach(function (t) {
                        var e = t.point,
                            i = t.shape,
                            n = e.labels,
                            a = $("<li>");
                        a.attr("data-layerIndex", t.layerIndex), a.append('<i class="icomoon icomoon-' + i + '" style="color: ' + e.color + '">');
                        var o = $('<div class="texts">');
                        if (n && n.length)
                            for (var r = 0; r < n.length; r++) {
                                var s = n[r];
                                o.append("<p><strong>" + s.name + ": </strong>" + s.value + "</p>")
                            } else o.append("<p><strong>经度: </strong>" + formatLngAndLat(e.lng) + "</p>"), o.append("<p><strong>纬度: </strong>" + formatLngAndLat(e.lat) + "</p>");
                        a.append(o), y.append(a)
                    }), g.html(y.html()), o.showSelectResult(), o.panOffset > 0 ? window.BMap ? t.panBy(-(o.panOffset - d.width()), 0) : t.panBy([o.panOffset - d.width(), 0]) : window.BMap ? t.panBy(-d.width(), 0) : t.panBy([d.width(), 0]), o.panOffset = d.width()
                } else o.panOffset > 0 && (window.BMap ? t.panBy(o.panOffset, 0) : t.panBy([o.panOffset, 0]), o.panOffset = 0), o.hideSelectResult();
                l.find("li.tool-select-frame").removeClass("active")
            }
            var i, n, a = bdpChart.language || "zh",
                o = this;
            if (this.map = t, window.BMapLib) {
                i = this.dragBox = new BMapLib.RectangleZoom(t, {
                    followText: "zh" == a ? "选择放大的区域" : "Select the area to zoom in",
                    followTextStyle: {
                        color: "#666",
                        borderColor: "#7ABCE9"
                    },
                    strokeColor: "#7ABCE9",
                    fillColor: "rgba(122, 188, 233, 0.2)",
                    autoClose: !0,
                    onClose: function () {
                        l.find("li.tool-select-zoomin").removeClass("active")
                    }
                });
                var r = {
                    strokeColor: "#7ABCE9",
                    fillColor: "#7ABCE9",
                    strokeWeight: 2,
                    strokeOpacity: 1,
                    fillOpacity: .2,
                    strokeStyle: "solid"
                };
                n = this.drawingManager = new BMapLib.DrawingManager(t, {
                    isOpen: !1,
                    drawingMode: "polygon",
                    enableDrawingTool: !1,
                    polygonOptions: r,
                    followText: "zh" == a ? "双击完成框选" : "Double click to complete selection",
                    followTextStyle: {
                        color: "#666",
                        borderColor: "#7ABCE9"
                    }
                }), n.addEventListener("overlaycomplete", function (t) {
                    e(t.overlay), n.close()
                })
            } else window.L && (this._disableRectangleZoom ? this.map.boxZoom.disable() : i = this.dragBox = new L.RectangleZoom(t, {
                autoClose: !0,
                onClose: function () {
                    l.find("li.tool-select-zoomin").removeClass("active")
                }
            }), n = this.drawingManager = new L.DrawingManager(t, {
                drawingMode: "polygon",
                autoClose: !0,
                onFinishDrawing: function (t) {
                    e(t)
                },
                onClose: function () {
                    l.find("li.select-frame").removeClass("active")
                }
            }));
            var s = $("<div></div>");
            s.addClass("BMap_viztools");
            for (var l = this.$toolList = $('<ul class="tools-list"></ul>'), h = ["select-frame", "select-zoomin", "layer-ctrl"], p = {
                    "select-frame": "zh" == a ? "框选" : "Select Frame",
                    "select-zoomin": "zh" == a ? "放大" : "Select Zoomin",
                    "layer-ctrl": "zh" == a ? "图层控制" : "Layer Control"
                }, c = 0; c < h.length; c++) {
                var u = $('<li><i class="bdp-icon"></i></li>');
                u.attr("title", p[h[c]]), u.attr("data-action", c), u.addClass("tool-" + h[c]), this._disableRectangleZoom && "select-zoomin" == h[c] && u.css("display", "none"), l.append(u)
            }
            l.on("click", "li", function (t) {
                var e = $(this).data("action");
                $(this).siblings(".active:not(.tool-layer-ctrl)").removeClass("active");
                var a = $(this).hasClass("active");
                switch (e) {
                    case 0:
                        o.clearFrameSelect(), a ? (n && n.close(), $(this).removeClass("active")) : (o._gisMap.pauseTimeAnimation(), n && n.open(), $(this).addClass("active")), i && i.close();
                        break;
                    case 1:
                        a ? (i && i.close(), $(this).removeClass("active")) : (o._gisMap.pauseTimeAnimation(), i && i.open(), $(this).addClass("active")), n && n.close();
                        break;
                    case 2:
                        a ? ($(this).removeClass("active"), o._gisMap.hideLegend()) : ($(this).addClass("active"), o._gisMap.showLegend()), n && n.close(), i && i.close()
                }
                return t.stopPropagation(), !1
            });
            var d = this.$selectResultBlock = $('<div class="select-frame-result"><h4>' + ("zh" == a ? "所选信息" : "Information selected") + ' <span class="close"><i class="bdp-icon"></i></span></h4></div>'),
                g = $("<ul></ul>");
            return d.append(g), d.on("click", ".close", function () {
                o.clearFrameSelect()
            }), s.on("mouseenter", ".tools-list", function (e) {
                return window.L && t.doubleClickZoom.disable(), e.stopPropagation(), !1
            }), s.on("mouseleave", ".tools-list", function (e) {
                return window.L && t.doubleClickZoom.enable(), e.stopPropagation(), !1
            }), s.on("mouseenter", ".select-frame-result", function (e) {
                return window.BMap ? t.disableScrollWheelZoom() : (t.scrollWheelZoom.disable(), t.doubleClickZoom.disable()), e.stopPropagation(), !1
            }), s.on("mouseleave", ".select-frame-result", function (e) {
                return window.BMap ? t.enableScrollWheelZoom() : (t.scrollWheelZoom.enable(), t.doubleClickZoom.enable()), e.stopPropagation(), !1
            }), s.append(d), s.append($('<div style="float:right;">').append(l)), s.get(0)
        }, VizToolControl.prototype.reset = function () {
            this.panOffset > 0 && (window.BMap ? this.map.panBy(this.panOffset, 0) : this.map.panBy([this.panOffset, 0]), this.panOffset = 0), this.drawingManager && this.drawingManager.close(), this.dragBox && this.dragBox.close(), this.clearFrameSelect(), this.$toolList.find("li.active:not(.tool-layer-ctrl)").removeClass("active")
        }, VizToolControl.prototype.toggleLayerCtrl = function (t) {
            void 0 === t && (t = !this.$toolList.find("li.tool-layer-ctrl").hasClass("active")), t ? this.$toolList.find("li.tool-layer-ctrl").addClass("active") : this.$toolList.find("li.tool-layer-ctrl").removeClass("active")
        }, VizToolControl.prototype.showSelectResult = function () {
            this.$selectResultBlock.addClass("show"), this._gisMap.legendControl && (window.BMap ? this._gisMap.legendControl.setOffset(new BMap.Size(this.$selectResultBlock.width(), 0)) : $(this._gisMap.legendControl.getContainer()).css("right", this.$selectResultBlock.width()))
        }, VizToolControl.prototype.hideSelectResult = function () {
            this.$selectResultBlock.removeClass("show"), this._gisMap.legendControl && (window.BMap ? this._gisMap.legendControl.setOffset(new BMap.Size(0, 0)) : $(this._gisMap.legendControl.getContainer()).css("right", ""))
        }, VizToolControl.prototype.clearFrameSelect = function () {
            this.hideSelectResult(), this.selectFrameOverlay && (window.BMap ? this.map.removeOverlay(this.selectFrameOverlay) : this.map.removeLayer(this.selectFrameOverlay), this.selectFrameOverlay = null), this.$toolList.find("li.tool-select-frame").removeClass("active")
        }, VizToolControl.prototype.hideSelectResultInLayer = function (t) {
            this.$selectResultBlock && this.$selectResultBlock.find("li[data-layerIndex=" + t + "]").hide()
        }, VizToolControl.prototype.showSelectResultInLayer = function (t) {
            this.$selectResultBlock && this.$selectResultBlock.find("li[data-layerIndex=" + t + "]").show()
        }, window.LabelControl = function (t) {
            this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT, this.defaultOffset = new BMap.Size(150, 0), this.content = t
        }, LabelControl.prototype = new BMap.Control, LabelControl.prototype.initialize = function (t) {
            var e = $("<div>").addClass("bdp-gislabel-control").html(this.content);
            this.$container = e;
            var i = e.get(0);
            return t.getContainer().appendChild(i), i
        }, LabelControl.prototype.setContent = function (t) {
            this.$container.html(t)
        }, LabelControl.prototype.reset = function () {
            this.$container.html("")
        }, LabelControl.prototype.show = function () {
            this.$container.show()
        }, window.LegendControl = {}, window.BMap ? (window.LegendControl = function (t) {
            this.defaultAnchor = BMAP_ANCHOR_TOP_RIGHT, this.defaultOffset = new BMap.Size(0, 0), this._gisMap = t.gisMap
        }, LegendControl.prototype = new BMap.Control, LegendControl.prototype.initialize = function (t) {
            var e = this.init(t);
            return t.getContainer().appendChild(e), e
        }) : window.L && (window.LegendControl = L.Control.extend({
            _gisMap: null,
            includes: L.Mixin.Events,
            onAdd: function (t) {
                return this._gisMap = this.options.gisMap, this.init(t)
            }
        })), LegendControl.prototype.init = function (t) {
            var e = (bdpChart.language, this);
            this.map = t;
            var i = $("<div>").addClass("BMap_legend"),
                n = $("<ul>").addClass("layer-list");
            return i.append(n), this.$container = i, this.initContent(), i.on("mouseenter", "ul.layer-list", function (e) {
                window.BMap ? t.disableScrollWheelZoom() : (t.scrollWheelZoom.disable(), t.doubleClickZoom.disable())
            }), i.on("mouseleave", "ul.layer-list", function (e) {
                window.BMap ? t.enableScrollWheelZoom() : (t.scrollWheelZoom.enable(), t.doubleClickZoom.enable())
            }), i.on("click", "li.layer-item", function (t) {
                var i = $(this).index();
                return $(this).hasClass("invisible-layer") ? e._gisMap.showLayer(i) : e._gisMap.hideLayer(i), $(this).toggleClass("invisible-layer"), t.stopPropagation(), !1
            }), i.get(0)
        }, LegendControl.prototype.initContent = function () {
            var t = this._gisMap.layerInfo || [],
                e = this.$container.find(".layer-list");
            e.html(""), t.length < 2 ? (this.$container.hide(), this._gisMap.vizToolControl && this._gisMap.vizToolControl.toggleLayerCtrl(!1)) : (this.$container.show(), this._gisMap.vizToolControl && this._gisMap.vizToolControl.toggleLayerCtrl(!0));
            for (var i = 0, n = t.length; i < n; i++) {
                var a = t[i];
                if (!$.isEmptyObject(a) && !a.invisible) {
                    var o = a.layer_name,
                        r = a.type,
                        s = $("<li>").addClass("layer-item"),
                        l = $("<div>").addClass("layer-title"),
                        h = $("<ul>").addClass("layer-legends"),
                        p = [],
                        c = r;
                    switch (r) {
                        case "heatmap":
                            p.push({
                                type: "gradient",
                                gradient: [{
                                    pos: "start",
                                    color: "blue"
                                }, {
                                    pos: "60%",
                                    color: "cyan"
                                }, {
                                    pos: "70%",
                                    color: "lime"
                                }, {
                                    pos: "80%",
                                    color: "yellow"
                                }, {
                                    pos: "end",
                                    color: "red"
                                }],
                                title: a.y[0] ? a.y[0].nick_name || a.y[0].name : "数值"
                            });
                            break;
                        case "massive":
                        case "bubble":
                            var u, d;
                            "massive" === r ? (u = "#94afdf", d = "circle") : (u = "rgb(238, 75, 75)", "ripple" === (d = c = a.bubble_symbol) && (d = "circle", u = "#5182e4"));
                            var g = a.color_setting;
                            if (g) {
                                if (1 === g.mode) g.range_color = g.range_color || {
                                    start_color: "red",
                                    end_color: "blue"
                                }, p.push({
                                    type: "gradient",
                                    gradient: [{
                                        pos: "start",
                                        color: g.range_color.start_color
                                    }, {
                                        pos: "end",
                                        color: g.range_color.end_color
                                    }],
                                    title: g.field[0].nick_name || g.field[0].name
                                });
                                else if (0 === g.mode) {
                                    var f = g.enum_color_map;
                                    Object.keys(f).forEach(function (t) {
                                        p.push({
                                            type: "enum",
                                            color: f[t].color,
                                            title: t,
                                            shape: d
                                        })
                                    })
                                }
                            } else {
                                var m = a.y[0];
                                p.push({
                                    type: "enum",
                                    color: u,
                                    title: m ? m.nick_name || m.name : "数值",
                                    shape: d
                                })
                            }
                            break;
                        case "graph":
                            c = a.graph_type, a.y.forEach(function (t) {
                                p.push({
                                    type: "enum",
                                    color: t.series_color,
                                    title: t.nick_name || t.name,
                                    shape: "circle"
                                })
                            })
                    }
                    l.append("<i class ='icomoon icomoon-" + c + "'></i>").append("<span title = '" + o + "' style='pointer-events: auto' class='nowrap'>" + o + "</span>"), s.append(l), p.length > 0 && a.lng.length > 0 && a.lat.length > 0 && (p.forEach(function (t, e) {
                        var i = $("<li>").attr("style", "pointer-events : auto");
                        if ("gradient" === t.type) {
                            var n = "left";
                            n = t.gradient.reduce(function (t, e) {
                                return "end" !== e.pos && "start" !== e.pos || (e.pos = ""), t + ", " + e.color + " " + e.pos
                            }, n), i.append("<div class='linear-gradient-legend' style=' background:-webkit-linear-gradient(" + n + ")'></div>").append("<span title = '" + t.title + "'  class='nowrap'>" + t.title + "</span>")
                        } else "enum" === t.type && i.append("<i class='icomoon icomoon-" + t.shape + "' style='color:" + t.color + "'></i>").append("<span title = '" + t.title + "' class='nowrap'>" + t.title + "</span>");
                        h.append(i)
                    }), s.append(h)), e.append(s)
                }
            }
        }, LegendControl.prototype.reset = function () {
            this.initContent()
        }, LegendControl.prototype.show = function () {
            this.$container.show()
        }, LegendControl.prototype.hide = function () {
            this.$container.hide()
        },
        function () {
            "use strict";

            function Class() {
                this.__listeners = {}
            }

            function DataRange(t) {
                Class.call(this), this.initOptions({
                    min: 0,
                    max: 0
                }), this.set("layer", t), this.bindTo("data", t), this.bindTo("drawOptions", t), this.bindTo("drawType", t)
            }

            function Animation(t) {
                var e = {
                    duration: 1e3,
                    fps: 30,
                    delay: 0,
                    transition: Transitions.linear,
                    ticks: 0,
                    onPause: function () {},
                    onStop: function () {}
                };
                if (this._anis = [], t)
                    for (var i in t) e[i] = t[i];
                if (this._opts = e, this._runTime = 0, "string" == typeof this._opts.transition && "tick" !== this._opts.transition && (this._opts.transition = Transitions[this._opts.transition] || Transitions.linear), isNumber(e.delay)) {
                    var n = this;
                    requestTimeout(function () {
                        n.start()
                    }, e.delay)
                } else e.delay != Animation.INFINITE && this.start()
            }

            function getCurrentTime() {
                return (new Date).getTime()
            }

            function isNumber(t) {
                return "number" == typeof t
            }

            function SizeDataRange() {
                DataRange.call(this)
            }

            function Mapv(t) {
                Class.call(this), this.initOptions($.extend({
                    useLeaflet: !1,
                    map: null,
                    coordType: "bd09ll",
                    drawTypeControl: !1,
                    drawTypeControlOptions: {
                        a: 1
                    },
                    click: null,
                    hover: null,
                    tap: null
                }, t)), this._layers = [], this._topLayer = null, this._container = this.getMap().getContainer(), this._initEvents(), this._fixPinchZoom(), this.notify("drawTypeControl")
            }

            function CanvasLayer(t) {
                this.options = t || {}, this.paneName = this.options.paneName || "mapPane", this.zIndex = this.options.zIndex || 0, this.context = this.options.context || "2d", this._map = t.map, this.show()
            }

            function Layer(t) {
                Class.call(this), this._drawer = {}, this.initOptions($.extend({
                    ctx: null,
                    animationCtx: null,
                    mapv: null,
                    paneName: "mapPane",
                    map: null,
                    context: "2d",
                    data: [],
                    dataType: "point",
                    animationOptions: {
                        size: 5
                    },
                    coordType: "bd09ll",
                    drawType: "simple",
                    animation: !1,
                    geometry: null,
                    dataRangeControl: !1,
                    zIndex: 1,
                    forceDrawEverything: !1,
                    preserveDrawingBuffer: !0
                }, t)), this._highlightElement = null, this._id = Math.random(), this.notify("data"), this.notify("mapv")
            }

            function LeafletLayer(t) {
                this.options = t || {}, this.paneName = this.options.paneName || "mapPane", this.zIndex = this.options.zIndex || 0, this.context = this.options.context || "2d", this._map = t.map
            }

            function setStyle(t, e) {
                var i = "";
                for (var n in e) i += n + ": " + e[n] + ";";
                t.style.cssText = i
            }

            function Drawer(t) {
                Class.call(this), this.mapv = t._mapv, this.initOptions({
                    layer: t,
                    map: t.getMap(),
                    ctx: null,
                    mapv: null,
                    animationOptions: {},
                    drawOptions: {
                        size: 2
                    },
                    highlightElement: null
                }), this._elementPaths = [], this.dataRange = new DataRange(t), this.bindTo("ctx", t), this.bindTo("animationOptions", t), this.bindTo("drawOptions", t), this.bindTo("mapv", t), this.bindTo("map", t), this.bindTo("highlightElement", t)
            }

            function SimpleDrawer() {
                Drawer.apply(this, arguments)
            }

            function GraphDrawer() {
                Drawer.apply(this, arguments)
            }

            function HeatmapDrawer() {
                this.masker = {}, Drawer.apply(this, arguments), this._max = 20, this._data = []
            }
            var Mapv, util = {
                    isPlainObject: function (t) {
                        var e, i = {},
                            n = i.hasOwnProperty;
                        if (!t || "object" != typeof t || t.nodeType) return !1;
                        var a = !n.call(t, "constructor"),
                            o = !n.call(t.constructor.prototype, "isPrototypeOf");
                        if (t.constructor && a && o) return !1;
                        for (e in t);
                        return void 0 === e || n.call(t, e)
                    },
                    extend: function (t, e) {
                        var i, n = Object.prototype.toString;
                        t = t || {};
                        for (i in e) e.hasOwnProperty(i) && (util.isPlainObject(e[i]) ? (t[i] = "[object Array]" === n.call(e[i]) ? [] : {}, util.extend(t[i], e[i]), t[i] = e[i]) : t[i] = e[i]);
                        return t
                    },
                    copy: function (t) {
                        return this.extend({}, t)
                    },
                    inherits: function (t, e) {
                        var i, n, a = t.prototype,
                            o = new Function;
                        o.prototype = e.prototype, n = t.prototype = new o;
                        for (i in a) n[i] = a[i];
                        t.prototype.constructor = t, t.superClass = e.prototype
                    },
                    addCssByStyle: function (t) {
                        var e = document,
                            i = e.createElement("style");
                        if (i.setAttribute("type", "text/css"), i.styleSheet) i.styleSheet.cssText = t;
                        else {
                            var n = e.createTextNode(t);
                            i.appendChild(n)
                        }
                        var a = e.getElementsByTagName("head");
                        a.length ? a[0].appendChild(i) : e.documentElement.appendChild(i)
                    },
                    getGeoCenter: function (t) {
                        for (var e = t[0][0], i = t[0][1], n = t[0][0], a = t[0][1], o = 1; o < t.length; o++) e = Math.min(e, t[o][0]), n = Math.max(n, t[o][0]), i = Math.min(i, t[o][1]), a = Math.max(a, t[o][1]);
                        return [e + (n - e) / 2, i + (a - i) / 2]
                    },
                    getPixelRatio: function (t) {
                        var e = t.backingStorePixelRatio || t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
                        return (window.devicePixelRatio || 1) / e
                    },
                    dateAdd: function (t, e, i) {
                        e = parseInt(e);
                        var n, a;
                        switch ("number" == typeof t && (n = new Date(t), a = !0), i) {
                            case "year":
                                n.setFullYear(n.getFullYear() + e);
                                break;
                            case "quarter":
                                n.setMonth(n.getMonth() + 3 * e);
                                break;
                            case "month":
                                n.setMonth(n.getMonth() + e);
                                break;
                            case "week":
                                n.setDate(n.getDate() + 7 * e);
                                break;
                            case "day":
                                n.setDate(n.getDate() + e);
                                break;
                            case "hour":
                                n.setHours(n.getHours() + e);
                                break;
                            case "minute":
                                n.setMinutes(n.getMinutes() + e);
                                break;
                            case "second":
                                n.setSeconds(n.getSeconds() + e);
                                break;
                            default:
                                n.setDate(d.getDate() + e)
                        }
                        return a ? +n : n
                    }
                },
                GeoUtil = function () {
                    function t(t) {
                        var e = t.lng,
                            i = t.lat,
                            n = Math.sqrt(e * e + i * i) + 2e-5 * Math.sin(i * u),
                            a = Math.atan2(i, e) + 3e-6 * Math.cos(e * u);
                        return {
                            lng: n * Math.cos(a) + .0065,
                            lat: n * Math.sin(a) + .006
                        }
                    }

                    function e(t) {
                        var e = t.lng - .0065,
                            i = t.lat - .006,
                            n = Math.sqrt(e * e + i * i) - 2e-5 * Math.sin(i * u),
                            a = Math.atan2(i, e) - 3e-6 * Math.cos(e * u);
                        return {
                            lng: n * Math.cos(a),
                            lat: n * Math.sin(a)
                        }
                    }

                    function i(t) {
                        var e = t.lat,
                            i = t.lng;
                        if (l(i, e)) {
                            var n = h(i - 105, e - 35),
                                a = p(i - 105, e - 35),
                                o = e / 180 * d,
                                r = Math.sin(o);
                            r = 1 - f * r * r;
                            var s = Math.sqrt(r);
                            return n = 180 * n / (g * (1 - f) / (r * s) * d), a = 180 * a / (g / s * Math.cos(o) * d), {
                                lng: i + a,
                                lat: e + n
                            }
                        }
                        return {
                            lng: i,
                            lat: e
                        }
                    }

                    function n(t) {
                        var e = +t.lat,
                            i = +t.lng;
                        if (l(i, e)) {
                            var n = h(i - 105, e - 35),
                                a = p(i - 105, e - 35),
                                o = e / 180 * d,
                                r = Math.sin(o);
                            r = 1 - f * r * r;
                            var s = Math.sqrt(r);
                            n = 180 * n / (g * (1 - f) / (r * s) * d), a = 180 * a / (g / s * Math.cos(o) * d);
                            return {
                                lng: 2 * i - (i + a),
                                lat: 2 * e - (e + n)
                            }
                        }
                        return t
                    }

                    function a(e) {
                        return t(i(e))
                    }

                    function o(t) {
                        return n(e(t))
                    }

                    function r(t, e, i, n) {
                        this.west = Math.min(t, i), this.north = Math.max(e, n), this.east = Math.max(t, i), this.south = Math.min(e, n)
                    }

                    function s(t, e, i) {
                        return t.west <= e && t.east >= e && t.north >= i && t.south <= i
                    }

                    function l(t, e) {
                        for (var i = 0; i < m.length; i++)
                            if (s(m[i], t, e)) {
                                for (var n = 0; n < v.length; n++)
                                    if (s(v[n], t, e)) return !1;
                                return !0
                            }
                        return !1
                    }

                    function h(t, e) {
                        var i = 2 * t - 100 + 3 * e + .2 * e * e + .1 * t * e + .2 * Math.sqrt(Math.abs(t));
                        return i += 2 * (20 * Math.sin(6 * t * d) + 20 * Math.sin(2 * t * d)) / 3, i += 2 * (20 * Math.sin(e * d) + 40 * Math.sin(e / 3 * d)) / 3, i += 2 * (160 * Math.sin(e / 12 * d) + 320 * Math.sin(e * d / 30)) / 3
                    }

                    function p(t, e) {
                        var i = 300 + t + 2 * e + .1 * t * t + .1 * t * e + .1 * Math.sqrt(Math.abs(t));
                        return i += 2 * (20 * Math.sin(6 * t * d) + 20 * Math.sin(2 * t * d)) / 3, i += 2 * (20 * Math.sin(t * d) + 40 * Math.sin(t / 3 * d)) / 3, i += 2 * (150 * Math.sin(t / 12 * d) + 300 * Math.sin(t / 30 * d)) / 3
                    }

                    function c(t, e, i) {
                        return e == i ? t : y[e + "_to_" + i](t)
                    }
                    var u = 52.35987755982988,
                        d = 3.141592653589793,
                        g = 6378245,
                        f = .006693421622965943,
                        m = [new r(79.4462, 49.2204, 96.33, 42.8899), new r(109.6872, 54.1415, 135.0002, 39.3742), new r(73.1246, 42.8899, 124.143255, 29.5297), new r(82.9684, 29.5297, 97.0352, 26.7186), new r(97.0253, 29.5297, 124.367395, 20.414096), new r(107.975793, 20.414096, 111.744104, 17.871542)],
                        v = [new r(119.921265, 25.398623, 122.497559, 21.785006), new r(101.8652, 22.284, 106.665, 20.0988), new r(106.4525, 21.5422, 108.051, 20.4878), new r(109.0323, 55.8175, 119.127, 50.3257), new r(127.4568, 55.8175, 137.0227, 49.5574), new r(131.2662, 44.8922, 137.0227, 42.5692)],
                        y = {
                            gcj02_to_bd09ll: t,
                            bd09ll_to_gcj02: e,
                            wgs84_to_gcj02: i,
                            gcj02_to_wgs84: n,
                            wgs84_to_bd09ll: a,
                            bd09ll_to_wgs84: o
                        };
                    return {
                        transform: c,
                        isInChina: l
                    }
                }(),
                MVCObject;
            ! function () {
                function t(t, e) {
                    var i = this;
                    i.target = t, i.targetKey = e
                }
                t.prototype.transform = function (t, e) {
                    var i = this;
                    return i.from = t, i.to = e, i.target.notify(i.targetKey), i
                }, MVCObject = function () {
                    function e(t) {
                        return t.substr(0, 1).toUpperCase() + t.substr(1)
                    }

                    function i(t) {
                        return t[d] || (t[d] = ++p)
                    }

                    function n(t) {
                        return "_" + t
                    }

                    function a(t) {
                        return l.hasOwnProperty(t) ? l[t] : l[t] = "get" + e(t)
                    }

                    function o(t) {
                        return h.hasOwnProperty(t) ? h[t] : h[t] = "set" + e(t)
                    }

                    function r(t, e) {
                        var i = e + "_changed";
                        if (t[i] ? t[i]() : "function" == typeof t.changed && t.changed(e), t[c] && t[c][e]) {
                            var n, a, o = t[c][e];
                            for (a in o) o.hasOwnProperty(a) && (n = o[a], r(n.target, n.targetKey))
                        }
                    }

                    function s() {}
                    var l = {},
                        h = {},
                        p = 0,
                        c = "__bindings__",
                        u = "__accessors__",
                        d = "__uid__",
                        g = s.prototype;
                    return g.get = function (t) {
                        var e = this;
                        if (e[u] && e[u].hasOwnProperty(t)) {
                            var i, o = e[u][t],
                                r = o.targetKey,
                                s = o.target,
                                l = a(r);
                            i = s[l] ? s[l]() : s.get(r), o.to && (i = o.to(i))
                        } else e.hasOwnProperty(n(t)) && (i = e[n(t)]);
                        return i
                    }, g.set = function (t, e) {
                        var i = this;
                        if (i[u] && i[u].hasOwnProperty(t)) {
                            var a = i[u][t],
                                s = a.targetKey,
                                l = a.target,
                                h = o(s);
                            a.from && (e = a.from(e)), l[h] ? l[h](e) : l.set(s, e)
                        } else this[n(t)] = e, r(i, t);
                        return i
                    }, g.changed = function () {}, g.notify = function (t) {
                        var e = this;
                        if (e[u] && e[u].hasOwnProperty(t)) {
                            var i = e[u][t],
                                n = i.targetKey;
                            i.target.notify(n)
                        } else r(e, t);
                        return e
                    }, g.setValues = function (t) {
                        var e, i, n, a = this;
                        for (e in t) t.hasOwnProperty(e) && (n = t[e], i = o(e), a[i] ? a[i](n) : a.set(e, n));
                        return a
                    }, g.setOptions = g.setValues, g.bindTo = function (e, n, a, o) {
                        a || (a = e);
                        var s = this;
                        s.unbind(e), s[u] || (s[u] = {}), n[c] || (n[c] = {}), n[c][a] || (n[c][a] = {});
                        var l = new t(s, e),
                            h = new t(n, a);
                        return s[u][e] = h, n[c][a][i(s)] = l, o || r(s, e), h
                    }, g.unbind = function (t) {
                        var e = this;
                        if (e[u]) {
                            var a = e[u][t];
                            if (a) {
                                var o = a.target,
                                    r = a.targetKey;
                                e[n(t)] = e.get(t), delete o[c][r][i(e)], delete e[u][t]
                            }
                        }
                        return e
                    }, g.unbindAll = function () {
                        var t = this;
                        if (t[u]) {
                            var e = t[u];
                            for (var i in e) e.hasOwnProperty(i) && t.unbind(i)
                        }
                        return t
                    }, g.initOptions = function (t) {
                        for (var e in t) this[a(e)] = function (t) {
                            return function () {
                                return this.get(t)
                            }
                        }(e), this[o(e)] = function (t) {
                            return function (e) {
                                this.set(t, e)
                            }
                        }(e), this[n(e)] = t[e]
                    }, s
                }()
            }(), Mapv.MVCObject = MVCObject, util.inherits(Class, MVCObject), Class.prototype.addEventListener = function (t, e) {
                return "object" != typeof this.__listeners[t] && (this.__listeners[t] = []), this.__listeners[t].push(e), this
            }, Class.prototype.removeEventListener = function (t, e) {
                var i = this.__listeners[t];
                if (!i) return !1;
                for (var n = i.length; n >= 0; n--) i[n] === e && i.splice(n, 1);
                return this
            }, Class.prototype.dispatchEvent = function (t, e) {
                var i = util.extend({}, e),
                    n = this.__listeners[t];
                if (!n) return !1;
                for (var a = n.length - 1; a >= 0; a--) n[a].call(this, i);
                return this
            }, Class.prototype.dispose = function () {}, util.inherits(DataRange, Class), util.extend(DataRange.prototype, {
                defaultGradient: {
                    .4: "blue",
                    .6: "cyan",
                    .7: "lime",
                    .8: "yellow",
                    "1.0": "red"
                },
                colors: ["rgba(17, 102, 252, 0.8)", "rgba(52, 139, 251, 0.8)", "rgba(110, 176, 253, 0.8)", "rgba(255, 241, 193, 0.8)", "rgba(255, 146, 149, 0.8)", "rgba(253, 98, 104, 0.8)", "rgba(255, 0, 0, 0.8)", "rgba(255, 51, 61, 0.8)"],
                getSize: function (t) {
                    for (var e = 1, i = this.splitList, n = 0; n < i.length; n++)
                        if ((void 0 === i[n].start || void 0 !== i[n].start && t >= i[n].start) && (void 0 === i[n].end || void 0 !== i[n].end && t < i[n].end)) {
                            e = i[n].size;
                            break
                        }
                    return e
                },
                getScale: function (t) {
                    return this._linearScale || (this._linearScale = this.generateLinearScale()), this._linearScale(t)
                },
                getColorByRange: function (t) {
                    for (var e = "rgba(50, 50, 255, 1)", i = this.splitList, n = 0; n < i.length; n++)
                        if ((void 0 === i[n].start || void 0 !== i[n].start && t >= i[n].start) && (void 0 === i[n].end || void 0 !== i[n].end && t < i[n].end)) {
                            e = i[n].color;
                            break
                        }
                    return e
                },
                data_changed: function () {
                    var t = this.get("data");
                    if (t && t.length > 0) {
                        this._min = t[0].count, this._max = t[0].count;
                        for (var e = 0; e < t.length; e++) this._max = Math.max(this._max, t[e].count), this._min = Math.min(this._min, t[e].count)
                    }
                },
                drawType_changed: function () {
                    this.update()
                },
                drawOptions_changed: function () {
                    this.update()
                },
                update: function () {
                    var t = this.get("drawOptions");
                    t && t.splitList ? this.splitList = t.splitList : this.generalSplitList(), "category" === this.get("layer").getDrawType() && (t && t.splitList ? this.categorySplitList = t.splitList : this.generalCategorySplitList()), "heatmap" !== this.get("layer").getDrawType() && "density" !== this.get("layer").getDrawType() && "intensity" !== this.get("layer").getDrawType() || this.generalGradient(t.gradient || this.defaultGradient), this.draw()
                },
                draw: function () {
                    this.get("layer").getDataRangeControl() && (this.get("layer").dataRangeControl.show(), "category" === this.get("layer").getDrawType() ? this.get("layer").dataRangeControl.drawCategorySplit(this.categorySplitList, this.get("drawOptions")) : "choropleth" === this.get("layer").getDrawType() ? this.get("layer").dataRangeControl.drawChoroplethSplit(this.splitList, this.get("drawOptions")) : this.get("layer").dataRangeControl.hide())
                },
                generateLinearScale: function () {
                    var t = this.get("drawOptions"),
                        e = t.scaleRange || [.5, 1.5];
                    return function (t) {
                        return this._min == this._max ? 1 : e[0] + (e[1] - e[0]) * (t - this._min) / (this._max - this._min)
                    }
                },
                generalSplitList: function () {
                    var t = this.get("drawOptions"),
                        e = util.extend({
                            minSize: 1,
                            maxSize: 9999,
                            stepSize: 1,
                            splitCount: 7
                        }, t.splitOptions),
                        i = Math.ceil((this._max - this._min) / e.splitCount),
                        n = this._min;
                    this.splitList = [];
                    for (var a = e.minSize; n < this._max;) this.splitList.push({
                        start: n,
                        end: n + i,
                        size: a,
                        color: this.colors[a - 1]
                    }), n += i, a = Math.min(a + e.stepSize, e.maxSize)
                },
                generalCategorySplitList: function () {
                    var t = ["rgba(255, 255, 0, 0.8)", "rgba(253, 98, 104, 0.8)", "rgba(255, 146, 149, 0.8)", "rgba(255, 241, 193, 0.8)", "rgba(110, 176, 253, 0.8)", "rgba(52, 139, 251, 0.8)", "rgba(17, 102, 252, 0.8)"],
                        e = this.get("data");
                    this.categorySplitList = {};
                    for (var i = 0, n = 0; n < e.length && (void 0 === this.categorySplitList[e[n].count] && (this.categorySplitList[e[n].count] = t[i], i++), !(i >= t.length - 1)); n++);
                    this.categorySplitList.other = t[t.length - 1]
                },
                getCategoryColor: function (t) {
                    var e = this.categorySplitList,
                        i = e.other;
                    for (var n in e)
                        if (t == n) {
                            i = e[n];
                            break
                        }
                    return i
                },
                generalGradient: function (t) {
                    var e = document.createElement("canvas"),
                        i = e.getContext("2d"),
                        n = i.createLinearGradient(0, 0, 0, 256);
                    e.width = 1, e.height = 256;
                    for (var a in t) n.addColorStop(a, t[a]);
                    i.fillStyle = n, i.fillRect(0, 0, 1, 256), this._grad = i.getImageData(0, 0, 1, 256).data
                },
                getGradient: function () {
                    return this._grad
                },
                getColorByGradient: function (t) {
                    var e = this.get("max") || 10,
                        i = t / e;
                    return i > 1 && (i = 1), i *= 255, i = parseInt(i, 10), i *= 4, "rgba(" + this._grad[i] + ", " + this._grad[i + 1] + ", " + this._grad[i + 2] + "," + this._grad[i + 3] + ")"
                }
            }), Animation.INFINITE = "INFINITE", Animation.prototype.start = function () {
                "tick" === this._opts.transition ? this._opts.ticks > 0 ? this._tick() : console.error("No ticks to animate") : (this._beginTime = getCurrentTime(), this._endTime = this._beginTime + this._opts.duration, this._launch())
            }, Animation.prototype.add = function (t) {
                this._anis.push(t)
            }, Animation.prototype._tick = function () {
                var t = this;
                if ((!t.schedule || t.schedule < 0) && (t.schedule = 0), t.schedule < t._opts.ticks) t._opts.render && t._opts.render(t.schedule), t.schedule++, t.terminative || (t._timer = requestTimeout(function () {
                    t._tick()
                }, 1e3 / t._opts.fps));
                else if (t._opts.finish && t._opts.finish(), t.schedule = 0, t._anis.length > 0) {
                    var e = t._anis[0];
                    e._anis = [].concat(t._anis.slice(1)), e.start()
                }
            }, Animation.prototype._launch = function () {
                var t = this,
                    e = getCurrentTime() + this._runTime;
                if (e >= t._endTime) {
                    if (t._opts.render && t._opts.render(t._opts.transition(1)), t._opts.finish && t._opts.finish(), t.schedule = 0, t._runTime = 0, t._anis.length > 0) {
                        var i = t._anis[0];
                        i._anis = [].concat(t._anis.slice(1)), i.start()
                    }
                } else t.schedule = t._opts.transition((e - t._beginTime) / t._opts.duration), t._opts.render && t._opts.render(t.schedule), t.terminative || (t._timer = requestTimeout(function () {
                    t._launch()
                }, 1e3 / t._opts.fps))
            }, Animation.prototype.setSchedule = function (t, e) {
                "tick" === this._opts.transition ? (t = parseInt((this._opts.ticks - 1) * t), this.schedule = t) : this._runTime = t * this._opts.duration, this._timer && (clearRequestTimeout(this._timer), this._timer = null), e && this._opts.render && this._opts.render(t)
            }, Animation.prototype.pause = function () {
                if ("tick" !== this._opts.transition) {
                    var t = getCurrentTime();
                    this._runTime += t - this._beginTime
                }
                this._timer && (clearRequestTimeout(this._timer), this._timer = null), this._opts.onPause(this.schedule)
            }, Animation.prototype.stop = function (t) {
                this.terminative = !0;
                for (var e = 0; e < this._anis.length; e++) this._anis[e].stop(), this._anis[e] = null;
                this._anis.length = 0, this._timer && (clearRequestTimeout(this._timer), this._timer = null), this._opts.onStop(this.schedule), "tick" === this._opts.transition ? t && (this.schedule = this._opts.ticks - 1, this._tick()) : (this._runTime = 0, t && (this._endTime = this._beginTime, this._launch()))
            }, Animation.prototype.cancel = function () {
                this._timer && clearRequestTimeout(this._timer), this._endTime = this._beginTime, this.schedule = 0, this._runTime = 0
            }, Animation.prototype.setFinishCallback = function (t) {
                this._anis.length > 0 ? this._anis[this._anis.length - 1]._opts.finish = t : this._opts.finish = t
            };
            var Transitions = {
                linear: function (t) {
                    return t
                },
                reverse: function (t) {
                    return 1 - t
                },
                easeInQuad: function (t) {
                    return t * t
                },
                easeInCubic: function (t) {
                    return Math.pow(t, 3)
                },
                easeOutQuad: function (t) {
                    return -(t * (t - 2))
                },
                easeOutCubic: function (t) {
                    return Math.pow(t - 1, 3) + 1
                },
                easeInOutQuad: function (t) {
                    return t < .5 ? t * t * 2 : -2 * (t - 2) * t - 1
                },
                easeInOutCubic: function (t) {
                    return t < .5 ? 4 * Math.pow(t, 3) : 4 * Math.pow(t - 1, 3) + 1
                },
                easeInOutSine: function (t) {
                    return (1 - Math.cos(Math.PI * t)) / 2
                }
            };
            Transitions["ease-in"] = Transitions.easeInQuad, Transitions["ease-out"] = Transitions.easeOutQuad, util.inherits(SizeDataRange, DataRange), util.extend(SizeDataRange.prototype, {}), window.requestAnimFrame = function () {
                return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (t, e) {
                    window.setTimeout(t, 1e3 / 60)
                }
            }(), window.requestInterval = function (t, e) {
                function i() {
                    (new Date).getTime() - n >= e && (t.call(), n = (new Date).getTime()), a.value = requestAnimFrame(i)
                }
                if (!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame)) return window.setInterval(t, e);
                var n = (new Date).getTime(),
                    a = new Object;
                return a.value = requestAnimFrame(i), a
            }, window.clearRequestInterval = function (t) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(t.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(t.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(t.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(t.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(t.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(t.value) : clearInterval(t)
            }, window.requestTimeout = function (t, e) {
                function i() {
                    (new Date).getTime() - n >= e ? t.call() : a.value = requestAnimFrame(i)
                }
                if (!(window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame)) return window.setTimeout(t, e);
                var n = (new Date).getTime(),
                    a = new Object;
                return a.value = requestAnimFrame(i), a
            }, window.clearRequestTimeout = function (t) {
                window.cancelAnimationFrame ? window.cancelAnimationFrame(t.value) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(t.value) : window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(t.value) : window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(t.value) : window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(t.value) : window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(t.value) : clearTimeout(t)
            }, util.inherits(Mapv, Class), Mapv.prototype._initDrawScale = function () {
                this.Scale = new DrawScale
            }, Mapv.prototype.drawTypeControl_changed = function () {
                this.getDrawTypeControl() ? (this.drawTypeControl || (this.drawTypeControl = new DrawTypeControl({
                    mapv: this
                })), this.getMap().addControl(this.drawTypeControl)) : this.drawTypeControl && this.getMap().removeControl(this.drawTypeControl)
            }, Mapv.prototype.useLeaflet = function () {
                return this.get("useLeaflet")
            }, Mapv.prototype._initEvents = function () {
                var t = this.getMap(),
                    e = this,
                    i = [],
                    n = function (t) {
                        var n = t.target || t.srcElement;
                        if ("tap" === t.type || "canvas" === n.tagName.toLowerCase()) {
                            for (var a = this.getBoundingClientRect(), o = t.clientX - a.left, r = t.clientY - a.top, s = e._layers, l = [], h = e._getHandler(t.type), p = 0; p < s.length; p++) {
                                var c = s[p];
                                if ("webgl" !== c.getContext()) {
                                    var u = c.findElementAtPoint(o, r);
                                    if (u) {
                                        l.push(u.data);
                                        for (var d = 0; d < s.length; d++) p != d && s[d].clearHighlight();
                                        break
                                    }
                                }
                            }
                            "mousemove" == t.type && 0 == i.length && 0 == l.length || (i = l, h && "function" == typeof h && h(l, t))
                        }
                    };
                if (this._getHandler("click")) {
                    t.getContainer().addEventListener("click", n);
                    var a = !1,
                        o = 0,
                        r = 0,
                        s = 0,
                        l = 0;
                    t.addEventListener("touchstart", function (t) {
                        var e = t.targetTouches[0];
                        o = s = e.clientX, r = l = e.clientY, a = !0;
                        var i = this;
                        ! function (t) {
                            setTimeout(function () {
                                if (s == o && !a & l == r) {
                                    var t = document.createEvent("Event");
                                    t.initEvent("tap", !0, !0), t.clientX = s, t.clientY = l, n.call(i.getContainer(), t)
                                }
                            }, 200)
                        }()
                    }), t.addEventListener("touchend", function (t) {
                        a = !1
                    }), t.addEventListener("touchmove", function (t) {
                        var e = t.changedTouches[0];
                        o = e.clientX, r = e.clientY
                    })
                }
                this._getHandler("hover") && (t.getContainer().addEventListener("mousemove", n), t.getContainer().addEventListener("mouseleave", function (t) {
                    var i = e._getHandler("hover");
                    i && "function" == typeof i && i([], t)
                }))
            }, Mapv.prototype._fixPinchZoom = function () {
                var t, e = this.getMap(),
                    i = e.getZoom(),
                    n = e.getContainer().getBoundingClientRect();
                e.addEventListener("touchstart", function (i) {
                    if (2 == i.targetTouches.length) {
                        var a = i.targetTouches,
                            o = {
                                x: (a[0].clientX + a[1].clientX) / 2 - n.left,
                                y: (a[0].clientY + a[1].clientY) / 2 - n.top
                            };
                        t = e.pixelToPoint(o)
                    }
                }), e.addEventListener("touchcancel", function (e) {
                    t = null
                }), e.addEventListener("zoomend", function (n) {
                    var a = e.getZoom();
                    a > i && t && e.panTo(t), i = a, t = null
                })
            }, Mapv.prototype._getHandler = function (t) {
                switch (t) {
                    case "tap":
                    case "click":
                        return this.getClick();
                    case "hover":
                    case "mousemove":
                        return this.getHover();
                    default:
                        return null
                }
            }, Mapv.prototype.pauseTimeAnimation = function () {
                this._layers.forEach(function (t) {
                    t.playControl && t.playControl.pause()
                })
            }, Mapv.prototype.startTimeAnimation = function () {
                this._layers.forEach(function (t) {
                    t.playControl && t.playControl.start()
                })
            }, Mapv.prototype.addLayer = function (t) {
                t && (this._layers.push(t), this._topLayer = t)
            }, Mapv.prototype.clearAllLayer = function () {
                for (var t = this.getMap(); this._layers.length > 0;) {
                    var e = this._layers.shift();
                    this.useLeaflet() ? t.removeLayer(e.canvasLayer) : t.removeOverlay(e.canvasLayer), e.playControl && t.removeControl(e.playControl)
                }
            }, Mapv.prototype.highlight = function (t, e) {
                var i = this._layers[t];
                i && i.highlight(e)
            }, CanvasLayer.prototype = window.BMap ? new BMap.Overlay : {}, CanvasLayer.prototype.initialize = function (t) {
                this._map = t;
                var e = this.canvas = document.createElement("canvas");
                e.style.cssText = "position:absolute;left:0;top:0;z-index:" + this.zIndex + ";", this.adjustSize(), t.getPanes()[this.paneName].appendChild(e);
                var i = this;
                return t.addEventListener("resize", function () {
                    i.adjustSize(), i.draw()
                }), this.canvas
            }, CanvasLayer.prototype.adjustSize = function () {
                var t, e = this._map.getSize(),
                    i = this.canvas;
                t = "webgl" == this.context ? 1 : util.getPixelRatio(i.getContext("2d")), i.width = e.width * t, i.height = e.height * t, i.style.width = e.width + "px", i.style.height = e.height + "px"
            }, CanvasLayer.prototype.draw = function () {
                var t = this._map,
                    e = t.getSize(),
                    i = t.getCenter();
                if (i) {
                    var n = t.pointToOverlayPixel(i);
                    this.canvas.style.left = n.x - e.width / 2 + "px", this.canvas.style.top = n.y - e.height / 2 + "px", this.dispatchEvent("draw"), this.options.update && this.options.update.call(this)
                }
            }, CanvasLayer.prototype.getContainer = function () {
                return this.canvas
            }, CanvasLayer.prototype.show = function () {
                this.canvas || this._map.addOverlay(this), this.canvas.style.display = "block"
            }, CanvasLayer.prototype.hide = function () {
                this.canvas.style.display = "none"
            }, CanvasLayer.prototype.setZIndex = function (t) {
                this.canvas.style.zIndex = t
            }, CanvasLayer.prototype.getZIndex = function () {
                return this.zIndex
            }, util.inherits(Layer, Class), util.extend(Layer.prototype, {
                initialize: function () {
                    if (!this.canvasLayer) {
                        this.bindTo("map", this.getMapv());
                        var t = this;
                        this.getMapv().useLeaflet() ? (this.canvasLayer = new LeafletLayer({
                            map: this.getMap(),
                            context: this.getContext(),
                            zIndex: this.getZIndex(),
                            onUpdate: function () {
                                t.draw()
                            }
                        }), this.getMap().addLayer(this.canvasLayer)) : (this.getMap().addControl(this.dataRangeControl), this.getMap().addControl(this.Scale), this.canvasLayer = new CanvasLayer({
                            map: this.getMap(),
                            context: this.getContext(),
                            zIndex: this.getZIndex(),
                            paneName: this.getPaneName(),
                            update: function () {
                                t.draw()
                            },
                            elementTag: "canvas"
                        }));
                        var e = this.getContext();
                        "webgl" === e ? this.setCtx(this.canvasLayer.getContainer().getContext(e, {
                            preserveDrawingBuffer: this.getPreserveDrawingBuffer()
                        })) : this.setCtx(this.canvasLayer.getContainer().getContext(e))
                    }
                },
                show: function () {
                    this.canvasLayer && this.canvasLayer.show()
                },
                hide: function () {
                    this.canvasLayer && this.canvasLayer.hide()
                },
                draw: function (t) {
                    var e = this.getDataType(),
                        i = this;
                    if (this.getMapv()) {
                        this._getDrawer().clearTimer();
                        var n = this.getCtx();
                        if (!n) return !1;
                        var a = this.getData();
                        if (!a || !a.length) return n.save(), n.clearRect(0, 0, n.canvas.width, n.canvas.height), n.restore(), !0;
                        if (t || this._calculatePixel(), "ripple" === e && !this.getAnimation()) {
                            var o = this;
                            this._rafLoop && window.clearRequestInterval(this._rafLoop);
                            var r = function () {
                                    n.save(), n.clearRect(0, 0, n.canvas.width, n.canvas.height), n.restore(), o._getDrawer().drawMap()
                                },
                                s = 1e3 / (this.getDrawOptions().fps || 30);
                            return o._rafLoop = window.requestInterval(r, s), !0
                        }
                        this.getAnimation() && !this._animationTime || ("2d" == this.getContext() && n.clearRect(0, 0, n.canvas.width, n.canvas.height), this._getDrawer().drawMap(this._curTick));
                        var l = this.getAnimationOptions() || {};
                        if (this.getAnimation() && !this._animationTime) {
                            this._animationTime = !0;
                            var h = function (t, e) {
                                if ("ripple" === i.getDataType()) {
                                    i._rafLoop && window.clearRequestInterval(i._rafLoop);
                                    var a = function () {
                                            n.save(), n.clearRect(0, 0, n.canvas.width, n.canvas.height), n.restore(), i._getDrawer().drawMap(t, e)
                                        },
                                        o = 1e3 / (i.getDrawOptions().fps || 30);
                                    i._rafLoop = window.requestInterval(a, o)
                                } else "2d" == i.getContext() && n.clearRect(0, 0, n.canvas.width, n.canvas.height), i._getDrawer().drawMap(t, e);
                                i._curTick = t
                            };
                            if ("time" == this.getAnimation()) {
                                var p, c;
                                if ("trailline" === e) p = {
                                    duration: l.duration || 1e4,
                                    transition: Transitions[l.transition || "linear"],
                                    fps: l.fps || 30,
                                    render: function (t) {
                                        "2d" == i.getContext() && ("trailline" === e ? (n.globalCompositeOperation = "copy", n.globalAlpha = .85, n.drawImage(n.canvas, 0, 0, n.canvas.width, n.canvas.height), n.restore()) : n.clearRect(0, 0, n.canvas.width, n.canvas.height));
                                        var a = parseInt(parseFloat(i._minTime) + (i._maxTime - i._minTime) * t);
                                        i._getDrawer().drawMap(a), l.render && l.render(a), i.playControl && i.playControl.update(a)
                                    }
                                }, c = {
                                    min: i._minTime,
                                    max: i._maxTime,
                                    tickFormatter: l.tickFormatter || function (t, e) {
                                        return new Date(+t).toLocaleString()
                                    }
                                };
                                else {
                                    p = {
                                        transition: "tick",
                                        ticks: this._ticks.length,
                                        fps: l.fps || 1,
                                        render: function (t) {
                                            var e = i._ticks[t],
                                                n = i._ticks[t + 1] || e + 1;
                                            h(e, n), l.render && l.render(e), i.playControl && i.playControl.update(t)
                                        }
                                    };
                                    var u = l.tickFormatter || function (t, e) {
                                        return new Date(+t).toLocaleString()
                                    };
                                    c = {
                                        min: 0,
                                        max: i._ticks.length - 1,
                                        tickFormatter: function (t, e) {
                                            return u(i._ticks[t], e)
                                        }
                                    }
                                }
                                p = util.extend(p, {
                                    delay: l.delay || Animation.INFINITE,
                                    onStop: l.onStop || function (t) {}
                                }), c = util.extend(c, l.control);
                                var d = this.timeline = new Animation(p);
                                d.setFinishCallback(function () {
                                    l.loop ? setTimeout(function () {
                                        d.start()
                                    }, l.loopInterval || 300) : i.playControl && i.playControl.setState("stop")
                                });
                                var g = this.playControl;
                                g ? g.setOptions(c) : (g = this.playControl = new PlaybackControl(null, c), this.getMap().addControl(g)), g.bindAnimation(d), "trailline" == e ? h(i._minTime) : h(this._ticks[0], this._ticks[1])
                            } else if (this.getDrawOptions().icon) {
                                "2d" == this.getContext() && n.clearRect(0, 0, n.canvas.width, n.canvas.height), this._getDrawer().drawMap();
                                var f = i.canvasLayer.getContainer();
                                f.style.transform = "translate(0, -100)", f.style.opacity = 0;
                                var d = this.timeline = new Animation({
                                    duration: l.duration || 1e3,
                                    fps: l.fps || 30,
                                    delay: l.delay || Animation.INFINITE,
                                    transition: Transitions[l.transition || "linear"],
                                    onStop: l.onStop || function (t) {
                                        console.log("stop", t)
                                    },
                                    render: function (t) {
                                        var e = 100 * -(1 - t),
                                            n = i.canvasLayer.getContainer();
                                        n.style.transform = "translate(0, " + e + "px)", n.style.opacity = t, l.render && l.render(time)
                                    }
                                });
                                d.start()
                            } else {
                                var d = this.timeline = new Animation({
                                    duration: l.duration || 1e3,
                                    fps: l.fps || 30,
                                    delay: l.delay || Animation.INFINITE,
                                    transition: Transitions[l.transition || "linear"],
                                    onStop: l.onStop || function (t) {
                                        console.log("stop", t)
                                    },
                                    render: function (t) {
                                        "2d" == i.getContext() && n.clearRect(0, 0, n.canvas.width, n.canvas.height), i._getDrawer().drawMap(t), l.render && l.render(time)
                                    }
                                });
                                d.start()
                            }
                        }
                        return this.dispatchEvent("draw"), !0
                    }
                },
                mapv_changed: function () {
                    if (!this.getMapv()) return void(this.canvasLayer && this.canvasLayer.hide());
                    this.canvasLayer && this.canvasLayer.show(), this.initialize(), this.draw(), this.getMapv().addLayer(this)
                },
                drawType_changed: function () {
                    this.draw()
                },
                drawOptions_changed: function () {
                    this.draw()
                },
                updateControl: function () {
                    if (this.getMapv()) {
                        var t = this._getDrawer();
                        this.getMap(), t.scale && this.getDataRangeControl() ? (t.scale(this.Scale), this.Scale.show()) : this.Scale.hide(), this.getMapv().OptionalData && this.getMapv().OptionalData.initController(this, this.getDrawType())
                    }
                },
                getDrawedElements: function () {
                    return this._getDrawer().getElementPaths()
                },
                _getDrawer: function _getDrawer() {
                    var drawType = this.getDrawType();
                    if (!this._drawer[drawType]) {
                        var funcName = drawType.replace(/(\w)/, function (t) {
                            return t.toUpperCase()
                        });
                        funcName += "Drawer";
                        var drawer = this._drawer[drawType] = eval("(new " + funcName + "(this))")
                    }
                    return this._drawer[drawType]
                },
                _latLngToPixel: function (t) {
                    var e, i = this.getMapv().useLeaflet(),
                        n = this.getMapv().getMap();
                    return i ? (e = n.latLngToContainerPoint(L.latLng(t.lat, t.lng)), t.px = e.x, t.py = e.y) : (e = n.pointToPixel(new BMap.Point(t.lng, t.lat)), t.px = e.x, t.py = e.y), t
                },
                _calculatePixel: function () {
                    var t = this.getMapv().useLeaflet(),
                        e = this.getMapv().getMap(),
                        i = !t && e.getMapType().getProjection();
                    console.time("parseData");
                    var n = e.getZoom(),
                        a = Math.pow(2, 18 - n),
                        o = t ? e.latLngToContainerPoint(e.getCenter()) : i.lngLatToPoint(e.getCenter());
                    t || new BMap.Pixel(o.x - e.getSize().width / 2 * a, o.y + e.getSize().height / 2 * a);
                    for (var r = this.getData(), e = this.getMap(), s = "trailline" === this.getDataType(), l = 0; l < r.length; l++)
                        if (r[l].lng && r[l].lat && !r[l].x && !r[l].y) this._latLngToPixel(r[l]);
                        else if (r[l].geo) {
                        for (var h = [], p = 0; p < r[l].geo.length; p++) {
                            var c = parseFloat(r[l].geo[p][3]),
                                u = this._latLngToPixel({
                                    lng: r[l].geo[p][0],
                                    lat: r[l].geo[p][1]
                                });
                            h.push([u.px, u.py, parseFloat(r[l].geo[p][2]), c])
                        }
                        if (r[l].pgeo = h, s) {
                            for (var d = [], p = 0; p < h.length - 1; p++) {
                                var g = h[p],
                                    f = h[p + 1],
                                    m = {
                                        px: f[0] - g[0],
                                        py: f[1] - g[1],
                                        t: f[2] - g[2]
                                    },
                                    v = Math.sqrt(Math.pow(m.px, 2) + Math.pow(m.py, 2)),
                                    y = 1 / v;
                                if (d.push(g), !isNaN(y) && y < 1)
                                    for (var _ = Math.min(1 / y - 1, 100), w = g.slice(); _ > 0;) w[0] += m.px * y, w[1] += m.py * y, isNaN(m.t) || (w[2] += m.t * y), d.push(w), w = w.slice(), _--
                            }
                            d.push(h[h.length - 1]), r[l].pgeo = d
                        }
                    }
                    console.timeEnd("parseData")
                },
                data_changed: function () {
                    var t = (this.getMapv().get("useLeaflet"), this.getData()),
                        e = this.getDataType();
                    if (t) {
                        var i = this.getMapv().get("coordType"),
                            n = this.getCoordType();
                        if (n != i)
                            for (var a = 0; a < t.length; a++)
                                if (t[a].geo) t[a].geo.forEach(function (t) {
                                    var e = GeoUtil.transform({
                                        lng: t[0],
                                        lat: t[1]
                                    }, n, i);
                                    t[0] = e.lng, t[1] = e.lat
                                });
                                else {
                                    var o = GeoUtil.transform(t[a], n, i);
                                    t[a].lng = o.lng, t[a].lat = o.lat
                                }
                        if ("time" !== this.getAnimation() || "point" !== e && "ripple" != e) "simple" === this.getDrawType() && "point" === e && t.sort(function (t, e) {
                            return e.count - t.count
                        });
                        else {
                            var r = this.getAnimationOptions(),
                                s = r && r.interval;
                            if (s) {
                                var l = s.split("-")[0] || 1,
                                    h = s.split("-")[1] || "day";
                                if (this._minTime = t[0] && t[0].t, this._maxTime = t[t.length - 1] && t[t.length - 1].t, this._ticks = [this._minTime], this._minTime !== this._maxTime)
                                    for (var p = this._minTime, c = 1e5; p < this._maxTime;)
                                        if (p = util.dateAdd(p, l, h), this._ticks.push(Math.min(p, this._maxTime)), --c < 0) {
                                            console.error("too much frames");
                                            break
                                        }
                            } else {
                                var u = this._minTime = t[0] && t[0].t;
                                this._maxTime = this._minTime, this._ticks = [u];
                                for (var a = 1; a < t.length; a++) {
                                    var d = t[a].t;
                                    this._minTime = Math.min(this._minTime, d), this._maxTime = Math.max(this._maxTime, d), d > u && (u = d, this._ticks.push(u))
                                }
                            }
                        }
                        if (("polyline" === e || "trailline" === e) && "time" === this.getAnimation()) {
                            this._minTime = t[0] && t[0].geo[0][2], this._maxTime = this._minTime;
                            for (var a = 0; a < t.length; a++)
                                for (var g = t[a].geo, f = 0; f < g.length; f++) {
                                    var d = g[f][2];
                                    d < this._minTime && (this._minTime = d), d > this._maxTime && (this._maxTime = d)
                                }
                            var r = this.getAnimationOptions(),
                                s = r && r.interval || "1-day",
                                l = s.split("-")[0] || 1,
                                h = s.split("-")[1] || "day";
                            if (this._ticks = [this._minTime], this._minTime !== this._maxTime)
                                for (var p = this._minTime; p < this._maxTime;) p = util.dateAdd(p, l, h), this._ticks.push(Math.min(p, this._maxTime))
                        }
                        t.length > 0 && (this._min = t[0].count || 0, this._max = this._min);
                        for (var a = 0; a < t.length; a++) void 0 !== t[a].count && null !== t[a].count || (t[a].count = 0), t[a].values && t[a].values.length > 0 ? (this._max = Math.max(this._max, Math.max.apply(null, t[a].values)), this._min = Math.min(this._min, Math.min.apply(null, t[a].values))) : (this._max = Math.max(this._max, t[a].count), this._min = Math.min(this._min, t[a].count)), t[a]._id = a;
                        this.draw()
                    }
                },
                getDataRange: function () {
                    return {
                        minTime: this._minTime,
                        maxTime: this._maxTime,
                        min: this._min,
                        max: this._max
                    }
                },
                zIndex_changed: function () {
                    var t = this.getZIndex();
                    this.canvasLayer.setZIndex(t)
                },
                dataRangeControl_changed: function () {
                    this.updateControl(), this._getDrawer().notify("drawOptions")
                },
                highlightElement_changed: function () {
                    if ("simple" == this.getDrawType() && !this.getDrawOptions().icon && "time" !== this.getAnimation()) {
                        this.draw(!0)
                    }
                },
                clearHighlight: function () {
                    null !== this._highlightElement && (this._highlightElement = null, this.notify("highlightElement"))
                },
                highlight: function (t) {
                    if (this._getDrawer()) {
                        var e = this.getData();
                        this._highlightElement = {
                            data: e[t]
                        }, this.notify("highlightElement")
                    }
                },
                findElementAtPoint: function (t, e) {
                    if ("none" === window.getComputedStyle(this.canvasLayer.canvas).display) return null;
                    var i = this._getDrawer();
                    if (i) {
                        var n = i.getElementPaths(),
                            a = this.getCtx();
                        this.getData();
                        if (this._highlightElement && a.isPointInPath(this._highlightElement.path, t, e)) return this._highlightElement;
                        for (var o = null, r = 0; r < n.length; r++)
                            if (a.isPointInPath(n[r], t, e)) {
                                o = {
                                    data: n[r].data,
                                    path: n[r]
                                };
                                break
                            }
                        return this._highlightElement !== o && (this._highlightElement = o, this.notify("highlightElement")), o
                    }
                },
                _getHandler: function (t) {
                    return "click" == t ? this.getClick() : "hover" == t ? this.getHover() : "tap" == t ? this.getTap() : null
                },
                getCanvas: function () {
                    return this.canvasLayer ? this.canvasLayer.getContainer() : null
                }
            }), window.L && (LeafletLayer = L.Layer.extend({
                onAdd: function (t) {
                    var e = t.getCenter(),
                        i = t.getSize(),
                        n = 0,
                        a = 0;
                    if (e) {
                        var o = t.latLngToLayerPoint(e);
                        n = Math.floor(o.x - i.x / 2) + "px", a = Math.floor(o.y - i.y / 2) + "px"
                    }
                    var r = this._map.getPane(this.options.pane);
                    return (this.canvas = document.createElement("canvas")).style.cssText = "position:absolute;left:" + n + ";top:" + a + ";z-index:" + this.zIndex + ";", this.adjustSize(), r.appendChild(this.canvas), t.on("moveend", this.draw, this), this.canvas
                },
                onRemove: function (t) {
                    L.DomUtil.remove(this.canvas), t.off("moveend", this.draw, this)
                }
            })), LeafletLayer.prototype.initialize = function (t) {
                this._map = t.map, this._id = t._id, this.zIndex = t.zIndex, this.context = t.context || "2d", this.onUpdate = t.onUpdate
            }, LeafletLayer.prototype.adjustSize = function () {
                var t, e = this._map.getSize(),
                    i = this.canvas;
                t = "webgl" == this.context ? 1 : util.getPixelRatio(i.getContext("2d")), i.width = e.x * t, i.height = e.y * t, i.style.width = e.x + "px", i.style.height = e.y + "px"
            }, LeafletLayer.prototype.draw = function () {
                var t = this._map,
                    e = t.getSize(),
                    i = t.getCenter();
                if (i) {
                    var n = t.latLngToLayerPoint(i);
                    this.canvas.style.left = Math.floor(n.x - e.x / 2) + "px", this.canvas.style.top = Math.floor(n.y - e.y / 2) + "px", this.onUpdate && this.onUpdate.call(this)
                }
            }, LeafletLayer.prototype.getContainer = function () {
                return this.canvas
            }, LeafletLayer.prototype.show = function () {
                this.canvas || this._map.addLayer(this), this.canvas.style.display = "block"
            }, LeafletLayer.prototype.hide = function () {
                this.canvas.style.display = "none"
            }, LeafletLayer.prototype.setZIndex = function (t) {
                this.canvas.style.zIndex = t
            }, LeafletLayer.prototype.getZIndex = function () {
                return this.zIndex
            }, window.BMap ? (window.PlaybackControl = function (t, e) {
                this.defaultAnchor = BMAP_ANCHOR_BOTTOM_LEFT, this.defaultOffset = new BMap.Size(120, 60), this.animation = t, this.options = util.extend({
                    tickFormatter: function (t, e) {
                        return new Date(t).toLocaleString()
                    }
                }, e)
            }, PlaybackControl.prototype = new BMap.Control, PlaybackControl.prototype.initialize = function (t) {
                var e = this.init(t);
                return t.getContainer().appendChild(e), e
            }) : window.L && (window.PlaybackControl = L.Control.extend({
                initialize: function () {
                    util.extend(this.options, util.extend({
                        position: "bottomleft",
                        tickFormatter: function (t, e) {
                            return new Date(t).toLocaleString()
                        }
                    }, arguments[1]))
                },
                includes: L.Mixin.Events,
                onAdd: function (t) {
                    return this.init(t)
                }
            }));
            var playActionStyle = {
                    position: "absolute",
                    top: "4px",
                    left: "5px",
                    width: "0",
                    height: "0",
                    cursor: "pointer",
                    "font-size": "0",
                    border: "4px solid transparent",
                    "border-left": "8px solid #ccc",
                    "vertical-align": "middle"
                },
                pauseActionStyle = {
                    position: "absolute",
                    top: "4px",
                    left: "5px",
                    width: "4px",
                    height: "8px",
                    margin: "0 2px",
                    cursor: "pointer",
                    "font-size": "0",
                    border: "2px solid #ccc",
                    "border-width": "0 2px",
                    "vertical-align": "middle",
                    "box-sizing": "content-box"
                };
            util.extend(PlaybackControl.prototype, {
                init: function (t) {
                    this.map = t;
                    var e = this,
                        i = this.container = document.createElement("div");
                    i.className = "mapv-play-control", setStyle(i, {
                        width: "600px",
                        "padding-left": "22px"
                    });
                    var n = this._playBtn = document.createElement("div");
                    n.className = "mapv-play-control-btn play", n.setAttribute("action", "play"), setStyle(n, playActionStyle), n.addEventListener("click", function (t) {
                        "play" == t.target.getAttribute("action") ? (e.setState("play"), e.animation.start()) : (e.setState("pause"), e.animation.pause())
                    }), i.appendChild(n);
                    var a = this._slider = document.createElement("input");
                    setStyle(a, {
                        width: "100%",
                        margin: 0
                    }), a.type = "range", a.min = this.options.min || 0, a.value = a.min, a.max = this.options.max || 0, a.step = this.options.step || 1, a.addEventListener("change", function (t) {
                        t.target;
                        "play" === e.getState() && (e.setState("play"), e.animation.start())
                    }), a.addEventListener("input", function (t) {
                        var i = a.value,
                            n = (i - a.min) / (a.max - a.min);
                        e.animation.setSchedule(n, !0)
                    });
                    var o = document.createElement("div");
                    o.className = "mapv-play-control-slider", setStyle(o, {
                        position: "relative"
                    }), o.appendChild(a), i.appendChild(o);
                    var r = document.createElement("div");
                    r.className = "mapv-play-control-label", i.appendChild(r);
                    var s = document.createElement("label"),
                        l = this._getFormattedLabel(a.min, "start");
                    return s.className = "start-label", setStyle(s, {
                        position: "absolute",
                        left: 0
                    }), s.innerHTML = l, r.appendChild(s), s = document.createElement("label"), l = this._getFormattedLabel(a.max, "end"), s.className = "end-label", setStyle(s, {
                        position: "absolute",
                        right: 0
                    }), s.innerHTML = l, r.appendChild(s), s = this._curTick = document.createElement("div"), l = this._getFormattedLabel(a.value, "current"), s.className = "cur-label", setStyle(s, {
                        position: "absolute",
                        top: "-30px",
                        left: 0,
                        width: "100%",
                        "text-align": "center"
                    }), s.innerHTML = "<span>" + l + "</span>", r.appendChild(s), this.options.onInitialize && setTimeout(function () {
                        e.options.onInitialize(i)
                    }), i
                },
                _getFormattedLabel: function (t, e) {
                    return this.options.tickFormatter(t, e)
                },
                setOptions: function (t) {
                    util.extend(this.options, t);
                    var e = this._slider;
                    e.min = e.value = this.options.min || 0, e.max = this.options.max || 0, e.step = this.options.step || 1, this.options.onReset && this.options.onReset(this._container)
                },
                bindAnimation: function (t) {
                    this.animation = t
                },
                update: function (t) {
                    var e = (t - this._slider.min) / (this._slider.max - this._slider.min);
                    if (this._slider.value = t, this._curTick.innerHTML = "<span>" + this._getFormattedLabel(t, "current") + "</span>", this.options.onUpdate) {
                        var i = this;
                        setTimeout(function () {
                            i.options.onUpdate(i.container, t, e)
                        })
                    }
                },
                pause: function () {
                    this.animation && this.animation.pause(), this.setState("pause")
                },
                start: function () {
                    this.animation && this.animation.start(), this.setState("play")
                },
                setState: function (t) {
                    var e = this._playBtn,
                        i = this.getState();
                    if (i != t && ("play" == t ? (setStyle(e, pauseActionStyle), e.className = "mapv-play-control-btn pause", e.setAttribute("action", "pause")) : (setStyle(e, playActionStyle), e.className = "mapv-play-control-btn play", e.setAttribute("action", "play")), this.options.onStateChange)) {
                        var n = this;
                        setTimeout(function () {
                            n.options.onStateChange(i, t)
                        })
                    }
                },
                getState: function () {
                    return "play" == this._playBtn.getAttribute("action") ? "pause" : "play"
                },
                getContainer: function () {
                    return this.container
                },
                hide: function () {
                    this.container && (this.container.style.display = "none")
                },
                show: function () {
                    this.container && (this.container.style.display = "block")
                }
            }), util.inherits(Drawer, Class), Drawer.prototype.beginDrawMap = function () {
                "2d" == this.getLayer().getContext() && this.beginDrawCanvasMap()
            }, Drawer.prototype.endDrawMap = function () {
                "2d" == this.getLayer().getContext() && this.endDrawCanvasMap()
            }, Drawer.prototype.beginDrawCanvasMap = function () {
                var t = this.getDrawOptions(),
                    e = this.getCtx(),
                    i = util.getPixelRatio(e);
                this._elementPaths = [], e.save(), e.scale(i, i);
                for (var n = ["globalCompositeOperation", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "globalAlpha", "fillStyle", "strokeStyle", "lineWidth", "lineCap", "lineJoin", "lineWidth", "miterLimit"], a = 0; a < n.length; a++) t[n[a]] && (e[n[a]] = t[n[a]])
            }, Drawer.prototype.endDrawCanvasMap = function () {
                this.getCtx().restore()
            }, Drawer.prototype.drawOptions_changed = function () {}, Drawer.prototype.colors = ["rgba(17, 102, 252, 0.8)", "rgba(52, 139, 251, 0.8)", "rgba(110, 176, 253, 0.8)", "rgba(255, 241, 193, 0.8)", "rgba(255, 146, 149, 0.8)", "rgba(253, 98, 104, 0.8)", "rgba(255, 0, 0, 0.8)", "rgba(255, 51, 61, 0.8)"], Drawer.prototype._getDatasetRange = function (t, e) {
                var i = this.getLayer().getData(),
                    n = 0,
                    a = i.length,
                    o = this.getLayer().getAnimation();
                if (o && "time" == o) {
                    this.getAnimationOptions();
                    if (this._lastEndIndex) {
                        var r = i[this._lastEndIndex];
                        n = r && r.t <= t ? this._lastEndIndex : 0
                    } else n = 0;
                    for (var s = 0, l = n; l < i.length; l++) {
                        var h = i[l].t;
                        if (!(h < t)) {
                            if (!(h < e)) {
                                n = l - s, this._lastEndIndex = a = l;
                                break
                            }
                            s++
                        }
                    }
                }
                return [n, a]
            }, Drawer.prototype.generalSplitList = function () {
                var t = this.getLayer().getDataRange(),
                    e = Math.ceil((t.max - t.min) / 7),
                    i = t.min;
                this.splitList = [];
                for (var n = 1; i < t.max;) this.splitList.push({
                    start: i,
                    end: i + e,
                    size: n,
                    color: this.colors[n - 1]
                }), i += e, n++
            }, Drawer.prototype.getRadius = function () {
                var t = this.getMap().getZoom(),
                    e = Math.pow(2, 18 - t),
                    i = this.getDrawOptions(),
                    n = parseFloat(i.size) || 13;
                return "m" === (i.unit || "px") ? n /= e : n = n, i.minPxSize && n < i.minPxSize && (n = i.minPxSize), n
            }, Drawer.prototype.getElementPaths = function () {
                return this._elementPaths
            }, Drawer.prototype.clearTimer = function () {
                this._timer && window.clearTimeout(this._timer)
            }, util.inherits(SimpleDrawer, Drawer), SimpleDrawer.prototype.drawMap = function (t, e) {
                var i = this.getLayer().getDataType();
                if ("webgl" === this.getLayer().getContext()) return void("polyline" === i ? this.drawWebglPolyline(t, e) : this.drawWebglPoint(t, e));
                this.beginDrawMap();
                var n = (this.getLayer().getData(), this.getCtx(), this.getDrawOptions());
                if ("polyline" === i || "polygon" === i) this.drawPolyline(t, e);
                else if ("trailline" === i) this.drawTrailline(t);
                else if ("ripple" === i) this.drawRipple(t, e);
                else {
                    var a = this,
                        o = n.icon;
                    o ? (o.font && o.text && setTimeout(function () {
                        console.time("draw font"), a.drawIconsWithFont(o.font, o.text, t, e), console.timeEnd("draw font")
                    }), o.url && (this._cachedImage ? this.drawIcons(t, this._cachedImage, e) : function (t) {
                        var i = new Image;
                        i.onload = function () {
                            console.log("image loaded"), a._cachedImage = i, a.drawIconsWithImage(i, t, e)
                        }, i.src = n.icon.url
                    }(t))) : this.drawShapes(t, e)
                }
                this.endDrawMap()
            }, SimpleDrawer.prototype.drawTrailline = function (t) {
                for (var e = this.getLayer().getData(), i = this.getCtx(), n = this.getDrawOptions(), a = n.lineWidth || 1, o = 0, r = e.length; o < r; o++) {
                    for (var s, l = e[o].pgeo, h = 0; h < l.length; h++)
                        if (l[h][2] >= t) {
                            s = l[h];
                            break
                        }
                    s && (i.save(), i.fillStyle = e[o].color || n.fillStyle || "#5182e4", i.beginPath(), i.arc(s[0], s[1], s[3] || a, 0, 2 * Math.PI, !1), i.closePath(), i.fill(), i.restore())
                }
            }, SimpleDrawer.prototype.drawRipple = function (t, e) {
                for (var i = this.getLayer().getData(), n = this.getCtx(), a = this.getDrawOptions(), o = a.rippleStyle || "stroke", r = this._getDatasetRange(t, e), s = this.getLayer().get("forceDrawEverything"), l = r[0], h = r[1]; l < h; l++) {
                    var p = i[l];
                    if (s || !(p.px < 0 || p.px > n.canvas.width || p.py < 0 || p.py > n.canvas.height)) {
                        var c = a.scaleRange ? Math.sqrt(this.dataRange.getScale(p.count)) : 1,
                            u = this.getRadius() * c,
                            d = new Path2D;
                        if (d.arc(p.px, p.py, 5, 0, 2 * Math.PI, !1), d.data = p, this._elementPaths.push(d), n.save(), n.fillStyle = p.color || a.fillStyle || "#5182e4", n.strokeStyle = p.color || a.strokeStyle || "#5182e4", n.beginPath(), n.arc(p.px, p.py, 1.5, 0, 2 * Math.PI, !1), n.fill(), n.closePath(), l - r[0] < 1e3) {
                            if (!p.ripple) {
                                var g = a.shuffle ? 5 * -Math.random() : a.stepIn ? 0 : 3;
                                p.ripple = [g, g - 1.5, g - 3.5]
                            }
                            p.ripple.forEach(function (t, e) {
                                if (t > 0) {
                                    var i = (5 - t) / 4;
                                    n.save(), n.globalAlpha = i, n.beginPath(), n.arc(p.px, p.py, u * t, 0, 2 * Math.PI, !1), n.closePath(), "stroke" === o ? n.stroke() : "fill" === o ? (n.globalAlpha *= .6, n.fill()) : 2 === e ? n.stroke() : (n.globalAlpha *= .6, n.fill()), n.restore()
                                }
                                p.ripple[e] += .1, p.ripple[e] > 5 && (p.ripple[e] = a.shuffle ? -3 : 0)
                            })
                        }
                        n.restore()
                    }
                }
            }, SimpleDrawer.prototype.drawPolyline = function (t, e) {
                var i = this.getLayer().getDataType(),
                    n = this.getLayer().getData(),
                    a = this.getCtx(),
                    o = this.getDrawOptions(),
                    r = o.label,
                    s = this.getMap().getZoom();
                if (r) {
                    r.font && (a.font = r.font);
                    var l = r.key || "count"
                }
                var h = o.endPointStyle && o.endPointStyle.enable,
                    p = {};
                this.getLayer().getAnimationOptions();
                o.strokeStyle = o.strokeStyle || "rgba(55, 55, 55, .6)";
                for (var c = 0, u = n.length; c < u; c++) {
                    var d = n[c].pgeo,
                        g = n[c].geo,
                        f = 0,
                        m = d.length - 1;
                    if (t) {
                        for (var v = [], y = 0; y < d.length; y++) {
                            var _ = parseFloat(d[y][2]);
                            if (_ >= t) {
                                if (!(_ < e)) break;
                                v.push(y)
                            }
                        }
                        v.length > 0 && (f = v[0], m = v[v.length - 1]), v = null
                    }
                    if (h) {
                        var w = o.endPointStyle.size || 2,
                            b = o.endPointStyle.color || "rgba(55, 55, 55, .6)";
                        a.save(), a.fillStyle = b, a.beginPath(), p[d[f][0] + "_" + d[f][1]] || (a.arc(d[f][0], d[f][1], w, 0, 2 * Math.PI, !1), p[d[f][0] + "_" + d[f][1]] = 1), p[d[m][0] + "_" + d[m][1]] || (a.arc(d[m][0], d[m][1], w, 0, 2 * Math.PI, !1), p[d[m][0] + "_" + d[m][1]] = 1), a.closePath(), a.fill(), a.restore()
                    }
                    if (!(f >= m)) {
                        a.beginPath(), a.moveTo(d[f][0], d[f][1]);
                        var x, C = g[f][3] || o.strokeStyle,
                            M = 0;
                        a.strokeStyle = C;
                        for (var y = f + 1; y <= m; y++) {
                            var T = d[y],
                                D = g[y][3] || o.strokeStyle;
                            if (D != C) {
                                M > 1 && a.stroke();
                                var L = d[y - 1];
                                x = a.createLinearGradient(L[0], L[1], T[0], T[1]), x.addColorStop(0, C), x.addColorStop(1, D), a.strokeStyle = x, a.moveTo(L[0], L[1]), a.lineTo(T[0], T[1]), a.stroke(), a.moveTo(T[0], T[1]), a.strokeStyle = C = D, M = 0
                            } else a.lineTo(d[y][0], d[y][1]), M++
                        }
                        if ((o.strokeStyle || "polyline" === i) && a.stroke(), "polygon" === i && (a.closePath(), a.fill()), r && r.show && (!r.minZoom || r.minZoom && s >= r.minZoom)) {
                            a.save(), r.fillStyle && (a.fillStyle = r.fillStyle);
                            var A = util.getGeoCenter(d);
                            a.fillText(n[c][l], A[0], A[1]), a.restore()
                        }
                    }
                }
            }, SimpleDrawer.prototype.drawShapes = function (t, e) {
                var i = this.getDrawOptions(),
                    n = this.getLayer().getData(),
                    a = this._getDatasetRange(t, e),
                    o = this.getCtx(),
                    r = this.getLayer().getAnimation();
                void 0 !== t && "time" != r || (t = 1);
                var s = !(t < 1),
                    l = this.getHighlightElement(),
                    h = 1 + .1 * (this.getMap().getZoom() - 6),
                    p = i.maxScale || 2,
                    c = i.minScale || .5;
                h = Math.max(Math.min(h, p), c);
                for (var u = this.getLayer().get("forceDrawEverything"), d = a[0], g = a[1]; d < g; d++) {
                    var f = n[d];
                    if (u || !(f.px < 0 || f.px > o.canvas.width || f.py < 0 || f.py > o.canvas.height)) {
                        var m = new Path2D,
                            v = i.scaleRange ? Math.sqrt(this.dataRange.getScale(f.count)) : 1;
                        v *= t, v *= h;
                        var y = this.getRadius() * v,
                            _ = f.shape || i.shape || "circle";
                        switch (_) {
                            case "rect":
                                m.moveTo(f.px - y, f.py - y), m.rect(f.px - y, f.py - y, 2 * y, 2 * y);
                                break;
                            case "triangle":
                                y *= 1.5, m.moveTo(f.px, f.py - y), m.lineTo(f.px - y * Math.sqrt(3) / 2, f.py + y / 2), m.lineTo(f.px + y * Math.sqrt(3) / 2, f.py + y / 2), m.lineTo(f.px, f.py - y);
                                break;
                            case "diamond":
                                m.moveTo(f.px, f.py - 1.5 * y), m.lineTo(f.px - y, f.py), m.lineTo(f.px, f.py + 1.5 * y), m.lineTo(f.px + y, f.py), m.lineTo(f.px, f.py - 1.5 * y);
                                break;
                            case "circle":
                            default:
                                m.arc(f.px, f.py, y, 0, 2 * Math.PI, !1)
                        }
                        s && (m.data = f, this._elementPaths.push(m), l && l.data._id == f._id) ? (l.data = f, l.path = m, this._highlightElement = l) : (o.save(), o.fillStyle = f.color || i.fillStyle, o.globalAlpha = (i.fillAlpha || 1) * t, o.fill(m), i.strokeStyle && (o.strokeStyle = i.strokeStyle, o.lineWidth = i.lineWidth || 1, o.stroke(m)), o.restore())
                    }
                }
                if (l) {
                    var f = l.data;
                    if (!u && (f.px < 0 || f.px > o.canvas.width || f.py < 0 || f.py > o.canvas.height)) return;
                    var w = l.path,
                        _ = f.shape || i.shape || "circle";
                    o.save(), o.fillStyle = "rgba(0, 0, 0, 0.3)", o.strokeStyle = "rgba(0, 0, 0, 0.15)", o.lineWidth = f.radius;
                    var m = new Path2D,
                        y = f.radius + 1;
                    switch (_) {
                        case "rect":
                            m.moveTo(f.px - y, f.py - y), m.rect(f.px - y, f.py - y, 2 * y, 2 * y), o.fill(m), y += f.radius, m.moveTo(f.px - y, f.py - y), m.rect(f.px - y, f.py - y, 2 * y, 2 * y), o.fillStyle = o.strokeStyle, o.fill(m);
                            break;
                        case "triangle":
                            m.moveTo(f.px, f.py - y), m.lineTo(f.px - y * Math.sqrt(3) / 2, f.py + y / 2), m.lineTo(f.px + y * Math.sqrt(3) / 2, f.py + y / 2), m.lineTo(f.px, f.py - y), o.fill(m), m = new Path2D, y = 2 * f.radius, m.moveTo(f.px, f.py - y), m.lineTo(f.px - y * Math.sqrt(3) / 2, f.py + y / 2), m.lineTo(f.px + y * Math.sqrt(3) / 2, f.py + y / 2), m.lineTo(f.px, f.py - y), o.fillStyle = o.strokeStyle, o.fill(m);
                            break;
                        case "diamond":
                            m.moveTo(f.px, f.py - 1.5 * y), m.lineTo(f.px - y, f.py), m.lineTo(f.px, f.py + 1.5 * y), m.lineTo(f.px + y, f.py), m.lineTo(f.px, f.py - 1.5 * y), o.fill(m), m = new Path2D, y = 2 * f.radius, m.moveTo(f.px, f.py - 1.5 * y), m.lineTo(f.px - y, f.py), m.lineTo(f.px, f.py + 1.5 * y), m.lineTo(f.px + y, f.py), m.lineTo(f.px, f.py - 1.5 * y), o.fillStyle = o.strokeStyle, o.fill(m);
                            break;
                        case "circle":
                        default:
                            m.arc(f.px, f.py, y, 0, 2 * Math.PI, !1), o.fill(m), o.stroke(m)
                    }
                    o.restore(), o.save(), o.fillStyle = f.color || i.fillStyle, o.fill(w), o.restore()
                }
            }, SimpleDrawer.prototype.drawIconsWithImage = function (t, e, i) {
                void 0 == e && (e = 1);
                for (var n = !(e < 1), a = this, o = this.getDrawOptions(), r = this.getLayer().getData(), s = this.getCtx(), l = [], h = [], p = 0, c = r.length; p < c; p++) {
                    var u = r[p],
                        d = o.scaleRange ? Math.sqrt(a.dataRange.getScale(u.count)) : 1;
                    d *= e;
                    var g = util.copy(o.icon);
                    o.scaleRange && (g.width *= d, g.height *= d, g.offsetX = g.offsetX ? g.offsetX * d : 0, g.offsetY = g.offsetY ? g.offsetY * d : 0), p % 100 == 0 && (h = [], l.push(h)), h.push({
                        item: u,
                        icon: g
                    })
                }
                if (l.length > 0) {
                    var f = (parseInt(1e4 * Math.random()), function e() {
                        for (var i = l.shift(), o = 0; o < i.length; o++) {
                            var r = i[o],
                                h = r.icon,
                                p = r.item;
                            a.drawImage(s, r.item, r.icon, t);
                            var c = new Path2D,
                                u = h.offsetX,
                                d = h.offsetY,
                                g = h.width || 0,
                                f = h.height || 0,
                                c = new Path2D,
                                m = p.px - g / 2 - u,
                                v = p.py - f / 2 - d;
                            c.rect(m, v, g, f), n && a._elementPaths.push(c)
                        }
                        l.length > 0 && (a._timer = setTimeout(e, 0))
                    });
                    a._timer = setTimeout(f, 0)
                }
            }, SimpleDrawer.prototype.drawImage = function (t, e, i, n) {
                var a = i.width || 0,
                    o = i.height || 0,
                    r = i.offsetX || 0,
                    s = i.offsetY || 0,
                    l = util.getPixelRatio(t),
                    h = e.px - a / 2 - r,
                    p = e.py - o / 2 - s,
                    c = e.color || i.color || void 0;
                if (t.save(), t.scale(l, l), c) {
                    var c = c.replace("rgba(", "").replace(")", "").split(","),
                        u = document.createElement("canvas"),
                        d = u.getContext("2d"),
                        l = 2;
                    u.width = a * l, u.height = o * l, d.drawImage(n, 0, 0, u.width, u.height);
                    for (var g = d.getImageData(0, 0, u.width, u.height), f = g.data, m = 0; m < f.length; m += 4) {
                        var v = f[m + 0],
                            y = f[m + 1],
                            _ = f[m + 2];
                        f[m + 3] < 100 || v > 200 && y > 200 && _ > 200 || (f[m + 0] = parseInt(c[0]), f[m + 1] = parseInt(c[1]), f[m + 2] = parseInt(c[2]))
                    }
                    d.putImageData(g, 0, 0), n = u
                }
                t.drawImage(n, h, p, a, o), t.restore()
            }, SimpleDrawer.prototype.drawIconsWithFont = function (t, e, i, n) {
                var a = this,
                    o = this.getDrawOptions(),
                    r = this.getLayer().getData(),
                    s = this._getDatasetRange(i, n),
                    l = this.getCtx(),
                    h = this.getLayer().getAnimation();
                void 0 !== i && "time" != h || (i = 1);
                var p = !(i < 1),
                    c = this.getHighlightElement(),
                    u = 1 + .1 * (this.getMap().getZoom() - 6),
                    d = o.maxScale || 2,
                    g = o.minScale || .5;
                u = Math.max(Math.min(u, d), g), o.size = o.size || 16;
                for (var f = this.getLayer().get("forceDrawEverything"), m = s[0], v = s[1]; m < v; m++) {
                    var y = r[m];
                    if (f || !(y.px < 0 || y.px > l.canvas.width || y.py < 0 || y.py > l.canvas.height)) {
                        var _ = o.scaleRange ? Math.sqrt(a.dataRange.getScale(y.count)) : o.size / 16;
                        _ *= u;
                        var w = o.icon,
                            b = 16 * _,
                            x = 16 * _,
                            C = util.getPixelRatio(l);
                        if (l.save(), l.font = 16 * _ + "px " + t, l.scale(C, C), p) {
                            var M = new Path2D;
                            M.rect(y.px - .6 * b / 2, y.py - .7 * x, .6 * b, .8 * x), M.data = y, this._elementPaths.push(M), c && c.data._id == y._id && (c.data = y, c.path = M, this._highlightElement = c)
                        }
                        c && c.data._id == y._id ? l.restore() : (l.beginPath(), l.fillStyle = "#fff", l.arc(y.px, y.py - .55 * x, .2 * b, 0, 2 * Math.PI, !1), l.closePath(), l.fill(), l.fillStyle = y.color || w.color || o.fillStyle, l.globalAlpha = o.fillAlpha || 1, l.fillText(e, y.px - b / 2, y.py + .1 * x), l.restore())
                    }
                }
                if (c) {
                    var y = c.data;
                    if (!f && (y.px < 0 || y.px > l.canvas.width || y.py < 0 || y.py > l.canvas.height)) return;
                    var _ = o.scaleRange ? Math.sqrt(a.dataRange.getScale(y.count)) : o.size / 16;
                    _ *= u, _ *= 1.5;
                    var w = o.icon,
                        b = 16 * _,
                        x = 16 * _,
                        C = util.getPixelRatio(l);
                    l.save(), l.font = 16 * _ + "px " + t, l.scale(C, C), l.fillStyle = y.color || w.color || o.fillStyle, l.fillText(e, y.px - b / 2, y.py + .1 * x), l.restore()
                }
            }, SimpleDrawer.prototype.drawWebglPoint = function (t, e) {
                var i = this.getLayer().getData();
                if (i) {
                    var n, a, o, r, s = this.getCtx();
                    n = s.createShader(s.VERTEX_SHADER), a = s.createShader(s.FRAGMENT_SHADER), o = ["attribute vec4 a_Position;", "attribute vec4 a_Color;", "attribute float a_PointSize;", "varying vec4 v_Color;", "void main() {", "gl_Position = a_Position;", "v_Color = a_Color;", "gl_PointSize = a_PointSize;", "}"].join(""), r = ["precision mediump float;", "varying vec4 v_Color;", "void main() {", "gl_FragColor = v_Color;", "}"].join("");
                    var l = s.createProgram();
                    s.shaderSource(n, o), s.compileShader(n), s.shaderSource(a, r), s.compileShader(a), s.attachShader(l, n), s.attachShader(l, a), s.bindAttribLocation(l, 0, "a_Position"), s.linkProgram(l), s.useProgram(l);
                    var h = s.getAttribLocation(l, "a_Position"),
                        p = s.getAttribLocation(l, "a_PointSize");
                    s.getUniformLocation(l, "u_FragColor");
                    s.clear(s.COLOR_BUFFER_BIT);
                    var c = s.canvas.width / 2,
                        u = s.canvas.height / 2,
                        d = document.createElement("canvas"),
                        g = d.getContext("2d");
                    d.width = 1, d.height = 1;
                    for (var f = [], m = [], v = 0, y = this._getDatasetRange(t, e), _ = this.getLayer().get("forceDrawEverything"), w = y[0], b = y[1]; w < b; w++) {
                        var x = i[w],
                            C = (x.px - c) / c,
                            M = (u - x.py) / u;
                        if (_ || !(C < -1 || C > 1 || M < -1 || M > 1)) {
                            f.push(C, M), g.fillStyle = x.color || this.getDrawOptions().fillStyle, g.fillRect(0, 0, 1, 1);
                            var T = g.getImageData(0, 0, 1, 1).data;
                            m.push(T[0] / 255, T[1] / 255, T[2] / 255, T[3] / 255), v++
                        }
                    }
                    var D = new Float32Array(f),
                        L = new Float32Array(m),
                        A = v,
                        P = s.createBuffer();
                    if (!P) return console.log("Failed to create the buffer object"), -1;
                    s.bindBuffer(s.ARRAY_BUFFER, P), s.bufferData(s.ARRAY_BUFFER, D, s.STATIC_DRAW);
                    var h = s.getAttribLocation(l, "a_Position");
                    if (h < 0) return console.log("Failed to get the storage location of a_Position"), -1;
                    s.vertexAttribPointer(h, 2, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(h);
                    var S = s.createBuffer();
                    if (!S) return console.log("Failed to create the buffer object"), -1;
                    s.bindBuffer(s.ARRAY_BUFFER, S), s.bufferData(s.ARRAY_BUFFER, L, s.STATIC_DRAW);
                    var k = s.getAttribLocation(l, "a_Color");
                    if (k < 0) return console.log("Failed to get the storage location of a_Color"), -1;
                    s.vertexAttribPointer(k, 4, s.FLOAT, !1, 0, 0), s.enableVertexAttribArray(k), s.vertexAttrib1f(p, this.getRadius()), s.enable(s.BLEND), s.blendEquation(s.FUNC_SUBTRACT), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_COLOR), s.drawArrays(s.POINTS, 0, A)
                }
            }, SimpleDrawer.prototype.drawWebglPolyline = function () {
                var t = this.getLayer().getData();
                if (t) {
                    var e, i, n, a, o = this.getCtx();
                    e = o.createShader(o.VERTEX_SHADER), i = o.createShader(o.FRAGMENT_SHADER), n = ["attribute vec4 a_Position;", "void main() {", "gl_Position = a_Position;", "gl_PointSize = 30.0;", "}"].join(""), a = ["precision mediump float;", "uniform vec4 u_FragColor;", "void main() {", "gl_FragColor = u_FragColor;", "}"].join("");
                    var r = o.createProgram();
                    o.shaderSource(e, n), o.compileShader(e), o.shaderSource(i, a), o.compileShader(i), o.attachShader(r, e), o.attachShader(r, i), o.linkProgram(r), o.useProgram(r), o.enable(o.BLEND), o.blendFunc(o.SRC_ALPHA, o.ONE), o.clear(o.COLOR_BUFFER_BIT);
                    var s = o.canvas.width / 2,
                        l = o.canvas.height / 2,
                        h = o.createBuffer();
                    o.bindBuffer(o.ARRAY_BUFFER, h);
                    var p = o.getAttribLocation(r, "a_Position");
                    o.vertexAttribPointer(p, 2, o.FLOAT, !1, 0, 0), o.enableVertexAttribArray(p);
                    var c = o.getUniformLocation(r, "u_FragColor"),
                        u = document.createElement("canvas"),
                        d = u.getContext("2d");
                    u.width = 1, u.height = 1, d.fillStyle = this.getDrawOptions().strokeStyle || "red", d.fillRect(0, 0, 1, 1);
                    var g = d.getImageData(0, 0, 1, 1).data;
                    o.uniform4f(c, g[0] / 255, g[1] / 255, g[2] / 255, g[3] / 255), o.lineWidth(this.getDrawOptions().lineWidth || 1);
                    for (var f = 0, m = t.length; f < m; f++) {
                        for (var v = t[f].pgeo, y = [], _ = 0; _ < v.length; _++) {
                            var w = v[_],
                                b = (w[0] - s) / s,
                                x = (l - w[1]) / l;
                            y.push(b, x)
                        }
                        var C = new Float32Array(y);
                        o.bufferData(o.ARRAY_BUFFER, C, o.STATIC_DRAW), o.drawArrays(o.LINE_STRIP, 0, v.length)
                    }
                }
            }, util.inherits(GraphDrawer, Drawer), GraphDrawer.prototype.drawMap = function (t, e) {
                this.getLayer().getDataType();
                this.beginDrawMap();
                var i = (this.getLayer().getData(), this.getCtx()),
                    n = this.getDrawOptions();
                switch (i.beginPath(), n.graphType || "pie") {
                    case "column":
                        this.drawColumn(t, e);
                        break;
                    case "bar":
                        this.drawBar(t, e);
                        break;
                    case "pie":
                    default:
                        this.drawPie(t, e)
                }
                this.endDrawMap()
            }, GraphDrawer.prototype.drawPie = function (t, e) {
                var i = this.getDrawOptions(),
                    n = this.getLayer().getData(),
                    a = this._getDatasetRange(t, e),
                    o = this.getCtx(),
                    r = i.colors || ["red", "blue", "green"],
                    s = 1 + .15 * (this.getMap().getZoom() - 6);
                s = Math.max(Math.min(s, 2), .5);
                for (var l = this.getLayer().get("forceDrawEverything"), h = a[0], p = a[1]; h < p; h++) {
                    var c = n[h];
                    if (c.sum || (c.sum = c.values.reduce(function (t, e) {
                            return t + +e
                        }, 0)), !(!l && (c.px < 0 || c.px > o.canvas.width || c.py < 0 || c.py > o.canvas.height) || c.sum <= 0)) {
                        var u = new Path2D,
                            d = this.getRadius(),
                            g = i.scaleRange ? Math.sqrt(this.dataRange.getScale(c.count)) : 1;
                        g *= s;
                        var f = -.5 * Math.PI,
                            m = -.5 * Math.PI;
                        d *= g;
                        for (var v = r, y = 0; y < c.values.length; y++) {
                            var _ = v[y % v.length],
                                w = y % 2 == 0,
                                b = w ? m : f,
                                x = 2 * Math.PI * c.values[y] / c.sum,
                                C = w ? m + x : f - x,
                                u = new Path2D;
                            u.arc(c.px, c.py, d, 0, 2 * Math.PI, !1), u.data = c, this._elementPaths.push(u), o.save(), o.fillStyle = _, o.beginPath(), o.moveTo(c.px, c.py), o.arc(c.px, c.py, d, b, C, !w), o.lineTo(c.px, c.py), o.closePath(), o.fill(), o.restore(), w ? m = C : f = C
                        }
                    }
                }
            }, GraphDrawer.prototype.drawColumn = function (t, e) {
                var i = this.getDrawOptions(),
                    n = this.getLayer().getData(),
                    a = this._getDatasetRange(t, e),
                    o = this.getCtx(),
                    r = i.colors || ["red", "blue", "green"],
                    s = this.getLayer().getDataRange(),
                    l = s ? s.max : 0,
                    h = 1 + .15 * (this.getMap().getZoom() - 6);
                h = Math.max(Math.min(h, 2), .5);
                for (var p = i.offset || {
                        x: .5,
                        y: .5
                    }, c = i.padding || 1 / 3, u = this.getLayer().get("forceDrawEverything"), d = a[0], g = a[1]; d < g; d++) {
                    var f = n[d];
                    if (!(!u && (f.px < 0 || f.px > o.canvas.width || f.py < 0 || f.py > o.canvas.height) || f.sum <= 0)) {
                        var m = new Path2D,
                            v = this.getRadius(),
                            y = i.scaleRange ? Math.sqrt(this.dataRange.getScale(f.count)) : 1;
                        y *= h, v *= y;
                        for (var _ = f.values.length, w = 2 * v / (_ + (_ + 1) * c), b = w * c, x = 2 * v / l, C = 2 * p.x * v, M = 2 * p.y * v, T = 0, D = f.values.length; T < D; T++) {
                            var L = f.values[T] * x,
                                A = f.px - C + (T + 1) * b + T * w,
                                P = f.py - M + 2 * v - L,
                                S = r[T % r.length],
                                m = new Path2D;
                            m.rect(A, P, w, L), m.data = f, this._elementPaths.push(m), o.save(), o.fillStyle = S, o.fillRect(A, P, w, L), o.fill(), o.restore()
                        }
                    }
                }
            }, GraphDrawer.prototype.drawBar = function (t, e) {
                var i = this.getDrawOptions(),
                    n = this.getLayer().getData(),
                    a = this._getDatasetRange(t, e),
                    o = this.getCtx(),
                    r = this.getLayer().getDataRange(),
                    s = r ? r.max : 0,
                    l = i.colors || ["red", "blue", "green"],
                    h = 1 + .15 * (this.getMap().getZoom() - 6);
                h = Math.max(Math.min(h, 2), .5);
                for (var p = i.offset || {
                        x: .5,
                        y: .5
                    }, c = i.padding || 1 / 3, u = this.getLayer().get("forceDrawEverything"), d = a[0], g = a[1]; d < g; d++) {
                    var f = n[d];
                    if (!(!u && (f.px < 0 || f.px > o.canvas.width || f.py < 0 || f.py > o.canvas.height) || f.sum <= 0)) {
                        var m = new Path2D,
                            v = this.getRadius(),
                            y = i.scaleRange ? Math.sqrt(this.dataRange.getScale(f.count)) : 1;
                        y *= h, v *= y;
                        for (var _ = f.values.length, w = 2 * v / (_ + (_ + 1) * c), b = w * c, x = 2 * v / s, C = 2 * p.x * v, M = 2 * p.y * v, T = 0; T < _; T++) {
                            var D = f.values[T] * x,
                                L = f.px - C,
                                A = f.py - M + (T + 1) * b + T * w,
                                P = f.color || l[T % l.length],
                                m = new Path2D;
                            m.rect(L, A, D, w), m.data = f, this._elementPaths.push(m), o.save(), o.fillStyle = P, o.fillRect(L, A, D, w), o.fill(), o.restore()
                        }
                    }
                }
            }, util.inherits(HeatmapDrawer, Drawer), HeatmapDrawer.prototype.drawMap = function (t, e) {
                var i = this;
                i.Scale && i.Scale.set({
                    min: 0,
                    max: i.getMax(),
                    colors: this.getGradient()
                }), this.beginDrawMap();
                var n = this.getCtx();
                this._width = n.canvas.width, this._height = n.canvas.height;
                var a = this.getLayer().getData();
                this._data = a, this._width > 0 && this._height > 0 && (console.time("drawHeatMap"), this.drawHeatmap(t, e), console.timeEnd("drawHeatMap")), this.endDrawMap()
            }, HeatmapDrawer.prototype.scale = function (t) {
                var e = this;
                t.change(function (t, i) {
                    e.masker = {
                        min: t,
                        max: i
                    }, e.drawMap()
                }), e.Scale = t
            }, util.extend(HeatmapDrawer.prototype, {
                defaultRadius: 10,
                defaultGradient: {
                    .4: "blue",
                    .6: "cyan",
                    .7: "lime",
                    .8: "yellow",
                    "1.0": "red"
                },
                getGradient: function () {
                    return this.getDrawOptions().gradient || this.defaultGradient
                },
                getMax: function () {
                    var t = this._max;
                    if (void 0 !== this.getDrawOptions().max) t = this.getDrawOptions().max;
                    else {
                        var e = this.getLayer().getDataRange();
                        t = e.min + .7 * (e.max - e.min)
                    }
                    return t
                },
                data: function (t) {
                    return this._data = t, this
                },
                max: function (t) {
                    return this._max = t, this
                },
                add: function (t) {
                    return this._data.push(t), this
                },
                clear: function () {
                    return this._data = [], this
                },
                radius: function (t) {
                    var e = this._circle = document.createElement("canvas"),
                        i = e.getContext("2d"),
                        n = 0;
                    n = void 0 !== this.getDrawOptions().shadowBlur ? parseFloat(this.getDrawOptions().shadowBlur) : 0;
                    var a = this._r = t + n;
                    "rect" === this.getDrawOptions().type ? e.width = e.height = a : e.width = e.height = 2 * a;
                    var o;
                    if (void 0 !== this.getDrawOptions().shadowBlur) i.shadowBlur = n, i.shadowColor = "black", o = 1e4;
                    else {
                        o = 0;
                        var r = i.createRadialGradient(a - o, a - o, 0, a - o, a - o, t);
                        r.addColorStop(0, "rgba(0, 0, 0, .8)"), r.addColorStop(1, "rgba(0, 0, 0, 0)"), i.fillStyle = r
                    }
                    return i.shadowOffsetX = i.shadowOffsetY = o, i.beginPath(), "rect" === this.getDrawOptions().type ? i.fillRect(-o, -o, e.width, e.height) : i.arc(a - o, a - o, t, 0, 2 * Math.PI, !0), i.closePath(), i.fill(), this
                },
                drawHeatmap: function (t, e) {
                    this.radius(this.getRadius());
                    var i = this.getCtx();
                    i.save(), i.clearRect(0, 0, this._width, this._height);
                    var n = this.getLayer().getDataType(),
                        a = this.getMax();
                    if ("polyline" === n) {
                        i.strokeStyle = this.getDrawOptions().strokeStyle || "rgba(0, 0, 0, 0.8)", i.lineWidth = this.getDrawOptions().lineWidth || 1, i.beginPath();
                        for (var o = 0, r = this._data.length; o < r; o++) {
                            u = this._data[o];
                            var s = u.pgeo;
                            i.beginPath(), i.moveTo(s[0][0], s[0][1]);
                            for (var l = 1; l < s.length; l++) i.lineTo(s[l][0], s[l][1]);
                            i.globalAlpha = Math.max(u.count / a, .05), i.stroke()
                        }
                    } else {
                        var h = this.getDrawOptions().boundary || this._circle.width + 50,
                            p = this._getDatasetRange(t, e);
                        console.time("drawHeatMap");
                        for (var c = this.getLayer().get("forceDrawEverything"), o = p[0], r = p[1]; o < r; o++) {
                            var u = this._data[o];
                            !u.count || !c && (u.px < -h || u.py < -h || u.px > i.canvas.width + h || u.py > i.canvas.height + h) || (u.count < this.masker.min || u.count > this.masker.max || (i.globalAlpha = Math.max(u.count / a, .05), i.drawImage(this._circle, u.px - this._r, u.py - this._r)))
                        }
                        console.timeEnd("drawHeatMap")
                    }
                    var d = i.getImageData(0, 0, this._width, this._height);
                    return console.time("colorize"), this.colorize(d.data, this.dataRange.getGradient()), console.timeEnd("colorize"), i.putImageData(d, 0, 0), i.restore(), this
                },
                colorize: function (t, e) {
                    var i = 0,
                        n = 1024;
                    this.masker.min && (i = this.masker.min / this.getMax() * 1024), this.masker.max && (n = this.masker.max / this.getMax() * 1024);
                    for (var a, o = this.getDrawOptions().maxOpacity || .8, r = 3, s = t.length; r < s; r += 4) a = 4 * t[r], t[r] / 256 > o && (t[r] = 256 * o), a && a >= i && a <= n ? (t[r - 3] = e[a], t[r - 2] = e[a + 1], t[r - 1] = e[a + 2]) : t[r] = 0
                }
            }), Mapv.Layer = Layer, window.Mapv = Mapv
        }(),
        function () {
            function t(e, i, n) {
                var a = t.resolve(e);
                if (null == a) {
                    n = n || e, i = i || "root";
                    var o = new Error('Failed to require "' + n + '" from "' + i + '"');
                    throw o.path = n, o.parent = i, o.require = !0, o
                }
                var r = t.modules[a];
                if (!r._resolving && !r.exports) {
                    var s = {};
                    s.exports = {}, s.client = s.component = !0, r._resolving = !0, r.call(this, s.exports, t.relative(a), s), delete r._resolving, r.exports = s.exports
                }
                return r.exports
            }
            t.modules = {}, t.aliases = {}, t.resolve = function (e) {
                "/" === e.charAt(0) && (e = e.slice(1));
                for (var i = [e, e + ".js", e + ".json", e + "/index.js", e + "/index.json"], n = 0; n < i.length; n++) {
                    var e = i[n];
                    if (t.modules.hasOwnProperty(e)) return e;
                    if (t.aliases.hasOwnProperty(e)) return t.aliases[e]
                }
            }, t.normalize = function (t, e) {
                var i = [];
                if ("." != e.charAt(0)) return e;
                t = t.split("/"), e = e.split("/");
                for (var n = 0; n < e.length; ++n) ".." == e[n] ? t.pop() : "." != e[n] && "" != e[n] && i.push(e[n]);
                return t.concat(i).join("/")
            }, t.register = function (e, i) {
                t.modules[e] = i
            }, t.alias = function (e, i) {
                if (!t.modules.hasOwnProperty(e)) throw new Error('Failed to alias "' + e + '", it does not exist');
                t.aliases[i] = e
            }, t.relative = function (e) {
                function i(t, e) {
                    for (var i = t.length; i--;)
                        if (t[i] === e) return i;
                    return -1
                }

                function n(i) {
                    return t(n.resolve(i), e, i)
                }
                var a = t.normalize(e, "..");
                return n.resolve = function (n) {
                    var o = n.charAt(0);
                    if ("/" == o) return n.slice(1);
                    if ("." == o) return t.normalize(a, n);
                    var r = e.split("/"),
                        s = i(r, "deps") + 1;
                    return s || (s = 0), n = r.slice(0, s + 1).join("/") + "/deps/" + n
                }, n.exists = function (e) {
                    return t.modules.hasOwnProperty(n.resolve(e))
                }, n
            }, t.register("darsain-event/index.js", function (t) {
                "use strict";
                t.bind = window.addEventListener ? function (t, e, i, n) {
                    return t.addEventListener(e, i, n || !1), i
                } : function (t, e, i) {
                    var n = e + i;
                    return t[n] = t[n] || function () {
                        var e = window.event;
                        e.target = e.srcElement, e.preventDefault = function () {
                            e.returnValue = !1
                        }, e.stopPropagation = function () {
                            e.cancelBubble = !0
                        }, i.call(t, e)
                    }, t.attachEvent("on" + e, t[n]), i
                }, t.unbind = window.removeEventListener ? function (t, e, i, n) {
                    return t.removeEventListener(e, i, n || !1), i
                } : function (t, e, i) {
                    var n = e + i;
                    t.detachEvent("on" + e, t[n]);
                    try {
                        delete t[n]
                    } catch (e) {
                        t[n] = void 0
                    }
                    return i
                }
            }), t.register("darsain-position/index.js", function (t, e, i) {
                "use strict";

                function n(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }

                function a(t) {
                    return t && null != t.setInterval
                }

                function o(t) {
                    var e = r.pageYOffset || l.scrollTop,
                        i = r.pageXOffset || l.scrollLeft,
                        o = {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                            width: 0,
                            height: 0
                        };
                    if (a(t)) o.width = r.innerWidth || l.clientWidth, o.height = r.innerHeight || l.clientHeight;
                    else {
                        if (!l.contains(t) || null == t.getBoundingClientRect) return o;
                        n(o, t.getBoundingClientRect()), o.width = o.right - o.left, o.height = o.bottom - o.top
                    }
                    return o.top = o.top + e - l.clientTop, o.left = o.left + i - l.clientLeft, o.right = o.left + o.width, o.bottom = o.top + o.height, o
                }
                i.exports = o;
                var r = window,
                    s = r.document,
                    l = s.documentElement
            }), t.register("component-classes/index.js", function (t, e, i) {
                function n(t) {
                    if (!t) throw new Error("A DOM element reference is required");
                    this.el = t, this.list = t.classList
                }
                var a = e("indexof"),
                    o = Object.prototype.toString;
                i.exports = function (t) {
                    return new n(t)
                }, n.prototype.add = function (t) {
                    if (this.list) return this.list.add(t), this;
                    var e = this.array();
                    return ~a(e, t) || e.push(t), this.el.className = e.join(" "), this
                }, n.prototype.remove = function (t) {
                    if ("[object RegExp]" == o.call(t)) return this.removeMatching(t);
                    if (this.list) return this.list.remove(t), this;
                    var e = this.array(),
                        i = a(e, t);
                    return ~i && e.splice(i, 1), this.el.className = e.join(" "), this
                }, n.prototype.removeMatching = function (t) {
                    for (var e = this.array(), i = 0; i < e.length; i++) t.test(e[i]) && this.remove(e[i]);
                    return this
                }, n.prototype.toggle = function (t) {
                    return this.list ? (this.list.toggle(t), this) : (this.has(t) ? this.remove(t) : this.add(t), this)
                }, n.prototype.array = function () {
                    var t = this.el.className.replace(/^\s+|\s+$/g, ""),
                        e = t.split(/\s+/);
                    return "" === e[0] && e.shift(), e
                }, n.prototype.has = n.prototype.contains = function (t) {
                    return this.list ? this.list.contains(t) : !!~a(this.array(), t)
                }
            }), t.register("component-indexof/index.js", function (t, e, i) {
                i.exports = function (t, e) {
                    if (t.indexOf) return t.indexOf(e);
                    for (var i = 0; i < t.length; ++i)
                        if (t[i] === e) return i;
                    return -1
                }
            }), t.register("tooltip/index.js", function (t, e, i) {
                "use strict";

                function n(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }

                function a(t) {
                    return 0 | Math.round(String(t).replace(/[^\-0-9.]/g, ""))
                }

                function o(t) {
                    var e = String(m(t, o.propName)),
                        i = e.match(/([0-9.]+)([ms]{1,2})/);
                    return i && (e = Number(i[1]), "s" === i[2] && (e *= 1e3)), 0 | e
                }

                function r(t, e) {
                    return this instanceof r ? (this.hidden = 1, this.options = n(f(r.defaults), e), this._createElement(), void this.content(t)) : new r(t, e)
                }
                var s = e("event"),
                    l = e("classes"),
                    h = e("indexof"),
                    p = e("position"),
                    c = window,
                    u = c.document,
                    d = u.body,
                    g = ["top", "bottom"];
                i.exports = r;
                var f = Object.create || function () {
                        function t() {}
                        return function (e) {
                            return t.prototype = e, new t
                        }
                    }(),
                    m = c.getComputedStyle ? function (t, e) {
                        return c.getComputedStyle(t, null)[e]
                    } : function (t, e) {
                        return t.currentStyle[e]
                    };
                o.propName = function () {
                    for (var t = u.createElement("div"), e = ["transitionDuration", "webkitTransitionDuration"], i = 0; i < e.length; i++)
                        if (t.style[e[i]] = "1s", "1s" === t.style[e[i]]) return e[i]
                }(), r.prototype._createElement = function () {
                    this.element = u.createElement("div"), this.classes = l(this.element), this.classes.add(this.options.baseClass);
                    for (var t, e = 0; e < r.classTypes.length; e++) t = r.classTypes[e] + "Class", this.options[t] && this.classes.add(this.options[t])
                }, r.prototype.type = function (t) {
                    return this.changeClassType("type", t)
                }, r.prototype.effect = function (t) {
                    return this.changeClassType("effect", t)
                }, r.prototype.changeClassType = function (t, e) {
                    return t += "Class", this.options[t] && this.classes.remove(this.options[t]), this.options[t] = e, e && this.classes.add(e), this
                }, r.prototype.updateSize = function () {
                    return this.hidden && (this.element.style.visibility = "hidden", d.appendChild(this.element)), this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, null == this.spacing && (this.spacing = null != this.options.spacing ? this.options.spacing : a(m(this.element, "top"))), this.hidden ? (d.removeChild(this.element), this.element.style.visibility = "") : this.position(), this
                }, r.prototype.content = function (t) {
                    return "object" == typeof t ? (this.element.innerHTML = "", this.element.appendChild(t)) : this.element.innerHTML = t, this.updateSize(), this
                }, r.prototype.place = function (t) {
                    return this.options.place = t, this.hidden || this.position(), this
                }, r.prototype.attach = function (t) {
                    return this.attachedTo = t, this.hidden || this.position(), this
                }, r.prototype.detach = function () {
                    return this.hide(), this.attachedTo = null, this
                }, r.prototype._pickPlace = function (t) {
                    if (!this.options.auto) return this.options.place;
                    var e = p(c),
                        i = this.options.place.split("-"),
                        n = this.spacing;
                    if (~h(g, i[0])) switch (t.top - this.height - n <= e.top ? i[0] = "bottom" : t.bottom + this.height + n >= e.bottom && (i[0] = "top"), i[1]) {
                        case "left":
                            t.right - this.width <= e.left && (i[1] = "right");
                            break;
                        case "right":
                            t.left + this.width >= e.right && (i[1] = "left");
                            break;
                        default:
                            t.left + t.width / 2 + this.width / 2 >= e.right ? i[1] = "left" : t.right - t.width / 2 - this.width / 2 <= e.left && (i[1] = "right")
                    } else switch (t.left - this.width - n <= e.left ? i[0] = "right" : t.right + this.width + n >= e.right && (i[0] = "left"), i[1]) {
                        case "top":
                            t.bottom - this.height <= e.top && (i[1] = "bottom");
                            break;
                        case "bottom":
                            t.top + this.height >= e.bottom && (i[1] = "top");
                            break;
                        default:
                            t.top + t.height / 2 + this.height / 2 >= e.bottom ? i[1] = "top" : t.bottom - t.height / 2 - this.height / 2 <= e.top && (i[1] = "bottom")
                    }
                    return i.join("-")
                }, r.prototype.position = function (t, e) {
                    this.attachedTo && (t = this.attachedTo), null == t && this._p ? (t = this._p[0], e = this._p[1]) : this._p = arguments;
                    var i = "number" == typeof t ? {
                            left: 0 | t,
                            right: 0 | t,
                            top: 0 | e,
                            bottom: 0 | e,
                            width: 0,
                            height: 0
                        } : p(t),
                        n = this.spacing,
                        a = this._pickPlace(i);
                    a !== this.curPlace && (this.curPlace && this.classes.remove(this.curPlace), this.classes.add(a), this.curPlace = a);
                    var o, r;
                    switch (this.curPlace) {
                        case "top":
                            o = i.top - this.height - n, r = i.left + i.width / 2 - this.width / 2;
                            break;
                        case "top-left":
                            o = i.top - this.height - n, r = i.right - this.width;
                            break;
                        case "top-right":
                            o = i.top - this.height - n, r = i.left;
                            break;
                        case "bottom":
                            o = i.bottom + n, r = i.left + i.width / 2 - this.width / 2;
                            break;
                        case "bottom-left":
                            o = i.bottom + n, r = i.right - this.width;
                            break;
                        case "bottom-right":
                            o = i.bottom + n, r = i.left;
                            break;
                        case "left":
                            o = i.top + i.height / 2 - this.height / 2, r = i.left - this.width - n;
                            break;
                        case "left-top":
                            o = i.bottom - this.height, r = i.left - this.width - n;
                            break;
                        case "left-bottom":
                            o = i.top, r = i.left - this.width - n;
                            break;
                        case "right":
                            o = i.top + i.height / 2 - this.height / 2, r = i.right + n;
                            break;
                        case "right-top":
                            o = i.bottom - this.height, r = i.right + n;
                            break;
                        case "right-bottom":
                            o = i.top, r = i.right + n
                    }
                    return this.element.style.top = Math.round(o) + "px", this.element.style.left = Math.round(r) + "px", this
                }, r.prototype.show = function (t, e) {
                    return t = this.attachedTo ? this.attachedTo : t, clearTimeout(this.aIndex), null != t && this.position(t, e), this.hidden && (this.hidden = 0, d.appendChild(this.element)), this.attachedTo && this._aware(), this.options.inClass && (this.options.effectClass && this.element.clientHeight,
                        this.classes.add(this.options.inClass)), this
                }, r.prototype.hide = function () {
                    if (!this.hidden) {
                        var t = this,
                            e = 0;
                        return this.options.inClass && (this.classes.remove(this.options.inClass), this.options.effectClass && (e = o(this.element))), this.attachedTo && this._unaware(), clearTimeout(this.aIndex), this.aIndex = setTimeout(function () {
                            t.aIndex = 0, d.removeChild(t.element), t.hidden = 1
                        }, e), this
                    }
                }, r.prototype.toggle = function (t, e) {
                    return this[this.hidden ? "show" : "hide"](t, e)
                }, r.prototype.destroy = function () {
                    clearTimeout(this.aIndex), this._unaware(), this.hidden || d.removeChild(this.element), this.element = this.options = null
                }, r.prototype._aware = function () {
                    ~h(r.winAware, this) || r.winAware.push(this)
                }, r.prototype._unaware = function () {
                    var t = h(r.winAware, this);
                    ~t && r.winAware.splice(t, 1)
                }, r.reposition = function () {
                    function t() {
                        !i && r.winAware.length && (i = n(e, 17))
                    }

                    function e() {
                        i = 0;
                        for (var t, e = 0, n = r.winAware.length; n > e; e++) t = r.winAware[e], t.position()
                    }
                    var i, n = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (t) {
                        return setTimeout(t, 17)
                    };
                    return t
                }(), r.winAware = [], s.bind(window, "resize", r.reposition), s.bind(window, "scroll", r.reposition), r.classTypes = ["type", "effect"], r.defaults = {
                    baseClass: "tooltip",
                    typeClass: null,
                    effectClass: null,
                    inClass: "in",
                    place: "top",
                    spacing: null,
                    auto: 0
                }
            }), t.alias("darsain-event/index.js", "tooltip/deps/event/index.js"), t.alias("darsain-event/index.js", "event/index.js"), t.alias("darsain-position/index.js", "tooltip/deps/position/index.js"), t.alias("darsain-position/index.js", "position/index.js"), t.alias("component-classes/index.js", "tooltip/deps/classes/index.js"), t.alias("component-classes/index.js", "classes/index.js"), t.alias("component-indexof/index.js", "component-classes/deps/indexof/index.js"), t.alias("component-indexof/index.js", "tooltip/deps/indexof/index.js"), t.alias("component-indexof/index.js", "indexof/index.js"), "object" == typeof exports ? module.exports = t("tooltip") : "function" == typeof define && define.amd ? define(function () {
                return t("tooltip")
            }) : this.Tooltip = t("tooltip")
        }()
}();