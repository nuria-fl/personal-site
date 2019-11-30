<template>
  <Layout page-title="Hi! I’m a speaker" page-description="I like to speak at meetups and conferences">
    <ul class="talks">
      <li v-for="talk in talksList" :key="`${talk.conf}-${talk.title}`" class="talks__item">
        <h2 class="talks__title"><strong>{{ talk.title }}</strong> - {{ talk.conf }}</h2>
        <small class="talks__date">{{ talk.date }}</small>
        <a  class="talks__link" :href="talk.slides" v-if="talk.slides">🖥 Slides</a>
        <template v-if="talk.slides && talk.video">
          |
        </template>
        <a  class="talks__link" :href="talk.video" v-if="talk.video">▶️ Video</a>
      </li>
    </ul>
  </Layout>
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
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Speaking"
  },
  computed: {
    talksList() {
      return this.$page.talks.edges.map(e => e.node);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

.talks {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid rgba($text-color, .5);
  &__item {
    padding: 1rem;
    border-bottom: 1px solid rgba($text-color, .5);
    font-size: 1rem;
  }
  &__title {
    margin: 0 0 .5em;
    font-size: 1.2rem;
  }
  &__date {
    display: block;
    font-size: .85rem;
    margin-bottom: 0.6rem;
  }
  &__link {
    text-decoration: none;
  }
}
</style>