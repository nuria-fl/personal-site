<template>
  <footer class="footer container">
    <template v-for="link, i in links">
      <a :href="link.url" rel="noopener noreferrer nofollow" :key="link.name">{{ link.name }}</a>
      <template v-if="i < links.length - 1">&nbsp; · &nbsp;</template>
    </template>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Twitter",
          url: "https://twitter.com/pincfloit"
        },
        {
          name: "GitHub",
          url: "http://github.com/nuria-fl/"
        },
        {
          name: "Itch.io",
          url: "https://nuria.itch.io/"
        },
        {
          name: "Medium",
          url: "https://medium.com/@pincfloit"
        },
        {
          name: "Dev.to",
          url: "https://dev.to/pincfloit"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.footer {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
</style>