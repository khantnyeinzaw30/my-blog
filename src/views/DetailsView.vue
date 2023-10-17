<template>
  <div class="post" v-if="post">
    <h2>{{ post.title }} - {{ post.author }}</h2>
    <p>{{ post.summary }}</p>
    <h5>Comments</h5>
    <ul>
      <li v-for="comment in post.comments" :key="comment.id">
        {{ comment.comment_text }} By {{ comment.commenter_name }}
      </li>
    </ul>
  </div>
</template>

<script>
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();
    return { post, error };
  },
};
</script>
