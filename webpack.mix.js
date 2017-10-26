var mix = require('laravel-mix');
mix
mix.pug = require('laravel-mix-pug');

mix.js('src/js/app.js', 'public/js')
	.sass('src/sass/app.scss', 'public/css')
	.pug('src/pug/*.pug', 'public', {seeds: null})
	.sourceMaps()
	.setPublicPath('public')
	