<template>
  <section class="container">
    <div>
      <h1 class="title">
        Operators
      </h1>
      <h2 class="subtitle">
        Operators.... again
      </h2>
      <ul>
        <li v-for="(post, index) in posts" :key="index">
          <NuxtLink :to="{ name: 'posts-id', params: { id: post.id } }">
            {{ post.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import axios from 'axios'

export default {
  asyncData({ req, params }) {
    // We can return a Promise instead of calling the callback
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return { posts: res.data.slice(0, 5) }
      })
  },
  head: {
    title: 'List of posts'
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
