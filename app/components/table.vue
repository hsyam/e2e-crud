<template>
  <div>
    <br />
    <h2>Users</h2>
    <v-data-table :headers="headers" :items="users" :items-per-page="5" class="elevation-1">
        <template v-slot:[`item.edit`]="{item}">
            <v-btn color="success" @click="editItem(item)" >Edit</v-btn>
        </template>
        <template v-slot:[`item.delete`]="{item}">
            <v-btn color="success" @click="deleteItem(item)" >Delete</v-btn>
        </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Id", value: "_id" },
        { text: "Name", value: "name" },
        { text: "Email", value: "email" },
        { text: "Password", value: "password" },
        { text: "Edit", value: "edit" },
        { text: "Delete", value: "delete" }
      ]
    };
  },
   computed: {
    users() {
      return this.$store.state.users.data;
    },
  },
  created: async function(){
    this.$store.commit(
      "users/storeData",
      ( await this.$axios.get("http://localhost:8081/api/v1/users")).data.data
    );
  },
  methods: {
    async deleteItem(user){
        await this.$axios.delete("http://localhost:8081/api/v1/users/"+user._id)
        this.$store.commit("users/storeData",(await this.$axios.get("http://localhost:8081/api/v1/users")).data.data)
    },
    async editItem(user){
        this.$store.commit("user/setId",user._id)
        this.$store.commit("user/setName",user.name)
        this.$store.commit("user/setEmail",user.email)
        this.$store.commit("user/setPassword",user.password)
    },
  }
};
</script>

<style>
</style>