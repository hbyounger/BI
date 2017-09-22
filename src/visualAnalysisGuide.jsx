/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/dashboard/tpl/visual-analysis-guide.html"
class VisualAnalysisGuide extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="visual-analysis-wrap animated fadeIn">
                <div class="visual-analysis J-va-guide">
                    <span class="bdp-icon-wrap close" ng-click="guideKnown()"><i class="bdp-icon ico-close-white"></i></span>
                    <div class="head J-va-head">
                        <p class="main-title"><strong>全新可视化分析功能上线</strong></p>
                        <p class="second-title J-va-s-title">在数据中抽丝剥茧，快速发现核心问题</p>
                    </div>
                    <div class="content J-va-content">
                        <div class="tab-hd">
                            <span class="tab-item" ng-class="{active: activeTab == 1}" ng-click="setActiveGuide(1)">快速筛选</span>
                            <span class="tab-item" ng-class="{active: activeTab == 2}" ng-click="setActiveGuide(2)">自由下钻</span>
                            <span class="tab-item" ng-class="{active: activeTab == 3}" ng-click="setActiveGuide(3)">数据详情</span>
                            <span class="tab-item" ng-class="{active: activeTab == 4}" ng-click="setActiveGuide(4)">单点查看</span>
                        </div>
                        <div class="tab-bd">
                            <div class="tab-content">
                                <img ng-src="/static/images/va-guide/va-guide-0{{activeTab}}.gif" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
    }
}