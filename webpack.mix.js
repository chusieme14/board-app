const mix = require('laravel-mix');

mix.webpackConfig({
    resolve:{
       extensions: ['.js', '.vue', '.ts'],
       alias: {
          '@': path.resolve(__dirname, 'resources/js/src'),
       }
    }
 });
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   // .sass('resources/sass/app.scss', 'public/css')
    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ]);
