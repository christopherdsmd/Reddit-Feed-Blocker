const observer = new MutationObserver(mutations => {
    mutations.forEach(({ target }) => {
        if (['/', '/r/all/', '/r/popular/'].includes(window.location.pathname)) {
            const mainElement = document.querySelector('[role=main]') || document.querySelector('main');
            if (mainElement) {
              const delElement = main.parentElement;
              delElement.removeChild(main);
            }
        }        
    });
});

// Start observing mutations in the document
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
});