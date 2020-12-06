<template>
  <div>
    <v-container id="container">
      <v-img src="../assets/img/data.jpg" height="700" id="data-img"> </v-img>

      <div class="centered">
        <h1 class="text-center my-15" id="data-title">Our work in numbers</h1>

        <v-row id="data-info">
          <v-col>
            <div id="data-number1" class="number">0</div>
            <p class="data-text">Animals have found a home in 2020</p>
          </v-col>
          <v-col>
            <div id="data-number2" class="number">0</div>
            <p class="data-text">Measures taken by the european government</p>
          </v-col>
          <v-col>
            <div id="data-number3" class="number">0</div>
            <p class="data-text">Countries we work with</p>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
import { counter1, counter2, counter3 } from "../hooks/counters";

export default {
  name: "Data",
  data() {
    return {};
  },
  mounted() {
    counter1(), counter2(), counter3();
  },
};
</script>

<style lang="scss">
@import "src/scss/variables";

#data-img {
  margin-top: 100px;
  padding: 30px;
  opacity: 0.8;
  height: 100%;
  filter: grayscale(1);
  border-radius: 15px;
}

#container {
  position: relative;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 18px;
  text-align: center;
}

.number {
  font-size: 6em;
  color: white;
  text-shadow: 0px 0px 10px rgb(255, 255, 255), 0px 0px 20px $info;
}

#data-title {
  color: white;
  text-shadow: 0px 5px 5px black;
  font-size: 4em;
  letter-spacing: 5px;
  padding-top: 130px;
}

.data-text {
  font-size: 25px;
  color: white;
  text-shadow: 0px 0px 5px black;
}

@media (max-width: 700px) {
  #data-img {
    height: 100%;
  }

  .number {
    font-size: 4em;
  }

  #data-title {
    font-size: 3em;
  }

  .data-text {
    font-size: 12px;
  }
}
</style>
