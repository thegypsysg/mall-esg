<template>
  <div
    class="promotion-container mt-n10"
    :class="{ 'other-grey': !isSmall, 'other-white': isSmall }"
  >
    <v-container>
      <div v-if="!isSmall" class="d-flex justify-space-between">
        <h1>Other Promotion Types</h1>
        <h1 class="view-all">View all</h1>
      </div>
      <v-sheet v-if="!isSmall" class="mx-auto" elevation="0">
        <v-slide-group v-model="model2" class="pa-4 other-slide">
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
            v-for="(item, index) in items"
            :key="index"
            v-slot="{ toggle }"
            class="other-item mx-4"
          >
            <v-card
              :class="['mx-2 py-8 px-5 text-left']"
              elevation="1"
              style="border-radius: 12px; padding: 22px"
              @click="toggle"
            >
              <div
                class="text-h6"
                style="
                  font-size: 20px;
                  margin-bottom: 20px;
                  line-height: 19.36px;
                "
              >
                {{ item.title }}
              </div>
              <div class="d-flex">
                <v-card
                  v-for="(promo, i) in item.items.slice(0, 3)"
                  :key="i"
                  :class="['text-left', 'mr-2']"
                  elevation="0"
                  @click="toggle"
                >
                  <p class="mb-2" style="font-size: 10px; font-weight: 500">
                    {{ promo.title }}
                  </p>
                  <div class="other-img-container">
                    <img :src="promo.img" height="60" class="other-img" />
                  </div>
                  <div
                    style="
                      font-weight: 600;
                      font-size: 10px;
                      line-height: 16.94px;
                    "
                  >
                    <span class="text-red">{{ promo.quantity }}</span> Promos
                  </div>
                </v-card>
              </div>
              <v-btn class="other-btn"> View All Promotions </v-btn>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <div v-if="isSmall" class="px-2">
        <v-card
          v-for="(item, index) in items"
          :key="index"
          elevation="0"
          class="mb-5"
        >
          <div
            :class="{
              'mt-6':
                item.title === 'Other Types of ' || item.title === 'Voucher ',
            }"
            class="text-h6 d-flex justify-space-between"
            style="font-size: 20px; margin-bottom: 20px; line-height: 19.36px"
          >
            <h1
              v-if="
                item.title === 'Other Types of ' || item.title === 'Voucher '
              "
            >
              {{ item.title }}Promotions
            </h1>
            <h1 v-else>Promotions {{ item.title }}</h1>
            <h1 class="view-all">View all</h1>
          </div>
          <v-slide-group
            v-if="item.title === 'by Meals' || item.title === 'Voucher '"
            class="slide-group"
          >
            <v-slide-group-item
              v-for="(promo, i) in item.items"
              :key="i"
              class="slide-item"
            >
              <v-card
                :class="['text-left', 'mr-2']"
                :elevation="item.title === 'Voucher ' ? 2 : 0"
                @click="toggle"
              >
                <p
                  v-if="item.title === 'by Meals'"
                  class="mb-2"
                  style="font-size: 10px; font-weight: 500"
                >
                  {{ promo.title }}
                </p>
                <div
                  :class="{
                    'other-img-container': item.title === 'Meals',
                    'other-img-container-5': item.title === 'Voucher ',
                  }"
                >
                  <img :src="promo.img" height="60" class="other-img" />
                </div>
                <div
                  v-if="item.title === 'by Meals'"
                  style="
                    font-weight: 600;
                    font-size: 10px;
                    line-height: 16.94px;
                  "
                >
                  <span class="text-red">{{ promo.quantity }}</span> Promos
                </div>
                <div v-if="item.title === 'Voucher '" class="px-4 py-3">
                  <p style="font-size: 10px; font-weight: 500">
                    {{ promo.title }}
                  </p>
                  <div
                    style="
                      font-weight: 600;
                      font-size: 10px;
                      line-height: 16.94px;
                    "
                  >
                    <span class="text-red">{{ promo.quantity }}</span> Promos
                  </div>
                </div>
              </v-card>
            </v-slide-group-item>
          </v-slide-group>
          <div
            v-else-if="
              item.title === 'by People' ||
              item.title === 'by Preference' ||
              item.title === 'Other Types of '
            "
            class="d-flex justify-space-between"
            :class="{
              'flex-wrap other-gap': item.title === 'by Preference',
              'flex-column': item.title === 'Other Types of ',
            }"
          >
            <v-card
              v-for="(promo, i) in item.items"
              :key="i"
              class="mt-5"
              :class="{ 'text-center': item.title === 'by Preference' }"
              elevation="0"
              @click="toggle"
            >
              <p
                v-if="item.title === 'by People'"
                class="mb-2"
                style="font-size: 10px; font-weight: 600"
              >
                {{ promo.title }}
              </p>
              <div
                v-if="item.title !== 'Other Types of '"
                :class="{
                  'other-img-container-2': item.title === 'by People',
                  'other-img-container-3': item.title === 'by Preference',
                }"
              >
                <img :src="promo.img" height="60" class="other-img" />
              </div>
              <p
                v-if="item.title === 'by Preference'"
                class="mb-1 mt-3"
                style="font-size: 10px; font-weight: 600"
              >
                {{ promo.title }}
              </p>
              <div
                v-if="item.title !== 'Other Types of '"
                style="font-weight: 600; font-size: 10px; line-height: 16.94px"
              >
                <span class="text-red">{{ promo.quantity }}</span> Promos
              </div>
              <div
                v-if="item.title === 'Other Types of '"
                class="d-flex"
                style="column-gap: 20px"
              >
                <div class="other-img-container-4">
                  <img :src="promo.img" height="60" class="other-img" />
                </div>
                <div class="d-flex flex-column">
                  <p
                    class="mb-1 mt-3"
                    style="font-size: 10px; font-weight: 600"
                  >
                    {{ promo.title }}
                  </p>
                  <div
                    style="
                      font-weight: 600;
                      font-size: 10px;
                      line-height: 16.94px;
                    "
                  >
                    <span class="text-red">{{ promo.quantity }}</span> Promos
                  </div>
                </div>
              </div>
            </v-card>
          </div>
        </v-card>
        <!-- <v-btn
          v-if="showViewAllButton === true"
          class="other-btn"
          @click="showAllCards"
        >
          View All Promotions
        </v-btn> -->
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "OtherPromotion",
  props: ["items"],
  data() {
    return {
      screenWidth: window.innerWidth,
      maxCardMobile: 3,
    };
  },
  computed: {
    isSmall() {
      return this.screenWidth < 640;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  // mounted() {
  //   this.displayedCardMobile = this.items.slice(0, this.maxCardMobile);
  // },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    // showAllCards() {
    //   this.displayedCardMobile = this.items;
    //   this.showViewAllButton = false;
    // },
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
  },
};
</script>

<style scoped>
.other-grey {
  background: #f2f2f5 !important;
}

.other-white {
  background: #fff !important;
}

.other-grey h1 {
  color: black !important;
  font-weight: bolder;
}

.other-grey .other-slide {
  background: #f2f2f5 !important;
}

.other-item {
  margin-right: 10px !important;
}

.other-btn {
  margin-top: 20px;
  display: block;
  font-weight: 400;
  font-size: 14px;
  color: #ef1f43;
  border-radius: 0;
  border: 0.5px solid #ef1f43;
}

.card-container {
  display: flex;
  flex-direction: column;
}

.slide-group {
  display: flex;
}

.slide-item {
  width: calc(
    100% / 3
  ); /* Ubah 3 menjadi jumlah maksimum item yang ingin ditampilkan dalam satu baris */
  box-sizing: border-box;
  padding: 16px;
  text-align: left;
}

.other-img-container {
  width: 90px;
  height: 60px;
}
.other-img-container-5 {
  width: 150px;
  height: 100px;
}

.other-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.other-gap {
  column-gap: 25px;
  row-gap: 15px;
}

@media screen and (max-width: 960px) {
  .slide-item {
    width: calc(
      100% / 2
    ); /* Ubah 2 menjadi jumlah maksimum item yang ingin ditampilkan dalam satu baris */
  }
}

@media screen and (max-width: 600px) {
  .slide-item {
    width: 100%;
  }
  .other-img-container {
    width: 100px;
    height: 70px;
  }
  .other-img-container-2 {
    width: 107px;
    height: 150px;
  }

  .other-img-container-3 {
    width: 70px;
    height: 70px;
  }
  .other-img-container-4 {
    width: 107px;
    height: 70px;
  }
}
</style>
