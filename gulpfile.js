/**
 * Gulpfile.
 *
 * Image optimization
 *
 */
const gulp = require( 'gulp' );
const imagemin = require( 'gulp-imagemin' );
const cache = require ( 'gulp-cache' );
const notify = require( 'gulp-notify' );


const imgSrc = './originals/**/*';
const imgDst = './optimized/';

/**
 * Task: `images`.
 *
 * Minifies PNG, JPEG, GIF and SVG images.
 *
 * This task does the following:
 *     1. Gets the source of images raw folder
 *     2. Minifies PNG, JPEG, GIF and SVG images
 *     3. Generates and saves the optimized images
 *
 * This task will run only once, if you want to run it
 * again, do it with the command `gulp images`.
 *
 * Read the following to change these options.
 * @link https://github.com/sindresorhus/gulp-imagemin
 */
gulp.task( 'images', () => {
	return gulp
		.src( imgSrc )
		.pipe(
			cache(
				imagemin([
					imagemin.gifsicle({ interlaced: true }),
					imagemin.mozjpeg({quality: 75, progressive: true}),
					imagemin.optipng({ optimizationLevel: 5 }), // 0-7 low-high.
					imagemin.svgo({
						plugins: [ { removeViewBox: false }, { cleanupIDs: false } ]
					})
				])
			)
		)
		.pipe( gulp.dest( imgDst ) )
		.pipe( notify({ message: '\n\n✅  ===> IMAGES — completed!\n', onLast: true }) );
});

/**
 * Task: `clear-images-cache`.
 *
 * Deletes the images cache. By running the next "images" task,
 * each image will be regenerated.
 */
gulp.task( 'clearCache', function( done ) {
	return cache.clearAll( done );
});