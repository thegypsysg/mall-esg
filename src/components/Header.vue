<template>
  <v-app-bar
    v-if="isDesktop || !isHeader || isSmall"
    :class="{
      'app-bar-mobile-start': isSmall,
      'px-8': isHeader || isProfile,
    }"
    color="white"
    elevation="1"
    fixed
  >
    <!-- <div class="d-flex justify-start"> -->
    <router-link to="/">
      <div class="logo-img-container">
        <v-img
          class="logo-img"
          :src="$fileURL + logo"
          height="90"
          transition="fade-transition"
        >
          <template #placeholder>
            <div class="skeleton" />
          </template>
        </v-img>
      </div>
    </router-link>
    <div
      v-if="isHeader || isProfile"
      class="ml-6 d-flex flex-row navbar-header"
      :class="{ 'navbar-header-mobile': !isDesktop && isProfile }"
    >
      <div class="divider" :class="{ 'd-none': !isDesktop && isProfile }" />
      <h1>{{ titleHeader }}</h1>
    </div>
    <!-- </div> -->
    <v-spacer v-if="isHeader || isProfile" />
    <form
      v-if="!isHeader && !isProfile"
      class="navbar__search navbar__search__desktop"
    >
      <v-autocomplete
        id="product_name"
        v-model="search"
        class="form-control mr-sm-2 ml-md-n3 mt-md-n2 search-input"
        item-title="name"
        item-value="name"
        :items="activeMalls"
        style="font-style: italic"
        placeholder="Type a Mall or merchant"
        density="compact"
        color="blue-grey-lighten-2"
      >
        <template #item="{ props, item }">
          <div class="mb-2" v-bind="props">
            <router-link
              class="text-decoration-none text-black font-weight-bold"
              to="#"
            >
              <div class="d-flex align-center w-100">
                <div class="w-25 py-1">
                  <div style="width: 100px">
                    <v-img height="40" :src="item?.raw?.mainImage">
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>
                </div>
                <div class="w-75" style="font-size: 12px">
                  <p class="mb-1">
                    {{ `${item?.raw?.name} (${item?.raw?.subIndustryName})` }}
                  </p>
                  <p class="text-grey">
                    <span>{{ `${item?.raw?.town}` }}</span> (<span
                      class="text-red"
                      >{{ `${item?.raw?.distanceText}` }}</span
                    ><span class="text-black"> away</span>)
                  </p>
                </div>
              </div>
            </router-link>
          </div>
        </template>
      </v-autocomplete>
      <button class="btn btn--search" type="submit">
        <v-icon color="white"> mdi-magnify </v-icon>
      </button>
    </form>
    <div v-if="!isHeader && !isProfile" class="text-center desktop__app">
      <v-btn
        style="background: #f4f5f7; color: black"
        variant="text"
        color="black"
        icon="mdi-share-outline"
        width="40"
        height="40"
        class="mr-2 ml-4"
      >
        <v-icon color="rgb(38, 38, 38)" size="22"> mdi-share-outline </v-icon>
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
      <!-- <v-menu location="bottom">
        <template #activator="{ props }">
          <v-btn
            style="
              margin-left: 30px;
              margin-right: 30px;
              font-size: 16px;
              color: #494949;
            "
            v-bind="props"
            variant="text"
          >
            {{ itemSelected }}
            <v-icon
              right
              dark
            >
              mdi-menu-down
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in country"
            :key="index"
            :value="index"
            @click="changeItemSelected(item.title)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->

      <v-menu>
        <template #activator="{ props }">
          <v-btn
            v-if="!isLoading"
            style="font-size: 15px; color: #494949"
            v-bind="props"
            variant="text"
          >
            <template
              v-if="!itemSelectedComplete || itemSelectedComplete == null"
            >
              <span>{{ itemSelected }}</span>
            </template>
            <template
              v-if="itemSelectedComplete || itemSelectedComplete != null"
            >
              <span class="text-blue-darken-4">{{
                itemSelectedComplete?.title
              }}</span
              ><span class="text-red">
                ({{ itemSelectedComplete?.count }}
                {{
                  itemSelectedComplete?.count == "1" ||
                  itemSelectedComplete?.count == "0"
                    ? "Job"
                    : "Jobs"
                }})</span
              >
            </template>
            <v-icon right dark> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in country"
            :key="index"
            :value="index"
            @click="changeItemSelected(item)"
          >
            <v-list-item-title v-if="isSpecific">
              <span class="text-blue-darken-4">{{ item.title }}</span
              ><span class="text-red">
                ({{ item.count }}
                {{
                  item.count == "1" || item.count == "0" ? "Job" : "Jobs"
                }})</span
              >
            </v-list-item-title>
            <v-list-item-title v-else>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu v-if="itemSelectedComplete?.oneCity != true">
        <template #activator="{ props }">
          <v-btn
            style="
              margin-left: 10px;
              margin-right: 20px;
              font-size: 15px;
              color: #494949;
            "
            v-bind="props"
            variant="text"
          >
            <!-- {{ isLoading ? 'loading...' : itemSelected2 }} -->
            <span v-if="isLoading">loading...</span>
            <template v-if="!isLoading && itemSelected2Complete == null">
              <span>{{ itemSelected2 }}</span>
            </template>
            <template v-if="!isLoading && itemSelected2Complete != null">
              <span class="text-blue-darken-4">
                {{ itemSelected2Complete?.title }}</span
              ><span class="text-black">
                ({{ itemSelected2Complete?.count }}
                {{
                  itemSelected2Complete?.count == "1" ||
                  itemSelected2Complete?.count == "0"
                    ? "Job"
                    : "Jobs"
                }})</span
              >
            </template>
            <v-icon right dark> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in city"
            :key="index"
            :value="index"
            @click="changeItemSelected2(item)"
          >
            <v-list-item-title v-if="isSpecific">
              <span class="text-blue-darken-4">{{ item.title }}</span
              ><span class="text-black">
                ({{ item.count }}
                {{
                  item.count == "1" || item.count == "0" ? "Job" : "Jobs"
                }})</span
              >
            </v-list-item-title>
            <v-list-item-title v-else>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div v-if="!isHeader && !isProfile" class="btn_sign__up-cont">
      <v-btn elevation="0" class="btn_sign__up">
        <span> Sign up / Register</span>
      </v-btn>
      <div class="btn_sign__up-hover" />
    </div>
    <v-btn icon @click="drawer = !drawer">
      <img
        src="@/assets/images/icons/user_icon.png"
        style="height: 48px; width: auto"
      />
    </v-btn>

    <template v-if="!isProfile" #extension>
      <div class="mobile__app text-center">
        <div style="margin-top: -50px" class="d-flex flex-column">
          <v-menu v-if="!isLoading">
            <template #activator="{ props }">
              <v-btn
                v-if="!isLoading"
                style="font-size: 15px; color: #494949"
                v-bind="props"
                variant="text"
              >
                <template
                  v-if="!itemSelectedComplete || itemSelectedComplete == null"
                >
                  <span>{{ itemSelected }}</span>
                </template>
                <template
                  v-if="itemSelectedComplete || itemSelectedComplete != null"
                >
                  <span class="text-blue-darken-4">{{
                    itemSelectedComplete?.title
                  }}</span
                  ><span class="text-red">
                    ({{ itemSelectedComplete?.count }}
                    {{
                      itemSelectedComplete?.count == "1" ||
                      itemSelectedComplete?.count == "0"
                        ? "Job"
                        : "Jobs"
                    }})</span
                  >
                </template>
                <v-icon right dark> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list style="max-height: 50vh">
              <v-list-item
                v-for="(item, index) in country"
                :key="index"
                :value="index"
                @click="changeItemSelected(item)"
              >
                <v-list-item-title v-if="isSpecific">
                  <span class="text-blue-darken-4">{{ item.title }}</span
                  ><span class="text-red">
                    ({{ item.count }}
                    {{
                      item.count == "1" || item.count == "0" ? "Job" : "Jobs"
                    }})</span
                  >
                </v-list-item-title>
                <v-list-item-title v-else>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-menu v-if="itemSelectedComplete?.oneCity != true">
            <template #activator="{ props }">
              <v-btn
                style="font-size: 15px; color: #494949"
                v-bind="props"
                variant="text"
              >
                <!-- {{ isLoading ? 'loading...' : itemSelected2 }} -->
                <span v-if="isLoading">loading...</span>
                <template v-if="!isLoading && itemSelected2Complete == null">
                  <span>{{ itemSelected2 }}</span>
                </template>
                <template v-if="!isLoading && itemSelected2Complete != null">
                  <span class="text-blue-darken-4">
                    {{ itemSelected2Complete?.title }}</span
                  ><span class="text-black">
                    ({{ itemSelected2Complete?.count }}
                    {{
                      itemSelected2Complete?.count == "1" ||
                      itemSelected2Complete?.count == "0"
                        ? "Job"
                        : "Jobs"
                    }})</span
                  >
                </template>
                <v-icon right dark> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list style="max-height: 50vh">
              <v-list-item
                v-for="(item, index) in city"
                :key="index"
                :value="index"
                @click="changeItemSelected2(item)"
              >
                <v-list-item-title v-if="isSpecific">
                  <span class="text-blue-darken-4">{{ item.title }}</span
                  ><span class="text-black">
                    ({{ item.count }}
                    {{
                      item.count == "1" || item.count == "0" ? "Job" : "Jobs"
                    }})</span
                  >
                </v-list-item-title>
                <v-list-item-title v-else>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <form class="navbar__search navbar__search__mobile">
          <v-autocomplete
            id="product_name"
            v-model="search"
            class="form-control mr-sm-2 ml-md-n3 mt-n2 search-input"
            item-title="name"
            item-value="name"
            :items="activeMalls"
            style="font-style: italic"
            placeholder="Type a Mall or merchant"
            density="compact"
            color="blue-grey-lighten-2"
          >
            <template #item="{ props, item }">
              <div class="mb-2" v-bind="props">
                <router-link
                  class="text-decoration-none text-black font-weight-bold"
                  style="font-size: 12px"
                  to="#"
                >
                  <div class="d-flex align-center" style="width: 100%">
                    <div style="width: 30% !important" class="py-1">
                      <div style="width: 100px">
                        <v-img height="40" :src="item?.raw?.mainImage">
                          <template #placeholder>
                            <div class="skeleton" />
                          </template>
                        </v-img>
                      </div>
                    </div>
                    <div style="width: 70% !important" class="pl-2">
                      <p class="mb-1">
                        {{
                          `${item?.raw?.name} (${item?.raw?.subIndustryName})`
                        }}
                      </p>
                      <p class="text-grey">
                        <span>{{ `${item?.raw?.town}` }}</span> (<span
                          class="text-red"
                          >{{ `${item?.raw?.distanceText}` }}</span
                        ><span class="text-black"> away</span>)
                      </p>
                    </div>
                  </div>
                </router-link>
              </div>
            </template>
          </v-autocomplete>
          <button class="btn btn--search" type="submit">
            <v-icon color="white"> mdi-magnify </v-icon>
          </button>
        </form>
      </div>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    v-if="!isWelcome || (isWelcome && isSmall)"
    v-model="drawer"
    temporary
    location="right"
  >
    <div
      class="drawer__top"
      :class="{ 'py-6': userName == null, 'py-2': userName != null }"
    >
      <router-link
        v-if="userName == null"
        class="text-decoration-none"
        to="/sign-in"
      >
        <span style="font-size: 1.125rem; color: white">Sign up / Sign In</span>
      </router-link>
      <div v-else class="d-flex align-center">
        <div style="width: 55px; height: 55px; border-radius: 50%">
          <v-img
            cover
            style="border-radius: 50%; width: 100%; height: 100%"
            :src="
              userImage != null
                ? userImage
                : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            "
          >
            <template #placeholder>
              <div class="skeleton" />
            </template>
          </v-img>
        </div>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title style="font-size: 14px">
              {{ userName }}
            </v-list-item-title>
            <v-list-item-subtitle style="font-size: 10px" class="mt-1">
              Last Login: {{ userDated }}
            </v-list-item-subtitle>
            <div
              class="text-red mt-1"
              style="font-size: 12px; cursor: pointer"
              @click="logout"
            >
              Logout
            </div>
          </v-list-item-content>
        </v-list-item>
      </div>
    </div>
    <div class="drawer__heading">
      <div class="drawer-logo">
        <v-img height="35" width="80" :src="$fileURL + logo" />
      </div>
      <v-menu contained style="z-index: 1000">
        <template #activator="{ props }">
          <v-btn
            style="background: #f4f5f7; color: black"
            variant="text"
            color="black"
            icon="mdi-share-outline"
            width="30"
            height="30"
            class="mx-4"
            v-bind="props"
          >
            <v-icon color="rgb(38, 38, 38)" size="15">
              mdi-share-outline
            </v-icon>
          </v-btn>
        </template>
        <v-list style="z-index: 1000">
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
              <v-icon class="mr-4" color="black" size="18"> mdi-twitter </v-icon
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
      <div class="text-muted" style="font-size: 10px">Version 1.0</div>
    </div>
    <v-divider />
    <ul class="pt-1" nav dense>
      <li class="v-list-item">
        <div class="v-list-item__icon">
          <v-img height="20" width="30" src="@/assets/images/icons/home.png" />
        </div>
        <v-list-item-title style="font-size: 12px"> Home </v-list-item-title>
      </li>
      <li class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img height="18" width="25" src="@/assets/links-arrow.svg" />
        </div>
        <v-list-item-title class="text-blue-accent-4" style="font-size: 12px">
          Merchants - Send Inquiry
        </v-list-item-title>
      </li>
      <li class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img height="18" width="25" src="@/assets/links-arrow.svg" />
        </div>
        <v-list-item-title class="text-blue-accent-4" style="font-size: 12px">
          Driver Partners - Deliver for us
        </v-list-item-title>
      </li>
      <li class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img height="18" width="25" src="@/assets/links-arrow.svg" />
        </div>
        <v-list-item-title class="text-blue-accent-4" style="font-size: 12px">
          All Promotions
        </v-list-item-title>
      </li>
      <li class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img height="18" width="25" src="@/assets/links-arrow.svg" />
        </div>
        <v-list-item-title class="text-blue-accent-4" style="font-size: 12px">
          All Malls
        </v-list-item-title>
      </li>

      <!-- <li v-if="userName != null" class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img
            height="18"
            width="25"
            src="@/assets/images/icons/menu-shopper.png"
          />
        </div>
        <router-link class="text-decoration-none text-black" to="/my-profile">
          <v-list-item-title style="font-size: 12px">
            My Profile
          </v-list-item-title>
        </router-link>
      </li>

      <li class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img height="18" width="25" src="@/assets/images/icons/shop.png" />
        </div>
        <v-list-item-title style="font-size: 12px"> My Cart </v-list-item-title>
      </li>

      <li v-if="userName != null" class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img src="" />
        </div>
        <v-list-item-title style="font-size: 12px">
          My Vouchers
        </v-list-item-title>
      </li>
      <li v-if="userName != null" class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img src="" />
        </div>

        <v-list-item-title style="font-size: 12px">
          My Favorites
        </v-list-item-title>
      </li>
      <li v-if="userName != null" class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img src="" />
        </div>

        <v-list-item-title style="font-size: 12px"> My Apps </v-list-item-title>
      </li>
      <li v-if="userName == null" class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img src="" />
        </div>
        <router-link
          class="text-decoration-none text-black"
          to="/privacy-policy"
        >
          <v-list-item-title style="font-size: 12px">
            Privacy Policy
          </v-list-item-title>
        </router-link>
      </li>
      <li v-if="userName == null" class="v-list-item mt-n2">
        <div class="v-list-item__icon">
          <v-img src="" />
        </div>

        <router-link class="text-decoration-none text-black" to="/our-terms">
          <v-list-item-title style="font-size: 12px">
            Terms & Conditions
          </v-list-item-title>
        </router-link>
      </li> -->
    </ul>
    <div class="drawer__bottom">
      <div class="text-center" style="width: 100%">
        <p style="font-size: 13px" class="mb-1">Made in Singapore</p>
        <h3 style="font-size: 13px">Get connected</h3>
        <v-row
          class="d-flex justify-center mt-1"
          :class="{ 'mb-2': userName == null }"
        >
          <v-col cols="3" class="d-flex justify-end">
            <v-img
              src="@/assets/images/icons/facebook.png"
              height="40"
              width="32"
            />
          </v-col>
          <v-col class="d-flex justify-center" cols="3">
            <v-img
              src="@/assets/images/icons/insta.png"
              height="40"
              width="32"
            />
          </v-col>
          <v-col class="d-flex justify-start" cols="3">
            <v-img
              src="@/assets/images/icons/tiktok.png"
              class="mt-1"
              height="35"
              width="35"
            />
          </v-col>
        </v-row>
        <div
          v-if="userName != null"
          style="font-size: 12px"
          class="text-grey my-1"
        >
          <router-link
            class="text-decoration-none text-grey"
            to="/privacy-policy"
          >
            Privacy
          </router-link>
          |
          <router-link class="text-decoration-none text-grey" to="/our-terms">
            Terms
          </router-link>
        </div>
        <div class="drawer-social d-flex" style="width: 100%; gap: 10px">
          <div>
            <h5>WhatsApp</h5>
            <!-- <a
              style="text-decoration: none; font-size: 10px"
              :href="`https://api.whatsapp.com/send?phone=${footerData?.whats_app}&text=Hello!`"
            >
              {{ footerData?.whats_app }}
            </a> -->
            <a
              style="text-decoration: none; font-size: 10px"
              :href="`https://api.whatsapp.com/send?phone=8589102000&text=Hello!`"
            >
              +65.89102000
            </a>
          </div>
          <div>
            <h5>Contact us</h5>
            <a
              style="text-decoration: none; font-size: 10px"
              :href="`mailto:support@mall-e.in`"
              >support@mall-e.in</a
            >
            <!-- <a
              style="text-decoration: none; font-size: 10px"
              :href="`mailto:${footerData?.email_id}`"
              >{{ footerData?.email_id }}</a
            > -->
          </div>
        </div>
        <v-divider class="mt-2 mb-n2" />
        <v-container class="footer-bottom d-flex pb-0 justify-center">
          <div
            class="d-flag d-flex justify-space-between w-100 align-center mb-n6"
          >
            <img
              style="max-width: 40px; border: 1px solid black"
              src="data:image/png;base64,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"
              alt="Singapore"
            />
            <div id="footerCurrentTime" style="font-size: 0.7rem">
              {{ currentTime }}
            </div>
          </div>
        </v-container>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
// import app from "@/util/eventBus";
import axios from "@/util/axios";
import moment from "moment-timezone";
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Header",
  props: ["titleHeader", "isHeader", "isDesktop", "isProfile"],
  data() {
    return {
      isLoading: false,
      drawer: false,
      headerData: {},
      userImage: null,
      userName: null,
      userDated: null,
      logo: "",
      search: null,
      activeMalls: [],
      countryId: null,
      country: [],
      city: [],
      currentTime: "",
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    ...mapState(["itemSelected"]),
    ...mapState(["itemSelected2"]),
    ...mapState(["itemSelectedComplete"]),
    ...mapState(["itemSelected2Complete"]),
    ...mapState(["itemSelected", "ativeTag"]),
    latitude() {
      return localStorage.getItem("latitude");
    },
    longitude() {
      return localStorage.getItem("longitude");
    },
    isSmall() {
      return this.screenWidth < 640;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    setInterval(this.updateTime, 1000);
  },
  mounted() {
    this.getLogo();
    this.getCountryMall();
    this.getCityMall();
    this.getActiveMallData();
  },
  methods: {
    ...mapMutations([
      "setItemSelected",
      "setItemSelectedComplete",
      "setItemSelected2",
      "setItemSelected2Complete",
    ]),
    updateTime() {
      // Ambil zona waktu Singapore
      const singaporeTime = moment().tz("Asia/Singapore");
      // Format waktu dalam hh:mm:ss
      this.currentTime = singaporeTime.format("HH:mm:ss");
    },
    getActiveMallData() {
      axios
        .get(`/malls/active-list/${this.latitude}/${this.longitude}`)
        .then((response) => {
          const data = response.data.data;
          console.log(data);
          this.activeMalls = data
            .sort((a, b) => a.partner_name.localeCompare(b.partner_name))
            .map((item) => {
              return {
                id: item.mall_id || 0,
                town: item.town_name || "",
                city: item.city_name || "",
                country: item.country_name || "",
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
    formatDistance(distance) {
      if (distance === 0 || distance === null) {
        return "0";
      } else {
        //const roundedDistance = Math.round(distance * 10) / 10;
        //const formattedDistance = roundedDistance.toLocaleString('en-US', {
        //  minimumFractionDigits: 1,
        //  maximumFractionDigits: 1,
        //});
        //return `${formattedDistance} km`;

        return distance.toFixed(1);
      }
    },
    getLogo() {
      axios
        .get(`/app/logo/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          this.logo = data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    getCountry() {
      axios
        .get(`/country`)
        .then((response) => {
          const data = response.data.data;
          // console.log(data);
          this.country = data.map((country) => {
            return {
              id: country.country_id,
              title: country.country_name,
              path: "#",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
    },
    getCountryMall() {
      this.isLoading = true;
      axios
        .get(`/mall-country-list`)
        .then((response) => {
          const data = response.data.data;
          this.country = data.map((country) => {
            return {
              id: country.country_id,
              title: country.country_name,
              count: 1,
              oneCity: country.one_city == "Y" ? true : false,
              path: "#",
            };
          });
          this.setItemSelectedComplete(this.country[0]);
          this.setItemSelected(this.country[0].title);
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    getCityMall() {
      this.isLoading = true;
      axios
        .get(
          `/mall-city-list/mall-country/${
            this.itemSelectedComplete?.id || this.countryId
          }`
        )
        .then((response) => {
          const data = response.data.data;
          //console.log(data);
          this.city = data.map((city) => {
            return {
              id: city.city_id,
              title: city.city_name,
              count: 1,
              countryId: city.country_id,
              path: "#",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    changeItemSelected(item) {
      this.setItemSelected(item.title);
      this.setItemSelectedComplete(item);
      this.setItemSelected2("---Select City---");
      this.setItemSelected2Complete(null);
      this.getCityMall();
    },
    changeItemSelected2(item) {
      this.setItemSelected2(item.title);
      this.setItemSelected2Complete(item);
    },
  },
};
</script>

<style scoped>
.app-bar-mobile-start {
  height: 28vh !important;
}
header.v-sheet.v-app-bar {
  height: 172px !important;
}
.v-app-bar.v-toolbar {
  max-width: 100%;
}

.logo-img-container {
  min-height: 50px; /* set to whatever value suits your needs */
  min-width: 100px; /* set to whatever value suits your needs */
}
@media (max-width: 599px) {
  .logo-img-container {
    min-height: 50px; /* set to whatever value suits your needs */
    min-width: 50px; /* set to whatever value suits your needs */
  }
}
.logo-img {
  width: 100%;
  height: 100%;
}

.divider {
  background: black;
  width: 2px;
  height: 80px;
}

.navbar-header {
  align-items: center;
  gap: 25px;
  font-size: 20px;
  color: black;
  font-weight: 700;
}

.navbar-header-mobile {
  font-size: 12px;
}

.btn_sign__up-cont {
  position: relative;
  overflow: hidden;
  background: #0197d5;
}

.btn_sign__up span {
  z-index: 1000;
}
.btn_sign__up-hover {
  position: absolute;
  border-radius: 50%;
  bottom: -50px;
  height: 50px;
  width: 100%;
  background: #002e41;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.btn_sign__up-cont:hover .btn_sign__up-hover {
  bottom: 0px;
  border-radius: 0px;
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
