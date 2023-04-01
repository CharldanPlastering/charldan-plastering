<template>
  <header>
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
    <prismic-image class="logo" :field="$store.state.header.logo" />
    <nav v-if="$store.state.header.navigation" aria-label="primary navigation" :class="{ open: showMenu }">
      <ul>
        <li v-for="link in $store.state.header.navigation" :key="link.link_text" @click="closeMenu">
          <a :href="`/${link.link_destination}`">{{ link.link_text }}</a>
        </li>
      </ul>
    </nav>
    <a class="header__phone-link" :href="`tel:${$store.state.header.phone_number}`">
      <img src="~/assets/images/phone-white.svg" alt="" />
      <span>{{ $store.state.header.phone_number }}</span></a>
  </header>
</template>

<script>
export default {
  name: 'HeaderBar',
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
  --header-spacing-outer: 1rem 5rem;
  --nav-spacing: 2rem;

  @media screen and (max-width: 1200px) {
    --header-spacing-outer: 1rem 2rem;
  }

  @media screen and (max-width: 1000px) {
    --nav-spacing: 1.5rem;

    li + li::before {
      content: none;
    }
  }

  @media screen and (max-width: 900px) {
    --nav-spacing: 1.25rem;
  }

  position: sticky;
  top: 0;
  height: $header-height;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--header-spacing-outer);
  width: 100%;
  z-index: 10;
  background-color: $clr-primary;
  filter: drop-shadow($shadow-subtle);
  color: $clr-white;
  font-size: 1.25rem;
}

.logo {
  height: 100%;
  width: auto;
}

.menu-toggle-button,
.menu-toggle {
  display: none;
}

ul {
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0 var(--nav-spacing);
}

li {
  margin: 0 calc(var(--nav-spacing) / 2);
  white-space: nowrap;

  a {
    text-decoration: none;
  }

  + li {
    &::before {
      content: "";
      display: inline-block;
      background-image: url(~/assets/images/three-dots-white.svg);
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
      width: 4px;
      height: 12px;
      margin-right: var(--nav-spacing);
    }
  }
}

a {
  color: inherit;
}

.header__phone-link {
  display: flex;
  align-items: center;
  font-weight: 600;
  white-space: nowrap;

  img {
    width: 1rem;
    height: 1rem;
  }

  span {
    margin-left: .5rem;
  }
}

@media screen and (max-width: 800px) {
  header {
    align-items: center;
    padding: 1rem 2rem;
  }

  .menu-toggle-button {
    display: flex;
    cursor: pointer;
    border: 0;
    padding: 0;
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

  .header__phone-link {
    img {
      width: 1.25rem;
      height: 1.25rem;
    }

    span {
      display: none;
    }
  }
}
</style>
