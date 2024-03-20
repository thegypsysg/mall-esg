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
      <Promotions title="Other Types" :promo-two="promoOher" />
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
      promoOher: [],
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
      this.getAppDetails1(),
      this.getPromo(),
      this.getPromoMeals(),
      this.getPromoCategory(),
      this.getPromoPeople(),
      this.getOtherPromo(),
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
    getPromo() {
      axios
        .get(`/categories/app/${this.$appId}/type/PD`)
        .then((response) => {
          const data = response.data.data;

          this.promo = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              desc: "32 Promotions",
              path: item.slug || "",
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
        .get(`/categories/app/${this.$appId}/type/PC`)
        .then((response) => {
          const data = response.data.data;

          this.promoCategory = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              desc: "32 Promos",
              path: item.slug || "",
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
        .get(`/categories/app/${this.$appId}/type/PM`)
        .then((response) => {
          const data = response.data.data;

          this.promoMeals = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              quantity: 32,
              path: item.slug || "",
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
        .get(`/categories/app/${this.$appId}/type/PBP`)
        .then((response) => {
          const data = response.data.data;

          this.promoPeople = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              quantity: 32,
              path: item.slug || "",
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
        .get(`/categories/app/${this.$appId}/type/PP`)
        .then((response) => {
          const data = response.data.data;

          // let itemFinal = [];
          this.promoPreference = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              quantity: 32,
              path: item.slug || "",
            };
          });
          this.promoDays = [
            {
              title: "Monday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Tuesday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Wednesday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Monday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Tuesday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Wednesday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Monday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Tuesday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Wednesday",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
          ];

          this.promoOher = [
            {
              title: "1 for 1",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Buy 2 Get 1",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Free with Buy",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "1 for 1",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Buy 2 Get 1",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Free with Buy",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "1 for 1",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Buy 2 Get 1",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
            {
              title: "Free with Buy",
              img: "assets/other-img-1.png",
              quantity: 32,
            },
          ];

          this.promoVoucher = [
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-1.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-2.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-3.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-4.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-5.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-1.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-2.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-3.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-4.png",
              quantity: 32,
            },
            {
              title: "Buy 1 Get 1 Free",
              img: "assets/other-voucher-img-5.png",
              quantity: 32,
            },
          ];
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
