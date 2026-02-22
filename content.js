//////////////////CONFIGURATION///////////////////////////////////////////////////////////////////
const CONFIG = {
    font: {
        family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        importUrl: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    },
    background: {
        image: 'https://images8.alphacoders.com/135/thumb-1920-1354384.png',
        overlay: 'rgba(14, 10, 38, 0.58)',
        solidColor: '#0e0a26',
    },
    layout: { leftWidth: '20%', centerWidth: '60%', rightWidth: '20%', navbarHeight: '48px' },
    cards: {
        background: 'rgba(28, 18, 58, 0.72)',
        backgroundHover: 'rgba(42, 26, 82, 0.88)',
        backgroundActive: 'rgba(0, 185, 240, 0.13)',
        border: 'rgba(0, 195, 255, 0.14)',
        borderHover: 'rgba(0, 195, 255, 0.28)',
        borderActive: 'rgba(0, 195, 255, 0.50)',
        shadow: '0 2px 12px rgba(0, 175, 230, 0.12)',
        blur: '12px', borderRadius: '8px',
    },
    columns: {
        background: 'rgba(14, 10, 38, 0.68)',
        headerBackground: 'rgba(24, 16, 52, 0.90)',
        blur: '14px',
    },
    navbar: {
        background: 'rgba(12, 8, 30, 0.90)',
        blur: '14px',
        border: 'rgba(0, 195, 255, 0.12)',
        linkColor: 'rgba(175, 210, 255, 0.60)',
        linkHoverColor: '#cce8ff',
        linkActiveColor: '#cce8ff',
        linkActiveBg: 'rgba(0, 195, 255, 0.12)',
    },
    tabs: {
        activeColor: '#7ee8fa',
        inactiveColor: 'rgba(175, 210, 255, 0.42)',
        underlineColor: '#7ee8fa',
        hoverBg: 'rgba(0, 195, 255, 0.07)',
    },
    text: {
        primary: '#eaf4ff',
        secondary: 'rgba(215, 238, 255, 0.88)',
        muted: 'rgba(175, 210, 255, 0.55)',
        veryMuted: 'rgba(155, 190, 240, 0.35)',
        link: '#7ee8fa',
    },
    avatar: {
        border: 'rgba(0, 195, 255, 0.20)',
        borderWidth: '2px',
        fallbackBg: 'rgba(126, 232, 250, 0.18)',
        fallbackColor: '#eaf4ff',
        size: '32px', sizeSmall: '24px', sizeLarge: '36px',
        borderRadius: '9999px',
    },
    buttons: {
        background: 'rgba(0, 195, 255, 0.09)',
        backgroundHover: 'rgba(0, 195, 255, 0.19)',
        border: 'rgba(0, 195, 255, 0.18)',
        borderHover: 'rgba(0, 195, 255, 0.34)',
        text: '#cce8ff',
        borderRadius: '6px',
    },
    messageBox: {
        background: 'rgba(18, 12, 44, 0.32)',
        border: 'rgba(0, 195, 255, 0.10)',
        maxChars: 80,
    },
    chat: {
        background: 'rgba(14, 10, 38, 0.74)',
        headerBackground: 'rgba(22, 15, 50, 0.92)',
        headerBlur: '12px',
        messageBubbleMentor: 'rgba(0, 175, 230, 0.16)',
        messageBubbleStudent: 'rgba(210, 50, 160, 0.13)',
        messageBubbleBorderRadius: '12px',
        messageHoverBg: 'rgba(0, 195, 255, 0.06)',
        inputBackground: 'rgba(12, 8, 30, 0.92)',
        inputBorder: 'rgba(0, 195, 255, 0.16)',
        inputFocusBorder: 'rgba(126, 232, 250, 0.48)',
        inputPlaceholder: 'rgba(155, 190, 240, 0.35)',
        timestampColor: 'rgba(155, 190, 240, 0.35)',
        codeBlockBackground: 'rgba(22, 15, 50, 0.55)',
        codeBlockBorder: 'rgba(0, 195, 255, 0.14)',
        loadMoreBackground: 'rgba(0, 195, 255, 0.08)',
        loadMoreBorder: 'rgba(0, 195, 255, 0.16)',
        imageMaxWidth: '360px', imageBorderRadius: '8px',
    },
    toolbar: {
        background: 'rgba(18, 12, 44, 0.28)',
        buttonColor: 'rgba(175, 210, 255, 0.42)',
        buttonHoverColor: '#cce8ff',
        buttonHoverBg: 'rgba(0, 195, 255, 0.10)',
        buttonActiveColor: '#7ee8fa',
        dividerColor: 'rgba(0, 195, 255, 0.13)',
    },
    sendButton: {
        background: 'rgba(126, 232, 250, 0.80)',
        backgroundHover: 'rgba(126, 232, 250, 1)',
        color: '#08061a',
        borderRadius: '8px',
    },
    actionButtons: {
        solvedBg: 'rgba(34, 197, 94, 0.14)', solvedBorder: 'rgba(34, 197, 94, 0.38)', solvedColor: '#4ade80', solvedHoverBg: 'rgba(34, 197, 94, 0.28)',
        leaveBg: 'rgba(239, 68, 68, 0.14)', leaveBorder: 'rgba(239, 68, 68, 0.38)', leaveColor: '#f87171', leaveHoverBg: 'rgba(239, 68, 68, 0.28)',
    },
    modal: {
        overlayBg: 'rgba(10, 7, 26, 0.90)',
        background: 'rgba(22, 15, 50, 0.98)',
        border: 'rgba(0, 195, 255, 0.16)',
        borderRadius: '12px',
        optionBg: 'rgba(0, 195, 255, 0.06)',
        optionBorder: 'rgba(0, 195, 255, 0.16)',
        optionHoverBg: 'rgba(0, 195, 255, 0.16)',
        optionHoverBorder: 'rgba(126, 232, 250, 0.48)',
        successBg: 'rgba(34, 197, 94, 0.15)', successColor: '#4ade80',
        errorBg: 'rgba(239, 68, 68, 0.15)', errorColor: '#f87171',
    },
    assignments: {
        cardBackground: 'rgba(28, 18, 58, 0.72)',
        cardBorder: 'rgba(0, 195, 255, 0.14)',
        cardBorderHover: 'rgba(0, 195, 255, 0.30)',
        linkColor: '#7ee8fa',
        approveBg: 'rgba(126, 232, 250, 0.80)',
        approveHoverBg: 'rgba(126, 232, 250, 1)',
        deleteBg: '#ef4444', deleteHoverBg: '#dc2626',
    },
    scrollbar: {
        width: '6px', trackBackground: 'transparent',
        thumbBackground: 'rgba(0, 195, 255, 0.14)',
        thumbHoverBackground: 'rgba(0, 195, 255, 0.28)',
        borderRadius: '3px',
    },
    badge: { background: '#d63aa0', color: '#fff', fontSize: '0.6rem' },
    dividers: { color: 'rgba(0, 195, 255, 0.11)' },
    emptyState: { color: 'rgba(155, 190, 240, 0.36)' },
    intervals: { ticketRefresh: 30000, assignmentRefresh: 30000, messageRefresh: 8000, messagesPerPage: 30 },
}
// end of CONFIG, rest of the code is logic and UI related to the extension's functionality (DO NOT EDIT BELOW UNLESS YOU KNOW WHAT YOU ARE DOING)
const MODULE_MAP = {
    'Module 2':             { ids: [39] },
    'Module 4':             { ids: [40, 41] },
    'Module 6':             { ids: [44, 42] },
    'Virtual Internship':   { ids: [52, 50, 51] },
    'Advanced Internship':  { ids: [56] },
    'Skinstric':            { ids: [47] },
};
function pageContextInterceptor() {
    const _origFetch = window.fetch;
    window.fetch = async function(...args) {
        const response = await _origFetch.apply(this, args);
        try {
            const url = typeof args[0] === 'string' ? args[0] : (args[0]?.url || '');
            if (url.includes('/tickets') && url.includes('type=')) {
                const clone = response.clone();
                clone.json().then(data => { if (data?.items) { const type = new URL(url).searchParams.get('type'); window.dispatchEvent(new CustomEvent('fes-tickets-data', { detail: { type, items: data.items, total: data.total||data.count||0 } })); } }).catch(()=>{});
            }
        } catch(e) {}
        return response;
    };

    async function getToken() {
        try { if (window.Clerk?.session) return await window.Clerk.session.getToken(); } catch(e) {}
        try { const s = window.Clerk?.client?.sessions; if (s?.length) return await (s.find(x=>x.status==='active')||s[0]).getToken(); } catch(e) {}
        return null;
    }

    window.__fesRefreshTickets = async function() {
        const token = await getToken(); if (!token) { window.dispatchEvent(new Event('focus')); return; }
        for (const type of ['my','other','unassigned']) {
            try { const r = await _origFetch(`https://backend-preview.fesinstitute.com/tickets?type=${type}&offset=0&limit=20`, { headers: { 'Authorization': `Bearer ${token}` } }); const d = await r.json(); if (d?.items) window.dispatchEvent(new CustomEvent('fes-tickets-data', { detail: { type, items: d.items, total: d.total||d.count||0 } })); } catch(e) {}
        }
    };
    window.__fesFetchMessages = async function(channelId, offset, limit, append) {
        const token = await getToken(); if (!token) return;
        try { const now = new Date().toISOString(); const r = await _origFetch(`https://backend-preview.fesinstitute.com/messages/program/fes/channel/${channelId}?offset=${offset||0}&limit=${limit||30}&start_from=${now}&with_history=true`, { headers: { 'Authorization': `Bearer ${token}` } }); const d = await r.json(); if (d?.items) window.dispatchEvent(new CustomEvent('fes-messages-data', { detail: { channelId, items: d.items, total: d.total||d.count||0, offset: offset||0, append: !!append } })); } catch(e) {}
    };
    window.__fesSendMessage = async function(channelId, messageHtml, imageUrls) {
        const token = await getToken(); if (!token) return false;
        try {
            let html = messageHtml || '';
            if (imageUrls?.length) imageUrls.forEach(url => { html += `<img src="${url}" />`; });
            const r = await _origFetch(`https://backend-preview.fesinstitute.com/messages/program/fes/channel/${channelId}`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ message: html }) });
            if (r.ok) { window.dispatchEvent(new CustomEvent('fes-message-sent', { detail: { ok: true, channelId } })); return true; }
            return false;
        } catch(e) { return false; }
    };
    window.__fesUploadImage = async function(base64Data, fileName, mimeType) {
        const token = await getToken(); if (!token) return null;
        try {
            const byteChars = atob(base64Data); const byteNumbers = new Array(byteChars.length);
            for (let i = 0; i < byteChars.length; i++) byteNumbers[i] = byteChars.charCodeAt(i);
            const blob = new Blob([new Uint8Array(byteNumbers)], { type: mimeType });
            const fd = new FormData(); fd.append('file', blob, fileName);
            const r = await _origFetch(`https://backend-preview.fesinstitute.com/upload`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}` }, body: fd });
            if (r.ok) { const d = await r.json(); const url = d.url||d.fileUrl||d.file_url||d.data?.url; if (url) return url; }
            return `data:${mimeType};base64,${base64Data}`;
        } catch(e) { return `data:${mimeType};base64,${base64Data}`; }
    };
    window.__fesTicketSolved = async function(ticketId) {
        const token = await getToken(); if (!token) return false;
        try { const r = await _origFetch(`https://backend-preview.fesinstitute.com/tickets/solved/${ticketId}`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}` } }); window.dispatchEvent(new CustomEvent('fes-ticket-action', { detail: { action:'solved', ticketId, ok:r.ok } })); return r.ok; } catch(e) { return false; }
    };
    window.__fesTicketLeave = async function(ticketId) {
        const token = await getToken(); if (!token) return false;
        try { const r = await _origFetch(`https://backend-preview.fesinstitute.com/tickets/leave/${ticketId}`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}` } }); window.dispatchEvent(new CustomEvent('fes-ticket-action', { detail: { action:'leave', ticketId, ok:r.ok } })); return r.ok; } catch(e) { return false; }
    };
    window.__fesAssignTicket = async function(ticketId) {
        const token = await getToken(); if (!token) return false;
        try { const r = await _origFetch(`https://backend-preview.fesinstitute.com/tickets/join/${ticketId}`, { method: 'POST', headers: { 'Authorization': `Bearer ${token}` } }); window.dispatchEvent(new CustomEvent('fes-ticket-assigned', { detail: { ticketId, ok: r.ok } })); return r.ok; } catch(e) { return false; }
    };
    window.__fesFetchAssignments = async function(offset, limit, search) {
        const token = await getToken(); if (!token) return;
        try { const r = await _origFetch(`https://backend-preview.fesinstitute.com/assignments/program/fes/all?offset=${offset||0}&limit=${limit||10}&search=${encodeURIComponent(search||'')}`, { headers: { 'Authorization': `Bearer ${token}` } }); const d = await r.json(); if (d?.items) window.dispatchEvent(new CustomEvent('fes-assignments-data', { detail: { items: d.items, total: d.total||d.count||0, offset: offset||0 } })); } catch(e) {}
    };
    window.__fesFetchAssignmentCount = async function() {
        const token = await getToken(); if (!token) return;
        try { const r = await _origFetch(`https://backend-preview.fesinstitute.com/assignments/program/fes/count`, { headers: { 'Authorization': `Bearer ${token}` } }); const d = await r.json(); if (d?.count !== undefined) window.dispatchEvent(new CustomEvent('fes-assignment-count', { detail: { count: d.count } })); } catch(e) {}
    };

    window.__fesUnlockModules = async function(moduleIds, userAuthId) {
        const token = await getToken(); if (!token) return { ok: false, error: 'No token' };
        const results = [];
        for (const mid of moduleIds) {
            try {
                const r = await _origFetch(`https://backend-preview.fesinstitute.com/module-access/program/fes/module/${mid}`, {
                    method: 'POST', headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
                    body: JSON.stringify({ user_auth_id: userAuthId })
                });
                results.push({ mid, ok: r.ok, status: r.status });
            } catch(e) { results.push({ mid, ok: false, error: e.message }); }
        }
        window.dispatchEvent(new CustomEvent('fes-module-unlock-result', { detail: { results, userAuthId } }));
        return { ok: results.every(r => r.ok), results };
    };

    window.__fesFetchModuleAccess = async function(userAuthId) {
        const token = await getToken(); if (!token) return;
        try {
            const r = await _origFetch(`https://backend-preview.fesinstitute.com/module-access/program/fes/user/${userAuthId}`, { headers: { 'Authorization': `Bearer ${token}` } });
            const d = await r.json();
            window.dispatchEvent(new CustomEvent('fes-module-access', { detail: { userAuthId, data: d } }));
        } catch(e) {}
    };

    window.__fesDeleteAssignment = async function(assignmentId) {
        const token = await getToken(); if (!token) return false;
        try {
            const r = await _origFetch(`https://backend-preview.fesinstitute.com/assignments/${assignmentId}`, { method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` } });
            window.dispatchEvent(new CustomEvent('fes-assignment-deleted', { detail: { id: assignmentId, ok: r.ok } }));
            return r.ok;
        } catch(e) { return false; }
    };

}

function injectPageContext() { const s = document.createElement('script'); s.textContent = '(' + pageContextInterceptor.toString() + ')();'; (document.head||document.documentElement).appendChild(s); s.remove(); }

const ticketsCache = { my: [], other: [], unassigned: [], totals: { my:0, other:0, unassigned:0 }, ready: false };
let messagesCache = {}, assignmentsCache = { items: [], total: 0, count: 0 };
let activeTicketId = null, activeChannelId = null, activeTicketSource = null, activeTicketData = null;
let pendingAutoOpenTicketId = null;
let pendingImages = [], msgRefreshTimer = null;

window.addEventListener('fes-ws-event', e => {
    const { type, data } = e.detail;
    switch (type) {
        case 'refresh_channels':
        case 'ticket_solved':
        case 'ticket_left':
            triggerRefresh();
            break;
        case 'ticket_assigned':
            if (data?.ticket_id || data?.id) pendingAutoOpenTicketId = data.ticket_id || data.id;
            triggerRefresh();
            break;
        case 'message':

            if (data?.channel_id) {
                if (String(data.channel_id) === String(activeChannelId)) {
                    triggerFetchMessages(data.channel_id);
                } else {
                    triggerRefresh();
                }
            }
            break;
        case 'assignment_submitted':
            triggerFetchAssignments(0, 10, '');
            triggerFetchAssignmentCount();
            break;
        default:
            break;
    }
});

window.addEventListener('fes-ws-connected', () => {
    const ind = document.getElementById('fes-ws-indicator');
    if (ind) {
        ind.title = 'Real-time: WebSocket connected ✓';
        ind.style.background = '#4ade80';
        ind.style.animation = 'none';
    }
});
window.addEventListener('fes-ws-disconnected', () => {
    const ind = document.getElementById('fes-ws-indicator');
    if (ind) {
        ind.title = 'Polling every 30s (WS disconnected)';
        ind.style.background = '#f59e0b';
        ind.style.animation = 'fes-pulse 2s infinite';
    }
});

window.addEventListener('fes-tickets-data', e => {
    const { type, items, total } = e.detail; if (!type || !items) return;
    ticketsCache[type] = items; ticketsCache.totals[type] = total; ticketsCache.ready = true;
    if (document.getElementById('three-col')) populateColumns();
    if (pendingAutoOpenTicketId && type === 'my') {
        const ticket = ticketsCache.my.find(t => t.id == pendingAutoOpenTicketId);
        if (ticket) { pendingAutoOpenTicketId = null; handleTicketClick(ticket, 'my'); }
    }
});
window.addEventListener('fes-messages-data', e => {
    const { channelId, items, total, offset, append } = e.detail; if (!channelId || !items) return;

    const prev = messagesCache[channelId];

    if (append && prev) {
        const existing = prev.items; const ids = new Set(existing.map(m=>m.id));
        const newItems = items.filter(m=>!ids.has(m.id));
        if (newItems.length === 0) return;
        messagesCache[channelId].items = [...existing, ...newItems];
        messagesCache[channelId].total = total;
    } else {
        const old = prev?.items || [];
        const merged = [...items];
        old.forEach(m => { if (!merged.find(n=>n.id===m.id)) merged.push(m); });

        const prevIds = (prev?.items || []).map(m=>m.id).sort().join(',');
        const nextIds = merged.map(m=>m.id).sort().join(',');
        const prevMax = prev?.items?.length ? Math.max(...prev.items.map(m=>m.id)) : 0;
        const nextMax = merged.length ? Math.max(...merged.map(m=>m.id)) : 0;

        if (prev?.items?.length && prevIds === nextIds && prevMax === nextMax) { return; }
        messagesCache[channelId] = { items: merged, total };
    }

    if (String(channelId) === String(activeChannelId)) {
        renderChatMessages(channelId, messagesCache[channelId].items, append);
    }
});
window.addEventListener('fes-assignments-data', e => {
    const { items, total, offset } = e.detail;
    if (offset > 0) { const ids = new Set(assignmentsCache.items.map(a=>a.id)); items.forEach(a => { if (!ids.has(a.id)) assignmentsCache.items.push(a); }); }
    else { assignmentsCache.items = items; }
    assignmentsCache.total = total; populateAssignments();
});
window.addEventListener('fes-assignment-count', e => { assignmentsCache.count = e.detail.count; const el = document.getElementById('count-assignments'); if (el) el.textContent = `(${e.detail.count})`; });
window.addEventListener('fes-ticket-action', e => { if (e.detail?.ok) { activeTicketId = null; activeChannelId = null; activeTicketSource = null; activeTicketData = null; resetChatArea(); triggerRefresh(); } });
window.addEventListener('fes-message-sent', e => { if (e.detail?.ok && e.detail?.channelId) setTimeout(() => triggerFetchMessages(e.detail.channelId), 500); });
window.addEventListener('fes-assignment-deleted', e => { if (e.detail?.ok) { assignmentsCache.items = assignmentsCache.items.filter(a => { const ids = (a.assignments||[]).map(x=>x.id); return !ids.includes(e.detail.id); }); populateAssignments(); triggerFetchAssignmentCount(); } });

function injectCall(code) { const s = document.createElement('script'); s.textContent = code; document.head.appendChild(s); s.remove(); }
function triggerRefresh() { injectCall('if(window.__fesRefreshTickets) window.__fesRefreshTickets();'); }
function triggerFetchMessages(c, o, l, a) { injectCall(`if(window.__fesFetchMessages) window.__fesFetchMessages(${c}, ${o||0}, ${l||CONFIG.intervals.messagesPerPage}, ${!!a});`); }
function triggerSendMessage(c, h, imgs) { injectCall(`(async()=>{ await window.__fesSendMessage(${c}, ${JSON.stringify(h)}, ${JSON.stringify(imgs||[])}); })();`); }
function triggerUploadAndSend(c, h, images) {
    injectCall(`(async()=>{ const imgs=${JSON.stringify(images)}; const urls=[]; for(const img of imgs){const u=await window.__fesUploadImage(img.base64,img.name,img.mime);if(u)urls.push(u);} await window.__fesSendMessage(${c},${JSON.stringify(h)},urls); })();`);
}
function triggerFetchAssignments(o, l, s) { injectCall(`if(window.__fesFetchAssignments) window.__fesFetchAssignments(${o||0}, ${l||10}, ${JSON.stringify(s||'')});`); }
function triggerFetchAssignmentCount() { injectCall(`if(window.__fesFetchAssignmentCount) window.__fesFetchAssignmentCount();`); }
function triggerTicketSolved(id) { injectCall(`if(window.__fesTicketSolved) window.__fesTicketSolved(${id});`); }
function triggerTicketLeave(id) { injectCall(`if(window.__fesTicketLeave) window.__fesTicketLeave(${id});`); }
function triggerAssignTicket(id) { injectCall(`if(window.__fesAssignTicket) window.__fesAssignTicket(${id});`); }
function triggerUnlockModules(moduleIds, userAuthId) { injectCall(`if(window.__fesUnlockModules) window.__fesUnlockModules(${JSON.stringify(moduleIds)}, ${JSON.stringify(userAuthId)});`); }
function triggerDeleteAssignment(id) { injectCall(`if(window.__fesDeleteAssignment) window.__fesDeleteAssignment(${id});`); }
function triggerSendToChannel(channelId, html) { injectCall(`(async()=>{ await window.__fesSendMessage(${channelId}, ${JSON.stringify(html)}, []); })();`); }

const TARGET_URLS = ['https://app.fesinstitute.com/dashboard/fes/admin/tickets', 'https://beta.fesinstitute.com/dashboard/fes/program'];
function isTargetPage(url) { return TARGET_URLS.some(t => url.split('?')[0].split('#')[0].startsWith(t)); }
let currentUrl = window.location.href, isOnTargetPage = false;
function checkUrl() { const u = window.location.href, was = isOnTargetPage; isOnTargetPage = isTargetPage(u); if (u !== currentUrl) { currentUrl = u; if (isOnTargetPage && !was) setTimeout(initExt, 500); else if (!isOnTargetPage && was) teardown(); } }
setInterval(checkUrl, 500);
function teardown() { document.getElementById('three-col')?.remove(); document.getElementById('fes-ext-styles')?.remove(); if (msgRefreshTimer) clearInterval(msgRefreshTimer); if (assignmentRefreshTimer) clearInterval(assignmentRefreshTimer); const root = document.getElementById('root'); if (root) { root.style.cssText = ''; root.removeAttribute('data-fes-hidden'); } }

function stripHtml(h) { const t = document.createElement('div'); t.innerHTML = h; return t.textContent || ''; }
function trimText(t, m) { const s = t.trim(); return s.length > m ? s.slice(0, m) + '…' : s; }
function timeAgo(ts) { if (!ts) return ''; const d = Math.floor((Date.now()-new Date(ts).getTime())/1000); if (d<60) return 'now'; if (d<3600) return `${Math.floor(d/60)}m`; if (d<86400) return `${Math.floor(d/3600)}h`; return `${Math.floor(d/86400)}d`; }
function formatTime(ts) { return ts ? new Date(ts).toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' }) : ''; }
function formatDate(ts) { return ts ? new Date(ts).toLocaleDateString([], { month:'short', day:'numeric', year:'numeric' }) : ''; }
function makeAvatar(url, name, size) {
    size = size || CONFIG.avatar.size; const i = (name||'?')[0].toUpperCase();
    if (url && url.startsWith('http')) return `<img src="${url}" alt="${i}" style="width:${size};height:${size};border-radius:${CONFIG.avatar.borderRadius};border:${CONFIG.avatar.borderWidth} solid ${CONFIG.avatar.border};object-fit:cover;flex-shrink:0;" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"><div style="display:none;width:${size};height:${size};border-radius:${CONFIG.avatar.borderRadius};background:${CONFIG.avatar.fallbackBg};color:${CONFIG.avatar.fallbackColor};font-weight:600;font-size:calc(${size} * 0.45);align-items:center;justify-content:center;flex-shrink:0;border:${CONFIG.avatar.borderWidth} solid ${CONFIG.avatar.border};">${i}</div>`;
    return `<div style="width:${size};height:${size};border-radius:${CONFIG.avatar.borderRadius};background:${CONFIG.avatar.fallbackBg};color:${CONFIG.avatar.fallbackColor};font-weight:600;font-size:calc(${size} * 0.45);display:flex;align-items:center;justify-content:center;flex-shrink:0;border:${CONFIG.avatar.borderWidth} solid ${CONFIG.avatar.border};">${i}</div>`;
}

function getTicketTimestamp(ticket) {
    const lastMsg = ticket.last_message;
    const role = lastMsg?.users?.role;
    const isStudentLast = lastMsg && !['mentor','moderator','admin'].includes(role);

    if (isStudentLast) {

        const ms = new Date(lastMsg.created_at).getTime();
        return isNaN(ms) ? 0 : ms;
    }

    return Number.MAX_SAFE_INTEGER;
}

function sortTicketsByWait(tickets) {
    return [...tickets].sort((a, b) => getTicketTimestamp(a) - getTicketTimestamp(b));

}

function makeTicketCard(ticket, source) {
    const student = ticket.student||{}, lastMsg = ticket.last_message||{}, channel = ticket.channel||{};
    const unread = ticket.unread_count||0, assignees = ticket.ticketsAssignees||ticket.tickets_assignees||[];
    const name = student.display_name||'Unknown', imgUrl = student.image_url||'';
    const channelName = channel.channel_name||'';
    const msgText = lastMsg.message ? trimText(stripHtml(lastMsg.message), CONFIG.messageBox.maxChars) : 'No messages';
    const msgTime = timeAgo(lastMsg.created_at);

 
    const lastRole = lastMsg?.users?.role || '';
    const lastIsStudent = lastMsg && !['mentor','moderator','admin'].includes(lastRole);
    const lastMsgMs = lastMsg?.created_at ? new Date(lastMsg.created_at).getTime() : 0;
    const waitMs = lastIsStudent ? Date.now() - lastMsgMs : 0;
    const waitMins = Math.floor(waitMs / 60000);
    let waitLabel = '';
    if (!lastIsStudent) waitLabel = 'replied';
    else if (waitMins < 1) waitLabel = 'just now';
    else if (waitMins < 60) waitLabel = `${waitMins}m wait`;
    else if (waitMins < 1440) waitLabel = `${Math.floor(waitMins/60)}h wait`;
    else waitLabel = `${Math.floor(waitMins/1440)}d wait`;

    const lastSenderImg = lastMsg.users?.image_url||'', lastSenderName = lastMsg.users?.display_name||'';
    const isActive = activeTicketId === ticket.id;

    const card = document.createElement('div');
    card.className = 'fes-card'; card.dataset.ticketId = ticket.id; card.dataset.studentName = name; card.dataset.channelId = ticket.channel_id||''; card.dataset.source = source;
    const bg = isActive ? CONFIG.cards.backgroundActive : CONFIG.cards.background;
    const bdr = isActive ? CONFIG.cards.borderActive : CONFIG.cards.border;
    card.style.cssText = `cursor:pointer;border-radius:${CONFIG.cards.borderRadius};border:1px solid ${bdr};background:${bg};backdrop-filter:blur(${CONFIG.cards.blur});transition:all 0.15s;box-shadow:${CONFIG.cards.shadow};margin-bottom:6px;overflow:hidden;`;
    card.innerHTML = `<div style="padding:10px 12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
            ${makeAvatar(imgUrl, name, CONFIG.avatar.size)}
            <div style="flex:1;min-width:0;">
                <div style="display:flex;align-items:center;justify-content:space-between;">
                    <span style="font-size:13px;font-weight:600;color:${CONFIG.text.primary};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:70%;">${name}</span>
                    <span style="font-size:10px;color:${!lastIsStudent ? CONFIG.text.veryMuted : waitMins > 30 ? '#fbbf24' : CONFIG.text.veryMuted};flex-shrink:0;font-weight:${lastIsStudent && waitMins > 30 ? '600' : '400'};" title="${new Date(getTicketTimestamp(ticket)).toLocaleString()}">${waitLabel}</span>
                </div>
                <div style="font-size:11px;color:${CONFIG.text.muted};margin-top:1px;">#${ticket.id}${channelName ? ' · '+channelName : ''}</div>
            </div>
            ${unread > 0 ? `<span style="background:${CONFIG.badge.background};color:${CONFIG.badge.color};font-size:${CONFIG.badge.fontSize};padding:2px 6px;border-radius:9999px;font-weight:600;flex-shrink:0;">${unread}</span>` : ''}
        </div>
        <div style="border-radius:6px;border:1px solid ${CONFIG.messageBox.border};background:${CONFIG.messageBox.background};padding:6px 8px;">
            <div style="display:flex;align-items:center;gap:6px;">
                ${lastSenderImg ? makeAvatar(lastSenderImg, lastSenderName, '18px') : ''}
                <p style="font-size:11px;color:${CONFIG.text.secondary};margin:0;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${msgText}</p>
            </div>
        </div>
    </div>`;
    card.addEventListener('mouseenter', () => { if (activeTicketId !== ticket.id) { card.style.background = CONFIG.cards.backgroundHover; card.style.borderColor = CONFIG.cards.borderHover; } });
    card.addEventListener('mouseleave', () => { if (activeTicketId !== ticket.id) { card.style.background = CONFIG.cards.background; card.style.borderColor = CONFIG.cards.border; } });
    card.addEventListener('click', () => handleTicketClick(ticket, source));
    return card;
}

function makeAssignmentCard(student) {
    const name = student.display_name||'Unknown', imgUrl = student.image_url||'', email = student.email||'';
    const userAuthId = student.auth_id || '';
    const assignments = (student.assignments||[]).filter(a => !a.has_been_reviewed);
    if (assignments.length === 0) return null;

    const card = document.createElement('div');
    card.className = 'fes-card';
    card.style.cssText = `border-radius:${CONFIG.cards.borderRadius};border:1px solid ${CONFIG.assignments.cardBorder};background:${CONFIG.assignments.cardBackground};backdrop-filter:blur(${CONFIG.cards.blur});transition:all 0.15s;margin-bottom:6px;overflow:hidden;`;

    let assignHtml = '';
    assignments.forEach(a => {
        const submitted = timeAgo(a.created_at);
        const aUserAuthId = a.user_auth_id || userAuthId;
        assignHtml += `<div style="border:1px solid ${CONFIG.messageBox.border};border-radius:6px;background:${CONFIG.messageBox.background};padding:8px;margin-top:6px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                <span style="font-size:12px;font-weight:600;color:${CONFIG.text.primary};">${a.assignment_name||'Assignment'}</span>
                <span style="font-size:10px;padding:2px 6px;border-radius:9999px;background:rgba(234,179,8,0.2);color:#fbbf24;font-weight:500;">⏳ Needs Review</span>
            </div>
            <div style="font-size:11px;color:${CONFIG.text.muted};margin-bottom:4px;">${a.assignment_description||''}</div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
                ${a.assignment_link ? `<a href="${a.assignment_link}" target="_blank" style="font-size:11px;color:${CONFIG.assignments.linkColor};text-decoration:none;">📁 Repo</a>` : ''}
                ${a.assignment_secondary_link ? `<a href="${a.assignment_secondary_link}" target="_blank" style="font-size:11px;color:${CONFIG.assignments.linkColor};text-decoration:none;">🌐 Live</a>` : ''}
                <span style="font-size:10px;color:${CONFIG.text.veryMuted};margin-left:auto;">${submitted}</span>
            </div>
            <div style="display:flex;gap:8px;">
                <button class="fes-approve-btn" data-assignment-id="${a.id}" data-user-auth="${aUserAuthId}" data-student-name="${name}" style="flex:1;padding:6px;background:${CONFIG.assignments.approveBg};border:none;border-radius:4px;color:#fff;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;transition:background 0.15s;">Approve</button>
                <button class="fes-delete-btn" data-assignment-id="${a.id}" data-user-auth="${aUserAuthId}" data-student-name="${name}" data-channel-id="${a.channel_id||''}" style="padding:6px 16px;background:${CONFIG.assignments.deleteBg};border:none;border-radius:4px;color:#fff;font-size:12px;font-weight:500;cursor:pointer;font-family:inherit;transition:background 0.15s;">Delete</button>
            </div>
        </div>`;
    });

    card.innerHTML = `<div style="padding:10px 12px;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:2px;">
            ${makeAvatar(imgUrl, name, CONFIG.avatar.size)}
            <div style="flex:1;min-width:0;">
                <div style="font-size:13px;font-weight:600;color:${CONFIG.text.primary};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div>
                <div style="font-size:10px;color:${CONFIG.text.veryMuted};overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${email}</div>
            </div>
        </div>
        ${assignHtml}
    </div>`;

    card.addEventListener('mouseenter', () => { card.style.borderColor = CONFIG.assignments.cardBorderHover; });
    card.addEventListener('mouseleave', () => { card.style.borderColor = CONFIG.assignments.cardBorder; });

    card.querySelectorAll('.fes-approve-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => { btn.style.background = CONFIG.assignments.approveHoverBg; });
        btn.addEventListener('mouseleave', () => { btn.style.background = CONFIG.assignments.approveBg; });
        btn.addEventListener('click', e => { e.stopPropagation(); showApproveModal(btn.dataset.assignmentId, btn.dataset.userAuth, btn.dataset.studentName); });
    });
    card.querySelectorAll('.fes-delete-btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => { btn.style.background = CONFIG.assignments.deleteHoverBg; });
        btn.addEventListener('mouseleave', () => { btn.style.background = CONFIG.assignments.deleteBg; });
        btn.addEventListener('click', e => { e.stopPropagation(); showDeleteModal(btn.dataset.assignmentId, btn.dataset.userAuth, btn.dataset.studentName); });
    });

    return card;
}

function showApproveModal(assignmentId, userAuthId, studentName) {
    removeModal();
    const M = CONFIG.modal;
    const overlay = document.createElement('div');
    overlay.id = 'fes-modal-overlay';
    overlay.style.cssText = `position:fixed;inset:0;background:${M.overlayBg};display:flex;align-items:center;justify-content:center;z-index:999999;backdrop-filter:blur(4px);font-family:${CONFIG.font.family};`;

    const moduleNames = Object.keys(MODULE_MAP);
    let optionsHtml = moduleNames.map(name => {
        const hasIds = MODULE_MAP[name].ids.length > 0;
        return `<button class="fes-module-opt" data-module="${name}" style="width:100%;text-align:left;padding:12px 16px;background:${M.optionBg};border:1px solid ${M.optionBorder};border-radius:8px;color:${CONFIG.text.primary};font-size:13px;font-weight:500;cursor:${hasIds?'pointer':'not-allowed'};font-family:inherit;transition:all 0.15s;opacity:${hasIds?'1':'0.4'};margin-bottom:6px;display:block;">
            ${name}${!hasIds ? ' <span style="font-size:11px;color:'+CONFIG.text.veryMuted+';">(coming soon)</span>' : ''}
        </button>`;
    }).join('');

            overlay.innerHTML = `<div style="background:${M.background};border:1px solid ${M.border};border-radius:${M.borderRadius};width:440px;max-width:90%;max-height:85vh;overflow-y:auto;padding:24px;">
        <h2 style="margin:0 0 4px;font-size:16px;font-weight:600;color:${CONFIG.text.primary};">Approve Assignment</h2>
        <p style="margin:0 0 16px;font-size:13px;color:${CONFIG.text.muted};">Which final project is this? Upon click, it will unlock the next modules accordingly for <strong>${studentName}</strong>.</p>
        <div id="module-options">${optionsHtml}</div>
        <div id="approve-status" style="display:none;padding:12px;border-radius:8px;margin-top:12px;font-size:13px;"></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;border-top:1px solid ${CONFIG.dividers.color};padding-top:14px;">
            <button id="modal-cancel" style="padding:7px 14px;background:transparent;border:1px solid rgba(255,255,255,0.12);color:#fff;border-radius:6px;cursor:pointer;font-size:13px;font-family:inherit;">Cancel</button>
        </div>
    </div>`;

    document.body.appendChild(overlay);
    document.getElementById('modal-cancel').onclick = removeModal;
    overlay.onclick = e => { if (e.target === overlay) removeModal(); };

    overlay.querySelectorAll('.fes-module-opt').forEach(btn => {
        const name = btn.dataset.module;
        const ids = MODULE_MAP[name]?.ids || [];
        if (ids.length === 0) return;

        btn.addEventListener('mouseenter', () => { btn.style.background = M.optionHoverBg; btn.style.borderColor = M.optionHoverBorder; });
        btn.addEventListener('mouseleave', () => { btn.style.background = M.optionBg; btn.style.borderColor = M.optionBorder; });

        btn.addEventListener('click', () => {
            overlay.querySelectorAll('.fes-module-opt').forEach(b => { b.disabled = true; b.style.opacity = '0.4'; b.style.cursor = 'wait'; });
            const status = document.getElementById('approve-status');
            status.style.display = 'block';
            status.style.background = 'rgba(255,255,255,0.05)';
            status.style.color = CONFIG.text.secondary;
            status.textContent = `Unlocking ${name} (${ids.length} module${ids.length>1?'s':''})...`;

            const handler = e => {
                window.removeEventListener('fes-module-unlock-result', handler);
                const { results } = e.detail;
                const allOk = results.every(r => r.ok);
                if (allOk) {
                    status.style.background = M.successBg;
                    status.style.color = M.successColor;
                    status.textContent = `✓ ${name} unlocked successfully for ${studentName}!`;
                    setTimeout(() => { removeModal(); triggerFetchAssignments(0, 10, ''); triggerFetchAssignmentCount(); }, 1500);
                } else {
                    status.style.background = M.errorBg;
                    status.style.color = M.errorColor;
                    const failed = results.filter(r => !r.ok);
                    status.textContent = `✕ ${failed.length} module(s) failed. Check console.`;
                    overlay.querySelectorAll('.fes-module-opt').forEach(b => { b.disabled = false; b.style.opacity = '1'; b.style.cursor = 'pointer'; });
                }
            };
            window.addEventListener('fes-module-unlock-result', handler);
            triggerUnlockModules(ids, userAuthId);
        });
    });
}

function showDeleteModal(assignmentId, userAuthId, studentName) {
    removeModal();
    const M = CONFIG.modal;
    const overlay = document.createElement('div');
    overlay.id = 'fes-modal-overlay';
    overlay.style.cssText = `position:fixed;inset:0;background:${M.overlayBg};display:flex;align-items:center;justify-content:center;z-index:999999;backdrop-filter:blur(4px);font-family:${CONFIG.font.family};`;

    overlay.innerHTML = `<div style="background:${M.background};border:1px solid ${M.border};border-radius:${M.borderRadius};width:480px;max-width:90%;padding:24px;">
        <h2 style="margin:0 0 4px;font-size:16px;font-weight:600;color:${CONFIG.text.primary};">Delete Assignment</h2>
        <p style="margin:0 0 16px;font-size:13px;color:${CONFIG.text.muted};">Deleting assignment for <strong>${studentName}</strong>. Provide a reason — this will be sent as a message in their channel. You can also attach images.</p>
        <div id="delete-image-preview" style="display:none;padding:8px 0;gap:8px;overflow-x:auto;"></div>
        <textarea id="delete-reason" rows="4" placeholder="Reason for deletion (e.g., doesn't meet requirements, wrong repo link...)" style="width:100%;padding:10px 14px;background:rgba(255,255,255,0.06);border:1px solid ${CONFIG.chat.inputBorder};border-radius:8px;color:${CONFIG.text.primary};font-size:13px;font-family:inherit;outline:none;resize:vertical;line-height:1.5;"></textarea>
        <div style="margin:8px 0 0 0;display:flex;align-items:center;gap:10px;">
            <button id="delete-attach-btn" style="padding:6px 12px;background:${CONFIG.buttons.background};border:1px solid ${CONFIG.buttons.border};border-radius:${CONFIG.buttons.borderRadius};color:${CONFIG.buttons.text};cursor:pointer;font-size:12px;font-family:inherit;">Attach Image</button>
            <input id="delete-file-input" type="file" accept="image/*" style="display:none;">
            <span style="font-size:11px;color:${CONFIG.text.veryMuted};">Paste images or click Attach</span>
        </div>
        <div id="delete-status" style="display:none;padding:12px;border-radius:8px;margin-top:12px;font-size:13px;"></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:16px;border-top:1px solid ${CONFIG.dividers.color};padding-top:14px;">
            <button id="modal-cancel" style="padding:7px 14px;background:transparent;border:1px solid rgba(255,255,255,0.12);color:#fff;border-radius:6px;cursor:pointer;font-size:13px;font-family:inherit;">Cancel</button>
            <button id="modal-delete-confirm" style="padding:7px 14px;background:${CONFIG.assignments.deleteBg};color:#fff;border:none;border-radius:6px;cursor:pointer;font-size:13px;font-weight:500;font-family:inherit;transition:background 0.15s;">Delete & Notify</button>
        </div>
    </div>`;

    document.body.appendChild(overlay);
    document.getElementById('modal-cancel').onclick = removeModal;
    overlay.onclick = e => { if (e.target === overlay) removeModal(); };

    const confirmBtn = document.getElementById('modal-delete-confirm');
    confirmBtn.addEventListener('mouseenter', () => { confirmBtn.style.background = CONFIG.assignments.deleteHoverBg; });
    confirmBtn.addEventListener('mouseleave', () => { confirmBtn.style.background = CONFIG.assignments.deleteBg; });

    document.getElementById('delete-reason').focus();

    let deleteImages = [];

    function updateDeleteImagePreview() {
        const wrap = document.getElementById('delete-image-preview');
        if (!wrap) return;
        if (deleteImages.length === 0) { wrap.style.display = 'none'; wrap.innerHTML = ''; return; }
        wrap.style.display = 'flex'; wrap.innerHTML = '';
        deleteImages.forEach((img, idx) => {
            const d = document.createElement('div');
            d.style.cssText = 'position:relative;display:inline-block;flex-shrink:0;margin-right:8px;';
            d.innerHTML = `<img src="${img.dataUrl}" style="height:60px;border-radius:6px;border:1px solid ${CONFIG.dividers.color};object-fit:cover;">
                <button data-idx="${idx}" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:9999px;background:${CONFIG.assignments.deleteBg};color:#fff;border:none;cursor:pointer;font-size:11px;display:flex;align-items:center;justify-content:center;line-height:1;">×</button>`;
            d.querySelector('button').addEventListener('click', () => { deleteImages.splice(idx, 1); updateDeleteImagePreview(); });
            wrap.appendChild(d);
        });
    }

    document.getElementById('delete-attach-btn').onclick = () => { document.getElementById('delete-file-input').click(); };
    document.getElementById('delete-file-input').addEventListener('change', e => {
        const files = e.target.files; if (!files) return;
        for (const file of files) {
            if (file.type.startsWith('image/')) {
                const r = new FileReader();
                r.onload = ev => { deleteImages.push({ file, dataUrl: ev.target.result, base64: ev.target.result.split(',')[1], name: file.name, mime: file.type }); updateDeleteImagePreview(); };
                r.readAsDataURL(file);
            }
        }
        e.target.value = '';
    });

    document.getElementById('delete-reason').addEventListener('paste', e => {
        const items = e.clipboardData?.items; if (!items) return;
        for (const item of items) {
            if (item.type.startsWith('image/')) {
                e.preventDefault();
                const file = item.getAsFile();
                if (file) { const r = new FileReader(); r.onload = ev => { deleteImages.push({ file, dataUrl: ev.target.result, base64: ev.target.result.split(',')[1], name: file.name, mime: file.type }); updateDeleteImagePreview(); }; r.readAsDataURL(file); }
            }
        }
    });

    confirmBtn.addEventListener('click', async () => {
        const reason = document.getElementById('delete-reason').value.trim();
        if (!reason && deleteImages.length === 0) { document.getElementById('delete-reason').style.borderColor = '#ef4444'; return; }
        confirmBtn.disabled = true; confirmBtn.textContent = 'Deleting...';
        const status = document.getElementById('delete-status');

        let channelId = null;
        const allTickets = [...ticketsCache.my, ...ticketsCache.other, ...ticketsCache.unassigned];
        for (const t of allTickets) {
            if (t.student?.auth_id === userAuthId || t.student?.display_name === studentName) { channelId = t.channel_id; break; }
        }

        triggerDeleteAssignment(parseInt(assignmentId));

        if (channelId) {
            let html = '';
            if (reason) html += `<p><strong>Assignment Feedback:</strong></p><p>${reason.replace(/\n/g, '</p><p>')}</p>`;
            if (deleteImages.length > 0) {
                injectCall(`(async()=>{ const imgs=${JSON.stringify(deleteImages.map(i=>({base64:i.base64,name:i.name,mime:i.mime})))}; const urls=[]; for(const img of imgs){const u=await window.__fesUploadImage(img.base64,img.name,img.mime);if(u)urls.push(u);} let html=${JSON.stringify(html)}; urls.forEach(url=>{ html += '<img src="'+url+'" style="max-width:360px;border-radius:8px;margin:4px 0;" />'; }); await window.__fesSendMessage(${channelId}, html, []); })();`);
            } else {
                injectCall(`(async()=>{ await window.__fesSendMessage(${channelId}, ${JSON.stringify(html)}, []); })();`);
            }
            status.style.display = 'block'; status.style.background = M.successBg; status.style.color = M.successColor;
            status.textContent = `✓ Assignment deleted. Feedback sent to channel.`;
        } else {
            status.style.display = 'block'; status.style.background = 'rgba(234,179,8,0.15)'; status.style.color = '#fbbf24';
            status.textContent = `⚠ Assignment deleted but couldn't find student's channel to send feedback.`;
        }
        setTimeout(removeModal, 2000);
    });
}

function removeModal() { document.getElementById('fes-modal-overlay')?.remove(); }

function handleTicketClick(ticket, source) {
    const channelId = ticket.channel_id, student = ticket.student||{};
    const name = student.display_name||'Unknown', imgUrl = student.image_url||'';
    activeTicketId = ticket.id; activeChannelId = channelId; activeTicketSource = source; activeTicketData = ticket; pendingImages = [];
    populateColumns();

    const chatHeader = document.getElementById('chat-header');
    if (chatHeader) {
        chatHeader.style.display = 'flex';
        const AB = CONFIG.actionButtons;
        chatHeader.innerHTML = `<div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0;">
            ${makeAvatar(imgUrl, name, CONFIG.avatar.sizeLarge)}
            <div style="min-width:0;"><div style="font-size:14px;font-weight:600;color:${CONFIG.text.primary};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${name}</div><div style="font-size:11px;color:${CONFIG.text.muted};">Ticket #${ticket.id} · Ch ${channelId}</div></div>
        </div>
        <div style="display:flex;gap:6px;flex-shrink:0;">
            <button id="btn-solved" style="padding:5px 10px;background:${AB.solvedBg};border:1px solid ${AB.solvedBorder};border-radius:${CONFIG.buttons.borderRadius};color:${AB.solvedColor};cursor:pointer;font-size:11px;font-family:inherit;transition:background 0.15s;">✓ Solved</button>
            <button id="btn-leave" style="padding:5px 10px;background:${AB.leaveBg};border:1px solid ${AB.leaveBorder};border-radius:${CONFIG.buttons.borderRadius};color:${AB.leaveColor};cursor:pointer;font-size:11px;font-family:inherit;transition:background 0.15s;">✕ Leave</button>
            <button id="btn-open-original" style="padding:5px 10px;background:${CONFIG.buttons.background};border:1px solid ${CONFIG.buttons.border};border-radius:${CONFIG.buttons.borderRadius};color:${CONFIG.buttons.text};cursor:pointer;font-size:11px;font-family:inherit;">↗ Original</button>
        </div>`;
        document.getElementById('btn-solved')?.addEventListener('click', () => { if (confirm(`Mark ticket #${ticket.id} as solved?`)) triggerTicketSolved(ticket.id); });
        document.getElementById('btn-leave')?.addEventListener('click', () => { if (confirm(`Leave ticket #${ticket.id}?`)) triggerTicketLeave(ticket.id); });
        document.getElementById('btn-open-original')?.addEventListener('click', () => openOriginalTicket(name));
        const AB2 = CONFIG.actionButtons;
        document.getElementById('btn-solved')?.addEventListener('mouseenter', function(){this.style.background=AB2.solvedHoverBg;});
        document.getElementById('btn-solved')?.addEventListener('mouseleave', function(){this.style.background=AB2.solvedBg;});
        document.getElementById('btn-leave')?.addEventListener('mouseenter', function(){this.style.background=AB2.leaveHoverBg;});
        document.getElementById('btn-leave')?.addEventListener('mouseleave', function(){this.style.background=AB2.leaveBg;});
    }

    const chatPh=document.getElementById('chat-placeholder'), chatMsgs=document.getElementById('chat-messages'), chatInput=document.getElementById('chat-input-wrap');
    if(chatPh)chatPh.style.display='none'; if(chatMsgs)chatMsgs.style.display='block'; if(chatInput)chatInput.style.display='flex';
    const editor=document.getElementById('chat-editor'); if(editor)editor.innerHTML=''; updateImagePreview();
    if(messagesCache[channelId]?.items?.length) {
        renderChatMessages(channelId, messagesCache[channelId].items, false);
    } else {
        if(chatMsgs) chatMsgs.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;color:${CONFIG.text.muted};font-size:13px;">Loading messages...</div>`;
    }
    triggerFetchMessages(channelId); startMsgRefresh(channelId);
}

function resetChatArea() {
    const h=document.getElementById('chat-header'),p=document.getElementById('chat-placeholder'),m=document.getElementById('chat-messages'),i=document.getElementById('chat-input-wrap');
    if(h){h.style.display='none';h.innerHTML='';} if(p)p.style.display='flex'; if(m){m.style.display='none';m.innerHTML='';} if(i)i.style.display='none'; pendingImages=[];
}
function openOriginalTicket(studentName) {
    const root=document.getElementById('root'); if(root){root.style.visibility='visible';root.style.pointerEvents='auto';root.style.position='';root.style.height='';}
    setTimeout(()=>{const cards=document.querySelectorAll('[class*="cursor-pointer"][class*="rounded-lg"][class*="border"]');for(const c of cards){const n=c.querySelector('[class*="font-semibold"]');if(n?.textContent?.trim()===studentName){c.click();break;}}},200);
    setTimeout(()=>{if(root?.hasAttribute('data-fes-hidden')){root.style.visibility='hidden';root.style.pointerEvents='none';}},500);
}
function startMsgRefresh(c) { if(msgRefreshTimer)clearInterval(msgRefreshTimer); msgRefreshTimer=setInterval(()=>{if(activeChannelId===c)triggerFetchMessages(c);},CONFIG.intervals.messageRefresh); }

function renderChatMessages(channelId, messages, isAppend) {
    const chatArea=document.getElementById('chat-messages'); if(!chatArea) return;
    const pST=chatArea.scrollTop, pSH=chatArea.scrollHeight;
    const sorted=[...messages].sort((a,b)=>a.id-b.id);
    const total=messagesCache[channelId]?.total||0, loaded=sorted.length, hasMore=loaded<total;
    if(sorted.length===0){chatArea.innerHTML=`<div style="display:flex;align-items:center;justify-content:center;height:100%;color:${CONFIG.emptyState.color};font-size:13px;">No messages yet</div>`;return;}

    let html='';
    if(hasMore) html+=`<div style="text-align:center;padding:10px;"><button id="btn-load-more" style="padding:6px 16px;background:${CONFIG.chat.loadMoreBackground};border:1px solid ${CONFIG.chat.loadMoreBorder};border-radius:${CONFIG.buttons.borderRadius};color:${CONFIG.text.secondary};font-size:12px;cursor:pointer;font-family:inherit;">Load older (${loaded}/${total})</button></div>`;

    let lastDate='', lastUser='';
    sorted.forEach(msg=>{
        const user=msg.users||{}, userName=user.display_name||'Unknown', userImg=user.image_url||'';
        const content=msg.message||'', time=formatTime(msg.created_at), date=formatDate(msg.created_at);
        const isMentor=['moderator','mentor','admin'].includes(user.role);
        const bubbleBg=isMentor?CONFIG.chat.messageBubbleMentor:CONFIG.chat.messageBubbleStudent;
        const attachments=msg.attachments||[];
        let attachHtml='';
        attachments.forEach(att=>{const url=att.url||att.file_url||att.fileUrl||'';const type=att.type||att.mime_type||'';
            if(url&&(type.startsWith('image')||/\.(png|jpe?g|gif|webp|svg)(\?|$)/i.test(url)))attachHtml+=`<img src="${url}" style="max-width:${CONFIG.chat.imageMaxWidth};border-radius:${CONFIG.chat.imageBorderRadius};margin:4px 0;cursor:pointer;display:block;" onclick="window.open('${url}','_blank')"/>`;
            else if(url)attachHtml+=`<a href="${url}" target="_blank" style="font-size:12px;color:${CONFIG.text.link};display:block;margin:4px 0;">📎 ${att.name||'Attachment'}</a>`;
        });
        if(date!==lastDate){html+=`<div style="text-align:center;padding:12px 0 8px;"><span style="font-size:11px;color:${CONFIG.text.veryMuted};background:rgba(0,0,0,0.3);padding:3px 12px;border-radius:10px;">${date}</span></div>`;lastDate=date;lastUser='';}
        const showH=userName!==lastUser; lastUser=userName;
        html+=`<div class="fes-msg-row" style="padding:3px 16px;transition:background 0.1s;">`;
        if(showH)html+=`<div style="display:flex;align-items:center;gap:8px;margin-top:8px;margin-bottom:4px;">${makeAvatar(userImg,userName,CONFIG.avatar.sizeSmall)}<span style="font-size:13px;font-weight:600;color:${CONFIG.text.primary};">${userName}</span><span style="font-size:10px;color:${CONFIG.chat.timestampColor};">${time}</span></div>`;
        html+=`<div style="padding:6px 10px;margin-left:32px;border-radius:${CONFIG.chat.messageBubbleBorderRadius};background:${bubbleBg};margin-bottom:2px;"><div class="fes-msg-content" style="font-size:13px;color:${CONFIG.text.secondary};line-height:1.5;word-wrap:break-word;">${content}</div>${attachHtml}${!showH?`<div style="font-size:10px;color:${CONFIG.chat.timestampColor};text-align:right;margin-top:2px;">${time}</div>`:''}</div></div>`;
    });
    chatArea.innerHTML=html;
    document.getElementById('btn-load-more')?.addEventListener('click',()=>{const b=document.getElementById('btn-load-more');if(b){b.textContent='Loading...';b.disabled=true;}triggerFetchMessages(channelId,loaded,CONFIG.intervals.messagesPerPage,true);});
    if(isAppend){chatArea.scrollTop=chatArea.scrollHeight-pSH+pST;}else{chatArea.scrollTop=chatArea.scrollHeight;}
    chatArea.querySelectorAll('.fes-msg-row').forEach(r=>{r.addEventListener('mouseenter',()=>{r.style.background=CONFIG.chat.messageHoverBg;});r.addEventListener('mouseleave',()=>{r.style.background='transparent';});});
}

const ICONS = {
    bold:'<path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"/>',
    italic:'<line x1="19" x2="10" y1="4" y2="4"/><line x1="14" x2="5" y1="20" y2="20"/><line x1="15" x2="9" y1="4" y2="20"/>',
    underline:'<path d="M6 4v6a6 6 0 0 0 12 0V4"/><line x1="4" x2="20" y1="20" y2="20"/>',
    strikethrough:'<path d="M16 4H9a3 3 0 0 0-2.83 4"/><path d="M14 12a4 4 0 0 1 0 8H6"/><line x1="4" x2="20" y1="12" y2="12"/>',
    list:'<path d="M3 5h.01"/><path d="M3 12h.01"/><path d="M3 19h.01"/><path d="M8 5h13"/><path d="M8 12h13"/><path d="M8 19h13"/>',
    code:'<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
    codeBlock:'<rect width="18" height="18" x="3" y="3" rx="2"/><path d="m10 8 4 4-4 4"/>',
    link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>',
    attach:'<path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"/>',
};
function svgIcon(n,sz){sz=sz||14;return `<svg xmlns="http://www.w3.org/2000/svg" width="${sz}" height="${sz}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[n]}</svg>`;}

function createLayout() {
    if (document.getElementById('three-col')) return;
    const root=document.getElementById('root');
    if(root){root.setAttribute('data-fes-hidden','true');root.style.visibility='hidden';root.style.pointerEvents='none';root.style.position='fixed';root.style.height='0';root.style.overflow='visible';}

    const wrap=document.createElement('div');wrap.id='three-col';
    wrap.style.cssText=`position:fixed;inset:0;display:flex;flex-direction:column;z-index:100;font-family:${CONFIG.font.family};`;
    const TB=CONFIG.toolbar;

    wrap.innerHTML=`
    <nav id="fes-navbar" style="height:${CONFIG.layout.navbarHeight};display:flex;align-items:center;padding:0 16px;gap:12px;background:${CONFIG.navbar.background};backdrop-filter:blur(${CONFIG.navbar.blur});border-bottom:1px solid ${CONFIG.navbar.border};flex-shrink:0;z-index:101;">
        <div style="font-size:14px;font-weight:700;color:${CONFIG.text.primary};margin-right:8px;">FES Tickets</div>
        <a href="/dashboard/fes/admin/tickets" class="fes-nav-link active" style="font-size:12px;color:${CONFIG.navbar.linkActiveColor};background:${CONFIG.navbar.linkActiveBg};padding:5px 10px;border-radius:${CONFIG.buttons.borderRadius};text-decoration:none;">Tickets</a>
         <a href="/dashboard/fes/admin/users" class="fes-nav-link" style="font-size:12px;color:${CONFIG.navbar.linkColor};padding:5px 10px;border-radius:${CONFIG.buttons.borderRadius};text-decoration:none;">Users</a>
                <a href="https://app.fesinstitute.com/dashboard/fes/program" class="fes-nav-link" style="font-size:12px;color:${CONFIG.navbar.linkColor};padding:5px 10px;border-radius:${CONFIG.buttons.borderRadius};text-decoration:none;">Program</a>
        <div style="flex:1;"></div>
        <div style="position:relative;max-width:280px;flex:1;"><input id="fes-search" type="text" placeholder="Search tickets..." style="width:100%;height:30px;padding:0 10px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);border-radius:6px;color:#fff;font-size:12px;font-family:inherit;outline:none;"></div>
        <button id="btn-refresh-nav" style="padding:4px 10px;background:${CONFIG.buttons.background};border:1px solid ${CONFIG.buttons.border};border-radius:${CONFIG.buttons.borderRadius};color:${CONFIG.buttons.text};cursor:pointer;font-size:12px;font-family:inherit;">↻ Refresh</button>
        <!-- FIX 3: WS status dot — green = connected via WebSocket, red = polling fallback -->
        <div id="fes-ws-indicator" title="Polling every 30s (WS hook active)" style="width:8px;height:8px;border-radius:9999px;background:#f59e0b;flex-shrink:0;transition:background 0.5s;animation:fes-pulse 2s infinite;" ></div>
    </nav>
    <div id="fes-columns" style="display:flex;flex:1;overflow:hidden;">
        <div id="col-left" style="width:${CONFIG.layout.leftWidth};height:100%;display:flex;flex-direction:column;background:${CONFIG.columns.background};backdrop-filter:blur(${CONFIG.columns.blur});border-right:1px solid ${CONFIG.dividers.color};overflow:hidden;">
            <div style="padding:10px 14px;border-bottom:1px solid ${CONFIG.dividers.color};background:${CONFIG.columns.headerBackground};"><span style="font-size:13px;font-weight:600;color:${CONFIG.text.primary};">My Tickets <span id="count-my" style="font-weight:400;color:${CONFIG.text.muted};">(0)</span></span></div>
            <div id="list-my" class="fes-scroll" style="flex:1;overflow-y:auto;padding:6px;"></div>
        </div>
        <div id="col-center" style="width:${CONFIG.layout.centerWidth};height:100%;display:flex;flex-direction:column;background:${CONFIG.chat.background};overflow:hidden;">
            <div id="chat-header" style="display:none;padding:10px 16px;border-bottom:1px solid ${CONFIG.dividers.color};background:${CONFIG.chat.headerBackground};backdrop-filter:blur(${CONFIG.chat.headerBlur});align-items:center;gap:10px;flex-shrink:0;"></div>
            <div id="chat-placeholder" style="flex:1;display:flex;align-items:center;justify-content:center;color:${CONFIG.emptyState.color};font-size:13px;"><div style="text-align:center;"><svg style="width:40px;height:40px;margin:0 auto 12px;opacity:0.3;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><p style="margin:0;">Select a ticket to view conversation</p></div></div>
            <div id="chat-messages" class="fes-scroll" style="flex:1;overflow-y:auto;display:none;"></div>
            <div id="chat-input-wrap" style="display:none;flex-direction:column;border-top:1px solid ${CONFIG.dividers.color};background:${CONFIG.chat.inputBackground};flex-shrink:0;">
                <div id="image-preview-wrap" style="display:none;padding:8px 16px;gap:8px;overflow-x:auto;border-bottom:1px solid ${CONFIG.dividers.color};"></div>
                <div id="chat-toolbar" style="display:flex;align-items:center;gap:1px;padding:4px 12px;background:${TB.background};">
                    <button class="tb-btn" data-cmd="bold" title="Bold">${svgIcon('bold')}</button>
                    <button class="tb-btn" data-cmd="italic" title="Italic">${svgIcon('italic')}</button>
                    <button class="tb-btn" data-cmd="underline" title="Underline">${svgIcon('underline')}</button>
                    <button class="tb-btn" data-cmd="strikeThrough" title="Strikethrough">${svgIcon('strikethrough')}</button>
                    <button class="tb-btn" data-cmd="insertUnorderedList" title="List">${svgIcon('list')}</button>
                    <button class="tb-btn" data-cmd="code" title="Code">${svgIcon('code')}</button>
                    <button class="tb-btn" data-cmd="codeBlock" title="Code block">${svgIcon('codeBlock')}</button>
                    <button class="tb-btn" data-cmd="link" title="Link">${svgIcon('link')}</button>
                    <div style="width:1px;height:16px;background:${TB.dividerColor};margin:0 4px;"></div>
                    <button class="tb-btn" id="btn-attach" title="Attach">${svgIcon('attach')}</button>
                    <input id="file-input" type="file" multiple accept="image/*,video/*,audio/*,application/pdf,.doc,.docx,.xls,.xlsx,.txt" style="display:none;">
                    <div style="flex:1;"></div>
                </div>
                <div style="display:flex;align-items:flex-end;gap:8px;padding:8px 12px;">
                    <div id="chat-editor" contenteditable="true" style="flex:1;min-height:36px;max-height:140px;overflow-y:auto;padding:8px 12px;background:rgba(255,255,255,0.06);border:1px solid ${CONFIG.chat.inputBorder};border-radius:10px;color:${CONFIG.text.primary};font-size:13px;font-family:inherit;outline:none;line-height:1.5;word-wrap:break-word;" data-placeholder="Type a message..."></div>
                    <button id="btn-send" style="padding:10px 16px;background:${CONFIG.sendButton.background};border:none;border-radius:${CONFIG.sendButton.borderRadius};color:${CONFIG.sendButton.color};cursor:pointer;font-size:13px;font-weight:500;font-family:inherit;flex-shrink:0;">Send</button>
                </div>
                <div style="font-size:10px;color:${CONFIG.text.veryMuted};padding:0 12px 6px;">Enter to send · Shift+Enter for new line</div>
            </div>
        </div>
        <div id="col-right" style="width:${CONFIG.layout.rightWidth};height:100%;display:flex;flex-direction:column;background:${CONFIG.columns.background};backdrop-filter:blur(${CONFIG.columns.blur});border-left:1px solid ${CONFIG.dividers.color};overflow:hidden;">
            <div id="right-tabs" style="display:flex;border-bottom:1px solid ${CONFIG.dividers.color};background:${CONFIG.columns.headerBackground};">
                <button data-tab="other" class="fes-tab active" style="flex:1;padding:10px 4px;background:transparent;border:none;border-bottom:2px solid ${CONFIG.tabs.underlineColor};color:${CONFIG.tabs.activeColor};font-size:11px;font-weight:500;cursor:pointer;font-family:inherit;">Others <span id="count-other">(0)</span></button>
                <button data-tab="unassigned" class="fes-tab" style="flex:1;padding:10px 4px;background:transparent;border:none;border-bottom:2px solid transparent;color:${CONFIG.tabs.inactiveColor};font-size:11px;font-weight:500;cursor:pointer;font-family:inherit;">Unassigned <span id="count-unassigned">(0)</span></button>
                <button data-tab="assignments" class="fes-tab" style="flex:1;padding:10px 4px;background:transparent;border:none;border-bottom:2px solid transparent;color:${CONFIG.tabs.inactiveColor};font-size:11px;font-weight:500;cursor:pointer;font-family:inherit;">Assignments <span id="count-assignments">(0)</span></button>
            </div>
            <div id="list-other" class="fes-scroll fes-tab-panel" data-panel="other" style="flex:1;overflow-y:auto;padding:6px;display:block;"></div>
            <div id="list-unassigned" class="fes-scroll fes-tab-panel" data-panel="unassigned" style="flex:1;overflow-y:auto;padding:6px;display:none;"></div>
            <div id="list-assignments" class="fes-scroll fes-tab-panel" data-panel="assignments" style="flex:1;overflow-y:auto;padding:6px;display:none;"></div>
        </div>
    </div>`;

    document.body.appendChild(wrap);

    document.querySelectorAll('#right-tabs .fes-tab').forEach(tab=>{tab.addEventListener('click',()=>{const t=tab.dataset.tab;document.querySelectorAll('#right-tabs .fes-tab').forEach(b=>{const a=b.dataset.tab===t;b.style.color=a?CONFIG.tabs.activeColor:CONFIG.tabs.inactiveColor;b.style.borderBottomColor=a?CONFIG.tabs.underlineColor:'transparent';});document.querySelectorAll('.fes-tab-panel').forEach(p=>{p.style.display=p.dataset.panel===t?'block':'none';});if(t==='assignments'&&assignmentsCache.items.length===0){triggerFetchAssignments(0,10,'');triggerFetchAssignmentCount();}});});
    document.getElementById('btn-refresh-nav').addEventListener('click',()=>{triggerRefresh();triggerFetchAssignments(0,10,'');triggerFetchAssignmentCount();if(activeChannelId)triggerFetchMessages(activeChannelId);});
    document.getElementById('fes-search').addEventListener('input',e=>{const q=e.target.value.toLowerCase();document.querySelectorAll('.fes-card').forEach(c=>{c.style.display=(!q||(c.dataset.studentName||'').toLowerCase().includes(q)||c.textContent.toLowerCase().includes(q))?'':'none';});});

    const editor=document.getElementById('chat-editor');
    editor.addEventListener('focus',()=>{editor.style.borderColor=CONFIG.chat.inputFocusBorder;});
    editor.addEventListener('blur',()=>{editor.style.borderColor=CONFIG.chat.inputBorder;});
    editor.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();sendMessage();}});
    document.querySelectorAll('.tb-btn[data-cmd]').forEach(btn=>{btn.addEventListener('click',()=>{editor.focus();const cmd=btn.dataset.cmd;
        if(cmd==='code'){const s=window.getSelection();if(s.rangeCount){const r=s.getRangeAt(0),c=document.createElement('code');c.style.cssText=`background:${CONFIG.chat.codeBlockBackground};border:1px solid ${CONFIG.chat.codeBlockBorder};padding:1px 4px;border-radius:3px;font-size:12px;`;r.surroundContents(c);}}
        else if(cmd==='codeBlock'){const s=window.getSelection();if(s.rangeCount){const r=s.getRangeAt(0),p=document.createElement('pre');p.style.cssText=`background:${CONFIG.chat.codeBlockBackground};border:1px solid ${CONFIG.chat.codeBlockBorder};padding:8px;border-radius:6px;margin:4px 0;`;const c=document.createElement('code');c.style.fontSize='12px';c.textContent=r.toString();r.deleteContents();p.appendChild(c);r.insertNode(p);}}
        else if(cmd==='link'){const u=prompt('Enter URL:');if(u)document.execCommand('createLink',false,u);}
        else{document.execCommand(cmd,false,null);}
    });});
    document.getElementById('btn-attach').addEventListener('click',()=>{document.getElementById('file-input').click();});
    document.getElementById('file-input').addEventListener('change',handleFileSelect);
    document.getElementById('btn-send').addEventListener('click',sendMessage);
    const bs=document.getElementById('btn-send');bs.addEventListener('mouseenter',()=>{bs.style.background=CONFIG.sendButton.backgroundHover;});bs.addEventListener('mouseleave',()=>{bs.style.background=CONFIG.sendButton.background;});
    editor.addEventListener('paste',e=>{const items=e.clipboardData?.items;if(!items)return;for(const item of items){if(item.type.startsWith('image/')){e.preventDefault();addPendingImage(item.getAsFile());break;}}});
}

function handleFileSelect(e){const f=e.target.files;if(!f)return;for(const file of f){if(file.type.startsWith('image/'))addPendingImage(file);}e.target.value='';}
function addPendingImage(file){const r=new FileReader();r.onload=ev=>{pendingImages.push({file,dataUrl:ev.target.result,base64:ev.target.result.split(',')[1],name:file.name,mime:file.type});updateImagePreview();};r.readAsDataURL(file);}
function updateImagePreview(){const w=document.getElementById('image-preview-wrap');if(!w)return;if(pendingImages.length===0){w.style.display='none';w.innerHTML='';return;}w.style.display='flex';w.innerHTML='';
    pendingImages.forEach((img,idx)=>{const d=document.createElement('div');d.style.cssText='position:relative;flex-shrink:0;';d.innerHTML=`<img src="${img.dataUrl}" style="height:60px;border-radius:6px;border:1px solid ${CONFIG.dividers.color};object-fit:cover;"><button data-idx="${idx}" style="position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:9999px;background:rgba(239,68,68,0.9);color:#fff;border:none;cursor:pointer;font-size:11px;display:flex;align-items:center;justify-content:center;line-height:1;">×</button>`;d.querySelector('button').addEventListener('click',()=>{pendingImages.splice(idx,1);updateImagePreview();});w.appendChild(d);});}

function sendMessage(){
    const editor=document.getElementById('chat-editor'),html=editor?.innerHTML?.trim(),text=editor?.textContent?.trim();
    if((!text&&pendingImages.length===0)||!activeChannelId)return;
    const btn=document.getElementById('btn-send');if(btn){btn.textContent='Sending...';btn.disabled=true;}editor.contentEditable='false';
    const wasUnassigned=activeTicketSource==='unassigned'||activeTicketSource==='other';
    if(wasUnassigned && activeTicketId) {
        triggerAssignTicket(activeTicketId);
        activeTicketSource='my'; // optimistically update source so card moves correctly
    }
    if(pendingImages.length>0){triggerUploadAndSend(activeChannelId,html||'',pendingImages.map(i=>({base64:i.base64,name:i.name,mime:i.mime})));}
    else{triggerSendMessage(activeChannelId,html||'<p></p>');}
    editor.innerHTML='';pendingImages=[];updateImagePreview();
    setTimeout(()=>{editor.contentEditable='true';editor.focus();if(btn){btn.textContent='Send';btn.disabled=false;}if(wasUnassigned)setTimeout(()=>triggerRefresh(),1500);},600);
}

function populateColumns(){
    const cMy=document.getElementById('count-my'),cO=document.getElementById('count-other'),cU=document.getElementById('count-unassigned');
    if(cMy)cMy.textContent=`(${ticketsCache.my.length})`;if(cO)cO.textContent=`(${ticketsCache.other.length})`;if(cU)cU.textContent=`(${ticketsCache.unassigned.length})`;

    function fill(listId,tickets,source){
        const sorted=sortTicketsByWait(tickets);
        const el=document.getElementById(listId);if(!el)return;el.innerHTML='';
        if(sorted.length===0){el.innerHTML=`<div style="text-align:center;padding:2rem;color:${CONFIG.emptyState.color};font-size:12px;">No tickets</div>`;}
        else{sorted.forEach(t=>el.appendChild(makeTicketCard(t,source)));}
    }
    fill('list-my',ticketsCache.my,'my');fill('list-other',ticketsCache.other,'other');fill('list-unassigned',ticketsCache.unassigned,'unassigned');
    if(activeTicketId){const m=document.getElementById('chat-messages'),p=document.getElementById('chat-placeholder');if(m)m.style.display='block';if(p)p.style.display='none';}
}

function populateAssignments(){
    const el=document.getElementById('list-assignments');if(!el)return;el.innerHTML='';
    let count=0;
    assignmentsCache.items.forEach(s=>{
        const card=makeAssignmentCard(s);
        if(card){el.appendChild(card);count++;}
    });
    if(count===0){el.innerHTML=`<div style="text-align:center;padding:2rem;color:${CONFIG.emptyState.color};font-size:12px;">No assignments needing review</div>`;}
    if(assignmentsCache.items.length<assignmentsCache.total){
        const ld=document.createElement('div');ld.style.cssText='text-align:center;padding:10px;';
        ld.innerHTML=`<button id="btn-load-assign" style="padding:6px 14px;background:${CONFIG.chat.loadMoreBackground};border:1px solid ${CONFIG.chat.loadMoreBorder};border-radius:${CONFIG.buttons.borderRadius};color:${CONFIG.text.secondary};font-size:11px;cursor:pointer;font-family:inherit;">Load more (${assignmentsCache.items.length}/${assignmentsCache.total})</button>`;
        el.appendChild(ld);document.getElementById('btn-load-assign')?.addEventListener('click',()=>{triggerFetchAssignments(assignmentsCache.items.length,10,'');});
    }
}

function applyStyles(){
    if(CONFIG.font.importUrl){let fl=document.getElementById('fes-font');if(!fl){fl=document.createElement('link');fl.id='fes-font';fl.rel='stylesheet';fl.href=CONFIG.font.importUrl;document.head.appendChild(fl);}}
    let s=document.getElementById('fes-ext-styles');if(!s){s=document.createElement('style');s.id='fes-ext-styles';document.head.appendChild(s);}
    const bgCss=CONFIG.background.image?`background-image:linear-gradient(${CONFIG.background.overlay},${CONFIG.background.overlay}),url(${CONFIG.background.image});background-size:cover;background-position:center;background-attachment:fixed;`:`background:${CONFIG.background.solidColor||'#0f172a'};`;
    const TB=CONFIG.toolbar;
    s.textContent=`body{${bgCss}margin:0;padding:0;overflow:hidden;}#three-col,#three-col *{box-sizing:border-box;}#three-col{font-family:${CONFIG.font.family};}
    #root[data-fes-hidden]{visibility:hidden!important;pointer-events:none!important;position:fixed!important;height:0!important;overflow:visible!important;}
    .fes-scroll::-webkit-scrollbar{width:${CONFIG.scrollbar.width};}.fes-scroll::-webkit-scrollbar-track{background:${CONFIG.scrollbar.trackBackground};}.fes-scroll::-webkit-scrollbar-thumb{background:${CONFIG.scrollbar.thumbBackground};border-radius:${CONFIG.scrollbar.borderRadius};}.fes-scroll::-webkit-scrollbar-thumb:hover{background:${CONFIG.scrollbar.thumbHoverBackground};}
    .fes-tab:hover{background:${CONFIG.tabs.hoverBg};}
    .fes-msg-content p{margin:0;}.fes-msg-content a{color:${CONFIG.text.link};text-decoration:underline;}.fes-msg-content pre{background:${CONFIG.chat.codeBlockBackground};border:1px solid ${CONFIG.chat.codeBlockBorder};border-radius:6px;padding:8px;overflow-x:auto;margin:4px 0;}.fes-msg-content code{font-size:12px;color:${CONFIG.text.secondary};}.fes-msg-content img{max-width:${CONFIG.chat.imageMaxWidth};border-radius:${CONFIG.chat.imageBorderRadius};margin:4px 0;cursor:pointer;}.fes-msg-content ul,.fes-msg-content ol{padding-left:20px;margin:4px 0;}
    body>div[data-radix-portal]{display:none!important;}li[data-radix-collection-item],li[data-radix-toast]{display:none!important;}
    .fes-nav-link{transition:color 0.15s,background 0.15s;}.fes-nav-link:hover{background:${CONFIG.navbar.linkActiveBg};}#fes-search:focus{border-color:rgba(99,102,241,0.5);background:rgba(255,255,255,0.1);}
    #chat-editor:empty:before{content:attr(data-placeholder);color:${CONFIG.chat.inputPlaceholder};pointer-events:none;}#chat-editor:focus{border-color:${CONFIG.chat.inputFocusBorder};}
    @keyframes fes-pulse{0%,100%{opacity:1;}50%{opacity:0.4;}}
    .tb-btn{background:transparent;border:none;color:${TB.buttonColor};cursor:pointer;padding:6px;border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all 0.15s;}.tb-btn:hover{background:${TB.buttonHoverBg};color:${TB.buttonHoverColor};}`;
}

function hideNotifs(){if(window._fesNotifObs)return;window._fesNotifObs=new MutationObserver(muts=>{muts.forEach(m=>m.addedNodes.forEach(n=>{if(n.nodeType===1&&n.matches?.('li[data-radix-collection-item],li[data-radix-toast]'))n.style.setProperty('display','none','important');}));});window._fesNotifObs.observe(document.body,{childList:true,subtree:true});}

let assignmentRefreshTimer = null;

function startAutoRefresh() {

    if (assignmentRefreshTimer) clearInterval(assignmentRefreshTimer);
    assignmentRefreshTimer = setInterval(() => {
        if (isOnTargetPage) {
            triggerFetchAssignments(0, 10, '');
            triggerFetchAssignmentCount();
        }
    }, CONFIG.intervals.assignmentRefresh);
}

function syncWsIndicator() {

    const s = document.createElement('script');
    s.textContent = `
        (function() {
            if (window.__fesWsConnected) {
                window.dispatchEvent(new CustomEvent('fes-ws-connected'));
            }
        })();
    `;
    document.head.appendChild(s); s.remove();
}

function initExt(){
    injectPageContext();
    setTimeout(()=>{
        applyStyles();
        createLayout();
        hideNotifs();
        startAutoRefresh();
        if(ticketsCache.ready)populateColumns();
        setTimeout(()=>triggerRefresh(),2000);
        setTimeout(()=>{if(!ticketsCache.ready)triggerRefresh();},6000);
        setTimeout(triggerFetchAssignmentCount,3000);

        setTimeout(syncWsIndicator, 200);
    },1000);
}
setTimeout(()=>{isOnTargetPage=isTargetPage(window.location.href);if(isOnTargetPage)initExt();},800);