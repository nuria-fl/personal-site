<template>
  <header class="header">
    <div class="container header__content">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/speaking/">Speaking</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
      </nav>
      <h1>
        {{ titleParts[0] }}
        <strong>
          {{ titleParts[1] }}
        </strong>
      </h1>

    </div>
  </header>
</template>

<script>
export default {
  props: {
    // image: {
    //   type: String,
    //   required: true
    // },
    pageTitle: {
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
  min-height: 10rem;
  height: 35vh;
  padding: 2rem 0;
  background: rgba($text-color, .3);
  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}

.nav {
  align-self: flex-end;
  &__link {
    display: inline-block;
    margin-left: 1em;
  }
}

h1 {
  margin-bottom: 0;
  font-size: 20px;
  strong {
    display: block;
    font-weight: 400;
    font-size: 40px;
  }
}
</style>