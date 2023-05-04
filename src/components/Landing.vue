<template>
  <DesktopView v-if="isDesktop" />
  <MobileView v-else />
</template>

<script setup>
import DesktopView from "./DesktopView/DesktopView.vue";
import MobileView from "./MobileView/MobileView.vue";
</script>

<script>
export default {
  name: "App",
  components: { DesktopView, MobileView },
  data() {
    return {
      isDesktop: true,
    };
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768;
  },
};
</script>
