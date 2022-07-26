<template>
  <v-row>
    <v-col>
        <Form />
    </v-col>
    <v-col>
        <Table />
    </v-col>
  </v-row>
</template>

<script>
import Table from '../components/table.vue';
import Form from '../components/form.vue';
export default {
    components: { Table, Form }
}
</script>

<style>

</style>