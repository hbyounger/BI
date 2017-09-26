// https://www.bdp.cn/static


var Sb = {
    map: "nou5p4",
    common: "1jsk53",
    style: "hfbhis",
    tile: "ipgetl",
    vectordrawlib: "jxny4a",
    newvectordrawlib: "sqrzvv",
    groundoverlay: "0rdnfr",
    pointcollection: "s155pp",
    marker: "2h4myx",
    symbol: "eaver3",
    canvablepath: "gp22yf",
    vmlcontext: "o3pgbb",
    markeranimation: "4tffwc",
    poly: "fhcrb2",
    draw: "bc5lis",
    drawbysvg: "blkz41",
    drawbyvml: "0mz2sl",
    drawbycanvas: "ylitr2",
    infowindow: "yfhw4l",
    oppc: "htcett",
    opmb: "kw4spg",
    menu: "s135ij",
    control: "pcsx4x",
    navictrl: "z51cgx",
    geoctrl: "szvqac",
    copyrightctrl: "qc2lov",
    citylistcontrol: "iwts0b",
    scommon: "q1svgl",
    local: "dtarl0",
    route: "j2r2vy",
    othersearch: "h1lzgz",
    mapclick: "clvuew",
    buslinesearch: "yd05l4",
    hotspot: "hpvlzm",
    autocomplete: "0ofghh",
    coordtrans: "4kmffa",
    coordtransutils: "asggpw",
    convertor: "onqilg",
    clayer: "hb2rzc",
    pservice: "srzrr4",
    pcommon: "vf15g0",
    panorama: "nvijg0",
    panoramaflash: "50fyvf",
    vector: "tx1wwn"
};
/* @@@Module
 * BC.database
 * BC.machineLearning
 * oc.lazyLoad
 * BC
 * BC.accountPermission
 * BC.chartTemplate
 * filter
 * BC.services
 * BC.controllers.project
 * BC.controllers.dashboard
 * BC.controllers.dataScreen
 * BC.controllers.dataSource
 * BC.controllers.chartEdit
 * BC.controllers.dashUpload
 * BC.controllers.pay
 * BC.controllers.setWarn
 * BC.controllers.template.home
 * BC.controllers.template.config
 * BC.controllers.template.rule
 * BC.controllers.template.modify
 * BC.controllers.authorManageCtrl
 * BC.controllers.warn
 * BC.controllers.notice
 * BC.controllers.workspace
 * BC.directives
 * BC.personal
 * mainNav
 * bdp.charts
 * ui.bootstrap.bindHtml
 * monospaced.elastic
 */
var Module = {
    "oc.lazyLoad":{},
    "ui.router":{},
    "pascalprecht.translate":{},
    "BC.services":{
        service:{
            pendingRequests:'',
            commonHttp:'',
            multipleProService:'',
            commonService:'',
            baService:'',
            guideService:'',
            styleService:'',
        },
        directive:{
            advanceSort:'/static/js/advance-sort/advance-sort.html',
        },
        config:{
            $httpProvider:'',
        },
        factory:{//Inject
            alphaOrderType:'',
            autoRefreshChart:'',
            AdvfilterOperatorMap:'',
            AdvfilterOperatorNumberMap:'',
            AdvfilterOperatorList:'',
            conditionType:'',
            chartType:{
                type:["C210",
                    "C211",
                    "C212",
                    "C220",
                    "C230",
                    "C240",
                    "C241",
                    "C242",
                    "C200",
                    "C250",
                    "C261",
                    "C271",
                    "C272",
                    "C280",
                    "C290",
                    "C300",
                    "C310",
                    "C320",
                    "C330",
                    "C340",
                    "C350",
                    "C351",
                    "C352",
                    "C360",
                    "C370"],
                des:[{
                    cate: "C20",
                    type: "C200",
                    name: "表格",
                    status: !1
                }, {
                    cate: "C31",
                    type: "C310",
                    name: "指标卡",
                    status: !1
                }, {
                    cate: "C26",
                    type: "C261",
                    name: "计量图",
                    status: !1
                }, {
                    cate: "C22",
                    type: "C220",
                    name: "折线图",
                    status: !1
                }, {
                    cate: "C21",
                    type: "C210",
                    name: "簇状柱形图",
                    status: !1
                }, {
                    cate: "C21",
                    type: "C211",
                    name: "堆积柱形图",
                    status: !1
                }, {
                    cate: "C21",
                    type: "C212",
                    name: "百分比堆积柱形图",
                    status: !1
                }, {
                    cate: "C32",
                    type: "C320",
                    name: "瀑布图",
                    status: !1
                }, {
                    cate: "C24",
                    type: "C240",
                    name: "条形图",
                    status: !1
                }, {
                    cate: "C24",
                    type: "C241",
                    name: "堆积条形图",
                    status: !1
                }, {
                    cate: "C24",
                    type: "C242",
                    name: "百分比堆积条形图",
                    status: !1
                }, {
                    cate: "C24",
                    type: "C243",
                    name: "对比条形图",
                    status: !1
                }, {
                    cate: "C35",
                    type: "C350",
                    name: "面积图",
                    status: !1
                }, {
                    cate: "C35",
                    type: "C351",
                    name: "堆积面积图",
                    status: !1
                }, {
                    cate: "C35",
                    type: "C352",
                    name: "百分比堆积面积图",
                    status: !1
                }, {
                    cate: "C28",
                    type: "C280",
                    name: "散点图",
                    status: !1
                }, {
                    cate: "C23",
                    type: "C230",
                    name: "普通饼图",
                    status: !1
                }, {
                    cate: "C36",
                    type: "C360",
                    name: "旭日图",
                    status: !1
                }, {
                    cate: "C37",
                    type: "C370",
                    name: "树图",
                    status: !1
                }, {
                    cate: "C33",
                    type: "C330",
                    name: "漏斗图",
                    status: !1
                }, {
                    cate: "C27",
                    type: "C271",
                    name: "地图（面积）",
                    status: !1
                }, {
                    cate: "C27",
                    type: "C272",
                    name: "地图（气泡）",
                    status: !1
                }, {
                    cate: "C25",
                    type: "C250",
                    name: "双轴",
                    status: !1
                }, {
                    cate: "C340",
                    type: "C340",
                    name: "词云",
                    status: !1
                }, {
                    cate: "C30",
                    type: "C300",
                    name: "桑基图",
                    status: !1
                }, {
                    cate: "C29",
                    type: "C290",
                    name: "雷达图",
                    status: !1
                }]
            },
            chartTypeTip:[...etc],
            chartLineType:'',
            capacityHint:'',
            chartJumpFuns:'',
            conditionTypeVal:'',
            dataTypeMap:'',
            dataTypeList:'',
            databaseConfigInfo:'',
            databaseType:'',//数据库类型
            databaseSyncTime:'',
            databaseParamTip:'',
            dataShowTypeMap:'',
            dateNameMap:'',
            dateTimesMap:'',
            dsStatusMap:'',
            dashChartLink:'',
            dateTimeByHalfHour:'',
            dashChartJump:'',
            dbTypeMap:'',
            errHint:'',
            formula:["SUM", "AVERAGE", "AVG", "MIN", "MAX", "COUNT", "COUNT_DISTINCT", "more", "MED", "PERCENTILE", "PERCENT_5", "PERCENT_10", "PERCENT_25", "PERCENT_50", "PERCENT_75", "PERCENT_90", "PERCENT_95"],
            formulaFunc:'',
            formulaKeyMap:'',
            formulaService:'',
            getFunctionList:'',
            granularityMap:'',
            filterOperatorMap:'',
            filterOperatorMapWithType:'',
            filterOperatorMapWithTypeSpecial:'',
            formatFieldPercentile:'',
            setAdvanceAggregatorName:'',
            tbList:'',
            modelAlgoList:'',
            numberInnerFilterMap:'',
            operatorHelpLink:'',
            orgTreeHandleService:'',
            projectTreeCache:'',
            verifyTbName:'',
            webSocket:'',
            warnOperatorMap:'',
            $jsTipTranslate:'',
            $getCustomFormula:'',

        },
        filter:{
            dashParentsPath:'',
        },
        constant:{
            guideLocalConstant:'',
            guideApiConstant:'',
        },
        value:{
            operatorTranslateIds:[
                "equal",
                "notEqual",
                "greatThan",
                "lessThan",
                "GTE",
                "LTE",
                "contain",
                "notContain",
                "isEmpty",
                "isNotEmpty",
                "selectDateRange",
                "isIn",
                "isNotIn"],
        }
    },
    "BC.directives":{
        directive : {
            baidustatisticsTip :'',
            bdpPage : '/static/partials/directiveTemplates/page.html',
            bubbleSize:'',
            chartDataInfo:'',
            chartTemplateGuide:'',
            createChartAtTb:[
                '/static/partials/dialogTemplates/create_chart.html',
                '/static/partials/directiveTemplates/selectProjDashInfo.html',
            ],
            customChartDataInfo:'',
            dimensionCompareSort:'',
            doubleYaxisChartType:'',
            dateTimeByHalfHour:'',
            dateGranularity:'',
            datascreenPageEle :'/static/partials/directiveTemplates/dataScreen/pageEle.html',
            datascreenPageWrap :'/static/partials/directiveTemplates/dataScreen/pageWrap.html',
            expressionFilter:'',
            expressionFuncTip:'',
            errorReport:'',
            filterFolderTable:'/static/js/worktable/directivesTemplates/searchFolderTableBox.html',
            freeDrillSetting :'/static/partials/dialogTemplates/free-drill-setting.html',
            flashGuide:'',
            formulaExpression:'',
            formulaExpressionReadonly:'',
            folderOpt:'/static/partials/table_folder_opt.html',
            guideNavigator:'',
            globalFilterSet:'',
            globalFilter:'',
            gaugeSetting:'',
            gisEditGuide:'',
            gisBubbleSize:'',
            ksturlTip:'',
            maskGuide:'',
            modifyField:'',
            navNotice :'/static/js/common/tpl/nav_notice.html',
            operateName:'',
            pagination:'',
            resizeWidthFieldsList:'',
            resizeWidthFilterList:'',
            resizeProjectList:'',
            setUp:'/static/partials/table_set_up.html',
            setVisiblePreviewField:'/static/js/worktable/directivesTemplates/setVisiblePreviewField.html',
            searchFolderTable:'',
            startEndDate :'/static/js/worktable/preview/start-end-date.html',
            stringDataShowType:'',
            selectProjDash :'/static/partials/directiveTemplates/selectProjDash.html',
            selectSearchList:'/static/partials/directiveTemplates/selectSearchList.html',
            searchFolderTableCheckbox:'',
            searchDsTable:'',
            searchTable:'',
            searchTb:'/static/partials/directiveTemplates/searchTb.html',
            tableRelationPath:'/static/partials/directiveTemplates/tableRelationPath.html',
            tableListScrollFunc:'',
            transformTbType:'',
            tableFilterPrompt:'/static/partials/directiveTemplates/tableFilterPrompt.html',
            transposeFilter :'/static/js/worktable/transpose/transpose_filter.html',
            transposeModelView :'/static/js/worktable/transpose/transpose_model_view.html',
            userOperate:'',
            userSearchWb:'',
            userWb:'',
            userModifyWb:'',
            vaSettingGuide:'',
            waterMark:'',
            wordcountResultFilter:'/static/partials/dialogTemplates/word-count-dialog.html',
            wpWb :'/static/workspace/wb/manage_work_tables.html',
            wpDl :'/static/workspace/wb/manage_dash_lists.html',
            wpAd :'/static/workspace/wb/manage_add_dashboard.html',
        },
        controller : {
            bubbleSizeCtrl:'',
            gisBubbleSizeCtrl:'',
        },
        constant:{
            EleBorderTypes:'',
            BorderLineStyle:'',
            screenLineWidth:'',
            screenElePadding:'',
        }
    },
    "BC.controllers.project":{
        controller:{
            ProjectController:[
                "/static/js/dashboard/tpl/project_view.html",
                "/static/js/dashboard/tpl/project_view.html",
                "/static/js/dashboard/tpl/project_view.html",
                "/static/js/dashboard/tpl/project_view.html",
            ],
            createDashboardController:[
                "/static/partials/dialogTemplates/create_data_screen.html",
                "/static/partials/dialogTemplates/create-dashboard.html",
            ],
            createProjectController:"/static/partials/dialogTemplates/create-project.html",
        }
    },
    "BC.controllers.dashboard":{//zhongyao
        controller:{
            DashController:[
                "/static/js/dashboard/tpl/dash-edit.html",
                "/static/js/dashboard/tpl/dash-edit.html",
                "/static/js/dashboard/tpl/dash-fullscreen.html",
                "/static/js/dashboard/tpl/dash-fullscreen.html",
                "/static/js/dashboard/tpl/dash-edit.html",
                "/static/js/dashboard/tpl/dash-edit.html",
                "/static/js/dashboard/tpl/dash-fullscreen.html",
            ],
            advDashboardCtrl:[
                "/static/js/dashboard/tpl/adv_dashboard.html",
                "/static/js/dashboard/tpl/adv_dashboard.html",
                "/static/js/dashboard/tpl/adv_dashboard_edit.html",
                "/static/js/dashboard/tpl/adv_dashboard_edit.html",
                "/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
                "/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
                "/static/js/dashboard/tpl/adv_dashboard.html",
            ],
            newDashController:'',
            chartAddCtrl:[
                "/static/partials/dialogTemplates/chart-select-table.html",//DashController
                "/static/partials/dialogTemplates/chart-select-table.html",//advDashboardCtrl
                "/static/partials/dialogTemplates/chart-select-table.html",//DataScreenCtrl
            ],
            tplReplaceCtrl:'',
        }
    },
    "BC.controllers.dataScreen":{
        controller:{
            DataScreenCtrl:[
                "/static/js/dashboard/tpl/data_screen.html",//"data_screen.dash"
                "/static/js/dashboard/tpl/data_screen_edit.html",//"data_screen_edit"
            ],
        }
    },
    "BC.controllers.dashUpload":{},
    "BC.controllers.chartEdit":{//图表编辑
        controller:{
            ChartController:[
                "/static/js/dashboard/tpl/chart-edit.html",//"chart_edit"
                "/static/js/dashboard/tpl/chart-edit.html",//"chart_edit_ws"
            ],
            CustomChartEditCtrl:"/static/js/dashboard/tpl/custom-chart-edit.html",//"custom_chart_edit"
            gisCtrl:[
                "/static/js/dashboard/tpl/gis_edit.html",//"gis_edit"
                "/static/js/dashboard/tpl/gis_edit.html",//"gis_edit_ws"
            ],
            FieldGroupController:'',
            enumOrderCtrl:'',
            FormulaEditController:'',
        },
        directive:{
            chartDropDown:'',
            gisFieldSetting:'',
        }
    },
    "BC.controllers.dataSource":{
        controller:{
            batchMoveTablesCtrl:'',
            batchDeleteTablesCtrl:'',
            batchSetFieldNameCtrl:'',
            chooseTbFolderCtrl:'',
            chooseTbListCtrl:'',
            ExtractTableCtrl:'',
            joinTableController:'',
            mergeFieldCtrl:'',
            mergeFieldDelegate:'',
            pageUploadCtrl:'',
            parseUrlCtrl:'',
            parseCodeCtrl:'',
            SQLTableCtrl:'',
            transposeTableCtrl:'',
            tableCapacityCtrl:'',
            UploadBatchController:'',
            UnionTableCtrl:'',
            unionSelectFieldsCtrl:'',
            unionSelectTableCtrl:'',
            WorktableFilterCtrl:'',
        },
        directive:{
            goLinkEdit:'',
            goDiagram:'',
            goWbcat:'',
            joinTableFilter:'js/worktable/join/view/join-table-filter.html',
            joinTableField:'js/worktable/join/view/join-table-field.html',
            joinTableCanvas:'',
            mergeField:'',
            showRelationProduce:'',
            showCurrentRelation:'',
            worktablePreviewFilter:'js/worktable/preview/worktable-preview-filter.html',
            uploadDropDown:'',
            unionFilter:'partials/union_filter.html',
        },
        factory:{
            mergeFieldDelegate:'',
            unionService:'',
        },
        config:{
            $compileProvider:'',
            unionService:'',
        },
        constant:{
            goColors:'',
        }
    },
    "BC.controllers.dataSource.polymer":{
        controller:{
            polymerTableCtrl :'/static/partials/polymer_filter.html',
        },
        directive:{
            polymerFilter:'',
        }
    },
    "BC.controllers.warn":{},
    "BC.controllers.notice":{},
    "BC.controllers.setWarn":{},
    "BC.controllers.template.home":{},
    "BC.controllers.template.config":{},
    "BC.controllers.template.rule":{},
    "BC.controllers.template.modify":{},
    "BC.controllers.workspace":{
        controller:{
            workspaceCtrl:'',
            addWorktableCtrl:'',
            authorityWorkTableCtrl:'',
        }
    },
    "BC.controllers.authorManageCtrl":{},
    "BC.controllers.pay":{//付费 不重要
        directive:{
            invoiceBtn:'',
        },
        controller:{
            invoiceCtrl:'',
            memberCtrl:'',
            memberUpgradeCtrl:'',
            memberInfoCtrl:'',
        },
        filter:{
            canFreePostage:'',
        }
    },
    "BC.personal":{
        service :{
            shareService:'',
        },
        factory : {
            dotGuide:'',
        },
        controller :{
            noviceGuideCtrl:'',
        },
        directive : {
            copyShareLink:'',
            dotGuide:'',
            noviceGuide:'',
            personalBroadcast:'',
            socialShare:'',
        }
    },
    "mainNav":{},
    "bdp.charts":{
        directive:{
            bdpChart:'',
            markPoint:'',
            chartMarkPoints:'/static/js/dashboard/tpl/markPointTooltip.html',
        },
        service:{
            chartEditService:'',
        },
        controller:{
            yAxisUnitController:'',
            EditMarkPointCtrl:'',
        }
    },
    "ngDialog":{},
    "ui.bootstrap":{},
    "ui.select":{},
    "ui.tree":{},
    "lr.upload":{},
    "datePicker":{},
    "ui.sortable":{},
    "ui.mask":{},
    "filter":{
        filter:{
            null_date
        }
    },
    "monospaced.elastic":{},
    "ui-rangeSlider":{},
    "spectrumColorPicker":{},
    "promiseButton":{},
    "inputNumber":{},
    "ngInputText":{},
    "ngLoadingGif":{},
    "angular-click-outside":{},
    "angular-mouserover-hide":{},
    "textAngular":{},
    "ngFileUpload":{},
    "ngImgCrop":{},
    "bw.paging":{},
    "pasvaz.bindonce":{},
}

/*Inject
 *$q
 *$interval
 *$jsTipTranslate
 * $filter
 * $getCustomFormula
 * $location
 * $position
 * $rootScope
 * $scope
 * $stateParams
 * $translate
 * $timeout
 * $window
 * BorderLineStyle
 * commonService
 * commonHttp
 * conditionType
 * chartLineType
 * capacityHint
 * dateNameMap
 * dateTimeByHalfHour
 * defaultChartStyleFactory
 *
 * dotGuide
 * errHint
 * EleBorderTypes
 * filterOperatorMapWithType
 * filterOperatorMapWithTypeSpecial
 * formulaKeyMap
 * formulaService
 * formatFieldPercentile
 * guideService
 * guideApiConstant
 * guideLocalConstant
 * operatorHelpLink
 * projectTreeCache
 * setAdvanceAggregatorName
 * screenElePadding
 * screenOfficialSize
 * toggleNextBlock
 * multipleProService
 * ngDialog
 * unionService
 * verifyTbName
 * warnOperatorMap
 * */



/**@@@Controller
 * ProjectController
 * DashController
 * advDashboardCtrl
 * DataScreenCtrl
 * ChartController
 * CustomChartEditCtrl
 * partnerUpgradeCtrl
 * WorktableCtrl
 * WarnController
 * noticeCtrl
 * TemplateHomeController
 * TemplateConfigController
 * templateRuleCtrl
 * templateRuleModifyCtrl
 * joinTableController
 * polymerTableCtrl
 * UnionTableCtrl
 * transposeTableCtrl
 * ExtractTableCtrl
 * SQLTableCtrl
 * workspaceCtrl
 * gisCtrl
 * parseUrlCtrl
 * mergeFieldCtrl
 * authorManageCtrl
 * memberCtrl
 * memberUpgradeCtrl
 * pageUploadCtrl
 * tableCapacityCtrl
 */


//"BC"
function $templateCache(e) {

}


//"BC.services"
//请求挂起
function pendingRequests() {
    var list = [];
    this.get = function () {
        return list
    };
    this.add = function (t) {
        list.push(t)
    };
    this.remove = function (t) {
        list = list.filter(function (ele) {
            return ele.url !== t
        })
    };
    this.cancelAll = function () {
        angular.forEach(list, function (ele) {
            ele.canceller.resolve()
        });
        list.length = 0
    };
    this.cancelOne = function (t) {
        if (t && list)
            for (var a = 0, i = list.length; a < i; a++)
                if (list[a].url == t) {
                    list[a].canceller.resolve();
                    break
                }
    };
}

//转换请求数据的格式
function $httpProvider(e) {
    e.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    e.defaults.headers.common.Accept = "application/json";
    var t = function (e) {
        var item, i, n, r, o, s, l, d = "";
        for (item in e){
            if ((i = e[item]) instanceof Array){
                for (l = 0; l < i.length; ++l){
                    o = i[l];
                    n = item + "[" + l + "]";
                    s = {};
                    s[n] = o;
                    d += t(s) + "&";
                }

            }
            else if (i instanceof Object){
                for (r in i){
                    o = i[r];
                    n = item + "[" + r + "]";
                    s = {};
                    s[n] = o;
                    d += t(s) + "&";
                }
            }
            else {
                void 0 !== i && null !== i && (d += encodeURIComponent(item) + "=" + encodeURIComponent(i) + "&");
            }
        }
        return d.length ? d.substr(0, d.length - 1) : d
    };
    e.defaults.transformRequest = function (e) {
        if (angular.isObject(e) && String(e)) {
            var a = {};
            return
            angular.copy(e, a),
                t(a)
        }
        return e
    }
}

//图表类型
//"$rootScope", "$translate"
function chartType($rootScope, $translate) {
    function a() {
        $translate(i).then(function (e) {
            desList.forEach(function (item) {
                item.name = e[item.type]
            })
        })
    }
    var i = [
        "C210",
        "C211",
        "C212",
        "C220",
        "C230",
        "C240",
        "C241",
        "C242",
        "C200",
        "C250",
        "C261",
        "C271",
        "C272",
        "C280",
        "C290",
        "C300",
        "C310",
        "C320",
        "C330",
        "C340",
        "C350",
        "C351",
        "C352",
        "C360",
        "C370"];
    a();
    $rootScope.$on("$translateChangeSuccess", a);
    var desList = [{
        cate: "C20",
        type: "C200",
        name: "表格",
        status: !1
    }, {
        cate: "C31",
        type: "C310",
        name: "指标卡",
        status: !1
    }, {
        cate: "C26",
        type: "C261",
        name: "计量图",
        status: !1
    }, {
        cate: "C22",
        type: "C220",
        name: "折线图",
        status: !1
    }, {
        cate: "C21",
        type: "C210",
        name: "簇状柱形图",
        status: !1
    }, {
        cate: "C21",
        type: "C211",
        name: "堆积柱形图",
        status: !1
    }, {
        cate: "C21",
        type: "C212",
        name: "百分比堆积柱形图",
        status: !1
    }, {
        cate: "C32",
        type: "C320",
        name: "瀑布图",
        status: !1
    }, {
        cate: "C24",
        type: "C240",
        name: "条形图",
        status: !1
    }, {
        cate: "C24",
        type: "C241",
        name: "堆积条形图",
        status: !1
    }, {
        cate: "C24",
        type: "C242",
        name: "百分比堆积条形图",
        status: !1
    }, {
        cate: "C24",
        type: "C243",
        name: "对比条形图",
        status: !1
    }, {
        cate: "C35",
        type: "C350",
        name: "面积图",
        status: !1
    }, {
        cate: "C35",
        type: "C351",
        name: "堆积面积图",
        status: !1
    }, {
        cate: "C35",
        type: "C352",
        name: "百分比堆积面积图",
        status: !1
    }, {
        cate: "C28",
        type: "C280",
        name: "散点图",
        status: !1
    }, {
        cate: "C23",
        type: "C230",
        name: "普通饼图",
        status: !1
    }, {
        cate: "C36",
        type: "C360",
        name: "旭日图",
        status: !1
    }, {
        cate: "C37",
        type: "C370",
        name: "树图",
        status: !1
    }, {
        cate: "C33",
        type: "C330",
        name: "漏斗图",
        status: !1
    }, {
        cate: "C27",
        type: "C271",
        name: "地图（面积）",
        status: !1
    }, {
        cate: "C27",
        type: "C272",
        name: "地图（气泡）",
        status: !1
    }, {
        cate: "C25",
        type: "C250",
        name: "双轴",
        status: !1
    }, {
        cate: "C340",
        type: "C340",
        name: "词云",
        status: !1
    }, {
        cate: "C30",
        type: "C300",
        name: "桑基图",
        status: !1
    }, {
        cate: "C29",
        type: "C290",
        name: "雷达图",
        status: !1
    }];
    return desList
}


//"$rootScope", "$translate"
function chartTypeTip($rootScope, $translate) {
    function translate() {
        $translate(i)
            .then(function (e) {
                des.forEach(function (item) {
                    item.name = e[item.type]
                })
            }),
            $translate(n)
                .then(function (e) {
                    des.forEach(function (item) {
                        0 == item.combination.length ? (item.showDimension = e[item.dimension], item.showMetric = e[item.metric])
                            : (item.showCombination[0] = e[item.combination[0]], item.showCombination[1] = e[item.combination[1]])
                    })
                })
    }

    var i = [
            "C210",
            "C211",
            "C212",
            "C220",
            "C230",
            "C240",
            "C241",
            "C242",
            "C243",
            "C200",
            "C250",
            "C261",
            "C271",
            "C272",
            "C280",
            "C290",
            "C300",
            "C310",
            "C320",
            "C330",
            "C340",
            "C350",
            "C351",
            "C352",
            "C360",
            "C370"],
        n = [
            "only0",
            "onlyOne",
            "onlyTwo",
            "onlyMore",
            "OneOrTwo",
            "0orOne",
            "0orMore",
            "OneorMore",
            "TwoorMore",
            "NoMoreThanTwo",
            "0DMoreV",
            "OneDOneV",
            "OneOrTwoDOneV",
            "OneDMoreV",
            "moreCMoreV",
            "0andMoreC3andMoreV",
            "OneDTwoV",
            "OneDOneCOneV"];
    translate();
    $rootScope.$on("$translateChangeSuccess", translate);
    var des = [{
        type: "C200",
        name: "表格",
        dimension: "0orMore",
        metric: "0orMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C310",
        name: "指标卡",
        dimension: "only0",
        metric: "OneOrTwo",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C261",
        name: "计量图",
        dimension: "only0",
        metric: "onlyOne",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C220",
        name: "折线图",
        dimension: "OneOrTwo",
        metric: "OneorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C210",
        name: "簇状柱形图",
        dimension: "NoMoreThanTwo",
        metric: "OneorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C211",
        name: "堆积柱形图",
        dimension: "OneOrTwo",
        metric: "TwoorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C212",
        name: "百分比堆积柱形图",
        dimension: "OneOrTwo",
        metric: "TwoorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C320",
        name: "瀑布图",
        dimension: "",
        metric: "",
        combination: ["OneOrTwoDOneV", "0DMoreV"],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C240",
        name: "条形图",
        dimension: "NoMoreThanTwo",
        metric: "OneorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C241",
        name: "堆积条形图",
        dimension: "OneOrTwo",
        metric: "TwoorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C242",
        name: "百分比堆积条形图",
        dimension: "OneOrTwo",
        metric: "TwoorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C243",
        name: "对比条形图",
        dimension: "",
        metric: "",
        combination: ["OneDTwoV", "OneDOneCOneV"],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C300",
        name: "桑基图",
        dimension: "onlyTwo",
        metric: "onlyOne",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C230",
        name: "普通饼图",
        dimension: "",
        metric: "",
        combination: ["OneDOneV", "0DMoreV"],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C271",
        name: "地图（面积）",
        dimension: "onlyOne",
        metric: "onlyOne",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C272",
        name: "地图（气泡）",
        dimension: "onlyOne",
        metric: "onlyOne",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C290",
        name: "雷达图",
        dimension: "",
        metric: "",
        combination: ["OneDMoreV", "0andMoreC3andMoreV"],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C250",
        name: "双轴",
        dimension: "NoMoreThanTwo",
        metric: "onlyMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C280",
        name: "散点图",
        dimension: "0orMore",
        metric: "onlyTwo",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C330",
        name: "漏斗图",
        dimension: "",
        metric: "",
        combination: ["OneDOneV", "0DMoreV"],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C340",
        name: "词云",
        dimension: "onlyOne",
        metric: "only0",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C350",
        name: "面积图",
        dimension: "0orOne",
        metric: "OneorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C351",
        name: "堆积面积图",
        dimension: "onlyOne",
        metric: "TwoorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C352",
        name: "百分比堆积面积图",
        dimension: "onlyOne",
        metric: "TwoorMore",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !0
    }, {
        type: "C360",
        name: "旭日图",
        dimension: "TwoorMore",
        metric: "onlyOne",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }, {
        type: "C370",
        name: "树图",
        dimension: "OneorMore",
        metric: "0orOne",
        combination: [],
        showDimension: "",
        showMetric: "",
        showCombination: [],
        needComparison: !1
    }];
    return des
}

//返回帮助链接
//"$rootScope", "$translate"
function operatorHelpLink($rootScope, $translate) {
    var a = "";
    return function (e) {
        switch (e) {
            case "globalFilter":
                a = "https://help.bdp.cn/index.php?title=%E5%85%A8%E5%B1%80%E7%AD%9B%E9%80%89%E5%99%A8";
                break;
            case "tableFormatting":
                a = "https://help.bdp.cn/index.php?title=%E9%A2%9C%E8%89%B2%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%A0%BC%E5%BC%8F#.E8.A1.A8.E6.A0.BC";
                break;
            case "plotLine":
                a = "https://help.bdp.cn/index.php?title=%E9%A2%84%E8%AD%A6%E4%B8%8E%E8%BE%85%E5%8A%A9%E7%BA%BF#.E8.BE.85.E5.8A.A9.E7.BA.BF";
                break;
            case "chartWarn":
                a = "https://help.bdp.cn/index.php?title=%E9%A2%84%E8%AD%A6%E4%B8%8E%E8%BE%85%E5%8A%A9%E7%BA%BF#.E9.A2.84.E8.AD.A6";
                break;
            case "dateYoy":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E7.BB.B4.E5.BA.A6.E4.B8.BA.E9.9D.9E.E6.97.A5.E6.9C.9F.E5.AD.97.E6.AE.B5";
                break;
            case "customYoy":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E7.BB.B4.E5.BA.A6.E4.B8.BA.E6.97.A5.E6.9C.9F.E5.AD.97.E6.AE.B5";
                break;
            case "advanceDateFilter":
                a = "https://help.bdp.cn/index.php?title=%E7%AD%9B%E9%80%89%E5%99%A8#.E6.97.A5.E6.9C.9F.E5.AD.97.E6.AE.B5";
                break;
            case "innerFilter":
                a = "https://help.bdp.cn/index.php?title=%E7%AD%9B%E9%80%89%E5%99%A8#.E5.9B.BE.E5.86.85.E7.AD.9B.E9.80.89.E5.99.A8";
                break;
            case "colorSettingByNum":
                a = "https://help.bdp.cn/index.php?title=%E9%A2%9C%E8%89%B2%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%A0%BC%E5%BC%8F#.E6.B8.90.E5.8F.98.E9.A2.9C.E8.89.B2";
                break;
            case "colorSettingByField":
                a = "https://help.bdp.cn/index.php?title=%E9%A2%9C%E8%89%B2%E4%B8%8E%E6%9D%A1%E4%BB%B6%E6%A0%BC%E5%BC%8F#.E6.9E.9A.E4.B8.BE.E9.A2.9C.E8.89.B2";
                break;
            case "resultFilter":
                a = "https://help.bdp.cn/index.php?title=%E7%AD%9B%E9%80%89%E5%99%A8#.E7.BB.93.E6.9E.9C.E7.AD.9B.E9.80.89.E5.99.A8";
                break;
            case "chartChain":
                a = "https://help.bdp.cn/index.php?title=%E5%9B%BE%E8%A1%A8%E8%81%94%E5%8A%A8";
                break;
            case "chartMoveCalc":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E7.A7.BB.E5.8A.A8.E8.AE.A1.E7.AE.97";
                break;
            case "chartRepetition":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E9.87.8D.E5.A4.8D.E7.8E.87";
                break;
            case "chartRetention":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E7.95.99.E5.AD.98.E7.8E.87";
                break;
            case "chartRunning":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E7.B4.AF.E8.AE.A1.E8.AE.A1.E7.AE.97";
                break;
            case "chartActivity":
                a = "https://help.bdp.cn/index.php?title=%E9%AB%98%E7%BA%A7%E8%AE%A1%E7%AE%97#.E6.B4.BB.E8.B7.83.E7.8E.87";
                break;
            case "csv":
                a = "https://help.bdp.cn/index.php?title=%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0#.E4.B8.8A.E4.BC.A0CSV.E6.96.87.E4.BB.B6";
                break;
            case "fileUpload":
                a = "https://help.bdp.cn/index.php?title=%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0#.E4.B8.8A.E4.BC.A0Excel.E6.96.87.E4.BB.B6";
                break;
            case "fileAppend":
                a = "https://help.bdp.cn/index.php?title=%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0#.E8.BF.BD.E5.8A.A0.E6.95.B0.E6.8D.AE";
                break;
            case "fileReplace":
                a = "https://help.bdp.cn/index.php?title=%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0#.E6.9B.BF.E6.8D.A2.E6.95.B0.E6.8D.AE";
                break;
            default:
                a = ""
        }
        a && window.open(a)
    }
}

//计算公式列表
//"$rootScope", "$translate"
function formula($rootScope, $translate) {
    function translate() {
        $translate(i).then(function (e) {
            des.forEach(function (item) {
                item.list ? (item.name = e.more, item.list.forEach(function (ele) {
                    ele.list ? (ele.name = e.PERCENTILE, ele.list.forEach(function (t) {
                        t.name = e[t.type]
                    })) : t.name = e[t.type]
                })) : t.name = e[t.type]
            })
        })
    }
    var i = ["SUM", "AVERAGE", "AVG", "MIN", "MAX", "COUNT", "COUNT_DISTINCT", "more", "MED", "PERCENTILE", "PERCENT_5", "PERCENT_10", "PERCENT_25", "PERCENT_50", "PERCENT_75", "PERCENT_90", "PERCENT_95"],
        des = [{
            name: "求和",
            type: "SUM",
            show: "number"
        }, {
            name: "平均值",
            type: "AVERAGE",
            show: "number"
        }, {
            name: "计数",
            type: "COUNT",
            show: "all"
        }, {
            name: "去重计数",
            type: "COUNT_DISTINCT",
            show: "all"
        }, {
            name: "更多计数方式",
            type: "more",
            show: "number",
            list: [{
                name: "最大值",
                type: "MAX",
                show: "number"
            }, {
                name: "最小值",
                type: "MIN",
                show: "number"
            }, {
                name: "中位数",
                type: "MED",
                show: "number"
            }, {
                name: "百分位",
                type: "PERCENTILE",
                show: "number",
                list: [{
                    name: "5",
                    type: "PERCENT_5",
                    show: "number",
                    percent: .05
                }, {
                    name: "10",
                    type: "PERCENT_10",
                    show: "number",
                    percent: .1
                }, {
                    name: "25",
                    type: "PERCENT_25",
                    show: "number",
                    percent: .25
                }, {
                    name: "50",
                    type: "PERCENT_50",
                    show: "number",
                    percent: .5
                }, {
                    name: "75",
                    type: "PERCENT_75",
                    show: "number",
                    percent: .75
                }, {
                    name: "90",
                    type: "PERCENT_90",
                    show: "number",
                    percent: .9
                }, {
                    name: "95",
                    type: "PERCENT_95",
                    show: "number",
                    percent: .95
                }]
            }]
        }];
    return translate(),
        $rootScope.$on("$translateChangeSuccess", translate),
        des
}

//计算公式列表
function formulaFunc() {
    return [{
        name: "求和",
        type: "SUM",
        show: "number"
    }, {
        name: "平均值",
        type: "AVG",
        show: "number"
    }, {
        name: "最大值",
        type: "MAX",
        show: "number"
    }, {
        name: "最小值",
        type: "MIN",
        show: "number"
    }, {
        name: "计数",
        type: "COUNT",
        show: "all"
    }, {
        name: "去重计数",
        type: "COUNT(DISTINCT())",
        show: "all"
    }]
}


//"$rootScope", "errHint", "$translate"
function verifyTbName($rootScope, errHint, $translate) {
    var i = "",
        n = ["join.worksheetname", "tbNameInvalid"];
    return function () {
        $translate(n).then(function (e) {
            i = e["join.worksheetname"] + e.tbNameInvalid
        })
    }(),
        function (e) {
            return !0
        }
}

//$rootScope
function dateTimeByHalfHour($rootScope) {
    return [{
        value: "00:00:00",
        label: "00:00"
    }, {
        value: "01:00:00",
        label: "01:00"
    }, {
        value: "02:00:00",
        label: "02:00"
    }, {
        value: "03:00:00",
        label: "03:00"
    }, {
        value: "04:00:00",
        label: "04:00"
    }, {
        value: "05:00:00",
        label: "05:00"
    }, {
        value: "06:00:00",
        label: "06:00"
    }, {
        value: "07:00:00",
        label: "07:00"
    }, {
        value: "08:00:00",
        label: "08:00"
    }, {
        value: "09:00:00",
        label: "09:00"
    }, {
        value: "10:00:00",
        label: "10:00"
    }, {
        value: "11:00:00",
        label: "11:00"
    }, {
        value: "12:00:00",
        label: "12:00"
    }, {
        value: "13:00:00",
        label: "13:00"
    }, {
        value: "14:00:00",
        label: "14:00"
    }, {
        value: "15:00:00",
        label: "15:00"
    }, {
        value: "16:00:00",
        label: "16:00"
    }, {
        value: "17:00:00",
        label: "17:00"
    }, {
        value: "18:00:00",
        label: "18:00"
    }, {
        value: "19:00:00",
        label: "19:00"
    }, {
        value: "20:00:00",
        label: "20:00"
    }, {
        value: "21:00:00",
        label: "21:00"
    }, {
        value: "22:00:00",
        label: "22:00"
    }, {
        value: "23:00:00",
        label: "23:00"
    }]
}

//数据存储空间提示
//"ngDialog", "$rootScope"
function capacityHint(ngDialog, $rootScope) {
    return function () {
        ngDialog.closeAll();
        $rootScope.maxSize = $rootScope.personalInfo.capacity_info.capacity;
        ngDialog.open({
            template: "/static/partials/dialogTemplates/capacityHint.html",
            className: "ngdialog-theme-default ngDialog-width-330",
            scope: t
        })
    }
}

//出错提示
//"$rootScope", "$timeout", "$location", "$translate"
function errHint($rootScope, t, a, $translate) {
    var n = 0,
        r = null,
        o = !1;
    return function (code, s) {
        var l, d = "/login.html",
            c = $rootScope.language;
        s = s || {},
        window.isThirdIframe || (window.isThirdIframe = $rootScope.isThirdIframe = !1);
        var p = !1;
        if ("number" != typeof a && isNaN(Number(code)))
            l = code;
        else {
            switch (1 * code) {
                case 1:
                    $.cookie("token", "");
                    $.cookie("token_invalid", 1, {
                        path: "/"
                    });
                    o || (o = !0, d = bdp.bdpLogin.checkPartnerLogin(), location.href = d);
                    break;
                case 2:
                    l = $translate.instant("error.API");
                    break;
                case 3:
                    return 0 == n && (l = $translate.instant("error.noExistOrAccess"), alert(l), n += 1);
                    void(window.location.href = "/");
                case 4:
                    l = $translate.instant("error.unManager");
                    break;
                case 10:
                    l = $translate.instant("error.serverFail");
                    break;
                case 11:
                    l = $translate.instant("error.paramError");
                    break;
                case 12:
                    l = $translate.instant("error.internetOutRange");
                    setTimeout(function () {
                        d = bdp.bdpLogin.checkPartnerLogin(), location.href = d
                    }, 1e3);
                    break;
                case 13:
                    0 == n && (l = $translate.instant("error.haveLogin"), alert(l), n += 1), $.cookie("token", ""), $.cookie("token_invalid", 1, {
                        path: "/"
                    }), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d;
                    break;
                case 14:
                    0 == n && (alert(s.warn_msg), n += 1), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d;
                    break;
                case 15:
                    0 == n && (l = $translate.instant("error.noPermission"), alert(l), n += 1), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d;
                    break;
                case 18:
                    l = $translate.instant("error.noBind"), l = "";
                    break;
                case 19:
                    l = $translate.instant("error.confirmed"), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d, l = "";
                    break;
                case 20:
                    l = "", $.cookie("password_changed", 1, {
                        path: "/"
                    }), d = bdp.bdpLogin.checkPartnerLogin(), window.location.href = d;
                    break;
                case 21:
                    l = $translate.instant("error.noChartOrnoAccess");
                    break;
                case 22:
                    l = $translate.instant("error.dashMetaTooLarge");
                    break;
                case 102:
                    l = $translate.instant("error.datasourceNotExist");
                    break;
                case 103:
                    l = $translate.instant("error.noDelete");
                    break;
                case 104:
                    l = $translate.instant("ds.connectFail");
                    break;
                case 126:
                    l = $translate.instant("error.apiTimesLimit");
                    break;
                case 106:
                    l = $translate.instant("error.saveSuccessAndSync");
                    break;
                case 108:
                    l = $translate.instant("error.fieldRepeat");
                    break;
                case 109:
                    l = $translate.instant("error.apiUsernameExist");
                    break;
                case 110:
                    l = $translate.instant("error.dsRepeat");
                    break;
                case 111:
                    l = $translate.instant("error.captchaSendError");
                    break;
                case 112:
                    l = $translate.instant("error.captchaError");
                    break;
                case 113:
                    l = $translate.instant("error.captchaOutOfLimit");
                    break;
                case 114:
                    l = $translate.instant("error.kstRepeat");
                    break;
                case 115:
                    l = $translate.instant("error.kstError");
                    break;
                case 116:
                    l = $translate.instant("error.jinyiweiConnFail");
                    break;
                case 117:
                    l = $translate.instant("error.loginInfoErrorOrUserLock");
                    break;
                case 118:
                    l = $translate.instant("error.dsConfigError");
                    break;
                case 119:
                    l = $translate.instant("error.loginFrequently");
                    break;
                case 120:
                    l = $translate.instant("error.phoneVerifyFail");
                    break;
                case 121:
                    l = $translate.instant("error.serviceException");
                    break;
                case 122:
                    l = $translate.instant("error.accountFail");
                    break;
                case 124:
                    l = $translate.instant("error.passworkWrong");
                    break;
                case 125:
                    l = $translate.instant("error.usernameWrong");
                    break;
                case 128:
                    l = $translate.instant("ds.baiduTaskExist");
                    break;
                case 129:
                    l = $translate.instant("error.tokenWrong");
                    break;
                case 201:
                    l = $translate.instant("wb.isUpdatingThen");
                    break;
                case 1001:
                    l = $translate.instant("error.userForbidden");
                    break;
                case 1002:
                    l = $translate.instant("error.password");
                    break;
                case 1004:
                    l = $translate.instant("error.noAuthorizationInfo");
                    break;
                case 1009:
                    l = $translate.instant("error.noUser");
                    break;
                case 1012:
                    l = $translate.instant("error.limitNumber");
                    break;
                case 1014:
                    l = "";
                    $.cookie("password_reset", 1, {
                        path: "/"
                    });
                    d = bdp.bdpLogin.checkPartnerLogin();
                    window.location.href = d;
                    break;
                case 1015:
                    l = $translate.instant("error.accountActived");
                    break;
                case 1016:
                    l = $translate.instant("error.accoutLimit");
                    break;
                case 1018:
                    l = $translate.instant("error.codeError");
                    break;
                case 1023:
                    l = $translate.instant("error.mobileExisted");
                    break;
                case 3003:
                    l = $translate.instant("error.noId");
                    break;
                case 3005:
                    l = $translate.instant("error.needCtId");
                    break;
                case 3008:
                    l = $translate.instant("error.needId");
                    break;
                case 3009:
                    l = $translate.instant("error.missId");
                    break;
                case 3011:
                    l = $translate.instant("error.fidId");
                    break;
                case 3204:
                    l = $translate.instant("error.dashboardOccupied");
                    break;
                case 3209:
                    l = $translate.instant("sql.sqlScriptNotBeNull");
                    break;
                case 3210:
                    l = $translate.instant("error.dashboardNotbelong");
                    break;
                case 3211:
                    l = $translate.instant("error.noChart");
                    break;
                case 3212:
                    l = $translate.instant("error.noFolder");
                    break;
                case 3216:
                    l = $translate.instant("error.infoErrorInTable");
                    break;
                case 3219:
                    l = $translate.instant("error.tplNotExist");
                    break;
                case 3220:
                    l = $translate.instant("error.noDashboard");
                    break;
                case 3221:
                    l = $translate.instant("error.noBelong");
                    break;
                case 3222:
                    l = $translate.instant("error.chartsNumMismatch");
                    break;
                case 3223:
                    l = $translate.instant("error.noSelect");
                    break;
                case 3224:
                    l = $translate.instant("error.noLinkage");
                    break;
                case 3231:
                    l = $translate.instant("error.needConfigList");
                    break;
                case 3232:
                    l = $translate.instant("error.infoErrorInTable");
                    break;
                case 7001:
                    l = $translate.instant("error.needFormula");
                    break;
                case 7024:
                    l = $translate.instant("error.stringAbove");
                    break;
                case 7200:
                    l = $translate.instant("error.errorFormula");
                    break;
                case 7300:
                    l = $translate.instant("error.unknow");
                    break;
                case 7400:
                    l = $translate.instant("error.fieldNull");
                    break;
                case 7500:
                    l = $translate.instant("error.fieldRepeat");
                    break;
                case 7590:
                    l = $translate.instant("error.fieldUsing");
                    break;
                case 7601:
                    l = $translate.instant("error.dataNameRepeat");
                    break;
                case 7700:
                    l = $translate.instant("error.errorFormula");
                    break;
                case 8003:
                    l = $translate.instant("error.accoutRepeat");
                    break;
                case 9003:
                    l = $translate.instant("error.info");
                    break;
                case 10004:
                    l = $translate.instant("error.datasourceSyncing");
                    break;
                case 10005:
                    l = $translate.instant("error.dsAmountOutOfLimit");
                    break;
                case 10006:
                    l = s.warn_msg;
                    break;
                case 10007:
                    l = $translate.instant("error.noDelete");
                    break;
                case 10100:
                    l = $translate.instant("error.noDianJingAccess");
                    break;
                case 10115:
                    l = $translate.instant("error.startDateError");
                    break;
                case 10116:
                    l = $translate.instant("error.endDateError");
                    break;
                case 10117:
                    l = $translate.instant("ds.baiduTaskDomainExit");
                    break;
                case 10118:
                    l = $translate.instant("ds.baiduTaskDomainNotExit");
                    break;
                case 10119:
                    l = $translate.instant("ds.baiduTaskCompanyError");
                    break;
                case 10120:
                    l = $translate.instant("ds.baiduTaskDomainError");
                    break;
                case 10121:
                case 10122:
                case 10123:
                    l = s.warn_msg;
                    break;
                case 10124:
                    l = $translate.instant("ds.baiduTaskWeekError");
                    break;
                case 10625:
                case 10626:
                    l = $translate.instant("error.changeFileEncode");
                    break;
                case 12002:
                    l = $translate.instant("error.groupRepeat");
                    break;
                case 12008:
                    l = $translate.instant("error.contactManager");
                    break;
                case 12010:
                    l = $translate.instant("error.noActivateCode");
                    break;
                case 12011:
                    l = $translate.instant("error.errorActivateCode");
                    break;
                case 12111:
                    l = s.warn_msg, setTimeout(function () {
                        $.cookie("token", ""), $.cookie("token_invalid", 1, {
                            path: "/"
                        }), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d
                    }, 1e3);
                    break;
                case 13001:
                    l = $translate.instant("error.noSelectId");
                    break;
                case 13004:
                    l = $translate.instant("error.selectRepeat");
                    break;
                case 16004:
                    l = $translate.instant("error.noPermissionToPreview");
                    break;
                case 16005:
                    l = $translate.instant("error.replacingExcelFailed");
                    break;
                case 16006:
                    l = $translate.instant("error.exceptionInExcel");
                    break;
                case 16007:
                    l = $translate.instant("error.excelNotExist");
                    break;
                case 16008:
                    l = $translate.instant("error.excelIsUpdating");
                    break;
                case 16009:
                    l = $translate.instant("error.deletingExcelFailed");
                    break;
                case 16010:
                    l = $translate.instant("error.excelCanNotBeEmpty");
                    break;
                case 16011:
                    l = $translate.instant("error.appendingExcelFailed");
                    break;
                case 16012:
                    l = $translate.instant("error.fieldsInExcelMismatch");
                    break;
                case 16013:
                    l = $translate.instant("error.sameFieldsWhileAppending");
                    break;
                case 16014:
                    l = $translate.instant("error.fieldsNotInTable");
                    break;
                case 16015:
                    l = $translate.instant("error.sheetNotExist");
                    break;
                case 16016:
                    l = $translate.instant("error.sheetCanNotBeIgnored");
                    break;
                case 16017:
                    l = $translate.instant("error.uploadingExcelFailed");
                    break;
                case 16018:
                case 16019:
                    l = $translate.instant("error.fieldsInExcelMismatch");
                    break;
                case 16025:
                    l = $translate.instant("error.csvEncodeNotSupport");
                    break;
                case 16026:
                    l = $translate.instant("error.changeFileEncode");
                    break;
                case 19001:
                    l = $translate.instant("error.selectRely");
                    break;
                case 19002:
                    l = $translate.instant("wb.noWorksheets");
                    break;
                case 19005:
                    l = "聚类字段名称不能为空";
                    break;
                case 21007:
                    l = $translate.instant("error.dbCannotBeDeleted");
                    break;
                case 22001:
                    l = $translate.instant("error.aggregationsRepeat");
                    break;
                case 22002:
                    l = $translate.instant("error.aggregationsNull");
                    break;
                case 23023:
                    l = $translate.instant("error.accoutExisted");
                    break;
                case 23002:
                    l = $translate.instant("error.captchaError");
                    break;
                case 23003:
                    l = $translate.instant("error.personalAccountNotExist");
                    break;
                case 23008:
                    l = $translate.instant("error.nicknameExisted");
                    break;
                case 23009:
                    l = $translate.instant("error.emailError");
                    break;
                case 23010:
                    l = $translate.instant("error.captchaCounts");
                    break;
                case 23013:
                    l = $translate.instant("error.formatError");
                    break;
                case 23014:
                    l = $translate.instant("error.oneHourLater");
                    break;
                case 23016:
                    l = $translate.instant("error.twentyFourHourLater");
                    break;
                case 23019:
                    l = $translate.instant("error.emailExisted");
                    break;
                case 23020:
                    l = $translate.instant("error.phoneExisted");
                    break;
                case 23023:
                    l = $translate.instant("error.personalUserExisted");
                    break;
                case 23030:
                    l = $translate.instant("error.sensitiveWord");
                    break;
                case 24006:
                    l = $translate.instant("error.accoutAccessLimit");
                    break;
                case 24007:
                    l = $translate.instant("error.chartUnremove");
                    break;
                case 24008:
                    l = $translate.instant("error.userLimit");
                    break;
                case 24009:
                    l = $translate.instant("error.haveDeleted");
                    break;
                case 24010:
                    l = $translate.instant("error.haveRule");
                    break;
                case 24011:
                    l = $translate.instant("error.haveChart");
                    break;
                case 24012:
                    l = $translate.instant("error.removeAccess");
                    break;
                case 25001:
                    l = $translate.instant("error.folderExisted");
                    break;
                case 25004:
                    l = $translate.instant("wb.cannotMoveToSubFolder");
                    break;
                case 25005:
                    l = $translate.instant("wb.cannotMoveTwoLevelsToSubFolder");
                    break;
                case 26003:
                    l = $translate.instant("error.nameExisted");
                    break;
                case 26007:
                    l = $translate.instant("error.exceedTasks");
                    break;
                case 26008:
                    l = "分享表暂不支持聚类模型";
                    break;
                case 29e3:
                    l = s.warn_msg;
                    break;
                case 3e4:
                    l = $translate.instant("error.tableDoesNotExist");
                    break;
                case 30001:
                    l = $translate.instant("error.tableIsBeingUsed");
                    break;
                case 30003:
                    l = s.warn_msg;
                    break;
                case 30004:
                    l = $translate.instant("error.tableMustBeBasetable");
                    break;
                case 30005:
                    l = "[" + s.warn_msg + "] " + $translate.instant("wb.transform.realtimeTableCantJoin");
                    break;
                case 30007:
                    l = $translate.instant("error.fieldsInExcelMismatch");
                    break;
                case 30009:
                    l = $translate.instant("error.sameTitleExistInExcel");
                    break;
                case 31e3:
                    l = $translate.instant("error.existRely");
                    break;
                case 31005:
                case 31006:
                    l = s.warn_msg;
                    break;
                case 31007:
                    l = $translate.instant("error.viewGeneratorRuleNotExist");
                    break;
                case 31008:
                    l = $translate.instant("error.canNotModifyThisViewType");
                    break;
                case 31009:
                    l = $translate.instant("error.viewGeneratorTypeNotExist");
                    break;
                case 32001:
                    l = $translate.instant("error.openDsTokenError");
                    break;
                case 32002:
                    l = $translate.instant("error.ipNotInWhiteList");
                    break;
                case 40001:
                    l = $translate.instant("error.noPermissionToDelete");
                    break;
                case 40002:
                    var u = "";
                    l = $translate.instant("error.fieldRepeat") + u;
                    break;
                case 40005:
                    l = s.warn_msg;
                    break;
                case 40007:
                    l = $translate.instant("error.dataTooLong");
                    break;
                case 40008:
                    l = $translate.instant("error.changeToAggregatorFunc");
                    break;
                case 40009:
                    l = $translate.instant("error.titleHasInvalidCharacter");
                    break;
                case 40010:
                    l = $translate.instant("error.contentHasInvalidCharacter");
                    break;
                case 40011:
                    l = $translate.instant("error.functionNeedBrackets");
                    break;
                case 40012:
                    l = $translate.instant("error.mapCanNotBeEmpty");
                    break;
                case 41001:
                    l = $translate.instant("error.LdapTokenIsError");
                    break;
                case 41002:
                    l = $translate.instant("error.LdapTokenIsDestroyed");
                    break;
                case 41003:
                    l = $translate.instant("error.LdapUserNotExist");
                    break;
                case 70001:
                    l = $translate.instant("ds.auxiliaryFieldHasExist");
                    break;
                case 70002:
                    l = $translate.instant("error.fieldNameUsing");
                    break;
                case 81001:
                    var u = "";
                    s.warn_msg && (u = "：" + s.warn_msg), l = $translate.instant("error.illegalFilter") + u;
                    break;
                case 81002:
                    var u = "";
                    s.warn_msg && (u = "：" + s.warn_msg), l = $translate.instant("error.illegalSortField") + u;
                    break;
                case 9e4:
                    l = $translate.instant("error.partitionExceed");
                    break;
                case 90001:
                    l = $translate.instant("error.partitionNotEnough");
                    break;
                case 90002:
                    l = $translate.instant("error.intermediateTableNoPartition");
                    break;
                case 90003:
                    l = $translate.instant("error.unionTableNoPartition");
                    break;
                case 90006:
                    l = $translate.instant("error.childTbBeingCreated");
                    break;
                case 90100:
                    s.result && s.result.map && (l = s.result.map(function (e) {
                        return e.name
                    }).join()), l = $translate.instant("chartTemplate.tplUnusable") + "[" + l + "]";
                    break;
                case 90007:
                    l = $translate.instant("error.tableTypeNotSupportOpt");
                    break;
                case 90008:
                    l = $translate.instant("error.updateModeNotChanged");
                    break;
                case 90009:
                    l = $translate.instant("error.canNotChangeToRealTimeUpdateMode");
                    break;
                case 90010:
                    l = $translate.instant("error.canNotSetPartitionField");
                    break;
                case 90011:
                    l = $translate.instant("error.canNotMergeThisTable");
                    break;
                case 90012:
                    l = $translate.instant("error.updatedSoFrequentlyPleaseWait");
                    break;
                case 100001:
                    l = $translate.instant("error.failedGetOperatorInfo");
                    break;
                case 100002:
                    l = $translate.instant("error.authorizationExpired");
                    break;
                case 100003:
                    l = $translate.instant("error.authorizationRecordNotExist");
                    break;
                case 100004:
                    l = $translate.instant("error.failedAddOperator");
                    break;
                case 100005:
                    l = $translate.instant("error.failedCreateAuthorization");
                    break;
                case 100006:
                    l = $translate.instant("error.failedUpdateLdapToken");
                    break;
                case 100007:
                    l = $translate.instant("error.failedCreateLdapToken");
                    break;
                case 100008:
                    l = $translate.instant("error.failedDeleteLdapToken");
                    break;
                case 110001:
                    l = $translate.instant("error.mobileOSorVersionRequired");
                    break;
                case 110002:
                    l = $translate.instant("error.unknownMobileOS");
                    break;
                case 110003:
                    l = $translate.instant("error.mobileVersionFormatError");
                    break;
                case 120001:
                    l = $translate.instant("error.srcDashIdRequiredWhenMovingChart");
                    break;
                case 120002:
                    l = $translate.instant("error.targetDashIdRequiredWhenMovingChart");
                    break;
                case 120003:
                    l = $translate.instant("error.dashFolderIdRequiredWhenMovingChart");
                    break;
                case 120004:
                    l = $translate.instant("error.forbiddenMovingChart");
                    break;
                case 120005:
                    l = $translate.instant("error.movedChartExist");
                    break;
                default:
                    l = s && s.warn_msg ? s.warn_msg : "en" == c ? "Something Wrong~" : "出错啦", p = !0
            }
        }
        return s.dialog ? e.global.dialog_hint = l : 1 == Number(l) && 20 == Number(l) && 1014 == Number(l) || (e.global.hint = l), s.always_show || (r && (t.cancel(r.$$timeoutId), r = null), r = t(function () {
            e.global.dialog_hint = "", e.global.hint = ""
        }, s.delay_time || 5e3)), p
    }
}


//"$rootScope", "$http", "errHint"
function tbList($rootScope, $http, errHint) {
    return function () {
        $http.get("/api/tb/list", {
            params: {
                access_token: $.cookie("token")
            }
        }).success(function (t) {
            if (0 == t.status) t.result ? $rootScope.tbList = t.result.self : $rootScope.tbList = [];
            else {
                var i = parseInt(t.status);
                errHint(i)
            }
        })
    }
}

//"formulaKeyMap"
function formatFieldPercentile(formulaKeyMap) {
    return function (e) {
        if (!e)
            return e;
        if ("PERCENT" != e.aggregator)
            return e.percent = "", e;
        var t = new RegExp("^(\\d|[1-9]\\d|100)$");
        if ("中位数" == e.aggregator_name || "Median" == e.aggregator_name) {
            e.aggregator = "MED";
            e.percent = "0.5";
        }
        else if (t.test(parseInt(e.aggregator_name))) {
            var a = parseInt(e.aggregator_name);
            e.aggregator = "PERCENT_" + a;
            e.percent = String(a / 100)
        }
        return e
    }
}

//设置高级聚合运算器名称
//"formulaKeyMap"
function setAdvanceAggregatorName(formulaKeyMap) {
    function t(e) {
        var t = bdpChart.language || "zh",
            a = "";
        if (e.hasOwnProperty("yoyQoqType")) {
            var i = e.yoyQoqType;
            e.hasOwnProperty("YoY") && "rate" == i && function (e) {
                switch (e) {
                    case "year":
                        a = "zh" == t ? "去年同比率" : "Compare to last year(rate)";
                        break;
                    case "quarter":
                        a = "zh" == t ? "上季同比率" : "Compare to last quarter(rate)";
                        break;
                    case "month":
                        a = "zh" == t ? "上月同比率" : "Compare to last month(rate)";
                        break;
                    case "week":
                        a = "zh" == t ? "上周同比率" : "Compare to last week(rate)";
                        break;
                    case "day":
                        a = "zh" == t ? "上日同比率" : "Compare to last day(rate)"
                }
            }(e.YoY), e.hasOwnProperty("YoY") && "value" == i && function (e) {
                switch (e) {
                    case "year":
                        a = "zh" == t ? "去年同比值" : "Compare to last year(value)";
                        break;
                    case "quarter":
                        a = "zh" == t ? "上季同比值" : "Compare to last quarter(value)";
                        break;
                    case "month":
                        a = "zh" == t ? "上月同比值" : "Compare to last month(value)";
                        break;
                    case "week":
                        a = "zh" == t ? "上周同比值" : "Compare to last week(value)";
                        break;
                    case "day":
                        a = "zh" == t ? "上日同比值" : "Compare to last day(value)"
                }
            }(e.YoY), e.hasOwnProperty("QoQ") && function (e) {
                switch (e) {
                    case "rate":
                        a = "zh" == t ? "环比增长率" : "Day on Day(rate)";
                        break;
                    case "value":
                        a = "zh" == t ? "环比增长值" : "Day on Day(value)"
                }
            }(i)
        }
        if (e.hasOwnProperty("yoyQoqSetting")) {
            var n = e.yoyQoqSetting;
            "qoq" == n.type ? function (e) {
                switch (e) {
                    case "year":
                        a = "zh" == t ? "按年环比增长" : "Year on Year";
                        break;
                    case "quarter":
                        a = "zh" == t ? "按季环比增长" : "Quarter on Quarter";
                        break;
                    case "month":
                        a = "zh" == t ? "按月环比增长" : "Month on Month";
                        break;
                    case "week":
                        a = "zh" == t ? "按周环比增长" : "Week on Week";
                        break;
                    case "day":
                        a = "zh" == t ? "按日环比增长" : "Day on Day"
                }
            }(n.date_field_type) : "filter" == n.type ? function (e) {
                if (1 == e.aggregator || 2 == e.aggregator) {
                    if (0 == e.compare_method) "filter_yoy_month" == e.filter_type ? a = "zh" == t ? "同比上月增长值" : "Compare to last month year on year increase value" : "filter_yoy_year" == e.filter_type ? a = "zh" == t ? "同比去年增长值" : "Compare to last year year on year increase value" : "filter_yoy_week" == e.filter_type && (a = "zh" == t ? "同比上周增长值" : "Compare to last week year on year increase value");
                    else if (1 == e.compare_method) a = "zh" == t ? "环比增长值" : "Month on month increase value";
                    else if (2 == e.compare_method)
                        if ("zh" == t) {
                            switch (a = "对比" + (0 == e.relative_type ? "前移" : "后移") + e.relative_value, e.date_field_type) {
                                case "year":
                                    a += "年";
                                    break;
                                case "quarter":
                                    a += "季";
                                    break;
                                case "month":
                                    a += "月";
                                    break;
                                case "week":
                                    a += "周";
                                    break;
                                case "day":
                                    a += "天"
                            }
                            a += "增长值"
                        } else a = "Compare to " + (0 == e.relative_type ? "Move forward " : "Backward shift ") + e.relative_value + " " + e.date_field_type;
                    else 3 == e.compare_method && (a = "zh" == t ? "对比自定义日期增长值" : "Compare custom date increase value");
                    2 == e.aggregator && (a = a.replace(/值/g, "率").replace(/value/gi, "rate"))
                } else if (3 == e.aggregator)
                    if (0 == e.compare_method) "filter_yoy_month" == e.filter_type ? a = "zh" == t ? "上月同期值" : "Last month same period value" : "filter_yoy_year" == e.filter_type ? a = "zh" == t ? "去年同期值" : "Last year same period value" : "filter_yoy_week" == e.filter_type && (a = "zh" == t ? "上周同期值" : "Last week same period value");
                    else if (1 == e.compare_method) a = "zh" == t ? "环比对比日期值" : "Month on month compare date value";
                    else if (2 == e.compare_method)
                        if ("zh" == t) {
                            switch (a = (0 == e.relative_type ? "前移 " : "后移 ") + e.relative_value, e.date_field_type) {
                                case "year":
                                    a += "年";
                                    break;
                                case "quarter":
                                    a += "季";
                                    break;
                                case "month":
                                    a += "月";
                                    break;
                                case "week":
                                    a += "周";
                                    break;
                                case "day":
                                    a += "天"
                            }
                            a += "值"
                        } else a = (0 == e.relative_type ? "Move forward" : "Backward shift") + e.relative_value + e.date_field_type;
                    else 3 == e.compare_method && (a = "zh" == t ? "自定义日期值" : "Custom date value")
            }(n) : function (e) {
                switch (e) {
                    case "yoy_week":
                        a = "zh" == t ? "上周同比" : "Compare to last week";
                        break;
                    case "yoy_month":
                        a = "zh" == t ? "上月同比" : "Compare to last month";
                        break;
                    case "yoy_quarter":
                        a = "zh" == t ? "上季同比" : "Compare to last quarter";
                        break;
                    case "yoy_year":
                        a = "zh" == t ? "去年同比" : "Compare to last year";
                        break;
                    case "custom":
                    case "nodate_custom":
                        a = "zh" == t ? "自定义对比" : "Custom Comparison"
                }
            }(n.type)
        }
        return a
    }

    function a(e) {
        var t = bdpChart.language || "zh",
            a = "1",
            i = "";
        if (e.hasOwnProperty("advance_aggregator")) {
            var n = e.advance_aggregator.type;
            "percentage" == n ? (i = "zh" == t ? "百分比" : "Percentage", a = "1") : "retention" == n ? (i = "zh" == t ? "留存率" : "Retention", a = "0") : "activity" == n ? (i = "zh" == t ? "活跃率" : "Active Rate", a = "0") : "repetition" == n ? (i = "zh" == t ? "重复率" : "Repetition", a = "0") : "running" == n ? (i = "zh" == t ? "累计计算" : "Cumulative Calculation", a = "1") : "moving" == n && (i = "zh" == t ? "移动计算" : "Moving Calculation", a = "1")
        }
        var r = [];
        return r.push(a), r.push(i), r
    }
    return function (obj, n) {
        var r = bdpChart.language || "zh",
            o = "",
            s = "",
            l = "",
            d = [];
        if (obj.hasOwnProperty("aggregator")) {
            if (o = formulaKeyMap[obj.aggregator], Number(obj.aggregator_name) <= 100 && Number(obj.aggregator_name) > 0){
                if ("zh" == r)
                    o = "百分位" + parseInt(obj.aggregator_name);
                else {
                    var c = "";
                    c = parseInt(obj.aggregator_name) % 10 == 1 && 11 != parseInt(obj.aggregator_name) ? "st percentile" : parseInt(obj.aggregator_name) % 10 == 2 && 12 != parseInt(obj.aggregator_name) ? "nd percentile" : parseInt(obj.aggregator_name) % 10 == 3 && 13 != parseInt(obj.aggregator_name) ? "rd percentile" : "th percentile", o = parseInt(obj.aggregator_name) + c
                }
            }
            1 == obj.is_build_aggregated && (o = "")
        }
        obj.hasOwnProperty("advance_aggregator") && (d = a(i), s = d[1], "0" == d[0] && (o = ""));
        var p = t(i);
        return p && (s = p), n ? l = s : o ? (l += "(" + o, s && (l += " - " + s), l += ")") : s && (l += "(", l += s, l += ")"), l
    }
}

//"$rootScope", "commonService"
function getFunctionList(e, commonService) {
    var a = {
        base: [],
        all: []
    };
    commonService.getFunctionList().then(function (t) {
        if (0 == t.status) {
            var i = t.result.classification,
                n = {};
            angular.forEach(i, function (e, t) {
                n[t] = [], angular.forEach(i[t], function (e, a) {
                    n[t].push({
                        usage: e.usage,
                        description: e.desc,
                        example: e.demo,
                        type: e.name
                    })
                })
            }), a.base = n[2].concat(n[3]).concat(n[4]).concat(n[5]).concat(n[6]), e.global.funcList = a
        }
    })
}

//"$http", "$rootScope", "errHint", "pendingRequests", "$q"
function commonHttp(e, t, a, i, n) {
    function r(e, a) {
        return o = {}, o._t = (new Date).getTime(), t.wsId && (o.ws_id = t.wsId), angular.extend(o, e), s.errHint = !0, a ? angular.extend(s, a) : a = {}, o
    }
    var o = {},
        s = {
            errHint: !0
        },
        l = function (e) {
            if (e = e.data, "0" == e.status) return e;
            if (s.errHint) {
                var t = parseInt(e.status),
                    i = null;
                e.errstr && (i = {
                    warn_msg: e.errstr,
                    result: e.result
                }), a(t || e.errstr, i)
            }
            return e
        },
        d = ["/api/warn/amount"];
    return {
        get: function (t, a, s) {
            var c = n.defer();
            o = r(a, s), $.inArray(t, d) < 0 && i.add({
                url: t,
                canceller: c
            });
            var p = e.get(t, {
                params: o,
                timeout: c.promise
            }).then(l);
            return p.finally(function () {
                i.remove(t)
            }), p.success = function (e) {
                p.then(e)
            }, p.error = function (e) {
                p.then(null, e)
            }, p
        },
        post: function (t, a, i) {
            o = r(a, i);
            var s = n.when(e.post(t, o), l);
            return s.success = function (e) {
                s.then(e)
            }, s.error = function (e) {
                s.then(null, e)
            }, s
        }
    }
}

function webSocket() {
    function e() {
        return !n && s > 0
    }
    var t = {},
        a = null,
        i = null,
        n = !1,
        r = location.protocol,
        o = "https:" == r ? 30 : 0,
        s = o,
        l = 0,
        d = 0;
    if (!SockJS) throw "Please add socketjs to your app.";
    return t.connect = function (i, c) {
        c = c || {};
        var p = ["opened", "received", "closed"],
            u = $.cookie("token");
        return /^http(s)?:\/\//.test(i) || (i = r + "//" + location.host + i), a = new SockJS(i + "?token=" + u), a.onopen = function () {
            c.onOpen && c.onOpen({
                status: p[0]
            })
        }, a.onmessage = function (e) {
            var t = "string" == typeof e.data ? $.parseJSON(e.data) : e.data;
            if (0 == t.state && (n = !0, s < 30 && window._BDP_TIME_LOGGER && BDPLogger.log("feStatistics", {
                    category: "websocket",
                    action: "reconnect",
                    opt_label: "onsuccess",
                    opt_value: 1
                }), s = o, l > 0 && BDPLogger.log("feStatistics", {
                    category: "websocket",
                    action: "reconnectSuc",
                    opt_label: l,
                    opt_value: 1
                }), l++), 0 == t.state) {
                if (!c.onMessage) throw "Please give the func of onMessage.";
                c.onMessage({
                    status: p[1],
                    data: t
                })
            }
        }, a.onclose = function (r) {
            new Date;
            n = !1, d != l && (d = l, BDPLogger.log("feStatistics", {
                category: "websocket",
                action: "reconnectSucClose",
                opt_label: l,
                opt_value: 1
            })), window._BDP_TIME_LOGGER && (BDPLogger.log("feStatistics", {
                category: "websocket",
                action: "connect",
                opt_label: "onerror",
                opt_value: 1
            }), 0 == s && (BDPLogger.log("feStatistics", {
                category: "websocket",
                action: "reconnect",
                opt_label: "onfail",
                opt_value: 1
            }), BDPLogger.log("webSocket30FailMsg", {
                token: u
            }), 0 == l && BDPLogger.log("feStatistics", {
                category: "websocket",
                action: "reconnectFirst",
                opt_label: "onfail",
                opt_value: 1
            }))), e() && t.reConnect(i, c), c.onClose && (c.onClose({
                status: p[2]
            }), a = null)
        }, t
    },
        t.reConnect = function (e, a) {
            t.disconnect(), i = setTimeout(function () {
                t.connect(e, a), s--
            }, 2e3)
        },
        t.disconnect = function () {
            null != a && (a.close(), a = null), clearTimeout(i), n = !1
        },
        t.send = function (e) {
            a && a.send(e)
        },
        t.socket = a,
        t
}

//"$timeout"
function autoRefreshChart(e) {
    var t = {};
    return t.visibilityChartOptions = [], t.refresh = function (e) {
        var a = ["data-ctid", "data-scrolling", "data-drill-status"],
            i = e.drawChartUrl,
            n = e.type || "dashboard",
            r = e.scope,
            o = e.ret,
            s = "string" == typeof o.data ? $.parseJSON(o.data) : o.data,
            l = (o.status, o._t),
            d = null;
        if (!r) throw "Please give param scope.";
        if (!r.dashEditMode && !r.autoPlaying && i && (d = s.ct_id || [], d.length)) {
            for (var c in r.draw_chart_url) {
                var p = r.draw_chart_url[c].options.ct_id;
                if ($.inArray(p, d) > -1) {
                    var u = $("[" + a[0] + "=" + p + "]"),
                        h = u.attr(a[1]),
                        f = u.attr(a[2]),
                        g = h && "true" == h,
                        m = f && "true" == f;
                    if (g || m) continue;
                    if (u.attr("data-from-websocket", "1"), window.BDP_visibilityChangeFlag && (u.attr("data-page-active", window.BDP_visibilityChangePageActive), !window.BDP_visibilityChangePageActive)) {
                        "dashboard" == n ? t.visibilityChartOptions.push(i[c].options) : t.visibilityChartOptions.push(i.options);
                        continue
                    }
                    "dashboard" == n ? i[c].options._t = l : i.options._t = l, r.draw_chart_url[c].options.read_cache = !1
                }
            }
            r.$$phase || r.$digest()
        }
    },
        t.refreshWaitChart = function () {
            var a = ["data-ctid", "data-scrolling", "data-drill-status"];
            t.visibilityChartOptions.length > 0 && e(function () {
                for (var e = new Date, i = 0, n = t.visibilityChartOptions.length; i < n; i++) {
                    $("[" + a[0] + "=" + t.visibilityChartOptions[i].ct_id + "]").attr("data-from-websocket", 2), t.visibilityChartOptions[i] && (t.visibilityChartOptions[i]._t = e)
                }
                t.visibilityChartOptions = []
            }, 0)
        },
        t
}

//"$rootScope", "$translate"
function modelAlgoList(e, t) {
    function a() {
        t(i).then(function (e) {
            n.forEach(function (t) {
                t.name = e["model." + t.transName]
            })
        })
    }
    var i = ["model.modelAlgo1", "model.modelAlgo2"],
        n = [{
            name: "多元线性回归",
            type: 1,
            transName: "modelAlgo1"
        }, {
            name: "聚类",
            type: 2,
            transName: "modelAlgo2"
        }];
    return a(), e.$on("$translateChangeSuccess", a), n
}

//"$rootScope", "commonHttp", "errHint", "ngDialog"
function dashChartLink(e, t, a, i) {
    function n(n) {
        return {
            checkSupport: function (e) {
                var t = 0,
                    a = [];
                return n.dashStandardItems.forEach(function (e) {
                    var i = e.children[0].meta.type;
                    i && ["C101", "C102", "C103", "C104", "C105"].indexOf(i) > -1 || a.push(e), t = a.length > 1
                }), !("C261 C290 C300 C310 C320 C330 C340 C400 C360 C370 C500".indexOf(e.type) > -1 || !t || e.chart_jump && "1" == e.chart_jump.can_jump || e && e.level_fields && e.level_fields.length > 1)
            },
            chart_table_map: {},
            table_chart_map: {},
            allChecked: !1,
            get_table_list: function (a, i) {
                t.post("/api/chart_link/info", {
                    ct_id: a
                }).then(function (t) {
                    "0" == t.status ? i(t.result) : e.pageLoading = !1
                })
            },
            init_chart_table_map: function () {
                var e;
                angular.forEach(n.dashStandardItems, function (t, a) {
                    e = t.children[0].meta, n.chartChain.chart_table_map[e.ct_id] = e.tb_id
                })
            },
            open: function (t) {
                if (!n.chartChain.checkSupport(t)) return !1;
                e.pageLoading = !0, n.chartChain.init_chart_table_map();
                var a = function (a) {
                    e.pageLoading = !1;
                    var r = a,
                        o = [],
                        s = {},
                        l = [],
                        d = null,
                        c = function (e) {
                            var t = {
                                linkCtIdList: [],
                                linkTbIdList: []
                            };
                            if (!$.isArray(e)) return t;
                            for (var a = 0, i = e.length; a < i; a++) t.linkCtIdList.push(e[a].link_ct_id), t.linkTbIdList.push(e[a].link_tb_id);
                            return t
                        }(r.link_info),
                        p = c.linkCtIdList || {},
                        u = c.linkTbIdList || {};
                    angular.forEach(n.dashStandardItems, function (e, a) {
                        s = e.children[0].meta, s.type && s.ct_id !== t.ct_id && ["C101", "C102", "C103", "C104", "C105"].indexOf(s.type) < 0 && o.push({
                            name: s.name,
                            ct_id: s.ct_id,
                            tb_id: s.tb_id,
                            unsupported: ["C400", "C500"].indexOf(s.type) > -1,
                            selected: $.inArray(s.ct_id, p) > -1,
                            isMainChart: s.chart_link && 2 == s.chart_link.linked_chart_type
                        })
                    }), angular.forEach(r.tb_list, function (e, a) {
                        l.push({
                            show: $.inArray(e.tb_id, u) > -1,
                            name: e.name,
                            fields: e.fields,
                            tb_id: e.tb_id,
                            selected: []
                        }), t.tb_id == e.tb_id && (d = {
                            name: e.name,
                            fields: e.fields,
                            tb_id: e.tb_id,
                            selected: $.inArray(e.tb_id, u) > -1
                        })
                    });
                    for (var h = null, f = !1, g = 0; g < t.x.length; g++) {
                        var m = t.x[g],
                            _ = m.fid,
                            v = !1,
                            b = [];
                        angular.forEach(l, function (e, t) {
                            var a, i = e.tb_id;
                            angular.forEach(r.link_info, function (t) {
                                t.link_tb_id == i && (e.ct_id = t.link_ct_id, angular.forEach(t.field_map, function (e, t) {
                                    e.field == _ && g == e.index && (a = e.link_field, v = !0)
                                }))
                            }), b.push({
                                tbId: i,
                                linkFieldId: a,
                                curTable: e,
                                index: g,
                                fid: _
                            })
                        }), t.x[g].selectedTable = b, v ? (m.selected = !0, null === h && (h = g), f = !0) : m.selected = !1
                    }
                    f ? t.x[h] && (t.x[h].isCur = !0) : (t.x[0].isCur = !0, t.x[0].selected = !0), angular.forEach(t.x, function (e, t) {
                        1 == e.isCur && t > h && (e.isCur = !1)
                    }), $.inArray(t.type, ["C210", "C211", "C212", "C220", "C240", "C241", "C242"]) > -1 && 2 == t.x.length ? t.chartLinkType = "doubleDms" : "C200" == t.type ? t.chartLinkType = "manyDms" : t.chartLinkType = "oneDms", n.chartChain.changeCheckedAll(o), i.open({
                        template: "/static/partials/chart-chain.html",
                        className: "ngdialog-theme-default str-filter-model chart-chain-modal",
                        data: {
                            main_chart: t,
                            charts: o,
                            main_table: d,
                            tables: l
                        },
                        scope: n
                    })
                };
                n.chartChain.get_table_list(t.ct_id, a)
            },
            update_status: function (e, t) {
                var a = t.charts,
                    i = t.tables,
                    r = n.chartChain.chart_table_map[e.ct_id],
                    o = function (e) {
                        for (var t = 0; t < i.length; t++)
                            if (r === i[t].tb_id) return i[t].show = e, !1
                    };
                if (n.chartChain.changeCheckedAll(t.charts), e.selected) o(!0);
                else
                    for (var s = 0; s < a.length; s++)
                        if (o(!1), r === a[s].tb_id && a[s].selected) return o(!0), !1
            },
            changeCheckedAll: function (e) {
                var t = 0,
                    a = 0;
                angular.forEach(e, function (e) {
                    e.unsupported || t++, e.selected && a++
                }), n.chartChain.allChecked = t == a
            },
            checkAllCharts: function (e, t) {
                n.chartChain.allChecked = e, angular.forEach(t.charts, function (a) {
                    a.unsupported || (a.selected = e, n.chartChain.update_status(a, t))
                })
            },
            selectDms: function (e, t, a) {
                angular.forEach(t.x, function (e, t) {
                    e.isCur = t == a
                })
            },
            save: function (r) {
                var o = !0,
                    s = [],
                    l = [],
                    d = "manyDms" == r.main_chart.chartLinkType,
                    c = "doubleDms" == r.main_chart.chartLinkType;
                angular.forEach(r.charts, function (e, t) {
                    e.selected && s.push(e.ct_id)
                }), 0 === s.length && (a(n.tips["chart.chainChart"]), o = !1), $.each(r.main_chart.x, function (e, t) {
                    var i = t.fid;
                    if (t.selected && (main_chart = !0), $.each(r.charts, function (s, p) {
                            if (p.selected) {
                                var u, h, f, g = p.tb_id,
                                    m = p.ct_id,
                                    _ = !1;
                                return angular.forEach(t.selectedTable, function (e) {
                                    e.tbId && e.curTable.tb_id == g ? u = e.linkFieldId : g == r.main_table.tb_id && (u = i)
                                }), !u && g == r.main_chart.tb_id && (c || !c && t.selected) && (u = i), u && (u = u.split("_")[0], h = {
                                    field: i,
                                    index: e,
                                    link_field: u
                                }), $.each(l, function (e, t) {
                                    if (t.link_ct_id == m) return _ = !0, f = e, !1
                                }), !u || d && !t.selected || (_ ? l[f].field_map.push(h) : l.push({
                                    link_ct_id: m,
                                    link_tb_id: g,
                                    field_map: [h]
                                })), !u && t.selected || "doubleDms" == r.main_chart.chartLinkType && !u ? (o = !1, void a(n.tips["chart.chainField"])) : void 0
                            }
                        }), "oneDms" == r.main_chart.chartLinkType) return !1
                }), o && t.post("/api/chart_link/commit", {
                    ct_id: r.main_chart.ct_id,
                    link_info: angular.toJson(l)
                }).then(function (t) {
                    a(n.tips.saveSuccess), n.getDashboardInfo(n.dashSelected), i.closeAll(), e.mainChartIdContainer = [], e.mainChartContainer = []
                })
            },
            del: function (r, o) {
                r.stopPropagation(), t.post("/api/chart_link/delete", {
                    ct_id: o
                }).then(function (t) {
                    a(n.tips.delChartLinkSuccess);
                    var r = $.inArray(o, e.mainChartIdContainer);
                    angular.forEach(e.mainChartContainer, function (t, a) {
                        t.ctId == o && e.mainChartContainer.splice(a, 1)
                    }), e.mainChartIdContainer.splice(r, 1), n.getDashboardInfo(n.dashSelected), i.closeAll()
                })
            }
        }
    }
    return n
}

//"$timeout"
function orgTreeHandleService(e) {
    function t() {
        g = "", b = [], y = [], w = [], C = [], x = {}, v = {}, m = 0, _ = 0
    }

    function a(e) {
        k[e.group_id] = {
            usable: e.usable,
            group_level: e.group_level
        }
    }

    function i(e) {
        var t = 0;
        t = 0 == e.group_level ? 16 : f * e.group_level + 16, e.calcStyle = {
            "padding-left": t + "px"
        }, e.group_list = e.group_list ? e.group_list : [], _ = e.nodeCollapse && _ == e.group_level && e.group_list.length ? ++_ : _, m = Math.max(m, e.group_level)
    }

    function n(e, t) {
        v[g].push({
            self_id: e.group_id,
            self_name: e.group_name,
            parent_id: t ? t.group_id : "",
            parent_name: t ? t.group_name : ""
        })
    }

    function r(e) {
        if (e) {
            b.push(e), n(e), a(e);
            for (var t = null; 0 !== b.length;) t = b.shift(), angular.forEach(t.group_list, function (e) {
                b.push(e), n(e, t), a(t)
            })
        }
    }

    function o(e) {
        if (e) {
            b.push(e);
            for (var t = null; 0 !== b.length;) t = b.shift(), i(t), angular.forEach(t.group_list, function (e) {
                b.push(e)
            })
        }
    }

    function s(e, t) {
        e && (y.push(e), w.push(e.group_id), C.push(e.group_name), e.items && 0 != e.items.length || t && t(), x[e.group_id] = {
            id: angular.copy(w),
            name: angular.copy(C)
        }, angular.forEach(e.group_list, function (e) {
            s(e, t)
        }), y.pop(), w.pop(), C.pop())
    }

    function l() {
        return {
            flatLevelTreeMap: v,
            allNodePathQueue: x,
            nodeConfigMap: k
        }
    }

    function d(t, a, i) {
        if (_ = 0, angular.forEach(t, function (e) {
                g = e.group_id, o(e)
            }), i) {
            var n = a,
                r = _ - 1 < 0 ? 0 : _ - 1;
            e(function () {
                var e = i + f * r;
                n.width(Math.max(i, e))
            }, 10)
        }
    }

    function c(e) {
        t(), angular.forEach(e, function (e) {
            g = e.group_id, v[e.group_id] = [], r(e), s(e)
        })
    }

    function p(e) {
        var t = {},
            a = l().flatLevelTreeMap,
            i = !1;
        for (var n in a) {
            var r = a[n];
            if (!i)
                for (var o = 0, s = r.length; o < s; o++)
                    if (r[o].self_id == e) {
                        t = r[o], i = !0;
                        break
                    }
        }
        return t
    }

    function u(e, t, a) {
        function i(t) {
            r.indexOf(t.group_id) >= 0 && (t.nodeCollapse = !0), t.group_id == e && (t.nodeCollapse = !1, t.checked = a && a[t.group_id] ? a[t.group_id] : t.checked), angular.forEach(t.group_list, function (e) {
                i(e)
            })
        }
        var n = l().allNodePathQueue,
            r = n[e] && n[e].id || [];
        angular.forEach(t, function (e) {
            i(e)
        })
    }

    function h() {
        t()
    }
    var f = 24,
        g = "",
        m = 0,
        _ = 0,
        v = {},
        b = [],
        y = [],
        w = [],
        C = [],
        x = {},
        k = {};
    return {
        formatTreeConstructor: c,
        getOrgTreeLevelInfo: l,
        calcTreeNodeStyle: d,
        findNodeInfoById: p,
        setNodeCollapseStatus: u,
        clearTreeData: h
    }
}

//"$rootScope", "ngDialog", "commonService", "multipleProService", "errHint", "$state", "multipleProService"
function dashChartJump(e, t, a, i, n, r, i) {
    function o(o) {
        var s = {
            checkSupport: function (e) {
                return !("C261 C290 C300 C310 C320 C330 C340 C400 C360 C370 C500".indexOf(e.type) > -1 && 0 == e.ct_type || e && e.level_fields && e.level_fields.length > 1 || e && e.chart_link && 1 * e.chart_link.linked_chart_type == 2)
            },
            getData: function (t, i) {
                var n = r.params.dashId,
                    o = {
                        ct_id: t,
                        dsh_id: n
                    };
                [0, 2].indexOf(e.dashCategory) >= 0 && (o.categories = angular.toJson([0, 2])), a.ds.getJumpInfo(o).then(function (t) {
                    "0" == t.status ? i(t.result) : e.pageLoading = !1
                })
            },
            getChartFields: function (e) {
                var t = ["C210", "C211", "C212", "C220", "C240", "C241", "C242"],
                    a = null;
                if ("C200" === e.type) {
                    a = e.x.slice(0);
                    for (var i = 0, n = a.length; i < n; i++) {
                        var r = a[i];
                        r.name = r.nick_name || r.name, r.fIndex = i
                    }
                    return {
                        fields: a,
                        type: "arr"
                    }
                }
                return a = $.inArray(e.type, t) > -1 && 2 == e.x.length ? e.x[1] : e.x[0], a.name = a.nick_name || a.name, {
                    fields: a,
                    type: "str"
                }
            },
            getInitFieldId: function (e, t) {
                var a = "arr" == t.type ? t.fields[0] : t.fields;
                return e.fid || a.fid
            },
            getInitFieldObj: function (e, t) {
                var a = t.fields;
                if ("arr" == t.type) {
                    for (var i = null, n = 0, r = a.length; n < r; n++) {
                        var o = a[n];
                        if (o.fid == e.fid && "f_index" in e && e.f_index == o.fIndex) {
                            i = o;
                            break
                        }
                    }
                    return i || a[0] || {}
                }
                return a
            },
            getInitMode: function (e) {
                return e.is_blank ? 1 : 0
            },
            getInitDash: function (e, t) {
                for (var a, i = 0, n = t.length; i < n; i++) {
                    var r = t[i];
                    if ("dashboard" === r.attribute && r.dsh_id == e) {
                        a = r;
                        break
                    }
                }
                return a = a || t[0] || {}, a.df_list = a.df_list || [], a
            },
            getInitFilter: function (e, t) {
                for (var a, i = 0, n = t.length; i < n; i++) {
                    var r = t[i];
                    if (r.df_id == e) {
                        a = r;
                        break
                    }
                }
                return a = a || t[0] || {}
            },
            jumpController: ["$scope", "$timeout", function (e, t) {
                function a(e, t) {
                    e && e.stopPropagation(), t.nodeCollapse = !t.nodeCollapse
                }

                function i(t) {
                    if (r.selectProjObj && r.selectProjObj.proj_id !== t.proj_id && (e.dashChartJumpData.currentDashName = ""), e.dashChartJumpData.currentProjectName = t.name, e.dashChartJumpData.showProjectList = !1, t) {
                        r.selectProjObj = angular.copy(t), r.selectDashObj = null;
                        var a = r.selectProjObj.subs || [],
                            i = [];
                        a.map(function (t, a) {
                            "dashboard" === t.attribute && t.dsh_id !== e.selected.dsh_id && i.push(t)
                        }), r.selectProjObj.subs = i, $.isEmptyObject(r.initDash) ? i && i.length > 0 && (e.changeDash(i[0]), r.selectFilterObj = r.selectDashObj.df_list ? r.selectDashObj.df_list[0] : {}) : e.changeDash(r.initDash)
                    }
                    e.$$phase || e.$digest()
                }

                function n(t) {
                    e.dashChartJumpData.currentDashName = t.name, e.dashChartJumpData.showDashList = !1, r.selectDashObj = t, r.selectDashObj.df_list = t.df_list || [], r.selectFilterObj = t.df_list[0]
                }
                var r = e.ngDialogData;
                e.dashChartJumpData = {
                    showProjectList: !1,
                    showDashList: !1,
                    currentDashName: "",
                    currentProjectName: ""
                }, e.changeProj = i, e.changeDash = n, e.nodeCollapseHandle = a,
                    function () {
                        r.initProj ? e.changeProj(r.initProj) : e.changeProj(r.infoList[0])
                    }()
            }],
            showDia: function (e) {
                if (s.checkSupport(e)) {
                    var a = e.ct_id,
                        n = s.getChartFields(e),
                        r = function (e) {
                            var r = e.select_info || {};
                            i.initDeep(e.info_list, 0);
                            var l = e.info_list,
                                d = i.getProjObjById(r.proj_id, l),
                                c = d ? s.getInitDash(r.dsh_id, d.subs || []) : {},
                                p = s.getInitFilter(r.df_id, c.df_list || []),
                                u = s.getInitMode(r),
                                h = s.getInitFieldObj(r, n);
                            t.open({
                                template: "/static/partials/chart-jump-dash.html",
                                className: "ngdialog-theme-default chart-jump-model",
                                data: {
                                    openMode: u,
                                    infoList: l,
                                    initField: h,
                                    jumpFields: n,
                                    initProj: d,
                                    initDash: c,
                                    initFilter: p,
                                    ctId: a
                                },
                                scope: o,
                                controller: s.jumpController
                            })
                        };
                    s.getData(a, r)
                }
            },
            save: function (e) {
                if (e.selectFilterObj && e.selectFilterObj.df_id) {
                    e.selectFieldObj = e.selectFieldObj || e.initField;
                    var i = {
                        ct_id: e.ctId,
                        fid: e.selectFieldObj.fid,
                        f_index: e.selectFieldObj.fIndex,
                        proj_id: e.selectProjObj.proj_id,
                        dsh_id: e.selectDashObj.dsh_id,
                        df_id: e.selectFilterObj.df_id,
                        is_blank: 1 * e.openMode
                    };
                    if (! function (e, t) {
                            var a;
                            return a = "date" == e ? 2 : 1, t == a && 1 == t
                        }(e.selectFieldObj.data_type, e.selectFilterObj.type)) return void n(o.tips["dash.dashCartJump.errSameTip"]);
                    a.ds.saveJumpInfo(i).then(function (e) {
                        "0" == e.status ? (o.getDashboardInfo(o.dashSelected), t.closeAll()) : n(e.errstr)
                    })
                }
            },
            del: function (e, i) {
                e.stopPropagation(), a.ds.delJumpInfo({
                    ct_id: i
                }).then(function (e) {
                    "0" == e.status && n(o.tips["dash.dashCartJump.successDelTip"]), o.getDashboardInfo(o.dashSelected), t.closeAll()
                })
            }
        };
        return s
    }
    return o
}

//"commonService", "multipleProService", "$location", "$state", "ngDialog"
function chartJumpFuns(e, t, a, i, n) {
    var r = {
        gotoDashboard: function (e, t, i, o) {
            var s = e.is_blank,
                l = (e.jumpInfo, e.dsh_id),
                d = (e.df_id, r.getDashUrl(e, t, i, o));
            if (0 == s) {
                return a.path().indexOf("/dash_fullscreen/") > -1 ? void a.url(d) : (n.closeAll(), void $("body").trigger("changeDashboard", {
                    dshId: l,
                    projInfo: t,
                    url: d
                }))
            }
            window.open(d, "_blank")
        },
        getPointData: function (e, t) {
            var a = ["C271", "C272"],
                i = t.info.chart_type,
                n = t.data.x,
                r = [];
            return "C200" === i ? e : ($.inArray(i, a) > -1 ? r.push(e.name) : angular.forEach(n, function (t) {
                r.push(t.data[e.index])
            }), r[r.length - 1])
        },
        getDashUrl: function (e, t, n, o) {
            for (var s, l = e.proj_id, d = e.dsh_id, c = e.df_id, p = e.is_blank, u = p ? "/#" : "", h = a.path(), f = h.indexOf("/dash_edit") > -1 || h.indexOf("/dash_fullscreen") > -1, g = (h.indexOf("dash_tpl"), t.subs.length - 1); g >= 0; g--) {
                var m = t.subs[g];
                if ("dashboard" == m.attribute && m.dsh_id === d) {
                    s = m;
                    break
                }
            }
            var _ = s && 2 == s.category,
                v = u;
            s && 0 == s.category && (f = !0), v += f || _ ? "/dash_edit" : "/dash_tpl";
            var b, y = t.rule_id,
                w = r.getPointData(n, o),
                C = _ ? "/mode/adv" : "",
                x = "?df_id=" + c + "&range=" + w;
            return b = y ? v + "/" + l + "/" + d + "/" + y : i.params.wsId ? v + "_ws/" + i.params.wsId + "/" + l + "/" + d : v + "/" + l + "/" + d, b = b + C + x
        },
        check: function (a, n, o) {
            var s = n.optional.chart_jump_info,
                l = n.ct_id,
                d = s.dsh_id,
                c = i.params.dashId,
                p = t.getProjObjById(s.proj_id, o);
            e.ds.checkJumpInfo({
                ct_id: l,
                tgt_dsh_id: d,
                dsh_id: c
            }).then(function (e) {
                "0" == e.status && (1 == e.result.can_jump ? r.gotoDashboard(s, p, a, n) : errHint("没有筛选器"))
            })
        }
    };
    return r
}

//"$timeout"
function projectTreeCache(e) {
    return {
        treeCache: null,
        setTreeCache: function (e) {
            this.treeCache = angular.copy(e)
        },
        getTreeCache: function (e) {
            return this.treeCache
        }
    }
}

//"$translate", "ngDialog", "commonService", "$timeout", "$q"
function formulaService(e, t, a, i, n) {
    this.isTooLong = function (e) {
        return a.field.getAggregatorLen(e).then(function (e) {
            var t = !1;
            return 0 == e.status ? e.result.formula_length > 1e3 && (t = !0) : t = "error", t
        })
    },
        this.confirmModify = function (a, i) {
            if (isObjectEmpty(i)) var n = e.instant("chart.calcFieldTooLongConfirm");
            else var n = e.instant("chart.groupFieldTooLongConfirm");
            t.openConfirm({
                templateUrl: "/static/partials/dialogTemplates/confirm-dialog.html",
                className: "ngdialog-theme-default ngdialog-width-340",
                data: {
                    message: n,
                    okClick: a
                }
            })
        },
        this.alertSuccess = function (e) {
            var a = t.open({
                    template: "/static/partials/dialogTemplates/alert_success.html",
                    className: "ngdialog-theme-default ngDialog-width-300",
                    data: {
                        message: e
                    },
                    preCloseCallback: function () {
                        i.cancel(n)
                    }
                }),
                n = i(function () {
                    t.close(a.id)
                }, 3e3)
        }
}

//"BC.services"

//"$http", "errHint", "commonHttp"
function commonService(e, errHint, commonHttp) {
    var global_config, project, dashboard, o = function (e) {
        if (e = e.data || e, "0" == e.status) return e.result;
        var a = null;
        return e.errstr && (a = {
            warn_msg: e.errstr
        }), errHint(Number(e.status), a), null
    };
    global_config = {
        modify: function (e) {
            return commonHttp.post("/api/global_config/modify", {
                data: e
            }).then(o)
        },
        themeModify: function (e) {
            return commonHttp.post("/api/user/modify_theme", {
                theme_id: e
            })
        }
    },
        project = {
            create: function (e, t, i) {
                return commonHttp.post("/api/project/create", {
                    name: e,
                    parent_id: t || "",
                    category: i
                })
            },
            getTree: function (e) {
                return commonHttp.get("/api/project/tree", e).then(o)
            },
            modify: function (e, t) {
                return commonHttp.get("/api/project/modify", {
                    proj_id: e,
                    data: {
                        name: t
                    }
                })
            },
            del: function (e) {
                return commonHttp.post("/api/project/delete", {
                    proj_id: e
                })
            },
            move: function (e) {
                return commonHttp.post("/api/project/move", {
                    sort: angular.toJson(e.sort),
                    parent_id: e.parent_id,
                    proj_id: e.proj_id,
                    type: e.type,
                    category: e.category
                })
            }
        },
        dashboard = {
            getList: function (e) {
                return commonHttp.get("/api/dashboard/list", e).then(o)
            },
            getInfo: function (e) {
                var t = {};
                return e = angular.extend(t, e), commonHttp.get("/api/dashboard/info", e)
            },
            create: function (e) {
                return commonHttp.post("/api/dashboard/create", {
                    name: e.name,
                    proj_id: e.proj_id,
                    label: e.label || "",
                    comment: e.comment || "",
                    meta: angular.toJson({
                        show_block: !0
                    }),
                    category: e.category,
                    resolution: e.resolution
                })
            },
            modify: function (e) {
                return e.access_token = $.cookie("token"), commonHttp.post("/api/dashboard/modify", e)
            },
            del: function (e) {
                return commonHttp.post("/api/dashboard/delete", {
                    dsh_id: e
                })
            },
            move: function (e) {
                return commonHttp.post("/api/dashboard/move", {
                    sort: angular.toJson(e.sort),
                    dsh_id: e.dsh_id,
                    parent_id: e.parent_id,
                    type: e.type,
                    rule_id: e.rule_id,
                    category: e.category
                })
            },
            hide: function (e) {
                return commonHttp.post("/api/dashboard/hide", e)
            }
        },
        chart = {
            getInfo: function (e) {
                var t = {};
                return "string" == typeof e ? t.ct_id = e : t = angular.extend(e, t), commonHttp.post("/api/chart/info", t)
            },
            getData: function (t) {
                return e.post("/api/chart/data", {
                    ct_id: t
                })
            },
            create: function (e) {
                var t = {
                        dsh_id: e.dsh_id,
                        category: e.category
                    },
                    i = {
                        normal: 0,
                        gis: 1,
                        text: 2,
                        view: 7,
                        custom: 8
                    },
                    n = i[e.type];
                return t.ct_type = n || 0, e.ct_type && (t.ct_type = e.ct_type), t.name = e.name, "view" == e.type ? (t.parent_id = e.parent_id, t.tb_id = e.tb_id, "number" == typeof e.ct_type && (t.ct_type = e.ct_type)) : "custom" == e.type || "gis" == e.type ? t.tb_ids = angular.toJson(e.tb_id) : t.tb_id = e.tb_id, e.dsh_meta && (t.dsh_meta = angular.toJson(e.dsh_meta)), commonHttp.post("/api/chart/create", t)
            },
            copy: function (e) {
                return commonHttp.get("/api/chart/copy", e)
            },
            del: function (e) {
                return e.dsh_meta && (e.dsh_meta = angular.toJson(e.dsh_meta)), commonHttp.post("/api/chart/delete", e)
            },
            modify: function (e) {
                return commonHttp.post("/api/chart/modify", e)
            },
            getDbInfo: function (e) {
                return commonHttp.get("/api/chart/database_info", {
                    ct_id: e
                })
            },
            modifyTb: function (e, t) {
                return commonHttp.get("/api/chart/modify_tb", {
                    ct_id: e,
                    tb_id: t
                })
            },
            getRelationList: function (e) {
                return commonHttp.get("/api/chart/rela_list", {
                    tb_id: e
                }).then(o)
            },
            search: function (e) {
                return commonHttp.post("/api/chart/search", e).then(o)
            },
            getSizeGroups: function (e, t, i, n, r) {
                return r = r ? angular.toJson(r) : void 0, commonHttp.post("/api/chart/size_groups", {
                    ct_id: e,
                    bubble_setting: angular.toJson(t),
                    drill_level: i,
                    drill_field: n,
                    drill_value: r
                }).then(o)
            },
            getGisSizeGroups: function (e, t, i) {
                return commonHttp.post("/api/chart/size_groups", {
                    ct_id: e,
                    bubble_setting: angular.toJson(t),
                    layer_level: i
                }).then(o)
            },
            addRelaTb: function (e, t) {
                return commonHttp.post("/api/chart/add_rela_tb", {
                    ct_id: e,
                    tb_id: t
                })
            },
            delRelaTb: function (e, t) {
                return commonHttp.post("/api/chart/del_rela_tb", {
                    ct_id: e,
                    tb_id: t
                })
            },
            exportExcelType: function (e) {
                return commonHttp.post("/api/export/get_file_type", e)
            },
            exportLargeExcel: function (e) {
                return commonHttp.post("/api/export/large_file", e)
            },
            wholeRelaChain: function (e) {
                return commonHttp.post("/api/chart/whole_rela_chain", {
                    tb_id: e.tb_id
                })
            },
            tableUnion: function (e) {
                return commonHttp.post("/api/chart/table_union", e)
            },
            cmpDateRange: function (e) {
                return commonHttp.post("/api/chart/filter_cmp_date_range", e)
            }
        };
    var db = {
            getField: function (e) {
                var t = {
                    dstb_id: e
                };
                return commonHttp.get("/api/dstb/info", t).then(o)
            },
            del: function (e) {
                var t = {
                    dstb_id: e
                };
                return commonHttp.get("/api/dstb/delete", t)
            },
            getList: function () {
                return commonHttp.get("/api/dstb/list").then(o)
            },
            modify: function (e, t) {
                var i = {
                    dstb_id: e,
                    data: t
                };
                return commonHttp.get("/api/dstb/modify", i).then(o)
            },
            getUpdateRecord: function (e) {
                return commonHttp.get("/api/excel/list?time=" + (new Date).getTime(), e).then(o)
            },
            deleteFile: function (e, t) {
                var i = {
                    dstb_id: e,
                    filetbname: t
                };
                return commonHttp.get("/api/dstb/delete_file", i).then(o)
            },
            excelCreate: function (e) {
                return commonHttp.post("/api/excel/create", e, {
                    errHint: !1
                })
            },
            excelAppend: function (e) {
                return commonHttp.post("/api/excel/append", e, {
                    errHint: !1
                })
            },
            excelReplace: function (e) {
                return commonHttp.post("/api/excel/replace", e, {
                    errHint: !1
                })
            },
            excelHistoryReplace: function (e) {
                return commonHttp.post("/api/excel/replace_one", e, {
                    errHint: !1
                })
            },
            excelDelete: function (e) {
                return commonHttp.get("/api/excel/delete", e)
            },
            startTask: function (t, a) {
                return e.post("/api/dstb/start", {
                    job_id: t,
                    sheet_name: angular.toJson(a)
                })
            },
            excelCheck: function (e) {
                return commonHttp.post("/api/excel/check", e, {
                    errHint: !1
                })
            },
            excelModify: function (e) {
                return commonHttp.post("/api/excel/modify", e, {
                    errHint: !1
                })
            },
            subOwnWbList: function (e) {
                return commonHttp.post("/api/folder/sub_own_list", e)
            },
            extractTb: function (e) {
                return commonHttp.post("/api/tb/extract", e)
            },
            shareTbInfo: function (e) {
                return commonHttp.post("/api/tb/share_info", e)
            },
            uploadPreview: function (e, t) {
                return commonHttp.post("/api/excel/preview", e, {
                    errHint: t
                })
            },
            uploadParser: function (e) {
                return commonHttp.post("/api/excel/parser", e)
            },
            getSchema: function (e) {
                return commonHttp.post("/api/tb/schema", {
                    tb_id: e
                })
            },
            checkFieldDependency: function (e) {
                return commonHttp.post("/api/tb/check_field_dependency", e)
            },
            adjustTable: function (e) {
                return commonHttp.post("/api/", e)
            },
            previewAdjustTable: function (e) {
                return commonHttp.post("/api/excel/replace_preview", e)
            },
            excelRepeatCheck: function (e) {
                return commonHttp.post("/api/excel/title_check", e)
            }
        },
        tb = {
            modify: function (e) {
                return commonHttp.post("/api/tb/modify", {
                    data: e
                })
            },
            modifyFieldStatus: function (e, t) {
                return commonHttp.post("/api/tb/field_selected/modify", {
                    tb_id: e,
                    field_ids: t
                })
            },
            getStatusData: function (e) {
                return commonHttp.post("/api/tb/field_selected/query", {
                    tb_id: e
                })
            },
            getList: function () {
                return commonHttp.get("/api/tb/list").then(o)
            },
            copy: function (e) {
                return commonHttp.post("/api/data_union/union_copy", e)
            },
            getInfo: function (e) {
                return commonHttp.get("/api/tb/info", {
                    tb_id: e
                })
            },
            getMultiInfo: function (e) {
                return commonHttp.get("/api/tb/multi_info", e)
            },
            preview: function (e) {
                return commonHttp.post("/api/tb/preview", e).then(o)
            },
            del: function (e) {
                return commonHttp.post("/api/tb/delete", {
                    tb_id: e
                })
            },
            delTableWithChart: function (e, t, i) {
                return commonHttp.post("/api/tb/delete", {
                    tb_id: e,
                    session_id: t,
                    verify_code: i
                })
            },
            getJoinInfo: function (e) {
                return commonHttp.get("/api/tb/join_info", {
                    tb_id: e
                }).then(o)
            },
            getJoinErrorReport: function (e) {
                return commonHttp.post("/api/wb/profile", e)
            },
            getJoinProfileReport: function (e) {
                return commonHttp.post("/api/wb/profile_report", {
                    tb_id: e
                })
            },
            getModelStruct: function (e) {
                return commonHttp.get("/api/tb/model_struct", {
                    tb_id: e
                })
            },
            getStatus: function (e, t) {
                return commonHttp.get("/api/tb/status", {
                    tb_id: e,
                    view_status_read: t
                })
            },
            getStorageAccount: function () {
                return commonHttp.get("/api/tb/stat").then(o)
            },
            modifyTag: function (e) {
                return commonHttp.post("/api/tb/modify_tag", {
                    data: JSON.stringify(e)
                })
            },
            getTbsField: function (e) {
                return commonHttp.post("/api/dstb/infos", e)
            },
            partitionSet: function (e) {
                return commonHttp.post("/api/tb/partition/set", {
                    tb_id: e.tb_id,
                    base_field: e.base_field,
                    param: e.param
                })
            },
            partitionDel: function (e) {
                return commonHttp.post("/api/tb/partition/remove", {
                    tb_id: e.tb_id
                })
            },
            wholeJoinChain: function (e) {
                return commonHttp.post("/api/tb/whole_join_chain", {
                    tb_id: e.tb_id
                })
            },
            sqlTrans: function (e) {
                return commonHttp.post("/api/tb/sql_trans", e)
            },
            sqlScript: function (e) {
                return commonHttp.post("/api/sql_script/check", e)
            },
            sqlFormat: function (e) {
                return commonHttp.post("/api/sql_script/format", e)
            },
            tableFieldFilter: function (e) {
                return commonHttp.post("/api/field/filter", e)
            },
            batchMove: function (e) {
                return commonHttp.post("/api/folder/change_batch", e)
            },
            batchDeleteTables: function (e) {
                return commonHttp.post("/api/tb/delete_batch", e)
            },
            checkTablesRely: function (e) {
                return commonHttp.post("/api/tb/list_check_rely", e)
            },
            gisTransfer: function (e) {
                return commonHttp.post("/api/gis/transfer", e)
            },
            gisModify: function (e) {
                return commonHttp.post("/api/gis/modify", e)
            },
            updateModeCheck: function (e) {
                return commonHttp.post("/api/tb/update_mode/check", e)
            },
            updateModeModify: function (e) {
                return commonHttp.post("/api/tb/update_mode/modify", e)
            },
            getPartitionNum: function (e) {
                return commonHttp.post("/api/tb/partition/num", e)
            },
            triggerFullUpdate: function (e) {
                return commonHttp.post("/api/tb/update", e)
            },
            replaceCheck: function (e) {
                return commonHttp.post("/api/wb/replace_check", e)
            },
            getTplExcel: function (e) {
                return commonHttp.get("/api/personal/tpl_excel", e)
            },
            tplExport: function (e) {
                return commonHttp.get("/api/personal/export", e)
            },
            modelCheck: function (e) {
                return commonHttp.get("/api/data_aggr/model_check", e)
            },
            viewExec: function (e) {
                return commonHttp.get("/api/view/exec", e)
            },
            uploadRenameFields: function (e) {
                return commonHttp.post("/api/field/upload_templete", e)
            },
            exportSmallTbFile: function (e) {
                return commonHttp.post("/api/tb/export_tb", e)
            },
            exportTbFile: function (e) {
                return commonHttp.post("/api/export/tb_file", e)
            },
            parseCode: function (e) {
                return commonHttp.post("/api/general/create", e)
            },
            getFieldParseCode: function (e) {
                return commonHttp.get("/api/general/info", e)
            },
            joinTbPreview: function (e) {
                return commonHttp.post("/api/wb/preview", e)
            },
            joinTbCreate: function (e) {
                return commonHttp.post("/api/wb/create", e)
            },
            joinTbInfo: function (e) {
                return commonHttp.post("/api/dstb/info", e)
            },
            joinTbCheckPreview: function (e) {
                return commonHttp.post("/api/wb/modify_preview", e)
            },
            joinTbModify: function (e) {
                return commonHttp.post("/api/wb/modify", e)
            }
        },
        field = {
            getList: function (e) {
                return commonHttp.get("/api/tb/info", {
                    tb_id: e
                })
            },
            getEditableSchema: function (e) {
                return commonHttp.get("/api/tb/editable_schema", {
                    tb_id: e
                })
            },
            create: function (e) {
                return commonHttp.post("/api/field/create", e)
            },
            modify: function (e) {
                return commonHttp.post("/api/field/modify", e)
            },
            del: function (e, t) {
                return commonHttp.post("/api/field/delete", {
                    tb_id: t,
                    fid: e
                })
            },
            getRange: function (e, t, i) {
                return commonHttp.post("/api/field/range", {
                    fid: t,
                    ct_id: i,
                    tb_id: e
                })
            },
            getFilteredRange: function (e, t, i, n) {
                return void 0 === n ? commonHttp.post("/api/enum_color/field_range", {
                    ct_id: e,
                    tb_id: t,
                    field: angular.toJson(i)
                }) : commonHttp.post("/api/enum_color/gis_field_range", {
                    ct_id: e,
                    tb_id: t,
                    field: angular.toJson(i),
                    layer_level: n
                })
            },
            url_preview: function (e, t) {
                return commonHttp.post("/api/field/url_preview", {
                    tb_id: e,
                    field_ids: angular.toJson(t)
                }).then(o)
            },
            extract_preview: function (e, t) {
                return commonHttp.post("/api/field/extract_preview", {
                    tb_id: e,
                    fields: angular.toJson(t)
                }).then(o)
            },
            extract_url: function (e, t) {
                return commonHttp.post("/api/field/extract_url", {
                    tb_id: e,
                    fields: angular.toJson(t)
                }).then(o)
            },
            merge: function (e, t) {
                return commonHttp.post("/api/field/merge", {
                    tb_id: e,
                    info: angular.toJson(t)
                }).then(o)
            },
            getAggregatorLen: function (e) {
                return commonHttp.post("/api/field/get_length", e)
            }
        },
        share = {
            allList: function (e) {
                var t = {};
                return t = angular.extend(e, t), commonHttp.get("/api/share/all_list", t)
            },
            getList: function (e) {
                var t = {};
                return t = angular.extend(e, t), commonHttp.get("/api/share/list", t)
            },
            share: function (e) {
                var t = {};
                return t = angular.extend(e, t), commonHttp.post("/api/share/commit", t)
            },
            modify: function (e) {
                return commonHttp.post("/api/share/modify", e)
            }
        },
        ds = {
            getConnStatus: function (e) {
                return commonHttp.post("/api/ds/conn", e)
            },
            connNopwd: function (e) {
                return commonHttp.post("/api/ds/nopawd", e)
            },
            createApi: function (e) {
                return commonHttp.post("/api/ds/create", e)
            },
            getNameAndTag: function () {
                return commonHttp.get("/api/ds/list").then(o)
            },
            getList: function (e) {
                return commonHttp.get("/api/ds/list").then(o)
            },
            getListForDataSource: function (e) {
                return commonHttp.get("/api/ds/nslist", e)
            },
            getTree: function () {
                return commonHttp.get("/api/ds/tree").then(o)
            },
            info: function (e) {
                return commonHttp.get("/api/ds/info", e)
            },
            modify: function (e) {
                return e = e || {}, commonHttp.post("/api/ds/modify", e)
            },
            startSyncTask: function (e, t, i) {
                return commonHttp.get("/api/ds/sync", {
                    ds_id: e,
                    new_table: t,
                    db_type: i
                })
            },
            startBaiduSyncCost: function (e) {
                return commonHttp.get("/api/rtapi/single_cost", {
                    ds_id: e
                })
            },
            del: function (e) {
                return commonHttp.post("/api/ds/delete", {
                    ds_id: e
                })
            },
            getInitInfo: function () {
                return commonHttp.get("/api/ds/all")
            },
            getResultForSearch: function (e, t) {
                return commonHttp.get("api/ds/search", {
                    stype: t,
                    content: e
                })
            },
            getTables: function (t) {
                return e.get("/api/ds/mdstb", {
                    params: {
                        ds_id: t
                    }
                })
            },
            getJsjTables: function (t) {
                return e.post("/api/ds/cdstb", t)
            },
            modifytb: function (t, a, i) {
                return e.get("/api/ds/modifytb", {
                    params: {
                        ds_id: t,
                        name: a,
                        check_tables: angular.toJson(i)
                    }
                })
            },
            openDataList: function () {
                return commonHttp.get("/api/ds/publiclist")
            },
            create: function (e) {
                return commonHttp.post("/api/ds/create", e)
            },
            conn: function (e) {
                return commonHttp.post("/api/ds/conn", e)
            },
            tbList: function () {
                return commonHttp.get("/api/ds/tblist")
            },
            username_verify: function (e) {
                return commonHttp.post("/api/ds/verify", e)
            },
            jyw_klist: function () {
                return commonHttp.post("/api/jyw/klist")
            },
            set_sync: function (e) {
                return commonHttp.post("/api/ds/sync", e)
            },
            mobile_default_bind: function (e) {
                return commonHttp.post("/api/sms/defaultbind", e)
            },
            mobile_unbind_all: function (e) {
                return commonHttp.post("/api/sms/unbindall", e)
            },
            warn_mobile_list: function (e) {
                return commonHttp.post("/api/sms/list")
            },
            warn_mobile_del: function (e) {
                return commonHttp.post("/api/sms/delete", {
                    phone: e.phone
                })
            },
            warn_mobile_vcode: function (e) {
                return commonHttp.post("/api/sms/vcode", {
                    phone: e.phone,
                    new_phone: e.new_phone
                })
            },
            warn_mobile_verify: function (e) {
                return commonHttp.post("/api/sms/verify", {
                    phone: e.phone,
                    new_phone: e.new_phone,
                    vcode: e.vcode
                })
            },
            ds_amount: function () {
                return commonHttp.get("/api/ds/stat")
            },
            kstList: function (e) {
                return commonHttp.post("/api/kst/list", e)
            },
            kstConn: function (e) {
                return commonHttp.post("/api/kst/conn", e)
            },
            kstCreate: function (e) {
                return commonHttp.post("/api/kst/create", e)
            },
            kstInfo: function (e) {
                return commonHttp.post("/api/kst/info", e)
            },
            kstModify: function (e) {
                return commonHttp.post("/api/kst/modify", e)
            },
            baiduRegion: function () {
                return commonHttp.get("/api/rtapi/city")
            },
            baiduIndex: function () {
                return commonHttp.get("/api/inapi/city")
            },
            baiduIndexCheckKeyWords: function (e) {
                return commonHttp.post("/api/inapi/check", e)
            },
            modifyDbBaiduSearchTask: function (e) {
                return commonHttp.post("/api/rtapi/control", e)
            },
            modifyDbBaiduIndexTask: function (e) {
                return commonHttp.post("/api/inapi/control", e)
            },
            baiduSearchConfig: function (e) {
                return commonHttp.post("/api/rtapi/config", e)
            },
            baiduIndexConfig: function (e) {
                return commonHttp.post("/api/inapi/config", e)
            },
            modifyDbBaiduSearch: function (e) {
                return commonHttp.post("/api/rtapi/modify", e)
            },
            modifyDbBaiduIndex: function (e) {
                return commonHttp.post("/api/inapi/modify", e)
            },
            createDbBaiduSearch: function (e) {
                return commonHttp.post("/api/ds/create", e)
            },
            createDbBaiduSearchTask: function (e) {
                return commonHttp.post("/api/rtapi/create", e)
            },
            createDbBaiduIndexTask: function (e) {
                return commonHttp.post("/api/inapi/create", e)
            },
            deleteDbBaiduSearchTask: function (e) {
                return commonHttp.post("/api/rtapi/delete", e)
            },
            deleteDbBaiduIndexTask: function (e) {
                return commonHttp.post("/api/inapi/delete", e)
            },
            getDbBaiduSearchTaskList: function (e) {
                return commonHttp.post("/api/rtapi/rtlist", e)
            },
            getDbBaiduIndexTaskList: function (e) {
                return commonHttp.post("/api/inapi/inlist", e)
            },
            startBaiduTaskSyncCost: function (e) {
                return commonHttp.get("/api/rtapi/single_cost", e)
            },
            startBaiduIndexTaskSyncCost: function (e) {
                return commonHttp.get("/api/inapi/single_cost", e)
            },
            startBaiduSyncTask: function (e) {
                return commonHttp.post("/api/rtapi/sync", e)
            },
            startBaiduIndexSyncTask: function (e) {
                return commonHttp.post("/api/inapi/sync", e)
            },
            baiduCompanySetting: function (e) {
                return commonHttp.post("/api/rtapi/field_info", e)
            },
            modifyCompanySetting: function (e) {
                return commonHttp.post("/api/rtapi/field_modify", e)
            },
            wechatDs: {
                createWechatIndex: function (e) {
                    return commonHttp.post("/api/ds/create", e)
                },
                deleteWechatTask: function (e) {
                    return commonHttp.post("/api/wechat/delete", e)
                },
                getTaskList: function (e) {
                    return commonHttp.post("/api/wechat/inlist", e)
                },
                modifyWechatTask: function (e) {
                    return commonHttp.post("/api/wechat/modify", e)
                },
                createWechatTask: function (e) {
                    return commonHttp.post("/api/wechat/create", e)
                },
                wechatIndexConfig: function (e) {
                    return commonHttp.post("/api/wechat/config", e)
                },
                wechatTaskSwitchControl: function (e) {
                    return commonHttp.post("/api/wechat/control", e)
                }
            },
            toutiaoDs: {
                createToutiaoIndex: function (e) {
                    return commonHttp.post("/api/ds/create", e)
                },
                deleteToutiaoTask: function (e) {
                    return commonHttp.post("/api/toutiao/delete", e)
                },
                getTaskList: function (e) {
                    return commonHttp.post("/api/toutiao/inlist", e)
                },
                modifyToutiaoTask: function (e) {
                    return commonHttp.post("/api/toutiao/modify", e)
                },
                createToutiaoTask: function (e) {
                    return commonHttp.post("/api/toutiao/create", e)
                },
                toutiaoIndexConfig: function (e) {
                    return commonHttp.post("/api/toutiao/config", e)
                },
                toutiaoTaskSwitchControl: function (e) {
                    return commonHttp.post("/api/toutiao/control", e)
                }
            },
            indexDs: {
                getUrl: function (e, t) {
                    var a;
                    switch (e + "_" + t) {
                        case "70_create":
                            a = "/api/web/create";
                            break;
                        case "70_inlist":
                            a = "/api/web/inlist";
                            break;
                        case "70_control":
                            a = "/api/web/control";
                            break;
                        case "70_delete":
                            a = "/api/web/delete";
                            break;
                        case "70_config":
                            a = "/api/web/config";
                            break;
                        case "70_modify":
                            a = "/api/web/modify"
                    }
                    return a
                },
                getTaskList: function (e) {
                    return commonHttp.post("/api/index/inlist", e)
                },
                createTask: function (e) {
                    return commonHttp.post("/api/index/create", e)
                },
                switchTask: function (e) {
                    return commonHttp.post("/api/index/control", e)
                },
                deleteTask: function (e) {
                    return commonHttp.post("/api/index/delete", e)
                },
                getTaskInfo: function (e) {
                    return commonHttp.post("/api/index/config", e)
                },
                modifyTask: function (e) {
                    return commonHttp.post("/api/index/modify", e)
                },
                checkKeyWords: function (e) {
                    return commonHttp.post("/api/index/check", e)
                },
                areaList: function (e) {
                    return commonHttp.get("/api/index/city", e)
                }
            },
            weiboDs: {
                deleteTask: function (e) {
                    return commonHttp.post("/api/toutiao/delete", e)
                },
                getTaskList: function (e) {
                    return commonHttp.post("/api/web/inlist", e)
                },
                modifyTask: function (e) {
                    return commonHttp.post("/api/toutiao/modify", e)
                },
                createToutiaoTask: function (e) {
                    return commonHttp.post("/api/toutiao/create", e)
                },
                toutiaoIndexConfig: function (e) {
                    return commonHttp.post("/api/toutiao/config", e)
                },
                toutiaoTaskSwitchControl: function (e) {
                    return commonHttp.post("/api/toutiao/control", e)
                }
            },
            dbTypeInfo: function (e) {
                return commonHttp.get("/api/ds/category", e)
            },
            getCTableList: function (e) {
                return commonHttp.post("/api/ds/cdstb", e)
            },
            getTbInfo: function (e) {
                return commonHttp.post("/api/ds/tbinfo", e)
            },
            getDsSheet: function (e) {
                return commonHttp.post("/api/ds/sheet", e)
            },
            getDsTask: function (e) {
                return commonHttp.post("/api/ds/task", e)
            },
            delete: function (e) {
                return commonHttp.post("/api/ds/delete", e)
            },
            getGaReports: function (e) {
                return commonHttp.get("/api/ga/dreports", e)
            },
            getGaInfo: function (e) {
                return commonHttp.post("/api/ga/info", e)
            },
            previewGa: function (e) {
                return commonHttp.post("/api/ga/preview", e)
            },
            getBdpDeployCodeToken: function (e) {
                return commonHttp.post("/api/journal/token", e)
            },
            pwdBatchPreview: function (e) {
                return commonHttp.post("/api/ds_batch/preview", e)
            },
            pwdBatchModify: function (e) {
                return commonHttp.post("/api/ds_batch/modify", e)
            },
            saveUserSync: function (e) {
                return commonHttp.post("/api/ds/usersync", e)
            },
            getJumpInfo: function (e) {
                return commonHttp.get("/api/chart/jump_info", e)
            },
            saveJumpInfo: function (e) {
                return commonHttp.post("/api/chart/jump_save", e)
            },
            delJumpInfo: function (e) {
                return commonHttp.post("/api/chart/jump_delete", e)
            },
            checkJumpInfo: function (e) {
                return commonHttp.get("/api/chart/jump_check", e)
            },
            getCodeImg: function (e) {
                return commonHttp.get("/api/ds/specialsync", e)
            }
        },
        ds_field = {
            field_list: function (e) {
                return commonHttp.post("/api/ds_field/field_list", e)
            },
            field_del: function (e) {
                return commonHttp.post("/api/ds_field/field_del", e)
            },
            field_modify: function (e) {
                return commonHttp.post("/api/ds_field/field_modify", e)
            }
        },
        adv_date = {
            del: function (e) {
                return commonHttp.post("/api/adv_date/del", {
                    opt_id: e
                })
            },
            global_del: function (e, t) {
                return commonHttp.post("/api/adv_date/del", {
                    opt_id: e,
                    df_id: t
                })
            },
            modify: function (e, t, i) {
                return commonHttp.post("/api/adv_date/modify", {
                    ct_id: e,
                    opt_id: t,
                    data: i
                })
            },
            global_modify: function (e, t, i, n) {
                return commonHttp.post("/api/adv_date/modify", {
                    dsh_id: e,
                    opt_id: t,
                    df_id: i,
                    data: n
                })
            },
            list: function (e) {
                return commonHttp.post("/api/adv_date/list", {
                    ct_id: e
                })
            },
            info: function (e) {
                return commonHttp.post("/api/adv_date/info", {
                    opt_id: e
                })
            },
            order: function (e, t) {
                return commonHttp.post("/api/adv_date/order", {
                    ct_id: e,
                    options: t
                })
            }
        },
        warn = {
            add: function (e) {
                return commonHttp.post("/api/warn/add", {
                    ct_id: e.ct_id,
                    rule_id: e.rule_id,
                    data: angular.toJson(e.data)
                })
            },
            modify: function (e) {
                return commonHttp.get("/api/warn/modify", {
                    ct_id: e.ct_id,
                    rule_id: e.rule_id,
                    data: e.data,
                    warn_id: e.warn_id
                })
            },
            del: function (e) {
                return commonHttp.get("/api/warn/delete", {
                    ct_id: e.ct_id,
                    rule_id: e.rule_id,
                    warn_id: e.warn_id
                })
            },
            warnSwitch: function (e) {
                return commonHttp.get("/api/warn/switch", {
                    ct_id: e.ct_id,
                    rule_id: e.rule_id,
                    open_warn_ids: e.open_warn_ids,
                    off_warn_ids: e.off_warn_ids
                })
            }
        },
        model = {
            modify: function (e) {
                return commonHttp.post("/api/model/modify", e)
            },
            preview: function (e) {
                return commonHttp.post("/api/model/train_set_preview", e)
            },
            result: function (e) {
                return commonHttp.post("/api/model/result", e)
            },
            list: function (e) {
                return commonHttp.post("/api/model/list", e)
            },
            info: function (e) {
                return commonHttp.post("/api/model/info", e)
            },
            del: function (e) {
                return commonHttp.post("/api/model/delete", e)
            },
            saveClusterRs: function (e) {
                return commonHttp.post("/api/model/result_commit", e)
            }
        },
        folder = {
            getList: function () {
                return commonHttp.post("/api/folder/list").then(o)
            },
            del: function (e, t) {
                return commonHttp.get("/api/folder/delete", {
                    folder_id: e,
                    mode: t
                })
            },
            modify: function (e) {
                return commonHttp.post("/api/folder/modify", e)
            },
            create: function (e) {
                return commonHttp.post("/api/folder/create", e)
            },
            change: function (e) {
                return commonHttp.post("/api/folder/change", {
                    tb_id: e.tb_id,
                    to_folder: e.to_folder,
                    to_seq: e.to_seq,
                    tb_index: e.tb_index
                })
            },
            change_batch: function (e) {
                return commonHttp.post("/api/folder/change_batch", {
                    change_folders: e
                })
            },
            modify_folder_rel: function (e) {
                return commonHttp.post("/api/folder/modify_folder_rel", {
                    tb_id: e.tb_id,
                    folder_rels: e.tb_status
                })
            },
            modify_seq: function (e) {
                return commonHttp.post("/api/folder/modify_seq", {
                    seq_no: e.seq_no,
                    folder_id: e.folder_id
                })
            },
            modify_parent: function (e) {
                return commonHttp.post("/api/folder/modify_parent", {
                    seq_no: e.seq_no,
                    folder_id: e.folder_id,
                    parent_id: e.parent_id
                })
            },
            getStructure: function () {
                return commonHttp.post("/api/folder/get_tree")
            },
            getStructureWithParam: function (e) {
                return commonHttp.post("/api/folder/get_tree_with_tblist", e)
            },
            getWorktable: function (e) {
                return commonHttp.get("/api/folder/list_only_tb", e)
            },
            getTableSiblings: function (e) {
                return commonHttp.get("/api/folder/get_current_tb", e)
            },
            getTableFolderInfo: function (e) {
                return commonHttp.post("/api/folder/info", e)
            },
            searchFolderAndTable: function (e) {
                return commonHttp.get("/api/folder/search", e)
            },
            filterFolderAndTable: function (e) {
                return commonHttp.get("/api/folder/filter", e)
            }
        },
        fieldComment = {
            create: function (e) {
                return commonHttp.get("/api/field_comment/create", e)
            },
            modify: function (e) {
                return commonHttp.get("/api/field_comment/modify", {
                    ct_id: e.ct_id,
                    fc_id: e.fc_id,
                    comment: e.comment
                })
            },
            del: function (e, t) {
                return commonHttp.get("/api/field_comment/delete", {
                    ct_id: e,
                    fc_id: t
                })
            }
        },
        dash_global_filter = {
            list: function (e) {
                return commonHttp.post("/api/dsh_filter/list", {
                    dsh_id: e.dash_id,
                    rule_id: e.rule_id
                })
            },
            modify: function (e) {
                return commonHttp.post("/api/dsh_filter/commit", {
                    dsh_id: e.dash_id,
                    data: e.dash_filter_list
                })
            },
            item: function (e) {
                return commonHttp.post("/api/dsh_filter/item", {
                    dsh_id: e.dash_id,
                    sdo_id: e.sdo_id,
                    rule_id: e.rule_id,
                    is_tpl: e.is_tpl
                })
            },
            range: function (e) {
                return commonHttp.post("/api/dsh_filter/range", {
                    dsh_id: e.dash_id,
                    df_id: e.df_id,
                    rule_id: e.rule_id,
                    selected_tables: e.selected_tables,
                    granularity: e.granularity,
                    parent_range: e.range
                })
            }
        },
        user = {
            userList: function (e) {
                return commonHttp.post("/api/sub/list", e)
            },
            modifyPersonal: function (e) {
                return commonHttp.post("/api/user/modify_personal", e)
            },
            modifyInfo: function (e) {
                return commonHttp.post("/api/user/modify_info", e)
            },
            groupList: function (e) {
                return commonHttp.post("/api/group/list", e)
            },
            modify: function (e) {
                return commonHttp.post("/api/sub/modify", e)
            },
            setFrozen: function (e) {
                return commonHttp.post("/api/user/set_frozen", e)
            },
            exportFileList: function (e) {
                return commonHttp.post("/api/export/file_list", e)
            },
            exportDelTask: function (e) {
                return commonHttp.post("/api/export/delete", e)
            },
            hideNotification: function () {
                return commonHttp.post("/api/export/hide_notification")
            },
            logout: function (e) {
                return commonHttp.post("/api/user/logout", e)
            },
            modifyPassword: function (e) {
                return commonHttp.post("/api/user/modify_pwd", e)
            },
            getUserInfo: function () {
                return commonHttp.post("/api/user/info")
            },
            unreadNewFeatures: function () {
                return commonHttp.post("/api/log/unread")
            },
            readNewFeatures: function () {
                return commonHttp.get("/api/log/read")
            },
            getMobileCode: function (e) {
                return commonHttp.post("/api/user/gen_captcha", e)
            }
        },
        enumField = {
            getOrderInfo: function (e) {
                return commonHttp.get("/api/enum_order/info", {
                    _t: (new Date).getTime(),
                    tb_id: e.tb_id,
                    fid: e.fid,
                    ct_id: e.ct_id || ""
                }).then(o)
            },
            updateOrder: function (e) {
                return commonHttp.post("/api/enum_order/update", e)
            },
            getFilteredOrderInfo: function (e) {
                return commonHttp.get("/api/enum_order/filter_info", {
                    _t: (new Date).getTime(),
                    tb_id: e.tb_id,
                    fid: e.fid,
                    ct_id: e.ct_id || "",
                    index: e.index || 0,
                    drill_level: e.drill_level || 0,
                    axis: e.axis || ""
                }).then(o)
            }
        },
        sql_script = {
            preview: function (e) {
                return commonHttp.post("/api/sql_script/preview", {
                    info: angular.toJson(e)
                }, {
                    errHint: !1
                })
            },
            create: function (e, t, i, n) {
                return commonHttp.post("/api/sql_script/create", {
                    folder_id: i,
                    info: angular.toJson({
                        table_name: e,
                        info: t,
                        can_incr: n.switch_status,
                        master_tb_id: n.master_tb_id,
                        partition_field_id: n.partition_field_id
                    })
                })
            },
            modifyPreview: function (e, t, i, n, r) {
                return commonHttp.post("/api/sql_script/modify_preview", {
                    tb_id: i,
                    tb_name: e,
                    info: t,
                    folder_id: n,
                    can_incr: r.switch_status,
                    master_tb_id: r.master_tb_id,
                    partition_field_id: r.partition_field_id
                })
            },
            modify: function (e, t, i, n, r) {
                return commonHttp.post("/api/sql_script/modify", {
                    tb_id: i,
                    info: angular.toJson({
                        table_name: e,
                        info: t,
                        can_incr: r.switch_status,
                        master_tb_id: r.master_tb_id,
                        partition_field_id: r.partition_field_id
                    })
                })
            },
            checkIncrease: function (e) {
                return commonHttp.post("/api/sql_script/check_tb_increment", e)
            }
        },
        tpl = {
            ruleTbInfo: function (e) {
                return commonHttp.post("/api/tb/rule_tb_info", e)
            },
            getFieldRule: function (e) {
                return commonHttp.post("/api/rule/search_filter", e)
            },
            saveBatchRule: function (e) {
                return commonHttp.post("/api/rule/create_filter_batch", e)
            },
            chartList: function (e) {
                return commonHttp.post("/api/chart/list", e)
            },
            tplCommit: function (e) {
                return commonHttp.post("/api/template/commit", e)
            }
        },
        workspace = {
            tbListPreview: function (e) {
                return commonHttp.post("/api/workspace/tb_list_preview", e)
            },
            create: function (e) {
                return commonHttp.post("/api/workspace/create", e)
            },
            delete: function (e) {
                return commonHttp.post("/api/workspace/delete", e)
            },
            modify: function (e) {
                return commonHttp.post("/api/workspace/modify", e)
            },
            info: function (e) {
                return commonHttp.post("/api/workspace/info", e)
            },
            list: function () {
                return commonHttp.post("/api/workspace/list")
            },
            modifyDashList: function (e) {
                return commonHttp.post("/api/workspace/modify_dash_list", e)
            },
            modifyTableList: function (e) {
                return commonHttp.post("/api/workspace/modify_tb_list", e)
            },
            modifyGroupList: function (e) {
                return commonHttp.post("/api/workspace/modify_group_list", e)
            },
            modifyAuthority: function (e) {
                return commonHttp.post("/api/workspace/modify_authority_info", e)
            },
            userList: function (e) {
                return commonHttp.post("/api/workspace/user_list", e)
            },
            workspaceLog: function (e) {
                return commonHttp.post("/api/workspace/ws_log", e)
            }
        },
        sem = {
            list: function (e) {
                return commonHttp.post("/api/sem/list", {
                    ds_id: e.ds_id,
                    ds_type: e.ds_type
                })
            },
            merge: function (e) {
                return commonHttp.post("/api/sem/merge", {
                    link_list: e.link_list
                })
            },
            tbrefer: function (e) {
                return commonHttp.post("/api/sem/tbrefer", {
                    ds_id: e.ds_id,
                    tmp_ds_id: e.tmp_ds_id
                })
            }
        },
        guide = {
            guideSet: function (e) {
                return commonHttp.post("/api/user/guide_set", e)
            },
            getDashDemo: function () {
                return commonHttp.post("/api/personal/demo")
            }
        },
        notice = {
            getListByType: function (e) {
                return commonHttp.post("/api/message/list", e)
            },
            setNoticeReaded: function (e) {
                return commonHttp.post("/api/message/read", e)
            },
            getNoticeType: function () {
                return commonHttp.post("/api/message/purpose")
            }
        },
        authority = {
            info: function (e) {
                return commonHttp.post("/api/auth/info", e)
            },
            create: function (e) {
                return commonHttp.post("/api/auth/create", e)
            },
            modify: function (e) {
                return commonHttp.post("/api/auth/modify", e)
            },
            stop: function (e) {
                return commonHttp.post("/api/auth/stop", e)
            },
            oplog: function (e) {
                return commonHttp.post("/api/auth/oplog", e)
            }
        },
        account = {
            userInfo: function (e) {
                return commonHttp.post("/api/sub/info", e)
            },
            userList: function (e) {
                return commonHttp.post("/api/sub/list", e)
            },
            userCreate: function (e) {
                return commonHttp.post("/api/sub/create", e)
            },
            userModify: function (e) {
                return commonHttp.post("/api/sub/modify", e)
            },
            userDelete: function (e) {
                return commonHttp.post("/api/sub/delete", e)
            },
            userDelTbCheck: function (e) {
                return commonHttp.post("/api/sub/del_tb_check", e)
            },
            setFrozen: function (e) {
                return commonHttp.post("/api/user/set_frozen", e)
            },
            resetPwd: function (e) {
                return commonHttp.get("/api/user/reset_pwd", e)
            },
            sentNotice: function (e) {
                return commonHttp.post("/api/sub/send_notice", e)
            },
            accountLimit: function (e) {
                return commonHttp.get("/api/account/limit", e)
            },
            groupList: function (e) {
                return commonHttp.get("/api/group/list", e)
            },
            groupOrder: function (e) {
                return commonHttp.post("/api/group/order", e)
            },
            groupInfo: function (e) {
                return commonHttp.post("/api/group/info", e)
            },
            groupCreate: function (e) {
                return commonHttp.post("/api/group/create", e)
            },
            removeAdminCheck: function (e) {
                return commonHttp.post("/api/group/check_remove_admin", e)
            },
            groupModify: function (e) {
                return commonHttp.post("/api/group/modify", e)
            },
            groupDelete: function (e) {
                return commonHttp.post("/api/group/delete", e)
            },
            groupDelTbCheck: function (e) {
                return commonHttp.post("/api/group/del_tb_check", e)
            },
            securityInfo: function (e) {
                return commonHttp.post("/api/security/info", e)
            },
            securityCreate: function (e) {
                return commonHttp.post("/api/security/create", e)
            },
            securityDelete: function (e) {
                return commonHttp.post("/api/security/delete", e)
            },
            securityList: function (e) {
                return commonHttp.get("/api/security/list", e)
            },
            securityPreCheck: function (e) {
                return commonHttp.post("/api/security/pre_check", e)
            },
            securityModify: function (e) {
                return commonHttp.post("/api/security/modify", e)
            },
            tbShareFieldCheck: function (e) {
                return commonHttp.post("/api/share/cancel_fields_check", e)
            },
            tbShareFilterCheck: function (e) {
                return commonHttp.post("/api/share/check", e)
            },
            getGroupCustomFields: function (e) {
                return commonHttp.post("/api/group/list_fields", e)
            },
            updateGroupCustomFields: function (e) {
                return commonHttp.post("/api/group/update_fields", e)
            },
            groupMutiOpt: function (e) {
                return commonHttp.post("/api/group/muti_opt", e)
            }
        },
        chart_tpl = {
            info: function (e) {
                return commonHttp.post("/api/chart_tpl/info", {
                    tpl_id: e
                })
            },
            createChart: function (e) {
                var t = {
                    dsh_id: e.dsh_id,
                    tb_id: e.tb_id,
                    tpl_id: e.tpl_id,
                    used_origin_fids_map: angular.toJson(e.used_origin_fids_map),
                    dsh_meta: angular.toJson(e.dsh_meta),
                    category: e.category
                };
                return commonHttp.post("/api/chart_tpl_apply/create", t)
            },
            create: function (e) {
                var t = {
                    proj_id: e.proj_id,
                    ct_id: e.ct_id,
                    name: e.name,
                    type: e.type,
                    explain: e.explain
                };
                return angular.isArray(e.fid_explain) ? t.fid_explain = angular.toJson(e.fid_explain) : t.fid_explain = e.fid_explain, commonHttp.post("/api/chart_tpl/create", t)
            },
            delete: function (e) {
                return commonHttp.post("/api/chart_tpl/delete", {
                    tpl_id: e
                })
            },
            modify: function (e) {
                var t = {
                    tpl_id: e.tpl_id,
                    proj_id: e.proj_id,
                    ct_id: e.ct_id,
                    name: e.name,
                    type: e.type,
                    explain: e.explain
                };
                return angular.isArray(e.fid_explain) ? t.fid_explain = angular.toJson(e.fid_explain) : t.fid_explain = e.fid_explain, commonHttp.post("/api/chart_tpl/modify", t)
            },
            applyList: function (e) {
                var t = {
                    type: e.type
                };
                return commonHttp.post("/api/chart_tpl_apply/list", t)
            },
            typeList: function (e) {
                return commonHttp.post("/api/chart_tpl/type_list", e)
            }
        },
        chart_tpl_project = {
            getTree: function (e) {
                return commonHttp.post("/api/chart_tpl_proj/tree", e)
            },
            create: function (e) {
                return commonHttp.post("/api/chart_tpl_proj/create", {
                    name: e
                })
            },
            modify: function (e, t) {
                return commonHttp.post("/api/chart_tpl_proj/modify", {
                    proj_id: e,
                    name: t
                })
            },
            del: function (e) {
                return commonHttp.post("/api/chart_tpl_proj/delete", {
                    proj_id: e
                })
            },
            order: function (e, t, i) {
                return commonHttp.post("/api/chart_template/order", {
                    proj_id: e,
                    type: t || 0,
                    sort: angular.toJson(i)
                })
            },
            move: function (e, t, i, n) {
                return commonHttp.post("/api/chart_template/move", {
                    dsh_id: n,
                    proj_id: e,
                    type: t,
                    sort: angular.toJson(i)
                })
            }
        },
        chartTplRule = {
            info: function (e) {
                return commonHttp.get("/api/chart_tpl_rule/info", {
                    rule_id: e
                })
            },
            industryList: function (e) {
                return commonHttp.get("/api/industry/list", e)
            },
            domainList: function (e) {
                return commonHttp.get("/api/domain/list", e)
            },
            domainSearch: function (e) {
                return commonHttp.get("/api/domain/search", e)
            },
            create: function (e) {
                return commonHttp.post("/api/chart_tpl_rule/create", e)
            },
            list: function (e) {
                return commonHttp.post("/api/chart_tpl_rule/list", e)
            },
            delete: function (e) {
                return commonHttp.post("/api/chart_tpl_rule/delete", {
                    rule_id: e
                })
            },
            modify: function (e) {
                return commonHttp.post("/api/chart_tpl_rule/modify", e)
            },
            issued: function (e) {
                var t = {
                    rule_id: e.rule_id,
                    issued_status: e.issued_status
                };
                return commonHttp.post("/api/chart_tpl_rule/issued", t)
            }
        },
        pay = {
            personalVipInfo: function () {
                return commonHttp.post("/api/pay/personal_vip_info")
            },
            personalOrderHistory: function () {
                return commonHttp.get("/api/pay/order_history")
            },
            getMemberRightData: function () {
                return commonHttp.get("/pmresources/personal-config/member.json")
            },
            personalInvoice: function (e) {
                return commonHttp.post("/api/receipt/create", e)
            },
            personalInvoiceHistory: function () {
                return commonHttp.get("/api/receipt/list")
            }
        },
        view = {
            preview: function (e) {
                return commonHttp.post("/api/view/preview", e)
            },
            create: function (e) {
                return commonHttp.post("/api/view/create", e)
            },
            modify: function (e) {
                return commonHttp.post("/api/view/modify", e)
            },
            info: function (e) {
                return commonHttp.post("/api/view/info", e)
            }
        };
    return {
        global_config: global_config,
        project: project,
        dashboard: dashboard,
        chart: chart,
        db: db,
        tb: tb,
        field: field,
        fieldComment: fieldComment,
        ds: ds,
        ds_field: ds_field,
        share: share,
        adv_date: adv_date,
        warn: warn,
        model: model,
        folder: folder,
        enumField: enumField,
        tpl: tpl,
        sql_script: sql_script,
        dash_global_filter: dash_global_filter,
        workspace: workspace,
        user: user,
        sem: sem,
        guide: guide,
        authority: authority,
        account: account,
        chart_tpl: chart_tpl,
        chart_tpl_project: chart_tpl_project,
        chartTplRule: chartTplRule,
        pay: pay,
        notice: notice,
        view: view,
        getJobStatus: function (e) {
            return commonHttp.post("/api/job/status", {
                job_id: e
            })
        },
        getTaskStatus: function (e) {
            return commonHttp.get("/api/task/status", {
                task_id: e
            }, {
                errHint: !1
            })
        },
        getFunctionList: function () {
            return commonHttp.get("/api/function/list")
        }
    }
}

//"$http", "errHint", "commonHttp"
function baService(e, t, a) {
    return {
        list: function (e) {
            return commonHttp.post("/api/sta/list", e)
        },
        addDomain: function (e) {
            return commonHttp.post("/api/sta/add", e)
        },
        delDomain: function (e) {
            return commonHttp.post("/api/sta/del", e)
        },
        updateConfig: function (e) {
            return commonHttp.post("/api/sta/update", e)
        },
        checkDeploy: function (e) {
            return commonHttp.post("/api/sta/ref", e)
        },
        getToken: function (e) {
            return commonHttp.post("/api/sta/token", e)
        }
    }
}

//"$rootScope", "$translate"
function $jsTipTranslate(e, t) {
    return function (a, i) {
        function n() {
            //$translate
            t(a).then(function (e) {
                angular.forEach(e, function (e, t) {
                    i.tips[t] = e
                })
            })
        }
        i.tips = i.tips || {};
        var r = e.$on("$translateChangeSuccess", n);
        i.$on("$destroy", function () {
            r()
        }), n()
    }
}

//angular.module("BC.services")
angular.module("BC.services")
    .value("operatorTranslateIds", [
        "equal",
        "notEqual",
        "greatThan",
        "lessThan",
        "GTE",
        "LTE",
        "contain",
        "notContain",
        "isEmpty",
        "isNotEmpty",
        "selectDateRange",
        "isIn",
        "isNotIn"]);

//"$rootScope", "$translate", "operatorTranslateIds"
function filterOperatorMap(e, t, a) {
    function i() {
        n.length = 0, t(a).then(function (e) {
            a.forEach(function (t) {
                n.push(e[t])
            })
        })
    }
    var n = [];
    return i(),
        e.$on("$translateChangeSuccess", i),
        n
}

//"$rootScope", "$translate", "operatorTranslateIds"
function filterOperatorMapWithType(e, t, a) {
    function i() {
        t(a).then(function (e) {
            s.string = [], s.number = [], s.date = [], n.forEach(function (t) {
                var i = a[t];
                s.string.push({
                    value: t,
                    name: e[i]
                })
            }), r.forEach(function (t) {
                var i = a[t];
                s.number.push({
                    value: t,
                    name: e[i]
                })
            }), o.forEach(function (t) {
                var i = a[t];
                s.date.push({
                    value: t,
                    name: e[i]
                })
            })
        })
    }
    var n = [0, 1, 6, 7, 8, 9],
        r = [0, 1, 2, 3, 4, 5, 8, 9],
        o = [0, 1, 2, 3, 4, 5, 8, 9, 10],
        s = {};
    return i(), e.$on("$translateChangeSuccess", i), s
}

//"$rootScope", "$translate", "operatorTranslateIds"
function filterOperatorMapWithTypeSpecial(e, t, a) {
    function i() {
        t(a).then(function (e) {
            s.string = [], s.number = [], s.date = [], n.forEach(function (t) {
                var i = a[t];
                s.string.push({
                    value: t,
                    name: e[i]
                })
            }), r.forEach(function (t) {
                var i = a[t];
                s.number.push({
                    value: t,
                    name: e[i]
                })
            }), o.forEach(function (t) {
                var i = a[t];
                s.date.push({
                    value: t,
                    name: e[i]
                })
            })
        })
    }
    var n = [0, 1, 6, 7, 8, 9, 11, 12],
        r = [0, 1, 2, 3, 4, 5, 8, 9, 11, 12],
        o = [0, 1, 2, 3, 4, 5, 8, 9, 10],
        s = {};
    return i(), e.$on("$translateChangeSuccess", i), s
}

//"$rootScope", "$translate"
function dsStatusMap(e, t) {
    function a() {
        t(i).then(function (e) {
            o.statusMap.length = 0, o.updateStatusMap.length = 0, n.forEach(function (t) {
                o.statusMap.push(e[t])
            }), r.forEach(function (t) {
                o.updateStatusMap.push(e[t])
            })
        })
    }
    var i = ["ds.status.normal", "ds.status.disconnect", "ds.status.updating", "ds.updateStatus.fail", "ds.updateStatus.updating"],
        n = [i[0], i[0], i[1], i[2]],
        r = [i[0], i[0], i[3], i[4]],
        o = {
            statusMap: [],
            updateStatusMap: []
        };
    return a(), e.$on("$translateChangeSuccess", a), o
}

//"$rootScope", "$translate"
function conditionType(e, t) {
    function a() {
        t(n).then(function (e) {
            i.length = 0, i.push({
                value: 0,
                text: e[n[0]]
            }), i.push({
                value: 1,
                text: e[n[1]]
            })
        })
    }
    var i = [],
        n = ["tableFilter.andType", "tableFilter.orType"];
    return a(), e.$on("$translateChangeSuccess", a), i
}

//"$rootScope", "$translate"
function dataTypeList(e, t) {
    function a() {
        t(n)
            .then(function (e) {
                i.length = 0, n.forEach(function (t) {
                    i.push({
                        value: t,
                        text: e[t]
                    })
                })
            })
    }
    var i = [],
        n = ["string", "number", "date"];
    return a(),
        e.$on("$translateChangeSuccess", a),
        i
}

//"$rootScope", "$translate"
function dataTypeMap(e, t) {
    function a() {
        t(n).then(function (e) {
            n.forEach(function (t) {
                i[t] = e[t]
            })
        })
    }
    var i = {},
        n = ["string", "number", "date"];
    return a(), e.$on("$translateChangeSuccess", a), i
}

//"$rootScope", "$translate"
function alphaOrderType(e, t) {
    function a() {
        t(n).then(function (e) {
            i.length = 0, n.forEach(function (t) {
                i.push({
                    value: t,
                    text: e[t]
                })
            })
        })
    }
    var i = [],
        n = ["ascending", "descending"];
    return a(), e.$on("$translateChangeSuccess", a), i
}


//"$rootScope", "$translate"
function chartLineType(e, t) {
    function a() {
        t(n).then(function (e) {
            i.length = 0,
                i.push({
                    type: "constant",
                    name: e[n[0]]
                }),
                i.push({
                    type: "calculate",
                    name: e[n[1]]
                })
        })
    }
    var i = [],
        n = ["chart.constantValue", "chart.calculateValue"];
    return a(), e.$on("$translateChangeSuccess", a), i
}


//"$rootScope", "$translate"
function $getCustomFormula(e, t) {
    function a(a) {
        function i() {
            t(a).then(function (e) {
                n.length = 0, a.forEach(function (t) {
                    n.push({
                        type: t,
                        name: e[t]
                    })
                })
            })
        }
        var n = [];
        return i(), e.$on("$translateChangeSuccess", i), n
    }
    return a
}

//"$rootScope", "$translate"
function formulaKeyMap(e, t) {
    function a() {
        t(n).then(function (e) {
            n.forEach(function (t) {
                i[t] = e[t]
            })
        })
    }
    var i = {},
        n = ["TOTAL", "SUM", "AVERAGE", "AVG", "MIN", "MAX", "COUNT", "COUNT_DISTINCT", "YoY", "QoQ", "MED", "PERCENT_5", "PERCENT_10", "PERCENT_25", "PERCENT_50", "PERCENT_75", "PERCENT_90", "PERCENT_95", "LAST"];
    return a(), e.$on("$translateChangeSuccess", a), i
}


//"$rootScope", "$translate"
function dateNameMap(e, t) {
    function a() {
        t(n).then(function (e) {
            n.forEach(function (t) {
                i[t] = e[t]
            })
        })
    }
    var i = {},
        n = ["day", "week", "month", "quarter", "year", "hour", "minute", "second"];
    return a(), e.$on("$translateChangeSuccess", a), i
}

//"$rootScope", "$translate"
function dataShowTypeMap(e, t) {
    function a() {
        t(n).then(function (e) {
            n.forEach(function (t) {
                i[t] = e[t]
            })
        })
    }
    var i = {},
        n = ["chart.byText", "chart.byImg"];
    return a(), e.$on("$translateChangeSuccess", a), i
}

//"$rootScope", "$translate"
function granularityMap(e, t) {
    function a() {
        t(n).then(function (e) {
            n.forEach(function (t) {
                i[t] = e[t]
            })
        })
    }
    var i = {},
        n = ["chart.byDay", "chart.byWeek", "chart.byMonth", "chart.byQuarter", "chart.byYear", "chart.byHour", "chart.byMinute", "chart.bySecond", "normal"];
    return a(),
        e.$on("$translateChangeSuccess", a),
        i
}

//"$rootScope", "$translate"
function AdvfilterOperatorMap(e, t) {
    function a() {
        t(i).then(function (e) {
            n.length = 0, i.forEach(function (t, a) {
                n.push({
                    value: r[a],
                    name: e[t]
                })
            })
        })
    }
    var i = ["equal", "notEqual", "contain", "notContain", "beginWith", "endWith"],
        n = [],
        r = {
            0: 0,
            1: 1,
            2: 6,
            3: 7,
            4: 10,
            5: 11
        };
    return
    a(),
        e.$on("$translateChangeSuccess", a),
        n
}

//"$rootScope", "$translate"
function AdvfilterOperatorNumberMap(e, t) {
    function a() {
        t(i).then(function (e) {
            n.length = 0, i.forEach(function (t, a) {
                n.push({
                    value: r[a],
                    name: e[t]
                })
            })
        })
    }
    var i = ["equal", "notEqual", "greatThan", "lessThan", "GTE", "LTE", "between"],
        n = [],
        r = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 12
        };
    return a(), e.$on("$translateChangeSuccess", a), n
}

//"$rootScope", "$translate"
function AdvfilterOperatorList(e, t) {
    function a() {
        t(i).then(function (e) {
            i.forEach(function (t, a) {
                n[r[a]] = e[t]
            })
        })
    }
    var i = ["equal", "notEqual", "greatThan", "lessThan", "GTE", "LTE", "contain", "notContain", "beginWith", "endWith", "between"],
        n = {},
        r = {
            0: 0,
            1: 1,
            2: 2,
            3: 3,
            4: 4,
            5: 5,
            6: 6,
            7: 7,
            8: 10,
            9: 11,
            10: 12
        };
    return a(), e.$on("$translateChangeSuccess", a), n
}

//"$rootScope", "$translate"
function warnOperatorMap(e, t) {
    function a() {
        t(i).then(function (e) {
            i.forEach(function (t, a) {
                n[r[a]] = e[t]
            })
        })
    }
    var i = ["equal", "notEqual", "greatThan", "GTE", "lessThan", "LTE", "between"],
        n = {},
        r = {
            0: 3,
            1: 4,
            2: 1,
            3: 6,
            4: 2,
            5: 5,
            6: 7
        };
    return a(), e.$on("$translateChangeSuccess", a), n
}


//"$rootScope", "$translate"
function numberInnerFilterMap(e, t) {
    function a() {
        t(i).then(function (e) {
            n.length = 0, i.forEach(function (t, a) {
                n.push({
                    value: r[a],
                    text: e[t]
                })
            })
        })
    }
    var i = ["all", "equal", "notEqual", "greatThan", "GTE", "lessThan", "LTE", "between"],
        n = [],
        r = {
            0: -1,
            1: 0,
            2: 1,
            3: 2,
            4: 4,
            5: 3,
            6: 5,
            7: 12
        };
    return a(), e.$on("$translateChangeSuccess", a), n
}

//"$rootScope", "$translate", "$jsTipTranslate"
function conditionTypeVal(e, t, a) {
    return a(["template.all", "template.any"], e),
        function (t) {
            return 0 == t ? e.tips["template.all"] : e.tips["template.any"]
        }
}

//"$rootScope"
function dbTypeMap(e) {
    return {
        1: "MySQL",
        2: "Oracle",
        3: "MSSQL",
        4: "OpenDS",
        5: "Baidu Sem",
        7: "Sogou Sem",
        8: "en" == e.language ? "4D Pocket" : "四次元空间袋",
        10: "Umeng",
        11: "360 Sem",
        12: "Shenma Sem",
        13: "Shopex",
        15: "53KF",
        16: "快商通",
        18: "en" == e.language ? "Baidu ads ranking" : "百度推广实况",
        19: "JinYiWei",
        21: "百度网盟",
        22: "SEM数据管理系统",
        23: "Live800"
    }
}
//"$rootScope", "$translate"
function databaseConfigInfo(e, t) {
    return {
        18: {
            type: "baiduSearch"
        },
        26: {
            type: "bdpStatistics"
        },
        59: {
            type: "bdpStatistics"
        },
        53: {
            type: "index",
            personalKeywordsNum: 10,
            enterpriseKeywordsNum: 10,
            regions: 1,
            device: 1,
            startDate: 1
        },
        66: {
            type: "api",
            autoSync: !1,
            manualSyncType: 1,
            field: !0,
            connectInfo: [{
                key: "username",
                title: t.instant("ds.username"),
                require: !0
            }, {
                key: "password",
                title: t.instant("ds.password"),
                require: !0
            }]
        },
        67: {
            type: "index",
            personalKeywordsNum: 10,
            enterpriseKeywordsNum: 10,
            checkKeyWords: 0
        },
        68: {
            type: "index",
            personalKeywordsNum: 10,
            enterpriseKeywordsNum: 10,
            regions: 1
        },
        70: {
            type: "index",
            personalKeywordsNum: 10,
            enterpriseKeywordsNum: 10
        },
        74: {
            autoSync: !0,
            autoSyncSetTime: !1,
            field: !0,
            connectInfo: [{
                key: "username",
                title: "APPID",
                require: !0
            }, {
                key: "password",
                title: "AppSecret",
                require: !0
            }]
        },
        75: {
            autoSync: !0,
            autoSyncSetTime: !0,
            connectInfo: [{
                key: "username",
                title: "API_KEY",
                require: !0
            }, {
                key: "password",
                title: "SECRET",
                require: !0
            }],
            field: !1
        },
        76: {
            autoSync: !0,
            autoSyncSetTime: !1,
            connectInfo: [{
                key: "company_id",
                title: t.instant("ds.connect.company_id"),
                require: !0,
                type: "text",
                modify: 0
            }, {
                key: "client_id",
                title: t.instant("ds.connect.client_id"),
                require: !0,
                type: "text",
                modify: 1
            }, {
                key: "client_secret",
                title: t.instant("ds.connect.client_secret"),
                require: !0,
                type: "text",
                modify: 1
            }, {
                key: "sign_key",
                title: t.instant("ds.connect.sign_key"),
                require: !0,
                type: "text",
                modify: 1
            }, {
                key: "phone",
                title: t.instant("ds.connect.phone"),
                require: !0,
                type: "text",
                modify: 1
            }],
            field: !0
        },
        80: {
            autoSync: !0,
            autoSyncSetTime: !0,
            setStartDate: !1,
            connectInfo: [{
                key: "username",
                title: t.instant("ds.connect.apiKey"),
                require: !0,
                type: "text",
                modify: 0
            }, {
                key: "password",
                title: t.instant("ds.connect.apiSecret"),
                require: !0,
                type: "text",
                modify: 1
            }],
            field: !1
        },
        81: {
            autoSync: !0,
            autoSyncSetTime: !1,
            setStartDate: !0,
            connectInfo: [{
                key: "username",
                title: t.instant("ds.connect.apiId"),
                require: !0,
                type: "text",
                modify: 0
            }, {
                key: "password",
                title: t.instant("ds.connect.api_key"),
                require: !0,
                type: "text",
                modify: 1
            }],
            field: !0
        }
    }
}

//"$rootScope", "$translate"
function databaseType(e, t) {
    function a() {
        t(i).then(function (e) {
            n.forEach(function (t) {
                t.typeName = t.translateName ? e[t.translateName] : t.typeName
            })
        })
    }
    var i = ["dsType.4dPocket", "dsType.baiduAdsRank", "dsType.baiduSem", "dsType.360Sem", "dsType.sougouSem", "dsType.shenmaSem", "dsType.baiduUnion", "dsType.youdaoSpread", "dsType.toutiaoAds", "dsType.baiduAnalytics", "dsType.cnzz", "dsType.umeng", "dsType.baiduBridge", "dsType.tq", "dsType.53kf", "dsType.live800", "dsType.chengxintong", "dsType.jinyiwei", "dsType.kuaishangtong", "dsType.shangwutong", "dsType.weiboSpread", "dsType.tencentSpread", "dsType.sougouUnion", "ba.bdpAnalysis", "dsType.jinshuju", "dsType.tencentgdt", "dsType.EC", "dsType.sougouSmall", "dsType.youkuDSP", "dsType.md", "dsType.CM", "dsType.sinaFuyi"];
    e.$on("$translateChangeSuccess", a);
    var n = [{
        dbType: 1,
        typeName: "MySQL",
        dbLabel: "ds",
        category: "ds"
    }, {
        dbType: 2,
        typeName: "Oracle",
        dbLabel: "ds",
        category: "ds"
    }, {
        dbType: 3,
        typeName: "MSSQL",
        dbLabel: "ds",
        category: "ds"
    }, {
        dbType: 4,
        typeName: "OpenDS",
        dbLabel: "opends",
        category: "opends"
    }, {
        dbType: 8,
        typeName: t.instant("dsType.4dPocket"),
        dbLabel: "public",
        category: "public",
        translateName: "dsType.4dPocket"
    }, {
        dbType: 13,
        typeName: "Shopex",
        dbLabel: "shopex"
    }, {
        dbType: 18,
        typeName: t.instant("dsType.baiduAdsRank"),
        dbLabel: "baiduAds",
        translateName: "dsType.baiduAdsRank"
    }, {
        dbType: 22,
        typeName: "SEM数据管理系统",
        dbLabel: "sem",
        category: "sem"
    }, {
        dbType: 5,
        typeName: t.instant("dsType.baiduSem"),
        dbLabel: "api",
        category: "api_0",
        translateName: "dsType.baiduSem"
    }, {
        dbType: 11,
        typeName: t.instant("dsType.360Sem"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.360Sem"
    }, {
        dbType: 7,
        typeName: t.instant("dsType.sougouSem"),
        dbLabel: "api",
        category: "api_0",
        translateName: "dsType.sougouSem"
    }, {
        dbType: 39,
        typeName: t.instant("dsType.sougouSmall"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.sougouSmallTip",
        translateName: "dsType.sougouSmall"
    }, {
        dbType: 12,
        typeName: t.instant("dsType.shenmaSem"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.ShenmaTip",
        translateName: "dsType.shenmaSem"
    }, {
        dbType: 21,
        typeName: t.instant("dsType.baiduUnion"),
        dbLabel: "api",
        category: "api_0",
        tip: "ds.WMTip",
        translateName: "dsType.baiduUnion"
    }, {
        dbType: 30,
        typeName: t.instant("dsType.sougouUnion"),
        dbLabel: "api",
        category: "api_0",
        tip: "",
        translateName: "dsType.sougouUnion"
    }, {
        dbType: 27,
        typeName: t.instant("dsType.youdaoSpread"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.youdaoSpread"
    }, {
        dbType: 31,
        typeName: t.instant("dsType.weiboSpread"),
        dbLabel: "api",
        category: "api_1",
        tip: "",
        translateName: "dsType.weiboSpread"
    }, {
        dbType: 29,
        typeName: t.instant("dsType.tencentSpread"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.tencentSpreadTip",
        syncTip: !0,
        translateName: "dsType.tencentSpread"
    }, {
        dbType: 36,
        typeName: t.instant("dsType.tencentgdt"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.tencentgdtTip",
        translateName: "dsType.tencentgdt"
    }, {
        dbType: 33,
        typeName: t.instant("dsType.sinaFuyi"),
        dbLabel: "api",
        category: "api_1",
        tip: "",
        translateName: "dsType.sinaFuyi"
    }, {
        dbType: 25,
        typeName: t.instant("dsType.toutiaoAds"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.toutiaoAds"
    }, {
        dbType: 37,
        typeName: t.instant("dsType.youkuDSP"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.youkuDSP"
    }, {
        dbType: 9,
        typeName: t.instant("dsType.baiduAnalytics"),
        dbLabel: "api",
        category: "api_5",
        tip: "ds.baiduStatisticsTip",
        syncTip: !0,
        translateName: "dsType.baiduAnalytics"
    }, {
        dbType: 24,
        typeName: t.instant("dsType.cnzz"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.cnzzTip",
        syncTip: !0,
        translateName: "dsType.cnzz"
    }, {
        dbType: 10,
        typeName: t.instant("dsType.umeng"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.umengTip",
        translateName: "dsType.umeng"
    }, {
        dbType: 17,
        typeName: t.instant("dsType.baiduBridge"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.baiduBridgeTip",
        translateName: "dsType.baiduBridge"
    }, {
        dbType: 20,
        typeName: t.instant("dsType.tq"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.TQTip",
        translateName: "dsType.tq"
    }, {
        dbType: 15,
        typeName: t.instant("dsType.53kf"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.53kf"
    }, {
        dbType: 23,
        typeName: t.instant("dsType.live800"),
        dbLabel: "api",
        category: "api_0",
        tip: "ds.live800Tip",
        syncTip: !0,
        translateName: "dsType.live800"
    }, {
        dbType: 32,
        typeName: t.instant("dsType.shangwutong"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.shangwutongTip",
        translateName: "dsType.shangwutong"
    }, {
        dbType: 28,
        typeName: t.instant("dsType.chengxintong"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.chengxintong"
    }, {
        dbType: 19,
        typeName: t.instant("dsType.jinyiwei"),
        dbLabel: "api",
        category: "api_3",
        translateName: "dsType.jinyiwei"
    }, {
        dbType: 16,
        typeName: t.instant("dsType.kuaishangtong"),
        dbLabel: "api",
        category: "api_2",
        translateName: "dsType.kuaishangtong"
    }, {
        dbType: 34,
        typeName: t.instant("dsType.jinshuju"),
        dbLabel: "api",
        category: "api_1",
        translateName: "dsType.jinshuju"
    }, {
        dbType: 35,
        typeName: t.instant("dsType.EC"),
        dbLabel: "api",
        category: "api_0",
        tip: "ds.ECTip",
        translateName: "dsType.EC"
    }, {
        dbType: 38,
        typeName: t.instant("dsType.md"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.mdTip",
        syncTip: !0,
        translateName: "dsType.md"
    }, {
        dbType: 41,
        typeName: t.instant("dsType.CM"),
        dbLabel: "api",
        category: "api_1",
        tip: "ds.CMTip",
        translateName: "dsType.CM"
    }, {
        dbType: 26,
        typeName: t.instant("ba.bdpAnalysis"),
        dbLabel: "ba",
        category: "",
        translateName: "ba.bdpAnalysis"
    }];
    return n
}

function databaseSyncTime() {
    return {
        hourOptions: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"],
        minuteOptions: ["00", "05", "10", "15", "20", "25", "30", "35", "40", "45", "50", "55"]
    }
}

function dateTimesMap() {
    return [{
        name: "00",
        value: "00"
    }, {
        name: "01",
        value: "01"
    }, {
        name: "02",
        value: "02"
    }, {
        name: "03",
        value: "03"
    }, {
        name: "04",
        value: "04"
    }, {
        name: "05",
        value: "05"
    }, {
        name: "06",
        value: "06"
    }, {
        name: "07",
        value: "07"
    }, {
        name: "08",
        value: "08"
    }, {
        name: "09",
        value: "09"
    }, {
        name: "10",
        value: "10"
    }, {
        name: "11",
        value: "11"
    }, {
        name: "12",
        value: "12"
    }, {
        name: "13",
        value: "13"
    }, {
        name: "14",
        value: "14"
    }, {
        name: "15",
        value: "15"
    }, {
        name: "16",
        value: "16"
    }, {
        name: "17",
        value: "17"
    }, {
        name: "18",
        value: "18"
    }, {
        name: "19",
        value: "19"
    }, {
        name: "20",
        value: "20"
    }, {
        name: "21",
        value: "21"
    }, {
        name: "22",
        value: "22"
    }, {
        name: "23",
        value: "23"
    }, {
        name: "24",
        value: "24"
    }]
}

function databaseParamTip() {
    return {
        1: {
            connect: [{
                key: "host",
                name: "服务器",
                desc: "数据库的公网访问地址，如IP、域名等。"
            }, {
                key: "port",
                name: "端口",
                desc: "数据库的公网访问端口号。"
            }, {
                key: "username",
                name: "用户名",
                desc: "数据库的公网访问用户名"
            }, {
                key: "password",
                name: "密码",
                desc: "数据库的公网访问密码"
            }, {
                key: "database",
                name: "数据库",
                desc: "目标数据库名称"
            }]
        }
    }
}

function styleService() {
    function e(e) {
        var t = document.createElement("link");
        return t.setAttribute("rel", "stylesheet"),
            t.setAttribute("type", "text/css"),
            t.setAttribute("href", e), t
    }

    function t(t, i) {
        for (var n = document.getElementsByTagName("link"), r = !0, o = n.length - 1; o >= 0; o--)
            if (n[o] && null != n[o].getAttribute("href") && n[o].getAttribute("href") === t) {
                var s = e(i);
                n[o].parentNode.replaceChild(s, n[o]), r = !1
            }
        r && a(i)
    }

    function a(t) {
        var a = e(t);
        console.log(t, a), void 0 !== a && document.getElementsByTagName("head")[0].appendChild(a)
    }

    function i(e) {
        for (var t = document.getElementsByTagName("link"), a = t.length - 1; a >= 0; a--) t[a] && null != t[a].getAttribute("href") && t[a].getAttribute("href") === e && t[a].parentNode.removeChild(t[a])
    }
    return {
        createCssFile: e,
        replaceCssFile: t,
        addCssFile: a,
        deleteCssFile: i
    }
}


var r = angular.module("BC", n);
//"BC"
function treeConfig(e) {
    e.placeholderClass = "angular-ui-tree-placeholder dash-sort-placeholder"
}

function runBC(
    e, //$rootScope
    t, //$location
    a, //$window
    i, //$timeout
    n, //$translate
    r, //$http
    o, //ngDialog
    s, //$state
    l, //$stateParams
    d, //pendingRequests
    c, //webSocket
    p  //autoRefreshChart
) {
    function u(e) {
        var t = "",
            a = e.pop(),
            i = a.split("/"),
            n = i[1],
            r = e.pop(),
            o = [];
        "dash_edit_ws" == n ? 3 == i.length ? t = n : r ? (o = r.split("/"),
        o[1] != n && (t = n)) : t = n : "dash_edit" == n ? 2 == i.length ? t = n : r ? (o = r.split("/"),
        o[1] != n && (t = n)) : t = n : t = a.indexOf("training") > 0 ? a : n,
        t && BDPLogger.log("feStatistics", {
            category: "user_interact",
            action: "pageview",
            opt_label: t,
            opt_value: 1
        })
    }

    function h() {
        function e() {
            document[t] ? window.BDP_visibilityChangePageActive = !1 : (window.BDP_visibilityChangePageActive = !0,
                p.refreshWaitChart())
        }
        window.BDP_visibilityChangePageActive = !0;
        var t, a;
        void 0 !== document.hidden ? (t = "hidden", a = "visibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", a = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", a = "webkitvisibilitychange"), void 0 !== document.addEventListener && void 0 !== document[t] && (window.BDP_visibilityChangeFlag = !0, document.addEventListener(a, e, !1))
    }
    var f = [];
    e.historyTime = [];
    e.back = function () {
        if (1 == f.length && 0 == s.current.name.indexOf("training")) return void s.go("training", null, {
            replace: !0
        });
        var a = f.length > 1 ? f.splice(-2)[0] : "/";
        return e.historyTime.length > 1 && e.historyTime.splice(-2)[0], "/dash_edit" == a || "/" == a ? void(location.href = "/index.html") : void t.path(a)
    };
        e.$on("$stateChangeStart", function () {
            e.pageLoading = !0,
                e.member_personal = !1,
            0 == +!!$.cookie("token") && (a.location.href = bdp.bdpLogin.checkPartnerLogin()),
                d.cancelAll(), $(".common-dot-guide").remove()
        });
        e.$on("$stateChangeSuccess", function () {
            f.push(t.path()), e.historyTime.push(t.path()), e.pageLoading = !1, e.advDashEditPage = !1, e.wsId = l.wsId, e.actualLocation = t.path(), u(angular.copy(f))
        }),
        e.$watch(function () {
                return t.path()
            },
            function (t) {
                e.actualLocation === t && o.closeAll()
            }),
        e.$on("changeCapacity", function () {
            e.$broadcast("getCapacity", "change")
        }),
        e.$on("userInfoChange", function () {
            e.$broadcast("getUserInfo", "change")
        });
    var g = null;
    $(window).resize(function (t) {
        t.target === window && (clearTimeout(g), g = setTimeout(function () {
            e.$broadcast("afterWindowResize")
        }, 300))
    });
    var m = function (a, i) {
        e.view = a,
        i && t.path(i)
    };
    e.click_show_view = function (a, i) {
        function n(e, t) {
            var a = !1;
            return t.map(function (t) {
                t.ws_id == e && (a = !0)
            }), a
        }
        i = i || {};
        var r, o, s = l.wsId,
            d = e.workspaceList;
        switch (a) {
            case "dashboard":
                if (r = "dashboard", s) {
                    d = d.dash;
                    var c = e.last_dash_path,
                        p = n(s, d);
                    if (p) {
                        o = c && c.indexOf(s) > -1 ? c : "dash_edit_ws/" + s;
                        break
                    }
                }
                t.path().indexOf("dash_edit") < 0 && (o = c && c.indexOf("dash_edit_ws") > -1 ? "/dash_edit" : c || "/dash_edit");
                break;
            case "data_screen":
                r = "data_screen", t.path().indexOf("data_screen") < 0 && (o = "/data_screen");
                break;
            case "data_screen_edit":
                r = "data_screen_edit", t.path().indexOf("data_screen_edit") < 0 && (o = "/data_screen_edit");
                break;
            case "data_source":
                if (o = "/data_source", r = "worktable", s) {
                    d = d.worktable;
                    var p = n(s, d);
                    if (p) {
                        o = "data_source/" + s;
                        break
                    }
                }
                o = "data_source";
                break;
            case "account":
                o = "/account", r = "account";
                break;
            case "database":
                o = "/database", r = "database";
                break;
            case "database_list":
                o = "/database_list", r = "database_list";
                break;
            case "warn":
                o = i.wsId ? "/warn/" + i.wsId : "/warn/", r = "warn";
                break;
            case "template_home":
                if (r = "template", s) {
                    d = d.template;
                    var p = n(s, d);
                    if (p) {
                        o = "template_home/" + s;
                        break
                    }
                }
                "user" == e.role ? (s = e.workspaceList.template[0].ws_id, o = "template_home/" + s) : o = "/template_home";
                break;
            case "template_config":
                o = i.wsId ? "/template_config/" + i.wsId : "/template_config", r = "template";
                break;
            case "template_rule":
                o = i.wsId ? "/template_rule/" + i.wsId : "/template_rule/", r = "template";
                break;
            case "template_rule_create":
                o = i.wsId ? "/template_rule_modify/create/" + i.wsId : "/template_rule_modify/create", r = "template";
                break;
            case "template_rule_modify":
                o = i.wsId ? "/template_rule_modify/" + i.ruleId + "/" + i.wsId : "/template_rule_modify/" + i.ruleId, r = "template";
                break;
            case "workspace":
                o = "/workspace", r = "workspace";
                break;
            case "security":
                o = "/security", r = "security";
                break;
            case "training":
                o = "/training", r = "training";
                break;
            case "chart_template":
                o = "/chart_template", r = "chart_template";
                break;
            case "chart_template_config":
                o = "/chart_template_config", r = "chart_template_config";
                break;
            case "chart_template_rule":
                o = "/chart_template_rule", r = "chart_template_rule";
                break;
            case "chart_template_rule_modify":
                o = "/chart_template_rule_modify/" + i.chartTplRuleId, r = "chart_template_rule_modify";
                break;
            case "chart_template_rule_create":
                o = "/chart_template_rule_create", r = "chart_template_rule_create"
        }
        m(r, o)
    },
        e.$editable = !1,
        m("dashboard"),
        e.proj_share = !1,
        e.dash_share_name = "",
        e.global = {},
        e.permision = {},
        e.show_bdp_header = !0,
        window.usedThemeId = e.usedThemeId = parseInt($.cookie(window.BDPThemes.bdpThemeIdCookieName) || 2),
        e.is_sub_admin = !!$.cookie("is_sub_admin"),
    "personal" === window._mc_role_ && (e.role = ""),
        e.$on("onSearch", function (t, a) {
            setTimeout(function () {
                e.$broadcast("jumpToSearch", a)
            }, 0)
        }),
        e.$on("$translateLoadingEnd", function (t, a) {
            console.log(a), e.i18nLoaded = !0
        }),
        window.bdpChart = window.bdpChart || {},
        e.$on("$translateChangeSuccess",
            function (t, a) {
                console.log("Language has been switched to " + a.language),
                    window.bdpChart.language = e.language = a.language, angular.element("body").removeClass("zh en").addClass(a.language);
                var i = window.location.host || "",
                    n = document.domain || "";
                i.indexOf("me.bdp.cn") < 0 && n.indexOf("me.bdp.cn") < 0 && ("zh" == a.language ? document.getElementsByTagName("title")[0].innerHTML = "海致BDP-大数据时代的商业智能" : "en" == a.language && (document.getElementsByTagName("title")[0].innerHTML = "HaiZhi BDP"))
            }),
        e.dotGuideStepModify = function (t) {
            "table_guide" == t && (e.personalInfo.table_guide = 1), "chart_guide" == t && (e.personalInfo.chart_guide = 1), "dashboard_guide" == t && (e.personalInfo.dashboard_guide = 1)
        },
        e.$on("noticeListClose", function (t, a) {
            e.$broadcast("getNavNoticeList", a)
        }),
        e.$on("ngDialog.opened", function (e, t) {
            setTimeout(function () {
                t.find(".ngdialog-content")[0].getBoundingClientRect().top < 0 && t.css({
                    display: "block"
                })
            }, 100)
        }),
    navigator.userAgent && (isIE || window.ActiveXObject || "ActiveXObject" in window) && ($("body").removeClass("IE-BDP"),
        $("body").addClass("IE-BDP")),
        e.$watch("themeChangeFlag", function (t, a) {
            t == a || "dashboard" != e.view && "dash_tpl" != e.view && "data_screen" != e.view || e.$broadcast("fire-refresh-dashboard"),
            t != a && "worktable" == e.view && e.$broadcast("refresh-relation-path")
        });
    var _ = "_websocketChartMessage_",
        v = location.protocol,
        b = v + "//ws.bdp.cn";
    0 == "ws.bdp.cn".indexOf(":") && (b = v + "//" + location.hostname + "ws.bdp.cn");
    var y = b + "/api/chat";
    e[_] = {},
        e[_].lock = !1,
    e[_].lock || setTimeout(function () {
        e.socketConn = c.connect(y, {
            onMessage: function (t) {
                t = t || {}, t._t = new Date, e.$broadcast(_, t)
            },
            onOpen: function () {},
            onClose: function () {}
        })
    }, 100),
        setTimeout(function () {
                h()
            },
            5e3)
}


//
/*
 "$stateProvider",
 "$urlRouterProvider",
 "$translateProvider",
 "ngDialogProvider",
 "uiMask.ConfigProvider",
 "$rootScopeProvider",
 */
function configBC(
    e, //$stateProvider
    t, //$urlRouterProvider
    a, //ngDialogProvider
    n, //uiMask.ConfigProvider
    r, //$rootScopeProvider
    o) {
    function s(t, a, i) {
        var n;
        a.length ? (1 == a.length && (t.resolve = i), e.state(a.join("."), t), n = t.nested, delete t.nested) : n = t, n && angular.forEach(n, function (e, t) {
            s(e, [].concat(a, t), i)
        })
    }

    function l(e, t) {
        var a = !1,
            i = ["$ocLazyLoad", "$q", function (i, n) {
                if (!a) {
                    var r = n.defer();
                    return e(function () {
                        return a = !0, i.load({
                            name: t
                        }), r.resolve(), a
                    }), r.promise.then(function () {
                        console.log(" lazyload done! ")
                    }), r.promise
                }
            }],
            n = {
                lala: i
            };
        return function () {
            return n
        }
    }

    function d(e) {
        s(e.routes, [], l(e.requires, e.name)())
    }
    t.otherwise("/dash_edit");

    e.state("dash_edit", {
        url: "/dash_edit",
        templateUrl: "/static/js/dashboard/tpl/project_view.html",
        controller: "ProjectController"
    })
        .state("dash_edit.dash", {
            url: "/:projId/:dashId?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
            controller: "DashController"
        })
        .state("dash_edit.rule", {
            url: "/:projId/:dashId/:ruleId?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
            controller: "DashController"
        })
        .state("dash_fullscreen", {
            url: "/dash_fullscreen/:projId/:dashId?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/dash-fullscreen.html",
            controller: "DashController"
        })
        .state("dash_fullscreen.rule?df_id&range", {
            url: "/:ruleId",
            templateUrl: "/static/js/dashboard/tpl/dash-fullscreen.html",
            controller: "DashController"
        })
        .state("dash_edit.adv", {
            url: "/:projId/:dashId/:mode/:category?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard.html",
            controller: "advDashboardCtrl"
        })
        .state("dash_edit.adv_rule", {
            url: "/:projId/:dashId/:ruleId/:mode/:category?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard.html",
            controller: "advDashboardCtrl"
        })
        .state("adv_dash_edit", {
            url: "/adv_dash_edit/:projId/:dashId/:mode/:category",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_edit.html",
            controller: "advDashboardCtrl"
        })
        .state("adv_dash_edit_ws", {
            url: "/adv_dash_edit_ws/:wsId/:projId/:dashId/:mode/:category",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_edit.html",
            controller: "advDashboardCtrl"
        })
        .state("adv_dash_fullscreen", {
            url: "/adv_dash_fullscreen/:projId/:dashId/:mode/:category?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
            controller: "advDashboardCtrl"
        })
        .state("adv_dash_fullscreen_rule", {
            url: "/adv_dash_fullscreen/:projId/:dashId/:ruleId/:mode/:category?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
            controller: "advDashboardCtrl"
        })
        .state("ws_dash", {
            url: "/dash_edit_ws/:wsId",
            templateUrl: "/static/js/dashboard/tpl/project_view.html",
            controller: "ProjectController"
        })
        .state("ws_dash.dash", {
            url: "/:projId/:dashId?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
            controller: "DashController"
        })
        .state("ws_dash.adv", {
            url: "/:projId/:dashId/:mode/:category?df_id&range",
            templateUrl: "/static/js/dashboard/tpl/adv_dashboard.html",
            controller: "advDashboardCtrl"
        })
        .state("data_screen", {
            url: "/data_screen",
            templateUrl: "/static/js/dashboard/tpl/project_view.html",
            controller: "ProjectController"
        })

        .state("data_screen.dash", {
            url: "/:projId/:dashId",
            templateUrl: "/static/js/dashboard/tpl/data_screen.html",
            controller: "DataScreenCtrl"
        })
        .state("data_screen_edit", {
            url: "/data_screen_edit/:projId/:dashId",
            templateUrl: "/static/js/dashboard/tpl/data_screen_edit.html",
            controller: "DataScreenCtrl"
        })
        .state("third_iframe", {
            url: "/third_iframe",
            templateUrl: "/static/js/dashboard/tpl/project_view.html",
            controller: "ProjectController"
        })
        .state("third_iframe.dash", {
            url: "/:projId/:dashId",
            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
            controller: "DashController"
        })
        .state("ws_dash_fullscreen", {
            url: "/dash_fullscreen_ws/:wsId/:projId/:dashId",
            templateUrl: "/static/js/dashboard/tpl/dash-fullscreen.html",
            controller: "DashController"
        })
        .state("chart_edit", {
            url: "/chart_edit/:projId/:dashId/:chartId?page_referrer",
            templateUrl: "/static/js/dashboard/tpl/chart-edit.html",
            controller: "ChartController"
        })
        .state("chart_edit_ws", {
            url: "/chart_edit_ws/:wsId/:projId/:dashId/:chartId?page_referrer",
            templateUrl: "/static/js/dashboard/tpl/chart-edit.html",
            controller: "ChartController"
        })
        .state("custom_chart_edit", {
            url: "/custom_chart_edit/:projId/:dashId/:chartId?page_referrer",
            templateUrl: "/static/js/dashboard/tpl/custom-chart-edit.html",
            controller: "CustomChartEditCtrl"
        })
        .state("upgrade", {
            url: "/upgrade",
            templateUrl: "/static/view/partner_upgrade.html",
            controller: "partnerUpgradeCtrl"
        })
        .state("data_source", {
            url: "/data_source",
            templateUrl: "/static/js/worktable/preview/worktable.html",
            controller: "WorktableCtrl"
        })
        .state("data_source_ws", {
            url: "/data_source/:wsId",
            templateUrl: "/static/js/worktable/preview/worktable.html",
            controller: "WorktableCtrl"
        })
        .state("warn", {
            url: "/warn",
            templateUrl: "/static/view/warning-message.html",
            controller: "WarnController"
        })
        .state("notice_list", {
            url: "/notice",
            templateUrl: "/static/view/notice_list.html",
            controller: "noticeCtrl"
        })
        .state("notice", {
            url: "/notice/:noticeTpye",
            templateUrl: "/static/view/notice_list.html",
            controller: "noticeCtrl"
        })
        .state("warn_ws", {
            url: "/warn/:wsId",
            templateUrl: "/static/view/warning-message.html",
            controller: "WarnController"
        })
        .state("template_home", {
            url: "/template_home",
            templateUrl: "/static/view/template_home.html",
            controller: "TemplateHomeController"
        })
        .state("template_home_ws", {
            url: "/template_home/:wsId",
            templateUrl: "/static/view/template_home.html",
            controller: "TemplateHomeController"
        })

        .state("template_config_ws", {
            url: "/template_config/:wsId",
            templateUrl: "/static/view/template_config.html",
            controller: "TemplateConfigController"
        })
        .state("template_config", {
            url: "/template_config",
            templateUrl: "/static/view/template_config.html",
            controller: "TemplateConfigController"
        })
        .state("template_rule", {
            url: "/template_rule",
            templateUrl: "/static/view/template_rule.html",
            controller: "templateRuleCtrl"
        })
        .state("template_rule_ws", {
            url: "/template_rule/:wsId",
            templateUrl: "/static/view/template_rule.html",
            controller: "templateRuleCtrl"
        })
        .state("template_rule_modify", {
            url: "/template_rule_modify/:module",
            templateUrl: "/static/view/template_rule_modify.html",
            controller: "templateRuleModifyCtrl"
        })
        .state("template_rule_modify.ws", {
            url: "/:wsId",
            templateUrl: "/static/view/template_rule_modify.html",
            controller: "templateRuleModifyCtrl"
        })
        .state("template_rule_create", {
            url: "/template_rule_create",
            templateUrl: "/static/view/template_rule_modify.html",
            controller: "templateRuleModifyCtrl"
        })
        .state("template_rule_create_ws", {
            url: "/template_rule_create/:wsId",
            templateUrl: "/static/view/template_rule_modify.html",
            controller: "templateRuleModifyCtrl"
        })
        .state("join_table", {
            url: "/jointable",
            templateUrl: "/static/js/worktable/join/view/join-table.html",
            controller: "joinTableController"
        })
        .state("join_table_edit", {
            url: "/jointable/:tbId",
            templateUrl: "/static/js/worktable/join/view/join-table.html",
            controller: "joinTableController"
        })
        .state("join_table_ws", {
            url: "/jointable_ws/:wsId",
            templateUrl: "/static/js/worktable/join/view/join-table.html",
            controller: "joinTableController"
        })
        .state("join_table_ws_edit", {
            url: "/jointable_ws/:wsId/:tbId",
            templateUrl: "/static/js/worktable/join/view/join-table.html",
            controller: "joinTableController"
        })
        .state("polymer_table", {
            url: "/polymer_table",
            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
            controller: "polymerTableCtrl"
        })
        .state("polymer_table_edit", {
            url: "/polymer_table/:tbId",
            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
            controller: "polymerTableCtrl"
        })
        .state("polymer_table_ws", {
            url: "/polymer_table_ws/:wsId",
            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
            controller: "polymerTableCtrl"
        })
        .state("polymer_table_ws_edit", {
            url: "/polymer_table_ws/:wsId/:tbId",
            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
            controller: "polymerTableCtrl"
        })

        .state("union_table", {
            url: "/union_table/",
            templateUrl: "/static/js/worktable/union/union_table.html",
            controller: "UnionTableCtrl"
        })
        .state("union_table_edit", {
            url: "/union_table/:tbId",
            templateUrl: "/static/js/worktable/union/union_table.html",
            controller: "UnionTableCtrl"
        })
        .state("union_table_ws", {
            url: "/union_table_ws/:wsId",
            templateUrl: "/static/js/worktable/union/union_table.html",
            controller: "UnionTableCtrl"
        })
        .state("union_table_ws_edit", {
            url: "/union_table_ws/:wsId/:tbId",
            templateUrl: "/static/js/worktable/union/union_table.html",
            controller: "UnionTableCtrl"
        })
        .state("transpose_table", {
            url: "/transpose_table",
            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
            controller: "transposeTableCtrl"
        })
        .state("transpose_table_edit", {
            url: "/transpose_table/:tbId",
            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
            controller: "transposeTableCtrl"
        })
        .state("transpose_table_ws", {
            url: "/transpose_table_ws/:wsId",
            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
            controller: "transposeTableCtrl"
        })
        .state("transpose_table_ws_edit", {
            url: "/transpose_table_ws/:wsId/:tbId",
            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
            controller: "transposeTableCtrl"
        })
        .state("extract_table", {
            url: "/extract_table",
            templateUrl: "/static/js/worktable/extract/extract_table.html",
            controller: "ExtractTableCtrl"
        })
        .state("sql_table", {
            url: "/sql_table",
            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
            controller: "SQLTableCtrl"
        })
        .state("sql_table_edit", {
            url: "/sql_table/:tbId",
            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
            controller: "SQLTableCtrl"
        })
        .state("sql_table_ws", {
            url: "/sql_table/:wsId",
            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
            controller: "SQLTableCtrl"
        })
        .state("sql_table_ws_edit", {
            url: "/sql_table/:wsId/:tbId",
            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
            controller: "SQLTableCtrl"
        })
        .state("workspace", {
            url: "/workspace",
            templateUrl: "/static/view/workspace.html",
            controller: "workspaceCtrl"
        })
        .state("gis_edit", {
            url: "/gis_edit/:projId/:dashId/:chartId?page_referrer",
            templateUrl: "/static/js/dashboard/tpl/gis_edit.html",
            controller: "gisCtrl"
        })
        .state("gis_edit_ws", {
            url: "/gis_edit_ws/:wsId/:projId/:dashId/:chartId?page_referrer",
            templateUrl: "/static/js/dashboard/tpl/gis_edit.html",
            controller: "gisCtrl"
        })
        .state("parse_url", {
            url: "/parse_url/:tbId",
            templateUrl: "/static/js/worktable/parse/parse_url.html",
            controller: "parseUrlCtrl"
        })
        .state("parse_url_ws", {
            url: "/parse_url_ws/:wsId/:tbId",
            templateUrl: "/static/js/worktable/parse/parse_url.html",
            controller: "parseUrlCtrl"
        })
        .state("merge_field", {
            url: "/merge_field/:tbId",
            templateUrl: "/static/js/worktable/parse/merge_field.html",
            controller: "mergeFieldCtrl"
        })
        .state("merge_field_ws", {
            url: "/merge_field_ws/:wsId/:tbId",
            templateUrl: "/static/js/worktable/parse/merge_field.html",
            controller: "mergeFieldCtrl"
        })
        .state("author_manage", {
            url: "/author_manage",
            templateUrl: "/static/view/author-manage.html",
            controller: "authorManageCtrl"
        })

        .state("member", {
            url: "/member",
            templateUrl: "/static/pay/member/view/member.html",
            controller: "memberCtrl"
        })
        .state("member_upgrade", {
            url: "/member_upgrade",
            templateUrl: "/static/pay/member/view/member_upgrade.html",
            controller: "memberUpgradeCtrl"
        })
        .state("member_upgrade_level", {
            url: "/member_upgrade/:upgradeId",
            templateUrl: "/static/pay/member/view/member_upgrade.html",
            controller: "memberUpgradeCtrl"
        })
        .state("page_upload_add", {
            url: "/page_upload/:operate",
            templateUrl: "/static/view/page_upload.html",
            controller: "pageUploadCtrl"
        })
        .state("page_upload_replace", {
            url: "/page_upload/:operate/:tbId",
            templateUrl: "/static/view/page_upload.html",
            controller: "pageUploadCtrl"
        })
        .state("page_upload_singlereplace", {
            url: "/page_upload/:operate/:tbId/:mapId",
            templateUrl: "/static/view/page_upload.html",
            controller: "pageUploadCtrl"
        })
        .state("table_capacity", {
            url: "/table_capacity",
            templateUrl: "/static/js/worktable/preview/table_capacity.html",
            controller: "tableCapacityCtrl"
        })
        .state("table_capacity_ws", {
            url: "/table_capacity/:wsId",
            templateUrl: "/static/js/worktable/preview/table_capacity.html",
            controller: "tableCapacityCtrl"
        }),
        i.forEach(function (e) {
            return d(e)
        }),
    "me.bdp.cn" === location.host && $.cookie("locale", "zh", {
        path: "/",
        expires: 365
    }),
        a.useSanitizeValueStrategy("escapeParameters")
            .useLoaderCache(!0)
            .useStaticFilesLoader({
                prefix: "/static/i18n/locale.",
                suffix: ".json"
            })
            .registerAvailableLanguageKeys(["zh", "en"], {
                "zh-CN": "zh",
                "en-US": "en",
                "en-UK": "en",
                "en-GB": "en"
            })
            .determinePreferredLanguage(function () {
                return $.cookie("locale") || navigator.language || navigator.languages && navigator.languages[0] || navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage
            }),
        n.setDefaults({
            closeByDocument: !1,
            closeByEscape: !1,
            trapFocus: !1,
            preserveFocus: !1,
            overlay: !1
        }),
        r.eventsToHandle(["input"]),
        o.digestTtl(15)
}

r.run([//设置全局变量
    "$rootScope",
    "$location",
    "$window",
    "$timeout",
    "$translate",
    "$http",
    "ngDialog",
    "$state",
    "$stateParams",
    "pendingRequests",
    "webSocket",
    "autoRefreshChart",
]);

r.config([
    "$stateProvider",
    "$urlRouterProvider",
    "$translateProvider",
    "ngDialogProvider",
    "uiMask.ConfigProvider",
    "$rootScopeProvider", ]);

r.controller("LogoutController", ["$scope", "$http", "$window", "$rootScope", "commonService", function (e, t, a, i, n) {
    e.logout = function () {
        var e = {
            access_token: $.cookie("token")
        };
        n.user.logout(e).then(function (e) {
            $.cookie("token", "", {
                expires: -1,
                path: "/"
            }), $.cookie("master_role", "", {
                expires: -1,
                path: "/"
            }), $.cookie("is_weak", "", {
                expires: -1
            }),
            2 == i.enterprise_type && window.close(),
                window.location.href = bdp.bdpLogin.checkPartnerLogin(e.result.idp_logout)
        })
    },
        window.onbeforeunload = function () {
            i.securityStrategy && i.securityStrategy.closeBrowserTokenFailure ? window.localStorage.setItem("latestLeaveTime", (new Date).getTime()) : window.localStorage.setItem("latestLeaveTime", 0)
        }
}]);











