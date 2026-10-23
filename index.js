// --- DATA: The Parts Database ---
// COMPLETE: Includes Case, Cooler, Peripherals, AND Operating System
const partsDatabase = {
    cpu: {
        label: "Processors (CPU)",
        icon: "cpu",
        items: [
            { id: "cpu1", name: "AMD Ryzen 5 5600X", price: 11000, img: "https://m.media-amazon.com/images/I/51ld6RR8IrL._AC_SL1500_.jpg", desc: "6 Cores. Socket AM4.", socket: "AM4", wattage: 65, type: "cpu" },
            { id: "cpu2", name: "AMD Ryzen 7 7800X3D", price: 24500, img: "https://ecommerce.datablitz.com.ph/cdn/shop/files/zvbsdfgns_1600x.jpg?v=1760513820", desc: "Gaming Beast. Socket AM5.", socket: "AM5", wattage: 120, type: "cpu" },
            { id: "cpu3", name: "Intel Core i5-13600K", price: 18000, img: "https://ecommerce.datablitz.com.ph/cdn/shop/files/srfgmndthmd_1600x.jpg?v=1760516084", desc: "14 Cores. Socket LGA1700.", socket: "LGA1700", wattage: 125, type: "cpu" },
            { id: "cpu4", name: "Intel Core i9-14900K", price: 36000, img: "https://ecommerce.datablitz.com.ph/cdn/shop/files/xsfgnsfhms_1600x.jpg?v=1760516372", desc: "Extreme Performance. Socket LGA1700.", socket: "LGA1700", wattage: 253, type: "cpu" }
        ]
    },
    cooler: {
        label: "CPU Coolers",
        icon: "fan",
        items: [
            { id: "cool1", name: "Air Cooler Basic", price: 1500, img: "https://m.media-amazon.com/images/I/71yaJKTZ7IL._SL1500_.jpg", desc: "Good for Ryzen 5 / i5.", wattage: 5, type: "cooler" },
            { id: "cool2", name: "240mm AIO Liquid", price: 4500, img: "https://ecommerce.datablitz.com.ph/cdn/shop/files/viber_image_2025-08-05_16-03-57-864_1600x.jpg?v=1754382153", desc: "Great for Ryzen 7 / i7.", wattage: 10, type: "cooler" },
            { id: "cool3", name: "360mm AIO Liquid", price: 8000, img: "https://ecommerce.datablitz.com.ph/cdn/shop/files/1681508261-cooling_kraken-rgb_360_w_rgb-core_hero-1_rgb_1600x.jpg?v=1682737711", desc: "Required for i9 / High-end.", wattage: 15, type: "cooler" },
            { id: "cool4", name: "Premium Cpu Cooler", price: 5295, img: "https://computerorbit.com/cdn/shop/files/01_0f720c7c-d98e-485d-b2c7-0c80140b6e77_1600x1600.png?v=1689159620", desc: "Best for Ryzen 9 / i9.", wattage: 15, type: "cooler" }
        ]
    },
    mobo: {
        label: "Motherboards",
        icon: "circuit-board",
        items: [
            { id: "mb1", name: "B550 ATX (AMD)", price: 8000, img: "https://asset.msi.com/resize/image/global/product/product_1_20200604133037_5ed886fdc6a43.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", desc: "Socket AM4. Supports DDR4.", socket: "AM4", memoryType: "DDR4", type: "mobo" },
            { id: "mb2", name: "X670E Gaming (AMD)", price: 18000, img: "https://dlcdnwebimgs.asus.com/files/media/B51D103D-2941-412E-8479-AF994957093B/v1/img/kv/ROG-Strix-X670E-E-Gaming.png", desc: "Socket AM5. Supports DDR5.", socket: "AM5", memoryType: "DDR5", type: "mobo" },
            { id: "mb3", name: "Z790 WiFi (Intel)", price: 15000, img: "https://dlcdnwebimgs.asus.com/files/media/5a6617d7-c52e-4289-881b-7574a08b7e88/img/new_product_imgs/02_Cooling/Cooler_by_design/cooler.png", desc: "Socket LGA1700. Supports DDR5.", socket: "LGA1700", memoryType: "DDR5", type: "mobo" }
        ]
    },
    ram: {
        label: "Memory (RAM)",
        icon: "memory-stick",
        items: [
            { id: "ram1", name: "16GB DDR4 3200MHz", price: 2500, img: "https://easypc.com.ph/cdn/shop/files/Kingston_Fury_Beast_16gb_KF432C16BB2A_16_1x16_3200MT_s_Ddr4_Memory_RGB_Black-a_2048x.png?v=1705029840", desc: "Standard DDR4 memory.", memoryType: "DDR4", wattage: 5, type: "ram" },
            { id: "ram2", name: "32GB DDR5 6000MHz", price: 7500, img: "https://images.teamgroupinc.com/products/memory/u-dimm/ddr5/delta-rgb/black/03.jpg", desc: "Fast DDR5 memory.", memoryType: "DDR5", wattage: 10, type: "ram" },
            { id: "ram3", name: "64GB DDR5 RGB kit", price: 14000, img: "https://plecom.imgix.net/iit-416217-670871.png?fit=fillmax&fill=solid&fill-color=ffffff&auto=format&w=1000&h=1000", desc: "High capacity DDR5.", memoryType: "DDR5", wattage: 15, type: "ram" }
        ]
    },
    gpu: {
        label: "Graphics Cards (GPU)",
        icon: "monitor-play",
        items: [
            { id: "gpu1", name: "Nvidia RTX 4060", price: 18500, img: "https://static.gigabyte.com/StaticFile/Image/Global/c66bdb6c3de577de5a5dba9fae2f9f8f/Product/35389/Png", desc: "1080p Gaming.", wattage: 115, type: "gpu" },
            { id: "gpu2", name: "Nvidia RTX 4070", price: 35000, img: "https://asset.msi.com/resize/image/global/product/product_16727345767975bf4a98d038d3ea1d65ad87044542.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", desc: "1440p Gaming.", wattage: 200, type: "gpu" },
            { id: "gpu3", name: "Nvidia RTX 4090", price: 110000, img: "https://asset.msi.com/resize/image/global/product/product_1665552671c76199be0956de9b63d7e35b33b91acb.png62405b38c58fe0f07fcef2367d8a9ba1/1024.png", desc: "Ultimate 4K Gaming.", wattage: 450, type: "gpu" }
        ]
    },
    storage: {
        label: "Storage",
        icon: "hard-drive",
        items: [
            { id: "sto1", name: "1TB NVMe SSD", price: 3500, img: "https://static.gigabyte.com/StaticFile/Image/Global/13fdaa6e6dc982d0753d32c70c23d92c/Product/30161", desc: "Fast storage.", wattage: 5, type: "storage" },
            { id: "sto2", name: "4TB HDD", price: 5000, img: "https://hp.widen.net/content/ezilstnsna/png/ezilstnsna.png?w=800&h=600&dpi=72&color=ffffff00", desc: "Mass storage.", wattage: 10, type: "storage" }
        ]
    },
    case: {
        label: "PC Case",
        icon: "box",
        items: [
            { id: "case1", name: "Mid Tower Flow", price: 4000, img: "https://netcodex.ph/wp-content/uploads/2023/11/5-1698160734-h5-flow-rgb-hero-empty-white-converted.png", desc: "Standard ATX case with good airflow.", type: "case" },
            { id: "case2", name: "Dual Chamber Glass", price: 9000, img: "https://dfestore.com/wp-content/uploads/2023/10/14653-1.png", desc: "Showcase aesthetic with glass panels.", type: "case" }
        ]
    },
    psu: {
        label: "Power Supply",
        icon: "zap",
        items: [
            { id: "psu1", name: "650W Bronze", price: 3500, img: "https://images.evga.com/products/gallery/png/100-BP-0650-K1_XL_1.png", desc: "Good for mid-range builds.", wattageCapacity: 650, type: "psu" },
            { id: "psu2", name: "850W Gold Modular", price: 7000, img: "https://shop.villman.com/cdn/shop/files/2000.webp?v=1714805177https://shop.villman.com/cdn/shop/files/2000.webp?v=1714805177", desc: "High efficiency.", wattageCapacity: 850, type: "psu" },
            { id: "psu3", name: "1000W Platinum", price: 12000, img: "https://dlcdnwebimgs.asus.com/gain/5CF2A407-CD82-4831-A555-7AB5D61EF665", desc: "Overkill power.", wattageCapacity: 1000, type: "psu" }
        ]
    },
    monitor: {
        label: "Monitors",
        icon: "monitor",
        items: [
            { id: "mon1", name: "24\" 1080p 144Hz", price: 8500, img: "https://www.asus.com/media/global/gallery/vsltpsbjltwzkumd_setting_xxx_0_90_end_2000.png", desc: "1080p Gaming.", wattage: 30, type: "monitor" },
            { id: "mon2", name: "27\" 1440p IPS", price: 15000, img: "https://i0.wp.com/windnetpc.com/wp-content/uploads/2024/08/gigabyte_gs27qa_1.png?fit=1000%2C1000&ssl=1", desc: "1440p Visuals.", wattage: 45, type: "monitor" }
        ]
    },
    periph: {
        label: "Peripherals",
        icon: "keyboard",
        items: [
            { id: "peri1", name: "Mech Keyboard & Mouse", price: 3000, img: "https://png.pngtree.com/png-clipart/20250207/original/pngtree-gaming-mouse-and-keyboard-with-rgb-lighting-isolated-on-transparent-background-png-image_20375099.png", desc: "RGB Mechanical keyboard and gaming mouse.", type: "peripheral" },
            { id: "peri2", name: "Pro Wireless Mouse", price: 5000, img: "https://resource.logitech.com/content/dam/gaming/en/products/pro-wireless-gaming-mouse/pro-wireless-carbon-gallery-1.png", desc: "Lightweight esports mouse.", type: "peripheral" }
        ]
    },
    os: {
        label: "Operating System",
        icon: "disc",
        items: [
            { id: "os1", name: "Windows 11 Home", price: 7000, img: "https://licentiepromo.be/wp-content/uploads/2023/10/Windows-11-home-Licentiepromo.png.webp", desc: "Standard OS for gamers and home users.", type: "os" },
            { id: "os2", name: "Windows 11 Pro", price: 9000, img: "https://lh5.googleusercontent.com/proxy/Cd2Ax7sWLOch6pUUovHm2H5Rm7iYGAK8wa9m9Ehgw0R1zrcXPoeuzGUgv9DLKCezBF-Sufcnze01FEMM97CsXO30j-_Id0IrdL01Kzvq2KiWUVBcDrFsVOEzIopSQnL6_ov0Jao", desc: "Advanced features for power users.", type: "os" }
        ]
    }
};

// --- STATE ---
let buildItems = []; // Array of full part objects
let userBudget = 0;

// --- INITIALIZATION ---
function initApp() {
    renderCategories();
    loadFromLocalStorage();
    const budgetBtn = document.getElementById('budget-btn');
    if (budgetBtn) {
        budgetBtn.addEventListener('click', openBudgetModal);
    }
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeBudgetModal();
        }
    });
    lucide.createIcons();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// --- CORE LOGIC: Compatibility & Adding ---
function checkCompatibility(newItem) {
    // 1. Check CPU <-> Motherboard Socket
    if (newItem.type === 'cpu') {
        const mobo = buildItems.find(i => i.type === 'mobo');
        if (mobo && mobo.socket !== newItem.socket) {
            return { valid: false, msg: `Incompatible! CPU is ${newItem.socket} but Motherboard is ${mobo.socket}.` };
        }
    }
    if (newItem.type === 'mobo') {
        const cpu = buildItems.find(i => i.type === 'cpu');
        if (cpu && cpu.socket !== newItem.socket) {
            return { valid: false, msg: `Incompatible! Motherboard is ${newItem.socket} but CPU is ${cpu.socket}.` };
        }
    }

    // 2. Check RAM <-> Motherboard Memory Type
    if (newItem.type === 'ram') {
        const mobo = buildItems.find(i => i.type === 'mobo');
        if (mobo && mobo.memoryType !== newItem.memoryType) {
            return { valid: false, msg: `Incompatible! RAM is ${newItem.memoryType} but Motherboard only supports ${mobo.memoryType}.` };
        }
    }
    if (newItem.type === 'mobo') {
        const rams = buildItems.filter(i => i.type === 'ram');
        for (let ram of rams) {
            if (ram.memoryType !== newItem.memoryType) {
                 return { valid: false, msg: `Incompatible! Motherboard is ${newItem.memoryType} but you have ${ram.memoryType} RAM selected.` };
            }
        }
    }

    // 3. Check Duplicate Parts (Only 1 CPU, 1 Mobo, 1 PSU, 1 Case, 1 Cooler, 1 OS allowed)
    const singleParts = ['cpu', 'mobo', 'psu', 'gpu', 'case', 'cooler', 'os']; 
    if (singleParts.includes(newItem.type)) {
        const existing = buildItems.find(i => i.type === newItem.type);
        if (existing) {
            return { valid: false, msg: `You already have a ${newItem.type.toUpperCase()}. Remove it first.` };
        }
    }

    return { valid: true };
}

function addToBuild(categoryKey, itemIndex) {
    const newItem = partsDatabase[categoryKey].items[itemIndex];

    const check = checkCompatibility(newItem);
    if (!check.valid) {
        showToast(check.msg, true); 
        return;
    }

    buildItems.push(newItem);
    saveToLocalStorage();
    showToast(`Added: ${newItem.name}`);
    updateSummary();
}

function removeItem(index) {
    buildItems.splice(index, 1);
    saveToLocalStorage();
    updateSummary();
}

function clearBuild() {
    if(confirm("Are you sure you want to clear your entire build?")) {
        buildItems = [];
        userBudget = 0;
        saveToLocalStorage();
        updateSummary();
        showToast("Build cleared.");
    }
}

// --- VIEW LOGIC ---
function renderCategories() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';

    Object.keys(partsDatabase).forEach(key => {
        const category = partsDatabase[key];
        const card = document.createElement('div');
        card.className = 'category-card';
        card.onclick = () => showParts(key);
        card.innerHTML = `
            <i data-lucide="${category.icon}" width="40" height="40"></i>
            <span>${category.label}</span>
        `;
        grid.appendChild(card);
    });
    lucide.createIcons();
}

function showParts(categoryKey) {
    const categoryData = partsDatabase[categoryKey];
    const partsContainer = document.getElementById('parts-container');
    const categoryGrid = document.getElementById('category-grid');
    const backBtn = document.getElementById('back-to-categories');
    const title = document.getElementById('section-title');

    categoryGrid.classList.add('hidden');
    partsContainer.classList.remove('hidden');
    partsContainer.innerHTML = '';
    backBtn.style.display = 'flex';
    
    title.innerHTML = `<i data-lucide="${categoryData.icon}"></i> ${categoryData.label}`;
    lucide.createIcons();

    categoryData.items.forEach((item, index) => {
        const partEl = document.createElement('div');
        partEl.className = 'part-card';
        
        let compMsg = "";
        const check = checkCompatibility(item);
        if(!check.valid) {
            compMsg = `<span style="color:#ff3b30; font-size:0.8rem;">⚠️ ${check.msg}</span>`;
        }

        partEl.innerHTML = `
            <div class="part-image-container">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="part-details">
                <h3>${item.name}</h3>
                <div class="price">₱${item.price.toLocaleString()}</div>
                <div class="desc">${item.desc}</div>
                ${compMsg}
                <button class="add-btn" onclick="addToBuild('${categoryKey}', ${index})" ${!check.valid ? 'style="background:#ccc;cursor:not-allowed;"' : ''}>
                    Add to Build
                </button>
            </div>
        `;
        partsContainer.appendChild(partEl);
    });
}

function showCategories() {
    document.getElementById('category-grid').classList.remove('hidden');
    document.getElementById('parts-container').classList.add('hidden');
    document.getElementById('back-to-categories').style.display = 'none';
    const title = document.getElementById('section-title');
    title.innerHTML = `<i data-lucide="grid"></i> Categories`;
    lucide.createIcons();
}

// --- BUDGET & WATTAGE LOGIC ---
function openBudgetModal() {
    const modal = document.getElementById('budget-modal');
    const input = document.getElementById('modal-budget-input');
    if (!modal) return;
    
    // Pre-populate input with current budget if set
    if (input) {
        input.value = userBudget > 0 ? userBudget.toLocaleString() : '';
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    
    // Focus input
    setTimeout(() => {
        if (input) {
            input.focus();
            input.select();
        }
    }, 50);
}

function closeBudgetModal() {
    const modal = document.getElementById('budget-modal');
    if (!modal) return;
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function handleModalBackdropClick(event) {
    if (event.target.id === 'budget-modal') {
        closeBudgetModal();
    }
}

function parseBudgetValue(val) {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    
    let clean = val.toString().trim().toLowerCase();
    
    // Support shorthand like "50k" or "75.5k"
    if (clean.endsWith('k')) {
        let num = parseFloat(clean.slice(0, -1).replace(/[^0-9.]/g, ''));
        return isNaN(num) ? 0 : Math.round(num * 1000);
    }
    
    // Strip PHP symbols, commas, and whitespace
    clean = clean.replace(/[^0-9.]/g, '');
    let num = parseFloat(clean);
    return isNaN(num) ? 0 : Math.round(num);
}

function saveBudgetFromModal() {
    const input = document.getElementById('modal-budget-input');
    const val = parseBudgetValue(input ? input.value : '');
    
    if (val < 0) {
        showToast("Budget cannot be negative", true);
        return;
    }
    
    userBudget = val;
    saveToLocalStorage();
    closeBudgetModal();
    updateSummary();
    
    if (userBudget > 0) {
        showToast(`Budget set to ₱${userBudget.toLocaleString()}`);
    } else {
        showToast("Budget reset to ₱0.00");
    }
}

function clearBudgetFromModal() {
    userBudget = 0;
    saveToLocalStorage();
    closeBudgetModal();
    updateSummary();
    showToast("Budget reset to ₱0.00");
}

function applyBudgetPreset(amount) {
    const input = document.getElementById('modal-budget-input');
    if (input) {
        input.value = amount.toLocaleString();
        input.focus();
    }
}

// Backward-compatible alias
function setBudget() {
    openBudgetModal();
}

function updateSummary() {
    const buildList = document.getElementById('build-items');
    const totalEl = document.getElementById('build-total');
    const budgetEl = document.getElementById('budget-total');
    const remainingEl = document.getElementById('budget-remaining');
    const progressBar = document.getElementById('budget-progress');
    
    // 1. Render List
    buildList.innerHTML = '';
    if (buildItems.length === 0) {
        buildList.innerHTML = '<p style="text-align: center; color: #999; margin-top: 20px;">Your build is empty.<br>Select a category to start!</p>';
    } else {
        buildItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'build-item';
            div.innerHTML = `
                <div class="build-item-info">
                    <span class="build-item-name">${item.name}</span>
                    <span class="build-item-price">₱${item.price.toLocaleString()}</span>
                </div>
                <button class="remove-btn" onclick="removeItem(${index})"><i data-lucide="x" width="16"></i></button>
            `;
            buildList.appendChild(div);
        });
        lucide.createIcons();
    }

    // 2. Calculate Cost
    let totalCost = buildItems.reduce((acc, curr) => acc + curr.price, 0);
    let remaining = userBudget - totalCost;

    // 3. Calculate Wattage
    let totalWatts = 0;
    let psuCapacity = 0;
    
    buildItems.forEach(item => {
        if (item.wattage) totalWatts += item.wattage;
        if (item.type === 'psu') psuCapacity = item.wattageCapacity;
    });

    // Update Wattage UI
    const wattageEl = document.getElementById('wattage-display');
    if (wattageEl) {
        let wattColor = "var(--text-main)";
        let wattWarning = "";
        if (psuCapacity > 0) {
            if (totalWatts > psuCapacity) {
                wattColor = "var(--danger)"; // Red - Danger
                wattWarning = " (OVERLOAD!)";
            } else if (totalWatts > psuCapacity * 0.9) {
                wattColor = "var(--warning)"; // Orange - Warning
                wattWarning = " (High Load)";
            } else {
                wattColor = "var(--success)"; // Green - Good
                wattWarning = " (OK)";
            }
        }
        wattageEl.innerHTML = `
            <span>Est. Wattage:</span>
            <strong style="color: ${wattColor}">${totalWatts}W ${psuCapacity > 0 ? '/ ' + psuCapacity + 'W' : ''} ${wattWarning}</strong>
        `;
    }

    // 4. Update Text
    budgetEl.textContent = "₱" + userBudget.toLocaleString(undefined, {minimumFractionDigits: 2});
    totalEl.textContent = "₱" + totalCost.toLocaleString(undefined, {minimumFractionDigits: 2});
    remainingEl.textContent = "₱" + remaining.toLocaleString(undefined, {minimumFractionDigits: 2});

    // 5. Progress Bar
    if (userBudget > 0) {
        let percentage = (totalCost / userBudget) * 100;
        if (percentage > 100) percentage = 100;
        progressBar.style.width = percentage + "%";
        if (remaining < 0) {
            remainingEl.style.color = "var(--danger)";
            progressBar.style.backgroundColor = "var(--danger)";
        } else {
            remainingEl.style.color = "var(--success)";
            progressBar.style.backgroundColor = "var(--success)";
        }
    } else {
        progressBar.style.width = "0%";
        remainingEl.style.color = "var(--text-main)";
    }

    // 6. Update Header Button Label
    const budgetBtnText = document.getElementById('budget-btn-text');
    if (budgetBtnText) {
        budgetBtnText.textContent = userBudget > 0 
            ? `Budget: ₱${userBudget.toLocaleString()}` 
            : "Set Budget";
    }
}

// --- STORAGE ---
function saveToLocalStorage() {
    const data = {
        budget: userBudget,
        items: buildItems
    };
    localStorage.setItem('pcBuilderData', JSON.stringify(data));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('pcBuilderData');
    if (saved) {
        const data = JSON.parse(saved);
        userBudget = data.budget || 0;
        buildItems = data.items || [];
        updateSummary();
        if(buildItems.length > 0) showToast("Previous build loaded");
    }
}

// --- HELPER: Toast Notification ---
function showToast(message, isError = false) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.className = "show";
    if(isError) toast.style.backgroundColor = "var(--danger)";
    else toast.style.backgroundColor = "#333";
    
    setTimeout(function(){ 
        toast.className = toast.className.replace("show", ""); 
        setTimeout(() => { toast.style.backgroundColor = "#333"; }, 300);
    }, 3000);
}