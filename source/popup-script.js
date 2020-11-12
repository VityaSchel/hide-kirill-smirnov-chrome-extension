let extension_switch = document.querySelector('#switch');

function toggle_switch() {
  extension_switch.classList.toggle('enabled');
  document.body.classList.toggle('enabled');
  let enabled = document.body.classList.contains("enabled");
  chrome.storage.sync.set({'cleaner-enabled': enabled}, () => {});
  document.querySelector('#heading').innerText = enabled ? "Уборщица работает" : "Уборщица отдыхает";
  chrome.storage.local.set({
    "cleaner-enabled-update-online": enabled
  }, () => {});
}

extension_switch.addEventListener('click', toggle_switch);

chrome.storage.sync.get('cleaner-enabled', function (data) {
  extension_switch.classList.remove('enabled');
  if(data['cleaner-enabled'])
    toggle_switch();
});
