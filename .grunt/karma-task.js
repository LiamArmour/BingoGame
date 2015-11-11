(function(){
    'use strict';
    module.exports={
            unit:{
                configFile: 'karma.conf.js'
            },
            options: {
                files: [
                    //Bower include files
                    'bower_components/angular/angular.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    'bower_components/angular-ui-router/release/angular-ui-router.min.js',

                    //Main script files
                    'main-app/app/scripts/modules.js',
                    'main-app/app/scripts/core/controllers/**/*.js',
                    'main-app/app/scripts/core/directives/**/*.js',
                    'main-app/app/scripts/core/services/**/*.js',

                    'main-app/app/scripts/login/controllers/**/*.js',
                    'main-app/app/scripts/login/directives/**/*.js',
                    'main-app/app/scripts/login/services/**/*.js',

                    'main-app/app/scripts/game/controllers/**/*.js',
                    'main-app/app/scripts/game/directives/**/*.js',
                    'main-app/app/scripts/game/services/**/*.js',


                    //Testing files
                    'main-app/tests/core/controllers/**/*.js',
                    'main-app/tests/core/directives/**/*.js',
                    'main-app/tests/core/services/**/*.js',

                    'main-app/tests/login/controllers/**/*.js',
                    'main-app/tests/login/directives/**/*.js',
                    'main-app/tests/login/services/**/*.js',

                    'main-app/tests/game/controllers/**/*.js',
                    'main-app/tests/game/directives/**/*.js',
                    'main-app/tests/game/services/**/*.js',

                    'main-app/tests/mocks/mocks.js',
                    'main-app/tests/template-cache/**/*.js'
                ]
            }
    };
})();