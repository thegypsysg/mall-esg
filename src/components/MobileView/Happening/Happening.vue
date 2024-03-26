<template>
  <v-container>
    <div class="happening d-flex align-center flex-column mb-8 mx-auto">
      <div class="happening-title mb-6 text-center">
        <h1>Mall Happenings</h1>
        <div class="line-divider my-4 mx-auto" />
        <p class="text-left">
          Discover all Events , Parking info , Mall Offers in a malls around you
          .
        </p>
      </div>

      <v-lazy :options="{ threshold: 0.5 }" min-height="100">
        <v-card
          class="happening-item d-flex align-center ml-n4 mb-1 w-100"
          height="100"
          elevation="0"
          @click="goTo('/all-events')"
        >
          <div style="width: 40%">
            <div class="happening-item-img-cont">
              <v-img
                class="happening-item-img"
                transition="fade-transition"
                height="100"
                src="@/assets/happening-mobile-img-1.png"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </div>
          <div
            class="happening-item-info d-flex flex-column justify-space-between"
            style="font-weight: 600; width: 60%"
          >
            <h2>Events</h2>
            <p>
              Explore all Events that are happening in Specific Malls around you
              .
            </p>
            <div>
              <span class="text-red">23</span> Events in
              <!-- <span class="text-muted">&#x2022;</span> -->
              <span class="text-red"> 4</span> Malls
            </div>
          </div>
        </v-card>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" min-height="100">
        <v-card
          class="happening-item d-flex align-center ml-n4 mb-1 w-100"
          height="100"
          elevation="0"
          @click="goTo('/all-parking-info')"
        >
          <div style="width: 40%">
            <div class="happening-item-img-cont">
              <v-img
                class="happening-item-img"
                transition="fade-transition"
                height="100"
                src="@/assets/happening-mobile-img-2.png"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </div>
          <div
            class="happening-item-info d-flex flex-column justify-space-between"
            style="font-weight: 600; width: 60%"
          >
            <h2>Parking Info</h2>
            <p>
              Get Real time Parking Info on the available lots for specific
              Malls around you .
            </p>
            <div>
              <span class="text-red">12</span> Parking Info in
              <!-- <span class="text-muted">&#x2022;</span> -->
              <span class="text-red"> 3</span> Malls
            </div>
          </div>
        </v-card>
      </v-lazy>
      <v-lazy :options="{ threshold: 0.5 }" min-height="100">
        <v-card
          class="happening-item d-flex align-center ml-n4 mb-1 w-100"
          height="100"
          elevation="0"
          @click="goTo('/all-mall-offers')"
        >
          <div style="width: 40%">
            <div class="happening-item-img-cont">
              <v-img
                class="happening-item-img"
                transition="fade-transition"
                height="100"
                src="@/assets/happening-mobile-img-3.png"
              >
                <template #placeholder>
                  <div class="skeleton" />
                </template>
              </v-img>
            </div>
          </div>
          <div
            class="happening-item-info d-flex flex-column justify-space-between"
            style="font-weight: 600; width: 60%"
          >
            <h2>Mall Offers</h2>
            <p>Browse thru various offers given by Malls around you .</p>
            <div>
              <span class="text-red">12</span> Mall Offers in
              <!-- <span class="text-muted">&#x2022;</span> -->
              <span class="text-red"> 3</span> Malls
            </div>
          </div>
        </v-card>
      </v-lazy>
    </div>
  </v-container>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Happening",
  methods: {
    goTo(route) {
      this.$router.push(`${route}`);
    },
  },
};
</script>

<style scoped>
.happening {
  gap: 20px;
  max-width: 270px;
}
.happening-title {
  max-width: 220px;
}

.happening-title h1 {
  font-weight: 500;
  font-size: 25px;
}
.happening-title p {
  font-size: 12px;
  color: #bababa;
}

.line-divider {
  height: 4px;
  width: 175px;
  background: #f9bc06;
  border-radius: 100%;
}

.happening-item {
  gap: 10px;
}

.happening-item-img-cont {
  height: 95px;
  overflow: hidden;
  border-radius: 5px !important;
}

.happening-item-img {
  transition: all 0.3s;
  transform: scale(1.4);
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
}

.happening-item-img-cont:hover .happening-item-img {
  transform: scale(1.5);
}

.happening-item-info {
  height: 100px;
}

.happening-item-info h2 {
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 7px;
}

.happening-item-info p {
  font-weight: 600;
  font-size: 11px;
  line-height: 12px;
  margin-bottom: 5px;

  color: #bababa;
}
.happening-item-info div {
  font-weight: 600;
  font-size: 11px;
}

.happening-info {
  position: absolute;
  bottom: 20px;
  color: white;
  z-index: 100;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  width: 100%;
}

.happening-item:hover .happening-info {
  font-weight: 500;
}

.happening-link {
  background: rgba(0, 0, 0, 0.429);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  height: 70px;
  width: 100%;
  position: absolute;
  bottom: -100px;
}

.happening-item:hover .happening-link {
  bottom: 0;
}

.skeleton {
  width: 100%;
  height: 100%;
  border-radius: 5px !important;
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
