/* -----------------------------------------------------------------
   Shared site behaviour that is not analytics.

   Right now this is only the language switch, but that switch had the
   same problem as the tracking code: all three page types carried a
   near-identical copy, and none of them remembered the choice. A
   visitor who picked Arabic on the home page was silently put back
   into English the moment they opened a product.

   Wrapped in a function so its private names stay private. Only
   SiteLang is handed out to the pages.
   ----------------------------------------------------------------- */

(function () {

/* localStorage rather than sessionStorage: someone who reads Arabic
   still reads Arabic tomorrow, so the choice should outlive the tab. */
const KEY = "bayt_lang";


function saved() {
  try {
    return localStorage.getItem(KEY) === "ar" ? "ar" : "en";
  } catch (e) {
    /* Private browsing can block storage outright. Falling back to
       English is better than the page failing to load. */
    return "en";
  }
}


/* Everything that changes on screen when the language changes, other
   than the product text itself. Each page redraws its own content
   afterwards, because only the page knows what it is showing. */
function apply(lang) {
  try { localStorage.setItem(KEY, lang); } catch (e) {}

  /* dir is what flips the whole layout right-to-left for Arabic. The
     stylesheet already has rules keyed off html[dir=rtl]. */
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  const button = document.getElementById("langBtn");
  if (button) button.textContent = lang === "ar" ? "English" : "العربية";

  /* Anything carrying both data-en and data-ar is fixed page furniture
     such as the nav links, so it can be swapped generically here. */
  document.querySelectorAll("[data-en]").forEach(function (el) {
    el.innerHTML = el.dataset[lang];
  });
}


window.SiteLang = { saved: saved, apply: apply };

})();
