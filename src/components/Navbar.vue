<template>
<div>
  <b-navbar toggleable="sm" type="dark" variant="success">

    <b-navbar-brand to="/">{{$store.getters.titNavbar}}</b-navbar-brand>
  <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>
   <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item to="/home"><b-icon icon="house-door-fill"></b-icon> Home</b-nav-item>
        <b-nav-item to="/about"><b-icon icon="question-circle-fill"></b-icon> About</b-nav-item>
        <b-nav-item to="/contact"><b-icon icon="chat-text-fill"></b-icon> Contact</b-nav-item>
        <b-nav-item to="/info"><b-icon icon="exclamation-circle-fill"></b-icon> Info</b-nav-item>
        <b-nav-item to="/registration"><b-icon icon="input-cursor-text"></b-icon> Registration</b-nav-item>
        <b-nav-item to="/rules"><b-icon icon="layout-text-sidebar-reverse"></b-icon> Rules</b-nav-item>
        <!-- <b-nav-item to="/login"><b-icon icon="door-open"></b-icon> Log in</b-nav-item> -->
        <!-- <b-nav-item ><b-icon icon="door-open"></b-icon><a class="nav-link" @click.prevent="signOut">Log out</a></b-nav-item> -->
        <b-nav-item-dropdown id="my-nav-dropdown" text="Users" toggle-class="nav-link-custom"  right>
     
                <b-dropdown-item  v-if="!$store.getters.user.loggedIn" to="/login"><b-icon icon="door-open"></b-icon> Log in</b-dropdown-item>
                
            <template v-if="$store.getters.user.loggedIn" class="inLogger">
            
                <b-dropdown-item to="/chat"><i class="bi bi-chat-right-dots"></i>Chat</b-dropdown-item>
                <b-dropdown-divider ></b-dropdown-divider>
                <b-dropdown-item  @click.prevent="signOut" ><b-icon icon="door-open"></b-icon>Log out   </b-dropdown-item>
            </template>          
          </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";
export default {
  computed: {
    ...mapGetters({
// map `this.user` to `this.$store.getters.user`
      user: "user"
    })
  },
  methods: {
    signOut() {
      firebase
        .auth()
        .signOut()
        .then(() => {
                this.$swal({  
                type: 'info',  
                title: 'Log out',  
                text: 'Come back soon!'  
            }); 
          this.$router.push('Home') 

        });
    }
  }
};
</script>