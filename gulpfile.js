//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');
var sprite = require('postcss-sprites');

elixir(function (mix) {
    mix.sass('./assets/sass/app.scss')
        .postcss('app.css', {
            plugins: [
                require('lost'),
                require('rucksack-css'),
                sprite({
                    stylesheetPath: './public/css/',
                    spritePath: './public/img/sprite/'
                })
            ],
            output: 'public/css',
            srcDir: 'public/css/'
        })
        .styles([
            './assets/sass/vendor/normalize.css',
            './assets/sass/vendor/carousel.css'
        ], 'public/css/vendor.css');

    mix.browserify('./assets/react-js/index.js', 'public/js')
        .scripts([
            './assets/react-js/vendor/modernizr-2.8.3.min.js',
            './assets/react-js/vendor/jquery.imagesloaded.min.js',
            './assets/react-js/vendor/bg-slideshow.min.js'
        ], 'public/js/vendor.js');
});



