/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/markPointTooltip.html"
class MarkPointTooltip extends Component {
    constructor() {
        super();
    }
    setTooltipPos = ($event, item) => {
        item.show = !0;
        item.popover = {};
        item.pos.top < 15 || "edit" === e.mode && item.pos.top < 40 ? item.popover.pos = "bottom" : item.popover.pos = "top"
    }
    render() {
        return (
            <div class="mark-point-wrap">
                <div ng-repeat="item in markPoints" class="hchart-mark-point" style="left:{{item.pos.left}}px;top:{{item.pos.top}}px">
                    <i class="bdp-icon ico-comment" ng-click="setTooltipPos($event, item)" ng-show="!item.show"></i>
                    <div class="popover mark-point-tooltip" ng-class="{top: item.popover.pos === top,bottom: item.popover.pos === bottom,}" ng-show="item.show" ng-style="item.posStyle">
                        <i class="bdp-icon ico-cancel close" title="{{close|translate}}" ng-click="item.show=false"></i>
                        <div class="popover-inner">
                            <div class="popover-content" ng-style="item.widthStyle">
                                <div class="tooltip-hd text-left" ng-if="mode==edit">
                                    {{chart.markPoint | translate}}
                                </div>
                                <div class="tooltip-bd text-left" ng-bind="item.pointModel.comment"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}