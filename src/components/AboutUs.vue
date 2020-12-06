<template>
  <div>
    <v-img src="../assets/img/shelter-2.jpg" width="100%" max-height="450">
      <h1 class="text-center" id="section-title">About us</h1>
    </v-img>

    <v-container>
      <v-row>
        <v-col cols="6" xs="12" id="left-col"
          ><h1 class="text-center primary-text">PAWS NGO</h1>
          <p class="lead text-justify ma-10">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates libero asperiores fugiat nesciunt, iure totam culpa earum saepe at beatae pariatur dignissimos dolorum repellendus eum quis quibusdam est ipsam similique consectetur ipsum eveniet exercitationem! Delectus nobis quaerat, quis numquam et<br /><br />
            mollitia quasi facere dolor adipisci eos excepturi voluptas repudiandae ad quibusdam quia recusandae autem vel sed error nam? Facilis aspernatur illum eum aliquid. Officia earum debitis quibusdam saepe illum asperiores perspiciatis odit. Dolorem harum dolores debitis reprehenderit, in commodi explicabo
            dolore<br /><br />
            deserunt nisi sequi sint pariatur aliquid. Blanditiis dolorem nesciunt dignissimos tenetur dicta eum accusamus animi ipsam recusandae aspernatur perferendis voluptatem distinctio cupiditate eius vero cum, quasi laboriosam quo alias provident unde! Enim iste nisi cumque quod vero ea ut, mollitia,
            perferendis<br /><br />
            unde voluptatum quis ex eum et eos aspernatur voluptatem natus reiciendis quidem ratione error totam exercitationem! Praesentium quae dignissimos, officiis voluptatem molestiae eius. Ratione vel odio excepturi eveniet voluptatum doloremque similique? Nobis dolorum quaerat culpa ipsum corrupti numquam, est
            cum<br /><br />
            eos porro quibusdam optio, suscipit minus vitae. Culpa adipisci, dolores minima temporibus corporis dolorum illum commodi libero magni hic odio in magnam sit inventore eius voluptas quasi natus perferendis aperiam! Obcaecati, minus deserunt officia iure similique sunt ipsam!
          </p>
        </v-col>
        <v-col cols="6" xs="12" id="right-col">
          <v-row>
            <v-img src="../assets/img/shelter-3.jpg" max-width="60%" class="ma-10" id="about-img-1"></v-img>
            <v-img src="../assets/img/shelter-4.jpg" max-width="60%" class="ma-10" id="about-img-2"></v-img>

            <v-divider></v-divider>
          </v-row>
          <v-row>
            <v-btn class="green" dark id="about-btn" block>Read more</v-btn>
          </v-row>
        </v-col>
      </v-row>
      <v-btn class="green" dark block id="responsive-btn">Read more</v-btn>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "AboutUs",
};
</script>

<style lang="scss">
@import "src/scss/variables";

#section-title {
  position: absolute;
  letter-spacing: 20px;
  color: white;
  background: $primaryb;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  margin: 0 auto;
}

.primary-text {
  color: $primary;
}

#about-img-1 {
  position: relative;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.527);
}

#about-img-2 {
  position: absolute;
  top: 280px;
  left: 100px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.527);
}

#about-btn {
  position: relative;
  top: 300px;
}

#responsive-btn {
  display: none;
}

@media (max-width: 700px) {
  #about-img-1 {
    display: none;
  }

  #about-img-2 {
    display: none;
  }

  #right-col {
    display: none;
  }

  #responsive-btn {
    display: block;
  }

  #left-col {
    min-width: 100%;
  }
}
</style>
