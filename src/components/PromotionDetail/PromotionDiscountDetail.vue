<template>
  <div>
    <div v-if="isSmall" class="banner-container">
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
      <div v-if="!isSmall" class="banner-container-desktop">
        <img src="@/assets/promotion-discount-detail-img.jpg" />
      </div>
      <v-select
        v-if="!isSmall"
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
        class="section-select-desktop my-16"
      />
      <div
        class="card-container d-flex flex-wrap"
        :class="{ 'mb-2 justify-center': isSmall, ' mb-8': !isSmall }"
      >
        <v-card
          v-for="n in totalData"
          :key="n"
          class="my-4"
          :class="{ 'pa-2 mx-1': isSmall, 'pa-4 mx-3': !isSmall }"
          :elevation="isSmall ? 0 : 1"
          :width="isSmall ? '22%' : '13%'"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center flex-column">
            <div
              class="mb-1"
              :class="{ 'card-text': isSmall, 'card-text-desktop': !isSmall }"
            >
              20% off
            </div>
            <img
              src="@/assets/images/icons/off-20.png"
              :height="isSmall ? 55 : 100"
            />
            <div
              :class="{
                'mt-2 card-text': isSmall,
                'mt-3 card-text-desktop': !isSmall,
              }"
            >
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
import Footer from "../Footer.vue";

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Footer },
  data() {
    return {
      screenWidth: window.innerWidth,
      // totalData: 0,
    };
  },
  computed: {
    isSmall() {
      return this.screenWidth < 640;
    },
    totalData() {
      let tData = 0;
      this.screenWidth < 640 ? (tData = 12) : (tData = 18);
      return tData;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  // mounted() {
  //   this.totalData = this.isSmall ? 12 : 18;
  // },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
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
.banner-container-desktop {
  height: 500px;
  margin-top: 120px;
}
.banner-container-desktop img {
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

.section-select-desktop {
  width: 230px;
  margin: 0 auto;
  color: black !important;
}

.card-container {
  width: 100%;
}
.card-text {
  font-size: 10px;
  font-weight: 700;
}

.card-text-desktop {
  font-size: 14px;
  font-weight: 700;
}
</style>
