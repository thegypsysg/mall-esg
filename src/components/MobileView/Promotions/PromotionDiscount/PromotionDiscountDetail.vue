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
      <img src="@/assets/promotion-discount-detail-img.jpg" />
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
          class="my-4 pa-2 mx-1"
          elevation="0"
          width="22%"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center flex-column">
            <div class="mb-1 card-text">20% off</div>
            <img src="@/assets/images/icons/off-20.png" height="55" />
            <div class="mt-2 card-text">
              <span class="text-red">32</span> Promos
            </div>
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
