/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/chart-operate-more.html"
class ChartOperateMore extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
        )
    }
}