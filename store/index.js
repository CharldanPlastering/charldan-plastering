export const state = () => ({
    header: {},
    footer: {}
})

export const mutations = {
    SET_HEADER(state, header) {
        state.header = header
    },
    SET_FOOTER(state, footer) {
        state.footer = footer
    },
    SET_ERROR(state, error) {
        state.header = error
    }
}

export const actions = {
    async fetchHeader({ commit }, $prismic) {
        try {
            const header = (await $prismic.api.getSingle('header')).data

            commit('SET_HEADER', header)
        } catch (e) {
            const error = 'Please create a header document'

            commit('SET_ERROR', error);
        }
    },
    async fetchFooter({ commit }, $prismic) {
        try {
            const footer = (await $prismic.api.getSingle('footer')).data

            commit('SET_FOOTER', footer)
        } catch (e) {
            const error = 'Please create a footer document'

            commit('SET_ERROR', error);
        }
    }
}
