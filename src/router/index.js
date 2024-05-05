import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import Console from "../views/Console.vue";
import Cinema from "../views/Cinema.vue";
import Schedule from "../views/Schedule.vue";
import MemberCenter from "../views/MemberCenter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "layout",
    component: () => import("../layout"),
    children: [
      {
        path: "/home",
        name: "home",
        mate: {
          titile: "首页",
        },
        component: HomeView,
      },
      {
        path: "/console",
        name: "Console",
        mate: {
          titile: "控制台",
        },
        component: Console,
      },
      {
        path: "/cinema",
        name: "Cinema",
        mate: {
          titile: "电影院",
        },
        component: Cinema,
      },
      {
        path: "/schedule",
        name: "Schedule",
        mate: {
          titile: "电影排期",
        },
        component: Schedule,
      },
      {
        path: "/member",
        name: "MemberCenter",
        mate: {
          titile: "会员中心",
        },
        component: MemberCenter,
      },

    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
