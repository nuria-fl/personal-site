<template>
  <Layout>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<script>
import Layout from "~/layouts/Default";

export default {
  components: {
    Layout,
  },
  metaInfo() {
    const siteUrl =
      process.env.BRANCH == "master"
        ? process.env.URL
        : process.env.DEPLOY_URL || "http://localhost:8080";
    return {
      title: "Hi! I'm Núria",
      meta: [
        {
          name: "twitter:title",
          content: "Hi! I'm Núria",
          vmid: "twitter:title",
        },
        {
          vmid: "description",
          name: "description",
          content: "I'm a developer, working mostly on front-end.",
        },
        {
          vmid: "twitter:description",
          name: "twitter:description",
          content: "I'm a developer, working mostly on front-end.",
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: `${siteUrl}/social.png`,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
          vmid: "twitter:card",
        },
        {
          name: "twitter:site",
          content: "@nuria_codes",
          vmid: "twitter:site",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
