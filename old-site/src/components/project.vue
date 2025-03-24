<template>
  <section class="project" :class="{ 'project--featured': featured }">
    <a
      class="project__hero"
      :href="project.link"
      rel="nofollow noopener noreferrer"
    >
      <g-image :src="project.image" :alt="project.title" />
    </a>
    <div class="project__info">
      <h3 class="project__title">{{ project.title }}</h3>
      <div v-html="project.content"></div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.project {
  margin-bottom: 1.5rem;
  &__hero {
    img {
      display: block;
      width: 100%;
    }
  }
  &__title {
    margin: 1rem 0 0.75rem;
  }
  /deep/ p {
    margin: 0;
  }
  @media screen and (min-width: $mq-md) {
    &--featured {
      position: relative;
      height: 30rem;
      overflow: hidden;
      .project__info {
        height: 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 1.25rem;
        color: #fff;
        background: rgb(0, 0, 0);
        background: -moz-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        background: -webkit-linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0.6) 0%,
          rgba(0, 0, 0, 0) 100%
        );
      }
      /deep/ a {
        color: #fff;
      }
      img {
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
