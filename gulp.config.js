module.exports = {
    gulp:               require('gulp'),
    GP:                 require('gulp-load-plugins')(),
    bs:                 require('browser-sync').create(),
    path: {
        server:         './app/dist',/* qattan yakuniy natijani ishga tushirishi  */
        tasks:          require('./gulp'),
        src: {/* qattan olishi */
            html:       './app/src/*.{html,pug,jade}',
            css:        './app/src/style/*.scss',
            js:         './app/src/script/common.js',
            font:       './app/src/fonts/**/*.ttf',
            img:        './app/src/images/**/*.{gif,jpg,jpeg,png,webp,svg}'
        },
        dist: {/* qatga solishi */
            html:       './app/dist/',
            css:        './app/dist/style/',
            js:         './app/dist/script/',
            font:       './app/dist/fonts/',
            img:        './app/dist/images/'
        },
        watch: {/* qatni kuzatib turishi */
           html:        ['./app/src/*.{html,pug,jade}', './app/src/view/**/*.{html,pug,jade}'],
           css:         './app/src/style/**/*.scss',
           js:          './app/src/script/**/*.js',
           font:        './app/src/fonts/**/*.ttf',
           img:         './app/src/images/**/*.*'
        }
    },
    get Tasks() {
        const getKey = Object.keys(this.path.watch)
        return getKey
    } ,
    tasks: {
        get default() {
           return [...$.Tasks, 'server', 'watch'] 
        } 
    },
    get build() {
        return $.Tasks
    }
}

// console.log($);

