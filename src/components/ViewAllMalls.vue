<template>
  <div>
    <div v-if="isLoading" class="text-center loading-page">
      <v-progress-circular :size="50" color="#fa2964" indeterminate />
    </div>
    <div v-if="!isLoading">
      <template v-if="!isSmall">
        <Banner :app-details="appDetails1" />
        <Featured1
          title="Featured Malls"
          desc="Check out promotions that are happening in malls around you"
          :is-diff="false"
          :is-slide="false"
          :active-mall-items="activeMallItems"
          :active-mall-cards="activeMallCards"
        />
        <v-container class="mt-n4">
          <div class="promotion-container">
            <v-row class="mb-4">
              <v-col cols="2">
                <h1>All Malls</h1>
              </v-col>
              <v-col cols="4">
                <v-autocomplete
                  clearable
                  label="Type a Malls Name"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  clearable
                  label="---Select Zone---"
                  variant="outlined"
                />
              </v-col>
              <v-col cols="3">
                <v-autocomplete
                  clearable
                  label="---Select Town---"
                  variant="outlined"
                />
              </v-col>
            </v-row>
            <v-sheet
              class="d-flex justify-space-between flex-wrap"
              elevation="0"
            >
              <div v-for="n in 8" :key="n">
                <v-lazy :options="{ threshold: 0.5 }" min-height="100">
                  <v-card
                    class="my-4 card-cont"
                    :class="{
                      'mx-3 pa-2 text-center': !isSmall,
                      'mx-1': isSmall,
                    }"
                    :height="!isSmall ? 290 : 280"
                    :width="!isSmall ? 260 : 250"
                    elevation="1"
                    @click="toggle"
                  >
                    <!-- <div
                v-if="isSmall"
                style="
                  font-size: 16px;
                  font-weight: 600;
                  margin-bottom: 10px;
                  line-height: 19.36px;
                "
                class="pt-2"
              >
                {{
                  card.text.length >= 28
                    ? card.text.substring(0, 28) + '..'
                    : card.text
                }}
              </div> -->
                    <!-- <div
                v-if="!isSmall"
                style="
                  font-size: 16px;
                  font-weight: 600;
                  margin-bottom: 10px;
                  line-height: 19.36px;
                "
                class="pt-2 text-left"
              >
                Parkway Parade
              </div> -->
                    <div
                      class="trending__app"
                      :class="{
                        'card-image-cont-1': !isSmall,
                        'card-image-cont-2': isSmall,
                      }"
                    >
                      <v-img
                        src="https://admin1.the-gypsy.sg/img/app/453d9f4812f4e609d9261c07cf3bc5f9.jpg"
                        class="card-image"
                        :height="isSmall ? 170 : 220"
                        cover
                        transition="fade-transition"
                      >
                        <template #placeholder>
                          <div class="skeleton skeleton-category ml-2" />
                        </template>
                      </v-img>
                    </div>
                    <v-btn
                      elevation="4"
                      to="#"
                      style="
                        position: absolute;
                        bottom: 110px;
                        left: 15px;
                        background-color: #fa2964;
                        border-radius: 5px;
                        padding-left: 8px;
                        padding-right: 6px;
                        padding-top: 4px;
                        padding-bottom: 4px;
                        font-weight: 600;
                        font-size: 12px;
                      "
                    >
                      <span class="text-white" style="">View Jobs</span>
                    </v-btn>
                    <!-- <div
                v-if="card.featured == 'Y'"
                style="
                  position: absolute;
                  top: 50px;
                  right: 15px;
                  background-color: #f69400;
                  border-radius: 5px;
                  padding-left: 10px;
                  padding-right: 6px;
                  padding-top: 4px;
                  padding-bottom: 4px;
                  font-weight: 600;
                  font-size: 12px;
                  width: 120px;
                  text-align: left !important;
                "
              >
                <span class="text-white text-left" style="">Featured</span>
              </div> -->

                    <div
                      class="card-description d-flex flex-column mt-6"
                      style="position: relative; gap: 10px"
                    >
                      <div
                        class="card-address-info text-left mt-n4 mb-n2"
                        style="font-weight: 400"
                      >
                        <p>
                          <span class="text-red">100 kms</span
                          ><span class="text-muted"> away</span>
                        </p>
                      </div>
                      <div
                        style="gap: 5px"
                        class="card-address d-flex align-center"
                      >
                        <div style="width: 25%">
                          <v-img
                            src="https://admin1.the-gypsy.sg/img/app/20ceddeed08eb7cb435367d83a9446e5.jpg"
                            height="35"
                          >
                            <template #placeholder>
                              <div class="skeleton" />
                            </template>
                          </v-img>
                        </div>
                        <div
                          style="width: 75%"
                          class="card-address-info text-left"
                        >
                          <h4 class="mt-4" style="font-weight: 600">
                            Parkway Parade
                          </h4>

                          <div class="mt-2" style="font-weight: 400">
                            <p>Raffles Place (Central), Singapore City</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="card-btn-container-1 d-flex justify-space-between"
                    >
                      <v-btn
                        color="white"
                        class="card-btn"
                        :width="isSmall ? 40 : 32"
                        :height="isSmall ? 40 : 32"
                        icon="mdi-share-variant-outline"
                      >
                        <v-icon size="20" color="red">
                          mdi-share-variant-outline
                        </v-icon>
                      </v-btn>
                      <v-btn
                        class="card-btn"
                        color="white"
                        icon="mdi-heart-outline"
                        :width="isSmall ? 40 : 32"
                        :height="isSmall ? 40 : 32"
                      >
                        <v-icon size="20" color="red">
                          mdi-heart-outline
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-card>
                </v-lazy>
              </div>
            </v-sheet>
          </div>
        </v-container>
        <Footer />
      </template>
      <template v-if="isSmall">
        <div class="position-fixed w-100 bg-white" style="z-index: 100">
          <div
            class="app-bar w-100 d-flex align-center px-2"
            style="height: 50px; background: #f3f3f3"
          >
            <v-btn variant="text" to="/" icon="mdi-arrow-left">
              <v-icon color="black" size="20"> mdi-arrow-left </v-icon>
            </v-btn>
            <div class="d-flex align-center ml-2" style="gap: 20px">
              <!-- <img :src="$fileURL + promoData?.main_image" width="45" height="35" /> -->
              <img
                src="@/assets/happening-mobile-img-1.png"
                width="45"
                height="35"
              />
              <h3>All Malls</h3>
            </div>
          </div>
          <div
            class="d-flex flex-column align-center justify-center pt-2"
            :style="{
              height:
                itemSelectedComplete?.id == 1 && town.length == 0
                  ? '70px'
                  : itemSelectedComplete?.id != 1 && town.length == 0
                  ? '120px'
                  : '240px',
            }"
          >
            <div style="margin-top: 10px" class="d-flex flex-column w-100">
              <v-menu>
                <template #activator="{ props }">
                  <v-btn
                    style="font-size: 15px; color: #494949"
                    v-bind="props"
                    variant="text"
                  >
                    <template
                      v-if="
                        !itemSelectedComplete || itemSelectedComplete == null
                      "
                    >
                      <span>{{ itemSelected }}</span>
                    </template>
                    <template
                      v-if="
                        itemSelectedComplete || itemSelectedComplete != null
                      "
                    >
                      <span class="text-blue-darken-4">{{
                        itemSelectedComplete?.title
                      }}</span
                      ><span class="text-red">
                        ({{ itemSelectedComplete?.count }}
                        {{
                          itemSelectedComplete?.count == "1" ||
                          itemSelectedComplete?.count == "0"
                            ? "Mall"
                            : "Malls"
                        }})</span
                      >
                    </template>
                    <v-icon right dark> mdi-menu-down </v-icon>
                  </v-btn>
                </template>
              </v-menu>
              <v-menu v-if="itemSelectedComplete?.oneCity != true">
                <template #activator="{ props }">
                  <v-btn
                    style="font-size: 15px; color: #494949"
                    v-bind="props"
                    variant="text"
                  >
                    <template v-if="selectedCity == null">
                      <span>---Select City---</span>
                    </template>
                    <template v-if="selectedCity != null">
                      <span class="text-blue-darken-4">
                        {{ selectedCity?.title }}</span
                      ><span class="text-black">
                        ({{ selectedCity?.count }}
                        {{
                          selectedCity?.count == "1" ||
                          selectedCity?.count == "0"
                            ? "Mall"
                            : "Malls"
                        }})</span
                      >
                    </template>
                    <v-icon right dark> mdi-menu-down </v-icon>
                  </v-btn>
                </template>
                <v-list style="max-height: 50vh">
                  <v-list-item
                    v-for="(item, index) in city"
                    :key="index"
                    :value="index"
                    @click="changeSelectedCity(item)"
                  >
                    <v-list-item-title>
                      <span class="text-blue-darken-4">{{ item.title }}</span
                      ><span class="text-black">
                        ({{ item.count }}
                        {{
                          item.count == "1" || item.count == "0"
                            ? "Mall"
                            : "Malls"
                        }})</span
                      >
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <v-container class="pa-0 ma-0 d-flex justify-start">
              <!-- <v-slide-group class="">
                <v-slide-group-item
                  v-for="item in city"
                  :key="item.id"
                  class="mx-4"
                >
                  <div
                    style="width: 130px !important"
                    class="card-container d-flex flex-column"
                  >
                    <v-card
                      class="mt-4 mx-3 featured-card"
                      width="120"
                      height="130"
                      elevation="0"
                    >
                      <div style="font-size: 12px" class="card-title-container">
                        <p class="mb-2">
                          {{ item?.title }}
                        </p>
                        <v-img src="@/assets/gypsi-1.png" cover height="80" />
                        <p>
                          <span class="text-red">{{ item?.count }}</span> Malls
                        </p>
                      </div>
                    </v-card>
                  </div>
                </v-slide-group-item>
              </v-slide-group> -->
              <v-slide-group v-if="town.length > 0">
                <v-slide-group-item
                  v-for="item in town"
                  :key="item.id"
                  class="mx-4"
                >
                  <div style="width: 130px !important" class="card-container">
                    <!-- <v-lazy :options="{ threshold: 0.5 }" min-height="270"> -->
                    <v-card
                      class="mt-2 mx-3 featured-card"
                      width="120"
                      height="130"
                      elevation="0"
                    >
                      <div style="font-size: 12px" class="card-title-container">
                        <p class="mb-2">
                          {{ item?.title }}
                        </p>
                        <!-- <v-img
                          v-if="item.image != null"
                          :src="$fileURL + item.image"
                          cover
                          height="80"
                        /> -->
                        <v-img src="@/assets/gypsi-1.png" cover height="80" />
                        <!-- <div class="card-title d-flex flex-column">
                        <span>River Valley</span>
                      </div> -->
                        <p>
                          <span class="text-red">{{ item?.count }}</span> Malls
                        </p>
                      </div>
                    </v-card>
                    <!-- </v-lazy> -->
                  </div>
                </v-slide-group-item>
              </v-slide-group>
            </v-container>
          </div>
        </div>
        <div
          :style="{
            paddingTop:
              itemSelectedComplete?.id == 1 && town.length == 0
                ? '100px'
                : itemSelectedComplete?.id != 1 && town.length == 0
                ? '150px'
                : '270px',
          }"
        >
          <v-container class="mt-4 mb-n4">
            <h4 v-if="selectedCity == null">
              Malls in {{ itemSelectedComplete?.title }} (<span
                class="text-red"
                >{{ mallCount }}</span
              >
              Malls)
            </h4>
            <h4 v-else>
              Malls in {{ selectedCity?.title }} (<span class="text-red">{{
                filteredMalls.length
              }}</span>
              {{ filteredMalls.length > 1 ? "Malls" : "Mall" }})
            </h4>
          </v-container>
          <Featured2
            title="Featured Malls"
            desc="Check out promotions that are happening in malls around you"
            :is-diff="false"
            :is-slide="false"
            :active-mall-items="activeMallItems"
            :active-mall-cards="filteredMalls"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Featured1 from "@/components/DesktopView/Featured/Featured.vue";
import Featured2 from "@/components/MobileView/Featured/Featured.vue";
</script>

<script>
import { mapState } from "vuex";
import axios from "@/util/axios";
export default {
  name: "DesktopView",
  data() {
    return {
      screenWidth: window.innerWidth,
      drawer: false,
      isLoading: true,
      appDetails1: null,
      promoOne: [],
      promoTwo: [],
      otherCard1: [],
      otherCard2: [],
      otherCard3: [],
      activeMallItems: [],
      activeMallCards: [],
      city: [],
      town: [],

      selectedCity: null,
      selectedMall: null,

      otherPromotionData: [],
      otherPromotionDataFinal: [],
    };
  },
  computed: {
    ...mapState(["itemSelected"]),
    ...mapState(["itemSelectedComplete"]),
    isSmall() {
      return this.screenWidth < 640;
    },
    latitude() {
      return localStorage.getItem("latitude");
    },
    mallCount() {
      return localStorage.getItem("mallCount");
    },
    longitude() {
      return localStorage.getItem("longitude");
    },
    filteredMalls() {
      if (!this.selectedMall) {
        return this.activeMallCards;
      } else {
        return this.activeMallCards.filter(
          (mall) => mall.name === this.selectedMall
        );
      }
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.getActiveMallData();
    this.getCityMall();
    this.getAppDetails1();
  },
  methods: {
    changeSelectedCity(item) {
      this.selectedCity = item;
      this.getActiveMallData(item);
      this.getTownMall();
      console.log(item);
    },
    getCityMall() {
      this.isLoading = true;
      axios
        .get(
          `/mall-city-list/mall-country/${this.itemSelectedComplete?.id || 1}`
        )
        .then((response) => {
          const data = response.data.data;
          //console.log(data);
          this.city = data.map((city) => {
            return {
              id: city.city_id,
              title: city.city_name,
              count: city.mall_count,
              image: city?.city_image || "",
              countryId: city.country_id,
              path: "#",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getTownMall() {
      axios
        .get(
          `/mall-town-list/mall-city/${
            this.selectedCity != null ? this.selectedCity.id : 1
          }`
        )
        .then((response) => {
          const data = response.data.data;
          //console.log(data);
          this.town = data.map((town) => {
            return {
              id: town.town_id,
              title: town.town_name,
              count: town.mall_count,
              image: town?.town_image || "",
              cityId: town.city_id,
              path: "#",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    getAppDetails1() {
      this.isLoading = true;
      axios
        .get(`/app/details/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          this.appDetails1 = data;
          if (this.itemSelectedComplete?.id == 1) {
            this.getTownMall();
          }
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    formatDistance(distance) {
      if (distance === 0 || distance === null) {
        return "0 km";
      } else {
        //const roundedDistance = Math.round(distance * 10) / 10;
        //const formattedDistance = roundedDistance.toLocaleString('en-US', {
        //  minimumFractionDigits: 1,
        //  maximumFractionDigits: 1,
        //});
        //return `${formattedDistance} km`;

        return distance.toFixed(1) + " kms";
      }
    },

    getActiveMallData(selectedCity) {
      axios
        .get(
          this.itemSelectedComplete?.id != 1 && selectedCity?.id
            ? `/malls/active-list/${this.latitude}/${this.longitude}/all/${
                this.itemSelectedComplete?.id || 1
              }/${selectedCity?.id || 1}`
            : this.itemSelectedComplete?.id == 1 && !selectedCity?.id
            ? `/malls/active-list/${this.latitude}/${this.longitude}/all/${
                this.itemSelectedComplete?.id || 1
              }/1`
            : this.itemSelectedComplete?.id != 1 && !selectedCity?.id
            ? `/malls/active-list/${this.latitude}/${this.longitude}/all/${
                this.itemSelectedComplete?.id || 1
              }`
            : `/malls/active-list/${this.latitude}/${this.longitude}/all/1/1`
        )
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          // let itemFinal = [];
          this.activeMallItems = data
            .sort((a, b) => a.distance - b.distance)
            .map((item) => item.partner_name);
          this.activeMallCards = data
            // .filter((item) => item.active === "Y")
            .sort((a, b) => a.distance - b.distance)
            .map((item) => {
              return {
                id: item.mall_id || 0,
                town: item.town_name || "",
                city: item.city_name || "",
                country: item.country_name || "",
                address:
                  item.town_name &&
                  item.city_name &&
                  item.country_name &&
                  item.one_city == "Y"
                    ? `${item.town_name}, ${item.city_name}`
                    : item.town_name &&
                      item.city_name &&
                      item.country_name &&
                      item.one_city != "Y"
                    ? `${item.town_name}, ${item.city_name}, ${item.country_name}`
                    : item.country_name &&
                      item.city_name &&
                      item.town_name == null
                    ? `${item.city_name}, ${item.country_name}`
                    : item.country_name &&
                      item.city_name == null &&
                      item.town_name == null
                    ? `${item.country_name}`
                    : item.city_name &&
                      item.country_name == null &&
                      item.town_name == null
                    ? `${item.city_name}`
                    : item.town_name &&
                      item.country_name == null &&
                      item.city_name == null
                    ? `${item.town_name}`
                    : "-",
                distance: item.distance || 0,
                distanceText: this.formatDistance(item.distance),
                featured: item.featured || "N",
                latitude: item.latitude || "",
                longitude: item.longitude || "",
                logo: this.$fileURL + item.logo || "",
                mainImage: this.$fileURL + item.main_image || "",
                oneCity: item.one_city || "N",
                partnerId: item.partner_id || 0,
                name: item.partner_name || "",
                subIndustryName: item.sub_industry_name || "",
              };
            });
          console.log(this.activeMallCards);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
  },
};
</script>

<style>
.loading-page {
  height: 100vh;
  margin-top: 300px;
}

@media (max-width: 599px) {
  .loading-page {
    margin-top: 450px;
  }
}

.banner-header {
  color: #fa2964;
  font-weight: 900;
}
.banner-container {
  margin-top: 270px;
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
.banner-container-desktop {
  height: 500px;
  margin-top: 90px;
}
.banner-container-desktop img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.section-select-desktop {
  min-width: 280px;
  max-width: 400px;
  margin: 0 auto;
  color: black !important;
}

.international-cont {
  background: #f8f8f8;
}

.card-item-2 {
  width: 95% !important;
}

.card-container {
  width: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}

.trending__app:hover .overlay {
  opacity: 1;
}

.card-container-desktop {
  width: 90%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 10px;
}

.card-cont {
  position: relative;
}

.card-cont:hover {
  background: white !important;
}

.card-img-container {
  position: relative;
  overflow: hidden;
  height: 170px;
  width: 300px;
}
.card-img-container-2 {
  position: relative;
  overflow: hidden;
  height: 240px;
  width: 100%;
  margin: auto;
}

.card-img {
  transition: all 0.3s;
  transform: scale(1);
  width: 100%;
  height: 100%;
}
.card-img-container:hover .card-img {
  transform: scale(1.2);
}
.card-img-container-2:hover .card-img {
  transform: scale(1.2);
}

.card-btn {
  background: #fff !important;
  border: none !important;
  box-shadow: 1px rgba(0, 0, 0, 1) !important;
}

.card-text {
  font-size: 14px;
  font-weight: 700;
}

.fw-700 {
  font-weight: 700;
}
.fs-10 {
  font-size: 10px;
}
.fs-14 {
  font-size: 14px;
}

.skeleton {
  width: 100%;
  height: 100%;
  background: linear-gradient(-90deg, #f2f2f2 0%, #e1e1e1 50%, #f2f2f2 100%);
  background-size: 400% 400%;
  animation: skeleton 1.6s ease infinite;
}

.card-transition-enter-active,
.card-transition-leave-active {
  transition: transform 0.5s, opacity 0.3s;
}

.card-transition-enter {
  opacity: 0;
  transform: translateX(-50%);
}

.card-transition-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
@keyframes skeleton {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.card-cont {
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 100;
}

.trending__app:hover .overlay {
  opacity: 1;
}
.card-image-cont-1 {
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 280px;
}
.card-image-cont-2 {
  position: relative;
  overflow: hidden;
  height: 100px;
  width: 100%;
}
.card-image-cont-3 {
  position: relative;
  overflow: hidden;
  height: 183px;
  width: 100%;
}

.card-btn-container-1 {
  position: absolute;
  gap: 10px;
  bottom: 90px;
  right: 30px;
  z-index: 100;
}
.card-btn-container-2 {
  position: absolute;
  gap: 10px;
  bottom: 20px;
  right: 10px;
  z-index: 100;
}

.card-btn {
  background: #fff !important;
  border: none !important;
  box-shadow: 1px rgba(0, 0, 0, 1) !important;
}
.card-image {
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  transform: scale(1);
}
.card-image-cont-1:hover .card-image {
  transform: scale(1.2);
}
.card-image-cont-2:hover .card-image {
  transform: scale(1.2);
}
.promotion-container {
  background: white;
}
.promotion-container .v-sheet {
  background: white;
  margin-bottom: 40px;
}
.promotion-container h3 {
  color: black;
  font-family: "Inter", sans-serif;
}

.promotion-container .view-all {
  font-size: 18px;
  text-transform: none;
  color: #636363;
}

.card-address-info {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
}
.card-address-info-mobile {
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
}

.skeleton {
  height: 100%;
  background: linear-gradient(-90deg, #f2f2f2 0%, #e1e1e1 50%, #f2f2f2 100%);
  background-size: 400% 400%;
  animation: skeleton 1.6s ease infinite;
}

.skeleton-category {
  width: 280px !important;
}

.section-head {
  font-size: 12px !important;
}

.view-all-1 {
  background: #0596d5;
  color: white;
  height: 50px !important;
  z-index: 1000 !important;
  /* Gaya view all yang sticky */
}

.my-slide {
  position: relative !important;
}

@keyframes skeleton {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: -100% 0;
  }
}

.description {
  width: 65%;
}
.description-2 {
  width: 100%;
}

.description-list li {
  margin-top: 20px;
  margin-left: 15px;
}

.registrable-desc {
  width: 45%;
  font-size: 20px;
}
.registrable-desc-2 {
  width: 100%;
  font-size: 16px;
}

.regist-desktop {
  font-size: 22px;
}

.regist-img {
  width: 30%;
}
.regist-img-2 {
  width: 100%;
}

.registrable-img {
  height: 250px;
  width: 250px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}
.registrable-img-cont {
  height: 250px;
  width: 250px;
  border-radius: 50%;
}
.registrable-img-2 {
  height: 245px;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
.registrable-img-cont-2 {
  height: 245px;
  width: 100%;
}

.regist-btn {
  font-size: 20px;
}
.regist-btn-2 {
  font-size: 16px;
}
</style>
