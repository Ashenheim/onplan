/* ====================================
    Configuration file
==================================== */
var nib = require('nib');
var csswring = require('csswring');
var autoprefixer = require('autoprefixer');

var $p = {
    bower: "./bower_components/",
    build: {
        index : "build/",
        style : "build/assets/css/",
        js    : "build/assets/js/",
    },
    source: {
        index : "source/markup/",
        jade  : "source/markup/",
        style : "source/stylus/",
        js    : "source/js/",
    }
}


module.exports = {
    /* ------------------------------
        Copy
    ------------------------------ */
    copy: {
        src: $p.source.index + '**/*.{html,json}',
        dest: $p.build.index
    },
    /* ------------------------------
        BrowserSync
    ------------------------------ */
    jade: {
        src: [
            $p.source.jade + '*.jade',
            $p.source.jade + '**/*.jade',
            '!' + $p.source.jade + 'layouts/**/*'
        ],
        dest: $p.build.index,
        watch: [
            $p.source.jade + '*.jade',
            $p.source.jade + '**/*.jade'
        ]
    },
    /* ------------------------------
        Style
    ------------------------------ */
    style: {
        src: [ $p.source.style + 'style.styl'],
        dest: $p.build.style,
        watch: [
            $p.source.style + '*.styl',
            $p.source.style + '**/*.styl'
        ],
        settings: {
            stylus: {
                use: [ nib() ]
            },
            postcss: [
                csswring(),
                autoprefixer()
            ]
        }
    },
    /* ------------------------------
        Scripts
    ------------------------------ */
    scripts: {
        src: [
            $p.bower + 'jquery/dist/jquery.js',
            $p.bower + 'mustache.js/mustache.js',
            $p.source.js + 'vendors/*.js',
            $p.source.js + 'partials/*.js',
            $p.source.js + 'init.js'
        ],
        dest: $p.build.js,
        watch: [
            $p.source.js + '*.js',
            $p.source.js + '**/*.js'
        ]
    },
    /* ------------------------------
        Deploy
    ------------------------------ */
    deploy: {
        src: $p.build.index + '**/*',
        settings: {}
    },
    /* ------------------------------
        BrowserSync
    ------------------------------ */
    browsersync: {
        server: {
            baseDir: $p.build.index
        },
        host: "localhost",
        online: true,
        open: false,
        notify: {
            styles: [
                'color: rgb(255, 255, 255)',
                'position: fixed',
                'z-index: 999999',
                'bottom: 0px',
                'left: 0px',
                'font-size: 1em',
                'background: rgba(0, 0, 0, 0.8)',
                'font-family: arial, sans-serif',
                'padding: 10px',
                'box-shadow: 0 0 5px rgba(0,0,0,.3)'
            ]
        }
    }
}
