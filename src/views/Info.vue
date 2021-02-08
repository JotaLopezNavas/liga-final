<template>
<div>
<b-container>
  <b-row>
    <b-col class="ocultable">
      <div>
          <div id="porMes">
          <b-button @click="showS = !showS" class="mb-2" variant="success">September</b-button>&nbsp;
          <b-button @click="showO = !showO" class="mb-2" variant="info">October</b-button>&nbsp;
          </div>
          <Teams></Teams>
      </div>

    </b-col>
    <b-col>
        <div id="infotable">

         <div v-if="showS">
            <TablaSep></TablaSep>
        </div>
        <div  v-if="showO">
            <TablaOct></TablaOct>
      </div>
    </div>

    </b-col>
  </b-row>
   <b-row>
          <b-col>
            <div id="bodycontent">
              <h2><em>Fall Schedule</em></h2>
              <p class="announcement">*All games take place on Saturday</p>

              <p><br /><strong>Facility Type:</strong> Outdoor</p>
              <p>
                <strong>Additional Information:</strong> If deemed necessary by
                NYSL, games may be shortened or cancelled due to extreme weather
                conditions.
              </p>
              <p>
                <strong>Please direct all questions to:</strong> Michael
                Randall, League Coordinator
              </p>
              <address>
                <p>
                  <span style="float: left"
                    ><strong>Phone:</strong> (630) 690-8132</span
                  >
                </p>
                <p style="text-align: right">
                  <strong>Email:</strong>
                  <a href="mailto:michael.randall@chisoccer.org"
                    >michael.randall@chisoccer.org</a
                  >
                </p>
              </address>
            </div>
          </b-col>
        </b-row>
</b-container>
</div>

</template>

<script>
import TablaSep from '../components/TablaSep.vue';
import TablaOct from '../components/TablaOct.vue';
import Teams from '../components/Teams.vue'

export default {
  data () {
    return {
      showS: true,
      showO: true,
     
      isVisible: false
    }
  },
  methods: {
    handleVisibility (isVisible) {
      this.isVisible = isVisible
    }
  },
  name:'Info',
  components:{
    TablaSep,
    TablaOct,
    Teams,
  }
}
</script>


