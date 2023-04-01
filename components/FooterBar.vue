<template>
  <footer>
    <div class="footer__main">
      <a href="/privacy" class="privacy-link">{{
        $store.state.footer.privacy_policy_link_text
      }}</a>
      <p class="copyright-notice">
        Copyright &copy;
        {{ new Date().getFullYear() }}
        {{ $store.state.footer.copyright_company_name }}
      </p>
      <prismic-rich-text
        class="legal-text"
        :field="$store.state.footer.legal_text"
      />
    </div>
      
    <div class="ew-link__wrapper">
      <div class="ew-link">
        <span>Powered by</span>
        <a
          href="https://emilyswebsites.com"
          target="_blank"
          aria-label="Emily's Websites"
          rel="noopener"
        >
          <img src="/emilyswebsites-logo.svg" aria-hidden="true" alt="Emily's Websites" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';

footer {
  background-color: var(--clr-black);
  color: var(--clr-white);
}

.footer__main {
  text-align: center;
  padding: 2rem;
  @include font-size-clamp(0.8rem, 2vw, 1.1rem);

  > :not(:last-child) {
    margin-bottom: 1rem;
  }

  > * {
    max-width: var(--width-content-max);
    margin: auto;
  }
}

.privacy-link {
  color: var(--clr-white);
  display: inline-block;
}

.legal-text {
  :nth-child(n) {
    margin: 0;
  }
}

.ew-link__wrapper {
  background: #000a;
}

.ew-link {
  font-size: .85rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;

  span {
    min-width: fit-content;
  }

  a {
    margin-left: 1rem;
    height: 2rem;
  }

  img {
    height: 100%;
  }
}
</style>