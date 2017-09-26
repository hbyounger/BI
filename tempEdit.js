/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/chart-edit.html"
class ChartEdit extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div bindonce>
                    <div class="ngdialog-title" bo-text="'dash.newFolder' | translate"></div>
                    <div class="ngdialog-message">
                        <div class="form-group mt10 create-folder dashboard-message">

                            <div class="row mb10 clearfix">
                                <label class="form-label mr14 fl" bo-text="'dash.belongToProjName' | translate"></label>
                                <div class="form-field project-folder-dropdown fl" click-outside="createFolderData.showDropdown = false" outside-active="createFolderData.showDropdown">
                                    <p class="selected-item nowrap" ng-click="createFolderData.showDropdown = !createFolderData.showDropdown" title="{{createFolderData.selectedProjectName}}">
                                        <span>{{createFolderData.selectedProjectName}}</span>
                                        <i class="bdp-icon ico-triangle-down"></i>
                                    </p>
                                    <div class="dropdown-wrap select-list project-list-common" ui-tree ng-show="createFolderData.showDropdown && all_project_list.length > 0">
                                        <ul>
                                            <li class="project-item nowrap" bo-title="'dash.rootFolder' | translate" data-nodrag>
                                                <div class="cat-op-parent level-0" ng-click="treeSelectParent(null, 'project')">
                                    <span class="name-wrap no-wrap">
                                        <i class="bdp-icon ico-triangle-down org-prefix-triangle ico-no-opacity" ng-click="nodeCollapseHandle( $event, root)" ng-if="!root.nodeCollapse"></i>
                                        <i class="bdp-icon ico-triangle-right org-prefix-triangle" ng-if="root.nodeCollapse" ng-click="nodeCollapseHandle( $event, root)"></i>
                                        <span bo-text="'dash.rootFolder' | translate"></span>
                                    </span>
                                                </div>
                                                <ul ui-tree-nodes ng-model="all_project_list" class="select-list-box" ng-if="!root.nodeCollapse">
                                                    <li ng-if="all_project_list.length > 0 && projItem.attribute == 'project' && projItem.type == 0 && projItem.property != 1" class="project-item nowrap" ng-repeat="projItem in all_project_list" title="{{projItem.name}}" ui-tree-node ng-include="'createChart'" data-nodrag></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix">
                                <label class="form-label mr10" bo-text="'dash.folderName' | translate"></label>
                                <input class="form-field" type="text" ng-model="project_name">
                            </div>
                        </div>
                    </div>
                    <div class="ngdialog-buttons">
                        <button type="button" class="ngdialog-button ngdialog-button-primary" ng-click="createProject(project_name, createFolderData.selectFolder, closeThisDialog)" bo-text="'ok' | translate"></button>
                        <button type="button" class="ngdialog-button ngdialog-button-secondary" ng-click="closeThisDialog()" bo-text="'cancel' | translate"></button>
                    </div>
                </div>
                <script type="text/ng-template" id="createChart">
                    <div class="cat-op-parent level-{{projItem.deep + 1}}"
                         ng-click="treeSelectParent(projItem, 'project')">
        <span class="name-wrap no-wrap">
            <i class="bdp-icon ico-triangle-down org-prefix-triangle ico-no-opacity"
               ng-click="nodeCollapseHandle( $event, projItem)"
               ng-if="!projItem.nodeCollapse"></i>
            <i class="bdp-icon ico-triangle-right org-prefix-triangle"
               ng-if="projItem.nodeCollapse"
               ng-click="nodeCollapseHandle($event, projItem)"></i>
            {{projItem.name}}</span>
                    </div>
                    <ul ui-tree-nodes ng-model="projItem.subs" ng-if="projItem.subs.length > 0 && projItem.attribute == 'project' && projItem.type == 0 && !projItem.nodeCollapse" >
                        <li class="project-item nowrap" ng-repeat="projItem in projItem.subs" ui-tree-node ng-if="projItem.attribute == 'project' && projItem.type == 0"
                            ng-include="'createChart'" data-nodrag >
                        </li>
                    </ul>
                </script>
            </div>
        )
    }
}