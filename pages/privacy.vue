<template>
  <section>
    <a href="/" class="privacy-policy__home-link">&lt; Home</a>
    <prismic-rich-text
      class="privacy-policy__title"
      :field="document.data.title"
    />
    <prismic-rich-text
      class="privacy-policy__text"
      :field="document.data.privacy_policy"
    />
  </section>
</template>

<script>
export default {
  name: 'PrivacyPolicy',
  async asyncData({ $prismic, _params, error }) {
    const document = await $prismic.api.getSingle('privacy_policy')

    if (!document) {
      error({ statusCode: 404, message: 'Privacy policy not found' })
    }

    return {
      document,
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/styles/variables';

section {
  padding: 4rem;

  > * {
    max-width: 50rem;
    margin: auto;
  }

  > :not(:last-child) {
      margin-bottom: 2rem;
  }
}

.privacy-policy__home-link {
    position: sticky;
    top: $header-height;
    z-index: 5;
    color: inherit;
    display: block;
    padding: 2rem 0;
    line-height: 1;
    font-weight: 700;
    background: #fff;
}

.privacy-policy__title {
  font-size: 2rem;
}

.privacy-policy__text {
  h2 {
    margin: 2rem 0 0;
    font-size: 1.25rem;
  }

  ul,
  ol {
    margin: 0 1.5rem;
  }

  li {
    margin: 0.5rem;
  }

  p {
    margin: 1rem 0;
  }
}

@media screen and (max-width: 768px) {
  section {
    padding: 2rem;
  }

  .privacy-policy__home-link {
    padding: 1rem 0;
  }
}
</style>
