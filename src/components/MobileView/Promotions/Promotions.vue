<template>
  <v-container>
    <v-sheet class="mx-auto discount-sheet" elevation="0">
      <v-slide-group>
        <template #prev="{ on, attrs }">
          <v-btn
            v-if="activeIndexDiscount > 1"
            color="white"
            rounded
            icon
            v-bind="attrs"
            @click="previousSlideDiscount"
            v-on="on"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <template #next="{ on, attrs }">
          <v-btn
            v-if="activeIndexDiscount + 1 <= totalData / 5"
            color="white"
            rounded
            icon
            v-bind="attrs"
            @click="nextSlideDiscount"
            v-on="on"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </template>
        <v-slide-group-item v-for="n in totalData" :key="n" v-slot="{ toggle }">
          <div>
            <v-card
              class="my-4 pa-4 mx-2"
              elevation="1"
              variant="outlined"
              @click="toggle"
            >
              <div
                class="d-flex fill-height align-center justify-space-between"
              >
                <img src="@/assets/images/icons/off-20.png" height="40" />
                <div class="text-h6 mb-1">20% off</div>
              </div>
            </v-card>
            <div class="text-center" style="font-weight: 600">
              32 Promotions
            </div>
          </div>
        </v-slide-group-item>
        <v-slide-group-item v-slot="{ toggle }">
          <v-card
            class="my-4 pa-2 mx-2 d-flex align-center justify-center"
            elevation="1"
            variant="outlined"
            to="/discount-types"
            @click="toggle"
          >
            <div
              class="text-left mr-1"
              style="font-weight: 600; font-size: 10px"
            >
              <p>View all Discount Types</p>
            </div>
            <v-btn
              size="35"
              color="#0197d5"
              rounded
              icon
              v-bind="attrs"
              to="/discount-types"
              v-on="on"
            >
              <v-icon color="white"> mdi-arrow-right </v-icon>
            </v-btn>
          </v-card>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <div class="promotion-container">
    <v-container>
      <div class="d-flex justify-space-between mt-n10">
        <h1>Promotions by Category</h1>
        <router-link to="/category" class="text-decoration-none">
          <h1 class="view-all">View all</h1>
        </router-link>
      </div>
      <v-sheet class="mx-auto mt-n3" elevation="0">
        <v-slide-group v-model="model2" class="pa-4">
          <template #prev="{ on, attrs }">
            <v-btn
              v-if="activeIndexCategory > 1"
              color="white"
              rounded
              icon
              v-bind="attrs"
              v-on="on"
              @click="previousSlideCategory"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <template #next="{ on, attrs }">
            <v-btn
              v-if="activeIndexCategory + 1 <= totalData / 5"
              color="white"
              rounded
              icon
              v-bind="attrs"
              v-on="on"
              @click="nextSlideCategory"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
          <v-slide-group-item
            v-for="n in totalData"
            :key="n"
            v-slot="{ toggle }"
            class="mx-4"
          >
            <v-card
              class="my-4 text-center mx-2"
              height="160"
              width="120"
              elevation="1"
              style="border-radius: 12px; padding: 22px"
              @click="toggle"
            >
              <div
                class="text-h6"
                style="
                  font-size: 16px;
                  margin-bottom: 10px;
                  line-height: 19.36px;
                "
              >
                Cakes
              </div>
              <img src="@/assets/images/cakes.png" height="60" />
              <div
                style="
                  font-weight: 600;
                  font-size: 14px;
                  margin-top: 10px;
                  line-height: 16.94px;
                "
              >
                <span class="text-red">32</span> Promos
              </div>
            </v-card>
          </v-slide-group-item>
          <v-slide-group-item v-slot="{ toggle }">
            <v-card
              class="my-4 text-center mx-2 d-flex flex-column align-center justify-center px-auto pa-10"
              height="160"
              width="120"
              elevation="1"
              to="/category"
              style="border-radius: 12px; gap: 20px"
              @click="toggle"
            >
              <div class="text-left" style="font-weight: 600; font-size: 12px">
                <p>View All Category</p>
              </div>
              <v-btn
                size="40"
                color="#0197d5"
                rounded
                icon
                v-bind="attrs"
                to="/category"
                v-on="on"
              >
                <v-icon color="white"> mdi-arrow-right </v-icon>
              </v-btn>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </div>
  <OtherPromotion :items="otherPromotionData" />
</template>

<script>
import OtherPromotion from "./OtherPromotion/OtherPromotion.vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Promotions",
  components: { OtherPromotion },
  data: () => ({
    model: null,
    model2: null,
    activeIndexDiscount: 1,
    activeIndexCategory: 1,
    totalData: 10,
    otherPromotionData: [
      {
        title: "by Meals",
        items: [
          {
            title: "Chicken",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Durian",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Banana",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Chicken",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Durian",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Banana",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Chicken",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Durian",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
          {
            title: "Banana",
            img: "assets/other-img-1.png",
            quantity: 2,
          },
        ],
      },
      {
        title: "by People",
        items: [
          {
            title: "Everyone",
            img: "assets/other-people-img-1.png",
            quantity: 10,
          },
          {
            title: "Men",
            img: "assets/other-people-img-2.png",
            quantity: 10,
          },
          {
            title: "Senior Citizens",
            img: "assets/other-people-img-3.png",
            quantity: 10,
          },
        ],
      },
      {
        title: "by Preference",
        items: [
          {
            title: "Oranges",
            img: "assets/other-preference-img-1.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-2.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-3.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-4.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-5.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-6.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-7.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-8.png",
            quantity: 5,
          },
          {
            title: "Oranges",
            img: "assets/other-preference-img-9.png",
            quantity: 5,
          },
        ],
      },
      {
        title: "Other Types of ",
        items: [
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-types-img-1.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-types-img-2.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-types-img-3.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-types-img-4.png",
            quantity: 5,
          },
        ],
      },
      {
        title: "Voucher ",
        items: [
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-voucher-img-1.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-voucher-img-2.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-voucher-img-3.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-voucher-img-1.png",
            quantity: 5,
          },
          {
            title: "Buy 1 Get 1 Free",
            img: "assets/other-voucher-img-2.png",
            quantity: 5,
          },
        ],
      },
    ],
  }),
  methods: {
    previousSlideDiscount() {
      this.activeIndexDiscount--;
    },
    nextSlideDiscount() {
      this.activeIndexDiscount++;
    },
    previousSlideCategory() {
      this.activeIndexCategory--;
    },
    nextSlideCategory() {
      this.activeIndexCategory++;
    },
  },
};
</script>

<style></style>
