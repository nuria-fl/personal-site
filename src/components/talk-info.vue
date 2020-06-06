<template>
  <div class="info">
    <h2 class="info__title"><strong>{{ talk.title }}</strong> - {{ talk.conf }}</h2>
    <small class="info__date">{{ formattedDate }}</small>
    <a class="info__link" :href="talk.video" v-if="talk.video" rel="noopener noreferrer nofollow">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z"/></svg>
      Video
    </a>
    <template v-if="talk.slides && talk.video">
      ·
    </template>
    <a class="info__link" :href="talk.slides" v-if="talk.slides" rel="noopener noreferrer nofollow">
      <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none" shape-rendering="geometricPrecision"><path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"/><path d="M12 15l5 6H7l5-6z"/></svg>
      Slides
    </a>
  </div>
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

.info {
  line-height: 1.1;
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
}
</style>