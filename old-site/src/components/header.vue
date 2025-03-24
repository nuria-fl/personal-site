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
          <g-link class="nav__link" to="/contact/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path
                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
              />
            </svg>
            <span class="label">Contact</span>
          </g-link>
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
    margin-left: 0.9em;
    border-bottom: 3px solid transparent;
    text-decoration: none;
    color: $text-color;
    font-size: 1.05rem;
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
    svg {
      display: none;
      @media screen and (max-width: $mq-sm) {
        display: block;
        width: 1.1rem;
      }
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

.label {
  @media screen and (max-width: $mq-sm) {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
}
</style>
