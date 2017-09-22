/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/custom-chart-edit.html"
class CustomChartEdit extends Component{

    constructor(){
        super();
    }
    render(){
        return(
            <div>
                <div class="chart-edit-layer custom-edit-mode {{show- + curView + -view}}">
                    <div class="view-header J_view_header">
                        <a class="back-btn J-create-chart-ok-button" title="{{done | translate}}" ng-click="verifyChartArgs()">
                            <i class="bdp-icon ico-back"></i>
                            <!-- <span translate="done"></span> -->
                        </a>
                        <div class="view-header-seperate-line"></div>
                        <h2 class="text-left view-header-left-name ng-cloak">{{ "chart.edit" | translate}}</h2>
                        <div class="tab-nav" mask-guide ng-mg-if="needShowGuide && guideApi.customChartEditGuide == 0" ng-mg-key="customChartEditGuide" ng-mg-keyindex="0">
                            <span ng-click="changeView(data)" ng-class="{active: curView !== develop}">{{ "chart.dataView" | translate}}</span>
                            <span ng-click="changeView(develop)" ng-class="{active: curView === develop}" mask-guide ng-mg-if="needShowGuide && guideApi.customChartEditGuide == 3" ng-mg-key="customChartEditGuide" ng-mg-keyindex="3">{{ "chart.devView" | translate}}</span>
                        </div>
                    </div>
                    <div class="panel-data">
                        <div class="chart-left J_chart_left">
                            <div custom-chart-data-info class="J_chart_data_info"></div>
                            <div class="hd pr hd-field-wrap chart-right-margin J_field_search field-search-cover" ng-show="currentView">
                                <p class="hd-field-tip" translate="chart.field"></p>
                                <div class="query-box auto no-margin">
                                    <input type="text" class="query-text" ng-input-text ng-model="query">
                                </div>
                                <div class="add pr">
                                    <div ng-if="enterprise_type == 3" ng-show="guide != 1 && guide != 2" dot-guide dot-mask="dotMask.addChartField" guide-item="addChartField" guide-type="chart_edit" watch-status="personalInfo.chart_guide" btn-class="J-dot-add-chart-field" add-class="dot-guide-add-chart-field"></div>

                                    <div class="J-dot-add-chart-field" ng-click="newFieldTypeSelect = !newFieldTypeSelect" click-outside="newFieldTypeSelect = false" outside-active="newFieldTypeSelect">
                                        <a class="cursor-pointer bdp-icon-wrap" title="{{chart.addField | translate}}">
                                            <i class="bdp-icon ico-plus1"></i>
                                        </a>
                                        <ul class="field-type-select dropdown-wrap" ng-show="newFieldTypeSelect">
                                            <li class="dropdown-item" ng-click="createFieldFormula()" translate="chart.addFormulaField"></li>
                                            <li class="dropdown-item" ng-click="createFieldGroup()" translate="chart.addGroupField"></li>
                                            <li class="dropdown-item" ng-click="createFieldByML()" translate="ML_wd.btnRunModel" ng-if="permision.newTraining && !wsId"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="bd chart-right-margin J_field_list" ng-show="currentView">
                                <ul class="field-list">
                                    <li ng-repeat="field in field_list | query_fields:query" ng-class="{handler-more:field.handler_more_show}" ng-mouseenter="field.justshowme = true" ng-mouseleave="field.justshowme = false" title="{{field.name}}">
                                        <div ng-click="show_edit = !show_edit" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},onStart:dragTbFunc(field),onStop:stopDragField()}" class="title nowrap {{field.data_type}}-title cursor-pointer" ng-class="{field-drag-title: !chartMainMask}">
                                            <i ng-if="field.data_type===date" class="bdp-icon ico-triangle-right" ng-class="{ico-triangle-down:show_edit}"></i>
                                            <i class="bdp-icon ico-type-{{field.ico_type}}" ng-class="{ico-type-{{field.ico_type}}-orange:field.formula, -ml: field.made_by_ml && field.formula}"></i>
                                            <span class="data-tag" field-set-tooltip="field" tooltip-placement="top-left" ng-if="tbType != public" ng-class="{border-bottom-5182E4: (field.original_name != field.name || field.remark)}" ng-bind="field.name"></span>
                                            <span class="data-tag" ng-if="tbType == public" ng-bind="field.name"></span>
                                            <span class="field-handler display-block" ng-if="field.formula !=  && field.editable && field.data_type == string && field.field_type !== group">
                            <div class="bdp-icon-wrap" title="{{more | translate}}" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                            <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                            <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                            <li class="dropdown-item" ng-click="modifyField(field)">{{edit | translate}}</li>
                        <li class="dropdown-item" ng-click="showEnumOrder(field.fid, false, source)">{{sort | translate}}</li>
                        <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)">{{remove | translate}}</li>
                    </ul>
                </div>
            </span>
                                            <span ng-if="field.formula !=  && field.editable && field.data_type == string && field.field_type === group" class="field-handler hover-show display-block" ng-hide="guide == 2 && enterprise_type == 3">
                            <div class="bdp-icon-wrap" title="{{more | translate}}" ng-click="field.handler_more_show = !field.handler_more_show;handlerMorePos($event)" chart-drop-down drop-down-flag="field.handler_more_show" click-outside="field.handler_more_show = false" outside-active="field.handler_more_show">
                                <i class="bdp-icon ico-more" ng-show="field.justshowme || field.handler_more_show"></i>
                                <ul class="field-editable-handler-more dropdown-wrap" ng-show="field.handler_more_show">
                                    <li class="dropdown-item" ng-click="modifyField(field)">{{edit | translate}}</li>
                                    <li class="dropdown-item" ng-click="showEnumOrder(field.fid ,false, source)">{{sort | translate}}</li>
                                    <li class="dropdown-item" ng-click="delNewField(field.name,field.fid)">{{remove | translate}}</li>
                                </ul>
                            </div>
                        </span>
                                            <span ng-if="field.formula !=  && field.editable && field.data_type != string" class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                            <span class="bdp-icon-wrap" ng-click="modifyField(field)" ng-hide="field.made_by_ml" title="{{edit | translate}}">
                                <i class="bdp-icon ico-edit"></i>
                            </span>
                            <span class="bdp-icon-wrap" ng-click="delNewField(field.name,field.fid)" title="{{remove | translate}}">
                                <i class="bdp-icon ico-trash"></i>
                            </span>
                        </span>
                                            <span class="field-handler hover-show" ng-hide="guide == 2 && enterprise_type == 3">
                            <span class="bdp-icon-wrap" ng-if="field.data_type == string && field.formula ==" title="{{sort | translate}}" ng-click="showEnumOrder(field.fid, false, source)">
                                <i class="bdp-icon ico-config-order hover-show"></i>
                            </span>
                        </span>
                                        </div>
                                        <ul ng-if="field.data_type == date" ng-show="show_edit" class="date-field ml20">
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\year\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="year"></span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\quarter\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="quarter"></span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\month\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="month">月</span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\week\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="week"></span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\day\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="day">日</span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\hour\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="hour">时</span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\minute\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="minute">分</span>
                                                </p>
                                            </li>
                                            <li class="cursor-pointer">
                                                <p class="field-drag-title" data-drag="true" data-jqyoui-options="{revert: invalid, helper: clone,appendTo:body, scroll: false}" jqyoui-draggable="{index:{{$index}},placeholder:keep,onStart:dragSubTbFunc(field,\\second\\),onStop:stopDragField()}">
                                                    <i class="bdp-icon ico-type-3"></i>
                                                    <span translate="second">秒</span>
                                                </p>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <a class="toggle-nav drag-btn J-toggle-nav-chart-left chart-left-drag-btn" resize-width-fields-list title="{{dragResize | translate}}"></a>
                        <div class="chart-main">
                            <div class="chart-args">
                                <!-- 维度 -->
                                <div class="row axis" ng-class="{multi-axis:viewMeta.chart_type === C250}">
                <span class="fl axis-head" flash-guide ng-fg-if="needShowGuide && guideApi.customChartEditGuide == 1" ng-fg-key="customChartEditGuide" ng-fg-keyindex="1">
                    <span class="axis-head-name">{{chart.dimension | translate}}</span>
                    <i class="bdp-icon ico-edit batch-add-axis-btn" ng-click="batchOnDropAdd(x)"></i>
                </span>
                                    <div class="drag-target">
                                        <div class="y_operate" ng-hide="!!viewMeta.compare_axis || viewMeta.chart_type == C280 || viewMeta.chart_type == C340" ng-click="axisHandle.add(compare_axis)">
                                            <i class="bdp-icon ico-handle-compare"></i>
                                            <span>{{ chart.addCompareAxis | translate }}</span>
                                        </div>
                                        <!--x、y正常显示-->
                                        <div class="drag-target-inner xAxis" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\x\\)}">
                                            <ul class="drag-target-list drag-target-list-dimension" id="dragX" ui-sortable="sortAxisField" ng-model="viewMeta.x">
                                                <li ng-repeat="it in viewMeta.x" class="drag-item" ng-class="{not-sortable: chart_ops.meta.level_fields.length > 1 && !$index && it.fid === chart_ops.meta.level_fields[drill_level].fid}" click-outside="it.show_formula = false" outside-active="it.show_formula" data-jqyoui-options="{appendTo:body, scroll: false,animate:false,greedy:true, accept: .field-list .field-drag-title}" data-drop="true">
                                                    <div class="data-tag remove-icon-pr">
                                    <span class="tag ui-select">
                                        <span class="name" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)" ng-click="it.show_formula = !it.show_formula">
                                            <i class="bdp-icon ico-triangle-down1 fl"></i>
                                            <i class="fl bdp-icon ico-sort" ng-if="viewMeta.sort.type !== && viewMeta.sort.type !== custom && viewMeta.sort.axis === x && viewMeta.sort.fid == it.fid && viewMeta.is_advanced_sort == 0 && isSortField({field:it, axis:x, index: $index})" ng-class="fieldSortType()"></i>
                                            <span class="nowrap" ng-bind="it.name" ng-if="!it.nick_name"></span>
                                            <span class="nowrap nick-name" ng-bind="it.nick_name" ng-if="it.nick_name != undefined && it.nick_name != "></span>
                                            <i class="inline fl nowrap granularity" ng-if="it.data_type === date">
                                                ({{it.granularity|granularity}})
                                            </i>
                                            <i class="inline fl nowrap granularity" ng-if="viewMeta.chart_type === C200 && it.data_type === string && permision.tableImg">
                                                ({{it.data_show_type|dataShowType}})
                                            </i>
                                        </span>
                                        <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeAxisAction($event, x, it);"></i>
                                        <div class="data-formula" ng-show="it.show_formula">
                                        <div string-data-show-type ng-if="viewMeta.chart_type === C200 && it.data_type === string && permision.tableImg" tb-id="currentView.tb_id" field="it" axis="x" set-data-show-type="setDataShowType"></div>
                                        <div date-granularity ng-if="it.data_type === date" tb-id="currentView.tb_id" field="it" axis="x" set-granularity="setGranularity"></div>
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
                    <span class="axis-head-name">{{chart.compare | translate}}</span>
                    <i class="bdp-icon ico-edit batch-add-axis-btn" ng-click="batchOnDropAdd(compare_axis)"></i>
                </span>
                                    <div class="drag-target">
                                        <div class="y_operate" ng-click="axisHandle.remove(compare_axis)">
                                            <i class="bdp-icon ico-handle-compare"></i>
                                            <span>{{ chart.removeCompareAxis | translate }}</span>
                                        </div>
                                        <div class="drag-target-inner yAxis" ng-model="compare_list" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\compare_axis\\)}">
                                            <ul class="drag-target-list drag-target-list-dimension" id="dragCompare_axis" ui-sortable="sortAxisField" ng-model="viewMeta.compare_axis">
                                                <li ng-repeat="it in viewMeta.compare_axis track by $index" class="drag-item" click-outside="it.show_formula = false" outside-active="it.show_formula" ng-class="{virtual-field: it.data_type === virtual}">
                                                    <div class="virtual-field-hint bdp-tooltip" ng-if="!hasShownVirtualFieldHint && it.data_type === virtual">
                                                        <i class="bdp-icon ico-cancel" ng-click="turnOffVirtualFieldHint();"></i>
                                                        <div class="bdp-tooltip-content">
                                                            <div class="content">
                                                                <p>{{chart.virtualFieldHint_1 | translate}} <br> {{chart.virtualFieldHint_2 | translate}}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="data-tag" ng-class="{remove-icon-pr: !(it.data_type === virtual)}">
                                    <span class="tag ui-select">
                                    <span class="name" ng-click="it.show_formula = !it.show_formula">
                                    <i class="bdp-icon ico-triangle-down1 fl" ng-if="it.data_type != virtual"></i>
                                    <i class="fl bdp-icon ico-sort" ng-if="viewMeta.is_advanced_sort != 1 && it.compare_sort.type !== && it.compare_sort.type !== custom && isSortField({field:it, axis:compare_axis, index: $index})" ng-class="fieldSortType({axis: compare_axis, index: $index})"></i>
                                    <span class="nowrap" ng-bind="it.name"></span>
                                    <i class="inline fl nowrap granularity" ng-if="it.data_type === date">
                                    ({{it.granularity|granularity}})
                                    </i>
                                    </span>
                                    <i class="bdp-icon ico-delete-small remove-it-icon" ng-click="removeAxisAction($event, compare_axis, it);" ng-if="!(it.data_type === virtual)"></i>
                                    <div class="data-formula" ng-if="it.data_type != virtual" ng-show="it.show_formula">
                                    <div date-granularity ng-if="it.data_type === date" tb-id="currentView.tb_id" field="it" axis="compare_axis" set-granularity="setGranularity"></div>
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
                                <!-- 数值 -->
                                <div class="row axis">
                                    <div class="fl axis-head" flash-guide ng-fg-if="needShowGuide && guideApi.customChartEditGuide == 2" ng-fg-key="customChartEditGuide" ng-fg-keyindex="2">
                                        <span class="axis-head-name">{{chart.valueAxis | translate}}</span>
                                        <i class="bdp-icon ico-edit batch-add-axis-btn" ng-click="batchOnDropAdd(y)"></i>
                                    </div>
                                    <div class="drag-target">
                                        <!--x、y正常显示-->
                                        <div class="drag-target-inner yAxis" data-drop="true" data-jqyoui-options="{greedy:true, accept: .field-list .field-drag-title, scroll: false}" data-jqyoui-droppable="{onDrop:onDropAdd(\\y\\)}">
                                            <ul class="drag-target-list drag-target-list-dimension" id="dragY" ui-sortable="sortAxisField" ng-class="{not-sortable:viewMeta.chart_type == C280}" ng-model="viewMeta.y">
                                                <li ng-repeat="it in viewMeta.y" class="drag-item" click-outside="it.show_formula = false" outside-active="it.show_formula" ng-class="{virtual-field: it.data_type === virtual, not-sortable: it.data_type === virtual}">
                                                    <div class="data-tag" ng-class="{remove-icon-pr: !(it.data_type === virtual)}">
                                    <span class="tag ui-select">
                                        <span class="name" ng-click="showFormula(it)" ng-mouseover="showFieldTip($event,it)" ng-mouseleave="hideFieldTip($event,it)">
                                            <i class="bdp-icon ico-triangle-down1 fl"></i>
                                            <i class="fl bdp-icon ico-filter-white" ng-if="it.post_filter && it.post_filter.enabled != 0"></i>
                                            <i class="fl bdp-icon ico-sort" ng-if="viewMeta.is_advanced_sort == 0 && isSortField({field:it, axis:y, index: $index}) && viewMeta.sort.axis === y" ng-class="fieldSortType()"></i>
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
                            </div>
                            <!--end chart args-->
                            <div class="chart-left-side">
                                <div chart-filter></div>
                            </div>
                            <a class="toggle-nav drag-btn" resize-width-filter-list title="{{dragResize|translate}}"></a>
                            <div id="chartBox">
                                <div chart-info-summary class="cursor-pointer chart-info-summary-icon">
                                    <i class="bdp-icon ico-info-sign"></i>
                                    <div class="dropdown-wrap chart-info-summary">
                                        <em class="arrow-up"></em>
                                        <div class="summary-content-wrap">
                                            <table class="chart-info-summary-content">
                                                <tr>
                                                    <td class="label nowrap" translate="chart.dataUpdate"></td>
                                                    <td class="text">{{tb_update_time | date:yyyy-MM-dd HH:mm:ss}}</td>
                                                </tr>
                                                <tr ng-repeat="y in yAxis" ng-if="y.description">
                                                    <td class="label nowrap">{{y.nick_name || y.name}}</td>
                                                    <td class="text">{{y.description}}</td>
                                                </tr>
                                                <tr ng-repeat="x in xAxis" ng-if="x.description">
                                                    <td class="label nowrap">{{x.nick_name || x.name}}</td>
                                                    <td class="text">{{x.description}}</td>
                                                </tr>
                                                <tr ng-if="description">
                                                    <td class="label nowrap" translate="chart.description"></td>
                                                    <td class="text">{{description}}</td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div chart-inner-filter chartid="currentView.ct_id" class="clearfix" ng-if="currentView"></div>

                                <advance-sort chart-options="draw_chart_url.options" chart-meta="viewMeta" drill-level="drill_level" bdp-chart-obj="$bdpChart" save-chart-fun="saveChartImmediate()" chart-mode="edit"></advance-sort>

                                <a href="javascript:;" class="table-flip" title="{{ chart.tableFlip | translate}}">
                                    <i class="bdp-icon" ng-class="{ico-flip-ccw:viewMeta.tb_flip,ico-flip-cw:!viewMeta.tb_flip}"></i>
                                </a>
                                <div bdp-chart="draw_chart_url.options" display-mode="edit" data-options="draw_chart_url.options" data-lazy-loaded="draw_chart_url.lazyload" class="chart chart-table J_subchart"></div>
                            </div>
                            <div class="chart-main-mask" ng-if="chartMainMask"></div>
                        </div>
                        <div class="chart-right chart-config-container">
                            <h4 class="block-title" translate="chart.chartSetting"></h4>
                            <div class="block chart-title">
                                <div class="hd" translate="chart.name"></div>
                                <div class="bd">
                                    <input type="text" ng-model="chart_ops.name" class="input-text-block chart-ops-inp" ng-click="ifClearName($event)" ng-keydown="ifEnterDown($event)" ng-blur="saveAfterCheckDirty({not_need_redraw:true,only_refresh_data:false,closeDialog:false}, true)" placeholder="{{chart.untitledChart|translate}}" ng-disabled="selected_type === C310">
                                </div>
                            </div>
                            <div class="block no-shadow">
                                <div class="hd" translate="chart.description"></div>
                                <div class="bd">
                                    <textarea msd-elastic class="input-text-block chart-description" ng-model="chart_ops.description" ng-keyup="lazySaveChart({not_need_redraw:true,only_refresh_data:false},200, true);description=chart_ops.description"></textarea>
                                </div>
                            </div>

                            <h4 class="block-title" translate="chart.datasetSetting" ng-if="currentView"></h4>
                            <div class="block chart-inner-filter-level" chart-inner-filter-level opts="chart_ops" chartid="currentView.ct_id" save="saveChartImmediate" fields="field_list" current-view="currentView" ng-if="currentView">
                                <!-- 内置筛选 -->
                            </div>

                            <!-- <div plot-line></div> -->
                            <!-- <div chart-warning></div> -->

                            <div class="block statistic" ng-if="currentView">
                                <div class="hd block-header" translate="dash.advDash.tableSetting"></div>
                                <div class="bd block-body sub-block">
                                    <div table-statistic></div>
                                </div>
                                <div class="sub-block">
                                    <div class="hd mt10 block-header ng-scope">{{chart.mergeCell|translate}}</div>
                                    <input type="checkbox" ng-model="viewMeta.tb_merge_cell" ng-change="saveChartImmediate()">{{chart.mergeCell|translate}}
                                </div>
                            </div>
                            <div class="block top-chart-block show-item" ng-if="chart_ops.meta.level[drill_level].x.length || chart_ops.meta.level[drill_level].compare_axis.length">
                                <div class="hd block-header ng-scope" translate="chart.showItemNum"></div>
                                <div top-chart class="item-content"></div>
                            </div>
                        </div>
                    </div>

                    <div class="panel-develop show-fullview-{{curZoomView}}">
                        <div class="editor-block" ng-class="{show-editor-console: showEditorConsole}">
                            <div class="block-hd">
                                <h4 class="title">{{ "editBlock" | translate}}</h4>
                                <span class="display-inline-block pd8" mask-guide ng-mg-if="needShowGuide && guideApi.customChartEditGuide == 4" ng-mg-key="customChartEditGuide" ng-mg-keyindex="4">
                    <label for="lang-select" class="lang-label">{{ "language" | translate }}</label>
                    <select id="lang-select" class="lang-select cursor-pointer" ng-model="chart_ops.rootMeta.custom_chart_setting.mode" ng-change="saveChartImmediate({only_redraw: true})">
                        <option value="vega">Vega</option>
                        <option value="javascript">Javascript</option>
                    </select>
                </span>
                                <a class="display-inline-block" href="/platform/dev-document/_book/zi-ding-yi-tu-biao.html" target="_blank" title="{{chart.customChartHelp|translate}}">
                    <span class="bdp-icon-wrap">
                        <i class="bdp-icon ico-help-bold"></i>
                    </span>
                                </a>
                                <i class="bdp-icon ico-enter-fullscreen-2 cursor-pointer" ng-if="curZoomView != editor" ng-click="zoomInView(editor)"></i>
                                <i class="bdp-icon ico-exit-fullscreen-2 cursor-pointer" ng-if="curZoomView == editor" ng-click="zoomOut()"></i>
                            </div>
                            <div class="block-bd">
                                <div class="hint" ng-show="showCodeEditorHint">{{ "chart.codeEditorHint" | translate}}</div>
                                <div id="custom-code-editor" class="custom-editor-block"></div>
                                <!--                 <div class="console-block">
                                    <div class="console-hd">
                                        <h4 class="title">Console</h4>
                                        <i class="bdp-icon ico-cancel cursor-pointer" ng-click="toggleEditorConsole()"></i>
                                    </div>
                                    <div id="console-message"></div>
                                </div> -->
                            </div>
                            <div class="custom-editor-ft">
                                <div class="left">
                                    <!-- <a class="bdp-btn-radius bdp-btn btn-toggle-console" ng-if="chart_ops.rootMeta.custom_chart_setting.mode == javascript" ng-click="toggleEditorConsole()">Console</a> -->
                                    <!-- <a class="bdp-btn-radius bdp-btn btn-insert-tpl" ng-click="insertVegaTpl()">{{ "chart.insertVegaTpl" | translate}}</a> -->
                                    <!-- <a class="bdp-btn-radius bdp-btn btn-format-code" ng-click="insertVegaTpl()">{{ "format" | translate}}</a> -->
                                </div>
                                <div class="right">
                                    <!--                     <label class="cursor-pointer">
                                        <input type="checkbox" ng-model="viewMeta.custom_chart_setting.autorun" ng-change="saveChartImmediate({only_redraw: true})" /> {{autorun|translate}}
                                    </label> -->
                                    <a class="bdp-btn-radius bdp-btn-green btn-run-code" ng-click="runCode()" mask-guide ng-mg-if="needShowGuide && guideApi.customChartEditGuide == 5" ng-mg-key="customChartEditGuide" ng-mg-keyindex="5">{{ "run" | translate}}</a>
                                    <a class="bdp-btn-radius bdp-btn-blue2 btn-save-code" ng-click="saveCode()" mask-guide ng-mg-if="needShowGuide && guideApi.customChartEditGuide == 6" ng-mg-key="customChartEditGuide" ng-mg-keyindex="6">{{ "save" | translate}}</a>
                                </div>
                            </div>
                        </div>
                        <div class="exit-fullview-bar cursor-pointer" ng-if="curZoomView" ng-click="zoomOut()">
                            <i class="bdp-icon" ng-class="{ico-show-preview: curZoomView == editor, ico-show-editor: curZoomView == preview}"></i>
                        </div>
                        <div class="preview-block">
                            <div class="block-hd">
                                <h4 class="title">{{ "preview" | translate}}</h4>
                                <div chart-inner-filter chartid="chartid" class="clearfix" ng-if="currentView"></div>
                                <i class="bdp-icon ico-enter-fullscreen-2 cursor-pointer" ng-if="curZoomView != preview" ng-click="zoomInView(preview)"></i>
                                <i class="bdp-icon ico-exit-fullscreen-2 cursor-pointer" ng-if="curZoomView == preview" ng-click="zoomOut()"></i>
                            </div>
                            <div class="block-bd">
                                <div bdp-chart="draw_root_chart_url.options" display-mode="edit" data-options="draw_root_chart_url.options" data-lazy-loaded="draw_root_chart_url.lazyload" class="chart J_rootchart">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hz-tip error hidden" id="dataOver">
                    <span></span>
                </div>

                <div ng-loading-gif ng-show="chartContentLoading"></div>

                <script id="vega-example-light" type="text/template">
                    {
                        "data": [
                    {
                        "name": "table",
                        "source": "ds0",
                        "transform": [{"type": "pie", "field": "y0"}]
                    },
                    {
                        "name": "table_aggregate",
                        "source": "ds0",
                        "transform": [{"type": "aggregate", "fields": ["x0", "y0"], "ops": ["max", "max"], "as": ["x0", "max"]}]
                    },
                        ],

                        "signals": [
                    {
                        "name": "sliceWidthRange",
                        "update": "[20, min(width, height)/3 + 50]",
                    },
                    {
                        "name": "hover",
                        "value": null,
                        "on": [
                    {"events": "arc:mouseover", "update": "datum"},
                    {"events": "arc:mouseout", "update": null}
                        ]
                    }
                        ],

                        "scales": [
                    {
                        "name": "r",
                        "type": "sqrt",
                        "domain": {"data": "table", "field": "y0"},
                        "zero": true,
                        "range": {signal: "sliceWidthRange"}
                    },
                    {
                        "name": "color",
                        "domain": {"data": "table", "field": "x0"},
                        "type": "ordinal",
                        "range": {"scheme": "category20"}
                    }
                        ],

                        "legends": [
                    {
                        "entryPadding": 10,
                        "fill": "color",
                        "encode": {
                        "labels": {
                        "enter": {
                        "dx": 20,
                        "fill": {"value": "#333"}
                    }
                    }
                    }
                    }
                        ],

                        "marks": [
                    {
                        "type": "arc",
                        "from": {"data": "table"},
                        "encode": {
                        "enter": {
                        "x": {"field": {"group": "width"}, "mult": 0.5},
                        "y": {"field": {"group": "height"}, "mult": 0.5},
                        "startAngle": {"field": "startAngle"},
                        "endAngle": {"field": "endAngle"},
                        "stroke": {"value": "#eee"},
                        "strokeWidth": {"value": 2},
                        "strokeOpacity": {"value": 1},
                        "cursor": "pointer",
                    },
                        "update": {
                        "fill": {"scale": "color", "field": "x0"},
                        "fillOpacity": [
                    {"test": "datum === hover", "value": 0.8},
                    {"value": 1}
                        ],
                        "innerRadius": [
                    {"value": 50}
                        ],
                        "outerRadius": [
                    {"test": "datum === hover", "scale": "r", "field": "y0", "offset": 10},
                    {"scale": "r", "field": "y0"}
                        ],
                    }
                    }
                    },
                    {
                        "type": "text",
                        "interactive": false,
                        "encode": {
                        "enter": {
                        "x": {"signal": "width/2"},
                        "y": {"signal": "height/2 - 10"},
                        "fontWeight": {"value":"bold"},
                        "fontSize": {"value": 14},
                        "align": {"value": "center"}
                    },
                        "update": {
                        "fill": {"signal": "hover ? scale(color, hover.x0) : #666"},
                        "text": {"signal": "hover ? hover.x0 : 最大值"}
                    }
                    }
                    },

                    {
                        "type": "text",
                        "interactive": false,
                        "encode": {
                        "enter": {
                        "x": {"signal": "width/2"},
                        "y": {"signal": "height/2 + 14"},
                        "fill": {"value": "#666"},
                        "fontSize": {"value": 12},
                        "align": {"value": "center"}
                    },
                        "update": {
                        "text": {"signal": "format(hover ? hover.y0 : data(table_aggregate)[0].max, ,) "}
                    }
                    }
                    }
                        ]
                    }
                </script>
                <script id="vega-example-dark" type="text/template">
                    {
                        "data": [
                    {
                        "name": "table",
                        "source": "ds0",
                        "transform": [{"type": "pie", "field": "y0"}]
                    },
                    {
                        "name": "table_aggregate",
                        "source": "ds0",
                        "transform": [{"type": "aggregate", "fields": ["x0", "y0"], "ops": ["max", "max"], "as": ["x0", "max"]}]
                    },
                        ],

                        "signals": [
                    {
                        "name": "sliceWidthRange",
                        "update": "[20, min(width, height)/3 + 50]",
                    },
                    {
                        "name": "hover",
                        "value": null,
                        "on": [
                    {"events": "arc:mouseover", "update": "datum"},
                    {"events": "arc:mouseout", "update": null}
                        ]
                    }
                        ],

                        "scales": [
                    {
                        "name": "r",
                        "type": "sqrt",
                        "domain": {"data": "table", "field": "y0"},
                        "zero": true,
                        "range": {signal: "sliceWidthRange"}
                    },
                    {
                        "name": "color",
                        "domain": {"data": "table", "field": "x0"},
                        "type": "ordinal",
                        "range": {"scheme": "set3"}
                    }
                        ],

                        "legends": [
                    {
                        "entryPadding": 10,
                        "fill": "color",
                        "encode": {
                        "labels": {
                        "enter": {
                        "fill": {"value": "#fff"}
                    }
                    }
                    }
                    }
                        ],

                        "marks": [
                    {
                        "type": "arc",
                        "from": {"data": "table"},
                        "encode": {
                        "enter": {
                        "x": {"field": {"group": "width"}, "mult": 0.5},
                        "y": {"field": {"group": "height"}, "mult": 0.5},
                        "startAngle": {"field": "startAngle"},
                        "endAngle": {"field": "endAngle"},
                        "stroke": {"value": "#fff"},
                        "strokeWidth": {"value": 2},
                        "strokeOpacity": {"value": 1},
                    },
                        "update": {
                        "fill": {"scale": "color", "field": "x0"},
                        "innerRadius": [
                    {"value": 50}
                        ],
                        "outerRadius": [
                    {"test": "datum === hover", "scale": "r", "field": "y0", "offset": 10},
                    {"scale": "r", "field": "y0"}
                        ],
                    }
                    }
                    },

                    {
                        "type": "text",
                        "interactive": false,
                        "encode": {
                        "enter": {
                        "x": {"signal": "width/2"},
                        "y": {"signal": "height/2 - 10"},
                        "fontWeight": {"value":"bold"},
                        "fontSize": {"value": 14},
                        "align": {"value": "center"}
                    },
                        "update": {
                        "fill": {"signal": "hover ? scale(color, hover.x0) : #fff"},
                        "text": {"signal": "hover ? hover.x0 : 最大值"}
                    }
                    }
                    },

                    {
                        "type": "text",
                        "interactive": false,
                        "encode": {
                        "enter": {
                        "x": {"signal": "width/2"},
                        "y": {"signal": "height/2 + 14"},
                        "fill": {"value": "#fff"},
                        "fontSize": {"value": 12},
                        "align": {"value": "center"}
                    },
                        "update": {
                        "text": {"signal": "format(hover ? hover.y0 : data(table_aggregate)[0].max, ,) "}
                    }
                    }
                    }
                        ]
                    }

                </script>
            </div>
        )
    }
}