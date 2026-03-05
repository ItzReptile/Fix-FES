chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {

  if (message.type === 'SLACK_GET' || message.type === 'SLACK_POST') {
    const params = new URLSearchParams();
    params.set('token', message.token);

    // For GET calls the data is in message.params, for POST it's in message.body
    const payload = message.params || message.body || {};
    Object.entries(payload).forEach(([k, v]) => {
      params.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
    });

    fetch('https://slack.com/api/' + message.method, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
    })
      .then(r => r.json())
      .then(data => sendResponse({ ok: true, data }))
      .catch(e => sendResponse({ ok: false, error: e.message }));

    return true; // keep message channel open for async response
  }
});
