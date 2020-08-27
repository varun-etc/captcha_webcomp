module.exports = function(grunt) {

    var dist = 'docs';

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      webfont: {
        icons: {
            src: 'svg/*.svg',
            dest: `${dist}/fonts`,
            options: {
                font: 'se-icon',
                types: 'eot,woff2,woff,ttf,svg',
                version: grunt.file.readJSON('package.json').version,
                htmlDemo: false,
                ligatures: true,
                // optimize: false,
                // fontHeight: 1024,
                // normalize: true,
                templateOptions: {
                    tags: grunt.file.readJSON('tags.json')
                },
                codepointsFile: 'codepoints',
                customOutputs: [{
                    template: 'template/scss/_mixin.scss',
                    dest: `scss/_mixin.scss`
                }, {
                    template: 'template/scss/_variables.scss',
                    dest: `scss/_variables.scss`
                }, {
                     template: 'template/scss/styles.scss',
                     dest: `scss/styles.scss`
                }, {
                    template: 'template/index.html',
                    dest: `${dist}/index.html`
                }]
            }
        }
    }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['webfont']);

};