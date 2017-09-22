/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/dialogTemplates/fullscreen.html"
class Fullscreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
        )
    }
}