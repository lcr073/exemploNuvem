// O require vai buscar no node modules
var gulp = require ('gulp');
var imageminMozjpeg = require('imagemin-mozjpeg');
var cleanCSS = require('gulp-clean-css');
var kaddett20turbo = require('gulp-imagemin');

// Executa a tarefa global
gulp.task('css-min', function(){
	
	// Define o fluxo de execucao
	return gulp.src(['src/resources/css/*.css','src/resources/vendor/css/*.css'])
	.pipe(cleanCSS())
	.pipe(gulp.dest('dist/resources/css'));

});




gulp.task('reduzImg', function(){
	return gulp.src('src/resources/img/*')
	.pipe(kaddett20turbo(imageminMozjpeg({quality: 30})))
	.pipe(gulp.dest('dist/resources/img/'));

});

gulp.task('watch', function(){
	// Fala qual a posta que tem ficar olhando, e nesse caso verificar se teve alguma alteração 
	// nesses arquivos
	gulp.watch(['src/resources/css/*.css','src/resources/vendor/css/*.css'], ['css-min']);

});

// Executando outras tarefas atraves da primeira
gulp.task('default',['css-min','reduzImg']);
// Executa a tarefa global
//gulp.task('default', function(){

	// place code for your default task here
//	console.log("Olá Vasco com gulp!");
//});