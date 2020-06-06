<template>
  <section class="featured-talk">
    <div class="featured-talk__video">
      <iframe
        src="https://www.youtube.com/embed/B8B5ZVnPvRU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <TalkInfo :talk="talk" />
  </section>
</template>

<script>
import TalkInfo from "~/components/talk-info";

export default {
  components: {
    TalkInfo,
  },
  props: {
    talk: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.featured-talk {
  margin-bottom: 3rem;
  &__video {
    position: relative;
    padding-top: 56%;
    margin-bottom: 1rem;
    background: $secondary-color;
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
}

iframe {
  width: 100%;
}
</style>
