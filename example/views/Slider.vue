<template>
  <div>
    <page-header>
      Slider
    </page-header>
    <main class="page-content">
      <div class="group">
        <header>常规</header>
        <mo-slider height="56.25%">
          <mo-slider-item>
            <img src="../imgs/1.jpg" alt="">
          </mo-slider-item>
          <mo-slider-item>
            <img src="../imgs/2.jpg" alt="">
          </mo-slider-item>
          <mo-slider-item>
            <img src="../imgs/3.jpg" alt="">
          </mo-slider-item>
        </mo-slider>
      </div>
      <div class="group">
        <header>循环</header>
        <mo-slider height="56.25%" loop>
          <mo-slider-item>
            <img src="../imgs/1.jpg" alt="">
          </mo-slider-item>
          <mo-slider-item>
            <img src="../imgs/2.jpg" alt="">
          </mo-slider-item>
          <mo-slider-item>
            <img src="../imgs/3.jpg" alt="">
          </mo-slider-item>
        </mo-slider>
      </div>
    </main>
  </div>
</template>

<script>
import PageHeader from '../components/Header'

export default {
  components: {
    PageHeader
  }
}
</script>

<style lang="scss">
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>

