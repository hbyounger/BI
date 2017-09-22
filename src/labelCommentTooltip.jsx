/**
 * Created by yangke on 2017/9/22.
 */

import React,{Component} from "React"

//"/static/js/common/tpl/directive/labelCommentTooltip.html"
class LabelCommentTooltip extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="tooltip {{placement}} tooltip-bg-white bdp-tips label-comment-tooltip" ng-class="{ in: isOpen(), fade: animation() }" ng-show="!!content.name || (!!content.origin_name && content.origin_name != content.name) || !!content.owner_name || !!content.label || !!content.comment || !!content.share_name || !!content.rule_user">
                <div class="tooltip-inner">
                    <div class="box">
                        <div class="tooltip-block" ng-show="!!content.name">
                            <span>{{'name' | translate}}</span>
                            <span>{{content.name}}</span>
                        </div>
                        <div class="tooltip-block mt4" ng-show="!!content.origin_name && content.origin_name != content.name">
                            <span>{{'wb.worktableOriginalName' | translate}}</span>
                            <span>{{content.origin_name}}</span>
                        </div>
                        <div class="tooltip-block mt4" ng-show="!!content.label">
                            <span>{{'label' | translate}}</span>
                            <span>{{content.label}}</span>
                        </div>
                        <div class="tooltip-block mt4" ng-show="!!content.comment">
                            <span>{{'comment' | translate}}</span>
                            <span>{{content.comment}}</span>
                        </div>
                        <div class="tooltip-block mt4" ng-show="!!content.share_name">
                            <span>{{'dash.sharedFrom' | translate}}</span>
                            <span>{{content.share_name}}</span>
                        </div>
                        <div class="tooltip-block mt4" ng-show="!!content.rule_user">
                            <span>{{'dash.allocatedFrom' | translate}}</span>
                            <span>{{content.rule_user}}</span>
                        </div>
                        <div class="tooltip-block mt4" ng-show="!!content.owner_name">
                            <span>{{'wb.sharedFrom' | translate}}</span>
                            <span>{{content.owner_name}}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}