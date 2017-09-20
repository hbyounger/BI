function advDashboardCtrl() {
    function e(e, t, a, i, n, r, o, s, l, d, c, p, u, h, f, g, m, _, v, b, y) {
        function w(e) {
            return $.isEmptyObject(e) || "C400" === e.chart_type && $.isEmptyObject(e.layers) || e.level && !e.level[0].chart_type
        }

        function C(t, i) {
            1 == i.meta.property || i.meta.ct_id.indexOf("text_") > -1 || (e.dash.isDeletingItem = !0, a.chart.getInfo({
                ct_id: i.meta.ct_id,
                ws_id: e.wsId
            }).success(function (n) {
                "0" == n.status ? w(n.result.meta) ? (e.chartdel["chart" + i.meta.ct_id] = !0, e.dashStandardItems.splice(t, 1), a.chart.del({
                    ct_id: i.meta.ct_id,
                    ws_id: e.wsId,
                    dsh_meta: {
                        charts: N(e.dashStandardItems, !0)
                    }
                }).success(function (t) {
                    e.dash.isDeletingItem = !1, 0 == t.status || d(e.tips["dash.delChartFail"])
                })) : e.dash.isDeletingItem = !1 : (e.dash.isDeletingItem = !1, d(Number(n.status)))
            }))
        }

        function x(i) {
            e.hitMemoryGlobalFilter = !1, e.hitGlobalFilterId = [], a.dash_global_filter.item({
                dash_id: i,
                rule_id: t.global.rule_id || ""
            }).then(function (t) {
                if ("0" == t.status) {
                    if (e.selected.dsh_id !== i) return;
                    t.result.length > 0 ? angular.element(".J-dash-edit-content-view").addClass("J-content-filter-view") : angular.element(".J-dash-edit-content-view").removeClass("J-content-filter-view"), e.global.globalDashFilter = [], e.global.originalGlobalFilter = angular.copy(t.result);
                    var a = bdp.utils.handleGlobalFilterLevel(t.result),
                        n = s.df_id,
                        r = s.range;
                    if (angular.forEach(a, function (e) {
                            if (n == e.df_id ? k(r, e) : D(e), "date" == e.data_type && "" == e.config.granularity) {
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

        function k(t, a) {
            if ("date" == a.data_type && "" == a.config.granularity)
                for (var i = 0, n = a.adv_date_list.length; i < n; i++) {
                    var r = a.adv_date_list[i];
                    r.name == t ? a.range[0] = r.opt_id : a.range[0] = t
                } else a.range[0] = t;
            e.hitJumpGlobalFilter = !0
        }

        function D(a) {
            var i = angular.fromJson(window.localStorage.getItem("global_filter_memory")) || [],
                n = !1,
                r = t.wsId || "";
            angular.forEach(i, function (t) {
                t.ws_id == r && a.data_type == t.data_type && a.name == t.name && a.config && a.config.hasOwnProperty("granularity") && a.config.granularity == t.granularity && ("date" == a.data_type && "" == a.config.granularity ? angular.forEach(a.adv_date_list, function (e) {
                    e.opt_id == t.range[0] && (a.range = t.range, n = !0)
                }) : (a.range = t.range, a.range_type = t.range_type), e.hitMemoryGlobalFilter = !0, e.hitGlobalFilterId.push(a.df_id))
            })
        }

        function S() {
            var t = $(".dash-wrapper");
            t && t.length > 0 && (t.length > 0 && e.dashLayoutInfo.gridsterStyle ? e.dashLayoutInfo.gridsterStyle.height = t[0].scrollHeight : e.dashLayoutInfo.gridsterStyle = {
                height: t[0].scrollHeight
            })
        }

        function T(t) {
            I(), e.dash.scaleDashbord.selectedData = defined(t.meta.scale_flag) ? t.meta.scale_flag : 1, H && 1 != e.dash.scaleDashbord.selectedData && i(function () {
                e.dash.scaleDashbord.setScreenScale()
            }, 500)
        }

        function I(t) {
            e.dashLayoutInfo.dashMode = "adv", e.dashLayoutInfo.dashWrapperStyle = {}, 2 == e.dash.scaleDashbord.selectedData && H && (e.dashLayoutInfo.dashWrapperStyle = {
                overflow: "hidden"
            }), e.dashLayoutInfo.gridsterStyle = {
                width: e.resolution.width + "px",
                "min-width": e.resolution.width + "px",
                height: e.resolution["min-height"] + "px",
                "min-height": e.resolution["min-height"] + "px",
                transform: e.dash.scaleDashbord.selectedScaleVal,
                "transform-origin": "0 0",
                "background-color": e.pageWrapStyles.bgColor,
                "border-color": e.pageWrapStyles.lineColor,
                "border-style": e.pageWrapStyles.style,
                "border-width": e.pageWrapStyles.width,
                "background-size": e.pageWrapStyles["background-size"],
                "background-image": e.pageWrapStyles["background-image"],
                "background-repeat": e.pageWrapStyles["background-repeat"],
                "background-position": e.pageWrapStyles["background-position"]
            }, t ? (S(), bdp.bdpDash.setDashItemPadding(e.dashStandardItems, v, reflowChart, null)) : i(function () {
                S(), bdp.bdpDash.setDashItemPadding(e.dashStandardItems, v, reflowChart, null)
            }, 100)
        }

        function L(e) {
            e.itemStyle = {
                left: e.left + "px",
                top: e.top + "px",
                width: e.width + "px",
                height: e.height + "px",
                "z-index": e.zIndex,
                "background-color": (e.bgColor || "rgba(0, 1, 0, 0)") + " !important",
                border: "CUSTOM" == e.borderType ? e.customBorder.width + "px " + e.customBorder.style + " " + e.customBorder.color : ""
            }
        }

        function A(e) {
            return localforage.getItem("CACHE_DASH_ID").then(function (t) {
                t != e.dsh_id && localforage.setItem("CACHE_DASH_ID", e.dsh_id)
            }), localforage.getItem("CACHE_DASH_DATA")
        }

        function E(a, n) {
            t.dashLoading = !1;
            var o = n.result;
            if (!isObjectEmpty(o)) {
                e.resolution = o.resolution, t.dashProperty = H ? 0 : 1, t.dashCategory = o.category, e.outer_share_info = o.outer_share_info, e.gis_flag = o.gis_flag, e.isTpl = o.is_template || 0, e.dashTbId = e.isTpl && o && o.tb_ids ? o.tb_ids[0] : "", e.dashLayoutInfo.show_block = !defined(o.meta.show_block) || o.meta.show_block, e.dashLayoutInfo.fixed_width = !!defined(o.meta.fixed_width) && o.meta.fixed_width, e.dashLayoutInfo.layout_style = 2, o.meta.styles && !$.isEmptyObject(JSON.parse(o.meta.styles)) && (e.pageWrapStyles = JSON.parse(o.meta.styles)), e.$broadcast("screenDashboardInfo", {
                    pageWrapStyles: e.pageWrapStyles,
                    resolution: e.resolution
                }), (t.proj_share || t.global.rule_id) && (t.dashEditMode = !1), M(e.dashLayoutInfo.show_block, e.dashLayoutInfo.layout_style), e.dashTitle = o.name, e.dashLabel = o.label || "", e.dashComment = o.comment || "", e.property = o.property;
                var s = o.meta.charts || [];
                e.minZIndex = s.minZIndex || z, e.maxZIndex = s.maxZIndex || z, e.dash.calcCurIndex(s), e.dashStandardItems = s || [], e.dashStandardItems.sort(function (e, t) {
                    return e.row == t.row ? e.col - t.col : e.row < t.row ? -1 : 1
                }), e.dashInit.load = !1, e.draw_chart_url = {};
                var l, d;
                e.chartdel = {};
                for (var c = 0; c < e.dashStandardItems.length; c++) {
                    var p = e.dashStandardItems[c];
                    p.children[0].meta.filter_list = [], p.zIndex = p.zIndex || z, L(p)
                }
                if (t.creatingChart) return t.creatingChart = !1, F(e.dashStandardItems[e.dashStandardItems.length - 1].children[0].meta.type), delete t.creatingChartInfo, e.saveDashboard().then(function () {
                    r.path().indexOf(e.currDash.dashSelected) >= 0 && e.getDashboardInfo(e.currDash.dashSelected)
                }), !1;
                t.isGlobalCustom = {}, e.isFullscreenMode ? e.chartTheme = 1 === e.fullDisplayTheme ? "dark" : "default" : e.chartTheme = 1 === t.usedThemeId ? "dark" : "default", window.dashChartsUpdateMap = {};
                for (var u = 0; u < s.length; u++) {
                    l = s[u];
                    for (var h = 0; h < l.children.length; h++)
                        if (d = l.children[h], d.meta.filter_list = [], d.meta.type) {
                            window.dashChartsUpdateMap[d.meta.ct_id] = d.meta.tb_update_time + d.meta.update_time;
                            t.isGlobalCustom[d.meta.ct_id] = !1, e.global.rule_id && "&rule_id=" + e.global.rule_id, e.draw_chart_url[d.dom_id] = {
                                options: {
                                    theme: e.chartTheme,
                                    device: e.isFullscreenMode ? e.fullDisplayDevice : "pc",
                                    ws_id: t.wsId,
                                    dsh_id: a,
                                    ct_id: d.meta.ct_id,
                                    tb_id: d.meta.tb_id,
                                    rule_id: t.global.rule_id,
                                    read_cache: !0,
                                    optional: {
                                        linked_chart_type: d.meta.chart_link.linked_chart_type,
                                        link_info: d.meta.chart_link.link_info,
                                        chart_jump_info: d.meta.chart_jump
                                    }
                                },
                                lazyload: !0
                            }
                        } else !e.global.rule_id && C(u, d)
                }
                if (e.global.dashboardLoaded = !0, e.isGettingDashInfo = !1, e.isFullscreenMode && !e.$$phase && e.$digest(), 2 == e.dashLayoutInfo.layout_style && $(".dash-wrapper") && $(".dash-wrapper").length > 0) {
                    var f = $(".dash-wrapper")[0].scrollHeight;
                    $(".gridster").height(f)
                }
                A(o).then(function (a) {
                    window.dashChartsCache && !window.dashChartsCache[o.dsh_id] ? (window.dashChartsCache = {}, window.dashChartsCache[o.dsh_id] = null) : (window.dashChartsCache = {}, window.dashChartsCache[o.dsh_id] = a || null);
                    for (var n = 0; n < s.length; n++) {
                        l = s[n].children;
                        for (var r = 0; r < l.length; r++) {
                            d = l[r];
                            var c = e.draw_chart_url[d.dom_id];
                            void 0 !== c && (c.lazyload = n > 2)
                        }
                    }
                    i(function () {
                        if (e.$$phase || e.$digest(), e.lazy = new bdpChart.LazyLoad(".gridster", ".gridster-item", {
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
                            }), 2 != e.dash.scaleDashbord.selectedData) {
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
                        }
                        i(function () {
                            S()
                        }, 100)
                    })
                }), T(o), H ? e.makeDashEdit(!0) : e.makeDashEdit(!1)
            }
        }

        function F(a) {
            var i = e.dashStandardItems,
                n = i[i.length - 1];
            switch (a) {
                case "C310":
                    n.sizeX = 3, n.sizeY = 2;
                    break;
                case "C230":
                case "C261":
                case "C290":
                    n.sizeX = 4, n.sizeY = 4;
                    break;
                case "C271":
                case "C272":
                case "C330":
                case "C340":
                case "C360":
                case "C370":
                    n.sizeX = 6, n.sizeY = 6;
                    break;
                case "C400":
                    n.sizeX = 12, n.sizeY = 7;
                    break;
                case "C350":
                case "C351":
                case "C352":
                    n.sizeX = 6, n.sizeY = 4
            }
            t.creatingChartInfo && t.creatingChartInfo.split_compare && (n.sizeX = 12, n.sizeY = 6);
            for (var r, o = i.length, s = 0, l = 0, d = 0; d < o - 1; d++) r = i[d], r.row + r.sizeY > s && (r.col + r.sizeX > 12 - n.sizeX ? (s = Math.max(s, r.row + r.sizeY), l = 0) : (s = Math.max(s, r.row), l = Math.max(l, r.col + r.sizeX)));
            n.row = s, n.col = l
        }

        function M(a, n) {
            var r = bdpChart.helper.isMobile(),
                o = t.isThirdIframe;
            r && o && function () {
                t.mobileMode = !0;
                var e = null;
                $(".gridster").on("click", ".J_chart_box", function (t) {
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
                minColumns: 1,
                minRows: 1,
                maxRows: 1e3,
                columns: 24,
                isMobile: !(!r || !o),
                resizable: {
                    enabled: !t.proj_share && t.permision.dashOperate && t.dashEditMode,
                    handles: "se",
                    start: function (t, a, i) {
                        e._draggingElemBox = {
                            width: a.width(),
                            height: a.height()
                        };
                        var n = a.attr("id"),
                            r = e.dashStandardItems.length;
                        if (e.dashLayoutInfo.ct_id != n)
                            for (var o = 0; o < r; o++)
                                if (e.dashStandardItems[o].children[0].meta.ct_id === n) {
                                    e.dash.editChartMeta(e.dashStandardItems[o].children[0], e.dashStandardItems[o]);
                                    break
                                }
                    },
                    resize: function (t, a, i) {
                        var n = a.find(".chart").data("chart-data"),
                            r = a.attr("data-chart-type");
                        ["C101", "C102", "C103", "C104", "C105"].indexOf(r) < 0 && (!n || n.isSplitChart()) || (1 == e.dashLayoutInfo.layout_style ? reflowChart(a) : 2 == e.dashLayoutInfo.layout_style && bdp.utils.throttle(function () {
                            reflowChart(a)
                        }, 17)(), "C310" == a.context.dataset.chartType && bdp.utils.updateChartFontSize(a.context.id))
                    },
                    stop: function (t, a, n) {
                        i(function () {
                            var t = a.find(".chart").data("chart-data");
                            if (t) {
                                var i = e._draggingElemBox.width / e._draggingElemBox.height,
                                    n = a.width() / a.height(),
                                    r = i < 1 && n >= 1 || i >= 1 && n < 1,
                                    o = t.getChartType(),
                                    s = r || t.isSplitChart() || o === bdpChart.ChartType.Line && "dark" === t.theme || o === bdpChart.ChartType.TreeMap;
                                reflowChart(a, !0, s), "C310" == a.context.dataset.chartType && bdp.utils.updateChartFontSize(a.context.id)
                            }
                        }, 0), I(), 1 == e.dashLayoutInfo.layout_style ? e.saveDashboard() : 2 == e.dashLayoutInfo.layout_style && (i(function () {
                            j(a)
                        }, 0), Y.save()), e.$emit("emitItemSizePos", "resizable")
                    }
                },
                draggable: {
                    enabled: !(t.dashEditMode && r && o || q || G) && (!t.proj_share && t.permision.dashOperate),
                    handle: ".J_chart_box",
                    stop: function (t, a, i) {
                        I("noDelay"), e.lazy && e.lazy.fireLoad(), 1 == e.dashLayoutInfo.layout_style ? e.saveDashboard() : 2 == e.dashLayoutInfo.layout_style && Y.save(), e.$emit("emitItemSizePos", "draggable")
                    }
                }
            }
        }

        function j(t) {
            var a = t.data("chart-type"),
                i = t.data("chart-id");
            ["C101", "C102", "C103", "C104", "C105", "C400", "C500"].indexOf(a) >= 0 && e.dashStandardItems.forEach(function (t, a) {
                t.children[0].meta.ct_id === i && e.$broadcast("editChartMeta", {
                    child: t.children[0],
                    item: t,
                    is_cancel: !1,
                    lock_status: e.lockItemPosMap,
                    need_reload: !1
                })
            })
        }

        function O() {
            var t = e.dashLayoutInfo.show_block;
            e.gridsterOpts.margins = t ? [8, 8] : [0, 0]
        }

        function P(t) {
            for (var a, i, n = $.inArray(t, ["C101", "C102", "C103", "C105"]) > -1, r = e.dashStandardItems || [], o = r.length, s = 0, l = 0, d = 0, c = 0; c < o; c++) {
                var p = r[c];
                p.row + p.sizeY > l && (p.col + p.sizeX > 6 ? (l = p.row + p.sizeY, d = 0) : (l = p.row, d = p.col + p.sizeX));
                for (var u = 0; u < p.children.length; u++) a = p.children[u], i = parseInt(a.dom_id.substr(2)), s = i > s ? i : s
            }
            s++;
            var h = {
                sizeX: 6,
                sizeY: 4,
                row: l,
                col: d,
                children: [{
                    dom_id: "id" + s,
                    meta: {
                        name: e.tips["chart.untitledChart"],
                        ct_id: "init_ctid",
                        is_special_chart: n
                    }
                }]
            };
            if ("C101" === t && (h.sizeX = 3, h.sizeY = 2, h.borderType = "CUSTOM", h.customBorder = {
                    color: "#99a1a7",
                    style: "solid",
                    width: 1
                }), "C104" === t && (h.borderType = "t1"), "C105" === t && (h.children[0].meta.style = {
                    "font-size": "14px",
                    "text-align": "center"
                }, h.borderType = "CUSTOM", h.customBorder = {
                    color: "#99a1a7",
                    style: "solid",
                    width: 1
                }, h.width = 188, h.height = 44), $.inArray(t, ["C101", "C102", "C103", "C104", "C105"]) > -1 && (h.zIndex = e.maxZIndex + 1), e.dashLayoutInfo && 2 == e.dashLayoutInfo.layout_style) {
                Y.setFreeLayout();
                var f = Y.getBlankPos();
                h.width = h.width || 480, h.height = h.height || 336, h.left = f.left, h.top = f.top
            }
            L(h), e.dashStandardItems || (e.dashStandardItems = []), e.dashStandardItems.push(h)
        }

        function N(e, t) {
            var a = angular.copy(e);
            return angular.forEach(a, function (e) {
                e.children[0].meta = {
                    ct_id: e.children[0].meta.ct_id,
                    dash_setting: e.children[0].meta.dash_setting,
                    html: e.children[0].meta.html || "",
                    style: e.children[0].meta.style || {}
                }, t || delete e.children[0].meta.dash_setting, e.children[0].meta.style && !$.isEmptyObject(e.children[0].meta.style) || delete e.children[0].meta.style
            }), a
        }

        function B(t, a) {
            var i = e.dashLayoutInfo.dash_setting;
            return i.style = {}, t.some(function (e) {
                var t = e.children[0].meta,
                    n = !1;
                if (a == t.ct_id && (i.style = t.style, i.drill_level = t.drill_level, n = !0), n) return n
            }), i
        }
        var z = 3e3,
            R = r.path(),
            q = R.indexOf("dash_edit") >= 0 && R.indexOf("mode/adv") >= 0 && R.indexOf("adv_dash_edit") < 0,
            H = R.indexOf("adv_dash_edit") >= 0 && R.indexOf("mode/adv") >= 0,
            G = R.indexOf("adv_dash_fullscreen") >= 0 && R.indexOf("mode/adv") >= 0;
        if (e.initData = function () {
                t.dashEditMode = !!H, t.advDashEditPage = !!H, t.show_bdp_header = !H && !G, t.mainChartContainer = [], t.mainChartIdContainer = [], t.mainChartColorContainer = {}, t.$editable = !0, t.last_dash_path = r.path(), t.view = "dashboard", e.isAdvDash = q, e.isAdvDashEdit = H, e.chartOptions = {}, e.global.dashboardLoaded = !1, e.AllMap = ["全部", "全部时间", "All"], e.selected = {
                    proj_id: s.projId,
                    dsh_id: s.dashId,
                    rule_id: e.global.rule_id,
                    ws_id: t.wsId
                },
                    e.currDash = {
                        activeProjId: s.projId,
                        dashSelected: s.dashId
                    },
                    e.currentSelectedItem = {},
                    e.activeProjId = s.projId,
                    e.dashSelected = s.dashId,
                    e.dashInit = {},
                    e.dashInit.load = !0,
                    e.dashLayoutInfo = {},
                    e.showDataScreenGrid = !!H,
                    e.lockItemPosMap = {},
                    e.hitMemoryGlobalFilter = !1,
                    e.hitGlobalFilterId = [],
                    e.pageWrapStyles = e.pageWrapStyles || {},
                    e.textComponentEditMode = {},
                    e.$curfullScreenDom = null, s.ruleId ? e.global.rule_id = s.ruleId : R.indexOf("ru_") >= 0 && (e.global.rule_id = R.substring(R.indexOf("ru_"))),
                    localStorage ? e.fullDisplayTheme = +localStorage.getItem("fullDisplayTheme") || t.usedThemeId : e.fullDisplayTheme = +$.cookie("fullDisplayTheme") || t.usedThemeId,
                    localStorage ? e.fullDisplayDevice = localStorage.getItem("fullDisplayDevice") || "pc" : e.fullDisplayDevice = $.cookie("fullDisplayDevice") || "pc",
                    e.isFullscreenMode = G,
                    localStorage.setItem("mc_location_path", r.path()), i(function () {
                    e.pageContent = {
                        addChart: y.instant("dash.advDash.addChart"),
                        addTitle: y.instant("dash.advDash.addTitle"),
                        addText: y.instant("dash.advDash.addText"),
                        addImage: y.instant("dash.advDash.addImage"),
                        addVideo: y.instant("dash.advDash.addVideo"),
                        top: y.instant("dash.advDash.top"),
                        bottom: y.instant("dash.advDash.bottom"),
                        globalFilter: y.instant("dash.advDash.globalFilter")
                    }
                }, 100)
            },
            !s.projId || !s.dashId) return !1;
        e.initData(), e.mouseleaveItem = function () {
            e.$broadcast("fire-mouseleave-item-event", !0)
        },
            e.$on("jumpToSearch", function (t, a) {
                e.search_ct_id = a
            }),
            e.$on("scrollToChart", function (t, a) {
                i(function () {
                    e.scrollToChart(a)
                }, 0)
            });
        e.$on("_websocketChartMessage_", function (t, a) {
            1 == ("string" == typeof a.data ? $.parseJSON(a.data) : a.data).type && h.refresh({
                drawChartUrl: e.draw_chart_url,
                type: "dashboard",
                evt: t,
                scope: e,
                ret: a
            })
        }),
            e.scrollToChart = function (e, t) {
                t = t || $(".gridster-desktop");
                var a = t.closest(".dash-wrapper");
                t.find(".gridster-item").each(function (t, i) {
                    var n = $(i);
                    if (e == n.data("chart-id")) {
                        var r = a.height(),
                            o = a.width(),
                            s = n[0].offsetTop,
                            l = n[0].offsetLeft,
                            d = scrollLeftFlag = !1;
                        s + n.height() > r && (d = !0, a.animate({
                            scrollTop: s - 15
                        }, function () {
                            n.addClass("highlight-chart")
                        })), l > o && (scrollLeftFlag = !0, a.animate({
                            scrollLeft: l
                        }, function () {
                            d || n.addClass("highlight-chart")
                        })), d || scrollLeftFlag || n.addClass("highlight-chart"), $(document).on("click.cancelHighlight", function () {
                            n.removeClass("highlight-chart"), $(this).off("click.cancelHighlight")
                        })
                    }
                })
            },
            localStorage.setItem("mc_location_path", r.path()),
            e.getGlobalFilterItem = x,
            e.$on("useMemoryGlobalFilter",
                function (t, a) {
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
                        }),
                            angular.forEach(e.draw_chart_url, function (t, a) {
                                t.global_filter_value = [], angular.forEach(e.global.globalDashFilter, function (e, a) {
                                    e.rela_ct_ids.indexOf(t.options.ct_id) > -1 && (t.options.optional.dsh_filter = i, delete t.options.optional.filter_list, t.options.read_cache = !1, t.options.optional._t = new Date)
                                })
                            })
                    }
                }),
            e.dashboardAutoplay = !1;
        var W = null;
        e.toggleDashboardAutoplay = function () {
            e.dashboardAutoplay = !e.dashboardAutoplay;
            var t = e.dashboardAutoplay ? "Play" : "Pause";
            e.dashboardAutoplay && (clearTimeout(W), W = setTimeout(function () {
                e.dashboardAutoplay && $("#dash-slider").slick("slickNext")
            }, 1e3)), $("#dash-slider").slick("slick" + t)
        };
        var J = function () {
                $(".dash-fullscreen-wrap .page-nav, .dash-fullscreen-wrap .view-header .btn-layer").addClass("invisible"), $(".dash-fullscreen-wrap, .dash-fullscreen-wrap .gridster-item, .dash-fullscreen-wrap .gridster-item .item-chart").addClass("cursor-none")
            },
            V = function () {
                $(".dash-fullscreen-wrap .page-nav, .dash-fullscreen-wrap .view-header .btn-layer").removeClass("invisible"), $(".dash-fullscreen-wrap, .dash-fullscreen-wrap .gridster-item, .dash-fullscreen-wrap .gridster-item .item-chart").removeClass("cursor-none")
            };
        if (e.isFullscreenMode) {
            var U = setTimeout(J, 5e3);
            $(".dash-fullscreen-wrap").on("mousemove", function () {
                null !== U && (window.clearTimeout(U), U = null, V(), setTimeout(function () {
                    U = setTimeout(J, 3e3)
                }, 200))
            })
        }
        e.getDashboardInfo = function (i) {
            if (e.lazy && e.lazy.destroy(), i ? x(i) : e.global.globalDashFilter = [], t.dashLoading = !0, "" == i || void 0 === i) return t.dashLoading = !1, !1;
            var n = {};
            return n.dsh_id = i, t.global.rule_id && (n.rule_id = t.global.rule_id), e.isGettingDashInfo = !0, a.dashboard.getInfo(n).then(function (a) {
                if (0 == a.status) {
                    if (a.result && 0 == a.result.category && R.indexOf("/mode/adv") >= 0) return t.dashLoading = !1, R = R.replace("/mode/adv", ""), void r.path(R);
                    if (!t.projectLoaded && q) var n = setInterval(function () {
                        t.projectLoaded && (E(i, a), clearInterval(n))
                    }, 200);
                    else E(i, a)
                } else {
                    if (t.dashLoading = !1, e.isGettingDashInfo = !1, 3 == a.status) return t.wsId ? r.path("/dash_edit_ws/" + t.wsId) : r.path("/dash_edit/"), void location.reload();
                    d(a.status)
                }
            })
        },
            e.getDashboardInfo(e.currDash.dashSelected),
            e.$on("fire-refresh-dashboard", function () {
                ("dashboard" == t.view || bdp.bdpPageStatus.isUnderAdvDash()) && e.getDashboardInfo(e.currDash.dashSelected)
            }),
            e.clearOuterShareInfo = function () {
                e.outer_share_info = {}
            },
            e.showThirdIframeDshList = function () {
                $(".dash-sidebar").addClass("show-list"), $(".dashboard-item").off("click.showThirdIframeDshList").on("click.showThirdIframeDshList", function (e) {
                    $(".dash-sidebar").removeClass("show-list")
                })
            },
            e.btn_layer = {},
            $("body").on("dashboard-scroll-start.dashOperate",
                function () {
                    var a = e.btn_layer;
                    a.show_more_btn = !1,
                        a.show_presentation_mode = !1,
                        a.showDownloadSheet = !1,
                        a.outerShareFuncs = !1,
                        t.permision.personal_help_video = !1,
                        $(".J_dashboard_presentation").addClass("ng-hide"),
                        $(".J_dashboard_more_btn").addClass("ng-hide"),
                        $(".J_dashboard_share_layer").addClass("ng-hide"),
                        $(".J-help-video").addClass("ng-hide")
                }),
            $(document).off("click.table").on("click.table", function (e) {
                $(document).trigger("clickTable", {
                    e: e
                })
            }),
            e.$on("$destroy", function () {
                $("body").off("dashboard-scroll-start.dashOperate"), $(document).off("keydown.change_item_pos"), $(document).off("keydown.save_item_pos"), $(document).off("fullscreenchange.advDash webkitfullscreenchange.advDash mozfullscreenchange.advDash msRequestFullscreen.advDash")
            }),
            e.filterMergedTable = function (e) {
                return "excel" !== e.type && "aggr" !== e.type
            },
            e.addItem = function () {
                if (!e.loadingStatus || !e.loadingStatus.isAdding) {
                    e.loadingStatus = {
                        isAdding: !0,
                        loadingFolders: !0
                    };
                    o.open({
                        template: "/static/partials/dialogTemplates/chart-select-table.html",
                        className: "ngdialog-theme-default choose-table J-chart-select-table" + (t.permision.canUseCustomChart ? "" : " no-custom-chart"),
                        data: {
                            getClearSaveMeta: N,
                            addGridItem: P,
                            currDash: {
                                activeProjId: s.projId,
                                dashSelected: s.dashId
                            },
                            dashStandardItems: e.dashStandardItems
                        },
                        scope: e,
                        controller: "chartAddCtrl"
                    })
                }
            },
            e.saveDashboard = function () {
                if (!e.dashTitle) return void d(e.tips["dash.titleRequired"]);
                var t = {};
                e.dashLayoutInfo.ct_id && (t[e.dashLayoutInfo.ct_id] = B(e.dashStandardItems, e.dashLayoutInfo.ct_id));
                var i = {
                    layout_style: e.dashLayoutInfo.layout_style || 1,
                    show_block: e.dashLayoutInfo.show_block,
                    fixed_width: e.dashLayoutInfo.fixed_width || !1,
                    charts: N(e.dashStandardItems, !0),
                    scale_flag: e.dash.scaleDashbord.selectedData
                };
                e.pageWrapStyles && (i.styles = JSON.stringify(e.pageWrapStyles));
                var n = {
                    ws_id: e.wsId,
                    dsh_id: e.currDash.dashSelected,
                    chart_data: angular.toJson(t),
                    data: angular.toJson({
                        name: e.dashTitle,
                        label: e.dashLabel,
                        comment: e.dashComment,
                        resolution: e.resolution,
                        meta: i
                    })
                };
                return a.dashboard.modify(n).then(function (t) {
                    0 != +t.status ? (3204 == +t.status && d(e.tips["dash.titleDuplicate"]), d(Number(t.status))) : r.path().indexOf(e.currDash.dashSelected) >= 0 && x(e.currDash.dashSelected)
                })
            },
            e.$watch(function () {
                    return t.proj_share || !t.permision.dashOperate
                },
                function (a) {
                    e.gridsterOpts && (e.gridsterOpts.resizable.enabled = !a && t.dashEditMode, e.gridsterOpts.draggable.enabled = !a && t.dashEditMode)
                }),
            e.$watch("dashProperty", function (t) {
                1 == t && e.gridsterOpts && (e.gridsterOpts.resizable.enabled = !1, e.gridsterOpts.draggable.enabled = !1)
            }),
            e.$on("datascreenPageEle", function (t, a) {
                var n = a.eleStyle || {},
                    r = a.opt || {},
                    o = null;
                e.dashStandardItems.some(function (t) {
                    var a = t.children[0],
                        s = a.meta;
                    return s.ct_id == e.dashLayoutInfo.ct_id && (o = s, i(function () {
                            r && r.isChart ? $.extend(!0, s.style, n) : $.extend(!0, t, n), s.drill_level = r.drill_level, r.save && (L(t), e.saveDashboard().then(function () {
                                I(), bdp.bdpDash.setDashItemPadding(e.dashStandardItems, v, reflowChart, {
                                    meta: o,
                                    style: n
                                })
                            }))
                        }), !0)
                })
            }),
            e.$on("datascreenPageWrap", function (t, a) {
                var n = a.pageStyle;
                i(function () {
                    e.pageWrapStyles = $.extend(e.pageWrapStyles, {
                        bgColor: n.bgColor + " !important",
                        lineColor: n.lineColor,
                        style: n.style,
                        width: n.width
                    }), "url(undefined)" == e.pageWrapStyles["background-image"] && (e.pageWrapStyles["background-image"] = "url()"), e.dash.scaleDashbord.setScreenScale(), I(), e.saveDashboard()
                })
            }),
            e.$on("datascreenResolution", function (t, a) {
                e.resolution = a.resolution, e.dash.scaleDashbord.modifyScale(), I()
            }),
            e.$on("datascreenEleLockPos", function (t, a) {
                a && e.dashStandardItems.forEach(function (t) {
                    t.children[0].meta.ct_id == a.ct_id && (e.lockItemPosMap[a.ct_id] = a.lock)
                })
            }),
            e.$on("showPageImage", function (t, a) {
                var n = a.pageImageSrc;
                i(function () {
                    e.pageWrapStyles = $.extend(e.pageWrapStyles, {
                        "background-size": "cover",
                        "background-image": "url(" + n + ")",
                        "background-repeat": "no-repeat",
                        "background-position": "center"
                    }), n || (e.pageWrapStyles["background-image"] = "url()"), e.dash.scaleDashbord.setScreenScale(), e.saveDashboard()
                })
            }),
            e.$on("chartScreenImg", function (t, a) {
                var n = a.screenImg || {};
                e.dashStandardItems.forEach(function (t) {
                    t.children[0].meta.ct_id == e.dashLayoutInfo.ct_id && i(function () {
                        t.url = n.url, e.saveDashboard()
                    })
                })
            }),
            e.$on("chartScreenVideo", function (t, a) {
                var n = a.screenVideo || {};
                e.dashStandardItems.forEach(function (t) {
                    t.children[0].meta.ct_id == e.dashLayoutInfo.ct_id && i(function () {
                        t.src = n.src, t.autoplay = n.autoplay, t.loop = n.loop, e.saveDashboard()
                    })
                })
            }),
            e.$on("changeDashSetting", function (t, a) {
                if (e.dash.modify(a.type), "title" == a.type) {
                    var i = e.dashLayoutInfo.ct_id,
                        n = angular.element("#" + i).find(".chart-box"),
                        r = n.find(".item-chart"),
                        o = parseInt(r.css("top"));
                    e.dashLayoutInfo.dash_setting.show_title ? r.css({
                        top: o + 22
                    }) : r.css({
                        top: o - 22
                    })
                }
            }),
            e.$on("emitChartStyle", function (a, n) {
                if (n) {
                    var r = n.chart,
                        o = r.ct_id;
                    o != t.editChartId && o != e.dashLayoutInfo.ct_id || (delete t.editChartId, e.dashStandardItems.forEach(function (t, a) {
                        t.children[0].meta.ct_id === o && (e.dashLayoutInfo.id == t.children[0].dom_id ? n.needFresh && e.$broadcast("editChartMeta", {
                            child: t.children[0],
                            item: t,
                            is_cancel: !1,
                            lock_status: e.lockItemPosMap,
                            opts: n.opts || {},
                            need_reload: !0
                        }) : i(function () {
                            e.dash.editChartMeta(t.children[0], t)
                        }, 0))
                    }))
                }
            }),
            e.$on("emitItemSizePos", function (t, a) {
                if (a) {
                    var i = e.dashLayoutInfo.ct_id;
                    e.dashStandardItems.forEach(function (t, a) {
                        t.children[0].meta.ct_id === i && (e.dashLayoutInfo.chart_type && e.dash.changeEditMetaVisible(e.dashLayoutInfo.chart_type, !0), e.$broadcast("editChartMeta", {
                            child: t.children[0],
                            item: t,
                            is_cancel: !1,
                            lock_status: e.lockItemPosMap,
                            need_reload: !1
                        }))
                    })
                }
            }),
            e.goHelp = function (e) {
                c(e)
            },
            e.chartChain = g(e),
            e.chartDashJump = m(e),
            e.getAllChartInstances = function () {
                var t = [];
                return e.dashStandardItems && e.dashStandardItems.length > 0 && e.dashStandardItems.forEach(function (e) {
                    var a = e.children[0].dom_id;
                    if (a) {
                        var i = $("#" + a).find(".chart").data("chart-data");
                        i && t.push(i)
                    }
                }), t
            },
            e.enterFullScreen = function () {
                var e = r.path().replace("dash_edit", "adv_dash_fullscreen");
                t.isThirdIframe && (e = r.path().replace("third_iframe", "adv_dash_fullscreen")),
                    r.path(e),
                r.path().indexOf("/adv_dash_fullscreen/") > -1 && (t.projectLoaded = !0)
            },
            e.exitFullScreen = function () {
                t.projectLoaded = !1;
                var e = r.path().replace("adv_dash_fullscreen", "dash_edit");
                t.isThirdIframe && (e = r.path().replace("adv_dash_fullscreen", "third_iframe")), r.path(e);
                var a = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen;
                a && a.apply(document)
            },
            e.enterEditAdvDash = function () {
                var a = "";
                e.isAdvDash && (a = t.wsId ? r.path().replace("dash_edit_ws", "adv_dash_edit_ws") : r.path().replace("dash_edit", "adv_dash_edit")), r.path(a)
            },
            e.backAdvDash = function () {
                var a = "";
                e.isAdvDashEdit && (a = t.wsId ? r.path().replace("adv_dash_edit_ws", "dash_edit_ws") : r.path().replace("adv_dash_edit", "dash_edit")), r.path(a)
            },
            e.setFullDisplayTheme = function (a) {
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
            },
            e.setFullDisplayDevice = function (a) {
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
            };
        var Y = {
            setMobLayout: function (t) {
                e.global.showMobLayout = t
            },
            setFreeLayout: function () {
                var t, a = $("#J_gridster .gridster-item"),
                    i = "",
                    n = {};
                angular.forEach(a, function (a, r) {
                    if (i = $(a).attr("style"), t = $(a).data("chartId"), i) {
                        i.split(";").forEach(function (e, t) {
                            var a = e.replace(/\s/g, "").split(":");
                            a[1] && (n[a[0]] = a[1].replace("px", ""))
                        });
                        for (var o = 0; o < e.dashStandardItems.length; o++) t === e.dashStandardItems[o].children[0].meta.ct_id && (e.dashStandardItems[o].left = +n.left, e.dashStandardItems[o].top = +n.top, e.dashStandardItems[o].width = +n.width, e.dashStandardItems[o].height = +n.height)
                    } else console.log("布局尚未完成切换导致错误")
                })
            },
            getBlankPos: function () {
                var t = $(".J_data_screen_hook "),
                    a = t.height(),
                    i = [];
                angular.forEach(e.dashStandardItems, function (e, t) {
                    i.push(e.top + e.height)
                });
                var n = Math.max.apply(this, i),
                    r = {};
                if (n + 8 + 336 >= a) {
                    var o = $(".J-dash-wrapper").scrollTop();
                    r = o >= 100 ? {
                        top: o + 100,
                        left: 100
                    } : {
                        top: 100,
                        left: 100
                    }
                } else r = {
                    top: n < 0 ? 0 : n + 8,
                    left: 0
                };
                return r
            },
            save: function () {
                this.setFreeLayout(), e.saveDashboard()
            }
        };
        e.setMobLayout = Y.setMobLayout, e.sortMobCharts = {
            stop: function (t, a) {
                e.saveDashboard()
            }
        },
            e.makeDashEdit = function (e) {
                t.dashEditMode = e
            },
            e.dash = {
                isCreatingItem: !1,
                isDeletingItem: !1,
                isGettingInfo: !1,
                posChanged: !1,
                calcCurIndex: function (t) {
                    t.forEach(function (t) {
                        t.hasOwnProperty("zIndex") && (e.minZIndex = Math.min(e.minZIndex, t.zIndex), e.maxZIndex = Math.max(e.maxZIndex, t.zIndex))
                    })
                },
                setZIndex: function (t) {
                    var a = e.minZIndex,
                        n = e.maxZIndex,
                        r = e.dashLayoutInfo.ct_id;
                    if (!r) return void d(e.tips["dash.advDash.selectElementToSetLayer"]);
                    var o;
                    "top" === t ? (o = n + 1, e.maxZIndex = o) : "bottom" === t && (o = a - 1, e.minZIndex = o), i(function () {
                        e.dashStandardItems.forEach(function (e) {
                            e.children[0].meta.ct_id == r && (e.zIndex = o), L(e)
                        }), e.saveDashboard()
                    })
                },
                addVideoComponent: function () {
                    if (e.dash.isCreatingItem || e.dash.isDeletingItem || e.isGettingDashInfo) return !1;
                    P("C103"), e.dash.isCreatingItem = !0, a.chart.create({
                        dsh_id: e.currDash.dashSelected,
                        ct_type: 4,
                        dsh_meta: {
                            charts: N(e.dashStandardItems, !0)
                        },
                        category: 2
                    }).success(function (t) {
                        i(function () {
                            e.dash.isCreatingItem = !1
                        }, 1e3), e.dash.createSuccess(t, "C103")
                    })
                },
                createSuccess: function (t, a) {
                    if (0 != +t.status) return e.dashStandardItems.pop(), !1;
                    e.dashStandardItems[e.dashStandardItems.length - 1].children[0].meta.ct_id = t.result.ct_id, e.dashStandardItems[e.dashStandardItems.length - 1].children[0].meta.type = a;
                    var n = $(".gridster-item").last(),
                        r = function () {
                            n.addClass("highlight-chart"), i(function () {
                                n.removeClass("highlight-chart")
                            }, 500)
                        };
                    2 != e.dash.scaleDashbord.selectedData ? $(".dash-wrapper").animate({
                        scrollTop: n.position().top
                    }, r) : r(), i(function () {
                        e.dash.editChartMeta(e.dashStandardItems[e.dashStandardItems.length - 1].children[0], e.dashStandardItems[e.dashStandardItems.length - 1]), e.dash.calcCurIndex(e.dashStandardItems)
                    })
                },
                addImageComponent: function () {
                    if (e.dash.isCreatingItem || e.dash.isDeletingItem || e.isGettingDashInfo) return !1;
                    P("C102"), e.dash.isCreatingItem = !0, a.chart.create({
                        dsh_id: e.currDash.dashSelected,
                        ct_type: 3,
                        dsh_meta: {
                            charts: N(e.dashStandardItems, !0)
                        },
                        category: 2
                    }).success(function (t) {
                        i(function () {
                            e.dash.isCreatingItem = !1
                        }, 1e3), e.dash.createSuccess(t, "C102")
                    })
                },
                addBorderComponent: function () {
                    if (e.dash.isCreatingItem || e.dash.isDeletingItem || e.isGettingDashInfo) return !1;
                    P("C104"), e.dash.isCreatingItem = !0, a.chart.create({
                        dsh_id: e.currDash.dashSelected,
                        ct_type: 5,
                        dsh_meta: {
                            charts: N(e.dashStandardItems, !0)
                        },
                        category: 2
                    }).success(function (t) {
                        i(function () {
                            e.dash.isCreatingItem = !1
                        }, 1e3), e.dash.createSuccess(t, "C104")
                    })
                },
                addTextComponent: function (t) {
                    if (e.dash.isCreatingItem || e.dash.isDeletingItem || e.isGettingDashInfo) return !1;
                    e.makeDashEdit(!0), P(t), e.dash.isCreatingItem = !0, a.chart.create({
                        dsh_id: e.currDash.dashSelected,
                        ct_type: "C101" == t ? 2 : 6,
                        dsh_meta: {
                            charts: N(e.dashStandardItems, !0)
                        },
                        category: 2
                    }).success(function (a) {
                        if (i(function () {
                                e.dash.isCreatingItem = !1
                            }, 1e3), 0 != +a.status) return e.dashStandardItems.pop(), !1;
                        var n = $(".gridster-item").last();
                        e.dashStandardItems[e.dashStandardItems.length - 1].children[0].meta.ct_id = a.result.ct_id, e.dashStandardItems[e.dashStandardItems.length - 1].children[0].meta.type = t;
                        var r = function () {
                            n.addClass("highlight-chart"), i(function () {
                                e.dash.editTextComponent(e.dashStandardItems[e.dashStandardItems.length - 1].children[0], e.dashStandardItems[e.dashStandardItems.length - 1]), i(function () {
                                    f.retrieveEditor(a.result.ct_id).scope.displayElements.text.trigger("focus"), n.removeClass("highlight-chart")
                                }, 500)
                            })
                        };
                        2 != e.dash.scaleDashbord.selectedData ? $(".dash-wrapper").animate({
                            scrollTop: n.position().top
                        }, r) : r()
                    })
                },
                delComponent: function (t) {
                    var i = "",
                        n = angular.copy(e.dashStandardItems);
                    n.forEach(function (e, a) {
                        e.children[0].meta.ct_id === t && (n.splice(a, 1), i = e.children[0].meta.type)
                    });
                    var r = {
                        ct_id: t,
                        dsh_meta: {
                            charts: N(n, !0)
                        }
                    };
                    e.pageWrapStyles && (r.dsh_meta.styles = JSON.stringify(e.pageWrapStyles)), e.dash.isDeletingItem = !0, a.chart.del(r).success(function (t) {
                        e.dash.isDeletingItem = !1, 0 == +t.status && (e.dashStandardItems = n, i && e.dash.changeEditMetaVisible(i, !1))
                    })
                },
                copyComponent: function (t, a) {
                    function i() {
                        e.global.clickComplete = !1;
                        var t = e.copyChartData;
                        t.dashId && l.get("/api/chart/copy", {
                            ct_id: t.chartInfo.chart_id,
                            from: angular.toJson({
                                proj_id: t.curProId,
                                dsh_id: t.curDshId
                            }),
                            to: angular.toJson({
                                proj_id: t.projId,
                                dsh_id: t.dashId
                            })
                        }).then(function (t) {
                            if (0 == t.status) {
                                d(e.tips["dash.advDash.copySuccess"]), o.closeAll();
                                var a = e.copyChartData;
                                a.curProId == a.projId && a.curDshId == a.dashId && e.getDashboardInfo(a.curDshId)
                            }
                            e.global.clickComplete = !0
                        })
                    }

                    function n(a) {
                        e.copyChartData = {
                            curProId: s.projId,
                            curDshId: s.dashId,
                            chartInfo: {
                                chart_id: t.meta.ct_id,
                                name: t.meta.name
                            },
                            projId: s.projId,
                            dashId: s.dashId,
                            project_list: a
                        };
                        for (var n = e.copyChartData.project_list, r = 0, l = n.length; r < l; r++) n[r].proj_id == e.copyChartData.projId && (e.copyChartData.dash_list = n[r].dsh_list);
                        o.open({
                            template: "/static/partials/chart-copy.html",
                            className: "ngdialog-theme-default ngDialog-width-360",
                            data: {
                                okActionFunc: i
                            },
                            scope: e
                        })
                    }
                    var r = t.meta.type;
                    ["C101", "C102", "C103", "C105"].indexOf(r) >= 0 ? e.dash.getCacheProjListForOpt(n, 2) : e.dash.getCacheProjListForOpt(n)
                },
                moveComponent: function (t, a) {
                    function i() {
                        var t = bdp.bdpDash.getItemIndexInDashList(e.dashStandardItems, e.moveChartData.chartInfo.chart_id);
                        e.dashStandardItems.splice(t, 1), e.getDashboardInfo(e.dashSelected)
                    }

                    function n() {
                        var t = e.moveChartData;
                        if (e.global.clickComplete = !1, !t.dashId) return d(e.tips["dash.advDash.pleaseSelectDashboard"]), void(e.global.clickComplete = !0);
                        if (t.curProId == t.projId && t.curDshId == t.dashId) return d(e.tips["dash.advDash.targetPositionIsSame"]), void(e.global.clickComplete = !0);
                        var a = [].concat(e.dashStandardItems),
                            n = bdp.bdpDash.getItemIndexInDashList(e.dashStandardItems, e.moveChartData.chartInfo.chart_id);
                        a.splice(n, 1), l.post("/api/chart/move", {
                            ct_id: t.chartInfo.chart_id,
                            from: angular.toJson({
                                proj_id: t.curProId,
                                dsh_id: t.curDshId
                            }),
                            to: angular.toJson({
                                proj_id: t.projId,
                                dsh_id: t.dashId
                            }),
                            check: "do",
                            dsh_meta: angular.toJson({
                                charts: N(a, !0)
                            })
                        }).then(function (t) {
                            e.global.clickComplete = !0, t.result.ismoved ? (d(e.tips["chart.moveChartSuccess"]), i(), o.closeAll()) : o.openConfirm({
                                template: "/static/partials/dialogTemplates/confirm-dialog.html",
                                className: "ngdialog-theme-default ngdialog-width-340",
                                scope: e,
                                data: {
                                    message: e.tips["chart.checkToContinueMove"]
                                }
                            }).then(function () {
                                var t = e.moveChartData;
                                l.post("/api/chart/move", {
                                    ct_id: t.chartInfo.chart_id,
                                    from: angular.toJson({
                                        proj_id: t.curProId,
                                        dsh_id: t.curDshId
                                    }),
                                    to: angular.toJson({
                                        proj_id: t.projId,
                                        dsh_id: t.dashId
                                    }),
                                    check: "pass",
                                    dsh_meta: angular.toJson({
                                        charts: N(a, !0)
                                    })
                                }).then(function (t) {
                                    t.result.ismoved ? (d(e.tips["chart.moveChartSuccess"]), i()) : d(e.tips["chart.moveChartFail"]), o.closeAll()
                                })
                            })
                        })
                    }

                    function r(a) {
                        e.moveChartData = {
                            curProId: s.projId,
                            curDshId: s.dashId,
                            chartInfo: {
                                chart_id: t.meta.ct_id,
                                name: t.meta.name
                            },
                            projId: s.projId,
                            dashId: s.dashId,
                            project_list: a
                        };
                        for (var i = e.moveChartData.project_list, r = 0, l = i.length; r < l; r++) i[r].proj_id == e.moveChartData.projId && (e.moveChartData.dash_list = i[r].dsh_list);
                        o.open({
                            template: "/static/partials/chart-move.html",
                            className: "ngdialog-theme-default ngDialog-width-360",
                            data: {
                                okActionFunc: n
                            },
                            scope: e
                        })
                    }
                    var c = t.meta.type;
                    ["C101", "C102", "C103", "C105"].indexOf(c) >= 0 ? e.dash.getCacheProjListForOpt(r, 2) : e.dash.getCacheProjListForOpt(r)
                },
                getCacheProjListForOpt: function (e, t) {
                    function i() {
                        n = void 0 != t ? bdp.bdpDash.filterProjByQuery(n, {
                            category: t,
                            type: 0
                        }) : bdp.bdpDash.filterProjByQuery(n, {
                            type: 0
                        })
                    }
                    var n = angular.copy(b.getTreeCache());
                    if (n) i(), e(n);
                    else {
                        var r = [];
                        bdp.bdpPageStatus.isUnderAdvDash() && (r = [0, 2]), bdp.bdpPageStatus.isUnderDataScreen() && (r = [1]);
                        var o = {
                            categories: angular.toJson(r)
                        };
                        a.project.getTree(o).then(function (t) {
                            if (t) {
                                var a = angular.copy(t.proj);
                                b.setTreeCache(a), i(), e(a)
                            }
                        })
                    }
                },
                clearAllTextEditState: function (t) {
                    for (var a in e.textComponentEditMode) e.textComponentEditMode.hasOwnProperty(a) && (e.textComponentEditMode.hasOwnProperty(a) && e.textComponentEditMode[a] || (e.textComponentEditMode[a] = !1))
                },
                editTextComponent: function (t, a) {
                    var n = t.meta.ct_id;
                    e.dash.editChartMeta(t, a), angular.element(".gridster-item").map(function (e, t) {
                        angular.element(t).removeClass("selected")
                    }), e.textComponentEditMode[n] = !0, i(function () {
                        var t = $("#" + n);
                        e.dash.setTaToolbarPos(t), f.retrieveEditor(n).scope.displayElements.text.trigger("focus")
                    })
                },
                setTaToolbarPos: function (e) {
                    var t = angular.element("body").height(),
                        a = e[0].getBoundingClientRect();
                    t - a.bottom < 100 || t - a.bottom < 0 ? e.find(".ta-toolbar").removeClass("bottom").addClass("top") : e.find(".ta-toolbar").removeClass("top").addClass("bottom")
                },
                setOperatorIndex: function (t, a, i) {
                    a ? e.dashStandardItems.map(function (e) {
                        e.isTopIndex = !!t
                    }) : i.isTopIndex = !!t
                },
                editTextFromMore: function (t, a) {
                    e.makeDashEdit(!0), this.editTextComponent(t, a), $(document).off("keydown.change_item_pos"), $(document).off("keydown.save_item_pos")
                },
                saveTextComponent: function (t) {
                    var a = t.meta.ct_id;
                    e.textComponentEditMode[a] = !1, i(function () {
                        e.saveDashboard()
                    }, 0)
                },
                isBeyondOuterBorder: function (t, a) {
                    var i = angular.element("#" + t),
                        n = angular.element(".gridster");
                    if (!i || !n || !i.position()) return !0;
                    var r = e.dash.scaleDashbord && e.dash.scaleDashbord.curScaleVal,
                        o = n.width(),
                        s = n.height(),
                        l = i.position().left,
                        d = i.position().top,
                        c = i.width(),
                        p = i.height(),
                        u = !1;
                    return r && (o *= r, s *= r, c *= r, p *= r), l <= 0 && 37 == a && (e.currentSelectedItem.item.left = 0, u = !0), l > o - c && 39 == a && (e.currentSelectedItem.item.left = r ? (o - c) / r : o - c, u = !0), d <= 0 && 38 == a && (e.currentSelectedItem.item.top = 0, u = !0), d > s - p && 40 == a && (u = !0), u && e.$digest(), u
                },
                handleKeyBoardMoveEvent: function (t, a) {
                    if (!e.isAdvDashEdit) return !1;
                    var i = t.meta.ct_id;
                    if (["C101", "C105"].indexOf(t.meta.type) >= 0 && e.textComponentEditMode[i]) return !1;
                    $(document).off("keydown.change_item_pos").on("keydown.change_item_pos", bdp.utils.throttle(function (t) {
                        if (!bdp.bdpPageStatus.isUnderAdvDashEdit()) return !1;
                        var a = e.currentSelectedItem.child && e.currentSelectedItem.child.meta.ct_id;
                        if (e.lockItemPosMap[a]) return !1;
                        var i = t || window.event;
                        if (e.dash.isBeyondOuterBorder(a, i.keyCode) && 40 != i.keyCode) return e.dash.posChanged = !1, !1;
                        switch (i.keyCode) {
                            case 37:
                                e.currentSelectedItem.item.left -= 1, i.preventDefault(), i.stopPropagation();
                                break;
                            case 38:
                                e.currentSelectedItem.item.top -= 1, i.preventDefault(), i.stopPropagation();
                                break;
                            case 39:
                                e.currentSelectedItem.item.left += 1, i.preventDefault(), i.stopPropagation();
                                break;
                            case 40:
                                e.currentSelectedItem.item.top += 1, i.preventDefault(), i.stopPropagation()
                        }
                        e.dash.posChanged = !0, L(e.currentSelectedItem.item), e.$digest()
                    }, 0)), $(document).off("keydown.save_item_pos").on("keydown.save_item_pos", bdp.utils.debounce(function (t) {
                        if (!bdp.bdpPageStatus.isUnderAdvDashEdit()) return !1;
                        var a = e.currentSelectedItem.child && e.currentSelectedItem.child.meta.ct_id;
                        if (e.lockItemPosMap[a] || !e.dash.posChanged) return !1;
                        var i = t || window.event;
                        [37, 38, 39, 40].indexOf(i.keyCode) >= 0 && (e.dash.savePosByKeyboard(), 40 == i.keyCode && I("noDelay"))
                    }, 100))
                },
                editChartMetaVisible: {
                    text: !1,
                    style: !1,
                    video: !1,
                    img: !1,
                    numerical: !1,
                    pageEle: !1,
                    pageWrap: !0
                },
                clickGridsterItem: function (t, a) {
                    e.dash.editChartMeta(t, a), e.dash.handleKeyBoardMoveEvent(t, a)
                },
                editChartMeta: function (t, a) {
                    if (!H || e.dashLayoutInfo.id == t.dom_id) return !1;
                    var n = t.meta.ct_id;
                    e.dashLayoutInfo.id = t.dom_id, e.dashLayoutInfo.ct_id = n, e.dashLayoutInfo.chart_type = t.meta.type, e.dashLayoutInfo.show_navigator = t.meta.show_navigator, e.dash.clearAllTextEditState(n), e.dashLayoutInfo.dash_setting = t.meta.dash_setting || {
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
                        }, e.dashLayoutInfo.hasTotal = t.meta.hasTotal, void 0 === e.dashLayoutInfo.dash_setting.show_navigator && e.dashLayoutInfo.show_navigator && (e.dashLayoutInfo.dash_setting.show_navigator = !0), e.currentSelectedItem = {
                        child: t,
                        item: a
                    }, n && e.dashLayoutInfo.chart_type && (this.changeEditMetaVisible(e.dashLayoutInfo.chart_type, !0), i(function () {
                        e.$broadcast("editChartMeta", {
                            child: t,
                            item: a,
                            is_cancel: !1,
                            lock_status: e.lockItemPosMap,
                            need_reload: !0
                        })
                    }, 0)), $(document).off("click.edit_dashboard").on("click.edit_dashboard", function (t) {
                        var a = $(t.target);
                        a.parents(".gridster-item").length || a.parents(".J_chart_box").length || a.parents(".dash-edit-wrapper").length || a.parents(".J_side_panel").length || a.hasClass("J_side_panel") || a.hasClass("backToMainChart") || a.parents(".fht-table-wrapper").length || a.hasClass("J_no_fix_wrap") || a.hasClass("J_set_zindex") || a.parents(".J_set_zindex").length || e.dash.cancelEditState()
                    })
                },
                cancelEditState: function () {
                    e.dashLayoutInfo.chart_type && this.changeEditMetaVisible(e.dashLayoutInfo.chart_type, !1), i(function () {
                        e.dash.clearAllTextEditState(), e.dashLayoutInfo.id = void 0, e.dashLayoutInfo.ct_id = "", e.dashLayoutInfo.chart_type = void 0
                    }, 0), e.$broadcast("screenDashboardInfo", {
                        pageWrapStyles: e.pageWrapStyles,
                        resolution: e.resolution
                    }), $(document).off("keydown.change_item_pos"), $(document).off("keydown.save_item_pos")
                },
                changeEditMetaVisible: function (t, a) {
                    e.dash.editChartMetaVisible = {
                        text: !!a && ["C101", "C105"].indexOf(t) >= 0,
                        style: !!a && ["C101", "C102", "C103", "C104", "C105"].indexOf(t) < 0,
                        video: !!a && ["C103"].indexOf(t) >= 0,
                        img: !!a && ["C102"].indexOf(t) >= 0,
                        numerical: !1,
                        pageEle: a,
                        pageWrap: !a
                    }
                },
                savePosByKeyboard: bdp.utils.debounce(function () {
                    e.$broadcast("editChartMeta", {
                        child: e.currentSelectedItem.child,
                        item: e.currentSelectedItem.item,
                        is_cancel: !1,
                        lock_status: e.lockItemPosMap
                    }), e.saveDashboard()
                }, 100),
                saveChartStyle: function (t) {
                    var a = t.style,
                        i = t.ct_id,
                        n = t.drill_level;
                    e.dashStandardItems.some(function (e) {
                        var t = e.children[0].meta,
                            r = !1;
                        if (i == e.children[0].meta.ct_id && (t.style = a, t.drill_level = n, r = !0), r) return r
                    }), e.saveDashboard()
                },
                modify: function (t) {
                    e.saveDashboard().then(function (a) {
                        if ("datalabels" === t) {
                            var i = angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart .chart").data("chart-data");
                            i && i.info && (i.info.show_datalabels = e.dashLayoutInfo.dash_setting.show_datalabels, i.renderChart())
                        } else "legend" === t || "axis" === t || "total" === t || "navigator" === t ? reflowChart(angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart"), !0, !0) : "title" === t ? reflowChart(angular.element("#" + e.dashLayoutInfo.ct_id).find(".item-chart"), !0) : "show_block" !== t && "fixed_width" !== t || (O(), angular.element(".item-chart").each(function () {
                            reflowChart(angular.element(this), !0)
                        }))
                    })
                },
                scaleDashbord: {
                    selectedData: 1,
                    selectedScaleVal: "none",
                    curScaleVal: 0,
                    setScreenScale: function () {
                        var t = e.dash.scaleDashbord,
                            a = $(".J_data_screen_hook"),
                            i = "none",
                            n = 0,
                            r = 0;
                        if (2 == t.selectedData) {
                            var o = $(".dash-wrapper"),
                                s = o.width(),
                                l = o.height(),
                                d = e.resolution.width,
                                c = bdp.bdpPageStatus.isUnderAdvDash() ? parseInt(o[0].scrollHeight) : e.resolution.height;
                            borderWidth = parseInt(e.pageWrapStyles.width), borderWidth && (d += 2 * borderWidth, c += 2 * borderWidth);
                            var p = s / d,
                                u = l / c,
                                h = Math.min(p, u),
                                f = Math.min(1, h);
                            f < 1 && (i = "scale(" + h + ")", h == p ? n = (l - c * h) / 2 : r = (s - d * h) / 2, n += o.scrollTop())
                        }
                        t.selectedScaleVal = i, t.curScaleVal = f, setTimeout(function () {
                            I(), a.css({
                                top: n,
                                left: r
                            })
                        }, 0)
                    },
                    modifyScale: function () {
                        e.dash.scaleDashbord.setScreenScale(), e.saveDashboard()
                    }
                }
            },
            u([
                "dash.delChartFail",
                "dash.plzSelectTable",
                "dash.selectTbTitle",
                "dash.emptyFolderList",
                "dash.titleRequired",
                "dash.titleDuplicate",
                "dash.delChartLinkSuccess",
                "chart.untitledChart",
                "saveSuccess",
                "chart.chainChart",
                "chart.chainField",
                "dash.dashCartJump.errSameTip",
                "dash.dashCartJump.successDelTip",
                "dash.dashCartJump.selectDashPrefix",
                "dash.dashCartJump.selectDashPrefix",
                "dash.dashCartJump.selectFolder",
                "dash.dashCartJump.selectDashboard",
                "dash.dashCartJump.selectFilter",
                "dash.dashCartJump.globalFilter",
                "dash.dashCartJump.openType",
                "dash.dashCartJump.thisWin",
                "dash.dashCartJump.newWin",
                "dash.dashCartJump.errEmptyTip",
                "chart.copyChartSuccess",
                "chart.confirmDelChart",
                "template.selectDash",
                "chart.selectOtherPlace",
                "chart.checkToContinueMove",
                "chart.moveChartSuccess",
                "chart.moveChartFail",
                "dash.advDash.selectElementToSetLayer",
                "dash.advDash.copySuccess",
                "dash.advDash.pleaseSelectDashboard",
                "dash.advDash.targetPositionIsSame"], e)
    }
    angular.module("BC.controllers.dashboard")
        .controller("advDashboardCtrl", e),
        e.$inject = [
            "$scope",
            "$rootScope",
            "commonService",
            "$timeout",
            "$interval",
            "$location",
            "ngDialog",
            "$stateParams",
            "commonHttp",
            "errHint",
            "operatorHelpLink",
            "$http",
            "$jsTipTranslate",
            "autoRefreshChart",
            "textAngularManager",
            "dashChartLink",
            "dashChartJump",
            "$q",
            "screenElePadding",
            "projectTreeCache",
            "$translate"]
};
