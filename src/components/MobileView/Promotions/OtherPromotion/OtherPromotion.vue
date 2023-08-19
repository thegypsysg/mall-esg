<template>
  <div class="promotion-container mt-n10 other-white">
    <v-container>
      <div class="px-2">
        <v-card
          v-for="(item, index) in items"
          :key="index"
          elevation="0"
          class="mb-5"
        >
          <div
            :class="{
              'mt-6':
                item.title === 'Other Types of ' || item.title === 'by Day',
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
            <router-link :to="{ name: item.name }" class="text-decoration-none">
              <h1 class="view-all">View all</h1>
            </router-link>
          </div>
          <v-slide-group
            v-if="
              item.title === 'by Meals' ||
              item.title === 'by Day' ||
              item.title === 'by People' ||
              item.title === 'Voucher '
            "
            class="slide-group"
          >
            <v-slide-group-item
              v-for="(promo, i) in item.items.slice(0, 6)"
              :key="i"
              class="slide-item"
            >
              <v-lazy :options="{ threshold: 0.5 }" min-height="100">
                <v-card
                  class="text-left mx-2 mb-5"
                  :elevation="
                    item.title === 'Voucher ' || item.title === 'by Day' ? 2 : 0
                  "
                  :class="{
                    'shadow-card':
                      item.title === 'Voucher ' || item.title === 'by Day',
                  }"
                  @click="toggle"
                >
                  <p
                    v-if="
                      item.title === 'by Meals' || item.title === 'by People'
                    "
                    class="mb-2"
                    style="font-size: 10px; font-weight: 500"
                  >
                    {{ promo.title }}
                  </p>
                  <div
                    :class="{
                      'other-img-container':
                        item.title === 'by Meals' || item.title === 'by People',
                      'other-img-container-5':
                        item.title === 'Voucher ' || item.title === 'by Day',
                    }"
                  >
                    <v-img
                      :src="promo.img"
                      :height="
                        item.title === 'by Meals' || item.title === 'by People'
                          ? 60
                          : 100
                      "
                      class="other-img"
                      cover
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                  <div
                    v-if="
                      item.title === 'by Meals' || item.title === 'by People'
                    "
                    style="
                      font-weight: 600;
                      font-size: 10px;
                      line-height: 16.94px;
                    "
                  >
                    <span class="text-red">{{ promo.quantity }}</span> Promos
                  </div>
                  <div
                    v-if="item.title === 'Voucher ' || item.title === 'by Day'"
                    class="px-4 py-3"
                  >
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
              </v-lazy>
            </v-slide-group-item>
          </v-slide-group>
          <!-- item.title === 'by People' || -->
          <div
            v-else-if="
              item.title === 'by Preference' || item.title === 'Other Types of '
            "
            class="d-flex justify-space-between"
            :class="{
              'flex-wrap other-gap': item.title === 'by Preference',
              'flex-column': item.title === 'Other Types of ',
            }"
          >
            <template v-for="(promo, i) in item.items" :key="i">
              <v-lazy :options="{ threshold: 0.5 }" min-height="100">
                <v-card
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
                    <v-img
                      :src="promo.img"
                      :height="item.title === 'by People' ? 150 : 70"
                      class="other-img"
                      transition="fade-transition"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
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
                    style="
                      font-weight: 600;
                      font-size: 10px;
                      line-height: 16.94px;
                    "
                  >
                    <span class="text-red">{{ promo.quantity }}</span> Promos
                  </div>
                  <div
                    v-if="item.title === 'Other Types of '"
                    class="d-flex"
                    style="column-gap: 20px"
                  >
                    <div class="other-img-container-4">
                      <v-img :src="promo.img" height="70" class="other-img">
                        <template #placeholder>
                          <div class="skeleton" />
                        </template>
                      </v-img>
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
                        <span class="text-red">{{ promo.quantity }}</span>
                        Promos
                      </div>
                    </div>
                  </div>
                </v-card>
              </v-lazy>
            </template>
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
  overflow: hidden;
  width: 90px;
  height: 60px;
}
.other-img-container-5 {
  overflow: hidden;
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

.shadow-card {
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.43) !important;
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

@media screen and (max-width: 600px) {
  .slide-item {
    width: 100%;
  }
  .other-img-container {
    overflow: hidden;
    width: 100px;
    height: 70px;
  }
  .other-img-container-2 {
    overflow: hidden;
    width: 107px;
    height: 150px;
  }

  .other-img-container-3 {
    overflow: hidden;
    width: 70px;
    height: 70px;
  }
  .other-img-container-4 {
    overflow: hidden;
    width: 107px;
    height: 70px;
  }
}
</style>
