const dot = document.getElementById('clicker-dot');
const urlInput = document.getElementById('url-input');
const btnLoad = document.getElementById('btn-load');
const siteView = document.getElementById('site-view');
const cpsInput = document.getElementById('cps');

let isDragging = false;

// --- 1. MOVE THE DOT ---
dot.addEventListener('mousedown', (e) => {
    isDragging = true;
    dot.style.transition = 'none'; // Stop animations while dragging
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Move the dot to follow the mouse
        // Subtracting 10 keeps the mouse centered on the 20px dot
        dot.style.left = (e.clientX - 10) + 'px';
        dot.style.top = (e.clientY - 10) + 'px';
    }
});

// --- 2. LOAD THE WEBSITE ---
btnLoad.addEventListener('click', () => {
    let url = urlInput.value.trim();
    if (!url.startsWith('http')) {
        url = 'https://' + url;
    }
    siteView.src = url;
});

// Allow pressing "Enter" in the bar
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') btnLoad.click();
});

// --- 3. CLICK ANIMATION ---
function animateClick() {
    const cps = parseInt(cpsInput.value) || 1;
    const rate = 1000 / cps;

    // Visual pulse
    dot.style.transform = 'scale(1.2)';
    setTimeout(() => {
        dot.style.transform = 'scale(1)';
    }, 50);

    setTimeout(animateClick, rate);
}

animateClick();
