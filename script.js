const dot = document.getElementById('clicker-target');
const urlBar = document.getElementById('url-bar');
const frame = document.getElementById('site-display');
const cpsInput = document.getElementById('cps-val');

let isDragging = false;

// --- DRAG LOGIC ---
dot.addEventListener('mousedown', (e) => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        // Get workspace boundaries
        const rect = document.getElementById('workspace').getBoundingClientRect();
        
        // Calculate position relative to workspace
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        dot.style.left = x + 'px';
        dot.style.top = y + 'px';
    }
});

// --- LOAD WEBSITE LOGIC ---
urlBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        let url = urlBar.value.trim();
        if (!url.startsWith('http')) {
            url = 'https://' + url;
        }
        frame.src = url;
    }
});

// --- CLICK SIMULATION (Visual Only) ---
function clickLoop() {
    const cps = parseInt(cpsInput.value) || 1;
    const interval = 1000 / cps;

    // Simulate click effect
    dot.style.transform = 'translate(-50%, -50%) scale(1.2)';
    setTimeout(() => {
        dot.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 50);

    setTimeout(clickLoop, interval);
}

clickLoop();
