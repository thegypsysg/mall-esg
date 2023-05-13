import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import PromotionDiscountDetailDesktop from "@/components/DesktopView/Promotions/PromotionDiscount/PromotionDiscountDetail.vue";
import PromotionDiscountDetailMobile from "@/components/MobileView/Promotions/PromotionDiscount/PromotionDiscountDetail.vue";
import PromotionCategoryDetailDesktop from "@/components/DesktopView/Promotions/PromotionCategory/PromotionCategoryDetail.vue";
import PromotionCategoryDetailMobile from "@/components/MobileView/Promotions/PromotionCategory/PromotionCategoryDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/discount-types",
    name: "Promotion Discount Types",
    component: () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        return PromotionDiscountDetailMobile;
      } else {
        return PromotionDiscountDetailDesktop;
      }
    },
  },
  {
    path: "/category",
    name: "Promotion Category",
    component: () => {
      if (window.matchMedia("(max-width: 768px)").matches) {
        return PromotionCategoryDetailMobile;
      } else {
        return PromotionCategoryDetailDesktop;
      }
    },
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
