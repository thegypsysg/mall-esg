<template>
  <v-app>
    <div>
      <!-- <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <Component :is="Component" />
        </transition>
      </router-view> -->
      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@import "@/assets/style/App.scss";

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}
</style>
