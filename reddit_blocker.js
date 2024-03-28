const observer = new MutationObserver(mutations => {
    mutations.forEach(({ target }) => {
        // Check if the current page is the Reddit homepage or a subreddit page
        if (['/', '/r/all/', '/r/popular/'].includes(window.location.pathname)) {
            // act only when on the homepage or subreddit pages

            const main = document.querySelector('[role=main]') || document.querySelector('main');
            if (main) {
              const parent = main.parentElement;
              parent.removeChild(main);
            }
        }        
    });
});

// Start observing mutations in the document
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});