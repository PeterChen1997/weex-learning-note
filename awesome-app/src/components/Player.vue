<template>
  <div class="container">
    <Header />

    <div class="albumn">
      <image class="albumn-img" 
        src="https://www.peterchen.club/imgs/weex/record.png" 
        resize="strech"/>
    </div>

    <div class="tools"></div>

    <div class="control"></div>

  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: {
    Header
  }
};
</script>

<style>
.albumn {
  height: 800px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.albumn-img {
  height: 700px;
  width: 700px;
}
.tools {
  height: 150px;
  border: 1px solid black;
}
.control {
  height: 200px;
  border: 1px solid black;
}
</style>

