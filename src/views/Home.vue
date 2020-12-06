<template>
  <div>
    <AboutUs />
    <GalleryMenu />
    <Info />
    <Data />
    <Contact />
  </div>
</template>

<script>
import AboutUs from "../components/AboutUs";
import GalleryMenu from "../components/GalleryMenu";
import Info from "../components/Info";
import Data from "../components/Data";
import Contact from "../components/Contact";

export default {
  name: "Home",
  components: {
    AboutUs,
    GalleryMenu,
    Info,
    Data,
    Contact,
  },
};
</script>
