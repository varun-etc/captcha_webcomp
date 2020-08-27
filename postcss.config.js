const production = !process.env.ROLLUP_WATCH;

module.exports = {
    plugins: [
        require("tailwindcss"),
        production && require("@fullhuman/postcss-purgecss")({
            content: ["./src/**/*.svelte", "./public/**/*.html"],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        }),
        production && require('cssnano')({
            preset: 'default',
            calc: false,
        }),
    ]
};
