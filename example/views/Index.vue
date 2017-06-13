<template>
  <div class="page">
    <page-header>
      Demo
    </page-header>
    <main class="page-content">
      <div class="components-list">
        <div class="components-list-item" v-for="(component, index) in components" v-if="index > 0">
          <router-link class="link" :to="component.path">
            {{ component.name }}
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import routes from '../routes'
import PageHeader from '../components/Header'

export default {
  data() {
    return {
      components: routes
    }
  },
  components: {
    PageHeader
  }
}
</script>


<style lang="scss">
.components-list {
  display: flex;
  flex-wrap: wrap;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #ddd;
    transform: scaleY(.5);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #ddd;
    transform: scaleY(.5);
  }

  &-item {
    position: relative;
    width: 33.3333%;
    text-align: center;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      width: 1px;
      background-color: #ddd;
      transform: scaleX(.5);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 1px;
      background-color: #ddd;
      transform: scaleY(.5);
    }
  }

  .link {
    display: block;
    padding: 30px 10px;
    text-decoration: none;
    color: #333;
  }
}
</style>
