/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/data_screen_edit.html"
class DataScreenEdit extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
    )
    }
}