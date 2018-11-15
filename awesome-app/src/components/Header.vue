<template>
    <div class="header">
        <text class="header-title">{{title}}</text>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Mini-App"
    };
  }
};
</script>

<style>
.header {
  display: flex;
  width: 750px;
  background-color: white;
  height: 100px;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
}
.header-title {
  color: black;
  font-size: 60px;
}
</style>
