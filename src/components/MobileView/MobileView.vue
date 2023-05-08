<template>
  <Header />
  <Banner />
  <Promotions />
  <Happening />
  <Featured
    title="Featured Malls"
    desc="Check out promotions that are happening in malls around you"
    :is-diff="false"
  />
  <Featured
    title="Featured Merchants"
    desc="Check out promotions that are happening with your Favorite Merchant"
    :is-diff="false"
  />
  <Featured
    title="Featured Merchants"
    desc="Check out promotions that are happening with your Favorite Merchant"
    :is-diff="true"
  />
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Promotions from "@/components/MobileView/Promotions.vue";

import Featured from "./Featured.vue";
import Happening from "./Happening.vue";
</script>

<script>
export default {
  name: "MobileView",

  components: { Featured, Happening },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
