<template>
  <div class="promotion-container mt-n10">
    <v-container>
      <div class="d-flex justify-space-between">
        <h1>Other Promotion Types</h1>
        <h1 class="view-all">View all</h1>
      </div>
      <v-sheet class="mx-auto" elevation="0">
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
            <v-lazy :options="{ threshold: 0.5 }" min-height="370">
              <v-card
                :class="['mx-2 py-8 px-5 text-left my-2']"
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
                      <v-img
                        src="@/assets/other-img-1.png"
                        height="60"
                        class="other-img"
                        transition="fade-transition"
                      >
                        <template #placeholder>
                          <div class="skeleton" />
                        </template>
                      </v-img>
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
            </v-lazy>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "OtherPromotion",
  props: ["items"],
  data() {
    return {
      maxCardMobile: 3,
    };
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
  overflow: hidden !important;
}
.other-img-container-5 {
  width: 150px;
  height: 100px;
}

.other-img {
  scale: 1.5;
  object-fit: cover !important;
  object-position: center !important;
  width: 100% !important;
  height: 100% !important;
}

.other-gap {
  column-gap: 25px;
  row-gap: 15px;
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

@media screen and (max-width: 960px) {
  .slide-item {
    width: calc(
      100% / 2
    ); /* Ubah 2 menjadi jumlah maksimum item yang ingin ditampilkan dalam satu baris */
  }
}
</style>
