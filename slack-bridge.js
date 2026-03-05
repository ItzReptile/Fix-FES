window.addEventListener('fes-slack-request', async (e) => {
  const { reqId, type, method, params, body, token } = e.detail;

  try {
    const response = await chrome.runtime.sendMessage({ type, method, params, body, token });
    window.dispatchEvent(new CustomEvent('fes-slack-response', {
      detail: { reqId, ok: response.ok, data: response.data, error: response.error }
    }));
  } catch (err) {
    window.dispatchEvent(new CustomEvent('fes-slack-response', {
      detail: { reqId, ok: false, error: err.message }
    }));
  }
});
