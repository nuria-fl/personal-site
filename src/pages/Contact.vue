<template>
  <section class="container container--sm">
    <h1>Contact</h1>
    <form name="contact" data-netlify="true" hidden>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <textarea name="message"></textarea>
    </form>

    <form @submit.prevent="handleSubmit">
      <p>
        <label
          >Name:
          <input
            v-model="form.name"
            class="input"
            type="text"
            name="name"
            required
        /></label>
      </p>
      <p>
        <label
          >Email:
          <input
            v-model="form.email"
            class="input"
            type="email"
            name="email"
            required
        /></label>
      </p>
      <p>
        <label
          >Message:
          <textarea
            v-model="form.message"
            class="input"
            name="message"
            required
          ></textarea>
        </label>
      </p>
      <p class="checkbox">
        <label>
          <input v-model="terms" type="checkbox" required />
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
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: "",
      },
      terms: false,
    };
  },
  computed: {
    isValid() {
      return (
        this.form.name && this.form.email && this.form.message && this.terms
      );
    },
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      if (this.isValid) {
        fetch("/", {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: this.encode({
            "form-name": "contact",
            ...this.form,
          }),
          method: "post",
        })
          .then((response) => {
            console.log(response);
          })
          .catch((e) => {
            console.error(e);
          });
      }
    },
  },
};
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
