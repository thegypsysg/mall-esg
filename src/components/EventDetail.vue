<template>
  <div>
    <div style="z-index: 100000" class="position-fixed w-100">
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
            style="opacity: 0.8; z-index: 1000"
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
            style="opacity: 0.8; z-index: 1000"
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
            style="opacity: 0.8; z-index: 1000"
            width="35"
            height="35"
            icon="mdi-heart-outline"
          >
            <v-icon color="white" size="20"> mdi-heart-outline </v-icon>
          </v-btn>
        </div>
      </div>
      <div
        v-if="eventData?.featured === 'Y'"
        style="
          background: #f26525;
          color: white;
          position: absolute;
          top: 50px;
          right: -35px;
          rotate: 40deg;
          padding: 5px 90px;
          font-size: 14px;
          z-index: 3;
        "
      >
        Featured
      </div>
      <img
        :src="eventData?.mainImage"
        alt="redeem image"
        transition="fade-transition"
        class="main-image"
      />

      <div
        style="height: 100px; position: absolute; bottom: 5px; left: 0"
        class="card-title-container d-flex justify-space-between align-center px-1 py-4 w-100"
      >
        <div class="w-33">
          <v-img :src="eventData?.logo" height="50" />
        </div>
        <div class="w-66 d-flex align-center justify-space-between">
          <div class="card-title text-white">
            <h4>{{ eventData?.name }}</h4>
            <span>{{ eventData?.address }}</span>
          </div>
        </div>
      </div>
      <!-- <div v-if="eventData?.promo_featured === 'Y'" class="card-tag">
        Featured
      </div> -->
    </div>
    <v-container style="padding-top: 230px; padding-bottom: 10px">
      <div
        class="d-flex justify-space-between w-100 py-4"
        style="border-bottom: 1px solid lightgrey"
      >
        <div class="d-flex" style="gap: 15px">
          <div class="d-flex flex-column justify-space-between">
            <p style="font-size: 22px">24</p>
            <p style="font-size: 10px">MAR</p>
          </div>
          <div class="d-flex">
            <p style="font-weight: 700; font-size: 16px">
              Alter Ego Cosplay Event
            </p>
          </div>
        </div>
        <span style="text-align: right" class="text-red card-title-right">{{
          eventData?.distanceText
        }}</span>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <p style="font-size: 12px">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt repellat
          odio eaque nam incidunt voluptas quo illum nostrum voluptate mollitia
          itaque, alias voluptatem nihil deserunt perspiciatis excepturi commodi
          facere explicabo ab corporis ea. Asperiores natus, laboriosam
          inventore, obcaecati fugiat dolorem nostrum ducimus nulla sint
          voluptatum veritatis officiis quod exercitationem eos?
        </p>
        <router-link
          class="text-blue-accent-4 text-decoration-none"
          style="font-size: 12px"
          to="#"
        >
          <p class="mt-2">Read More</p>
        </router-link>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="card-time d-flex" style="gap: 10px">
          <v-icon> mdi-calendar </v-icon>
          <div>
            <p style="font-size: 14px" class="ml-1">Starts 01/06/2021</p>
          </div>
        </div>

        <div class="d-flex flex-column mt-6" style="gap: 20px; font-size: 12px">
          <div class="d-flex" style="gap: 10px">
            <v-icon>mdi-map-marker</v-icon>
            <div class="">
              <p>Jewel</p>
              <p>78 Airport Blvd, Singapore 819666</p>
            </div>
          </div>
          <div class="d-flex justify-space-between">
            <div class="card-time d-flex" style="gap: 10px">
              <v-icon> mdi-calendar </v-icon>
              <div>
                <p style="font-size: 14px" class="ml-1">Starts 01/07/2021</p>
                <p style="font-size: 12px" class="ml-1 text-red">
                  Started Already
                </p>
              </div>
            </div>
            <div class="card-time d-flex" style="gap: 10px">
              <v-icon> mdi-calendar </v-icon>
              <div>
                <p style="font-size: 14px" class="ml-1">Ends 26/11/2021</p>
                <p style="font-size: 12px" class="ml-1 text-green">
                  Ends in 3 Days
                </p>
              </div>
            </div>
          </div>
          <div class="d-flex" style="gap: 10px">
            <v-icon> mdi-clock-outline </v-icon>
            <p>10 am to 5 pm / All Day</p>
          </div>
          <div class="d-flex" style="gap: 10px">
            <v-icon>mdi-map-marker</v-icon>
            <div class="">
              <p>Great World</p>
              <p>1 Kim Seng Promenade,</p>
              <p>Singapore 237994</p>
              <p>2nd Floor Lobby next to the Customer Service Counter</p>
              <div class="mt-4 text-blue-lighten-1" style="font-weight: 600">
                Kids, Ladies, Men, Seniors, Everyone
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <h4>Click on interested to stay updated about this event</h4>
        <div class="d-flex mt-4">
          <div class="w-66">
            <div class="d-flex" style="gap: 10px">
              <v-icon color="green"> mdi-thumb-up </v-icon>
              <p>10</p>
            </div>
            <p class="text-grey mt-2" style="font-size: 12px">
              People have shown interested recently
            </p>
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
        </div>
      </div>

      <div class="py-4">
        <h3>Other Events around you</h3>
        <v-sheet elevation="0">
          <v-row
            dense
            class="d-flex align-center justify-center flex-column w-100 mt-6"
          >
            <v-col
              v-for="(item, i) in filteredOtherEvent"
              :key="i"
              cols="12"
              class="mb-2"
            >
              <v-lazy :options="{ threshold: 0.5 }" min-height="350">
                <v-card
                  class="featured-card pb-4"
                  height="350"
                  elevation="0"
                  style="
                    box-shadow: none !important;
                    border-bottom: 1px solid lightgrey;
                  "
                  @click="goToDetail(item)"
                >
                  <div
                    class="card-title-container d-flex justify-space-between px-1 pb-1"
                  >
                    <div
                      class="d-flex align-center justify-space-between w-100"
                    >
                      <div class="d-flex" style="gap: 15px">
                        <div class="d-flex flex-column justify-space-between">
                          <p style="font-size: 22px">24</p>
                          <p style="font-size: 10px">MAR</p>
                        </div>
                        <div class="d-flex flex-column justify-space-between">
                          <p style="font-size: 14px">Sun, 11 am - 6 pm</p>
                          <p style="font-size: 11px">For Everyone</p>
                        </div>
                      </div>
                      <span
                        style="text-align: right"
                        class="text-red card-title-right"
                        >{{ item.distanceText }}</span
                      >
                    </div>
                  </div>
                  <div
                    class="card-title-container d-flex justify-space-between align-center px-1 py-1"
                  >
                    <div style="overflow-y: hidden">
                      <p style="font-weight: 700; font-size: 16px">
                        Alter Ego Cosplay Event
                      </p>
                    </div>
                  </div>

                  <div
                    v-if="item?.featured === 'Y'"
                    style="
                      background: #f26525;
                      color: white;
                      position: absolute;
                      top: 35px;
                      right: -35px;
                      rotate: 40deg;
                      padding: 5px 70px;
                      font-size: 14px;
                      z-index: 3;
                    "
                  >
                    Featured
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
                    style="
                      height: 100px;
                      position: absolute;
                      bottom: 30px;
                      left: 0;
                    "
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
                </v-card>
              </v-lazy>
            </v-col>
          </v-row>
        </v-sheet>
      </div>
    </v-container>
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

      eventCards: [
        {
          id: 9,
          town: "Changi",
          city: "Singapore",
          country: "Singapore",
          address: "Changi, Singapore",
          distance: 1158.5907905458184,
          distanceText: "1158.6 kms",
          featured: "Y",
          latitude: "1.3602",
          longitude: "103.9898",
          logo: "https://admin1.the-gypsy.sg/img/app/a8803ac98d475a829ec3bb33bf277582.png",
          mainImage:
            "https://admin1.the-gypsy.sg/img/app/de4749255b05a875a2c1d5f52f07853a.png",
          oneCity: "Y",
          partnerId: 180,
          name: "Jewel",
          subIndustryName: "Mall",
        },
        {
          id: 1,
          town: "Marine Parade",
          city: "Singapore",
          country: "Singapore",
          address: "Marine Parade, Singapore",
          distance: 1158.7973559218856,
          distanceText: "1158.8 kms",
          featured: "Y",
          latitude: "1.3013",
          longitude: "103.9052",
          logo: "https://admin1.the-gypsy.sg/img/app/7c3c6adf8a89bddfe3630fe66e11ed0e.jpg",
          mainImage:
            "https://admin1.the-gypsy.sg/img/app/3123435a213ad843e6964f0f12ed5629.jpg",
          oneCity: "Y",
          partnerId: 75,
          name: "Parkway Parade",
          subIndustryName: "Mall",
        },
        {
          id: 4,
          town: "Katong",
          city: "Singapore",
          country: "Singapore",
          address: "Katong, Singapore",
          distance: 1159.1564539691997,
          distanceText: "1159.2 kms",
          featured: "Y",
          latitude: "1.3053",
          longitude: "103.9052",
          logo: "https://admin1.the-gypsy.sg/img/app/20ceddeed08eb7cb435367d83a9446e5.jpg",
          mainImage:
            "https://admin1.the-gypsy.sg/img/app/453d9f4812f4e609d9261c07cf3bc5f9.jpg",
          oneCity: "Y",
          partnerId: 80,
          name: "i12 Katong",
          subIndustryName: "Mall",
        },
        {
          id: 8,
          town: "Tampines",
          city: "Singapore",
          country: "Singapore",
          address: "Tampines, Singapore",
          distance: 1161.2124935038398,
          distanceText: "1161.2 kms",
          featured: "Y",
          latitude: "1.3530",
          longitude: "103.9394",
          logo: "https://admin1.the-gypsy.sg/img/app/d4d4a02045278c40b3fbf1d979b2e424.png",
          mainImage:
            "https://admin1.the-gypsy.sg/img/app/99d7a2d6758ccc33cadd1396db44e162.png",
          oneCity: "Y",
          partnerId: 179,
          name: "Our Tampines Hub",
          subIndustryName: "Mall",
        },
      ],
    };
  },
  computed: {
    filteredOtherEvent() {
      return this.eventCards.filter((item) => {
        return item.id !== this.eventData?.id;
      });
    },
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
