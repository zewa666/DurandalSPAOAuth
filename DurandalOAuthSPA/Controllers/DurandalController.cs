using DotNetOpenAuth.AspNet;
using Microsoft.Web.WebPages.OAuth;
using System.Web.Mvc;

namespace DurandalOAuthSPA.Controllers
{
    public class DurandalController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult LoginWithProvider()
        {
            OAuthWebSecurity.RequestAuthentication("Google", Url.Action("AuthentificationCallback"));

            return null;
        }

        public ActionResult AuthentificationCallback()
        {
            AuthenticationResult result = OAuthWebSecurity.VerifyAuthentication();

            if (result.IsSuccessful)
            {
                ViewBag.oauthData = new
                {
                    provider = result.Provider,
                    id = result.ProviderUserId,
                    username = result.UserName
                };
            }

            return View("AuthentificationCallback");
        }
    }
}