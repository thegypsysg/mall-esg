<template>
  <div>
    <div v-if="isLoading" class="text-center loading-page">
      <v-progress-circular :size="50" color="#fa2964" indeterminate />
    </div>
    <div v-if="!isLoading">
      <template v-if="!isSmall">
        <Banner :app-details="appDetails1" />
        <Featured1
          title="Featured Merchants"
          desc="Check out promotions that are happening in merchants around you"
          :is-diff="false"
          :is-slide="true"
          :is-all-merchants="true"
          :is-featured-merchants="true"
          :active-mall-items="activeMerchantItems"
          :mall-merchants="mallMerchants"
        />
        <v-container class="mt-n4">
          <div class="promotion-container">
            <v-row class="mb-4">
              <v-col cols="4">
                <h1>All Other Merchants</h1>
              </v-col>
            </v-row>
            <v-sheet
              class="d-flex justify-space-between flex-wrap"
              elevation="0"
            >
              <template v-for="(item, index) in allMallMerchants" :key="index">
                <div class="mx-1">
                  <v-lazy :options="{ threshold: 0.5 }" min-height="370">
                    <v-card
                      class="my-4 mx-1 featured-card"
                      width="370"
                      elevation="1"
                      @click="toggle"
                    >
                      <div
                        v-if="!isDiff"
                        class="card-title-container d-flex justify-space-between align-center px-2 py-4"
                      >
                        <div class="w-25 pr-3">
                          <v-img :src="$fileURL + item?.logo" height="30" />
                        </div>
                        <div
                          class="w-75 d-flex align-center justify-space-between"
                        >
                          <div class="card-title">
                            <h4 class="text-no-wrap">
                              {{ item?.partner_name }}
                            </h4>
                            <span class="text-no-wrap text-caption text-blue"
                              >{{ item?.mall_name }},
                              {{ item?.unit_number }}</span
                            >
                            <br />
                            <span class="text-no-wrap text-primary">{{
                              item?.town_name
                            }}</span>
                          </div>
                          <span
                            class="text-red card-title-right text-no-wrap text-red"
                            >{{ item?.distanceText }}</span
                          >
                        </div>
                      </div>
                      <div class="featured-card-img-cont">
                        <v-img
                          class="featured-card-img"
                          :src="$fileURL + item?.location_image"
                          transition="fade-transition"
                        >
                          <template #placeholder>
                            <div class="skeleton" />
                          </template>
                        </v-img>
                        <!-- <div class="skeleton" /> -->
                      </div>

                      <div
                        v-if="item?.featured === 'Y'"
                        class="card-tag"
                        :class="{
                          'card-tag-1': isDiff,
                          'card-tag-2': !isDiff,
                        }"
                        style="top: 120px"
                      >
                        Featured
                      </div>
                      <div
                        v-if="!isDiff"
                        style="
                          font-weight: 400;
                          font-size: 14px;
                          position: relative;
                        "
                        class="px-2 pt-5 pb-2"
                      >
                        {{ item?.outlet_count }} Outlets |
                        {{ item?.promotion_count }} Promotions
                      </div>
                      <div
                        v-if="!isDiff"
                        class="card-btn-container d-flex justify-space-between"
                        :class="{
                          'card-btn-container-1': !isDiff,
                          'card-btn-container-2': isDiff,
                        }"
                      >
                        <v-btn
                          variant="outlined"
                          color="black"
                          class="card-btn"
                          width="32"
                          height="32"
                          icon="mdi-share-variant-outline"
                        >
                          <v-icon color="rgb(38, 38, 38)" size="22">
                            mdi-share-variant-outline
                          </v-icon>
                          <v-menu activator="parent">
                            <v-list>
                              <v-list-item @click="console.log('share')">
                                <v-list-item-title>
                                  <v-icon class="mr-4" color="black" size="18">
                                    mdi-email-outline </v-icon
                                  >Email
                                </v-list-item-title>
                              </v-list-item>
                              <v-list-item @click="console.log('share')">
                                <v-list-item-title>
                                  <v-icon class="mr-4" size="18">
                                    <i
                                      class="fa-brands fa-facebook-f"
                                    /> </v-icon
                                  >Facebook
                                </v-list-item-title>
                              </v-list-item>
                              <v-list-item @click="console.log('share')">
                                <v-list-item-title>
                                  <v-icon class="mr-4" color="black" size="18">
                                    mdi-twitter </v-icon
                                  >Twitter
                                </v-list-item-title>
                              </v-list-item>
                              <v-list-item @click="console.log('share')">
                                <v-list-item-title>
                                  <v-icon class="mr-4" size="18">
                                    <i
                                      class="fa-brands fa-linkedin-in"
                                    /> </v-icon
                                  >Linkedin
                                </v-list-item-title>
                              </v-list-item>
                            </v-list>
                          </v-menu>
                        </v-btn>
                        <v-btn
                          class="card-btn"
                          variant="outlined"
                          color="black"
                          icon="mdi-heart"
                          width="32"
                          height="32"
                        >
                          <v-icon color="red"> mdi-heart </v-icon>
                        </v-btn>
                      </div>

                      <div
                        v-if="isDiff"
                        style="gap: 5px"
                        class="card-info px-2 pt-3 pb-2 d-flex flex-column"
                      >
                        <p style="font-weight: 600; font-size: 16px">
                          Hainan Chicken Rice with steamed Chicken topped with
                          Soya Sauce
                        </p>
                        <div class="d-flex justify-space-between mt-2">
                          <div
                            style="font-weight: 600; font-size: 11px; gap: 5px"
                            class="d-flex"
                          >
                            <p>
                              <span class="text-muted">120</span>
                              View
                            </p>
                            <p>
                              <span class="text-muted">10</span>
                              Likes
                            </p>
                            <p>
                              <span class="text-muted">25</span>
                              Purchased
                            </p>
                          </div>
                          <div style="font-size: 11px">
                            <v-icon color="#F63F17"> mdi-star </v-icon>
                            <v-icon color="#F63F17"> mdi-star </v-icon>
                            <v-icon color="#F63F17"> mdi-star </v-icon>
                            <v-icon color="#F63F17"> mdi-star </v-icon>
                            <v-icon color="#F63F17"> mdi-star-outline </v-icon>
                            <span class="ml-2">( 132 rates )</span>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="isDiff"
                        class="card-description pa-3 d-flex flex-column"
                        style="position: relative; gap: 10px"
                      >
                        <!-- <div class="card-price">
                        <img
                          src="@/assets/featured-price-img.png"
                          height="15"
                        />
                        <span class="ml-5">$80</span>
                      </div> -->
                        <div class="d-flex">
                          <div
                            class="card-address d-flex align-center w-66"
                            style="gap: 25px"
                          >
                            <img
                              src="@/assets/featured-address-img.png"
                              width="24"
                              height="28"
                            />
                            <div class="card-address-info">
                              <h4>Papa Rich</h4>
                              <h4>Parkway Parade - #01-23, Marine Parade</h4>
                            </div>
                          </div>
                          <div
                            style="font-size: 12px; text-align: right"
                            class="w-33"
                          >
                            <span class="text-red">10.20 kms</span
                            ><span class="text-muted"> away</span>
                          </div>
                        </div>
                        <div class="d-flex justify-space-between mt-4">
                          <div class="d-flex">
                            <v-icon> mdi-calendar </v-icon>
                            <div>
                              <p style="font-size: 14px" class="ml-2">
                                Starts 15/03/2023
                              </p>
                              <p style="font-size: 12px" class="ml-2">
                                (27 days ago)
                              </p>
                            </div>
                          </div>
                          <div class="d-flex">
                            <v-icon> mdi-calendar </v-icon>
                            <div>
                              <p style="font-size: 14px" class="ml-2">
                                Starts 15/03/2023
                              </p>
                              <p style="font-size: 12px" class="ml-2">
                                (27 days ago)
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        v-if="isDiff"
                        class="py-5 px-3 d-flex align-center justify-space-around"
                        style="background: #f3f3f3; gap: 20px; color: #5e5e5e"
                      >
                        <span style="color: #0197d5; font-weight: 500"
                          >S$ 46.40</span
                        >
                        <v-btn
                          class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 text-white d-flex align-center pa-4"
                          style="
                            background: #e99820;
                            color: #ffffff;
                            border-color: #008d00;
                            font-weight: 400;
                            font-size: 12px;
                            border-radius: 10px;
                          "
                        >
                          <span>Reedem Now</span>
                        </v-btn>
                      </div>
                      <!-- <div v-if="isDiff" class="card-distance">
                      <v-icon color="#808080"> mdi-map-marker </v-icon>
                      <span class="text-red">10.20 kms</span
                      ><span class="text-muted"> away</span>
                    </div> -->
                    </v-card>
                  </v-lazy>
                </div>
              </template>
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
              height: itemSelectedComplete?.id == 1 ? '70px' : '240px',
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
            <v-container v-if="itemSelectedComplete?.id != 1" class="pa-0 ma-0">
              <v-slide-group class="">
                <v-slide-group-item
                  v-for="item in city"
                  :key="item.id"
                  class="mx-4"
                >
                  <div
                    style="width: 130px !important"
                    class="card-container d-flex flex-column"
                  >
                    <!-- <v-lazy :options="{ threshold: 0.5 }" min-height="270"> -->
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
        <v-container>
          <div
            :style="{
              paddingTop: itemSelectedComplete?.id == 1 ? '100px' : '270px',
            }"
          >
            <v-container class="mt-4 mb-n4">
              <h4>
                Malls in {{ itemSelectedComplete?.title }} (<span
                  class="text-red"
                  >{{ mallCount }}</span
                >
                Malls)
              </h4>

              <v-slide-group v-if="town.length > 0" class="">
                <v-slide-group-item
                  v-for="item in town"
                  :key="item.id"
                  class="mx-4"
                >
                  <div
                    style="width: 130px !important"
                    class="card-container d-flex flex-column"
                  >
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
            <Featured2
              title="Featured Merchants"
              desc="Check out promotions that are happening in merchants around you"
              :is-diff="false"
              :is-slide="true"
              :is-all-merchants="true"
              :is-featured-merchants="true"
              :active-mall-items="activeMerchantItems"
              :mall-merchants="mallMerchants"
            />
          </div>
        </v-container>
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
  name: "ViewAllMerchantsVue",
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
      activeMerchantItems: [],
      mallMerchants: [],
      allMallMerchants: [],
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
    mallCount() {
      return localStorage.getItem("mallCount");
    },
    latitude() {
      return localStorage.getItem("latitude");
    },
    longitude() {
      return localStorage.getItem("longitude");
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  mounted() {
    this.getMallMerchantsData();
    this.getCityMall();
    this.getAppDetails1();
  },
  methods: {
    changeSelectedCity(item) {
      this.selectedCity = item;
      this.getMallMerchantsData(item);
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
        .get(`/mall-town-list/mall-city/${this.selectedCity?.id || 1}`)
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

    getMallMerchantsData(selectedCity) {
      axios
        .get(
          this.itemSelectedComplete?.id != 1 && selectedCity?.id
            ? `/mall-merchant-outlets/list-by-status/all/${this.latitude}/${
                this.longitude
              }/${this.itemSelectedComplete?.id || 1}/${selectedCity?.id || 1}`
            : this.itemSelectedComplete?.id == 1 && !selectedCity?.id
            ? `/mall-merchant-outlets/list-by-status/all/${this.latitude}/${
                this.longitude
              }/${this.itemSelectedComplete?.id || 1}/1`
            : this.itemSelectedComplete?.id != 1 && !selectedCity?.id
            ? `/mall-merchant-outlets/list-by-status/all/${this.latitude}/${
                this.longitude
              }/${this.itemSelectedComplete?.id || 1}`
            : `/mall-merchant-outlets/list-by-status/all/${this.latitude}/${this.longitude}/1/1`
        )
        .then((response) => {
          const data = response.data.data;

          const items = data.map((item) => item.partner_name);
          let uniqueItems = {};
          for (let i = 0; i < items.length; i++) {
            uniqueItems[items[i]] = true;
          }
          this.activeMerchantItems = Object.keys(uniqueItems);

          this.mallMerchants = data.map((item) => {
            return {
              ...item,
              distanceText: this.formatDistance(parseInt(item.distance)),
            };
          });
          this.allMallMerchants = data
            .filter((item) => item.featured !== "Y" && item.active === "Y")
            .map((item) => {
              return {
                ...item,
                distanceText: this.formatDistance(parseInt(item.distance)),
              };
            });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getActiveMallData() {
      this.isLoading = true;
      axios
        .get(`/malls/active-list/${this.latitude}/${this.longitude}/featured`)
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          // let itemFinal = [];
          this.activeMerchantItems = data
            .sort((a, b) => a.distance - b.distance)
            .map((item) => item.partner_name);
          this.mallMerchants = data
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
                oneCity: item.one_city || "N",
                partnerId: item.partner_id || 0,
                name: item.partner_name || "",
                subIndustryName: item.sub_industry_name || "",
              };
            });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        })
        .finally(() => {
          this.isLoading = false;
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

.section-title h1 {
  font-weight: 700;
  color: black;
  font-size: 48px;
  text-align: center;
}

.title-line {
  width: 150px;
  background: #e1c530;
  height: 1px;
  margin: -5px auto 40px;
}

.section-select {
  width: 330px;
  margin: 0 auto;
  text-align: center;
  color: black !important;
}

.section-content h1 {
  font-weight: 500;
  font-size: 48px;
  color: black;
  width: 100% !important;
}

.card-container {
  width: 390px !important;
}

.featured-card {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43) !important;
}
.featured-card:hover {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.43) !important;
}

.featured-card-img-cont {
  overflow: hidden !important;
  height: 225px !important;
}

.featured-card-img {
  transition: all 0.3s;
  transform: scale(1.4);
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.featured-card:hover .featured-card-img {
  transform: scale(1.5);
}

.card-title h4 {
  font-weight: 600;
  font-size: 18px;
}

.card-title span {
  font-weight: 500;
  font-size: 14px;
}

.card-title-right {
  font-size: 10px;
  font-weight: 600;
}

.card-btn-container {
  position: absolute;
  gap: 10px;
}

.card-btn-container-1 {
  bottom: 55px;
  right: 30px;
}
.card-btn-container-2 {
  top: 210px;
  right: 30px;
}

.card-btn {
  background: #fff !important;
}

.line-divider {
  background: #d1d1d1;
  width: 300px;
  height: 1.5px;
}

.card-tag {
  background: #e99820;
  color: #ffffff;

  padding: 5px 25px;
  font-size: 11px;
  position: absolute;
}
.card-tag-1 {
  top: 20px;
  right: 10px;
}
.card-tag-2 {
  top: 100px;
  left: 10px;
}
.card-distance {
  background: #fff;
  position: absolute;
  top: 175px;
  left: 10px;
  padding: 5px 10px;
  font-size: 13px;
}

.skeleton {
  width: 100%;
  height: 100%;
  border-radius: 0;
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

.card-container {
  width: 290px !important;
}

.featured-card {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43) !important;
}
.featured-card:hover {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.43) !important;
}

.featured-card-img-cont-mobile {
  overflow: hidden;
  height: 180px;
}

.featured-card-img-cont-2 {
  overflow: hidden;
  height: 154px;
}

.featured-card-img {
  transition: all 0.3s;
  transform: scale(1.4);
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.featured-card:hover .featured-card-img {
  transform: scale(1.5);
}

.card-title-mobile {
  gap: -10px;
}

.card-title-mobile h4 {
  font-weight: 600;
  font-size: 14px;
}

.card-title-mobile span {
  font-weight: 500;
  font-size: 11px;
}

.card-title-right {
  font-size: 9px;
  font-weight: 600;
}

.card-btn-container-mob {
  position: absolute;
  gap: 20px;
}

.card-btn-container-1-mob {
  bottom: 100px;
  right: 30px;
}
.card-btn-container-1-malls {
  bottom: 55px;
  right: 30px;
}
.card-btn-container-2-mob {
  top: 142px;
  right: 30px;
}

.card-btn {
  background: #fff !important;
}

.line-divider {
  background: #d1d1d1;
  width: 300px;
  height: 1.5px;
}

.card-tag {
  width: 100px;
  background: #e99820;
  color: #ffffff;
  position: absolute;

  padding: 2px 25px;
  font-size: 11px;
}
.card-tag-1-mob {
  top: 140px;
  right: 10px;
}
.card-tag-2-mob {
  top: 105px;
  left: 10px;
}
.card-distance {
  background: #fff;
  position: absolute;
  top: 115px;
  left: 10px;
  padding: 5px 8px;
  font-size: 10px;
}

.card-rating span {
  font-weight: 400;
  font-size: 12px;
}

.card-price {
  font-weight: 500;
  font-size: 11px;
}

.card-time {
  font-size: 11px;
}

.card-address-info-mob {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
}

.card-offer {
  font-weight: 400;
  font-size: 12px;
}
</style>
