<template>
  <div class="post mx-5" v-if="post">
    <h2>{{ post.title }} - {{ post.author }}</h2>
    <p>{{ post.summary }}</p>
    <h3>Comments</h3>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action flex-column align-items-start list-group-item-danger"
        v-for="comment in post.comments"
        :key="comment.id"
      >
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ comment.commenter_name }}</h5>
          <button
            class="btn btn-outline-primary"
            @click="editComment(comment.id)"
          >
            Edit
          </button>
        </div>
        <p class="mb-1">{{ comment.comment_text }}</p>
        <small>{{ comment.commenter_email }}</small>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from "vue";
import getPost from "../composables/getPost";
export default {
  props: ["id"],
  setup(props) {
    const commentText = ref("");
    const { post, error, load } = getPost(props.id);
    load();

    const editComment = (id) => {
      console.log("edit comment" + id);
    };
    return { post, error, commentText, editComment };
  },
};
</script>
