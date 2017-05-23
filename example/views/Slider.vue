<template>
  <div>
    <header>
      Slider
    </header>
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
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
  padding: 10px 0;
}
header {
  text-align: center;
}
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>

