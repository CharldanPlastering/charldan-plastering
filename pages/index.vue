<template>
  <main>
    <section class="section section--hero">
      <prismic-image
        class="hero__image"
        :field="document.data.hero_image"
      ></prismic-image>
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

    <section id="services" class="section section--services">
      <div
        v-for="(service, i) in document.data.services"
        :key="`service-${i}`"
        class="service"
      >
        <prismic-rich-text
          class="service__heading heading"
          :field="service.name"
        ></prismic-rich-text>
        <prismic-rich-text
          class="service__description"
          :field="service.description"
        ></prismic-rich-text>
      </div>
    </section>

    <section id="about" class="section section--about">
      <prismic-image
        class="about__image"
        :field="document.data.about_image"
      ></prismic-image>
      <div class="about__box box">
        <prismic-rich-text
          class="about__heading heading"
          :field="document.data.about_heading"
        ></prismic-rich-text>
        <prismic-rich-text
          class="about__text"
          :field="document.data.about_text"
        ></prismic-rich-text>
        <div class="about__qualities">
          <div
            v-for="(quality, i) in document.data.qualities"
            :key="`quality-${i}`"
            class="quality"
          >
            <prismic-image
              :field="quality.icon"
              class="quality__icon"
            ></prismic-image>
            <prismic-rich-text
              :field="quality.heading"
              class="quality__heading heading"
            ></prismic-rich-text>
            <p class="quality__description">{{ quality.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="gallery" class="section section--gallery">
      <prismic-rich-text
        class="gallery__heading heading"
        :field="document.data.gallery_heading"
      ></prismic-rich-text>
      <prismic-rich-text
        class="gallery__text section__description"
        :field="document.data.gallery_description"
      ></prismic-rich-text>
      <div class="gallery__slider">
        <button class="slider__button slider__button--left" @click="scrollGalleryLeft()">
          <img src="~/assets/images/chevron-circle-right-accent.svg" alt="Scroll left">
        </button>
        <button class="slider__button slider__button--right" @click="scrollGalleryRight()">
          <img src="~/assets/images/chevron-circle-right-accent.svg" alt="Scroll right">
        </button>

        <div ref="gallerySlider" class="slider__wrapper">
          <div class="slider__images">
            <prismic-image
              v-for="(item, i) in document.data.gallery"
              :key="`gallery-image-${i}`"
              class="slider__image"
              :field="item.image"
            ></prismic-image>
          </div>
        </div>
      </div>
    </section>

    <section id="testimonials" class="section section--testimonials">
      <prismic-rich-text
        class="testimonials__heading heading"
        :field="document.data.testimonials_heading"
      ></prismic-rich-text>
      <prismic-rich-text
        class="testimonials__text section__description"
        :field="document.data.testimonials_description"
      ></prismic-rich-text>
    </section>

    <section id="contact" class="section section--contact">
      <prismic-image
        class="contact__image"
        :field="document.data.contact_image"
      ></prismic-image>
      <div class="contact__box box">
        <div>
          <prismic-rich-text
            class="contact__heading heading"
            :field="document.data.contact_heading"
          ></prismic-rich-text>
          <prismic-rich-text
            class="contact__description"
            :field="document.data.contact_description"
          ></prismic-rich-text>
        </div>
        <div class="contact__details">
          <div class="contact__detail">
            <img
              class="detail__icon"
              src="~/assets/images/phone-accent.svg"
              alt="Phone"
            />
            <a
              class="detail__value"
              :href="`tel:${document.data.phone_number}`"
              >{{ document.data.phone_number }}</a
            >
          </div>
          <div class="contact__detail">
            <img
              class="detail__icon"
              src="~/assets/images/email-accent.svg"
              alt="Phone"
            />
            <a class="detail__value" :href="`mailto:${document.data.email}`">{{
              document.data.email
            }}</a>
          </div>
          <div class="contact__detail">
            <img
              class="detail__icon"
              src="~/assets/images/location-accent.svg"
              alt="Phone"
            />
            <address class="detail__value detail__value--address">
              <div
                v-for="(line, i) in document.data.address"
                :key="`address-line-${i}`"
              >
                {{ line.address_line }}
              </div>
            </address>
          </div>
        </div>
        <div class="social-media">
          <prismic-rich-text
            class="social-media__heading"
            :field="document.data.social_media_heading"
          ></prismic-rich-text>
          <div class="social-media__links">
            <prismic-link
              v-for="(link, i) in document.data.social_media_links"
              :key="`social-link-${i}`"
              :field="link.link"
            >
              <prismic-image :field="link.icon"></prismic-image>
            </prismic-link>
          </div>
        </div>
      </div>
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
  methods: {
    scrollGalleryRight() {
      let pixelsToScroll = this.$refs.gallerySlider.clientWidth;

      if (pixelsToScroll > 525) {
        pixelsToScroll -= 128;
      }

      this.$refs.gallerySlider.scrollLeft += pixelsToScroll;
    },
    scrollGalleryLeft() {
      let pixelsToScroll = this.$refs.gallerySlider.clientWidth;

      if (pixelsToScroll > 525) {
        pixelsToScroll -= 128;
      }

      this.$refs.gallerySlider.scrollLeft -= pixelsToScroll;
    }
  },
}
</script>
