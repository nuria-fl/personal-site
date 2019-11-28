<template>
  <Layout page-title="Hi! I’m a speaker">
    <p>I sometimes speak at meetups and conferences.</p>

    <ul class="events">
      <li v-for="event in events" :key="`${event.name}-${event.talk}`" class="events__item">
        <h2 class="events__title"><strong>{{ event.talk }}</strong> - {{ event.name }}</h2>
        <small class="events__date">{{ event.date }}</small>
        <a  class="events__link" :href="event.slides" v-if="event.slides">🖥 Slides</a>
        <template v-if="event.slides && event.video">
          |
        </template>
        <a  class="events__link" :href="event.video" v-if="event.video">▶️ Video</a>
      </li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Speaking"
  },
  data() {
    return {
      events: [
        {
          name: "AdaJS",
          date: "November 2019",
          talk: "De JS a Rust: las otras razones",
          slides: "https://from-js-to-rust.netlify.com/"
        },
        {
          name: "DevFest Alicante",
          date: "November 2019",
          talk: "Videojuegos con JavaScript: Lessons learned",
          slides:
            "https://drive.google.com/open?id=1adQj93kDXWIZbva3jkea-CP6S4b6_X8m",
          video: ""
        },
        {
          name: "Modern Web",
          date: "November 2019",
          talk: "Videojuegos con JavaScript: Lessons learned",
          slides:
            "https://drive.google.com/open?id=19rKHcfrFYcTC7N1s794tcPQp37WLZU_z",
          video: ""
        },
        {
          name: "Barcelona Software Crafters",
          date: "October 2019",
          talk: "Videojuegos con JavaScript: Lessons learned",
          slides:
            "https://drive.google.com/open?id=1vV2dI821Y7FVbBXYmBJmQr79IHS8PfBx",
          video: "https://www.youtube.com/watch?v=xlrfygeajjw"
        },
        {
          name: "WTM Barcelona",
          date: "April 2019",
          talk: "Videojuegos con Vue: Lessons learned",
          slides:
            "https://drive.google.com/open?id=0B-TnCw8EHqHWdDRvQ1JOZlFxM01XS09qSkhmcXFjZlpQWWFn",
          video: "https://www.youtube.com/watch?v=K13DFYOCaC4"
        },
        {
          name: "JS Coders",
          date: "September 2018",
          talk: "Vue.js",
          slides: "https://slides.com/nuria-fl/vue-js-1-3"
        },
        {
          name: "AdaJS",
          date: "June 2017",
          talk: "Introducción a Vue",
          slides: "https://slides.com/nuria-fl/vuejs-ada"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

.events {
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