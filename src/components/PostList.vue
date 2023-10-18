<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
// import { onMounted } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  setup() {
    // onMounted(() => {
    //   console.log(props.posts);
    // });
    // onUnmounted(() => {
    //   console.log("element is unmounted");
    // });
    // onUpdated(() => {
    //   console.log("element is updated");
    // });
  },
};
</script>
