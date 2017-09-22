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
            chartTypeTip:[{
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
            }],
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
            markPoint:'',
            chartMarkPoints:'',
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
    e.put("/static/js/common/tpl/nav_notice.html",
        <div class="pr">
            <span class="bdp-icon-wrap pr" ng-class="{'unread':unread > 0}" title="消息中心" ng-click="goToListPage()">
                <i class="bdp-icon ico-message"></i>
                <i ng-show="hasNewNotice.unReadTotal > 0" class="unwatched active"></i>
            </span>
            <div class="nav-notice-list-wrap J_personal_notice_layer" ng-class="{'single-notice': hasNewNotice.unReadTypeLen == 1}" ng-if="hasNewNotice.show">
                <ul class="nav-notice-list">
                    <li class="nav-notice-item" ng-if="noticTipsMol[navNoticeItem.typeId].show" ng-repeat="navNoticeItem in navNoticeList" ng-click="goToListPage(navNoticeItem.typeId)">你有 {{navNoticeItem.unReadNewsLen}}条
                        <span class="notice-type">【{{navNoticeItem.typeId | noticeTypeMap}}】</span>消息
                    </li>
                </ul>
                <!-- <div class="operat-wrap clearfix" ng-if="hasNewNotice.unReadTypeLen > 1">
                <a class="see-all" ng-click="goToListPage()">查看全部</a>
                </div> -->
                <div class="close-notice-btn">
                    <i class="bdp-icon ico-gis-close cursor-pointer" ng-click="closeNavNotice()"></i>
                </div>
            </div>
        </div>),

        e.put("/static/js/common/tpl/nav_project_list.html",
            <div class="side-nouse-wrap"></div>
            <a class="drag-btn" resize-project-list data-draw-chart-url="draw_chart_url" bindonce="i18nLoaded" bo-title="'dragResize' | translate" ng-if="view != 'dash_tpl'">
        </a>

        <div class="create-block" bindonce="i18nLoaded">
        <p class="fl" ng-if="view != 'dash_tpl' && view != 'data_screen'" bo-text="'dash' | translate"></p>
        <p class="fl" ng-if="view == 'dash_tpl'">模板列表</p>
        <p class="fl" ng-if="view == 'data_screen'" bo-text="'dash.dataScreen.dataScreen' | translate"></p>
        <div class="pa">
        <div class="display-inline-block search-chart-wrap" search-chart ng-class="{open : showSearchBox}">
        <a class="bdp-icon-wrap" ng-click="showSearchBar()">
        <i class="bdp-icon ico-search"></i>
        </a>
        <div class="dropdown-wrap search-chart-box" ng-show="showSearchBox">
        <div>
        <input class="dash-search-input" type="text" ng-model="search_name" ng-keyup="onSearchKeyUp($event)" placeholder="{{'dash.searchChart'|translate}}">
        <div class="empty-tip height-32" ng-if="search_name && search_result_empty" bo-text="'dash.searchChartEmpty'| translate"></div>
        <div ng-loading-gif size="size-1x" ng-show="showSearchBoxLoading"></div>
        <ul class="search-chart-list" ng-show="!!search_name && !showSearchBoxLoading">

        <li class="search-result-type" ng-if="old_search_chart_list.length > 0">
        <span bo-text="'chart' | translate"></span>
        <span class="search-result-list-num">{{old_search_chart_list.length}}</span>
    <span class="search-result-list-more fr cursor-pointer" ng-click="getMoreSearchList($event,'chart')" ng-show="old_search_chart_list.length > 3 && old_search_chart_list.length != search_chart_list.length" bo-text="'more' | translate"></span>
    <span class="search-result-list-more fr cursor-pointer" ng-click="getFoldUpSearchList($event,'chart')" ng-show="old_search_chart_list.length > 3 && old_search_chart_list.length == search_chart_list.length" bo-text="'foldUp' | translate"></span>
</li>
    <li ng-repeat="item in search_chart_list" class="cursor-pointer search-result-item" ng-click="jumpToSearchChart(item)">
        <p class="nowrap chart-name" bo-title="item.ct_name" bo-text="item.ct_name"></p>
        <p class="nowrap dash-name" bo-title="item.path" bo-text="item.path"></p>
    </li>

    <li class="search-result-type" ng-if="old_search_dashboard_list.length > 0">
        <span bo-text="'dash' | translate"></span>
        <span class="search-result-list-num">{{old_search_dashboard_list.length}}</span>
        <span class="search-result-list-more fr cursor-pointer" ng-click="getMoreSearchList($event,'dashboard')" ng-show="old_search_dashboard_list.length > 3 && old_search_dashboard_list.length != search_dashboard_list.length" bo-text="'more' | translate"></span>
        <span class="search-result-list-more fr cursor-pointer" ng-click="getFoldUpSearchList($event,'dashboard')" ng-show="old_search_dashboard_list.length > 3 && old_search_dashboard_list.length == search_dashboard_list.length" bo-text="'foldUp' | translate"></span>
    </li>
    <li ng-repeat="item in search_dashboard_list" class="cursor-pointer search-result-item" ng-click="jumpToSearchDashboard(item)">
        <p class="nowrap chart-name" bo-title="item.dsh_name" bo-class="{'has-label': !!item.label}">
            <span class="chart-name-span nowrap" bo-text="item.dsh_name"></span><span class="item-label dash nowrap" bo-show="!!item.label" bo-text="item.label"></span>
            </p>
            <p class="nowrap dash-name" bo-title="item.path" bo-text="item.path"></p>
            </li>

            <li class="search-result-type" ng-if="old_search_project_list.length > 0">
            <span bo-text="'folder' | translate"></span>
            <span class="search-result-list-num">{{old_search_project_list.length}}</span>
        <span class="search-result-list-more fr cursor-pointer" ng-click="getMoreSearchList($event,'project')" ng-show="old_search_project_list.length > 3 && old_search_project_list.length != search_project_list.length" bo-text="'more' | translate"></span>
        <span class="search-result-list-more fr cursor-pointer" ng-click="getFoldUpSearchList($event,'project')" ng-show="old_search_project_list.length > 3 && old_search_project_list.length == search_project_list.length" bo-text="'foldUp' | translate"></span>
    </li>
    <li ng-repeat="item in search_project_list" class="cursor-pointer search-result-item" ng-click="jumpToSearchProject(item)">
        <p class="nowrap chart-name" bo-title="item.name" bo-text="item.name"></p>
        <p class="nowrap dash-name" bo-title="item.path" bo-text="item.path"></p>
    </li>
</ul>
</div>
</div>
</div>

    <div class="display-inline-block show-add op-add-icon" ng-if="permision.projEdit" ng-click="show_add = !show_add" click-outside="show_add = false" outside-active="show_add">
        <a class="bdp-icon-wrap"><i class="bdp-icon ico-plus1"></i></a>
        <ul class="dropdown-wrap create-op-list" ng-show="show_add">
            <li>
                <a ng-click="showCreateProjDialog()" class="dropdown-item" bo-text="'dash.createProj' | translate">
                </a>
            </li>
            <li>
                <a ng-click="showCreateDashDialog()" class="dropdown-item" bo-if="view != 'data_screen'" bo-text="'dash.createDash' | translate"></a>
                <a ng-click="showCreateDashDialog('dataScreen')" class="dropdown-item" bo-if="view == 'data_screen'" bo-text="'dash.createDataScreen' | translate"></a>
            </li>
        </ul>
    </div>

    <div class="display-inline-block show-add" ng-if="permision.projEdit" ng-click="show_add = !show_add" click-outside="show_add = false" outside-active="show_add">
        <a class="bdp-icon-wrap"><i class="bdp-icon ico-more"></i></a>
        <ul class="dropdown-wrap create-op-list" ng-show="show_add" ng-class="{'switch-all': !(permision.dashHidden&&!wsId)}">
            <li>
                <a ng-click="tapAllProject(all_project_list,1)" class="dropdown-item" bo-text="'dash.closeAll' | translate">
                </a>
            </li>
            <li>
                <a ng-click="tapAllProject(all_project_list,0)" class="dropdown-item" bo-text="'dash.openAll' | translate">
                </a>
            </li>
            <li ng-if="view != 'data_screen'">
                <a ng-click="setHideDash(all_project_list)" class="dropdown-item" bo-text="'dash.setHidden' | translate" ng-if="permision.dashHidden && !wsId"></a>
            </li>
        </ul>
    </div>
</div>
</div>
    <div class="J-scroll-project project-nav project-list project-list-common" ng-class="{'under-workspace': workspaceList && workspaceList['dash'].length > 0 && view != 'data_screen'}">
        <div class="list-hd" ui-tree="navListOption" ng-show="all_project_list.length > 0" data-drag-enabled="navListOption.enabled" data-max-depth="5">

            <div ng-if="isThirdIframeMobile.type" class="thirdIframe-dash-list-title">我的仪表盘</div>

            <ul class="own-project-list" ui-tree-nodes ng-model="all_project_list">

                <li class="project-item J-project-item" ng-class="{'J-sort-disabled':view == 'dash_tpl' || isThirdIframeMobile.type || !!node.hidden}" bo-show="!node.hidden" ng-repeat="node in all_project_list" ui-tree-node ng-include="'navListTreeTpl'">
                </li>
            </ul>

        </div>
        <script type="text/ng-template" id="navListTreeTpl">

            <div class="cat-op-parent level-{{node.deep}}"
                 ng-mouseenter="showTooltip(node, $event)"
                 ng-mouseleave="hideTooltip(node, $event)"
                 ui-tree-handle
            >
                <i bo-class="{
                                        'bdp-icon fl': node.attribute == 'project',
                                                        'ico-folder1': node.type == 0 && projFolding[node.proj_id + node.type] && !node.property,
                                                                        'ico-folder2-open': node.type == 0 && !projFolding[node.proj_id + node.type] && !node.property,
                                                                                        'ico-folder-rule':(node.property || node.type == 2) && projFolding[node.proj_id + node.type],
                                                                                                        'ico-folder-rule-open': (node.property || node.type == 2) && !projFolding[node.proj_id + node.type],
                                                                                                                        'ico-folder-shared': node.type == 1 && projFolding[node.proj_id + node.type],
                                                                                                                                        'ico-folder-shared-open': node.type == 1 && !projFolding[node.proj_id + node.type]
                                                                                                                                                    }" class="J-folder-icon" ng-click="tapNodeName($event, true, node)"></i>
                <div class="cat-op cat-op-show fr"
                     bo-hide="node.type !== 0 && node.attribute == 'project' || node.parent && node.parent.type !== 0 || node.only_display || node.property" >
                    <div class="bdp-icon-wrap" title="More"
                         ng-click="node.handler_more_show = !node.handler_more_show;copyDashboard.handlerMorePos($event);"
                         ng-show="node.handler_more_show || node.over_handler_more == true"
                         outside-active="node.handler_more_show"
                         click-outside="node.handler_more_show = false"
                         nav-project-drop-down
                         drop-down-flag="node.handler_more_show">
                        <i class="bdp-icon ico-more"></i>
                        <ul class="dropdown-wrap field-editable-handler-more" ng-style="moreListPosStyle" ng-if="node.handler_more_show && node.attribute == 'project'">
                            <li class="dropdown-item" ng-if="node.subs.length > 0 && share && node.type == 0 && permision.innerShare && !wsId  && view != 'data_screen'" ng-click="shareCtrl.open('folder', node.proj_id)" bo-text="'share' | translate"></li>
                            <li ng-click="getProName(node, $parentNodesScope.$modelValue)" class="dropdown-item ng-binding" bo-text="'edit' | translate"></li>
                            <li ng-click="moveProject.open(node)" class="dropdown-item" bo-text="'move' | translate"></li>
                            <li ng-click="delProject($index,node,$event)" class="ng-binding dropdown-item" bo-text="'remove' | translate"></li>
                        </ul>
                        <ul class="dropdown-wrap field-editable-handler-more" ng-style="moreListPosStyle" ng-if="node.handler_more_show && node.attribute == 'dashboard'">
                            <li ng-click="dashboard.edit($event, node)" class=" dropdown-item ng-binding" bo-text="'edit' | translate"></li>
                            <li class="dropdown-item" ng-if="view != 'data_screen' && !wsId && permision.innerShare" ng-click="shareCtrl.open('dashboard', node.dsh_id)" bo-text="'share' | translate"></li>
                            <li ng-click="copyDashboard.open(node)" ng-if="node.attribute == 'dashboard'" class="dropdown-item" bo-text="'copy' | translate"></li>
                            <li ng-click="moveDashboard.open(node)" class="dropdown-item" bo-text="'move' | translate"></li>
                            <li ng-click="delDashboard($index,node, $parentNodesScope.$modelValue)" class="ng-binding dropdown-item" bo-text="'remove' | translate"></li>
                        </ul>
                    </div>
                </div>
                <a class="nowrap" ng-class="{'project-name':node.attribute == 'project','dash-name':node.attribute == 'dashboard'}" ng-click="tapNodeName($event, false, node)">
                    <i class="bdp-icon mt-2" bo-if="node.attribute == 'dashboard' && node.category != 1" bo-class="{'ico-dashboard': node.category == 0, 'ico-dashboard-pro':node.category == 2}"></i>
                    <span>{{node.name}}</span>
                </a>
            </div>
            <ul ui-tree-nodes class="dash-list" ng-model="node.subs" bo-class="{'own-dash-list': node.type == 0 && node.attribute !== 'dashboard'}" ng-if="node.attribute == 'project' && !projFolding[node.proj_id + node.type] || node.attribute == 'dashboard' && !projFolding[node.dsh_id]">
                <li class="J-project-item"
                    ng-class="{
                                        'active':node.attribute=='dashboard' && node.dsh_id+node.type == selected.dsh_id_type,
                                                            'has-label': !!node.label || !!node.comment,
                                                                                'J-sort-disabled':view == 'dash_tpl' || isThirdIframeMobile.type || !!node.hidden,
                                                                                                    'project-item':node.attribute=='project',
                                                                                                                        'dashboard-item':node.attribute=='dashboard'}"
                    bo-show="!node.hidden"
                    ng-repeat="node in node.subs"
                    ui-tree-node
                    ng-include="'navListTreeTpl'" data-scroll-container=".J-scroll-project">
                </li>
            </ul>
            <div class="mb8 empty-placeholder" ng-if="node.subs.length == 0 && !projFolding[node.proj_id + node.type]">
            </div>
        </script>
    </div>
),

e.put("/static/js/common/tpl/notice_broadcast.html",
    <div class="new-broadcast-wrap" ng-show="enterprise_type == 3 && personalInfo.new_version">
        <div class="new-broadcast-bg"></div>
        <div class="new-broadcast">
            <div class="btn-close" ng-click="closeBroadcast()">
                ×
            </div>
            <!-- <p class="broadcast-title">BDP个人版重装上线啦~</p> -->
            <div class="broadcast-info">
                <!-- <dl class="info-list">
                                <dt class="info-title">会员体系</dt>
                                                <dd class="info-content">为满足不同用户的数据分析需求，我们新增了银钻和金钻会员等级。会员用户将享有直连数据库、使用数据同步客户端、使用专属APP、超大数据容量等各种超值特权。</dd>
                                                                <dt class="info-title">数据容量扩充</dt>
                                                                                <dd class="info-content">所有免费用户数据容量已经从20M提升至了100M，让数据更好地服务于工作。</dd>
                                                                                                <dt class="info-title">行业模板库</dt>
                                                                                                                <dd class="info-content">针对不同行业的用户，贴心打造了行业数据模板。你只需要通过BDP的“替换数据”功能，将你的数据套用到模板数据中，即可让模板为你所用。</dd>
                                                                                                                            </dl> -->
                <p class="activity-intro">即日起，邀请2个好友即可免费享各种会员特权，已邀请的好友人数按最新规则算，奖励更多哦！快去召唤小伙伴吧~</p>
                <p class="activity-intro mt8">活动截止时间: 2017年5月31日</p>
                <div class="btn-learn-more" ng-click="toLearn()">立即参加</div>
            </div>
        </div>
    </div>),

e.put("/static/js/common/tpl/directive/labelCommentTooltip.html",
    <div class="tooltip {{placement}} tooltip-bg-white bdp-tips label-comment-tooltip" ng-class="{ in: isOpen(), fade: animation() }" ng-show="!!content.name || (!!content.origin_name && content.origin_name != content.name) || !!content.owner_name || !!content.label || !!content.comment || !!content.share_name || !!content.rule_user">
        <div class="tooltip-inner">
            <div class="box">
                <div class="tooltip-block" ng-show="!!content.name">
                    <span>{{'name' | translate}}</span>
                    <span>{{content.name}}</span>
                </div>
                <div class="tooltip-block mt4" ng-show="!!content.origin_name && content.origin_name != content.name">
                    <span>{{'wb.worktableOriginalName' | translate}}</span>
                    <span>{{content.origin_name}}</span>
                </div>
                <div class="tooltip-block mt4" ng-show="!!content.label">
                    <span>{{'label' | translate}}</span>
                    <span>{{content.label}}</span>
                </div>
                <div class="tooltip-block mt4" ng-show="!!content.comment">
                    <span>{{'comment' | translate}}</span>
                    <span>{{content.comment}}</span>
                </div>
                <div class="tooltip-block mt4" ng-show="!!content.share_name">
                    <span>{{'dash.sharedFrom' | translate}}</span>
                    <span>{{content.share_name}}</span>
                </div>
                <div class="tooltip-block mt4" ng-show="!!content.rule_user">
                    <span>{{'dash.allocatedFrom' | translate}}</span>
                    <span>{{content.rule_user}}</span>
                </div>
                <div class="tooltip-block mt4" ng-show="!!content.owner_name">
                    <span>{{'wb.sharedFrom' | translate}}</span>
                    <span>{{content.owner_name}}</span>
                </div>
            </div>
        </div>
    </div>),

e.put("/static/js/common/tpl/directive/navWorkspace.html",
    <div ng-if="workspaceList && curWsList.length > 0">
        <div class="nav-workspace-list">
            <ul>
                <li class="display-inline-block cursor-pointer" ng-class="{'active':!wsId}" ng-click="tabWorkspace($event,undefined)" ng-if="(view !== 'template' && view !=='template_config' && view != 'template_rule') || role !== 'user'">
                    <div class="workspace-nav">
                        <div class="workspace-nav-content nowrap">
                            我的工作区
                        </div>
                        <div class="right-border"></div>
                    </div>
                </li>
                <li ng-repeat="item in curWsList" class="display-inline-block cursor-pointer" ng-class="{'active':item.ws_id == wsId}" ng-click="tabWorkspace($event,item.ws_id,item.admin)">
                    <div class="workspace-nav">
                        <div class="workspace-nav-content nowrap">
                            {{item.name}}
                        </div>
                        <div class="right-border"></div>
                    </div>
                </li>
            </ul>
        </div>
    </div>),

e.put("/static/js/common/tpl/guide/database_guide.html",
    <div class="database-view guide-page" ng-if="showGuide">

        <div class="nav" ng-if="[3].indexOf(guide) != -1"><span>数据源</span></div>
        <div class="dashed pa" ng-if="[3].indexOf(guide) != -1"></div>
        <div class="init-guide pr" ng-if="[3].indexOf(guide) != -1">
            <div class="db-guide-init"></div>
            <i class="close-init pa opacity6" ng-click="closeInit()"></i>
            <a class="btn-blue pa font-size-14 font-w-b cursor-pointer" ng-click="gotoDataSource()"><span class="font-w-b">立即体验</span></a>
        </div>
        <div class="statistics-layer pr" ng-if="viewGuide == 'guide-step1'">
            <ul>
                <li class="pr">
                    <div class="box">
                        <span class="mb4">全部</span>
                        <b>21</b>
                    </div>
                </li>
                <li>
                    <div class="box box-other">
                        <span class="mb4">已完成</span>
                        <b>12</b>
                    </div>
                </li>
                <li>
                    <div class="box box-other">
                        <span class="mb4">正在运行</span>
                        <b>3</b>
                    </div>
                </li>
                <li>
                    <div class="box box-other">
                        <span class="cr-hint mb4">失败</span>
                        <b>3</b>
                    </div>
                </li>
                <li>
                    <div class="box box-other">
                        <span class="mb4">停用</span>
                        <b>3</b>
                    </div>
                </li>
            </ul>
            <div class="db-guide-tooltip center pr">
                <div class="triangle-up"></div>
                全局状态筛选，已有数据源概况一览无余。
                <span class="pa guide-step1">1/4</span>
                <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="goOn('guide-step2')">继续</a>

            </div>
        </div>
        <div class="guide-main mt16 no-padding">
            <div class="view-side-list pt16 pr" ng-if="viewGuide == 'guide-step2'">
                <div class="db-guide-tooltip pa guide-tip2">
                    <div class="triangle-up head-left"></div>
                    局部类型筛选与搜索，配合状态筛选，快速找到目标数据源，可搜索源标签搜索。
                    <span class="pa guide-step1">2/4</span>
                    <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="goOn('guide-step3')">继续</a>
                </div>
                <div class="list-masking pa" style="width: 200px;height: 200px;z-index: 9999"></div>
                <div class="view-list-header pl16 pr">
                    <span class="title">我的数据源</span>
                    <div class="search-bar pa">
                        <i class="bdp-icon ico-search cursor-pointer"></i>
                    </div>
                </div>
                <div class="view-list-body">
                    <ul>
                        <li class="active pl24">全部</li>
                        <li class="pl24">
                            MySQL</li>
                        <li class="pl24">百度实况</li>
                        <li class="pl24">百度搜索推广</li>
                    </ul>
                </div>
            </div>
            <div class="view-main-body pt16 pr24 pr" style="top: 210px;overflow: initial" id="table_list" ng-if="viewGuide == 'guide-step3'">
                <div class="db-guide-tooltip pa guide-tip3">
                    <div class="triangle-up head-bottom"></div>
                    <!-- 数据源列表新面貌，鼠标移动至上方显示相关操作、类型及详细时间，点击数据源名称可查看同步记录和其下工作表的使用情况。 -->
                    简洁的数据源列表，鼠标移动至数据源上方，显示相关操作、提示信息，删除支持直接删除数据源及其下工作表；点击数据源名称可查看同步记录和其下工作表的使用情况。
                    <span class="pa guide-step1">3/4</span>
                    <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="goOn('guide-step4')">继续</a>
                </div>
                <div class="masking2"></div>
                <table class="bdp-table-normal w100 database-table">
                    <thead>
                    <tr>
                        <th class="db-name cursor-pointer">名称</th>
                        <th class="cursor-pointer db-status">状态</th>
                        <th class="cursor-pointer db-sync-time">最近同步时间</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td class="pr">
                            <img ng-src="/static/images/s-logo.png" width="40" class="fl"/>
                            <div class="database-table-name pr">
                                <div>
                                    <a class="ds-name">我的数据源1</a>
                                    <span class="display-block tag-label">#标签1#</span>
                                </div>
                                <div class="operate-layer pa" style="display: block">
                                <a class="bdp-btn-blue cursor-pointer">详情配置</a>
                                <a class="bdp-btn-blue cursor-pointer">同步</a>
                                <a class="bdp-btn-blue cursor-pointer">合并</a>
                                <a class="bdp-btn-blue cursor-pointer">删除</a>
                                </div>
                                </div>
                                </td>
                                <td>
                                <span>正在运行</span>
                                </td>
                                <td>
                                <span>一天前</span>
                                </td>
                                </tr>
                                <tr>
                                <td class="pr">
                                <img ng-src="/static/images/s-logo.png" width="40" class="fl">
                                <div class="database-table-name pr">
                                <div class="line-height-40">
                                <a class="ds-name">我的数据源2</a>
                                </div>
                                </div>
                                </td>
                                <td>
                                <span class="cr-hint">失败:余额不足，请充值</span>
                                </td>
                                <td>
                                <span>一天前</span>
                                </td>
                                </tr>
                                <tr>
                                <td class="pr">
                                <img ng-src="/static/images/s-logo.png" width="40" class="fl">
                                <div class="database-table-name pr">
                                <div>
                                <a class="ds-name">我的数据源3</a>
                                <span class="display-block tag-label">#标签1#</span>
            </div>
        </div>
    </td>
    <td>
        <span>正在运行</span>
    </td>
    <td>
        <span>一天前</span>
    </td>
</tr>
    <tr>
        <td class="pr">
            <img ng-src="/static/images/s-logo.png" width="40" class="fl"/>
            <div class="database-table-name pr">
                <div class="line-height-40">
                    <a class="ds-name">我的数据源4</a>
                </div>
            </div>
        </td>
        <td>
            <span>正在运行</span>
        </td>
        <td>
            <span>一天前</span>
        </td>
    </tr>
</tbody>
</table>
</div>
</div>
    <div ng-if="viewGuide == 'guide-step4'">
        <div class="btn-layer">
            <a class="nowrap add">
                <i class="bdp-icon ico-add-database ico-opacity"></i>
                <span class="pr ml4">
                    {{ 'ds.adddatasource' | translate }}
                    </span>
            </a>
            <div class="db-guide-tooltip pa guide-tip4">
                <div class="triangle-up head-top"></div>
                全新的数据源列表页，全面直观浏览全部可用数据源，优化了添加流程，操作更加便捷。
                <span class="pa guide-step1">4/4</span>
                <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="quit()">我知道了</a>
            </div>
        </div>
    </div>
    <div ng-if="viewGuide == 'guide-step5'">
        <div class="block-beta pa"><i class="ico-beta"></i></div>
        <div class="db-guide-tooltip pa guide-tip5">
            <div class="triangle-up head-bottom1"></div>
            <p class="font-size-14 mb8 font-w-b">公开试用</p>
            带有BETA标识数据源为最近上线，由于第三方限制，可能会偶尔同步失败或延迟，BDP会结成推动第三方优化，稳定后将自动升级为正式服务。
            <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="quit()">我知道了</a>
        </div>
    </div>
    <div ng-if="viewGuide == 'guide-step6'">
        <div class="guide-usage pa" ng-style="style">
            <div class="db-guide-tooltip pa guide-tip6">
                <div class="triangle-up head-right"></div>
                <p class="font-size-14 mb8 font-w-b">使用说明</p>
                可以在右侧查看数据源配置的所需信息，帮助你快速完成添加配置。
                <a class="pa know1 font-size-14 cursor-pointer" ng-click="quit()">我知道了</a>
            </div>
            <div class="mg24" style="overflow: auto">
                <p class="form-desc-title mb16 font-w-b">使用说明</p>
                <dl ng-repeat="it in descInfo" class="mb8">
                    <dt>{{it.name[language]}}</dt>
                    <dd ng-bind-html="it.desc[language] | htmlFilter"></dd>
                </dl>
            </div>
        </div>
    </div>
    <a class="quit pa font-underline cursor-pointer" ng-click="quit('quit')" ng-if="showGuide && [3].indexOf(guide) == -1">退出引导</a>
</div>
    <div ng-if="showManualSync" class="database-view guide-page">
        <div class="view-main-body" style="margin-top:277px">
            <table class="bdp-table-normal w100 db-guide-table">
                <tr>
                    <td width="55%">
                        <div class="bdp-btn-blue display-inline-block pr fr mt16" style="margin-right:40px">
                            <a class="display-block">{{'ds.dsSync' | translate}}</a>
                            <div class="db-guide-tooltip center pa text-left" style="left:-128px;top:38px">
                                <div class="triangle-up"></div>
                                {{'ds.guide.manualSync' | translate}}
                                <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="closeManualSyncGuide()">{{'close' | translate}}</a>
                            </div>
                        </div>
                    </td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>),

e.put("/static/js/common/tpl/guide/dot_guide.html",
    <div ng-if="watchStatus == dotGuideData[guideItem].guideNum">
        <div class="dot-guide" ng-hide="dotMask == true || !dotGuideData[guideItem].tooltipText" ng-click="clickShowInfo()">
            <!-- {{showDotGuideTip}} -->
        </div>
        <div class="circle-group" ng-click="guideItem == 'drillChart' ? clickShowInfo() : null" ng-class="{'cursor-pointer': guideItem == 'drillChart'}"><!--  ng-click="clickShowInfo()" -->
            <div class="circle4"></div>
            <div class="circle3"></div>
            <div class="circle2"></div>
            <div class="circle1"></div>
        </div>
        <div class="dot-guide-tip J_dash_dot_guide" ng-show="showDotGuideTip == true && dotGuideData[guideItem].tooltipText">
            <p class="dot-guide-tip-text" ng-bind-html="dotGuideData[guideItem].tooltipText | toSce"></p>
            <div class="tip-operate clearfix">
                <div class="see-help" ng-show="dotGuideData[guideItem].videoSrc">
                            <span class="" ng-click="seeHelpVideo();showDotVideo = true">
                                <i class="bdp-icon ico-help"></i>
                                <span class="ico-help-text">{{'operatorHelp'|translate}}</span>
                            </span>
                </div>
                <div class="know-and-close" ng-click="iKnowClick()">知道了</div>
            </div>
        </div>
    </div>),

e.put("/static/js/dashboard/tpl/adv_dashboard.html",
    <div class="dash-edit-content-view data-screen-wrap adv-dashboard-wrap">
        <div class="dash-title-wrap view-header-wrap">
            <div class="clearfix dash-title view-header">
                <h2>{{dashTitle}}</h2>
                <div class="btn-layer" ng-if="!dashFullscreen && permision.dashEdit && property == 0 && !isThirdIframeMobile.type">
                    <div class="display-inline-block pr">
                        <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.design" guide-item="design" guide-type="dash_edit" watch-status="personalInfo.dashboard_guide" btn-class="J-dot-design" add-class="'dot-guide-design'"></div>

                        <a ng-if="!proj_share && !(enterprise_type == 5 || enterprise_type == 6)" ng-click="enterEditAdvDash()" ng-if="permision.dashEdit && property == 0" class="J-design-button J-dot-design">
                            <i class="bdp-icon ico-edit-layout"></i>
                            <span class="btn-layer-opt">
                                                            <span>{{ 'design' | translate }}</span>
                                                            <span class="btn-layer-hover-line"></span>
                                                        </span>
                        </a>
                    </div>

                    <a ng-if="!permision.outerShare" ng-click="enterFullScreen()">
                        <i class="bdp-icon ico-fullscreen-2"></i>
                        <span class="btn-layer-opt">
                                                    {{ 'dash.fullscreen' | translate }}
                            <span class="btn-layer-hover-line"></span>
                                                </span>
                    </a>

                    <social-share ng-if="permision.dashEdit && property == 0 && permision.outerShare" outer-share-info="outer_share_info" dash-selected="currDash.dashSelected" dash-title="dashTitle"></social-share>

                    <a class="more-btn" ng-click="btn_layer.show_more_btn = !btn_layer.show_more_btn" click-outside="btn_layer.show_more_btn = false" outside-active="btn_layer.show_more_btn">
                        <i class="bdp-icon ico-more"></i>
                        <ul class="dropdown-wrap dash-more-list J_dashboard_more_btn" ng-show="btn_layer.show_more_btn">
                            <li ng-if="permision.allowExporting" export-dashboard ng-click="showExportDialog('img')" class="dropdown-item dash-add-item-btn">
                                {{ 'dash.exportDashboard' | translate }}
                            </li>
                            <li ng-if="permision.allowExporting" export-dashboard ng-click="showExportDialog('pdf')" class="dropdown-item dash-add-item-btn">
                                {{ 'dash.exportDashPdf' | translate }}
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
        </div>
        <div class="screen-dashboard">
            <div ng-if="!dashLoading && global.globalDashFilter.length" class="dash-global-wrap" global-filter original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" show-loading="showLoading" on-share-page="isThirdIframe" draw-chart-url="draw_chart_url">
            </div>
            <div ng-include="'./static/js/dashboard/tpl/adv_dashboard_main.html'"></div>
        </div>
    </div>

    <div ng-loading-gif ng-show="dashLoading"></div>),

e.put("/static/js/dashboard/tpl/adv_dashboard_edit.html",
    <div class="data-screen-wrap adv-dashboard-wrap adv-dashboard-edit-wrap">
        <div class="view-header">
            <a class="back-btn" ng-click="backAdvDash()" href="javascript:;">
                <i class="bdp-icon ico-back"></i>
            </a>
            <h2 class="text-center data-screen-edit-title">
                <div class="edit-title-detail">{{dashTitle}}</div>
            </h2>
            <div class="btn-layer">
                <a ng-click="backAdvDash()" href="javascript:;">
                    <i class="bdp-icon ico-ok-blue"></i>
                    <span class="btn-layer-opt">
                                {{ 'complete' | translate }}
                        <span class="btn-layer-hover-line"></span>
                            </span>
                </a>
            </div>
        </div>
        <div class="data-screen-content">
            <div class="screen-main">
                <div class="screen-wrap">
                    <div class="screen-btn-bar clearfix">
                        <div class="toolbar-left bdp-icon-hover-light">
                            <span class="display-inline-block toolbar-title">{{ 'dash.advDash.addEle' | translate }}</span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addChart" tooltip-placement="bottom">
                                        <i class="bdp-icon ico-add-screen-chart cursor-pointer" ng-click="addItem()"></i>
                                    </span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addTitle" tooltip-placement="bottom">
                                        <i class="bdp-icon ico-add-attr cursor-pointer" ng-click="dash.addTextComponent('C105')"></i>
                                    </span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addText" tooltip-placement="bottom">
                                        <i class="bdp-icon ico-add-text cursor-pointer" ng-click="dash.addTextComponent('C101')"></i>
                                    </span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addImage" tooltip-placement="bottom">
                                        <i class="bdp-icon ico-add-img cursor-pointer" ng-click="dash.addImageComponent()"></i>
                                    </span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addVideo" tooltip-placement="bottom">
                                        <i class="bdp-icon ico-add-video cursor-pointer" ng-click="dash.addVideoComponent()"></i>
                                    </span>
                            <span class="display-inline-block seperate-line ml16"></span>
                            <span class="display-inline-block ml16 toolbar-title">{{ 'dash.advDash.guideLine' | translate }}</span>
                            <label class="cursor-pointer ml8">
                                <input type="checkbox" ng-click="showDataScreenGrid = !showDataScreenGrid" ng-model="showDataScreenGrid"><span class="ml4">{{ 'dash.advDash.show' | translate }}</span>
                            </label>
                            <span class="display-inline-block seperate-line ml16"></span>
                            <span class="display-inline-block ml16 toolbar-title">{{ 'dash.advDash.layer' | translate }}</span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.top" tooltip-placement="bottom" ng-click="dash.setZIndex('top')">
                                        <i class="bdp-icon ico-layer-rise cursor-pointer J_set_zindex"></i>
                                    </span>
                            <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.bottom" tooltip-placement="bottom" ng-click="dash.setZIndex('bottom')">
                                        <i class="bdp-icon ico-layer-fall cursor-pointer J_set_zindex"></i>
                                    </span>
                            <span class="display-inline-block seperate-line ml16"></span>
                            <span class="display-inline-block ml16 toolbar-title">{{ 'dash.advDash.scale' | translate }}</span>
                            <label class="display-inline-block ml16">
                                <select ng-model="dash.scaleDashbord.selectedData" ng-change="dash.scaleDashbord.modifyScale();">
                                    <option value="1">{{ 'dash.advDash.actualSize' | translate }}</option>
                                    <option value="2">{{ 'dash.advDash.selfAdaption' | translate }}</option>
                                </select>
                            </label>
                            <span class="display-inline-block seperate-line ml16"></span>
                            <span class="global-filter-set cursor-pointer ml16 toolbar-title" ng-if="!proj_share && dashSelected" global-filter-set original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" dash-standard-items="dashStandardItems" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" draw_chart_url="draw_chart_url">
                                        {{ "dash.globalFilter" | translate }}
                                <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.globalFilter" tooltip-placement="bottom">
                                            <i class="bdp-icon ico-add-filter cursor-pointer"></i>
                                        </span>
                                    </span>
                        </div>
                    </div>
                    <div ng-if="!dashLoading && global.globalDashFilter.length" class="dash-global-wrap" global-filter original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" show-loading="showLoading" on-share-page="isThirdIframe" draw-chart-url="draw_chart_url">
                    </div>
                    <div class="screen-dashboard-wrap screen-dashboard-edit-wrap">
                        <div class="screen-dashboard">
                            <div class="dash-edit-content-view J-dash-edit-content-view">
                                <div ng-include="'./static/js/dashboard/tpl/adv_dashboard_main.html'"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="side-panel J_side_panel adv-dash-side-panel">
                <div datascreen-page-ele ng-if="dash.editChartMetaVisible.pageEle"></div>
                <div chart-style-text save-func="saveDashboard()" ng-if="dash.editChartMetaVisible.text"></div>
                <div chart-style-extend save-func="dash.saveChartStyle(chart)" ng-if="dash.editChartMetaVisible.style"></div>
                <div chart-screen-numerical ng-if="dash.editChartMetaVisible.numerical"></div>
                <div chart-screen-video ng-if="dash.editChartMetaVisible.video"></div>
                <div chart-screen-img ng-if="dash.editChartMetaVisible.img"></div>
                <div datascreen-page-wrap ng-show="dash.editChartMetaVisible.pageWrap"></div>
            </div>
        </div>
    </div>),

e.put("/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
    <div class="dash-fullscreen-wrap display-device-{{fullDisplayDevice}} display-theme-{{fullDisplayTheme === 1 ? 'dark' : 'light'}} dash-edit-content-view data-screen-wrap adv-dashboard-wrap">
        <div class="dash-title-wrap view-header-wrap">
            <div class="clearfix dash-title view-header">
                <h2>{{dashTitle}}</h2>
                <div class="btn-layer">
                    <a class="full-display-setting" ng-click="show_display_theme = !show_display_theme" click-outside="show_display_theme = false" outside-active="show_display_theme">
                        <span class="setting-label">{{ 'dash.displayTheme' | translate }}</span>
                        <span class="btn-layer-opt">
                                    {{fullDisplayTheme === 1 ? 'dash.darkTheme' : 'dash.lightTheme' | translate}}
                            <span class="btn-layer-hover-line"></span>
                                </span>
                        <i class="bdp-icon ico-triangle-down"></i>
                        <ul class="dropdown-wrap" ng-show="show_display_theme">
                            <li class="dropdown-item" ng-click="setFullDisplayTheme(1)">{{ 'dash.darkTheme' | translate }}</li>
                            <li class="dropdown-item" ng-click="setFullDisplayTheme(2)">{{ 'dash.lightTheme' | translate }}</li>
                        </ul>
                    </a>
                    <a class="full-display-setting" ng-click="show_display_devices = !show_display_devices" click-outside="show_display_devices = false" outside-active="show_display_devices">
                        <span class="setting-label">{{ 'dash.displayDevice' | translate }}</span>
                        <span class="btn-layer-opt">
                                    <i class="bdp-icon ico-device ico-device-{{fullDisplayDevice}}"></i>
                                    <span class="btn-layer-hover-line"></span>
                                </span>
                        <i class="bdp-icon ico-triangle-down"></i>
                        <ul class="dropdown-wrap" ng-show="show_display_devices">
                            <li class="dropdown-item" ng-click="setFullDisplayDevice('pc')">
                                <i title="{{ 'dash.pcDevice' | translate }}" class="bdp-icon ico-device-pc"></i>
                            </li>
                            <li class="dropdown-item" ng-click="setFullDisplayDevice('projector')">
                                <i title="{{ 'dash.projectorDevice' | translate }}" class="bdp-icon ico-device-projector"></i>
                            </li>
                            <li class="dropdown-item" ng-click="setFullDisplayDevice('tv')">
                                <i title="{{ 'dash.tvDevice' | translate }}" class="bdp-icon ico-device-tv"></i>
                            </li>
                        </ul>
                    </a>
                    <a ng-click="exitFullScreen();removeFullDisplayStyle()">
                        <i class="bdp-icon ico-exit-fullscreen"></i>
                        <span class="btn-layer-opt">
                                    {{ 'exitFullscreen' | translate }}
                            <span class="btn-layer-hover-line"></span>
                                </span>
                    </a>
                </div>
            </div>
        </div>
        <div class="screen-dashboard-wrap screen-dashboard-edit-wrap">
            <div class="screen-dashboard">
                <div ng-if="!dashLoading && global.globalDashFilter.length" class="dash-global-wrap" global-filter original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" show-loading="showLoading" on-share-page="isThirdIframe" draw-chart-url="draw_chart_url">
                </div>
                <div ng-include="'./static/js/dashboard/tpl/adv_dashboard_main.html'"></div>
            </div>
        </div>

    </div>),

e.put("/static/js/dashboard/tpl/adv_dashboard_main.html",
    <div class="dash-wrapper J-dash-wrapper" ng-class="{
        'dash-one-block':!dashLayoutInfo.show_block,
            'edit-mode':dashEditMode,
                'readonly-mode': !dashEditMode,
                    'dash-fixed-width':dashLayoutInfo.fixed_width,
                        'hide-block-watermark':!dashLayoutInfo.show_block && global.watterMark,
                            'under-workspace':(workspaceList && workspaceList['dash'].length > 0),
                                'dash-mode-free':dashLayoutInfo.layout_style == 2,
                                    'has-global-filter': global.globalDashFilter.length > 0
                                        }" ng-style="dashLayoutInfo.dashWrapperStyle">

        <div class="folder-empty" ng-if="noDashes">
            <i class="bdp-icon ico-new-dashboard ico-no-opacity"></i>
            <p translate="dash.emptyDash" class="mt8 font-text-tip"></p>
        </div>
        <div gridster="gridsterOpts" id="J-export-dashboard-height" class="J_data_screen_hook" ng-style="dashLayoutInfo.gridsterStyle">

            <ul id="J_gridster" ng-if="dashLayoutInfo.layout_style == 2">
                <li gridster-item="item" class="J-export-img-elem-item" ng-repeat="item in dashStandardItems" ng-style="item.itemStyle" ng-hide="chartdel['chart'+current_item.meta.ct_id]" id="{{item.children[0].meta.ct_id}}" data-chart-type="{{item.children[0].meta.type}}" data-chart-id="{{item.children[0].meta.ct_id}}" data-is-special-chart="{{item.children[0].meta.is_special_chart}}" ng-mouseleave="mouseleaveItem()" ng-class="{
                                                'selected':dashLayoutInfo.ct_id === item.children[0].meta.ct_id,
                                                                        'border-left':item.children[0].meta.dash_setting.border_left,
                                                                                                'border-right':item.children[0].meta.dash_setting.border_right,
                                                                                                                        'border-top':item.children[0].meta.dash_setting.border_top,
                                                                                                                                                'border-bottom':item.children[0].meta.dash_setting.border_bottom,
                                                                                                                                                                        'no-title': item.children[0].meta.type === 'C310' || !item.children[0].meta.dash_setting.show_title,
                                                                                                                                                                                                'no-axis': !item.children[0].meta.dash_setting.show_axis,
                                                                                                                                                                                                                        'no-legend': !item.children[0].meta.dash_setting.show_legend,
                                                                                                                                                                                                                                                'component-text': item.children[0].meta.ct_id.indexOf('text_') > -1 || item.children[0].meta.type == 'C105',
                                                                                                                                                                                                                                                                        'no-edit-mode': !dashEditMode,
                                                                                                                                                                                                                                                                                                'top-index-layer': item.isTopIndex,
                                                                                                                                                                                                                                                                                                                        'gridster-no-resize': lockItemPosMap && lockItemPosMap[item.children[0].meta.ct_id]
                                                                                                                                                                                                                                                                                                                                            }">
                    <div class="data-screen-item-box gridbox-border-{{item.borderType}}" ng-show="item.borderType && item.borderType != 'CUSTOM'">
                        <div class="data-screen-item-top">
                            <div class="data-screen-item-left"></div>
                            <div class="data-screen-item-center"></div>
                            <div class="data-screen-item-right"></div>
                        </div>
                        <div class="data-screen-item-middle">
                            <div class="data-screen-item-left"></div>
                            <div class="data-screen-item-center"></div>
                            <div class="data-screen-item-right"></div>
                        </div>
                        <div class="data-screen-item-bottom">
                            <div class="data-screen-item-left"></div>
                            <div class="data-screen-item-center"></div>
                            <div class="data-screen-item-right"></div>
                        </div>
                    </div>
                    <div ng-repeat="child in item.children" ng-class="{'chart-box': ['C102','C104'].indexOf(child.meta.type) < 0, 'gridster-no-drag': lockItemPosMap && lockItemPosMap[child.meta.ct_id] }" class="auto-size J_chart_box" ng-click="dash.clickGridsterItem(child, item)">
                        <!-- 文本组件已不需要，先保留 -->
                        <div ng-if="child.meta.ct_id.indexOf('text_') > -1 || child.meta.type == 'C105'" ng-class="{'ta-edit-mode-on':dashEditMode && textComponentEditMode[child.meta.ct_id]}">
                            <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                <div class="chart-operate-more bdp-icon-wrap" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item);$event.stopPropagation();" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item);">
                                    <i class="bdp-icon ico-more cursor-pointer"></i>
                                    <ul ng-show="more_show" class="dropdown-wrap">
                                        <li class="dropdown-item" translate="edit" ng-click="dash.editTextFromMore(child,item)"></li>
                                        <li class="dropdown-item" translate="dash.copyEle" ng-click="dash.copyComponent(child,item)"></li>
                                        <li class="dropdown-item" translate="dash.moveEle" ng-click="dash.moveComponent(child,item)"></li>
                                        <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id)"></li>
                                        </ul>
                                        </div>
                                        </div>
                                        <div ng-if="dashEditMode" text-angular ng-model="child.meta.html" ng-style="child.meta.style" ng-blur="dash.saveTextComponent(child)" name="{{child.meta.ct_id}}" ta-toolbar="[[]]" ta-unsafe-sanitizer="true"></div>
                                        <div ng-if="!dashEditMode" text-angular class="item-text-chart" ng-style="child.meta.style" ng-model="child.meta.html" ta-disabled="true" ta-unsafe-sanitizer="true"></div>
                                        <div ng-show="dashEditMode && !textComponentEditMode[child.meta.ct_id]" class="base-loading-layer" ng-click="dash.clickGridsterItem(child, item);$event.stopPropagation();"></div>
                                        </div>

                                        <div ng-if="child.meta.type && child.meta.type.indexOf('C102') > -1" class="auto-size screen-item-image">
                                        <div ng-if="item.url" class="auto-size" style="background:url({{item.url}}) no-repeat center; background-size: contain"></div>
                                        <div ng-if="!item.url" class="auto-size screen-item-placeholder-image"></div>
                                        <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                        <div class="chart-operate-more bdp-icon-wrap" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item)" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item);">
                                        <i class="bdp-icon ico-more"></i>
                                        <ul ng-show="more_show" class="dropdown-wrap">
                                        <li class="dropdown-item" translate="dash.copyEle" ng-click="dash.copyComponent(child,item)"></li>
                                        <li class="dropdown-item" translate="dash.moveEle" ng-click="dash.moveComponent(child,item)"></li>
                                        <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id);$event.stopPropagation();"></li>
                                        </ul>
                                        </div>
                                        </div>
                                        </div>

                                        <div ng-if="child.meta.type && child.meta.type.indexOf('C103') > -1" class="auto-size screen-item-image" ng-class="{'screen-item-video': dashLayoutInfo.ct_id === item.children[0].meta.ct_id}">
                                        <div ng-if="!item.src" class="auto-size screen-item-placeholder-video"></div>
                                        <video class="auto-size ng-hide" ng-if="item.autoplay  && item.loop && item.src" ng-show="item.autoplay  && item.loop" muted="muted" preload="auto" controls="controls" autoplay="autoplay" loop="loop" ng-src="{{item.src | trustUrl}}">
                                        </video>
                                        <video class="auto-size ng-hide" ng-if="item.autoplay  && !item.loop && item.src" ng-show="item.autoplay  && !item.loop" muted="muted" preload="auto" controls="controls" autoplay="autoplay" ng-src="{{item.src | trustUrl}}">
                                        </video>
                                        <video class="auto-size ng-hide" ng-if="!item.autoplay  && item.loop && item.src" ng-show="!item.autoplay  && item.loop" muted="muted" preload="auto" controls="controls" loop="loop" ng-src="{{item.src | trustUrl}}">
                                        </video>
                                        <video class="auto-size ng-hide" ng-if="!item.autoplay  && !item.loop && item.src" ng-show="!item.autoplay  && !item.loop" muted="muted" preload="auto" controls="controls" ng-src="{{item.src | trustUrl}}">
                                        </video>

                                        <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                        <div class="chart-operate-more bdp-icon-wrap" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item)" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item);">
                                        <i class="bdp-icon ico-more"></i>
                                        <ul ng-show="more_show" class="dropdown-wrap">
                                        <li class="dropdown-item" translate="dash.copyEle" ng-click="dash.copyComponent(child,item)"></li>
                                        <li class="dropdown-item" translate="dash.moveEle" ng-click="dash.moveComponent(child,item)"></li>
                                        <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id);$event.stopPropagation();"></li>
                                        </ul>
                                        </div>
                                        </div>
                                        </div>

                                        <!-- 注意ngIf增加了一个子作用域，所以$parent要增加一层 -->
                                        <div ng-if="child.meta.type && ['C101','C102','C103','C104','C105'].indexOf(child.meta.type) < 0">
                                        <div class="item-chart-title">
                                        <div class="item-chart-title-bd nowrap J-item-chart-title-bd">
                                        <div class="display-inline-block drill-tip" ng-if="child.meta.level_fields.length > 1">
                                        <i class="bdp-icon ico-drill"></i>
                                        <div class="dropdown-wrap drill-tip-bd">
                                        <span ng-repeat="drill_field in child.meta.level_fields">
                                        <i class="bdp-icon ico-slicesnav-arrow" ng-show="!$first"></i>
                                        {{drill_field.nick_name || drill_field.name}}
                                    </span>
                                </div>
                            </div>
                            <i class="bdp-icon ico-linked" ng-if="child.meta.chart_link.linked_chart_type == '2'"></i>
                            <i class="bdp-icon ico-chart-jump" ng-if="child.meta.chart_jump.can_jump == '1'"></i>
                            <span class="no-margin" ng-click="">{{child.meta.name}}</span>
                            <div class="loading-wrap">
                                <div class="loader-inner ball-spin-fade-loader">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                            <span class="filter-item" ng-repeat="it in child.meta.filter_list_inner" ng-if="it.range.length && !it.adv_type">
                                        <em ng-if="it.data_type === 'date' && !it.granularity" ng-hide="AllMap.indexOf( (it.range | format_date:child.meta.adv_date_list ) ) >= 0">
                                            {{it.range | format_date:child.meta.adv_date_list}}
                                            <span ng-if="it.granularity == 'week'">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                        </em>
                                        <em ng-if="it.data_type === 'date' && it.granularity">{{it.range | inner_range_date_format:it}}
                                            <span ng-if="it.granularity == 'week'">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                        </em>
                                        <em ng-if="it.data_type !== 'date' && !it.inner_adv_type && it.range_type != 0">{{it.range | dash_sub_date:it}}</em>
                                        <em ng-if="it.data_type !== 'date' && ( (it.inner_adv_type && it.rangeNumber != 1) || it.range_type == 0 )">
                                            <span ng-if="!it.nick_name">{{it.name}}</span>
                                            <span ng-if="!!it.nick_name">{{it.nick_name}}</span>
                                            {{'custom' | translate}}
                                            </em>
                                        <em ng-if="it.data_type !== 'date' && it.inner_adv_type && it.rangeNumber == 1 && it.range_type != 0 ">
                                            {{it.rangeFirstField | dash_sub_date:it}}
                                            </em>
                                    </span>
                            <span class="filter-item" ng-repeat="it in child.meta.diff_filter">

                                        <em>{{it}}</em>
                                    </span>
                        </div>
                    </div>
                    <div class="item-chart gridster-no-drag" ng-class="{'noscroll':selected_type === 'C200' || selected_type === 'C400'}" id="{{child.dom_id}}" size-x="{{item.sizeX}}" size-y="{{item.sizeY}}">
                        <div class="drill-crumbs-wrap"></div>
                        <div bdp-chart="draw_chart_url[child.dom_id].options" display-mode="{{item.sizeX + '*' + item.sizeY}}" data-updatetime="{{child.meta.update_time}}" data-index="$parent.$parent.$index" data-domid="child.dom_id" data-lazy-loaded="draw_chart_url[child.dom_id].lazyload" class="chart J-export-img-elem-chart" ng-class="{'chart-table':selected_type === 'C200',
                                                                        'chart-canvas-table': selected_type === 'C200',
                                                                                                                'chart-map':selected_type === 'C271' || selected_type === 'C272',
                                                                                                                                                        'chart-funnel overflow-hidden':selected_type === 'C330',
                                                                                                                                                                                                'show-datalabels': child.meta.dash_setting.show_datalabels,
                                                                                                                                                                                                                                        'hide-total':!child.meta.dash_setting.show_total}" data-ctid="{{draw_chart_url[child.dom_id].options.ct_id}}"></div>
                        <div class="loading-wrap" ng-if="item.children[0].meta.type === 'C310'">
                            <div class="loader-inner ball-spin-fade-loader">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div chart-operate data-ct-id="{{child.meta.ct_id}}" class="gridster-no-drag" data-origin="adv_dash_edit"></div>
        </div>
    </div>

</li>
</ul>
    <div ng-show="showDataScreenGrid" class="data-screen-grid"></div>
</div>

</div>),

e.put("/static/js/dashboard/tpl/chart-edit.html",
    <div class="chart-edit-layer" bindonce="i18nLoaded">
        <div class="view-header J_view_header">
            <a class="back-btn J-create-chart-ok-button" bo-title="'done' | translate" ng-click="verifyChartArgs()">
                <i class="bdp-icon ico-back"></i>
            </a>
            <div class="view-header-seperate-line"></div>
            <h2 class="text-left view-header-left-name ng-cloak" bo-text="'chart.edit' | translate"></h2>
            <span class="btn-layer">
                    <a class="help-btn" bo-title="'help' | translate" ng-click="show_edit_help(this)" ng-show="!isPersonal">
                        <i class="bdp-icon ico-info-bold no-margin"></i>
                    </a>
                    <a class="help-btn color-blue text-undeline J-how-create-button" title="操作示例" ng-click="show_guide_video()" ng-show="!!isPersonal">
                        <i class="bdp-icon ico-play-small"></i>操作示例
                    </a>
                </span>
        </div>
        <div class="chart-left J_chart_left">
            <div chart-data-info class="J_chart_data_info"></div>
            <div class="hd pr hd-field-wrap chart-right-margin J_field_search field-search-cover">
                <p class="hd-field-tip" bo-text="'chart.field'|translate"></p>
                <div class="query-box auto no-margin">
                    <input type="text" class="query-text" ng-input-text ng-model="query">
                </div>
                <div class="add pr">
                    <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.addChartField" guide-item="addChartField" guide-type="chart_edit" watch-status="personalInfo.chart_guide" btn-class="J-dot-add-chart-field" add-class="'dot-guide-add-chart-field'"></div>

                    <div class="J-dot-add-chart-field" ng-click="newFieldTypeSelect = !newFieldTypeSelect" click-outside="newFieldTypeSelect = false" outside-active="newFieldTypeSelect">
                        <a class="cursor-pointer bdp-icon-wrap" bo-title="'chart.addField' | translate">
                            <i class="bdp-icon ico-plus1"></i>
                        </a>
                        <ul class="field-type-select dropdown-wrap" ng-show="newFieldTypeSelect">
                            <li class="dropdown-item" ng-click="createFieldFormula()" bo-text="'chart.addFormulaField'|translate"></li>
                            <li class="dropdown-item" ng-click="createFieldGroup()" bo-text="'chart.addGroupField'|translate"></li>
                            <li class="dropdown-item" ng-click="createFieldByML()" bo-text="'ML_wd.btnRunModel'|translate" ng-if="permision.newTraining && !wsId"></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="bd chart-right-margin J_field_list">
                <ul class="field-list" ng-if="dataInfo.length == 1">
                    <li ng-repeat="field in field_list | query_fields:query" ng-class="{'handler-more':field.handler_more_show}" ng-mouseenter="field.justshowme = true" ng-mouseleave="field.justshowme = false" title="{{field.name}}">
                        <div ng-click="show_edit = !show_edit" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},onStart:'dragTbFunc(field)',onStop:'stopDragField()'}" class="title nowrap {{field.data_type}}-title cursor-pointer" ng-class="{'field-drag-title': !chartMainMask}">
                            <i ng-if="field.data_type==='date'" class="bdp-icon ico-triangle-right" ng-class="{'ico-triangle-down':show_edit}"></i>
                            <i class="bdp-icon ico-type-{{field.ico_type}}" ng-class="{'ico-type-{{field.ico_type}}-orange':field.formula, '-ml': field.made_by_ml && field.formula}"></i>
                            <span class="data-tag" field-set-tooltip="field" tooltip-placement="top-left" ng-if="tbType != 'public'" ng-class="{'border-bottom-5182E4': (field.original_name != field.name || field.remark)}" ng-bind="field.name"></span>
                            <span class="data-tag" ng-if="tbType == 'public'" ng-bind="field.name"></span>
                            <span class="field-handler display-block" ng-if="field.formula != '' && field.editable && field.data_type == 'string' && field.field_type !== 'group'">
                                    <div class="bdp-icon-wrap" bo-title="'more' | translate" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                        <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                        <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                            <li ng-if="field.made_by_ml" class="dropdown-item" ml-field="field" ml-field-action="updateFieldMM" bo-text="'ML_wd.fieldRefresh' | translate"></li>
                                            <li class="dropdown-item" ng-click="modifyField(field)" bo-text="'edit' | translate"></li>
                                            <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, 'source')" bo-text="'sort' | translate"></li>
                                            <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)" bo-text="'remove' | translate"></li>
                                        </ul>
                                    </div>
                                </span>
                            <span ng-if="field.formula != '' && field.editable && field.data_type == 'string' && field.field_type === 'group'" class="field-handler hover-show display-block" ng-hide="guide == 2 && enterprise_type == 3">
                                    <div class="bdp-icon-wrap" bo-title="'more' | translate" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                        <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                        <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                            <li class="dropdown-item" ng-click="modifyField(field)" bo-text="'edit' | translate"></li>
                                            <li class="dropdown-item" ng-click="showEnumOrder(field.fid ,false, 'source')" bo-text="'sort' | translate"></li>
                                            <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)" bo-text="'remove' | translate"></li>
                                        </ul>
                                    </div>
                                </span>
                            <span ng-if="field.formula != '' && field.editable && field.data_type != 'string'" class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                                    <span class="bdp-icon-wrap" ng-click="modifyField(field)" ng-hide="field.made_by_ml" bo-title="'edit' | translate">
                                        <i class="bdp-icon ico-edit"></i>
                                    </span>
                                    <span class="bdp-icon-wrap" ng-click="delNewField(field.name,field.fid)" bo-title="'remove' | translate">
                                        <i class="bdp-icon ico-trash"></i>
                                    </span>
                                </span>
                            <span class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                                    <span class="bdp-icon-wrap" ng-if="field.data_type == 'string' && field.formula ==''" bo-title="'sort' | translate" ng-click="showEnumOrder(field.fid, false, 'source')">
                                        <i class="bdp-icon ico-config-order hover-show"></i>
                                    </span>
                                </span>
                        </div>
                        <ul ng-if="field.data_type == 'date'" ng-show="show_edit" class="date-field ml20">
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\year\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'year'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\quarter\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'quarter'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\month\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'month'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\week\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'week'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\day\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'day'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\hour\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'hour'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\minute\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'minute'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\second\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'second'|translate"></span>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="field-list" ng-if="dataInfo.length > 1 && field_list.hasDimension">
                    <div style="line-height: 32px">
                        <span bo-text="'chart.dimension' | translate"></span>
                        <span class="bdp-icon-wrap fr mt4 cursor-pointer" ng-click="editDimension()">
                                <i class="bdp-icon ico-edit"></i>
                            </span>
                    </div>
                    <li ng-repeat="field in field_list | filter: {type: 'dimension'} | query_fields:query" ng-class="{'handler-more':field.handler_more_show}" ng-mouseenter="field.justshowme = true" ng-mouseleave="field.justshowme = false" title="{{field.name}}">
                        <div ng-click="show_edit = !show_edit" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragTbFunc(field)',onStop:'stopDragField()'}" class="title nowrap {{field.data_type}}-title field-drag-title cursor-pointer">
                            <i ng-if="field.data_type==='date'" class="bdp-icon ico-triangle-right" ng-class="{'ico-triangle-down':show_edit}"></i>
                            <i class="bdp-icon ico-type-{{field.ico_type}}" ng-class="{'ico-type-{{field.ico_type}}-orange':field.formula, '-ml': field.made_by_ml && field.formula}"></i>
                            <span class="data-tag" field-set-tooltip="field" tooltip-placement="top-left" ng-if="tbType != 'public'" ng-class="{'border-bottom-5182E4': (field.original_name != field.name || field.remark)}" ng-bind="field.name"></span>
                            <span class="data-tag" ng-if="tbType == 'public'" ng-bind="field.name"></span>
                            <span class="field-handler display-block" ng-if="field.formula != '' && field.editable && field.data_type == 'string' && field.field_type !== 'group'">
                                    <div class="bdp-icon-wrap" bo-title="'more' | translate" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                        <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                        <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                            <li ng-if="field.made_by_ml" class="dropdown-item" ml-field="field" ml-field-action="updateFieldMM" bo-text="'ML_wd.fieldRefresh' | translate"></li>
                                            <li class="dropdown-item" ng-click="modifyField(field)" bo-text="'edit' | translate"></li>
                                            <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, 'source')" bo-text="'sort' | translate"></li>
                                            <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)" bo-text="'remove' | translate"></li>
                                        </ul>
                                    </div>
                                </span>
                            <span ng-if="field.formula != '' && field.editable && field.data_type == 'string' && field.field_type === 'group'" class="field-handler hover-show display-block" ng-hide="guide == 2 && enterprise_type == 3">
                                    <div class="bdp-icon-wrap" bo-title="'more' | translate" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                        <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                        <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                            <li class="dropdown-item" ng-click="modifyField(field)" bo-text="'edit' | translate"></li>
                                            <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, 'source')" bo-text="'sort' | translate"></li>
                                            <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)" bo-text="'remove' | translate"></li>
                                        </ul>
                                    </div>
                                </span>
                            <span ng-if="field.formula != '' && field.editable && field.data_type != 'string' " class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                                    <span class="bdp-icon-wrap" ng-click="modifyField(field)" bo-title="'edit' | translate">
                                        <i class="bdp-icon ico-edit"></i>
                                    </span>
                                    <span class="bdp-icon-wrap" ng-click="delNewField(field.name,field.fid)" bo-title="'remove' | translate">
                                        <i class="bdp-icon ico-trash"></i>
                                    </span>
                                </span>
                            <span class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                                    <span class="bdp-icon-wrap" ng-if="field.data_type == 'string' && field.formula ==''" bo-title="'sort' | translate" ng-click="showEnumOrder(field.fid, false, 'source')">
                                        <i class="bdp-icon ico-config-order hover-show"></i>
                                    </span>
                                </span>
                        </div>
                        <ul ng-if="field.data_type == 'date'" ng-show="show_edit" class="date-field ml20">
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\year\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'year'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\quarter\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'quarter'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\month\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'month'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\week\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'week'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\day\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'day'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\hour\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'hour'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\minute\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'minute'|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragSubTbFunc(field,\second\)',onStop:'stopDragField()'}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="'second'|translate"></span>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="field-list" ng-if="dataInfo.length > 1 && field_list.hasMeasure">
                    <div style="line-height: 32px">
                        <span bo-text="'chart.valueAxis' | translate"></span>
                    </div>
                    <li ng-repeat="field in field_list | filter: {type: 'measure'} | query_fields:query" ng-class="{'handler-more':field.handler_more_show}" ng-mouseenter="field.justshowme = true" ng-mouseleave="field.justshowme = false" title="{{field.name}}">
                        <div ng-click="show_edit = !show_edit" data-drag="true" data-jqyoui-options="{revert: 'invalid', helper: 'clone',appendTo:'body', scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:'keep',onStart:'dragTbFunc(field)',onStop:'stopDragField()'}" class="title nowrap {{field.data_type}}-title field-drag-title cursor-pointer">
                            <i ng-if="field.data_type==='date'" class="bdp-icon ico-triangle-right" ng-class="{'ico-triangle-down:show_edit}"></i>
                            <i class="bdp-icon ico-type-{{field.ico_type}}" ng-class="{ico-type-{{field.ico_type}}-orange:field.formula, -ml: field.made_by_ml && field.formula}"></i>
                            <span class="data-tag" field-set-tooltip="field" tooltip-placement="top-left" ng-if="tbType != public" ng-class="{border-bottom-5182E4: (field.original_name != field.name || field.remark)}" ng-bind="field.name"></span>
                            <span class="data-tag" ng-if="tbType == public" ng-bind="field.name"></span>
                            <span class="field-handler display-block" ng-if="field.formula !=  && field.editable && field.data_type == string && field.field_type !== group">
                                    <div class="bdp-icon-wrap" bo-title="more | translate" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                        <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                        <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                            <li ng-if="field.made_by_ml" class="dropdown-item" ml-field="field" ml-field-action="updateFieldMM" bo-text="ML_wd.fieldRefresh | translate"></li>
                                            <li class="dropdown-item" ng-click="modifyField(field)" bo-text="edit | translate"></li>
                                            <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, source)" bo-text="sort | translate"></li>
                                            <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)" bo-text="remove | translate"></li>
                                        </ul>
                                    </div>
                                </span>
                            <span ng-if="field.formula !=  && field.editable && field.data_type == string && field.field_type === group" class="field-handler hover-show display-block" ng-hide="guide == 2 && enterprise_type == 3">
                                    <div class="bdp-icon-wrap" bo-title="more | translate" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                        <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                        <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                            <li class="dropdown-item" ng-click="modifyField(field)" bo-text="edit | translate"></li>
                                            <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, source)" bo-text="sort | translate"></li>
                                            <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)" bo-text="remove | translate"></li>
                                        </ul>
                                    </div>
                                </span>
                            <span ng-if="field.formula !=  && field.editable && field.data_type != string" class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                                    <span class="bdp-icon-wrap" ng-click="modifyField(field)" ng-hide="field.param.type == ml" bo-title="edit | translate">
                                        <i class="bdp-icon ico-edit"></i>
                                    </span>
                                    <span class="bdp-icon-wrap" ng-click="delNewField(field.name,field.fid)" bo-title="remove | translate">
                                        <i class="bdp-icon ico-trash"></i>
                                    </span>
                                </span>
                            <span class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                                    <span class="bdp-icon-wrap" ng-if="field.data_type == string && field.formula ==" bo-title="sort | translate" ng-click="showEnumOrder(field.fid, false, source)">
                                        <i class="bdp-icon ico-config-order hover-show"></i>
                                    </span>
                                </span>
                        </div>
                        <ul ng-if="field.data_type == date" ng-show="show_edit" class="date-field ml20">
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\year\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="year|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\quarter\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="quarter|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\month\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="month|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\week\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="week|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\day\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="day|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\hour\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="hour|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\minute\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="minute|translate"></span>
                                </p>
                            </li>
                            <li class="cursor-pointer">
                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\second\\),onStop:stopDragField()}">
                                    <i class="bdp-icon ico-type-3"></i>
                                    <span bo-text="second|translate"></span>
                                </p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!--end chart-left-->
        <a class="toggle-nav drag-btn J-toggle-nav-chart-left chart-left-drag-btn" resize-width-fields-list bo-title="dragResize | translate"></a>
        <div class="chart-main">
            <div class="chart-args">
                <!-- 层级 -->
                <div ng-show="chart_ops.meta.level_fields.length > 1" class="row axis level" ng-class="{multi-axis:viewMeta.chart_type === C250}">
                        <span class="fl axis-head">
                            <span class="axis-head-name" bo-text="chart.layer|translate"></span>
                        </span>
                    <div class="drag-target">
                        <!--x、y正常显示-->
                        <div class="drag-target-inner" ng-model="level_fields" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:join_field(\\drill\\)}">
                            <ul class="drag-target-list drag-target-list-layer J-delete-target-id" ui-sortable="sortAxisDrillField" id="dragDrill" ng-model="chart_ops.meta.level_fields">
                                <li ng-repeat="it in chart_ops.meta.level_fields" class="drag-item drag-level-item J-delete-item-cls" ng-class="{active: $index === drill_level,not-drill-item: $index > drill_level}">
                                    <div class="data-tag remove-icon-pr">
                                            <span class="tag ui-select">
                                                <span class="name" ng-click="emitCrumbsClick($index)">
                                                    <span class="nowrap nick-name" ng-bind="it.nick_name || it.name"></span>
                                                    <i class="inline fl nowrap" ng-if="it.data_type === date">
                                                        ({{it.granularity | granularity}})
                                                    </i>
                                                </span>
                                                <i class="bdp-icon ico-delete-small-gray remove-it-icon" ng-click="removeAxisAction($event, drill, it);"></i>
                                                </span>
                                                <i class="bdp-icon ico-level-arrow" ng-hide="$last"></i>
                                                </div>
                                                <!--end data-tag-->
                                                </li>
                                                </ul>
                                                </div>
                                                </div>
                                                </div>
                                                <!-- 维度 -->
                                                <div class="row axis" ng-class="{multi-axis:viewMeta.chart_type === C250}">
                                                <span class="fl axis-head">
                                                <span class="axis-head-name" bo-text="chart.dimension | translate"></span>
                                                <i class="bdp-icon ico-edit batch-add-axis-btn" ng-click="batchOnDropAdd(x)"></i>
                                                </span>
                                                <div class="drag-target">
                                                <div class="y_operate" ng-hide="!!viewMeta.compare_axis || viewMeta.chart_type == C280 || viewMeta.chart_type == C340" ng-click="axisHandle.add(compare_axis)">
                                                <i class="bdp-icon ico-handle-compare"></i>
                                                <span bo-text="chart.addCompareAxis | translate"></span>
                                                </div>
                                                <!--x、y正常显示-->
                                                <div class="drag-target-inner xAxis" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\x\\)}">
                                                <ul class="drag-target-list drag-target-list-dimension J-delete-target-id" id="dragX" ui-sortable="sortAxisField" ng-model="viewMeta.x">
                                                <li ng-repeat="it in viewMeta.x" class="drag-item J-delete-item-cls" ng-class="{not-sortable: chart_ops.meta.level_fields.length > 1 && !$index && it.fid === chart_ops.meta.level_fields[drill_level].fid}" click-outside="it.show_formula = false" outside-active="it.show_formula" data-jqyoui-options="{appendTo:body, scroll: false,animate:false,greedy:true, accept: .field-list .field-drag-title}" data-drop="true" data-jqyoui-droppable="{onDrop:join_field(\\x\\,$index,it)}">
                                                <div class="data-tag" ng-class="{remove-icon-pr: !(chart_ops.meta.level_fields.length > 1 && !$index && it.fid === chart_ops.meta.level_fields[drill_level].fid)}">
                                                <span class="tag ui-select">
                                                <span class="name" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)" ng-click="it.show_formula = !it.show_formula">
                                                <i class="bdp-icon ico-triangle-down1 fl"></i>
                                                <i class="fl bdp-icon ico-sort" ng-if="viewMeta.sort.type !== && viewMeta.sort.type !== custom && viewMeta.sort.axis === x && viewMeta.sort.fid == it.fid && viewMeta.is_advanced_sort == 0 && isSortField({field:it, axis:x})" ng-class="fieldSortType({index: $index})"></i>
                                                <span class="nowrap" ng-bind="it.name" ng-if="!it.nick_name"></span>
                                                <span class="nowrap nick-name" ng-bind="it.nick_name" ng-if="it.nick_name != undefined && it.nick_name != "></span>
                                                <i class="inline fl nowrap granularity" ng-if="it.data_type === date">
                                                ({{it.granularity|granularity}})
                                                </i>
                                                <i class="inline fl nowrap granularity" ng-if="viewMeta.chart_type === C200 && it.data_type === string && permision.tableImg">
                                                ({{it.data_show_type|dataShowType}})
                                                </i>
                                                </span>
                                                <i class="bdp-icon ico-delete-small remove-it-icon" ng-if="!(chart_ops.meta.level_fields.length > 1 && !$index && it.fid === chart_ops.meta.level_fields[drill_level].fid)" ng-click="removeAxisAction($event, x, it);"></i>
                                                <div class="data-formula" ng-show="it.show_formula">
                                                <div string-data-show-type ng-if="viewMeta.chart_type === C200 && it.data_type === string && permision.tableImg" tb-id="tb_id" field="it" axis="x" set-data-show-type="setDataShowType"></div>
                                                <div date-granularity ng-if="it.data_type === date" tb-id="tb_id" field="it" axis="x" set-granularity="setGranularity"></div>
                                                <div dimension-compare-sort axis="x"></div>
                                                </div>
                                                </span>
                                                </div>
                                                <!--end data-tag-->
                                                <div class="field-tip dropdown-wrap">
                                                <span>{{it.name}}</span>
                                    </div>
                                </li>
                                <div class="pr display-inline-block" ng-if="enterprise_type == 3 && viewMeta.x && viewMeta.x.length > 0">
                                    <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.drillChart" guide-item="drillChart" guide-type="chart_edit" watch-status="personalInfo.chart_guide" btn-class="J-dot-drill-chart" add-class="dot-guide-drill-chart"></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <!--end drag-target-->
                </div>
                <!-- 对比 -->
                <div class="row axis" ng-if="!!viewMeta.compare_axis" ng-class="{multi-axis:viewMeta.chart_type === C250}">
                        <span class="fl axis-head">
                            <span class="axis-head-name" bo-text="chart.compare | translate"></span>
                            <i class="bdp-icon ico-edit batch-add-axis-btn" ng-click="batchOnDropAdd(compare_axis)"></i>
                        </span>
                    <div class="drag-target">
                        <div class="y_operate" ng-click="axisHandle.remove(compare_axis)">
                            <i class="bdp-icon ico-handle-compare"></i>
                            <span bo-text="chart.removeCompareAxis | translate"></span>
                        </div>
                        <div class="drag-target-inner yAxis" ng-model="compare_list" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\compare_axis\\)}">
                            <ul class="drag-target-list drag-target-list-dimension J-delete-target-id" id="dragCompare_axis" ui-sortable="sortAxisField" ng-model="viewMeta.compare_axis">
                                <li ng-repeat="it in viewMeta.compare_axis track by $index" class="drag-item J-delete-item-cls" click-outside="it.show_formula = false" outside-active="it.show_formula" ng-class="{virtual-field: it.data_type === virtual}">
                                    <div class="virtual-field-hint bdp-tooltip" ng-if="!hasShownVirtualFieldHint && it.data_type === virtual">
                                        <i class="bdp-icon ico-cancel" ng-click="turnOffVirtualFieldHint();"></i>
                                        <div class="bdp-tooltip-content">
                                            <div class="content">
                                                <p><span bo-text="chart.virtualFieldHint_1 | translate"></span><br><span bo-text="chart.virtualFieldHint_2 | translate"></span></p>
                                            </div>
                                        </div>
                                        </div>
                                        <div class="data-tag" ng-class="{remove-icon-pr: !(it.data_type === virtual)}">
                                        <span class="tag ui-select">
                                        <span class="name" ng-click="it.show_formula = !it.show_formula">
                                        <i class="bdp-icon ico-triangle-down1 fl" ng-if="it.data_type != virtual || (viewMeta.chart_type == C200 && viewMeta.tb_flip)"></i>
                                        <i class="fl bdp-icon ico-sort" ng-if="viewMeta.is_advanced_sort != 1 && it.compare_sort.type !== && it.compare_sort.type !== custom && isSortField({field:it, axis:compare_axis, index: $index})" ng-class="fieldSortType({axis: compare_axis, index: $index})"></i>
                                        <span class="nowrap" ng-bind="it.name"></span>
                                        <i class="inline fl nowrap granularity" ng-if="it.data_type === date">
                                        ({{it.granularity|granularity}})
                                        </i>
                                        </span>
                                        <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeAxisAction($event, compare_axis, it);" ng-if="it.data_type != virtual"></i>
                                        <div class="data-formula" ng-if="it.data_type != virtual || (viewMeta.chart_type == C200 && viewMeta.tb_flip)" ng-show="it.show_formula">
                                        <div date-granularity ng-if="it.data_type === date" tb-id="tb_id" field="it" axis="compare_axis" set-granularity="setGranularity"></div>
                                        <div dimension-compare-sort axis="compare_axis"></div>
                                        </div>
                                        </span>
                                        </div>
                                        <!--end data-tag-->
                                        </li>
                                        </ul>
                                        </div>
                                        <!--drag target inner-->
                                        </div>
                                        </div>
                                        <!-- 数值 普通 双轴左 散点X -->
                                        <div class="row axis" ng-class="{multi-axis:viewMeta.chart_type === C250}">
                                        <div class="fl axis-head">
                                        <span class="axis-head-name" ng-if="viewMeta.chart_type == C280" bo-text="chart.scatterX|translate"></span>
                                        <span class="axis-head-name" ng-if="viewMeta.chart_type !== C280" bo-text="chart.valueAxis|translate"></span>
                                        <i class="bdp-icon ico-edit batch-add-axis-btn" ng-click="batchOnDropAdd(y)" ng-if="!(viewMeta.chart_type === C250) && !(viewMeta.show_y_axis_optional)"></i>
                                        <div class="axis-type" ng-if="viewMeta.chart_type === C250" double-yaxis-chart-type chart-ops="chart_ops" type="0" drill-level="drill_level" save="saveChartImmediate" warn-setting="warnSetting"></div>
                                        </div>
                                        <div class="drag-target">
                                        <div class="y_operate" ng-hide="viewMeta.show_y_axis_optional || viewMeta.chart_type == C280">
                                        <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.biaxialDiagram" guide-item="biaxialDiagram" guide-type="chart_edit" watch-status="personalInfo.chart_guide" btn-class="J-dot-biaxial-diagram" add-class="dot-guide-biaxial-diagram"></div>
                                        <div class="J-dot-biaxial-diagram" ng-click="axisHandle.add(y_optional)">
                                        <i class="bdp-icon ico-handle-yaxis"></i>
                                        <span bo-text="chart.addYAxis | translate"></span>
                                        </div>
                                        </div>
                                        <!--x、y正常显示-->
                                        <div class="drag-target-inner yAxis" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\y\\)}">
                                        <ul class="drag-target-list drag-target-list-dimension pr J-delete-target-id" id="dragY" ui-sortable="sortAxisField" ng-class="{not-sortable:viewMeta.chart_type == C280}" ng-model="viewMeta.y">
                                        <li ng-repeat="it in viewMeta.y" class="drag-item J-delete-item-cls" click-outside="it.show_formula = false" outside-active="it.show_formula" ng-class="{virtual-field: it.data_type === virtual, not-sortable: it.data_type === virtual}" mask-guide ng-mg-if="guideApi.timePredicted && chart_ops.meta.level[drill_level].chart_type == C220 && viewMeta.x && viewMeta.x.length == 1 && viewMeta.x[0].data_type == date" ng-mg-key="timePredicted">
                                        <div class="data-tag" ng-class="{remove-icon-pr: !(it.data_type === virtual)}">
                                        <span class="tag ui-select">
                                        <span class="name" ng-click="showFormula(it)" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)">
                                        <i class="bdp-icon ico-triangle-down1 fl"></i>
                                        <i class="fl bdp-icon ico-filter-white" ng-if="it.post_filter && it.post_filter.enabled != 0"></i>
                                        <i class="fl bdp-icon ico-sort" ng-if="viewMeta.is_advanced_sort == 0 && isSortField({field:it, axis:y}) && viewMeta.sort.axis === y" ng-class="fieldSortType()"></i>
                                        <span class="nowrap nick-name" ng-bind="it.nick_name" ng-if="it.nick_name != undefined && it.nick_name != "></span>
                                        <span class="nowrap" title="" ng-bind="it.name" ng-if="!it.nick_name"></span>
                                        <i data-total="it.aggregator" ng-if="it.aggregator != undefined && !it.nick_name" class="inline fl aggr-name nowrap" title="">{{setAdvanceAggregatorName(it)}}</i>
                                </span>
                                <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeAxisAction($event, y, it);" ng-if="!(it.data_type === virtual)"></i>
                                <div class="data-formula" ng-show="it.show_formula" field-formula="{data_type:it.data_type}"></div>
                            </span>
                        </div>
                        <!--end data-tag-->
                        <div class="field-tip dropdown-wrap" ng-if="(it.hasOwnProperty(nick_name) && it.nick_name !==)">
                            <span>{{it.name}}{{setAdvanceAggregatorName(it)}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <!--drag target inner-->
        </div>
    </div>
    <!-- 数值 双轴右 -->
    <div class="row axis" ng-if="viewMeta.show_y_axis_optional" ng-class="{multi-axis:viewMeta.chart_type === C250}">
        <div class="fl axis-head">
            <span class="axis-head-name" bo-text="chart.valueAxis|translate"></span>
            <div class="axis-type" ng-if="viewMeta.chart_type === C250" double-yaxis-chart-type chart-ops="chart_ops" type="1" drill-level="drill_level" save="saveChartImmediate" warn-setting="warnSetting"></div>
        </div>
        <div class="drag-target">
            <div class="y_operate" ng-show="viewMeta.show_y_axis_optional" ng-click="axisHandle.remove(y_optional)">
                <i class="bdp-icon ico-handle-yaxis"></i>
                <span bo-text="chart.removeYAxis | translate"></span>
            </div>
            <!--x、y正常显示-->
            <div class="drag-target">
                <div class="drag-target-inner yAxis" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\y_optional\\)}">
                    <ul class="drag-target-list drag-target-list-dimension J-delete-target-id" id="dragY_optional" ui-sortable="sortAxisField" ng-model="viewMeta.y_optional">
                        <li ng-repeat="it in viewMeta.y_optional" class="drag-item J-delete-item-cls" ng-init="it.show_formula = false" click-outside="it.show_formula = false" outside-active="it.show_formula">
                            <div class="data-tag remove-icon-pr">
                                <span class="tag ui-select">
                                    <span class="name" ng-click="showFormula(it)" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)">
                                        <i class="bdp-icon ico-triangle-down1 fl"></i>
                                        <i class="fl bdp-icon ico-filter-white" ng-if="it.post_filter && it.post_filter.enabled != 0"></i>
                                        <i class="fl bdp-icon ico-sort" ng-if="isSortField({field:it, axis:y_optional}) && viewMeta.sort.axis === y" ng-class="fieldSortType()"></i>
                                        <span class="nowrap" ng-bind="it.nick_name" ng-if="!!it.nick_name"></span>
                                        <span class="nowrap" title="" ng-bind="it.name" ng-if="!it.nick_name"></span>
                                        <i ng-if="it.aggregator != undefined && !it.nick_name" class="inline fl nowrap aggr-name" title="">{{setAdvanceAggregatorName(it)}}</i>
                                </span>
                                <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeAxisAction($event, y_optional, it);"></i>
                                <div class="data-formula" ng-show="it.show_formula" field-formula="{data_type:it.data_type,yAxis:y_optional}"></div>
                            </span>
                </div>
                <!--end data-tag-->
                <div class="field-tip dropdown-wrap" ng-if="(it.hasOwnProperty(nick_name) && it.nick_name !==)">
                    <span>{{it.name}}{{setAdvanceAggregatorName(it)}}</span>
                </div>
            </li>
        </ul>
    </div>
    <!--drag target inner



    -->
    <!--</div> </div> </div>-->
    <!-- 数值 散点Y -->
    <div class="row axis" ng-if="viewMeta.chart_type == C280">
        <div class="fl axis-head">
            <span class="axis-head-name" bo-text="chart.scatterY|translate"></span>
        </div>
        <div class="drag-target">
            <div class="drag-target-inner yAxis" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\y_scatter\\)}">
                <ul class="drag-target-list drag-target-list-dimension not-sortable J-delete-target-id" id="dragY_scatter" ui-sortable="sortAxisField" ng-model="viewMeta.y_scatter">
                    <li ng-repeat="it in viewMeta.y_scatter" class="drag-item J-delete-item-cls" click-outside="it.show_formula = false" outside-active="it.show_formula">
                        <div class="data-tag remove-icon-pr">
                            <span class="tag ui-select">
                                <span class="name" ng-click="showFormula(it)" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)">
                                    <i class="bdp-icon ico-triangle-down1 fl"></i>
                                    <i class="fl bdp-icon ico-filter-white" ng-if="it.post_filter && it.post_filter.enabled != 0"></i>
                                    <span class="nowrap" ng-bind="it.nick_name" ng-if="!!it.nick_name"></span>
                                    <span class="nowrap" title="" ng-bind="it.name" ng-if="!it.nick_name"></span>
                                    <i ng-if="it.aggregator != undefined && !it.nick_name" class="inline fl aggr-name nowrap" title="">{{setAdvanceAggregatorName(it)}}</i>
                                </span>
                                <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeAxisAction($event, y_scatter, it);"></i>
                                <div class="data-formula" ng-show="it.show_formula" field-formula="{data_type:it.data_type, yAxis: y_scatter}"></div>
                                </span>
                                </div>
                                <!--end data-tag-->
                                <div class="field-tip dropdown-wrap">
                                <span>{{it.name}}{{setAdvanceAggregatorName(it)}}</span>
                        </div>
                    </li>
                </ul>
            </div>
            <!--drag target inner-->
        </div>
    </div>
    <!-- </div>-->

    <!--end chart args-->
    <div class="chart-left-side" ng-class="{hide-color-setting: !canSetColor(viewMeta.chart_type)}">
        <div chart-filter></div>
        <div class="color-setting-layer" chart-color-setting ng-show="canSetColor(viewMeta.chart_type)" ng-if="viewMeta.chart_type != C280"></div>
        <div class="scatter-bubble-layer" ng-if="viewMeta.chart_type == C280" ng-controller="bubbleTabCtrl">
            <hr class="split">
                <div class="tab-hd clearfix">
                    <a class="tab-hd-item" ng-click="tab.index = 0" ng-class="{active : tab.index == 0}" bo-text="color|translate"></a>
                    <a class="tab-hd-item" ng-click="tab.index = 1" ng-class="{active : tab.index == 1}" bo-text="size|translate"></a>
                </div>
                <div class="tab-bd">
                    <div class="tab-scatter-color" chart-color-setting ng-show="tab.index == 0"></div>
                    <div class="tab-scatter-bubble" bubble-size ng-show="tab.index == 1"></div>
                </div>
        </div>
    </div>
    <a class="toggle-nav drag-btn" resize-width-filter-list bo-title="dragResize|translate"></a>
    <div id="chartBox">
        <div chart-info-summary class="cursor-pointer chart-info-summary-icon">
            <i class="bdp-icon ico-info-sign"></i>
            <div class="dropdown-wrap chart-info-summary">
                <em class="arrow-up"></em>
                <div class="summary-content-wrap">
                    <table class="chart-info-summary-content">
                        <ul>
                            <li class="label nowrap" bo-text="chart.dataUpdate|translate"></li>
                            <li class="text">
                            {{tb_update_time | date:yyyy-MM-dd HH:mm:ss}}
                        </li>
                    </ul>
                    <ul ng-repeat="y in yAxis" ng-if="y.description">
                        <li class="label nowrap">{{y.nick_name || y.name}}</li>
                        <li class="text">{{y.description}}</li>
                    </ul>
                    <ul ng-repeat="x in xAxis" ng-if="x.description">
                        <li class="label nowrap">{{x.nick_name || x.name}}</li>
                        <li class="text">{{x.description}}</li>
                    </ul>
                    <ul ng-if="description">
                        <li class="label nowrap" bo-text="chart.description|translate"></li>
                        <li class="text">{{description}}</li>
                    </ul>
                </table>
            </div>
        </div>
    </div>
    <div chart-inner-filter chartid="chartid" class="clearfix"></div>

    <advance-sort chart-options="draw_chart_url.options" chart-meta="viewMeta" drill-level="drill_level" bdp-chart-obj="$bdpChart" save-chart-fun="saveChartImmediate()" chart-mode="edit"></advance-sort>

    <a href="javascript:;" class="table-flip" ng-if="selected_type === C200" title="{{ chart.tableFlip | translate}}">
        <i class="bdp-icon" ng-class="{ico-flip-ccw:viewMeta.tb_flip,ico-flip-cw:!viewMeta.tb_flip}"></i>
    </a>
    <a href="javascript:;" style="display: none" ng-click="revertSelection()" class="bdp-icon-wrap revert-selection J-revert-selection" ng-if="chartConfig.canSetSelectionAnalysis" bo-title="chart.reverSelection | translate">
        <i class="bdp-icon ico-revert-selection"></i>
    </a>
    <div class="drill-crumbs-wrap"></div>
    <div bdp-chart="draw_chart_url.options" display-mode="edit" data-options="draw_chart_url.options" data-lazy-loaded="draw_chart_url.lazyload" class="chart J_chart_box" ng-class="{
                            cursor-crosshair: inAddingMarkPoint,
        chart-table:selected_type === C200,
                                                                    chart-canvas-table: selected_type === C200,
                                                                                        chart-funnel overflow-hidden:selected_type === C330,
                                                                                                            show-datalabels: viewMeta.show_datalabels == true}">

    </div>
    <!-- </div>-->
    <div class="chart-main-mask" ng-if="chartMainMask"></div>
    <!-- </div>-->
    <!--end chart-main-->
    <div class="chart-right J-chart-right" chart-config></div>
    <!--end chart-right-->
    <div class="chart-type-tip">
        <em class="arrow"></em>
        <p class="chart-type-name">{{chartTypeConfigMesg.name}}</p>
        <p ng-if="chartTypeConfigMesg.showCombination.length == 0">
            <span>{{chartTypeConfigMesg.showDimension}}</span>
            <span ng-if="chartTypeConfigMesg.dimension == only0 || chartTypeConfigMesg.dimension == onlyOne || chartTypeConfigMesg.dimension == 0orOne" bo-text="chart_type_tip.dimension|translate"></span>
            <span ng-if="chartTypeConfigMesg.dimension != only0 && chartTypeConfigMesg.dimension != onlyOne && chartTypeConfigMesg.dimension != 0orOne" bo-text="chart_type_tip.dimensions|translate"></span>
            <span ng-if="chartTypeConfigMesg.type === C271 || chartTypeConfigMesg.type === C272">(<span bo-text="chart_type_tip.administrativeRegion|translate"></span>)</span>
            <span ng-if="chartTypeConfigMesg.needComparison">(<span bo-text="chart_type_tip.enableComparison|translate"></span>)</span>
        </p>
        <p ng-if="chartTypeConfigMesg.showCombination.length == 0">
            <span>{{chartTypeConfigMesg.showMetric}}</span>
            <span bo-text="chart_type_tip.metrics|translate"></span>
        </p>
        <p ng-if="chartTypeConfigMesg.showCombination.length > 0">{{chartTypeConfigMesg.showCombination[0]}}
            <span ng-if="chartTypeConfigMesg.needComparison">(<span bo-text="chart_type_tip.enableComparison|translate"></span>)</span>
        </p>
        <p ng-if="chartTypeConfigMesg.showCombination.length > 0">{{chartTypeConfigMesg.showCombination[1]}}</p>
    </div>
    <div class="guide guide-chart-edit" ng-show="show_chart_edit_guide">
        <div class="guide-switch-ds">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-up"></em>
                <span bo-text="chart.switchDs | translate"></span>
            </div>
        </div>
        <div class="guide-chart-field">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-down"></em>
                <span bo-text="chart.fieldList | translate"></span>
            </div>
        </div>
        <div class="guide-chart-axis">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-down"></em>
                <span bo-text="chart.dragAxisTip | translate"></span>
            </div>
        </div>
        <div class="guide-chart-title">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-down"></em>
                <span bo-text="chart.modifyChartName | translate"></span>
            </div>
        </div>
        <div class="guide-chart-filter">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-down"></em>
                <span bo-text="chart.addFilter | translate"></span>
            </div>
        </div>
        <div class="guide-switch-type">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-right"></em>
                <span bo-text="chart.switchChartTypeTip | translate"></span>
            </div>
        </div>
        <div class="guide-chart-setting">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip">
                <em class="arrow arrow-right"></em>
                <span bo-text="chart.settingsTip | translate"></span>
            </div>
        </div>
        <div class="guide-draw-chart">
            <div class="guide-opacity-bg"></div>
            <div class="guide-tip" bo-text="chart.renderChartTip|translate"></div>
        </div>
    </div>
    <div class="guide guide-add-to-axis" ng-if="add_to_axis_guide">
        <div class="guide-opacity-bg"></div>
        <div class="guide-tip">
            <em class="arrow arrow-down"></em>
            <span bo-text="chart.axisTip | translate"></span>
        </div>
    </div>
    <div class="guide guide-select-chart-type" ng-if="select_chart_type_guide">
        <div class="guide-opacity-bg"></div>
        <div class="guide-tip">
            <em class="arrow arrow-up"></em>
            <span bo-text="chart.selectType | translate"></span>
        </div>
    </div>
    <div class="add-point-mask" ng-if="inAddingMarkPoint">
        <div class="mask-left mask"></div>
        <div class="mask-top mask">
            <div bo-text="chart.addMarkPointTip|translate"></div>
        </div>
        <div class="mask-right mask"></div>
    </div>
</div>
    <div class="guide-video" ng-show="showGuideVideo" bindonce>
        <div class="video-wrap J-guide-video slow-in">
            <span class="video-close bdp-icon" bo-title="close|translate" ng-click="close_guide_video()">
                <i class="bdp-icon ico-cancel-white"></i>
            </span>
        </div>
    </div>

    <div class="hz-tip error hidden" id="dataOver">
        <span></span>
    </div>

    <div ng-loading-gif ng-show="chartContentLoading"></div>),

e.put("/static/js/dashboard/tpl/chart-operate-more.html",
    <div class="chart-operate-more bdp-icon-wrap J-dot-dash-edit" ng-class="{active is-show-wrap-bg:more_show == true}" click-outside="more_show = false" outside-active="more_show" bo-title="more|translate" ng-click="setOperatorPos($event, child.meta.ct_id, item);" ng-mouseleave="setOperatorIndex(false,false,item);" data-ct-id="{{child.meta.ct_id}}">
        <i class="bdp-icon ico-more"></i>
        <ul bindonce ng-show="more_show" class="dropdown-wrap">
            <li ng-if="permision.allowExporting && [C200, C310].indexOf(child.meta.drillChartType) < 0 && !child.meta.split_compare && !child.meta.is_js_chart && chartOptMorePermission.exportingChart" export-img data-mode="dashboard" data-setting="{{child.meta.dash_setting}}" bo-text="dash.exportImg|translate" data-filename="{{child.meta.name}}" class="dropdown-item"></li>

            <li ng-if="permision.allowExporting && global.exportDataSetting.is_export == 1 && (child.meta.type !== C500 || (child.meta.type === C500 && customChartEnableExportExcel)) && chartOptMorePermission.exportingExcel" data-charttype="{{child.meta.type}}" export-excel data-mode="dashboard" class="dropdown-item" bo-text="dash.exportExcel|translate"></li>
            <li ng-if="!proj_share && permision.dashOperate && child.meta.property == 0 && chartOptMorePermission.moveChart" ng-click="move_chart()" class="dropdown-item" bo-text="dash.moveChart|translate"></li>
            <li ng-if="!proj_share && permision.dashOperate  && child.meta.property == 0 && chartOptMorePermission.copyChart" ng-click="copy_chart()" class="dropdown-item" bo-text="dash.copyChart|translate"></li>
            <li ng-if="!proj_share && permision.dashOperate  && child.meta.property == 0" ng-click="chartChain.open(child.meta)" class="pr chart-china-text dropdown-item" ng-class="{dropdown-item-disabled: !child.meta.supportChain}">
                <span bo-text="dash.chartLink|translate"></span>
                <span class="del-chart-chain" ng-if="child.meta.chart_link.linked_chart_type == 2" ng-click="chartChain.del($event,child.meta.ct_id)">
                <i class="bdp-icon ico-trash"></i>
            </span>
            </li>
            <li ng-if="!proj_share && permision.dashOperate && permision.showChartJump && child.meta.property == 0 && chartOptMorePermission.jumpChart" ng-click="chartDashJump.showDia(child.meta)" class="pr chart-china-text dropdown-item" ng-class="{dropdown-item-disabled: !chartDashJump.checkSupport(child.meta)}">
                <span bo-text="dash.dashChartJump|translate"></span>
                <span class="del-chart-chain" ng-if="child.meta.chart_jump.can_jump == 1" ng-click="chartDashJump.del($event, child.meta.ct_id)">
                <i class="bdp-icon ico-trash"></i>
            </span>
            </li>

            <li ng-if="!proj_share && permision.dashOperate && child.meta.property == 0" ng-click="del()" bo-text="remove|translate" class="dropdown-item"></li>
        </ul>
    </div>),

e.put("/static/js/dashboard/tpl/chart-operate.html",
    <div class="chart-operate" bindonce="i18nLoaded">
        <a class="cursor-pointer bdp-icon-wrap J-revert-selection" style="display: none" ng-click="revertSelection()" bo-title="dash.revertSelection | translate">
            <i class="bdp-icon ico-revert-selection"></i>
        </a>
        <a class="cursor-pointer bdp-icon-wrap chart-op-refresh" ng-click="refreshChart({type:refresh})" bo-title="dash.chartRefresh | translate" ng-if="chartOptPermission.refresh">
            <i class="bdp-icon ico-refresh"></i>
        </a>
        <a class="bdp-icon-wrap chart-op-edit" ng-if="!proj_share && permision.dashOperate && child.meta.property == 0 && !isFullscreenMode && chartOptPermission.edit" ng-click="edit()" bo-title="edit | translate">
            <i class="bdp-icon ico-edit"></i>
        </a>
        <a ng-if="canEnterFullScreen() && chartOptPermission.fullScreen" chart-full-screen chart-url="draw_chart_url" domid="child.dom_id" standard-items="dashStandardItems" class="chart-op-fs"></a>
        <div chart-info-summary class="pr bdp-icon-wrap chart-info-summary-icon chart-op-sum" ng-if="chartOptPermission.summary">
            <i class="bdp-icon ico-info-bold" ng-class="{active: child.meta.refresh}"></i>
            <div class="dropdown-wrap chart-info-summary">
                <em class="arrow-up"></em>
                <div class="summary-content-wrap">
                    <table class="chart-info-summary-content">
                        <ul>
                            <li class="label" style="width:{{width}}px" bo-text="dash.dataUpdate| translate"></li>
                            <li class="text">{{tb_update_time | date:yyyy-MM-dd HH:mm:ss}}</li>
                        </ul>
                        <ul ng-if="child.meta.refresh">
                            <li class="label" style="width:{{width}}px" bo-text="dash.upadateStatus| translate"></li>
                            <li class="text" bo-text="dash.chartDataRefresh | translate"></li>
                        </ul>
                        <ul ng-repeat="y in yAxis" ng-if="y.description">
                            <li class="label" title="{{y.nick_name || y.name}}">{{y.nick_name || y.name}}</li>
                            <li class="text">{{y.description}}</li>
                        </ul>
                        <ul ng-repeat="x in xAxis" ng-if="x.description">
                            <li class="label" title="{{x.nick_name || x.name}}">{{x.nick_name || x.name}}</li>
                            <li class="text">{{x.description}}</li>
                        </ul>
                        <ul ng-if="description">
                            <li class="label" bo-text="dash.chartRemark| translate"></li>
                            <li class="text">{{description}}</li>
                        </ul>
                    </table>
                </div>
            </div>
        </div>
        <a class="bdp-icon-wrap chart-warn-alert-icon chart-op-warn" ng-if="canSetWarnLine() && chartOptPermission.sort" ng-click="showSetWarningDialog()" bo-title="chart.warningSetting| translate">
            <i class="bdp-icon ico-alarm-on" ng-class="{ico-alarm-active: warnSwitchOn, ico-always-highlight: warnSwitchOn}"></i>
        </a>
        <div dash-filter adv-date-list="child.meta.adv_date_list" chart-options="draw_chart_url[child.dom_id].options" opts="item.children[0]" ng-if="chartOptPermission.dashFilter">
        </div>

        <advance-sort chart-options="draw_chart_url[child.dom_id].options" chart-meta="child.meta" drill-level="drill_level" bdp-chart-obj="$bdpChart" chart-mode="dashboard"></advance-sort>

        <div operate-more data-chart-url="draw_chart_url[child.dom_id]" opts="item.children[0]" ng-hide="global.hideChartMore || (proj_share && child.meta.type == C500)" ng-if="chartOptPermission.more"></div>
    </div>),



e.put("/static/js/dashboard/tpl/dash-edit.html",
    <div ng-if="!global.showMobLayout" id="J_dashEditView" class="dash-edit-content-view" ng-class="{add-chart-ref:newChartFunc.showHandlers}" bindonce="i18nLoaded">

        <div class="dash-title-wrap view-header-wrap" ng-hide="dashEditMode">
            <div class="clearfix dash-title view-header">
                <h2>{{dashTitle}}</h2>
                <div class="btn-layer" ng-if="!dashFullscreen && permision.dashEdit && property == 0 && !isThirdIframeMobile.type">

                    <a ng-if="!proj_share && !dashEditMode && !(enterprise_type == 5 || enterprise_type == 6)" class="dash-add-item-btn" flash-guide ng-fg-if="dashStandardItems.length > 0 && guideApi.addChartGuide == 1" ng-fg-key="addChartGuide">
                        <i class="bdp-icon ico-add-chart" ng-click="addItem()"></i>
                        <span class="btn-layer-opt" ng-click="addItem()">
                        <span bo-text="dash.addChart | translate"></span>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                        <i class="bdp-icon ico-triangle-down" ng-if="dashStandardItems.length > 0" ng-click="btn_layer.show_addchart_opt = !btn_layer.show_addchart_opt" click-outside="btn_layer.show_addchart_opt = false" outside-active="btn_layer.show_addchart_opt"></i>
                        <ul class="dropdown-wrap" ng-show="btn_layer.show_addchart_opt">
                            <li class="dropdown-item" ng-click="newChartFunc.editState(true)">
                                <i class="bdp-icon ico-designate"></i>
                                <span bo-text="dash.createChartSelctPos|translate"></span>
                            </li>
                        </ul>
                    </a>
                    <div class="display-inline-block pr">
                        <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.design" guide-item="design" guide-type="dash_edit" watch-status="personalInfo.dashboard_guide" btn-class="J-dot-design" add-class="dot-guide-design"></div>

                        <a ng-if="!proj_share && !dashEditMode && !(enterprise_type == 5 || enterprise_type == 6)" ng-click="makeDashEdit(true)" ng-if="permision.dashEdit && property == 0" class="J-design-button J-dot-design">
                            <i class="bdp-icon ico-edit-layout"></i>
                            <span class="btn-layer-opt">
                            <span bo-text="design | translate"></span>
                            <span class="btn-layer-hover-line"></span>
                        </span>
                        </a>
                    </div>

                    <a ng-if="!dashEditMode && !permision.outerShare">
                        <i class="bdp-icon ico-fullscreen-2" ng-click="enterFullScreen(false)"></i>
                        <span class="btn-layer-opt" ng-click="enterFullScreen(false)">
                        <span bo-text="dash.fullscreen | translate"></span>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                        <i class="bdp-icon ico-triangle-down" ng-click="btn_layer.show_presentation_mode = !btn_layer.show_presentation_mode" click-outside="btn_layer.show_presentation_mode = false" outside-active="btn_layer.show_presentation_mode"></i>
                        <ul class="dropdown-wrap dash-display-mode-list J_dashboard_presentation" ng-show="btn_layer.show_presentation_mode">
                            <li class="dropdown-item" ng-click="enterFullScreen(true)">
                                <i class="bdp-icon ico-presentation-mode"></i>
                                <span bo-text="dash.presentationMode | translate"></span>
                            </li>
                        </ul>
                    </a>

                    <social-share ng-if="permision.dashEdit && property == 0 && permision.outerShare" outer-share-info="outer_share_info" dash-selected="currDash.dashSelected" dash-title="dashTitle"></social-share>

                    <a class="more-btn" ng-if="!dashEditMode" ng-click="btn_layer.show_more_btn = !btn_layer.show_more_btn" click-outside="btn_layer.show_more_btn = false" outside-active="btn_layer.show_more_btn">
                        <i class="bdp-icon ico-more"></i>
                        <ul class="dropdown-wrap dash-more-list J_dashboard_more_btn" ng-show="btn_layer.show_more_btn">
                            <li class="dropdown-item global-filter-set" ng-if="!proj_share && dashSelected" global-filter-set original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" dash-standard-items="dashStandardItems" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" draw_chart_url="draw_chart_url" bo-text="dash.globalFilter | translate"></li>
                            <li bo-if="permision.allowExporting" export-dashboard ng-click="showExportDialog(img)" class="dropdown-item dash-add-item-btn" bo-text="dash.exportDashboard | translate"></li>
                            <li bo-if="permision.allowExporting" export-dashboard ng-click="showExportDialog(pdf)" class="dropdown-item dash-add-item-btn" bo-text="dash.exportDashPdf | translate"></li>
                        </ul>
                    </a>
                </div>
                <div class="mobile-dash-list" ng-if="isThirdIframeMobile.type" ng-click="showThirdIframeDshList()">
                    <i class="icon-third-back"></i>
                </div>
            </div>
            <div class="clearfix dash-title view-header designate-header" ng-class="{fixed-width:dashLayoutInfo.fixed_width}" ng-if="newChartFunc.showHandlers">
                <h2 bo-text="dash.createChartSelctPos|translate"></h2>
                <div class="btn-layer designate-btn">
                    <a href="javascript:;" class="bdp-icon ico-f-close" ng-click="newChartFunc.editState(false)"></a>
                </div>
            </div>
        </div>

        <div class="view-header dash-edit-wrapper clearfix" ng-if="dashEditMode">
            <h3 class="design-title" bo-text="dash.designDashboard | translate"></h3>
            <div class="btn-layer">
                <div class="item design-mob" ng-if="dashLayoutInfo.layout_style == 2">
                    <a ng-click="setMobLayout(true)">
                        <i class="bdp-icon ico-mobile"></i>
                        <span class="btn-layer-opt">
                        <span bo-text="dash.dashModeMob|translate"></span>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                    </a>
                </div>
                <div class="item">
                    <div class="view-header-seperate-line" ng-if="dashLayoutInfo.layout_style == 2"></div>
                    <a class="make-dash-edit-done" ng-click="makeDashEdit(false)">
                        <i class="bdp-icon ico-ok-blue"></i>
                        <span class="btn-layer-opt">
                        <span bo-text="done | translate"></span>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                    </a>
                </div>
            </div>
            <div class="block" ng-if="dashLayoutInfo.layout_style != 2 && !dashLayoutInfo.id">
                <div class="hd" bo-text="dash.layoutSetting|translate"></div>
                <div class="bd">
                    <ul>
                        <li>
                            <label>
                                <input type="checkbox" ng-model="dashLayoutInfo.show_block" ng-change="dash.modify(show_block)">
                                    <span bo-text="dash.showElementBorder|translate"></span>
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.fixed_width" ng-change="dash.modify(fixed_width)">
                                    <span bo-text="dash.fixedWidth|translate"></span>
                                    </label>
                                    </li>

                                    </ul>
                                    </div>
                                    </div>
                                    <div class="block ml16" ng-if="!dashLayoutInfo.id">
                                    <div class="view-header-seperate-line"></div>
                                    <span class="setting-tip mr16" bo-text="dash.designTip1|translate"></span>
                                    </div>
                                    <div class="block ml16" ng-if="dashLayoutInfo.dash_setting" ng-show="dash.canSetTitle()">
                                    <div class="view-header-seperate-line"></div>
                                    <div class="hd" bo-text="dash.displayProperty | translate"></div>
                                    <div class="bd">
                                    <ul>
                                    <li ng-show="dash.canSetTitle()">
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.dash_setting.show_title" ng-change="dash.modify(title)">
                                    <span bo-text="dash.showTitle | translate"></span>
                                    </label>
                                    </li>
                                    <li ng-show="dash.canSetLegend()">
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.dash_setting.show_legend" ng-change="dash.modify(legend)">
                                    <span bo-text="dash.showLegend | translate"></span>
                                    </label>
                                    </li>
                                    <li ng-show="dash.canSetAxis()">
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.dash_setting.show_axis" ng-change="dash.modify(axis)">
                                    <span bo-text="dash.showAxis | translate"></span>
                                    </label>
                                    </li>
                                    <li ng-show="dash.canSetDataLabels()">
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.dash_setting.show_datalabels" ng-change="dash.modify(datalabels)">
                                    <span bo-text="dash.showDataLabels | translate"></span>
                                    </label>
                                    </li>
                                    <li ng-show="dash.canSetTotal()">
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.dash_setting.show_total" ng-change="dash.modify(total)">
                                    <span bo-text="dash.showTotal | translate"></span>
                                    </label>
                                    </li>
                                    <li ng-show="dash.canSetNavigator()">
                                    <label>
                                    <input type="checkbox" ng-model="dashLayoutInfo.dash_setting.show_navigator" ng-change="dash.modify(navigator)">
                                    <span bo-text="dash.showNavigator | translate"></span>
                                    </label>
                                    </li>
                                    </ul>
                                    </div>
                                    </div>
                                    <div class="block dash-border ml16" ng-show="dashLayoutInfo.ct_id && !dashLayoutInfo.show_block">
                                    <div class="view-header-seperate-line"></div>
                                    <div class="hd" bo-text="border|translate"></div>
                                    <div class="bd">
                                    <a class="bdp-icon-wrap" ng-class="{active:dashLayoutInfo.dash_setting.border_null}" ng-click="dash.toggleBorder(null)">
                                    <i class="bdp-icon ico-border-null"></i>
                                    </a>
                                    <a class="bdp-icon-wrap" ng-class="{active:dashLayoutInfo.dash_setting.border_top}" ng-click="dash.toggleBorder(top)">
                                    <i class="bdp-icon ico-border-top"></i>
                                    </a>
                                    <a class="bdp-icon-wrap" ng-class="{active:dashLayoutInfo.dash_setting.border_right}" ng-click="dash.toggleBorder(right)">
                                    <i class="bdp-icon ico-border-right"></i>
                                    </a>
                                    <a class="bdp-icon-wrap" ng-class="{active:dashLayoutInfo.dash_setting.border_bottom}" ng-click="dash.toggleBorder(bottom)">
                                    <i class="bdp-icon ico-border-bottom"></i>
                                    </a>
                                    <a class="bdp-icon-wrap" ng-class="{active:dashLayoutInfo.dash_setting.border_left}" ng-click="dash.toggleBorder(left)">
                                    <i class="bdp-icon ico-border-left"></i>
                                    </a>
                                    </div>
                                    </div>
                                    </div><!--end view-header -->
                                    <div ng-if="!dashLoading && global.globalDashFilter.length" class="dash-global-wrap" global-filter original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" show-loading="showLoading" on-share-page="isThirdIframe" draw-chart-url="draw_chart_url"></div>
                                    <div class="dash-wrapper" ng-class="{
                                    create-chart-mode: newChartFunc.showHandlers,
                                    dash-one-block:!dashLayoutInfo.show_block,
                                    edit-mode:dashEditMode,
                                    dash-fixed-width:dashLayoutInfo.fixed_width,
                                    hide-block-watermark:!dashLayoutInfo.show_block && global.watterMark,
                                    under-workspace:(workspaceList && workspaceList[dash].length > 0),
                                    has-global-filter: global.globalDashFilter.length > 0,
                                    operate-none-gridster: proj_share || !permision.dashOperate
                                    }">
<div class="folder-empty" ng-if="noDashes">
    <i class="bdp-icon ico-new-dashboard ico-no-opacity"></i>
    <p class="mt8 font-text-tip" bo-text="dash.emptyDash | translate"></p>
    </div>
    <div id="J-export-dashboard-height" gridster="gridsterOpts">
    <div ng-if="!selected.proj_share" ng-hide="dashInit.load">
    <div ng-if="!proj_share && selected.dsh_id  && dashStandardItems.length == 0" ng-click="addItem()" class="empty-dash-add">
    <span>
    <i class="a"></i>
    <i class="b"></i>
    </span>
    <div class="textalign-center empty-dash-add-tip" bo-text="dash.addChart | translate"></div>
    </div>
    <ul id="J_gridster">
    <li gridster-item="item" class="J-export-img-elem-item" ng-repeat="item in dashStandardItems" row="item.row" col="item.col" size-x="item.sizeX" size-y="item.sizeY" ng-hide="chartdel[chart+current_item.meta.ct_id]" id="{{item.children[0].meta.ct_id}}" data-chart-type="{{item.children[0].meta.type}}" data-chart-id="{{item.children[0].meta.ct_id}}" ng-mouseleave="mouseleaveItem()" ng-class="{
selected:dashLayoutInfo.ct_id === item.children[0].meta.ct_id,
border-left:item.children[0].meta.dash_setting.border_left,
border-right:item.children[0].meta.dash_setting.border_right,
border-top:item.children[0].meta.dash_setting.border_top,
border-bottom:item.children[0].meta.dash_setting.border_bottom,
no-border:item.children[0].meta.dash_setting.border_null,
no-title: item.children[0].meta.type === C310 || !item.children[0].meta.dash_setting.show_title,
no-axis: !item.children[0].meta.dash_setting.show_axis,
no-legend: !item.children[0].meta.dash_setting.show_legend,
component-text: item.children[0].meta.ct_id.indexOf(text_) > -1,
J-dot-dash-edit-wrap: $first
}">
<div class="pr" ng-if="$index === 0 && enterprise_type == 3" ng-show="!dashEditMode" ng-class="{dot-guide-C310: item.children[0].meta.type == C310, dot-guide-C101: item.children[0].meta.type == C101}">
    <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.dashEdit" guide-item="dashEdit" guide-type="dash_edit" watch-status="personalInfo.dashboard_guide" btn-class="J-dot-dash-edit-wrap .J-dot-dash-edit" add-class="dot-guide-dash-edit"></div>
    </div>
    <div ng-repeat="child in item.children" class="chart-box J_chart_box">

    <!-- 注意ngIf增加了一个子作用域，所以$parent要增加一层 -->
<div ng-if="child.meta.ct_id.indexOf(text_) < 0">
    <div class="item-chart-title">
    <div class="item-chart-title-bd nowrap J-item-chart-title-bd">
    <div class="display-inline-block drill-tip" ng-if="child.meta.level_fields.length > 1">
    <i class="bdp-icon ico-drill"></i>
    <div class="dropdown-wrap drill-tip-bd">
    <span class="nowrap" ng-repeat="drill_field in child.meta.level_fields">
    <i class="bdp-icon ico-slicesnav-arrow" ng-show="!$first"></i>
    {{drill_field.nick_name || drill_field.name}}
</span>
</div>
</div>
<i class="bdp-icon ico-linked" ng-if="child.meta.chart_link.linked_chart_type == 2"></i>
<i class="bdp-icon ico-chart-jump" ng-if="child.meta.chart_jump.can_jump == 1"></i>
<span class="no-margin">{{child.meta.name}}</span>
<div class="loading-wrap">
    <div class="loader-inner ball-spin-fade-loader">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
<span class="filter-item" ng-repeat="it in child.meta.filter_list_inner" ng-if="it.range.length && !it.adv_type">
                                            <em ng-if="it.data_type === date && !it.granularity" ng-hide="AllMap.indexOf( (it.range | format_date:child.meta.adv_date_list ) ) >= 0">
                                                {{it.range | format_date:child.meta.adv_date_list}}
                                                <span ng-if="it.granularity == week">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                            </em>
                                            <em ng-if="it.data_type === date && it.granularity">{{it.range | inner_range_date_format:it}}
                                                <span ng-if="it.granularity == week">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                            </em>
                                            <em ng-if="it.data_type !== date && !it.inner_adv_type && it.range_type != 0">{{it.range | dash_sub_date:it}}</em>
                                            <em ng-if="it.data_type !== date && ( (it.inner_adv_type && it.rangeNumber != 1) || it.range_type == 0 )">
                                                <span ng-if="!it.nick_name">{{it.name}}</span>
                                                <span ng-if="!!it.nick_name">{{it.nick_name}}</span>
                                                <span bo-text="custom | translate"></span>
                                            </em>
                                            <em ng-if="it.data_type !== date && it.inner_adv_type && it.rangeNumber == 1 && it.range_type != 0 ">
                                                {{it.rangeFirstField | dash_sub_date:it}}
                                            </em>
                                        </span>
<span class="filter-item" ng-repeat="it in child.meta.diff_filter track by $index">
                                            <em>{{it}}</em>
                                        </span>
</div>
</div>
<div class="item-chart gridster-no-drag J_item_chart" ng-class="{noscroll:selected_type === C200 || selected_type === C400}" id="{{child.dom_id}}" size-x="{{item.sizeX}}" size-y="{{item.sizeY}}">
    <div class="drill-crumbs-wrap"></div>
    <div bdp-chart="draw_chart_url[child.dom_id].options" display-mode="{{item.sizeX + * + item.sizeY}}" data-updatetime="{{child.meta.update_time}}" data-index="$parent.$parent.$index" data-domid="child.dom_id" data-lazy-loaded="draw_chart_url[child.dom_id].lazyload" class="chart J-export-img-elem-chart" ng-class="{chart-table:selected_type === C200,
                                            chart-canvas-table: selected_type === C200,
                                            chart-custom: selected_type === C500,
                                            chart-funnel overflow-hidden:selected_type === C330,
                                            show-datalabels: child.meta.dash_setting.show_datalabels,
                                            hide-total:!child.meta.dash_setting.show_total}" data-ctid="{{draw_chart_url[child.dom_id].options.ct_id}}"></div>
    <div class="loading-wrap" ng-if="item.children[0].meta.type === C310">
        <div class="loader-inner ball-spin-fade-loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</div>
<div chart-operate data-ct-id="{{child.meta.ct_id}}" class="gridster-no-drag"></div>
<div ng-show="dashEditMode" class="base-loading-layer" ng-click="dash.editChartMeta(child)"></div>
<div ng-if="newChartFunc.showHandlers" class="base-loading-layer bdp-pos-handler-layer" ng-mouseover="newChartFunc.moveHandlersTo($event, item)"></div>
</div>
</div>
</li>
</ul>

<div id="J_bdpPosHandlers" class="bdp-pos-handlers" ng-mousemove="newChartFunc._onMouseMove($event)" ng-mouseleave="newChartFunc._onMouseOut($event)" ng-click="newChartFunc.create()">
    <div class="bdp-pos-handler bdp-pos-handler-top">
        <i class="bdp-pos-handler-add bdp-icon ico-plus-blue ico-always-opacity"></i>
    </div>
    <div class="bdp-pos-handler bdp-pos-handler-bottom">
        <i class="bdp-pos-handler-add bdp-icon ico-plus-blue ico-always-opacity"></i>
    </div>
</div>
</div>
</div>
</div>
</div>

<div ng-if="global.showMobLayout" class="dash-mode-mob dash-edit-content-view">
    <div class="view-header dash-edit-wrapper clearfix">
        <div class="block mr16">
            <a class="back-web" ng-click="setMobLayout(false)">
                <i class="bdp-icon ico-back1"></i>
                <span bo-text="dash.backToWeb|translate"></span>
            </a>
        </div>
        <div class="block ml16">
            <div class="view-header-seperate-line"></div>
            <span class="setting-tip mr16" bo-text="dash.designTip2|translate"></span>
        </div>
    </div>

    <div class="dash-wrapper">
        <ul ui-sortable="sortMobCharts" ng-model="dashStandardItems">
            <li ng-repeat="item in dashStandardItems" class="gridster-item" ng-class="{
                    selected:dashLayoutInfo.ct_id === item.children[0].meta.ct_id,
                    no-title: item.children[0].meta.type === C310 || !item.children[0].meta.dash_setting.show_title,
                    no-axis: !item.children[0].meta.dash_setting.show_axis,
                    no-legend: !item.children[0].meta.dash_setting.show_legend,
                    component-text: item.children[0].meta.ct_id.indexOf(text_) > -1
                    }">
                <div ng-repeat="child in item.children" class="chart-box">
                    <!-- 注意ngIf增加了一个子作用域，所以$parent要增加一层 -->
                    <div ng-if="child.meta.ct_id.indexOf(text_) < 0">
                        <div class="item-chart-title">
                            <div class="item-chart-title-bd nowrap">
                                <span class="no-margin" ng-click="">{{child.meta.name}}</span>
                                <div class="loading-wrap">
                                    <div class="loader-inner ball-spin-fade-loader">
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item-chart gridster-no-drag J_item_chart" ng-class="{
                                noscroll:selected_type === C200
                                || selected_type === C400
                            }" id="{{child.dom_id}}">
                            <div class="drill-crumbs-wrap"></div>
                            <div bdp-chart="draw_chart_url[child.dom_id].options" display-mode="{{item.sizeX + * + item.sizeY}}" data-updatetime="{{child.meta.update_time}}" data-index="$parent.$parent.$index" data-domid="child.dom_id" data-lazy-loaded="draw_chart_url[child.dom_id].lazyload" class="chart" ng-class="{chart-table: selected_type === C200,
                                    chart-canvas-table: selected_type === C200,
                                    chart-custom: selected_type === C500,
                                    chart-funnel overflow-hidden:selected_type === C330,
                                    show-datalabels: child.meta.dash_setting.show_datalabels,
                                    hide-total:!child.meta.dash_setting.show_total}" data-ctid="{{draw_chart_url[child.dom_id].options.ct_id}}"></div>
                            <div class="loading-wrap" ng-if="item.children[0].meta.type === C310">
                                <div class="loader-inner ball-spin-fade-loader">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div ng-show="dashEditMode" class="base-loading-layer" ng-click="dash.editChartMeta(child)"></div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</div>

<div ng-loading-gif ng-show="dashLoading"></div>),

e.put("/static/js/dashboard/tpl/dash-filter.html",
<div bindonce click-outside="show_dash_filter = false;" outside-active="show_dash_filter" ng-class="{is-show-wrap-bg: show_dash_filter}" class="dash-filter bdp-icon-wrap" ng-show="show_filter">
    <i class="bdp-icon ico-filter-white fs-filter-icon"></i>
    <i class="bdp-icon ico-filter" ng-class="{ico-filter-active:isActive, ico-always-highlight:isActive}" ng-click="handleFilterPos($event)"></i>
    <div class="bd filter-i-w J_filterLayer" ng-show="show_dash_filter">
        <dl class="filter-i nowrap" ng-class="{disable:it.disabled}" ng-repeat="it in filter_list_inner">
            <dt class="nowrap" title="{{it.name}}{{setAdvanceAggregatorName(it)}}" ng-if="!(it.hasOwnProperty(nick_name) && it.nick_name !==) ">{{it.name}}{{setAdvanceAggregatorName(it)}}</dt>
            <dt class="nowrap" title="{{it.nick_name}}" ng-if="(it.hasOwnProperty(nick_name) && it.nick_name !==) ">{{it.nick_name}}</dt>
            <dd click-outside="show_options[it.fid+it.uniq_id] = false" outside-active="show_options[it.fid+it.uniq_id]" ng-if="it.data_type !== date && it.data_type !== number && !it.hasOwnProperty(aggregator) ">
                <div class="filter-i-list-w">
                    <p class="filter-i-name" ng-class="{selected: show_options[it.fid+it.uniq_id]}" ng-if="!innerFilterModule.isShowFilter(it.fid,it.uniq_id) " ng-click="innerFilterModule.getItemList(opts.meta,it);">
                        <span ng-if="!fullscreen && it.range_type != 0" class="nowrap" title="{{it.range | dash_sub_date:it}}">
                            {{it.range | dash_sub_date:it}}
                        </span>
                        <span ng-if="!fullscreen && it.range_type == 0 " class="nowrap" bo-title="custom | translate" bo-text="custom | translate"></span>
                        <span ng-if="fullscreen && ( (it.is_defined && it.rangeNumber != 1) || it.range_type == 0 )" class="nowrap" bo-title="custom | translate" bo-text="custom | translate"></span>
                        <span ng-if="fullscreen && it.is_defined && it.rangeNumber == 1 && it.range_type != 0" class="nowrap" title="{{it.range | sub_date:it}}">
                            {{it.rangeFirstField | dash_sub_date:it}}
                            <em ng-if="it.rangeFirstField && it.data_type == date && it.granularity == week">
                                ({{it.rangeFirstField | weekFormat:it.rangeFirstField}})
                            </em>
                        </span>
                        <span ng-if="fullscreen && !it.is_defined && it.range_type != 0 " class="nowrap" title="{{it.range | sub_date:it}}">
                            {{it.range | sub_date:it}}
                        </span>
                        <i class="bdp-icon ico-triangle-down arrow-down"></i>
                    </p>

                    <p class="filter-i-name" ng-class="{selected: show_options[it.fid+it.uniq_id]}" ng-if="innerFilterModule.isShowFilter(it.fid,it.uniq_id) && (it.rangeNumber != 1 || it.range_type == 0 )" ng-click="innerFilterModule.getItemList(opts.meta,it);">
                        <span class="nowrap" bo-text="custom | translate"></span>
                        <i class="bdp-icon ico-triangle-down arrow-down"></i>
                    </p>
                    <p class="filter-i-name" ng-class="{selected: show_options[it.fid+it.uniq_id]}" ng-if="innerFilterModule.isShowFilter(it.fid,it.uniq_id) && it.rangeNumber == 1 && it.range_type != 0" ng-click="innerFilterModule.getItemList(opts.meta,it);">
                        <span class="nowrap">
                            {{it.rangeFirstField | dash_sub_date:it}}
                        </span>
                        <em ng-if="it.rangeFirstField && it.data_type == date && it.granularity == week">
                            ({{it.rangeFirstField | weekFormat:it.rangeFirstField}})
                        </em>
                        <i class="bdp-icon ico-triangle-down arrow-down"></i>
                    </p>
                    <div class="filter-i-list" ng-show="show_options[it.fid+it.uniq_id] && !it.disabled" ng-style="adjustWidth[it.fid]">

                        <div ng-loading-gif size="size-1x" placeholder="true" ng-show="showLoading"></div>
                        <div class="query-box auto" ng-if="(innerFilterItems[it.fid].total <= 100 && innerFilterItems[it.fid].list.length > 20)">
                            <input type="text" class="query-text" ng-input-text ng-keyup="filterQueryModule.enterToQuery({e:$event,filter:it,is_advance:false,real_search:false})" ng-model="queryKwd[it.fid]">
                        </div>
                        <div ng-if="innerFilterItems[it.fid].total > 100" ng-show="!showLoading" class="query-box">
                            <input type="text" ng-model="queryKwd[it.fid]" ng-keyup="filterQueryModule.enterToQuery({e:$event,filter:it,is_advance:false,real_search:true})" class="query-text">
                                <a class="bdp-icon-wrap query-btn" ng-click="filterQueryModule.query(it,false)">
                                    <i class="bdp-icon ico-search"></i>
                                </a>
                        </div>
                        <ul>
                            <li ng-show="!showLoading && it.show_all">
                                <a class="cursor-pointer" ng-click="innerFilterModule.setInnerFilter({range:[],index:$index,fid:it.fid,type:it.data_type,uniq_id:it.uniq_id});" ng-class="{active:it.range && it.range.length == 0 }" bo-text="all|translate"></a>
                            </li>
                            <li ng-show="!showLoading" ng-repeat="range in innerFilterItems[it.fid].list | filter:innerFilterItems[it.fid].keyword track by $index">
                                <a class="nowrap cursor-pointer" title="{{range | sub_date:it}}" ng-class="{active: it.range[0] == range }" ng-click="innerFilterModule.setInnerFilter({range:[range],index:$parent.$parent.$index,fid:it.fid,type:it.data_type,uniq_id:it.uniq_id})">
                                    {{range | sub_date:it}}
                                </a>
                            </li>

                            <li ng-if="innerFilterItems[it.fid].list.length == 0" ng-show="!showLoading" class="empty" style="padding:3px">
                                <p bo-text="dash.noSearchResult| translate"></p>
                            </li>
                        </ul>
                    </div>
                </div><span class="filter-i-adv" ng-click="innerFilterModule.getItemList(opts.meta,it,innerFilterModule.openAdvanceModal);" bo-text="multiSelect| translate"></span>
            </dd>

            <dd click-outside="show_options[it.fid+it.uniq_id] = false" outside-active="show_options[it.fid+it.uniq_id]" ng-if="it.data_type === date && !it.hasOwnProperty(aggregator)">
                <div class="filter-i-list-w">
                    <p class="filter-i-name" ng-class="{selected: show_options[it.fid+it.uniq_id]}" ng-if="it.granularity !== " ng-click="innerFilterModule.getItemList(opts.meta,it);">

                        <span ng-if="!fullscreen" class="nowrap" title="{{it.range | dash_sub_date:it}}">
                            {{it.range | dash_sub_date:it}}
                            <em ng-if="it.range[0] && it.granularity == week">
                                ({{it.range[0] | weekFormat}})
                            </em>
                        </span>
                        <span ng-if="fullscreen && it.is_defined" class="nowrap" title="{{it.range | sub_date:it}}" bo-text="custom | translate"></span>
                        <span ng-if="fullscreen && !it.is_defined" class="nowrap" title="{{it.range | sub_date:it}}">
                            {{it.range | sub_date:it}}
                            <em ng-if="it.range[0] && it.granularity == week">
                                ({{it.range[0] | weekFormat}})
                            </em>
                        </span>
                        <i class="bdp-icon ico-triangle-down arrow-down"></i>
                    </p>

                    <p class="filter-i-name" ng-class="{selected: show_options[it.fid+it.uniq_id]}" ng-if="!it.granularity" ng-click="innerFilterModule.getItemList(opts.meta,it);">

                        <span class="nowrap" ng-if="fullscreen" title="{{it.range | format_date:adv_date_list:it.name}}">
                            {{it.range | format_date:adv_date_list:it.name}}
                        </span>
                        <span class="nowrap" ng-if="!fullscreen" title="{{it.range | format_date:adv_date_list}}">
                            {{it.range | format_date:adv_date_list}}
                        </span>
                        <i class="bdp-icon ico-triangle-down arrow-down"></i>
                    </p>
                    <div class="filter-i-list" ng-show="show_options[it.fid+it.uniq_id] && !it.disabled" ng-style="adjustWidth[it.fid]">

                        <div ng-loading-gif size="size-1x" placeholder="true" ng-show="showLoading"></div>
                        <div class="query-box auto" ng-if="(innerFilterItems[it.fid].total <= 100 && innerFilterItems[it.fid].list.length > 20)">
                            <input type="text" class="query-text" ng-model="queryKwd[it.fid]" ng-input-text ng-keyup="filterQueryModule.enterToQuery({e:$event,filter:it,is_advance:false,real_search:false})">
                        </div>
                        <div ng-if="innerFilterItems[it.fid].total > 100" ng-show="!showLoading" class="query-box">
                            <input type="text" ng-model="queryKwd[it.fid]" ng-keyup="filterQueryModule.enterToQuery({e:$event,filter:it,is_advance:false,real_search:true})" class="query-text">
                                <a class="bdp-icon-wrap query-btn" ng-click="filterQueryModule.query(it,false)">
                                    <i class="bdp-icon ico-search"></i>
                                </a>
                        </div>

                        <ul ng-if="!it.granularity" ng-show="!showLoading">
                            <li>
                                <a ng-class="{active:it.range[0] ==  || it.range.length == 0}" ng-show="it.show_all" ng-click="innerFilterModule.setInnerFilter({range:[],index:$parent.$index,fid:it.fid,type:date,uniq_id:it.uniq_id})" bo-text="dash.allTime| translate"></a>
                            </li>
                            <li ng-repeat="adv in adv_date_list">
                                <a class="nowrap pointer" title="{{adv.name}}" ng-class="{active:it.range[0] == adv.opt_id}" ng-click="innerFilterModule.setInnerFilter({range:[adv.opt_id],index:$parent.$index,fid:it.fid,type:date,uniq_id:it.uniq_id})">{{adv.name}}</a>
                            </li>
                            <li>
                                <a class="cursor-pointer" bo-title="dash.definedTimeRange| translate" ng-class="{active:it.range.length == 2}" ng-click="innerFilterModule.showDatePicker($parent.$index,it.range,it.fid)" bo-text="dash.definedTimeRange| translate"></a>
                            </li>
                        </ul>

                        <!--granularity not null-->
                        <ul ng-if="it.granularity !== ">
                            <li ng-show="it.show_all">
                                <a ng-class="{active:it.range[0] == }" ng-show="it.show_all" ng-click="innerFilterModule.setInnerFilter({range:[],index:$parent.$index,fid:it.fid,type:date,uniq_id:it.uniq_id})" bo-text="dash.allTime| translate"></a>
                            </li>
                            <li ng-if="it.granularity !== week" ng-repeat="range in innerFilterItems[it.fid].list | query_inner:innerFilterItems[it.fid].keyword:it.granularity track by $index">
                                <a class="nowrap cursor-pointer" title="{{range | timestamp2LocaleDate:it.granularity}}" ng-click="innerFilterModule.setInnerFilter({range:[range],index:$parent.$parent.$index,fid:it.fid,type:it.data_type,uniq_id:it.uniq_id})">
                                    {{range | timestamp2LocaleDate:it.granularity}}
                                </a>
                            </li>
                            <li ng-if="it.granularity == week" ng-repeat="range in innerFilterItems[it.fid].list | query_inner:innerFilterItems[it.fid].keyword:it.granularity track by $index">
                                <a class="nowrap cursor-pointer" title="{{range | sub_date:it}}({{range | weekFormat}})" ng-click="innerFilterModule.setInnerFilter({range:[range],index:$parent.$parent.$index,fid:it.fid,type:it.data_type,uniq_id:it.uniq_id})">
                                    {{range | sub_date:it}}
                                    <span ng-if="it.data_type == date && it.granularity == week">({{range | weekFormat}})</span>
                                    </a>
                                    </li>

                                    </ul>
                                    </div>
                                    </div>
                                    </dd>

                                    <dd ng-if="it.data_type === number || ( it.data_type !=number && it.hasOwnProperty(aggregator) ) " click-outside="show_options[it.fid+it.uniq_id] = false" outside-active="show_options[it.fid+it.uniq_id]">
                                    <div class="filter-i-list-w number-filter-i-list">
                                    <p class="filter-i-name name" ng-class="{selected: show_options[it.fid+it.uniq_id]}" ng-if="!innerFilterModule.isShowFilter(it.fid,it.uniq_id)" ng-click="innerFilterModule.getItemListForNumber(opts.meta,it);">
                                    <span ng-if="!fullscreen" class="nowrap" title="{{numberConditionFormatString[it.fid+it.uniq_id]}}">
                                    {{numberConditionFormatString[it.fid+it.uniq_id]}}
                                </span>
                                <span ng-if="fullscreen && (it.hasOwnProperty(nick_name) && it.nick_name !==) " class="nowrap" title="{{it.nick_name}}{{numberConditionFormatString[it.fid+it.uniq_id]}}">
                            {{it.nick_name}}{{numberConditionFormatString[it.fid+it.uniq_id]}}
                        </span>
                                <span ng-if="fullscreen && !(it.hasOwnProperty(nick_name) && it.nick_name !==) " class="nowrap" title="{{it.name}}{{setAdvanceAggregatorName(it)}}{{numberConditionFormatString[it.fid+it.uniq_id]}}">
                            {{it.name}}{{setAdvanceAggregatorName(it)}}{{numberConditionFormatString[it.fid+it.uniq_id]}}
                        </span>
                                <i class="bdp-icon ico-triangle-down arrow-down"></i>
                            </p>
                            <div class="filter-i-list" ng-style="adjustWidth[it.fid]" ng-show="show_options[it.fid+it.uniq_id]">

                                <div ng-loading-gif size="size-1x" placeholder="true" ng-show="showLoading"></div>
                                <div ng-show="!showLoading" class="select-box">
                                    <select ng-model="innerFilterItems[it.fid+it.uniq_id].numOpt" ng-options="opt.value as opt.text for opt in numberInnerFilterMap" ng-change="changeNumberOpt(opts.meta, it, innerFilterItems[it.fid+it.uniq_id].numOpt)"></select>
                                    </div>
                                    <ul ng-show="!showLoading">
                                    <li class="none-filter-range" ng-if="nullRange[it.fid+it.uniq_id]">无范围</li>
                                    <li ng-loading-gif size="size-1x" placeholder="true" ng-show="rangeLoading"></li>
                                    <li class="range range-all" ng-if="!nullRange[it.fid+it.uniq_id] && defaultRange[it.fid+it.uniq_id].length > 0 && innerFilterItems[it.fid+it.uniq_id].numOpt == -1">
                                    {{defaultRange[it.fid+it.uniq_id][0]}}~{{defaultRange[it.fid+it.uniq_id][1]}}
                                </li>
                                <li class="range" ng-if="!nullRange[it.fid+it.uniq_id] && defaultRange[it.fid+it.uniq_id].length == 0 && innerFilterItems[it.fid+it.uniq_id].numOpt != -1">
                                    <input type="number" ng-model="innerFilterItems[it.fid+it.uniq_id].numRange[0]">
                                </li>
                                <li class="range" ng-if="!nullRange[it.fid+it.uniq_id] && defaultRange[it.fid+it.uniq_id].length == 0 && innerFilterItems[it.fid+it.uniq_id].numOpt == 12" bo-text="field.to | translate"></li>
                                <li class="range" ng-if="!nullRange[it.fid+it.uniq_id] && defaultRange[it.fid+it.uniq_id].length == 0 && innerFilterItems[it.fid+it.uniq_id].numOpt == 12">
                                <input type="number" ng-model="innerFilterItems[it.fid+it.uniq_id].numRange[1]">
                                </li>
                                </ul>
                                <div class="operator" ng-show="!showLoading">
                                <button class="bdp-btn bdp-btn-ok" bo-text="ok|translate" ng-click="innerFilterModule.setInnerFilterForNumber({fid:it.fid,index:$index,uniq_id:it.uniq_id})"></button>
                                </div>

                                </div>
                                </div>
                                </dd>
                                </dl>

                                <div class="fullscreen-hide" ng-class="{filter-i-compare-title pt10: filter_list_inner.length > 0}" ng-show="opts.meta.compareDateFilter.length > 0" bo-text="dash.compareDateFilter | translate"></div>

                                <dl class="filter-i nowrap" ng-class="{disable:it.disabled}" ng-repeat="item in opts.meta.compareDateFilter">

                                <dt class="nowrap" title="{{item.name}}">{{item.name}}</dt>
                            <dd click-outside="show_options[item.uniq_id] = false" outside-active="show_options[item.uniq_id]">
                                <div class="filter-i-list-w">
                                    <p class="filter-i-name nowrap" ng-click="toggleCmpDropdown($event, item)">
                                        <span class="nowrap fullscreen-hide" title="{{item.customName || item.aggregatorName}}">{{item.customName || item.aggregatorName}}</span>
                                        <span class="nowrap dash-hide" title="{{item.customName || getCmpDefaultName(item)}}">{{item.customName || getCmpDefaultName(item)}}</span>
                                        <i class="bdp-icon ico-triangle-down arrow-down"></i>
                                    </p>
                                    <div class="filter-i-list" ng-show="show_options[item.uniq_id]">
                                        <ul>
                                            <li>
                                                <a href="javascript:;" title="{{item.aggregatorName}}" ng-click="compareDateChange(default, item)" ng-class="{active: !item.compareType || item.compareType == default}">
                                                    {{item.aggregatorName}}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="javascript:;" bo-title="dash.customDate | translate" ng-click="compareDateChange(custom, item)" ng-class="{active: item.compareType == custom}" bo-text="dash.customDate | translate"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                </dd>

                                </dl>
                                </div>
                                </div>),

                                e.put("/static/js/dashboard/tpl/dash-fullscreen.html",
                                <div class="dash-fullscreen-wrap display-device-{{fullDisplayDevice}} display-theme-{{fullDisplayTheme === 1 ? dark : light}}" bindonce="i18nLoaded">
                                    <div class="dash-title-wrap view-header-wrap">
                                        <div class="clearfix dash-title view-header">
                                            <h2 ng-bind="dashTitle"></h2>
                                            <div class="btn-layer">
                                                <a class="full-display-setting" ng-click="show_display_theme = !show_display_theme" click-outside="show_display_theme = false" outside-active="show_display_theme">
                                                    <span class="setting-label" bo-text="dash.displayTheme | translate"></span>
                                                    <span class="btn-layer-opt">
                        <span bo-text="fullDisplayTheme === 1 ? dash.darkTheme : dash.lightTheme | translate"></span>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                                                    <i class="bdp-icon ico-triangle-down"></i>
                                                    <ul class="dropdown-wrap" ng-show="show_display_theme">
                                                        <li class="dropdown-item" ng-click="setFullDisplayTheme(1)" bo-text="dash.darkTheme | translate"></li>
                                                        <li class="dropdown-item" ng-click="setFullDisplayTheme(2)" bo-text="dash.lightTheme | translate"></li>
                                                    </ul>
                                                </a>
                                                <a class="full-display-setting" ng-click="show_display_devices = !show_display_devices" click-outside="show_display_devices = false" outside-active="show_display_devices">
                                                    <span class="setting-label" bo-text="dash.displayDevice | translate"></span>
                                                    <span class="btn-layer-opt">
                        <i class="bdp-icon ico-device ico-device-{{fullDisplayDevice}}"></i>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                                                    <i class="bdp-icon ico-triangle-down"></i>
                                                    <ul class="dropdown-wrap" ng-show="show_display_devices">
                                                        <li class="dropdown-item" ng-click="setFullDisplayDevice(pc)">
                                                            <i bo-title="dash.pcDevice | translate" class="bdp-icon ico-device-pc"></i>
                                                        </li>
                                                        <li class="dropdown-item" ng-click="setFullDisplayDevice(projector)">
                                                            <i bo-title="dash.projectorDevice | translate" class="bdp-icon ico-device-projector"></i>
                                                        </li>
                                                        <li class="dropdown-item" ng-click="setFullDisplayDevice(tv)">
                                                            <i bo-title="dash.tvDevice | translate" class="bdp-icon ico-device-tv"></i>
                                                        </li>
                                                    </ul>
                                                </a>
                                                <a ng-click="exitFullScreen();removeFullDisplayStyle()">
                                                    <i class="bdp-icon ico-exit-fullscreen"></i>
                                                    <span class="btn-layer-opt">
                        <span bo-text="exitFullscreen | translate"></span>
                        <span class="btn-layer-hover-line"></span>
                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div ng-if="!dashLoading && global.globalDashFilter.length" class="dash-global-wrap" global-filter original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" show-loading="showLoading" draw_chart_url="draw_chart_url"></div>
                                    <div class="dash-wrapper operate-none-gridster" ng-class="{
        dash-one-block:!dashLayoutInfo.show_block,
        edit-mode:dashEditMode,
        dash-fixed-width:dashLayoutInfo.fixed_width,
        hide-block-watermark:!dashLayoutInfo.show_block && global.watterMark,
        under-workspace:(workspaceList && workspaceList[dash].length > 0),
        has-global-filter: global.globalDashFilter.length > 0
        }">

                                        <div class="folder-empty" ng-if="noDashes">
                                            <i class="bdp-icon ico-new-dashboard ico-no-opacity"></i>
                                            <p class="font-text-tip" class="mt8" bo-text="dash.emptyDash|translate"></p>
                                        </div>

                                        <slick class="slider single-item" on-before-change="onSlickBeforeChange" id="dash-slider" draggable="false" lazy-load="ondemand" autoplay="false" autoplay-speed="10000" init-onload="true" data="dashPages" infinite="true" dots="false" append-arrows=".page-nav">
                                            <div class="gridster-page" ng-repeat="dashPageItems in dashPages" gridster="gridsterOpts">
                                                <div ng-if="!selected.proj_share" ng-hide="dashInit.load">
                                                    <div ng-if="selected.dsh_id  && dashPageItems.length == 0" ng-click="addItem()" class="empty-dash-add">
                        <span>
                            <i class="a"></i>
                            <i class="b"></i>
                        </span>
                                                        <div class="textalign-center empty-dash-add-tip" bo-text="dash.addChart | translate"></div>
                                                    </div>
                                                </div>
                                                <ul>
                                                    <li gridster-item="item" ng-repeat="item in dashPageItems" row="item.row" col="item.col" size-x="item.sizeX" size-y="item.sizeY" ng-hide="chartdel[chart+current_item.meta.ct_id]" id="{{item.children[0].meta.ct_id}}" class="no-border" data-chart-id="{{item.children[0].meta.ct_id}}" ng-mouseleave="mouseleaveItem()" ng-class="{
                            selected:dashLayoutInfo.ct_id === item.children[0].meta.ct_id,
                            no-title: item.children[0].meta.type === C310 || !item.children[0].meta.dash_setting.show_title,
                            no-axis: !item.children[0].meta.dash_setting.show_axis,
                            }">
                                                        <div ng-repeat="child in item.children" class="chart-box J_chart_box">
                                                            <!-- 注意ngIf增加了一个子作用域，所以$parent要增加一层 -->
                                                            <div ng-if="child.meta.ct_id.indexOf(text_) < 0">
                                                                <div class="item-chart-title">
                                                                    <div class="item-chart-title-bd nowrap">
                                                                        <div class="display-inline-block drill-tip" ng-if="child.meta.level_fields.length > 1">
                                                                            <i class="bdp-icon ico-drill"></i>
                                                                            <div class="drill-tip-bd mt5">
                                                <span ng-repeat="drill_field in child.meta.level_fields">
                                                    <i class="bdp-icon ico-slicesnav-arrow" ng-show="!$first"></i>
                                                    {{drill_field.nick_name || drill_field.name}}
                                                </span>
                                                                                <div class="arrow"><em></em><span></span></div>
                                                                            </div>
                                                                        </div>
                                                                        <i class="bdp-icon ico-linked" ng-if="child.meta.chart_link.linked_chart_type == 2"></i>
                                                                        <i class="bdp-icon ico-chart-jump" ng-if="child.meta.chart_jump.can_jump == 1"></i>
                                                                        <span class="no-margin" ng-click="">{{child.meta.name}}</span>
                                                                        <span class="filter-item" ng-repeat="it in child.meta.filter_list_inner" ng-if="it.range.length && !it.adv_type">
                                            <em ng-if="it.data_type === date && !it.granularity" ng-hide="AllMap.indexOf( (it.range | format_date:child.meta.adv_date_list ) ) >= 0">
                                                {{it.range | format_date:child.meta.adv_date_list}}
                                                <span ng-if="it.granularity == week">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                            </em>
                                            <em ng-if="it.data_type === date && it.granularity">{{it.range | inner_range_date_format:it}}
                                                <span ng-if="it.granularity == week">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                            </em>
                                            <em ng-if="it.data_type !== date && !it.inner_adv_type">{{it.range | dash_sub_date:it}}</em>
                                            <em ng-if="it.data_type !== date && it.inner_adv_type && (it.rangeNumber != 1 || it.range_type == 0 )">
                                                <span ng-if="!it.nick_name">{{it.name}}</span>
                                                <span ng-if="!!it.nick_name">{{it.nick_name}}</span>
                                                <span bo-text="custom | translate"></span>
                                            </em>
                                            <em ng-if="it.data_type !== date && it.inner_adv_type && it.rangeNumber == 1 && it.range_type != 0 ">
                                                {{it.rangeFirstField | dash_sub_date:it}}
                                            </em>
                                        </span>
                                                                        <span class="filter-item" ng-repeat="it in child.meta.diff_filter">
                                            <em>{{it}}</em>
                                        </span>
                                                                        <div class="loading-wrap">
                                                                            <div class="loader-inner ball-spin-fade-loader">
                                                                                <div></div>
                                                                                <div></div>
                                                                                <div></div>
                                                                                <div></div>
                                                                                <div></div>
                                                                                <div></div>
                                                                                <div></div>
                                                                                <div></div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="item-chart gridster-no-drag J_item_chart" ng-class="{noscroll:selected_type === C200}" id="{{child.dom_id}}" size-x="{{item.sizeX}}" size-y="{{item.sizeY}}">
                                                                    <div class="drill-crumbs-wrap"></div>
                                                                    <div bdp-chart="draw_chart_url[child.dom_id].options" display-mode="{{item.sizeX + * + item.sizeY}}" data-updatetime="{{child.meta.update_time}}" data-index="item.index" data-domid="child.dom_id" data-lazy-loaded="draw_chart_url[child.dom_id].lazyload" class="chart" ng-class="{chart-table:selected_type === C200,
                                            chart-canvas-table: selected_type === C200,
                                            chart-custom: selected_type === C500,
                                            chart-funnel overflow-hidden:selected_type === C330,
                                            chart-sankey: selected_type === C300,
                                            show-datalabels: child.meta.dash_setting.show_datalabels,
                                            hide-total:!child.meta.dash_setting.show_total}"></div>
                                                                </div>
                                                                <div chart-operate data-ct-id="{{child.meta.ct_id}}" class="gridster-no-drag hidden"></div>
                                                            </div>

                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </slick>

                                    </div>
                                    <div class="page-nav">
        <span class="page-ctrl-play" ng-click="toggleDashboardAutoplay()">
            <i class="bdp-icon" ng-class="{ico-pause: dashboardAutoplay, ico-play: !dashboardAutoplay}"></i>
        </span>
                                    </div>
                                </div>),

                                e.put("/static/js/dashboard/tpl/data_screen.html",
                                <div class="dash-edit-content-view data-screen-wrap data-screen-dashboard-wrap">
                                    <div class="dash-title-wrap view-header-wrap">
                                        <div class="clearfix dash-title view-header">
                                            <h2>{{dashTitle}}</h2>
                                            <div class="btn-layer" ng-if="!dashFullscreen && permision.dashEdit && property == 0 && !isThirdIframeMobile.type">
                                                <div class="display-inline-block pr">
                                                    <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.design" guide-item="design" guide-type="dash_edit" watch-status="personalInfo.dashboard_guide" btn-class="J-dot-design" add-class="dot-guide-design"></div>

                                                    <a ng-if="!proj_share && !(enterprise_type == 5 || enterprise_type == 6)" ng-click="enterEditScreen()" ng-if="permision.dashEdit && property == 0" class="J-design-button J-dot-design">
                                                        <i class="bdp-icon ico-edit-layout"></i>
                                                        <span class="btn-layer-opt">
                            <span>{{ design | translate }}</span>
                            <span class="btn-layer-hover-line"></span>
                        </span>
                                                    </a>
                                                </div>

                                                <a ng-if="!permision.outerShare" ng-click="enterFullScreen()">
                                                    <i class="bdp-icon ico-fullscreen-2"></i>
                                                    <span class="btn-layer-opt">
                            {{ dash.fullscreen | translate }}
                                                        <span class="btn-layer-hover-line"></span>
                    </span>

                                                </a>

                                            </div>
                                        </div>
                                    </div>
                                    <div class="screen-dashboard">
                                        <div ng-if="!dashLoading && global.globalDashFilter.length" class="dash-global-wrap" global-filter original-global-filter="global.originalGlobalFilter" global-dash-filter="global.globalDashFilter" global-dash-filter-items="global.globalDashFilterItems" rule-id="global.rule_id" show-loading="showLoading" on-share-page="isThirdIframe" draw-chart-url="draw_chart_url">
                                        </div>
                                        <div ng-include="./static/js/dashboard/tpl/data_screen_main.html"></div>
                                    </div>
                                </div>

                                <div ng-loading-gif ng-show="dashLoading"></div>),

                                e.put("/static/js/dashboard/tpl/data_screen_edit.html",
                                <div class="data-screen-wrap">
                                    <div class="view-header">
                                        <a class="back-btn" ng-click="backDataScreen()" href="javascript:;">
                                            <i class="bdp-icon ico-back"></i>
                                        </a>
                                        <h2 class="text-center data-screen-edit-title">
                                            <div class="edit-title-detail">{{dashTitle}}</div>
                                        </h2>
                                        <div class="btn-layer">
                                            <a ng-click="backDataScreen()" href="javascript:;">
                                                <i class="bdp-icon ico-ok-blue"></i>
                                                <span class="btn-layer-opt">
                    {{ complete | translate }}
                                                    <span class="btn-layer-hover-line"></span>
                </span>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="data-screen-content">
                                        <div class="screen-main">
                                            <div class="screen-wrap">
                                                <div class="screen-btn-bar clearfix">
                                                    <div class="toolbar-left bdp-icon-hover-light">
                                                        <span class="display-inline-block">{{ dash.advDash.addEle | translate }}</span>
                                                        <span class="display-inline-block seperate-line ml8"></span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addChart" tooltip-placement="bottom">
                            <i class="bdp-icon ico-add-screen-chart cursor-pointer" ng-click="addItem()"></i>
                        </span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addTitle" tooltip-placement="bottom">
                            <i class="bdp-icon ico-add-attr cursor-pointer" ng-click="dash.addTextComponent(C105)"></i>
                        </span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addText" tooltip-placement="bottom">
                            <i class="bdp-icon ico-add-text cursor-pointer" ng-click="dash.addTextComponent(C101)"></i>
                        </span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addImage" tooltip-placement="bottom">
                            <i class="bdp-icon ico-add-img cursor-pointer" ng-click="dash.addImageComponent()"></i>
                        </span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addVideo" tooltip-placement="bottom">
                            <i class="bdp-icon ico-add-video cursor-pointer" ng-click="dash.addVideoComponent()"></i>
                        </span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.addBorder" tooltip-placement="bottom">
                            <i class="bdp-icon ico-add-border cursor-pointer" ng-click="dash.addBorderComponent()"></i>
                        </span>
                                                        <span class="display-inline-block seperate-line ml16"></span>
                                                        <span class="display-inline-block ml16 toolbar-title">{{ dash.advDash.guideLine | translate }}</span>
                                                        <label class="cursor-pointer ml8">
                                                            <input type="checkbox" ng-click="showDataScreenGrid = !showDataScreenGrid" ng-model="showDataScreenGrid"><span class="ml4">{{ dash.advDash.show | translate }}</span>
                                                        </label>
                                                        <span class="display-inline-block seperate-line ml16"></span>
                                                        <span class="display-inline-block ml16 toolbar-title">{{ dash.advDash.layer | translate }}</span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.top" tooltip-placement="bottom" ng-click="dash.setZIndex(top)">
                            <i class="bdp-icon ico-layer-rise cursor-pointer J_set_zindex"></i>
                        </span>
                                                        <span class="bdp-icon-wrap bdp-icon-bgcol cursor-pointer ml8" bdp-tooltip="pageContent.bottom" tooltip-placement="bottom" ng-click="dash.setZIndex(bottom)">
                            <i class="bdp-icon ico-layer-fall cursor-pointer J_set_zindex"></i>
                        </span>
                                                        <span class="display-inline-block seperate-line ml16"></span>
                                                        <span class="display-inline-block ml16 toolbar-title">{{ dash.advDash.scale | translate }}</span>
                                                        <label class="display-inline-block ml16">
                                                            <select ng-model="dash.scaleDashbord.selectedData" ng-change="dash.scaleDashbord.modifyScale();">
                                                                <option value="1">{{ dash.advDash.actualSize | translate }}</option>
                                                                <option value="2">{{ dash.advDash.selfAdaption | translate }}</option>
                                                            </select>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div class="screen-dashboard-wrap screen-dashboard-edit-wrap">
                                                    <div class="screen-dashboard">
                                                        <div class="dash-edit-content-view">
                                                            <div ng-include="./static/js/dashboard/tpl/data_screen_main.html"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="side-panel J_side_panel">
                                            <div datascreen-page-ele save-func="dash.saveChartStyle(chart)" ng-if="dash.editChartMetaVisible.pageEle"></div>
                                            <div chart-style-text save-func="saveDashboard()" ng-if="dash.editChartMetaVisible.text"></div>
                                            <div chart-style-extend save-func="dash.saveChartStyle(chart)" ng-if="dash.editChartMetaVisible.style"></div>
                                            <div chart-screen-numerical ng-if="dash.editChartMetaVisible.numerical"></div>
                                            <div chart-screen-video ng-if="dash.editChartMetaVisible.video"></div>
                                            <div chart-screen-img ng-if="dash.editChartMetaVisible.img"></div>
                                            <div datascreen-page-wrap ng-show="dash.editChartMetaVisible.pageWrap"></div>
                                        </div>
                                    </div>
                                </div>),

                                e.put("/static/js/dashboard/tpl/data_screen_main.html",
                                <div class="dash-wrapper J-dash-wrapper" ng-class="{
    dash-one-block:!dashLayoutInfo.show_block,
    edit-mode:dashEditMode,
    readonly-mode: !dashEditMode,
    dash-fixed-width:dashLayoutInfo.fixed_width,
    hide-block-watermark:!dashLayoutInfo.show_block && global.watterMark,
    dash-mode-free:dashLayoutInfo.layout_style == 2,
    has-global-filter: global.globalDashFilter.length > 0
    }" ng-style="dashLayoutInfo.dashWrapperStyle">

                                    <div class="folder-empty" ng-if="noDashes">
                                        <i class="bdp-icon ico-new-dashboard ico-no-opacity"></i>
                                        <p class="font-text-tip" translate="dash.emptyDatascreen" class="mt8"></p>
                                    </div>
                                    <div gridster="gridsterOpts" class="J_data_screen_hook" ng-style="dashLayoutInfo.gridsterStyle">
                                        <ul id="J_gridster" ng-if="dashLayoutInfo.layout_style == 2">
                                            <li gridster-item="item" ng-repeat="item in dashStandardItems" style="left: {{item.left}}px; top:{{item.top}}px;width:{{item.width}}px;height:{{item.height}}px;z-index: {{item.zIndex || maxZIndex}};background-color:{{(item.bgColor || rgba(0, 1, 0, 0)) +  !important}}; {{ item.borderType == CUSTOM ? (border:  + item.customBorder.width + px  + item.customBorder.style +   + item.customBorder.color) : }}" ng-hide="chartdel[chart+current_item.meta.ct_id]" id="{{item.children[0].meta.ct_id}}" data-chart-type="{{item.children[0].meta.type}}" data-chart-id="{{item.children[0].meta.ct_id}}" data-is-special-chart="{{item.children[0].meta.is_special_chart}}" ng-mouseleave="mouseleaveItem()" ng-class="{
                        selected:dashLayoutInfo.ct_id === item.children[0].meta.ct_id && !!dashEditMode,
                        border-left:item.children[0].meta.dash_setting.border_left,
                        border-right:item.children[0].meta.dash_setting.border_right,
                        border-top:item.children[0].meta.dash_setting.border_top,
                        border-bottom:item.children[0].meta.dash_setting.border_bottom,
                        no-title: item.children[0].meta.type === C310 || !item.children[0].meta.dash_setting.show_title,
                        no-axis: !item.children[0].meta.dash_setting.show_axis,
                        no-legend: !item.children[0].meta.dash_setting.show_legend,
                        component-text: item.children[0].meta.ct_id.indexOf(text_) > -1 || item.children[0].meta.type == C105,
                        no-edit-mode: !dashEditMode,
                        top-index-layer: item.isTopIndex,
                        resize-disable: lockItemPosMap && lockItemPosMap[item.children[0].meta.ct_id]
                    }">
                                                <div class="data-screen-item-box gridbox-border-{{item.borderType}}" ng-show="item.borderType && item.borderType != CUSTOM">
                                                    <div class="data-screen-item-top">
                                                        <div class="data-screen-item-left"></div>
                                                        <div class="data-screen-item-center"></div>
                                                        <div class="data-screen-item-right"></div>
                                                    </div>
                                                    <div class="data-screen-item-middle">
                                                        <div class="data-screen-item-left"></div>
                                                        <div class="data-screen-item-center"></div>
                                                        <div class="data-screen-item-right"></div>
                                                    </div>
                                                    <div class="data-screen-item-bottom">
                                                        <div class="data-screen-item-left"></div>
                                                        <div class="data-screen-item-center"></div>
                                                        <div class="data-screen-item-right"></div>
                                                    </div>
                                                </div>
                                                <div ng-repeat="child in item.children" ng-class="{chart-box: [C102,C104].indexOf(child.meta.type) < 0, gridster-no-drag: lockItemPosMap && lockItemPosMap[child.meta.ct_id] }" class="auto-size J_chart_box" ng-click="dash.editChartMeta(child, item);dash.handleKeyBoardMoveEvent(child, item)">
                                                    <!-- 文本组件已不需要，先保留 -->
                                                    <div ng-if="child.meta.ct_id.indexOf(text_) > -1 || child.meta.type == C105" ng-class="{ta-edit-mode-on:dashEditMode && textComponentEditMode[child.meta.ct_id]}">
                                                        <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                                            <div class="chart-operate-more bdp-icon-wrap" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item);$event.stopPropagation();" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item)">
                                                                <i class="bdp-icon ico-more cursor-pointer"></i>
                                                                <ul ng-show="more_show" class="dropdown-wrap">
                                                                    <li class="dropdown-item" translate="edit" ng-click="dash.editTextFromMore(child,item)"></li>
                                                                    <li class="dropdown-item" translate="dash.copyEle" ng-click="dash.copyComponent(child,item)"></li>
                                                                    <li class="dropdown-item" translate="dash.moveEle" ng-click="dash.moveComponent(child,item)"></li>
                                                                    <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id)"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div ng-if="dashEditMode" text-angular ng-model="child.meta.html" ng-style="child.meta.style" ng-blur="dash.saveTextComponent(child)" name="{{child.meta.ct_id}}" ta-toolbar="[[]]" ta-unsafe-sanitizer="true"></div>
                                                        <div ng-if="!dashEditMode" text-angular class="item-text-chart" ng-style="child.meta.style" ng-model="child.meta.html" ta-disabled="true" ta-unsafe-sanitizer="true"></div>
                                                        <div ng-show="dashEditMode && !textComponentEditMode[child.meta.ct_id]" class="base-loading-layer" ng-click="dash.editChartMeta(child, item)"></div>
                                                    </div>

                                                    <div ng-if="child.meta.type && child.meta.type.indexOf(C102) > -1" class="auto-size screen-item-image">
                                                        <div ng-if="item.url" class="auto-size" style="background:url({{item.url}}) no-repeat center; background-size: contain"></div>
                                                        <div ng-if="!item.url" class="auto-size screen-item-placeholder-image"></div>
                                                        <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                                            <div class="chart-operate-more bdp-icon-wrap" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item)" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item)">
                                                                <i class="bdp-icon ico-more"></i>
                                                                <ul ng-show="more_show" class="dropdown-wrap">
                                                                    <li class="dropdown-item" translate="dash.copyEle" ng-click="dash.copyComponent(child,item)"></li>
                                                                    <li class="dropdown-item" translate="dash.moveEle" ng-click="dash.moveComponent(child,item)"></li>
                                                                    <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id);$event.stopPropagation();"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div ng-if="child.meta.type && child.meta.type.indexOf(C103) > -1" class="auto-size screen-item-image" ng-class="{screen-item-video: dashLayoutInfo.ct_id === item.children[0].meta.ct_id}">
                                                        <div ng-if="!item.src" class="auto-size screen-item-placeholder-video"></div>
                                                        <video class="auto-size ng-hide" ng-if="item.autoplay  && item.loop && item.src" ng-show="item.autoplay  && item.loop" preload="auto" muted="muted" controls="controls" autoplay="autoplay" loop="loop" ng-src="{{item.src | trustUrl}}">
                                                        </video>
                                                        <video class="auto-size ng-hide" ng-if="item.autoplay  && !item.loop && item.src" ng-show="item.autoplay  && !item.loop" preload="auto" muted="muted" controls="controls" autoplay="autoplay" ng-src="{{item.src | trustUrl}}">
                                                        </video>
                                                        <video class="auto-size ng-hide" ng-if="!item.autoplay  && item.loop && item.src" ng-show="!item.autoplay  && item.loop" preload="auto" muted="muted" controls="controls" loop="loop" ng-src="{{item.src | trustUrl}}">
                                                        </video>
                                                        <video class="auto-size ng-hide" ng-if="!item.autoplay  && !item.loop && item.src" ng-show="!item.autoplay  && !item.loop" preload="auto" muted="muted" controls="controls" ng-src="{{item.src | trustUrl}}">
                                                        </video>

                                                        <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                                            <div class="chart-operate-more bdp-icon-wrap" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item)" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item)">
                                                                <i class="bdp-icon ico-more"></i>
                                                                <ul ng-show="more_show" class="dropdown-wrap">
                                                                    <li class="dropdown-item" translate="dash.copyEle" ng-click="dash.copyComponent(child,item)"></li>
                                                                    <li class="dropdown-item" translate="dash.moveEle" ng-click="dash.moveComponent(child,item)"></li>
                                                                    <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id);$event.stopPropagation();"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div ng-if="child.meta.type && child.meta.type.indexOf(C104) > -1" class="auto-size">
                                                        <div class="chart-operate" ng-if="!proj_share && dashProperty == 0 && dashEditMode">
                                                            <div class="chart-operate-more bdp-icon-wrap" ng-if="dashEditMode" ng-click="more_show = !more_show;dash.setOperatorIndex(more_show,false,item)" ng-mouseleave="more_show = false;dash.setOperatorIndex(more_show,false,item)">
                                                                <i class="bdp-icon ico-more"></i>
                                                                <ul ng-show="more_show" class="dropdown-wrap">
                                                                    <li class="dropdown-item" translate="remove" ng-click="dash.delComponent(child.meta.ct_id);$event.stopPropagation();"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div ng-show="dashEditMode && !textComponentEditMode[child.meta.ct_id]" class="base-loading-layer" ng-click="dash.editChartMeta(child, item)"></div>
                                                    </div>

                                                    <!-- 注意ngIf增加了一个子作用域，所以$parent要增加一层 -->
                                                    <div ng-if="child.meta.type && [C101, C102,C103,C104,C105].indexOf(child.meta.type) < 0">
                                                        <div class="item-chart-title">
                                                            <div class="item-chart-title-bd nowrap">
                                                                <div class="display-inline-block drill-tip" ng-if="child.meta.level_fields.length > 1">
                                                                    <i class="bdp-icon ico-drill"></i>
                                                                    <div class="dropdown-wrap drill-tip-bd">
                                            <span ng-repeat="drill_field in child.meta.level_fields">
                                                <i class="bdp-icon ico-slicesnav-arrow" ng-show="!$first"></i>
                                                {{drill_field.nick_name || drill_field.name}}
                                            </span>
                                                                    </div>
                                                                </div>
                                                                <i class="bdp-icon ico-linked" ng-if="child.meta.chart_link.linked_chart_type == 2"></i>
                                                                <i class="bdp-icon ico-chart-jump" ng-if="child.meta.chart_jump.can_jump == 1"></i>
                                                                <span class="no-margin">{{child.meta.name}}</span>
                                                                <div class="loading-wrap">
                                                                    <div class="loader-inner ball-spin-fade-loader">
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                        <div></div>
                                                                    </div>
                                                                </div>
                                                                <span class="filter-item" ng-repeat="it in child.meta.filter_list_inner" ng-if="it.range.length && !it.adv_type">
                                        <em ng-if="it.data_type === date && !it.granularity" ng-hide="AllMap.indexOf( (it.range | format_date:child.meta.adv_date_list ) ) >= 0">
                                            {{it.range | format_date:child.meta.adv_date_list}}
                                            <span ng-if="it.granularity == week">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                        </em>
                                        <em ng-if="it.data_type === date && it.granularity">{{it.range | inner_range_date_format:it}}
                                            <span ng-if="it.granularity == week">({{it.range[0] | weekFormat:it.range[0]}})</span>
                                        </em>
                                        <em ng-if="it.data_type !== date && !it.inner_adv_type && it.range_type != 0">{{it.range | dash_sub_date:it}}</em>
                                        <em ng-if="it.data_type !== date && ( (it.inner_adv_type && it.rangeNumber != 1) || it.range_type == 0 )">
                                            <span ng-if="!it.nick_name">{{it.name}}</span>
                                            <span ng-if="!!it.nick_name">{{it.nick_name}}</span>
                                            {{custom | translate}}
                                        </em>
                                        <em ng-if="it.data_type !== date && it.inner_adv_type && it.rangeNumber == 1 && it.range_type != 0 ">
                                            {{it.rangeFirstField | dash_sub_date:it}}
                                        </em>
                                    </span>
                                                                <span class="filter-item" ng-repeat="it in child.meta.diff_filter">
                                        <em>{{it}}</em>
                                    </span>
                                                            </div>
                                                        </div>
                                                        <div class="item-chart gridster-no-drag" ng-class="{noscroll:selected_type === C200 || selected_type === C400}" id="{{child.dom_id}}" size-x="{{item.sizeX}}" size-y="{{item.sizeY}}">
                                                            <div class="drill-crumbs-wrap"></div>
                                                            <div bdp-chart="draw_chart_url[child.dom_id].options" display-mode="{{item.sizeX + * + item.sizeY}}" data-updatetime="{{child.meta.update_time}}" data-index="$parent.$parent.$index" data-domid="child.dom_id" data-lazy-loaded="draw_chart_url[child.dom_id].lazyload" class="chart" ng-class="{chart-table:selected_type === C200,
                                        chart-canvas-table: selected_type === C200,
                                        chart-map:selected_type === C271 || selected_type === C272,
                                        chart-funnel overflow-hidden:selected_type === C330,
                                        show-datalabels: child.meta.dash_setting.show_datalabels,
                                        hide-total:!child.meta.dash_setting.show_total}" data-ctid="{{draw_chart_url[child.dom_id].options.ct_id}}"></div>
                                                            <div class="loading-wrap" ng-if="item.children[0].meta.type === C310">
                                                                <div class="loader-inner ball-spin-fade-loader">
                                                                    <div></div>
                                                                    <div></div>
                                                                    <div></div>
                                                                    <div></div>
                                                                    <div></div>
                                                                    <div></div>
                                                                    <div></div>
                                                                    <div></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div chart-operate data-ct-id="{{child.meta.ct_id}}" class="gridster-no-drag" data-origin="data_screen_edit"></div>
                                                    </div>
                                                </div>

                                            </li>
                                        </ul>
                                        <div ng-show="showDataScreenGrid" class="data-screen-grid"></div>
                                    </div>

                                </div>),

                                e.put("/static/js/dashboard/tpl/gis_edit.html",
                                <div class="gis-edit-view">
                                    <div class="view-header text-center">
                                        <a class="back-btn" ng-click="back()">
                                            <i class="bdp-icon ico-back"></i>
                                            <!-- <span translate="done"></span> -->
                                        </a>
                                        <div class="view-header-seperate-line"></div>
                                        <h2 class="text-left view-header-left-name ng-cloak">{{chart.edit | translate}}</h2>
                                    </div>

                                    <div class="content-wrap">
                                        <div class="gis-layers chart-data-info">
                                            <div class="worksheets block">
                                                <p class="hd">
                                                    {{chart.worksheet|translate}}
                                                    <i class="bdp-icon ico-plus1 fr" ng-click="showAddTableDialog()"></i>
                                                </p>
                                                <ul>
                                                    <li ng-repeat="tb in viewData.tbList" data-drag="true" data-jqyoui-options="{helper: clone, appendTo: body}" class="worksheet-item" jqyoui-draggable="{placeholder: keep, onStart: dragTbFunc(tb)}">
                                                        <div class="fr icon-list">
                                                            <i class="cursor-pointer bdp-icon ico-edit" ng-class="{guide-tb-edit: $index == 0}" ng-click="showSetCoordDialog(tb)"></i>
                                                            <i class="cursor-pointer bdp-icon ico-trash fr" ng-show="viewData.tbList.length > 1" ng-click="deleteTb(tb.tb_id, $index)"></i>
                                                        </div>
                                                        <p class="nowrap tb-name" ng-bind="tb.name"></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <hr class="split">
                                                <div class="layers block" data-drop="true" data-jqyoui-options="{accept: .gis-layers .worksheets li, hoverClass: ui-droppable-hover}" jqyoui-droppable="{onDrop: onDrop()}">
                                                    <p class="hd">{{chart.layer|translate}}</p>
                                                    <ul ui-sortable="sortLayers" ng-model="chart_ops.meta.layers">
                                                        <li class="nowrap" ng-repeat="layer in chart_ops.meta.layers" ng-class="{active: $index === currentLayerIndex}">
                                                            <i class="bdp-icon ico-order fl"></i>
                                                            <div class="fr icon-list">
                                                                <i class="cursor-pointer bdp-icon ico-visible" ng-class="{ico-visible-grey: layer.invisible}" ng-click="toggleVisible(layer)" ng-show="layer.invisible" title="{{chart.showLayer|translate}}"></i>
                                                                <i class="cursor-pointer bdp-icon ico-visible" ng-class="{ico-visible-grey: layer.invisible}" ng-click="toggleVisible(layer)" ng-hide="layer.invisible" title="{{chart.hideLayer|translate}}"></i>
                                                                <i class="cursor-pointer bdp-icon ico-more" ng-click="toggleMoreAction($event)"></i>
                                                                <div class="more-dropdown hidden">
                                                                    <div class="action" ng-click="editMode=true;">{{rename | translate}}</div>
                                                                    <div class="action" ng-click="copyLayer($index);">{{chart.copyLayer | translate}}</div>
                                                                    <div class="action" ng-click="deleteLayer($index);">{{remove|translate}}</div>
                                                                </div>
                                                            </div>
                                                            <p class="nowrap layer-name" ng-show="!editMode" ng-click="setCurrentLayer($index)">{{layer.layer_name}}</p>
                                                            <div class="layer-name" ng-show="editMode">
                                                                <input type="text" class="input-text-block" focus-me="editMode" ng-model="layer.layer_name" ng-blur="editMode=renameLayer(layer);" ng-keyup="onRenameLayerKeyUp($event)">
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div class="droppable-hint" ng-if="!(chart_ops.meta.layers && chart_ops.meta.layers.length)">{{chart.addLayerTopHint|translate}}<br>{{chart.addLayerBottomHint | translate}}</div>
                                                </div>
                                                <hr class="split">
                                                    <div class="fields block pr">
                                                        <!-- <p class="hd">字段</p> -->
                                                        <div class="hd hd-field-wrap">
                                                            <p class="hd-field-tip" translate="chart.field"></p>
                                                            <div class="query-box auto no-margin">
                                                                <input type="text" class="query-text" ng-input-text ng-model="query">
                                                            </div>
                                                            <div class="add" ng-click="newFieldTypeSelect = !newFieldTypeSelect" click-outside="newFieldTypeSelect = false" outside-active="newFieldTypeSelect">
                                                                <a class="cursor-pointer bdp-icon-wrap" title="{{chart.addField | translate}}">
                                                                    <i class="bdp-icon ico-plus1"></i>
                                                                </a>
                                                                <ul class="field-type-select dropdown-wrap" ng-show="newFieldTypeSelect">
                                                                    <li class="dropdown-item" ng-click="createFieldFormula()" translate="chart.addFormulaField"></li>
                                                                    <li class="dropdown-item" ng-click="createFieldGroup()" translate="chart.addGroupField"></li>
                                                                    <li class="dropdown-item" ng-click="createFieldByML()" translate="使用机器模型" ng-if="permision.newTraining && !wsId"></li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <ul class="field-list gis-field-list">
                                                            <li ng-repeat="field in field_list | query_fields:query" ng-class="{handler-more: field.handler_more_show} " ng-mouseenter="field.justshowme = true" ng-mouseleave="field.justshowme = false">

                                                                <div ng-click="show_edit = !show_edit" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{placeholder:keep,onStart:dragFieldFunc(field),onStop:stopDragField()}" class="title nowrap {{field.data_type}}-title cursor-pointer" ng-class="{field-drag-title: !chartMainMask}">
                                                                    <i ng-if="field.data_type===date" class="bdp-icon ico-triangle-right" ng-class="{ico-triangle-down:show_edit}"></i>
                                                                    <i class="bdp-icon ico-type-{{field.ico_type}}" ng-class="{ico-type-{{field.ico_type}}-orange:field.formula, -ml: field.made_by_ml && field.formula}"></i>
                                                                    <span class="data-tag" field-set-tooltip="field" tooltip-placement="top-left" ng-if="tbType != public" ng-class="{border-bottom-5182E4: (field.original_name != field.name || field.remark)}" ng-bind="field.name"></span>

                                                                    <span class="data-tag" ng-if="tbType == public" ng-bind="field.name"></span>



                                                                    <span class="field-handler hover-show display-block" ng-if="field.formula !=  && field.editable && field.data_type == string && field.param.type == group" drop-down-flag="field.handler_more_show">
                              <div class="bdp-icon-wrap" title="{{more | translate}}" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                    <li class="dropdown-item" ng-click="modifyField(field)">{{edit | translate}}</li>
                                    <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)">{{remove | translate}}</li>
                                    <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, source)">{{sort | translate}}</li>
                                </ul>
                            </div>
                        </span>
                                                                    <span class="field-handler hover-show display-block" ng-if="field.formula !=  && field.editable && field.data_type == string && field.param.type !== group" drop-down-flag="field.handler_more_show">
                              <div class="bdp-icon-wrap" title="{{more | translate}}" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                    <li class="dropdown-item" ng-click="modifyField(field)">{{edit | translate}}</li>
                                    <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)">{{remove | translate}}</li>
                                    <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, source)">{{sort | translate}}</li>
                                </ul>
                            </div>
                        </span>

                                                                    <span ng-if="field.formula !=  && field.editable && field.data_type != string " class="field-handler hover-show">
                            <span class="bdp-icon-wrap" ng-click="modifyField(field)" ng-hide="field.made_by_ml" title="{{edit | translate}}">
                                <i class="bdp-icon ico-edit"></i>
                            </span>
                            <span class="bdp-icon-wrap" ng-click="delNewField(field.name,field.fid)" title="{{remove | translate}}">
                                <i class="bdp-icon ico-trash"></i>
                            </span>
                        </span>

                                                                </div>
                                                                <ul ng-if="field.data_type == date" ng-show="show_edit" class="date-field ml20">
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\year\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="year"></span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\quarter\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="quarter"></span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\month\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="month">月</span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\week\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="week"></span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\day\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="day">日</span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\hour\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="hour">时</span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\minute\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="minute">分</span>
                                                                        </p>
                                                                    </li>
                                                                    <li class="cursor-pointer">
                                                                        <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\second\\),onStop:stopDragField()}">
                                                                            <i class="bdp-icon ico-type-date"></i>
                                                                            <span translate="second">秒</span>
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                        </div>

                                        <div class="gis-main">
                                            <div class="chart-args">
                                                <div class="row x-axis">
                                                    <span class="fl axis-head">{{chart.dimension|translate}}</span>
                                                    <div class="drag-target">
                                                        <div class="drag-target-inner" data-drop="true" data-jqyoui-options="{accept:.field-list .field-drag-title}" jqyoui-droppable="{onDrop: dropFieldTo(\\x\\)}">
                                                            <ul class="drag-target-list drag-target-list-dimension" id="dragX" ui-sortable="sortAxisField" ng-model="viewData.currentLayer.x">
                                                                <li ng-repeat="it in viewData.currentLayer.x" class="drag-item" ng-mouseleave="it.showDropdown = false">
                                                                    <div class="data-tag remove-icon-pr">
                                        <span class="tag ui-select">
                                            <span class="name" ng-click="it.showDropdown=true" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)">
                                                <span class="nowrap">{{it.nick_name || it.name}}</span>
                                            </span>
                                            <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeField(x, it);"></i>
                                        </span>
                                                                    </div>
                                                                    <div class="field-tip dropdown-wrap" ng-if="it.nick_name">
                                                                        <span>{{it.name}}{{setAdvanceAggregatorName(it)}}</span>
                                                                    </div>
                                                                    <!--end data-tag-->
                                                                </li>
                                                            </ul>

                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="row y-axis">
                                                    <span class="fl axis-head">{{chart.value|translate}}</span>
                                                    <div class="drag-target">
                                                        <div class="drag-target-inner" data-drop="true" data-jqyoui-options="{accept:.field-list .field-drag-title}" jqyoui-droppable="{onDrop: dropFieldTo(\\y\\)}">
                                                            <ul class="drag-target-list drag-target-list-dimension" id="dragY" ui-sortable="sortAxisField" ng-model="viewData.currentLayer.y">
                                                                <li ng-repeat="it in viewData.currentLayer.y track by $index" class="drag-item" ng-mouseleave="it.show_formula = false" outside-active="it.show_formula">

                                                                    <div class="data-tag remove-icon-pr">
                                        <span class="tag ui-select">
                                            <span ng-click="showFormula(it)" class="name" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)">
                                                <i class="bdp-icon ico-triangle-down1 ico-always-highlight fl"></i>
                                                <i class="fl bdp-icon ico-filter-white" ng-if="it.post_filter && it.post_filter.enabled != 0"></i>
                                                <span class="nowrap nick-name" ng-bind="it.nick_name" ng-if="it.nick_name != undefined && it.nick_name != "></span>
                                                <span class="nowrap" title="" ng-bind="it.name" ng-if="!it.nick_name"></span>
                                                <i ng-if="it.aggregator != undefined && !it.nick_name" class="inline fl aggr-name nowrap" title="">{{setAdvanceAggregatorName(it)}}</i>
                                            </span>
                                            <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeField(y, it);"></i>
                                            <div class="data-formula" ng-show="it.show_formula" field-formula="{data_type:it.data_type}"></div>
                                        </span>
                                                                    </div>
                                                                    <div class="field-tip dropdown-wrap" ng-if="(it.hasOwnProperty(nick_name) && it.nick_name !==)">
                                                                        <em class="arrow arrow-up"></em>
                                                                        <span>{{it.name}}{{setAdvanceAggregatorName(it)}}</span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="chart-left-side">
                                                <div chart-filter></div>

                                                <div class="scatter-bubble-layer" ng-controller="bubbleTabCtrl" ng-show="viewData.currentLayer.type != heatmap">
                                                    <hr class="split" ng-if="[bubble, d_trajectory].indexOf(viewData.currentLayer.type) > -1 || (viewData.currentLayer.type == graph && viewData.currentLayer.y.length > 0)">
                                                        <div class="tab-hd clearfix" ng-if="[bubble, d_trajectory].indexOf(viewData.currentLayer.type) > -1 || (viewData.currentLayer.type == graph && viewData.currentLayer.y.length > 0)">
                                                            <a class="tab-hd-item" ng-click="tab.index = 0" ng-class="{active : tab.index == 0}" translate="color"></a>
                                                            <a class="tab-hd-item" ng-click="tab.index = 1" ng-class="{active : tab.index == 1}" translate="size"></a>
                                                        </div>
                                                        <div class="tab-bd">
                                                            <div class="tab-scatter-color" gis-color-setting ng-show="tab.index == 0"></div>
                                                            <div class="tab-scatter-bubble" gis-bubble-size ng-show="tab.index == 1" ng-if="[bubble, d_trajectory].indexOf(viewData.currentLayer.type) > -1 || (viewData.currentLayer.type == graph && viewData.currentLayer.y.length > 0)"></div>
                                                        </div>
                                                </div>
                                            </div>

                                            <div id="chartBox">
                                                <div bdp-chart="draw_chart_url.options" display-mode="edit" data-options="draw_chart_url.options" data-lazy-loaded="draw_chart_url.lazyload" class="chart"></div>
                                            </div>
                                            <div class="chart-main-mask" ng-if="chartMainMask"></div>
                                        </div>


                                        <div class="gis-settings chart-right">
                                            <div class="block chart-title">
                                                <div class="hd" translate="chart.name"></div>
                                                <div class="bd">
                                                    <input type="text" ng-model="chart_ops.name" class="input-text-block chart-ops-inp" ng-keydown="ifEnterDown($event)" ng-blur="saveAfterCheckDirty({not_need_redraw:true,only_refresh_data:false,closeDialog:false})" placeholder="{{chart.untitledChart|translate}}">
                                                </div>
                                            </div>
                                            <div class="block chart-type">
                                                <div class="hd" translate="chart.type"></div>
                                                <div class="bd">
                                                    <ul>
                                                        <li ng-repeat="type in gisTypes" ng-click="setGisType(type)" title="{{gisTypeNames[type]}}" }>
                                                        <a ng-class="{active: type === viewData.currentLayer.type, guide-newtype-trajectory: type == trajectory }">
                                                            <i class="chart-type-icon ico-gis-{{type}}"></i>
                                                        </a>
                                                    </li>
                        </ul>
                    </div>
                </div>
                <div class="block symbol-type" ng-if="viewData.currentLayer.type === bubble">
                    <p class="hd">{{chart.symbol | translate}}</p>
                    <ul>
                        <li ng-repeat="symbol in gisBubbleSymbol" ng-click="setGisSymbolType(symbol)">
                            <a ng-class="{active: viewData.currentLayer.bubble_symbol === symbol}">
                                <i class="chart-type-icon ico-symbol-{{symbol}}"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="block heatmap-radius" ng-if="viewData.currentLayer.type === heatmap">
                    <p class="hd">{{chart.thermalRadius|translate}}</p>
                    <div>
                        <input type="number" placeholder="{{chart.thermalRadius|translate}}" ng-model="viewData.currentLayer.heatmap_setting.radius" ng-blur="checkRadius()" ng-keyup="onRadiusKeyUp($event)">
                            <select ng-model="viewData.currentLayer.heatmap_setting.unit" ng-change="onUnitChange()" ng-options="unit.value as unit.name for unit in heatMapUnit">
                            </select>
                    </div>
                </div>

                <div class="block symbol-type" ng-if="viewData.currentLayer.type === graph">
                    <p class="hd">{{chart.graph | translate}}</p>
                    <ul>
                        <li ng-repeat="type in gisGraphTypes" ng-click="setGisGraphType(type)">
                            <a ng-class="{active: viewData.currentLayer.graph_type === type}">
                                <i class="icomoon icomoon-{{type}}"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="block trajectory-field" ng-if="[trajectory, d_trajectory].indexOf(viewData.currentLayer.type) >= 0">
                    <div class="bd">
                        <div class="row">
                            <label>{{chart.trajectoryField | translate}}</label>
                            <select ng-model="viewData.currentLayer.trajectory[0]" ng-options="field.name for field in field_list | filter:{ data_type : !date } track by field.fid" ng-change="changeTrajectory()" style="width:80%"></select>
                        </div>
                        <div class="row">
                            <label>{{chart.sequenceField | translate}}</label>
                            <select ng-model="viewData.currentLayer.sequence[0]" ng-options="field.name for field in field_list | filter:{ data_type : date } track by field.fid " ng-change="changeSequence()" style="width:80%"></select>
                        </div>
                    </div>
                </div>

                <div class="block time-animation">
                    <div class="hd">
                        <label>
                            <input type="checkbox" ng-if="viewData.currentLayer.type !== d_trajectory" ng-model="viewData.currentLayer.timeline.enabled" ng-change="enableTimeline()">
                                {{chart.timeAnimation| translate}}
                        </label>
                    </div>
                    <div class="bd" ng-if="viewData.currentLayer.timeline.enabled">
                        <div class="row" ng-if="viewData.currentLayer.type !== d_trajectory">
                            <label>{{chart.timelineField | translate}}</label>
                            <select ng-model="viewData.currentLayer.timeline.field" ng-options="field.name for field in field_list | filter:{ data_type : date } track by field.fid" ng-change="viewData.currentLayer.timeline.field.granularity=day; saveChartImmediate()" style="max-width:100%"></select>
                        </div>
                        <div class="row" ng-if="viewData.currentLayer.timeline.field">
                            <label>{{chart.timelineGranularity | translate}}</label>
                            <select ng-model="viewData.currentLayer.timeline.field.granularity" ng-options="g|granularity for g in timeGranularity" ng-change="saveChart()"></select>
                        </div>
                        <div class="row" ng-if="viewData.currentLayer.timeline.field && viewData.currentLayer.type !== d_trajectory">
                            <label translate="chart.timelineInterval"></label>
                            <input type="number" class="w60" ng-if="viewData.currentLayer.timeline.field" ng-model="viewData.currentLayer.timeline.interval" ng-blur="checkTimelineInterval()" ng-keyup="onTimelineIntervalKeyUp($event)">
                                <label>{{ timeGranularityLabelMap[viewData.currentLayer.timeline.field.granularity] }}</label>
                        </div>
                        <div class="row">
                            <label translate="chart.timeAnimationSpeed"></label>
                            <select ng-model="viewData.currentLayer.timeline.speed" ng-options="speed.val as speed.name|translate for speed in timeAnimationSpeeds" ng-change="saveChart({only_redraw: true})" style="max-width:100%"></select>
                            <label class="ml24" ng-if="viewData.currentLayer.timeline.speed == 9" fps>FPS</label>
                            <input type="number" ng-if="viewData.currentLayer.timeline.speed == 9" ng-model="viewData.currentLayer.timeline.fps" ng-blur="checkTimelineFps()" ng-keyup="onTimelineFpsKeyUp($event)">
                        </div>
                        <div class="row">
                            <label>
                                <input type="checkbox" ng-model="viewData.currentLayer.timeline.loop" ng-change="saveChart({only_redraw: true})"> {{chart.timeAnimationLoop| translate}}
                            </label>
                        </div>
                    </div>
                </div>
    </div>
</div>
</div>

<div gis-edit-guide veil-ele="guide-tb-edit" step-num="gisEditGuide" ng-if="showGisEditGuide && gisEditGuide == 0"></div>
<div gis-edit-guide veil-ele="guide-newtype-trajectory" step-num="gisEditGuide" ng-if="showGisEditGuide && gisEditGuide == 1 && !(viewData.currentLayer && viewData.currentLayer.type.indexOf(trajectory) >= 0)"></div>
<div gis-edit-guide veil-ele="time-animation" step-num="gisEditGuide" ng-if="showGisEditGuide && gisEditGuide == 2 && !(viewData.currentLayer && viewData.currentLayer.timeline)"></div>
),

e.put("/static/js/dashboard/tpl/markPointTooltip.html",
<div class="mark-point-wrap">
    <div ng-repeat="item in markPoints" class="hchart-mark-point" style="left:{{item.pos.left}}px;top:{{item.pos.top}}px">
        <i class="bdp-icon ico-comment" ng-click="setTooltipPos($event, item)" ng-show="!item.show"></i>
        <div class="popover mark-point-tooltip" ng-class="{top: item.popover.pos === top,bottom: item.popover.pos === bottom,}" ng-show="item.show" ng-style="item.posStyle">
            <i class="bdp-icon ico-cancel close" title="{{close|translate}}" ng-click="item.show=false"></i>
            <div class="popover-inner">
                <div class="popover-content" ng-style="item.widthStyle">
                    <div class="tooltip-hd text-left" ng-if="mode==edit">
                        {{chart.markPoint | translate}}
                    </div>
                    <div class="tooltip-bd text-left" ng-bind="item.pointModel.comment"></div>
                </div>
            </div>
        </div>
    </div>
</div>),

e.put("/static/js/dashboard/tpl/project_view.html",
<div nav-workspace class="nav-workspace"></div>
<div project-list bindonce ng-class="{role-user:role==user,
        has-workspace-list: workspaceList && workspaceList[dash].length > 0 && view != data_screen,
        empty-project-wrap: noFolders}" class="dash-sidebar J_dash_sidebar"></div>
<div class="dash-edit-content J_dash_edit_content" ng-class="{shopex-dash-edit-content: (enterprise_type == 5 || enterprise_type == 6) && noFolders}">
    <div ui-view class="dash-edit-content-view pr">
        <div class="project-empty" ng-if="noFolders && !(enterprise_type == 5 || enterprise_type == 6) && !isThirdIframe">
            <i class="bdp-icon ico-new-folder ico-no-opacity"></i>
            <p class="font-text-tip" translate="dash.emptyProject" class="mt16"></p>
        </div>

        <div class="shopex-empty-dash-wrap" ng-if="(enterprise_type == 5 || enterprise_type == 6) && noFolders">
            <div class="shopex-empty-dash-title">欢迎使用生意罗盘</div>
            <div class="shopex-empty-dash-desc">
                生意罗盘是专业的数据分析产品，为您定制专业的数据可视化服务，帮助您实现数据运营，用数据指导决策等。它能够整合淘宝、京东等多平台数据，为您提供最便捷的今日资讯，根据当前资讯，您可以有针对性的查看商品分析、客户分析和运营管理分析，从而为决策提供最有效的数据支撑。
            </div>
            <div class="shopex-empty-dash-btn-wrap text-center">
                <button class="bdp-btn bdp-btn-ok" ng-click="click_show_view(database)">立即使用</button>
            </div>
            <div class="shopex-empty-dash-img-wrap text-center">
                <img class="shopex-empty-dash-img" ng-src="/static/images/shopex.png">
            </div>
        </div>

        <div class="project-empty" ng-if="isThirdIframe">
            <img ng-src="/static/images/rongyi_empty_folder.png" ng-if="isThirdIframe">
                <p class="mt16 text-left">
                    当前账户尚未分配浏览数据权限，<br>请联系容易网客服： 400-040-8989
                </p>
        </div>
    </div>
</div>),

e.put("/static/js/dashboard/tpl/visual-analysis-guide.html",
<div class="visual-analysis-wrap animated fadeIn">
    <div class="visual-analysis J-va-guide">
        <span class="bdp-icon-wrap close" ng-click="guideKnown()"><i class="bdp-icon ico-close-white"></i></span>
        <div class="head J-va-head">
            <p class="main-title"><strong>全新可视化分析功能上线</strong></p>
            <p class="second-title J-va-s-title">在数据中抽丝剥茧，快速发现核心问题</p>
        </div>
        <div class="content J-va-content">
            <div class="tab-hd">
                <span class="tab-item" ng-class="{active: activeTab == 1}" ng-click="setActiveGuide(1)">快速筛选</span>
                <span class="tab-item" ng-class="{active: activeTab == 2}" ng-click="setActiveGuide(2)">自由下钻</span>
                <span class="tab-item" ng-class="{active: activeTab == 3}" ng-click="setActiveGuide(3)">数据详情</span>
                <span class="tab-item" ng-class="{active: activeTab == 4}" ng-click="setActiveGuide(4)">单点查看</span>
            </div>
            <div class="tab-bd">
                <div class="tab-content">
                    <img ng-src="/static/images/va-guide/va-guide-0{{activeTab}}.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</div>),

e.put("/static/js/dashboard/tpl/dialogTemplates/fullscreen.html",
<div class="chart-fullscreen-wrap J-chart-fullscreen-wrap-export display-device-{{fullDisplayDevice}} display-theme-{{fullDisplayTheme === 1 ? dark : light}}" bindonce>
    <div class="view-header fullscreen-view-header">
        <div class="view-header-seperate-line" ng-show="fullscreen.ableLeftNav"></div>
        <h3 class="nowrap fs-title" ng-class="{full-width: !fullscreen.ableLeftNav}">{{fullscreen.name}}</h3>

        <div class="btn-layer">
            <a class="full-display-setting" ng-click="show_display_theme = !show_display_theme" click-outside="show_display_theme = false" outside-active="show_display_theme">
                <span class="setting-label" bo-text="dash.displayTheme | translate"></span>
                <span class="btn-layer-opt">
                    <span ng-if="fullDisplayTheme === 1" bo-text="dash.darkTheme | translate"></span>
                    <span ng-if="fullDisplayTheme != 1" bo-text="dash.lightTheme | translate"></span>
                    <span class="btn-layer-hover-line"></span>
                </span>
                <i class="bdp-icon ico-triangle-down"></i>
                <ul class="dropdown-wrap" ng-show="show_display_theme">
                    <li class="dropdown-item" ng-click="setFullDisplayTheme(1)" bo-text="dash.darkTheme | translate"></li>
                    <li class="dropdown-item" ng-click="setFullDisplayTheme(2)" bo-text="dash.lightTheme | translate"></li>
                </ul>
            </a>
            <a class="full-display-setting" ng-click="show_display_devices = !show_display_devices" click-outside="show_display_devices = false" outside-active="show_display_devices">
                <span class="setting-label" bo-text="dash.displayDevice | translate"></span>
                <span class="btn-layer-opt">
                    <i class="bdp-icon ico-device ico-device-{{fullDisplayDevice}}"></i>
                    <span class="btn-layer-hover-line"></span>
                </span>
                <i class="bdp-icon ico-triangle-down"></i>
                <ul class="dropdown-wrap" ng-show="show_display_devices">
                    <li class="dropdown-item" ng-click="setFullDisplayDevice(pc)">
                        <i bo-title="dash.pcDevice | translate" class="bdp-icon ico-device-pc"></i>
                    </li>
                    <li class="dropdown-item" ng-click="setFullDisplayDevice(projector)">
                        <i bo-title="dash.projectorDevice | translate" class="bdp-icon ico-device-projector"></i>
                    </li>
                    <li class="dropdown-item" ng-click="setFullDisplayDevice(tv)">
                        <i bo-title="dash.tvDevice | translate" class="bdp-icon ico-device-tv"></i>
                    </li>
                </ul>
            </a>
            <a class="fs-close cursor-pointer" ng-click="closeThisDialog();resetChartData();">
                <i class="bdp-icon ico-exit-fullscreen"></i>
                <span bo-text="exitFullscreen | translate"></span>
            </a>
        </div>
    </div>
    <div class="fullscreen-view-body J-fullscreen-export-wrap">
        <div class="drill-crumbs-wrap"></div>
        <!-- 隐藏的全屏粒度 start -->
        <div class="clearfix J_filterWrap_hidden hidden-container" ng-class="{right: show_chart_description}" ng-show="!autoPlaying">
            <div dash-filter style="height:0" chart-options="fullscreen.info.options" adv-date-list="fullscreen.info.filter_opts.meta.adv_date_list" opts="fullscreen.info.filter_opts" fullscreen="true" class="clearfix J_filter_hidden">
            </div>
            <div class="dash-filter pr J_dateGranularity_hidden" style="height:0" ng-show="fullscreen.info.filter_opts.meta.isGranularity === 1 && fullscreen.info.filter_opts.meta.fullscreen_granularity">
                <i class="bdp-icon-wrap ico-calendar-white"></i>
                <div class="filter-i-w">
                    <ul class="filter-i select-granularity">
                        <li class="drag-item axias-title" ng-repeat="it in fullscreen.info.date_fields" ng-show="it.data_type === date" ng-class="{granularity-selected: show_formula }" ng-click="show_formula = !show_formula" click-outside="show_formula = false" outside-active="show_formula">
                            <div class="data-tag">
                                <div class="xaxis ui-select">
                                    <span class="name">
                                        <span class="nowrap" ng-bind="it.nick_name || it.name"></span>
                                <i class="mr4 inline fl nowrap granularity" ng-if="it.data_type === date">({{it.granularity|granularity}})</i>

                                <i class="bdp-icon ico-triangle-down" ng-if="it.data_type === date"></i>
                                </span>
                                    <div class="filter-i-list axias-granularity" ng-if="it.data_type === date" ng-show="show_formula">
                                        <div date-granularity tb-id="fullscreen.info.filter_opts.meta.tb_id" field="it" axis="compare_axis" set-granularity="fullScreenGranularity"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- end data-tag -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 隐藏的全屏粒度 end -->

        <div class="dash-filter-wrap clearfix J_filterWrap" ng-class="{right: show_chart_description}" ng-show="!autoPlaying">
            <div dash-filter chart-options="fullscreen.info.options" adv-date-list="fullscreen.info.filter_opts.meta.adv_date_list" opts="fullscreen.info.filter_opts" fullscreen="true" class="clearfix J_filter">
            </div>

            <div class="dash-filter pr date-guanularity-filter J_dateGranularity" ng-show="fullscreen.info.filter_opts.meta.isGranularity === 1 && fullscreen.info.filter_opts.meta.fullscreen_granularity">
                <i class="bdp-icon-wrap ico-calendar-white"></i>
                <div class="filter-i-w">
                    <ul class="filter-i select-granularity">
                        <li class="drag-item axias-title" ng-repeat="it in fullscreen.info.date_fields" ng-show="it.data_type === date" ng-class="{granularity-selected: show_formula }" ng-click="show_formula = !show_formula" click-outside="show_formula = false" outside-active="show_formula">
                            <div class="data-tag">
                                <div class="xaxis ui-select">
                                    <span class="name">
                                        <span class="nowrap" ng-bind="it.nick_name || it.name"></span>
                                <i class="mr4 inline fl nowrap granularity" ng-if="it.data_type === date">({{it.granularity|granularity}})</i>

                                <i class="bdp-icon ico-triangle-down" ng-if="it.data_type === date"></i>
                                </span>
                                    <div class="filter-i-list axias-granularity" ng-if="it.data_type === date" ng-show="show_formula">
                                        <div date-granularity tb-id="fullscreen.info.filter_opts.meta.tb_id" field="it" axis="compare_axis" set-granularity="fullScreenGranularity"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- end data-tag -->
                        </li>
                    </ul>
                </div>
            </div>

            <advance-sort chart-options="fullscreen.info.options" chart-meta="fullscreen.info.filter_opts.meta" drill-level="drill_level" bdp-chart-obj="$bdpChart" chart-mode="fullscreen"></advance-sort>

        </div>

        <div class="fs-chart-main">
            <div bdp-chart="fullscreen.queue_show.options" data-lazy-loaded="fullscreen.queue_show.lazyload" display-mode="fullscreen" class="chart fullscreen-chart fs-queue-show J_chart J_chart_box J-export-img-elem-chart" data-autoplay="autoPlaying" data-index="fullscreen.queue_show.index" ng-class="{right: show_chart_description,chart-custom: selected_type === C500,chart-funnel overflow-hidden:fullscreen.queue_show.chart_type === C330, show-datalabels: show_data_label, chart-table:selected_type === C200 || fullscreen.queue_show.chart_type === C200, chart-canvas-table:selected_type === C200 || fullscreen.queue_show.chart_type === C200}">
            </div>
            <div bdp-chart="fullscreen.queue_next.options" data-lazy-loaded="fullscreen.queue_next.lazyload" display-mode="fullscreen" class="chart fullscreen-chart fs-queue-next J_chart J_chart_box" data-autoplay="autoPlaying" data-index="fullscreen.queue_next.index" ng-class="{right: show_chart_description,chart-custom: selected_type === C500,chart-funnel overflow-hidden:fullscreen.queue_next.chart_type === C330, show-datalabels: show_data_label, chart-table:selected_type === C200 || fullscreen.queue_next.chart_type === C200, chart-canvas-table:selected_type === C200 || fullscreen.queue_next.chart_type === C200}">
            </div>
        </div>
        <div class="nav-handler-icon cursor-pointer" ng-class="{invisible:autoPlaying}" ng-click="slideNav($event,show)" ng-show="fullscreen.ableLeftNav">
            <i class="bdp-icon ico-list-bold"></i>
        </div>
        <div class="nav-handler" ng-class="{invisible:autoPlaying}" ng-mouseover="slideNav($event,show)" ng-show="fullscreen.ableLeftNav"></div>
        <div class="nav" ng-class="{invisible:autoPlaying}" ng-mouseleave="slideNav($event,hide)" ng-show="fullscreen.ableLeftNav">
            <ul class="chart-type">
                <li ng-repeat="chart in fullscreen.charts" ng-class="{active:fullscreen.index === $index}" ng-click="slide($index - fullscreen.index,{auto:false})" ng-hide="chart.children[0].meta.type === C101">
                    <i class="{{chart.children[0].meta.type}}"></i>
                    <span class="content-table">
                            <span title="{{chart.children[0].meta.name}}">
                                {{chart.children[0].meta.name | limitTo:14}}
                            </span>
                    </span>
                </li>
            </ul>
        </div>
        <div class="control-pane">
            <div class="more-action J-more-action" ng-class="{invisible:autoPlaying}">
                <div class="action-opt-wrap J-action-opt-wrap">
                    <ul class="nowrap J-action-optlist">
                        <li ng-if="role && !fullscreen.info.filter_opts.meta.split_compare && [C200, C310, C500].indexOf(fullscreen.queue_show.filter_opts.meta.drillChartType) < 0" export-img data-mode="fullscreen" data-filename="{{fullscreen.name}}">
                            <a><i class="bdp-icon ico-img"></i></a><span class="text" bo-text="dash.exportImg| translate"></span>
                        </li>
                        <li ng-if="permision.allowExporting && global.exportDataSetting.is_export == 1 && fullscreen.queue_show.filter_opts.meta.drillChartType !==
                        C500" export-excel data-mode="fullscreen">
                            <a><i class="bdp-icon ico-export-excel"></i></a><span class="text" bo-text="dash.exportExcel| translate"></span>
                        </li>
                        <li ng-class="{active: show_data_label}" ng-if="[C200, C261, C310, C300, C340, C400, C500].indexOf(fullscreen.queue_show.filter_opts.meta.drillChartType) < 0" ng-click="toggleDataLabel()">
                            <a><i class="bdp-icon" ng-class="{true: ico-bookmark-active, false: ico-bookmark}[show_data_label]"></i></a><span class="text" bo-text="fs.showDataLabel| translate"></span>
                        </li>
                        <li ng-class="{active: show_chart_description}" ng-click="toggleChartDescription()">
                            <a><i class="bdp-icon" ng-class="{true: ico-text-bubble-active, false: ico-text-bubble}[show_chart_description]"></i></a><span class="text" bo-text="fs.showDescription| translate"></span>
                        </li>
                    </ul>
                </div>

                <div class="more J-fullscreen-more nowrap" ng-mouseenter="showMore($event)">
                    <a style="display: none" ng-click="revertSelection()" class="bdp-icon-wrap revert-selection J-revert-selection" bo-title="chart.reverSelection | translate">
                        <i class="bdp-icon ico-revert-selection"></i>
                    </a>
                    <i class="bdp-icon ico-bookmark-active ico-always-highlight" ng-if="show_data_label && [C200, C261, C280, C310, C300, C340, C400, C500].indexOf(fullscreen.queue_show.filter_opts.meta.drillChartType) < 0"></i>
                    <i class="bdp-icon ico-text-bubble-active ico-always-highlight" ng-if="show_chart_description"></i>
                    <i class="bdp-icon ico-more-horiz"></i>
                </div>
            </div>
            <div class="auto-slide fullscreen-nav" ng-show="!!fullscreen.ableSlide">
                <ul>
                    <li>
                        <a class="prev bdp-icon-wrap" ng-click="slide(-1,{auto:false})" ng-class="{disable:autoPlaying}">
                            <i class="bdp-icon ico-prev"></i>
                        </a>
                    </li>
                    <li>
                        <a ng-if="!autoPlaying" class="audio-ctrl bdp-icon-wrap" ng-click="autoPlay(true)">
                            <i class="bdp-icon ico-play"></i>
                        </a>
                        <a ng-if="autoPlaying" class="audio-ctrl bdp-icon-wrap" ng-click="autoPlay(false)">
                            <i class="bdp-icon ico-pause"></i>
                        </a>
                    </li>
                    <li>
                        <a class="next bdp-icon-wrap" ng-click="slide(1,{auto:false})" ng-class="{disable:autoPlaying}">
                            <i class="bdp-icon ico-next"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fs-chart-description" ng-class="{open: show_chart_description}">
            <div class="block">
                <p class="hd" bo-text="chart.dataUpdate|translate"></p>
                <p class="bd">{{fullscreen.info.filter_opts.meta.tb_update_time | date:yyyy-MM-dd HH:mm:ss}}</p>
            </div>
            <div class="block mt24" ng-if="fullscreen.info.filter_opts.meta.description">
                <p class="hd" bo-text="chart.description|translate"></p>
                <p class="bd">{{fullscreen.info.filter_opts.meta.description}}</p>
            </div>
            <div class="block mt24" ng-repeat="y in fullscreen.info.filter_opts.meta.allMetricFields" ng-if="y.description">
                <p class="hd">{{y.nick_name || y.name}}</p>
                <p class="bd">{{y.description}}</p>
            </div>
            <div class="block mt24" ng-repeat="x in fullscreen.info.filter_opts.meta.x" ng-if="x.description">
                <p class="hd">{{x.nick_name || x.name}}</p>
                <p class="bd">{{x.description}}</p>
            </div>
        </div>
    </div>

</div>)
}



//"BC.services"
function pendingRequests() {
    var e = [];
    this.get = function () {
    return e
},
    this.add = function (t) {
    e.push(t)
},
    this.remove = function (t) {
    e = e.filter(function (e) {
    return e.url !== t
})
},
    this.cancelAll = function () {
    angular.forEach(e, function (e) {
    e.canceller.resolve()
}), e.length = 0
},
    this.cancelOne = function (t) {
    if (t && e)
    for (var a = 0, i = e.length; a < i; a++)
    if (e[a].url == t) {
    e[a].canceller.resolve();
    break
}
}
}

function $httpProvider(e) {
    e.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8",
    e.defaults.headers.common.Accept = "application/json";
    var t = function (e) {
    var a, i, n, r, o, s, l, d = "";
    for (a in e)
    if ((i = e[a]) instanceof Array)
    for (l = 0; l < i.length; ++l) o = i[l], n = a + "[" + l + "]", s = {}, s[n] = o, d += t(s) + "&";
    else if (i instanceof Object)
    for (r in i) o = i[r], n = a + "[" + r + "]", s = {}, s[n] = o, d += t(s) + "&";
    else void 0 !== i && null !== i && (d += encodeURIComponent(a) + "=" + encodeURIComponent(i) + "&");
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

//"$rootScope", "$translate"
function chartType(e, t) {
    function a() {
        t(i).then(function (e) {
            n.forEach(function (t) {
                t.name = e[t.type]
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
    a(), e.$on("$translateChangeSuccess", a);
    var n = [{
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
    return n
}

//"$rootScope", "$translate"
function chartTypeTip(e, t) {
    function a() {
        t(i)
            .then(function (e) {
                r.forEach(function (t) {
                    t.name = e[t.type]
                })
            }),
            t(n)
                .then(function (e) {
                    r.forEach(function (t) {
                        0 == t.combination.length ? (t.showDimension = e[t.dimension], t.showMetric = e[t.metric])
                            : (t.showCombination[0] = e[t.combination[0]], t.showCombination[1] = e[t.combination[1]])
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
    a(),
    e.$on("$translateChangeSuccess", a);
    var r = [{
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
    return r
}

//"$rootScope", "$translate"
function operatorHelpLink(e, t) {
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

//"$rootScope", "$translate"
function formula(e, t) {
    function a() {
        t(i).then(function (e) {
            n.forEach(function (t) {
                t.list ? (t.name = e.more, t.list.forEach(function (t) {
                    t.list ? (t.name = e.PERCENTILE, t.list.forEach(function (t) {
                        t.name = e[t.type]
                    })) : t.name = e[t.type]
                })) : t.name = e[t.type]
            })
        })
    }
    var i = ["SUM", "AVERAGE", "AVG", "MIN", "MAX", "COUNT", "COUNT_DISTINCT", "more", "MED", "PERCENTILE", "PERCENT_5", "PERCENT_10", "PERCENT_25", "PERCENT_50", "PERCENT_75", "PERCENT_90", "PERCENT_95"],
    n = [{
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
    return a(),
    e.$on("$translateChangeSuccess", a),
    n
}

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
function verifyTbName(e, t, a) {
    var i = "",
    n = ["join.worksheetname", "tbNameInvalid"];
    return function () {
    a(n).then(function (e) {
    i = e["join.worksheetname"] + e.tbNameInvalid
})
}(),
    function (e) {
    return !0
}
}

//$rootScope
function dateTimeByHalfHour(e) {
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

//"ngDialog", "$rootScope"
function capacityHint(e, t) {
    return function () {
    e.closeAll(), t.maxSize = t.personalInfo.capacity_info.capacity, e.open({
    template: "/static/partials/dialogTemplates/capacityHint.html",
    className: "ngdialog-theme-default ngDialog-width-330",
    scope: t
})
}
}

//"$rootScope", "$timeout", "$location", "$translate"
function errHint(e, t, a, i) {
    var n = 0,
    r = null,
    o = !1;
    return function (a, s) {
    var l, d = "/login.html",
    c = e.language;
    s = s || {}, window.isThirdIframe || (window.isThirdIframe = e.isThirdIframe = !1);
    var p = !1;
    if ("number" != typeof a && isNaN(Number(a))) l = a;
    else {
    switch (1 * a) {
    case 1:
    $.cookie("token", ""), $.cookie("token_invalid", 1, {
    path: "/"
}), o || (o = !0, d = bdp.bdpLogin.checkPartnerLogin(), location.href = d);
    break;
    case 2:
    l = i.instant("error.API");
    break;
    case 3:
    return 0 == n && (l = i.instant("error.noExistOrAccess"), alert(l), n += 1), void(window.location.href = "/");
    case 4:
    l = i.instant("error.unManager");
    break;
    case 10:
    l = i.instant("error.serverFail");
    break;
    case 11:
    l = i.instant("error.paramError");
    break;
    case 12:
    l = i.instant("error.internetOutRange"), setTimeout(function () {
    d = bdp.bdpLogin.checkPartnerLogin(), location.href = d
}, 1e3);
    break;
    case 13:
    0 == n && (l = i.instant("error.haveLogin"), alert(l), n += 1), $.cookie("token", ""), $.cookie("token_invalid", 1, {
    path: "/"
}), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d;
    break;
    case 14:
    0 == n && (alert(s.warn_msg), n += 1), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d;
    break;
    case 15:
    0 == n && (l = i.instant("error.noPermission"), alert(l), n += 1), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d;
    break;
    case 18:
    l = i.instant("error.noBind"), l = "";
    break;
    case 19:
    l = i.instant("error.confirmed"), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d, l = "";
    break;
    case 20:
    l = "", $.cookie("password_changed", 1, {
    path: "/"
}), d = bdp.bdpLogin.checkPartnerLogin(), window.location.href = d;
    break;
    case 21:
    l = i.instant("error.noChartOrnoAccess");
    break;
    case 22:
    l = i.instant("error.dashMetaTooLarge");
    break;
    case 102:
    l = i.instant("error.datasourceNotExist");
    break;
    case 103:
    l = i.instant("error.noDelete");
    break;
    case 104:
    l = i.instant("ds.connectFail");
    break;
    case 126:
    l = i.instant("error.apiTimesLimit");
    break;
    case 106:
    l = i.instant("error.saveSuccessAndSync");
    break;
    case 108:
    l = i.instant("error.fieldRepeat");
    break;
    case 109:
    l = i.instant("error.apiUsernameExist");
    break;
    case 110:
    l = i.instant("error.dsRepeat");
    break;
    case 111:
    l = i.instant("error.captchaSendError");
    break;
    case 112:
    l = i.instant("error.captchaError");
    break;
    case 113:
    l = i.instant("error.captchaOutOfLimit");
    break;
    case 114:
    l = i.instant("error.kstRepeat");
    break;
    case 115:
    l = i.instant("error.kstError");
    break;
    case 116:
    l = i.instant("error.jinyiweiConnFail");
    break;
    case 117:
    l = i.instant("error.loginInfoErrorOrUserLock");
    break;
    case 118:
    l = i.instant("error.dsConfigError");
    break;
    case 119:
    l = i.instant("error.loginFrequently");
    break;
    case 120:
    l = i.instant("error.phoneVerifyFail");
    break;
    case 121:
    l = i.instant("error.serviceException");
    break;
    case 122:
    l = i.instant("error.accountFail");
    break;
    case 124:
    l = i.instant("error.passworkWrong");
    break;
    case 125:
    l = i.instant("error.usernameWrong");
    break;
    case 128:
    l = i.instant("ds.baiduTaskExist");
    break;
    case 129:
    l = i.instant("error.tokenWrong");
    break;
    case 201:
    l = i.instant("wb.isUpdatingThen");
    break;
    case 1001:
    l = i.instant("error.userForbidden");
    break;
    case 1002:
    l = i.instant("error.password");
    break;
    case 1004:
    l = i.instant("error.noAuthorizationInfo");
    break;
    case 1009:
    l = i.instant("error.noUser");
    break;
    case 1012:
    l = i.instant("error.limitNumber");
    break;
    case 1014:
    l = "", $.cookie("password_reset", 1, {
    path: "/"
}), d = bdp.bdpLogin.checkPartnerLogin(), window.location.href = d;
    break;
    case 1015:
    l = i.instant("error.accountActived");
    break;
    case 1016:
    l = i.instant("error.accoutLimit");
    break;
    case 1018:
    l = i.instant("error.codeError");
    break;
    case 1023:
    l = i.instant("error.mobileExisted");
    break;
    case 3003:
    l = i.instant("error.noId");
    break;
    case 3005:
    l = i.instant("error.needCtId");
    break;
    case 3008:
    l = i.instant("error.needId");
    break;
    case 3009:
    l = i.instant("error.missId");
    break;
    case 3011:
    l = i.instant("error.fidId");
    break;
    case 3204:
    l = i.instant("error.dashboardOccupied");
    break;
    case 3209:
    l = i.instant("sql.sqlScriptNotBeNull");
    break;
    case 3210:
    l = i.instant("error.dashboardNotbelong");
    break;
    case 3211:
    l = i.instant("error.noChart");
    break;
    case 3212:
    l = i.instant("error.noFolder");
    break;
    case 3216:
    l = i.instant("error.infoErrorInTable");
    break;
    case 3219:
    l = i.instant("error.tplNotExist");
    break;
    case 3220:
    l = i.instant("error.noDashboard");
    break;
    case 3221:
    l = i.instant("error.noBelong");
    break;
    case 3222:
    l = i.instant("error.chartsNumMismatch");
    break;
    case 3223:
    l = i.instant("error.noSelect");
    break;
    case 3224:
    l = i.instant("error.noLinkage");
    break;
    case 3231:
    l = i.instant("error.needConfigList");
    break;
    case 3232:
    l = i.instant("error.infoErrorInTable");
    break;
    case 7001:
    l = i.instant("error.needFormula");
    break;
    case 7024:
    l = i.instant("error.stringAbove");
    break;
    case 7200:
    l = i.instant("error.errorFormula");
    break;
    case 7300:
    l = i.instant("error.unknow");
    break;
    case 7400:
    l = i.instant("error.fieldNull");
    break;
    case 7500:
    l = i.instant("error.fieldRepeat");
    break;
    case 7590:
    l = i.instant("error.fieldUsing");
    break;
    case 7601:
    l = i.instant("error.dataNameRepeat");
    break;
    case 7700:
    l = i.instant("error.errorFormula");
    break;
    case 8003:
    l = i.instant("error.accoutRepeat");
    break;
    case 9003:
    l = i.instant("error.info");
    break;
    case 10004:
    l = i.instant("error.datasourceSyncing");
    break;
    case 10005:
    l = i.instant("error.dsAmountOutOfLimit");
    break;
    case 10006:
    l = s.warn_msg;
    break;
    case 10007:
    l = i.instant("error.noDelete");
    break;
    case 10100:
    l = i.instant("error.noDianJingAccess");
    break;
    case 10115:
    l = i.instant("error.startDateError");
    break;
    case 10116:
    l = i.instant("error.endDateError");
    break;
    case 10117:
    l = i.instant("ds.baiduTaskDomainExit");
    break;
    case 10118:
    l = i.instant("ds.baiduTaskDomainNotExit");
    break;
    case 10119:
    l = i.instant("ds.baiduTaskCompanyError");
    break;
    case 10120:
    l = i.instant("ds.baiduTaskDomainError");
    break;
    case 10121:
    case 10122:
    case 10123:
    l = s.warn_msg;
    break;
    case 10124:
    l = i.instant("ds.baiduTaskWeekError");
    break;
    case 10625:
    case 10626:
    l = i.instant("error.changeFileEncode");
    break;
    case 12002:
    l = i.instant("error.groupRepeat");
    break;
    case 12008:
    l = i.instant("error.contactManager");
    break;
    case 12010:
    l = i.instant("error.noActivateCode");
    break;
    case 12011:
    l = i.instant("error.errorActivateCode");
    break;
    case 12111:
    l = s.warn_msg, setTimeout(function () {
    $.cookie("token", ""), $.cookie("token_invalid", 1, {
    path: "/"
}), d = bdp.bdpLogin.checkPartnerLogin(), location.href = d
}, 1e3);
    break;
    case 13001:
    l = i.instant("error.noSelectId");
    break;
    case 13004:
    l = i.instant("error.selectRepeat");
    break;
    case 16004:
    l = i.instant("error.noPermissionToPreview");
    break;
    case 16005:
    l = i.instant("error.replacingExcelFailed");
    break;
    case 16006:
    l = i.instant("error.exceptionInExcel");
    break;
    case 16007:
    l = i.instant("error.excelNotExist");
    break;
    case 16008:
    l = i.instant("error.excelIsUpdating");
    break;
    case 16009:
    l = i.instant("error.deletingExcelFailed");
    break;
    case 16010:
    l = i.instant("error.excelCanNotBeEmpty");
    break;
    case 16011:
    l = i.instant("error.appendingExcelFailed");
    break;
    case 16012:
    l = i.instant("error.fieldsInExcelMismatch");
    break;
    case 16013:
    l = i.instant("error.sameFieldsWhileAppending");
    break;
    case 16014:
    l = i.instant("error.fieldsNotInTable");
    break;
    case 16015:
    l = i.instant("error.sheetNotExist");
    break;
    case 16016:
    l = i.instant("error.sheetCanNotBeIgnored");
    break;
    case 16017:
    l = i.instant("error.uploadingExcelFailed");
    break;
    case 16018:
    case 16019:
    l = i.instant("error.fieldsInExcelMismatch");
    break;
    case 16025:
    l = i.instant("error.csvEncodeNotSupport");
    break;
    case 16026:
    l = i.instant("error.changeFileEncode");
    break;
    case 19001:
    l = i.instant("error.selectRely");
    break;
    case 19002:
    l = i.instant("wb.noWorksheets");
    break;
    case 19005:
    l = "聚类字段名称不能为空";
    break;
    case 21007:
    l = i.instant("error.dbCannotBeDeleted");
    break;
    case 22001:
    l = i.instant("error.aggregationsRepeat");
    break;
    case 22002:
    l = i.instant("error.aggregationsNull");
    break;
    case 23023:
    l = i.instant("error.accoutExisted");
    break;
    case 23002:
    l = i.instant("error.captchaError");
    break;
    case 23003:
    l = i.instant("error.personalAccountNotExist");
    break;
    case 23008:
    l = i.instant("error.nicknameExisted");
    break;
    case 23009:
    l = i.instant("error.emailError");
    break;
    case 23010:
    l = i.instant("error.captchaCounts");
    break;
    case 23013:
    l = i.instant("error.formatError");
    break;
    case 23014:
    l = i.instant("error.oneHourLater");
    break;
    case 23016:
    l = i.instant("error.twentyFourHourLater");
    break;
    case 23019:
    l = i.instant("error.emailExisted");
    break;
    case 23020:
    l = i.instant("error.phoneExisted");
    break;
    case 23023:
    l = i.instant("error.personalUserExisted");
    break;
    case 23030:
    l = i.instant("error.sensitiveWord");
    break;
    case 24006:
    l = i.instant("error.accoutAccessLimit");
    break;
    case 24007:
    l = i.instant("error.chartUnremove");
    break;
    case 24008:
    l = i.instant("error.userLimit");
    break;
    case 24009:
    l = i.instant("error.haveDeleted");
    break;
    case 24010:
    l = i.instant("error.haveRule");
    break;
    case 24011:
    l = i.instant("error.haveChart");
    break;
    case 24012:
    l = i.instant("error.removeAccess");
    break;
    case 25001:
    l = i.instant("error.folderExisted");
    break;
    case 25004:
    l = i.instant("wb.cannotMoveToSubFolder");
    break;
    case 25005:
    l = i.instant("wb.cannotMoveTwoLevelsToSubFolder");
    break;
    case 26003:
    l = i.instant("error.nameExisted");
    break;
    case 26007:
    l = i.instant("error.exceedTasks");
    break;
    case 26008:
    l = "分享表暂不支持聚类模型";
    break;
    case 29e3:
    l = s.warn_msg;
    break;
    case 3e4:
    l = i.instant("error.tableDoesNotExist");
    break;
    case 30001:
    l = i.instant("error.tableIsBeingUsed");
    break;
    case 30003:
    l = s.warn_msg;
    break;
    case 30004:
    l = i.instant("error.tableMustBeBasetable");
    break;
    case 30005:
    l = "[" + s.warn_msg + "] " + i.instant("wb.transform.realtimeTableCantJoin");
    break;
    case 30007:
    l = i.instant("error.fieldsInExcelMismatch");
    break;
    case 30009:
    l = i.instant("error.sameTitleExistInExcel");
    break;
    case 31e3:
    l = i.instant("error.existRely");
    break;
    case 31005:
    case 31006:
    l = s.warn_msg;
    break;
    case 31007:
    l = i.instant("error.viewGeneratorRuleNotExist");
    break;
    case 31008:
    l = i.instant("error.canNotModifyThisViewType");
    break;
    case 31009:
    l = i.instant("error.viewGeneratorTypeNotExist");
    break;
    case 32001:
    l = i.instant("error.openDsTokenError");
    break;
    case 32002:
    l = i.instant("error.ipNotInWhiteList");
    break;
    case 40001:
    l = i.instant("error.noPermissionToDelete");
    break;
    case 40002:
    var u = "";
    l = i.instant("error.fieldRepeat") + u;
    break;
    case 40005:
    l = s.warn_msg;
    break;
    case 40007:
    l = i.instant("error.dataTooLong");
    break;
    case 40008:
    l = i.instant("error.changeToAggregatorFunc");
    break;
    case 40009:
    l = i.instant("error.titleHasInvalidCharacter");
    break;
    case 40010:
    l = i.instant("error.contentHasInvalidCharacter");
    break;
    case 40011:
    l = i.instant("error.functionNeedBrackets");
    break;
    case 40012:
    l = i.instant("error.mapCanNotBeEmpty");
    break;
    case 41001:
    l = i.instant("error.LdapTokenIsError");
    break;
    case 41002:
    l = i.instant("error.LdapTokenIsDestroyed");
    break;
    case 41003:
    l = i.instant("error.LdapUserNotExist");
    break;
    case 70001:
    l = i.instant("ds.auxiliaryFieldHasExist");
    break;
    case 70002:
    l = i.instant("error.fieldNameUsing");
    break;
    case 81001:
    var u = "";
    s.warn_msg && (u = "：" + s.warn_msg), l = i.instant("error.illegalFilter") + u;
    break;
    case 81002:
    var u = "";
    s.warn_msg && (u = "：" + s.warn_msg), l = i.instant("error.illegalSortField") + u;
    break;
    case 9e4:
    l = i.instant("error.partitionExceed");
    break;
    case 90001:
    l = i.instant("error.partitionNotEnough");
    break;
    case 90002:
    l = i.instant("error.intermediateTableNoPartition");
    break;
    case 90003:
    l = i.instant("error.unionTableNoPartition");
    break;
    case 90006:
    l = i.instant("error.childTbBeingCreated");
    break;
    case 90100:
    s.result && s.result.map && (l = s.result.map(function (e) {
    return e.name
}).join()), l = i.instant("chartTemplate.tplUnusable") + "[" + l + "]";
    break;
    case 90007:
    l = i.instant("error.tableTypeNotSupportOpt");
    break;
    case 90008:
    l = i.instant("error.updateModeNotChanged");
    break;
    case 90009:
    l = i.instant("error.canNotChangeToRealTimeUpdateMode");
    break;
    case 90010:
    l = i.instant("error.canNotSetPartitionField");
    break;
    case 90011:
    l = i.instant("error.canNotMergeThisTable");
    break;
    case 90012:
    l = i.instant("error.updatedSoFrequentlyPleaseWait");
    break;
    case 100001:
    l = i.instant("error.failedGetOperatorInfo");
    break;
    case 100002:
    l = i.instant("error.authorizationExpired");
    break;
    case 100003:
    l = i.instant("error.authorizationRecordNotExist");
    break;
    case 100004:
    l = i.instant("error.failedAddOperator");
    break;
    case 100005:
    l = i.instant("error.failedCreateAuthorization");
    break;
    case 100006:
    l = i.instant("error.failedUpdateLdapToken");
    break;
    case 100007:
    l = i.instant("error.failedCreateLdapToken");
    break;
    case 100008:
    l = i.instant("error.failedDeleteLdapToken");
    break;
    case 110001:
    l = i.instant("error.mobileOSorVersionRequired");
    break;
    case 110002:
    l = i.instant("error.unknownMobileOS");
    break;
    case 110003:
    l = i.instant("error.mobileVersionFormatError");
    break;
    case 120001:
    l = i.instant("error.srcDashIdRequiredWhenMovingChart");
    break;
    case 120002:
    l = i.instant("error.targetDashIdRequiredWhenMovingChart");
    break;
    case 120003:
    l = i.instant("error.dashFolderIdRequiredWhenMovingChart");
    break;
    case 120004:
    l = i.instant("error.forbiddenMovingChart");
    break;
    case 120005:
    l = i.instant("error.movedChartExist");
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
function tbList(e, t, a) {
    return function () {
    t.get("/api/tb/list", {
    params: {
    access_token: $.cookie("token")
}
}).success(function (t) {
    if (0 == t.status) t.result ? e.tbList = t.result.self : e.tbList = [];
    else {
    var i = parseInt(t.status);
    a(i)
}
})
}
}

//"formulaKeyMap"
function formatFieldPercentile(e) {
    return function (e) {
    if (!e) return e;
    if ("PERCENT" != e.aggregator) return e.percent = "", e;
    var t = new RegExp("^(\\d|[1-9]\\d|100)$");
    if ("中位数" == e.aggregator_name || "Median" == e.aggregator_name) e.aggregator = "MED", e.percent = "0.5";
    else if (t.test(parseInt(e.aggregator_name))) {
    var a = parseInt(e.aggregator_name);
    e.aggregator = "PERCENT_" + a, e.percent = String(a / 100)
}
    return e
}
}
//"formulaKeyMap"
function setAdvanceAggregatorName(e) {
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
    return function (i, n) {
    var r = bdpChart.language || "zh",
    o = "",
    s = "",
    l = "",
    d = [];
    if (i.hasOwnProperty("aggregator")) {
    if (o = e[i.aggregator], Number(i.aggregator_name) <= 100 && Number(i.aggregator_name) > 0)
    if ("zh" == r) o = "百分位" + parseInt(i.aggregator_name);
    else {
    var c = "";
    c = parseInt(i.aggregator_name) % 10 == 1 && 11 != parseInt(i.aggregator_name) ? "st percentile" : parseInt(i.aggregator_name) % 10 == 2 && 12 != parseInt(i.aggregator_name) ? "nd percentile" : parseInt(i.aggregator_name) % 10 == 3 && 13 != parseInt(i.aggregator_name) ? "rd percentile" : "th percentile", o = parseInt(i.aggregator_name) + c
}
    1 == i.is_build_aggregated && (o = "")
}
    i.hasOwnProperty("advance_aggregator") && (d = a(i), s = d[1], "0" == d[0] && (o = ""));
    var p = t(i);
    return p && (s = p), n ? l = s : o ? (l += "(" + o, s && (l += " - " + s), l += ")") : s && (l += "(", l += s, l += ")"), l
}
}
//"$rootScope", "commonService"
function getFunctionList(e, t) {
    var a = {
    base: [],
    all: []
};
    t.getFunctionList().then(function (t) {
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
function commonService(e, t, a) {
    var i, n, r, o = function (e) {
    if (e = e.data || e, "0" == e.status) return e.result;
    var a = null;
    return e.errstr && (a = {
    warn_msg: e.errstr
}), t(Number(e.status), a), null
};
    i = {
    modify: function (e) {
    return a.post("/api/global_config/modify", {
    data: e
}).then(o)
},
    themeModify: function (e) {
    return a.post("/api/user/modify_theme", {
    theme_id: e
})
}
},
    n = {
    create: function (e, t, i) {
    return a.post("/api/project/create", {
    name: e,
    parent_id: t || "",
    category: i
})
},
    getTree: function (e) {
    return a.get("/api/project/tree", e).then(o)
},
    modify: function (e, t) {
    return a.get("/api/project/modify", {
    proj_id: e,
    data: {
    name: t
}
})
},
    del: function (e) {
    return a.post("/api/project/delete", {
    proj_id: e
})
},
    move: function (e) {
    return a.post("/api/project/move", {
    sort: angular.toJson(e.sort),
    parent_id: e.parent_id,
    proj_id: e.proj_id,
    type: e.type,
    category: e.category
})
}
},
    r = {
    getList: function (e) {
    return a.get("/api/dashboard/list", e).then(o)
},
    getInfo: function (e) {
    var t = {};
    return e = angular.extend(t, e), a.get("/api/dashboard/info", e)
},
    create: function (e) {
    return a.post("/api/dashboard/create", {
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
    return e.access_token = $.cookie("token"), a.post("/api/dashboard/modify", e)
},
    del: function (e) {
    return a.post("/api/dashboard/delete", {
    dsh_id: e
})
},
    move: function (e) {
    return a.post("/api/dashboard/move", {
    sort: angular.toJson(e.sort),
    dsh_id: e.dsh_id,
    parent_id: e.parent_id,
    type: e.type,
    rule_id: e.rule_id,
    category: e.category
})
},
    hide: function (e) {
    return a.post("/api/dashboard/hide", e)
}
},
    chart = {
    getInfo: function (e) {
    var t = {};
    return "string" == typeof e ? t.ct_id = e : t = angular.extend(e, t), a.post("/api/chart/info", t)
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
    return t.ct_type = n || 0, e.ct_type && (t.ct_type = e.ct_type), t.name = e.name, "view" == e.type ? (t.parent_id = e.parent_id, t.tb_id = e.tb_id, "number" == typeof e.ct_type && (t.ct_type = e.ct_type)) : "custom" == e.type || "gis" == e.type ? t.tb_ids = angular.toJson(e.tb_id) : t.tb_id = e.tb_id, e.dsh_meta && (t.dsh_meta = angular.toJson(e.dsh_meta)), a.post("/api/chart/create", t)
},
    copy: function (e) {
    return a.get("/api/chart/copy", e)
},
    del: function (e) {
    return e.dsh_meta && (e.dsh_meta = angular.toJson(e.dsh_meta)), a.post("/api/chart/delete", e)
},
    modify: function (e) {
    return a.post("/api/chart/modify", e)
},
    getDbInfo: function (e) {
    return a.get("/api/chart/database_info", {
    ct_id: e
})
},
    modifyTb: function (e, t) {
    return a.get("/api/chart/modify_tb", {
    ct_id: e,
    tb_id: t
})
},
    getRelationList: function (e) {
    return a.get("/api/chart/rela_list", {
    tb_id: e
}).then(o)
},
    search: function (e) {
    return a.post("/api/chart/search", e).then(o)
},
    getSizeGroups: function (e, t, i, n, r) {
    return r = r ? angular.toJson(r) : void 0, a.post("/api/chart/size_groups", {
    ct_id: e,
    bubble_setting: angular.toJson(t),
    drill_level: i,
    drill_field: n,
    drill_value: r
}).then(o)
},
    getGisSizeGroups: function (e, t, i) {
    return a.post("/api/chart/size_groups", {
    ct_id: e,
    bubble_setting: angular.toJson(t),
    layer_level: i
}).then(o)
},
    addRelaTb: function (e, t) {
    return a.post("/api/chart/add_rela_tb", {
    ct_id: e,
    tb_id: t
})
},
    delRelaTb: function (e, t) {
    return a.post("/api/chart/del_rela_tb", {
    ct_id: e,
    tb_id: t
})
},
    exportExcelType: function (e) {
    return a.post("/api/export/get_file_type", e)
},
    exportLargeExcel: function (e) {
    return a.post("/api/export/large_file", e)
},
    wholeRelaChain: function (e) {
    return a.post("/api/chart/whole_rela_chain", {
    tb_id: e.tb_id
})
},
    tableUnion: function (e) {
    return a.post("/api/chart/table_union", e)
},
    cmpDateRange: function (e) {
    return a.post("/api/chart/filter_cmp_date_range", e)
}
};
    var s = {
    getField: function (e) {
    var t = {
    dstb_id: e
};
    return a.get("/api/dstb/info", t).then(o)
},
    del: function (e) {
    var t = {
    dstb_id: e
};
    return a.get("/api/dstb/delete", t)
},
    getList: function () {
    return a.get("/api/dstb/list").then(o)
},
    modify: function (e, t) {
    var i = {
    dstb_id: e,
    data: t
};
    return a.get("/api/dstb/modify", i).then(o)
},
    getUpdateRecord: function (e) {
    return a.get("/api/excel/list?time=" + (new Date).getTime(), e).then(o)
},
    deleteFile: function (e, t) {
    var i = {
    dstb_id: e,
    filetbname: t
};
    return a.get("/api/dstb/delete_file", i).then(o)
},
    excelCreate: function (e) {
    return a.post("/api/excel/create", e, {
    errHint: !1
})
},
    excelAppend: function (e) {
    return a.post("/api/excel/append", e, {
    errHint: !1
})
},
    excelReplace: function (e) {
    return a.post("/api/excel/replace", e, {
    errHint: !1
})
},
    excelHistoryReplace: function (e) {
    return a.post("/api/excel/replace_one", e, {
    errHint: !1
})
},
    excelDelete: function (e) {
    return a.get("/api/excel/delete", e)
},
    startTask: function (t, a) {
    return e.post("/api/dstb/start", {
    job_id: t,
    sheet_name: angular.toJson(a)
})
},
    excelCheck: function (e) {
    return a.post("/api/excel/check", e, {
    errHint: !1
})
},
    excelModify: function (e) {
    return a.post("/api/excel/modify", e, {
    errHint: !1
})
},
    subOwnWbList: function (e) {
    return a.post("/api/folder/sub_own_list", e)
},
    extractTb: function (e) {
    return a.post("/api/tb/extract", e)
},
    shareTbInfo: function (e) {
    return a.post("/api/tb/share_info", e)
},
    uploadPreview: function (e, t) {
    return a.post("/api/excel/preview", e, {
    errHint: t
})
},
    uploadParser: function (e) {
    return a.post("/api/excel/parser", e)
},
    getSchema: function (e) {
    return a.post("/api/tb/schema", {
    tb_id: e
})
},
    checkFieldDependency: function (e) {
    return a.post("/api/tb/check_field_dependency", e)
},
    adjustTable: function (e) {
    return a.post("/api/", e)
},
    previewAdjustTable: function (e) {
    return a.post("/api/excel/replace_preview", e)
},
    excelRepeatCheck: function (e) {
    return a.post("/api/excel/title_check", e)
}
},
    l = {
    modify: function (e) {
    return a.post("/api/tb/modify", {
    data: e
})
},
    modifyFieldStatus: function (e, t) {
    return a.post("/api/tb/field_selected/modify", {
    tb_id: e,
    field_ids: t
})
},
    getStatusData: function (e) {
    return a.post("/api/tb/field_selected/query", {
    tb_id: e
})
},
    getList: function () {
    return a.get("/api/tb/list").then(o)
},
    copy: function (e) {
    return a.post("/api/data_union/union_copy", e)
},
    getInfo: function (e) {
    return a.get("/api/tb/info", {
    tb_id: e
})
},
    getMultiInfo: function (e) {
    return a.get("/api/tb/multi_info", e)
},
    preview: function (e) {
    return a.post("/api/tb/preview", e).then(o)
},
    del: function (e) {
    return a.post("/api/tb/delete", {
    tb_id: e
})
},
    delTableWithChart: function (e, t, i) {
    return a.post("/api/tb/delete", {
    tb_id: e,
    session_id: t,
    verify_code: i
})
},
    getJoinInfo: function (e) {
    return a.get("/api/tb/join_info", {
    tb_id: e
}).then(o)
},
    getJoinErrorReport: function (e) {
    return a.post("/api/wb/profile", e)
},
    getJoinProfileReport: function (e) {
    return a.post("/api/wb/profile_report", {
    tb_id: e
})
},
    getModelStruct: function (e) {
    return a.get("/api/tb/model_struct", {
    tb_id: e
})
},
    getStatus: function (e, t) {
    return a.get("/api/tb/status", {
    tb_id: e,
    view_status_read: t
})
},
    getStorageAccount: function () {
    return a.get("/api/tb/stat").then(o)
},
    modifyTag: function (e) {
    return a.post("/api/tb/modify_tag", {
    data: JSON.stringify(e)
})
},
    getTbsField: function (e) {
    return a.post("/api/dstb/infos", e)
},
    partitionSet: function (e) {
    return a.post("/api/tb/partition/set", {
    tb_id: e.tb_id,
    base_field: e.base_field,
    param: e.param
})
},
    partitionDel: function (e) {
    return a.post("/api/tb/partition/remove", {
    tb_id: e.tb_id
})
},
    wholeJoinChain: function (e) {
    return a.post("/api/tb/whole_join_chain", {
    tb_id: e.tb_id
})
},
    sqlTrans: function (e) {
    return a.post("/api/tb/sql_trans", e)
},
    sqlScript: function (e) {
    return a.post("/api/sql_script/check", e)
},
    sqlFormat: function (e) {
    return a.post("/api/sql_script/format", e)
},
    tableFieldFilter: function (e) {
    return a.post("/api/field/filter", e)
},
    batchMove: function (e) {
    return a.post("/api/folder/change_batch", e)
},
    batchDeleteTables: function (e) {
    return a.post("/api/tb/delete_batch", e)
},
    checkTablesRely: function (e) {
    return a.post("/api/tb/list_check_rely", e)
},
    gisTransfer: function (e) {
    return a.post("/api/gis/transfer", e)
},
    gisModify: function (e) {
    return a.post("/api/gis/modify", e)
},
    updateModeCheck: function (e) {
    return a.post("/api/tb/update_mode/check", e)
},
    updateModeModify: function (e) {
    return a.post("/api/tb/update_mode/modify", e)
},
    getPartitionNum: function (e) {
    return a.post("/api/tb/partition/num", e)
},
    triggerFullUpdate: function (e) {
    return a.post("/api/tb/update", e)
},
    replaceCheck: function (e) {
    return a.post("/api/wb/replace_check", e)
},
    getTplExcel: function (e) {
    return a.get("/api/personal/tpl_excel", e)
},
    tplExport: function (e) {
    return a.get("/api/personal/export", e)
},
    modelCheck: function (e) {
    return a.get("/api/data_aggr/model_check", e)
},
    viewExec: function (e) {
    return a.get("/api/view/exec", e)
},
    uploadRenameFields: function (e) {
    return a.post("/api/field/upload_templete", e)
},
    exportSmallTbFile: function (e) {
    return a.post("/api/tb/export_tb", e)
},
    exportTbFile: function (e) {
    return a.post("/api/export/tb_file", e)
},
    parseCode: function (e) {
    return a.post("/api/general/create", e)
},
    getFieldParseCode: function (e) {
    return a.get("/api/general/info", e)
},
    joinTbPreview: function (e) {
    return a.post("/api/wb/preview", e)
},
    joinTbCreate: function (e) {
    return a.post("/api/wb/create", e)
},
    joinTbInfo: function (e) {
    return a.post("/api/dstb/info", e)
},
    joinTbCheckPreview: function (e) {
    return a.post("/api/wb/modify_preview", e)
},
    joinTbModify: function (e) {
    return a.post("/api/wb/modify", e)
}
},
    d = {
    getList: function (e) {
    return a.get("/api/tb/info", {
    tb_id: e
})
},
    getEditableSchema: function (e) {
    return a.get("/api/tb/editable_schema", {
    tb_id: e
})
},
    create: function (e) {
    return a.post("/api/field/create", e)
},
    modify: function (e) {
    return a.post("/api/field/modify", e)
},
    del: function (e, t) {
    return a.post("/api/field/delete", {
    tb_id: t,
    fid: e
})
},
    getRange: function (e, t, i) {
    return a.post("/api/field/range", {
    fid: t,
    ct_id: i,
    tb_id: e
})
},
    getFilteredRange: function (e, t, i, n) {
    return void 0 === n ? a.post("/api/enum_color/field_range", {
    ct_id: e,
    tb_id: t,
    field: angular.toJson(i)
}) : a.post("/api/enum_color/gis_field_range", {
    ct_id: e,
    tb_id: t,
    field: angular.toJson(i),
    layer_level: n
})
},
    url_preview: function (e, t) {
    return a.post("/api/field/url_preview", {
    tb_id: e,
    field_ids: angular.toJson(t)
}).then(o)
},
    extract_preview: function (e, t) {
    return a.post("/api/field/extract_preview", {
    tb_id: e,
    fields: angular.toJson(t)
}).then(o)
},
    extract_url: function (e, t) {
    return a.post("/api/field/extract_url", {
    tb_id: e,
    fields: angular.toJson(t)
}).then(o)
},
    merge: function (e, t) {
    return a.post("/api/field/merge", {
    tb_id: e,
    info: angular.toJson(t)
}).then(o)
},
    getAggregatorLen: function (e) {
    return a.post("/api/field/get_length", e)
}
},
    c = {
    allList: function (e) {
    var t = {};
    return t = angular.extend(e, t), a.get("/api/share/all_list", t)
},
    getList: function (e) {
    var t = {};
    return t = angular.extend(e, t), a.get("/api/share/list", t)
},
    share: function (e) {
    var t = {};
    return t = angular.extend(e, t), a.post("/api/share/commit", t)
},
    modify: function (e) {
    return a.post("/api/share/modify", e)
}
},
    p = {
    getConnStatus: function (e) {
    return a.post("/api/ds/conn", e)
},
    connNopwd: function (e) {
    return a.post("/api/ds/nopawd", e)
},
    createApi: function (e) {
    return a.post("/api/ds/create", e)
},
    getNameAndTag: function () {
    return a.get("/api/ds/list").then(o)
},
    getList: function (e) {
    return a.get("/api/ds/list").then(o)
},
    getListForDataSource: function (e) {
    return a.get("/api/ds/nslist", e)
},
    getTree: function () {
    return a.get("/api/ds/tree").then(o)
},
    info: function (e) {
    return a.get("/api/ds/info", e)
},
    modify: function (e) {
    return e = e || {}, a.post("/api/ds/modify", e)
},
    startSyncTask: function (e, t, i) {
    return a.get("/api/ds/sync", {
    ds_id: e,
    new_table: t,
    db_type: i
})
},
    startBaiduSyncCost: function (e) {
    return a.get("/api/rtapi/single_cost", {
    ds_id: e
})
},
    del: function (e) {
    return a.post("/api/ds/delete", {
    ds_id: e
})
},
    getInitInfo: function () {
    return a.get("/api/ds/all")
},
    getResultForSearch: function (e, t) {
    return a.get("api/ds/search", {
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
    return a.get("/api/ds/publiclist")
},
    create: function (e) {
    return a.post("/api/ds/create", e)
},
    conn: function (e) {
    return a.post("/api/ds/conn", e)
},
    tbList: function () {
    return a.get("/api/ds/tblist")
},
    username_verify: function (e) {
    return a.post("/api/ds/verify", e)
},
    jyw_klist: function () {
    return a.post("/api/jyw/klist")
},
    set_sync: function (e) {
    return a.post("/api/ds/sync", e)
},
    mobile_default_bind: function (e) {
    return a.post("/api/sms/defaultbind", e)
},
    mobile_unbind_all: function (e) {
    return a.post("/api/sms/unbindall", e)
},
    warn_mobile_list: function (e) {
    return a.post("/api/sms/list")
},
    warn_mobile_del: function (e) {
    return a.post("/api/sms/delete", {
    phone: e.phone
})
},
    warn_mobile_vcode: function (e) {
    return a.post("/api/sms/vcode", {
    phone: e.phone,
    new_phone: e.new_phone
})
},
    warn_mobile_verify: function (e) {
    return a.post("/api/sms/verify", {
    phone: e.phone,
    new_phone: e.new_phone,
    vcode: e.vcode
})
},
    ds_amount: function () {
    return a.get("/api/ds/stat")
},
    kstList: function (e) {
    return a.post("/api/kst/list", e)
},
    kstConn: function (e) {
    return a.post("/api/kst/conn", e)
},
    kstCreate: function (e) {
    return a.post("/api/kst/create", e)
},
    kstInfo: function (e) {
    return a.post("/api/kst/info", e)
},
    kstModify: function (e) {
    return a.post("/api/kst/modify", e)
},
    baiduRegion: function () {
    return a.get("/api/rtapi/city")
},
    baiduIndex: function () {
    return a.get("/api/inapi/city")
},
    baiduIndexCheckKeyWords: function (e) {
    return a.post("/api/inapi/check", e)
},
    modifyDbBaiduSearchTask: function (e) {
    return a.post("/api/rtapi/control", e)
},
    modifyDbBaiduIndexTask: function (e) {
    return a.post("/api/inapi/control", e)
},
    baiduSearchConfig: function (e) {
    return a.post("/api/rtapi/config", e)
},
    baiduIndexConfig: function (e) {
    return a.post("/api/inapi/config", e)
},
    modifyDbBaiduSearch: function (e) {
    return a.post("/api/rtapi/modify", e)
},
    modifyDbBaiduIndex: function (e) {
    return a.post("/api/inapi/modify", e)
},
    createDbBaiduSearch: function (e) {
    return a.post("/api/ds/create", e)
},
    createDbBaiduSearchTask: function (e) {
    return a.post("/api/rtapi/create", e)
},
    createDbBaiduIndexTask: function (e) {
    return a.post("/api/inapi/create", e)
},
    deleteDbBaiduSearchTask: function (e) {
    return a.post("/api/rtapi/delete", e)
},
    deleteDbBaiduIndexTask: function (e) {
    return a.post("/api/inapi/delete", e)
},
    getDbBaiduSearchTaskList: function (e) {
    return a.post("/api/rtapi/rtlist", e)
},
    getDbBaiduIndexTaskList: function (e) {
    return a.post("/api/inapi/inlist", e)
},
    startBaiduTaskSyncCost: function (e) {
    return a.get("/api/rtapi/single_cost", e)
},
    startBaiduIndexTaskSyncCost: function (e) {
    return a.get("/api/inapi/single_cost", e)
},
    startBaiduSyncTask: function (e) {
    return a.post("/api/rtapi/sync", e)
},
    startBaiduIndexSyncTask: function (e) {
    return a.post("/api/inapi/sync", e)
},
    baiduCompanySetting: function (e) {
    return a.post("/api/rtapi/field_info", e)
},
    modifyCompanySetting: function (e) {
    return a.post("/api/rtapi/field_modify", e)
},
    wechatDs: {
    createWechatIndex: function (e) {
    return a.post("/api/ds/create", e)
},
    deleteWechatTask: function (e) {
    return a.post("/api/wechat/delete", e)
},
    getTaskList: function (e) {
    return a.post("/api/wechat/inlist", e)
},
    modifyWechatTask: function (e) {
    return a.post("/api/wechat/modify", e)
},
    createWechatTask: function (e) {
    return a.post("/api/wechat/create", e)
},
    wechatIndexConfig: function (e) {
    return a.post("/api/wechat/config", e)
},
    wechatTaskSwitchControl: function (e) {
    return a.post("/api/wechat/control", e)
}
},
    toutiaoDs: {
    createToutiaoIndex: function (e) {
    return a.post("/api/ds/create", e)
},
    deleteToutiaoTask: function (e) {
    return a.post("/api/toutiao/delete", e)
},
    getTaskList: function (e) {
    return a.post("/api/toutiao/inlist", e)
},
    modifyToutiaoTask: function (e) {
    return a.post("/api/toutiao/modify", e)
},
    createToutiaoTask: function (e) {
    return a.post("/api/toutiao/create", e)
},
    toutiaoIndexConfig: function (e) {
    return a.post("/api/toutiao/config", e)
},
    toutiaoTaskSwitchControl: function (e) {
    return a.post("/api/toutiao/control", e)
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
    return a.post("/api/index/inlist", e)
},
    createTask: function (e) {
    return a.post("/api/index/create", e)
},
    switchTask: function (e) {
    return a.post("/api/index/control", e)
},
    deleteTask: function (e) {
    return a.post("/api/index/delete", e)
},
    getTaskInfo: function (e) {
    return a.post("/api/index/config", e)
},
    modifyTask: function (e) {
    return a.post("/api/index/modify", e)
},
    checkKeyWords: function (e) {
    return a.post("/api/index/check", e)
},
    areaList: function (e) {
    return a.get("/api/index/city", e)
}
},
    weiboDs: {
    deleteTask: function (e) {
    return a.post("/api/toutiao/delete", e)
},
    getTaskList: function (e) {
    return a.post("/api/web/inlist", e)
},
    modifyTask: function (e) {
    return a.post("/api/toutiao/modify", e)
},
    createToutiaoTask: function (e) {
    return a.post("/api/toutiao/create", e)
},
    toutiaoIndexConfig: function (e) {
    return a.post("/api/toutiao/config", e)
},
    toutiaoTaskSwitchControl: function (e) {
    return a.post("/api/toutiao/control", e)
}
},
    dbTypeInfo: function (e) {
    return a.get("/api/ds/category", e)
},
    getCTableList: function (e) {
    return a.post("/api/ds/cdstb", e)
},
    getTbInfo: function (e) {
    return a.post("/api/ds/tbinfo", e)
},
    getDsSheet: function (e) {
    return a.post("/api/ds/sheet", e)
},
    getDsTask: function (e) {
    return a.post("/api/ds/task", e)
},
    delete: function (e) {
    return a.post("/api/ds/delete", e)
},
    getGaReports: function (e) {
    return a.get("/api/ga/dreports", e)
},
    getGaInfo: function (e) {
    return a.post("/api/ga/info", e)
},
    previewGa: function (e) {
    return a.post("/api/ga/preview", e)
},
    getBdpDeployCodeToken: function (e) {
    return a.post("/api/journal/token", e)
},
    pwdBatchPreview: function (e) {
    return a.post("/api/ds_batch/preview", e)
},
    pwdBatchModify: function (e) {
    return a.post("/api/ds_batch/modify", e)
},
    saveUserSync: function (e) {
    return a.post("/api/ds/usersync", e)
},
    getJumpInfo: function (e) {
    return a.get("/api/chart/jump_info", e)
},
    saveJumpInfo: function (e) {
    return a.post("/api/chart/jump_save", e)
},
    delJumpInfo: function (e) {
    return a.post("/api/chart/jump_delete", e)
},
    checkJumpInfo: function (e) {
    return a.get("/api/chart/jump_check", e)
},
    getCodeImg: function (e) {
    return a.get("/api/ds/specialsync", e)
}
},
    u = {
    field_list: function (e) {
    return a.post("/api/ds_field/field_list", e)
},
    field_del: function (e) {
    return a.post("/api/ds_field/field_del", e)
},
    field_modify: function (e) {
    return a.post("/api/ds_field/field_modify", e)
}
},
    h = {
    del: function (e) {
    return a.post("/api/adv_date/del", {
    opt_id: e
})
},
    global_del: function (e, t) {
    return a.post("/api/adv_date/del", {
    opt_id: e,
    df_id: t
})
},
    modify: function (e, t, i) {
    return a.post("/api/adv_date/modify", {
    ct_id: e,
    opt_id: t,
    data: i
})
},
    global_modify: function (e, t, i, n) {
    return a.post("/api/adv_date/modify", {
    dsh_id: e,
    opt_id: t,
    df_id: i,
    data: n
})
},
    list: function (e) {
    return a.post("/api/adv_date/list", {
    ct_id: e
})
},
    info: function (e) {
    return a.post("/api/adv_date/info", {
    opt_id: e
})
},
    order: function (e, t) {
    return a.post("/api/adv_date/order", {
    ct_id: e,
    options: t
})
}
},
    f = {
    add: function (e) {
    return a.post("/api/warn/add", {
    ct_id: e.ct_id,
    rule_id: e.rule_id,
    data: angular.toJson(e.data)
})
},
    modify: function (e) {
    return a.get("/api/warn/modify", {
    ct_id: e.ct_id,
    rule_id: e.rule_id,
    data: e.data,
    warn_id: e.warn_id
})
},
    del: function (e) {
    return a.get("/api/warn/delete", {
    ct_id: e.ct_id,
    rule_id: e.rule_id,
    warn_id: e.warn_id
})
},
    warnSwitch: function (e) {
    return a.get("/api/warn/switch", {
    ct_id: e.ct_id,
    rule_id: e.rule_id,
    open_warn_ids: e.open_warn_ids,
    off_warn_ids: e.off_warn_ids
})
}
},
    g = {
    modify: function (e) {
    return a.post("/api/model/modify", e)
},
    preview: function (e) {
    return a.post("/api/model/train_set_preview", e)
},
    result: function (e) {
    return a.post("/api/model/result", e)
},
    list: function (e) {
    return a.post("/api/model/list", e)
},
    info: function (e) {
    return a.post("/api/model/info", e)
},
    del: function (e) {
    return a.post("/api/model/delete", e)
},
    saveClusterRs: function (e) {
    return a.post("/api/model/result_commit", e)
}
},
    m = {
    getList: function () {
    return a.post("/api/folder/list").then(o)
},
    del: function (e, t) {
    return a.get("/api/folder/delete", {
    folder_id: e,
    mode: t
})
},
    modify: function (e) {
    return a.post("/api/folder/modify", e)
},
    create: function (e) {
    return a.post("/api/folder/create", e)
},
    change: function (e) {
    return a.post("/api/folder/change", {
    tb_id: e.tb_id,
    to_folder: e.to_folder,
    to_seq: e.to_seq,
    tb_index: e.tb_index
})
},
    change_batch: function (e) {
    return a.post("/api/folder/change_batch", {
    change_folders: e
})
},
    modify_folder_rel: function (e) {
    return a.post("/api/folder/modify_folder_rel", {
    tb_id: e.tb_id,
    folder_rels: e.tb_status
})
},
    modify_seq: function (e) {
    return a.post("/api/folder/modify_seq", {
    seq_no: e.seq_no,
    folder_id: e.folder_id
})
},
    modify_parent: function (e) {
    return a.post("/api/folder/modify_parent", {
    seq_no: e.seq_no,
    folder_id: e.folder_id,
    parent_id: e.parent_id
})
},
    getStructure: function () {
    return a.post("/api/folder/get_tree")
},
    getStructureWithParam: function (e) {
    return a.post("/api/folder/get_tree_with_tblist", e)
},
    getWorktable: function (e) {
    return a.get("/api/folder/list_only_tb", e)
},
    getTableSiblings: function (e) {
    return a.get("/api/folder/get_current_tb", e)
},
    getTableFolderInfo: function (e) {
    return a.post("/api/folder/info", e)
},
    searchFolderAndTable: function (e) {
    return a.get("/api/folder/search", e)
},
    filterFolderAndTable: function (e) {
    return a.get("/api/folder/filter", e)
}
},
    _ = {
    create: function (e) {
    return a.get("/api/field_comment/create", e)
},
    modify: function (e) {
    return a.get("/api/field_comment/modify", {
    ct_id: e.ct_id,
    fc_id: e.fc_id,
    comment: e.comment
})
},
    del: function (e, t) {
    return a.get("/api/field_comment/delete", {
    ct_id: e,
    fc_id: t
})
}
},
    v = {
    list: function (e) {
    return a.post("/api/dsh_filter/list", {
    dsh_id: e.dash_id,
    rule_id: e.rule_id
})
},
    modify: function (e) {
    return a.post("/api/dsh_filter/commit", {
    dsh_id: e.dash_id,
    data: e.dash_filter_list
})
},
    item: function (e) {
    return a.post("/api/dsh_filter/item", {
    dsh_id: e.dash_id,
    sdo_id: e.sdo_id,
    rule_id: e.rule_id,
    is_tpl: e.is_tpl
})
},
    range: function (e) {
    return a.post("/api/dsh_filter/range", {
    dsh_id: e.dash_id,
    df_id: e.df_id,
    rule_id: e.rule_id,
    selected_tables: e.selected_tables,
    granularity: e.granularity,
    parent_range: e.range
})
}
},
    b = {
    userList: function (e) {
    return a.post("/api/sub/list", e)
},
    modifyPersonal: function (e) {
    return a.post("/api/user/modify_personal", e)
},
    modifyInfo: function (e) {
    return a.post("/api/user/modify_info", e)
},
    groupList: function (e) {
    return a.post("/api/group/list", e)
},
    modify: function (e) {
    return a.post("/api/sub/modify", e)
},
    setFrozen: function (e) {
    return a.post("/api/user/set_frozen", e)
},
    exportFileList: function (e) {
    return a.post("/api/export/file_list", e)
},
    exportDelTask: function (e) {
    return a.post("/api/export/delete", e)
},
    hideNotification: function () {
    return a.post("/api/export/hide_notification")
},
    logout: function (e) {
    return a.post("/api/user/logout", e)
},
    modifyPassword: function (e) {
    return a.post("/api/user/modify_pwd", e)
},
    getUserInfo: function () {
    return a.post("/api/user/info")
},
    unreadNewFeatures: function () {
    return a.post("/api/log/unread")
},
    readNewFeatures: function () {
    return a.get("/api/log/read")
},
    getMobileCode: function (e) {
    return a.post("/api/user/gen_captcha", e)
}
},
    y = {
    getOrderInfo: function (e) {
    return a.get("/api/enum_order/info", {
    _t: (new Date).getTime(),
    tb_id: e.tb_id,
    fid: e.fid,
    ct_id: e.ct_id || ""
}).then(o)
},
    updateOrder: function (e) {
    return a.post("/api/enum_order/update", e)
},
    getFilteredOrderInfo: function (e) {
    return a.get("/api/enum_order/filter_info", {
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
    w = {
    preview: function (e) {
    return a.post("/api/sql_script/preview", {
    info: angular.toJson(e)
}, {
    errHint: !1
})
},
    create: function (e, t, i, n) {
    return a.post("/api/sql_script/create", {
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
    return a.post("/api/sql_script/modify_preview", {
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
    return a.post("/api/sql_script/modify", {
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
    return a.post("/api/sql_script/check_tb_increment", e)
}
},
    C = {
    ruleTbInfo: function (e) {
    return a.post("/api/tb/rule_tb_info", e)
},
    getFieldRule: function (e) {
    return a.post("/api/rule/search_filter", e)
},
    saveBatchRule: function (e) {
    return a.post("/api/rule/create_filter_batch", e)
},
    chartList: function (e) {
    return a.post("/api/chart/list", e)
},
    tplCommit: function (e) {
    return a.post("/api/template/commit", e)
}
},
    x = {
    tbListPreview: function (e) {
    return a.post("/api/workspace/tb_list_preview", e)
},
    create: function (e) {
    return a.post("/api/workspace/create", e)
},
    delete: function (e) {
    return a.post("/api/workspace/delete", e)
},
    modify: function (e) {
    return a.post("/api/workspace/modify", e)
},
    info: function (e) {
    return a.post("/api/workspace/info", e)
},
    list: function () {
    return a.post("/api/workspace/list")
},
    modifyDashList: function (e) {
    return a.post("/api/workspace/modify_dash_list", e)
},
    modifyTableList: function (e) {
    return a.post("/api/workspace/modify_tb_list", e)
},
    modifyGroupList: function (e) {
    return a.post("/api/workspace/modify_group_list", e)
},
    modifyAuthority: function (e) {
    return a.post("/api/workspace/modify_authority_info", e)
},
    userList: function (e) {
    return a.post("/api/workspace/user_list", e)
},
    workspaceLog: function (e) {
    return a.post("/api/workspace/ws_log", e)
}
},
    k = {
    list: function (e) {
    return a.post("/api/sem/list", {
    ds_id: e.ds_id,
    ds_type: e.ds_type
})
},
    merge: function (e) {
    return a.post("/api/sem/merge", {
    link_list: e.link_list
})
},
    tbrefer: function (e) {
    return a.post("/api/sem/tbrefer", {
    ds_id: e.ds_id,
    tmp_ds_id: e.tmp_ds_id
})
}
},
    D = {
    guideSet: function (e) {
    return a.post("/api/user/guide_set", e)
},
    getDashDemo: function () {
    return a.post("/api/personal/demo")
}
},
    S = {
    getListByType: function (e) {
    return a.post("/api/message/list", e)
},
    setNoticeReaded: function (e) {
    return a.post("/api/message/read", e)
},
    getNoticeType: function () {
    return a.post("/api/message/purpose")
}
},
    T = {
    info: function (e) {
    return a.post("/api/auth/info", e)
},
    create: function (e) {
    return a.post("/api/auth/create", e)
},
    modify: function (e) {
    return a.post("/api/auth/modify", e)
},
    stop: function (e) {
    return a.post("/api/auth/stop", e)
},
    oplog: function (e) {
    return a.post("/api/auth/oplog", e)
}
},
    I = {
    userInfo: function (e) {
    return a.post("/api/sub/info", e)
},
    userList: function (e) {
    return a.post("/api/sub/list", e)
},
    userCreate: function (e) {
    return a.post("/api/sub/create", e)
},
    userModify: function (e) {
    return a.post("/api/sub/modify", e)
},
    userDelete: function (e) {
    return a.post("/api/sub/delete", e)
},
    userDelTbCheck: function (e) {
    return a.post("/api/sub/del_tb_check", e)
},
    setFrozen: function (e) {
    return a.post("/api/user/set_frozen", e)
},
    resetPwd: function (e) {
    return a.get("/api/user/reset_pwd", e)
},
    sentNotice: function (e) {
    return a.post("/api/sub/send_notice", e)
},
    accountLimit: function (e) {
    return a.get("/api/account/limit", e)
},
    groupList: function (e) {
    return a.get("/api/group/list", e)
},
    groupOrder: function (e) {
    return a.post("/api/group/order", e)
},
    groupInfo: function (e) {
    return a.post("/api/group/info", e)
},
    groupCreate: function (e) {
    return a.post("/api/group/create", e)
},
    removeAdminCheck: function (e) {
    return a.post("/api/group/check_remove_admin", e)
},
    groupModify: function (e) {
    return a.post("/api/group/modify", e)
},
    groupDelete: function (e) {
    return a.post("/api/group/delete", e)
},
    groupDelTbCheck: function (e) {
    return a.post("/api/group/del_tb_check", e)
},
    securityInfo: function (e) {
    return a.post("/api/security/info", e)
},
    securityCreate: function (e) {
    return a.post("/api/security/create", e)
},
    securityDelete: function (e) {
    return a.post("/api/security/delete", e)
},
    securityList: function (e) {
    return a.get("/api/security/list", e)
},
    securityPreCheck: function (e) {
    return a.post("/api/security/pre_check", e)
},
    securityModify: function (e) {
    return a.post("/api/security/modify", e)
},
    tbShareFieldCheck: function (e) {
    return a.post("/api/share/cancel_fields_check", e)
},
    tbShareFilterCheck: function (e) {
    return a.post("/api/share/check", e)
},
    getGroupCustomFields: function (e) {
    return a.post("/api/group/list_fields", e)
},
    updateGroupCustomFields: function (e) {
    return a.post("/api/group/update_fields", e)
},
    groupMutiOpt: function (e) {
    return a.post("/api/group/muti_opt", e)
}
},
    L = {
    info: function (e) {
    return a.post("/api/chart_tpl/info", {
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
    return a.post("/api/chart_tpl_apply/create", t)
},
    create: function (e) {
    var t = {
    proj_id: e.proj_id,
    ct_id: e.ct_id,
    name: e.name,
    type: e.type,
    explain: e.explain
};
    return angular.isArray(e.fid_explain) ? t.fid_explain = angular.toJson(e.fid_explain) : t.fid_explain = e.fid_explain, a.post("/api/chart_tpl/create", t)
},
    delete: function (e) {
    return a.post("/api/chart_tpl/delete", {
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
    return angular.isArray(e.fid_explain) ? t.fid_explain = angular.toJson(e.fid_explain) : t.fid_explain = e.fid_explain, a.post("/api/chart_tpl/modify", t)
},
    applyList: function (e) {
    var t = {
    type: e.type
};
    return a.post("/api/chart_tpl_apply/list", t)
},
    typeList: function (e) {
    return a.post("/api/chart_tpl/type_list", e)
}
},
    A = {
    getTree: function (e) {
    return a.post("/api/chart_tpl_proj/tree", e)
},
    create: function (e) {
    return a.post("/api/chart_tpl_proj/create", {
    name: e
})
},
    modify: function (e, t) {
    return a.post("/api/chart_tpl_proj/modify", {
    proj_id: e,
    name: t
})
},
    del: function (e) {
    return a.post("/api/chart_tpl_proj/delete", {
    proj_id: e
})
},
    order: function (e, t, i) {
    return a.post("/api/chart_template/order", {
    proj_id: e,
    type: t || 0,
    sort: angular.toJson(i)
})
},
    move: function (e, t, i, n) {
    return a.post("/api/chart_template/move", {
    dsh_id: n,
    proj_id: e,
    type: t,
    sort: angular.toJson(i)
})
}
},
    E = {
    info: function (e) {
    return a.get("/api/chart_tpl_rule/info", {
    rule_id: e
})
},
    industryList: function (e) {
    return a.get("/api/industry/list", e)
},
    domainList: function (e) {
    return a.get("/api/domain/list", e)
},
    domainSearch: function (e) {
    return a.get("/api/domain/search", e)
},
    create: function (e) {
    return a.post("/api/chart_tpl_rule/create", e)
},
    list: function (e) {
    return a.post("/api/chart_tpl_rule/list", e)
},
    delete: function (e) {
    return a.post("/api/chart_tpl_rule/delete", {
    rule_id: e
})
},
    modify: function (e) {
    return a.post("/api/chart_tpl_rule/modify", e)
},
    issued: function (e) {
    var t = {
    rule_id: e.rule_id,
    issued_status: e.issued_status
};
    return a.post("/api/chart_tpl_rule/issued", t)
}
},
    F = {
    personalVipInfo: function () {
    return a.post("/api/pay/personal_vip_info")
},
    personalOrderHistory: function () {
    return a.get("/api/pay/order_history")
},
    getMemberRightData: function () {
    return a.get("/pmresources/personal-config/member.json")
},
    personalInvoice: function (e) {
    return a.post("/api/receipt/create", e)
},
    personalInvoiceHistory: function () {
    return a.get("/api/receipt/list")
}
},
    M = {
    preview: function (e) {
    return a.post("/api/view/preview", e)
},
    create: function (e) {
    return a.post("/api/view/create", e)
},
    modify: function (e) {
    return a.post("/api/view/modify", e)
},
    info: function (e) {
    return a.post("/api/view/info", e)
}
};
    return {
    global_config: i,
    project: n,
    dashboard: r,
    chart: chart,
    db: s,
    tb: l,
    field: d,
    fieldComment: _,
    ds: p,
    ds_field: u,
    share: c,
    adv_date: h,
    warn: f,
    model: g,
    folder: m,
    enumField: y,
    tpl: C,
    sql_script: w,
    dash_global_filter: v,
    workspace: x,
    user: b,
    sem: k,
    guide: D,
    authority: T,
    account: I,
    chart_tpl: L,
    chart_tpl_project: A,
    chartTplRule: E,
    pay: F,
    notice: S,
    view: M,
    getJobStatus: function (e) {
    return a.post("/api/job/status", {
    job_id: e
})
},
    getTaskStatus: function (e) {
    return a.get("/api/task/status", {
    task_id: e
}, {
    errHint: !1
})
},
    getFunctionList: function () {
    return a.get("/api/function/list")
}
}
}

//"$http", "errHint", "commonHttp"
function baService(e, t, a) {
    return {
    list: function (e) {
    return a.post("/api/sta/list", e)
},
    addDomain: function (e) {
    return a.post("/api/sta/add", e)
},
    delDomain: function (e) {
    return a.post("/api/sta/del", e)
},
    updateConfig: function (e) {
    return a.post("/api/sta/update", e)
},
    checkDeploy: function (e) {
    return a.post("/api/sta/ref", e)
},
    getToken: function (e) {
    return a.post("/api/sta/token", e)
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
    e.historyTime = [],
    e.back = function () {
    if (1 == f.length && 0 == s.current.name.indexOf("training")) return void s.go("training", null, {
    replace: !0
});
    var a = f.length > 1 ? f.splice(-2)[0] : "/";
    return e.historyTime.length > 1 && e.historyTime.splice(-2)[0], "/dash_edit" == a || "/" == a ? void(location.href = "/index.html") : void t.path(a)
},
    e.$on("$stateChangeStart", function () {
    e.pageLoading = !0,
    e.member_personal = !1,
    0 == +!!$.cookie("token") && (a.location.href = bdp.bdpLogin.checkPartnerLogin()),
    d.cancelAll(), $(".common-dot-guide").remove()
}),
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
    t.otherwise("/dash_edit"),

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











