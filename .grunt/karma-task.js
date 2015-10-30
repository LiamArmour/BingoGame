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


                    //Testing files
                    'main-app/tests/core/controllers/**/*.js',

                    'main-app/tests/mocks/mocks.js',
                    'main-app/tests/template-cache/**/*.js'
                ]
            }
    };
})();