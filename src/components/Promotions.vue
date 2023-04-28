<template>
  <v-container>
    <v-sheet
      class="mx-auto mt-5 discount-sheet"
      elevation="0"
    >
      <v-slide-group
        v-model="model"
      >
        <template #prev="{ on, attrs }">
          <v-btn
            color="white"
            rounded
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </template>
        <template #next="{ on, attrs }">
          <v-btn
            color="white"
            rounded
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-arrow-right</v-icon>
          </v-btn>
        </template>
        <v-slide-group-item
          v-for="n in 15"
          :key="n"
          v-slot="{ toggle }"
        >
          <div>
            <v-card
              :class="['ma-4 pa-4']"
              elevation="1"
              variant="outlined"
              @click="toggle"
            >
              <div class="d-flex fill-height align-center justify-space-between">
                <img
                  src="@/assets/images/icons/off-20.png"
                  height="40"
                >
                <div class="text-h6 mb-1">
                  20% off
                </div>
              </div>
            </v-card>
            <div
              class="text-center"
              style="font-weight: 600"
            >
              20% Promotion
            </div>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
  <div class="promotion-container">
    <v-container>
      <div class="d-flex justify-space-between mt-5">
        <h1>
          Promotions by category
        </h1>
        <h1>
          View all
        </h1>
      </div>
      <v-sheet
        class="mx-auto mt-5"
        elevation="0"
      >
        <v-slide-group
          v-model="model2"
          class="pa-4"
        >
          <template #prev="{ on, attrs }">
            <v-btn
              color="white"
              rounded
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </template>
          <template #next="{ on, attrs }">
            <v-btn
              color="white"
              rounded
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
          </template>
          <v-slide-group-item
            v-for="n in 15"
            :key="n"
            v-slot="{ toggle }"
          >
            <v-card
              :class="['ma-4 text-center']"
              height="160"
              width="120"
              elevation="1"
              style="border-radius: 12px; padding: 22px"
              @click="toggle"
            >
              <div class="text-h6 " style="font-size: 16px;margin-bottom: 10px;line-height: 19.36px">
                Cakes
              </div>
              <img
                src="@/assets/images/cakes.png"
                height="60"
              >
              <div style="font-weight: 600; font-size: 14px; margin-top: 10px;line-height:16.94px">
                <span class="text-red">32</span> Promos
              </div>
            </v-card>
          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Promotions",
  data: () => ({
    model: null,
    model2: null,
  }),
}
</script>

<style>

</style>
