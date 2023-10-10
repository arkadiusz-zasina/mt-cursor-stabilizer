(async () => {
    console.log('start');
    const src = chrome.runtime.getURL('scripts/content.js');
    const contentScript = await import(src);
    contentScript.main();
  })();