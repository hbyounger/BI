/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/project_view.html"
class ProjectView extends Component {
    constructor() {
        super();
    }

    render() {
        return (<div>
            <div nav-workspace class="nav-workspace"></div>
            <div project-list bindonce ng-class="{role-user:role==user,
        has-workspace-list: workspaceList && workspaceList[dash].length > 0 && view != data_screen,
        empty-project-wrap: noFolders}" class="dash-sidebar J_dash_sidebar"></div>
            <div class="dash-edit-content J_dash_edit_content" ng-class="{shopex-dash-edit-content: (enterprise_type == 5 || enterprise_type == 6) && noFolders}">
                <div ui-view class="dash-edit-content-view pr">
                    <div class="project-empty" ng-if="noFolders && !(enterprise_type == 5 || enterprise_type == 6) && !isThirdIframe">
                        <i class="bdp-icon ico-new-folder ico-no-opacity"></i>
                        <p class="font-text-tip" translate="dash.emptyProject" class="mt16"></p>
                    </div>

                    <div class="shopex-empty-dash-wrap" ng-if="(enterprise_type == 5 || enterprise_type == 6) && noFolders">
                        <div class="shopex-empty-dash-title">欢迎使用生意罗盘</div>
                        <div class="shopex-empty-dash-desc">
                            生意罗盘是专业的数据分析产品，为您定制专业的数据可视化服务，帮助您实现数据运营，用数据指导决策等。它能够整合淘宝、京东等多平台数据，为您提供最便捷的今日资讯，根据当前资讯，您可以有针对性的查看商品分析、客户分析和运营管理分析，从而为决策提供最有效的数据支撑。
                        </div>
                        <div class="shopex-empty-dash-btn-wrap text-center">
                            <button class="bdp-btn bdp-btn-ok" ng-click="click_show_view(database)">立即使用</button>
                        </div>
                        <div class="shopex-empty-dash-img-wrap text-center">
                            <img class="shopex-empty-dash-img" ng-src="/static/images/shopex.png">
                        </div>
                    </div>

                    <div class="project-empty" ng-if="isThirdIframe">
                        <img ng-src="/static/images/rongyi_empty_folder.png" ng-if="isThirdIframe">
                            <p class="mt16 text-left">
                                当前账户尚未分配浏览数据权限，<br>请联系容易网客服： 400-040-8989
                            </p>
                    </div>
                </div>
            </div>
        </div>)
    }
}