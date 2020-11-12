chrome.storage.sync.get('cleaner-enabled', function (data) {
  document.body.dataset['cleaner_extension_enabled'] = data['cleaner-enabled'] ? "true" : "false" ;
  chrome.storage.local.set({
    "cleaner-enabled-update-online": data['cleaner-enabled']
  }, () => {});
  setInterval(() => {
    chrome.storage.local.get('cleaner-enabled-update-online', function (data) {
        if(data['cleaner-enabled-update-online'] != document.body.dataset['cleaner_extension_enabled'])
          document.body.dataset['cleaner_extension_enabled'] = data['cleaner-enabled-update-online'];
    });
  }, 100);
});
