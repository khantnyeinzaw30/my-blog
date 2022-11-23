<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
// import { onMounted, onUnmounted, onUpdated } from "@vue/runtime-core";
import SinglePost from "./SinglePost.vue";
export default {
  props: ["posts"],
  components: { SinglePost },
  //   setup() {
  //     // console.log(props.posts);
  //     onMounted(() => {
  //       console.log("element is mounted");
  //     });
  //     onUnmounted(() => {
  //       console.log("element is unmounted");
  //     });
  //     onUpdated(() => {
  //       console.log("element is updated");
  //     });
  //   },
};
</script>
