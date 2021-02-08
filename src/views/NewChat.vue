<template>
  <v-container>
    <v-row>
      <v-col>
        <h4>Chat NYSL</h4>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div id="cuadrado">
        <div class="card">
          <div class="card-body">
            <div
              class="border pl-2 pt-1 ml-2 message-text mb-2"
              v-for="message in messages"
              :key="message"
            >
              <b-card v-bind:header="message.username"  border-variant="success" header-bg-variant="success" header-text-variant="white">
                <blockquote class="blockquote mb-0" >
                    <h6>{{ message.text }}</h6>
                    <footer  >
                     <i>{{ message.fecha }}</i>
                    </footer>
                </blockquote>
            </b-card>
            </div>
          </div>
        </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <input v-model="showMessage" type="text" class="mt-3 mr-2 pl-2 pr-2" />
        <button class="btn btn-success" @click="sendMessage">Send</button>
      </v-col>
    </v-row>
    <div class="message-body mt-3"></div>
  </v-container>
</template>

<script>
import firebase from "firebase";

export default {
  name: "App",
  data() {
    return {
      userName: "",
      name: null,
      showMessage: "",
      messages: [],
    };
  },
  methods: {
    // updateUsername() {
    //   this.name = this.userName;
    //   console.log(this.userName);
    //   this.userName = "";
    // },
    sendMessage() {
      this.name = firebase.auth().currentUser.email;
      const today = new Date();
      const date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate();
      const time =
        today.getHours() +
        ":" +
        (today.getMinutes() + 1) +
        ":" +
        today.getSeconds();
      const dateTime = date + " - " + time;

      this.datetime = dateTime;
      const message = {
        text: this.showMessage,
        username: this.name,
        datetime: this.datetime,
      };
      firebase.database().ref("messages").push(message);
      this.showMessage = "";
    },
  },
  mounted() {
    let viewMessage = this;
    const itemsRef = firebase.database().ref("messages");
    itemsRef.on("value", (snapshot) => {
      let data = snapshot.val();
      let messages = [];
      Object.keys(data).forEach((key) => {
        messages.push({
          id: key,
          username: data[key].username,
          text: data[key].text,
          fecha: data[key].datetime,
        });
      });
      viewMessage.messages = messages;
    });
  },
};
</script>