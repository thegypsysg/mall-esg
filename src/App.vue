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
          currentRoute === '/discount-types' || currentRoute === '/category'
            ? true
            : false
        "
        :title-header="
          currentRoute === '/discount-types'
            ? 'Promotions by Discount'
            : 'Promotions by Category'
        "
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
