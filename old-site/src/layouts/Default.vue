<template>
  <div>
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import AppHeader from "~/components/header";
import AppFooter from "~/components/footer";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import "~/assets/main";

footer {
  margin-top: 3em;
  padding-bottom: 2em;
}
</style>
