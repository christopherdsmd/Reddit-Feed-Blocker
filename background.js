chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      // Check if the request URL matches the Reddit feeds
      if (
        details.url.startsWith("https://www.reddit.com/")
        && (
          details.url.includes("/hot.json")
          || details.url.includes("/new.json")
          || details.url.includes("/top.json")
        )
      ) {
        // Cancel the request
        return { cancel: true };
      }
      // Allow the request to continue
      return { cancel: false };
    },
    { urls: ["<all_urls>"] }, // Intercept all URLs
    ["blocking"]
  );