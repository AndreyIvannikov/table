<template>
  
  <nav>
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center"><slot></slot></a>
      <ul class="left hide-on-med-and-down">
        <li v-for="key in menu">
          <a href="#">{{ key }}</a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
  export default {
    name: "navbar",
    data() {
      return {
        menu: ['Home', 'About us', 'Contacts', 'Action']

      }
    }
  }
</script>

<style scoped>

</style>
