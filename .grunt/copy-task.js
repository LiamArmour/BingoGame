(function () {
    'use strict';
    module.exports={
        mainappimages: {
            cwd: 'main-app/app',
            src: ['images/**/*.*'],
            dest: '.build/',
            expand: true
        },

        mainappsounds: {
            cwd: 'main-app/app',
            src: ['sounds/**/*.*'],
            dest: '.build/',
            expand: true
        },

        html: {
            cwd: 'main-app/app',
            src: ['index.html'],
            dest: '.build/',
            expand: true
        },

        partials: {
            cwd: 'main-app/app/html',
            src: ['**/*.*'],
            dest: '.build/partials/',
            expand: true
        },

        copycss: {
            cwd: '',
            src: ['main-app/app/css/bingo-ticket.css'],
            dest: '.build/style/bingo-ticket.css',
            expand:false
        },

        bower: {
            cwd: 'bower_components',
            src: ['**/*.*'],
            dest: '.build/thirdparty/',
            expand: true
        }
    };

})();