<template>
  <div class="container">
    <h1>Speaking</h1>
    <FeaturedTalk :talk="featured" />

    <ul class="talks">
      <li
        v-for="talk in talksList"
        :key="`${talk.conf}-${talk.title}`"
        class="talks__item"
      >
        <Talk :talk="talk" />
      </li>
    </ul>
  </div>
</template>

<page-query>
query {
  talks: allTalk {
    edges {
      node {
        title
        conf
        date
        slides
        video
        featured
        image(width: 100, quality: 100)
      }
    }
  }
}
</page-query>

<script>
import FeaturedTalk from "~/components/featured-talk";
import Talk from "~/components/talk";

export default {
  metaInfo: {
    title: "Speaking",
  },
  components: {
    Talk,
    FeaturedTalk,
  },
  computed: {
    talks() {
      return this.$page.talks.edges.map((e) => e.node);
    },
    talksList() {
      return this.talks.filter((talk) => !talk.featured);
    },
    featured() {
      return this.talks.find((talk) => talk.featured);
    },
  },
};
</script>

<style lang="scss" scoped>
.talks {
  list-style: none;
  margin: 0;
  padding: 0;
}
h1 {
  font-size: var(--title-size);
}
</style>
