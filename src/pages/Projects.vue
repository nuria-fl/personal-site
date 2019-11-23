<template>
  <Layout>
    <h1>Projects</h1>
    <p>In my free time I like to develop videogames.</p>

    <section>
      <h2>My games</h2>
      <p>
      I’ve been developing a survival game called
        <a href="https://nuria-live.netlify.com/">Live</a>, and I'm currently
        working on a bigger project codenamed
        <a
          href="https://medium.com/@pincfloit/game-development-diary-i-32dd6a4021ef"
          rel="noopener noreferrer"
          >Radio Liberty</a
        >. I'm also learning Rust and porting Live to a
        <a
          href="https://github.com/codegram/live-rust"
          rel="noopener noreferrer"
          >CLI Rust game!</a
        >
      </p>
    </section>

    <section>
      <h2>Game Jams</h2>
      <p>Smaller, quicker projects, developed in a couple of days.</p>
      <ul>
        <li v-for="game in gamejams" :key="game.name">
          <a :href="game.link" rel="noopener noreferrer">{{ game.name }}</a>,
          {{ game.jam }} ({{ game.date}})
        </li>
      </ul>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Projects"
  },
  data() {
    return {
      gamejams: [
        {
          name: "Rewrite",
          link: "https://beagleknight.itch.io/rewrite",
          jam: "GameJamTopia",
          date: "June 2019"
        },
        {
          name: "Eurobattle",
          link: "https://nuria.itch.io/eurobattle",
          jam: "TodasJammers",
          date: "February 2018"
        },
        {
          name: "Newbie God",
          link: "https://nuria.itch.io/newbie-god",
          jam: "Ludum Dare 38",
          date: "April 2017"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/variables";

</style>