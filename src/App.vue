<template>
  <v-app>
    <div>
      <!-- <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
      </router-view> -->
      <Header
        :is-header="
          currentRoute === '/discount-types' ||
          currentRoute === '/category' ||
          currentRoute === '/meal-promo' ||
          currentRoute === '/people-promo' ||
          currentRoute === '/preference-promo' ||
          currentRoute === '/others-promo' ||
          currentRoute === '/day-promo'
            ? true
            : false
        "
        :title-header="titleHeader"
        :is-desktop="isDesktop"
      />
      <RouterView v-slot="{ Component }">
        <Transition name="page-opacity" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </div>
  </v-app>
</template>

<script>
import { RouterView } from "vue-router";
import Header from "@/components/Header.vue";

export default {
  name: "App",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { RouterView, Header },
  data() {
    return {
      currentRoute: this.$route.path,
      isDesktop: true,
    };
  },
  computed: {
    titleHeader() {
      let title = "";
      if (this.currentRoute === "/discount-types") {
        title = "Promotions by Discount";
      } else if (this.currentRoute === "/category") {
        title = "Promotions by Category";
      } else if (this.currentRoute === "/meal-promo") {
        title = "Promotions by Meals";
      } else if (this.currentRoute === "/people-promo") {
        title = "Promotions by People";
      } else if (this.currentRoute === "/preference-promo") {
        title = "Promotions by Preference";
      } else if (this.currentRoute === "/others-promo") {
        title = "Promotions by Others";
      } else if (this.currentRoute === "/day-promo") {
        title = "Promotions by Day";
      }
      return title;
    },
  },
  watch: {
    $route: function () {
      this.currentRoute = this.$route.path;
    },
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768;
  },
};
</script>

<style>
@import "@/assets/style/App.scss";

.page-opacity-enter-active,
.page-opacity-leave-active {
  transition: 400ms ease all;
}

.page-opacity-enter-from,
.page-opacity-leave-to {
  opacity: 0;
}
</style>
