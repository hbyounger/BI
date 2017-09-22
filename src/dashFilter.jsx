/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/dash-filter.html"
class DashFilter extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
    )
    }
}