import { ThemeDefinition } from 'vuetify'

// String that represents the name of the light theme
export const LIGHT_THEME = 'lightTheme'

export const lightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: "#FFFFFF",
		surface: "#FFFFFF",
		primary: "#0091EA",
		secondary: "#90A4AE",
		error: "#ef4444",
		info: "#64B5F6",
		success: "#76FF03",
		warning: "#FFA726",
    },
}

// String that represents the name of the dark theme
export const DARK_THEME = 'darkTheme'

export const darkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: "#0C111B",
        surface: "#1f2937",
        primary: "#0091EA",
        secondary: "#90A4AE",
        error: "#ef4444",
        info: "#64B5F6",
        success: "#76FF03",
        warning: "#FFA726",
    }, 
}

