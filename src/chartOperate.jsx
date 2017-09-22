/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/chart-operate.html"
class ChartOperate extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
        )
    }
}