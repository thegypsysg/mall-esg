<template>
  <div>
    <div class="position-fixed w-100">
      <div
        class="app-bar w-100 position-absolute d-flex align-center px-2"
        style="height: 60px; top: 0; background: #f3f3f3"
      >
        <v-btn
          variant="text"
          :to="`/pre-redeem/${promoData?.promo_id}`"
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
        class="card-address d-flex align-center pb-3"
        style="gap: 15px; border-bottom: 1px solid lightgray"
      >
        <img :src="$fileURL + promoData?.logo" width="24" height="28" />
        <div
          class="card-address-info"
          style="font-size: 12px; font-weight: 600"
        >
          <h4>
            {{ promoData?.partner_name }} (
            <span class="text-red">1</span> outlets )
          </h4>
        </div>
      </div>

      <template v-for="item in locations" :key="item.id">
        <div class="mt-4 px-2 py-4" style="border: 1px solid black">
          <div class="d-flex">
            <div
              class="card-address d-flex align-center w-66"
              style="gap: 15px"
            >
              <img :src="$fileURL + promoData?.logo" width="24" height="28" />
              <div
                class="card-address-info"
                style="font-size: 12px; font-weight: 600"
              >
                <h5>{{ promoData?.partner_name }}</h5>
                <h5>
                  {{ promoData?.mall_name }} - {{ promoData?.unit_number }},
                  {{ promoData?.town_name }}
                </h5>

                <div style="font-size: 10px" class="mt-2">
                  <span class="text-red">{{ promoData?.distanceText }}</span
                  ><span class="text-muted"> away</span>
                </div>
              </div>
            </div>
            <div class="d-flex align-start justify-center">
              <v-btn
                variant="text"
                :class="item.selected ? 'text-green' : 'text-red'"
              >
                {{ item.selected ? "Selected" : "Select" }}
              </v-btn>
            </div>
          </div>
        </div>
      </template>
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
