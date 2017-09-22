/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/adv_dashboard_main.html"
class AdvDashboardMain extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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

            </div>
        )
    }
}