<template>
  <v-container>
    <div class="happening d-flex align-center flex-column mb-8 mx-auto">
      <div class="happening-title mb-6">
        <h1>Mall Happenings</h1>
        <div class="line-divider my-4" />
        <p>
          Discover all Events, Promotions & Parking in a specific Mall around
          you.
        </p>
      </div>
      <v-card class="happening-item d-flex" elevation="0">
        <div class="happening-item-img">
          <img src="@/assets/happening-mobile-img-1.png" />
        </div>
        <div class="happening-item-info d-flex flex-column">
          <h2>Events</h2>
          <p>Explore all the Events that are currently happening in Malls</p>
          <div>
            <span class="text-red">2</span> Events
            <span class="text-muted">&#x2022;</span>
            <span class="text-red"> 5</span> Malls
          </div>
        </div>
      </v-card>
      <v-card class="happening-item d-flex" elevation="0">
        <div class="happening-item-img">
          <img src="@/assets/happening-mobile-img-2.png" />
        </div>
        <div class="happening-item-info d-flex flex-column">
          <h2>Events</h2>
          <p>Explore all the Events that are currently happening in Malls</p>
          <div>
            <span class="text-red">2</span> Events
            <span class="text-muted">&#x2022;</span>
            <span class="text-red"> 5</span> Malls
          </div>
        </div>
      </v-card>
      <v-card class="happening-item d-flex" elevation="0">
        <div class="happening-item-img">
          <img src="@/assets/happening-mobile-img-3.png" />
        </div>
        <div class="happening-item-info d-flex flex-column">
          <h2>Events</h2>
          <p>Explore all the Events that are currently happening in Malls</p>
          <div>
            <span class="text-red">2</span> Events
            <span class="text-muted">&#x2022;</span>
            <span class="text-red"> 5</span> Malls
          </div>
        </div>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {};
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
  height: 1.2px;
  width: 130px;
  background: #242424;
}

.happening-item {
  gap: 10px;
}

.happening-item-img {
  width: 130px;
  height: 74px;
  overflow: hidden;
  border-radius: 5px !important;
}

.happening-item-img img {
  transition: all 0.3s;
  display: block;
  object-fit: cover;
  object-position: center;
  width: 100%;
  height: 100%;
  transform: scale(1);
}

.happening-item-img:hover img {
  transform: scale(1.1);
}

.happening-item-info {
  height: 74px;
}

.happening-item-info h2 {
  font-weight: 500;
  font-size: 20px;
  margin-bottom: 2px;
}

.happening-item-info p {
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  margin-bottom: 1.7px;

  color: #bababa;
}
.happening-item-info div {
  font-weight: 400;
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
</style>
