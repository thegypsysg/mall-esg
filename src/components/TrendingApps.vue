<template>
  <v-container>
    <div class="jumbotron-text">
      <h1
        align="center"
        class="header-title"
        style="font-size:56px;
        font-style: normal;
        font-weight: 700;"
      >
        What are you Looking for.. ?
      </h1>
      <p
        class="header-title-sub"
        style="margin-top: 32px"
      >
        The gypsy Trending Web Apps
      </p>
    </div>
  </v-container>

  <v-container
    class="wrapper-box"
  >
    <v-slide-group
      v-model="selectedType"
      style="margin-bottom: 70px;"
    >
      <v-slide-group-item
        id="1"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="sub-menu-btn "
          :class="isSelected ? 'active' : ''"
          style="box-shadow: 0 5px 25px rgba(0, 0, 0, 0);"
          @click="toggle"
        >
          <p
            style="font-size: 12px"
            eleva
          >
            View all
          </p>
          <span
            class="badge"
            :class="isSelected ? 'active' : ''"
          >2.7K</span>
        </v-btn>
      </v-slide-group-item>
      <v-slide-group-item
        id="2"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="sub-menu-btn "
          :class="isSelected ? 'active' : ''"
          style="box-shadow: 0 5px 25px rgba(0, 0, 0, 0);"
          @click="toggle"
        >
          <p
            style="font-size: 12px"
            eleva
          >
            Illustration
          </p>
          <span
            class="badge"
            :class="isSelected ? 'active' : ''"
          >2.7K</span>
        </v-btn>
      </v-slide-group-item>
      <v-slide-group-item
        id="3"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="sub-menu-btn "
          :class="isSelected ? 'active' : ''"
          style="box-shadow: 0 5px 25px rgba(0, 0, 0, 0);"
          @click="toggle"
        >
          <p
            style="font-size: 12px"
            eleva
          >
            Branding
          </p>
          <span
            class="badge"
            :class="isSelected ? 'active' : ''"
          >2.7K</span>
        </v-btn>
      </v-slide-group-item>
      <v-slide-group-item
        id="4"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="sub-menu-btn "
          :class="isSelected ? 'active' : ''"
          style="box-shadow: 0 5px 25px rgba(0, 0, 0, 0);"
          @click="toggle"
        >
          <p
            style="font-size: 12px"
            eleva
          >
            Product Design
          </p>
          <span
            class="badge"
            :class="isSelected ? 'active' : ''"
          >2.7K</span>
        </v-btn>
      </v-slide-group-item>
      <v-slide-group-item
        id="5"
        v-slot="{ isSelected, toggle }"
      >
        <v-btn
          class="sub-menu-btn "
          :class="isSelected ? 'active' : ''"
          style="box-shadow: 0 5px 25px rgba(0, 0, 0, 0);"
          @click="toggle"
        >
          <p
            style="font-size: 12px"
            eleva
          >
            Typography
          </p>
          <span
            class="badge"
            :class="isSelected ? 'active' : ''"
          >2.7K</span>
        </v-btn>
      </v-slide-group-item>
    </v-slide-group>

    <v-row class="trending__app__wrapper">
      <v-col
        xs="6"
        sm="6"
        md="4"
        cols="12"
      >
        <v-card
          class="trending__app"
          style="box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15); border-radius: 0px;"
        >
          <div style="position: relative">
            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button">
                    <v-btn
                      rounded
                      icon
                      color="#ee4054"
                    >
                      <v-icon color="white">
                        mdi-cart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Add Cart
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk wishlist">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-heart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Wishlist
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk compare">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-signal
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Compare
                      </v-tooltip>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <v-img
              src="@/assets/gypsi-1.png"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <div class="mobile__app">
                <h3
                  class="text_title"
                  style="padding-bottom: 12px;"
                >
                  Mall-e
                </h3>
                <p
                  class="text_subtitle"
                >
                  Promotion happening in malls
                </p>
              </div>
            </v-img>
            <div class="tag">
              <v-chip>
                Flipmart
              </v-chip>
            </div>
          </div>
          <div class="desktop__app">
            <h3
              class="text_title text-black text-left"
              style="padding-bottom: 16px;"
            >
              Mall-e
            </h3>
            <p
              style="padding-bottom:32px"
              class="text_subtitle text-left"
            >
              Promotion happening in malls
            </p>
            <v-card-actions class="d-flex">
              <v-btn
                elevation="4"
                style="background-color: #FA2964; border-radius:50px; padding-left: 16px; padding-right: 16px; padding-top:10px; padding-bottom:10px"
              >
                <span
                  class="text-white"
                  style=""
                >View App</span>
                <v-icon
                  right
                  style="color: #fff"
                >
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer />
              <div class="d-flex">
                <!-- <v-icon style="color: #808080;">mdi-eye</v-icon> -->
                <svg
                  align="center"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_61_42)">
                    <path
                      d="M33.62 17.53C30.25 11.3 24.34 7.53 17.8 7.53C11.26 7.53 5.34 11.3 2 17.53L1.72 18L1.98 18.48C5.35 24.71 11.26 28.48 17.8 28.48C24.34 28.48 30.26 24.76 33.62 18.48L33.88 18L33.62 17.53ZM17.8 26.43C12.17 26.43 7 23.29 4 18C7 12.71 12.17 9.57 17.8 9.57C23.43 9.57 28.54 12.72 31.59 18C28.54 23.29 23.42 26.43 17.8 26.43Z"
                      fill="#808080"
                    />
                    <path
                      d="M18.09 11.17C16.7341 11.1799 15.4116 11.5914 14.2894 12.3525C13.1673 13.1136 12.2958 14.1902 11.7852 15.4462C11.2745 16.7023 11.1475 18.0816 11.4203 19.4098C11.693 20.738 12.3533 21.9555 13.3176 22.9087C14.282 23.8619 15.5072 24.5079 16.8385 24.7652C18.1697 25.0225 19.5474 24.8794 20.7975 24.3542C22.0475 23.8289 23.1139 22.945 23.8619 21.8141C24.6098 20.6831 25.0059 19.3559 25 18C24.9961 17.0974 24.8141 16.2045 24.4644 15.3724C24.1148 14.5403 23.6044 13.7854 22.9625 13.1509C22.3206 12.5164 21.5598 12.0148 20.7236 11.6749C19.8875 11.335 18.9925 11.1634 18.09 11.17ZM18.09 22.89C17.1323 22.8801 16.1988 22.5875 15.4068 22.0488C14.6148 21.5101 13.9997 20.7495 13.6386 19.8623C13.2776 18.9752 13.1867 18.0012 13.3774 17.0625C13.5681 16.1239 14.0319 15.2626 14.7106 14.5867C15.3892 13.9108 16.2524 13.4505 17.1918 13.2637C18.1312 13.0768 19.1049 13.1716 19.9905 13.5363C20.8762 13.901 21.6343 14.5192 22.1698 15.3134C22.7052 16.1076 22.994 17.0422 23 18C23.0027 18.6446 22.8773 19.2833 22.6313 19.8791C22.3852 20.4749 22.0233 21.0159 21.5666 21.4708C21.1099 21.9257 20.5674 22.2853 19.9706 22.529C19.3738 22.7726 18.7346 22.8953 18.09 22.89Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_42">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  align="center"
                  style="color: #808080; padding-right:16px"
                >1336</span>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col
        xs="6"
        sm="6"
        md="4"
        cols="12"
      >
        <v-card
          class="trending__app"
          style="box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15); border-radius: 0px;"
        >
          <div style="position: relative">
            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button">
                    <v-btn
                      rounded
                      icon
                      color="#ee4054"
                    >
                      <v-icon color="white">
                        mdi-cart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Add Cart
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk wishlist">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-heart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Wishlist
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk compare">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-signal
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Compare
                      </v-tooltip>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <v-img
              src="@/assets/gypsy-2.png"

              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <div class="mobile__app">
                <h3
                  class="text_title"
                  style="padding-bottom: 12px;"
                >
                  Boozards
                </h3>
                <p
                  class="text_subtitle"
                >
                  Marketplace for booze
                </p>
              </div>
            </v-img>
            <div class="tag">
              <v-chip>
                Flipmart
              </v-chip>
            </div>
          </div>
          <div class="desktop__app">
            <h3
              class="text_title text-black text-left"
              style="padding-bottom: 16px;"
            >
              Boozards
            </h3>
            <v-card-subtitle
              style="padding-bottom:32px"
              class="text-left"
            >
              Marketplace for booz
            </v-card-subtitle>
            <v-card-actions class="d-flex">
              <v-btn
                elevation="4"
                style="background-color: #FA2964; border-radius:50px; padding-left: 16px; padding-right: 16px; padding-top:10px; padding-bottom:10px"
              >
                <span
                  class="text-white"
                  style=""
                >View App</span>
                <v-icon
                  right
                  style="color: #fff"
                >
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer />
              <div class="d-flex">
                <svg
                  align="center"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_61_42)">
                    <path
                      d="M33.62 17.53C30.25 11.3 24.34 7.53 17.8 7.53C11.26 7.53 5.34 11.3 2 17.53L1.72 18L1.98 18.48C5.35 24.71 11.26 28.48 17.8 28.48C24.34 28.48 30.26 24.76 33.62 18.48L33.88 18L33.62 17.53ZM17.8 26.43C12.17 26.43 7 23.29 4 18C7 12.71 12.17 9.57 17.8 9.57C23.43 9.57 28.54 12.72 31.59 18C28.54 23.29 23.42 26.43 17.8 26.43Z"
                      fill="#808080"
                    />
                    <path
                      d="M18.09 11.17C16.7341 11.1799 15.4116 11.5914 14.2894 12.3525C13.1673 13.1136 12.2958 14.1902 11.7852 15.4462C11.2745 16.7023 11.1475 18.0816 11.4203 19.4098C11.693 20.738 12.3533 21.9555 13.3176 22.9087C14.282 23.8619 15.5072 24.5079 16.8385 24.7652C18.1697 25.0225 19.5474 24.8794 20.7975 24.3542C22.0475 23.8289 23.1139 22.945 23.8619 21.8141C24.6098 20.6831 25.0059 19.3559 25 18C24.9961 17.0974 24.8141 16.2045 24.4644 15.3724C24.1148 14.5403 23.6044 13.7854 22.9625 13.1509C22.3206 12.5164 21.5598 12.0148 20.7236 11.6749C19.8875 11.335 18.9925 11.1634 18.09 11.17ZM18.09 22.89C17.1323 22.8801 16.1988 22.5875 15.4068 22.0488C14.6148 21.5101 13.9997 20.7495 13.6386 19.8623C13.2776 18.9752 13.1867 18.0012 13.3774 17.0625C13.5681 16.1239 14.0319 15.2626 14.7106 14.5867C15.3892 13.9108 16.2524 13.4505 17.1918 13.2637C18.1312 13.0768 19.1049 13.1716 19.9905 13.5363C20.8762 13.901 21.6343 14.5192 22.1698 15.3134C22.7052 16.1076 22.994 17.0422 23 18C23.0027 18.6446 22.8773 19.2833 22.6313 19.8791C22.3852 20.4749 22.0233 21.0159 21.5666 21.4708C21.1099 21.9257 20.5674 22.2853 19.9706 22.529C19.3738 22.7726 18.7346 22.8953 18.09 22.89Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_42">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  align="center"
                  style="color: #808080; padding-right:16px"
                >1336</span>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col
        xs="6"
        sm="6"
        md="4"
        cols="12"
      >
        <v-card
          class="trending__app"
          style="box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15); border-radius: 0px;"
        >
          <div style="position: relative">
            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button">
                    <v-btn
                      rounded
                      icon
                      color="#ee4054"
                    >
                      <v-icon color="white">
                        mdi-cart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Add Cart
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk wishlist">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-heart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Wishlist
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk compare">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-signal
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Compare
                      </v-tooltip>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <v-img
              src="@/assets/gypsy-3.png"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <div class="mobile__app">
                <h3
                  class="text_title"
                  style="padding-bottom: 12px;"
                >
                  Flea
                </h3>
                <p
                  class="text_subtitle"
                >
                  Promotion happening in street
                </p>
              </div>
            </v-img>
            <div class="tag">
              <v-chip>
                Flipmart
              </v-chip>
            </div>
          </div>
          <div class="desktop__app">
            <h3
              class="text_title text-black text-left"
              style="padding-bottom: 16px;"
            >
              Flea
            </h3>
            <v-card-subtitle
              style="padding-bottom:32px"
              class="text-left"
            >
              Promotion happening in street
            </v-card-subtitle>
            <v-card-actions class="d-flex">
              <v-btn
                elevation="4"
                style="background-color: #FA2964; border-radius:50px; padding-left: 16px; padding-right: 16px; padding-top:10px; padding-bottom:10px"
              >
                <span
                  class="text-white"
                  style=""
                >View App</span>
                <v-icon
                  right
                  style="color: #fff"
                >
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer />
              <div class="d-flex">
                <svg
                  align="center"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_61_42)">
                    <path
                      d="M33.62 17.53C30.25 11.3 24.34 7.53 17.8 7.53C11.26 7.53 5.34 11.3 2 17.53L1.72 18L1.98 18.48C5.35 24.71 11.26 28.48 17.8 28.48C24.34 28.48 30.26 24.76 33.62 18.48L33.88 18L33.62 17.53ZM17.8 26.43C12.17 26.43 7 23.29 4 18C7 12.71 12.17 9.57 17.8 9.57C23.43 9.57 28.54 12.72 31.59 18C28.54 23.29 23.42 26.43 17.8 26.43Z"
                      fill="#808080"
                    />
                    <path
                      d="M18.09 11.17C16.7341 11.1799 15.4116 11.5914 14.2894 12.3525C13.1673 13.1136 12.2958 14.1902 11.7852 15.4462C11.2745 16.7023 11.1475 18.0816 11.4203 19.4098C11.693 20.738 12.3533 21.9555 13.3176 22.9087C14.282 23.8619 15.5072 24.5079 16.8385 24.7652C18.1697 25.0225 19.5474 24.8794 20.7975 24.3542C22.0475 23.8289 23.1139 22.945 23.8619 21.8141C24.6098 20.6831 25.0059 19.3559 25 18C24.9961 17.0974 24.8141 16.2045 24.4644 15.3724C24.1148 14.5403 23.6044 13.7854 22.9625 13.1509C22.3206 12.5164 21.5598 12.0148 20.7236 11.6749C19.8875 11.335 18.9925 11.1634 18.09 11.17ZM18.09 22.89C17.1323 22.8801 16.1988 22.5875 15.4068 22.0488C14.6148 21.5101 13.9997 20.7495 13.6386 19.8623C13.2776 18.9752 13.1867 18.0012 13.3774 17.0625C13.5681 16.1239 14.0319 15.2626 14.7106 14.5867C15.3892 13.9108 16.2524 13.4505 17.1918 13.2637C18.1312 13.0768 19.1049 13.1716 19.9905 13.5363C20.8762 13.901 21.6343 14.5192 22.1698 15.3134C22.7052 16.1076 22.994 17.0422 23 18C23.0027 18.6446 22.8773 19.2833 22.6313 19.8791C22.3852 20.4749 22.0233 21.0159 21.5666 21.4708C21.1099 21.9257 20.5674 22.2853 19.9706 22.529C19.3738 22.7726 18.7346 22.8953 18.09 22.89Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_42">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  align="center"
                  style="color: #808080; padding-right:16px"
                >1336</span>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col
        xs="6"
        sm="6"
        md="4"
        cols="12"
      >
        <v-card
          class="trending__app"
          style="box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15); border-radius: 0px;"
        >
          <div style="position: relative">
            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button">
                    <v-btn
                      rounded
                      icon
                      color="#ee4054"
                    >
                      <v-icon color="white">
                        mdi-cart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Add Cart
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk wishlist">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-heart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Wishlist
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk compare">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-signal
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Compare
                      </v-tooltip>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <v-img
              src="@/assets/gypsy-4.png"

              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <div class="mobile__app">
                <h3
                  class="text_title"
                  style="padding-bottom: 12px;"
                >
                  Mendesliga
                </h3>
                <p
                  class="text_subtitle"
                >
                  Promotion for tournaments
                </p>
              </div>
            </v-img>
            <div class="tag">
              <v-chip>
                Flipmart
              </v-chip>
            </div>
          </div>
          <div class="desktop__app">
            <h3
              class="text_title text-black text-left"
              style="padding-bottom: 16px;"
            >
              Mendesliga
            </h3>
            <v-card-subtitle
              style="padding-bottom:32px"
              class="text-left"
            >
              Market place for tournaments
            </v-card-subtitle>
            <v-card-actions class="d-flex">
              <v-btn
                elevation="4"
                style="background-color: #FA2964; border-radius:50px; padding-left: 16px; padding-right: 16px; padding-top:10px; padding-bottom:10px"
              >
                <span
                  class="text-white"
                  style=""
                >View App</span>
                <v-icon
                  right
                  style="color: #fff"
                >
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer />
              <div class="d-flex">
                <!-- <v-icon style="color: #808080;">mdi-eye</v-icon> -->
                <svg
                  align="center"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_61_42)">
                    <path
                      d="M33.62 17.53C30.25 11.3 24.34 7.53 17.8 7.53C11.26 7.53 5.34 11.3 2 17.53L1.72 18L1.98 18.48C5.35 24.71 11.26 28.48 17.8 28.48C24.34 28.48 30.26 24.76 33.62 18.48L33.88 18L33.62 17.53ZM17.8 26.43C12.17 26.43 7 23.29 4 18C7 12.71 12.17 9.57 17.8 9.57C23.43 9.57 28.54 12.72 31.59 18C28.54 23.29 23.42 26.43 17.8 26.43Z"
                      fill="#808080"
                    />
                    <path
                      d="M18.09 11.17C16.7341 11.1799 15.4116 11.5914 14.2894 12.3525C13.1673 13.1136 12.2958 14.1902 11.7852 15.4462C11.2745 16.7023 11.1475 18.0816 11.4203 19.4098C11.693 20.738 12.3533 21.9555 13.3176 22.9087C14.282 23.8619 15.5072 24.5079 16.8385 24.7652C18.1697 25.0225 19.5474 24.8794 20.7975 24.3542C22.0475 23.8289 23.1139 22.945 23.8619 21.8141C24.6098 20.6831 25.0059 19.3559 25 18C24.9961 17.0974 24.8141 16.2045 24.4644 15.3724C24.1148 14.5403 23.6044 13.7854 22.9625 13.1509C22.3206 12.5164 21.5598 12.0148 20.7236 11.6749C19.8875 11.335 18.9925 11.1634 18.09 11.17ZM18.09 22.89C17.1323 22.8801 16.1988 22.5875 15.4068 22.0488C14.6148 21.5101 13.9997 20.7495 13.6386 19.8623C13.2776 18.9752 13.1867 18.0012 13.3774 17.0625C13.5681 16.1239 14.0319 15.2626 14.7106 14.5867C15.3892 13.9108 16.2524 13.4505 17.1918 13.2637C18.1312 13.0768 19.1049 13.1716 19.9905 13.5363C20.8762 13.901 21.6343 14.5192 22.1698 15.3134C22.7052 16.1076 22.994 17.0422 23 18C23.0027 18.6446 22.8773 19.2833 22.6313 19.8791C22.3852 20.4749 22.0233 21.0159 21.5666 21.4708C21.1099 21.9257 20.5674 22.2853 19.9706 22.529C19.3738 22.7726 18.7346 22.8953 18.09 22.89Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_42">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  align="center"
                  style="color: #808080; padding-right:16px"
                >1336</span>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col
        xs="6"
        sm="6"
        md="4"
        cols="12"
      >
        <v-card
          class="trending__app"
          style="box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15); border-radius: 0px;"
        >
          <div style="position: relative">
            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button">
                    <v-btn
                      rounded
                      icon
                      color="#ee4054"
                    >
                      <v-icon color="white">
                        mdi-cart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Add Cart
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk wishlist">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-heart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Wishlist
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk compare">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-signal
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Compare
                      </v-tooltip>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <v-img
              src="@/assets/gypsy-5.png"

              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <div class="mobile__app">
                <h3
                  class="text_title"
                  style="padding-bottom: 12px;"
                >
                  Cake Run
                </h3>
                <p
                  class="text_subtitle"
                >
                  Promotion happening in malls
                </p>
              </div>
            </v-img>
            <div class="tag">
              <v-chip>
                Flipmart
              </v-chip>
            </div>
          </div>
          <div class="desktop__app">
            <h3
              class="text_title text-black text-left"
              style="padding-bottom: 16px;"
            >
              Cake run
            </h3>
            <v-card-subtitle
              style="padding-bottom:32px"
              class="text-left"
            >
              Promotion happening in malls
            </v-card-subtitle>
            <v-card-actions class="d-flex">
              <v-btn
                elevation="4"
                style="background-color: #FA2964; border-radius:50px; padding: 10px 16px;"
              >
                <span
                  class="text-white"
                  style=""
                >View App</span>
                <v-icon
                  right
                  style="color: #fff"
                >
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer />
              <div class="d-flex">
                <!-- <v-icon style="color: #808080;">mdi-eye</v-icon> -->
                <svg
                  align="center"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_61_42)">
                    <path
                      d="M33.62 17.53C30.25 11.3 24.34 7.53 17.8 7.53C11.26 7.53 5.34 11.3 2 17.53L1.72 18L1.98 18.48C5.35 24.71 11.26 28.48 17.8 28.48C24.34 28.48 30.26 24.76 33.62 18.48L33.88 18L33.62 17.53ZM17.8 26.43C12.17 26.43 7 23.29 4 18C7 12.71 12.17 9.57 17.8 9.57C23.43 9.57 28.54 12.72 31.59 18C28.54 23.29 23.42 26.43 17.8 26.43Z"
                      fill="#808080"
                    />
                    <path
                      d="M18.09 11.17C16.7341 11.1799 15.4116 11.5914 14.2894 12.3525C13.1673 13.1136 12.2958 14.1902 11.7852 15.4462C11.2745 16.7023 11.1475 18.0816 11.4203 19.4098C11.693 20.738 12.3533 21.9555 13.3176 22.9087C14.282 23.8619 15.5072 24.5079 16.8385 24.7652C18.1697 25.0225 19.5474 24.8794 20.7975 24.3542C22.0475 23.8289 23.1139 22.945 23.8619 21.8141C24.6098 20.6831 25.0059 19.3559 25 18C24.9961 17.0974 24.8141 16.2045 24.4644 15.3724C24.1148 14.5403 23.6044 13.7854 22.9625 13.1509C22.3206 12.5164 21.5598 12.0148 20.7236 11.6749C19.8875 11.335 18.9925 11.1634 18.09 11.17ZM18.09 22.89C17.1323 22.8801 16.1988 22.5875 15.4068 22.0488C14.6148 21.5101 13.9997 20.7495 13.6386 19.8623C13.2776 18.9752 13.1867 18.0012 13.3774 17.0625C13.5681 16.1239 14.0319 15.2626 14.7106 14.5867C15.3892 13.9108 16.2524 13.4505 17.1918 13.2637C18.1312 13.0768 19.1049 13.1716 19.9905 13.5363C20.8762 13.901 21.6343 14.5192 22.1698 15.3134C22.7052 16.1076 22.994 17.0422 23 18C23.0027 18.6446 22.8773 19.2833 22.6313 19.8791C22.3852 20.4749 22.0233 21.0159 21.5666 21.4708C21.1099 21.9257 20.5674 22.2853 19.9706 22.529C19.3738 22.7726 18.7346 22.8953 18.09 22.89Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_42">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  align="center"
                  style="color: #808080; padding-right:16px"
                >1336</span>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col
        xs="6"
        sm="6"
        md="4"
        cols="12"
      >
        <v-card
          class="trending__app"
          style="box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.15); border-radius: 0px;"
        >
          <div style="position: relative">
            <div class="cart clearfix animate-effect">
              <div class="action">
                <ul class="list-unstyled">
                  <li class="add-cart-button">
                    <v-btn
                      rounded
                      icon
                      color="#ee4054"
                    >
                      <v-icon color="white">
                        mdi-cart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Add Cart
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk wishlist">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-heart
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Wishlist
                      </v-tooltip>
                    </v-btn>
                  </li>
                  <li class="lnk compare">
                    <v-btn
                      rounded
                      icon
                      color="white"
                    >
                      <v-icon color="#ee4054">
                        mdi-signal
                      </v-icon>
                      <v-tooltip
                        activator="parent"
                        location="top"
                      >
                        Compare
                      </v-tooltip>
                    </v-btn>
                  </li>
                </ul>
              </div>
            </div>
            <v-img
              src="@/assets/gypsy-6.png"

              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <div class="mobile__app">
                <h3
                  class="text_title"
                  style="padding-bottom: 12px;"
                >
                  Cafe Run
                </h3>
                <p
                  class="text_subtitle"
                >
                  Market place for cafe around you
                </p>
              </div>
            </v-img>
            <div class="tag">
              <v-chip>
                Flipmart
              </v-chip>
            </div>
          </div>
          <div class="desktop__app">
            <h3
              class="text_title text-black text-left"
              style="padding-bottom: 16px;"
            >
              Cafe run
            </h3>
            <v-card-subtitle
              style="padding-bottom:32px"
              class="text-left"
            >
              Market place for cafe around you
            </v-card-subtitle>
            <v-card-actions class="d-flex">
              <v-btn
                elevation="4"
                style="background-color: #FA2964; border-radius:50px; padding-left: 16px; padding-right: 16px; padding-top:10px; padding-bottom:10px"
              >
                <span
                  class="text-white"
                  style=""
                >View App</span>
                <v-icon
                  right
                  style="color: #fff"
                >
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer />
              <div class="d-flex">
                <!-- <v-icon style="color: #808080;">mdi-eye</v-icon> -->
                <svg
                  align="center"
                  width="24"
                  height="24"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_61_42)">
                    <path
                      d="M33.62 17.53C30.25 11.3 24.34 7.53 17.8 7.53C11.26 7.53 5.34 11.3 2 17.53L1.72 18L1.98 18.48C5.35 24.71 11.26 28.48 17.8 28.48C24.34 28.48 30.26 24.76 33.62 18.48L33.88 18L33.62 17.53ZM17.8 26.43C12.17 26.43 7 23.29 4 18C7 12.71 12.17 9.57 17.8 9.57C23.43 9.57 28.54 12.72 31.59 18C28.54 23.29 23.42 26.43 17.8 26.43Z"
                      fill="#808080"
                    />
                    <path
                      d="M18.09 11.17C16.7341 11.1799 15.4116 11.5914 14.2894 12.3525C13.1673 13.1136 12.2958 14.1902 11.7852 15.4462C11.2745 16.7023 11.1475 18.0816 11.4203 19.4098C11.693 20.738 12.3533 21.9555 13.3176 22.9087C14.282 23.8619 15.5072 24.5079 16.8385 24.7652C18.1697 25.0225 19.5474 24.8794 20.7975 24.3542C22.0475 23.8289 23.1139 22.945 23.8619 21.8141C24.6098 20.6831 25.0059 19.3559 25 18C24.9961 17.0974 24.8141 16.2045 24.4644 15.3724C24.1148 14.5403 23.6044 13.7854 22.9625 13.1509C22.3206 12.5164 21.5598 12.0148 20.7236 11.6749C19.8875 11.335 18.9925 11.1634 18.09 11.17ZM18.09 22.89C17.1323 22.8801 16.1988 22.5875 15.4068 22.0488C14.6148 21.5101 13.9997 20.7495 13.6386 19.8623C13.2776 18.9752 13.1867 18.0012 13.3774 17.0625C13.5681 16.1239 14.0319 15.2626 14.7106 14.5867C15.3892 13.9108 16.2524 13.4505 17.1918 13.2637C18.1312 13.0768 19.1049 13.1716 19.9905 13.5363C20.8762 13.901 21.6343 14.5192 22.1698 15.3134C22.7052 16.1076 22.994 17.0422 23 18C23.0027 18.6446 22.8773 19.2833 22.6313 19.8791C22.3852 20.4749 22.0233 21.0159 21.5666 21.4708C21.1099 21.9257 20.5674 22.2853 19.9706 22.529C19.3738 22.7726 18.7346 22.8953 18.09 22.89Z"
                      fill="#808080"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_61_42">
                      <rect
                        width="36"
                        height="36"
                        fill="white"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <span
                  align="center"
                  style="color: #808080; padding-right:16px"
                >1336</span>
              </div>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TrendingApps",
  data() {
    return {
      selectedType: 0
    }
  }
}
</script>

<style scoped>

</style>
