<template>
  <div>
    <div v-if="isLoading" class="text-center loading-page">
      <v-progress-circular :size="50" color="#fa2964" indeterminate />
    </div>
    <div v-if="!isLoading">
      <Banner :app-details="appDetails1" />
      <Promotions :promo-one="promoOne" :promo-two="promoTwo" />
      <OtherPromotion
        :items="
          otherPromotionData.sort(function (a, b) {
            return a.id - b.id;
          })
        "
      />
      <Happening />
      <Featured
        title="Featured Malls"
        desc="Check out promotions that are happening in malls around you"
        :is-diff="false"
        :active-mall-items="activeMallItems"
        :active-mall-cards="activeMallCards"
      />
      <Featured
        title="Featured Merchants"
        desc="Check out promotions that are happening with your Favorite Merchant"
        :is-diff="false"
        :mall-merchants="mallMerchants"
      />
      <Featured
        title="Featured Promotions"
        desc="Check out promotions that are happening with your Favorite Merchant"
        :is-diff="true"
        :mall-promotions="mallPromotions"
      />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Promotions from "@/components/MobileView/Promotions/Promotions.vue";

import Featured from "./Featured/Featured.vue";
import Happening from "./Happening/Happening.vue";
import OtherPromotion from "@/components/MobileView/Promotions/OtherPromotion/OtherPromotion.vue";
</script>

<script>
import { mapState } from "vuex";
import app from "@/util/eventBus";
import axios from "@/util/axios";
export default {
  name: "MobileView",

  components: { Featured, Happening },
  data() {
    return {
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

      otherPromotionData: [],
      otherPromotionDataFinal: [],
      mallMerchants: [],
      mallPromotions: [],
    };
  },
  computed: {
    ...mapState(["itemSelectedComplete", "itemSelected2Complete"]),
    latitude() {
      return localStorage.getItem("latitude");
    },
    longitude() {
      return localStorage.getItem("longitude");
    },
  },
  mounted() {
    this.getActiveMallData();
    this.getMallMerchantsData();
    this.getMallPromotionsData();
    Promise.all([
      this.getPromoDiscount(),
      this.getPromoMeals(),
      this.getPromoCategory(),
      this.getPromoPeople(),
      this.getPreferencePromo(),
      this.getOtherPromo(),
      this.getDaysPromo(),
      this.getVoucherPromo(),
      this.getAppDetails1(),
    ])
      .then(() => {
        let itemFinal = [];
        itemFinal = this.otherPromotionData.sort(function (a, b) {
          return a.id - b.id;
        });
        this.otherPromotionDataFinal = itemFinal;
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });

    app.config.globalProperties.$eventBus.$on(
      "getMallsActive",
      this.getActiveMallData
    );
  },
  beforeUnmount() {
    app.config.globalProperties.$eventBus.$off(
      "getMallsActive",
      this.getActiveMallData
    );
  },
  methods: {
    getAppDetails1() {
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
        });
    },

    getPromoDiscount() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/DT`)
        .then((response) => {
          const data = response.data.data;

          this.promoOne = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              desc: "32 Promotions",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    getPromoCategory() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/CAT`)
        .then((response) => {
          const data = response.data.data;

          this.promoTwo = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              desc: "32 Promos",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    getPromoMeals() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/MT`)
        .then((response) => {
          const data = response.data.data;

          const items = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 2,
            };
          });
          this.otherPromotionData.push({
            id: 1,
            title: "by Meals",
            name: "Promotion Meals",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getPromoPeople() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/PPLT`)
        .then((response) => {
          const data = response.data.data;

          const items = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 10,
            };
          });
          this.otherPromotionData.push({
            id: 2,
            title: "by People",
            name: "Promotion People",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getPreferencePromo() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/PT`)
        .then((response) => {
          const data = response.data.data;

          // let itemFinal = [];
          const items = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 5,
            };
          });
          this.otherPromotionData.push({
            id: 3,
            title: "by Preference",
            name: "Promotion Preference",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getOtherPromo() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/OPT`)
        .then((response) => {
          const data = response.data.data;

          // let itemFinal = [];
          const items = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 5,
            };
          });
          this.otherPromotionData.push({
            id: 4,
            title: "Other Types of ",
            name: "Promotion Others",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getDaysPromo() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/DAYST`)
        .then((response) => {
          const data = response.data.data;

          // let itemFinal = [];
          const items = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 5,
            };
          });
          this.otherPromotionData.push({
            id: 5,
            title: "by Day",
            name: "Promotion Day",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getVoucherPromo() {
      axios
        .get(`/list-tags-by-tag-header/tag-header-short/VT`)
        .then((response) => {
          const data = response.data.data;

          // let itemFinal = [];
          const items = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 5,
            };
          });

          this.otherPromotionData.push({
            id: 6,
            title: "Voucher ",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
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
    getActiveMallData() {
      axios
        .get(
          `/malls/active-list/${this.latitude}/${this.longitude}/featured/${
            this.itemSelectedComplete?.id || 1
          }/${this.itemSelected2Complete?.id || 1}`
        )
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          // let itemFinal = [];
          this.activeMallItems = data
            .sort((a, b) => a.distance - b.distance)
            .map((item) => item.partner_name);
          this.activeMallCards = data
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
    getMallMerchantsData() {
      axios
        .get(
          `/mall-merchant-outlets/list-by-status/all/${this.latitude}/${this.longitude}`
        )
        .then((response) => {
          const data = response.data.data;
          this.mallMerchants = data.map((item) => {
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
    getMallPromotionsData() {
      axios
        .get(`/mall-promotions/featured`, {
          params: {
            userLatitude: this.latitude,
            userLongitude: this.longitude,
            limit: 6,
          },
        })
        .then((response) => {
          const data = response.data.data;
          this.mallPromotions = data.map((item) => {
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
</style>
