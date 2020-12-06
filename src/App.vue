<template>
  <v-app>
    <Navbar />
    <Header />
    <v-container>
      <router-view></router-view>
    </v-container>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "src/scss/variables";

* {
  font-family: $style3;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: $primary;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
