# Durandal SPA OAuth StarterKit

This is a sample mockup of the [Durandal Starter Kit](https://github.com/BlueSpire/Durandal/tree/master/platforms/Microsoft.NET/Nuget/Durandal.StarterKit/content)
used together with a simple OAuth Implementation.

The focus of this example is to leverage the DotNetOpenAuth without any .NET MembershipProviders.
Additionally the sample shows how to login via OAuth without having to leave the SPA or reload it (done via Javascript Popup).

This demo was inspired by following articles:

* [Using OAuthWebSecurity without SimpleMembership](http://brockallen.com/2012/09/04/using-oauthwebsecurity-without-simplemembership/)
* [Signing in without refreshing or leaving the page](http://openid-demo.appspot.com/)

This setup currently just auths against Google OAuth services but can be changed easily for other providers.

## The changes

I've introduced a new observable as a property to the durandal app object. (See main.js)
Additionally the DurandalController.cs got two new Methods being LoginWithProvider (Performs the Login) and AuthentificationCallback.
In the last one you are responsible to do the internal processing of the login, storing information etc. This Demo does not leverage a .NET Membership provider
since I disklike the idea of using magic stuff :-)

Finally for the javascript addons take a look in the shell.js where a window popup is created and the global function OAuthHandler is called from that one.
This way we do not need to refresh the SPA itself but just let the window popup do the redirecting work.