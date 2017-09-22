/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/gis_edit.html"
class GisEdit extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
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

    </div>)
    }
}