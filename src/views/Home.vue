<template>
  <div id="home">
    <b-container>
        <b-row>
          <b-col>
              <Fotos></Fotos>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
              <div id="container">
                <div id="pageheader">
                  <h1>Upcoming Events</h1>
                </div>
                <div id="bodycontent">
                  <div id="upcoming">
                    <h2>August 4</h2>
                    <p class="indent">NYSL Fundraiser</p>
                    <h2>August 16</h2>
                    <p class="indent">Season Kick-off: Meet the Teams</p>
                    <h2>September 1</h2>
                    <p class="indent">
                      First Game of the Season (Check Game Schedule for details)
                    </p>
                  </div>
                </div>
              </div>
          </b-col>
        </b-row>
        
    </b-container>
  </div>
</template>

<script>

import Fotos from '../components/Fotos.vue'

export default {
  name: 'home',
  components:{
    Fotos
  }
}

</script>     