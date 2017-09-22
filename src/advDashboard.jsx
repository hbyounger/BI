/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/adv_dashboard.html"
class AdvDashboard extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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

                <div ng-loading-gif ng-show="dashLoading"></div>
            </div>
        )
    }
}