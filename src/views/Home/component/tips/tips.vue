<template>
  <div class="main">
    <div class="flex">
      <img src="@/images/home/index_img01.png" class="flex-1 img1" />
      <img src="@/images/home/index_img02.png" class="flex-1 img2" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped>
.main {
  width: 100%;
  max-width: 640px;
  overflow: hidden;
  margin: 0 auto;
}
.flex {
  display: flex;
  margin: .5rem 1rem;
}
.flex-1 {
  flex: 1;
  width: 50%;
  height: 6rem;
}
.img1 {
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
}
.img2 {
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
}
</style>
