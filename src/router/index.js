import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import PromotionDetail from "@/components/DesktopView/PromotionDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/discount-types",
    name: "Discount Types",
    component: PromotionDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
