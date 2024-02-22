// import createVuetify 
import { createVuetify } from "vuetify"

// import custom icons from helpers
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { aliases,  mdi } from 'vuetify/iconsets/mdi'
import { custom } from "~/helpers/customIcons"

// import themes from helpers
import { LIGHT_THEME, lightTheme, DARK_THEME, darkTheme } from "~/helpers/themes"

// import defaults from helpers
import { defaults } from "~/helpers/defaults"

// create vuetify instance
export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({

        // enable ssr for rendering
        ssr: true,

        // default vuetify components
        defaults,

        // theme options
        theme: {
            defaultTheme: LIGHT_THEME,
            themes: {
                lightTheme,
                darkTheme,
            },
            // add color variations
            variations: {
                colors: ["primary", "secondary"],
                lighten: 3,
                darken: 3,
            }
        },
        // icons options
        icons: {
            defaultSet: "mdi",
            aliases,
            sets: {
                custom,mdi,
            },
        },
    })

    // add vuetify to nuxt app
    nuxtApp.vueApp.use(vuetify)
})