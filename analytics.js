/* -----------------------------------------------------------------
   Shared analytics for every page on this site.

   Why this file exists: the tracking code used to be pasted into all
   13 HTML files, in three slightly different versions, so each page
   recorded a different set of fields. Worse, a page accidentally left
   out would look exactly like a product nobody wanted. One file means
   every page measures the same things the same way.

   Everything is wrapped in the function at the bottom so that the
   names used in here stay in here. Without that, a variable named
   "started" in this file and a variable named "started" in a page
   would collide and stop the page working. Only two names are handed
   out to the pages: track() and Analytics.
   ----------------------------------------------------------------- */

(function () {

/* Paste your GA4 Measurement ID here. It looks like "G-XXXXXXXXXX"
   and comes from analytics.google.com once you create a property.

   Leaving it empty is deliberate and safe: the site still works and
   the on-screen TEST panel still fills in, but nothing is sent to
   Google. That means previewing pages on your own machine will not
   pollute the real numbers with your own visits. */
const GA_ID = "G-NMQF7DPPKF";


/* Google's own snippet. gtag() just drops its arguments into a list
   that Google's script reads once it finishes loading, which is why
   we can call gtag() before that script has even arrived. */
window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }


/* GA4 records a page view by itself on every page load. Our own code
   also fires an event it calls "page_view", so passing that one along
   would count every visit twice and inflate the very numbers we are
   trying to read. We keep it for the on-screen panel but never send
   it to Google. */
const EVENTS_GA_RECORDS_ITSELF = ["page_view"];


/* utm_source only appears in the address of the FIRST page someone
   lands on. The moment they click through to a product page it is
   gone, so without remembering it every product page would report
   "direct" and we could never tell an Instagram visitor from a
   WhatsApp one. */
function findSource() {
  const fromUrl = new URLSearchParams(location.search).get("utm_source");
  try {
    if (fromUrl) sessionStorage.setItem("bayt_source", fromUrl);
    return fromUrl || sessionStorage.getItem("bayt_source") || "direct";
  } catch (e) {
    /* Private browsing can block this storage outright. Losing the
       campaign name is not worth breaking the page over. */
    return fromUrl || "direct";
  }
}

const started = Date.now();


/* Each page fills in page and product before tracking anything, so
   every event knows where it came from. product stays null on pages
   that are not about one specific product. */
const Analytics = {
  page: "unknown",
  product: null,
  source: findSource(),
  secondsHere: function () {
    return Math.round((Date.now() - started) / 1000);
  }
};


if (GA_ID) {
  const tag = document.createElement("script");
  tag.async = true;
  tag.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(tag);
  gtag("js", new Date());
  gtag("config", GA_ID);
}


/* The on-screen TEST panel line. Every page drew this identically, so
   it lives here now. Pages without a panel simply have no #log
   element and this does nothing. */
function addPanelLine(record, seconds) {
  const log = document.getElementById("log");
  if (!log) return;
  const note = record.product || record.detail;
  const line = document.createElement("div");
  line.innerHTML =
    '<span class="t">' + seconds + 's</span>' +
    '<span class="e">' + record.event +
    (note ? ' <span style="color:var(--slate)">' + note + '</span>' : '') +
    '</span>';
  log.prepend(line);
}


/* The one function every page calls.
     eventName - what happened, e.g. "add_to_cart"
     detail    - free-form extra context for this one event
     product   - only needed on pages that report on several products,
                 like the listing page. Elsewhere Analytics.product
                 already holds it. */
function track(eventName, detail, product) {
  const record = {
    event: eventName,
    product: product || Analytics.product,
    page: Analytics.page,
    source: Analytics.source,
    /* Read the language from the document rather than a saved copy,
       because the toggle changes it mid-visit and we want whichever
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

  addPanelLine(record, Analytics.secondsHere());

  /* Pages that draw their own funnel or counter set window.onTrack to
     keep it updated. That drawing is genuinely page-specific, so it
     stays in the page rather than moving in here. */
  if (typeof window.onTrack === "function") window.onTrack(record);
}


/* The only two names this file adds to the page. */
window.Analytics = Analytics;
window.track = track;

})();
