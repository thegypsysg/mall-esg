<template>
  <Header />
  <Banner />
  <Promotions />
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
import Promotions from "@/components/DesktopView/Promotions.vue";
import Featured from "./Featured.vue";
</script>

<script>
export default {
  name: "DesktopView",
  components: { Featured },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
