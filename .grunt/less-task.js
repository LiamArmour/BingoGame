(function(){
    'use strict';
    module.exports={
        lintCheck: {
            src:'**/*.less',
            cwd:'main-app/app/less/',
            dest:'.build/css/',
            expand:true,
            ext:'.css'
        }
    };
})();