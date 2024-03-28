const observer = new MutationObserver(mutations => {
    console.log("MutationObserver triggered.");
    mutations.forEach(({ target }) => {
        // Check if the current page is the Reddit homepage or a subreddit page
        if (window.location.pathname === '/' || window.location.pathname.startsWith('/r/')) {
            // act only when on the homepage or subreddit pages
            console.log("Targeting node:", target);
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

console.log("Reddit Feed Blocker script loaded.");
