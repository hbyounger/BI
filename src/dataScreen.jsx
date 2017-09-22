/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/data_screen.html"
class DataScreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
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
        </div>)
    }
}