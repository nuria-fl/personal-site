<template>
  <Layout page-title="Hi! I’m a speaker" page-description="I like to speak at meetups and conferences">
    <ul class="talks">
      <li v-for="talk in talksList" :key="`${talk.conf}-${talk.title}`" class="talks__item">
        <a  class="talks__thumb talks__thumb--video" :href="talk.video" v-if="talk.video" :style="`background-image: url(${talk.image.src})`" :aria-label="`Play video of ${talk.title}`">
          <svg class="talks__play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.999 41.999"><path d="M36.068 20.176l-29-20A1 1 0 005.5.999v40a1 1 0 001.568.823l29-20a.999.999 0 000-1.646z"/></svg>
        </a>
        <span v-else class="talks__thumb" :style="`background-image: url(${talk.image.src})`">
        </span>
        <div>
          <h2 class="talks__title"><strong>{{ talk.title }}</strong> - {{ talk.conf }}</h2>
          <small class="talks__date">{{ talk.date }}</small>
          <a  class="talks__link" :href="talk.video" v-if="talk.video">▶️ Video</a>
          <template v-if="talk.slides && talk.video">
            |
          </template>
          <a  class="talks__link" :href="talk.slides" v-if="talk.slides">🖥 Slides</a>
        </div>
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
        image(width: 100, quality: 100)
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
    display: flex;
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
  &__thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
    margin-right: 1rem;
    border-radius: 50%;
    background-size: cover;
    filter: grayscale(100%);
    box-shadow: 0 0 0 .2rem transparent;
    &--video {
      position: relative;
      transition: all .3s;
      &:hover {
        filter: grayscale(0%);
        box-shadow: 0 0 0 .2rem $primary-color;
      }
      img {
        // filter: none;
      }
    }
  }
  &__play {
    width: 2rem;
    height: 2rem;
    fill: #fff;
    opacity: .7;
    // position: absolute;
    // top: 0;
    // left: 0;
    // transform: translate(-50%,-50%);
    // fill: #fff;
    // opacity: .5;
  }
}
</style>