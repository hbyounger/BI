function chartAddCtrl() {
    function e(e, a, i, n, r, o, s, l, d, c, p, u) {
        function h() {
            return e.wsId ? d.when() : i.chart_tpl.typeList().then(function (e) {
                "0" == e.status && (a.chartAddView.tplTypeList = e.result.tpl_type_list, a.chartAddView.tplTypeList.length > 0 && ($(".ngdialog.choose-table").addClass("ngdialog-drawer-open"), a.chartAddView.chooseType()))
            })
        }

        function f(e) {
            return n.get("/api/folder/list_for_chart").then(function (t) {
                a.loadingStatus.isAdding = !1, a.loadingStatus.loadingFolders = !1, 0 == t.status && e(t.result)
            })
        }

        function g(e) {
            a.chartAddView.folderList = e, a.chartAddView.original_folderList = angular.copy(e), a.$broadcast("updatefolderList", a.chartAddView.original_folderList), a.chartAddView.tplTypeList.length > 0 && $(".ngdialog.choose-table .dialog-drawer").show()
        }

        function m(e) {
            a.chartAddView.selectedTplType = e;
            var t = {
                type: e
            };
            i.chart_tpl.applyList(t).then(function (e) {
                "0" == e.status && (a.chartAddView.tplList = e.result.tpl_list, angular.forEach(a.chartAddView.tplList, function (e) {
                    r.get("/api/chart/data", {
                        params: {
                            ct_id: e.ct_id,
                            is_chart_tpl: 1
                        }
                    }).then(function (t) {
                        200 == t.status && 0 == t.data.status ? e.chart_type = t.data.result.info.chart_type : e.error = t.data.errstr
                    })
                }))
            })
        }

        function _(e) {
            a.chartAddView.selectedTpl = e
        }

        function v() {
            e.canUseCustomChart && u.getGuideVal("newCustomChartGuide") && (u.setGuideApi("newCustomChartGuide", 0), $(".dotguidenewCustomChartGuide").remove())
        }

        function b(e) {
            a.chartAddView.tabIndex = e, p(function () {
                a.$broadcast("updatefolderList", a.chartAddView.original_folderList)
            }), a.chartAddView.tabIndex ? $(".J-chart-select-table").removeClass("ngdialog-drawer-open") : a.chartAddView.tplTypeList.length && ($(".J-chart-select-table").addClass("ngdialog-drawer-open"), a.chartAddView.chooseType())
        }

        function y() {
            function e(t) {
                angular.forEach(t, function (t) {
                    angular.forEach(t.tb_list, function (e) {
                        e.check && i.push(e.tb_id)
                    }), t.sub_folders && t.sub_folders.length > 0 && e(t.sub_folders)
                })
            }
            if (0 == a.chartAddView.tabIndex) {
                if (!a.chartAddView.selectedTbId) return void l(a.tips["dash.plzSelectTable"]);
                a.chartAddView.selectedTpl ? s.open({
                    templateUrl: "/static/chartTemplate/view/ngdialog_match_field.html",
                    scope: a,
                    data: {
                        selectedTpl: a.chartAddView.selectedTpl,
                        selectedTbId: a.chartAddView.selectedTbId,
                        chooseTableOk: C
                    },
                    className: "ngdialog-theme-default chart-tpl-field",
                    controller: t
                }) : a.chartAddView.chooseTableOk(a.chartAddView.selectedTbId, "normal")
            } else {
                var i = [],
                    n = 2 == a.chartAddView.tabIndex ? "custom" : "gis";
                e(a.chartAddView.folderList), i.length ? a.chartAddView.chooseTableOk(i, n) : l(a.tips["dash.plzSelectTable"])
            }
        }

        function w(e) {
            ! function (t) {
                for (var a = 0, i = t.length; a < i; a++) {
                    t[a].tb_id == e.tb_id && (t[a].check = e.check);
                    for (var n = 0, r = t[a].tb_list.length; n < r; n++) t[a].tb_list[n].tb_id == e.tb_id && (t[a].tb_list[n].check = e.check)
                }
            }(a.chartAddView.folderList)
        }

        function C(t, n, r) {
            function d() {
                a.ngDialogData.addGridItem();
                var e = 0;
                bdp.bdpPageStatus.isUnderDataScreen() && (e = 1), bdp.bdpPageStatus.isUnderAdvDash() && (e = 2);
                var o = {
                    dsh_id: a.ngDialogData.currDash.dashSelected,
                    tb_id: t,
                    dsh_meta: {
                        charts: a.ngDialogData.getClearSaveMeta(a.ngDialogData.dashStandardItems, !0)
                    },
                    type: n,
                    category: e
                };
                r && angular.isFunction(r) ? r(o).then(u) : i.chart.create(o).then(u)
            }
            if (!t) return void l(a.tips["dash.plzSelectTable"]);
            var c, p, u = function (t) {
                if ("0" == t.status) {
                    s.closeAll(), $.cookie("grid_index", "");
                    var i = t.result.ct_id,
                        r = {
                            normal: "chart_edit",
                            gis: "gis_edit",
                            custom: "custom_chart_edit"
                        },
                        d = r[n] || "chart_edit";
                    if (e.creatingChart = !0, p) {
                        var u = o.path();
                        c && (u += a.ngDialogData.currDash.activeProjId), p && (u += a.ngDialogData.currDash.dashSelected), window.setTimeout(function () {
                            window.location.href = window.location.href.replace(o.path(), u.replace("dash_edit", d) + "/" + i), window.location.reload()
                        }, 100)
                    }
                    if (s.closeAll(), !p) {
                        var h, f;
                        u = o.path().replace("/mode/adv", ""), h = a.chartAddView.isAdvDashEdit ? "adv_dash_edit" : a.chartAddView.isAdvDash ? "dash_edit" : a.chartAddView.isDataScreenEdit ? "data_screen_edit" : a.chartAddView.isDataScreen ? "data_screen" : "dash_edit", f = h ? "?page_referrer=" + h : "", u = u.replace(h, d), u = u + "/" + i + f, o.url(u)
                    }
                } else a.ngDialogData.dashStandardItems.pop(), l(+t.status)
            };
            if (a.ngDialogData.currDash.dashSelected) return d();
            var h = function () {
                var e = {
                    name: "仪表盘1",
                    proj_id: a.ngDialogData.currDash.activeProjId
                };
                return i.dashboard.create(e).success(function (e) {
                    e = e.data || e, "0" === e.status && (a.ngDialogData.currDash.dashSelected = e.result.dsh_id, a.dashTitle = "仪表盘1", p = !0, d())
                })
            };
            void 0 == a.ngDialogData.currDash.activeProjId ? i.project.create({
                name: "文件夹1"
            }).success(function (e) {
                e = e.data || e, "0" === e.status && (a.ngDialogData.currDash.activeProjId = e.result.proj_id, c = !0, h())
            }) : h()
        }
        a.init = function () {
            var e = o.path();
            a.chartAddView = {
                isDataScreen: e.indexOf("data_screen/") > -1,
                isDataScreenEdit: e.indexOf("data_screen_edit/") > -1,
                isAdvDashEdit: e.indexOf("adv_dash_edit") >= 0 && e.indexOf("mode/adv") >= 0,
                isAdvDash: e.indexOf("dash_edit") >= 0 && e.indexOf("mode/adv") >= 0 && e.indexOf("adv_dash_edit") < 0,
                tabIndex: 0,
                tplTypeList: [],
                selectedTbId: "",
                selectedTpl: null,
                selectedTplType: "",
                tplList: [],
                query: "",
                folderList: [],
                original_folderList: [],
                turnOffGuide: v,
                showTab: b,
                confirm: y,
                changeChecked: w,
                chooseType: m,
                chooseTpl: _,
                chooseTableOk: C
            }, a.loadingStatus.loadingFolders = !0, a.chartAddView.showTab(0), h(), f(g)
        }, a.init(), a.$on("recoverFolderList", function (e, t) {
            a.chartAddView.folderList = t
        }), c(["dash.plzSelectTable"], a)
    }

    function t(e, t, a, i, n) {
        function r() {
            a.field.getList(e.ngDialogData.selectedTbId).then(function (t) {
                if ("0" == t.status) {
                    e.fieldList = t.result.schema, e.fidToName = {}, e.tbType = t.result.tb_type, angular.forEach(e.fieldList, function (t, a) {
                        e.fidToName[t.fid] = t.name, 0 === t.is_build_aggregated ? t.field_type = "common" : t.is_build_aggregated > 0 && (t.hasOwnProperty("param") && "group" == t.param.type ? t.field_type = "group" : t.field_type = "calc")
                    });
                    for (var a = e.fieldList.length; a--;) 1 == e.fieldList[a].is_build_aggregated && e.fieldList.splice(a, 1)
                }
            })
        }

        function o(t) {
            a.chart_tpl.info(t).then(function (t) {
                if ("0" == t.status) {
                    var a = t.result.tpl_info.fid_explain;
                    e.tplMatchInfo.tplFields = a
                }
            })
        }

        function s() {
            var a = e.ngDialogData.selectedTpl;
            a.chart_options = {
                theme: 1 == +t.usedThemeId ? "dark" : "default",
                ct_id: a.ct_id,
                is_chart_tpl: 1,
                optional: {}
            }
        }
        e.tplMatchInfo = {
            tplFields: [],
            matchFields: []
        }, e.fieldDragging = null, e.fieldList = [], e.fidToName = {}, e.tbType = "", e.matchTabIndex = 1, e.showTab = function (t) {
            e.matchTabIndex = t, 2 == t && s()
        }, e.dragThisField = function (t, a, i, n) {
            e.fieldDragging = i
        }, e.dropFieldMatch = function (t, a, r) {
            if (e.fieldDragging) {
                for (var o = e.tplMatchInfo.matchFields, s = o.length; s--;)
                    if (o[s] && o[s].fid == e.fieldDragging.fid) return i(n.instant("chartTemplate.duplicateUseField"));
                if (e.tplMatchInfo.tplFields[r].data_type != e.fieldDragging.data_type) return i(n.instant("chartTemplate.dataTypeNotMatch"));
                e.tplMatchInfo.matchFields[r] = e.fieldDragging
            }
        }, e.optionsList = {}, e.autoMatch = function () {
            function t(t, a) {
                return !(!t || i[t.fid]) && (i[t.fid] = !0, e.tplMatchInfo.matchFields[a] = t, !0)
            }
            e.tplMatchInfo.matchFields = [];
            var a = {};
            e.fieldList.forEach(function (e) {
                a[e.data_type + ":" + e.name] = e, a[e.data_type + ":" + e.original_name] = e, a[e.data_type] || (a[e.data_type] = []), a[e.data_type].push(e)
            });
            var i = {};
            e.tplMatchInfo.tplFields.forEach(function (e, i) {
                var n = e.data_type + ":" + e.title;
                t(a[n], i)
            }), e.tplMatchInfo.tplFields.forEach(function (i, n) {
                if (!e.tplMatchInfo.matchFields[n]) {
                    var r = a[i.data_type];
                    if (angular.isArray(r))
                        for (; r[0] && !t(r.shift(), n););
                    e.tplMatchInfo.matchFields[n]
                }
            })
        }, e.chartTpl = function () {
            var t = {},
                r = e.tplMatchInfo.tplFields,
                o = e.tplMatchInfo.matchFields,
                s = !1;
            if (r.forEach(function (e, a) {
                    if (o[a]) return t[e.fid] = o[a].fid;
                    s = !0
                }), s) return void i(n.instant("chartTemplate.plzFillAllTplFields"));
            var l = function (i) {
                var n = 0;
                bdp.bdpPageStatus.isUnderDataScreen() && (n = 1), bdp.bdpPageStatus.isUnderAdvDash() && (n = 2);
                var r = {
                    tpl_id: e.ngDialogData.selectedTpl.tpl_id,
                    dsh_id: i.dsh_id,
                    tb_id: i.tb_id,
                    used_origin_fids_map: t,
                    dsh_meta: i.dsh_meta,
                    category: n
                };
                return a.chart_tpl.createChart(r)
            };
            e.ngDialogData.chooseTableOk(e.ngDialogData.selectedTbId, "normal", l)
        },
            function () {
                r(), o(e.ngDialogData.selectedTpl.tpl_id)
            }()
    }
    angular.module("BC.controllers.dashboard")
        .controller("chartAddCtrl", e),
        e.$inject = ["$rootScope", "$scope", "commonService", "commonHttp", "$http", "$location", "ngDialog", "errHint", "$q", "$jsTipTranslate", "$timeout", "guideService"],
        t.$inject = ["$scope", "$rootScope", "commonService", "errHint", "operatorHelpLink", "$http", "$jsTipTranslate", "$translate"]
};