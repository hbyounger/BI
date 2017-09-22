/**
 * Created by yangke on 2017/9/22.
 */

import React,{Component} from "React"

//"/static/js/common/tpl/nav_project_list.html"
class NavProjectList extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
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
            </div>
        )
    }
}