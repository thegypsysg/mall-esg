<template>
  <v-app-bar
    v-if="isDesktop || !isHeader"
    :class="{ 'px-8': isHeader }"
    color="white"
    elevation="1"
    fixed
  >
    <!-- <div class="d-flex justify-start"> -->
    <router-link to="/">
      <div class="logo-img-container">
        <v-img
          class="logo-img"
          src="@/assets/images/logo/mall-E-original-final-2.jpg"
          height="90"
          transition="fade-transition"
        >
          <template #placeholder>
            <div class="skeleton" />
          </template>
        </v-img>
      </div>
    </router-link>
    <div v-if="isHeader" class="ml-6 d-flex flex-row navbar-header">
      <div class="divider" />
      <h1>{{ titleHeader }}</h1>
    </div>
    <!-- </div> -->
    <v-spacer v-if="isHeader" />
    <form v-if="!isHeader" class="navbar__search navbar__search__desktop">
      <input
        id="product_name"
        class="form-control mr-sm-2"
        type="text"
        placeholder="Type a Mall or merchant"
        aria-label="Search"
        data-autocompleturl="https://boozards.com/merchant-product/search"
      />
      <button class="btn btn--search" type="submit">
        <v-icon color="white"> mdi-magnify </v-icon>
      </button>
    </form>
    <div v-if="!isHeader" class="desktop__app">
      <v-menu>
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
            Singapore
            <v-icon right dark> mdi-menu-down </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            :value="index"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div v-if="!isHeader" class="btn_sign__up-cont">
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

    <template #extension>
      <div class="mobile__app text-center">
        <div style="margin-bottom: 8px; margin-top: -16px">
          <v-menu>
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
                Singapore
                <v-icon right dark> mdi-menu-down </v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :value="index"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <form class="navbar__search navbar__search__mobile">
          <input
            id="product_name"
            class="form-control mr-sm-2"
            type="text"
            placeholder="Type a Mall or merchant"
            aria-label="Search"
            data-autocompleturl="https://boozards.com/merchant-product/search"
          />
          <button class="btn btn--search" type="submit">
            <v-icon color="white"> mdi-magnify </v-icon>
          </button>
        </form>
      </div>
    </template>
  </v-app-bar>
  <v-navigation-drawer
    v-if="isDesktop || !isHeader"
    v-model="drawer"
    temporary
    location="right"
  >
    <div class="drawer__top">
      <a style="font-size: 1.125rem; color: white">Sign up / Register</a>
    </div>
    <div class="drawer__heading">
      <div class="drawer-logo">
        <span class="logo">MALL-</span>
        <span class="text-danger">e</span>
      </div>
      <div class="text-muted" style="font-size: 10px">Version 1.0</div>
    </div>
    <v-divider />
    <ul nav dense>
      <li class="v-list-item">
        <div class="v-list-item__icon">
          <img src="@/assets/images/icons/home.png" />
        </div>
        <router-link class="text-decoration-none text-black" to="/">
          <v-list-item-title>Home</v-list-item-title>
        </router-link>
      </li>

      <li class="v-list-item">
        <div class="v-list-item__icon">
          <img src="@/assets/images/icons/menu-shopper.png" />
        </div>
        <router-link class="text-decoration-none text-black" to="/my-profile">
          <v-list-item-title>My Profile</v-list-item-title>
        </router-link>
      </li>
      <li class="v-list-item">
        <div class="v-list-item__icon">
          <img src="@/assets/images/icons/shop.png" />
        </div>
        <v-list-item-title>Merchants</v-list-item-title>
      </li>

      <li class="v-list-item">
        <div class="v-list-item__icon">
          <img src="@/assets/images/icons/shopping-mall.png" />
        </div>
        <v-list-item-title>Mall owner</v-list-item-title>
      </li>

      <li class="v-list-item">
        <div class="v-list-item__icon">
          <img src="@/assets/images/icons/menu-drivers.png" />
        </div>
        <v-list-item-title>Drivers / Riders</v-list-item-title>
      </li>
    </ul>

    <div class="drawer__bottom">
      <div class="text-center" style="width: 100%">
        <p style="font-size: 16px; margin-bottom: 2px">Made in Singapore</p>
        <h3 style="font-size: 13px">Get connected</h3>
        <div class="d-flex justify-center">
          <img
            src="@/assets/images/icons/facebook.png"
            height="48"
            width="auto"
          />
          <img src="@/assets/images/icons/insta.png" height="48" width="auto" />
        </div>
        <div class="drawer-social d-flex" style="width: 100%">
          <div>
            <h6>WhatsApp</h6>
            <a
              style="text-decoration: none"
              href="https://api.whatsapp.com/send?phone=+65.94694136&text=Hello!"
            >
              +65 9469 4136
            </a>
          </div>
          <div>
            <h6>Contact us</h6>
            <a style="text-decoration: none" href="mailto:help@mall-e.net"
              >help@mall-e.net</a
            >
          </div>
        </div>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Header",
  props: ["titleHeader", "isHeader", "isDesktop"],
  data() {
    return {
      drawer: false,
      items: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" },
      ],
    };
  },
};
</script>

<style scoped>
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
