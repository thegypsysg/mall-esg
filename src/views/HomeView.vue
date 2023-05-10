<template>
  <DesktopView v-if="isDesktop" />
  <MobileView v-else />
</template>

<script setup>
import DesktopView from "@/components/DesktopView/DesktopView.vue";
import MobileView from "@/components/MobileView/MobileView.vue";
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
