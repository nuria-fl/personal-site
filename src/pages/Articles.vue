<template>
  <section class="container">
    <h1>Articles</h1>
    <article v-for="article in articles" :key="article.id" class="article">
      {{ article.readable_publish_date }}
      <h2>
        <a :href="article.canonical_url">
          {{ article.title }}
        </a>
      </h2>
      Tags: {{ article.tags }}
    </article>
  </section>
</template>

<page-query>
{
  allArticle {
    edges {
      node {
        id
        title
        published_at
        tags
        canonical_url
        readable_publish_date
        organization {
          name
        }
      }
    }
  }
}
</page-query>

<script>
export default {
  computed: {
    articles() {
      return this.$page.allArticle.edges.map((e) => e.node).reverse();
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: var(--title-size);
  margin-bottom: 2rem;
}
.article {
  padding: 2rem 0;
  border-bottom: 1px solid $secondary-color;
  font-size: 1rem;
  h2 {
    margin: 0.8rem 0;
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 1.1;
  }
  a {
    border-bottom: none;
    &:hover {
      background: transparent;
      color: $primary-text-color;
      // h2 span {
      //   background: $primary-color;
      // }
    }
  }
}
</style>
