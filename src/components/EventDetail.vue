<template>
  <div>
    <div class="position-fixed w-100">
      <div
        class="app-bar w-100 bg-transparent position-absolute d-flex justify-space-between align-center px-2"
        style="height: 50px; top: 0"
      >
        <v-btn
          to="/all-events"
          variant="flat"
          color="black"
          class="card-btn"
          style="opacity: 0.8"
          width="35"
          height="35"
          icon="mdi-chevron-left"
        >
          <v-icon color="white" size="20"> mdi-chevron-left </v-icon>
        </v-btn>
        <div class="d-flex align-center" style="gap: 15px">
          <v-btn
            variant="flat"
            color="black"
            class="card-btn"
            style="opacity: 0.8"
            width="35"
            height="35"
            icon="mdi-thumb-up-outline"
          >
            <v-icon color="white" size="20"> mdi-thumb-up-outline </v-icon>
          </v-btn>
          <v-btn
            variant="flat"
            color="black"
            class="card-btn"
            style="opacity: 0.8"
            width="35"
            height="35"
            icon="mdi-share-outline"
          >
            <v-icon color="white" size="20"> mdi-share-outline </v-icon>
          </v-btn>
          <v-btn
            variant="flat"
            color="black"
            class="card-btn"
            style="opacity: 0.8"
            width="35"
            height="35"
            icon="mdi-heart-outline"
          >
            <v-icon color="white" size="20"> mdi-heart-outline </v-icon>
          </v-btn>
        </div>
      </div>
      <img
        :src="eventData?.mainImage"
        alt="redeem image"
        transition="fade-transition"
        class="main-image"
      />
      <!-- <div v-if="eventData?.promo_featured === 'Y'" class="card-tag">
        Featured
      </div> -->
    </div>
    <v-container style="padding-top: 230px; padding-bottom: 100px">
      <h3 class="text-blue-accent-4">
        {{ eventData?.promo_name }}
      </h3>
      <p class="mt-6" style="font-size: 12px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, labore?
      </p>
      <router-link
        class="text-blue-accent-4 text-decoration-none"
        style="font-size: 12px"
        to="#"
      >
        <p class="mt-4">show more >>>></p>
      </router-link>

      <div class="d-flex justify-space-between mt-6">
        <div class="card-time d-flex" style="gap: 10px">
          <v-icon> mdi-calendar </v-icon>
          <div>
            <p style="font-size: 14px" class="ml-1">
              Starts {{ eventData?.promo_starts_on }}
            </p>
            <p style="font-size: 12px" class="ml-1">
              ({{ dateComparisonStart(eventData?.promo_starts_on) }})
            </p>
          </div>
        </div>
        <div
          v-if="eventData?.promo_ends_on"
          class="card-time d-flex"
          style="gap: 10px"
        >
          <v-icon> mdi-calendar </v-icon>
          <div>
            <p style="font-size: 14px" class="ml-1">
              Ends {{ eventData?.promo_ends_on }}
            </p>
            <p style="font-size: 12px" class="ml-1">
              ({{ dateComparisonEnd(eventData?.promo_ends_on) }})
            </p>
          </div>
        </div>
      </div>

      <div class="d-flex flex-column mt-6" style="gap: 20px; font-size: 12px">
        <div class="d-flex" style="gap: 10px">
          <v-icon>mdi-flash</v-icon>
          <p><span class="text-blue-lighten-1">8</span> Views</p>
        </div>
        <div class="d-flex" style="gap: 10px">
          <v-icon color="green"> mdi-thumb-up </v-icon>
          <p>0</p>
        </div>
        <div class="d-flex" style="gap: 10px">
          <v-icon> mdi-tag-multiple </v-icon>
          <p>4 have Purchased</p>
        </div>
      </div>

      <div
        class="mt-6 px-2 py-6 position-relative"
        style="border: 1px solid black; z-index: 1"
      >
        <div
          style="
            position: absolute;
            top: -10px;
            left: 10%;
            background: white;
            z-index: 2;
            gap: 20px;
          "
          class="px-2 d-flex align-center"
        >
          <h3 class="text-blue-darken-4" style="font-size: 16px">
            Redeem Location
          </h3>
          <div>
            <span style="font-size: 10px" class="text-red">{{
              eventData?.distanceText
            }}</span
            ><span style="font-size: 10px" class="text-muted"> away</span>
          </div>
        </div>
        <div class="d-flex justify-start pl-6">
          <div class="card-address d-flex align-center w-75" style="gap: 15px">
            <div style="width: 20%">
              <img
                class="logo-img"
                :src="$fileURL + eventData?.logo"
                height="28"
              />
            </div>
            <div
              class="card-address-info"
              style="font-size: 12px; font-weight: 600"
            >
              <h5>{{ eventData?.partner_name }}</h5>
              <h5>
                {{ eventData?.mall_name }} - {{ eventData?.unit_number }},
                {{ eventData?.town_name }}
              </h5>
            </div>
          </div>
        </div>
      </div>

      <button
        style="
          border: 1px solid red;
          border-radius: 5px;
          color: red;
          font-size: 16px;
        "
        class="px-3 py-2 mt-6 mb-4"
      >
        <span>Interested?</span>
      </button>

      <h4>
        Please select <span class="text-blue-accent-4">Redeem Now</span> to
        proceed
      </h4>
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
        >S$ {{ eventData?.amount?.toFixed(2) }}</span
      >
      <!-- :to="`/pre-redeem/${eventData?.promo_id}`" -->
      <v-btn
        :to="`/redeem-location/${eventData?.promo_id}`"
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
        <span>Reedem Now</span>
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
      eventData: null,
      currentDate: moment().format("DD/MM/YYYY"),
    };
  },
  mounted() {
    this.eventData = JSON.parse(localStorage.getItem("eventDetailItem"));
    console.log(this.eventData);
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

.logo-img {
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}
</style>
