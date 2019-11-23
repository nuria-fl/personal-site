<template>
  <div class="layout">
    <header class="header">
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/speaking/">Speaking</g-link>
        <g-link class="nav__link" to="/projects/">Projects</g-link>
      </nav>
    </header>
    <slot/>
    <footer>
        <a href="https://twitter.com/pincfloit">Twitter</a>
        ·
        <a href="http://github.com/nuria-fl/">Github</a>
        ·
        <a href="https://nuria.itch.io/">Itch.io</a>
        ·
        <a href="https://medium.com/@pincfloit">Medium</a>
        ·
        <a href="https://dev.to/pincfloit">Dev.to</a>
      </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
@import "~/assets/main";

.layout {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  padding-top: 3.5em;
  font-size: 1.3em;
}

.header {
  display: flex;
  justify-content: flex-end
}

.nav {
  &__link {
    display: inline-block;
    margin-left: 1em;
  }
}

h1 {
  font-size: 1.6em;
  font-weight: 400;
}
h2 {
  font-size: 1.2em;
  font-weight: 400;
}

footer {
  margin-top: 3em;
  padding-bottom: 2em;
}

</style>
