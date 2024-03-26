<template>
  <div>
    <div class="position-fixed w-100 bg-white" style="z-index: 100">
      <div
        class="app-bar w-100 d-flex align-center px-2"
        style="height: 60px; background: #f3f3f3"
      >
        <v-btn variant="text" to="/" icon="mdi-arrow-left">
          <v-icon color="black" size="20"> mdi-arrow-left </v-icon>
        </v-btn>
        <div class="d-flex align-center ml-2" style="gap: 20px">
          <!-- <img :src="$fileURL + promoData?.main_image" width="45" height="35" /> -->
          <img
            src="@/assets/happening-mobile-img-2.png"
            width="45"
            height="35"
          />
          <h3>Mall Offers ( <span class="text-red">12</span> )</h3>
        </div>
      </div>
      <div
        class="d-flex flex-column align-center justify-center pt-4 pb-2"
        style="height: 80px; gap: 20px"
      >
        <form
          class="navbar__search navbar__search__mobile"
          style="border-left: 8px solid brown !important"
        >
          <v-autocomplete
            class="mt-n2"
            clearable
            placeholder="Type a Mall's Name"
            variant="outlined"
            density="compact"
          />
          <button
            class="btn btn--search"
            style="background-color: brown !important"
            type="submit"
          >
            <v-icon color="white"> mdi-magnify </v-icon>
          </button>
        </form>

        <!-- <v-slide-group v-model="activeTag">
          <v-slide-group-item
            v-for="btn in eventBtns"
            :key="btn.id"
            :value="btn.tag"
          >
            <v-btn
              class="sub-menu-btn"
              :class="{
                active: activeTag == btn.id,
              }"
              height="30"
              style="box-shadow: 0 5px 25px rgba(0, 0, 0, 0)"
              @click="selectTag(btn.id)"
            >
              <p style="font-size: 12px" elevation>
                {{ btn.title }}
              </p>
            </v-btn>
          </v-slide-group-item>
        </v-slide-group> -->
      </div>
    </div>
    <v-container style="padding-top: 150px; padding-bottom: 50px">
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
            <v-lazy :options="{ threshold: 0.5 }" min-height="320">
              <v-card
                class="featured-card pb-4"
                height="320"
                elevation="0"
                style="
                  box-shadow: none !important;
                  border-bottom: 1px solid lightgrey;
                "
                @click="goToDetail(item)"
              >
                <div
                  class="card-title-container d-flex justify-space-between align-center px-1 py-1"
                >
                  <div style="overflow-y: hidden">
                    <p style="font-weight: 700; font-size: 16px">
                      Sale of Vouchers
                    </p>
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
                  style="height: 100px"
                  class="card-title-container d-flex justify-space-between align-center px-1 pb-4 pt-1 w-100"
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
              </v-card>
            </v-lazy>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
    <div
      class="py-4 px-3 d-flex align-center justify-center w-100"
      style="background: #f3f3f3; position: fixed; bottom: 0; font-size: 12px"
    >
      <p>
        <span class="text-red">4</span> Offers in
        <span class="text-red">4</span> Malls
      </p>
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
      eventBtns: [
        {
          id: 1,
          tag: "free",
          title: "Free Parking",
        },
        {
          id: 2,
          tag: "ev",
          title: "EV Lots",
        },
        {
          id: 3,
          tag: "handicap",
          title: "Handicap Lots",
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
      activeTag: null,
      promoData: null,
      currentDate: moment().format("DD/MM/YYYY"),
    };
  },
  methods: {
    goToDetail(item) {
      localStorage.setItem("eventDetailItem", JSON.stringify(item));
      this.$router.push(`/mall-offers-id/${item.id}`);
    },
    selectTag(tag) {
      this.activeTag = tag;
    },
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
.sub-menu-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 10px !important;
  border: 1px solid #d9d9d9 !important;
  border-radius: 50px !important;
  margin: 2px;
  height: 20px !important;
  font-family: Nunito;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
}
.sub-menu-btn .badge {
  margin-left: 16px;
}
.sub-menu-btn.active {
  background: #c2d5e9 !important;
  border-radius: 50px !important;
  color: black !important;
}

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

.featured-card {
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.43) !important;
}
.featured-card:hover {
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.43) !important;
}

.featured-card-img-cont {
  overflow: hidden;
  height: 180px;
}

.featured-card-img-cont-2 {
  overflow: hidden;
  height: 154px;
}

.featured-card-img-cont-3 {
  overflow: hidden;
  height: 190px;
}

.featured-card-img {
  transition: all 0.3s;
  transform: scale(1.4);
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.featured-card:hover .featured-card-img {
  transform: scale(1.5);
}

.card-title {
  gap: -10px;
}

.card-title h4 {
  font-weight: 700;
  font-size: 14px;
}

.card-title span {
  font-weight: 600;
  font-size: 11px;
}

.card-title-right {
  font-size: 9px;
  font-weight: 600;
}

.card-btn-container {
  position: absolute;
  gap: 20px;
}
.card-btn-container-1-malls {
  z-index: 100;
  bottom: 90px;
  right: 30px;
}
.card-btn {
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
}
</style>
