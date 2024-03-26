import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import MyProfile from "@/views/MyProfileView.vue";
import PromotionDiscountDetail from "@/components/PromotionDetail/PromotionDiscountDetail.vue";
import PromotionCategoryDetail from "@/components/PromotionDetail/PromotionCategoryDetail.vue";
import PromotionMealsDetail from "@/components/PromotionDetail/PromotionMealsDetail.vue";
import PromotionPeopleDetail from "@/components/PromotionDetail/PromotionPeopleDetail.vue";
import PromotionPreferenceDetail from "@/components/PromotionDetail/PromotionPreferenceDetail.vue";
import PromotionOthersDetail from "@/components/PromotionDetail/PromotionOthersDetail.vue";
import PromotionDayDetail from "@/components/PromotionDetail/PromotionDayDetail.vue";
import ViewAllMallsVue from "@/components/ViewAllMalls.vue";
import ViewAllMerchantsVue from "@/components/ViewAllMerchants.vue";
import ViewAllEvents from "@/components/ViewAllEvents.vue";
import EventDetail from "@/components/EventDetail.vue";
import PreRedeem from "@/components/PreRedeem.vue";
import RedeemLocation from "@/components/RedeemLocation.vue";
import RedeemDetail from "@/components/RedeemDetail.vue";
import ViewAllParkingInfo from "@/components/ViewAllParkingInfo.vue";
import ParkingInfoDetail from "@/components/ParkingInfoDetail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/my-profile",
    name: "My Profile",
    component: MyProfile,
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
  {
    path: "/meal-promo",
    name: "Promotion Meals",
    component: PromotionMealsDetail,
  },
  {
    path: "/people-promo",
    name: "Promotion People",
    component: PromotionPeopleDetail,
  },
  {
    path: "/preference-promo",
    name: "Promotion Preference",
    component: PromotionPreferenceDetail,
  },
  {
    path: "/others-promo",
    name: "Promotion Others",
    component: PromotionOthersDetail,
  },
  {
    path: "/day-promo",
    name: "Promotion Day",
    component: PromotionDayDetail,
  },
  {
    path: "/all-malls",
    name: "All Malls",
    component: ViewAllMallsVue,
  },
  {
    path: "/all-merchants",
    name: "All Merchants",
    component: ViewAllMerchantsVue,
  },
  {
    path: "/all-events",
    name: "All Events",
    component: ViewAllEvents,
  },
  {
    path: "/event-id/:id",
    name: "Event Detail",
    component: EventDetail,
  },
  {
    path: "/all-parking-info",
    name: "All Parking Info",
    component: ViewAllParkingInfo,
  },
  {
    path: "/parking-info-id/:id",
    name: "Parking Info Detail",
    component: ParkingInfoDetail,
  },
  {
    path: "/pre-redeem/:id",
    name: "Pre Redeem",
    component: PreRedeem,
  },
  {
    path: "/redeem-location/:id",
    name: "Redeem Location",
    component: RedeemLocation,
  },
  {
    path: "/redeem-detail/:id",
    name: "Redeem Detail",
    component: RedeemDetail,
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
