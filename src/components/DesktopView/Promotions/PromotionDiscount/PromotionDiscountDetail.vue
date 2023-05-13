<template>
  <div>
    <!-- <Header title-header="Promotions by Discount" is-header="true" /> -->
    <v-container>
      <div class="banner-container">
        <img src="@/assets/promotion-discount-detail-img.jpg" />
      </div>
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
        class="section-select my-16"
      />
      <div class="card-container mb-8 d-flex flex-wrap">
        <v-card
          v-for="n in 18"
          :key="n"
          class="my-4 pa-4 mx-3"
          elevation="1"
          width="13%"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center flex-column">
            <div class="mb-1 card-text">20% off</div>
            <img src="@/assets/images/icons/off-20.png" height="100" />
            <div class="mt-3 card-text">
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
import Header from "../../../Header.vue";

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Footer },
};
</script>

<style scoped>
.banner-container {
  height: 500px;
  margin-top: 120px;
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
}

.card-container {
  width: 100%;
}

.card-text {
  font-size: 14px;
  font-weight: 700;
}
</style>
