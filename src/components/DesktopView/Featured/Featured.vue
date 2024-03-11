<template>
  <v-container class="mb-8">
    <h1 v-if="isAllMalls">
      {{ title }}
    </h1>
    <div v-if="!isAllMalls" class="section-title mb-5">
      <h1>{{ title }}</h1>
      <div class="title-line" />
      <v-autocomplete
        v-model="selectedMalls"
        clearable
        label="--Select Mall--"
        :items="activeMallItems"
        variant="outlined"
        class="section-select"
      />
    </div>
    <div class="section-content">
      <h1 v-if="!isAllMalls" class="ml-2">
        {{ desc }}
      </h1>
      <v-sheet class="mx-n10 mt-5" elevation="0">
        <div class="py-2 px-6">
          <div
            v-if="isFeaturedMerchants"
            class="d-flex flex-row flex-wrap"
            :class="{
              'justify-start': true,
            }"
          >
            <template
              v-for="(item, index) in mallMerchants"
              :key="index"
              class="mx-4"
            >
              <div class="">
                <div
                  v-if="isDiff"
                  style="width: 85% !important; gap: 5px"
                  class="card-info ml-3 d-flex flex-column"
                >
                  <p style="font-weight: 600; font-size: 16px">
                    Hainan Chicken Rice with steamed Chicken topped with Soya
                    Sauce
                  </p>
                  <div style="font-weight: 600; font-size: 14px">
                    32 <span class="text-muted">Purchased</span> 50
                    <span class="text-muted">Views</span>
                  </div>
                </div>
                <v-lazy :options="{ threshold: 0.5 }" min-height="370">
                  <v-card
                    class="my-4 mx-3 featured-card"
                    width="370"
                    elevation="1"
                    @click="toggle"
                  >
                    <div
                      v-if="!isDiff"
                      class="card-title-container d-flex justify-space-between align-center px-2 py-4"
                    >
                      <div class="w-25 pr-3">
                        <v-img
                          :src="$fileURL + item?.partner?.logo"
                          height="30"
                        />
                      </div>
                      <div
                        class="w-75 d-flex align-center justify-space-between"
                      >
                        <div class="card-title">
                          <h4 class="text-no-wrap">
                            {{ item?.partner?.partner_name }}
                          </h4>
                          <span class="text-no-wrap text-caption text-blue"
                            >{{ item?.location_name }},
                            {{ item?.unit_number }}</span
                          >
                          <br />
                          <span class="text-no-wrap text-primary">{{
                            item?.town?.town_name
                          }}</span>
                        </div>
                        <span
                          class="text-red card-title-right text-no-wrap text-red"
                          >{{ item?.distance }}</span
                        >
                      </div>
                    </div>
                    <div class="featured-card-img-cont">
                      <v-img
                        class="featured-card-img"
                        :src="$fileURL + item?.location_image"
                        transition="fade-transition"
                      >
                        <template #placeholder>
                          <div class="skeleton" />
                        </template>
                      </v-img>
                      <!-- <div class="skeleton" /> -->
                    </div>
                    <div
                      v-if="!isDiff"
                      style="
                        font-weight: 400;
                        font-size: 14px;
                        position: relative;
                      "
                      class="px-2 pt-5 pb-2"
                    >
                      15 Merchants | 12 Promotions
                    </div>

                    <div
                      v-if="isDiff"
                      class="card-description pa-2 d-flex flex-column"
                      style="position: relative; gap: 10px"
                    >
                      <div class="card-rating">
                        <v-icon color="#F63F17"> mdi-star </v-icon>
                        <v-icon color="#F63F17"> mdi-star </v-icon>
                        <v-icon color="#F63F17"> mdi-star </v-icon>
                        <v-icon color="#F63F17"> mdi-star </v-icon>
                        <v-icon color="#F63F17"> mdi-star-outline </v-icon>
                        <span class="ml-2">( 132 rates )</span>
                      </div>
                      <div class="card-price">
                        <img
                          src="@/assets/featured-price-img.png"
                          height="15"
                        />
                        <span class="ml-5">$80</span>
                      </div>
                      <div class="card-time">
                        <v-icon color="#ABABAB"> mdi-clock-outline </v-icon
                        ><span class="ml-4" style="color: #ababab"
                          >Ends in 18 Days (15/03/2023)</span
                        >
                      </div>
                      <div
                        class="card-address d-flex align-center"
                        style="gap: 25px"
                      >
                        <img
                          src="@/assets/featured-address-img.png"
                          width="24"
                          height="28"
                        />
                        <div class="card-address-info">
                          <h4>Papa Rich</h4>
                          <h4>Parkway Parade, #01-23</h4>
                          <h4>Marine Parade</h4>
                        </div>
                      </div>
                      <div
                        class="card-offer py-5 d-flex align-center"
                        style="background: #f3f3f3; gap: 20px; color: #5e5e5e"
                      >
                        <img src="@/assets/featured-offer-img.png" />
                        <span>Flat 50% on all Stores</span>
                      </div>
                    </div>
                    <div
                      class="card-btn-container d-flex justify-space-between"
                      :class="{
                        'card-btn-container-1': !isDiff,
                        'card-btn-container-2': isDiff,
                      }"
                    >
                      <v-btn
                        variant="outlined"
                        color="black"
                        class="card-btn"
                        width="32"
                        height="32"
                        icon="mdi-share-variant-outline"
                      >
                        <v-icon color="rgb(38, 38, 38)" size="22">
                          mdi-share-variant-outline
                        </v-icon>
                        <v-menu activator="parent">
                          <v-list>
                            <v-list-item @click="console.log('share')">
                              <v-list-item-title>
                                <v-icon class="mr-4" color="black" size="18">
                                  mdi-email-outline </v-icon
                                >Email
                              </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="console.log('share')">
                              <v-list-item-title>
                                <v-icon class="mr-4" size="18">
                                  <i class="fa-brands fa-facebook-f" /> </v-icon
                                >Facebook
                              </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="console.log('share')">
                              <v-list-item-title>
                                <v-icon class="mr-4" color="black" size="18">
                                  mdi-twitter </v-icon
                                >Twitter
                              </v-list-item-title>
                            </v-list-item>
                            <v-list-item @click="console.log('share')">
                              <v-list-item-title>
                                <v-icon class="mr-4" size="18">
                                  <i
                                    class="fa-brands fa-linkedin-in"
                                  /> </v-icon
                                >Linkedin
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-menu>
                      </v-btn>
                      <v-btn
                        class="card-btn"
                        variant="outlined"
                        color="black"
                        icon="mdi-heart"
                        width="32"
                        height="32"
                      >
                        <v-icon color="red"> mdi-heart </v-icon>
                      </v-btn>
                    </div>

                    <div
                      v-if="item?.mall_merchant?.featured === 'Y'"
                      class="card-tag"
                      :class="{
                        'card-tag-1': isDiff,
                        'card-tag-2': !isDiff,
                      }"
                      style="top: 120px"
                    >
                      Featured
                    </div>
                    <div v-if="isDiff" class="card-distance">
                      <v-icon color="#808080"> mdi-map-marker </v-icon>
                      <span class="text-red">10.20 kms</span
                      ><span class="text-muted"> away</span>
                    </div>
                  </v-card>
                </v-lazy>
              </div>
            </template>
          </div>
        </div>

        <div
          v-if="isSlide == false"
          class="d-flex flex-row flex-wrap"
          :class="{
            'justify-center': !isAllMalls,
            'justify-start': isAllMalls,
          }"
        >
          <template
            v-for="(item, i) in filteredActiveMall.slice(0, 6)"
            :key="i"
          >
            <v-lazy :options="{ threshold: 0.5 }" min-height="370">
              <v-card
                class="my-4 mx-3 featured-card"
                width="370"
                height="380"
                elevation="1"
                @click="toggle"
              >
                <div
                  v-if="!isDiff"
                  class="card-title-container d-flex justify-space-between align-center px-2 py-4"
                >
                  <div class="w-25">
                    <v-img :src="item.logo" height="30" />
                  </div>
                  <div class="w-75 d-flex align-center justify-space-between">
                    <div class="card-title">
                      <h4>{{ item.name }}</h4>
                      <span>{{ item.address }}</span>
                    </div>
                    <span class="text-red card-title-right">{{
                      item.distanceText
                    }}</span>
                  </div>
                </div>
                <div class="featured-card-img-cont">
                  <v-img
                    class="featured-card-img"
                    :src="item.mainImage"
                    transition="fade-transition"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                  <!-- <div class="skeleton" /> -->
                </div>
                <div
                  v-if="!isDiff"
                  style="font-weight: 400; font-size: 14px; position: relative"
                  class="px-2 pt-5 pb-2"
                >
                  15 Merchants | 12 Promotions
                </div>
                <div
                  v-if="isDiff"
                  class="card-description pa-2 d-flex flex-column"
                  style="position: relative; gap: 10px"
                >
                  <div class="card-rating">
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star-outline </v-icon>
                    <span class="ml-2">( 132 rates )</span>
                  </div>
                  <div class="card-price">
                    <img src="@/assets/featured-price-img.png" height="15" />
                    <span class="ml-5">$80</span>
                  </div>
                  <div class="card-time">
                    <v-icon color="#ABABAB"> mdi-clock-outline </v-icon
                    ><span class="ml-4" style="color: #ababab"
                      >Ends in 18 Days (15/03/2023)</span
                    >
                  </div>
                  <div
                    class="card-address d-flex align-center"
                    style="gap: 25px"
                  >
                    <img
                      src="@/assets/featured-address-img.png"
                      width="24"
                      height="28"
                    />
                    <div class="card-address-info">
                      <h4>Papa Rich</h4>
                      <h4>Parkway Parade, #01-23</h4>
                      <h4>Marine Parade</h4>
                    </div>
                  </div>
                  <div
                    class="card-offer py-5 d-flex align-center"
                    style="background: #f3f3f3; gap: 20px; color: #5e5e5e"
                  >
                    <img src="@/assets/featured-offer-img.png" />
                    <span>Flat 50% on all Stores</span>
                  </div>
                </div>
                <div
                  class="card-btn-container d-flex justify-space-between"
                  :class="{
                    'card-btn-container-1': !isDiff,
                    'card-btn-container-2': isDiff,
                  }"
                >
                  <v-btn
                    variant="outlined"
                    color="black"
                    class="card-btn"
                    width="32"
                    height="32"
                    icon="mdi-share-variant-outline"
                  >
                    <v-icon color="rgb(38, 38, 38)" size="22">
                      mdi-share-variant-outline
                    </v-icon>
                    <v-menu activator="parent">
                      <v-list>
                        <v-list-item @click="console.log('share')">
                          <v-list-item-title>
                            <v-icon class="mr-4" color="black" size="18">
                              mdi-email-outline </v-icon
                            >Email
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="console.log('share')">
                          <v-list-item-title>
                            <v-icon class="mr-4" size="18">
                              <i class="fa-brands fa-facebook-f" /> </v-icon
                            >Facebook
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="console.log('share')">
                          <v-list-item-title>
                            <v-icon class="mr-4" color="black" size="18">
                              mdi-twitter </v-icon
                            >Twitter
                          </v-list-item-title>
                        </v-list-item>
                        <v-list-item @click="console.log('share')">
                          <v-list-item-title>
                            <v-icon class="mr-4" size="18">
                              <i class="fa-brands fa-linkedin-in" /> </v-icon
                            >Linkedin
                          </v-list-item-title>
                        </v-list-item>
                      </v-list>
                    </v-menu>
                  </v-btn>
                  <v-btn
                    class="card-btn"
                    variant="outlined"
                    color="black"
                    icon="mdi-heart"
                    width="32"
                    height="32"
                  >
                    <v-icon color="red"> mdi-heart </v-icon>
                  </v-btn>
                </div>
                <div
                  v-if="item.featured == 'Y'"
                  class="card-tag"
                  :class="{
                    'card-tag-1': isDiff,
                    'card-tag-2': !isDiff,
                  }"
                >
                  Featured
                </div>
                <div v-if="isDiff" class="card-distance">
                  <v-icon color="#808080"> mdi-map-marker </v-icon>
                  <span class="text-red">10.20 kms</span
                  ><span class="text-muted"> away</span>
                </div>
              </v-card>
            </v-lazy>
          </template>
        </div>
      </v-sheet>
      <div
        v-if="!isAllMalls"
        class="card-footer d-flex justify-center align-center mt-16 mb-10"
        style="gap: 10px"
      >
        <!-- <div class="line-divider" /> -->
        <v-btn
          to="/all-malls"
          class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 text-white d-flex align-center py-8 px-16"
          style="
            background-color: #008d00;
            border-color: #008d00;
            font-weight: 400;
            font-size: 20px;
            border-radius: 50px;
          "
        >
          <span>View All Featured Malls</span>
        </v-btn>
        <!-- <div class="line-divider" /> -->
      </div>
    </div>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Featured",
  props: [
    "title",
    "desc",
    "isDiff",
    "isSlide",
    "activeMallItems",
    "activeMallCards",
    "activeMerchantItems",
    "mallMerchants",
    "isFeaturedMerchants",
  ],
  data() {
    return {
      selectedMalls: null,
    };
  },
  computed: {
    isAllMalls() {
      return this.$route.path == "/all-malls";
    },
    filteredActiveMall() {
      if (!this.selectedMalls) {
        return this.activeMallCards;
      } else {
        return this.activeMallCards.filter(
          (item) => item.name == this.selectedMalls
        );
      }
    },
  },
};
</script>

<style scoped>
.section-title h1 {
  font-weight: 700;
  color: black;
  font-size: 48px;
  text-align: center;
}

.title-line {
  width: 150px;
  background: #e1c530;
  height: 1px;
  margin: -5px auto 40px;
}

.section-select {
  width: 330px;
  margin: 0 auto;
  text-align: center;
  color: black !important;
}

.section-content h1 {
  font-weight: 500;
  font-size: 48px;
  color: black;
  width: 100% !important;
}

.card-container {
  width: 390px !important;
}

.featured-card {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43) !important;
}
.featured-card:hover {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.43) !important;
}

.featured-card-img-cont {
  overflow: hidden !important;
  height: 225px !important;
}

.featured-card-img {
  transition: all 0.3s;
  transform: scale(1.4);
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.featured-card:hover .featured-card-img {
  transform: scale(1.5);
}

.card-title h4 {
  font-weight: 600;
  font-size: 18px;
}

.card-title span {
  font-weight: 500;
  font-size: 14px;
}

.card-title-right {
  font-size: 10px;
  font-weight: 600;
}

.card-btn-container {
  position: absolute;
  gap: 10px;
}

.card-btn-container-1 {
  bottom: 55px;
  right: 30px;
}
.card-btn-container-2 {
  top: 210px;
  right: 30px;
}

.card-btn {
  background: #fff !important;
}

.line-divider {
  background: #d1d1d1;
  width: 300px;
  height: 1.5px;
}

.card-tag {
  background: #e99820;
  color: #ffffff;
  position: absolute;

  padding: 5px 25px;
  font-size: 11px;
}
.card-tag-1 {
  top: 20px;
  left: 10px;
}
.card-tag-2 {
  top: 100px;
  left: 10px;
}
.card-distance {
  background: #fff;
  position: absolute;
  top: 175px;
  left: 10px;
  padding: 5px 10px;
  font-size: 13px;
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
</style>
