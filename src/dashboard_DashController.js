function DashController() {
    function e(e, t, a, i, n, r, o, s, l, d, c, p, u, h, f, g, m, v) {
        function b(t, i) {
            function n(e) {
                return $.isEmptyObject(e) || "C400" === e.chart_type && $.isEmptyObject(e.layers) || e.level && !e.level[0].chart_type
            }
            1 == i.meta.property || i.meta.ct_id.indexOf("text_") > -1 || a.chart.getInfo({
                ct_id: i.meta.ct_id,
                ws_id: e.wsId
            }).success(function (r) {
                "0" == r.status ? n(r.result.meta) && (e.chartdel["chart" + i.meta.ct_id] = !0, e.dashStandardItems.splice(t, 1), a.chart.del({
                    ct_id: i.meta.ct_id,
                    ws_id: e.wsId,
                    dsh_meta: {
                        charts: A(e.dashStandardItems, !0)
                    }
                }).success(function (t) {
                    0 == t.status || d(e.tips["dash.delChartFail"])
                })) : d(Number(r.status))
            })
        }

        function y(i) {
            e.hitMemoryGlobalFilter = !1, e.hitGlobalFilterId = [], e.global.globalDashFilter = [], a.dash_global_filter.item({
                dash_id: i,
                rule_id: t.global.rule_id || ""
            }).then(function (t) {
                if ("0" == t.status) {
                    if (e.selected.dsh_id !== i) return;
                    e.global.originalGlobalFilter = angular.copy(t.result);
                    var a = bdp.utils.handleGlobalFilterLevel(t.result),
                        n = s.df_id,
                        r = s.range;
                    if (angular.forEach(a, function (e) {
                            if (n == e.df_id ? w(r, e) : C(e), "date" == e.data_type && "" == e.config.granularity) {
                                var t = e.config.range || "";
                                if (t) {
                                    var a = !1;
                                    angular.forEach(e.adv_date_list, function (e) {
                                        e.opt_id == t && (a = !0)
                                    }), a || (e.config.range = "", e.config.default_select = !1, e.range = [])
                                }
                            }
                        }), e.global.globalDashFilter = a, e.global.globalDashFilter.length ? $(".gridster").removeClass("gridster-nofilters") : $(".gridster").addClass("gridster-nofilters"), e.hitMemoryGlobalFilter || e.hitJumpGlobalFilter) var o = e.$watch("global.dashboardLoaded", function (t, a) {
                        t === !0 && (a === !0 && void 0 === e.draw_chart_url || (e.$broadcast("useMemoryGlobalFilter", !0), o()))
                    })
                } else d(Number(t.status))
            })
        }

        function w(t, a) {
            if (e.global.globalDashFilterItems = e.global.globalDashFilterItems || {}, "date" == a.data_type && "" == a.config.granularity)
                for (var i = 0, n = a.adv_date_list.length; i < n; i++) {
                    var r = a.adv_date_list[i];
                    r.name == t ? a.range[0] = r.opt_id : a.range[0] = t
                } else a.range[0] = t;
            e.global.globalDashFilterItems[a.df_id] = {
                granularity: a.config.granularity || "",
                df_id: a.df_id,
                range: a.range,
                data_type: a.data_type,
                rela_charts: a.rela_ct_ids,
                range_type: 1
            }, e.hitJumpGlobalFilter = !0
        }

        function C(a) {
            var i = angular.fromJson(window.localStorage.getItem("global_filter_memory")) || [],
                n = !1,
                r = t.wsId || "";
            angular.forEach(i, function (t) {
                t.ws_id == r && a.data_type == t.data_type && a.name == t.name && a.config && a.config.hasOwnProperty("granularity") && a.config.granularity == t.granularity && ("date" == a.data_type && "" == a.config.granularity ? angular.forEach(a.adv_date_list, function (e) {
                    e.opt_id == t.range[0] && (a.range = t.range, n = !0)
                }) : (a.range = t.range, a.range_type = t.range_type), e.hitMemoryGlobalFilter = !0, e.hitGlobalFilterId.push(a.df_id))
            })
        }

        function x() {
            var a = t.global.dshWatermarkImg;
            if (a) {
                var i = $(".gridster"),
                    n = 1 == t.usedThemeId ? "water-mark-white" : "water-mark-dark";
                if (e.isFullscreenMode && (n = 1 === e.fullDisplayTheme ? "water-mark-white" : "water-mark-dark"), e.dashLayoutInfo.show_block) bdp.utils.browser().ie ? i.addClass(n) : $(".dash-water-mark").remove();
                else if ("url(" + a + ")", bdp.utils.browser().ie) i.addClass(n);
                else if (0 == $(".dash-water-mark").length) {
                    var r = document.createElement("div");
                    r.className = "water-mark dash-water-mark " + n, i.append(r)
                } else $(".dash-water-mark").removeClass("water-mark-white").removeClass("water-mark-white").addClass(n)
            }
        }

        function k(e) {
            return localforage.getItem("CACHE_DASH_ID").then(function (t) {
                t != e.dsh_id && localforage.setItem("CACHE_DASH_ID", e.dsh_id)
            }), localforage.getItem("CACHE_DASH_DATA")
        }

        function D(a, n) {
            t.dashLoading = !1;
            var o = n.result;
            if (!isObjectEmpty(o)) {
                t.dashCategory = o.category,
                    t.dashProperty = o.property, e.outer_share_info = o.outer_share_info, e.gis_flag = o.gis_flag, e.isTpl = o.is_template || 0, e.dashTbId = e.isTpl && o && o.tb_ids ? o.tb_ids[0] : "", e.dashLayoutInfo.show_block = !defined(o.meta.show_block) || o.meta.show_block, e.dashLayoutInfo.fixed_width = !!defined(o.meta.fixed_width) && o.meta.fixed_width, e.dashLayoutInfo.layout_style = defined(o.meta.layout_style) ? o.meta.layout_style : 1, e.dashLayoutInfo.dashCategory = o.category || 0, 0 != e.dashLayoutInfo.dashCategory || 2 != e.dashLayoutInfo.layout_style || 3 == e.enterprise_type || bdp.bdpPageStatus.isUnderAdvDash() || bdp.bdpPageStatus.isUnderDataScreen() || (e.dashLayoutInfo.layout_style = 1), (t.proj_share || t.global.rule_id) && (t.dashEditMode = !1), T(e.dashLayoutInfo.show_block, e.dashLayoutInfo.layout_style), e.dashTitle = o.name, e.dashLabel = o.label || "", e.dashComment = o.comment || "", e.property = o.property;
                var s = o.meta.charts || [];
                if (e.dashStandardItems = s || [], e.dashStandardItems.sort(function (e, t) {
                        return e.row == t.row ? e.col - t.col : e.row < t.row ? -1 : 1
                    }), e.isFullscreenMode) {
                    var l = ($(".main"), $(".dash-wrapper")),
                        d = l.height(),
                        c = d / 9;
                    e.dashPages = [], e.gridsterOpts.rowHeight = c, e.gridsterOpts.draggable.enabled = !1, e.gridsterOpts.resizable.enabled = !1;
                    var p = [],
                        u = 0,
                        h = 0;
                    e.dashStandardItems.forEach(function (t, a) {
                        var i = t.children[0].meta,
                            n = i.tb_update_time;
                        i.tb_update_time = 1e3 * n, t.sizeY = Math.min(t.sizeY, 9), t.row += h, t.row %= 9, t.index = a;
                        var r = !0;
                        if (t.row + t.sizeY > 9) r = !1;
                        else
                            for (var o = 0; o < p.length; o++) {
                                var s = p[o];
                                if (!(s.col >= t.col + t.sizeX || s.row >= t.row + t.sizeY || t.col >= s.col + s.sizeX || t.row >= s.row + s.sizeY)) {
                                    r = !1;
                                    break
                                }
                            }
                        r ? p.push(t) : (h += 9 - t.row, e.dashPages.push(p), p = [], u++, t.row = 0, p.push(t))
                    }), p.length > 0 && e.dashPages.push(p)
                }
                e.dashInit.load = !1, e.draw_chart_url = {};
                var f, g;
                e.chartdel = {};
                for (var m = 0; m < e.dashStandardItems.length; m++) e.dashStandardItems[m].children[0].meta.filter_list = [];
                if (t.creatingChart) return t.creatingChart = !1, S(e.dashStandardItems[e.dashStandardItems.length - 1].children[0].meta.type), delete t.creatingChartInfo, e.saveDashboard().then(function () {
                    r.path().indexOf(e.currDash.dashSelected) >= 0 && e.getDashboardInfo(e.currDash.dashSelected)
                }), !1;
                t.isGlobalCustom = {};
                var _;
                _ = e.isFullscreenMode ? 1 === e.fullDisplayTheme ? "dark" : "default" : 1 === t.usedThemeId ? "dark" : "default", window.dashChartsUpdateMap = {};
                for (var v = 0; v < s.length; v++) {
                    f = s[v];
                    for (var y = 0; y < f.children.length; y++)
                        if (g = f.children[y], g.meta.filter_list = [], g.meta.type) {
                            window.dashChartsUpdateMap[g.meta.ct_id] = g.meta.tb_update_time + g.meta.update_time;
                            t.isGlobalCustom[g.meta.ct_id] = !1, e.global.rule_id && "&rule_id=" + e.global.rule_id, e.draw_chart_url[g.dom_id] = {
                                options: {
                                    theme: _,
                                    device: e.isFullscreenMode ? e.fullDisplayDevice : "pc",
                                    ws_id: t.wsId,
                                    dsh_id: a,
                                    ct_id: g.meta.ct_id,
                                    tb_id: g.meta.tb_id,
                                    rule_id: t.global.rule_id,
                                    read_cache: !0,
                                    optional: {
                                        linked_chart_type: g.meta.chart_link.linked_chart_type,
                                        link_info: g.meta.chart_link.link_info,
                                        chart_jump_info: g.meta.chart_jump
                                    }
                                },
                                lazyload: !0
                            }
                        } else !e.global.rule_id && b(v, g)
                }
                if (e.global.dashboardLoaded = !0, !t.hasInitDashboard && E && window._BDP_TIME_LOGGER && (BDPLogger.time("feStatistics", {
                        category: "performance",
                        action: "loading",
                        opt_label: "first_screen"
                    }), t.hasInitDashboard = !0), e.isFullscreenMode && !e.$$phase && e.$digest(), x(), 2 == e.dashLayoutInfo.layout_style) {
                    var w = $(".dash-wrapper")[0].scrollHeight;
                    $(".gridster").height(w)
                }
                k(o).then(function (a) {
                    window.dashChartsCache && !window.dashChartsCache[o.dsh_id] ? (window.dashChartsCache = {}, window.dashChartsCache[o.dsh_id] = null) : (window.dashChartsCache = {}, window.dashChartsCache[o.dsh_id] = a || null);
                    for (var n = 0; n < s.length; n++) {
                        f = s[n].children;
                        for (var r = 0; r < f.length; r++) {
                            g = f[r];
                            var l = e.draw_chart_url[g.dom_id];
                            void 0 !== l && (l.lazyload = n > 2)
                        }
                    }
                    i(function () {
                        e.$$phase || e.$digest(), e.lazy = new bdpChart.LazyLoad(".gridster", ".gridster-item", {
                            diff: 50,
                            handleResize: !0,
                            onItemLoad: function (t) {
                                var a = $(t).find(".item-chart").attr("id");
                                e.draw_chart_url[a] && (e.draw_chart_url[a].lazyload = !1)
                            },
                            onItemsLoad: function () {
                                e.$$phase || e.$digest()
                            }
                        }), e.$on("$destroy", function () {
                            e.lazy.destroy()
                        });
                        var a = bdp.store.get("chart_editId");
                        e.search_ct_id ? setTimeout(function () {
                            e.scrollToChart(e.search_ct_id)
                        }, 10) : a && (setTimeout(function () {
                            e.$broadcast("scrollToChart", a)
                        }, 10), bdp.store.set("chart_editId", "")), setTimeout(function () {
                            t.wtbRelationSelectedItem && (e.scrollToChart(t.wtbRelationSelectedItem.ct_id), t.wtbRelationSelectedItem = null)
                        }, 0), setTimeout(function () {
                            t.warnListSelectedItem && (e.scrollToChart(t.warnListSelectedItem.ct_id), t.warnListSelectedItem = null)
                        }, 0)
                    })
                })
            }
        }

        function S(a) {
            var i, n = e.dashStandardItems,
                r = n[n.length - 1],
                o = 0,
                s = 0,
                l = n.length;
            switch (a) {
                case "C310":
                    r.sizeX = 3, r.sizeY = 2;
                    break;
                case "C230":
                case "C261":
                case "C290":
                    r.sizeX = 4, r.sizeY = 4;
                    break;
                case "C271":
                case "C272":
                case "C330":
                case "C340":
                case "C360":
                case "C370":
                    r.sizeX = 6, r.sizeY = 6;
                    break;
                case "C400":
                    r.sizeX = 12, r.sizeY = 7;
                    break;
                case "C350":
                case "C351":
                case "C352":
                    r.sizeX = 6, r.sizeY = 4
            }
            if (t.creatingChartInfo && t.creatingChartInfo.split_compare && (r.sizeX = 12, r.sizeY = 6), t.creatingChartPosition) {
                var d = t.creatingChartPosition.position,
                    c = t.creatingChartPosition.refItem;
                if (r.sizeX = c.sizeX, r.sizeY = c.sizeY, "top" === d || "left" === d || "right" === d)
                    for (var p = 0; p < l - 1; p++) i = n[p], i.row >= c.row && i.children[0].dom_id !== r.children[0].dom_id && (i.row += r.sizeY);
                else if ("bottom" === d)
                    for (var p = 0; p < l - 1; p++) i = n[p], i.row > c.row && (i.row += r.sizeY);
                switch (d) {
                    case "left":
                        c.col >= 2 ? r.sizeX = Math.min(c.col, c.sizeX) : r.sizeX = c.sizeX, c.col - r.sizeX < 0 ? (r.row = c.row + c.sizeY, r.col = 0) : (r.col = c.col - r.sizeX, r.row = c.row);
                        break;
                    case "top":
                        r.row = c.row, r.col = c.col;
                        break;
                    case "right":
                        c.col + c.sizeX <= 10 ? r.sizeX = Math.min(12 - c.col - c.sizeX, c.sizeX) : r.sizeX = c.sizeX, c.col + c.sizeX + r.sizeX > 12 ? (r.row = c.row + c.sizeY, r.col = 12 - r.sizeX) : (r.col = c.col + c.sizeX, r.row = c.row);
                        break;
                    case "bottom":
                        r.row = c.row + c.sizeY, r.col = c.col
                }
                t.creatingChartPosition = null
            } else {
                for (var p = 0; p < l - 1; p++) i = n[p], i.row + i.sizeY > o && (i.col + i.sizeX > 12 - r.sizeX ? (o = Math.max(o, i.row + i.sizeY), s = 0) : (o = Math.max(o, i.row), s = Math.max(s, i.col + i.sizeX)));
                r.row = o, r.col = s
            }
        }

        function T(a, n) {
            var r = bdpChart.helper.isMobile(),
                o = t.isThirdIframe;
            r && o && function () {
                t.mobileMode = !0;
                var e = null;
                $(".gridster").on("click", ".chart-box", function (t) {
                    var a = $(this).find(".item-chart").get(0);
                    if (a == e) return !1;
                    $(a).addClass("reactive").removeClass("noscroll"), e && $(e).removeClass("reactive"), e = a
                }), $(document).on("touchmove", ".item-chart.reactive", function (e) {
                    return $(this).find(".chart-table").length > 0
                }), $(document).on("scroll", function (t) {
                    e && ($(e).removeClass("reactive"), e = null)
                })
            }(), e.gridsterOpts = {
                layoutStyle: n,
                margins: a ? r && o ? [8, 0] : [8, 8] : [0, 0],
                outerMargin: !1,
                minColumns: 2,
                minRows: 2,
                maxRows: 1e3,
                columns: 12,
                isMobile: !(!r || !o),
                resizable: {
                    enabled: !t.proj_share && t.permision.dashOperate,
                    handles: "se",
                    start: function (t, a, i) {
                        e._draggingElemBox = {
                            width: a.width(),
                            height: a.height()
                        };
                        var n = $(".gridster").height();
                        $(".gridster").css("height", n + 100)
                    },
                    resize: function (t, a, i) {
                        var n = a.find(".chart").data("chart-data");
                        n && !n.isSplitChart() && (1 == e.dashLayoutInfo.layout_style && reflowChart(a), "C310" == a.context.dataset.chartType && bdp.utils.updateChartFontSize(a.context.id))
                    },
                    stop: function (t, a, n) {
                        i(function () {
                            var t = a.find(".chart").data("chart-data");
                            if (t) {
                                var i = e._draggingElemBox.width / e._draggingElemBox.height,
                                    n = a.width() / a.height(),
                                    r = i < 1 && n >= 1 || i >= 1 && n < 1,
                                    o = t.getChartType(),
                                    s = r || t.isSplitChart() || o === bdpChart.ChartType.Line && "dark" === t.theme || o === bdpChart.ChartType.TreeMap,
                                    l = t.info.navigator_setting && t.info.navigator_setting.enabled,
                                    d = bdpChart.ChartType,
                                    c = t.info.chart_type,
                                    p = l && [d.Line, d.Column, d.NStackColumn, d.PStackColumn, d.Sankey, d.Area, d.NStackArea, d.PStackArea, d.Biax].indexOf(c) > -1;
                                s = s || p, reflowChart(a, !0, s), "C310" == a.context.dataset.chartType && bdp.utils.updateChartFontSize(a.context.id)
                            }
                        }, 0), e.saveDashboard()
                    }
                },
                draggable: {
                    enabled: (!r || !o) && (!t.proj_share && t.permision.dashOperate),
                    handle: ".chart-box",
                    stop: function () {
                        e.lazy && e.lazy.fireLoad(), e.saveDashboard()
                    }
                }
            }
        }

        function I() {
            var t = e.dashLayoutInfo.show_block;
            e.gridsterOpts.margins = t ? [8, 8] : [0, 0]
        }

        function L(t) {
            var a = bdp.utils.createNewGridItem(e.dashStandardItems),
                i = {
                    sizeX: 6,
                    sizeY: 4,
                    row: a.row,
                    col: a.col,
                    children: [{
                        dom_id: "id" + a.domId,
                        meta: {
                            name: e.tips["chart.untitledChart"],
                            ct_id: "init_ctid"
                        }
                    }]
                };
            e.dashStandardItems || (e.dashStandardItems = []), e.dashStandardItems.push(i)
        }

        function A(e, t) {
            var a = angular.copy(e);
            return angular.forEach(a, function (e) {
                e.children[0].meta = {
                    ct_id: e.children[0].meta.ct_id,
                    dash_setting: e.children[0].meta.dash_setting,
                    html: e.children[0].meta.html || ""
                }, t || delete e.children[0].meta.dash_setting
            }), a
        }
        var E = !1;
        if (!t.hasInitDashboard && window._BDP_TIME_LOGGER) {
            E = !0;
            for (var F = t.historyTime, M = F.length - 1; M >= 0; M--) F[M].indexOf("dash_edit") < 0 && (E = !1);
            E && (BDPLogger.time("feStatistics", {
                category: "performance",
                action: "loading",
                opt_label: "first_init_dashboard"
            }), BDPLogger.log("feStatistics", {
                category: "performance",
                action: "loading",
                opt_label: "dashboard_dom_ready",
                opt_value: window._BDP_TIME_LOGGER.domReady
            }), BDPLogger.log("feStatistics", {
                category: "performance",
                action: "loading",
                opt_label: "dashboard_white_screen",
                opt_value: window._BDP_TIME_LOGGER.whiteScreen
            }), window._BDP_TIME_LOGGER.onloadPushFlag && window._BDP_TIME_LOGGER.onload > 0 && (BDPLogger.log("feStatistics", {
                category: "performance",
                action: "loading",
                opt_label: "dashboard_onload",
                opt_value: window._BDP_TIME_LOGGER.onload
            }), window._BDP_TIME_LOGGER.onloadPushFlag = !1))
        }
        if (3 == t.enterprise_type && 1 == $.cookie("show_capacity_overflow") && (o.open({
                templateUrl: "/static/partials/dialogTemplates/capacity_overflow.html",
                className: "ngdialog-theme-default ngDialog-width-320",
                data: {
                    vipLevel: t.memberData.vipLevel
                }
            }), $.cookie("show_capacity_overflow", "0")), e.$on("afterWindowResize", function () {
                e.getAllChartInstances().forEach(function (e) {
                    e.getChartType() === bdpChart.ChartType.Line && "dark" === e.theme && (e.destroy(), e.renderChart())
                })
            }), $(document).off("click.table").on("click.table", function (e) {
                $(document).trigger("clickTable", {
                    e: e
                })
            }), e.mouseleaveItem = function () {
                e.$broadcast("fire-mouseleave-item-event", !0)
            }, e.chartOptions = {}, t.mainChartContainer = t.mainChartContainer || [], t.mainChartIdContainer = t.mainChartIdContainer || [], t.mainChartColorContainer = t.mainChartColorContainer || {}, e.global.dashboardLoaded = !1, s.projId) {
            e.AllMap = ["全部", "全部时间", "All"], t.last_dash_path = r.path(), e.$on("jumpToSearch", function (t, a) {
                e.search_ct_id = a
            });
            if (e.$on("_websocketChartMessage_", function (t, a) {
                    1 == ("string" == typeof a.data ? $.parseJSON(a.data) : a.data).type && h.refresh({
                        drawChartUrl: e.draw_chart_url,
                        type: "dashboard",
                        evt: t,
                        scope: e,
                        ret: a
                    })
                }), e.$on("scrollToChart", function (t, a) {
                    setTimeout(function () {
                        e.scrollToChart(a)
                    }, 0)
                }), t.$editable = !0, e.currDash = {
                    activeProjId: s.projId,
                    dashSelected: s.dashId
                }, e.activeProjId = s.projId, e.dashSelected = s.dashId, t.dashEditMode = !1, e.wsId = t.wsId, t.view = "dashboard", t.show_bdp_header = !0, e.dashInit = {}, e.dashInit.load = !0, s.ruleId) e.global.rule_id = s.ruleId;
            else {
                var j = r.path();
                j.indexOf("ru_") >= 0 && (e.global.rule_id = j.substring(j.indexOf("ru_")))
            }
            e.selected = {
                proj_id: s.projId,
                dsh_id: s.dashId,
                rule_id: e.global.rule_id,
                ws_id: t.wsId
            }, e.scrollToChart = function (e, t) {
                t = t || $(".gridster-desktop");
                var a = t.closest(".dash-wrapper");
                t.find(".gridster-item").each(function (t, i) {
                    var n = $(i);
                    if (e == n.data("chart-id")) {
                        var r = a.height(),
                            o = n[0].offsetTop;
                        o + n.height() > r ? a.animate({
                            scrollTop: o - 15
                        }, function () {
                            n.addClass("highlight-chart")
                        }) : n.addClass("highlight-chart"), $(document).on("click.cancelHighlight", function () {
                            n.removeClass("highlight-chart"), $(this).off("click.cancelHighlight")
                        })
                    }
                })
            }, localStorage.setItem("mc_location_path", r.path());
            var j = r.path();
            j.indexOf("dash_fullscreen") > 0 ? (e.isFullscreenMode = !0, t.view = "dash-fullscreen", t.show_bdp_header = !0, e.$dashSlider = $("#dash-slider"), $(document).on("keyup.dash_fullscreen", function (t) {
                switch (t.keyCode) {
                    case 37:
                        e.$dashSlider.slick("slickPrev");
                        break;
                    case 39:
                        e.$dashSlider.slick("slickNext");
                        break;
                    case 27:
                        0 === $(".fullscreen-chart").length && e.exitFullScreen()
                }
            })) : (e.isFullscreenMode = !1, t.view = "dashboard", t.show_bdp_header = !0, $(document).off("keyup.dash_fullscreen")), e.getGlobalFilterItem = y, e.dashLayoutInfo = {}, e.hitMemoryGlobalFilter = !1, e.hitGlobalFilterId = [], e.$on("useMemoryGlobalFilter", function (t, a) {
                if (a) {
                    var i = [];
                    angular.forEach(e.global.globalDashFilter, function (t, a) {
                        i.push({
                            df_id: t.df_id,
                            range: t.range,
                            data_type: t.data_type,
                            granularity: t.config.granularity || "",
                            range_type: t.range_type || "1"
                        }), e.hitGlobalFilterId.indexOf(t.df_id) > -1 && (e.global.globalDashFilterItems[t.df_id] = {
                            granularity: t.config.granularity || "",
                            df_id: t.df_id,
                            range: t.range,
                            data_type: t.data_type,
                            show_name: t.range,
                            real_name: t.range,
                            rela_charts: t.rela_ct_ids
                        })
                    }), angular.forEach(e.draw_chart_url, function (t, a) {
                        t.global_filter_value = [], angular.forEach(e.global.globalDashFilter, function (e, a) {
                            e.rela_ct_ids.indexOf(t.options.ct_id) > -1 && (t.options.optional.dsh_filter = i, delete t.options.optional.filter_list, t.options.read_cache = !1, t.options.optional._t = new Date)
                        })
                    })
                }
            }), e.dashboardAutoplay = !1;
            var O = null;
            e.toggleDashboardAutoplay = function () {
                e.dashboardAutoplay = !e.dashboardAutoplay;
                var t = e.dashboardAutoplay ? "Play" : "Pause";
                e.dashboardAutoplay && (clearTimeout(O), O = setTimeout(function () {
                    e.dashboardAutoplay && $("#dash-slider").slick("slickNext")
                }, 1e3)), $("#dash-slider").slick("slick" + t).off("beforeChange").on("beforeChange", function () {
                    $(document).trigger("dashboardAutoplay")
                })
            };
            var P = function () {
                    $(".dash-fullscreen-wrap .page-nav, .dash-fullscreen-wrap .view-header .btn-layer").addClass("invisible"), $(".dash-fullscreen-wrap, .dash-fullscreen-wrap .gridster-item, .dash-fullscreen-wrap .gridster-item .item-chart").addClass("cursor-none")
                },
                N = function () {
                    $(".dash-fullscreen-wrap .page-nav, .dash-fullscreen-wrap .view-header .btn-layer").removeClass("invisible"), $(".dash-fullscreen-wrap, .dash-fullscreen-wrap .gridster-item, .dash-fullscreen-wrap .gridster-item .item-chart").removeClass("cursor-none")
                };
            if (e.isFullscreenMode) {
                var B = setTimeout(P, 5e3);
                $(".dash-fullscreen-wrap").on("mousemove", function () {
                    null !== B && (window.clearTimeout(B), B = null, N(), setTimeout(function () {
                        B = setTimeout(P, 3e3)
                    }, 200))
                })
            }
            e.getDashboardInfo = function (i) {
                if (e.lazy && e.lazy.destroy(), i ? y(i) : e.global.globalDashFilter = [], t.dashLoading = !0, "" == i || void 0 === i) return t.dashLoading = !1, !1;
                var n = {};
                return n.dsh_id = i, t.global.rule_id && (n.rule_id = t.global.rule_id), a.dashboard.getInfo(n).then(function (e) {
                    if (0 == e.status) {
                        if (e.result && 2 == e.result.category && j.indexOf("/mode/adv") < 0) return t.dashLoading = !1, j += "/mode/adv", void r.path(j);
                        if (t.projectLoaded) D(i, e);
                        else var a = setInterval(function () {
                            t.projectLoaded && (D(i, e), clearInterval(a))
                        }, 200)
                    } else {
                        if (t.dashLoading = !1, 3 == e.status) return t.wsId ? r.path("/dash_edit_ws/" + t.wsId) : r.path("/dash_edit/"), void location.reload();
                        d(+e.status, {
                            warn_msg: e.errstr
                        })
                    }
                })
            }, e.getDashboardInfo(e.currDash.dashSelected), e.$on("fire-refresh-dashboard", function () {
                "dashboard" == t.view && e.getDashboardInfo(e.currDash.dashSelected)
            }), e.showThirdIframeDshList = function () {
                $(".dash-sidebar").addClass("show-list"), $(".dashboard-item").off("click.showThirdIframeDshList").on("click.showThirdIframeDshList", function (e) {
                    $(".dash-sidebar").removeClass("show-list")
                })
            }, e.btn_layer = {}, $("body").on("dashboard-scroll-start.dashOperate", function () {
                var a = e.btn_layer;
                a.show_more_btn = !1, a.show_presentation_mode = !1, a.showDownloadSheet = !1, a.outerShareFuncs = !1, t.permision.personal_help_video = !1, $(".J_dashboard_presentation").addClass("ng-hide"), $(".J_dashboard_more_btn").addClass("ng-hide"), $(".J_dashboard_share_layer").addClass("ng-hide"), $(".J-help-video").addClass("ng-hide")
            }), e.$on("$destroy", function () {
                $("body").off("dashboard-scroll-start.dashOperate"), j.replace("/dash_edit/", "").replace("/dash_fullscreen/", "") != r.path().replace("/dash_edit/", "").replace("/dash_fullscreen/", "") && (t.mainChartContainer = [], t.mainChartIdContainer = [], t.mainChartColorContainer = {}), $(document).off("click.table"), $(document).off("clickTable"), e.getAllChartInstances().forEach(function (e) {
                    e.getChartType() === bdpChart.ChartType.Table && e.destroy()
                })
            }), e.filterMergedTable = function (e) {
                return "excel" !== e.type && "aggr" !== e.type
            }, e.addItem = function (a) {
                if (!e.loadingStatus || !e.loadingStatus.isAdding) {
                    e.loadingStatus = {
                        isAdding: !0,
                        loadingFolders: !0
                    };
                    var i = {
                        getClearSaveMeta: A,
                        addGridItem: L,
                        currDash: {
                            activeProjId: s.projId,
                            dashSelected: s.dashId
                        },
                        dashStandardItems: e.dashStandardItems
                    };
                    a || (t.creatingChartPosition = null);
                    o.open({
                        template: "/static/partials/dialogTemplates/chart-select-table.html",
                        className: "ngdialog-theme-default choose-table J-chart-select-table" + (t.permision.canUseCustomChart ? "" : " no-custom-chart"),
                        data: i,
                        scope: e,
                        controller: "chartAddCtrl"
                    });
                    BDPLogger.log("add_chart_db", {
                        category: "user_interact",
                        action: "click",
                        opt_label: JSON.stringify({
                            add_entrance: a && "position" === a.entrance ? "chart_to_position_select" : "chart_to_bottom"
                        })
                    })
                }
            }, e.newChartFunc = {
                editState: function (t) {
                    this.showHandlers = t, this.$handlersLayer = angular.element("#J_bdpPosHandlers"), t ? (this.addShadow(), this.moveHandlersTo(null, e.dashStandardItems[0]), BDPLogger.log("add_chart_db", {
                        category: "user_interact",
                        action: "click",
                        opt_label: JSON.stringify({
                            add_entrance: "chart_to_position"
                        })
                    })) : (this.$handlersLayer.css("display", "none"), this.removeShadow())
                },
                addShadow: function () {
                    var e = document.getElementById("J_dashEditView").getBoundingClientRect(),
                        t = '<div class="bdp-pos-handlers-shadow-top" style="background:inherit;opacity:0.94;position:fixed;z-index:12222;top:0;left:0;right:0;height:' + (e.top + 10) + 'px;"></div>',
                        a = '<div class="bdp-pos-handlers-shadow-left" style="background:inherit;opacity:0.94;position:fixed;z-index:12222;top:' + (e.top - 10) + "px;left:0;bottom:0;width:" + (e.left + 12) + 'px;"></div>';
                    angular.element("body").append(t).append(a)
                },
                removeShadow: function () {
                    angular.element(".bdp-pos-handlers-shadow-left").remove(), angular.element(".bdp-pos-handlers-shadow-top").remove()
                },
                moveHandlersTo: function (t, a) {
                    this.selectedItem = a;
                    var i = a.children[0].meta.ct_id,
                        n = angular.element("#" + i),
                        r = n.width(),
                        o = n.height(),
                        s = n.position(),
                        l = {};
                    l = e.dashLayoutInfo.show_block ? {
                        width: r + 8,
                        height: o + 12,
                        left: s.left - 4,
                        top: s.top - 6
                    } : {
                        width: r,
                        height: o + 4,
                        left: s.left,
                        top: s.top - 2
                    }, 0 == a.row ? angular.element(".bdp-pos-handler-top").css("top", "17px") : angular.element(".bdp-pos-handler-top").css("top", "0"), this.$handlersLayer.css("display", "block").css(l);
                    var d = document.getElementById("J_bdpPosHandlers").getBoundingClientRect();
                    this.targetRect = {}, this.targetRect.bottom = Math.ceil(d.bottom), this.targetRect.top = Math.floor(d.top), this.targetRect.left = Math.floor(d.left), this.targetRect.right = Math.ceil(d.right), this.targetRect.width = d.width, this.targetRect.height = d.height, t && this.showDirectionArea(t)
                },
                hideAllHandler: function () {
                    angular.element(".bdp-pos-handler").css({
                        display: "none"
                    })
                },
                _throttledMouseMove: _.throttle(function (e) {
                    this.showDirectionArea(e)
                }, 30),
                _onMouseMove: function (e) {
                    this.showDirectionArea(event)
                },
                _onMouseOut: function (e) {
                    var t = this;
                    t.hideAllHandler(), t.oldDirection = null
                },
                showDirectionArea: function (e) {
                    var t = this;
                    t.direction = t.getDirection(t.targetRect, {
                        x: e.clientX,
                        y: e.clientY
                    }), t.direction && t.oldDirection != t.direction && t.direction && (angular.element(".bdp-pos-handler-" + t.direction).css({
                        display: "block"
                    }), angular.element(".bdp-pos-handler-" + ("top" == t.direction ? "bottom" : "top")).css({
                        display: "none"
                    })), t.oldDirection = t.direction, t.$handlersLayer.css("cursor", t.direction ? "pointer" : "default")
                },
                getDirection: function (e, t) {
                    var a = "",
                        i = {
                            x: .5 * (e.left + e.right),
                            y: .5 * (e.top + e.bottom)
                        };
                    return t.y <= i.y && t.y >= e.top ? a = "top" : t.y > i.y && t.y <= e.bottom && (a = "bottom"), a
                },
                create: function () {
                    this.direction && (t.creatingChartPosition = {
                        position: this.direction,
                        refItem: angular.copy(this.selectedItem)
                    }, this.editState(!1), e.addItem({
                        entrance: "position"
                    }))
                }
            }, e.saveDashboard = function () {
                if (!e.dashTitle) return void d(e.tips["dash.titleRequired"]);
                var t = {};
                e.dashLayoutInfo.ct_id && (t[e.dashLayoutInfo.ct_id] = e.dashLayoutInfo.dash_setting), 0 != e.dashLayoutInfo.dashCategory || 2 != e.dashLayoutInfo.layout_style || 3 == e.enterprise_type || bdp.bdpPageStatus.isUnderAdvDash() || bdp.bdpPageStatus.isUnderDataScreen() || (e.dashLayoutInfo.layout_style = "1");
                var i = {
                    ws_id: e.wsId,
                    dsh_id: e.currDash.dashSelected,
                    chart_data: angular.toJson(t),
                    data: angular.toJson({
                        name: e.dashTitle,
                        label: e.dashLabel,
                        comment: e.dashComment,
                        meta: {
                            layout_style: e.dashLayoutInfo.layout_style || 1,
                            show_block: e.dashLayoutInfo.show_block,
                            fixed_width: e.dashLayoutInfo.fixed_width || !1,
                            charts: A(e.dashStandardItems, !0)
                        }
                    })
                };
                return a.dashboard.modify(i).then(function (t) {
                    0 != +t.status ? (3204 == +t.status && d(e.tips["dash.titleDuplicate"]), d(Number(t.status))) : r.path().indexOf(e.currDash.dashSelected) >= 0 && y(e.currDash.dashSelected)
                })
            }, e.$watch(function () {
                return t.proj_share || !t.permision.dashOperate
            }, function (t) {
                e.gridsterOpts && (e.gridsterOpts.resizable.enabled = !t, e.gridsterOpts.draggable.enabled = !t)
            }), e.$watch("dashProperty", function (t) {
                1 == t && e.gridsterOpts && (e.gridsterOpts.resizable.enabled = !1, e.gridsterOpts.draggable.enabled = !1)
            }), e.goHelp = function (e) {
                c(e)
            }, e.chartChain = f(e), e.chartDashJump = m(e), e.getAllChartInstances = function () {
                var t = [];
                return e.dashStandardItems && e.dashStandardItems.length > 0 && e.dashStandardItems.forEach(function (e) {
                    var a = e.children[0].dom_id;
                    if (a) {
                        var i = $("#" + a).find(".chart").data("chart-data");
                        i && t.push(i)
                    }
                }), t
            }, e.enterFullScreen = function (e) {
                var a = r.path().replace("dash_edit", "dash_fullscreen");
                if (t.isThirdIframe && (a = r.path().replace("third_iframe", "dash_fullscreen")), r.path(a), e) {
                    var i = $("body")[0],
                        n = i.requestFullscreen || i.webkitRequestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen;
                    n && (n.apply(i), $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function (e) {
                        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
                        else {
                            if ($("body").find(".fullscreen-chart").length > 0);
                            else {
                                var a = r.path();
                                a.indexOf("dash_fullscreen") && (a = a.replace("dash_fullscreen", "dash_edit"), t.isThirdIframe && (a = a.replace("dash_fullscreen", "third_iframe")), r.path(a))
                            }
                            $(document).off("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange")
                        }
                    }), $("body").hasClass("fullscreen-status") || $("body").addClass("fullscreen-status"))
                }
            }, r.path().indexOf("/dash_fullscreen/") > -1 && (t.projectLoaded = !0), e.exitFullScreen = function () {
                t.projectLoaded = !1;
                var e = r.path().replace("dash_fullscreen", "dash_edit");
                t.isThirdIframe && (e = r.path().replace("dash_fullscreen", "third_iframe")), r.path(e);
                var a = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen;
                a && a.apply(document)
            }, localStorage ? e.fullDisplayDevice = localStorage.getItem("fullDisplayDevice") || "pc" : e.fullDisplayDevice = $.cookie("fullDisplayDevice") || "pc", e.setFullDisplayDevice = function (a) {
                a !== e.fullDisplayDevice && (e.fullDisplayDevice = a, BDPLogger.log("feStatistics", {
                    category: "interaction",
                    action: "click",
                    opt_label: "setFullDisplayDevice",
                    opt_value: 1
                }), BDPLogger.log("feStatistics", {
                    category: "feature",
                    action: "fullDisplayDevice",
                    opt_label: a,
                    opt_value: 1
                }), localStorage ? localStorage.setItem("fullDisplayDevice", a) : $.cookie("fullDisplayDevice", a), e.isFullscreenMode && e.dashStandardItems.forEach(function (e) {
                    var i = e.children[0].dom_id;
                    if (i) {
                        var n = $("#" + i).find(".chart").data("chart-data");
                        n && n.setDisplayDevice(a, t)
                    }
                }), $(".fullscreen-chart").length > 0 && $(".fullscreen-chart").each(function (e, i) {
                    var n = $(i).data("chart-data");
                    n && n.setDisplayDevice(a, t)
                }))
            }, e.resetChartData = function () {
                $(".common-dot-guide").remove(), e.removeFullDisplayStyle(), e.resetInnerFilter(), e.resetAdvancedSort()
            }, e.removeFullDisplayStyle = function () {
                e.isFullscreenMode || "pc" === e.fullDisplayDevice && e.fullDisplayTheme === t.usedThemeId || e.dashStandardItems.forEach(function (e) {
                    var a = e.children[0].dom_id;
                    if (a) {
                        var i = $("#" + a).find(".chart").data("chart-data");
                        i && i.setDisplayStyle("pc", 1 == t.usedThemeId ? "dark" : "default", t)
                    }
                })
            }, e.resetAdvancedSort = function () {
                var a = t.fullScreenCacheData.advancedSortList;
                if (a && !$.isEmptyObject(a))
                    for (var i in a) e.dashStandardItems.forEach(function (e) {
                        e.children[0].meta.ct_id == i && (e.children[0].meta.advanced_sort = a[i])
                    })
            }, e.resetInnerFilter = function () {
                function a(e, t) {
                    if (e.uniq_id || t.uniq_id ? sameFilter = e.fid == t.fid && e.uniq_id == t.uniq_id : sameFilter = e.fid == t.fid, sameFilter)
                        for (var a in e) void 0 != t[a] && e[a] != t[a] && (e[a] = t[a])
                }
                var i = t.fullScreenCacheData.innerFilterList;
                if (i && !$.isEmptyObject(i))
                    for (var n in i) e.dashStandardItems.forEach(function (e) {
                        if (e.children[0].meta.ct_id == n) {
                            var t = e.children[0].meta.filter_list_inner;
                            t && t.length > 0 && (i[n] ? t.map(function (e) {
                                i[n].map(function (t) {
                                    a(e, t)
                                })
                            }) : t.map(function (e) {
                                e.range = []
                            }))
                        }
                    })
            }, localStorage ? e.fullDisplayTheme = +localStorage.getItem("fullDisplayTheme") || t.usedThemeId : e.fullDisplayTheme = +$.cookie("fullDisplayTheme") || t.usedThemeId, e.setFullDisplayTheme = function (a) {
                if (a !== e.fullDisplayTheme) {
                    e.fullDisplayTheme = a, BDPLogger.log("feStatistics", {
                        category: "interaction",
                        action: "click",
                        opt_label: "setFullDisplayTheme",
                        opt_value: 1
                    }), BDPLogger.log("feStatistics", {
                        category: "feature",
                        action: "fullDisplayTheme",
                        opt_label: a,
                        opt_value: 1
                    }), localStorage ? localStorage.setItem("fullDisplayTheme", a) : $.cookie("fullDisplayTheme", a);
                    var i = 1 === a ? "dark" : "default";
                    e.isFullscreenMode && e.dashStandardItems.forEach(function (e) {
                        var a = e.children[0].dom_id;
                        if (a) {
                            var n = $("#" + a).find(".chart").data("chart-data");
                            n && n.setTheme(i, t)
                        }
                    }), $(".fullscreen-chart").length > 0 && $(".fullscreen-chart").each(function (e, a) {
                        var n = $(a).data("chart-data");
                        n && n.setTheme(i, t)
                    })
                }
            }, e.setMobLayout = function (t) {
                e.global.showMobLayout = t
            }, e.sortMobCharts = {
                stop: function (t, a) {
                    e.saveDashboard()
                }
            }, e.makeDashEdit = function (a) {
                t.dashEditMode = a, a ? I() : (I(), e.saveDashboard(), e.dash.cancelEditState())
            }, e.dash = {
                editChartMeta: function (t) {
                    var a = t.meta.ct_id;
                    e.dashLayoutInfo.id = t.dom_id, e.dashLayoutInfo.ct_id = a, e.dashLayoutInfo.chart_type = t.meta.type, e.dashLayoutInfo.show_navigator = t.meta.show_navigator, e.dashLayoutInfo.dash_setting = t.meta.dash_setting || {
                            show_axis: !0,
                            show_datalabels: ["C230", "C271", "C272", "C330", "C360"].indexOf(t.meta.type) > -1,
                            show_legend: !0,
                            show_title: !0,
                            show_total: !0,
                            border_left: !1,
                            border_top: !1,
                            border_right: !1,
                            border_bottom: !1,
                            border_null: !0
                        }, e.dashLayoutInfo.hasTotal = t.meta.hasTotal, void 0 === e.dashLayoutInfo.dash_setting.show_navigator && e.dashLayoutInfo.show_navigator && (e.dashLayoutInfo.dash_setting.show_navigator = !0), $(document).off("click.edit_dashboard").on("click.edit_dashboard", function (t) {
                        var a = $(t.target);
                        a.parents(".gridster-item").length || a.parents(".dash-edit-wrapper").length || e.dash.cancelEditState()
                    })
                },
                cancelEditState: function () {
                    i(function () {
                        e.dashLayoutInfo.id = void 0, e.dashLayoutInfo.ct_id = "", e.dashLayoutInfo.chart_type = void 0
                    }, 0)
                },
                canSetLegend: function () {
                    var t = e.dashLayoutInfo.chart_type;
                    return t && ["C200", "C261", "C280", "C300", "C310", "C320", "C330", "C340", "C360", "C370", "C400", "C243", "C500"].indexOf(t) < 0
                },
                canSetAxis: function () {
                    var t = e.dashLayoutInfo.chart_type;
                    return t && ["C210", "C211", "C212", "C220", "C240", "C241", "C242", "C250", "C280", "C350", "C351", "C352"].indexOf(t) > -1
                },
                canSetDataLabels: function () {
                    var t = e.dashLayoutInfo.chart_type;
                    return ["C200", "C261", "C300", "C310", "C340", "C400", "C500"].indexOf(t) < 0
                },
                canSetTotal: function () {
                    var t = e.dashLayoutInfo.chart_type,
                        a = angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart .chart").data("chart-data");
                    return e.dashLayoutInfo.hasTotal && bdpChart.configurable.canEditChartSummary(t, a)
                },
                canSetTitle: function () {
                    return !!e.dashLayoutInfo.ct_id && e.dashLayoutInfo.ct_id.indexOf("text_") < 0
                },
                canSetNavigator: function () {
                    return e.dashLayoutInfo.show_navigator
                },
                modify: function (t) {
                    e.saveDashboard().then(function (a) {
                        if ("datalabels" === t) {
                            var i = angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart .chart").data("chart-data");
                            i && i.info && (i.info.show_datalabels = e.dashLayoutInfo.dash_setting.show_datalabels, i.renderChart())
                        } else "legend" === t || "axis" === t || "total" === t || "navigator" === t ? reflowChart(angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart"), !0, !0) : "title" === t ? reflowChart(angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart"), !0) : "show_block" !== t && "fixed_width" !== t || (I(), angular.element(".item-chart").each(function () {
                            reflowChart(angular.element(this), !0)
                        }));
                        x()
                    })
                },
                toggleBorder: function (t) {
                    var a = e.dashLayoutInfo.dash_setting;
                    a["border_" + t] = !a["border_" + t], "null" !== t ? a.border_null = !Boolean(a.border_left + a.border_bottom + a.border_right + a.border_top) : (a.border_top = !1, a.border_right = !1, a.border_bottom = !1, a.border_left = !1, a.border_null = !0);
                    for (var i = 0; i < e.dashStandardItems.length; i++) {
                        var n = e.dashStandardItems[i].children[0];
                        if (n.dom_id === e.dashLayoutInfo.id) {
                            n.meta.dash_setting = e.dashLayoutInfo.dash_setting;
                            break
                        }
                    }
                    e.saveDashboard().then(function (e) {})
                }
            },
                e.gotoTplSheet = function () {
                    $.cookie("ds_tb_id", e.dashTbId), r.path("/tpl_replace/" + e.currDash.activeProjId + "/" + e.currDash.dashSelected)
                },
                e.personalDashExcelExport = function () {
                    location.href = "/api/personal/export?dsh_id=" + e.currDash.dashSelected, o.open({
                        templateUrl: "/static/partials/dialogTemplates/dash_tpl_step.html",
                        scope: e,
                        showClose: !1,
                        className: "ngdialog-theme-default dash-tpl-step",
                        data: {
                            proj_id: e.currDash.activeProjId,
                            dsh_id: e.currDash.dashSelected
                        },
                        controller: ["$scope", function (e) {
                            e.goToTplDashborad = function () {
                                o.closeAll()
                            }, e.goToReplaceTpl = function () {
                                r.path("/tpl_replace/" + e.ngDialogData.proj_id + "/" + e.ngDialogData.dsh_id), o.closeAll()
                            }
                        }]
                    })
                }, u(["dash.delChartFail", "dash.plzSelectTable", "dash.selectTbTitle", "dash.emptyFolderList", "dash.titleRequired", "dash.titleDuplicate", "dash.delChartLinkSuccess", "chart.untitledChart", "saveSuccess", "chart.chainChart", "chart.chainField", "dash.dashCartJump.errSameTip", "dash.dashCartJump.successDelTip", "dash.dashCartJump.selectDashPrefix", "dash.dashCartJump.selectDashPrefix", "dash.dashCartJump.selectFolder", "dash.dashCartJump.selectDashboard", "dash.dashCartJump.selectFilter", "dash.dashCartJump.globalFilter", "dash.dashCartJump.openType", "dash.dashCartJump.thisWin", "dash.dashCartJump.newWin", "dash.dashCartJump.errEmptyTip"], e)
        }
    }
    angular
        .module("BC.controllers.dashboard", ["ngDragDrop", "gridster", "slick"])
        .controller("DashController", e),
        e.$inject = [
            "$scope", "$rootScope", "commonService", "$timeout",
            "$interval", "$location", "ngDialog", "$stateParams",
            "commonHttp", "errHint", "operatorHelpLink", "$http",
            "$jsTipTranslate", "autoRefreshChart", "dashChartLink",
            "$q", "dashChartJump", "guideService"]
};