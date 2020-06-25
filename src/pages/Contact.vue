<template>
  <section class="container container--sm">
    <h1>Contact</h1>
    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label
          >Name: <input class="input" type="text" name="name" required
        /></label>
      </p>
      <p>
        <label
          >Email: <input class="input" type="email" name="email" required
        /></label>
      </p>
      <p>
        <label
          >Message:
          <textarea class="input" name="message" required></textarea>
        </label>
      </p>
      <p class="checkbox">
        <label>
          <input type="checkbox" required />
          I have read and accept the
          <g-link to="/privacy">privacy policy</g-link>.
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: var(--title-size);
  margin-bottom: 2rem;
}
.input {
  display: block;
  width: 100%;
  margin: 0.5rem 0;
  border: 3px solid $secondary-color;
  padding: 0.5rem;
  color: #555;
  font-size: 1.2rem;
  font-family: "PT Serif", serif;
}
.checkbox {
  font-size: 1rem;
}
button {
  min-width: 10rem;
  padding: 0.5rem;
  border: none;
  font-family: "PT Serif", serif;
  background: $primary-color;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: $primary-text-color;
  }
}
</style>
