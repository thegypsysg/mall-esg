<template>
  <Header />
  <Banner />
  <Promotions />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Promotions from "@/components/DesktopView/Promotions.vue";
</script>

<script>
export default {
  name: "DesktopView",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
