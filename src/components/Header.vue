<template>
  <div id="header">
    <h1 class="text-center pa-10" id="header-title">
      We protect and welcome:<br />
      offering a home to the most needy animals
    </h1>
    <h2 class="white--text pa-15" id="header-subtitle">We are in contact with the main shelters in the country</h2>

    <v-btn class="green ma-15 pa-5" dark id="colab-btn">colaborate</v-btn>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "src/scss/variables";

#header {
  background: url("../assets/img/shelter-1.jpg");
  background-size: cover;
  background-position: center;
  text-align: center;
}

#header-title {
  font-size: 6em;
  font-family: $style1;
  color: white;
  text-shadow: 0px 0px 10px black;
}

#header-subtitle {
  text-shadow: 0px 0px 10px black;
}
#colab-btn {
  margin-bottom: 200px;
}

@media (max-width: 700px) {
  #header-title {
    margin-top: 200px;
    font-size: 3em;
  }
}
</style>
