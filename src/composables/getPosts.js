import { ref } from "@vue/reactivity";
import axios from "axios";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await axios.get("/api/movies");
      if (data.statusText !== "OK") {
        throw Error("no data available");
      }
      posts.value = data.data;
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
