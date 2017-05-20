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
