import Vue from "vue";
import VueRouter from "vue-router";
import Console from "../views/Console.vue";
import Cinema from "../views/Cinema.vue";
import Schedule from "../views/Schedule.vue";
import MemberCenter from "../views/MemberCenter.vue";
import OrderManagement from "../views/OrderManagement.vue";
import FinancialStatements from "../views/FinancialStatements.vue";
import SystemConfig from "../views/SystemConfig.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../layout"),
    children: [
      {
        path: "/console",
        name: "Console",
        meta: {
          title: "控制台",
        },
        component: Console,
      },
      {
        path: "/cinema",
        name: "Cinema",
        meta: {
          title: "电影院",
        },
        component: Cinema,
      },
      {
        path: "/schedule",
        name: "Schedule",
        meta: {
          title: "电影排期",
        },
        component: Schedule,
      },
      {
        path: "/member",
        name: "MemberCenter",
        meta: {
          title: "会员中心",
        },
        component: MemberCenter,
      },
      {
        path: "/order",
        name: "OrderManagement",
        meta: {
          title: "订单管理",
        },
        component: OrderManagement,
      },
      {
        path: "/finance",
        name: "FinancialStatements",
        meta: {
          title: "财务报表",
        },
        component: FinancialStatements,
      },
      {
        path: "/config",
        name: "SystemConfig",
        meta: {
          title: "系统配置",
        },
        component: SystemConfig,
      },

    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
