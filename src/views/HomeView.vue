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
      latitude: null,
      longitude: null,
    };
  },
  mounted() {
    this.isDesktop = window.innerWidth >= 768;
    this.getLocation();
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            if (position) {
              this.latitude = position.coords.latitude;
              this.longitude = position.coords.longitude;
              console.log(this.latitude, this.longitude);
              localStorage.setItem("latitude", this.latitude);
              localStorage.setItem("longitude", this.longitude);
            }
          },
          (error) => {
            console.log("Error getting location:", error.message);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    },
  },
};
</script>
