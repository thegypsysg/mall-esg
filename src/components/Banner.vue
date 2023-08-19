<template>
  <div
    class="bg-image"
    :style="{
      backgroundImage: `url(${$fileURL + appDetails?.app_main_image})`,
    }"
  >
    <v-container
      style="height: calc(100vh - 90px); display: flex; align-items: center"
    >
      <v-row>
        <v-col cols="12">
          <div
            class="hero__text"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-duration="2000"
            data-aos-easing="ease-in-sine"
          >
            <h1 style="color: rgb(255, 236, 75)">Welcome !!!</h1>
            <h2 style="color: #fff">Are you going to a Mall?</h2>
            <v-btn
              class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 v-size--default"
              style="
                background-color: rgb(255, 236, 75);
                border-color: rgb(255, 236, 75);
              "
            >
              <span>Promotions</span>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";

onMounted(() => {
  AOS.init();
});
</script>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  props: ["appDetails"],
};
</script>

<style scoped>
h1 {
  color: #ffec4b;
  font-size: 64px;
  font-weight: 700;
  text-transform: uppercase;
}
h2 {
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 36px;
}
@media (max-width: 959px) {
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 24px;
  }
}
</style>
