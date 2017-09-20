//BC.controllers.chartEdit
function CustomChartEditCtrl() {
    angular.module("BC.controllers.chartEdit")
        .controller("CustomChartEditCtrl", [
            "$scope",
            "$rootScope",
            "$timeout",
            "$interval",
            "$location",
            "$stateParams",
            "ngDialog",
            "commonService",
            "chartType",
            "chartTypeTip",
            "errHint",
            "commonHttp",
            "$http",
            "$q",
            "$jsTipTranslate",
            "formulaKeyMap",
            "dateNameMap",
            "setAdvanceAggregatorName",
            "formatFieldPercentile",
            "$translate",
            "guideService",
            "formulaService",
            //$scope $rootScope $timeout $interval $location $stateParams ngDialog commonService chartType chartTypeTip errHint commonHttp $http $q $jsTipTranslate formulaKeyMap
            function (
                e, //$scope
                t, //$rootScope
                a, //$timeout
                i, //$interval
                n, //$location
                $stateParams, //$stateParams
                o, //ngDialog
                commonService, //commonService s
                l, //chartType
                d, //chartTypeTip
                errHint, //errHint
                p, //commonHttp
                u, //$http
                h, //$q
                f, //$jsTipTranslate
                g, //formulaKeyMap
                m, //dateNameMap
                v, //setAdvanceAggregatorName
                b, //formatFieldPercentile
                y, //$translate
                w, //guideService
                C  //formulaService
            ) {
                function x() {
                    e.codeEditor = CodeMirror(document.getElementById("custom-code-editor"), {
                        lineNumbers: !0,
                        mode: "javascript",
                        lint: {
                            asi: !0,
                            es5: !0,
                            beforeLinting: function (t) {
                                if (!e.chart_ops) return t;
                                var a = e.chart_ops.rootMeta;
                                return a.custom_chart_setting && "vega" == a.custom_chart_setting.mode ? "var vega = " + t + ";" : t
                            }
                        },
                        theme: 1 == +t.usedThemeId ? "bdp-dark" : "bdp-light",
                        lineWrapping: !0,
                        extraKeys: {
                            "Ctrl-Q": function (e) {
                                e.foldCode(e.getCursor())
                            }
                        },
                        autoCloseBrackets: !0,
                        matchBrackets: !0,
                        foldGutter: !0,
                        gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"]
                    }), 
                    e.codeEditor.on("focus", function (t) {
                        e.showCodeEditorHint && (e.showCodeEditorHint = !1, e.$apply())
                    }),
                    e.codeEditor.on("blur", function (t) {
                        "" != e.codeEditor.getValue() || e.showCodeEditorHint || (e.showCodeEditorHint = !0, e.$apply())
                    })
                }

                function k(t, a) {
                    var i = e.chart_ops.views[t];
                    e.chart_ops.views.splice(t, 1), 
                    commonService.chart.del({
                        ct_id: i.ct_id
                    }).success(function (i) {
                        if (0 == +i.status) {
                            e.$bdpChart;
                            if (!a) {
                                errHint(y.instant("delSuccess"));
                                var n = Math.max(t - 1, 0);
                                e.setCurrentView(n)
                            }
                        } else errHint(y.instant("delFailed"))
                    })
                }

                function D(a) {
                    return h.all(a.map(function (e) {
                        return commonService.tb.getInfo(e)
                    })).then(function (a) {
                        for (var i = {}, n = [], r = {}, o = 0, s = a.length; o < s; o++) {
                            var l = a[o].result;
                            i[l.tb_id] = l.schema, n.push(l), r[l.tb_id] = l.tb_type
                        }
                        e.viewData.schemaMap = i, e.viewData.tbList = n, t.creatingChart ? e.addView(n[0]) : (e.setCurrentView(e.currentViewIndex), Z(!0))
                    })
                }

                function S() {
                    var e = r.page_referrer,
                        a = t.wsId ? t.wsId + "/" : "",
                        i = t.wsId ? "/dash_edit_ws/" : "/dash_edit/";
                    e && (i = t.wsId ? e + "_ws/" : e + "/");
                    var n = i + a + ae + "/" + ie;
                    return ["adv_dash_edit"].indexOf(e) >= 0 && (n += "/mode/adv"), n
                }

                function T(e, t, a) {
                    if (e.tb_conditional_formatting && e.tb_conditional_formatting.length > 0) {
                        var i = e.tb_conditional_formatting.length;
                        if (a)
                            for (var n = i - 1; n >= 0; n--) {
                                var r = e.tb_conditional_formatting[n];
                                "row_summary" === r.fid && r.uniq_id !== t && e.tb_conditional_formatting.splice(n, 1)
                            } else if (t)
                                for (var n = 0; n < i; n++) {
                                    var r = e.tb_conditional_formatting[n];
                                    if (t && r.uniq_id === t) {
                                        e.tb_conditional_formatting.splice(n, 1);
                                        break
                                    }
                                }
                    }
                }

                function I(e, t, a) {
                    if (e.advanced_sort && e.advanced_sort.length > 0) {
                        var i = e.advanced_sort.length;
                        if (a)
                            for (var n = i - 1; n >= 0; n--) {
                                var r = e.advanced_sort[n];
                                "row_summary" === r.fid && r.uniq_id !== t && e.advanced_sort.splice(n, 1)
                            } else if (t)
                                for (var o = 0; o < i; o++) {
                                    var s = e.advanced_sort[o];
                                    if (commonService.uniq_id == t) {
                                        e.advanced_sort.splice(o, 1);
                                        break
                                    }
                                }
                    }
                    e.advanced_sort && 0 !== e.advanced_sort.length || (e.is_advanced_sort = 0)
                }

                function L(e) {
                    for (var t, a = 0, i = e.y.length; a < i; a++) "row_summary" != e.y[a].fid || e.y[a].parent_uniq_id || (t = e.y[a].uniq_id);
                    return t
                }

                function A(e, t) {
                    var a = L(e);
                    if (t.row_setting) {
                        if (e.tb_conditional_formatting && e.tb_conditional_formatting.length > 0)
                            for (var i = e.tb_conditional_formatting.length, n = i - 1; n >= 0; n--) {
                                var r = e.tb_conditional_formatting[n];
                                r.uniq_id === t.row_setting.uniq_id && e.tb_conditional_formatting.splice(n, 1)
                            }
                        if (e.advanced_sort && e.advanced_sort.length > 0)
                            for (var i = e.advanced_sort.length, n = i - 1; n >= 0; n--) {
                                var r = e.advanced_sort[n];
                                r.uniq_id === t.row_setting.uniq_id && e.advanced_sort.splice(n, 1)
                            }
                        e.advanced_sort && 0 !== e.advanced_sort.length || (e.is_advanced_sort = 0)
                    }(!e.compare_axis || !e.compare_axis.length || e.y.length < 1 || 1 == e.compare_axis.length && "virtual" == e.compare_axis[0].data_type) && (e.tb_statistic && (e.tb_statistic.number_row = !1), e.y.forEach(function (e, t) {
                        delete e.row_setting
                    }), T(e, a, !0), I(e, a, !0)), (1 == e.y.length && "virtual" == e.y[0].data_type || !e.y.length) && (e.tb_statistic && (e.tb_statistic.row = !1, e.tb_statistic.col = !1), e.y = [], T(e, a), I(e, a))
                }

                function E(e) {
                    if (e.tb_statistic && e.tb_statistic.subtotal) {
                        e.x.length;
                        e.tb_statistic.subtotal_setting = {
                            dimensions: []
                        }
                    }
                }

                function F(e, t) {
                    if (t && "C200" === e.chart_type && e.advanced_sort && e.advanced_sort.length > 0)
                        for (var a = 0, i = e.advanced_sort.length; a < i; a++) {
                            var n = e.advanced_sort[a];
                            if (t.uniq_id) {
                                if (t.uniq_id == n.uniq_id) {
                                    e.advanced_sort.splice(a, 1);
                                    break
                                }
                            } else if (t.fid === n.fid) {
                                e.advanced_sort.splice(a, 1);
                                break
                            }
                        }
                }

                function M(t, a) {
                    return commonService.field.getFilteredRange(e.currentView.ct_id, a, t).then(function (e) {
                        var t = e;
                        return 0 == t.status ? t.result : null
                    })
                }

                function j(a) {
                    M(a.meta.color_setting.field, e.currentView.tb_id).then(function (e) {
                        e && e.total <= 100 && t.$emit("triggerBuildEnumColorMap", e.result, !!a.reset, !!a.bindToMeta)
                    }).then(function () {
                        a.callback()
                    })
                }

                function O(t) {
                    var a, i, n = e.chart_ops.meta.level[e.drill_level];
                    for (a = 0, i = n.y.length; a < i; a++)
                        if (n.y[a].fid == t) return !1;
                    for (a = 0, i = n.x.length; a < i; a++)
                        if (n.x[a].fid == t) return !1;
                    if (n.compare_axis)
                        for (a = 0, i = n.compare_axis.length; a < i; a++)
                            if (n.compare_axis[a].fid == t) return !1;
                    if (n.y_optional)
                        for (a = 0, i = n.y_optional.length; a < i; a++)
                            if (n.y_optional[a].fid == t) return !1;
                    return !0
                }

                function P() {
                    return !e.chart_ops || void 0 != e.chart_ops.name && "" !== e.chart_ops.name || (errHint(e.tips["chart.emptyChartName"]), !1)
                }

                function N() {
                    if (e.chart_ops) return e.originChartTitle != e.chart_ops.name
                }

                function B(t, a) {
                    angular.forEach(a, function (a, i) {
                        if (a.QoQ && (a.QoQ = t), a.YoY ? ("year" === t || ["quarter", "month", "week"].indexOf(t) > -1 && "year" !== a.YoY) && (delete a.YoY, delete a.yoyQoqType, delete a.formatter) : a.yoyQoqSetting && "custom" === a.yoyQoqSetting.type && delete a.yoyQoqSetting, a.advance_aggregator)
                            if (["retention", "repetition", "activity"].indexOf(a.advance_aggregator.type) > -1) a.advance_aggregator.setting.date_field_type = t;
                            else if ("running" === a.advance_aggregator.type) {
                            var n = {
                                    day: "week",
                                    week: "month",
                                    month: "quarter",
                                    quarter: "year",
                                    year: "all"
                                },
                                r = {
                                    week: ["day"],
                                    month: ["day", "week"],
                                    quarter: ["day", "week", "month"],
                                    year: ["day", "week", "month", "quarter"],
                                    all: ["day", "week", "month", "quarter", "year"]
                                };
                            e.chart_ops.meta.level[e.drill_level].x[0].granularity_name ? a.advance_aggregator.setting.reset_period = "all" : r[a.advance_aggregator.setting.reset_period].indexOf(t) < 0 && (a.advance_aggregator.setting.reset_period = n[t])
                        }
                    })
                }

                function z(e, t) {
                    var a = t.offset.top < 37 || t.offset.left < 230 - t.item.width() || t.offset.left > $(".chart-right").offset().left - 10;
                    return a = a || t.offset.top > $("#chartBox").offset().top - 5
                }

                function R(e, t) {
                    delete e.granularity, t.sort && e.fid === t.sort.fid && delete t.sort, e.is_new && 2 != e.is_build_aggregated || ("number" === e.data_type ? e.aggregator = "SUM" : e.aggregator = "COUNT", e.aggregator_name = g[e.aggregator]), e.uniq_id || (e.uniq_id = +new Date)
                }

                function q(t, a, i) {
                    var n = e.chart_ops.meta.level[e.drill_level];
                    t = t || 0;
                    var r, o = "",
                        s = "",
                        l = {},
                        d = "",
                        c = "",
                        p = "";
                    if ("compare_axis" == a) r = "zh" === bdpChart.language ? "数值" : "Metrics";
                    else if ("y" == a) {
                        var u = n.tb_statistic && n.tb_statistic.row_setting;
                        r = "zh" === bdpChart.language ? "行总计" : "Row Summary", o = "total", s = "row_summary", u && (l = angular.copy(u.formatter || {}), d = u.nick_name, c = u.unit_adv, p = u.description, i = u.uniq_id)
                    }
                    return {
                        data_type: "virtual",
                        name: r,
                        index: t,
                        flag: o,
                        fid: s,
                        uniq_id: i,
                        formatter: l,
                        nick_name: d,
                        unit_adv: c,
                        description: p
                    }
                }

                function H(e, t) {
                    var a, i = [],
                        n = e.y.length,
                        r = e.tb_statistic && e.tb_statistic.row;
                    r && (a = e.tb_statistic.row_pos);
                    for (var o = "left" === a ? 1 : 0, s = "right" === a ? n - 1 : n, l = o; l < s; l++) {
                        var d = e.y[l];
                        if ("virtual" === d.data_type && d.parent_uniq_id) {
                            o = l;
                            break
                        }
                        o++
                    }
                    if (e.chart_type === bdpChart.ChartType.Table && "save" !== t) {
                        if (e.tb_statistic)
                            if (e.tb_statistic.number_row) {
                                for (var c = "zh" === bdpChart.language ? "行" : " Row ", l = 0, n = e.y.length; l < n; l++) {
                                    var p, d = e.y[l],
                                        u = d.row_setting;
                                    if ("virtual" !== d.data_type) {
                                        var h = d.number_row_formula;
                                        if (void 0 !== h && "SUM" != h || (h = "TOTAL", d.number_row_formula = "SUM"), u) p = {
                                            data_type: "virtual",
                                            alignment_method: u.alignment_method,
                                            name: (u.nick_name || d.nick_name || d.name) + "(" + c + g[h] + ")",
                                            fid: "row_summary",
                                            parent_uniq_id: u.parent_uniq_id,
                                            uniq_id: u.uniq_id,
                                            formatter: u.formatter,
                                            nick_name: u.nick_name,
                                            unit_adv: u.unit_adv,
                                            description: u.description
                                        };
                                        else {
                                            var f = (d.nick_name || d.name) + "(" + c + g[h] + ")";
                                            p = {
                                                data_type: "virtual",
                                                alignment_method: "right",
                                                name: f,
                                                fid: "row_summary",
                                                parent_uniq_id: d.uniq_id,
                                                uniq_id: +new Date + 1e3 * l,
                                                formatter: d.formatter,
                                                nick_name: "",
                                                unit_adv: "",
                                                description: ""
                                            }, d.row_setting = angular.copy(p)
                                        }
                                        d.number_row_formula && i.push(p)
                                    }
                                }
                                Array.prototype.splice.apply(e.y, [o, s - o].concat(i))
                            } else
                                for (var l = "left" === a ? 1 : 0, n = "right" === a ? e.y.length - 1 : e.y.length; l < n; l++) {
                                    var d = e.y[l];
                                    if ("virtual" === d.data_type && d.parent_uniq_id) {
                                        e.y.splice(l, n - l);
                                        break
                                    }
                                }
                    } else {
                        for (var m = 0, l = 1; l < e.y.length; l++)
                            if ("virtual" === e.y[l].data_type && e.y[l].parent_uniq_id) {
                                m = l;
                                break
                            }
                        e.y.splice(m, m)
                    }
                }

                function G(e, t, a) {
                    function i(i) {
                        for (var o, s = e[i] || [], l = q(0, i, a), d = 0, c = 0; c < s.length; c++)
                            if ("virtual" === s[c].data_type && !s[c].parent_uniq_id) {
                                o = c;
                                break
                            }
                        e.chart_type === bdpChart.ChartType.Table && "save" !== t ? i == n ? s.length > 0 && void 0 === o ? (i == n && e.compare_setting && e.compare_setting.sort && (d = e.compare_setting.sort.index || 0), s.splice(d, 0, l)) : 1 === s.length && 0 === o ? s.splice(0, 1) : 0 === e.y.length && void 0 !== o && s.splice(o, 1) : i == r && (e.tb_statistic && e.tb_statistic.row && void 0 === o ? (d = e.tb_statistic.row_setting && e.tb_statistic.row_setting.pos || 0, s.splice(d, 0, l)) : void 0 !== o && (e.tb_statistic.row || s.splice(o, 1), e.tb_statistic.row_setting && (e.tb_statistic.row_setting.pos = o))) : void 0 !== o && (s.splice(o, 1), "compare_axis" == i ? $.extend(!0, e, {
                            compare_setting: {
                                sort: {
                                    index: o
                                }
                            }
                        }) : e.tb_statistic && e.tb_statistic.row_setting && (e.tb_statistic.row_setting.pos = o))
                    }
                    var n = "compare_axis",
                        r = "y";
                    i(n), i(r), H(e, t)
                }

                function W(t) {
                    if (t.hasClass("not-sortable")) return e.deleteField = {}, t.sortable.cancel(), !1
                }

                function J(e) {
                    var t = e.is_build_aggregated,
                        a = e.dragFieldType,
                        i = e.dragFieldFormula || "";
                    return i = i.toLowerCase(), 1 !== t || "date" == a && (i.indexOf("MAX_DATE") >= 0 || i.indexOf("max_date") >= 0 || i.indexOf("MIN_DATE") >= 0 || i.indexOf("min_date") >= 0)
                }

                function V(t, a, i) {
                    var n = t.tb_fid,
                        r = t.tb_name,
                        o = t.tb_data_type,
                        s = t.tb_new,
                        l = t.is_build_aggregated,
                        d = t.meta,
                        c = d.chart_type,
                        p = t.axis_field;
                    bdpChart.getColorsByType(c, "bdp"), [].concat(d.y || [], d.y_optional || []);
                    if ("x" === a) E(d), p.push({
                        fid: n,
                        uniq_id: +new Date + (i || 0),
                        name: r,
                        data_type: o,
                        is_new: s,
                        is_build_aggregated: l,
                        granularity: "day"
                    });
                    else if ("compare_axis" === a) {
                        var u = {
                            fid: n,
                            name: r,
                            data_type: o,
                            is_new: s,
                            is_build_aggregated: l,
                            granularity: "day"
                        };
                        if (0 === p.length) {
                            var h = q(0, "compare_axis");
                            p.push(h)
                        }
                        p.push(u)
                    } else {
                        var f = {
                                check: "num",
                                num: {
                                    digit: 0,
                                    millesimal: !0
                                },
                                percent: {
                                    digit: 0
                                }
                            },
                            g = e.getDefaultAggr(d, o, l),
                            m = ($.extend(!0, {}, p), {
                                fid: n,
                                uniq_id: +new Date + (i || 0),
                                name: r,
                                data_type: o,
                                is_new: s,
                                is_build_aggregated: l,
                                aggregator: g.aggregator,
                                aggregator_name: g.name,
                                formatter: 1 == s ? "" : ["string", "date", "sub_date"].indexOf(o) > -1 ? f : ""
                            }),
                            _ = d.tb_statistic && d.tb_statistic.row && "right" == d.tb_statistic.row_pos,
                            v = d.tb_statistic && d.tb_statistic.number_row,
                            b = p.length - 1;
                        if (v)
                            for (var y = 1; y < p.length; y++)
                                if ("virtual" === p[y].data_type) {
                                    b = y;
                                    break
                                }(_ && d.tb_statistic || v) && "y" === a ? p.splice(b, 0, m) : p.push(m), d.color_setting && 0 == +d.color_setting.mode && j({
                            meta: d,
                            bindToMeta: !0,
                            callback: function () {}
                        })
                    }
                    G(d), Y()
                }

                function U(e) {
                    switch (e) {
                        case "string":
                        case "date":
                        case "sub_date":
                            return "COUNT";
                        case "number":
                            return "SUM";
                        default:
                            return ""
                    }
                }

                function Y(t, a) {
                    if (a = a || e.currentView, !P() || !e.currentView) return !1;
                    var i = a.meta.level[e.drill_level];
                    i.tb_statistic || (i.tb_statistic = {}), i.tb_statistic.tb_merge_cell = i.tb_merge_cell, void 0 === i.chart_type && (i.chart_type = "C200");
                    var n = i.y,
                        r = n[0],
                        l = n[n.length - 1],
                        d = null;
                    if ("right" == t) {
                        if (l && ("row_summary" != l.fid || l.parent_uniq_id)) {
                            var d = n.shift();
                            n.push(d)
                        }
                    } else if ("left" == t && r && "row_summary" != $stateParams.fid && !$stateParams.parent_uniq_id) {
                        var d = n.pop();
                        n.unshift(d)
                    }
                    var c = $.extend(!0, {
                        only_save_meta: !1,
                        only_redraw: !1,
                        not_need_redraw: !1,
                        only_refresh_data: !1,
                        closeDialog: !0,
                        is_drill_chart: !!e.drill_level,
                        callback: null
                    }, t);
                    e.serviceFilterList = {};
                    for (var p = 0; p < i.x.length; p++) delete i.x[p].show_formula;
                    if (i.compare_axis)
                        for (var p = 0; p < i.compare_axis.length; p++) delete i.compare_axis[p].show_formula;
                    for (var u = 0; u < i.y.length; u++) delete i.y[u].show_formula;
                    i.color_setting && (delete i.color_setting.is_series, $.isEmptyObject(i.color_setting) && delete i.color_setting);
                    var h = function (e) {
                        for (var t = i[e], a = 0; a < t.length; a++)(t[a].YoY || t[a].QoQ) && (t[a].formatter = {
                            check: "num",
                            num: {
                                digit: 2,
                                millesimal: !0
                            },
                            percent: {
                                digit: 0
                            }
                        }), delete t[a].YoY, delete t[a].QoQ, delete t[a].yoyQoqType, t[a].yoyQoqSetting && "custom" === t[a].yoyQoqSetting.type && delete t[a].yoyQoqSetting
                    };
                    0 === i.x.length ? (h("y"), function (e) {
                            for (var t, a = 0; a < i[e].length; a++) t = i[e][a], t.advance_aggregator && ["moving", "running"].indexOf(t.advance_aggregator.type) > -1 && (delete t.advance_aggregator, delete t.formatter)
                        }("y")) : i.x.length >= 1 && ("date" !== a.meta.level[0].x[0].data_type ? h("y") : (function (e) {
                            for (var t = 0; t < i[e].length; t++) {
                                var a = i[e][t],
                                    n = a.yoyQoqSetting;
                                if (n) {
                                    if ("custom" === n.type) return;
                                    a.formatter = {
                                        check: "num",
                                        num: {
                                            digit: 2,
                                            millesimal: !0
                                        },
                                        percent: {
                                            digit: 0
                                        }
                                    }
                                }
                                delete a.yoyQoqSetting
                            }
                        }("y"), function (e, t) {
                            for (var a = i[e], n = 0; n < a.length; n++) a[n].advance_aggregator && ["retention", "repetition"].indexOf(a[n].advance_aggregator.type) > -1 && (a[n].advance_aggregator.setting.date_field_type = t)
                        }("y", i.x[0].granularity))), angular.forEach(a.filter_list, function (e) {
                            e.total > 100 && e.is_config && 0 == e.range.length && (e.is_all = !0, e.is_config = !1)
                        }),
                        function (e) {
                            t && 1 == t.is_advanced_sort && (e.is_advanced_sort = 1);
                            var a = e.chart_type,
                                i = [].concat(e.y, e.y_optional || []);
                            if (e.advanced_sort && e.advanced_sort.length > 0) {
                                var n = [];
                                e.advanced_sort.forEach(function (t) {
                                    var r = t.axis;
                                    if ("date" !== t.data_type || "C200" === a)
                                        if ("x" === r || "compare_axis" === r) {
                                            var o = function (r) {
                                                var o = t.sort_items.sort_item_type;
                                                if (1 == o) {
                                                    var s = t.sort_items.aggregator_sort.uniq_id,
                                                        l = "C200" !== a && "uniqIdForSum" === s && i.length > 1,
                                                        d = X(i, s);
                                                    (l || d) && n.push(t)
                                                } else {
                                                    var c = 0;
                                                    e[r].forEach(function (e, a) {
                                                        e.uniq_id === t.uniq_id && (c = a, t.axis = r)
                                                    }), t.originIndex !== c && (t.originIndex = c), (3 !== o || 3 === o && "C261" === a) && n.push(t)
                                                }
                                            };
                                            "x" === r ? X(e.x, t.uniq_id) ? o("x") : X(e.compare_axis || [], t.uniq_id) && o("compare_axis") : X(e.compare_axis || [], t.uniq_id) ? o("compare_axis") : X(e.x, t.uniq_id) && o("x")
                                        } else "y" === r && ("C200" !== a && e.x.length && "date" === e.x[0].data_type || !(X(i, t.uniq_id) || "uniqIdForSum" === t.uniq_id && ["C200", "C250", "C310"].indexOf(a) < 0 && e.x.length && "date" !== e.x[0].data_type && e.y.length >= 2) || n.push(t))
                                }), e.advanced_sort = n
                            }
                        }(i),
                        function (e) {
                            !$.isEmptyObject(e.sort) && "y" == e.sort.axis && e.sort.uniq_id && (function (e, t) {
                                for (var a = 0, i = e.length; a < i; a++) {
                                    var n = e[a];
                                    if (n && t.fid == n.fid && (t.uniq_id == n.uniq_id || "virtual" == n.data_type)) return !0
                                }
                                return !1
                            }(e.y.concat(e.y_optional || []), e.sort) || (e.sort = {})), $.isEmptyObject(e.sort) || "x" != e.sort.axis || function (e, t) {
                                for (var a = 0, i = e.length; a < i; a++) {
                                    var n = e[a];
                                    if (n && t.fid == n.fid) return !0
                                }
                                return !1
                            }(e.x, e.sort) || (e.sort = {})
                        }(i);
                    var f = angular.copy(a.meta, {});
                    K(f), e.loadingData = !0;
                    var g = {
                        ct_id: a.ct_id,
                        data: angular.toJson({
                            meta: f,
                            name: a.name || e.tips["chart.untitledChart"],
                            tb_id: a.tb_id,
                            description: ""
                        })
                    };
                    return commonService.chart.modify(g).success(function (t) {
                        if ("0" === t.status) {
                            if (errHint.closeDialog && o.closeAll(), errHint.callback && "function" == typeof errHint.callback && errHint.callback(t), errHint.only_save_meta) return;
                            e.serviceFilterList = angular.copy(a.filter_list), errHint.only_redraw ? angular.element(".chart").each(function (t, n) {
                                var r = $(n).data("chart-data");
                                r && ($stateParams.ct_id == a.ct_id ? $stateParams.updateInfo(i, !0) : $stateParams.ct_id == a.parent_id && $stateParams.updateInfo(e.chart_ops.rootMeta, !0))
                            }) : errHint.is_drill_chart && !errHint.not_need_redraw ? e.draw_chart_url.options._t = (new Date).getTime() : errHint.not_need_redraw ? e.loadingData = !1 : (Z(), Z(!0)), e.orginChartTile = e.chart_ops.name
                        } else 90101 == t.status ? o.openConfirm({
                            templateUrl: "/static/partials/dialogTemplates/confirm-dialog.html",
                            className: "ngdialog-theme-default ngDialog-width-320",
                            data: {
                                title: e.tips.tips,
                                message: t.errstr,
                                okValue: e.tips["wb.gotIt"],
                                hideCancel: !0
                            }
                        }).then(function () {
                            e.changeRoute()
                        }) : errorHandle(t)
                    })
                }

                function X(e, t) {
                    var a = !1;
                    return (e || []).forEach(function (e) {
                        e.uniq_id === t && (a = !0)
                    }), a
                }

                function Q(t) {
                    var a = t || {},
                        i = {
                            ct_id: e.ct_id,
                            data: angular.toJson({
                                meta: e.chart_ops.rootMeta,
                                name: e.chart_ops.name || e.tips["chart.untitledChart"],
                                tb_ids: e.chart_ops.tb_ids,
                                description: e.chart_ops.description || ""
                            })
                        },
                        n = angular.element(".J_rootchart").data("chart-data");
                    return n && n.updateInfo(e.chart_ops.rootMeta, !a.only_save_meta), commonService.chart.modify(i).success(function (e) {
                        0 == +e.status && a.callback && "function" == typeof a.callback && a.callback(e)
                    })
                }

                function K(e) {
                    angular.forEach(e.level, function (e, t) {
                        for (var a = (e.chart_type, e.y), i = 0; i < a.length; i++) defined(a[i]) || a.splice(i, 1);
                        angular.forEach(a, function (e, t) {
                            "MED" === e.aggregator ? (e.aggregator = "PERCENT", e.percent = "0.5") : e.aggregator && e.aggregator.indexOf("PERCENT") >= 0 && (e.aggregator = "PERCENT")
                        });
                        var n = e.y_optional;
                        angular.forEach(n, function (e, t) {
                            "MED" === e.aggregator ? (e.aggregator = "PERCENT", e.percent = "0.5") : e.aggregator && e.aggregator.indexOf("PERCENT") >= 0 && (e.aggregator = "PERCENT")
                        });
                        for (var r, o = e.compare_axis || [], i = 0; i < o.length; i++) {
                            var s = o[i];
                            if ("virtual" === s.data_type) {
                                r = i;
                                break
                            }
                        }
                        void 0 !== r ? (e.compare_setting = {
                            sort: {
                                index: r
                            }
                        }, o.splice(r, 1)) : delete e.compare_setting, r = void 0;
                        for (var i = 0; i < a.length; i++) {
                            var s = a[i];
                            if ("virtual" === s.data_type && !s.parent_uniq_id) {
                                r = i;
                                break
                            }
                        }
                        void 0 !== r ? (e.tb_statistic.row_setting && (e.tb_statistic.row_setting.pos = r), a.splice(r, 1)) : e.tb_statistic && (e.tb_statistic.row_setting = {});
                        for (var l = 0, i = 1; i < a.length; i++)
                            if ("virtual" === a[i].data_type && a[i].parent_uniq_id) {
                                l = i;
                                break
                            }
                        a.splice(l, l), G(e, "save")
                    }), angular.forEach(e.filter_list, function (e, t) {
                        "date" != e.data_type && (e.range = [])
                    })
                }

                function Z(a) {
                    var i = a ? "draw_root_chart_url" : "draw_chart_url",
                        n = a ? ne : e.currentView.ct_id;
                    e[i] && e[i].options.ct_id == n ? (e[i].options._t = (new Date).getTime(), e[i].options.optional = {}, t.wsId && (e[i].options.ws_id = t.wsId)) : (e[i] = {
                        options: {
                            theme: 1 == +t.usedThemeId ? "dark" : "default",
                            ct_id: n,
                            parent_id: a ? void 0 : e.currentView.parent_id,
                            optional: {}
                        },
                        lazyload: !1
                    }, t.wsId && (e[i].options.ws_id = t.wsId))
                }

                function ee(t) {
                    var a = t;
                    e.pageInfo = {}, e.warnSetting = {
                        warn: a.warn,
                        info: a.warn_info
                    };
                    var i = {
                        name: a.name || void 0,
                        description: a.description,
                        tb_ids: a.tb_ids || "",
                        meta: {}
                    };
                    e.chart_ops = i, e.chart_ops.views = a.views, e.chart_ops.rootMeta = $.extend(!0, {}, e.chart_ops.meta, angular.fromJson(a.meta)), e.chart_ops.views.length > 0 ? (e.chart_ops.meta = e.chart_ops.views[e.currentViewIndex].meta, e.chart_ops.views.forEach(function (e) {
                        e.meta.level.forEach(function (e) {
                            e.chart_type = "C200";
                            var t = e.compare_axis;
                            if (t && t.length > 0 && e.y.length > 0) {
                                var a;
                                e.compare_setting && e.compare_setting.sort ? a = e.compare_setting.sort.index || 0 : (a = 0, e.compare_setting = {
                                    sort: {
                                        index: a
                                    }
                                });
                                var i = q(a, "compare_axis");
                                t.splice(a, 0, i)
                            }(e.tb_statistic && e.tb_statistic.row && e.y.length > 0 || e.tb_statistic.number_row) && G(e)
                        })
                    })) : e.chart_ops.meta = {
                        level: [],
                        level_fields: [],
                        filter_list: [],
                        filter_list_inner: []
                    }, i.rootMeta.chart_type && i.rootMeta.custom_chart_setting || (i.rootMeta = {
                        chart_type: "C500",
                        custom_chart_setting: {
                            code: "",
                            mode: "vega"
                        }
                    }, Q()), e.lastSavedCode = i.rootMeta.custom_chart_setting.code;
                    var n = i.rootMeta;
                    n.chart_type;
                    n.custom_chart_setting && "" != n.custom_chart_setting.code && (e.showCodeEditorHint = !1),
                    n.top && (n.top.value = +n.top.value),
                    n.top_compare && (n.top_compare.value = +n.top_compare.value), D(a.tb_ids)
                }

                function te() {
                    if (e.currentView) {
                        var t = (e.chart_ops.meta.level_fields.length, $(".chart-args").height() + 4);
                        $(".chart-left-side").css("top", t), $(".toggle-nav").css("top", t), $("#chartBox").css("top", t), $(".J-toggle-nav-chart-left").css("top", 0)
                    }
                }

                f([
                    "field.fieldNameRequired", "field.fieldTypeRequired",
                    "field.fieldFormulaRequired", "field.addFieldSuccess",
                    "field.modifyFieldSuccess", "field.formulaInvalid",
                    "field.groupInvalid", "chart.delGaugeField",
                    "chart.delField", "chart.tip", "chart.fieldInUsing",
                    "chart.buildAggregated", "chart.duplicateField",
                    "chart.tooManyField", "chart.delWarnField",
                    "chart.untitledChart", "chart.addDrillTip", "chart.canNotAddEmpty",
                    "polymer.useAggregate", "chart.notdrill", "chart.emptyChartName",
                    "chart.showConnectorLabel", "chart.batchAddTips", "chart.addFieldsToAxisX",
                    "chart.addFieldsToAxisY", "chart.addFieldsToAxisCampar",
                    "delSuccess", "delFailed", "copySuccess", "copyFailed", "dash.selectTbTitle",
                    "chart.addWorksheetSuccess", "addWorksheetDuplicated"
                ], e);

                var ae, ie, ne;
                ae = $stateParams.projId, ie = $stateParams.dashId, ne = $stateParams.chartId, t.view = "custom_chart_edit", t.show_bdp_header = !1, t.projectLoaded = !1, e.chartid = ne, bdp.store.set("chart_editId", ne), e.ct_id = ne, e.formulaKeyMap = g, e.formatFieldPercentile = b, e.isCustomChart = !0, e.selected_type = "C500", e.curView = t.creatingChart ? "data" : "develop", e.currentViewIndex = 0, e.viewData = {};
                var re = "customChartEditGuide";
                e.needShowGuide = e.creatingChart && 0 == w.getGuideVal(re),
                    e.hasShownVirtualFieldHint = "1" === $.cookie("virtual_field_hint_showed"),
                    e.turnOffVirtualFieldHint = function () {
                        e.hasShownVirtualFieldHint = !0, $.cookie("virtual_field_hint_showed", 1)
                    },
                    $(window).on("resize.renderChart", $.debounce(300, function () {
                        if ("custom_chart_edit" === t.view && e.$bdpChart) {
                            e.$bdpChart.renderChart()
                        }
                    })),
                    e.$on("$destroy", function () {
                        $(window).off("resize.renderChart"), $(window).off("customChartEditGuide"), $("#console-message").off("click.lineNum")
                    }),
                    e.needShowGuide && $(window).on("customChartEditGuide", function (a, i) {
                        if (4 == i)
                            if (e.codeEditor) {
                                e.showCodeEditorHint = !1;
                                var n = 1 == +t.usedThemeId ? "dark" : "light",
                                    r = $("#vega-example-" + n).html();
                                e.codeEditor.setValue(r), w.setGuideApi(re, 5)
                            } else console.error("Code editor not loaded yet, fail to run guide-step-6")
                    }),
                    e.changeView = function (t) {
                        e.curView = t, e.needShowGuide && "develop" == t && a(function () {
                            w.setGuideApi(re, 4)
                        }, 500)
                    },
                    e.showCodeEditorHint = !0;
                var oe = {
                    funcQueue: [],
                    loadLibInProgress: !1
                };
                window.CustomCodeEditorLoaded ? x() : thirdPluginLoader({
                        initFun: x,
                        libSrc: "https://s1.bdp.cn/static/js/lib/codemirror/codemirror.all_73870d3.js",
                        otherSrc: "",
                        libId: window.CustomCodeEditorLoaded
                    }, oe),
                    e.runCode = function () {
                        if (e.codeEditor) {
                            var t = e.codeEditor.getValue(),
                                a = e.chart_ops.rootMeta;
                            $.extend(!0, a.custom_chart_setting, {
                                code: t
                            }), $("#console-message").html("");
                            var i = angular.element(".J_rootchart").data("chart-data");
                            i && i.updateInfo({
                                meta: e.chart_ops.rootMeta
                            }, !0), e.needShowGuide && 5 == w.getGuideVal(re) && (window.bdpGuideVeil.remove(), w.setGuideApi(re, 6))
                        }
                    },
                    $("#console-message").on("click.lineNum", "span.line-number", function () {
                        var t = +$(this).data("linenum");
                        e.codeEditor && (e.codeEditor.setCursor(t - 1), e.codeEditor.focus())
                    }),
                    e.saveCode = function () {
                        if (e.codeEditor) {
                            var t = e.codeEditor.getValue(),
                                a = e.chart_ops.rootMeta;
                            $.extend(!0, a.custom_chart_setting, {
                                code: t
                            }), Q({
                                only_save_meta: !0,
                                callback: function (a) {
                                    0 == +a.status ? (errHint(y.instant("saveSuccess")), e.lastSavedCode = t) : errHint(y.instant("saveFail"))
                                }
                            }), e.needShowGuide && 6 == w.getGuideVal(re) && (w.setGuideApi(re, -1), e.needShowGuide = !1, window.bdpGuideVeil.remove())
                        }
                    },
                    e.setEditorCursor = function (t) {
                        e.codeEditor && e.codeEditor.setCursor(t)
                    },
                    e.showEditorConsole = !1, e.toggleEditorConsole = function () {
                        e.showEditorConsole = !e.showEditorConsole
                    },
                    e.curZoomView = null,
                    e.zoomInView = function (t) {
                        e.curZoomView != t && (e.curZoomView = t, "preview" == t && setTimeout(function () {
                            angular.element(".J_rootchart").data("chart-data").renderChart()
                        }, 500))
                    },
                    e.zoomOut = function () {
                        e.curZoomView = null, setTimeout(function () {
                            var e = angular.element(".J_rootchart").data("chart-data");
                            e && e.renderChart()
                        }, 500)
                    },
                    e.showAddTableDialog = function () {
                        o.open({
                            template: "/static/partials/choose-table-list.html",
                            className: "ngdialog-theme-default data-source choose-table-list",
                            data: {
                                json_data: {
                                    title: e.tips["dash.selectTbTitle"],
                                    type: "choose",
                                    show_upload: !1
                                },
                                choose_table: {
                                    tb_id: ""
                                }
                            },
                            scope: e,
                            controller: ["$scope", function (e) {
                                e.loadingTableList = !0, commonService.folder.getList().then(function (t) {
                                    e.loadingTableList = !1, e.folderList = t, e.original_folderList = angular.copy(t), e.$broadcast("updatefolderList", e.original_folderList)
                                }), e.chooseTableOk = function (t) {
                                    e.addTableToChart(t.tb_id), e.closeThisDialog()
                                }
                            }]
                        })
                    },
                    e.addTableToChart = function (t) {
                        for (var a = e.viewData.tbList, i = !1, n = 0; n < a.length; n++) {
                            var r = a[n];
                            if (t == $stateParamcommonService.tb_id) {
                                i = !0;
                                break
                            }
                        }
                        return i ? errHint(y.instant("chart.addWorksheetDuplicated")) : commonService.chart.addRelaTb(ne, t).then(function (a) {
                            "0" == a.status && commonService.tb.getInfo(t).then(function (a) {
                                if ("0" == a.status) {
                                    var i = a.result;
                                    e.viewData.schemaMap[t] = i.schema, e.viewData.tbList.push(i), e.chart_ops.tb_ids.push(t), errHint(y.instant("chart.addWorksheetSuccess"))
                                }
                            })
                        })
                    },
                    e.deleteTb = function (t, a, i) {
                        o.openConfirm({
                            template: "/static/partials/dialogTemplates/confirm-dialog.html",
                            className: "ngdialog-theme-default ngDialog-width-380",
                            scope: e,
                            data: {
                                message: y.instant("chart.removeWorksheetWithLayer")
                            }
                        }).then(function () {
                            for (var i = e.chart_ops.views, n = void 0 !== i ? i.length : 0, r = !1; n--;) i[n].tb_id === t && (e.deleteView(n, !0), r = !0);
                            e.viewData.tbList.splice(a, 1), commonService.chart.delRelaTb(ne, t).then(function (t) {
                                if ("0" != t.status) return void errHint(y.instant("chart.removeWorksheetFail"));
                                r && (e.setCurrentView(0), Q({
                                    only_redraw: !0
                                }))
                            })
                        })
                    },
                    e.addView = function (t) {
                        var a = {
                            parent_id: e.ct_id,
                            tb_id: t.tb_id,
                            dsh_id: ie,
                            name: t.name,
                            type: "view",
                            meta: {
                                level_fields: [],
                                level: [{
                                    x: [],
                                    y: [],
                                    yaxis_max: 0,
                                    yaxis_min: 0,
                                    yaxis_max_disabled: !0,
                                    yaxis_min_disabled: !0
                                }],
                                filter_list: [],
                                filter_list_inner: []
                            }
                        };
                        e.chart_ops.views = e.chart_ops.views || [];
                        for (var i = e.chart_ops.views, n = 0, r = 1; n < i.length; n++) {
                            var o = i[n];
                            a.name === o.name && (a.name = t.name + "_" + r, r++, n = -1)
                        }
                        e.chart_ops.views.push(a), commonService.chart.create(a).then(function (t) {
                            if (0 == +t.status) {
                                var a = e.chart_ops.views.length - 1;
                                e.chart_ops.views[a].ct_id = t.result.ct_id, e.setCurrentView(a), Y({
                                    only_save_meta: !0
                                })
                            } else errHint(y.instant("addFailed")), e.chart_ops.views.pop()
                        })
                    },
                    e.setCurrentView = function (t) {
                        if (e.currentView && (e.currentView.filterRangeList = e.filterRangeList), e.currentViewIndex = t, e.currentView = e.chart_ops.views[t], e.currentView) e.chart_ops.meta = e.chart_ops.views[t].meta, e.viewMeta = e.chart_ops.meta.level[e.drill_level], e.currentView.filterRangeList = e.currentView.filterRangeList || {}, e.filterRangeList = e.currentView.filterRangeList, e.field_list = e.viewData.schemaMap[e.currentView.tb_id], e.setFieldType(), e.advDateService && e.advDateService.list(e.currentView.ct_id), Z();
                        else {
                            e.viewMeta = {}, e.chart_ops.meta = {}, e.field_list = [];
                            var a = angular.element(".J_subchart").data("chart-data");
                            a && "function" == typeof a.destroy && a.destroy()
                        }
                    },
                    e.deleteView = function (t, a) {
                        if (a) return k(t, a);
                        o.openConfirm({
                            template: "/static/partials/dialogTemplates/confirm-dialog.html",
                            className: "ngdialog-theme-default ngDialog-width-300",
                            scope: e,
                            data: {
                                message: y.instant("chart.deleteView")
                            }
                        }).then(function () {
                            k(t)
                        })
                    },
                    e.copyView = function (t) {
                        var a = e.chart_ops.views,
                            i = angular.copy(a[t], {});
                        i.name = i.name + "_副本", e.renameView(i);
                        var n = angular.toJson({
                            proj_id: ae,
                            dsh_id: ie
                        });
                        commonService.chart.copy({
                            ct_id: i.ct_id,
                            ct_name: i.name,
                            from: n,
                            to: n
                        }).success(function (t) {
                            0 == +t.status ? (a.push(i), e.setCurrentView(a.length - 1), i.ct_id = t.result) : errHint(y.instant("copyFailed"))
                        })
                    },
                    e.renameView = function (t, a) {
                        if (!t.name) return errHint(y.instant("chart.viewNameRequired")), !0;
                        for (var i = e.chart_ops.views || [], n = 0, r = 1; n < i.length; n++) {
                            var o = i[n];
                            t.ct_id !== o.ct_id && (t.name === o.name && (t.name = t.name + "_" + r, r++, n = 0))
                        }
                        return a && Y({
                            only_save_meta: !0,
                            callback: function () {
                                var e = angular.element(".J_rootchart").data("chart-data");
                                e && (e.views.forEach(function (e) {
                                    e.info.chart_id == t.ct_id && (e.info.title = t.name)
                                }), e.renderChart())
                            }
                        }, t), !1
                    },
                    e.onRenameViewKeyUp = function (e) {
                        13 === e.keyCode && setTimeout(function () {
                            e.target.blur()
                        }, 0)
                    };
                var se = $(".J_field_search"),
                    le = $(".J_chart_data_info"),
                    de = $(".J_view_header"),
                    ce = $(".J_field_list"),
                    pe = 0,
                    ue = 0,
                    he = 0;
                $(".J_chart_left").on("scroll.fieldSearch", function (e) {
                        var t = $(e.target),
                            a = t.scrollTop();
                        pe = "none" == le.css("display") ? 0 : le.height(),
                            ue = ue || de.height(),
                            he = he || se.height(),
                            a >= pe ? (
                                se.css({
                                    position: "fixed",
                                    width: "174",
                                    top: ue,
                                    zIndex: 99999
                                }),
                                ce.css({
                                    marginTop: he + 20 + "px"
                                }),
                                se.attr("data-isceil", 1),
                                se.addClass("field-search-cover")) : (se.css({
                                    position: "relative",
                                    top: "auto",
                                    width: "auto"
                                }),
                                ce.css({
                                    "margin-top": "8px"
                                }),
                                se.attr("data-isceil", 0), se.removeClass("field-search-cover"))
                    }),
                    e.changeRoute = function () {
                        t.creatingChart && (t.creatingChartInfo = e.chart_ops.rootMeta), t.$editable = !0, n.path(S())
                    },
                    e.newField = {},
                    e.handlerMorePos = function (e) {
                        var t = document.body.clientHeight,
                            a = $(e.target).offset(),
                            i = ($(".field-list").height(), a.top + 20),
                            n = a.left - 50;
                        i + 120 > t && (i -= 140), angular.element(".field-editable-handler-more").css({
                            top: i,
                            left: n
                        }), e.stopPropagation()
                    },
                    e.modifyField = function (a) {
                        var i;
                        if ((i = a.param) && (_.isString(i) && (i = JSON.parse(i)), "ml" == i.type)) return errHint(y.instant("ML_tip.fieldByMLNoEdit"));
                        t.pageLoading = !0, e.newField = angular.extend({
                            aggregator: a.formula,
                            original_field_name: a.name
                        }, a, {
                            type: "modify",
                            tb_id: e.currentView.tb_id,
                            ct_id: e.currentView.ct_id
                        });
                        var n = "ngdialog-theme-default add-field-dialog",
                            r = "/static/partials/add-field.html";
                        a.hasOwnProperty("param") && "group" == a.param.type && (r = "/static/partials/add-group-field.html", n += " group-field-dialog"), o.open({
                            template: r,
                            data: {
                                fieldList: e.field_list
                            },
                            className: n,
                            scope: e
                        })
                    },
                    e.createFieldFormula = function () {
                        t.pageLoading = !0, e.newField = {
                            type: "create",
                            name: "",
                            aggregator: ""
                        };
                        o.open({
                            template: "/static/partials/add-field.html",
                            data: {
                                fieldList: e.field_list
                            },
                            className: "ngdialog-theme-default add-field-dialog",
                            scope: e
                        })
                    },
                    e.createFieldGroup = function () {
                        t.pageLoading = !0, e.newField = {
                            type: "create",
                            name: "",
                            aggregator: "",
                            tb_id: e.currentView.tb_id,
                            ct_id: e.currentView.ct_id
                        };
                        o.open({
                            template: "/static/partials/add-group-field.html",
                            data: {
                                fieldList: e.field_list
                            },
                            className: "ngdialog-theme-default add-field-dialog group-field-dialog",
                            scope: e
                        })
                    },
                    e.createFieldByML = function () {
                        e.dialoging || (e.mlControl = {}, e.dialoging = o.open({
                            template: "/static/training/view/dialog/create-chart-field.html",
                            className: "ngdialog-theme-default ngDialog-width-300 ml-apply-dialog",
                            overlay: !1,
                            scope: e,
                            preCloseCallback: function () {
                                e.dialoging = null, e.chartMainMask = !1
                            }
                        }).id, e.chartMainMask = !0)
                    },
                    e.closeMlDialog = function (t) {
                        e.mlControl.onClose(), t(), e.mlControl = null
                    },
                    e.commitMlField = function (t) {
                        e.mlControl.onOk().then(function (a) {
                            0 == a.status && (commonService.field.getList(e.currentView.tb_id).then(function (t) {
                                0 == t.status && (t = t.result, e.field_list = t.schema, e.setFieldType())
                            }), t(), e.mlControl = null)
                        })
                    },
                    e.setFieldType = function () {
                        e.field_list = bdp.utils.addSpecParamsToFields(e.field_list), e.fidToName = {}, angular.forEach(e.field_list, function (t, a) {
                            e.fidToName[t.fid] = t.name
                        })
                    },
                    e.setDimensionAndMeasureStatus = function () {
                        angular.forEach(e.field_list, function (t, a) {
                            "dimension" == t.type ? e.field_list.hasDimension = !0 : "measure" == t.type && (e.field_list.hasMeasure = !0), e.fidToName[t.fid] = t.name
                        })
                    },
                    e.addCalcField = function (t) {
                        function a() {
                            commonService.field["create" === t.type ? "create" : "modify"]({
                                tb_id: e.currentView.tb_id,
                                original_field_name: t.original_field_name || "",
                                new_field_name: t.name,
                                aggregator: t.aggregator.trim(),
                                data_type: t.data_type,
                                param: angular.toJson(t.param),
                                fid: t.fid || ""
                            }).success(function (a) {
                                e.global.clickComplete = !0, 0 == a.status ? (o.closeAll(), s.field.getList(e.currentView.tb_id).then(function (a) {
                                    if (0 == a.status) {
                                        a = a.result, e.viewData.schemaMap[e.currentView.tb_id] = e.field_list = a.schema, e.setFieldType(), e.setDimensionAndMeasureStatus();
                                        for (var i = 0, n = e.field_list.length; i < n; i++)
                                            if (t.fid == e.field_list[i].fid) {
                                                t.name = e.field_list[i].name, t.is_build_aggregated = e.field_list[i].is_build_aggregated;
                                                break
                                            }
                                        if ("modify" == t.type) {
                                            for (var i = 0; i < e.chart_ops.meta.level.length; i++) {
                                                if (e.chart_ops.meta.level[i].x)
                                                    for (var r = 0; r < e.chart_ops.meta.level[i].x.length; r++)
                                                        if (e.chart_ops.meta.level[i].x[r].fid == t.fid) {
                                                            e.chart_ops.meta.level[i].x[r].name = t.name;
                                                            break
                                                        }
                                                if (e.chart_ops.meta.level[i].y)
                                                    for (var o = t.is_build_aggregated, s = e.chart_ops.meta.level[i], l = 0; l < s.y.length; l++)
                                                        if (s.y[l].fid == t.fid) {
                                                            s.y[l].name = t.name, s.y[l].is_build_aggregated = o, 2 == o ? "number" === s.y[l].data_type ? s.y[l].aggregator = "SUM" : s.y[l].aggregator = "COUNT" : s.y[l].aggregator = "";
                                                            break
                                                        }
                                                if (e.chart_ops.meta.level[i].y_optional)
                                                    for (var o = t.is_build_aggregated, s = e.chart_ops.meta.level[i], d = 0; d < s.y_optional.length; d++)
                                                        if (s.y_optional[d].fid == t.fid) {
                                                            s.y_optional[d].name = t.name, s.y_optional[d].is_build_aggregated = o, 2 == o ? "number" === s.y_optional[d].data_type ? s.y_optional[d].aggregator = "SUM" : s.y_optional[d].aggregator = "COUNT" : s.y_optional[d].aggregator = "";
                                                            break
                                                        }
                                                e.$broadcast("emitChangeTableFormatting", !0)
                                            }
                                            if (e.chart_ops.meta.level_fields)
                                                for (var i = 0; i < e.chart_ops.meta.level_fields.length; i++) e.chart_ops.meta.level_fields[i].fid == t.fid && (e.chart_ops.meta.level_fields[i].name = t.name);
                                            var c = O(e.newField.fid);
                                            e.saveChartImmediate({
                                                not_need_redraw: c,
                                                closeDialog: !1
                                            })
                                        }
                                        e.global.watch = new Date
                                    }
                                })) : "7700" == a.status ? errHint(isObjectEmpty(t.param) ? e.tips["field.formulaInvalid"] : e.tips["field.groupInvalid"]) : "40005" == a.status && errHint(a.errstr)
                            })
                        }
                        e.viewData.tbList.length > 1 && !t.data_type && (t.data_type = "number"), e.global.clickComplete = !1;
                        var i = !1;
                        if (t.name ? t.data_type || t.param ? t.aggregator.trim() || t.param && "group" == t.param.type || (errHint(e.tips["field.fieldFormulaRequired"]), i = !0) : (errHint(e.tips["field.fieldTypeRequired"]), i = !0) : (errHint(e.tips["field.fieldNameRequired"]), i = !0), i) return e.global.clickComplete = !0, !1;
                        C.isTooLong({
                            tb_id: e.currentView.tb_id,
                            aggregator: t.aggregator.trim(),
                            data_type: t.data_type,
                            param: angular.toJson(t.param)
                        }).then(function (i) {
                            if (e.global.clickComplete = !0, "error" == i) return !1;
                            i ? C.confirmModify(function () {
                                a()
                            }, t.param) : a()
                        })
                    },
                    e.delNewField = function (t, a) {
                        function i() {
                            commonService.field.del(a, e.currentView.tb_id).success(function (t) {
                                0 == t.status ? (commonService.field.getList(e.currentView.tb_id).then(function (t) {
                                    0 == t.status && (t = t.result, e.field_list = t.schema, e.setFieldType(), e.setDimensionAndMeasureStatus())
                                }), e.global.watch = new Date) : errHint("7590" == t.status ? e.tips["chart.fieldInUsing"] : "40006" == t.status ? t.errstr : Number(t.status))
                            })
                        }
                        o.openConfirm({
                            template: "/static/partials/dialogTemplates/confirm-dialog.html",
                            className: "ngdialog-theme-default ngDialog-width-300",
                            scope: e,
                            data: {
                                title: e.tips["chart.tip"],
                                message: e.tips["chart.delField"] + ": " + t + " ?"
                            }
                        }).then(function () {
                            i()
                        })
                    },
                    e.onSaveEnumOrder = function (t) {
                        var a = O(t);
                        e.saveChartImmediate({
                            not_need_redraw: a
                        })
                    },
                    e.showEnumOrder = function (t, a, i, n) {
                        e.preCloseDialog = !1, o.open({
                            template: "/static/partials/dialogTemplates/enum-order.html",
                            data: {
                                fid: t,
                                tb_id: e.currentView.tb_id,
                                ct_id: e.currentView.ct_id,
                                isCustomOrder: a,
                                source: i,
                                fieldIndex: n,
                                drillLevel: e.drill_level || 0,
                                meta: e.chart_ops.meta.level[e.drill_level || 0]
                            },
                            scope: e,
                            controller: "enumOrderCtrl",
                            className: "ngdialog-theme-default enum-order-dialog"
                        })
                    },
                    e.verifyChartArgs = function () {
                        if (P()) {
                            var t = e.codeEditor && e.codeEditor.getValue();
                            e.lastSavedCode !== t ? o.openConfirm({
                                template: "/static/partials/dialogTemplates/confirm-dialog.html",
                                className: "ngdialog-theme-default ngdialog-width-340",
                                scope: e,
                                data: {
                                    message: y.instant("confirmToBack")
                                }
                            }).then(function () {
                                e.saveAfterCheckDirty({
                                    not_need_redraw: !0,
                                    only_refresh_data: !1
                                }), e.changeRoute()
                            }) : (e.saveAfterCheckDirty({
                                not_need_redraw: !0,
                                only_refresh_data: !1
                            }), e.changeRoute())
                        }
                    },
                    e.dragField = {},
                    e.dragTbFunc = function (t, a, i) {
                        e.removeFaild = !1, e.dragFlag = "source", e.dragField = i, e.dragFieldFid = i.fid, e.dragFieldName = i.name, e.dragFieldType = i.data_type, e.dragFieldFormula = i.formula, e.dragFieldIsNew = void 0 != i.formula && "" != i.formula, e.dragIsBuildAggregated = i.is_build_aggregated, o.isOpen(e.dialoging) ? angular.element("#" + e.dialoging + " .dropable").append('<div class="draggable-area"></div>') : angular.element(".chart-args,.chart-left-side").append('<div class="draggable-area"></div>')
                    },
                    e.stopDragField = function () {
                        angular.element(".draggable-area").remove()
                    },
                    e.dragSubTbFunc = function (t, a, i, n) {
                        e.dragField = {
                            fid: i.fid + "_" + n,
                            data_type: "sub_date",
                            name: m[n] + "(" + i.name + ")"
                        }, e.dragFlag = "source", e.dragFieldFid = i.fid + "_" + n, e.dragFieldType = "sub_date", e.dragFieldIsNew = "" != i.formula, e.dragIsBuildAggregated = i.is_build_aggregated, e.dragFieldFormula = i.formula || "", e.removeFaild = !1, e.dragFieldName = m[n] + "(" + i.name + ")", angular.element(".chart-args,.chart-left-side").append('<div class="draggable-area"></div>')
                    },
                    e.setGranularity = function (t, a, i, n, r) {
                        var o = angular.element(t.target),
                            s = o.parents(".data-tag").parents("li").index(),
                            l = e.viewMeta,
                            d = l[a],
                            c = l.y,
                            p = l.y_optional || [];
                        d[s].granularity = n, d[s].granularity_name = r || "", "x" === a && (e.chart_ops.meta.level_fields.length > 0 && (e.chart_ops.meta.level_fields[e.drill_level].granularity = n, e.chart_ops.meta.level_fields[e.drill_level].granularity_name = r || ""), "date" === i.data_type && 0 === s && ("hour" === n || "minute" === n || "second" === n ? angular.forEach(c, function (e, t) {
                            delete e.YoY, delete e.QoQ, delete e.yoyQoqType, delete e.advance_aggregator
                        }) : (errHint.length > 0 && B(n, c), p.length > 0 && B(n, p))));
                        var u = l.color_setting;
                        if (u && 0 == +u.mode) {
                            for (var h = 0; h < u.field.length; h++)
                                if (u.field[h].fid === i.fid) {
                                    u.field.splice(h, 1, i), delete u.enum_color_map;
                                    break
                                }
                            return void j({
                                meta: l,
                                reset: !0,
                                bindToMeta: !0,
                                callback: function () {
                                    e.saveChartImmediate()
                                }
                            })
                        }
                        e.saveChartImmediate()
                    },
                    e.showFormula = function (e) {
                        e.show_formula = !e.show_formula, $(".field-tip").css("display", "none")
                    },
                    e.setDataShowType = function (t, a, i, n) {
                        var r = angular.element(t.target),
                            o = r.parents(".data-tag").parents("li").index(),
                            s = e.viewMeta,
                            l = s[a];
                        s.y, s.y_optional;
                        l[o].data_show_type = n, "x" === a && e.chart_ops.meta.level_fields.length > 0 && (e.chart_ops.meta.level_fields[e.drill_level].data_show_type = n), e.saveChartImmediate()
                    },
                    e.handleVirtualFieldForTable = G,
                    e.sortAxisField = {
                        scroll: !1,
                        start: function (t, a) {
                            e.dragFlag = t.target.id.replace("drag", "").toLowerCase(), e.originDragFlag = angular.copy(e.dragFlag), e.originX = angular.copy(e.viewMeta.x), e.originY = angular.copy(e.viewMeta.y), e.originYoptional = angular.copy(e.viewMeta.y_optional);
                            var i = a.item.sortable.model;
                            !e.hasShownVirtualFieldHint && i && "virtual" === i.data_type && e.turnOffVirtualFieldHint()
                        },
                        sort: function (e, t) {
                            angular.element(".ui-sortable-helper").css({
                                width: $(this).width() + 1
                            });
                            var a = angular.element(".ui-sortable-helper");
                            z(e, t) ? a.find(".ico-remove").length || a.find(".name").append('<i class="bdp-icon ico-remove"></i>') : a.find(".name").find(".ico-remove").remove()
                        },
                        over: function (t, a) {
                            e.dragFlag = angular.element(".ui-sortable-placeholder").parent()[0].id.replace("drag", "").toLowerCase()
                        },
                        beforeStop: function (t, a) {
                            var i = a.item.sortable.model,
                                n = angular.element(".ui-sortable-placeholder").index() - 1;
                            z(t, a) && "virtual" !== i.data_type ? e.deleteField = {
                                index: n,
                                del: !0
                            } : e.deleteField = {
                                index: n,
                                del: !1
                            }
                        },
                        update: function (t, a) {
                            var i = a.item.sortable.model,
                                n = a.item.sortable.index,
                                r = a.item.sortable.dropindex,
                                o = e.viewMeta;
                            if (e.doDragField = i, W(a.item), "virtual" === i.data_type) e.originDragFlag === e.dragFlag && "y" != e.originDragFlag || a.item.sortable.cancel();
                            else if ("y" == e.dragFlag && o.tb_statistic && o.tb_statistic.row) {
                                if (("y" == e.originDragFlag ? o.y[o.y.length - 1] && "row_summary" == o.y[o.y.length - 1].fid : o.y[o.y.length - 2] && "row_summary" == o.y[o.y.length - 2].fid) && r == o.y.length - 1 && "right" == o.tb_statistic.row_pos) {
                                    var s = "y" == e.originDragFlag ? o.y[o.y.length - 1] : o.y[o.y.length - 2],
                                        l = o.y[n];
                                    if ("y" != e.originDragFlag) o.y.splice(o.y.length - 2, 2, o.y[o.y.length - 1], o.y[o.y.length - 2]), R(i, o);
                                    else {
                                        var d = o.y.slice(0);
                                        d.splice(n, 2), d.push(l, s), o.y = d.splice(0)
                                    }
                                }
                                if (("y" == e.originDragFlag ? "row_summary" == o.y[0].fid : o.y[1] && "row_summary" == o.y[1].fid) && "left" == o.tb_statistic.row_pos && 0 == r) {
                                    var s = "y" == e.originDragFlag ? o.y[0] : o.y[1],
                                        l = o.y[n],
                                        d = o.y.slice(0);
                                    "y" == e.originDragFlag ? (d.splice(n, 1), d.shift(), d.unshift(s, l), o.y = d.slice(0)) : (o.y.splice(0, 2, o.y[1], o.y[0]), R(i, o))
                                }
                            }
                            if ((!e.deleteField.del && "x" === e.dragFlag || "compare_axis" === e.dragFlag) && ("y" === e.originDragFlag || "y_optional" === e.originDragFlag) && 1 === i.is_build_aggregated) {
                                J({
                                    is_build_aggregated: e.dragIsBuildAggregated,
                                    dragFieldType: e.dragFieldType,
                                    dragFieldFormula: e.dragFieldFormula || ""
                                }) || (errHint("使用聚合函数的新字段无法做为" + ("x" === e.dragFlag ? "维度" : "对比维度") + "使用"), a.item.sortable.cancel())
                            }
                        },
                        stop: function (t, a) {
                            var i = a.item.sortable.model,
                                n = e.viewMeta,
                                i = n[e.dragFlag][e.deleteField.index],
                                r = (a.item.sortable.index, a.item.sortable.dropindex);
                            if (W(a.item), void 0 == r && "x" != e.dragFlag || "y" == e.originDragFlag && ("compare_axis" == e.dragFlag || "y" == e.dragFlag) || "compare_axis" == e.originDragFlag && ("y" == e.dragFlag || "compare_axis" == e.dragFlag) || E(n), "source" !== e.dragFlag) {
                                if (e.deleteField && e.deleteField.del) return "x" == e.originDragFlag && E(n), e.removeAxis({
                                    targetId: t.target.id,
                                    notSortable: a.item.hasClass("not-sortable"),
                                    delIndex: e.deleteField.index,
                                    dragFlag: e.dragFlag,
                                    originDragFlag: e.originDragFlag,
                                    dragField: i
                                }), !1;
                                if (i && "virtual" !== i.data_type) {
                                    if ("x" === e.dragFlag || "compare_axis" === e.dragFlag) {
                                        if (!i) return;
                                        delete i.aggregator, delete i.aggregator_name, delete i.YoY, delete i.QoQ, delete i.yoyQoqSetting, delete i.yoyQoqType, delete i.percentage, "date" === i.data_type && (i.granularity = "day"), i.filter_sort && "x" !== e.originDragFlag && delete i.filter_sort_list, A(n, i)
                                    } else ["y", "y_optional", "y_scatter"].indexOf(e.dragFlag) > -1 && ["x", "compare_axis"].indexOf(e.originDragFlag) > -1 && R(i, n);
                                    G(n), Y()
                                } else "compare_axis" !== e.dragFlag && "y" !== e.dragFlag || (G(n), Y())
                            }
                        },
                        appendTo: "body",
                        helper: "clone",
                        opacity: .6,
                        "ui-floating": !0,
                        items: ".drag-item:not(.not-sortable)",
                        connectWith: ".drag-target-list-dimension"
                    },
                    e.batchOnDropAdd = function (t) {
                        return !!P() && (!(!e.field_list || 0 == e.field_list.length) && void o.open({
                            template: "/static/partials/chart_batch_add_ondrop.html",
                            className: "ngdialog-theme-default batch-add-axis-dialog",
                            scope: e,
                            data: {
                                fieldList: e.field_list,
                                axisType: t
                            },
                            controller: ["$scope", "$filter", function (e, t) {
                                e.fieldTypeList = [{
                                    type: "date",
                                    selected: !1
                                }, {
                                    type: "string",
                                    selected: !1
                                }, {
                                    type: "number",
                                    selected: !1
                                }], 
                                e.initText = {
                                    dialogFooterTip: function (t) {
                                        switch (t) {
                                            case "x":
                                                return e.tips["chart.batchAddTips"];
                                            case "y":
                                                return "";
                                            case "compare_axis":
                                                return e.tips["chart.batchAddTips"]
                                        }
                                    }(e.ngDialogData.axisType),
                                    dialogTitleKeyWord: function (t) {
                                        switch (t) {
                                            case "x":
                                                return e.tips["chart.addFieldsToAxisX"];
                                            case "y":
                                                return e.tips["chart.addFieldsToAxisY"];
                                            case "compare_axis":
                                                return e.tips["chart.addFieldsToAxisCampar"]
                                        }
                                    }(e.ngDialogData.axisType)
                                }, 
                                e.axisType = e.ngDialogData.axisType, angular.forEach(e.ngDialogData.fieldList, function (t) {
                                    if (t.selected = !1, t.disabled = !1, "x" === e.axisType || "compare_axis" === e.axisType) {
                                        J({
                                            is_build_aggregated: t.is_build_aggregated,
                                            dragFieldType: t.data_type,
                                            dragFieldFormula: t.formula
                                        }) || (t.disabled = !0)
                                    }
                                }), 
                                e.selectedAllByType = function (a, i) {
                                    var n = i.selected,
                                        r = t("getFieldsByDataType")(e.ngDialogData.fieldList, a);
                                    angular.forEach(r, function (e) {
                                        e.disabled || (e.selected = n)
                                    })
                                }, 
                                e.checkBatchAddType = function (a, i) {
                                    var n = 0,
                                        r = 0,
                                        o = t("getFieldsByDataType")(e.ngDialogData.fieldList, a);
                                    angular.forEach(o, function (e) {
                                        e.disabled || (r += 1, e.selected && (n += 1))
                                    }), i.selected = n == r
                                }, 
                                e.batchAdd = function () {
                                    var t = [],
                                        a = e.viewMeta,
                                        i = e.axisType;
                                    return angular.forEach(e.ngDialogData.fieldList, function (e) {
                                        e.selected && t.push(e)
                                    }), 0 == t.length ? (errHint(e.tips["chart.canNotAddEmpty"]), !1) : a[i].length + t.length >= 50 ? (errHint(e.tips["chart.tooManyField"]), !1) : (angular.forEach(t, function (e, t) {
                                        V({
                                            tb_fid: e.fid,
                                            tb_name: e.name,
                                            tb_data_type: e.data_type,
                                            tb_new: void 0 != e.formula && "" != e.formula,
                                            is_build_aggregated: e.is_build_aggregated,
                                            meta: a,
                                            axis_field: a[i],
                                            axis_length: a[i].length,
                                            dragFieldFormula: e.formula,
                                            dragFieldType: e.data_type
                                        }, i, t)
                                    }), void e.closeThisDialog())
                                }
                            }]
                        }))
                    },
                    e.onDropAdd = function (t, a, i) {
                        function n(e) {
                            for (var t = 0, a = 0, i = e.length; a < i; a++) {
                                if (e[a].uniq_id == $stateParams.uniq_id) {
                                    t = a, e.splice(t, 1);
                                    break
                                }
                                e[a].items && e[a].items.length > 0 && n(e[a].items)
                            }
                            return e
                        }
                        if (P() && !a.draggable.hasClass("enum-item")) {
                            var r = e.doDragField;
                            if ($.inArray(e.originDragFlag, ["x", "y", "y_optional"]) > -1 && e.originDragFlag != e.dragFlag && r && F(e.viewMeta, r), !e.dragFlag || "source" !== e.dragFlag) {
                                if (angular.element(".axis").find(".ico-remove").remove(), "y" == e.originDragFlag || "y_optional" == e.originDragFlag || "y_scatter" == e.originDragFlag) {
                                    if ("y" == e.dragFlag || "y_optional" == e.dragFlag || "y_scatter" == e.dragFlag) return;
                                    if ("number" == $stateParams.data_type || "number" != $stateParams.data_type && $stateParams.hasOwnProperty("aggregator")) {
                                        var o = e.chart_ops.meta.filter_list_inner;
                                        if (o instanceof Array) o = n(o);
                                        else {
                                            var s = e.drill_level || 0;
                                            o[s] = n(o[s])
                                        }
                                        e.chart_ops.meta.filter_list_inner = o
                                    }
                                }
                                return !1
                            }
                            if (e.needShowGuide) {
                                var l = w.getGuideVal(re);
                                1 == l && "x" === i ? (w.setGuideApi(re, 2), e.viewMeta.top = {
                                    enabled: !0,
                                    value: 20,
                                    reversed: 0,
                                    type: "items"
                                }, $(".dotguidecustomChartEditGuide").remove()) : 2 == l && "y" == i && (w.setGuideApi(re, 3), $(".dotguidecustomChartEditGuide").remove())
                            }
                            if ("x" === i || "compare_axis" === i) {
                                if (!J({
                                        is_build_aggregated: e.dragIsBuildAggregated,
                                        dragFieldType: e.dragFieldType,
                                        dragFieldFormula: e.dragFieldFormula || ""
                                    })) return errHint(e.tips["polymer.useAggregate"]), !1
                            }
                            var d = e.viewMeta;
                            if (d[i].length >= 50) return void errHint(e.tips["chart.tooManyField"]);
                            V({
                                tb_fid: e.dragFieldFid,
                                tb_name: e.dragFieldName,
                                tb_data_type: e.dragFieldType,
                                tb_new: e.dragFieldIsNew,
                                is_build_aggregated: e.dragIsBuildAggregated,
                                meta: d,
                                axis_field: d[i],
                                axis_length: d[i].length,
                                dragFieldFormula: e.dragFieldFormula
                            }, i)
                        }
                    },
                    e.getDefaultAggr = function (e, t, a) {
                        var i = "";
                        e.chart_type;
                        return 1 != a && (i = U(t)), {
                            name: g[i] || "",
                            aggregator: i
                        }
                    },
                    e.removeAxis = function (t) {
                        var a = t.targetId,
                            i = t.notSortable,
                            n = t.delIndex,
                            r = t.dragFlag,
                            o = t.dragField,
                            s = t.originDragFlag;
                        if (P() && (angular.element(".chart-main").css({
                                "overflow-x": "auto"
                            }), o)) {
                            var l = e.chart_ops.meta.level,
                                d = l[e.drill_level];
                            if ("x" === r) d.sort && e.dragFieldFid === d.sort.fid && (d.sort = {}), d.x.splice(n, 1), 0 === n && i && (l.splice(e.drill_level, 1), e.chart_ops.meta.level_fields.splice(e.drill_level, 1)), G(d);
                            else {
                                var c = function () {
                                        d.sort && e.dragFieldFid === d.sort.fid && (e.viewMeta.sort = {}), d.sort && e.dragFieldFid === d.sort.fid && (d.sort = {}), d[r].splice(n, 1), G(d)
                                    },
                                    p = function (e) {
                                        if (e && e.length)
                                            for (var t = e.length; t--;) e[t].fid == o.fid && e[t].uniq_id == o.uniq_id && e.splice(t, 1)
                                    };
                                commonHttp(d.guide_line), commonHttp(d.guide_line_x), commonHttp(d.guide_line_right);
                                var u = d.tb_conditional_formatting;
                                if (u && u.length)
                                    for (len = u.length; len--;) u[len].fid == o.fid && u[len].uniq_id == o.uniq_id && u.splice(len, 1);
                                var h = void 0;
                                if (void 0 !== (h = "dragY" == a ? 0 : "dragY_optional" == a ? 1 : void 0) && 1 == e.warnSetting.warn && function (t) {
                                        var a = !1;
                                        return angular.forEach(e.warnSetting.info, function (e) {
                                            e.axis_type == t && e.field_name == o.name && (a = !0)
                                        }), a
                                    }(h)) return confirm(e.tips["chart.delWarnField"]) ? void errHint() : (d.x = angular.copy(e.originX), d.y = angular.copy(e.originY), d.y_optional = angular.copy(e.originYoptional), angular.element(".ui-draggable-dragging").find(".ico-remove").remove(), void angular.element(".ui-draggable-dragging").css({
                                    left: 0,
                                    top: 0
                                }));
                                errHint()
                            }
                            if ("number" === o.data_type || "number" != o.data_type && o.hasOwnProperty("aggregator")) {
                                var f = e.drill_level || 0,
                                    g = e.chart_ops.meta.filter_list_inner[f];
                                angular.forEach(g, function (e, t) {
                                    e.uniq_id == o.uniq_id && g.splice(t, 1)
                                })
                            }
                            A(d, o), F(d, o);
                            var m = d.color_setting;
                            if ("x" === r || "x" === s || "compare_axis" === s) {
                                if (m && 0 == +m.mode) {
                                    var _ = !1;
                                    if (m.field.length > 0)
                                        for (var v = 0; v < m.field.length; v++) {
                                            if (m.field[v] && o.fid === m.field[v].fid) {
                                                m.field.splice(v, 1), _ = !0;
                                                break
                                            }
                                            if (!m.field[0]) {
                                                m.field.splice(v, 1), _ = !0;
                                                break
                                            }
                                        }
                                    if (m.field && 0 === m.field.length && (delete d.color_setting, m = null), _ && m && m.field.length > 0) return void j({
                                        meta: d,
                                        bindToMeta: !0,
                                        callback: function () {}
                                    })
                                }
                            } else if (("y" === r || "y_optional" === r) && m && 0 == +m.mode) return void j({
                                meta: d,
                                bindToMeta: !0,
                                callback: function () {}
                            });
                            d.x.length + (d.compare_axis || []).length !== 0 && d.y.length + (d.y_optional || []).length !== 0 || m && 1 == +m.mode && (delete d.color_setting, m = null), Y()
                        }
                    },
                    e.removeAxisAction = function (t, a, i) {
                        var n = $(t.target).parents(".J-delete-target-id"),
                            r = $(t.target).parents(".J-delete-item-cls"),
                            o = {
                                targetId: n.attr("id"),
                                notSortable: $stateParams.hasClass("not-sortable"),
                                delIndex: n.find(r).index(),
                                dragFlag: a,
                                dragField: i,
                                originDragFlag: a
                            };
                        "x" == a && E(i), e.removeAxis(o)
                    };
                var fe;
                    e.lazySaveChart = function (e, t, a) {
                        var i = e || {
                                not_need_redraw: !1,
                                only_refresh_data: !1
                            },
                            n = void 0 === t || "" === t ? 600 : t;
                        clearTimeout(fe), fe = setTimeout(function () {
                            a ? Q(i) : Y(i)
                        }, n)
                    },
                    e.ifEnterDown = function (t) {
                        13 == t.keyCode && e.saveAfterCheckDirty({
                            not_need_redraw: !0,
                            only_refresh_data: !1,
                            closeDialog: !1
                        })
                    },
                    e.ifClearName = function (t) {
                        (e.chart_ops && "未命名图表" == e.chart_ops.name || "Untitled Chart" == e.chart_ops.name) && (e.chart_ops.name = "")
                    },
                    e.saveChartImmediate = Y, e.saveAfterCheckDirty = function (e, t) {
                        if (!N()) return !1;
                        t ? Q(e) : Y(e)
                    },
                    e.isSortField = function (t) {
                        var a = t.field,
                            i = t.axis,
                            n = e.viewMeta,
                            r = ["C200", "C210", "C211", "C212", "C220", "C240", "C241", "C242", "C250", "C290", "C330", "C350", "C351", "C352"],
                            o = ["C320"].concat(r),
                            s = n.sort;
                        return "compare_axis" === i && (s = n.compare_axis[t.index].compare_sort), !($stateParams.indexOf(n.chart_type) < 0) && (!(!s || !s.type) && (!("x" == s.axis && o.indexOf(n.chart_type) < 0) && ("virtual" == a.data_type && "row_summary" == s.fid || ["x", "y", "compare_axis"].indexOf(s.axis) > -1 && (a.uniq_id && s.uniq_id ? s.uniq_id == a.uniq_id : s.fid == a.fid))))
                    },
                    e.fieldSortType = function (t) {
                        var a = e.viewMeta,
                            i = a.sort;
                        return t && "compare_axis" === t.axis && (i = a.compare_axis[t.index].compare_sort), i && i.type ? {
                            "ico-sort-desc": "desc" == i.type,
                            "ico-sort-asc": "asc" == i.type
                        } : {}
                    },
                    e.axisHandle = {
                        add: function (t) {
                            var a = e.viewMeta;
                            "compare_axis" === t && (a.compare_axis = [], e.saveChartImmediate())
                        },
                        remove: function (t) {
                            var a = e.viewMeta;
                            if ("compare_axis" === t) {
                                var i = a.color_setting;
                                if (i && 0 == +i.mode) {
                                    var n = !1;
                                    if (i.field.length > 0 && angular.forEach(a.compare_axis, function (e) {
                                            for (var t = 0; t < i.field.length; t++)
                                                if (e.fid === i.field[t].fid) {
                                                    i.field.splice(t, 1), n = !0;
                                                    break
                                                }
                                        }), i.field && 0 === i.field.length && (delete a.color_setting, i = null), n && i && i.field.length > 0) return void j({
                                        meta: a,
                                        bindToMeta: !0,
                                        callback: function () {
                                            delete a.compare_axis, e.saveChartImmediate()
                                        }
                                    })
                                }
                                delete a.compare_axis, Y()
                            }
                        }
                    },
                    e.getCurrentLayerFilter = function (t) {
                        var a = e.drill_level || 0;
                        return t instanceof Array ? t : t[a]
                    },
                    e.drill_level = 0,
                    function (t) {
                        e.filterRangeList = e.filterRangeList || {}, commonService.chart.getInfo(ne).success(function (a) {
                            if (t && (t.set_warn || t.getChartInfo), "0" == a.status) {
                                if (ee(a.result), e.serviceFilterList = angular.copy(a.result.meta.filter_list), !a.result.update_time || !a.result.meta.hasOwnProperty("level")) {
                                    e.isCreate = !0;
                                    try {
                                        var i = window.localStorage;
                                        0 != Object.keys(response.result.meta) || Number(i.getItem(CHART_EDIT_GUIDE_KEY)) || e.show_user_guide()
                                    } catch (e) {}
                                }
                            } else errorHandle(a)
                        })
                    }(), 
                    e.getChartArgsHeight = te, e.setAdvanceAggregatorName = v, e.showFieldTip = function (e, t) {
                        if (t.nick_name) {
                            var a = $(e.target).parents(".data-tag").next(".field-tip"),
                                i = parseInt(a.css("width")),
                                n = a.children(".arrow"),
                                r = $(e.target).parents("li").position(),
                                o = parseInt($(e.target).parents("li").css("width")),
                                s = ($(e.target).parents("ul"), parseInt($(e.target).parents("ul").css("width")));
                            a.css("display", "block"), a.css("top", $stateParams.top + 38), s > $stateParams.left + i ? (a.css("left", $stateParams.left), n.css("left", 16)) : (a.css("left", $stateParams.left + o - i - 5), n.css("left", i - 16 - 15)), "row_summary" == t.fid && a.css({
                                left: 0,
                                top: $stateParams.top + 32
                            })
                        }
                    },
                    e.hideFieldTip = function (e) {
                        $(e.target).parents(".data-tag").next(".field-tip").css("display", "none")
                    },
                    bdp.utils.fixedBlur($(".chart-right input, .chart-right textarea")), e.$on("$destroy", function () {
                        o.closeAll()
                    })
            }
        ])
};