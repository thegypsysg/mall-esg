<template>
  <div>
    <div class="banner-container">
      <div class="btn-container d-flex justify-space-between pt-2 px-4">
        <v-btn
          size="40"
          to="/"
          variant="text"
          icon
          color="black"
          style="background: white"
        >
          <v-icon> mdi-chevron-left </v-icon>
        </v-btn>
        <div class="d-flex" style="gap: 20px">
          <v-btn
            size="40"
            variant="text"
            icon
            color="black"
            style="background: white"
          >
            <v-icon> mdi-share-variant-outline </v-icon>
          </v-btn>
          <v-btn
            size="40"
            variant="text"
            icon
            color="black"
            style="background: white"
          >
            <v-icon> mdi-heart-outline </v-icon>
          </v-btn>
        </div>
      </div>
      <img src="@/assets/promotion-category-detail-img.jpg" />
      <div class="section-select my-16 mx-auto pa-2">
        <v-select
          label="--- Discount Type ---"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="outlined"
        />
      </div>
    </div>
    <v-container>
      <div class="card-container mb-2 d-flex flex-wrap justify-center">
        <v-card
          v-for="n in 12"
          :key="n"
          class="my-4 text-center pa-2 mx-1"
          width="22%"
          elevation="0"
          style="border-radius: 12px; padding: 20px"
          @click="toggle"
        >
          <div
            style="
              font-size: 16px;
              margin-bottom: 10px;
              line-height: 19.36px;
              font-weight: 700;
            "
          >
            Cakes
          </div>
          <img src="@/assets/images/cakes.png" height="55" />
          <div
            style="
              font-weight: 600;
              font-size: 10px;
              margin-top: 10px;
              line-height: 16.94px;
            "
          >
            <span class="text-red">32</span> Promos
          </div>
        </v-card>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../../../Footer.vue";

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Footer },
};
</script>

<style scoped>
.banner-container {
  height: 30vh;
  position: relative;
}
.btn-container {
  position: absolute;
  top: 0;
  width: 100%;
}
.banner-container img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.section-select {
  width: 230px;
  margin: 0 auto;
  color: black !important;
  position: absolute;
  top: 25%;
  left: 50%;
  z-index: 1000;
  background: white;
  border-radius: 5px;
  transform: translate(-50%, -50%);
}

.card-container {
  width: 100%;
}

.card-text {
  font-size: 10px;
  font-weight: 700;
}
</style>
