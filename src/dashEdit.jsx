/**
 * Created by yangke on 2017/9/22.
 */

import React,{Component} from "React"

//"/static/js/dashboard/tpl/dash-edit.html"
class DashEdit extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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

                <div ng-loading-gif ng-show="dashLoading"></div>
            </div>
        )
    }
}