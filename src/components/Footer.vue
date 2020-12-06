<template>
  <div>
    <div class="footer-fluid" id="footer">
      <v-row>
        <v-col class="green">
          <div class="pa-15">
            <h4>You may be interested in</h4>
            <v-row>
              <v-col>
                <v-list-item link>Online store</v-list-item>
                <v-list-item link>Employment</v-list-item>
                <v-list-item link>Volunteers</v-list-item>
              </v-col>
              <v-col>
                <v-list-item link>News</v-list-item>
                <v-list-item link>FAQs</v-list-item>
                <v-list-item link>Privacy Policy</v-list-item>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col class="info text-center">
          <h4 class="text-uppercase">Contact with us</h4>
          <v-icon class="text-h3">mdi-phone</v-icon>
          <h1>+00 000 00 00 00</h1>
          <h4>example_email@example.com</h4>
          <p class="mt-5">Follow us on:</p>
          <v-row>
            <v-col>
              <v-btn link class="transparent" depressed>
                <v-icon>mdi-twitter</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn link class="transparent" depressed>
                <v-icon>mdi-facebook</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn link class="transparent" depressed>
                <v-icon>mdi-youtube</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn link class="transparent" depressed>
                <v-icon>mdi-instagram</v-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn link class="transparent" depressed>
                <v-icon>mdi-linkedin</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
        <v-col id="col-right">
          <div class="pa-15">
            <div id="brand">
              <div id="brand-name" class="my-auto">PetSmiles</div>
              <v-icon class="green--text" id="paw-icon">mdi-paw</v-icon>
            </div>
            <p class="mt-10 green--text">PetSmiles NGO direction adress, number, city, 00000, country</p>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="green" id="sub-footer">
      <p class="text-center ma-auto white--text" id="sub-footer-text">
        <span id="year">{{ date }}</span> - Carlos Segura García
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "src/scss/variables";

.footer-fluid {
  width: 100%;
  height: 350px;
  color: white;
}

#col-right {
  background-color: $dark;
}

#brand {
  position: relative;
}

#paw-icon {
  position: absolute;
  color: $primary !important;
  text-shadow: 5px 0px 0px black;
  top: 0px;
  bottom: 2px;
  left: 120px;
  font-size: 6em;
  z-index: 0;
}

#brand-name {
  position: relative;
  font-size: 3em;
  color: white;
  margin-right: 50px;
  margin-left: 15px;
  z-index: 1;
  font-family: $style1;
  text-shadow: 0px 0px 10px black;
}

#footer {
  position: absolute;
  left: 0px;
  right: 0px;
  bottom: 0px;
}

#sub-footer {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: url("../assets/img/subfooter.jpg");
  background-position: center;
  background-size: cover;
}

#sub-footer-text {
  text-shadow: 0px 0px 10px black;
  letter-spacing: 2px;
  font-size: 1.2em;
}
</style>
