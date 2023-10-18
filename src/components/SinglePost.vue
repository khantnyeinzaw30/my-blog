<template>
  <div class="post card">
    <router-link :to="{ name: 'details', params: { id: post.id } }">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span> #{{ post.tags }} </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.summary.substr(0, 100) + "...";
    });
    return { snippet };
  },
};
</script>

<style>
.post {
  border: 1px solid #378783;
  border-radius: 20px;
  padding: 20px;
  margin: 5px 0;
}

.post a {
  text-decoration: none;
  color: #000;
}
</style>
