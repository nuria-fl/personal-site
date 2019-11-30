<template>
  <Layout page-title="Hi! I have a few projects.">
    <p>In my free time I like to develop videogames.</p>

    <section>
      <h2>My games</h2>
      <div class="games">
        <section v-for="game in games" :key="game.title" class="games__item">
          <a :href="game.link" rel="nofollow noopener noreferrer">
            <g-image :src="game.image" :alt="game.title" />
          </a>
          <h3>{{ game.title }}</h3>
          <div v-html="game.content"></div>
        </section>
      </div>
    </section>

    <section>
      <h2>Game Jams</h2>
      <p>Smaller, quicker projects, developed in a couple of days.</p>
      <div class="gamejams">
        <section v-for="game in gamejams" :key="game.title">
          <a :href="game.link" rel="nofollow noopener noreferrer">
            <g-image :src="game.image" :alt="game.title" />
          </a>
          <h3>{{ game.title }}</h3>
          <div v-html="game.content"></div>
        </section>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query {
  projects: allProject {
    edges {
      node {
        title
        image(width:800, height: 500, quality: 100)
        category
        content
        link
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Projects"
  },
  computed: {
    projectsList() {
      return this.$page.projects.edges.map(e => e.node);
    },
    gamejams() {
      return this.projectsList.filter(
        project => project.category === "gamejam"
      );
    },
    games() {
      return this.projectsList.filter(project => project.category === "game");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

img {
  max-width: 100%;
}

.games {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
  :first-child {
    grid-column: 1 / 3;
  }
}
.gamejams {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1rem;
}
</style>