<template>
  <div>
    <h1>Timeline</h1>
    <div class="posts">
      <Post :key="post.id" v-for="post in state.posts" :post="post" />
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue';
import { onMounted, reactive } from 'vue';
export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: [],
    });

    onMounted(async () => {
      // Fetch posts
      const response = await fetch(`http://localhost:3000/posts`);
      const posts = await response.json();
      state.posts = posts;
      console.log(posts);
    });

    return {
      state,
    };
  },
  components: {
    Post,
  },
};
</script>
