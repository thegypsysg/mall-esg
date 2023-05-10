<template>
  <v-container>
    <v-sheet class="mx-auto discount-sheet" elevation="0">
      <v-slide-group v-model="activeIndex">
        <template #prev="{ on, attrs }">
          <v-btn
            v-if="activeIndex > 0"
            color="white"
            rounded
            icon
            v-bind="attrs"
            @click="on"
            v-on="on"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <template #next="{ on, attrs }">
          <v-btn
            v-if="activeIndex < totalData.length - 1"
            color="white"
            rounded
            icon
            v-bind="attrs"
            @click="on"
            v-on="on"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </template>
        <v-slide-group-item v-for="n in totalData" :key="n" v-slot="{ toggle }">
          <div>
            <v-card
              class="my-4 pa-4 mx-3"
              elevation="1"
              variant="outlined"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-space-around">
                <img src="@/assets/images/icons/off-20.png" height="40" />
                <div class="text-h6 mb-1">20% off</div>
              </div>
            </v-card>
            <div class="text-center" style="font-weight: 600">
              32 Promotions
            </div>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <div class="promotion-container">
    <v-container>
      <div class="d-flex justify-space-between mt-5">
        <h1>Promotions by Category</h1>
        <h1 class="view-all">View all</h1>
      </div>
      <v-sheet class="mx-auto mt-5" elevation="0">
        <v-slide-group v-model="model2" class="pa-4">
          <template #prev="{ on, attrs }">
            <v-btn color="white" rounded icon v-bind="attrs" v-on="on">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <template #next="{ on, attrs }">
            <v-btn color="white" rounded icon v-bind="attrs" v-on="on">
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
              class="my-4 text-center mx-3"
              height="180"
              width="140"
              elevation="1"
              style="border-radius: 12px; padding: 20px"
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
              <img src="@/assets/images/cakes.png" height="80" />
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
        </v-slide-group>
      </v-sheet>
    </v-container>
  </div>
  <OtherPromotion :items="otherPromotionData" />
</template>

<script>
import OtherPromotion from './OtherPromotion/OtherPromotion.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Promotions',
  components: { OtherPromotion },
  data: () => ({
    model: null,
    model2: null,
    activeIndex: 0,
    totalData: 15,
    otherPromotionData: [
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
      {
        title: 'By Meals',
        items: [
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Chicken',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Durian',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
          {
            title: 'Banana',
            img: 'assets/other-img-1.png',
            quantity: 2,
          },
        ],
      },
    ],
  }),
  methods: {
    previousSlide() {
      this.activeIndex--;
    },
    nextSlide() {
      this.activeIndex++;
    },
  },
};
</script>

<style></style>
