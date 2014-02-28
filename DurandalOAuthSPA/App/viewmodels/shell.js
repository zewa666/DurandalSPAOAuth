define(['plugins/router', 'durandal/app'], function (router, app) {
    return {
        router: router,
        search: function() {
            //It's really easy to show a message box.
            //You can add custom options too. Also, it returns a promise for the user's response.
            app.showMessage('Search not yet implemented...');
        },
        activate: function () {
            router.map([
                { route: '', title:'Welcome', moduleId: 'viewmodels/welcome', nav: true },
                { route: 'flickr', moduleId: 'viewmodels/flickr', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        },
        updateOAuthData: function (data) {
            app.oauthData(data);
        },
        isLoggedIn: ko.computed(function () {
            console.log(app.oauthData());
            if (app.oauthData() !== null) {
                return true;
            }

            return false;
        }),
        getUsername: ko.computed(function() {
            if (app.oauthData() !== null) {
                return app.oauthData().username;
            } else {
                return null;
            }
        }),
        login: function () {
            window.open('/Durandal/LoginWithProvider/Google',
                        'openid_popup', 'width=790,height=580');
        }
    };
});

function OAuthHandler(data) {
    var shell = require('viewmodels/shell');
    shell.updateOAuthData(data);
}