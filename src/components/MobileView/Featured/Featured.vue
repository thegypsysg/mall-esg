<template>
  <v-container class="mb-2">
    <div class="section-title text-h6 d-flex justify-space-between mx-auto">
      <div>
        <h1>{{ title }}</h1>
        <div class="title-line" />
      </div>
      <router-link
        class="text-decoration-none"
        :to="title === 'Featured Merchants' ? '/all-merchants' : '/all-malls'"
      >
        <h1 class="view-all">View all</h1>
      </router-link>
    </div>
    <div class="section-content">
      <!-- <h1 class="my-n3">
        {{ desc }}
      </h1> -->
      <v-sheet class="ml-n6 mr-n4 mt-n8" elevation="0">
        <v-slide-group
          v-if="title == 'Featured Malls'"
          v-model="model2"
          class="py-2 px-6"
        >
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
            v-for="(item, i) in activeMallCards"
            :key="i"
            v-slot="{ toggle }"
            class="mx-4"
          >
            <div class="card-container d-flex flex-column">
              <!-- <v-lazy :options="{ threshold: 0.5 }" min-height="270"> -->
              <v-card
                class="my-4 mx-3 featured-card"
                width="270"
                height="340"
                elevation="1"
                @click="toggle"
              >
                <div
                  v-if="isDiff"
                  style="gap: 5px"
                  class="card-info ml-3 d-flex flex-column"
                >
                  <p style="font-weight: 600; font-size: 12px">
                    Hainan Chicken Rice with steamed Chicken topped with Soya
                    Sauce
                  </p>
                  <div style="font-weight: 600; font-size: 11px">
                    32 <span class="text-muted">Purchased</span> 50
                    <span class="text-muted">Views</span>
                  </div>
                </div>
                <div
                  v-if="!isDiff"
                  style="height: 100px"
                  class="card-title-container d-flex justify-space-between align-center px-1 py-4"
                >
                  <div class="w-25">
                    <v-img :src="item.logo" height="30" />
                  </div>
                  <div class="w-75 d-flex align-center justify-space-between">
                    <div class="card-title w-75">
                      <h4>{{ item.name }}</h4>
                      <span>{{ item.address }}</span>
                    </div>
                    <span class="text-red w-25 card-title-right">{{
                      item.distanceText
                    }}</span>
                  </div>
                </div>
                <div
                  class="featured-card-img-cont"
                  :class="{ 'featured-card-img-cont-2': isDiff }"
                >
                  <v-img
                    class="featured-card-img"
                    :src="item.mainImage"
                    transition="fade-transition"
                    :height="isDiff ? 154 : 180"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                </div>
                <div
                  v-if="!isDiff"
                  style="font-weight: 400; font-size: 14px; position: relative"
                  class="px-2 pt-5 pb-12"
                >
                  15 Merchants | 12 Promotions
                </div>
                <div
                  v-if="isDiff"
                  class="card-description pa-2 d-flex flex-column mt-1"
                  style="position: relative; gap: 10px"
                >
                  <div class="card-rating">
                    <v-icon class="mr-1" size="20" color="#F63F17">
                      mdi-star
                    </v-icon>
                    <v-icon class="mr-1" size="20" color="#F63F17">
                      mdi-star
                    </v-icon>
                    <v-icon class="mr-1" size="20" color="#F63F17">
                      mdi-star
                    </v-icon>
                    <v-icon class="mr-1" size="20" color="#F63F17">
                      mdi-star
                    </v-icon>
                    <v-icon class="mr-1" size="20" color="#F63F17">
                      mdi-star-outline
                    </v-icon>
                    <span>( 132 rates )</span>
                  </div>
                  <div class="card-price d-flex align-center">
                    <img src="@/assets/featured-price-img.png" height="15" />
                    <span class="ml-3">$80</span>
                  </div>
                  <div class="card-time">
                    <v-icon color="#ABABAB"> mdi-clock-outline </v-icon
                    ><span class="ml-4" style="color: #ababab"
                      >Ends in 18 Days (15/03/2023)</span
                    >
                  </div>
                  <div
                    class="card-address d-flex align-center my-2"
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
                    class="card-offer py-2 d-flex align-center"
                    style="background: #f3f3f3; gap: 10px; color: #5e5e5e"
                  >
                    <img src="@/assets/featured-offer-img.png" />
                    <span>Flat 50% on all Stores</span>
                  </div>
                </div>
                <div
                  class="card-btn-container d-flex justify-space-between"
                  :class="{
                    'card-btn-container-1-malls': !isDiff,
                    'card-btn-container-2': isDiff,
                  }"
                >
                  <v-btn
                    variant="outlined"
                    color="black"
                    class="card-btn"
                    width="24"
                    height="24"
                    icon="mdi-share-variant-outline"
                  >
                    <v-icon color="black" size="18">
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
                    width="24"
                    height="24"
                  >
                    <v-icon color="red" size="18"> mdi-heart </v-icon>
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
                <!-- <div
                  v-if="isDiff"
                  class="card-distance"
                >
                  <v-icon color="#808080">
                    mdi-map-marker
                  </v-icon>
                  <span class="text-red ml-2">10.20 kms</span><span class="text-muted"> away</span>
                </div> -->
              </v-card>
              <!-- </v-lazy> -->
            </div>
          </v-slide-group-item>
        </v-slide-group>

        <v-slide-group v-else v-model="model2" class="py-2 px-6">
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
            v-for="(item, index) in mallMerchants"
            :key="index"
            v-slot="{ toggle }"
            class="mx-4"
          >
            <div class="card-container d-flex flex-column">
              <!-- <v-lazy :options="{ threshold: 0.5 }" min-height="270"> -->
              <v-card
                class="my-4 mx-3 featured-card"
                style="position: relative"
                width="270"
                elevation="1"
                @click="toggle"
              >
                <div
                  v-if="isDiff"
                  style="gap: 5px"
                  class="card-info px-2 pt-3 pb-2 d-flex flex-column"
                >
                  <p style="font-weight: 600; font-size: 14px">
                    Hainan Chicken Rice with steamed Chicken topped with Soya
                    Sauce
                  </p>

                  <!-- <div class="d-flex justify-space-between mt-2"> -->
                  <div
                    style="font-weight: 600; font-size: 11px; gap: 5px"
                    class="d-flex mt-4"
                  >
                    <p>
                      <span class="text-muted">120</span>
                      View
                    </p>
                    <p>
                      <span class="text-muted">10</span>
                      Likes
                    </p>
                    <p>
                      <span class="text-muted">25</span>
                      Purchased
                    </p>
                  </div>
                  <div class="card-rating" style="font-size: 11px">
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star </v-icon>
                    <v-icon color="#F63F17"> mdi-star-outline </v-icon>
                    <span class="ml-2">( 132 rates )</span>
                  </div>
                  <!-- </div> -->
                </div>
                <div
                  v-if="!isDiff"
                  class="card-title-container d-flex justify-space-between align-center px-1 py-4"
                >
                  <div class="w-25 pr-2">
                    <v-img :src="$fileURL + item?.partner?.logo" height="30" />
                  </div>
                  <div class="w-75 d-flex align-center justify-space-between">
                    <div class="card-title w-75">
                      <h4 class="text-no-wrap">
                        {{ item?.partner?.partner_name }}
                      </h4>
                      <span class="text-no-wrap text-blue"
                        >{{ item?.location_name }},
                        {{ item?.unit_number }}</span
                      >
                      <br />
                      <span class="text-primary">{{
                        item?.town?.town_name
                      }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="featured-card-img-cont"
                  :class="{ 'featured-card-img-cont-2': isDiff }"
                >
                  <v-img
                    class="featured-card-img"
                    :src="$fileURL + item?.location_image"
                    transition="fade-transition"
                    :height="isDiff ? 154 : 180"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                </div>
                <div
                  v-if="!isDiff"
                  style="font-weight: 400; font-size: 14px; position: relative"
                  class="px-2 pt-5 pb-4"
                >
                  15 Merchants | 12 Promotions
                  <!-- <br />
                  <span
                    class="text-red card-title-rightd"
                    style="font-size: 9px"
                    >{{ item?.distance }}</span
                  >
                  <span
                    class="card-title-right text-gray"
                    style="font-size: 9px"
                  >
                    away</span
                  > -->
                </div>
                <div
                  v-if="isDiff"
                  class="card-description pa-3 d-flex flex-column"
                  style="gap: 10px"
                >
                  <!-- <div class="card-price">
                  <img
                    src="@/assets/featured-price-img.png"
                    height="15"
                  />
                  <span class="ml-5">$80</span>
                </div> -->
                  <div class="d-flex">
                    <div
                      class="card-address d-flex align-center w-66"
                      style="gap: 15px"
                    >
                      <img
                        src="@/assets/featured-address-img.png"
                        width="24"
                        height="28"
                      />
                      <div class="card-address-info">
                        <h5>Papa Rich</h5>
                        <h5>Parkway Parade - #01-23, Marine Parade</h5>
                      </div>
                    </div>
                    <div
                      style="font-size: 10px; text-align: right"
                      class="w-33"
                    >
                      <span class="text-red">10.20 kms</span
                      ><span class="text-muted"> away</span>
                    </div>
                  </div>
                  <div class="d-flex justify-space-between mt-4">
                    <div class="card-time d-flex">
                      <v-icon> mdi-calendar </v-icon>
                      <div>
                        <p style="font-size: 11px" class="ml-1">
                          Starts 15/03/2023
                        </p>
                        <p style="font-size: 10px" class="ml-1">
                          (27 days ago)
                        </p>
                      </div>
                    </div>
                    <div class="card-time d-flex">
                      <v-icon> mdi-calendar </v-icon>
                      <div>
                        <p style="font-size: 11px" class="ml-1">
                          Starts 15/03/2023
                        </p>
                        <p style="font-size: 10px" class="ml-1">
                          (27 days ago)
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="!isDiff"
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
                      width="24"
                      height="24"
                      icon="mdi-share-variant-outline"
                    >
                      <v-icon color="black" size="18">
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
                      width="24"
                      height="24"
                    >
                      <v-icon color="red" size="18"> mdi-heart </v-icon>
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
                  <!-- <div
                    v-if="isDiff"
                    class="card-distance"
                  >
                    <v-icon color="#808080">
                      mdi-map-marker
                    </v-icon>
                    <span class="text-red ml-2">10.20 kms</span><span class="text-muted"> away</span>
                  </div> -->
                </div>
                <div
                  v-if="isDiff"
                  class="card-offer py-5 px-3 d-flex align-center justify-space-around"
                  style="background: #f3f3f3; gap: 20px; color: #5e5e5e"
                >
                  <span style="color: #0197d5; font-weight: 500">S$ 46.40</span>
                  <v-btn
                    class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 text-white d-flex align-center pa-4"
                    style="
                      background: #e99820;
                      color: #ffffff;
                      border-color: #008d00;
                      font-weight: 400;
                      font-size: 12px;
                      border-radius: 10px;
                    "
                  >
                    <span>Reedem Now</span>
                  </v-btn>
                </div>
              </v-card>
              <!-- </v-lazy> -->
            </div>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
      <!-- <div
        class="card-footer d-flex justify-center align-center mt-16 mb-10"
        style="gap: 10px"
      >
        <div class="line-divider" />
        <v-btn
          class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 v-size--default text-white"
          style="
            background-color: #008d00;
            border-color: #008d00;
            font-weight: 400;
            font-size: 20px;
            border-radius: 50px;
          "
        >
          View All Featured Malls
        </v-btn>
        <div class="line-divider" />
      </div> -->
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
    "activeMallItems",
    "activeMallCards",
    "mallMerchants",
  ],
  data() {
    return {
      selectedMalls: null,
      selectedMerchants: null,
      data: null,
    };
  },
  computed: {
    isAll() {
      return (
        this.$route.path == "/all-malls" || this.$route.path == "/all-merchants"
      );
    },
    filteredActiveMalls() {
      if (!this.selectedMalls) {
        return this.activeMallCards;
      } else {
        return this.activeMallCards.filter(
          (item) => item.name == this.selectedMalls
        );
      }
    },
    filteredActiveMerchants() {
      if (!this.selectedMerchants) {
        return this.mallMerchants.filter(
          (i) => i.mall_merchant.featured === "Y"
        );
      } else {
        return this.mallMerchants.filter(
          (item) =>
            item.partner.partner_name == this.selectedMerchants &&
            item.mall_merchant.featured === "Y"
        );
      }
    },
  },
};
</script>

<style scoped>
.section-title {
  width: 95%;
}

.section-title h1 {
  font-weight: 700;
  color: black;
  font-size: 18px;
}

.title-line {
  width: inherit;
  background: #000;
  height: 1px;
  margin: 0px auto 40px;
}

.section-select {
  width: 230px;
  margin: 0 auto;
  color: black !important;
}

.section-content h1 {
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: black;
  width: 95% !important;
  margin: auto;
}

.view-all {
  color: #00cdcd !important;
  font-size: 16px !important;
}

.card-container {
  width: 290px !important;
}

.featured-card {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43) !important;
}
.featured-card:hover {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.43) !important;
}

.featured-card-img-cont {
  overflow: hidden;
  height: 180px;
}

.featured-card-img-cont-2 {
  overflow: hidden;
  height: 154px;
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

.card-title {
  gap: -10px;
}

.card-title h4 {
  font-weight: 600;
  font-size: 14px;
}

.card-title span {
  font-weight: 500;
  font-size: 11px;
}

.card-title-right {
  font-size: 9px;
  font-weight: 600;
}

.card-btn-container {
  position: absolute;
  gap: 20px;
}

.card-btn-container-1 {
  bottom: 100px;
  right: 30px;
}
.card-btn-container-1-malls {
  bottom: 55px;
  right: 30px;
}
.card-btn-container-2 {
  top: 142px;
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

  padding: 2px 25px;
  font-size: 11px;
}
.card-tag-1 {
  top: 140px;
  right: 10px;
}
.card-tag-2 {
  top: 105px;
  left: 10px;
}
.card-distance {
  background: #fff;
  position: absolute;
  top: 115px;
  left: 10px;
  padding: 5px 8px;
  font-size: 10px;
}

.card-rating span {
  font-weight: 400;
  font-size: 12px;
}

.card-price {
  font-weight: 500;
  font-size: 11px;
}

.card-time {
  font-size: 11px;
}

.card-address-info {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
}

.card-offer {
  font-weight: 400;
  font-size: 12px;
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
