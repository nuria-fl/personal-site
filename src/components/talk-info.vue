<template>
  <div class="info">
    <h2 class="info__title"><strong>{{ talk.title }}</strong> - {{ talk.conf }}</h2>
    <small class="info__date">{{ formattedDate }}</small>
    <a class="info__link" :href="talk.video" v-if="talk.video" rel="noopener noreferrer nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" fill="currentColor"/></svg>
      Video
    </a>
    <template v-if="talk.slides && talk.video">
      ·
    </template>
    <a class="info__link" :href="talk.slides" v-if="talk.slides" rel="noopener noreferrer nofollow">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" fill="currentColor"/></svg>
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