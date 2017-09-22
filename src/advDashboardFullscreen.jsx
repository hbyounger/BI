/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/adv_dashboard_fullscreen.html"
class AdvDashboardFullscreen extends Component {
    constructor() {
        super();
    }

    render() {
        return (
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
        )
    }
}