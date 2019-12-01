<template>
  <section class="talk">
  <a  class="talk__thumb talk__thumb--video" :href="talk.video" v-if="talk.video" :style="`background-image: url(${talk.image.src})`" :aria-label="`Play video of ${talk.title}`">
        <svg class="talk__play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.999 41.999"><path d="M36.068 20.176l-29-20A1 1 0 005.5.999v40a1 1 0 001.568.823l29-20a.999.999 0 000-1.646z"/></svg>
      </a>
      <span v-else class="talk__thumb" :style="`background-image: url(${talk.image.src})`">
      </span>
      <div>
        <h2 class="talk__title"><strong>{{ talk.title }}</strong> - {{ talk.conf }}</h2>
        <small class="talk__date">{{ formattedDate }}</small>
        <a  class="talk__link" :href="talk.video" v-if="talk.video">▶️ Video</a>
        <template v-if="talk.slides && talk.video">
          |
        </template>
        <a  class="talk__link" :href="talk.slides" v-if="talk.slides">🖥 Slides</a>
      </div>
  </section>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    talk: {
      type: Object,
      required: true
    }
  },
  computed: {
    formattedDate() {
      return dayjs(this.talk.date).format("MMMM YYYY");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

.talk {
  display: flex;
  padding: 1rem;
  border-bottom: 1px solid rgba($text-color, .2);
  font-size: 1rem;
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
    }
  }
  &__play {
    width: 2rem;
    height: 2rem;
    fill: #fff;
    opacity: .7;
  }
}
</style>