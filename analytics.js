/* -----------------------------------------------------------------
   Shared analytics for every page on this site.

   Why this file exists: the tracking code used to be pasted into all
   13 HTML files, in three slightly different versions, so each page
   reported a different set of fields. Worse, a page accidentally left
   out would look exactly like a product nobody wanted. Keeping it in
   one file means every page measures the same things the same way.

   Nothing here runs on its own except loading Google Analytics. Each
   page sets Analytics.page / Analytics.product, then calls track().
   ----------------------------------------------------------------- */


/* Paste your GA4 Measurement ID here. It looks like "G-XXXXXXXXXX"
   and comes from analytics.google.com once you create a property.

   Leaving it empty is deliberate and safe: the site still works and
   the on-screen TEST panel still fills in, but nothing is sent to
   Google. That means previewing pages on your own machine will not
   pollute the real numbers with your own visits. */
const GA_ID = "";


/* Google's own snippet. gtag() just drops its arguments into an array
   that Google's script reads once it loads, which is why we can call
   gtag() before that script has finished downloading. */
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }


/* GA4 records a page view by itself on every page load. Our own code
   also fires an event it calls "page_view", so forwarding that one
   would count every visit twice and inflate the numbers we are trying
   to read. We keep it for the on-screen panel but never send it on. */
const EVENTS_GA_RECORDS_ITSELF = ["page_view"];


/* utm_source only appears in the URL of the FIRST page someone lands
   on. The moment they click through to a product page it is gone, so
   without remembering it every product page would report "direct" and
   we could never tell an Instagram visitor from a WhatsApp one. */
function findSource() {
  const fromUrl = new URLSearchParams(location.search).get("utm_source");
  try {
    if (fromUrl) sessionStorage.setItem("bayt_source", fromUrl);
    return fromUrl || sessionStorage.getItem("bayt_source") || "direct";
  } catch (e) {
    /* Private browsing mode can block sessionStorage outright. Losing
       the campaign name is not worth breaking the page over. */
    return fromUrl || "direct";
  }
}
const SOURCE = findSource();


/* Each page fills these in before tracking anything, so every event
   knows which page and which product it came from. product stays null
   on the pages that are not about one specific product. */
const Analytics = {
  page: "unknown",
  product: null
};


function loadGoogleAnalytics() {
  if (!GA_ID) return;
  const tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(tag);
  gtag("js", new Date());
  gtag("config", GA_ID);
}
loadGoogleAnalytics();


/* The one function every page calls. detail is free-form extra context
   for a single event, like which filter was clicked. */
function track(eventName, detail) {
  const record = {
    event: eventName,
    product: Analytics.product,
    page: Analytics.page,
    source: SOURCE,
    /* Read from the document rather than a saved variable, because the
       language toggle changes it mid-visit and we want whichever
       language was on screen at the moment of the event. */
    language: document.documentElement.lang || "en",
    detail: detail || null
  };

  window.dataLayer.push(record);

  if (GA_ID && !EVENTS_GA_RECORDS_ITSELF.includes(eventName)) {
    gtag("event", eventName, {
      product: record.product,
      page: record.page,
      source: record.source,
      language: record.language,
      detail: record.detail
    });
  }

  /* Pages that draw their own funnel or counter panel set window.onTrack
     to update it. That drawing is genuinely page-specific, so it stays
     in the page instead of moving in here. */
  if (typeof window.onTrack === "function") window.onTrack(record);
}
