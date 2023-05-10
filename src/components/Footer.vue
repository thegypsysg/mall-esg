<template>
  <v-container class="mt-6 footer_lks">
    <v-row>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">About The Gypsy</h2>
        <p
          class="footer_paragraph"
          style="margin-bottom: 16px; margin-top: 34px"
        >
          The gypsy is a Super App that is useful for users travelling from
          point A to point B in search of anything and everything!!!
        </p>
        <ul class="footer_social">
          <li>
            <img src="@/assets/map-pointer.svg" height="24" />
            Marine drive, Singapore
          </li>
          <li>
            <img src="@/assets/phone.svg" height="24" />
            +917738282000
          </li>
          <li>
            <img src="@/assets/whatsapp.svg" height="24" />
            +917738282000
          </li>
          <li>
            <img src="@/assets/mail.svg" height="24" />
            <a href="mailto:support@the-gypsy.in">support@the-gypsy.in</a>
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title" style="margin-bottom: 16px">Quick links</h2>
        <ul class="footer_links" style="margin-top: 37px">
          <li>
            <img src="@/assets/links-arrow.svg" height="12" />
            Our Apps
          </li>
          <li>
            <img src="@/assets/links-arrow.svg" height="12" />
            Sign Up/Register
          </li>
          <li>
            <img src="@/assets/links-arrow.svg" height="12" />
            Delivery partners
          </li>
          <li>
            <img src="@/assets/links-arrow.svg" height="12" />
            Merchants
          </li>
          <li>
            <img src="@/assets/links-arrow.svg" height="12" />
            Employers
          </li>
        </ul>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">Our Apps</h2>
        <v-row
          class="footer_apps"
          style="margin-top: 37px; padding-right: 20px"
        >
          <v-col cols="4">
            <p style="margin-bottom: 10px">Mall-e</p>
            <div class="our-apps">
              <img src="@/assets/gypsi-1.png" />
            </div>
          </v-col>
          <v-col cols="4">
            <p style="margin-bottom: 10px">Boozards</p>
            <div class="our-apps">
              <img src="@/assets/gypsy-2.png" />
            </div>
          </v-col>
          <v-col cols="4">
            <p style="margin-bottom: 10px">Flea</p>
            <div class="our-apps">
              <img src="@/assets/gypsy-3.png" />
            </div>
          </v-col>
          <v-col cols="4">
            <p style="margin-bottom: 10px">Mendesliga</p>
            <div class="our-apps">
              <img src="@/assets/gypsy-4.png" />
            </div>
          </v-col>
          <v-col cols="4">
            <p style="margin-bottom: 10px">Cake run</p>
            <div class="our-apps">
              <img src="@/assets/gypsy-5.png" />
            </div>
          </v-col>
          <v-col cols="4">
            <p style="margin-bottom: 10px">Cafe run</p>
            <div class="our-apps">
              <img src="@/assets/gypsy-6.png" />
            </div>
          </v-col>
          <v-col>
            <a
              href="javascript:void(0)"
              style="
                color: #00cdcd;
                font-size: 14px;
                font-weight: 600;
                line-height: 19px;
                text-decoration: none;
              "
            >
              View all</a
            >
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12" md="3">
        <h2 class="footer_title">Sign up / Register</h2>
        <p
          class="footer_paragraph"
          style="margin-bottom: 16px; margin-top: 34px"
        >
          Sign up and be part of the Gypsy Community. Please Register for a
          Gypsy ID which can be used for all our Apps.<br />
          Type your email and press get started.
        </p>
        <input class="footer_input" placeholder="Type your email" />
        <div class="footer-btn-cont">
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
        </div>
      </v-col>
    </v-row>
  </v-container>

  <v-footer class="bg-black text-center justify-center footer__content">
    <div class="footer_text">
      @ The gypsy International | Singapore, India 2023 - 2025
    </div>
    <div style="display: flex; justify-content: center">
      <v-btn variant="text" color="#00CDCD" icon="mdi-facebook" />
      <v-btn variant="text" color="#00CDCD" icon="mdi-twitter" />
      <v-btn variant="text" color="#00CDCD" icon="mdi-instagram" />
      <v-btn variant="text" color="#00CDCD" icon="mdi-youtube" />
    </div>
  </v-footer>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Footer',
};
</script>

<style scoped>
.our-apps {
  position: relative;
  overflow: hidden;
}
.our-apps img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
}

.our-apps:hover img {
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
</style>
