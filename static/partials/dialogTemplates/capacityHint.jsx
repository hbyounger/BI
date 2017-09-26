/**
 * Created by yangke on 2017/9/25.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/chart-edit.html"
class ChartEdit extends Component {
    constructor() {
        super();
    }

    render() {
        return (
        <div class="ngdialog-title">提示</div>
        <div class="ngdialog-message">
            <p class="mt8" ng-if="memberData.vipLevel === 0">
            数据存储空间已达上限{{+maxSize}}M，可升级会员获得更多存储空间哦~
    </p>
        <p class="mt8" ng-if="memberData.vipLevel === 1">
            数据存储空间已达上限{{maxSize}}M，可升级金钻会员获得更多存储空间哦~
        </p>
        <p class="mt8" ng-if="memberData.vipLevel === 2">
            数据存储空间已达上限{{maxSize/1024}}G，如需更多存储空间，请联系BDP商务热线400-063-9966。
        </p>
    </div>
        <div class="ngdialog-buttons">
            <a type="button" class="ngdialog-button ngdialog-button-primary display-inline-block line-height-32 height32" ng-click="closeThisDialog()" target="_blank" ng-href="/member.html" ng-if="memberData.vipLevel === 0">立即升级</a>
            <a type="button" class="ngdialog-button ngdialog-button-primary display-inline-block line-height-32 height32" ng-click="closeThisDialog()" target="_blank" ng-href="#/member_upgrade/2" ng-if="memberData.vipLevel === 1">立即升级</a>
            <input type="button" class="ngdialog-button ngdialog-button-primary" value="{{ 'ok' | translate}}" ng-click="closeThisDialog()" ng-if="memberData.vipLevel === 2">
        </div>
        )

    }
}