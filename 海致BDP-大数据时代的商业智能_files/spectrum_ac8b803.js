! function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports && "object" == typeof module ? module.exports = t : t(jQuery)
}(function (t, e) {
    "use strict";

    function r(e, r, n, a) {
        for (var i = [], o = 0; o < e.length; o++) {
            var s = e[o];
            if (s) {
                var l = tinycolor(s),
                    c = l.toHsl().l < .5 ? "sp-thumb-el sp-thumb-dark" : "sp-thumb-el sp-thumb-light";
                c += tinycolor.equals(r, s) ? " sp-thumb-active" : "";
                var f = l.toString(a.preferredFormat || "rgb"),
                    u = b ? "background-color:" + l.toRgbString() : "filter:" + l.toFilter();
                i.push('<span title="' + f + '" data-color="' + l.toRgbString() + '" class="' + c + '"><span class="sp-thumb-inner" style="' + u + ';" /></span>')
            } else {
                i.push(t("<div />").append(t('<span data-color="" style="background-color:transparent;" class="sp-clear-display"></span>').attr("title", a.noColorSelectedText)).html())
            }
        }
        return "<div class='sp-cf " + n + "'>" + i.join("") + "</div>"
    }

    function n() {
        for (var t = 0; t < p.length; t++) p[t] && p[t].hide()
    }

    function a(e, r) {
        var n = t.extend({}, d, e);
        return n.callbacks = {
            move: c(n.move, r),
            change: c(n.change, r),
            show: c(n.show, r),
            hide: c(n.hide, r),
            beforeShow: c(n.beforeShow, r),
            complete: c(n.complete, r)
        }, n
    }

    function i(i, s) {
        function c() {
            if ($.showPaletteOnly && ($.showPalette = !0), Dt.text($.showPaletteOnly ? $.togglePaletteMoreText : $.togglePaletteLessText), $.palette) {
                dt = $.palette.slice(0), pt = t.isArray(dt[0]) ? dt : [dt], gt = {};
                for (var e = 0; e < pt.length; e++)
                    for (var r = 0; r < pt[e].length; r++) {
                        var n = tinycolor(pt[e][r]).toRgbString();
                        gt[n] = !0
                    }
            }
            kt.toggleClass("sp-flat", X), kt.toggleClass("sp-input-disabled", !$.showInput), kt.toggleClass("sp-alpha-enabled", $.showAlpha), kt.toggleClass("sp-clear-enabled", Jt), kt.toggleClass("sp-buttons-disabled", !$.showButtons), kt.toggleClass("sp-palette-buttons-disabled", !$.togglePaletteOnly), kt.toggleClass("sp-palette-disabled", !$.showPalette), kt.toggleClass("sp-palette-only", $.showPaletteOnly), kt.toggleClass("sp-initial-disabled", !$.showInitial), kt.addClass($.className).addClass($.containerClassName), z()
        }

        function d() {
            if (G && window.localStorage) {
                try {
                    var e = window.localStorage[G].split(",#");
                    e.length > 1 && (delete window.localStorage[G], t.each(e, function (t, e) {
                        y(e)
                    }))
                } catch (t) {}
                try {
                    bt = window.localStorage[G].split(";")
                } catch (t) {}
            }
        }

        function y(e) {
            if (Y) {
                var r = tinycolor(e).toRgbString();
                if (!gt[r] && t.inArray(r, bt) === -1)
                    for (bt.push(r); bt.length > vt;) bt.shift();
                if (G && window.localStorage) try {
                    window.localStorage[G] = bt.join(";")
                } catch (t) {}
            }
        }

        function w() {
            var t = [];
            if ($.showPalette)
                for (var e = 0; e < bt.length; e++) {
                    var r = tinycolor(bt[e]).toRgbString();
                    gt[r] || t.push(bt[e])
                }
            return t.reverse().slice(0, $.maxSelectionSize)
        }

        function _() {
            var e = N(),
                n = t.map(pt, function (t, n) {
                    return r(t, e, "sp-palette-row sp-palette-row-" + n, $)
                });
            d(), bt && n.push(r(w(), e, "sp-palette-row sp-palette-row-selection", $)), Ot.html(n.join(""))
        }

        function x() {
            if ($.showInitial) {
                var t = $t,
                    e = N();
                Nt.html(r([t, e], e, "sp-palette-row-initial", $))
            }
        }

        function k() {
            (rt <= 0 || et <= 0 || at <= 0) && z(), tt = !0, kt.addClass(mt), yt = null, _t.trigger("dragstart.spectrum", [N()])
        }

        function S() {
            tt = !1, kt.removeClass(mt), _t.trigger("dragstop.spectrum", [N()])
        }

        function C() {
            var t = Ft.val();
            if (null !== t && "" !== t || !Jt) {
                var e = tinycolor(t);
                e.isValid() ? (O(e), I(!0)) : Ft.addClass("sp-validation-error")
            } else O(null), I(!0)
        }

        function P() {
            Z ? H() : A()
        }

        function A() {
            var e = t.Event("beforeShow.spectrum");
            if (Z) return void z();
            _t.trigger(e, [N()]), J.beforeShow(N()) === !1 || e.isDefaultPrevented() || (n(), Z = !0, t(wt).bind("keydown.spectrum", M), t(wt).bind("click.spectrum", R), t(window).bind("resize.spectrum", U), Lt.addClass("sp-active"), kt.removeClass("sp-hidden"), z(), q(), $t = N(), x(), J.show($t), _t.trigger("show.spectrum", [$t]))
        }

        function M(t) {
            27 === t.keyCode && H()
        }

        function R(t) {
            2 != t.button && (tt || (Gt ? I(!0) : F(), H()))
        }

        function H() {
            Z && !X && (Z = !1, t(wt).unbind("keydown.spectrum", M), t(wt).unbind("click.spectrum", R), t(window).unbind("resize.spectrum", U), Lt.removeClass("sp-active"), kt.addClass("sp-hidden"), J.hide(N()), _t.trigger("hide.spectrum", [N()]))
        }

        function T() {
            Z && !X && (Z = !1, t(wt).unbind("keydown.spectrum", M), t(wt).unbind("click.spectrum", R), t(window).unbind("resize.spectrum", U), Lt.removeClass("sp-active"), kt.addClass("sp-hidden"), J.complete(N()), _t.trigger("complete.spectrum", [N()]))
        }

        function F() {
            O($t, !0)
        }

        function O(t, e) {
            if (tinycolor.equals(t, N())) return void q();
            var r, n;
            !t && Jt ? Qt = !0 : (Qt = !1, r = tinycolor(t), n = r.toHsv(), ct = n.h % 360 / 360, ft = n.s, ut = n.v, ht = n.a), q(), r && r.isValid() && !e && (Yt = Xt || r.getFormat())
        }

        function N(t) {
            return t = t || {}, Jt && Qt ? null : tinycolor.fromRatio({
                h: ct,
                s: ft,
                v: ut,
                a: Math.round(100 * ht) / 100
            }, {
                format: t.format || Yt
            })
        }

        function E() {
            return !Ft.hasClass("sp-validation-error")
        }

        function j() {
            q(), J.move(N()), _t.trigger("move.spectrum", [N()])
        }

        function q() {
            Ft.removeClass("sp-validation-error"), D();
            var t = tinycolor.fromRatio({
                h: ct,
                s: 1,
                v: 1
            });
            Ct.css("background-color", t.toHexString());
            var e = Yt;
            ht < 1 && (0 !== ht || "name" !== e) && ("hex" !== e && "hex3" !== e && "hex6" !== e && "name" !== e || (e = "rgb"));
            var r = N({
                    format: e
                }),
                n = "";
            if (Vt.removeClass("sp-clear-display"), Vt.css("background-color", "transparent"), !r && Jt) Vt.addClass("sp-clear-display");
            else {
                var a = r.toHexString(),
                    i = r.toRgbString();
                if (b || 1 === r.alpha ? Vt.css("background-color", i) : (Vt.css("background-color", "transparent"), Vt.css("filter", r.toFilter())), $.showAlpha) {
                    var o = r.toRgb();
                    o.a = 0;
                    var s = tinycolor(o).toRgbString(),
                        l = "linear-gradient(left, " + s + ", " + a + ")";
                    g ? Rt.css("filter", tinycolor(s).toFilter({
                        gradientType: 1
                    }, a)) : (Rt.css("background", "-webkit-" + l), Rt.css("background", "-moz-" + l), Rt.css("background", "-ms-" + l), Rt.css("background", "linear-gradient(to right, " + s + ", " + a + ")"))
                }
                n = r.toString(e)
            }
            $.showInput && Ft.val(n), $.showPalette && _(), x()
        }

        function D() {
            var t = ft,
                e = ut;
            if (Jt && Qt) Tt.hide(), Mt.hide(), Pt.hide();
            else {
                Tt.show(), Mt.show(), Pt.show();
                var r = t * et,
                    n = rt - e * rt;
                r = Math.max(-nt, Math.min(et - nt, r - nt)), n = Math.max(-nt, Math.min(rt - nt, n - nt)), Pt.css({
                    top: n + "px",
                    left: r + "px"
                });
                var a = ht * ot;
                Tt.css({
                    left: a - st / 2 + "px"
                });
                var i = ct * at;
                Mt.css({
                    top: i - lt + "px"
                })
            }
        }

        function I(t) {
            var e = N(),
                r = "",
                n = !tinycolor.equals(e, $t);
            e && (r = e.toString(Yt), y(e)), It && _t.val(r), t && n && (J.change(e), _t.trigger("change", [e]))
        }

        function z() {
            et = Ct.width(), rt = Ct.height(), nt = Pt.height(), it = At.width(), at = At.height(), lt = Mt.height(), ot = Ht.width(), st = Tt.width(), X || (kt.css("position", "absolute"), $.offset ? kt.offset($.offset) : kt.offset(o(kt, Kt))), D(), $.showPalette && _(), _t.trigger("reflow.spectrum")
        }

        function B() {
            _t.show(), Kt.unbind("click.spectrum touchstart.spectrum"), kt.remove(), Lt.remove(), p[Ut.id] = null
        }

        function L(r, n) {
            return r === e ? t.extend({}, $) : n === e ? $[r] : ($[r] = n, void c())
        }

        function K() {
            xt = !1, _t.attr("disabled", !1), Kt.removeClass("sp-disabled")
        }

        function V() {
            H(), xt = !0, _t.attr("disabled", !0), Kt.addClass("sp-disabled")
        }

        function W(t) {
            $.offset = t, z()
        }
        var $ = a(s, i),
            X = $.flat,
            Y = $.showSelectionPalette,
            G = $.localStorageKey,
            Q = $.theme,
            J = $.callbacks,
            U = u(z, 10),
            Z = !1,
            tt = !1,
            et = 0,
            rt = 0,
            nt = 0,
            at = 0,
            it = 0,
            ot = 0,
            st = 0,
            lt = 0,
            ct = 0,
            ft = 0,
            ut = 0,
            ht = 1,
            dt = [],
            pt = [],
            gt = {},
            bt = $.selectionPalette.slice(0),
            vt = $.maxSelectionSize,
            mt = "sp-dragging",
            yt = null,
            wt = i.ownerDocument,
            _t = (wt.body, t(i)),
            xt = !1,
            kt = t(m, wt).addClass(Q),
            St = kt.find(".sp-picker-container"),
            Ct = kt.find(".sp-color"),
            Pt = kt.find(".sp-dragger"),
            At = kt.find(".sp-hue"),
            Mt = kt.find(".sp-slider"),
            Rt = kt.find(".sp-alpha-inner"),
            Ht = kt.find(".sp-alpha"),
            Tt = kt.find(".sp-alpha-handle"),
            Ft = kt.find(".sp-input"),
            Ot = kt.find(".sp-palette"),
            Nt = kt.find(".sp-initial"),
            Et = kt.find(".sp-cancel"),
            jt = kt.find(".sp-clear"),
            qt = kt.find(".sp-choose"),
            Dt = kt.find(".sp-palette-toggle"),
            It = _t.is("input"),
            zt = It && "color" === _t.attr("type") && h(),
            Bt = It && !X,
            Lt = Bt ? t(v).addClass(Q).addClass($.className).addClass($.replacerClassName) : t([]),
            Kt = Bt ? Lt : _t,
            Vt = Lt.find(".sp-preview-inner"),
            Wt = $.color || It && _t.val(),
            $t = !1,
            Xt = $.preferredFormat,
            Yt = Xt,
            Gt = !$.showButtons || $.clickoutFiresChange,
            Qt = !Wt,
            Jt = $.allowEmpty && !zt;
        ! function () {
            function e(e) {
                return e.data && e.data.ignore ? (O(t(e.target).closest(".sp-thumb-el").data("color")), j()) : (O(t(e.target).closest(".sp-thumb-el").data("color")), j(), I(!0), $.hideAfterPaletteSelect && H()), !1
            }
            if (g && kt.find("*:not(input)").attr("unselectable", "on"), c(), Bt && _t.after(Lt).hide(), Jt || jt.hide(), X) _t.after(kt).hide();
            else {
                var r = "parent" === $.appendTo ? _t.parent() : t($.appendTo);
                1 !== r.length && (r = t("body")), r.append(kt)
            }
            d(), Kt.bind("click.spectrum touchstart.spectrum", function (e) {
                xt || P(), e.stopPropagation(), t(e.target).is("input") || e.preventDefault()
            }), (_t.is(":disabled") || $.disabled === !0) && V(), kt.click(l), Ft.change(C), Ft.bind("paste", function () {
                setTimeout(C, 1)
            }), Ft.keydown(function (t) {
                13 == t.keyCode && C()
            }), Et.text($.cancelText), Et.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), F(), H()
            }), jt.attr("title", $.clearText), jt.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), Qt = !0, j(), X && I(!0)
            }), qt.text($.chooseText), qt.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), g && Ft.is(":focus") && Ft.trigger("change"), E() && (I(!0), $.notTwoWayBinding ? T() : H())
            }), Dt.text($.showPaletteOnly ? $.togglePaletteMoreText : $.togglePaletteLessText), Dt.bind("click.spectrum", function (t) {
                t.stopPropagation(), t.preventDefault(), $.showPaletteOnly = !$.showPaletteOnly, $.showPaletteOnly || X || kt.css("left", "-=" + (St.outerWidth(!0) + 5)), c()
            }), f(Ht, function (t, e, r) {
                ht = t / ot, Qt = !1, r.shiftKey && (ht = Math.round(10 * ht) / 10), j()
            }, k, S), f(At, function (t, e) {
                ct = parseFloat(e / at), Qt = !1, $.showAlpha && !$.changeAlphaNone || (ht = 1), j()
            }, k, S), f(Ct, function (t, e, r) {
                if (r.shiftKey) {
                    if (!yt) {
                        var n = ft * et,
                            a = rt - ut * rt,
                            i = Math.abs(t - n) > Math.abs(e - a);
                        yt = i ? "x" : "y"
                    }
                } else yt = null;
                var o = !yt || "x" === yt,
                    s = !yt || "y" === yt;
                o && (ft = parseFloat(t / et)), s && (ut = parseFloat((rt - e) / rt)), Qt = !1, $.showAlpha && !$.changeAlphaNone || (ht = 1), j()
            }, k, S), Wt ? (O(Wt), q(), Yt = Xt || tinycolor(Wt).format, y(Wt)) : q(), X && A();
            var n = g ? "mousedown.spectrum" : "click.spectrum touchstart.spectrum";
            Ot.delegate(".sp-thumb-el", n, e), Nt.delegate(".sp-thumb-el:nth-child(1)", n, {
                ignore: !0
            }, e)
        }();
        var Ut = {
            show: A,
            hide: H,
            toggle: P,
            reflow: z,
            option: L,
            enable: K,
            disable: V,
            offset: W,
            set: function (t) {
                O(t), I()
            },
            get: N,
            destroy: B,
            container: kt
        };
        return Ut.id = p.push(Ut) - 1, Ut
    }

    function o(e, r) {
        var n = e.outerWidth(),
            a = e.outerHeight(),
            i = r.outerHeight(),
            o = e[0].ownerDocument,
            s = o.documentElement,
            l = s.clientWidth + t(o).scrollLeft(),
            c = s.clientHeight + t(o).scrollTop(),
            f = r.offset();
        return f.top += i, f.left -= Math.min(f.left, f.left + n > l && l > n ? Math.abs(f.left + n - l) : 0), f.top -= Math.min(f.top, f.top + a > c && c > a ? Math.abs(a + i - 0) : 0), f
    }

    function s() {}

    function l(t) {
        t.stopPropagation()
    }

    function c(t, e) {
        var r = Array.prototype.slice,
            n = r.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(r.call(arguments)))
        }
    }

    function f(e, r, n, a) {
        function i(t) {
            t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.returnValue = !1
        }

        function o(t) {
            if (f) {
                if (g && c.documentMode < 9 && !t.button) return l();
                var n = t.originalEvent && t.originalEvent.touches && t.originalEvent.touches[0],
                    a = n && n.pageX || t.pageX,
                    o = n && n.pageY || t.pageY,
                    s = Math.max(0, Math.min(a - u.left, d)),
                    b = Math.max(0, Math.min(o - u.top, h));
                p && i(t), r.apply(e, [s, b, t])
            }
        }

        function s(r) {
            (r.which ? 3 == r.which : 2 == r.button) || f || n.apply(e, arguments) !== !1 && (f = !0, h = t(e).height(), d = t(e).width(), u = t(e).offset(), t(c).bind(b), t(c.body).addClass("sp-dragging"), o(r), i(r))
        }

        function l() {
            f && (t(c).unbind(b), t(c.body).removeClass("sp-dragging"), setTimeout(function () {
                a.apply(e, arguments)
            }, 0)), f = !1
        }
        r = r || function () {}, n = n || function () {}, a = a || function () {};
        var c = document,
            f = !1,
            u = {},
            h = 0,
            d = 0,
            p = "ontouchstart" in window,
            b = {};
        b.selectstart = i, b.dragstart = i, b["touchmove mousemove"] = o, b["touchend mouseup"] = l, t(e).bind("touchstart mousedown", s)
    }

    function u(t, e, r) {
        var n;
        return function () {
            var a = this,
                i = arguments,
                o = function () {
                    n = null, t.apply(a, i)
                };
            r && clearTimeout(n), !r && n || (n = setTimeout(o, e))
        }
    }

    function h() {
        return t.fn.spectrum.inputTypeColorSupport()
    }
    var d = {
            beforeShow: s,
            move: s,
            change: s,
            show: s,
            hide: s,
            complete: s,
            color: !1,
            flat: !1,
            showInput: !1,
            allowEmpty: !1,
            showButtons: !0,
            clickoutFiresChange: !0,
            showInitial: !1,
            showPalette: !1,
            showPaletteOnly: !1,
            hideAfterPaletteSelect: !1,
            togglePaletteOnly: !1,
            showSelectionPalette: !0,
            localStorageKey: !1,
            appendTo: "body",
            maxSelectionSize: 7,
            cancelText: "cancel",
            chooseText: "choose",
            togglePaletteMoreText: "more",
            togglePaletteLessText: "less",
            clearText: "Clear Color Selection",
            noColorSelectedText: "No Color Selected",
            preferredFormat: !1,
            className: "",
            containerClassName: "",
            replacerClassName: "",
            showAlpha: !1,
            theme: "sp-light",
            palette: [
                ["#ffffff", "#000000", "#ff0000", "#ff8000", "#ffff00", "#008000", "#0000ff", "#4b0082", "#9400d3"]
            ],
            selectionPalette: [],
            disabled: !1,
            offset: null
        },
        p = [],
        g = !!/msie/i.exec(window.navigator.userAgent),
        b = function () {
            function t(t, e) {
                return !!~("" + t).indexOf(e)
            }
            var e = document.createElement("div"),
                r = e.style;
            return r.cssText = "background-color:rgba(0,0,0,.5)", t(r.backgroundColor, "rgba") || t(r.backgroundColor, "hsla")
        }(),
        v = ["<div class='sp-replacer'>", "<div class='sp-preview'><div class='sp-preview-inner '></div></div>", "<div class='sp-dd'>&#9660;</div>", "</div>"].join(""),
        m = function () {
            var t = "";
            if (g)
                for (var e = 1; e <= 6; e++) t += "<div class='sp-" + e + "'></div>";
            return ["<div class='sp-container sp-hidden'>", "<div class='sp-palette-container'>", "<div class='sp-palette sp-thumb sp-cf'></div>", "<div class='sp-palette-button-container sp-cf'>", "<button type='button' class='sp-palette-toggle'></button>", "</div>", "</div>", "<div class='sp-picker-container'>", "<div class='sp-top sp-cf'>", "<div class='sp-fill'></div>", "<div class='sp-top-inner'>", "<div class='sp-color'>", "<div class='sp-sat'>", "<div class='sp-val'>", "<div class='sp-dragger'></div>", "</div>", "</div>", "</div>", "<div class='sp-clear sp-clear-display'>", "</div>", "<div class='sp-hue'>", "<div class='sp-slider'></div>", t, "</div>", "</div>", "<div class='sp-alpha'><div class='sp-alpha-inner'><div class='sp-alpha-handle'></div></div></div>", "</div>", "<div class='sp-input-container sp-cf'>", "<input class='sp-input' type='text' spellcheck='false'  />", "</div>", "<div class='sp-initial sp-thumb sp-cf'></div>", "<div class='sp-button-container sp-cf'>", "<button type='button' class='sp-choose'></button>", "<a class='sp-cancel' href='#'></a>", "</div>", "</div>", "</div>"].join("")
        }();
    t.fn.spectrum = function (e, r) {
        if ("string" == typeof e) {
            var n = this,
                a = Array.prototype.slice.call(arguments, 1);
            return this.each(function () {
                var r = p[t(this).data("spectrum.id")];
                if (r) {
                    var i = r[e];
                    if (!i) throw new Error("Spectrum: no such method: '" + e + "'");
                    "get" == e ? n = r.get() : "container" == e ? n = r.container : "option" == e ? n = r.option.apply(r, a) : "destroy" == e ? (r.destroy(), t(this).removeData("spectrum.id")) : i.apply(r, a)
                }
            }), n
        }
        return this.spectrum("destroy").each(function () {
            var r = t.extend({}, e, t(this).data()),
                n = i(this, r);
            t(this).data("spectrum.id", n.id)
        })
    },
        t.fn.spectrum.load = !0,
        t.fn.spectrum.loadOpts = {},
        t.fn.spectrum.draggable = f,
        t.fn.spectrum.defaults = d,
        t.fn.spectrum.inputTypeColorSupport = function e() {
            if (void 0 === e._cachedResult) {
                var r = t("<input type='color'/>")[0];
                e._cachedResult = "color" === r.type && "" !== r.value
            }
            return e._cachedResult
        },
        t.spectrum = {},
        t.spectrum.localization = {},
        t.spectrum.palettes = {},
        t.fn.spectrum.processNativeColorInputs = function () {
            var e = t("input[type=color]");
            e.length && !h() && e.spectrum({
                preferredFormat: "hex6"
            })
        },
        function () {
            function t(t) {
                var r = {
                        r: 0,
                        g: 0,
                        b: 0
                    },
                    a = 1,
                    o = !1,
                    s = !1;
                return "string" == typeof t && (t = T(t)), "object" == typeof t && (t.hasOwnProperty("r") && t.hasOwnProperty("g") && t.hasOwnProperty("b") ? (r = e(t.r, t.g, t.b), o = !0, s = "%" === String(t.r).substr(-1) ? "prgb" : "rgb") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("v") ? (t.s = M(t.s), t.v = M(t.v), r = i(t.h, t.s, t.v), o = !0, s = "hsv") : t.hasOwnProperty("h") && t.hasOwnProperty("s") && t.hasOwnProperty("l") && (t.s = M(t.s), t.l = M(t.l), r = n(t.h, t.s, t.l), o = !0, s = "hsl"), t.hasOwnProperty("a") && (a = t.a)), a = _(a), {
                    ok: o,
                    format: t.format || s,
                    r: q(255, D(r.r, 0)),
                    g: q(255, D(r.g, 0)),
                    b: q(255, D(r.b, 0)),
                    a: a
                }
            }

            function e(t, e, r) {
                return {
                    r: 255 * x(t, 255),
                    g: 255 * x(e, 255),
                    b: 255 * x(r, 255)
                }
            }

            function r(t, e, r) {
                t = x(t, 255), e = x(e, 255), r = x(r, 255);
                var n, a, i = D(t, e, r),
                    o = q(t, e, r),
                    s = (i + o) / 2;
                if (i == o) n = a = 0;
                else {
                    var l = i - o;
                    switch (a = s > .5 ? l / (2 - i - o) : l / (i + o), i) {
                        case t:
                            n = (e - r) / l + (e < r ? 6 : 0);
                            break;
                        case e:
                            n = (r - t) / l + 2;
                            break;
                        case r:
                            n = (t - e) / l + 4
                    }
                    n /= 6
                }
                return {
                    h: n,
                    s: a,
                    l: s
                }
            }

            function n(t, e, r) {
                function n(t, e, r) {
                    return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
                }
                var a, i, o;
                if (t = x(t, 360), e = x(e, 100), r = x(r, 100), 0 === e) a = i = o = r;
                else {
                    var s = r < .5 ? r * (1 + e) : r + e - r * e,
                        l = 2 * r - s;
                    a = n(l, s, t + 1 / 3), i = n(l, s, t), o = n(l, s, t - 1 / 3)
                }
                return {
                    r: 255 * a,
                    g: 255 * i,
                    b: 255 * o
                }
            }

            function a(t, e, r) {
                t = x(t, 255), e = x(e, 255), r = x(r, 255);
                var n, a, i = D(t, e, r),
                    o = q(t, e, r),
                    s = i,
                    l = i - o;
                if (a = 0 === i ? 0 : l / i, i == o) n = 0;
                else {
                    switch (i) {
                        case t:
                            n = (e - r) / l + (e < r ? 6 : 0);
                            break;
                        case e:
                            n = (r - t) / l + 2;
                            break;
                        case r:
                            n = (t - e) / l + 4
                    }
                    n /= 6
                }
                return {
                    h: n,
                    s: a,
                    v: s
                }
            }

            function i(t, e, r) {
                t = 6 * x(t, 360), e = x(e, 100), r = x(r, 100);
                var n = E.floor(t),
                    a = t - n,
                    i = r * (1 - e),
                    o = r * (1 - a * e),
                    s = r * (1 - (1 - a) * e),
                    l = n % 6;
                return {
                    r: 255 * [r, o, i, i, s, r][l],
                    g: 255 * [s, r, r, o, i, i][l],
                    b: 255 * [i, i, s, r, r, o][l]
                }
            }

            function o(t, e, r, n) {
                var a = [A(j(t).toString(16)), A(j(e).toString(16)), A(j(r).toString(16))];
                return n && a[0].charAt(0) == a[0].charAt(1) && a[1].charAt(0) == a[1].charAt(1) && a[2].charAt(0) == a[2].charAt(1) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("")
            }

            function s(t, e, r, n) {
                return [A(R(n)), A(j(t).toString(16)), A(j(e).toString(16)), A(j(r).toString(16))].join("")
            }

            function l(t, e) {
                e = 0 === e ? 0 : e || 10;
                var r = z(t).toHsl();
                return r.s -= e / 100, r.s = k(r.s), z(r)
            }

            function c(t, e) {
                e = 0 === e ? 0 : e || 10;
                var r = z(t).toHsl();
                return r.s += e / 100, r.s = k(r.s), z(r)
            }

            function f(t) {
                return z(t).desaturate(100)
            }

            function u(t, e) {
                e = 0 === e ? 0 : e || 10;
                var r = z(t).toHsl();
                return r.l += e / 100, r.l = k(r.l), z(r)
            }

            function h(t, e) {
                e = 0 === e ? 0 : e || 10;
                var r = z(t).toRgb();
                return r.r = D(0, q(255, r.r - j(255 * -(e / 100)))), r.g = D(0, q(255, r.g - j(255 * -(e / 100)))), r.b = D(0, q(255, r.b - j(255 * -(e / 100)))), z(r)
            }

            function d(t, e) {
                e = 0 === e ? 0 : e || 10;
                var r = z(t).toHsl();
                return r.l -= e / 100, r.l = k(r.l), z(r)
            }

            function p(t, e) {
                var r = z(t).toHsl(),
                    n = (j(r.h) + e) % 360;
                return r.h = n < 0 ? 360 + n : n, z(r)
            }

            function g(t) {
                var e = z(t).toHsl();
                return e.h = (e.h + 180) % 360, z(e)
            }

            function b(t) {
                var e = z(t).toHsl(),
                    r = e.h;
                return [z(t), z({
                    h: (r + 120) % 360,
                    s: e.s,
                    l: e.l
                }), z({
                    h: (r + 240) % 360,
                    s: e.s,
                    l: e.l
                })]
            }

            function v(t) {
                var e = z(t).toHsl(),
                    r = e.h;
                return [z(t), z({
                    h: (r + 90) % 360,
                    s: e.s,
                    l: e.l
                }), z({
                    h: (r + 180) % 360,
                    s: e.s,
                    l: e.l
                }), z({
                    h: (r + 270) % 360,
                    s: e.s,
                    l: e.l
                })]
            }

            function m(t) {
                var e = z(t).toHsl(),
                    r = e.h;
                return [z(t), z({
                    h: (r + 72) % 360,
                    s: e.s,
                    l: e.l
                }), z({
                    h: (r + 216) % 360,
                    s: e.s,
                    l: e.l
                })]
            }

            function y(t, e, r) {
                e = e || 6, r = r || 30;
                var n = z(t).toHsl(),
                    a = 360 / r,
                    i = [z(t)];
                for (n.h = (n.h - (a * e >> 1) + 720) % 360; --e;) n.h = (n.h + a) % 360, i.push(z(n));
                return i
            }

            function w(t, e) {
                e = e || 6;
                for (var r = z(t).toHsv(), n = r.h, a = r.s, i = r.v, o = [], s = 1 / e; e--;) o.push(z({
                    h: n,
                    s: a,
                    v: i
                })), i = (i + s) % 1;
                return o
            }

            function _(t) {
                return t = parseFloat(t), (isNaN(t) || t < 0 || t > 1) && (t = 1), t
            }

            function x(t, e) {
                C(t) && (t = "100%");
                var r = P(t);
                return t = q(e, D(0, parseFloat(t))), r && (t = parseInt(t * e, 10) / 100), E.abs(t - e) < 1e-6 ? 1 : t % e / parseFloat(e)
            }

            function k(t) {
                return q(1, D(0, t))
            }

            function S(t) {
                return parseInt(t, 16)
            }

            function C(t) {
                return "string" == typeof t && t.indexOf(".") != -1 && 1 === parseFloat(t)
            }

            function P(t) {
                return "string" == typeof t && t.indexOf("%") != -1
            }

            function A(t) {
                return 1 == t.length ? "0" + t : "" + t
            }

            function M(t) {
                return t <= 1 && (t = 100 * t + "%"), t
            }

            function R(t) {
                return Math.round(255 * parseFloat(t)).toString(16)
            }

            function H(t) {
                return S(t) / 255
            }

            function T(t) {
                t = t.replace(F, "").replace(O, "").toLowerCase();
                var e = !1;
                if (B[t]) t = B[t], e = !0;
                else if ("transparent" == t) return {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 0,
                    format: "name"
                };
                var r;
                return (r = K.rgb.exec(t)) ? {
                    r: r[1],
                    g: r[2],
                    b: r[3]
                } : (r = K.rgba.exec(t)) ? {
                    r: r[1],
                    g: r[2],
                    b: r[3],
                    a: r[4]
                } : (r = K.hsl.exec(t)) ? {
                    h: r[1],
                    s: r[2],
                    l: r[3]
                } : (r = K.hsla.exec(t)) ? {
                    h: r[1],
                    s: r[2],
                    l: r[3],
                    a: r[4]
                } : (r = K.hsv.exec(t)) ? {
                    h: r[1],
                    s: r[2],
                    v: r[3]
                } : (r = K.hsva.exec(t)) ? {
                    h: r[1],
                    s: r[2],
                    v: r[3],
                    a: r[4]
                } : (r = K.hex8.exec(t)) ? {
                    a: H(r[1]),
                    r: S(r[2]),
                    g: S(r[3]),
                    b: S(r[4]),
                    format: e ? "name" : "hex8"
                } : (r = K.hex6.exec(t)) ? {
                    r: S(r[1]),
                    g: S(r[2]),
                    b: S(r[3]),
                    format: e ? "name" : "hex"
                } : !!(r = K.hex3.exec(t)) && {
                    r: S(r[1] + "" + r[1]),
                    g: S(r[2] + "" + r[2]),
                    b: S(r[3] + "" + r[3]),
                    format: e ? "name" : "hex"
                }
            }
            var F = /^[\s,#]+/,
                O = /\s+$/,
                N = 0,
                E = Math,
                j = E.round,
                q = E.min,
                D = E.max,
                I = E.random,
                z = function (e, r) {
                    if (e = e || "", r = r || {}, e instanceof z) return e;
                    if (!(this instanceof z)) return new z(e, r);
                    var n = t(e);
                    this._originalInput = e, this._r = n.r, this._g = n.g, this._b = n.b, this._a = n.a, this._roundA = j(100 * this._a) / 100, this._format = r.format || n.format, this._gradientType = r.gradientType, this._r < 1 && (this._r = j(this._r)), this._g < 1 && (this._g = j(this._g)), this._b < 1 && (this._b = j(this._b)), this._ok = n.ok, this._tc_id = N++
                };
            z.prototype = {
                isDark: function () {
                    return this.getBrightness() < 128
                },
                isLight: function () {
                    return !this.isDark()
                },
                isValid: function () {
                    return this._ok
                },
                getOriginalInput: function () {
                    return this._originalInput
                },
                getFormat: function () {
                    return this._format
                },
                getAlpha: function () {
                    return this._a
                },
                getBrightness: function () {
                    var t = this.toRgb();
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3
                },
                setAlpha: function (t) {
                    return this._a = _(t), this._roundA = j(100 * this._a) / 100, this
                },
                toHsv: function () {
                    var t = a(this._r, this._g, this._b);
                    return {
                        h: 360 * t.h,
                        s: t.s,
                        v: t.v,
                        a: this._a
                    }
                },
                toHsvString: function () {
                    var t = a(this._r, this._g, this._b),
                        e = j(360 * t.h),
                        r = j(100 * t.s),
                        n = j(100 * t.v);
                    return 1 == this._a ? "hsv(" + e + ", " + r + "%, " + n + "%)" : "hsva(" + e + ", " + r + "%, " + n + "%, " + this._roundA + ")"
                },
                toHsl: function () {
                    var t = r(this._r, this._g, this._b);
                    return {
                        h: 360 * t.h,
                        s: t.s,
                        l: t.l,
                        a: this._a
                    }
                },
                toHslString: function () {
                    var t = r(this._r, this._g, this._b),
                        e = j(360 * t.h),
                        n = j(100 * t.s),
                        a = j(100 * t.l);
                    return 1 == this._a ? "hsl(" + e + ", " + n + "%, " + a + "%)" : "hsla(" + e + ", " + n + "%, " + a + "%, " + this._roundA + ")"
                },
                toHex: function (t) {
                    return o(this._r, this._g, this._b, t)
                },
                toHexString: function (t) {
                    return "#" + this.toHex(t)
                },
                toHex8: function () {
                    return s(this._r, this._g, this._b, this._a)
                },
                toHex8String: function () {
                    return "#" + this.toHex8()
                },
                toRgb: function () {
                    return {
                        r: j(this._r),
                        g: j(this._g),
                        b: j(this._b),
                        a: this._a
                    }
                },
                toRgbString: function () {
                    return 1 == this._a ? "rgb(" + j(this._r) + ", " + j(this._g) + ", " + j(this._b) + ")" : "rgba(" + j(this._r) + ", " + j(this._g) + ", " + j(this._b) + ", " + this._roundA + ")"
                },
                toPercentageRgb: function () {
                    return {
                        r: j(100 * x(this._r, 255)) + "%",
                        g: j(100 * x(this._g, 255)) + "%",
                        b: j(100 * x(this._b, 255)) + "%",
                        a: this._a
                    }
                },
                toPercentageRgbString: function () {
                    return 1 == this._a ? "rgb(" + j(100 * x(this._r, 255)) + "%, " + j(100 * x(this._g, 255)) + "%, " + j(100 * x(this._b, 255)) + "%)" : "rgba(" + j(100 * x(this._r, 255)) + "%, " + j(100 * x(this._g, 255)) + "%, " + j(100 * x(this._b, 255)) + "%, " + this._roundA + ")"
                },
                toName: function () {
                    return 0 === this._a ? "transparent" : !(this._a < 1) && (L[o(this._r, this._g, this._b, !0)] || !1)
                },
                toFilter: function (t) {
                    var e = "#" + s(this._r, this._g, this._b, this._a),
                        r = e,
                        n = this._gradientType ? "GradientType = 1, " : "";
                    if (t) {
                        r = z(t).toHex8String()
                    }
                    return "progid:DXImageTransform.Microsoft.gradient(" + n + "startColorstr=" + e + ",endColorstr=" + r + ")"
                },
                toString: function (t) {
                    var e = !!t;
                    t = t || this._format;
                    var r = !1,
                        n = this._a < 1 && this._a >= 0;
                    return e || !n || "hex" !== t && "hex6" !== t && "hex3" !== t && "name" !== t ? ("rgb" === t && (r = this.toRgbString()), "prgb" === t && (r = this.toPercentageRgbString()), "hex" !== t && "hex6" !== t || (r = this.toHexString()), "hex3" === t && (r = this.toHexString(!0)), "hex8" === t && (r = this.toHex8String()), "name" === t && (r = this.toName()), "hsl" === t && (r = this.toHslString()), "hsv" === t && (r = this.toHsvString()), r || this.toHexString()) : "name" === t && 0 === this._a ? this.toName() : this.toRgbString()
                },
                _applyModification: function (t, e) {
                    var r = t.apply(null, [this].concat([].slice.call(e)));
                    return this._r = r._r, this._g = r._g, this._b = r._b, this.setAlpha(r._a), this
                },
                lighten: function () {
                    return this._applyModification(u, arguments)
                },
                brighten: function () {
                    return this._applyModification(h, arguments)
                },
                darken: function () {
                    return this._applyModification(d, arguments)
                },
                desaturate: function () {
                    return this._applyModification(l, arguments)
                },
                saturate: function () {
                    return this._applyModification(c, arguments)
                },
                greyscale: function () {
                    return this._applyModification(f, arguments)
                },
                spin: function () {
                    return this._applyModification(p, arguments)
                },
                _applyCombination: function (t, e) {
                    return t.apply(null, [this].concat([].slice.call(e)))
                },
                analogous: function () {
                    return this._applyCombination(y, arguments)
                },
                complement: function () {
                    return this._applyCombination(g, arguments)
                },
                monochromatic: function () {
                    return this._applyCombination(w, arguments)
                },
                splitcomplement: function () {
                    return this._applyCombination(m, arguments)
                },
                triad: function () {
                    return this._applyCombination(b, arguments)
                },
                tetrad: function () {
                    return this._applyCombination(v, arguments)
                }
            },
                z.fromRatio = function (t, e) {
                    if ("object" == typeof t) {
                        var r = {};
                        for (var n in t) t.hasOwnProperty(n) && (r[n] = "a" === n ? t[n] : M(t[n]));
                        t = r
                    }
                    return z(t, e)
                },
                z.equals = function (t, e) {
                    return !(!t || !e) && z(t).toRgbString() == z(e).toRgbString()
                },
                z.random = function () {
                    return z.fromRatio({
                        r: I(),
                        g: I(),
                        b: I()
                    })
                },
                z.mix = function (t, e, r) {
                    r = 0 === r ? 0 : r || 50;
                    var n, a = z(t).toRgb(),
                        i = z(e).toRgb(),
                        o = r / 100,
                        s = 2 * o - 1,
                        l = i.a - a.a;
                    n = s * l == -1 ? s : (s + l) / (1 + s * l), n = (n + 1) / 2;
                    var c = 1 - n,
                        f = {
                            r: i.r * n + a.r * c,
                            g: i.g * n + a.g * c,
                            b: i.b * n + a.b * c,
                            a: i.a * o + a.a * (1 - o)
                        };
                    return z(f)
                },
                z.readability = function (t, e) {
                    var r = z(t),
                        n = z(e),
                        a = r.toRgb(),
                        i = n.toRgb(),
                        o = r.getBrightness(),
                        s = n.getBrightness(),
                        l = Math.max(a.r, i.r) - Math.min(a.r, i.r) + Math.max(a.g, i.g) - Math.min(a.g, i.g) + Math.max(a.b, i.b) - Math.min(a.b, i.b);
                    return {
                        brightness: Math.abs(o - s),
                        color: l
                    }
                },
                z.isReadable = function (t, e) {
                    var r = z.readability(t, e);
                    return r.brightness > 125 && r.color > 500
                },
                z.mostReadable = function (t, e) {
                    for (var r = null, n = 0, a = !1, i = 0; i < e.length; i++) {
                        var o = z.readability(t, e[i]),
                            s = o.brightness > 125 && o.color > 500,
                            l = o.brightness / 125 * 3 + o.color / 500;
                        (s && !a || s && a && l > n || !s && !a && l > n) && (a = s, n = l, r = z(e[i]))
                    }
                    return r
                };
            var B = z.names = {
                    aliceblue: "f0f8ff",
                    antiquewhite: "faebd7",
                    aqua: "0ff",
                    aquamarine: "7fffd4",
                    azure: "f0ffff",
                    beige: "f5f5dc",
                    bisque: "ffe4c4",
                    black: "000",
                    blanchedalmond: "ffebcd",
                    blue: "00f",
                    blueviolet: "8a2be2",
                    brown: "a52a2a",
                    burlywood: "deb887",
                    burntsienna: "ea7e5d",
                    cadetblue: "5f9ea0",
                    chartreuse: "7fff00",
                    chocolate: "d2691e",
                    coral: "ff7f50",
                    cornflowerblue: "6495ed",
                    cornsilk: "fff8dc",
                    crimson: "dc143c",
                    cyan: "0ff",
                    darkblue: "00008b",
                    darkcyan: "008b8b",
                    darkgoldenrod: "b8860b",
                    darkgray: "a9a9a9",
                    darkgreen: "006400",
                    darkgrey: "a9a9a9",
                    darkkhaki: "bdb76b",
                    darkmagenta: "8b008b",
                    darkolivegreen: "556b2f",
                    darkorange: "ff8c00",
                    darkorchid: "9932cc",
                    darkred: "8b0000",
                    darksalmon: "e9967a",
                    darkseagreen: "8fbc8f",
                    darkslateblue: "483d8b",
                    darkslategray: "2f4f4f",
                    darkslategrey: "2f4f4f",
                    darkturquoise: "00ced1",
                    darkviolet: "9400d3",
                    deeppink: "ff1493",
                    deepskyblue: "00bfff",
                    dimgray: "696969",
                    dimgrey: "696969",
                    dodgerblue: "1e90ff",
                    firebrick: "b22222",
                    floralwhite: "fffaf0",
                    forestgreen: "228b22",
                    fuchsia: "f0f",
                    gainsboro: "dcdcdc",
                    ghostwhite: "f8f8ff",
                    gold: "ffd700",
                    goldenrod: "daa520",
                    gray: "808080",
                    green: "008000",
                    greenyellow: "adff2f",
                    grey: "808080",
                    honeydew: "f0fff0",
                    hotpink: "ff69b4",
                    indianred: "cd5c5c",
                    indigo: "4b0082",
                    ivory: "fffff0",
                    khaki: "f0e68c",
                    lavender: "e6e6fa",
                    lavenderblush: "fff0f5",
                    lawngreen: "7cfc00",
                    lemonchiffon: "fffacd",
                    lightblue: "add8e6",
                    lightcoral: "f08080",
                    lightcyan: "e0ffff",
                    lightgoldenrodyellow: "fafad2",
                    lightgray: "d3d3d3",
                    lightgreen: "90ee90",
                    lightgrey: "d3d3d3",
                    lightpink: "ffb6c1",
                    lightsalmon: "ffa07a",
                    lightseagreen: "20b2aa",
                    lightskyblue: "87cefa",
                    lightslategray: "789",
                    lightslategrey: "789",
                    lightsteelblue: "b0c4de",
                    lightyellow: "ffffe0",
                    lime: "0f0",
                    limegreen: "32cd32",
                    linen: "faf0e6",
                    magenta: "f0f",
                    maroon: "800000",
                    mediumaquamarine: "66cdaa",
                    mediumblue: "0000cd",
                    mediumorchid: "ba55d3",
                    mediumpurple: "9370db",
                    mediumseagreen: "3cb371",
                    mediumslateblue: "7b68ee",
                    mediumspringgreen: "00fa9a",
                    mediumturquoise: "48d1cc",
                    mediumvioletred: "c71585",
                    midnightblue: "191970",
                    mintcream: "f5fffa",
                    mistyrose: "ffe4e1",
                    moccasin: "ffe4b5",
                    navajowhite: "ffdead",
                    navy: "000080",
                    oldlace: "fdf5e6",
                    olive: "808000",
                    olivedrab: "6b8e23",
                    orange: "ffa500",
                    orangered: "ff4500",
                    orchid: "da70d6",
                    palegoldenrod: "eee8aa",
                    palegreen: "98fb98",
                    paleturquoise: "afeeee",
                    palevioletred: "db7093",
                    papayawhip: "ffefd5",
                    peachpuff: "ffdab9",
                    peru: "cd853f",
                    pink: "ffc0cb",
                    plum: "dda0dd",
                    powderblue: "b0e0e6",
                    purple: "800080",
                    rebeccapurple: "663399",
                    red: "f00",
                    rosybrown: "bc8f8f",
                    royalblue: "4169e1",
                    saddlebrown: "8b4513",
                    salmon: "fa8072",
                    sandybrown: "f4a460",
                    seagreen: "2e8b57",
                    seashell: "fff5ee",
                    sienna: "a0522d",
                    silver: "c0c0c0",
                    skyblue: "87ceeb",
                    slateblue: "6a5acd",
                    slategray: "708090",
                    slategrey: "708090",
                    snow: "fffafa",
                    springgreen: "00ff7f",
                    steelblue: "4682b4",
                    tan: "d2b48c",
                    teal: "008080",
                    thistle: "d8bfd8",
                    tomato: "ff6347",
                    turquoise: "40e0d0",
                    violet: "ee82ee",
                    wheat: "f5deb3",
                    white: "fff",
                    whitesmoke: "f5f5f5",
                    yellow: "ff0",
                    yellowgreen: "9acd32"
                },
                L = z.hexNames = function (t) {
                    var e = {};
                    for (var r in t) t.hasOwnProperty(r) && (e[t[r]] = r);
                    return e
                }(B),
                K = function () {
                    var t = "(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)",
                        e = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?",
                        r = "[\\s|\\(]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")[,|\\s]+(" + t + ")\\s*\\)?";
                    return {
                        rgb: new RegExp("rgb" + e),
                        rgba: new RegExp("rgba" + r),
                        hsl: new RegExp("hsl" + e),
                        hsla: new RegExp("hsla" + r),
                        hsv: new RegExp("hsv" + e),
                        hsva: new RegExp("hsva" + r),
                        hex3: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
                        hex6: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
                        hex8: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
                    }
                }();
            window.tinycolor = z
        }(), t(function () {
        t.fn.spectrum.load && t.fn.spectrum.processNativeColorInputs()
    })
});