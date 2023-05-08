<template>
  <v-container>
    <div class="happening d-flex align-center mb-8">
      <div class="happening-title">
        <h1>Mall Happenings</h1>
        <div class="line-divider my-3" />
        <p>
          Discover all Events, Promotions & Parking in a specific Mall around
          you.
        </p>
      </div>
      <v-card class="happening-item" elevation="0">
        <img src="@/assets/happening-img-1.png" />
        <span class="happening-info">Events</span>
        <div class="happening-link" />
      </v-card>
      <v-card class="happening-item" elevation="0">
        <img src="@/assets/happening-img-2.png" />
        <span class="happening-info">Parking Info</span>
        <div class="happening-link" />
      </v-card>
      <v-card class="happening-item" elevation="0">
        <img src="@/assets/happening-img-3.png" />
        <div class="happening-info">Promotions</div>
        <div class="happening-link" />
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
}
.happening-title {
  max-width: 300px;
}

@media screen and (max-width: 1170px) {
  .happening-title {
    max-width: 200px;
  }
}

.happening-title h1 {
  font-weight: 500;
}
.happening-title p {
  color: #5f5f5f;
}

.line-divider {
  height: 6px;
  width: 240px;
  background: #f9bc06;
  border-radius: 100%;
}

.happening-item {
  position: relative;
  overflow: hidden;
  border-radius: 20px !important;
}
.happening-item img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1);
}

.happening-item:hover img {
  transform: scale(1.1);
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
