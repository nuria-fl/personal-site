<template>
  <header class="header">
    <div class="container">
      <nav class="nav">
        <div class="nav__home">
          <transition name="home-logo">
            <g-link v-show="!isHome" to="/" aria-label="Home">
              <svg
                viewBox="0 0 68 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="34" cy="34" r="34" fill="#C3E8BD" />
                <circle cx="38.5" cy="38.5" r="24.5" fill="#FF82A9" />
              </svg>
            </g-link>
          </transition>
        </div>

        <div class="nav__sections">
          <g-link class="nav__link" to="/speaking/">Speaking</g-link>
          <g-link class="nav__link" to="/articles/">Articles</g-link>
          <g-link class="nav__link" to="/projects/">Projects</g-link>
          <!-- <g-link class="nav__link" to="/projects/">Contact</g-link> -->
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isHome: true,
    };
  },
  watch: {
    $route: {
      handler() {
        this.isHome = this.$route.name === "home";
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 3rem;
  padding: 2rem 0 2rem;
  border-top: 8px solid $background-dark-color;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__sections {
    display: flex;
    justify-content: flex-end;
  }

  &__home {
    width: 2.5rem;
    height: 2.5rem;
    @media screen and (min-width: $mq-sm) {
      width: 4.25rem;
      height: 4.25rem;
    }
    a {
      display: block;
      border-bottom: none;
      svg {
        overflow: visible;
      }
      circle {
        transform-origin: 70% 70%;
        transition: all 0.5s;
        &:last-child {
          transition-delay: 0.1s;
        }
      }
      &:hover {
        background: none;
        circle {
          transform: scale(1.15);
        }
      }
    }
  }

  &__link {
    display: inline-block;
    padding: 0 0.1rem;
    margin-left: 1em;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    color: $text-color;
    font-size: 1.1rem;
    @media screen and (min-width: $mq-sm) {
      margin-left: 2.5em;
      font-size: 1.25rem;
    }
    &:first-child {
      margin-left: 0;
    }
    &:hover {
      border-bottom-color: $primary-color;
      background: transparent;
    }
    &.active--exact {
      border-bottom-color: $primary-color;
    }
  }
}

.home-logo-enter-active,
.home-logo-leave-active {
  visibility: visible;
  transition: all 0.5s;

  circle {
    transform: scale(1) !important;
  }
}
.home-logo-enter,
.home-logo-leave-to {
  visibility: hidden;
  circle {
    transform: scale(0) !important;
  }
}

.home-logo-leave-active,
.home-logo-leave-to {
  circle:first-child {
    transition-delay: 0.3s;
  }
  circle:last-child {
    transition-delay: 0s;
  }
}
</style>
