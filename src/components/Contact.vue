<template>
  <div id="contact">
    <h1 class="text-center" id="contact-title">Have you any question?</h1>

    <v-row>
      <v-col md="6" class="mt-15" xs="12" id="col-left">
        <form>
          <div class="form-group">
            <label for="name-input" class="form-label">Full name</label>
            <input type="text" class="form-control" id="name-input" aria-describedby="emailHelp" />
            <small id="name-required" class="form-text red--text">This field is required.</small>
          </div>
          <div class="form-group">
            <label for="email-input" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email-input" aria-describedby="emailHelp" />
            <small id="email-required" class="form-text red--text">This field is required.</small>
          </div>
          <div class="form-group">
            <label for="text-input" class="form-label">Write your message</label>
            <textarea type="text" class="form-control" id="text-input" aria-describedby="emailHelp" />
            <small id="email-required" class="form-text red--text">This field is required.</small>
          </div>

          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="check-policy" />
            <label class="form-check-label" for="exampleCheck1">I accept the Privacy Policy and the Legal Notice </label>
          </div>
          <v-btn class="btn" color="green" dark>Send</v-btn>
        </form>
      </v-col>
      <v-col md="6" class="mt-15" xs="12" id="col-right">
        <v-sheet height="100%" width="100%" elevation="15" class="pa-15" id="sheet">
          <h3 class="text-center" id="support-title">Do you want to collaborate with us?</h3>
          <h4 class="text-center" id="support-subtitle">We have different support programmes</h4>
          <v-divider></v-divider>
          <v-card class="mr-auto" max-width="100%" tile>
            <v-list class="text-center">
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      selectedItem: 1,
      items: [
        { text: "To be a welcome house", icon: "mdi-home-circle-outline" },
        { text: "Searching for homes", icon: "mdi-home-search-outline" },
        { text: "Helping in shelters", icon: "mdi-paw" },
        { text: "Informing people", icon: "mdi-information-outline" },
        { text: "Veterinary staff", icon: "mdi-medical-bag" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#contact-title {
  color: $primary;
  margin-top: 100px;
}

#sheet {
  transition: 0.4s;
}

#sheet:hover {
  transform: scale(1.03);
}

.form-label {
  font-size: 1.5em;
  color: $primary;
}

#support-title {
  color: $info;
}

#support-subtitle {
  font-size: 20px;
}

#contact {
  margin-bottom: 350px;
}

@media (max-width: 700px) {
  #col-left {
    width: 100%;
    display: block;
  }

  #col-right {
    width: 100%;
    display: block;
  }
}
</style>
