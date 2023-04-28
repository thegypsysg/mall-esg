<template>
  <Header/>
  <Banner />
  <Promotions/>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Promotions from "@/components/Promotions.vue";
</script>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
    }
  },
};
</script>

<style>
@font-face {
  font-family: 'Nunito';
  font-style: normal;
  font-weight: normal;
  src: url('@/assets/font/nunito/Nunito-VariableFont_wght.ttf') format('opentype');
}

</style>
