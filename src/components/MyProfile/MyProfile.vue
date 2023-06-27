<template>
  <div>
    <v-container>
      <template v-if="!isSmall">
        <div class="d-flex flex-wrap">
          <div class="first-section">
            <!-- <vue-avatar-cropper
              ref="cropper"
              :width="200"
              :height="200"
              :crop-size="{ width: 200, height: 200 }"
              :output-size="{ width: 200, height: 200 }"
              @crop="handleCrop"
            /> -->

            <button @click="cropImage">Crop</button>
          </div>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script>
// import VueAvatarCropper from "vue-avatar-cropper";
export default {
  // components: {
  //   VueAvatarCropper,
  // },
  data() {
    return {
      screenWidth: window.innerWidth,
    };
  },
  computed: {
    isSmall() {
      return this.screenWidth < 640;
    },
  },
  created() {
    window.addEventListener("resize", this.handleResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    cropImage() {
      this.$refs.cropper.crop();
    },
    handleCrop(dataUrl) {
      // Manipulasi gambar yang dicrop, misalnya mengirim ke server atau menampilkannya di preview
      console.log("Data URL:", dataUrl);
    },
  },
};
</script>

<style lang="scss" scoped></style>
