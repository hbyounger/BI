/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/common/tpl/nav_notice.html"
class NavNotice extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="pr">
            <span class="bdp-icon-wrap pr" ng-class="{'unread':unread > 0}" title="消息中心" ng-click="goToListPage()">
                <i class="bdp-icon ico-message"></i>
                <i ng-show="hasNewNotice.unReadTotal > 0" class="unwatched active"></i>
            </span>
                <div class="nav-notice-list-wrap J_personal_notice_layer" ng-class="{'single-notice': hasNewNotice.unReadTypeLen == 1}" ng-if="hasNewNotice.show">
                    <ul class="nav-notice-list">
                        <li class="nav-notice-item" ng-if="noticTipsMol[navNoticeItem.typeId].show" ng-repeat="navNoticeItem in navNoticeList" ng-click="goToListPage(navNoticeItem.typeId)">你有 {{navNoticeItem.unReadNewsLen}}条
                            <span class="notice-type">【{{navNoticeItem.typeId | noticeTypeMap}}】</span>消息
                        </li>
                    </ul>
                    <!-- <div class="operat-wrap clearfix" ng-if="hasNewNotice.unReadTypeLen > 1">
                    <a class="see-all" ng-click="goToListPage()">查看全部</a>
                    </div> -->
                    <div class="close-notice-btn">
                        <i class="bdp-icon ico-gis-close cursor-pointer" ng-click="closeNavNotice()"></i>
                    </div>
                </div>
            </div>
        )
    }
}