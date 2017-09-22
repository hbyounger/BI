/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/chart-edit.html"
class ChartEdit extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}