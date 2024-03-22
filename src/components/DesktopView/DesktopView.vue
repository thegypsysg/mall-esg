<template>
  <div>
    <div v-if="isLoading" class="text-center loading-page">
      <v-progress-circular :size="50" color="#fa2964" indeterminate />
    </div>
    <div v-if="!isLoading">
      <Banner :app-details="appDetails1" />
      <Promotions :promo-one="promo" :promo-two="promoCategory" />
      <Promotions title="Meals" :promo-two="promoMeals" />
      <Promotions title="People" :promo-two="promoPeople" />
      <Promotions title="Preference" :promo-two="promoPreference" />
      <Promotions title="Other Types" :promo-two="promoOther" />
      <Promotions title="Days" :promo-two="promoDays" />
      <Promotions title="Vouchers" :promo-two="promoVoucher" />
      <!-- <OtherPromotion :items="otherPromotionDataFinal[0]" /> -->
      <Happening />
      <Featured
        title="Featured Malls"
        desc="Check out promotions that are happening in malls around you"
        :is-diff="false"
        :is-slide="false"
        :active-mall-items="activeMallItems"
        :active-mall-cards="activeMallCards"
      />
      <Featured
        title="Featured Merchants"
        desc="Check out promotions that are happening with your Favorite Merchant"
        :is-diff="false"
        :is-slide="true"
        :is-featured-merchants="true"
        :mall-merchants="mallMerchants"
      />
      <Featured
        title="Featured Promotions"
        desc="Check out promotions that are happening with your Favorite Merchant"
        :is-diff="true"
        :is-slide="true"
        :is-featured-promotions="true"
        :mall-promotions="mallPromotions"
      />
      <Footer />
    </div>
  </div>
</template>

<script setup>
import Banner from "@/components/Banner.vue";
import Footer from "@/components/Footer.vue";
import Promotions from "@/components/DesktopView/Promotions/Promotions.vue";
import Featured from "./Featured/Featured.vue";
import Happening from "./Happening/Happening.vue";
</script>

<script>
import axios from "@/util/axios";
// import OtherPromotion from "@/components/DesktopView/Promotions/OtherPromotion/OtherPromotion.vue";
export default {
  name: "DesktopView",
  components: { Featured, Happening },
  data() {
    return {
      drawer: false,
      isLoading: true,
      appDetails1: null,
      promo: [],
      promoCategory: [],
      promoMeals: [],
      promoPeople: [],
      promoPreference: [],
      promoOther: [],
      promoDays: [],
      promoVoucher: [],
      activeMallItems: [],
      activeMallCards: [],
      otherPromotionData: [],
      otherPromotionDataFinal: [],
      mallMerchants: [],
      mallPromotions: [],
    };
  },
  computed: {
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
        this.otherPromotionDataFinal.push(this.otherPromotionData);
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
      });
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

          this.promo = data.map((item) => {
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

          this.promoCategory = data.map((item) => {
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

          this.promoMeals = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 32,
            };
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

          this.promoPeople = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 32,
            };
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
          this.promoPreference = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 32,
            };
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
          this.promoOther = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 32,
            };
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
          this.promoDays = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 32,
            };
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
          this.promoVoucher = data.map((item) => {
            return {
              id: item.tag_id || 1,
              title: item.tag_name || "",
              img: this.$fileURL + item.tag_image || "",
              path: "",
              quantity: 32,
            };
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
        .get(`/malls/active-list/${this.latitude}/${this.longitude}/featured`)
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
