//This is intercepting FES websocket for live connection, instead of the need of auto-refresh every 30 seconds!

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
                window.dispatchEvent(new CustomEvent('fes-ws-connected'));
            });

            ws.addEventListener('close', () => {
                window.__fesWsConnected = false;
                window.dispatchEvent(new CustomEvent('fes-ws-disconnected'));
            });

            ws.addEventListener('error', () => {
                window.__fesWsConnected = false;
                window.dispatchEvent(new CustomEvent('fes-ws-disconnected'));
            });
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