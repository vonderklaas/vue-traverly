<template>
  <div class="post">
    <p>Title: {{ timelinePost.title }}</p>
    <p>
      Author:
      <router-link
        :to="{ name: 'User', params: { id: timelinePost.authorId } }"
        >{{ timelinePost.author }}</router-link
      >
    </p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Post',
  props: ['post'],
  setup(props) {
    const timelinePost = ref(props.post);

    return {
      timelinePost,
    };
  },
};
</script>

<style lang="scss" scoped>
.post {
  background-color: #fff;
  padding: 15px;
  margin: 15px;
}
</style>
