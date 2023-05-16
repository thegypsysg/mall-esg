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
          <v-lazy :options="{ threshold: 0.5 }" min-height="50">
            <div>
              <v-card
                class="my-4 pa-4 mx-3"
                elevation="1"
                variant="outlined"
                @click="toggle"
              >
                <div
                  class="d-flex fill-height align-center justify-space-around"
                >
                  <v-img
                    src="@/assets/images/icons/off-20.png"
                    transition="fade-transition"
                    height="40"
                  >
                    <template #placeholder>
                      <div class="skeleton skeleton-discount ml-3" />
                    </template>
                  </v-img>
                  <div class="text-h6 mb-1">20% off</div>
                </div>
              </v-card>
              <div class="text-center" style="font-weight: 600">
                32 Promotions
              </div>
            </div>
          </v-lazy>
        </v-slide-group-item>
        <v-slide-group-item v-slot="{ toggle }">
          <v-lazy :options="{ threshold: 0.5 }" min-height="50">
            <v-card
              class="my-4 pa-4 mx-2 d-flex align-center justify-center"
              elevation="1"
              variant="outlined"
              to="/discount-types"
              @click="toggle"
            >
              <div
                class="text-left mr-2"
                style="font-weight: 600; font-size: 12px"
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
          </v-lazy>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <div class="promotion-container">
    <v-container>
      <div class="d-flex justify-space-between mt-5">
        <h1>Promotions by Category</h1>
        <router-link to="/category" class="text-decoration-none">
          <h1 class="view-all">View all</h1>
        </router-link>
      </div>
      <v-sheet class="mx-auto mt-5" elevation="0">
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
              @click="nextSlideCategory"
              v-on="on"
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
            <v-lazy :options="{ threshold: 0.5 }" min-height="100">
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
                <v-img
                  src="@/assets/images/cakes.png"
                  height="80"
                  transition="fade-transition"
                >
                  <template #placeholder>
                    <div class="skeleton skeleton-category ml-2" />
                  </template>
                </v-img>
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
            </v-lazy>
          </v-slide-group-item>
          <v-slide-group-item v-slot="{ toggle }">
            <v-lazy :options="{ threshold: 0.5 }" min-height="100">
              <v-card
                class="my-4 text-center mx-3 d-flex flex-column align-center justify-center px-auto pa-10"
                height="180"
                width="140"
                elevation="1"
                to="/category"
                style="border-radius: 12px; gap: 20px"
                @click="toggle"
              >
                <div
                  class="text-left"
                  style="font-weight: 600; font-size: 12px"
                >
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
            </v-lazy>
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
    totalData: 20,
    otherPromotionData: [
      {
        title: "By Meals",
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
        title: "By Meals",
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
        title: "By Meals",
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
        title: "By Meals",
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
        title: "By Meals",
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
        title: "By Meals",
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
        title: "By Meals",
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

<style>
.skeleton {
  height: 100%;
  border-radius: 100%;
  background: linear-gradient(-90deg, #f2f2f2 0%, #e1e1e1 50%, #f2f2f2 100%);
  background-size: 400% 400%;
  animation: skeleton 1.6s ease infinite;
}

.skeleton-discount {
  width: 40px !important;
}
.skeleton-category {
  width: 80px !important;
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
