//BC.controllers.dashboard
function tplReplaceCtrl() {
    function e(e, t, a, i, n, r, o, s, l, d, c) {
        a.show_bdp_header = !1, e.back = function () {
            for (var t = 0, a = 0; a < e.tpl.tbList.length; a++) e.tpl.tbList[a].noLastModify && (t += 1);
            t ? d.openConfirm({
                template: "/static/partials/dialogTemplates/confirm-dialog.html",
                className: "ngdialog-theme-default ngDialog-width-300",
                scope: e,
                data: {
                    message: "还有" + t + "张模板数据表没有被替换过，确定返回吗？"
                }
            }).then(function () {
                i.path("/dash_edit/" + c.projId + "/" + c.dashId)
            }) : i.path("/dash_edit/" + c.projId + "/" + c.dashId)
        }, e.changeTb = function (t) {
            a.pageLoading = !0, o.tb.preview({
                tb_id: e.tpl.tbList[t].tbId
            }).then(function (i) {
                e.tbModel = e.tpl.tbList[t], e.tbModel.tbThead = i.schema, e.tbModel.tbTbody = i.data.splice(0, 25), e.tbModel.unshowIndex = {};
                for (var n = i.schema.length - 1; n >= 0; n--) i.schema[n].flag && (e.tbModel.unshowIndex[n] = !0);
                1 == i.status && (i.count > 0 && 0 == i.data.length ? (e.tpl.state = "fail", e.tpl.stateText = "工作表加载失败") : "fail" == e.tpl.state && (e.tpl.state = void 0, e.tpl.stateText = void 0)), 3 == i.status || 6 == i.status ? (e.tpl.state = "updateSuccess", e.tpl.stateText = "工作表正在更新，请耐心等待...") : 2 == i.status ? (e.tpl.state = "updateFail", e.tpl.stateText = "工作表更新失败，请联系客服") : e.tpl.state && (e.tpl.state = void 0, e.tpl.stateText = void 0), localStorage.setItem("TPL_LIBRARY_TBID", e.tpl.tbList[t].tbId), a.pageLoading = !1
            })
        }, e.toReplaceSheet = function (t) {
            e.tbModel.tbId && i.path("/page_upload/replace/" + e.tbModel.tbId)
        }, e.init = function () {
            e.tpl = {
                tplAciveIndex: 1,
                tplName: "运营模板",
                tbList: []
            }, e.tbModel = {};
            var t = {
                dsh_id: c.dashId
            };
            a.pageLoading = !0, o.tb.getTplExcel(t).then(function (t) {
                if (0 == t.status) {
                    var i = t.result;
                    e.tpl.tplName = i.name;
                    for (var n = 0, r = i.tb_list.length; n < r; n++) i.tb_list[n].ex_list.tpl && e.tpl.tbList.push({
                        tbName: i.tb_list[n].title,
                        tbId: i.tb_list[n].tb_id,
                        exList: i.tb_list[n].ex_list,
                        lastModifyTime: i.tb_list[n].ex_list.add_by_user.length > 0 ? i.tb_list[n].ex_list.add_by_user[0].time : void 0,
                        lastModifyName: i.tb_list[n].ex_list.add_by_user.length > 0 ? i.tb_list[n].ex_list.add_by_user[0].name : void 0,
                        noLastModify: !(i.tb_list[n].ex_list.add_by_user.length > 0)
                    });
                    for (var o = 0, n = 0; n < e.tpl.tbList.length; n++) e.tpl.tbList[n].tbId == localStorage.getItem("TPL_LIBRARY_TBID") && (o = n);
                    e.changeTb(o)
                }
                a.pageLoading = !1
            })
        }, e.init()
    }
    angular.module("BC.controllers.dashboard")
        .controller("tplReplaceCtrl", e),
        e.$inject = ["$scope", "commonHttp", "$rootScope", "$location", "$timeout", "warnOperatorMap", "commonService", "errHint", "$filter", "ngDialog", "$stateParams"]
};
