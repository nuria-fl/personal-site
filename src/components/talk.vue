<template>
  <section class="talk">
    <a class="talk__thumb talk__thumb--video" :href="talk.video" v-if="talk.video" :style="`background-image: url(${talk.image.src})`" :aria-label="`Play video of ${talk.title}`">
      <svg class="talk__play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41.999 41.999"><path d="M36.068 20.176l-29-20A1 1 0 005.5.999v40a1 1 0 001.568.823l29-20a.999.999 0 000-1.646z"/></svg>
    </a>
    <span v-else class="talk__thumb" :style="`background-image: url(${talk.image.src})`">
    </span>
    <div>
      <h2 class="talk__title"><strong>{{ talk.title }}</strong> - {{ talk.conf }}</h2>
      <small class="talk__date">{{ formattedDate }}</small>
      <a class="talk__link" :href="talk.video" v-if="talk.video">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/></svg>
        Video
      </a>
      <template v-if="talk.slides && talk.video">
        ·
      </template>
      <a class="talk__link" :href="talk.slides" v-if="talk.slides">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/></svg>
        Slides
      </a>
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
  padding: 1rem 0;
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
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    text-decoration: none;
    svg {
      width: 1rem;
      margin-right: .3rem;
    }
  }
  &__thumb {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 6rem;
    height: 6rem;
    margin-right: 1rem;
    border-radius: 50%;
    background-size: cover;
    filter: grayscale(100%);
    box-shadow: 0 0 0 .2rem transparent;
    border: none;
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