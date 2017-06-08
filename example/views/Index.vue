<template>
  <div>
    <header>
      vumo-ui demo
    </header>
    <div class="components-list">
      <div class="components-list-item">
        <router-link class="link" to="/buttons">
          Buttons
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/switch">
          Switch
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/checklist">
          Checklist
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/radiolist">
          Radiolist
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/toast">
          Toast
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/slider">
          Slider
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/viewpager">
          ViewPager
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/modal">
          Modal
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/popup">
          Popup
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/picker">
          Picker
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/card">
          Card
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/scrollview">
          ScrollView
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/circle">
          Circle
        </router-link>
      </div>
      <div class="components-list-item">
        <router-link class="link" to="/progress">
          Progress
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
header {
  text-align: center;
}

.components-list {
  margin-top: 10px;
  overflow: hidden;

  &-item {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #eee;
  }

  .link {
    display: block;
    text-decoration: none;
  }
}
</style>
