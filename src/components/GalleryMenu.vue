<template>
  <div>
    <v-row v-for="(item, i) in imagesMenu" :key="i">
      <v-img :src="item.img" height="650" class="my-5 rounded" id="img">
        <v-container>
          <h1 id="image-title" class="centered">{{ item.title }}</h1>
        </v-container>
      </v-img>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "GalleryMenu",
  data() {
    return {
      imagesMenu: [
        { img: require("../assets/img/dog.jpg"), title: "Dogs" },
        { img: require("../assets/img/cat.jpg"), title: "Cats" },
        { img: require("../assets/img/rodents.jpg"), title: "Rodents" },
        { img: require("../assets/img/exotics.jpg"), title: "Exotics" },
        { img: require("../assets/img/farmanimals.jpg"), title: "Farm" },
        { img: require("../assets/img/wildanimals.jpg"), title: "Wild" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";
#image-title {
  font-size: 30em;
  text-align: center;
  color: white;
  opacity: 0.5;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#img {
  filter: grayscale(1);
  transition: 0.4s;
}

#img:hover {
  transform: scale(1.1);
  filter: grayscale(0);

  #image-title {
    opacity: 1;
    text-shadow: 0px 0px 20px rgb(250, 250, 250);
    transition: 1s;
    cursor: pointer;
  }
}

@media (max-width: 700px) {
  #image-title {
    font-size: 10em;
  }
}
</style>
