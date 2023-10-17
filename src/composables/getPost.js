import { ref } from "@vue/reactivity";
import axios from "axios";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await axios.get("/api/movies/" + id);

      if (data.statusText !== "OK") {
        throw Error("NO POST MATCHED");
      }
      post.value = data.data.data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
