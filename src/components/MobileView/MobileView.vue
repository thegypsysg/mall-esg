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
import Promotions from "@/components/MobileView/Promotions.vue";
</script>

<script>
export default {
  name: "MobileView",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
