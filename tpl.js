/**
 * Created by yangke on 2017/9/22.
 */
e.put("/static/js/dashboard/tpl/custom-chart-edit.html",(
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
)
);

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

</div>
),

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

</div>
),

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
                    </div>

                </div>
            </div>
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
        </div>
        <!-- </div>-->
        <div class="chart-main-mask" ng-if="chartMainMask"></div>
    </div>
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

<div ng-loading-gif ng-show="chartContentLoading"></div>
),

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
</div>
),

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

<div ng-loading-gif ng-show="dashLoading"></div>
),

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
</div>
),

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
</div>
),

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

<div ng-loading-gif ng-show="dashLoading"></div>
),

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
</div>
),

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

</div>
),

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
</div>
),


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
</div>
),

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
</div>
),

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

</div>
),

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
</div>
),