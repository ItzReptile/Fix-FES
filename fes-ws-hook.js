//This is intercepting FES websocket for live connection (DO NOT EDIT UNLESS YOU KNOW WHAT YOU ARE DOING)

(function() {
    'use strict';
    if (window.__fesWsHookInstalled) return;
    window.__fesWsHookInstalled = true;

    const _OrigWS = window.WebSocket;

    function FESWebSocket(url, protocols) {
        const ws = protocols ? new _OrigWS(url, protocols) : new _OrigWS(url);

        if (typeof url === 'string' && url.includes('fesinstitute.com') && url.includes('socket.io')) {

            ws.addEventListener('message', function(event) {
                try {
                    const raw = event.data;
                    if (typeof raw === 'string' && raw.startsWith('42')) {
                        const parsed = JSON.parse(raw.slice(2));
                        const [eventName, payload] = parsed;
                        if (eventName === 'events' && payload?.type) {
                            window.dispatchEvent(new CustomEvent('fes-ws-event', {
                                detail: { type: payload.type, data: payload.data ?? null }
                            }));
                        }
                    }
                } catch (_) {}
            });

            ws.addEventListener('open', () => {
                window.__fesWsConnected = true;
                window.__fesWsInstance = ws;
                window.dispatchEvent(new CustomEvent('fes-ws-connected'));
            });

            ws.addEventListener('close', () => {
                window.__fesWsConnected = false;
                window.__fesWsInstance = null;
                window.dispatchEvent(new CustomEvent('fes-ws-disconnected'));
            });

            ws.addEventListener('error', () => {
                window.__fesWsConnected = false;
                window.__fesWsInstance = null;
                window.dispatchEvent(new CustomEvent('fes-ws-disconnected'));
            });

            // Emit helper — sends a Socket.IO event through the live socket
            // Usage: window.__fesWsEmit('events', { type: 'message', data: { ... } })
            window.__fesWsEmit = function(eventName, payload) {
                const sock = window.__fesWsInstance;
                if (!sock || sock.readyState !== 1) return false;
                sock.send('42' + JSON.stringify([eventName, payload]));
                return true;
            };
        }

        return ws;
    }

    FESWebSocket.prototype        = _OrigWS.prototype;
    FESWebSocket.CONNECTING       = _OrigWS.CONNECTING;
    FESWebSocket.OPEN             = _OrigWS.OPEN;
    FESWebSocket.CLOSING          = _OrigWS.CLOSING;
    FESWebSocket.CLOSED           = _OrigWS.CLOSED;
    Object.setPrototypeOf(FESWebSocket, _OrigWS);

    window.WebSocket = FESWebSocket;

})();