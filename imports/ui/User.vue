<template>
  <div>
    <table>
      <tr>
        <td>ID</td>
        <td>Name</td>
      </tr>
      <tr v-for="(it, idx) in users" :key="idx">
        <td>{{ it._id }}</td>
        <td class="pl-5">{{ it.name }}</td>
      </tr>
    </table>

    <form>
      <input v-model="form.name" type="text" label="Name" />
      <button type="submit" @click.prevent="onSubmit">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { subscribe, autorun } from "vue-meteor-tracker";
import { onMounted, ref } from "vue";
import { Meteor } from "meteor/meteor";

const users = ref([]);

const form = ref({
  name: null,
});

function resetForm() {
  form.value.name = null;
}

function initData() {
  Meteor.call("category.find", (err, result) => {
    if (result) {
      users.value = result;
    }
    if (err) {
      console.log(err);
    }
  });
}

function createData() {
  Meteor.call("category.insert", form.value, (err, result) => {
    if (result) {
      initData();

      resetForm();
    }
    if (err) {
      console.log(err);
    }
  });
}

onMounted(async () => {
  initData();
});

function onSubmit() {
  createData();
}
</script>

<style lang="scss" scoped></style>
