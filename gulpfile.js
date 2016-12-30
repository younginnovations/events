//Elixir gulpfile.js

var elixir = require('laravel-elixir');
require('laravel-elixir-postcss');

elixir(function (mix) {
    mix.sass('./assets/sass/app.scss')
        .postcss('app.css', {
            plugins: [
                require('lost'),
                require('rucksack-css'),
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
            './assets/react-js/vendor/jquery-1.8.0.min.js',
            './assets/react-js/vendor/modernizr-2.8.3.min.js',
            './assets/react-js/vendor/tabletop.js'
        ], 'public/js/vendor.js');
});



