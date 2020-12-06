<template>
  <div>
    <div id="info">
      <v-container>
        <v-row>
          <v-col class="text-center" xs="6">
            <v-icon class="info-icon text-h2 blue--text">mdi-heart</v-icon>
            <h1 class="info-title">Adopt</h1>
            <p class="info-text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>
          <v-col class="text-center" xs="6">
            <v-icon class="info-icon text-h2 blue--text">mdi-home</v-icon>
            <h1 class="info-title">Welcome house</h1>
            <p class="info-text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>
          <v-col class="text-center" xs="6">
            <v-icon class="info-icon text-h2 blue--text">mdi-paw</v-icon>
            <h1 class="info-title">Sponsor</h1>
            <p class="info-text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>
          <v-col class="text-center" xs="6">
            <v-icon class="info-icon text-h2 blue--text">mdi-account-supervisor</v-icon>
            <h1 class="info-title">Volunteer</h1>
            <p class="info-text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>
          <v-col class="text-center" xs="6">
            <v-icon class="info-icon text-h2 blue--text">mdi-handshake</v-icon>
            <h1 class="info-title">Become a member</h1>
            <p class="info-text-small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>
        </v-row>

        <v-row class="text-center">
          <v-col xs="5">
            <p class="info-text-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>

          <v-col xs="5">
            <p class="info-text-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>

          <v-col xs="5">
            <p class="info-text-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>

          <v-col xs="5">
            <p class="info-text-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>

          <v-col xs="6">
            <p class="info-text-large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nisi, molestiae quaerat aut accusantium exercitationem magnam iusto hic aspernatur ad.</p>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "Info",
};
</script>

<style lang="scss">
@import "src/scss/variables";
.info-icon,
.info-title {
  color: $info;
}

#info {
  margin-top: 100px;
  padding: 30px;
  background: url("../assets/img/info.jpg");
  background-position: cover;
  background-position: bottom;
  background-attachment: fixed;
  border-radius: 15px;
}

.info-text-large {
  font-weight: bold;
  color: white;
}

.info-text-small {
  display: none;
}

@media (max-width: 700px) {
  .info-text-large {
    display: none;
  }
  .info-text-small {
    display: block;
    color: white;
  }
}
</style>
