<template>
  <Layout page-title="Hi! I'm Núria." page-description="I’m a developer, working mostly on front-end">
      <p>I’m a developer.</p>

      <p>I work mostly on front-end.</p>

      <p>
        Here you can take a look at my <g-link to="/projects">projects</g-link> and the <g-link to="/speaking">talks</g-link> I've given.
      </p>

      <p>
        I don't have a blog <em>*gasp*</em> but I often write in
        <a
          href="https://www.codegram.com/blog/author/nuria-soriano"
          rel="noopener noreferrer"
          >Codegram's blog</a
        >
        (that's where I work).
      </p>

      <p>
        I’m co-organizing a javascript meetup in Barcelona,
        <a href="https://www.meetup.com/js-coders/">JSCoders</a>, and another
        one in Terrassa,
        <a href="https://www.meetup.com/Full-Stack-Valles">Full Stack Vallès</a
        >.
      </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
