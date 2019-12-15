<template>
  <Layout page-title="Hi! I have a few projects." page-description="I like to develop videogames in my free time" image="/projects-img.jpeg">
    <section>
      <h2>My games</h2>
      <div class="projects projects--main">
        <Project v-for="game, i in games" :key="game.title" :project="game" :featured="i === 0" />
      </div>
    </section>

    <section>
      <h2>Game Jams</h2>
      <p>Smaller, quicker projects, developed in a couple of days.</p>
      <div class="projects">
        <Project v-for="game in gamejams" :key="game.title" :project="game" />
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
        image(width:800, height: 550, quality: 100)
        category
        content
        link
      }
    }
  }
}
</page-query>

<script>
import Project from "~/components/project";

export default {
  metaInfo: {
    title: "Projects",
    description: "I like to develop videogames in my free time"
  },
  components: {
    Project
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

.projects {
  @media screen and (min-width: $mq-sm) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    &--main {
      :first-child {
        grid-column: 1 / 3;
      }
    }
  }
}

</style>