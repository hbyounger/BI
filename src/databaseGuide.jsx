/**
 * Created by yangke on 2017/9/22.
 */
import React,{Component} from "React"

//"/static/js/common/tpl/guide/database_guide.html"
class DatabaseGuide extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div class="database-view guide-page" ng-if="showGuide">

                    <div class="nav" ng-if="[3].indexOf(guide) != -1"><span>数据源</span></div>
                    <div class="dashed pa" ng-if="[3].indexOf(guide) != -1"></div>
                    <div class="init-guide pr" ng-if="[3].indexOf(guide) != -1">
                        <div class="db-guide-init"></div>
                        <i class="close-init pa opacity6" ng-click="closeInit()"></i>
                        <a class="btn-blue pa font-size-14 font-w-b cursor-pointer" ng-click="gotoDataSource()"><span class="font-w-b">立即体验</span></a>
                    </div>
                    <div class="statistics-layer pr" ng-if="viewGuide == 'guide-step1'">
                        <ul>
                            <li class="pr">
                                <div class="box">
                                    <span class="mb4">全部</span>
                                    <b>21</b>
                                </div>
                            </li>
                            <li>
                                <div class="box box-other">
                                    <span class="mb4">已完成</span>
                                    <b>12</b>
                                </div>
                            </li>
                            <li>
                                <div class="box box-other">
                                    <span class="mb4">正在运行</span>
                                    <b>3</b>
                                </div>
                            </li>
                            <li>
                                <div class="box box-other">
                                    <span class="cr-hint mb4">失败</span>
                                    <b>3</b>
                                </div>
                            </li>
                            <li>
                                <div class="box box-other">
                                    <span class="mb4">停用</span>
                                    <b>3</b>
                                </div>
                            </li>
                        </ul>
                        <div class="db-guide-tooltip center pr">
                            <div class="triangle-up"></div>
                            全局状态筛选，已有数据源概况一览无余。
                            <span class="pa guide-step1">1/4</span>
                            <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="goOn('guide-step2')">继续</a>

                        </div>
                    </div>
                    <div class="guide-main mt16 no-padding">
                        <div class="view-side-list pt16 pr" ng-if="viewGuide == 'guide-step2'">
                            <div class="db-guide-tooltip pa guide-tip2">
                                <div class="triangle-up head-left"></div>
                                局部类型筛选与搜索，配合状态筛选，快速找到目标数据源，可搜索源标签搜索。
                                <span class="pa guide-step1">2/4</span>
                                <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="goOn('guide-step3')">继续</a>
                            </div>
                            <div class="list-masking pa" style="width: 200px;height: 200px;z-index: 9999"></div>
                            <div class="view-list-header pl16 pr">
                                <span class="title">我的数据源</span>
                                <div class="search-bar pa">
                                    <i class="bdp-icon ico-search cursor-pointer"></i>
                                </div>
                            </div>
                            <div class="view-list-body">
                                <ul>
                                    <li class="active pl24">全部</li>
                                    <li class="pl24">
                                        MySQL</li>
                                    <li class="pl24">百度实况</li>
                                    <li class="pl24">百度搜索推广</li>
                                </ul>
                            </div>
                        </div>
                        <div class="view-main-body pt16 pr24 pr" style="top: 210px;overflow: initial" id="table_list" ng-if="viewGuide == 'guide-step3'">
                            <div class="db-guide-tooltip pa guide-tip3">
                                <div class="triangle-up head-bottom"></div>
                                <!-- 数据源列表新面貌，鼠标移动至上方显示相关操作、类型及详细时间，点击数据源名称可查看同步记录和其下工作表的使用情况。 -->
                                简洁的数据源列表，鼠标移动至数据源上方，显示相关操作、提示信息，删除支持直接删除数据源及其下工作表；点击数据源名称可查看同步记录和其下工作表的使用情况。
                                <span class="pa guide-step1">3/4</span>
                                <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="goOn('guide-step4')">继续</a>
                            </div>
                            <div class="masking2"></div>
                            <table class="bdp-table-normal w100 database-table">
                                <thead>
                                <tr>
                                    <th class="db-name cursor-pointer">名称</th>
                                    <th class="cursor-pointer db-status">状态</th>
                                    <th class="cursor-pointer db-sync-time">最近同步时间</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td class="pr">
                                        <img ng-src="/static/images/s-logo.png" width="40" class="fl"/>
                                        <div class="database-table-name pr">
                                            <div>
                                                <a class="ds-name">我的数据源1</a>
                                                <span class="display-block tag-label">#标签1#</span>
                                            </div>
                                            <div class="operate-layer pa" style="display: block">
                                                <a class="bdp-btn-blue cursor-pointer">详情配置</a>
                                                <a class="bdp-btn-blue cursor-pointer">同步</a>
                                                <a class="bdp-btn-blue cursor-pointer">合并</a>
                                                <a class="bdp-btn-blue cursor-pointer">删除</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>正在运行</span>
                                    </td>
                                    <td>
                                        <span>一天前</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pr">
                                        <img ng-src="/static/images/s-logo.png" width="40" class="fl">
                                            <div class="database-table-name pr">
                                                <div class="line-height-40">
                                                    <a class="ds-name">我的数据源2</a>
                                                </div>
                                            </div>
                                    </td>
                                    <td>
                                        <span class="cr-hint">失败:余额不足，请充值</span>
                                    </td>
                                    <td>
                                        <span>一天前</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pr">
                                        <img ng-src="/static/images/s-logo.png" width="40" class="fl">
                                            <div class="database-table-name pr">
                                                <div>
                                                    <a class="ds-name">我的数据源3</a>
                                                    <span class="display-block tag-label">#标签1#</span>
                                                </div>
                                            </div>
                                    </td>
                                    <td>
                                        <span>正在运行</span>
                                    </td>
                                    <td>
                                        <span>一天前</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="pr">
                                        <img ng-src="/static/images/s-logo.png" width="40" class="fl"/>
                                        <div class="database-table-name pr">
                                            <div class="line-height-40">
                                                <a class="ds-name">我的数据源4</a>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <span>正在运行</span>
                                    </td>
                                    <td>
                                        <span>一天前</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div ng-if="viewGuide == 'guide-step4'">
                        <div class="btn-layer">
                            <a class="nowrap add">
                                <i class="bdp-icon ico-add-database ico-opacity"></i>
                                <span class="pr ml4">
                    {{ 'ds.adddatasource' | translate }}
                    </span>
                            </a>
                            <div class="db-guide-tooltip pa guide-tip4">
                                <div class="triangle-up head-top"></div>
                                全新的数据源列表页，全面直观浏览全部可用数据源，优化了添加流程，操作更加便捷。
                                <span class="pa guide-step1">4/4</span>
                                <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="quit()">我知道了</a>
                            </div>
                        </div>
                    </div>
                    <div ng-if="viewGuide == 'guide-step5'">
                        <div class="block-beta pa"><i class="ico-beta"></i></div>
                        <div class="db-guide-tooltip pa guide-tip5">
                            <div class="triangle-up head-bottom1"></div>
                            <p class="font-size-14 mb8 font-w-b">公开试用</p>
                            带有BETA标识数据源为最近上线，由于第三方限制，可能会偶尔同步失败或延迟，BDP会结成推动第三方优化，稳定后将自动升级为正式服务。
                            <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="quit()">我知道了</a>
                        </div>
                    </div>
                    <div ng-if="viewGuide == 'guide-step6'">
                        <div class="guide-usage pa" ng-style="style">
                            <div class="db-guide-tooltip pa guide-tip6">
                                <div class="triangle-up head-right"></div>
                                <p class="font-size-14 mb8 font-w-b">使用说明</p>
                                可以在右侧查看数据源配置的所需信息，帮助你快速完成添加配置。
                                <a class="pa know1 font-size-14 cursor-pointer" ng-click="quit()">我知道了</a>
                            </div>
                            <div class="mg24" style="overflow: auto">
                                <p class="form-desc-title mb16 font-w-b">使用说明</p>
                                <dl ng-repeat="it in descInfo" class="mb8">
                                    <dt>{{it.name[language]}}</dt>
                                    <dd ng-bind-html="it.desc[language] | htmlFilter"></dd>
                                </dl>
                            </div>
                        </div>
                    </div>
                    <a class="quit pa font-underline cursor-pointer" ng-click="quit('quit')" ng-if="showGuide && [3].indexOf(guide) == -1">退出引导</a>
                </div>
                <div ng-if="showManualSync" class="database-view guide-page">
                    <div class="view-main-body" style="margin-top:277px">
                        <table class="bdp-table-normal w100 db-guide-table">
                            <tr>
                                <td width="55%">
                                    <div class="bdp-btn-blue display-inline-block pr fr mt16" style="margin-right:40px">
                                        <a class="display-block">{{'ds.dsSync' | translate}}</a>
                                        <div class="db-guide-tooltip center pa text-left" style="left:-128px;top:38px">
                                            <div class="triangle-up"></div>
                                            {{'ds.guide.manualSync' | translate}}
                                            <a class="pa know1 font-size-14 cursor-pointer font-w-b" ng-click="closeManualSyncGuide()">{{'close' | translate}}</a>
                                        </div>
                                    </div>
                                </td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}