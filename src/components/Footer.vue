<template>
    <div class="card text-center">
  <div class="card-header">
    {{$store.getters.titFooter}}
  </div>
  <div class="card-body" >
    <h5 class="card-title">Let's play!</h5>
    <Social></Social>
  </div>
</div>
</template>

<script>
import Social from './Social.vue'

export default {
  name:'Footer',
  components:{
    Social,
  }
}
</script>