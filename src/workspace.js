//BC.controllers.workspace
function workSpace() {
    //workspaceCtrl
    //"$scope", "$rootScope", "commonHttp", "errHint", "$jsTipTranslate", "ngDialog", "commonService", "$filter", "multipleProService"
    function workspaceCtrl($scope, t, a, i, n, r, o, s, l) {
        function d($scope, t, a) {
            function i($scope, o, s) {
                ($scope || []).forEach(function ($scope, l) {
                    "dashboard" === $scope.attribute && (!t || t && $scope.check) ? (n[s] || (n[s] = {
                        attribute: "project",
                        name: o.name,
                        proj_id: o.proj_id
                    }, n[s][a] = []), n[s][a].push({
                        dsh_id: $scope.dsh_id,
                        name: $scope.name,
                        attribute: "dashboard"
                    })) : "project" === $scope.attribute && (r++, i($scope.subs, e, r))
                })
            }
            var n = [],
                r = 0;
            return i($scope, null, r), _.compact(n)
        }

        function c(e) {
            angular.forEach(M.worktableList, function (t, a) {
                angular.forEach(t.tb_list, function (i, n) {
                    i.tb_id == e && (t.tb_list.splice(n, 1), 0 == t.tb_list.length && M.worktableList.splice(a, 1))
                })
            })
        }

        function p(e) {
            angular.forEach(M.dashList, function (t, a) {
                angular.forEach(t.subs, function (i, n) {
                    i.dsh_id == e && t.subs.splice(n, 1), 0 == t.subs.length && M.dashList.splice(a, 1)
                })
            })
        }

        function u($scope, t, a, i) {
            var i = "folderList" == i ? "folderList" : "projList",
                n = "folderList" == i ? "tb_list" : "subs",
                r = F[i][t],
                o = r[n];
            if ("folderList" == i ? void 0 !== o.selected ? o[a].selected = e : e ? o[a].add = !0 : (c(o[a].tb_id), delete o[a].add) : e || p(o[a].dsh_id), e) {
                var s = 0;
                angular.forEach(o, function (e) {
                    $scope.check && s++
                }), s == o.length && (r.check = e)
            } else {
                if (!r.check) return;
                r.check = e
            }
        }

        function h($scope, t, a) {
            var i = "folderList" == a ? "tb_list" : "subs";
            angular.forEach(F[a][t][i], function (t) {
                t.disable || (t.check = $scope, t.check ? t.add = !0 : t.add && ("folderList" == a ? c(t.tb_id) : p(t.dsh_id), delete t.add))
            })
        }

        function f() {
            function t(t) {
                r.open({
                    template: "/static/partials/dialogTemplates/add-dashboard.html",
                    className: "ngdialog-theme-default ngDialog-width-700",
                    scope: e
                })
            }
            F.projList ? t() : C().then(function (e) {
                var a = [];
                angular.forEach($scope.proj, function (e) {
                    0 == $scope.type && 0 == $scope.property && a.push(e)
                }), F.projList = angular.copy(a), l.initDeep(F.projList, 0), t()
            })
        }

        function g() {
            function t(t) {
                r.open({
                    template: "/static/partials/dialogTemplates/add-worktable.html",
                    className: "ngdialog-theme-default ngDialog-width-700",
                    scope: $scope,
                    data: {
                        init: !!t
                    },
                    controller: "addWorktableCtrl"
                })
            }
            F.originFolderList ? (F.folderList = angular.copy(F.originFolderList), t()) : x().then(function (e) {
                0 == $scope.status && ($scope.result.map(function (e) {
                    $scope.name || ($scope.name = "根目录")
                }), F.folderList = function (e) {
                    function t($scope, i, n) {
                        $scope.sub_folders && $scope.sub_folders.length > 0 && a($scope.sub_folders, t), 0 != $scope.tb_list.length || $scope.sub_folders && 0 != $scope.sub_folders.length || n.splice(i, 1)
                    }
                    var a = bdp.utils.descMap;
                    return a($scope, t), e
                }($scope.result), F.originFolderList = angular.copy(F.folderList), t("initData"))
            })
        }

        function m(t, a) {
            if ("create" == t) return F.list.push(a), void $scope.$emit("userInfoChange", "change");
            for (var i = F.list, n = 0, r = i.length; n < r; n++) i[n].ws_id == a.ws_id && (i[n].name = a.name);
            $scope.$emit("userInfoChange", "change")
        }

        function v() {
            function e(i) {
                angular.forEach(i, function (i) {
                    i.checked && (t.push(i.group_id), a.push(i)), i.group_list && i.group_list.length > 0 && e(i.group_list)
                })
            }
            var t = [],
                a = [];
            return e(F.groupTree), {
                groupIds: t,
                groupList: a
            }
        }

        function b() {
            C().then(function (e) {
                F.projAllList = angular.copy($scope.proj)
            })
        }

        function y(a) {
            $scope.getInfoLoading = !0, i("正在请求信息，请稍等"), F.curWorkspace = a, F.projAllList || b(), o.workspace.info({
                ws_id: a
            }).then(function (a) {
                if ($scope.getInfoLoading = !1, $scope.pageLoading = !1, 0 == a.status) {
                    t.global.hint = "";
                    var i = a.result;
                    l.initDeep(i.proj_list, 0), M.dashList = i.proj_list, M.worktableList = i.folder_list, M.originalworktableList = angular.copy(i.folder_list), M.groupList = i.group_list.list, M.groupListAll = i.group_list.is_all, w(), angular.forEach(i.authority_info, function (e) {
                        $scope.admin && ($scope.admin = !0), $scope.rule && ($scope.rule = !0), ($scope.dash_list.is_all || $scope.dash_list.proj_list && $scope.dash_list.proj_list.length > 0) && ($scope.dash_list.check = !0), ($scope.tb_list.is_all || $scope.tb_list.tb_list && $scope.tb_list.tb_list.leghth > 0) && ($scope.tb_list.check = !0)
                    }), M.authorityInfo = i.authority_info, F.showTitle = a.result.name || "", F.authority = {}
                }
            })
        }

        function w() {
            var e = {};
            M.worktableList.map(function (t, a) {
                var i = {
                    index: a
                };
                t.sub_folders && t.sub_folders.length > 0 && (i.sub_folders = {}, t.sub_folders.map(function ($scope, n) {
                    i.sub_folders[$scope.name] = {
                        subIndex: n,
                        parentFolder: t.name,
                        parentIndex: a
                    }
                })), e[t.name ? t.name : "根目录"] = i
            }), M.folderInfo = e
        }

        function C() {
            var e = {
                categories: angular.toJson([0, 2])
            };
            return o.project.getTree(e)
        }

        function x(e) {
            var t = {
                ws_id: F.curWorkspace
            };
            return "preview" !== e && (t.is_all = !0), o.workspace.tbListPreview(t)
        }

        function k(t) {
            $scope.pageLoading = !0, o.workspace.workspaceLog(t).then(function (t) {
                0 == t.status ? ($scope.pageLoading = !1, $scope.operateLogView.logData = t.result.log, angular.forEach($scope.operateLogView.logData, function (e) {
                    $scope.c_time = s("date")($scope.c_time, "yyyy-MM-dd HH:mm:ss")
                }), $scope.operateLogView.count = t.result.count, $scope.operateLogView.total_page = parseInt($scope.operateLogView.count / 100), $scope.operateLogView.count % O > 0 && $scope.operateLogView.total_page++) : i(Number(t.status))
            })
        }

        function D(e) {
            return o.workspace.delete({
                ws_id: e
            })
        }

        function S(e) {
            return o.workspace.modifyDashList(e)
        }

        function T(e) {
            return o.workspace.modifyTableList(e)
        }

        function I() {
            return o.user.groupList()
        }

        function L(e) {
            return o.workspace.modifyGroupList(e)
        }

        function A(e) {
            return o.workspace.modifyAuthority(e)
        }

        function E(e) {
            return o.workspace.userList(e)
        }
        t.view = "workspace", t.show_bdp_header = !0, $scope.workspaceTab = "workspaceSetting", $scope.workspaceView = {
            view: "cat",
            projList: null,
            list: [],
            curWorkspace: "",
            showPermisionUserList: !1,
            authority: {},
            showTitle: "",
            initView: !0
        }, $scope.workspaceData = {
            projList: null,
            worktableList: null
        };
        var F = $scope.workspaceView,
            M = $scope.workspaceData;
        ! function () {
            o.workspace.list().then(function (t) {
                if (0 == t.status && (F.initView = !1, F.list = t.result, F.list.length > 0)) {
                    var a = j.getItem("current_workspace_id") || "",
                        i = {},
                        n = !1;
                    if (a ? angular.forEach(F.list, function (e) {
                            $scope.ws_id == a && (n = !0, i = e)
                        }) : n = !1, n) F.curWorkspace = i.ws_id, F.admin = i.admin;
                    else {
                        var r = t.result[0];
                        F.curWorkspace = r.ws_id, F.admin = r.admin
                    }
                    $scope.pageLoading = !0, y(F.curWorkspace)
                }
            })
        }(), $scope.changeTab = function (t) {
            "workspaceSetting" == t ? ($scope.workspaceTab = "workspaceSetting", F.view = "cat", y(F.curWorkspace)) : "operateLog" == t && ($scope.workspaceTab = "operateLog", $scope.operateLog.info(F.curWorkspace))
        };
        var j = window.localStorage;
        $scope.workspace = {
            info: function (t) {
                F.folderList = null, F.admin = t.admin, F.view = "cat", $scope.workspaceTab = "workspaceSetting", $scope.pageLoading = !0, j.setItem("current_workspace_id", t.ws_id), y(t.ws_id)
            },
            addWorkspace: function () {
                F.mode = "create", F.workspaceName = "", r.open({
                    templateUrl: "/static/partials/dialogTemplates/create_workspace.html",
                    scope: $scope,
                    className: "ngdialog-theme-default ngdialog-small"
                })
            },
            createWorkspace: function (e) {
                if (!e) return void i("请输入名称");
                var t = !1;
                if (angular.forEach(F.list, function (a) {
                        a.name.toLocaleLowerCase() == $scope.toLocaleLowerCase() && (t = !0)
                    }), t) return void i("该名称的工作区已存在，请重新输入");
                o.workspace.create({
                    name: e
                }).then(function (t) {
                    if (0 == t.status) {
                        var a = t.result,
                            i = {
                                ws_id: a,
                                name: $scope,
                                admin: 0
                            };
                        m("create", i), F.curWorkspace = i.ws_id, y(i.ws_id), F.mode = "cat", F.admin = 0, r.closeAll()
                    }
                })
            },
            modifyWorkspace: function (t, a) {
                var n = !1;
                if (angular.forEach(F.list, function (e) {
                        $scope.ws_id != t && $scope.name == a && (n = !0)
                    }), n) return void i("该名称的工作区已存在，请重新输入");
                var r = {
                    ws_id: t,
                    name: a
                };
                return o.workspace.modify(r).then(function (t) {
                    0 == t.status && (i("修改成功"), $scope.workspaceView.showTitle = a, m("update", r))
                }), a
            },
            deleteWorkspace: function (a) {
                confirm("确定要删除改工作区？") && ($scope.pageLoading = !0, D(a).then(function (n) {
                    if (0 == n.status) {
                        i("删除成功");
                        for (var r, o = 0, s = F.list.length; o < s; o++)
                            if (F.list[o].ws_id == a) {
                                r = o;
                                break
                            }
                        F.list.splice(r, 1), a == F.curWorkspace && F.list.length > 0 && y(F.list[0].ws_id), $scope.$emit("userInfoChange", "change"), t.last_dash_path && t.last_dash_path.indexOf(a) >= 0 && (t.last_dash_path = ""), t.last_worktable_path && t.last_worktable_path.indexOf(a) >= 0 && (t.last_worktable_path = ""), t.last_template_path && t.last_template_path.indexOf(a) >= 0 && (t.last_template_path = ""), t.wsId == a && (t.wsId = "")
                    } else i(Number(n.status));
                    $scope.pageLoading = !1
                }))
            }
        }, $scope.dash = {
            add: function () {
                f()
            },
            cancel: function () {
                y(F.curWorkspace), F.view = "cat"
            },
            projChange: function (e) {
                h(F.projList[e].check, $scope, "projList")
            },
            del: function ($scope, t, a) {
                M.dashList[t].subs.splice(a, 1), angular.forEach(F.projList, function (t) {
                    angular.forEach(t.subs, function (a) {
                        a.dsh_id == e && (a.check = !1, t.check = !1)
                    })
                })
            },
            dshChange: function ($scope, t) {
                var a = F.projList[e].subs[t].check;
                F.projList[e].subs[t];
                u(a, $scope, t, "projList")
            },
            confirmAdd: function () {
                $scope.newAddList = d(F.projList, !0, "subs"), $scope.chooseDashObj = [].concat(M.dashList, $scope.newAddList), M.dashList = angular.copy($scope.chooseDashObj), l.initDeep(M.dashList, 0), r.closeAll()
            },
            save: function () {
                if (!$scope.chooseDashObj) return $scope.dash.cancel(), !1;
                if (0 == M.dashList.length) return void i("请选择至少一个仪表盘");
                if (confirm("移入此工作区的仪表盘将从超级管理员的仪表盘中移除，是否继续？")) {
                    $scope.pageLoading = !0;
                    var a = d($scope.chooseDashObj, !1, "dsh_list");
                    S({
                        ws_id: F.curWorkspace,
                        proj_list: angular.toJson(a)
                    }).then(function (a) {
                        $scope.pageLoading = !1, 0 == a.status && (F.projList = null, x("preview").then(function (e) {
                            if (0 == $scope.status) {
                                if (t.last_dash_path) var a = t.last_dash_path.replace(/\/dash.*\//, "");
                                if (a) {
                                    var n = !1;
                                    angular.forEach(M.dashList, function (e) {
                                        angular.forEach($scope.subs, function (e) {
                                            $scope.dsh_id == a && (n = !0)
                                        })
                                    }), n && (t.last_dash_path = "")
                                }
                                i("保存成功"), y(F.curWorkspace), F.view = "cat"
                            }
                        }))
                    })
                }
            }
        }, $scope.worktable = {
            add: function () {
                g()
            },
            cancel: function () {
                y(F.curWorkspace), F.view = "cat", F.folderList = null
            },
            save: function () {
                $scope.pageLoading = !0, T({
                    ws_id: F.curWorkspace,
                    folder_list: angular.toJson(M.worktableList)
                }).then(function (t) {
                    $scope.pageLoading = !1, 0 == t.status && (i("修改成功"), F.view = "cat", y(F.curWorkspace))
                }), F.folderList = null
            },
            folderChange: function (e) {
                h(F.folderList[e].check, e, "folderList")
            },
            tbChange: function (e, t) {
                u(F.folderList[e].tb_list[t].check, e, t, "folderList")
            }
        }, $scope.user = {
            checkAll: function () {
                var e = F.groupListAll;
                angular.forEach(F.groupList, function (t) {
                    t.check = e
                })
            },
            groupChange: function (e) {
                if (e) {
                    var t = 0;
                    angular.forEach(F.groupList, function (e) {
                        $scope.check && t++
                    }), t == F.groupList.length ? F.groupListAll = !0 : F.groupListAll = !1
                } else F.groupListAll = !1
            },
            modify: function () {
                var e = M.groupList;
                I().then(function (t) {
                    function a(e) {
                        angular.forEach(e, function (e) {
                            i.indexOf($scope.group_id) >= 0 && ($scope.checked = !0), $scope.group_list && $scope.group_list.length > 0 && a($scope.group_list)
                        })
                    }
                    if (0 == t.status) {
                        F.view = "users", F.groupTree = t.result;
                        var i = [];
                        angular.forEach(e, function (e) {
                            i.push($scope.group_id)
                        }), a(F.groupTree), F.groupRange = M.groupListAll
                    }
                })
            },
            save: function () {
                var t = F.groupRange;
                if (0 == t) {
                    var a = v();
                    if (0 == a.groupIds.length) return void i("请至少选择一个分组")
                }
                var n = {
                    ws_id: F.curWorkspace
                };
                1 == t ? n.is_all = 1 : n.group_list = angular.toJson(a.groupIds), $scope.pageLoading = !0, L(n).then(function (n) {
                    $scope.pageLoading = !1, 0 == n.status && (M.groupList = 1 == t ? [] : a.groupList, F.view = "cat", F.userList = null, y(F.curWorkspace), i("保存成功"))
                })
            },
            cancel: function () {
                y(F.curWorkspace), F.view = "cat"
            }
        }, $scope.authority = {
            checkGroupList: function () {
                M.groupListAll || 0 != M.groupList.length ? F.view = "authorityInfo" : i("请优先添加需要管理的用户组")
            },
            showUserList: function () {
                F.showPermisionUserList = !0, F.userList || ($scope.showLoading = !0, E({
                    ws_id: F.curWorkspace
                }).then(function (t) {
                    0 == t.status && (F.userList = t.result, $scope.showLoading = !1)
                }))
            },
            addUser: function (e) {
                if (M.authorityInfo || (M.authorityInfo = []), M.authorityInfo.length > 0) {
                    var t = !1;
                    if (angular.forEach(M.authorityInfo, function (a) {
                            a.user_id == $scope.user_id && (t = !0)
                        }), t) return i("该用户已添加"), void(F.showPermisionUserList = !1)
                }
                M.authorityInfo.push({
                    user_id: $scope.user_id,
                    name: $scope.name,
                    dash_list: {
                        is_all: 0,
                        check: !1
                    },
                    tb_list: {
                        is_all: 0,
                        check: !1
                    },
                    rule: 0,
                    admin: 0
                }), F.showPermisionUserList = !1
            },
            del: function (e) {
                M.authorityInfo.splice(e, 1)
            },
            modify: function () {
                F.view = "cat"
            },
            dashChange: function (e) {
                var t = M.authorityInfo[e],
                    a = t.dash_list.check;
                t.dash_list.is_all = a ? 1 : 0, a ? t.dash_list.proj_list = [] : t.admin = !1
            },
            tbChange: function (e) {
                var t = M.authorityInfo[e],
                    a = t.tb_list.check;
                t.tb_list.is_all = a ? 1 : 0, t.tb_list.tb_list = [], a || (t.admin = !1)
            },
            setAdmin: function (e) {
                var t = this;
                t._index = e;
                var a = M.authorityInfo[t._index],
                    i = a.admin;
                a.dash_list.is_all = i ? 1 : 0, a.dash_list.check = i, a.dash_list.proj_list = [], a.tb_list.is_all = i ? 1 : 0, a.tb_list.check = i, a.tb_list.tb_list = [], a.rule = i
            },
            ruleChange: function (e) {
                var t = this;
                t._index = e;
                var a = M.authorityInfo[t._index];
                a.rule || (a.admin = !1)
            },
            _index: 0,
            userId: "",
            showDashDialog: function (t, a, i, n) {
                i.stopPropagation();
                var o = this;
                o._index = a, o.userId = t.user_id;
                var s = F.authority,
                    l = function (e) {
                        function t(e, t) {
                            angular.forEach(n, function (a) {
                                a.proj_id == e && (a.show = !0, "number" == typeof t ? a.is_all = 1 : (a.is_all = 0, angular.forEach(a.subs, function (e) {
                                    $.inArray($scope.dsh_id, t) > -1 && ($scope.check = !0)
                                })))
                            })
                        }
                        var a = M.authorityInfo[o._index],
                            i = a.dash_list,
                            n = angular.copy(e);
                        return $.isEmptyObject(i) || 1 == i.is_all && (!i.proj_list || 0 == i.proj_list.length) ? (angular.forEach(n, function (e) {
                            $scope.is_all = 0
                        }), n) : 0 == i.is_all ? (i.proj_list.length > 0 && angular.forEach(i.proj_list, function (e) {
                            1 != $scope.is_all ? t($scope.proj_id, $scope.dash_list) : t($scope.proj_id, 1)
                        }), angular.forEach(n, function (e) {
                            $scope.hasOwnProperty("is_all") || ($scope.is_all = 0)
                        }), n) : n
                    }(d(M.dashList, !1, "subs"));
                s[o.userId] ? s[o.userId].dash || (s[o.userId].dash = l) : (s[o.userId] = {}, s[o.userId].dash = l),
                    function () {
                        r.open({
                            template: "/static/partials/dialogTemplates/ws-choose-dashboard.html",
                            className: "ngdialog-theme-default ngDialog-width-700",
                            scope: e,
                            data: {
                                user_id: o.userId,
                                index: o._index,
                                mode: "cat" == n ? "cat" : "modify"
                            }
                        })
                    }()
            },
            chooseDash: function (e) {
                if ("cat" == e) return void r.closeAll();
                var t = this,
                    a = t._index,
                    n = t.userId,
                    o = F.authority[n].dash,
                    s = [];
                angular.forEach(o, function (e) {
                    if (Number($scope.is_all)) s.push({
                        is_all: 1,
                        proj_id: $scope.proj_id
                    });
                    else {
                        s.push({
                            is_all: 0,
                            proj_id: $scope.proj_id
                        });
                        var t = s.length;
                        angular.forEach($scope.subs, function (e) {
                            $scope.check && (s[t - 1].dash_list || (s[t - 1].dash_list = []), s[t - 1].dash_list.push($scope.dsh_id))
                        })
                    }
                });
                for (var l = s.length - 1; l >= 0;) 0 != s[l].is_all || s[l].dash_list || s.splice(l, 1), l--;
                if ("cat" != e && 1 != M.authorityInfo[a].dash_list.is_all && 0 == s.length) return void i("未选择仪表盘");
                M.authorityInfo[a].dash_list.proj_list = s, r.closeAll()
            },
            showTbDialog: function (t, a, i, n) {
                i.stopPropagation();
                var o = this;
                o._index = a, o.userId = t.user_id,
                    function () {
                        r.open({
                            template: "/static/partials/dialogTemplates/ws-choose-worktable.html",
                            className: "ngdialog-theme-default ngDialog-width-700",
                            scope: e,
                            data: {
                                user_id: o.userId,
                                index: o._index,
                                mode: "cat" == n ? "cat" : "modify"
                            },
                            controller: "authorityWorkTableCtrl"
                        })
                    }()
            },
            save: function () {
                if ($scope.pageLoading) return !1;
                $scope.pageLoading = !0;
                var t = function () {
                    var e = [];
                    return angular.forEach(M.authorityInfo, function (t) {
                        if (t.dash_list.check || t.tb_list.check || t.admin || t.rule) {
                            var a = {
                                dash_list: {},
                                tb_list: {}
                            };
                            a.user_id = t.user_id, a.admin = t.admin ? 1 : 0, a.rule = t.rule ? 1 : 0, a.dash_list.is_all = t.dash_list.is_all, t.dash_list.check ? 0 == a.dash_list.is_all && (a.dash_list.proj_list = t.dash_list.proj_list || []) : a.dash_list.proj_list = [], a.tb_list.is_all = t.tb_list.is_all, a.tb_list.is_all = t.tb_list.is_all, t.tb_list.check ? a.tb_list.is_all && (a.tb_list.tb_list = t.tb_list.tb_list || []) : a.tb_list.tb_list = [], $scope.push(a)
                        }
                    }), e
                }();
                A({
                    ws_id: F.curWorkspace,
                    authority_info: angular.toJson(t)
                }).then(function (t) {
                    $scope.pageLoading = !1, 0 == t.status && (i("保存成功"), F.view = "cat", y(F.curWorkspace))
                })
            },
            cancel: function () {
                y(F.curWorkspace), F.view = "cat"
            }
        };
        var O = 100;
        $scope.operateLogView = {
            logData: {},
            count: 0,
            total_page: 1,
            current_page: 1,
            show_change_page: !1
        }, $scope.operateLog = {
            logData: {},
            total: 0,
            info: function (e) {
                k({
                    ws_id: e,
                    page: 1
                })
            },
            page: function () {},
            goPrevPage: function () {
                if (1 != $scope.operateLogView.current_page) {
                    k({
                        ws_id: F.curWorkspace,
                        page: --$scope.operateLogView.current_page
                    })
                }
            },
            goNextPage: function () {
                if ($scope.operateLogView.current_page != $scope.operateLogView.total_page) {
                    k({
                        ws_id: F.curWorkspace,
                        page: ++$scope.operateLogView.current_page
                    })
                }
            },
            goFirstPage: function () {
                if (1 != $scope.operateLogView.current_page) {
                    var t = {
                        ws_id: F.curWorkspace,
                        page: 1
                    };
                    $scope.operateLogView.current_page = 1, k(t)
                }
            },
            goLastPage: function () {
                if ($scope.operateLogView.current_page != $scope.operateLogView.total_page) {
                    var t = {
                        ws_id: F.curWorkspace,
                        page: $scope.operateLogView.total_page
                    };
                    $scope.operateLogView.current_page = $scope.operateLogView.total_page, k(t)
                }
            },
            setPageListPos: function (e) {
                var t = $($scope.target).offset(),
                    a = $(window).height(),
                    i = 30;
                a - t.top < 110 && (i = -80), $(".page-list").css({
                    top: i
                }), $scope.stopPropagation()
            }
        }, n(["saveSuccess"], e)
    }

    //addWorktableCtrl
    //"$scope", "$timeout", "ngDialog"
    function addWorktableCtrl(e, t, a) {
        function i(e, t) {
            function a(e, t) {
                t.map(function (t) {
                    t.choose = e, t.selected || (e ? t.add = !0 : delete t.add)
                })
            }
            var i, n = [];
            n = void 0 === t ? s[e] : s[e].sub_folders[t], i = n.choose, a(i, n.tb_list), void 0 === t && n.sub_folders && n.sub_folders.length > 0 && n.sub_folders.map(function (e) {
                $scope.check = i, a(i, $scope.tb_list)
            })
        }

        function n() {
            function e(a) {
                a.tb_list.map(t), a.sub_folders && a.sub_folders.length > 0 && a.sub_folders.map(e), a.name || (a.name = "根目录")
            }

            function t(e) {
                a.push($scope.dstb_id)
            }
            var a = [];
            return o.worktableList.map(e), a
        }

        function r(e, t) {
            function a(e, t) {
                var a = {
                    tb_id: $scope.tb_id,
                    name: $scope.name,
                    type: $scope.type
                };
                if (1 == t.level) {
                    var i = n[t.folderName];
                    i ? r[i.index].tb_list.push(a) : (r.push({
                        name: t.folderName,
                        tb_list: [a]
                    }), n[t.folderName] = {
                        index: r.length - 1
                    })
                } else {
                    var i = n[t.folderName];
                    if (i) {
                        var o = i.sub_folders;
                        if (o && o[t.subFolderName]) {
                            var s = o[t.subFolderName];
                            r[s.parentIndex].sub_folders[s.subIndex].tb_list.push(a)
                        } else {
                            o || (r[i.index].sub_folders = []);
                            var l = r[i.index];
                            l.sub_folders.push({
                                name: t.subFolderName,
                                tb_list: [a]
                            }), i.sub_folders || (i.sub_folders = {}), i.sub_folders[t.subFolderName] = {
                                subIndex: l.sub_folders.length - 1,
                                parentIndex: i.index
                            }
                        }
                    } else r.push({
                        name: t.folderName,
                        tb_list: [],
                        sub_folders: [{
                            name: t.subFolderName,
                            tb_list: [a]
                        }]
                    }), n[t.folderName] = {
                        index: r.length - 1,
                        sub_folders: {}
                    }, n[t.folderName].sub_folders[t.subFolderName] = {
                        parentIndex: r.length - 1,
                        subIndex: 0
                    }
                }
            }

            function i(e, t) {
                $scope.map(function (e) {
                    $scope.add && a(e, t)
                })
            }
            var n = angular.copy(o.folderInfo),
                r = angular.copy(o.originalworktableList);
            s.map(function (e, t) {
                i($scope.tb_list, {
                    level: 1,
                    folderName: $scope.name
                }), $scope.sub_folders && $scope.sub_folders.length > 0 && $scope.sub_folders.map(function (t, a) {
                    i(t.tb_list, {
                        level: 2,
                        folderName: $scope.name,
                        subFolderName: t.name
                    })
                })
            }), o.worktableList = angular.copy(r)
        }
        var o = $scope.workspaceData,
            s = $scope.workspaceView.folderList;
        $scope.curFolder = {}, $scope.setCurFolder = function (t, a) {
            var i = $scope.curFolder;
            i.index = t, i.subIndex = a;
            var n;
            n = void 0 === a ? s[t] : s[t].sub_folders[a], $scope.curFolderItem = n
        }, $scope.ngDialogData.init && (s = function (e) {
            var t = [];
            return o.worktableList && (t = n()),
                function () {
                    function a(e, t) {
                        $scope.sub_folders && $scope.sub_folders.length > 0 && $scope.sub_folders.map(a);
                        var r = n($scope.tb_list);
                        !r || $scope.sub_folders && 0 != $scope.sub_folders.length ? r && i($scope.sub_folders) && ($scope.choose = !0, $scope.disable = !0) : ($scope.choose = !0, $scope.disable = !0)
                    }

                    function i(e) {
                        var t = 0;
                        return 0 != $scope.length && ($scope.map(function (e) {
                                $scope.choose && $scope.disable && t++
                            }), t == $scope.length)
                    }

                    function n(e) {
                        var a = 0;
                        return 0 != $scope.length && ($scope.map(function (e) {
                                ($scope.should_select || $.inArray($scope.tb_id, t) > -1) && ($scope.choose = !0, $scope.selected = !0, $scope.disable = !0, a++)
                            }), a == $scope.length)
                    }
                    $scope.map(a)
                }(), e
        }(s)), $scope.setCurFolder(0), $scope.openFolder = function (t, a) {
            $scope.setCurFolder(t, a)
        }, $scope.checkone = function (t, a) {
            var i = t.choose;
            t.selected || (i ? t.add = !0 : delete t.add), bdp.bdpTables.initFolderListChoose($scope.workspaceView.folderList, a)
        }, $scope.checkAll = function (t, a) {
            i(t, a), bdp.bdpTables.initFolderListChoose($scope.workspaceView.folderList, t)
        }, $scope.confirmAdd = function () {
            r(), a.closeAll()
        }
    }

    //authorityWorkTableCtrl
    //"$scope", "errHint", "ngDialog"
    function authorityWorkTableCtrl(e, t, a) {
        function i(e) {
            function t(e, n) {
                $scope.sub_folders && $scope.sub_folders.length > 0 && $scope.sub_folders.map(t), i($scope.tb_list) && ($scope.show = !0), $scope.sub_folders && a($scope.sub_folders) && ($scope.show = !0)
            }

            function a(e) {
                var t = !1;
                return $scope.map(function (e) {
                    $scope.show && (t = !0)
                }), t
            }

            function i(e) {
                var t = !1;
                return $scope.map(function (e) {
                    $.inArray($scope.tb_id, n.tb_list.tb_list) > -1 && ($scope.choose = !0, t = !0)
                }), t
            }
            var n = d.authorityInfo[s],
                r = angular.copy(e);
            return $.isEmptyObject(n.tb_list) || 0 == n.tb_list.is_all && 0 == n.tb_list.tb_list.length ? r : 0 == n.tb_list.is_all ? (n.tb_list.tb_list.length > 0 && r.map(t), r) : r
        }
        var n = $scope.workspaceView,
            r = $scope.ngDialogData,
            o = r.user_id,
            s = r.index,
            l = r.mode,
            d = $scope.workspaceData;
        n.authority[o] ? n.authority[o].tb || (n.authority[o].tb = i(d.worktableList)) : (n.authority[o] = {}, n.authority[o].tb = i(d.worktableList));
        var c = n.authority[o].tb;
        $scope.curFolder = {}, $scope.setCurFolder = function (t, a) {
            var i = $scope.curFolder;
            i.index = t, i.subIndex = a;
            var n;
            n = void 0 === a ? c[t] : c[t].sub_folders[a], $scope.curFolderItem = n
        }, $scope.setCurFolder(0), $scope.openFolder = function (t, a) {
            $scope.setCurFolder(t, a)
        }, $scope.chooseWorktable = function () {
            if ("cat" == l) return void a.closeAll();
            var e = n.authority[o].tb,
                i = [];
            if (0 == d.authorityInfo[s].tb_list.is_all && (function () {
                    function t(e) {
                        a($scope.tb_list), $scope.sub_folders && $scope.sub_folders.length > 0 && $scope.sub_folders.map(t)
                    }

                    function a(e) {
                        $scope.map(function (e) {
                            $scope.choose && i.push($scope.tb_id)
                        })
                    }
                    $scope.map(t)
                }(), 0 == i.length)) return void t("未选择工作表");
            d.authorityInfo[s].tb_list.tb_list = i, a.closeAll()
        }
    }
    angular.module("BC.controllers.workspace", [])
        .controller("workspaceCtrl", workspaceCtrl)
        .controller("addWorktableCtrl", addWorktableCtrl)
        .controller("authorityWorkTableCtrl", authorityWorkTableCtrl),
        workspaceCtrl.$inject = ["$scope", "$rootScope", "commonHttp", "errHint", "$jsTipTranslate", "ngDialog", "commonService", "$filter", "multipleProService"],
        addWorktableCtrl.$inject = ["$scope", "$timeout", "ngDialog"],
        authorityWorkTableCtrl.$inject = ["$scope", "errHint", "ngDialog"]
};