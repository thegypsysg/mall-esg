<template>
  <div>
    <div v-if="isLoading" class="text-center loading-page">
      <v-progress-circular :size="50" color="#fa2964" indeterminate />
    </div>
    <div v-if="!isLoading">
      <Banner :app-details="appDetails1" />
      <Promotions :promo-one="promoOne" :promo-two="promoTwo" />
      <OtherPromotion :items="otherPromotionDataFinal[0]" />
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
        :is-featured-merchants="true"
        :mall-merchants="mallMerchants"
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
import OtherPromotion from "@/components/DesktopView/Promotions/OtherPromotion/OtherPromotion.vue";
export default {
  name: "DesktopView",
  components: { Featured, Happening, OtherPromotion },
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
      promotions: [],
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
    this.getPromotionsData();
    Promise.all([
      this.getAppDetails1(),
      this.getCard1(),
      this.getCard2(),
      this.getCard3(),
      this.getCard4(),
      this.getCard5(),
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

    getCard1() {
      axios
        .get(`/categories/app/${this.$appId}/type/PD`)
        .then((response) => {
          const data = response.data.data;

          this.promoOne = data.map((item, index) => {
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
    getCard2() {
      axios
        .get(`/categories/app/${this.$appId}/type/PC`)
        .then((response) => {
          const data = response.data.data;

          this.promoTwo = data.map((item, index) => {
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
    getCard3() {
      axios
        .get(`/categories/app/${this.$appId}/type/PM`)
        .then((response) => {
          const data = response.data.data;

          const items = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              quantity: 2,
              path: item.slug || "",
            };
          });
          this.otherPromotionData.push({
            id: 1,
            title: "By Meals",
            link: "/meal-promo",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getCard4() {
      axios
        .get(`/categories/app/${this.$appId}/type/PBP`)
        .then((response) => {
          const data = response.data.data;

          const items = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              quantity: 2,
              path: item.slug || "",
            };
          });
          this.otherPromotionData.push({
            id: 2,
            title: "By People",
            link: "/people-promo",
            items: items,
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getCard5() {
      axios
        .get(`/categories/app/${this.$appId}/type/PP`)
        .then((response) => {
          const data = response.data.data;

          // let itemFinal = [];
          const items = data.map((item, index) => {
            return {
              id: index + 1,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
              quantity: 2,
              path: item.slug || "",
            };
          });
          this.otherPromotionData.push(
            {
              id: 3,
              title: "By Preference",
              link: "/preference-promo",
              items: items,
            },
            {
              id: 4,
              title: "By Others",
              link: "/others-promo",
              items: [
                {
                  title: "1 for 1",
                  img: "assets/other-img-1.png",
                  quantity: 2,
                },
                {
                  title: "Buy 2 Get 1",
                  img: "assets/other-img-1.png",
                  quantity: 2,
                },
                {
                  title: "Free with Buy",
                  img: "assets/other-img-1.png",
                  quantity: 2,
                },
              ],
            },
            {
              id: 5,
              title: "By Days",
              link: "/day-promo",
              items: [
                {
                  title: "Monday",
                  img: "assets/other-img-1.png",
                  quantity: 2,
                },
                {
                  title: "Tuesday",
                  img: "assets/other-img-1.png",
                  quantity: 2,
                },
                {
                  title: "Wednesday",
                  img: "assets/other-img-1.png",
                  quantity: 2,
                },
              ],
            }
          );
          // itemFinal = this.otherPromotionData.sort(function (a, b) {
          //   return a.id - b.id;
          // });
          // console.log(itemFinal);
          // this.otherPromotionDataFinal = itemFinal;
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
        .get(`/mall-merchants/featured`, {
          params: {
            longitude: this.longitude,
            latitude: this.latitude,
            limit: 6,
          },
        })
        .then((response) => {
          const data = response.data.data;
          this.mallMerchants = data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          throw error;
        });
    },
    getPromotionsData() {
      axios
        .get(
          `/mall-promotions/featured`
          // {
          //   params: {
          //     longitude: this.longitude,
          //     latitude: this.latitude,
          //     limit: 6,
          //   },
          // }
        )
        .then((response) => {
          const data = response.data.data;
          this.promotions = data;
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
