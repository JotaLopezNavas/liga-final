<template>
  <div id="rules">
    <b-container class="bv-example-row">
      <b-row>
        <b-col class="bordeCol">
          <div id="titRules">
      <h1>Rules of Play &amp; Policies</h1>
       <h1>Northside Youth Soccer League</h1>
       <h2>Rules of Play &amp; Policies</h2>
       <p>FIFA rules shall govern NYSL play except as modified herein.</p>
          </div>
        </b-col>
        <b-col class="borderCol">
    <div id="scrollTest">
      <Reglas></Reglas>
    </div>
    </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Reglas from '../components/Reglas.vue'

export default {
  name:'Rules',
  components:{
    Reglas
  }
}
</script>