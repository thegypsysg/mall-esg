<template>
  <div>
    <div style="z-index: 1000" class="position-fixed w-100">
      <div
        class="app-bar w-100 bg-transparent position-absolute d-flex justify-space-between align-center px-2"
        style="height: 50px; top: 0"
      >
        <v-btn
          to="/all-events"
          variant="flat"
          color="black"
          class="card-btn"
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
            style="z-index: 1000000"
            width="35"
            height="35"
            icon="mdi-share-outline"
          >
            <v-icon color="white" size="20"> mdi-share-outline </v-icon>

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
            variant="flat"
            color="black"
            class="card-btn"
            style="z-index: 1000"
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

      <div
        class="card-title-container mt-n2 d-flex justify-space-between align-center px-1 pb-4 pt-2 w-100 bg-white"
      >
        <div class="w-25">
          <v-img :src="eventData?.logo" height="40" />
        </div>
        <div class="w-75 d-flex align-center justify-space-between">
          <div class="card-title">
            <p style="font-size: 14px">
              {{ eventData?.name }} @ {{ eventData?.address }}
            </p>
            <p style="font-size: 10px">
              <span class="text-red" style="font-size: 10px">{{
                eventData?.distanceText
              }}</span>
              away
            </p>
          </div>
        </div>
      </div>

      <div class="pl-4 mt-n2 pb-2 w-100 bg-white">
        <p style="font-size: 10px" class="">
          120 <span style="font-weight: 600">views</span>
        </p>
      </div>
    </div>
    <v-container style="padding-top: 250px; padding-bottom: 10px">
      <div
        class="d-flex justify-start w-100 py-4"
        style="border-bottom: 1px solid lightgrey; gap: 10px"
      >
        <template v-for="item in parkingItems" :key="item.id">
          <div class="d-flex flex-column" style="font-size: 11px; gap: 10px">
            <p>{{ item?.title }}</p>
            <v-img :src="item?.img" height="40" />
            <p>
              <span class="text-red">{{ item?.qty }}</span> Lots
            </p>
          </div>
        </template>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="d-flex flex-column mt-2" style="gap: 20px; font-size: 12px">
          <div class="d-flex" style="gap: 15px">
            <div style="width: 10%">
              <v-img
                src="https://cdn-icons-png.flaticon.com/512/709/709002.png"
                height="30"
              />
            </div>
            <div style="width: 90%">
              <p>Free Parking</p>
              <p>Lunch Time 11 am to 2 pm</p>
            </div>
          </div>
          <div class="d-flex" style="gap: 15px">
            <div style="width: 10%">
              <v-img
                src="https://cdn-icons-png.flaticon.com/512/4172/4172850.png"
                height="30"
              />
            </div>
            <div style="width: 90%">
              <p>Grace Period</p>
              <p>15 mins</p>
            </div>
          </div>
          <div class="d-flex w-100" style="gap: 15px">
            <div style="width: 10%">
              <v-img
                src="https://cdn-icons-png.flaticon.com/512/4305/4305432.png"
                height="30"
              />
            </div>
            <div style="width: 90%">
              <p>Operating Hours (<span class="text-red">24 Hours</span>)</p>
              <p>
                Loading Bay parking is open 24 hours with payment by Cash Card
                Only
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="d-flex flex-column mt-2" style="gap: 20px; font-size: 12px">
          <div class="d-flex" style="gap: 15px">
            <div style="width: 10%">
              <v-img
                src="https://static.vecteezy.com/system/resources/previews/014/430/684/non_2x/car-parking-icon-in-flat-style-vector.jpg"
                height="30"
              />
            </div>
            <div style="width: 90%">
              <h4>Car Park Changes</h4>
            </div>
          </div>
          <p>
            Short-term Parking (B2M and B2) First 90 mins S$0.04/min Subsequent
            30 mins or part thereof S$5/30 mins General Parking (B3 to B5)
            S$0.4/min
          </p>
        </div>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="d-flex flex-column mt-2" style="gap: 20px; font-size: 12px">
          <div class="d-flex" style="gap: 15px">
            <div style="width: 10%">
              <v-img
                src="https://previews.123rf.com/images/alejik/alejik1604/alejik160400213/55854932-motorcyclist-on-a-motorcycle-vector-illustration-vector-motorbike-motorbike-festival-motorbike-race.jpg"
                height="30"
              />
            </div>
            <div style="width: 90%">
              <h4>Motorbike Changes</h4>
            </div>
          </div>
          <p>
            Short-term Parking (B2M and B2) First 90 mins S$0.04/min Subsequent
            30 mins or part thereof S$5/30 mins
          </p>
        </div>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="d-flex flex-column mt-2" style="gap: 20px; font-size: 12px">
          <h4>Car Park Info</h4>

          <p>Car Park open daily 24 hours</p>
        </div>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="d-flex flex-column mt-2" style="font-size: 12px">
          <h4>Other Services</h4>

          <div class="d-flex" style="gap: 10px">
            <div class="">
              <div style="width: 100px">
                <v-img
                  style="width: 100%"
                  src="https://saxcarwash.co.nz/wp-content/uploads/2019/05/car-grooming-under-circuit-breaker-main.jpg"
                  height="100"
                />
              </div>
              <p class="mt-n2">Car Grooming</p>
            </div>
            <div class="">
              <div style="width: 100px">
                <v-img
                  style="width: 100%"
                  src="https://esteticars.cl/wp-content/uploads/2023/04/proceso-lavado-autos-profesional-detergente-quimico-hidrolimpiadora-alta-presion-1-scaled.jpg"
                  height="100"
                />
              </div>
              <p class="mt-n2">Car Wash</p>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4" style="border-bottom: 1px solid lightgrey">
        <div class="mt-2" style="font-size: 12px">
          <h3>Carpark Levels</h3>

          <div class="d-flex mt-4">
            <div class="w-25 d-flex justify-start">
              <v-img
                src="https://dashboard.snapcraft.io/site_media/appmedia/2017/02/icon_7.png"
                height="30"
              />
            </div>
            <div class="d-flex" style="gap: 20px">
              <h4>Basement 1</h4>
              <h4>Carpark & Shopping</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="py-4">
        <h4>More Car Parks</h4>
        <v-sheet elevation="0">
          <v-row
            dense
            class="d-flex align-center justify-center flex-column w-100"
          >
            <v-col
              v-for="(item, i) in eventCards"
              :key="i"
              cols="12"
              class="mb-2"
            >
              <v-lazy :options="{ threshold: 0.5 }" min-height="350">
                <v-card
                  class="featured-card pb-4"
                  height="350"
                  elevation="0"
                  @click="goToDetail(item)"
                >
                  <div
                    style="height: 100px"
                    class="card-title-container d-flex justify-space-between align-center px-1 py-4 w-100"
                  >
                    <div class="w-25">
                      <v-img :src="item.logo" height="40" />
                    </div>
                    <div class="w-75 d-flex align-center justify-space-between">
                      <div class="card-title">
                        <h4>{{ item.name }} @ {{ item.address }}</h4>
                        <p>
                          <span class="text-red">{{ item.distanceText }}</span>
                          away
                        </p>
                      </div>
                    </div>
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
                      width="40"
                      height="40"
                      icon="mdi-share-variant-outline"
                    >
                      <v-icon color="red" size="30">
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
                      width="40"
                      height="40"
                    >
                      <v-icon color="red" size="30"> mdi-heart-outline </v-icon>
                    </v-btn>
                  </div>

                  <div class="featured-card-img-cont-3">
                    <v-img
                      class="featured-card-img"
                      :src="item.mainImage"
                      transition="fade-transition"
                      height="190"
                    >
                      <template #placeholder>
                        <div class="skeleton" />
                      </template>
                    </v-img>
                  </div>

                  <div
                    class="card-title-container d-flex justify-space-between align-center px-1 pt-2 pb-4 w-100"
                  >
                    <div class="d-flex align-center justify-space-between">
                      <div class="card-title">
                        <p>
                          Available Lots:
                          <span class="text-red">850</span>
                        </p>
                        <p>12 pm to 2 pm (Free Parking)</p>
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
      parkingItems: [
        {
          id: 1,
          title: "Carparking",
          img: "https://img.freepik.com/premium-vector/car-parking-illustration_7095-314.jpg",
          qty: 1184,
        },
        {
          id: 2,
          title: "Handicap",
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/MUTCD_D9-6.svg/1200px-MUTCD_D9-6.svg.png",
          qty: 12,
        },
        {
          id: 3,
          title: "Familypark",
          img: "https://images.myparkingsign.com/img/pla/K/family-parking-sign-k-0010_pl.png",
          qty: 16,
        },
        {
          id: 4,
          title: "EV",
          img: "https://st3.depositphotos.com/6230340/17161/v/450/depositphotos_171611242-stock-illustration-template-for-electric-vehicle-sign.jpg",
          qty: 3,
        },
        {
          id: 5,
          title: "Motorbike",
          img: "https://i.pinimg.com/736x/5d/0d/ef/5d0def5752538daa1573d1d283b444e6.jpg",
          qty: 7,
        },
      ],
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
    filteredOtherParking() {
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
  height: 180px;
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
