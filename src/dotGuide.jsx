/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/common/tpl/guide/dot_guide.html"
class DotGuide extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div ng-if="watchStatus == dotGuideData[guideItem].guideNum">
                <div class="dot-guide" ng-hide="dotMask == true || !dotGuideData[guideItem].tooltipText" ng-click="clickShowInfo()">
                    <!-- {{showDotGuideTip}} -->
                </div>
                <div class="circle-group" ng-click="guideItem == 'drillChart' ? clickShowInfo() : null" ng-class="{'cursor-pointer': guideItem == 'drillChart'}"><!--  ng-click="clickShowInfo()" -->
                    <div class="circle4"></div>
                    <div class="circle3"></div>
                    <div class="circle2"></div>
                    <div class="circle1"></div>
                </div>
                <div class="dot-guide-tip J_dash_dot_guide" ng-show="showDotGuideTip == true && dotGuideData[guideItem].tooltipText">
                    <p class="dot-guide-tip-text" ng-bind-html="dotGuideData[guideItem].tooltipText | toSce"></p>
                    <div class="tip-operate clearfix">
                        <div class="see-help" ng-show="dotGuideData[guideItem].videoSrc">
                            <span class="" ng-click="seeHelpVideo();showDotVideo = true">
                                <i class="bdp-icon ico-help"></i>
                                <span class="ico-help-text">{{'operatorHelp'|translate}}</span>
                            </span>
                        </div>
                        <div class="know-and-close" ng-click="iKnowClick()">知道了</div>
                    </div>
                </div>
            </div>
        )
    }
}