<template>
  <div class="sticky">
    <!-- SUPERIOR NAVBAR -->
    <nav class="navbar navbar-expand-lg white--text" id="superior-navbar">
      <v-row class="d-flex">
        <v-btn class="navbar-toggler ml-auto white" type="button" data-toggle="collapse" data-target="#superior-navbar-content" aria-controls="superior-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <div class="collapse navbar-collapse" id="superior-navbar-content">
          <ul class="navbar-nav navbar-menu text-center">
            <li class="navitem px-5 ma-auto"><a>Online store</a></li>
            <li class="navitem px-5 ma-auto"><a>Jobs</a></li>
            <li class="navitem px-5 ma-auto"><a>Volunteers</a></li>
            <li class="navitem px-5 ma-auto"><a>News</a></li>
            <li class="navitem px-5 ma-auto"><a>contact</a></li>
            <li class="mr-5">
              <v-btn icon><v-icon class="white--text">mdi-facebook</v-icon></v-btn>
            </li>
            <li class="mr-5">
              <v-btn icon><v-icon class="white--text">mdi-twitter</v-icon></v-btn>
            </li>
            <li class="mr-5">
              <v-btn icon><v-icon class="white--text">mdi-instagram</v-icon></v-btn>
            </li>
            <li class="mr-5">
              <v-btn icon><v-icon class="white--text">mdi-youtube</v-icon></v-btn>
            </li>
            <li class="mr-5">
              <v-btn icon><v-icon class="white--text">mdi-linkedin</v-icon></v-btn>
            </li>
          </ul>
        </div>
      </v-row>
    </nav>

    <!-- END SUPERIOR NAVBAR -->

    <!-- MAIN NAVBAR -->

    <nav class="navbar navbar-expand-lg navbar-dark" id="main-navbar">
      <v-row class="d-flex">
        <div id="brand">
          <div id="brand-name" class="my-auto">PetSmiles</div>
          <v-icon class="green--text" id="paw-icon">mdi-paw</v-icon>
        </div>

        <v-btn class="navbar-toggler ml-auto green" type="button" data-toggle="collapse" data-target="#main-navbar-content" aria-controls="main-navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <v-icon>mdi-menu</v-icon>
        </v-btn>

        <div class="collapse navbar-collapse" id="main-navbar-content">
          <ul class="navbar-nav mr-auto navbar-menu">
            <li class="nav-item active my-auto" @mouseover="showMenu1">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <div @mouseleave="hideDrop1">
              <li class="nav-item">
                <a class="nav-link my-auto black--text" @mouseover="showDrop1"> What we do </a>
                <div class="dropdown" id="drop1">
                  <a class="menu-item font-weight-bold" href="/">Volunteers</a>
                  <a class="menu-item font-weight-bold" href="/">Animals Rights</a>
                  <a class="menu-item font-weight-bold" href="/">Policy</a>
                </div>
              </li>
            </div>
            <div @mouseleave="hideDrop2">
              <li class="nav-item">
                <a class="nav-link my-auto black--text" @mouseover="showDrop2"> Where we work </a>
                <div class="dropdown" id="drop2">
                  <a class="menu-item font-weight-bold" href="/">Europe</a>
                  <a class="menu-item font-weight-bold" href="/">Asia</a>
                </div>
              </li>
            </div>
            <div @mouseleave="hideDrop3">
              <li class="nav-item">
                <a class="nav-link my-auto black--text" @mouseover="showDrop3"> How we work </a>
                <div class="dropdown" id="drop3">
                  <a class="menu-item font-weight-bold" href="/">Donations</a>
                  <a class="menu-item font-weight-bold" href="/">Reports</a>
                  <a class="menu-item font-weight-bold" href="/">Press</a>
                </div>
              </li>
            </div>
          </ul>
          <v-btn dark @click="open_search"><v-icon class="green--text">mdi-magnify</v-icon></v-btn>
          <v-btn dark class="ml-5"><v-icon class="green--text">mdi-account</v-icon></v-btn>
          <v-btn class="green white--text py-10 ml-10">I want to contribute</v-btn>
        </div>
      </v-row>
    </nav>

    <div id="search-system">
      <v-row>
        <form class="ma-auto text-center">
          <input class="form-control mr-sm-2 text-center ma-auto px-15" type="search" placeholder="Write here" aria-label="Search" />
          <v-btn color="orange" block class="white--text mt-5">Search</v-btn>
        </form>
        <v-btn icon @click="hide_search"><v-icon class="white--text text-h4" id="close-search">mdi-close-thick</v-icon></v-btn>
      </v-row>
    </div>
  </div>

  <!-- END MAIN NAVBAR -->
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    open_search() {
      const searchBar = document.getElementById("search-system");

      if (searchBar.style.visibility === "hidden") {
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
        searchBar.style.transition = "0.6s";
        searchBar.style.top = "0px";
      } else {
        searchBar.style.visibility = "hidden";
        searchBar.style.opacity = "0";
        searchBar.style.transition = "0.6s";
        searchBar.style.top = "-200px";
      }
    },
    hide_search() {
      const searchBar = document.getElementById("search-system");
      if (searchBar.style.visibility === "visible") {
        searchBar.style.visibility = "hidden";
        searchBar.style.opacity = "0";
        searchBar.style.transition = "0.6s";
        searchBar.style.top = "-200px";
      } else {
        searchBar.style.visibility = "visible";
        searchBar.style.opacity = "1";
        searchBar.style.transition = "0.6s";
        searchBar.style.top = "0px";
      }
    },
    showDrop1() {
      const dropdown1 = document.getElementById("drop1");

      if (dropdown1.style.visibility === "hidden") {
        dropdown1.style.visibility = "visible";
        dropdown1.style.opacity = "1";
        dropdown1.style.transition = "0.6s";
      } else {
        dropdown1.style.visibility = "hidden";
        dropdown1.style.opacity = "0";
        dropdown1.style.transition = "0.6s";
      }
    },
    hideDrop1() {
      const dropdown1 = document.getElementById("drop1");
      if (dropdown1.style.visibility === "visible") {
        dropdown1.style.visibility = "hidden";
        dropdown1.style.opacity = "0";
        dropdown1.style.transition = "0.6s";
      } else {
        dropdown1.style.visibility = "hidden";
        dropdown1.style.opacity = "1";
        dropdown1.style.transition = "0.6s";
      }
    },
    showDrop2() {
      const dropdown2 = document.getElementById("drop2");

      if (dropdown2.style.visibility === "hidden") {
        dropdown2.style.visibility = "visible";
        dropdown2.style.opacity = "1";
        dropdown2.style.transition = "0.6s";
      } else {
        dropdown2.style.visibility = "hidden";
        dropdown2.style.opacity = "0";
        dropdown2.style.transition = "0.6s";
      }
    },
    hideDrop2() {
      const dropdown2 = document.getElementById("drop2");
      if (dropdown2.style.visibility === "visible") {
        dropdown2.style.visibility = "hidden";
        dropdown2.style.opacity = "0";
        dropdown2.style.transition = "0.6s";
      } else {
        dropdown2.style.visibility = "hidden";
        dropdown2.style.opacity = "1";
        dropdown2.style.transition = "0.6s";
      }
    },
    showDrop3() {
      const dropdown3 = document.getElementById("drop3");

      if (dropdown3.style.visibility === "hidden") {
        dropdown3.style.visibility = "visible";
        dropdown3.style.opacity = "1";
        dropdown3.style.transition = "0.6s";
      } else {
        dropdown3.style.visibility = "hidden";
        dropdown3.style.opacity = "0";
        dropdown3.style.transition = "0.6s";
      }
    },
    hideDrop3() {
      const dropdown3 = document.getElementById("drop3");
      if (dropdown3.style.visibility === "visible") {
        dropdown3.style.visibility = "hidden";
        dropdown3.style.opacity = "0";
        dropdown3.style.transition = "0.6s";
      } else {
        dropdown3.style.visibility = "hidden";
        dropdown3.style.opacity = "1";
        dropdown3.style.transition = "0.6s";
      }
    },
  },
  mounted() {
    this.open_search();
    this.showDrop1();
    this.hideDrop1();
    this.showDrop2();
    this.hideDrop2();
    this.showDrop3();
    this.hideDrop3();
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 9999;
}

#superior-navbar {
  background-color: $primary;
  z-index: 999999;
}

#main-navbar {
  background: url("../assets/img/animal-1.jpg");
  background-position: top;
  background-size: cover;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.438);
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

#search-system {
  visibility: hidden;
  position: absolute;
  border-radius: 0px 0px 10px 10px;
  margin: 0 auto;
  top: 0px;
  left: 200px;
  right: 200px;
  width: 80%;
  background: url("../assets/img/animal-1.jpg");
  background-position: center;
  padding: 90px;
  box-shadow: 0px 2px 7px rgb(73, 73, 73);
}

#close-search {
  position: absolute;
  border: 3px solid white;
  padding: 25px;
  border-radius: 20%;
}

.showBar {
  animation: showBar 1s;
}

@keyframes showBar {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.dropdown {
  background: rgba(0, 0, 0, 0.637);
  width: 250px;
  position: absolute;
}

.dropdown-item {
  position: relative;
  color: rgb(24, 24, 24) !important;
}

.menu-item {
  color: white !important;
  text-align: left !important;
  padding: 20px;
  display: block;
  left: 0px;
  transition: 0.3s;
}

.menu-item:hover {
  position: relative;
  left: 10px;
  text-decoration: none;
  color: $primary !important;
}

#drop1 {
  visibility: hidden;
  background-color: rgb(49, 49, 49);
  border-radius: 10px;
}
#drop2 {
  visibility: hidden;
  background-color: rgb(49, 49, 49);
  border-radius: 10px;
}
#drop3 {
  visibility: hidden;
  background-color: rgb(49, 49, 49);
  border-radius: 10px;
}

.navbar-menu {
  position: relative;
}

@media (max-width: 700px) {
  #superior-navbar {
    text-align: center;
    height: 100%;
  }
}
</style>
