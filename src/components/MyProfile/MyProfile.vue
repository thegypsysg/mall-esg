<template>
  <div>
    <v-container>
      <template v-if="!isSmall">
        <div class="card-container d-flex flex-wrap justify-space-between">
          <v-card class="first-section px-16 py-10">
            <div class="image-container w-100 mb-4">
              <v-img
                src="@/assets/images/icons/menu-shopper.png"
                class="avatar mx-auto"
              />
              <div class="mt-2 w-100 d-flex justify-center">
                <v-btn
                  color="blue"
                  variant="outlined"
                  @click="showCropper = true"
                >
                  Upload Image
                </v-btn>
              </div>
            </div>
            <v-row class="mb-2">
              <v-col>
                <label>Gender</label>

                <v-select
                  v-model="input.gender"
                  :items="resource.gender"
                  placeholder="Select Gender"
                  variant="outlined"
                  clearable
                  class="mt-2"
                  density="compact"
                  :rules="rules.genderRules"
                />
              </v-col>
            </v-row>
            <v-row class="mb-2">
              <v-col>
                <label>Marital Status</label>
                <v-select
                  v-model="input.marital"
                  :items="resource.marital"
                  variant="outlined"
                  placeholder="Select Marital Status"
                  clearable
                  class="mt-2"
                  density="compact"
                  :rules="rules.maritalRules"
                />
              </v-col>
            </v-row>
            <v-row class="mb-2">
              <v-col>
                <label>Nationality</label>
                <v-select
                  v-model="input.nationality"
                  :items="resource.nationality"
                  placeholder="Select Nationality"
                  variant="outlined"
                  clearable
                  class="mt-2"
                  density="compact"
                  :rules="rules.nationalityRules"
                />
              </v-col>
            </v-row>
          </v-card>
          <v-card class="second-section">
            <v-card-title class="card-title">
              <v-container class="d-flex justify-space-between my-n2">
                <p class="title-card">Basic Information</p>
                <v-btn
                  class="text-none text-subtitle-1"
                  color="success"
                  size="large"
                  variant="flat"
                >
                  Save Changes
                </v-btn>
              </v-container>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row class="mb-2">
                  <v-col cols="6">
                    <label>Name</label>
                    <v-text-field
                      v-model="input.name"
                      :rules="rules.nameRules"
                      :counter="20"
                      class="mt-2"
                      variant="outlined"
                      placeholder="Enter Name"
                      density="compact"
                      required
                      single-line
                    />
                  </v-col>
                  <v-col cols="6">
                    <label
                      >Email
                      <span
                        :class="{
                          'text-red': !isEmailVerified,
                          'text-green': isEmailVerified,
                        }"
                        >{{
                          isEmailVerified ? "(Verified)" : "(Not Verified)"
                        }}</span
                      ></label
                    >
                    <v-text-field
                      v-model="input.email"
                      :rules="rules.emailRules"
                      placeholder="Enter Email"
                      type="email"
                      class="mt-2"
                      hint="example@email.com"
                      density="compact"
                      variant="outlined"
                      required
                    />
                  </v-col>
                </v-row>
                <v-row class="mb-2">
                  <v-col cols="6">
                    <label
                      >Contact Number
                      <span
                        :class="{
                          'text-red': !isPhoneVerified,
                          'text-green': isPhoneVerified,
                        }"
                        >{{
                          isPhoneVerified ? "(Verified)" : "(Not Verified)"
                        }}</span
                      ></label
                    >
                    <div class="d-flex">
                      <v-text-field
                        v-model="input.phone"
                        :counter="phoneNumberCounter"
                        required
                        disabled
                        class="mt-2"
                        type="number"
                        density="compact"
                        placeholder="Phone Number"
                        variant="outlined"
                      />
                      <v-btn
                        class="text-none text-subtitle-1 mt-2"
                        color="blue"
                        size="x-large"
                        variant="flat"
                        @click="isChangePhone = !isChangePhone"
                      >
                        Change
                      </v-btn>
                    </div>
                    <template v-if="isChangePhone">
                      <div class="d-flex mt-2">
                        <v-autocomplete
                          v-model="input.countryCode"
                          :items="resource.countryCodes"
                          label="Country Code"
                          item-text="name"
                          item-value="code"
                          density="compact"
                          outlined
                        />

                        <v-text-field
                          v-model="input.phoneNew"
                          :counter="phoneNumberCounter"
                          required
                          type="number"
                          density="compact"
                          placeholder="Phone Number"
                          variant="outlined"
                        />
                      </div>
                      <v-btn
                        class="text-none text-subtitle-1 w-100 mt-3"
                        color="orange"
                        size="x-large"
                        variant="flat"
                      >
                        Send OTP
                      </v-btn>
                    </template>
                  </v-col>
                  <v-col cols="6">
                    <label>Password </label>
                    <div class="d-flex align-center">
                      <v-text-field
                        v-model="input.password"
                        :append-inner-icon="
                          showPassword ? 'mdi-eye' : 'mdi-eye-off'
                        "
                        :type="showPassword ? 'text' : 'password'"
                        variant="outlined"
                        placeholder="Enter Password"
                        class="my-2 custom-input"
                        density="compact"
                        :disabled="!isChangePassword"
                        :rules="rules.passwordRules"
                        @click:append-inner="showPassword = !showPassword"
                      />
                      <v-btn
                        v-if="!isChangePassword"
                        class="text-none text-subtitle-1"
                        color="blue"
                        size="x-large"
                        variant="flat"
                        @click="changePassword"
                      >
                        Change
                      </v-btn>
                      <v-btn
                        v-if="isChangePassword"
                        class="text-none text-subtitle-1"
                        color="success"
                        size="x-large"
                        variant="flat"
                      >
                        Save Changes
                      </v-btn>
                    </div>
                  </v-col>
                </v-row>
                <v-row class="mb-2">
                  <v-col cols="6">
                    <label>Birth Date</label>
                    <v-text-field
                      v-model="input.date"
                      :rules="rules.dateRules"
                      density="compact"
                      variant="outlined"
                      required
                      class="mt-2"
                      type="date"
                      @input="onDateInput"
                    />
                  </v-col>
                  <v-col cols="6">
                    <label>Age</label>
                    <p class="mt-5">
                      {{ age }}
                    </p>
                  </v-col>
                </v-row>
                <hr class="my-4" />
              </v-container>
              <v-container>
                <div
                  class="d-flex w-100 justify-space-between align-center mb-4 mt-n8"
                >
                  <p class="title-card">My Current Location</p>
                  <v-btn
                    class="text-none text-subtitle-1"
                    color="success"
                    size="large"
                    variant="flat"
                  >
                    Save Changes
                  </v-btn>
                </div>
                <v-row>
                  <v-col cols="6">
                    <v-autocomplete
                      v-model="input.location"
                      :items="resource.location"
                      variant="outlined"
                      placeholder="Select Location"
                      clearable
                      class="mt-2"
                      density="compact"
                      :rules="rules.locationRules"
                    />
                  </v-col>
                  <v-col cols="6">
                    <v-autocomplete
                      v-model="input.country"
                      :items="resource.country"
                      variant="outlined"
                      placeholder="Select Country"
                      clearable
                      class="mt-2"
                      density="compact"
                      :rules="rules.countryRules"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6">
                    <v-autocomplete
                      v-model="input.city"
                      :items="resource.city"
                      variant="outlined"
                      placeholder="Select City"
                      clearable
                      class="mt-2"
                      density="compact"
                      :rules="rules.cityRules"
                    />
                  </v-col>
                </v-row>
                <hr class="mt-8" />
              </v-container>
              <v-container>
                <div
                  class="d-flex w-100 justify-space-between align-center mb-4 mt-n4"
                >
                  <p class="title-card">Nearest Mall</p>
                  <v-btn
                    class="text-none text-subtitle-1"
                    color="success"
                    size="large"
                    variant="flat"
                  >
                    Save Changes
                  </v-btn>
                </div>
                <v-row>
                  <v-col cols="6">
                    <v-autocomplete
                      v-model="input.nearest"
                      :items="resource.nearest"
                      placeholder="Select Nearest Mall"
                      variant="outlined"
                      clearable
                      class="mt-2"
                      density="compact"
                      :rules="rules.nearestRules"
                    />
                  </v-col>
                </v-row>
                <hr class="mt-8" />
              </v-container>
              <v-container>
                <div
                  class="d-flex w-100 justify-space-between align-center mb-4 mt-n4"
                >
                  <p class="title-card">Favorite Malls</p>
                  <v-spacer />
                </div>
                <v-row>
                  <v-col cols="4">
                    <v-autocomplete
                      v-model="input.favorite1"
                      :items="resource.favorite"
                      variant="outlined"
                      placeholder="Select Mall"
                      clearable
                      class="mt-2"
                      density="compact"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-autocomplete
                      v-model="input.favorite2"
                      :items="resource.favorite"
                      variant="outlined"
                      placeholder="Select Mall"
                      clearable
                      class="mt-2"
                      density="compact"
                    />
                  </v-col>
                  <v-col cols="4">
                    <v-autocomplete
                      v-model="input.favorite3"
                      :items="resource.favorite"
                      variant="outlined"
                      placeholder="Select Mall"
                      clearable
                      class="mt-2 py-0"
                      density="compact"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
          </v-card>
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
      isEmailVerified: false,
      isPhoneVerified: false,
      isChangePassword: false,
      isChangePhone: false,
      showPassword: false,
      menuOpen: false,

      input: {
        gender: null,
        marital: null,
        nationality: null,
        name: "",
        email: "",
        countryCode: null,
        phone: "",
        phoneNew: "",
        password: "",
        date: null,
        age: "",

        location: null,
        city: null,
        country: null,
        nearest: null,
        favorite1: null,
        favorite2: null,
        favorite3: null,
      },
      rules: {
        nameRules: [
          (value) => {
            if (value) return true;
            return "Name is required.";
          },
          (value) => {
            if (value?.length >= 4) return true;
            return "Username must be more than 4 characters.";
          },
          (value) => {
            if (value?.length <= 20) return true;
            return "Username must be less than 20 characters.";
          },
        ],
        emailRules: [
          (value) => {
            if (value) return true;
            return "E-mail is required.";
          },
          (value) => {
            if (/.+@.+\..+/.test(value)) return true;
            return "E-mail must be valid.";
          },
        ],
        phoneRules: [(v) => !!v || "Phone number is required"],
        passwordRules: [(v) => !!v || "Password is required"],
        dateRules: [(v) => !!v || "Birth Date is required"],
        genderRules: [(v) => !!v || "Gender is required"],
        maritalRules: [(v) => !!v || "Marital Status is required"],
        nationalityRules: [(v) => !!v || "Nationality is required"],
        nearestRules: [(v) => !!v || "Nearest Mall is required"],
        locationRules: [(v) => !!v || "Location is required"],
        cityRules: [(v) => !!v || "City is required"],
        countryRules: [(v) => !!v || "Country is required"],
      },
      phoneNumberCounter: {
        value: 0,
        counterSize: 10,
      },
      resource: {
        gender: ["Male", "Female"],
        marital: ["Single", "Married", "Others"],
        nationality: [
          "Singaporean",
          "Indian",
          "Malaysian",
          "Filipino",
          "English",
          "Bangladeshi",
        ],
        countryCodes: [],
        favorite: [],
        nearest: [
          "Parkway Parade",
          "Waterway Point",
          "Causeway Point",
          "Great World",
          "Tampines Mall",
          "Jewel",
          "Our Tampines Hub",
        ],
        location: ["Singapore", "India", "Malaysia"],
        city: ["Alexandra", "Ang Mo Kio", "Bedok", "Bukit Panjang"],
        country: ["Singapore"],
      },
    };
  },
  computed: {
    isSmall() {
      return this.screenWidth < 640;
    },
    age() {
      if (!this.input.date) return null;

      const today = new Date();
      const birthDate = new Date(this.input.date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      return age;
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
    changePassword() {
      this.input.password = "";
      this.isChangePassword = true;
    },
    onDateInput() {
      // You can perform any necessary processing here when the date is inputted
      // For example, you can call the calculateAge method to update the age
      this.calculateAge(this.input.date);
    },
    calculateAge(date) {
      if (!date) {
        this.age = null;
        return;
      }

      const today = new Date();
      const birthDate = new Date(date);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      this.age = age;
    },
  },
};
</script>

<style scoped>
.card-container {
  margin-top: 100px;
  width: 100%;
}

.first-section {
  width: 35%;
  height: 60%;
}

.second-section {
  width: 63%;
}

.card-title {
  background: #f7f7f7;
}

.avatar {
  width: 160px;
  border-radius: 6px;
}

.title-card {
  font-size: 20px;
  font-weight: 600;
}
</style>
