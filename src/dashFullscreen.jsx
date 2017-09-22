/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/dash-fullscreen.html"
class DashFullscreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
            </div>
        )
    }
}