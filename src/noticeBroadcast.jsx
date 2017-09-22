/**
 * Created by yangke on 2017/9/22.
 */


import React,{Component} from "React"

//"/static/js/common/tpl/notice_broadcast.html"
class NoticeBroadcast extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="new-broadcast-wrap" ng-show="enterprise_type == 3 && personalInfo.new_version">
                <div class="new-broadcast-bg"></div>
                <div class="new-broadcast">
                    <div class="btn-close" ng-click="closeBroadcast()">
                        ×
                    </div>
                    <!-- <p class="broadcast-title">BDP个人版重装上线啦~</p> -->
                    <div class="broadcast-info">
                        <!-- <dl class="info-list">
                                        <dt class="info-title">会员体系</dt>
                                                        <dd class="info-content">为满足不同用户的数据分析需求，我们新增了银钻和金钻会员等级。会员用户将享有直连数据库、使用数据同步客户端、使用专属APP、超大数据容量等各种超值特权。</dd>
                                                                        <dt class="info-title">数据容量扩充</dt>
                                                                                        <dd class="info-content">所有免费用户数据容量已经从20M提升至了100M，让数据更好地服务于工作。</dd>
                                                                                                        <dt class="info-title">行业模板库</dt>
                                                                                                                        <dd class="info-content">针对不同行业的用户，贴心打造了行业数据模板。你只需要通过BDP的“替换数据”功能，将你的数据套用到模板数据中，即可让模板为你所用。</dd>
                                                                                                                                    </dl> -->
                        <p class="activity-intro">即日起，邀请2个好友即可免费享各种会员特权，已邀请的好友人数按最新规则算，奖励更多哦！快去召唤小伙伴吧~</p>
                        <p class="activity-intro mt8">活动截止时间: 2017年5月31日</p>
                        <div class="btn-learn-more" ng-click="toLearn()">立即参加</div>
                    </div>
                </div>
            </div>
        )
    }
}