import gulp from 'gulp'
import webserver from 'gulp-webserver'
import shell from 'gulp-shell'
import cache from 'gulp-cached'

const config = {
  srcPath: './src',
  distPath: './dist',
  assetsPath: 'assets/'
}

gulp.task('dev', ['build', 'watch'], ()=> {
  gulp.src(config.distPath)
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }))
})

gulp.task('assets', ['css', 'js', 'static', 'favicon'])

gulp.task('build', ['assets', 'html'])

gulp.task('watch', ()=> {
  const { srcPath, distPath, assetsPath } = config
  const assetsFullPath = `${srcPath}/${assetsPath}/`
  gulp.watch(`${srcPath}/${assetsPath}*.css`, ['css'])
  gulp.watch(`${srcPath}/${assetsPath}*.js`, ['js'])
  gulp.watch(`${assetsFullPath}fonts/*`, ['static'])
  gulp.watch(`${assetsFullPath}images/*`, ['static'])
  gulp.watch([`${srcPath}/*.js`, `${srcPath}/en/*.js`], ['html'])
})

gulp.task('css', ()=> {
  const { srcPath, distPath, assetsPath } = config
  gulp.src(`${srcPath}/${assetsPath}*.css`)
    .pipe(gulp.dest(`${distPath}/${assetsPath}`))
})

gulp.task('js', ()=> {
  const { srcPath, distPath, assetsPath } = config
  gulp.src(`${srcPath}/${assetsPath}*.js`)
    .pipe(gulp.dest(`${distPath}/${assetsPath}`))
})

gulp.task('static', ()=> {
  const { srcPath, distPath, assetsPath } = config
  const assetsFullPath = `${srcPath}/${assetsPath}/`
  gulp.src([`${assetsFullPath}fonts/*`, `${assetsFullPath}images/*`], { base: assetsFullPath })
    .pipe(gulp.dest(`${distPath}/${assetsPath}`))
})

gulp.task('favicon', ()=> {
  const { srcPath, distPath } = config
  gulp.src(`${srcPath}/favicon.png`)
    .pipe(gulp.dest(distPath))
})

gulp.task('html', ()=> {
  const { srcPath, distPath } = config
  gulp.src([`${srcPath}/*.js`, `${srcPath}/en/*.js`], { base: srcPath })
    .pipe(cache('html'))
    .pipe(shell([
      'static-react --no-doctype <%= getSrcPath(file.relative) %> > <%= getDistPath(file.relative) %>'
    ], {
      templateData: {
        getSrcPath: function(s) {
          return srcPath + '/' +  s
        },
        getDistPath: function(s) {
          return distPath + '/' + s.replace('.js', '.html')
        }
      }
    }))
})
