<template>
  <header>
    <prismic-image class="logo" :field="$store.state.header.logo" />
    <button
      aria-label="Menu"
      for="menu-toggle"
      class="menu-toggle-button"
      @click="toggleMenu"
    >
      <svg
        class="menu-icon"
        viewBox="0 0 122.88 95.95"
        style="stroke: currentColor; fill: currentColor"
      >
        <path
          style="fill-rule: evenodd; clip-rule: evenodd"
          d="M8.94,0h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,17.88,0,13.86,0,8.94l0,0 C0,4.02,4.02,0,8.94,0L8.94,0z M8.94,78.07h105c4.92,0,8.94,4.02,8.94,8.94l0,0c0,4.92-4.02,8.94-8.94,8.94h-105 C4.02,95.95,0,91.93,0,87.01l0,0C0,82.09,4.02,78.07,8.94,78.07L8.94,78.07z M8.94,39.03h105c4.92,0,8.94,4.02,8.94,8.94l0,0 c0,4.92-4.02,8.94-8.94,8.94h-105C4.02,56.91,0,52.89,0,47.97l0,0C0,43.06,4.02,39.03,8.94,39.03L8.94,39.03z"
        />
      </svg>
    </button>
    <nav v-if="$store.state.header.menu" aria-label="primary navigation" :class="{ open: showMenu }">
      <ul>
        <li v-for="link in $store.state.header.menu" :key="link.link_text" @click="closeMenu">
          <a
            :href="`/${link.link_destination}`"
            >{{ link.link_name }}</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
  props: ['menu'],
  data() {
    return {
      showMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    closeMenu() {
      this.showMenu = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

header {
  --header-spacing: 2rem;

  position: sticky;
  top: 0;
  height: var(--header-height);
  display: flex;
  align-items: center;
  padding: 1rem var(--header-spacing);
  width: 100%;
  z-index: 10;
  background-color: $clr-primary;
  filter: drop-shadow(var(--shadow-subtle));
  color: var(--clr-white);
}

.logo {
  height: 100%;
  width: auto;
  max-height: 10vw;
  min-height: 3rem;
  filter: drop-shadow(var(--shadow-dark));
}

.menu-toggle-button,
.menu-toggle {
  display: none;
}

nav {
  font-size: 1rem;
  font-weight: 300;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
}

li {
  margin: 0 0 0 1.5rem;
}

a {
  color: inherit;
  text-decoration: none;
}

@media screen and (max-width: 800px) {
  header {
    // justify-content: space-between;
    align-items: center;
  }

  .menu-toggle-button {
    display: flex;
    cursor: pointer;
    border: 0;
    background: none;
    color: inherit;
  }

  .menu-icon {
    height: 1.5em;
  }

  nav {
    transform: scaleY(0);
    transform-origin: top;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: inherit;
    transition: transform 350ms ease-in-out;
  }

  nav.open {
    transform: scaleY(1);

    ul {
      opacity: 1;
      transition: opacity 250ms linear 200ms;
    }
  }

  ul {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem 1rem;
    margin: 0;
    opacity: 0;
    transition: opacity 150ms linear;
  }

  li {
    margin: 0;
    padding: 1rem;
  }

  a {
    color: inherit;
  }
}

@media screen and (max-width: 500px) {
  header {
    --header-spacing: 1rem;
  }
}
</style>
