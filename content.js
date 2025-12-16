// ============================================
// CONFIGURATION - Customize your theme here!
// ============================================
const CONFIG = {
    // === BACKGROUND ===
    // image: URL for background image (set to null to disable)
    // overlay: Dark overlay color on top of the image
    // solidColor: Use instead of image (e.g., '#1a1a2e' or 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)')
    background: {
        image: 'https://images4.alphacoders.com/131/thumb-1920-1319295.jpeg',
        overlay: 'rgba(0, 0, 0, 0.5)',
        solidColor: null,
    },

    // === CARDS ===
    // background/backgroundHover: Card fill colors
    // border/borderHover: Border colors
    // shadow/shadowHover: Box shadows
    // blur: Backdrop blur amount
    // borderRadius: Corner rounding
    cards: {
        background: 'rgba(0, 0, 0, 0.3)',
        backgroundHover: 'rgba(0, 0, 0, 0.4)',
        border: 'rgba(255, 255, 255, 0.15)',
        borderHover: 'rgba(255, 255, 255, 0.25)',
        shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        shadowHover: '0 8px 12px rgba(0, 0, 0, 0.2)',
        blur: '10px',
        borderRadius: '0.5rem',
    },

    // === TABS ===
    // activeColor/inactiveColor: Text colors
    // underlineColor: Active tab indicator
    // badgeBackground/badgeText: Count badge styling
    tabs: {
        activeColor: '#ffffff',
        inactiveColor: 'rgba(255, 255, 255, 0.6)',
        underlineColor: '#ffffff',
        badgeBackground: 'rgba(255, 255, 255, 0.1)',
        badgeText: '#ffffff',
    },

    // === TEXT COLORS ===
    text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.8)',
        muted: 'rgba(255, 255, 255, 0.6)',
        veryMuted: 'rgba(255, 255, 255, 0.4)',
    },

    // === STATUS COLORS ===
    // Each status has: border, background, text
    status: {
        sky: {
            border: 'rgba(14, 165, 233, 0.3)',
            background: 'rgba(14, 165, 233, 0.1)',
            text: '#0ea5e9',
        },
        amber: {
            border: 'rgba(251, 191, 36, 0.3)',
            background: 'rgba(251, 191, 36, 0.1)',
            text: '#fbbf24',
        },
        green: {
            border: 'rgba(34, 197, 94, 0.3)',
            background: 'rgba(34, 197, 94, 0.1)',
            text: '#22c55e',
        },
    },

    // === PRIORITY COLORS ===
    // Each priority has: background, text
    priority: {
        low: {
            background: 'rgba(34, 197, 94, 0.2)',
            text: '#22c55e',
        },
        medium: {
            background: 'rgba(251, 191, 36, 0.2)',
            text: '#fbbf24',
        },
        high: {
            background: 'rgba(239, 68, 68, 0.2)',
            text: '#ef4444',
        },
    },

    // === BUTTONS ===
    buttons: {
        background: 'rgba(255, 255, 255, 0.05)',
        backgroundHover: 'rgba(255, 255, 255, 0.1)',
        border: 'rgba(255, 255, 255, 0.2)',
        borderHover: 'rgba(255, 255, 255, 0.3)',
        text: '#ffffff',
    },

    // === MESSAGE BOX (inside cards) ===
    messageBox: {
        background: 'rgba(0, 0, 0, 0.2)',
        border: 'rgba(255, 255, 255, 0.1)',
    },

    // === CHAT MODAL ===
    chat: {
        modalBackground: 'rgba(0, 0, 0, 0.4)',
        modalBlur: '20px',
        modalBorder: 'rgba(255, 255, 255, 0.15)',
        modalShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        headerBackground: 'rgba(0, 0, 0, 0.3)',
        headerBlur: '10px',
        messageHoverBackground: 'rgba(255, 255, 255, 0.05)',
        messageDivider: 'rgba(255, 255, 255, 0.08)',
        codeBlockBackground: 'rgba(0, 0, 0, 0.5)',
        codeBlockBorder: 'rgba(255, 255, 255, 0.1)',
    },

    // === SCROLLBAR ===
    scrollbar: {
        width: '8px',
        trackBackground: 'rgba(0, 0, 0, 0.2)',
        thumbBackground: 'rgba(255, 255, 255, 0.2)',
        thumbHoverBackground: 'rgba(255, 255, 255, 0.3)',
        borderRadius: '4px',
    },

    // === ICONS ===
    icons: {
        color: 'rgba(255, 255, 255, 0.7)',
        hoverColor: 'rgba(255, 255, 255, 0.9)',
    },

    // === EMPTY STATE ===
    emptyState: {
        titleColor: '#ffffff',
        descriptionColor: 'rgba(255, 255, 255, 0.6)',
    },

    // === AVATAR ===
    avatar: {
        border: 'rgba(255, 255, 255, 0.2)',
        borderWidth: '2px',
    },

    // === DIVIDERS ===
    dividers: {
        color: 'rgba(255, 255, 255, 0.1)',
    },
};
// ============================================
// END OF CONFIGURATION
// ============================================


const TARGET_URL = 'https://app.fesinstitute.com/dashboard/fes/admin/tickets';
let currentUrl = window.location.href;
let isOnTargetPage = false;

function checkUrl() {
    const newUrl = window.location.href;
    const wasOnTarget = isOnTargetPage;
    isOnTargetPage = newUrl === TARGET_URL;
    
    if (newUrl !== currentUrl) {
        currentUrl = newUrl;
        if (isOnTargetPage && !wasOnTarget) {
            setTimeout(() => { cleanupAndReinject(); }, 500);
        } else if (!isOnTargetPage && wasOnTarget) {
            hideCustomUI();
        }
    }
}

function hideCustomUI() {
    const customContainer = document.getElementById('custom-tickets-container');
    if (customContainer) customContainer.style.display = 'none';
    
    const hiddenContent = document.querySelector('[data-hidden-by-extension="true"]');
    if (hiddenContent) {
        hiddenContent.style.display = '';
        hiddenContent.removeAttribute('data-hidden-by-extension');
    }
    
    if (observer) {
        observer.disconnect();
        observerActive = false;
    }
}

function showCustomUI() {
    const customContainer = document.getElementById('custom-tickets-container');
    if (customContainer) customContainer.style.display = 'flex';
    
    const originalContent = document.querySelector(injectionSelector + ' > .flex.h-screen.flex-1.flex-col');
    if (originalContent && !originalContent.hasAttribute('data-hidden-by-extension')) {
        originalContent.style.display = 'none';
        originalContent.setAttribute('data-hidden-by-extension', 'true');
    }
}

function cleanupAndReinject() {
    const existingContainer = document.getElementById('custom-tickets-container');
    if (existingContainer) existingContainer.remove();
    
    hasInjected = false;
    
    const hiddenContent = document.querySelector('[data-hidden-by-extension="true"]');
    if (hiddenContent) {
        hiddenContent.style.display = '';
        hiddenContent.removeAttribute('data-hidden-by-extension');
    }
    
    injectHTML();
    applyStyles();
    setTimeout(() => { setupObserver(); }, 500);
}

setInterval(checkUrl, 500);
window.addEventListener('popstate', () => { setTimeout(checkUrl, 100); });

const backgroundSelector = '#root > div.flex.h-screen.max-h-screen.flex-col';

const unsetSelectors = [
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div > div > div',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.custom-scrollbar2.z-20.flex.w-full.max-w-24.flex-col.items-center.justify-between.overflow-y-auto.bg-neutral-900.pb-10.dark\\:bg-slate-950.max-xs\\:hidden.max-md2\\:max-w-16',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5 > div.relative.flex.flex-1.overflow-hidden > div',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5 > div.flex.flex-shrink-0.items-center.gap-2.border-b.bg-white.p-2.dark\\:border-neutral-800.dark\\:bg-neutral-900',
    '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5 > div.relative.flex.flex-1.overflow-hidden > div > div.relative.flex-1.overflow-hidden > div'
];

const injectionSelector = '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto';

let observer = null;
let observerTimeout = null;
let observerActive = false;
let mutationCount = 0;
let lastRefreshTime = null;

function setupObserver() {
    if (observer) {
        observer.disconnect();
        observerActive = false;
    }
    
    const ticketContainer = document.querySelector('#root > div.flex.h-screen.max-h-screen.flex-col > div');
    if (!ticketContainer) return;
    
    observer = new MutationObserver((mutations) => {
        mutationCount++;
        
        const hasTicketAreaChanges = mutations.some(mutation => {
            const target = mutation.target;
            const nodes = [...mutation.addedNodes, ...mutation.removedNodes];
            const hasTicketNodes = nodes.some(node => {
                if (node.nodeType === 1) {
                    const hasTicketClass = node.classList && (
                        node.classList.contains('text-card-foreground') ||
                        node.classList.contains('rounded-lg') ||
                        node.classList.contains('cursor-pointer')
                    );
                    const containsTicket = node.querySelector && (
                        node.querySelector('.text-card-foreground') ||
                        node.querySelector('[class*="card"]')
                    );
                    if (hasTicketClass || containsTicket) return true;
                }
                return false;
            });
            
            const isInTicketArea = target.nodeType === 1 && (
                target.closest('.flex.h-\\[78vh\\]') ||
                target.querySelector('.flex.h-\\[78vh\\]')
            );
            
            if (isInTicketArea) return true;
            return hasTicketNodes;
        });
        
        if (hasTicketAreaChanges) {
            if (observerTimeout) clearTimeout(observerTimeout);
            observerTimeout = setTimeout(() => { refreshUI(); }, 300);
        }
    });
    
    observer.observe(ticketContainer, { childList: true, subtree: true, attributes: false });
    observerActive = true;
}

const originalFetch = window.fetch;
window.fetch = function(...args) {
    const url = args[0];
    if (typeof url === 'string' && url.includes('backend.fesinstitute.com/tickets')) {
        return originalFetch.apply(this, args).then(response => response);
    }
    return originalFetch.apply(this, args);
};

const originalXHROpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    return originalXHROpen.apply(this, [method, url, ...rest]);
};

function extractTicketData() {
    const hiddenContent = document.querySelector('[data-hidden-by-extension="true"]');
    let wasHidden = false;
    
    if (hiddenContent) {
        hiddenContent.style.display = '';
        wasHidden = true;
    }
    
    const columns = document.querySelectorAll('.flex.h-\\[78vh\\].max-h-full.min-h-0.flex-col.rounded-lg.border');
    const ticketsByTab = { unassigned: [], myTickets: [], others: [] };
    
    columns.forEach((column) => {
        const header = column.querySelector('h3');
        if (!header) return;
        
        const columnName = header.textContent.trim().toLowerCase();
        let tabKey = '';
        
        if (columnName.includes('unassigned')) tabKey = 'unassigned';
        else if (columnName.includes('my tickets')) tabKey = 'myTickets';
        else if (columnName.includes('others')) tabKey = 'others';
        
        if (!tabKey) return;
        
        const ticketCards = column.querySelectorAll('.text-card-foreground.cursor-pointer.rounded-lg.border');
        
        ticketCards.forEach((card) => {
            const priorityBadge = card.querySelector('.rounded-full');
            let priority = 'MEDIUM';
            let priorityColor = CONFIG.priority.medium;
            
            if (priorityBadge) {
                const priorityText = priorityBadge.textContent.trim();
                priority = priorityText;
                if (priorityText.includes('LOW')) priorityColor = CONFIG.priority.low;
                else if (priorityText.includes('HIGH')) priorityColor = CONFIG.priority.high;
                else if (priorityText.includes('MEDIUM')) priorityColor = CONFIG.priority.medium;
            }
            
            const messageContainer = card.querySelector('.flex.items-start.gap-2.rounded-md.border');
            let recentMessage = { avatar: '', content: 'No recent messages', timestamp: '' };
            
            if (messageContainer) {
                const messageAvatar = messageContainer.querySelector('img');
                const messageContent = messageContainer.querySelector('.line-clamp-2');
                const messageTime = messageContainer.querySelector('.inline-flex.items-center.gap-1');
                recentMessage = {
                    avatar: messageAvatar?.src || 'https://via.placeholder.com/40',
                    content: messageContent?.textContent.trim() || 'No recent messages',
                    timestamp: messageTime?.textContent.replace(/\s+/g, ' ').trim() || 'Just now'
                };
            }
            
            const assignedUsersContainer = card.querySelector('.flex.-space-x-1\\.5');
            const assignedUsers = [];
            if (assignedUsersContainer) {
                assignedUsersContainer.querySelectorAll('img').forEach(img => {
                    assignedUsers.push({
                        avatar: img.src,
                        name: img.parentElement.getAttribute('title') || 'User'
                    });
                });
            }
            
            const unreadBadge = card.querySelector('.bg-red-500, .bg-red-600');
            const unreadCount = unreadBadge ? 1 : 0;
            
            const ticket = {
                avatar: card.querySelector('img')?.src || 'https://via.placeholder.com/40',
                name: card.querySelector('.text-sm.font-semibold')?.textContent.trim() || 'Unknown',
                hasNewBadge: !!card.querySelector('.bg-red-500'),
                status: card.querySelector('.inline-flex.items-center.rounded-md')?.textContent.trim() || 'In Progress',
                statusColor: card.querySelector('.inline-flex.items-center.rounded-md')?.className.includes('sky') ? 'sky' : 
                            card.querySelector('.inline-flex.items-center.rounded-md')?.className.includes('amber') ? 'amber' : 'sky',
                priority: priority,
                priorityColor: priorityColor,
                message: card.querySelector('.line-clamp-2.text-xs p')?.textContent.trim() || 'No message',
                timestamp: card.querySelectorAll('.inline-flex.items-center.gap-1')[0]?.textContent.replace(/\s+/g, ' ').trim() || '0 minutes ago',
                assigned: card.querySelectorAll('.inline-flex.items-center.gap-1')[1]?.textContent.replace(/\s+/g, ' ').trim() || '',
                recentMessage: recentMessage,
                assignedUsers: assignedUsers,
                unreadCount: unreadCount
            };
            
            ticketsByTab[tabKey].push(ticket);
        });
    });
    
    if (wasHidden && hiddenContent) hiddenContent.style.display = 'none';
    return ticketsByTab;
}

function generateTicketCardHTML(ticket) {
    return `
        <div style="cursor: pointer; border-radius: ${CONFIG.cards.borderRadius}; border: 1px solid ${CONFIG.cards.border}; padding: 0; background: ${CONFIG.cards.background}; backdrop-filter: blur(${CONFIG.cards.blur}); transition: all 0.2s; box-shadow: ${CONFIG.cards.shadow}; display: flex; flex-direction: column; height: 100%;">
            <div style="padding: 0.75rem; flex: 1 1 auto; display: flex; flex-direction: column;">
                <div style="display: flex; align-items: start; gap: 0.5rem; margin-bottom: 0.75rem;">
                    <img src="${ticket.avatar}" style="height: 2rem; width: 2rem; border-radius: 9999px; border: ${CONFIG.avatar.borderWidth} solid ${CONFIG.avatar.border};">
                    <div style="flex: 1; min-width: 0;">
                        <div style="display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; margin-bottom: 0.375rem;">
                            <span style="font-size: 0.875rem; font-weight: 600; color: ${CONFIG.text.primary};">${ticket.name}</span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; align-items: start; gap: 0.5rem; border-radius: 0.375rem; border: 1px solid ${CONFIG.messageBox.border}; background: ${CONFIG.messageBox.background}; padding: 0.5rem; margin-bottom: 0.5rem;">
                    <svg style="margin-top: 0.25rem; height: 0.875rem; width: 0.875rem; flex-shrink: 0; color: ${CONFIG.text.muted};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                    ${ticket.recentMessage.avatar ? `<img src="${ticket.recentMessage.avatar}" style="height: 1.25rem; width: 1.25rem; border-radius: 9999px; border: ${CONFIG.avatar.borderWidth} solid ${CONFIG.avatar.border}; flex-shrink: 0;">` : ''}
                    <div style="flex: 1; min-width: 0;">
                        <p style="font-size: 0.75rem; color: ${CONFIG.text.secondary}; margin: 0 0 0.25rem 0; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.4;">${ticket.recentMessage.content}</p>
                        <div style="display: flex; align-items: center; justify-content: flex-end;">
                            <span style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.625rem; color: ${CONFIG.text.muted};">
                                <svg style="height: 0.75rem; width: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                                ${ticket.recentMessage.timestamp}
                            </span>
                        </div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid ${CONFIG.dividers.color}; padding-top: 0.5rem;">
                    <div style="display: none;"></div>
                    <span style="display: inline-flex; align-items: center; gap: 0.25rem; font-size: 0.625rem; color: ${CONFIG.text.muted};">
                        <svg style="height: 0.75rem; width: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        ${ticket.assigned || 'Not assigned'}
                    </span>
                </div>
            </div>
            <div style="padding: 0.75rem; border-top: 1px solid ${CONFIG.dividers.color}; display: flex; justify-content: flex-end; background: rgba(0,0,0,0.15);">
                <button style="display: inline-flex; align-items: center; justify-content: center; border-radius: 0.375rem; border: 1px solid ${CONFIG.buttons.border}; padding: 0.25rem 0.75rem; font-size: 0.75rem; background: ${CONFIG.buttons.background}; color: ${CONFIG.buttons.text}; cursor: pointer; gap: 0.25rem; transition: all 0.2s;">
                    <svg style="height: 0.75rem; width: 0.75rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <line x1="19" x2="19" y1="8" y2="14"></line>
                        <line x1="22" x2="16" y1="11" y2="11"></line>
                    </svg>
                    Join
                </button>
            </div>
        </div>
    `;
}

function attachCardClickHandlers(ticketsData) {
    const customCards = document.querySelectorAll('#custom-tickets-container [style*="cursor: pointer"]');
    
    customCards.forEach((customCard) => {
        customCard.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            
            const ticketName = customCard.querySelector('span[style*="font-weight: 600"]')?.textContent.trim();
            if (!ticketName) return;
            
            const hiddenContent = document.querySelector('[data-hidden-by-extension="true"]');
            if (hiddenContent) hiddenContent.style.display = '';
            
            const originalCards = document.querySelectorAll('.text-card-foreground.cursor-pointer.rounded-lg.border');
            
            for (let originalCard of originalCards) {
                const originalName = originalCard.querySelector('.text-sm.font-semibold')?.textContent.trim();
                if (originalName === ticketName) {
                    originalCard.click();
                    setTimeout(() => { applyChatStyles(); }, 300);
                    break;
                }
            }
            
            setTimeout(() => {
                if (hiddenContent) hiddenContent.style.display = 'none';
            }, 100);
        });
    });
}

function generateHTML(ticketsData) {
    const unassignedCards = ticketsData.unassigned.map(t => generateTicketCardHTML(t)).join('');
    const myTicketsCards = ticketsData.myTickets.map(t => generateTicketCardHTML(t)).join('');
    const othersCards = ticketsData.others.map(t => generateTicketCardHTML(t)).join('');
    
    const unassignedCount = ticketsData.unassigned.length;
    const myTicketsCount = ticketsData.myTickets.length;
    const othersCount = ticketsData.others.length;
    
    return `
<div style="display: flex; flex-direction: column; height: 100%;">
  <div style="border-bottom: 1px solid ${CONFIG.dividers.color}; padding: 0 1.5rem; display: flex; gap: 0;">
    <button id="tab-unassigned" class="tab-button" style="position: relative; padding: 0.75rem 1rem; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; color: ${CONFIG.tabs.inactiveColor}; cursor: pointer; transition: color 0.2s;">
      Unassigned
      ${unassignedCount > 0 ? `<span style="display: inline-flex; align-items: center; justify-content: center; margin-left: 0.5rem; border-radius: 9999px; background: ${CONFIG.tabs.badgeBackground}; padding: 0.125rem 0.5rem; font-size: 0.75rem; color: ${CONFIG.tabs.badgeText};">${unassignedCount}</span>` : ''}
    </button>
    <button id="tab-my-tickets" class="tab-button" style="position: relative; padding: 0.75rem 1rem; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; color: ${CONFIG.tabs.inactiveColor}; cursor: pointer; transition: color 0.2s;">
      My Tickets
      ${myTicketsCount > 0 ? `<span style="display: inline-flex; align-items: center; justify-content: center; margin-left: 0.5rem; border-radius: 9999px; background: ${CONFIG.tabs.badgeBackground}; padding: 0.125rem 0.5rem; font-size: 0.75rem; color: ${CONFIG.tabs.badgeText};">${myTicketsCount}</span>` : ''}
    </button>
    <button id="tab-others" class="tab-button active" style="position: relative; padding: 0.75rem 1rem; font-size: 0.875rem; font-weight: 500; background: transparent; border: none; color: ${CONFIG.tabs.activeColor}; cursor: pointer; transition: color 0.2s;">
      Others
      ${othersCount > 0 ? `<span style="display: inline-flex; align-items: center; justify-content: center; margin-left: 0.5rem; border-radius: 9999px; background: ${CONFIG.tabs.badgeBackground}; padding: 0.125rem 0.5rem; font-size: 0.75rem; color: ${CONFIG.tabs.badgeText};">${othersCount}</span>` : ''}
      <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: ${CONFIG.tabs.underlineColor};"></div>
    </button>
  </div>
  <div style="flex: 1; overflow-y: auto; padding: 1.5rem;">
    <div id="content-unassigned" class="tab-content" style="display: none;">
      ${unassignedCards ? `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; max-width: 1600px; margin: 0 auto;">${unassignedCards}</div>` : 
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
            <h3 style="font-size: 1.125rem; font-weight: 600; color: ${CONFIG.emptyState.titleColor}; margin: 0 0 0.5rem 0;">No tickets</h3>
            <p style="font-size: 0.875rem; color: ${CONFIG.emptyState.descriptionColor};">All tickets have been assigned. Great work!</p>
        </div>`}
    </div>
    <div id="content-my-tickets" class="tab-content" style="display: none;">
      ${myTicketsCards ? `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; max-width: 1600px; margin: 0 auto;">${myTicketsCards}</div>` :
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
            <h3 style="font-size: 1.125rem; font-weight: 600; color: ${CONFIG.emptyState.titleColor}; margin: 0 0 0.5rem 0;">No tickets</h3>
            <p style="font-size: 0.875rem; color: ${CONFIG.emptyState.descriptionColor};">You have no active tickets at the moment.</p>
        </div>`}
    </div>
    <div id="content-others" class="tab-content" style="display: block;">
      ${othersCards ? `<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1rem; max-width: 1600px; margin: 0 auto;">${othersCards}</div>` :
        `<div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; text-align: center;">
            <h3 style="font-size: 1.125rem; font-weight: 600; color: ${CONFIG.emptyState.titleColor}; margin: 0 0 0.5rem 0;">No tickets</h3>
            <p style="font-size: 0.875rem; color: ${CONFIG.emptyState.descriptionColor};">No other tickets at the moment.</p>
        </div>`}
    </div>
  </div>
</div>
`;
}

let hasInjected = false;

function setupTabListeners() {
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => {
                t.style.color = CONFIG.tabs.inactiveColor;
                t.classList.remove('active');
                const existingUnderline = t.querySelector('div[style*="position: absolute"]');
                if (existingUnderline) existingUnderline.remove();
            });
            
            tab.style.color = CONFIG.tabs.activeColor;
            tab.classList.add('active');
            const underline = document.createElement('div');
            underline.style.cssText = `position: absolute; bottom: 0; left: 0; right: 0; height: 2px; background: ${CONFIG.tabs.underlineColor};`;
            tab.appendChild(underline);
            
            contents.forEach(c => c.style.display = 'none');
            
            const tabId = tab.id.replace('tab-', 'content-');
            const targetContent = document.getElementById(tabId);
            if (targetContent) targetContent.style.display = 'block';
        });
    });
}

function injectHTML() {
    const targetElement = document.querySelector(injectionSelector);
    if (!targetElement) return;
    
    let customContainer = document.getElementById('custom-tickets-container');
    
    if (!customContainer) {
        const originalContent = targetElement.querySelector('.flex.h-screen.flex-1.flex-col');
        if (originalContent && !originalContent.hasAttribute('data-hidden-by-extension')) {
            originalContent.style.display = 'none';
            originalContent.setAttribute('data-hidden-by-extension', 'true');
        }
        
        customContainer = document.createElement('div');
        customContainer.id = 'custom-tickets-container';
        customContainer.style.cssText = 'display: flex; flex-direction: column; height: 100%; width: 100%;';
        targetElement.appendChild(customContainer);
    }
    
    const ticketsData = extractTicketData();
    const html = generateHTML(ticketsData);
    
    customContainer.innerHTML = html;
    hasInjected = true;
    
    setTimeout(() => {
        setupTabListeners();
        attachCardClickHandlers(ticketsData);
    }, 100);
}

function refreshUI() {
    lastRefreshTime = Date.now();
    hasInjected = false;
    if (observer) {
        observer.disconnect();
        observerActive = false;
    }
    injectHTML();
    applyStyles();
    setTimeout(() => { setupObserver(); }, 500);
}

function applyChatStyles() {
    let styleElement = document.getElementById('custom-chat-styles');
    if (!styleElement) {
        styleElement = document.createElement('style');
        styleElement.id = 'custom-chat-styles';
        document.head.appendChild(styleElement);
    }
    
    styleElement.textContent = `
        .fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border {
            background: ${CONFIG.chat.modalBackground} !important;
            backdrop-filter: blur(${CONFIG.chat.modalBlur}) !important;
            border: 1px solid ${CONFIG.chat.modalBorder} !important;
            box-shadow: ${CONFIG.chat.modalShadow} !important;
        }
        .fixed.bottom-0 > .flex.h-14.flex-shrink-0 {
            background: ${CONFIG.chat.headerBackground} !important;
            backdrop-filter: blur(${CONFIG.chat.headerBlur}) !important;
            border-bottom: 1px solid ${CONFIG.dividers.color} !important;
        }
        .fixed.bottom-0 > .flex.h-14.flex-shrink-0 .flex.items-center.gap-1\\.5:has(.lucide-calendar) { display: none !important; }
        .fixed.bottom-0 > .flex.h-14.flex-shrink-0 .inline-flex.items-center.rounded-md.px-2\\.5 { display: none !important; }
        .fixed.bottom-0 > .flex.h-14.flex-shrink-0 .text-sm.font-semibold { color: ${CONFIG.text.primary} !important; }
        .fixed.bottom-0 > .flex.h-14.flex-shrink-0 .rounded-full {
            background: ${CONFIG.priority.high.background} !important;
            color: ${CONFIG.text.primary} !important;
        }
        .fixed.bottom-0 > .flex.flex-shrink-0.items-center button {
            background: ${CONFIG.buttons.background} !important;
            border: 1px solid ${CONFIG.buttons.border} !important;
            backdrop-filter: blur(10px) !important;
            color: ${CONFIG.buttons.text} !important;
        }
        .fixed.bottom-0 > .flex.flex-shrink-0.items-center button:hover { background: ${CONFIG.buttons.backgroundHover} !important; }
        .fixed.bottom-0 .z-50.flex.h-full.w-full.flex-1.flex-col { background: transparent !important; }
        .fixed.bottom-0 .group.relative.flex.w-full.items-start.justify-between {
            padding: 0.375rem 0.75rem !important;
            margin: 0 !important;
            background: transparent !important;
            border: none !important;
            border-radius: 0 !important;
            transition: background 0.2s !important;
        }
        .fixed.bottom-0 .group.relative.flex.w-full.items-start.justify-between:hover {
            background: ${CONFIG.chat.messageHoverBackground} !important;
            border-radius: 0.5rem !important;
        }
        .fixed.bottom-0 .group.relative.flex.w-full.items-start.justify-between:has(.mr-2.flex.w-10) { padding-left: 3.5rem !important; }
        .fixed.bottom-0 .group.relative.flex.w-full.items-start.justify-between:has(img.h-10.w-10) {
            margin-top: 1rem !important;
            padding-top: 0.75rem !important;
            border-top: 1px solid ${CONFIG.chat.messageDivider} !important;
        }
        .fixed.bottom-0 .custom-scrollbar2 > div > div:first-child .group:first-child {
            border-top: none !important;
            margin-top: 0 !important;
        }
        .fixed.bottom-0 .group.relative.flex.w-full.items-start.justify-between.py-0\\.5 {
            padding-top: 0.25rem !important;
            padding-bottom: 0.25rem !important;
        }
        .fixed.bottom-0 .group .flex.items-center.gap-3.py-1 { display: none !important; }
        .fixed.bottom-0 .text-\\[15px\\].font-bold { color: ${CONFIG.text.primary} !important; }
        .fixed.bottom-0 .text-xs.font-medium { color: ${CONFIG.text.muted} !important; }
        .fixed.bottom-0 .tiptap-text-display { color: ${CONFIG.text.secondary} !important; }
        .fixed.bottom-0 pre {
            background: ${CONFIG.chat.codeBlockBackground} !important;
            border: 1px solid ${CONFIG.chat.codeBlockBorder} !important;
            border-radius: 0.5rem !important;
            padding: 0.75rem !important;
        }
        .fixed.bottom-0 code { color: ${CONFIG.text.secondary} !important; }
        .fixed.bottom-0 .rounded-md.px-2\\.5.py-0\\.5 {
            background: ${CONFIG.status.amber.background} !important;
            border: 1px solid ${CONFIG.status.amber.border} !important;
            color: ${CONFIG.status.amber.text} !important;
        }
        .fixed.bottom-0 img.rounded { border: ${CONFIG.avatar.borderWidth} solid ${CONFIG.avatar.border} !important; }
        .fixed.bottom-0 .relative.my-4 { margin: 1rem 0.75rem !important; }
        .fixed.bottom-0 .relative.my-4 span {
            background: ${CONFIG.buttons.background} !important;
            backdrop-filter: blur(10px) !important;
            color: ${CONFIG.text.primary} !important;
            padding: 0.5rem 1rem !important;
            border-radius: 0.5rem !important;
        }
        .fixed.bottom-0 .absolute.-top-2.right-5 {
            background: ${CONFIG.chat.codeBlockBackground} !important;
            backdrop-filter: blur(10px) !important;
            border: 1px solid ${CONFIG.buttons.border} !important;
        }
        .fixed.bottom-0 .absolute.-top-2.right-5 svg { color: ${CONFIG.text.secondary} !important; }
        .fixed.bottom-0 svg { color: ${CONFIG.icons.color} !important; }
        .fixed.bottom-0 ::-webkit-scrollbar { width: ${CONFIG.scrollbar.width}; }
        .fixed.bottom-0 ::-webkit-scrollbar-track {
            background: ${CONFIG.scrollbar.trackBackground};
            border-radius: ${CONFIG.scrollbar.borderRadius};
        }
        .fixed.bottom-0 ::-webkit-scrollbar-thumb {
            background: ${CONFIG.scrollbar.thumbBackground};
            border-radius: ${CONFIG.scrollbar.borderRadius};
        }
        .fixed.bottom-0 ::-webkit-scrollbar-thumb:hover { background: ${CONFIG.scrollbar.thumbHoverBackground}; }
        .fixed.bottom-0 > .flex.h-14 button { color: ${CONFIG.text.primary} !important; }
        .fixed.bottom-0 > .flex.h-14 button:hover { background: ${CONFIG.buttons.backgroundHover} !important; }
    `;
}

 
function hideNotifications() {
    try {
      
        document.querySelectorAll('li[data-radix-collection-item], li[data-radix-toast], ol[tabindex][class*="fixed"]').forEach(el => {
            el.style.setProperty('display', 'none', 'important');
        });

         
        if (window._notificationObserver) return;

        window._notificationObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType !== 1) return;
                    try {
                        if (node.matches && (node.matches('li[data-radix-collection-item]') || node.matches('li[data-radix-toast]') || (node.tagName === 'OL' && node.className && node.className.includes('fixed') && node.className.includes('right-0')))) {
                            node.style.setProperty('display', 'none', 'important');
                        } else if (node.querySelector) {
                            const toast = node.querySelector('li[data-radix-collection-item], li[data-radix-toast]');
                            if (toast) toast.style.setProperty('display', 'none', 'important');
                        }
                    } catch (e) {}
                });
            });
        });

        window._notificationObserver.observe(document.body, { childList: true, subtree: true });
    } catch (e) {
       
        console.error('hideNotifications error', e);
    }
}

function applyStyles() {
    document.querySelectorAll('div.mr-2.flex.w-10.items-start.justify-center.pt-1').forEach(el => {
        el.style.setProperty('display', 'none', 'important');
    });
    
    const bgDiv = document.querySelector(backgroundSelector);
    if (bgDiv) {
        if (CONFIG.background.image) {
            bgDiv.style.setProperty('background-image', `linear-gradient(${CONFIG.background.overlay}, ${CONFIG.background.overlay}), url(${CONFIG.background.image})`, 'important');
            bgDiv.style.setProperty('background-size', 'cover', 'important');
            bgDiv.style.setProperty('background-position', 'center center', 'important');
        } else if (CONFIG.background.solidColor) {
            bgDiv.style.setProperty('background', CONFIG.background.solidColor, 'important');
            bgDiv.style.setProperty('background-image', 'none', 'important');
        }
    }

    unsetSelectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.style.setProperty('background', 'none', 'important');
            el.style.setProperty('background-color', 'transparent', 'important');
            el.style.setProperty('background-image', 'none', 'important');
        });
    });

    document.querySelectorAll('div.bg-neutral-50, div.dark\\:bg-neutral-900\\/40, div.text-card-foreground, svg.lucide-message-square').forEach(el => {
        el.style.setProperty('background', 'none', 'important');
        el.style.setProperty('background-color', 'transparent', 'important');
    });

   
    const transparentSelectors = '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5 > div.relative.flex.flex-1.overflow-hidden > div > div.bg-background.dark\\:border-neutral-800 > div > div > div > div.relative.flex.items-center.space-x-2.hover\\:shadow-sm > div > div > div.flex.items-center.transition-all.justify-between.gap-3.rounded-t-\\[10px\\].bg-slate-200.p-2.py-1\\.5.dark\\:bg-slate-950,' +
                                '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5 > div.relative.flex.flex-1.overflow-hidden > div > div.bg-background.dark\\:border-neutral-800 > div > div,' +
                                '#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div.flex.flex-1.flex-col.overflow-y-auto.rounded-xl.rounded-bl-none.rounded-br-none.bg-white.dark\\:bg-slate-950 > div > div > div.relative.max-h-\\[calc\\(100vh-65px\\)\\].flex-1.overflow-x-hidden > div > div.fixed.bottom-0.z-50.flex.flex-col.overflow-hidden.rounded-t-lg.border.border-neutral-200.bg-white.shadow-2xl.transition-all.duration-300.dark\\:border-neutral-800.dark\\:bg-neutral-900.h-4\\/5 > div.relative.flex.flex-1.overflow-hidden > div > div.bg-background.dark\\:border-neutral-800';

    document.querySelectorAll(transparentSelectors).forEach(el => {
        el.style.setProperty('background', 'none', 'important');
        el.style.setProperty('background-color', 'transparent', 'important');
    });

    const whiteSelectors = 'svg.lucide-users, svg.lucide-clock, svg.lucide-calendar-days, span.line-clamp-2, p.text-xs, span.text-neutral-500, span.dark\\:text-neutral-400, span.text-\\[10px\\]';
    document.querySelectorAll(whiteSelectors).forEach(el => {
        el.style.setProperty('color', CONFIG.text.primary, 'important');
        if (el.tagName === 'svg') el.style.setProperty('fill', CONFIG.text.primary, 'important');
    });

    const sidebar = document.querySelector('#root > div.flex.h-screen.max-h-screen.flex-col > div > div.flex.h-screen.flex-1.flex-col.overflow-y-auto.bg-neutral-900.pr-2.dark\\:bg-slate-950 > div > div > div > div.z-5.sticky.top-0.flex.flex-col.bg-neutral-100.shadow-md.transition-all.duration-300.dark\\:bg-neutral-900.max-lg\\:hidden.w-full.max-w-56 > div');
    if (sidebar) {
        sidebar.querySelectorAll('a > span, a > svg').forEach(el => el.style.setProperty('color', CONFIG.text.primary, 'important'));
    }
    
    applyChatStyles();
    hideNotifications();
}

setTimeout(() => {
    isOnTargetPage = window.location.href === TARGET_URL;
    if (isOnTargetPage) {
        injectHTML();
        applyStyles();
        hideNotifications();
        setTimeout(() => { setupObserver(); }, 500);
    }
}, 2000);

const chatObserver = new MutationObserver((mutations) => {
    if (!isOnTargetPage) return;
    
    mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) {
                if (node.classList && (
                    node.classList.contains('fixed') && node.classList.contains('bottom-0') ||
                    node.querySelector && node.querySelector('.fixed.bottom-0.z-50')
                )) {
                    setTimeout(() => { applyChatStyles(); }, 100);
                }
            }
        });
    });
});

setTimeout(() => {
    chatObserver.observe(document.body, { childList: true, subtree: true });
    hideNotifications();
}, 2000);