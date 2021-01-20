module.exports = {
    purge: [
        './public/**/*.html',
    ],
    darkMode: 'media',
    theme: {
        extend: {
            screens: {
                'md2': '896px',
                'lg2': '1152px'
            },
            fontFamily: {
                'counter': ['"Roboto Mono"', 'mono'],
                'garage': ['"Garage Gothic FB"', 'sans'],
                'tw': ['"TW Cen MT Condensed"', 'sans']
            }
        }
    },
    plugins: [],
    variants: {
        extend: {
            backgroundColor: ['odd', 'even'],
        }
    }
}
