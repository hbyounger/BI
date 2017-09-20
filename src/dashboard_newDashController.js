
function newDashController() {
    function e(e, t, a, i, n, r, o, s, l, d, c, p) {
        function u(i) {
            e.hitMemoryGlobalFilter = !1, e.hitGlobalFilterId = [], e.global.globalDashFilter = [], a.dash_global_filter.item({
                dash_id: i,
                rule_id: t.global.rule_id || "",
                is_tpl: 1
            }).then(function (t) {
                if ("0" == t.status) {
                    if (e.selected.dsh_id !== i) return;
                    e.global.originalGlobalFilter = angular.copy(t.result);
                    var a = bdp.utils.handleGlobalFilterLevel(t.result);
                    angular.forEach(a, function (e) {
                        if (h(e), "date" == e.data_type && "" == e.config.granularity) {
                            var t = e.config.range || "";
                            if (t) {
                                var a = !1;
                                angular.forEach(e.adv_date_list, function (e) {
                                    e.opt_id == t && (a = !0)
                                }), a || (e.config.range = "", e.config.default_select = !1, e.range = [])
                            }
                        }
                    }), e.global.globalDashFilter = a, e.hitMemoryGlobalFilter && e.$emit("hitMemoryGlobalFilter", !0)
                } else l(Number(t.status))
            })
        }

        function h(a) {
            var i = angular.fromJson(window.localStorage.getItem("global_filter_memory")) || [],
                n = !1,
                r = t.wsId || "";
            angular.forEach(i, function (t) {
                t.ws_id == r && a.data_type == t.data_type && a.name == t.name && a.config && a.config.hasOwnProperty("granularity") && a.config.granularity == t.granularity && ("date" == a.data_type && "" == a.config.granularity ? angular.forEach(a.adv_date_list, function (e) {
                    e.opt_id == t.range[0] && (a.range = t.range, n = !0)
                }) : a.range = t.range, e.hitMemoryGlobalFilter && (e.hitMemoryGlobalFilter = o.dashId != t.setDashId), e.hitMemoryGlobalFilter = !0, e.hitGlobalFilterId.push(a.df_id))
            })
        }

        function f() {
            var a = t.global.dshWatermarkImg;
            if (a) {
                var i = $(".gridster"),
                    r = 1 == t.usedThemeId ? "water-mark-white" : "water-mark-dark";
                if (n.path().indexOf("dash_tpl_fullscreen") > -1 && (r = "water-mark-white"), e.dashLayoutInfo.show_block) bdp.utils.browser().ie ? i.addClass(r) : $(".dash-water-mark").remove();
                else if ("url(" + a + ")", bdp.utils.browser().ie) i.addClass(r);
                else if (0 == $(".dash-water-mark").length) {
                    var o = document.createElement("div");
                    o.className = "water-mark dash-water-mark " + r, i.append(o)
                } else $(".dash-water-mark").removeClass("water-mark-white").removeClass("water-mark-white").addClass(r)
            }
        }

        function g(a, n) {
            t.dashLoading = !1;
            var r = n.result;
            if (!isObjectEmpty(r)) {
                t.dashProperty = r.property, e.outer_share_info = r.outer_share_info, e.gis_flag = r.gis_flag, e.dashLayoutInfo.show_block = !defined(r.meta.show_block) || r.meta.show_block, e.dashLayoutInfo.fixed_width = !!defined(r.meta.fixed_width) && r.meta.fixed_width, m(r.meta.show_block), e.dashTitle = r.name, e.dashLabel = r.label || "", e.dashComment = r.comment || "", e.property = r.property;
                var o = r.meta.charts || [];
                if (e.dashStandardItems = o || [], e.isFullscreenMode) {
                    var s = $(".main"),
                        l = $(".dash-wrapper"),
                        d = s.height() - parseInt($(".dash-title-wrap").height()) - parseInt(l.css("paddingTop")) - parseInt(l.css("paddingBottom")),
                        c = d / 9 + (e.global.globalDashFilter.length ? 16 : 20);
                    e.dashPages = [], e.gridsterOpts.rowHeight = c, e.gridsterOpts.draggable.enabled = !1, e.gridsterOpts.resizable.enabled = !1;
                    var p = [],
                        u = 0,
                        h = 0;
                    e.dashStandardItems.sort(function (e, t) {
                        return e.row == t.row ? e.col - t.col : e.row < t.row ? -1 : 1
                    }), e.dashStandardItems.forEach(function (t, a) {
                        t.sizeY = Math.min(t.sizeY, 9), t.row += h, t.row %= 9;
                        var i = !0;
                        if (t.row + t.sizeY > 9) i = !1;
                        else
                            for (var n = 0; n < p.length; n++) {
                                var r = p[n];
                                if (!(r.col >= t.col + t.sizeX || r.row >= t.row + t.sizeY || t.col >= r.col + r.sizeX || t.row >= r.row + r.sizeY)) {
                                    i = !1;
                                    break
                                }
                            }
                        i ? p.push(t) : (h += 9 - t.row, e.dashPages.push(p), p = [], u++, t.row = 0, p.push(t))
                    }), p.length > 0 && e.dashPages.push(p)
                }
                e.dashInit.load = !1, e.draw_chart_url = {};
                for (var g, _, v = 0; v < e.dashStandardItems.length; v++) e.dashStandardItems[v].children[0].meta.filter_list = [];
                e.hasChartLink = !1, t.isGlobalCustom = {};
                for (var b = 0; b < o.length; b++) {
                    g = o[b];
                    for (var y = 0; y < g.children.length; y++)
                        if (_ = g.children[y], _.meta.filter_list = [], _.meta.type) {
                            t.isGlobalCustom[_.meta.ct_id] = !1, e.global.rule_id && "&rule_id=" + e.global.rule_id, e.draw_chart_url[_.dom_id] = {
                                options: {
                                    theme: e.isFullscreenMode || 1 === t.usedThemeId ? "dark" : "default",
                                    device: e.isFullscreenMode ? e.fullDisplayDevice : "pc",
                                    ws_id: t.wsId,
                                    dsh_id: a,
                                    ct_id: _.meta.ct_id,
                                    tb_id: _.meta.tb_id,
                                    rule_id: t.global.rule_id,
                                    is_tpl: 1,
                                    optional: {
                                        linked_chart_type: _.meta.linked_chart_type
                                    }
                                },
                                lazyload: b > 2
                            }
                        }
                }
                e.$$phase || e.$apply(), i(function () {
                    e.lazy = new bdpChart.LazyLoad(".gridster-desktop", ".gridster-item", {
                        diff: 50,
                        handleResize: !0,
                        onItemLoad: function (t) {
                            var a = $(t).find(".item-chart").attr("id");
                            e.draw_chart_url[a] && (e.draw_chart_url[a].lazyload = !1)
                        },
                        onItemsLoad: function () {
                            e.$$phase || e.$apply()
                        }
                    }), e.search_ct_id && setTimeout(function () {
                        e.scrollToChart(e.search_ct_id)
                    }, 10)
                }), f()
            }
        }

        function m(t) {
            e.gridsterOpts = {
                margins: t ? [8, 8] : [0, 0],
                outerMargin: !1,
                minColumns: 2,
                minRows: 2,
                columns: 12,
                resizable: {
                    enabled: !1
                },
                draggable: {
                    enabled: !1
                }
            }
        }
        if (e.mouseleaveItem = function () {
                e.$broadcast("fire-mouseleave-item-event", !0)
            }, e.chartOptions = {}, o.projId) {
            if (e.AllMap = ["全部", "全部时间", "All"], t.last_dash_path = n.path(), t.dashEditMode = !1, e.currDash = {
                    activeProjId: o.projId,
                    dashSelected: o.dashId
                }, e.activeProjId = o.projId, e.dashSelected = o.dashId, t.view = "dash_tpl", t.show_bdp_header = !0, e.dashInit = {}, e.dashInit.load = !0, o.ruleId) e.global.rule_id = o.ruleId;
            else {
                var _ = n.path();
                _.indexOf("ru_") >= 0 && (e.global.rule_id = _.substring(_.indexOf("ru_")))
            }
            e.selected = {
                proj_id: o.projId,
                dsh_id: o.dashId,
                rule_id: e.global.rule_id,
                ws_id: t.wsId
            }, e.$on("jumpToSearch", function (t, a) {
                e.search_ct_id = a
            }), e.scrollToChart = function (e, t) {
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
            }, e.$on("scrollToChart", function (t, a) {
                setTimeout(function () {
                    e.scrollToChart(a)
                }, 0)
            }), localStorage.setItem("mc_location_path", n.path());
            var _ = n.path();
            _.indexOf("dash_tpl_fullscreen") > 0 ? (e.isFullscreenMode = !0, t.show_bdp_header = !0, e.$dashSlider = $("#dash-slider"), $(document).on("keyup", function (t) {
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
            })) : (e.isFullscreenMode = !1, t.view = "dash_tpl", t.show_bdp_header = !0, $(document).off("keyup")), e.dashLayoutInfo = {}, e.hitMemoryGlobalFilter = !1, e.hitGlobalFilterId = [], e.getDashboardInfo = function (i) {
                if (i ? u(i) : e.global.globalDashFilter = [], t.dashLoading = !0, "" == i || void 0 === i) return t.dashLoading = !1, !1;
                var r = {};
                return r.dsh_id = i, r.is_tpl = 1, a.dashboard.getInfo(r).then(function (e) {
                    if (0 == e.status) var a = setInterval(function () {
                        g(i, e), clearInterval(a)
                    }, 200);
                    else {
                        if (t.dashLoading = !1, 3 == e.status) return n.path("/dash_tpl/"), void location.reload();
                        l(e.status)
                    }
                })
            }, e.getDashboardInfo(e.currDash.dashSelected), e.$on("fire-refresh-dashboard", function () {
                "dash_tpl" == t.view && e.getDashboardInfo(e.currDash.dashSelected)
            }), e.goHelp = function (e) {
                d(e)
            }, e.enterFullScreen = function (e) {
                var t = n.path().replace("dash_tpl", "dash_tpl_fullscreen");
                if (n.path(t), $("body").addClass("route-dash-fullscreen"), e) {
                    var a = $("body")[0],
                        i = a.requestFullscreen || a.webkitRequestFullscreen || a.mozRequestFullScreen || a.msRequestFullscreen;
                    i && (i.apply(a), $(document).on("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange", function (e) {
                        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement);
                        else {
                            if ($("body").find(".fullscreen-chart").length > 0);
                            else {
                                var t = n.path();
                                t.indexOf("dash_tpl_fullscreen") && n.path(t.replace("dash_tpl_fullscreen", "dash_tpl"))
                            }
                            $(document).off("webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange")
                        }
                    }), $("body").hasClass("fullscreen-status") || $("body").addClass("fullscreen-status"))
                }
            }, e.exitFullScreen = function () {
                var e = n.path().replace("dash_tpl_fullscreen", "dash_tpl");
                n.path(e), $("body").removeClass("route-dash-fullscreen");
                var t = document.exitFullscreen || document.webkitExitFullscreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen;
                t && t.apply(document)
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
                }), localStorage ? localStorage.setItem("fullDisplayDevice", a) : $.cookie("fullDisplayDevice", a), e.dashStandardItems.forEach(function (e) {
                    var i = e.children[0].dom_id;
                    if (i) {
                        var n = $("#" + i).find(".chart").data("chart-data");
                        n && n.setDisplayDevice(a, t)
                    }
                }), $(".fullscreen-chart").length > 0 && $(".fullscreen-chart").each(function (e, i) {
                    var n = $(i).data("chart-data");
                    n && n.setDisplayDevice(a, t)
                }))
            }, e.removeFullDisplayStyle = function () {
                e.isFullscreenMode || "pc" === e.fullDisplayDevice && e.fullDisplayTheme === t.usedThemeId || e.dashStandardItems.forEach(function (e) {
                    var a = e.children[0].dom_id;
                    if (a) {
                        var i = $("#" + a).find(".chart").data("chart-data");
                        i && i.setDisplayStyle("pc", 1 == t.usedThemeId ? "dark" : "default", t)
                    }
                })
            }, localStorage ? e.fullDisplayTheme = +localStorage.getItem("fullDisplayTheme") || t.usedThemeId : e.fullDisplayTheme = +$.cookie("fullDisplayTheme") || t.usedThemeId, e.setFullDisplayTheme = function (t) {
                if (t !== e.fullDisplayTheme) {
                    e.fullDisplayTheme = t, BDPLogger.log("feStatistics", {
                        category: "interaction",
                        action: "click",
                        opt_label: "setFullDisplayTheme",
                        opt_value: 1
                    }), BDPLogger.log("feStatistics", {
                        category: "feature",
                        action: "fullDisplayTheme",
                        opt_label: t,
                        opt_value: 1
                    }), localStorage ? localStorage.setItem("fullDisplayTheme", t) : $.cookie("fullDisplayTheme", t);
                    var a = 1 === t ? "dark" : "default";
                    e.dashStandardItems.forEach(function (e) {
                        var t = e.children[0].dom_id;
                        if (t) {
                            var i = $("#" + t).find(".chart").data("chart-data");
                            i && i.setTheme(a)
                        }
                    }), $(".fullscreen-chart").length > 0 && $(".fullscreen-chart").each(function (e, t) {
                        var i = $(t).data("chart-data");
                        i && i.setTheme(a)
                    })
                }
            },
                e.useTpl = function () {
                    r.open({
                        templateUrl: "/static/partials/dialogTemplates/use_tpl_option.html",
                        scope: e,
                        className: "ngdialog-theme-default use-tpl-option"
                    })
                }, e.useTplByOption = function (a, i) {
                r.closeAll(), t.pageLoading = !0, s.post("/api/personal/apply", {
                    dsh_id: a
                }).then(function (a) {
                    if (t.pageLoading = !1, "0" == a.status) {
                        var o = a.result;
                        1 === i ? (location.href = "/api/personal/export?dsh_id=" + o.dsh_id, r.open({
                            templateUrl: "/static/partials/dialogTemplates/library_tpl_step.html",
                            scope: e,
                            showClose: !1,
                            className: "ngdialog-theme-default dash-tpl-step",
                            data: {
                                proj_id: o.proj_id,
                                dsh_id: o.dsh_id
                            },
                            controller: ["$scope", function (e) {
                                e.goToTplDashborad = function () {
                                    r.closeAll(), n.path("/dash_edit/" + e.ngDialogData.proj_id + "/" + e.ngDialogData.dsh_id)
                                }, e.goToReplaceTpl = function () {
                                    r.closeAll(), n.path("/tpl_replace/" + e.ngDialogData.proj_id + "/" + e.ngDialogData.dsh_id)
                                }
                            }]
                        })) : n.path("/dash_edit/" + o.proj_id + "/" + o.dsh_id)
                    }
                })
            }, p(["dash.delChartFail", "dash.plzSelectTable", "dash.selectTbTitle", "dash.emptyFolderList", "dash.titleRequired", "dash.titleDuplicate", "dash.delChartLinkSuccess", "chart.untitledChart", "saveSuccess", "chart.chainChart", "chart.chainField"], e)
        }
    }
    angular.module("BC.controllers.dashboard")
        .controller("newDashController", e),
        e.$inject = [
            "$scope",
            "$rootScope",
            "commonService",
            "$timeout",
            "$location",
            "ngDialog",
            "$stateParams",
            "commonHttp",
            "errHint",
            "operatorHelpLink",
            "$http",
            "$jsTipTranslate"]
};
