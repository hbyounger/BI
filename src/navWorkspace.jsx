/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/chart-operate.html"
class NavWorkspace extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div ng-if="workspaceList && curWsList.length > 0">
                <div class="nav-workspace-list">
                    <ul>
                        <li class="display-inline-block cursor-pointer" ng-class="{'active':!wsId}" ng-click="tabWorkspace($event,undefined)" ng-if="(view !== 'template' && view !=='template_config' && view != 'template_rule') || role !== 'user'">
                            <div class="workspace-nav">
                                <div class="workspace-nav-content nowrap">
                                    我的工作区
                                </div>
                                <div class="right-border"></div>
                            </div>
                        </li>
                        <li ng-repeat="item in curWsList" class="display-inline-block cursor-pointer" ng-class="{'active':item.ws_id == wsId}" ng-click="tabWorkspace($event,item.ws_id,item.admin)">
                            <div class="workspace-nav">
                                <div class="workspace-nav-content nowrap">
                                    {{item.name}}
                                </div>
                                <div class="right-border"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}