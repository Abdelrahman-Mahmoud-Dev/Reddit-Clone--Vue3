<template>
  <div class="posts mt-3">
    <div class="d-flex position-relative m-3" v-for="post in posts" :key="post">
      <img :src="post.data.thumbnail" class="flex-shrink-0 me-3" alt="" />
      <div>
        <span class="mt-0 mb-1 d-block"><a 
                        :href="createLink(post.data.permalink)" 
                        target="_blank">
            {{ post.data.title }}
            </a>
        </span>
        <h3 class="text-danger">{{ post.data.ups }}⬆</h3>
        <p>created {{formatData(post.data.created_utc)}} by {{post.data.author}}</p>
        <p>
          <span class="badge rounded-pill bg-secondary"
            >{{ post.data.num_comments }} comments</span
          >
        </p>

       
      </div>
    </div>
  </div>
</template>


<script>
import {formatDistance} from "date-fns";

export default {
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    formatData(data) {
        
        return formatDistance(new Date().getTime() , data * 1000);
    },
    loadPosts() {
   
      const url = `https://www.reddit.com/.json`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.data.children);
          this.posts = data.data.children;
        });
    },
    createLink(link) {
        return `https://www.reddit.com${link}`;
    },

  },
  mounted() {
    this.loadPosts();
  },
};
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
}
</style>