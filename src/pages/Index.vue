<template>
  <div>
    <section class="container hero">
      <div>
        <transition name="hero-logo">
          <HeroLogo v-show="showLogo" />
        </transition>
      </div>
      <div>
        <h1 class="hero__title">Hi!<br />I'm <strong>Núria</strong>.</h1>
        <h2 class="hero__title hero__title--sub">
          I’m a developer,<br />working mostly on <strong>front-end</strong>.
        </h2>
      </div>
    </section>

    <div class="separator">
      <hr />
    </div>

    <section class="container container--sm">
      <h2>About me</h2>

      <p>
        I’m currently working as a Tech Lead at
        <a
          href="https://www.meetup.com/js-coders/"
          rel="noopener noreferrer nofollow"
          >Codegram</a
        >. I love CSS, JavaScript and Vue.js, but I also like to meddle with
        back-end stuff, from Node to Rust and currently learning Elixir.
      </p>

      <p>
        I don't have a blog <em>*gasp*</em> but I often write in
        <a
          href="https://www.codegram.com/blog/author/nuria-soriano"
          rel="noopener noreferrer nofollow"
          >Codegram's blog</a
        >
        (that's where I work).
      </p>

      <p>
        I like to attend, organize and speak at meetups and conferences. You can
        take a look at the <g-link to="/speaking">talks</g-link> I've given so
        far. I’m co-organizing a javascript meetup in Barcelona,
        <a
          href="https://www.meetup.com/js-coders/"
          rel="noopener noreferrer nofollow"
          >JSCoders</a
        >, and another one in Terrassa,
        <a
          href="https://www.meetup.com/Full-Stack-Valles"
          rel="noopener noreferrer nofollow"
          >Full Stack Vallès</a
        >.
      </p>

      <p>
        On the personal side, I love food, craft beer and playing videogames. I
        sometimes develop games too, you can check them
        <g-link to="/projects">here</g-link>.
      </p>
    </section>
  </div>
</template>

<script>
import HeroLogo from "~/components/hero-logo";

export default {
  components: {
    HeroLogo,
  },
  metaInfo: {
    title: "Home",
    description: "I’m a developer, working mostly on front-end",
  },
  data() {
    return {
      showLogo: false,
    };
  },
  mounted() {
    this.showLogo = true;
  },
  beforeRouteLeave(to, from, next) {
    this.showLogo = false;
    this.$nextTick(() => {
      return next();
    });
  },
};
</script>

<style lang="scss" scoped>
.separator {
  margin: 4.8rem 0;
  display: flex;
  justify-content: center;
  hr,
  &:before,
  &:after {
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    margin: 0 0.325rem;
  }
  &:before,
  &:after {
    content: "";
    background: $secondary-color;
  }
  hr {
    border: none;
    background: $primary-color;
  }
}

.hero {
  @media screen and (min-width: $mq-md) {
    display: flex;
    justify-content: space-between;
  }
  /deep/ svg {
    transition: all 0.7s;
  }
  /deep/ circle {
    transition: all 0.7s;
    transform-origin: 70% 70%;
    transform: scale(1);
    &:last-child {
      transition-delay: 0.3s;
    }
  }
  &__title {
    font-size: 3rem;
    line-height: 1;
    padding-left: 1rem;
    strong {
      font-weight: 400;
      color: $primary-text-color;
    }
    &--sub {
      line-height: 1.2;
      font-size: 2.25rem;
    }
  }
}

.hero-logo-enter-active,
.hero-logo-leave-active {
  visibility: visible;
  /deep/ circle {
    transform: scale(1);
  }
}
.hero-logo-enter,
.hero-logo-leave-to {
  visibility: hidden;
  /deep/ circle {
    transform: scale(0);
  }
}
</style>
