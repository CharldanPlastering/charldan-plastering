<template>
    <div>
        <HeaderBar />
        <Nuxt />
        <FooterBar />
    </div>
</template>

<script>
export default {
    async middleware({ store, from, $prismic }) {
        if (!from) {
            await store.dispatch('fetchHeader', $prismic);
            await store.dispatch('fetchFooter', $prismic);
        }
    }
}
</script>