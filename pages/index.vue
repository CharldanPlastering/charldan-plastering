<template>
  <main>
    <section class="section section--hero">
      <prismic-image class="hero__image" :field="document.data.hero_image"></prismic-image>
      <div class="hero__box box">
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
      </div>
    </section>

    <section class="section section--services">
      <div v-for="(service, i) in document.data.services" :key="`service-${i}`" class="service">
        <prismic-rich-text class="service__heading heading" :field="service.name"></prismic-rich-text>
        <prismic-rich-text class="service__description" :field="service.description"></prismic-rich-text>
      </div>
    </section>

    <section class="section section--about">
      <prismic-image class="about__image" :field="document.data.about_image"></prismic-image>
      <div class="about__box box">
        <prismic-rich-text class="about__heading heading" :field="document.data.about_heading"></prismic-rich-text>
        <prismic-rich-text class="about__text" :field="document.data.about_text"></prismic-rich-text>
        <div class="about__qualities">
          <div v-for="(quality, i) in document.data.qualities" :key="`quality-${i}`" class="quality">
            <prismic-image :field="quality.icon" class="quality__icon"></prismic-image>
            <prismic-rich-text :field="quality.heading" class="quality__heading heading"></prismic-rich-text>
            <p class="quality__description">{{ quality.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--gallery">
      <prismic-rich-text class="gallery__heading heading" :field="document.data.gallery_heading"></prismic-rich-text>
        <prismic-rich-text class="gallery__text section__description" :field="document.data.gallery_description"></prismic-rich-text>
    </section>

    <section class="section section--testimonials">
      <prismic-rich-text class="testimonials__heading heading" :field="document.data.testimonials_heading"></prismic-rich-text>
        <prismic-rich-text class="testimonials__text section__description" :field="document.data.testimonials_description"></prismic-rich-text>
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
