(function(){
    'use strict';
    module.exports={
        concat:{
            cwd:'',
            src:['main-app/app/scripts/modules.js','main-app/app/scripts/core/**/*.js','main-app/app/scripts/login/**/*.js','main-app/app/scripts/game/**/*.js'],
            dest:'.build/scripts/app.js',
            expand:false
        },
        tests:{
            cwd:'',
            src:['main-app/tests/**/*.js'],
            expand:false,
            options: {
                '-W030': true
            }
        },
        gruntlint:{
            src:'.grunt/**/*.js'
        }
    };
})();