<template>
  <footer class="footer">
    <div class="container">
      <template v-for="(link, i) in links">
        <a
          :key="link.name"
          :href="link.url"
          rel="noopener noreferrer nofollow"
          >{{ link.name }}</a
        >
        <template v-if="i < links.length - 1">&nbsp; · &nbsp;</template>
      </template>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: "Twitter",
          url: "https://twitter.com/pincfloit",
        },
        {
          name: "GitHub",
          url: "http://github.com/nuria-fl/",
        },
        {
          name: "Itch.io",
          url: "https://nuria.itch.io/",
        },
        {
          name: "Medium",
          url: "https://medium.com/@pincfloit",
        },
        {
          name: "Dev.to",
          url: "https://dev.to/pincfloit",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: 4rem;
  padding: 1rem 0;
  background: $background-dark-color;
  color: #fff;
  text-align: center;
}

.container {
  font-size: 1rem;
}

a {
  color: #fff;
  &:hover {
    color: $text-color;
  }
}
</style>
