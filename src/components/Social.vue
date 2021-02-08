<template>
  <div id="social">
    <p class="card-text">Find us on our social networks.</p>
    <a v-bind:href='$store.getters.facebook'
      ><b-icon
        class="rrss"
        icon="facebook"
        font-scale="2"
        style="color: #3b5998"
      ></b-icon></a
    >&nbsp;
    <a v-bind:href='$store.getters.instagram'
      ><b-icon
        class="rrss"
        icon="instagram"
        font-scale="2"
        style="color: #8134af"
      ></b-icon></a
    >&nbsp;
    <a
      v-bind:href='$store.getters.youtube'
      ><b-icon
        class="rrss"
        icon="youtube"
        font-scale="2"
        style="color: red"
      ></b-icon></a
    >&nbsp;
    <a v-bind:href='$store.getters.twitter'
      ><b-icon class="rrss" icon="twitter" font-scale="2"></b-icon></a
    >&nbsp;
  </div>
</template>