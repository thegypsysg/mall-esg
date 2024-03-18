<template>
  <v-container class="mt-6 footer_lks">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">About {{ footerData?.company_name }}</h2>
        <p
          class="footer_paragraph"
          style="margin-bottom: 16px; margin-top: 34px"
        >
          {{ footerData?.company_name + " is a " + appDetails1?.app_detail }}
        </p>
        <ul class="footer_social">
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 mdi mdi-map-marker"
              aria-hidden="true"
            />
            {{ footerData?.location }}
          </li>
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 fa fa-phone"
              aria-hidden="true"
            />
            {{ footerData?.mobile_number }}
          </li>
          <li>
            <v-icon color="#FA2964" size="20" class="mr-2 fab fa-whatsapp" />
            {{ footerData?.whats_app }}
          </li>
          <li>
            <v-icon
              color="#FA2964"
              size="20"
              class="mr-2 fa fa-envelope"
              aria-hidden="true"
            />
            <a :href="`mailto:${footerData?.email_id}`">{{
              footerData?.email_id
            }}</a>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title" style="margin-bottom: 16px">Quick links</h2>
        <ul class="footer_links" style="margin-top: 37px">
          <li class="text-blue-accent-4">
            <img src="@/assets/links-arrow.svg" height="12" />
            Merchants - Send Inquiry
          </li>
          <li class="text-blue-accent-4">
            <img src="@/assets/links-arrow.svg" height="12" />
            Driver Partners - Deliver for us
          </li>
          <li class="text-blue-accent-4">
            <img src="@/assets/links-arrow.svg" height="12" />
            All Promotions
          </li>
          <li class="text-blue-accent-4">
            <img src="@/assets/links-arrow.svg" height="12" />
            All Malls
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">Our Apps</h2>
        <v-row>
          <v-col cols="6">
            <ul class="footer_links" style="margin-top: 37px">
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Discount
              </li>
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Preference
              </li>
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Meal Promos
              </li>
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Days of Week
              </li>
            </ul>
          </v-col>
          <v-col cols="6">
            <ul class="footer_links" style="margin-top: 37px">
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Category
              </li>
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Voucher Promos
              </li>
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                People Promos
              </li>
              <li class="text-blue-accent-4">
                <img src="@/assets/links-arrow.svg" height="12" />
                Other Types
              </li>
            </ul>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">Shoppers</h2>
        <h2 style="margin-top: 36px" class="mt-4 footer_title-2">
          Are you going to a Mall. ?
        </h2>
        <p class="footer_paragraph" style="margin-bottom: 16px">
          Register with us to look for promotions happening in Malls around you
          .
        </p>
        <div class="mt-10 btn_sign__up-cont">
          <v-btn elevation="0" class="btn_sign__up">
            <span> Sign up / Register</span>
          </v-btn>
          <div class="btn_sign__up-hover" />
        </div>
        <!-- <input class="footer_input" placeholder="Type your email" /> -->
        <!-- <div class="footer-btn-cont">
          <v-btn
            class="footer-btn"
            style="
              width: inherit;
              border-radius: 0 !important;
              margin-top: 16px;
              background: #00cdcd;
              color: white;
            "
          >
            <span>Get started</span>
          </v-btn>
          <div class="footer-btn-hover" />
        </div> -->
      </v-col>
    </v-row>
  </v-container>

  <v-footer class="bg-black text-center justify-center footer__content">
    <v-spacer />

    <div class="footer_text">
      {{ footerData.copyright }}
    </div>
    <div style="display: flex; justify-content: center">
      <v-btn
        :href="footerData.facebook"
        variant="text"
        color="#FA2964"
        icon="mdi-facebook"
      />
      <v-btn
        :href="footerData.twitter"
        variant="text"
        color="#FA2964"
        icon="mdi-twitter"
      />
      <v-btn
        :href="footerData.instagram"
        variant="text"
        color="#FA2964"
        icon="mdi-instagram"
      />
      <v-btn
        :href="footerData.youtube"
        variant="text"
        color="#FA2964"
        icon="mdi-youtube"
      />
    </div>
  </v-footer>
</template>

<script>
import axios from "@/util/axios";
import app from "@/util/eventBus";
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: "Footer",
  data() {
    return {
      categoryCard: [],
      appDetails1: {
        app_detail: "",
      },
      appDetails2: null,
      footerData: {
        company_name: "",
        location: "",
        mobile_number: "",
        whats_app: "",
        email_id: "",
        copyright: "",
        facebook: "",
        twitter: "",
        instagram: "",
        youtube: "",
      },
    };
  },
  mounted() {
    this.getAppContact();
    this.getAppDetails1();
    this.getAppDetails2();
  },
  methods: {
    goToTrending() {
      app.config.globalProperties.$eventBus.$emit("scrollToCardSection");
    },
    getAppDetails1() {
      // this.isLoading = true;
      axios
        .get(`/app/details/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          this.appDetails1.app_detail = data.app_detail || "";
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
    getAppDetails2() {
      // this.isLoading = true;
      axios
        .get(`/categories/active-website/app/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          // this.appDetails = data.map((item) => {
          //   return {
          //     ...item,
          //     categoryId: item.category_id || 0,
          //     categoryName: item.category_name || '',
          //     description: item.description || '',
          //     image: item.image || '',
          //     slug: item.slug || '',
          //   };
          // })[0];
          this.categoryCard = data.map((item) => {
            return {
              id: item.category_id || 0,
              img: this.$fileURL + item.image || "",
              title: item.category_name || "",
            };
          });
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
    getAppContact() {
      // this.isLoading = true;
      axios
        .get(`/app/contact/${this.$appId}`)
        .then((response) => {
          const data = response.data.data;
          this.footerData = {
            company_name: data.company_name || "",
            location: data.location || "",
            mobile_number: data.mobile_number || "",
            whats_app: data.whats_app || "",
            email_id: data.email_id || "",
            copyright: data.copyright || "",
            facebook: data.facebook || "",
            twitter: data.twitter || "",
            instagram: data.instagram || "",
            youtube: data.youtube || "",
          };
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
        });
      // .finally(() => {
      //   this.isLoading = false;
      // });
    },
  },
};
</script>

<style scoped>
.our-apps {
  position: relative;
  overflow: hidden;
}
.our-apps-img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
}

.our-apps:hover .our-apps-img {
  transform: scale(1.2);
}
.footer-btn-cont {
  position: relative;
  overflow: hidden;
  width: 100%;
}

.footer-btn {
  width: 100%;
  height: 40px;
}

.footer-btn span {
  z-index: 1000;
}
.footer-btn-hover {
  position: absolute;
  border-radius: 50%;
  bottom: -40px;
  height: 40px;
  width: 100%;
  background: #002e41;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.footer-btn-cont:hover .footer-btn-hover {
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
