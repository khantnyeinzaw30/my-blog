<template></template>

<script setup>
import axios from "axios";
import { ref } from "vue";

const email = ref("");
const password = ref("");
const error = ref(null);

const login = async () => {
  try {
    let data = await axios.post("/api/login");
    console.log(data);
  } catch (err) {
    console.log(err);
    error.value = data.errors;
  }
};
</script>
