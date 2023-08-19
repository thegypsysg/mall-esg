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
      <img src="@/assets/meal-promo.jpg" />
      <div class="section-select my-16 mx-auto pa-2">
        <v-autocomplete
          v-model="selected"
          label="--- Meal Type ---"
          style="white-space: nowrap"
          :items="resource"
          clearable
          variant="outlined"
        />
      </div>
    </div>
    <v-container>
      <div v-if="!isSmall" class="banner-container-desktop">
        <img src="@/assets/meal-promo.jpg" />
      </div>
      <v-autocomplete
        v-if="!isSmall"
        v-model="selected"
        label="--- Meal Type ---"
        style="white-space: nowrap"
        :items="resource"
        clearable
        variant="outlined"
        class="section-select-desktop my-16"
      />
      <div
        class="card-container d-flex flex-wrap"
        :class="{
          'mb-2 justify-start': isSmall,
          'justify-center mb-8': !isSmall,
        }"
      >
        <div
          v-for="meal in filteredItems"
          :key="meal.id"
          :class="{ 'card-item-2': isSmall, 'card-item': !isSmall }"
        >
          <v-lazy :options="{ threshold: 0.5 }" min-height="100">
            <v-card
              class="my-4"
              :class="{ 'pa-2 mx-1': isSmall, 'pa-4 mx-3': !isSmall }"
              :elevation="isSmall ? 0 : 1"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center flex-column">
                <div
                  class="mb-1"
                  :class="{
                    'card-text': isSmall,
                    'card-text-desktop': !isSmall,
                  }"
                >
                  {{ meal.title }}
                </div>
                <div
                  :class="{
                    'card-img-container': !isSmall,
                    'card-img-container-2': isSmall,
                  }"
                >
                  <v-img
                    :src="meal.img"
                    :height="isSmall ? 55 : 80"
                    cover
                    class="card-img"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                </div>
                <div
                  :class="{
                    'mt-2 card-text': isSmall,
                    'mt-3 card-text-desktop': !isSmall,
                  }"
                >
                  <span class="text-red">{{ meal.desc }}</span> Promos
                </div>
              </div>
            </v-card>
          </v-lazy>
        </div>
      </div>
    </v-container>
    <Footer />
  </div>
</template>

<script>
import Footer from "../Footer.vue";
import axios from "@/util/axios";

export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Footer },
  data() {
    return {
      screenWidth: window.innerWidth,
      promoThree: [],
      resource: [],
      selected: null,
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
    filteredItems() {
      if (this.selected == null || this.selected == "") {
        return this.promoThree;
      } else {
        return this.promoThree.filter((item) => item.title == this.selected);
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  mounted() {
    this.getCard3();
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    getCard3() {
      axios
        .get(`/categories/app/${this.$appId}/type/PM`)
        .then((response) => {
          const data = response.data.data;

          this.promoThree = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              desc: "32",
              path: item.slug || "",
            };
          });

          this.resource = data.map((item) => item.category_name);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
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

.card-item {
  width: 16% !important;
}
.card-item-2 {
  width: 24% !important;
}

.card-img-container {
  overflow: hidden;
  width: 80px;
  height: 80px;
  margin: auto;
  border-radius: 50%;
}
.card-img-container-2 {
  overflow: hidden;
  width: 55px;
  height: 55px;
  margin: auto;
  border-radius: 50%;
}

.card-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.card-text {
  font-size: 10px;
  font-weight: 700;
}

.card-text-desktop {
  font-size: 14px;
  font-weight: 700;
}

.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, #f2f2f2 0%, #e1e1e1 50%, #f2f2f2 100%);
  background-size: 400% 400%;
  animation: skeleton 1.6s ease infinite;
}

@keyframes skeleton {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}
</style>
