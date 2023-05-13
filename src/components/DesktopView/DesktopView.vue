<template>
  <div>
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
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Promotions from "@/components/DesktopView/Promotions/Promotions.vue";
import Featured from "./Featured/Featured.vue";
import Happening from "./Happening/Happening.vue";
</script>

<script>
export default {
  name: "DesktopView",
  components: { Featured, Happening },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
