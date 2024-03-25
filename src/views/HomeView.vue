<template>
  <DesktopView v-if="isDesktop" />
  <MobileView v-else />
</template>

<script setup>
import DesktopView from "@/components/DesktopView/DesktopView.vue";
import MobileView from "@/components/MobileView/MobileView.vue";
</script>

<script>
import axios from "axios";

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
    // getLocation() {
    //   if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(
    //       (position) => {
    //         if (position) {
    //           this.latitude = position.coords.latitude;
    //           this.longitude = position.coords.longitude;
    //           console.log(this.latitude, this.longitude);
    //           localStorage.setItem("latitude", this.latitude);
    //           localStorage.setItem("longitude", this.longitude);
    //         }
    //       },
    //       (error) => {
    //         console.log("Error getting location:", error.message);
    //       }
    //     );
    //   } else {
    //     console.log("Geolocation is not supported by this browser.");
    //   }
    // },
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

              // Mengirim permintaan ke API Geocoding untuk mendapatkan nama negara
              axios
                .get(
                  `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${this.latitude}&lon=${this.longitude}`
                )
                .then((response) => {
                  if (
                    response.data &&
                    response.data.address &&
                    response.data.address.country
                  ) {
                    const country = response.data.address.country;
                    console.log("Country:", country);
                    localStorage.setItem("countryDevice", country);
                  } else {
                    console.log(
                      "Failed to retrieve country information from the API."
                    );
                  }
                })
                .catch((error) => {
                  console.error("Error retrieving country information:", error);
                });
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
