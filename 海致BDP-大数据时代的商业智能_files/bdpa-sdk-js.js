! function (a, b) {
    function c(a) {
        return Object.prototype.toString.call(a)
    }

    function d(a, b) {
        return (b || document).getElementsByTagName(a)
    }

    function e(a) {
        var b = Array.isArray;
        return b ? b(a) : "[object Function]" === c(a)
    }

    function f(a) {
        for (var b, c = [], d = {}, e = 0; e < a.length; e++) b = a[e], b in d || (d[b] = !0, c.push(b));
        return c
    }

    function g(a, b) {
        b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var c = "[\\?&#]" + b + "=([^&#]*)",
            d = new RegExp(c),
            e = d.exec(a);
        return null === e || e && "string" != typeof e[1] && e[1].length ? "" : decodeURIComponent(e[1]).replace(/\+/g, " ")
    }

    function h(a) {
        return "[object Function]" === c(a)
    }

    function i(a) {
        return "[object Object]" === c(a)
    }

    function j(a, b, c) {
        if (null == a) return !1;
        if (ca && a.forEach === ca) a.forEach(b, c);
        else if (a.length === +a.length) {
            for (var d = 0, e = a.length; e > d; d++)
                if (d in a && b.call(c, a[d], d, a) === ia) return !1
        } else
            for (var f in a)
                if (ba.call(a, f) && b.call(c, a[f], f, a) === ia) return !1
    }

    function k(a) {
        return j(aa.call(arguments, 1), function (b) {
            for (var c in b) void 0 !== b[c] && (a[c] = b[c])
        }), a
    }

    function l() {
        var a = document.referrer;
        return /^https?:\/\/\w*.baidu.com/.test(a) ? g(a, "wd") : /^https?:\/\/\w*.haosou.com/.test(a) ? g(a, "q") : /^https?:\/\/\w*.so.com/.test(a) ? g(a, "q") : /^https?:\/\/\^w*.sogou.com/.test(a) ? g(a, "query") : /^https?:\/\/wap.sogou.com/.test(a) ? g(a, "keyword") : /^https?:\/\/m.sm.cn/.test(a) ? g(a, "q") : void 0
    }

    function m(a) {
        return j(aa.call(arguments, 1), function (b) {
            for (var c in b) void 0 !== b[c] && void 0 === a[c] && (a[c] = b[c])
        }), a
    }

    function n(a) {
        if (i(a)) {
            for (var b in a)
                if (ba.call(a, b)) return !1;
            return !0
        }
        return !1
    }

    function o(a) {
        return "[object String]" == c(a)
    }

    function p(a) {
        return "[object Number]" == c(a) && /[\d\.]+/.test(String(a))
    }

    function q(a) {
        return "[object Boolean]" == c(a)
    }

    function r(a) {
        return "[object Date]" == c(a)
    }

    function s(a) {
        return i(a) ? (j(a, function (b, c) {
            if (e(b)) {
                var d = [];
                j(b, function (a) {
                    o(a) ? d.push(a) : fa.info("您的数据-", b, "的数组里的值必须是字符串,已经将其删除")
                }), 0 !== d.length ? a[c] = d : (delete a[c], fa.info("已经删除空的数组"))
            }
            o(b) || p(b) || r(b) || q(b) || e(b) || (fa.info("您的数据-", b, "-格式不满足要求，我们已经将其删除"), delete a[c])
        }), a) : a
    }

    function t(a, b) {
        if (b.indexOf) return b.indexOf(a);
        for (var c = 0, d = b.length; d > c; ++c)
            if (b[c] === a) return c;
        return -1
    }

    function u(a, b) {
        return t(a, b) > -1
    }

    function v(a) {
        for (var b in a) u(b, pa) && (fa.info("不可以覆盖预设属性:" + b), delete a[b])
    }

    function w(a) {
        v(a.properties || a.propertiesMust);
        var b = !0;
        for (var c in a)
            if (!xa.check(c, a[c])) return !1;
        return b
    }

    function x(a) {
        w({
            properties: a
        }) ? Ha.setProps(a) : fa.info("register输入的参数有误")
    }

    function y() {
        var a = 1 * new Date;
        return a
    }

    function z(a, b) {
        var c, d, e, f = y(),
            g = 0,
            h = JSON.parse(va.get(Ca));
        h && (g = 1 * h.session_time, c = h.session_id, Ea = h.session_hasBeenExpired, e = h.lastSend_sessonId);
        var i = f - g > 60 * Da * 1e3;
        if (i ? (ga = !0, b || (Ea = 1)) : h && (ga = !1), b) {
            var j = "isExpired=" + i + "&lastSessionTime=" + g + "&bdpa_session_isExpired=" + ga + "&sessionStore=" + va.get(Ca);
            x({
                check_params: j
            }), i || void 0 == ga || ga || h && 1 == h.session_hasBeenExpired ? (d = 1, ua = Aa()) : c ? (d = 0, ua = c) : (d = 1, ua = Aa()), x({
                $is_first_session: d
            }), C(g, ua, Ea, e)
        } else c ? ua = c : (ua = Aa(), Ea = 1, x({
            $is_first_session: 1
        })), C(f, ua, Ea, e)
    }

    function A() {
        va.remove(Ba), B()
    }

    function B() {
        ya(document, "click", z)
    }

    function C(a, b, c, d) {
        va.set(Ca, JSON.stringify({
            session_time: a,
            session_id: b,
            session_hasBeenExpired: c,
            lastSend_sessonId: d
        }))
    }

    function D(a, b) {
        var c = JSON.parse(va.get(Ca)) || {},
            d = c.session_id;
        b = "string" == typeof b ? JSON.parse(b) : b, ga = !1, Ea = 0, C(a, d, Ea, b.session_id)
    }

    function E(a) {
        var b = a.session_id,
            c = JSON.parse(va.get(Ca)) || {};
        (b !== c.session_id || b != c.lastSend_sessonId) && x({
            $is_first_session: 1
        })
    }

    function F(a) {
        function b(a) {
            return 10 > a ? "0" + a : a
        }
        return a.getFullYear() + "-" + b(a.getMonth() + 1) + "-" + b(a.getDate()) + " " + b(a.getHours()) + ":" + b(a.getMinutes()) + ":" + b(a.getSeconds()) + "." + b(a.getMilliseconds())
    }

    function G(a) {
        i(a) && j(a, function (b, c) {
            i(b) ? G(a[c]) : r(b) && (a[c] = F(b))
        })
    }

    function H(a, b) {
        return a.length > b ? (fa.info("字符串长度超过限制，已经做截取--" + a), a.slice(0, b)) : a
    }

    function I(a, b) {
        i(a) && j(a, function (c, d) {
            i(c) ? I(a[d], b) : o(c) && (a[d] = H(c, b))
        })
    }

    function J(b, c) {
        ++Ja;
        var d, e = "_state" + Ja,
            f = this,
            g = y();
        this[e] = document.createElement("img");
        var h = this[e].onerror = function (a) {
            f[e].onload = null, f[e].onerror = null, delete f[e], f.state = null, ++Ia, "function" == typeof c && c()
        };
        this[e].onload = function (a) {
            h(), D(g, b)
        }, b.id = (String(Math.random()) + String(Math.random()) + String(Math.random())).slice(2, 15), b.time = g, E(b), a.data = b, b = JSON.stringify(b), d = encodeURIComponent(b), -1 !== a.para.server_url.indexOf("?") ? this[e].src = a.para.server_url + "&data=" + d : this[e].src = a.para.server_url + "?data=" + d
    }

    function K(a) {
        function b(a) {
            try {
                return JSON.parse(a)
            } catch (b) {
                return {}
            }
        }
        var c = core_io_xhr(a.cors);
        a.type || (a.type = a.data ? "POST" : "GET"), a = k({
            success: function () {},
            error: function () {}
        }, a), c.onreadystatechange = function () {
            4 == c.readyState && (c.status >= 200 && c.status < 300 || 304 == c.status ? a.success(b(c.responseText)) : a.error(b(c.responseText), c.status), c.onreadystatechange = null, c.onload = null)
        }, c.open(a.type, a.url, !0);
        try {
            if (c.withCredentials = !0, i(a.header))
                for (var d in a.header) c.setRequestHeader(d, a.header[d]);
            a.data && (c.setRequestHeader("X-Requested-With", "XMLHttpRequest"), "application/json" === a.contentType ? c.setRequestHeader("Content-type", "application/json; charset=UTF-8") : c.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
        } catch (e) {}
        c.send(a.data || null)
    }

    function L(a) {
        Ka || (Ka = document.createElement("IFRAME"), Ka.style.width = "0", Ka.style.height = "0"), Ka.src = a, ea.appendChild(Ka)
    }

    function M(b, c) {
        z(null, !0);
        var d = {
            distinct_id: Ha.getDistinctId(),
            session_id: ua,
            token: a.para.token,
            lib: {
                $lib: "web",
                $lib_method: "code",
                $lib_version: String(ha)
            },
            properties: {}
        };
        if ("string" != typeof Ha.getDistinctId() || "" == typeof Ha.getDistinctId()) {
            var e = "";
            switch (Ha.getDistinctId()) {
                case null:
                    e = "null";
                    break;
                case void 0:
                    e = "undefined";
                    break;
                case "":
                    e = "空";
                    break;
                default:
                    e = String(Ha.getDistinctId())
            }
            ma.push("distinct_id_wrong" + e + "-" + (new Date).getTime())
        }
        if (k(d, b), ma.length > 0 && (d.jssdk_error = ma.join("--")), i(b.properties) && !n(b.properties) && k(d.properties, b.properties), i(c) && k(d.lib, c), b.type && "profile" === b.type.slice(0, 7) ? ("profile_set" == b.type || "profile_set_once" == b.type) && (d.properties = k(JSON.parse(va.get(ja)), d.properties)) : d.properties = k({}, ta.properties(), Ha.getProps(), Ha.getSessionProps(), ta.currentProps, d.properties), G(d), I(d, a.para.max_string_length), za.checkIsAddSign(d), za.checkIsFirstTime(d), a.para.debug_mode) {
            a.data = d, d.time = y();
            var f, g = encodeURIComponent(JSON.stringify(d));
            f = -1 !== a.para.server_url.indexOf("?") ? a.para.server_url + "&data=" + g : a.para.server_url + "?data=" + g, L(f), fa.info(d)
        } else J(d, c)
    }

    function N(a, b) {
        w({
            propertiesMust: a
        }) && M({
            type: "profile_set_once",
            properties: a
        }, b)
    }

    function O(a, b, c) {
        v(b), w({
            event: a,
            properties: b
        }) && M({
            type: "track",
            event: a,
            properties: b
        }, c)
    }

    function P(a) {
        try {
            JSON.parse(a)
        } catch (b) {
            return !1
        }
        return !0
    }

    function Q() {
        "object" == typeof window.BdpData_APP_JS_Bridge && window.BdpData_APP_JS_Bridge.bdpdata_call_app && (Ma = BdpData_APP_JS_Bridge.bdpdata_call_app(), P(Ma) && (Ma = JSON.parse(Ma)))
    }

    function R() {
        if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
            var a = document.createElement("iframe");
            a.setAttribute("src", "bdpanalytics://getAppInfo"), document.documentElement.appendChild(a), a.parentNode.removeChild(a), a = null
        }
    }

    function S(a) {
        Ma = a, P(Ma) && (Ma = JSON.parse(Ma)), Na && todo(Ma)
    }

    function T(a) {
        S(a)
    }

    function U() {
        var b = aa.call(arguments),
            c = b[0],
            d = b.slice(1);
        return "string" == typeof c && La[c] ? La[c].apply(La, d) : void("function" == typeof c ? c.apply(a, d) : fa.info("quick方法中没有这个功能" + b[0]))
    }

    function V(a, b) {
        "undefined" == typeof a ? Ha.set("distinct_id", Aa()) : w({
            distinct_id: a
        }) ? b === !0 ? Ha.set("distinct_id", a) : Ha.change("distinct_id", a) : fa.info("identify的参数必须是字符串")
    }

    function W(a) {
        w({
            properties: a
        }) ? k(ta.currentProps, a) : fa.info("register输入的参数有误")
    }

    function X(a) {
        w({
            properties: a
        }) ? Ha.setPropsOnce(a) : fa.info("registerOnce输入的参数有误")
    }

    function Y(a) {
        return R(), Q(), a ? void(null === Ma ? Na = a : a(Ma)) : Ma
    }

    function Z() {
        var b = [];
        ta.initPage(), Ha.init(), j(a._q, function (c) {
            u(c[0], ["register", "registerPage", "registerOnce"]) ? a[c[0]].apply(a, aa.call(c[1])) : b.push(c)
        }), a.quick("autoTrack"), setTimeout(function () {
            j(b, function (b) {
                a[b[0]].apply(a, aa.call(b[1]))
            })
        }, 1e3)
    }
    var $ = Array.prototype,
        _ = (Function.prototype, Object.prototype),
        aa = $.slice,
        ba = _.hasOwnProperty,
        ca = $.forEach,
        da = document.addEventListener,
        ea = document.head || d("head")[0] || document.documentElement,
        fa = "object" == typeof fa ? fa : {};
    if (fa.info = function () {
            if (!a.para.show_log) return !1;
            if ("object" == typeof console && console.log) try {
                return console.log.apply(console, arguments)
            } catch (b) {
                console.log(arguments[0])
            }
        }, a = window[a], a._t = a._t || 1 * new Date, "function" != typeof a && "object" != typeof a || a.has_load_sdk) return !1;
    var ga, ha = "@@bdpa_sdk_v1.0.3",
        ia = {},
        ja = "__firstReferrerKey__",
        ka = "//analytics.bdp.cn/_.gif",
        la = "//analytics.bdp.cn/api/check",
        ma = [],
        na = !1,
        oa = "semd sema semp semm semc semk",
        pa = ["$browser", "$browser_version", "$os_language", "$first_visit_time", "$is_first_day", "$is_first_time", "$model", "$os", "$os_version", "$referrer", "$referrer_host", "$referrer_keyword", "$screen_height", "$screen_width", "$title", "$url", "$path", "$useragent"];
    a.lib_version = ha, a.has_load_sdk = !0, a.para = a.para || {}, a.para_default = {
        max_referrer_string_length: 2e3,
        max_string_length: 1e3,
        cross_subdomain: !0,
        show_log: !0,
        debug_mode: !1,
        debug_mode_upload: !1,
        session_time: 0,
        use_client_time: !1,
        source_channel: [],
        vtrack_ignore: {}
    };
    for (var qa in a.para_default) void 0 === a.para[qa] && (a.para[qa] = a.para_default[qa]);
    a.para.debug_mode ? a.para.server_url = la : a.para.server_url = ka, a.para.noCache === !0 ? a.para.noCache = "?" + (new Date).getTime() : a.para.noCache = "";
    var ra = function () {
            function a() {
                return new RegExp(/(.*?)\.?([^\.]*?)\.?(com|net|org|biz|ws|in|me|co\.uk|co|org\.uk|ltd\.uk|plc\.uk|me\.uk|edu|mil|br\.com|cn\.com|eu\.com|hu\.com|no\.com|qc\.com|sa\.com|se\.com|se\.net|us\.com|uy\.com|ac|co\.ac|gv\.ac|or\.ac|ac\.ac|af|am|as|at|ac\.at|co\.at|gv\.at|or\.at|asn\.au|com\.au|edu\.au|org\.au|net\.au|id\.au|be|ac\.be|adm\.br|adv\.br|am\.br|arq\.br|art\.br|bio\.br|cng\.br|cnt\.br|com\.br|ecn\.br|eng\.br|esp\.br|etc\.br|eti\.br|fm\.br|fot\.br|fst\.br|g12\.br|gov\.br|ind\.br|inf\.br|jor\.br|lel\.br|med\.br|mil\.br|net\.br|nom\.br|ntr\.br|odo\.br|org\.br|ppg\.br|pro\.br|psc\.br|psi\.br|rec\.br|slg\.br|tmp\.br|tur\.br|tv\.br|vet\.br|zlg\.br|br|ab\.ca|bc\.ca|mb\.ca|nb\.ca|nf\.ca|ns\.ca|nt\.ca|on\.ca|pe\.ca|qc\.ca|sk\.ca|yk\.ca|ca|cc|ac\.cn|com\.cn|edu\.cn|gov\.cn|org\.cn|bj\.cn|sh\.cn|tj\.cn|cq\.cn|he\.cn|nm\.cn|ln\.cn|jl\.cn|hl\.cn|js\.cn|zj\.cn|ah\.cn|gd\.cn|gx\.cn|hi\.cn|sc\.cn|gz\.cn|yn\.cn|xz\.cn|sn\.cn|gs\.cn|qh\.cn|nx\.cn|xj\.cn|tw\.cn|hk\.cn|mo\.cn|cn|cx|cz|de|dk|fo|com\.ec|tm\.fr|com\.fr|asso\.fr|presse\.fr|fr|gf|gs|co\.il|net\.il|ac\.il|k12\.il|gov\.il|muni\.il|ac\.in|co\.in|org\.in|ernet\.in|gov\.in|net\.in|res\.in|is|it|ac\.jp|co\.jp|go\.jp|or\.jp|ne\.jp|ac\.kr|co\.kr|go\.kr|ne\.kr|nm\.kr|or\.kr|li|lt|lu|asso\.mc|tm\.mc|com\.mm|org\.mm|net\.mm|edu\.mm|gov\.mm|ms|nl|no|nu|pl|ro|org\.ro|store\.ro|tm\.ro|firm\.ro|www\.ro|arts\.ro|rec\.ro|info\.ro|nom\.ro|nt\.ro|se|si|com\.sg|org\.sg|net\.sg|gov\.sg|sk|st|tf|ac\.th|co\.th|go\.th|mi\.th|net\.th|or\.th|tm|to|com\.tr|edu\.tr|gov\.tr|k12\.tr|net\.tr|org\.tr|com\.tw|org\.tw|net\.tw|ac\.uk|uk\.com|uk\.net|gb\.com|gb\.net|vg|sh|kz|ch|info|ua|gov|name|pro|ie|hk|com\.hk|org\.hk|net\.hk|edu\.hk|us|tk|cd|by|ad|lv|eu\.lv|bz|es|jp|cl|ag|mobi|eu|co\.nz|org\.nz|net\.nz|maori\.nz|iwi\.nz|io|la|md|sc|sg|vc|tw|travel|my|se|tv|pt|com\.pt|edu\.pt|asia|fi|com\.ve|net\.ve|fi|org\.ve|web\.ve|info\.ve|co\.ve|tel|im|gr|ru|net\.ru|org\.ru|hr|com\.hr|ly|xyz)$/)
            }

            function c(a) {
                return decodeURIComponent(a.replace(/\+/g, " "))
            }

            function d(a, b) {
                var c = a.charAt(0),
                    d = b.split(c);
                return c === a ? d : (a = parseInt(a.substring(1), 10), d[0 > a ? d.length + a : a - 1])
            }

            function e(a, b) {
                for (var d = a.charAt(0), e = b.split("&"), f = [], g = {}, h = [], i = a.substring(1), j = 0, k = e.length; k > j; j++)
                    if (f = e[j].match(/(.*?)=(.*)/), f || (f = [e[j], e[j], ""]), "" !== f[1].replace(/\s/g, "")) {
                        if (f[2] = c(f[2] || ""), i === f[1]) return f[2];
                        h = f[1].match(/(.*)\[([0-9]+)\]/), h ? (g[h[1]] = g[h[1]] || [], g[h[1]][h[2]] = f[2]) : g[f[1]] = f[2]
                    }
                return d === a ? g : g[i]
            }
            return function (c, f) {
                var g, h = {};
                if ("tld?" === c) return a();
                if (f = f || window.location.toString(), !c) return f;
                if (c = c.toString(), g = f.match(/^mailto:([^\/].+)/)) h.protocol = "mailto", h.email = g[1];
                else {
                    if ((g = f.match(/(.*?)\/#\!(.*)/)) && (f = g[1] + g[2]), (g = f.match(/(.*?)#(.*)/)) && (h.hash = g[2], f = g[1]), h.hash && c.match(/^#/)) return e(c, h.hash);
                    if ((g = f.match(/(.*?)\?(.*)/)) && (h.query = g[2], f = g[1]), h.query && c.match(/^\?/)) return e(c, h.query);
                    if ((g = f.match(/(.*?)\:?\/\/(.*)/)) && (h.protocol = g[1].toLowerCase(), f = g[2]), (g = f.match(/(.*?)(\/.*)/)) && (h.path = g[2], f = g[1]), h.path = (h.path || "").replace(/^([^\/])/, "/$1").replace(/\/$/, ""), c.match(/^[\-0-9]+$/) && (c = c.replace(/^([^\/])/, "/$1")), c.match(/^\//)) return d(c, h.path.substring(1));
                    if (g = d("/-1", h.path.substring(1)), g && (g = g.match(/(.*?)\.(.*)/)) && (h.file = g[0], h.filename = g[1], h.fileext = g[2]), (g = f.match(/(.*)\:([0-9]+)$/)) && (h.port = g[2], f = g[1]), (g = f.match(/(.*?)@(.*)/)) && (h.auth = g[1], f = g[2]), h.auth && (g = h.auth.match(/(.*)\:(.*)/), h.user = g ? g[1] : h.auth, h.pass = g ? g[2] : b), h.hostname = f.toLowerCase(), "." === c.charAt(0)) return d(c, h.hostname);
                    a() && (g = h.hostname.match(a()), g && (h.tld = g[3], h.domain = g[2] ? g[2] + "." + g[3] : b, h.sub = g[1] || b)), h.port = h.port || ("https" === h.protocol ? "443" : "80"), h.protocol = h.protocol || ("443" === h.port ? "https" : "http")
                }
                return c in h ? h[c] : "{}" === c ? h : b
            }
        }(),
        sa = {};
    ! function () {
        function a(a, b) {
            for (var c = 0, d = a.length; d > c && b.call(a, a[c], c) !== !1; c++);
        }

        function b(a) {
            if (!o.test(a)) return null;
            var b, c, d, e, f;
            if (-1 !== a.indexOf("trident/") && (b = /\btrident\/([0-9.]+)/.exec(a), b && b.length >= 2)) {
                d = b[1];
                var g = b[1].split(".");
                g[0] = parseInt(g[0], 10) + 4, f = g.join(".")
            }
            b = o.exec(a), e = b[1];
            var h = b[1].split(".");
            return "undefined" == typeof f && (f = e), h[0] = parseInt(h[0], 10) - 4, c = h.join("."), "undefined" == typeof d && (d = c), {
                browserVersion: f,
                browserMode: e,
                engineVersion: d,
                engineMode: c,
                compatible: d !== c
            }
        }

        function d(a) {
            if (k) try {
                var b = k.twGetRunPath.toLowerCase(),
                    c = k.twGetSecurityID(j),
                    d = k.twGetVersion(c);
                if (b && -1 === b.indexOf(a)) return !1;
                if (d) return {
                    version: d
                }
            } catch (e) {}
        }

        function e(a, b, d) {
            var e = h(b) ? b.call(null, d) : b;
            if (!e) return null;
            var f = {
                    name: a,
                    version: g,
                    codename: ""
                },
                j = c(e);
            if (e === !0) return f;
            if ("[object String]" === j) {
                if (-1 !== d.indexOf(e)) return f
            } else {
                if (i(e)) return e.hasOwnProperty("version") && (f.version = e.version), f;
                if (e.exec) {
                    var k = e.exec(d);
                    if (k) return k.length >= 2 && k[1] ? f.version = k[1].replace(/_/g, ".") : f.version = g, f
                }
            }
        }

        function f(b, c, d, f) {
            var g = w;
            a(c, function (a) {
                var c = e(a[0], a[1], b);
                return c ? (g = c, !1) : void 0
            }), d.call(f, g.name, g.version)
        }
        var g = "-1",
            j = window,
            k = j.external,
            l = j.navigator.userAgent || "",
            m = j.navigator.appVersion || "",
            n = j.navigator.vendor || "",
            o = /\b(?:msie |ie |trident\/[0-9].*rv[ :])([0-9.]+)/,
            p = /\bbb10\b.+?\bversion\/([\d.]+)/,
            q = /\bblackberry\b.+\bversion\/([\d.]+)/,
            r = /\bblackberry\d+\/([\d.]+)/,
            s = [
                ["nokia", function (a) {
                    return -1 !== a.indexOf("nokia ") ? /\bnokia ([0-9]+)?/ : /\bnokia([a-z0-9]+)?/
                }],
                ["samsung", function (a) {
                    return -1 !== a.indexOf("samsung") ? /\bsamsung(?:[ \-](?:sgh|gt|sm))?-([a-z0-9]+)/ : /\b(?:sgh|sch|gt|sm)-([a-z0-9]+)/
                }],
                ["wp", function (a) {
                    return -1 !== a.indexOf("windows phone ") || -1 !== a.indexOf("xblwp") || -1 !== a.indexOf("zunewp") || -1 !== a.indexOf("windows ce")
                }],
                ["pc", "windows"],
                ["ipad", "ipad"],
                ["ipod", "ipod"],
                ["iphone", /\biphone\b|\biph(\d)/],
                ["mac", "macintosh"],
                ["mi", /\bmi[ \-]?([a-z0-9 ]+(?= build|\)))/],
                ["hongmi", /\bhm[ \-]?([a-z0-9]+)/],
                ["aliyun", /\baliyunos\b(?:[\-](\d+))?/],
                ["meizu", function (a) {
                    return a.indexOf("meizu") >= 0 ? /\bmeizu[\/ ]([a-z0-9]+)\b/ : /\bm([0-9cx]{1,4})\b/
                }],
                ["nexus", /\bnexus ([0-9s.]+)/],
                ["huawei", function (a) {
                    var b = /\bmediapad (.+?)(?= build\/huaweimediapad\b)/;
                    return -1 !== a.indexOf("huawei-huawei") ? /\bhuawei\-huawei\-([a-z0-9\-]+)/ : b.test(a) ? b : /\bhuawei[ _\-]?([a-z0-9]+)/
                }],
                ["lenovo", function (a) {
                    return -1 !== a.indexOf("lenovo-lenovo") ? /\blenovo\-lenovo[ \-]([a-z0-9]+)/ : /\blenovo[ \-]?([a-z0-9]+)/
                }],
                ["zte", function (a) {
                    return /\bzte\-[tu]/.test(a) ? /\bzte-[tu][ _\-]?([a-su-z0-9\+]+)/ : /\bzte[ _\-]?([a-su-z0-9\+]+)/
                }],
                ["vivo", /\bvivo(?: ([a-z0-9]+))?/],
                ["htc", function (a) {
                    return /\bhtc[a-z0-9 _\-]+(?= build\b)/.test(a) ? /\bhtc[ _\-]?([a-z0-9 ]+(?= build))/ : /\bhtc[ _\-]?([a-z0-9 ]+)/
                }],
                ["oppo", /\boppo[_]([a-z0-9]+)/],
                ["konka", /\bkonka[_\-]([a-z0-9]+)/],
                ["sonyericsson", /\bmt([a-z0-9]+)/],
                ["coolpad", /\bcoolpad[_ ]?([a-z0-9]+)/],
                ["lg", /\blg[\-]([a-z0-9]+)/],
                ["android", /\bandroid\b|\badr\b/],
                ["blackberry", function (a) {
                    return a.indexOf("blackberry") >= 0 ? /\bblackberry\s?(\d+)/ : "bb10"
                }]
            ],
            t = [
                ["wp", function (a) {
                    return -1 !== a.indexOf("windows phone ") ? /\bwindows phone (?:os )?([0-9.]+)/ : -1 !== a.indexOf("xblwp") ? /\bxblwp([0-9.]+)/ : -1 !== a.indexOf("zunewp") ? /\bzunewp([0-9.]+)/ : "windows phone"
                }],
                ["windows", /\bwindows nt ([0-9.]+)/],
                ["macosx", /\bmac os x ([0-9._]+)/],
                ["iOS", function (a) {
                    return /\bcpu(?: iphone)? os /.test(a) ? /\bcpu(?: iphone)? os ([0-9._]+)/ : -1 !== a.indexOf("iph os ") ? /\biph os ([0-9_]+)/ : /\bios\b/
                }],
                ["yunos", /\baliyunos ([0-9.]+)/],
                ["Android", function (a) {
                    return a.indexOf("android") >= 0 ? /\bandroid[ \/-]?([0-9.x]+)?/ : a.indexOf("adr") >= 0 ? a.indexOf("mqqbrowser") >= 0 ? /\badr[ ]\(linux; u; ([0-9.]+)?/ : /\badr(?:[ ]([0-9.]+))?/ : "android"
                }],
                ["chromeos", /\bcros i686 ([0-9.]+)/],
                ["linux", "linux"],
                ["windowsce", /\bwindows ce(?: ([0-9.]+))?/],
                ["symbian", /\bsymbian(?:os)?\/([0-9.]+)/],
                ["blackberry", function (a) {
                    var b = a.match(p) || a.match(q) || a.match(r);
                    return b ? {
                        version: b[1]
                    } : "blackberry"
                }]
            ],
            u = [
                ["edgehtml", /edge\/([0-9.]+)/],
                ["trident", o],
                ["blink", function () {
                    return "chrome" in j && "CSS" in j && /\bapplewebkit[\/]?([0-9.+]+)/
                }],
                ["webkit", /\bapplewebkit[\/]?([0-9.+]+)/],
                ["gecko", function (a) {
                    var b;
                    return (b = a.match(/\brv:([\d\w.]+).*\bgecko\/(\d+)/)) ? {
                        version: b[1] + "." + b[2]
                    } : void 0
                }],
                ["presto", /\bpresto\/([0-9.]+)/],
                ["androidwebkit", /\bandroidwebkit\/([0-9.]+)/],
                ["coolpadwebkit", /\bcoolpadwebkit\/([0-9.]+)/],
                ["u2", /\bu2\/([0-9.]+)/],
                ["u3", /\bu3\/([0-9.]+)/]
            ],
            v = [
                ["edge", /edge\/([0-9.]+)/],
                ["sogou", function (a) {
                    return a.indexOf("sogoumobilebrowser") >= 0 ? /sogoumobilebrowser\/([0-9.]+)/ : a.indexOf("sogoumse") >= 0 ? !0 : / se ([0-9.x]+)/
                }],
                ["theworld", function () {
                    var a = d("theworld");
                    return "undefined" != typeof a ? a : "theworld"
                }],
                ["360", function (a) {
                    var b = d("360se");
                    return "undefined" != typeof b ? b : -1 !== a.indexOf("360 aphone browser") ? /\b360 aphone browser \(([^\)]+)\)/ : /\b360(?:se|ee|chrome|browser)\b/
                }],
                ["maxthon", function () {
                    try {
                        if (k && (k.mxVersion || k.max_version)) return {
                            version: k.mxVersion || k.max_version
                        }
                    } catch (a) {}
                    return /\b(?:maxthon|mxbrowser)(?:[ \/]([0-9.]+))?/
                }],
                ["micromessenger", /\bmicromessenger\/([\d.]+)/],
                ["qq", /\bm?qqbrowser\/([0-9.]+)/],
                ["green", "greenbrowser"],
                ["tt", /\btencenttraveler ([0-9.]+)/],
                ["liebao", function (a) {
                    if (a.indexOf("liebaofast") >= 0) return /\bliebaofast\/([0-9.]+)/;
                    if (-1 === a.indexOf("lbbrowser")) return !1;
                    var b;
                    try {
                        k && k.LiebaoGetVersion && (b = k.LiebaoGetVersion())
                    } catch (c) {}
                    return {
                        version: b || g
                    }
                }],
                ["tao", /\btaobrowser\/([0-9.]+)/],
                ["coolnovo", /\bcoolnovo\/([0-9.]+)/],
                ["saayaa", "saayaa"],
                ["baidu", /\b(?:ba?idubrowser|baiduhd)[ \/]([0-9.x]+)/],
                ["ie", o],
                ["mi", /\bmiuibrowser\/([0-9.]+)/],
                ["opera", function (a) {
                    var b = /\bopera.+version\/([0-9.ab]+)/,
                        c = /\bopr\/([0-9.]+)/;
                    return b.test(a) ? b : c
                }],
                ["oupeng", /\boupeng\/([0-9.]+)/],
                ["yandex", /yabrowser\/([0-9.]+)/],
                ["ali-ap", function (a) {
                    return a.indexOf("aliapp") > 0 ? /\baliapp\(ap\/([0-9.]+)\)/ : /\balipayclient\/([0-9.]+)\b/
                }],
                ["ali-ap-pd", /\baliapp\(ap-pd\/([0-9.]+)\)/],
                ["ali-am", /\baliapp\(am\/([0-9.]+)\)/],
                ["ali-tb", /\baliapp\(tb\/([0-9.]+)\)/],
                ["ali-tb-pd", /\baliapp\(tb-pd\/([0-9.]+)\)/],
                ["ali-tm", /\baliapp\(tm\/([0-9.]+)\)/],
                ["ali-tm-pd", /\baliapp\(tm-pd\/([0-9.]+)\)/],
                ["uc", function (a) {
                    return a.indexOf("ucbrowser/") >= 0 ? /\bucbrowser\/([0-9.]+)/ : a.indexOf("ubrowser/") >= 0 ? /\bubrowser\/([0-9.]+)/ : /\buc\/[0-9]/.test(a) ? /\buc\/([0-9.]+)/ : a.indexOf("ucweb") >= 0 ? /\bucweb([0-9.]+)?/ : /\b(?:ucbrowser|uc)\b/
                }],
                ["chrome", / (?:chrome|crios|crmo)\/([0-9.]+)/],
                ["android", function (a) {
                    return -1 !== a.indexOf("android") ? /\bversion\/([0-9.]+(?: beta)?)/ : void 0
                }],
                ["blackberry", function (a) {
                    var b = a.match(p) || a.match(q) || a.match(r);
                    return b ? {
                        version: b[1]
                    } : "blackberry"
                }],
                ["safari", /\bversion\/([0-9.]+(?: beta)?)(?: mobile(?:\/[a-z0-9]+)?)? safari\//],
                ["webview", /\bcpu(?: iphone)? os (?:[0-9._]+).+\bapplewebkit\b/],
                ["firefox", /\bfirefox\/([0-9.ab]+)/],
                ["nokia", /\bnokiabrowser\/([0-9.]+)/]
            ],
            w = {
                name: "na",
                version: g
            },
            x = function (a) {
                a = (a || "").toLowerCase();
                var c = {};
                f(a, s, function (a, b) {
                    var d = parseFloat(b);
                    c.device = {
                        name: a,
                        version: d,
                        fullVersion: b
                    }, c.device[a] = d
                }, c), f(a, t, function (a, b) {
                    var d = parseFloat(b);
                    c.os = {
                        name: a,
                        version: d,
                        fullVersion: b
                    }, c.os[a] = d
                }, c);
                var d = b(a);
                return f(a, u, function (a, b) {
                    var e = b;
                    d && (b = d.engineVersion || d.engineMode, e = d.engineMode);
                    var f = parseFloat(b);
                    c.engine = {
                        name: a,
                        version: f,
                        fullVersion: b,
                        mode: parseFloat(e),
                        fullMode: e,
                        compatible: d ? d.compatible : !1
                    }, c.engine[a] = f
                }, c), f(a, v, function (a, b) {
                    var e = b;
                    d && ("ie" === a && (b = d.browserVersion), e = d.browserMode);
                    var f = parseFloat(b);
                    c.browser = {
                        name: a,
                        version: f,
                        fullVersion: b,
                        mode: parseFloat(e),
                        fullMode: e,
                        compatible: d ? d.compatible : !1
                    }, c.browser[a] = f
                }, c), c
            };
        sa = x(l + " " + m + " " + n)
    }();
    var ta = {
        initPage: function () {
            var a = document.referrer,
                b = a ? ra("hostname", a) : a,
                c = a ? ra("domain", a) : a,
                d = location.href,
                e = d ? ra("hostname", d) : d,
                f = d ? ra("domain", d) : d,
                g = l();
            this.pageProp = {
                referrer: a,
                referrer_host: b,
                referrer_domain: c,
                url: d,
                url_host: e,
                url_domain: f,
                referrer_keyword: g
            }
        },
        pageProp: {},
        campaignParams: function () {
            var b = oa.split(" "),
                c = "",
                d = {};
            return e(a.para.source_channel) && a.para.source_channel.length > 0 && (b = b.concat(a.para.source_channel), b = f(b)), j(b, function (a) {
                c = g(location.href, a), c.length && (d[a] = c)
            }), d
        },
        campaignParamsStandard: function (a, b) {
            a = a || "", b = b || "";
            var c = ta.campaignParams(),
                d = {},
                e = {};
            for (var f in c) - 1 !== (" " + oa + " ").indexOf(" " + f + " ") ? d[a + f] = c[f] : e[b + f] = c[f];
            return {
                $utms: d,
                otherUtms: e
            }
        },
        properties: function () {
            var b = {
                $first_visit_time: new Date,
                $os_language: navigator.language ? navigator.language.toLowerCase() : "",
                $os: sa.os.name,
                $model: sa.device.name,
                $os_version: String(sa.os.version),
                $screen_height: Number(screen.height) || 0,
                $screen_width: Number(screen.width) || 0,
                $browser: sa.browser.name,
                $browser_version: String(sa.browser.version),
                $referrer: document.referrer.slice(0, a.para.max_referrer_string_length),
                $referrer_host: ta.pageProp.referrer_host,
                $url: location.href,
                $path: location.pathname,
                $title: document.title,
                $useragent: window.navigator.userAgent
            };
            void 0 !== ta.pageProp.referrer_keyword && (b.$referrer_keyword = ta.pageProp.referrer_keyword);
            var c = ta.campaignParams(),
                d = {};
            for (var e in c) - 1 !== (" " + oa + " ").indexOf(" " + e + " ") ? d["$" + e] = c[e] : d[e] = c[e];
            return b = k({}, d, b)
        },
        currentProps: {},
        register: function (a) {
            k(ta.currentProps, a)
        }
    };
    "object" != typeof JSON && (JSON = {}),
        function () {
            "use strict";

            function a(a) {
                return 10 > a ? "0" + a : a
            }

            function c() {
                return this.valueOf()
            }

            function d(a) {
                return j.lastIndex = 0, j.test(a) ? '"' + a.replace(j, function (a) {
                    var b = n[a];
                    return "string" == typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + a + '"'
            }

            function e(a, b) {
                var c, f, g, h, i, j = l,
                    k = b[a];
                switch (k && "object" == typeof k && "function" == typeof k.toJSON && (k = k.toJSON(a)), "function" == typeof o && (k = o.call(b, a, k)), typeof k) {
                    case "string":
                        return d(k);
                    case "number":
                        return isFinite(k) ? String(k) : "null";
                    case "boolean":
                    case "null":
                        return String(k);
                    case "object":
                        if (!k) return "null";
                        if (l += m, i = [], "[object Array]" === Object.prototype.toString.apply(k)) {
                            for (h = k.length, c = 0; h > c; c += 1) i[c] = e(c, k) || "null";
                            return g = 0 === i.length ? "[]" : l ? "[\n" + l + i.join(",\n" + l) + "\n" + j + "]" : "[" + i.join(",") + "]", l = j, g
                        }
                        if (o && "object" == typeof o)
                            for (h = o.length, c = 0; h > c; c += 1) "string" == typeof o[c] && (f = o[c], g = e(f, k), g && i.push(d(f) + (l ? ": " : ":") + g));
                        else
                            for (f in k) Object.prototype.hasOwnProperty.call(k, f) && (g = e(f, k), g && i.push(d(f) + (l ? ": " : ":") + g));
                        return g = 0 === i.length ? "{}" : l ? "{\n" + l + i.join(",\n" + l) + "\n" + j + "}" : "{" + i.join(",") + "}", l = j, g
                }
            }
            var f = /^[\],:{}\s]*$/,
                g = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                h = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                i = /(?:^|:|,)(?:\s*\[)+/g,
                j = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
                k = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
            }, Boolean.prototype.toJSON = c, Number.prototype.toJSON = c, String.prototype.toJSON = c);
            var l, m, n, o;
            "function" != typeof JSON.stringify && (n = {
                "\b": "\\b",
                "	": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            }, JSON.stringify = function (a, b, c) {
                var d;
                if (l = "", m = "", "number" == typeof c)
                    for (d = 0; c > d; d += 1) m += " ";
                else "string" == typeof c && (m = c);
                if (o = b, b && "function" != typeof b && ("object" != typeof b || "number" != typeof b.length)) throw new Error("JSON.stringify");
                return e("", {
                    "": a
                })
            }), 
            "function" != typeof JSON.parse && (JSON.parse = function (a, c) {
                function d(a, e) {
                    var f, g, h = a[e];
                    if (h && "object" == typeof h)
                        for (f in h) Object.prototype.hasOwnProperty.call(h, f) && (g = d(h, f), g !== b ? h[f] = g : delete h[f]);
                    return c.call(a, e, h)
                }
                var e;
                if (a = String(a), k.lastIndex = 0, k.test(a) && (a = a.replace(k, function (a) {
                        return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                    })), f.test(a.replace(g, "@").replace(h, "]").replace(i, ""))) return e = window.eval("(" + a + ")"), "function" == typeof c ? d({
                    "": e
                }, "") : e;
                throw new SyntaxError("JSON.parse")
            })
        }();
    var ua, 
        va = {
            get: function (a) {
                for (var b = a + "=", c = document.cookie.split(";"), d = 0; d < c.length; d++) {
                    for (var e = c[d];
                        " " == e.charAt(0);) e = e.substring(1, e.length);
                    if (0 == e.indexOf(b)) return decodeURIComponent(e.substring(b.length, e.length))
                }
                return null
            },
            set: function (b, c, d, e, f) {
                e = "undefined" == typeof e ? a.para.cross_subdomain : e;
                var g = "",
                    h = "",
                    i = "",
                    j = "",
                    k = document.location.hostname;
                if (d = "undefined" == typeof d ? 730 : d, e) var j = ra("domain", k);
                else var j = ra("hostname", k);
                if (g = j ? "; domain=." + j : "", 0 !== d) {
                    var l = new Date;
                    "s" === String(d).slice(-1) ? l.setTime(l.getTime() + 1e3 * Number(String(d).slice(0, -1))) : l.setTime(l.getTime() + 24 * d * 60 * 60 * 1e3), h = "; expires=" + l.toGMTString()
                }
                f && (i = "; secure"), document.cookie = b + "=" + encodeURIComponent(c) + h + "; path=/" + g + i
            },
            remove: function (b, c) {
                c = "undefined" == typeof c ? a.para.cross_subdomain : c, va.set(b, "", -1, c)
            }
        },
        wa = {
            get: function (a) {
                return window.localStorage.getItem(a)
            },
            parse: function (a) {
                var b;
                try {
                    b = JSON.parse(wa.get(a)) || null
                } catch (c) {}
                return b
            },
            set: function (a, b) {
                window.localStorage.setItem(a, b)
            },
            remove: function (a) {
                window.localStorage.removeItem(a)
            },
            isSupport: function () {
                var a = !0;
                try {
                    var b = "__bdp_data_support__",
                        c = "testIsSupportStorage";
                    wa.set(b, c), wa.get(b) !== c && (a = !1), wa.remove(b)
                } catch (d) {
                    a = !1
                }
                return a
            }
        },
        xa = {
            regChecks: {
                regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^date$|^datetime$)[a-zA-Z_$][a-zA-Z\d_$]{0,99})$/i
            },
            checkPropertiesKey: function (a) {
                var b = this,
                    c = !0;
                return j(a, function (a, d) {
                    b.regChecks.regName.test(d) || (c = !1)
                }), c
            },
            check: function (a, b) {
                return "string" == typeof this[a] ? this[this[a]](b) : this[a](b)
            },
            str: function (a) {
                return o(a) ? !0 : (fa.info("请检查参数格式,必须是字符串"), !0)
            },
            properties: function (a) {
                return s(a), a ? i(a) ? this.checkPropertiesKey(a) ? !0 : (fa.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"), !0) : (fa.info("properties可以没有，但有的话必须是对象"), !0) : !0
            },
            propertiesMust: function (a) {
                return s(a), a === b || !i(a) || n(a) ? (fa.info("properties必须是对象且有值"), !0) : this.checkPropertiesKey(a) ? !0 : (fa.info("properties里的key必须是由字符串数字_组成，且不能是系统保留字"), !0)
            },
            event: function (a) {
                return o(a) && this.regChecks.regName.test(a) ? !0 : (fa.info("请检查参数格式,必须是字符串,且eventName必须是字符串_开头,且不能是系统保留字"), !0)
            },
            test_id: "str",
            group_id: "str",
            distinct_id: function (a) {
                return o(a) && /^.{1,255}$/.test(a) ? !0 : (fa.info("distinct_id必须是不能为空，且小于255位的字符串"), !1)
            }
        },
        ya = da ? function (a, c, d, e) {
            a.addEventListener(c, d, e === b ? !1 : e)
        } : function (a, b, c) {
            a.attachEvent("on" + b, c)
        },
        za = {
            checkIsAddSign: function (a) {
                "track" === a.type && (null !== va.get("bdp_data_is_new_user") ? a.properties.$is_first_day = 1 : a.properties.$is_first_day = 0)
            },
            is_first_visit_time: 0,
            checkIsFirstTime: function (a) {
                "track" === a.type && (this.is_first_visit_time ? (a.properties.$is_first_time = 1, this.is_first_visit_time = 0) : a.properties.$is_first_time = 0)
            },
            storeInitCheck: function () {
                if (na) {
                    var a = new Date,
                        b = {
                            h: 23 - a.getHours(),
                            m: 59 - a.getMinutes(),
                            s: 59 - a.getSeconds()
                        };
                    va.set("bdp_data_is_new_user", "true", 3600 * b.h + 60 * b.m + b.s + "s"), this.is_first_visit_time = 1
                } else null === va.get("bdp_data_is_new_user") && (this.checkIsAddSign = function (a) {
                    "track" === a.type && (a.properties.$is_first_day = 0)
                }), this.checkIsFirstTime = function (a) {
                    "track" === a.type && (a.properties.$is_first_time = 0)
                }
            },
            checkIsFirstLatest: function () {
                var a = ta.pageProp.url_domain,
                    b = ta.pageProp.referrer_domain;
                "" !== a && a !== b && x({
                    $latest_referrer: ta.pageProp.referrer,
                    $latest_referrer_host: ta.pageProp.referrer_host
                })
            }
        },
        Aa = function () {
            var a = function () {
                    for (var a = 1 * new Date, b = 0; a == 1 * new Date;) b++;
                    return a.toString(16) + b.toString(16)
                },
                b = function () {
                    return Math.random().toString(16).replace(".", "")
                },
                c = function (a) {
                    function b(a, b) {
                        var c, d = 0;
                        for (c = 0; c < b.length; c++) d |= f[c] << 8 * c;
                        return a ^ d
                    }
                    var c, d, e = navigator.userAgent,
                        f = [],
                        g = 0;
                    for (c = 0; c < e.length; c++) d = e.charCodeAt(c), f.unshift(255 & d), f.length >= 4 && (g = b(g, f), f = []);
                    return f.length > 0 && (g = b(g, f)), g.toString(16)
                };
            return function () {
                var d = String(screen.height * screen.width);
                return d = d && /\d{5,}/.test(d) ? d.toString(16) : String(31242 * Math.random()).replace(".", "").slice(0, 8), a() + "-" + b() + "-" + c() + "-" + d + "-" + a()
            }
        }(),
        Ba = "__bdpa_session_key__",
        Ca = "__bdpa_session_key__2017__",
        Da = 30,
        Ea = 0,
        Fa = "bdp_data2016jssdkcross",
        Ga = "bdp_data2017jssdkcross",
        Ha = {
            getProps: function () {
                return this._state.props
            },
            getSessionProps: function () {
                return this._sessionState
            },
            getDistinctId: function () {
                return this._state.distinct_id
            },
            toState: function (a) {
                var b = null;
                null !== a && "object" == typeof (b = JSON.parse(a)) ? b.distinct_id ? this._state = b : (this.set("distinct_id", Aa()), ma.push("parseCookieDistinctJSSDKError")) : (this.set("distinct_id", Aa()), ma.push("parseCookieJSSDKError"))
            },
            initSessionState: function () {
                var a = va.get("bdp_data2016session"),
                    b = null;
                null !== a && "object" == typeof (b = JSON.parse(a)) && (this._sessionState = b)
            },
            setOnce: function (a, b) {
                a in this._state || this.set(a, b)
            },
            set: function (a, b) {
                this._state[a] = b, this.save()
            },
            change: function (a, b) {
                this._state[a] = b
            },
            setSessionProps: function (a) {
                var b = this._sessionState;
                k(b, a), this.sessionSave(b)
            },
            setSessionPropsOnce: function (a) {
                var b = this._sessionState;
                m(b, a), this.sessionSave(b)
            },
            setProps: function (a) {
                var b = this._state.props || {};
                k(b, a), this.set("props", b)
            },
            setPropsOnce: function (a) {
                var b = this._state.props || {};
                m(b, a), this.set("props", b)
            },
            sessionSave: function (a) {
                this._sessionState = a, va.set("bdp_data2016session", JSON.stringify(this._sessionState), 0)
            },
            save: function () {
                va.set(Ga, JSON.stringify(this._state), 730, a.para.cross_subdomain)
            },
            _sessionState: {},
            _state: {},
            init: function () {
                va.remove(Fa), navigator.cookieEnabled || (ma.push("cookieNotEnable"), wa.isSupport || ma.push("localStorageNotEnable")), this.initSessionState();
                var b = va.get(a.para.cross_subdomain ? Ga : "bdp_data2017jssdk");
                null === b ? (na = !0, this.set("distinct_id", Aa())) : this.toState(b), za.storeInitCheck(), za.checkIsFirstLatest(), A()
            }
        },
        Ia = 0,
        Ja = 0;
    core_io_xhr = function (a) {
        if (a) {
            var b = new XMLHttpRequest;
            return "withCredentials" in b ? b : "undefined" != typeof XDomainRequest ? new XDomainRequest : b
        }
        if (XMLHttpRequest) return new XMLHttpRequest;
        if (window.ActiveXObject) try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (c) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (c) {}
        }
    }, 
    bdpa_bdpEvent_debugPath = function (b, c) {
        var d = "",
            e = encodeURIComponent(b);
        d = -1 !== a.para.debug_mode_url.indexOf("?") ? a.para.debug_mode_url + "&data=" + e : a.para.debug_mode_url + "?data=" + e, K({
            url: d,
            type: "GET",
            cors: !0,
            header: {
                "Dry-Run": String(a.para.debug_mode_upload)
            }
        })
    };
    var Ka = null,
        La = {
            getUtm: function () {
                return ta.campaignParams()
            },
            getStayTime: function () {
                return (new Date - a._t) / 1e3
            },
            setInitReferrer: function () {
                var b = document.referrer.slice(0, a.para.max_referrer_string_length);
                N({
                    _init_referrer: b,
                    _init_referrer_host: ta.pageProp.referrer_host
                })
            },
            setSessionReferrer: function () {
                var b = document.referrer.slice(0, a.para.max_referrer_string_length);
                Ha.setSessionPropsOnce({
                    _session_referrer: b,
                    _session_referrer_host: ta.pageProp.referrer_host
                })
            },
            setDefaultAttr: function () {
                ta.register({
                    _current_url: location.href,
                    _referrer: document.referrer.slice(0, a.para.max_referrer_string_length),
                    _referring_host: ta.pageProp.referrer_host
                })
            },
            autoTrackWithoutProfile: function (a) {
                this.autoTrack(k(a, {
                    not_set_profile: !0
                }))
            },
            autoTrack: function (b) {
                b = i(b) ? b : {}, na && !b.not_set_profile && va.set(ja, JSON.stringify({
                    $first_referrer: document.referrer.slice(0, a.para.max_referrer_string_length),
                    $first_referrer_host: ta.pageProp.referrer_host
                })), O("$pageview", k({}, b))
            }
        },
        Ma = null,
        Na = null;
    window.bdpdata_app_js_bridge_call_js = T, a.quick = U, a.track = O, a.identify = V, a.registerPage = W, a.register = x, a.registerOnce = X, a.getAppStatus = Y, Z()
}(window.__BDP_DATA_ANALYTIC__);