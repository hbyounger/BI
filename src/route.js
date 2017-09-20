e.state("dash_edit", {
                        url: "/dash_edit",
                        templateUrl: "/static/js/dashboard/tpl/project_view.html",
                        controller: "ProjectController"
})
                    .state("dash_edit.dash", {
                            url: "/:projId/:dashId?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
                            controller: "DashController"
                        })
                        .state("dash_edit.rule", {
                            url: "/:projId/:dashId/:ruleId?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
                            controller: "DashController"
                        })
                        .state("dash_fullscreen", {
                            url: "/dash_fullscreen/:projId/:dashId?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/dash-fullscreen.html",
                            controller: "DashController"
                        })
                        .state("dash_fullscreen.rule?df_id&range", {
                            url: "/:ruleId",
                            templateUrl: "/static/js/dashboard/tpl/dash-fullscreen.html",
                            controller: "DashController"
                        })
                        .state("dash_edit.adv", {
                            url: "/:projId/:dashId/:mode/:category?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("dash_edit.adv_rule", {
                            url: "/:projId/:dashId/:ruleId/:mode/:category?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("adv_dash_edit", {
                            url: "/adv_dash_edit/:projId/:dashId/:mode/:category",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_edit.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("adv_dash_edit_ws", {
                            url: "/adv_dash_edit_ws/:wsId/:projId/:dashId/:mode/:category",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_edit.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("adv_dash_fullscreen", {
                            url: "/adv_dash_fullscreen/:projId/:dashId/:mode/:category?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("adv_dash_fullscreen_rule", {
                            url: "/adv_dash_fullscreen/:projId/:dashId/:ruleId/:mode/:category?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard_fullscreen.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("ws_dash", {
                            url: "/dash_edit_ws/:wsId",
                            templateUrl: "/static/js/dashboard/tpl/project_view.html",
                            controller: "ProjectController"
                        })
                        .state("ws_dash.dash", {
                            url: "/:projId/:dashId?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
                            controller: "DashController"
                        })
                        .state("ws_dash.adv", {
                            url: "/:projId/:dashId/:mode/:category?df_id&range",
                            templateUrl: "/static/js/dashboard/tpl/adv_dashboard.html",
                            controller: "advDashboardCtrl"
                        })
                        .state("data_screen", {
                            url: "/data_screen",
                            templateUrl: "/static/js/dashboard/tpl/project_view.html",
                            controller: "ProjectController"
                        })

                        .state("data_screen.dash", {
                            url: "/:projId/:dashId",
                            templateUrl: "/static/js/dashboard/tpl/data_screen.html",
                            controller: "DataScreenCtrl"
                        })
                        .state("data_screen_edit", {
                            url: "/data_screen_edit/:projId/:dashId",
                            templateUrl: "/static/js/dashboard/tpl/data_screen_edit.html",
                            controller: "DataScreenCtrl"
                        })
                        .state("third_iframe", {
                            url: "/third_iframe",
                            templateUrl: "/static/js/dashboard/tpl/project_view.html",
                            controller: "ProjectController"
                        })
                        .state("third_iframe.dash", {
                            url: "/:projId/:dashId",
                            templateUrl: "/static/js/dashboard/tpl/dash-edit.html",
                            controller: "DashController"
                        })
                        .state("ws_dash_fullscreen", {
                            url: "/dash_fullscreen_ws/:wsId/:projId/:dashId",
                            templateUrl: "/static/js/dashboard/tpl/dash-fullscreen.html",
                            controller: "DashController"
                        })
                        .state("chart_edit", {
                            url: "/chart_edit/:projId/:dashId/:chartId?page_referrer",
                            templateUrl: "/static/js/dashboard/tpl/chart-edit.html",
                            controller: "ChartController"
                        })
                        .state("chart_edit_ws", {
                            url: "/chart_edit_ws/:wsId/:projId/:dashId/:chartId?page_referrer",
                            templateUrl: "/static/js/dashboard/tpl/chart-edit.html",
                            controller: "ChartController"
                        })
                        .state("custom_chart_edit", {
                            url: "/custom_chart_edit/:projId/:dashId/:chartId?page_referrer",
                            templateUrl: "/static/js/dashboard/tpl/custom-chart-edit.html",
                            controller: "CustomChartEditCtrl"
                        })
                        .state("upgrade", {
                            url: "/upgrade",
                            templateUrl: "/static/view/partner_upgrade.html",
                            controller: "partnerUpgradeCtrl"
                        })
                        .state("data_source", {
                            url: "/data_source",
                            templateUrl: "/static/js/worktable/preview/worktable.html",
                            controller: "WorktableCtrl"
                        })
                        .state("data_source_ws", {
                            url: "/data_source/:wsId",
                            templateUrl: "/static/js/worktable/preview/worktable.html",
                            controller: "WorktableCtrl"
                        })
                        .state("warn", {
                            url: "/warn",
                            templateUrl: "/static/view/warning-message.html",
                            controller: "WarnController"
                        })
                        .state("notice_list", {
                            url: "/notice",
                            templateUrl: "/static/view/notice_list.html",
                            controller: "noticeCtrl"
                        })
                        .state("notice", {
                            url: "/notice/:noticeTpye",
                            templateUrl: "/static/view/notice_list.html",
                            controller: "noticeCtrl"
                        })
                        .state("warn_ws", {
                            url: "/warn/:wsId",
                            templateUrl: "/static/view/warning-message.html",
                            controller: "WarnController"
                        })
                        .state("template_home", {
                            url: "/template_home",
                            templateUrl: "/static/view/template_home.html",
                            controller: "TemplateHomeController"
                        })
                        .state("template_home_ws", {
                            url: "/template_home/:wsId",
                            templateUrl: "/static/view/template_home.html",
                            controller: "TemplateHomeController"
                        })

                        .state("template_config_ws", {
                            url: "/template_config/:wsId",
                            templateUrl: "/static/view/template_config.html",
                            controller: "TemplateConfigController"
                        })
                        .state("template_config", {
                            url: "/template_config",
                            templateUrl: "/static/view/template_config.html",
                            controller: "TemplateConfigController"
                        })
                        .state("template_rule", {
                            url: "/template_rule",
                            templateUrl: "/static/view/template_rule.html",
                            controller: "templateRuleCtrl"
                        })
                        .state("template_rule_ws", {
                            url: "/template_rule/:wsId",
                            templateUrl: "/static/view/template_rule.html",
                            controller: "templateRuleCtrl"
                        })
                        .state("template_rule_modify", {
                            url: "/template_rule_modify/:module",
                            templateUrl: "/static/view/template_rule_modify.html",
                            controller: "templateRuleModifyCtrl"
                        })
                        .state("template_rule_modify.ws", {
                            url: "/:wsId",
                            templateUrl: "/static/view/template_rule_modify.html",
                            controller: "templateRuleModifyCtrl"
                        })
                        .state("template_rule_create", {
                            url: "/template_rule_create",
                            templateUrl: "/static/view/template_rule_modify.html",
                            controller: "templateRuleModifyCtrl"
                        })
                        .state("template_rule_create_ws", {
                            url: "/template_rule_create/:wsId",
                            templateUrl: "/static/view/template_rule_modify.html",
                            controller: "templateRuleModifyCtrl"
                        })
                        .state("join_table", {
                            url: "/jointable",
                            templateUrl: "/static/js/worktable/join/view/join-table.html",
                            controller: "joinTableController"
                        })
                        .state("join_table_edit", {
                            url: "/jointable/:tbId",
                            templateUrl: "/static/js/worktable/join/view/join-table.html",
                            controller: "joinTableController"
                        })
                        .state("join_table_ws", {
                            url: "/jointable_ws/:wsId",
                            templateUrl: "/static/js/worktable/join/view/join-table.html",
                            controller: "joinTableController"
                        })
                        .state("join_table_ws_edit", {
                            url: "/jointable_ws/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/join/view/join-table.html",
                            controller: "joinTableController"
                        })
                        .state("polymer_table", {
                            url: "/polymer_table",
                            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
                            controller: "polymerTableCtrl"
                        })
                        .state("polymer_table_edit", {
                            url: "/polymer_table/:tbId",
                            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
                            controller: "polymerTableCtrl"
                        })
                        .state("polymer_table_ws", {
                            url: "/polymer_table_ws/:wsId",
                            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
                            controller: "polymerTableCtrl"
                        })
                        .state("polymer_table_ws_edit", {
                            url: "/polymer_table_ws/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/polymer/polymer_table.html",
                            controller: "polymerTableCtrl"
                        })

                        .state("union_table", {
                            url: "/union_table/",
                            templateUrl: "/static/js/worktable/union/union_table.html",
                            controller: "UnionTableCtrl"
                        })
                        .state("union_table_edit", {
                            url: "/union_table/:tbId",
                            templateUrl: "/static/js/worktable/union/union_table.html",
                            controller: "UnionTableCtrl"
                        })
                        .state("union_table_ws", {
                            url: "/union_table_ws/:wsId",
                            templateUrl: "/static/js/worktable/union/union_table.html",
                            controller: "UnionTableCtrl"
                        })
                        .state("union_table_ws_edit", {
                            url: "/union_table_ws/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/union/union_table.html",
                            controller: "UnionTableCtrl"
                        })
                        .state("transpose_table", {
                            url: "/transpose_table",
                            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
                            controller: "transposeTableCtrl"
                        })
                        .state("transpose_table_edit", {
                            url: "/transpose_table/:tbId",
                            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
                            controller: "transposeTableCtrl"
                        })
                        .state("transpose_table_ws", {
                            url: "/transpose_table_ws/:wsId",
                            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
                            controller: "transposeTableCtrl"
                        })
                        .state("transpose_table_ws_edit", {
                            url: "/transpose_table_ws/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/transpose/transpose_table.html",
                            controller: "transposeTableCtrl"
                        })
                        .state("extract_table", {
                            url: "/extract_table",
                            templateUrl: "/static/js/worktable/extract/extract_table.html",
                            controller: "ExtractTableCtrl"
                        })
                        .state("sql_table", {
                            url: "/sql_table",
                            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
                            controller: "SQLTableCtrl"
                        })
                        .state("sql_table_edit", {
                            url: "/sql_table/:tbId",
                            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
                            controller: "SQLTableCtrl"
                        })
                        .state("sql_table_ws", {
                            url: "/sql_table/:wsId",
                            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
                            controller: "SQLTableCtrl"
                        })
                        .state("sql_table_ws_edit", {
                            url: "/sql_table/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/sql/sqlMergeTable.html",
                            controller: "SQLTableCtrl"
                        })
                        .state("workspace", {
                            url: "/workspace",
                            templateUrl: "/static/view/workspace.html",
                            controller: "workspaceCtrl"
                        })
                        .state("gis_edit", {
                            url: "/gis_edit/:projId/:dashId/:chartId?page_referrer",
                            templateUrl: "/static/js/dashboard/tpl/gis_edit.html",
                            controller: "gisCtrl"
                        })
                        .state("gis_edit_ws", {
                            url: "/gis_edit_ws/:wsId/:projId/:dashId/:chartId?page_referrer",
                            templateUrl: "/static/js/dashboard/tpl/gis_edit.html",
                            controller: "gisCtrl"
                        })
                        .state("parse_url", {
                            url: "/parse_url/:tbId",
                            templateUrl: "/static/js/worktable/parse/parse_url.html",
                            controller: "parseUrlCtrl"
                        })
                        .state("parse_url_ws", {
                            url: "/parse_url_ws/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/parse/parse_url.html",
                            controller: "parseUrlCtrl"
                        })
                        .state("merge_field", {
                            url: "/merge_field/:tbId",
                            templateUrl: "/static/js/worktable/parse/merge_field.html",
                            controller: "mergeFieldCtrl"
                        })
                        .state("merge_field_ws", {
                            url: "/merge_field_ws/:wsId/:tbId",
                            templateUrl: "/static/js/worktable/parse/merge_field.html",
                            controller: "mergeFieldCtrl"
                        })
                        .state("author_manage", {
                            url: "/author_manage",
                            templateUrl: "/static/view/author-manage.html",
                            controller: "authorManageCtrl"
                        })

                        .state("member", {
                            url: "/member",
                            templateUrl: "/static/pay/member/view/member.html",
                            controller: "memberCtrl"
                        })
                        .state("member_upgrade", {
                            url: "/member_upgrade",
                            templateUrl: "/static/pay/member/view/member_upgrade.html",
                            controller: "memberUpgradeCtrl"
                        })
                        .state("member_upgrade_level", {
                            url: "/member_upgrade/:upgradeId",
                            templateUrl: "/static/pay/member/view/member_upgrade.html",
                            controller: "memberUpgradeCtrl"
                        })
                        .state("page_upload_add", {
                            url: "/page_upload/:operate",
                            templateUrl: "/static/view/page_upload.html",
                            controller: "pageUploadCtrl"
                        })
                        .state("page_upload_replace", {
                            url: "/page_upload/:operate/:tbId",
                            templateUrl: "/static/view/page_upload.html",
                            controller: "pageUploadCtrl"
                        })
                        .state("page_upload_singlereplace", {
                            url: "/page_upload/:operate/:tbId/:mapId",
                            templateUrl: "/static/view/page_upload.html",
                            controller: "pageUploadCtrl"
                        })
                        .state("table_capacity", {
                            url: "/table_capacity",
                            templateUrl: "/static/js/worktable/preview/table_capacity.html",
                            controller: "tableCapacityCtrl"
                        })
                        .state("table_capacity_ws", {
                            url: "/table_capacity/:wsId",
                            templateUrl: "/static/js/worktable/preview/table_capacity.html",
                            controller: "tableCapacityCtrl"
                        }),