<template>
  <div>
    <header>
      Buttons
    </header>
    <div class="group">
      <mo-button size="large">
        large button
      </mo-button>
    </div>
    <div class="group">
      <mo-button>
        meduim button
      </mo-button>
      <mo-button size="small">
        small button
      </mo-button>
    </div>
    <div class="group">
      <mo-button type="primary" size="large">
        primary button
      </mo-button>
    </div>
    <div class="group">
      <mo-button type="success" size="large">
        success button
      </mo-button>
    </div>
    <div class="group">
      <mo-button type="danger" size="large">
        danger button
      </mo-button>
    </div>
    <div class="group">
      <mo-button type="warning" size="large">
        warning button
      </mo-button>
    </div>
    <div class="group">
      <mo-button type="primary" size="large" light>
        light button
      </mo-button>
    </div>
    <div class="group">
      <mo-button type="primary" size="large" disabled>
        disabled button
      </mo-button>
    </div>
    <div class="group">
      <mo-button size="large" light>
        <img slot="icon" src="" alt="" width="20" height="20">
        with icon
      </mo-button>
    </div>
  </div>
</template>

<style lang="scss">
header {
  text-align: center;
}
.group {
  margin: 10px 0;
  vertical-align: middle;
}
</style>
