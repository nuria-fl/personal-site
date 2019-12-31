<template>
  <Layout page-title="Hi! I'm Núria." page-description="I’m a developer, working mostly on front-end">
      <h2>About me</h2>

      <p>
        I love JavaScript and Vue.js. Recently I've started learning Rust and I love it because it's super weird and difficult.
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
        I like to attend, organize and speak at meetups and conferences. You can take a look at the <g-link to="/speaking">talks</g-link> I've given so far. I’m co-organizing a javascript meetup in Barcelona,
        <a href="https://www.meetup.com/js-coders/" rel="noopener noreferrer nofollow">JSCoders</a>, and another
        one in Terrassa,
        <a href="https://www.meetup.com/Full-Stack-Valles" rel="noopener noreferrer nofollow">Full Stack Vallès</a
        >.
      </p>

      <p>
        On the personal side, I love food, craft beer and playing videogames. I sometimes develop games too, you can check them <g-link to="/projects">here</g-link>.
      </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home",
    description: "I’m a developer, working mostly on front-end"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
