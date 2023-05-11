import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import PromotionDiscountDetail from "@/components/DesktopView/Promotions/PromotionDiscount/PromotionDiscountDetail.vue";
import PromotionCategoryDetail from "@/components/DesktopView/Promotions/PromotionCategory/PromotionCategoryDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/discount-types",
    name: "Promotion Discount Types",
    component: PromotionDiscountDetail,
  },
  {
    path: "/category",
    name: "Promotion Category",
    component: PromotionCategoryDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
