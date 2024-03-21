<template>
  <div>
    <div class="position-fixed w-100">
      <div
        class="app-bar w-100 position-absolute d-flex align-center px-2"
        style="height: 60px; top: 0; background: #f3f3f3"
      >
        <v-btn
          variant="text"
          :to="`/redeem-location/${promoData?.promo_id}`"
          icon="mdi-arrow-left"
        >
          <v-icon color="black" size="20"> mdi-arrow-left </v-icon>
        </v-btn>
        <div class="d-flex align-center" style="gap: 15px">
          <img :src="$fileURL + promoData?.main_image" width="45" height="35" />
          <h3 class="text-blue-accent-4">
            {{ promoData?.promo_name }}
          </h3>
        </div>
      </div>
    </div>
    <v-container style="padding-top: 70px; padding-bottom: 100px">
      <div
        class="card-address d-flex pb-3"
        style="gap: 15px; border-bottom: 1px solid lightgray"
      >
        <!-- <img :src="$fileURL + promoData?.logo" width="24" height="28" /> -->
        <img
          src="https://img.freepik.com/free-photo/tasty-burger-isolated-white-background-fresh-hamburger-fastfood-with-beef-cheese_90220-1063.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1710806400&semt=sph"
          width="80"
          height="80"
        />
        <div class="d-flex mt-2" style="font-size: 12px; font-weight: 500">
          <p>S$ 48.00</p>
          <div class="d-flex mx-2">
            <span>Qty</span>
            <div
              style="overflow: hidden; height: 30px; width: 60px"
              class="mt-n2"
            >
              <v-select
                v-model="selectedItem"
                density="compact"
                :items="items"
                outlined
                dense
              />
            </div>
          </div>
          <p>S$ 48.00</p>
        </div>
      </div>
      <h3 class="mt-2">Redeem at</h3>

      <div class="px-2 py-1">
        <div class="d-flex">
          <div class="card-address d-flex align-center w-66" style="gap: 15px">
            <img :src="$fileURL + promoData?.logo" width="24" height="28" />
            <div
              class="card-address-info"
              style="font-size: 12px; font-weight: 600"
            >
              <h4>{{ promoData?.partner_name }}</h4>
              <h5>{{ promoData?.mall_name }} - {{ promoData?.unit_number }}</h5>

              <div style="font-size: 10px" class="mt-2">
                <span class="text-red">{{ promoData?.distanceText }}</span
                ><span class="text-muted"> away</span>
              </div>
              <router-link
                class="text-blue-darken-4"
                :to="`/redeem-location/${promoData?.promo_id}`"
              >
                <p class="mt-2">Change Location</p>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div
        style="
          border: 1px solid lightgray;
          background: #fafafa;
          border-radius: 5px;
        "
        class="pa-4 mt-4"
      >
        <h3>Order Summary</h3>
        <div class="d-flex justify-space-between mt-2">
          <h5>Sub - Total</h5>
          <h5>48.00</h5>
        </div>
        <div class="d-flex justify-space-between">
          <h5>App Fee</h5>
          <h5>0.30</h5>
        </div>
        <div class="d-flex justify-space-between">
          <h5>G.S.T (7%)</h5>
          <h5>1.50</h5>
        </div>
        <div class="d-flex justify-space-between">
          <h5>Total</h5>
          <h5>49.80</h5>
        </div>
      </div>

      <v-btn
        class="text-none w-100 mt-4"
        append-icon="mdi-chevron-right"
        variant="text"
        border
        height="50"
      >
        <span>Choose your payment method</span>
      </v-btn>

      <div class="d-flex mt-6" style="font-size: 12px; gap: 40px">
        <p>Changed your mind . ? Press Cancel or Press Next to proceed .</p>
        <v-btn to="/" color="red" variant="outlined"> Cancel </v-btn>
      </div>
    </v-container>
    <div
      class="py-4 px-3 d-flex align-center justify-space-around w-100"
      style="
        background: #f3f3f3;
        gap: 20px;
        color: #5e5e5e;
        position: fixed;
        bottom: 0;
        font-size: 12px;
      "
    >
      <span style="color: #0197d5; font-weight: 600"
        >S$ {{ promoData?.amount?.toFixed(2) }}</span
      >
      <v-btn
        :to="`/redeem-detail/${promoData?.promo_id}`"
        class="btn-primary v-btn v-btn--has-bg theme--light elevation-0 text-white d-flex align-center pa-4"
        style="
          background: #e99820;
          color: #ffffff;
          border-color: #008d00;
          font-weight: 500;
          font-size: 12px;
          border-radius: 10px;
        "
      >
        <span>Next</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "PreRedeem",
  data() {
    return {
      isOpen: false,
      selectedItem: 1,
      items: Array.from({ length: 10 }, (_, index) => index + 1),
      promoData: null,
      currentDate: moment().format("DD/MM/YYYY"),
      locations: [
        {
          id: 1,
          selected: true,
        },
        {
          id: 2,
          selected: false,
        },
        {
          id: 3,
          selected: false,
        },
        {
          id: 4,
          selected: false,
        },
      ],
    };
  },
  mounted() {
    this.promoData = JSON.parse(localStorage.getItem("preRedeemItem"));
    console.log(this.promoData);
  },
  methods: {
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

<style>
.main-image {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 220px;
}

.card-tag {
  background: #e99820;
  color: #ffffff;
  position: absolute;

  padding: 5px 25px;
  font-size: 11px;

  top: 70px;
  right: 10px;
}
</style>
