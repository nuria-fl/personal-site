<template>
  <div>
    <AppHeader :pageTitle="pageTitle" />
    <main class="container">
      <slot/>
    </main>
    <footer class=container>
        <a href="https://twitter.com/pincfloit">Twitter</a>
        ·
        <a href="http://github.com/nuria-fl/">Github</a>
        ·
        <a href="https://nuria.itch.io/">Itch.io</a>
        ·
        <a href="https://medium.com/@pincfloit">Medium</a>
        ·
        <a href="https://dev.to/pincfloit">Dev.to</a>
      </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import AppHeader from "~/components/header";

export default {
  props: {
    // image: {
    //   type: String,
    //   required: true
    // },
    pageTitle: {
      type: String,
      required: true
    }
  },
  components: {
    AppHeader
  }
};
</script>

<style lang="scss">
@import "~/assets/main";

footer {
  margin-top: 3em;
  padding-bottom: 2em;
}

</style>
