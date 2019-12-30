<template>
  <header class="header header--dark" :style="`backgroundImage: url(${image})`">
    <div class="container header__content">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/speaking/">Speaking</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
      </nav>
      <div>
        <h1 class="header__title">
          {{ titleParts[0] }}
          <strong>
            {{ titleParts[1] }}
          </strong>
        </h1>
        <p class="header__lead">{{ pageDescription }}</p>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: "/speaker-img.jpeg"
    },
    pageTitle: {
      type: String,
      required: true
    },
    pageDescription: {
      type: String,
      required: true
    }
  },
  computed: {
    titleParts() {
      const title = this.pageTitle.split(" ");

      return [
        title.slice(0, title.length - 1).join(" "),
        title[title.length - 1]
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

.header {
  min-height: 20rem;
  height: 45vh;
  margin-bottom: 3rem;
  padding: 2rem 0 2rem;
  background: $primary-color;
  background-size: cover;
  background-position: center 37%;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
      background: -moz-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
      background: -webkit-linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
      background: linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
  }
  &--dark {
    color: #fff;
  }
  &__content {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1;
  }
  &__title {
    margin-bottom: 0;
    font-size: 1.75rem;
    line-height: 1;
    strong {
      display: block;
      font-weight: 400;
      font-size: 3rem;
      color: $primary-color;
      background: rgba($text-color, .9);
    }
  }
  &__lead {
    margin: 1rem 0 0;
    font-size: 1.5rem;
  }
}

.nav {
  align-self: center;
  @media screen and (min-width: $mq-sm) {
    align-self: flex-end;
  }
  &__link {
    display: inline-block;
    padding: 0 .1rem;
    margin-left: 1em;
    color: #fff;
    text-decoration: none;
    background: rgba($text-color, .8);
    &:first-child {
      margin-left: 0;
    }
  }
}
</style>