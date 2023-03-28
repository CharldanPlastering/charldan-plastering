<template>
  <main>
    <section class="section section--hero">
      <prismic-rich-text class="hero__title" :field="document.data.title" />
      <prismic-rich-text
        class="hero__strapline"
        :field="document.data.strapline"
      />
      <a
        class="button hero__call-to-action"
        :href="document.data.button_destination"
        >{{ document.data.button_text }}</a
      >
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  async asyncData({ $prismic, _params, error }) {
    const document = await $prismic.api.getSingle('homepage')

    if (!document) {
      error({ statusCode: 404, message: 'Homepage not found' })
    }

    return {
      document,
    }
  },
  head() {
    return {
      title: this.document.data.meta_title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.document.data.meta_description,
        },
      ],
    }
  },
};
</script>
