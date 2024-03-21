<template>
  <v-container class="mb-2">
    <div v-if="title == 'Featured Malls' && !isAll">
      <h2 style="font-weight: 800; text-align: center">
        Featured <span style="color: #16b85f">Malls</span>
      </h2>
      <p class="my-4" style="color: gray">
        Check out promotions that are happening in malls around you .
      </p>
    </div>
    <div v-if="title == 'Featured Promotions' && !isAll" class="mb-4">
      <h2 style="font-weight: 800; text-align: center">
        Featured <span style="color: #16b85f">Promotions</span>
      </h2>
    </div>
    <div
      v-if="
        (title == 'Featured Malls' && isAll) || title == 'Featured Merchants'
      "
      class="section-title text-h6 d-flex justify-space-between mx-auto"
    >
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
      <v-sheet v-if="title == 'Featured Malls'" elevation="0">
        <!-- <v-slide-group
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
          > -->
        <v-row
          dense
          class="d-flex align-center justify-center flex-column w-100"
        >
          <v-col
            v-for="(item, i) in activeMallCards?.slice(0, 2)"
            :key="i"
            cols="12"
            class="mb-2"
          >
            <v-lazy :options="{ threshold: 0.5 }" min-height="250">
              <v-card
                class="featured-card"
                height="250"
                elevation="0"
                style="box-shadow: none !important"
                @click="toggle"
              >
                <div
                  v-if="!isDiff"
                  class="card-title-container d-flex justify-space-between align-center px-1 pb-1"
                >
                  <div class="d-flex align-center justify-end w-100">
                    <span
                      style="text-align: right"
                      class="text-red card-title-right"
                      >{{ item.distanceText }}</span
                    >
                  </div>
                </div>
                <div
                  style="
                    background: #16b85f;
                    color: #ffffff;
                    position: absolute;
                    top: 30px;
                    left: 15px;
                    padding: 10px 15px;
                    font-size: 11px;
                    border-radius: 50px;
                    z-index: 3;
                  "
                >
                  12 Promotions
                </div>
                <div class="featured-card-img-cont-3">
                  <v-img
                    class="featured-card-img"
                    :src="item.mainImage"
                    transition="fade-transition"
                    height="230"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                </div>
                <div
                  v-if="!isDiff"
                  style="height: 100px; position: absolute; bottom: 0; left: 0"
                  class="card-title-container d-flex justify-space-between align-center px-1 py-4 w-100"
                >
                  <div class="w-33">
                    <v-img :src="item.logo" height="50" />
                  </div>
                  <div class="w-66 d-flex align-center justify-space-between">
                    <div class="card-title text-white">
                      <h4>{{ item.name }}</h4>
                      <span>{{ item.address }}</span>
                    </div>
                  </div>
                </div>

                <!-- <div
                  v-if="!isDiff"
                  style="font-weight: 400; font-size: 14px; position: relative"
                  class="px-2 pt-5 pb-12"
                >
                  15 Merchants | 12 Promotions
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
                  class="card-tag w-50"
                  :class="{
                    'card-tag-1': isDiff,
                    'card-tag-2': !isDiff,
                  }"
                >
                  Featured
                </div> -->

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
            </v-lazy>
          </v-col>
          <v-col v-if="!isAll" cols="8">
            <v-btn
              to="/all-malls"
              class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 mt-6 text-white d-flex align-center py-6 px-13"
              style="
                background-color: #008d00;
                border-color: #008d00;
                font-weight: 700;
                font-size: 18px;
                border-radius: 50px;
              "
            >
              <span>View All Malls</span>
            </v-btn>
          </v-col>
        </v-row>
        <!-- </v-slide-group-item>
        </v-slide-group> -->
      </v-sheet>

      <v-sheet v-if="title == 'Featured Promotions'" elevation="0">
        <!-- <v-slide-group
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
          > -->
        <v-row
          dense
          class="d-flex align-center justify-center flex-column w-100"
        >
          <v-col
            v-for="(item, i) in mallPromotions?.slice(0, 2)"
            :key="i"
            cols="12"
            class="mb-2"
          >
            <v-lazy :options="{ threshold: 0.5 }" min-height="330">
              <v-card
                class="featured-card pb-4"
                height="330"
                elevation="0"
                style="
                  box-shadow: none !important;
                  border-bottom: 1px solid lightgrey;
                "
                @click="toggle"
              >
                <div
                  class="card-title-container d-flex justify-space-between align-center px-1 pb-1"
                >
                  <div style="overflow-y: hidden">
                    <p style="font-weight: 700; font-size: 16px">
                      {{ item?.promo_name }}
                    </p>
                  </div>
                </div>
                <div
                  style="
                    background: rgba(55, 55, 55, 0.7);
                    color: white;
                    position: absolute;
                    top: 40px;
                    right: 15px;
                    padding: 5px 15px;
                    font-size: 11px;
                    border-radius: 50px;
                    z-index: 3;
                  "
                >
                  S$ {{ item?.amount }}
                </div>
                <div
                  v-if="item?.promo_featured === 'Y'"
                  style="
                    background: #f26525;
                    color: white;
                    position: absolute;
                    bottom: 90px;
                    left: 15px;
                    padding: 5px 15px;
                    font-size: 11px;
                    border-radius: 50px;
                    z-index: 3;
                  "
                >
                  Featured
                </div>
                <div class="featured-card-img-cont-3">
                  <v-img
                    class="featured-card-img"
                    :src="$fileURL + item?.main_image"
                    transition="fade-transition"
                    height="230"
                    @click="moveToRedeem(item)"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                </div>

                <div class="d-flex align-center my-4">
                  <div
                    class="card-address d-flex align-center w-66"
                    style="gap: 15px"
                  >
                    <div style="width: 20%">
                      <img
                        class="logo-img"
                        :src="$fileURL + item?.logo"
                        height="28"
                      />
                    </div>
                    <div class="card-address-info" style="width: 80%">
                      <h5>{{ item?.partner_name }}</h5>
                      <h5>
                        {{ item?.mall_name }} - {{ item?.unit_number }},
                        {{ item?.town_name }}
                      </h5>
                    </div>
                  </div>
                  <div style="font-size: 10px; text-align: right" class="w-33">
                    <span class="text-red">{{ item?.distanceText }}</span
                    ><span class="text-muted"> away</span>
                  </div>
                </div>

                <!-- <div
                  v-if="!isDiff"
                  style="font-weight: 400; font-size: 14px; position: relative"
                  class="px-2 pt-5 pb-12"
                >
                  15 Merchants | 12 Promotions
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
                  class="card-tag w-50"
                  :class="{
                    'card-tag-1': isDiff,
                    'card-tag-2': !isDiff,
                  }"
                >
                  Featured
                </div> -->

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
            </v-lazy>
          </v-col>
          <v-col v-if="!isAll" cols="10">
            <v-btn
              class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 mt-6 text-white d-flex align-center py-6 px-13"
              style="
                background-color: #008d00;
                border-color: #008d00;
                font-weight: 700;
                font-size: 18px;
                border-radius: 50px;
              "
            >
              <span>View All Promotions</span>
            </v-btn>
          </v-col>
        </v-row>
        <!-- </v-slide-group-item>
        </v-slide-group> -->
      </v-sheet>

      <v-sheet class="ml-n6 mr-n4 mt-4" elevation="0">
        <v-slide-group
          v-if="title == 'Featured Merchants'"
          v-model="model2"
          class="py-2 px-6 mt-n8"
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
                  v-if="!isDiff"
                  class="card-title-container d-flex justify-space-between align-center px-1 py-4"
                >
                  <div class="w-25 pr-2">
                    <v-img :src="$fileURL + item?.logo" height="30" />
                  </div>
                  <div class="w-75 d-flex align-center justify-space-between">
                    <div class="card-title">
                      <h4 class="text-no-wrap">
                        {{ item?.partner_name }}
                      </h4>
                      <span class="text-no-wrap text-blue"
                        >{{ item?.mall_name }}, {{ item?.unit_number }}</span
                      >
                      <br />
                      <div class="d-flex justify-space-between">
                        <span class="text-primary">{{ item?.town_name }}</span>
                        <span
                          style="font-size: 10px"
                          class="text-red card-title-right text-no-wrap text-red"
                          >{{ item?.distanceText }}</span
                        >
                      </div>
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
                  {{ item?.outlet_count }} Outlets |
                  {{ item?.promotion_count }} Promotions
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
              </v-card>
              <!-- </v-lazy> -->
            </div>
          </v-slide-group-item>
        </v-slide-group>

        <v-slide-group
          v-if="title === 'Temp'"
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
            v-for="(item, index) in mallPromotions"
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
                  <div style="height: 40px; overflow-y: hidden">
                    <p style="font-weight: 600; font-size: 14px">
                      {{ item?.promo_name }}
                    </p>
                  </div>

                  <!-- <div class="d-flex justify-space-between mt-2"> -->
                  <div
                    style="font-weight: 600; font-size: 11px; gap: 5px"
                    class="d-flex"
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
                <div class="featured-card-img-cont-2">
                  <v-img
                    class="featured-card-img"
                    :src="$fileURL + item?.main_image"
                    transition="fade-transition"
                    :height="isDiff ? 154 : 180"
                  >
                    <template #placeholder>
                      <div class="skeleton" />
                    </template>
                  </v-img>
                </div>
                <div
                  v-if="isDiff"
                  class="card-description pa-3 d-flex flex-column"
                  style="gap: 10px"
                >
                  <div class="d-flex">
                    <div
                      class="card-address d-flex align-center w-66"
                      style="gap: 15px"
                    >
                      <div style="width: 20%">
                        <img
                          class="logo-img"
                          :src="$fileURL + item?.logo"
                          height="28"
                        />
                      </div>
                      <div class="card-address-info" style="width: 80%">
                        <h5>{{ item?.partner_name }}</h5>
                        <h5>
                          {{ item?.mall_name }} - {{ item?.unit_number }},
                          {{ item?.town_name }}
                        </h5>
                      </div>
                    </div>
                    <div
                      style="font-size: 10px; text-align: right"
                      class="w-33"
                    >
                      <span class="text-red">{{ item?.distanceText }}</span
                      ><span class="text-muted"> away</span>
                    </div>
                  </div>
                  <div class="d-flex justify-space-between">
                    <div class="card-time d-flex">
                      <v-icon> mdi-calendar </v-icon>
                      <div>
                        <p style="font-size: 11px" class="ml-1">
                          Starts {{ item?.promo_starts_on }}
                        </p>
                        <p style="font-size: 10px" class="ml-1">
                          ({{ dateComparisonStart(item?.promo_starts_on) }})
                        </p>
                      </div>
                    </div>
                    <div v-if="item?.promo_ends_on" class="card-time d-flex">
                      <v-icon> mdi-calendar </v-icon>
                      <div>
                        <p style="font-size: 11px" class="ml-1">
                          Ends {{ item?.promo_ends_on }}
                        </p>
                        <p style="font-size: 10px" class="ml-1">
                          ({{ dateComparisonEnd(item?.promo_ends_on) }})
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    v-if="item?.promo_featured === 'Y'"
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
                  class="card-offer py-3 px-3 d-flex align-center justify-space-around"
                  style="background: #f3f3f3; gap: 20px; color: #5e5e5e"
                >
                  <span style="color: #0197d5; font-weight: 500"
                    >S$ {{ item?.amount }}</span
                  >
                  <!-- :to="`/pre-redeem/${item?.promo_id}`" -->
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
                    @click="moveToRedeem(item)"
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
import router from "@/router";
import moment from "moment";
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
    "mallPromotions",
  ],
  data() {
    return {
      selectedMalls: null,
      selectedMerchants: null,
      data: null,
      currentDate: moment().format("DD/MM/YYYY"),
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
  methods: {
    moveToRedeem(item) {
      localStorage.setItem("preRedeemItem", JSON.stringify(item));
      router.push(`/pre-redeem/${item?.promo_id}`);
    },
    dateComparisonStart(startDate) {
      const start = moment(startDate, "DD/MM/YYYY");
      const current = moment(this.currentDate, "DD/MM/YYYY");
      const diffDays = current.diff(start, "days");

      if (diffDays === 0) {
        return "Today";
      } else if (diffDays > 0) {
        return diffDays + " days ago";
      } else {
        return "In the future";
      }
    },
    dateComparisonEnd(endDate) {
      const end = moment(endDate, "DD/MM/YYYY");
      const current = moment(this.currentDate, "DD/MM/YYYY");
      const diffDays = end.diff(current, "days");

      if (diffDays === 0) {
        return "Today";
      } else if (diffDays > 0) {
        return diffDays + " days left";
      } else {
        return "Already passed";
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
  margin: auto;
}

.view-all {
  color: #00cdcd !important;
  font-size: 16px !important;
}

.card-container {
  width: 290px !important;
}

.logo-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
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

.featured-card-img-cont-3 {
  overflow: hidden;
  height: 230px;
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
  font-weight: 700;
  font-size: 16px;
}

.card-title span {
  font-weight: 600;
  font-size: 13px;
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
