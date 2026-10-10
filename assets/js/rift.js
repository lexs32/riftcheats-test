/**
 * RIFTCHEATS Complete Storefront & Client Engine v4.0
 * Includes:
 * 1. 11 Authentic Products Catalog (Scraped from riftcheats.com & D:\ef\riftcheats)
 * 2. Full Categorized Features (AIMBOT, PLAYER ESP, WORLD ESP, MISC)
 * 3. Exact Product Detail Modal (Image 2 Parity)
 * 4. Game Filter Pills & Dual-Name Display (Game Name + Cheat Title)
 * 5. Full 24/7 Rift AI Support Chatbot Engine (Powered by D:\ef\riftcheats\api\chat.js Knowledge Base)
 * 6. Instant Checkout, Cart Drawer, and Client Area Sync
 */

// ==========================================================================
// 1. PRODUCT CATALOG DATA (11 Authentic Games from RiftCheats)
// ==========================================================================
const RIFT_PRODUCTS = [
  {
    id: "rust",
    sellAuthId: 740833,
    title: "Krush Rust",
    game: "Rust",
    category: "Rust",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99, "lifetime": 59.99 },
    imgPrimary: "assets/rift_rust1-BON31Td0.png",
    imgSecondary: "assets/real/Rust.png",
    productsCount: 18,
    description: "Krush Rust is engineered for server dominance with instant silent aim, full player ESP, construction ESP, and movement exploits.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "External Streamproof Solution"] },
      { category: "AIM", icon: "crosshair", items: ["Enable Aimbot", "Distance Limit", "Smoothness", "Silent Aim", "Visible Check", "Draw FOV Circle", "Draw Line To Target", "Select Bone", "Hitbox Override", "No Recoil", "No Spread", "Fast Bullet", "Desync", "Thick Bullet", "Always Shoot", "Insta-Eoka", "Insta-Bow", "Insta-Compound"] },
      { category: "PLAYER ESP", icon: "eye", items: ["ESP Enable", "Distance Limit", "Preview Mode", "Visible Check", "2D/3D Boxes", "Skeleton", "Teammates", "Sleepers", "Wounded State", "Held Items", "Player Names", "Distance Display", "Team ID", "Player Chams", "Hand Chams", "Weapon Chams"] },
      { category: "INTERFACE", icon: "sliders", items: ["Target Info Panel", "Hotbar View", "Clothes Display", "Reload Bar", "Crosshair Overlay", "Out-of-FOV Arrows", "2D Radar", "Bind Island"] },
      { category: "WORLD ESP", icon: "globe", items: ["Constructions", "Sleeping Bags", "Cupboards", "Workbenches", "Construction Distance", "Gun Traps", "Auto-Turrets", "SAM Sites", "Flame Turrets", "Land Mines", "Traps Distance", "Dropped Items", "Corpses", "Backpacks", "Loot Distance", "Minicopters", "Scrap Helis", "Bicycles", "Motor Bikes", "Horses", "Boats", "Transport Distance", "Raid ESP", "Raid Distance", "Raid Timer"] },
      { category: "FARMING & AI ESP", icon: "microchip", items: ["Sulfur Ore", "Metal Ore", "Stone Ore", "Hemp Plants", "Loot Crates", "Farm Distance", "Animals ESP", "Scientists ESP", "Bradley APC ESP", "Chinook ESP", "Patrol Heli ESP", "AI Distance"] },
      { category: "MISC & EXPLOITS", icon: "bolt", items: ["Infinite Jump", "Spider Climb", "Always Sprint", "Fly Hack", "Debug Camera", "Fast Loot", "Suicide Hotkey", "No Weapon Animation", "No Weapon Lower", "FOV Changer", "Hand Position Adjustment", "Battle Mode", "Third Person Mode", "Zoom Modifier", "Bright Ambient", "Time Changer", "Stars Color", "Sky Color", "Clouds Color", "Remove Layers"] },
      { category: "SETTINGS & CONFIG", icon: "gear", items: ["Safe Mode Toggle", "HUD Preview", "ESP Custom Fonts", "Visible Check Limit", "Create New Config", "Save Config", "Load Config"] }
    ],
    variants: [
      { id: "rust_1day", sellAuthVariantId: 1210815, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "rust_7days", sellAuthVariantId: 1210816, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "rust_30days", sellAuthVariantId: 1210817, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "arc",
    sellAuthId: 651348,
    title: "Krush Arc Raiders",
    game: "Arc Raiders",
    category: "Arc Raiders",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99 },
    imgPrimary: "assets/rift_arc-31eUfYH7.png",
    imgSecondary: "assets/real/ancient_arc_raiders.webp",
    productsCount: 14,
    description: "Kernel predictive aimbot, Loot Container ESP, 2D Box and custom FOV sliders built specifically for extraction raids.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "External Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Predictive Lead Targeting", "Smooth Aim", "FOV Slider", "Bone Selection (Head, Chest)", "Visible Check", "Target Lock Indicator"] },
      { category: "PLAYER ESP", icon: "eye", items: ["2D Bounding Boxes", "Player Distance", "Health & Armor Status", "Skeleton Wireframe", "Held Weapon Info", "Snaplines"] },
      { category: "LOOT & EXTRACTION", icon: "box-open", items: ["Loot Container ESP", "High-Tier Scrap Radar", "Extraction Zone Markers", "Drone Proximity Alert", "Supply Crate Distance"] },
      { category: "MISC", icon: "bolt", items: ["OBS Streamproof Overlay", "Custom Crosshair", "Config Manager (Save/Load)"] }
    ],
    variants: [
      { id: "arc_1day", sellAuthVariantId: 1026616, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "arc_7days", sellAuthVariantId: 1026632, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "arc_30days", sellAuthVariantId: 1026633, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "ancient_arc",
    sellAuthId: 863447,
    title: "Ancient Arc Raiders",
    game: "Arc Raiders",
    category: "Arc Raiders",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$9.99",
    prices: { "1day": 9.99, "7days": 34.99, "30days": 64.99 },
    imgPrimary: "assets/ANCIENT_ARC.png",
    imgSecondary: "assets/real/ANCIENT_ARC.png",
    productsCount: 11,
    description: "Next-gen predictive lead targeting, Bone Skeleton ESP, Extraction Point Radar, Loot & Container ESP, Distance Meter, and Kernel-mode streamproof rendering.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "Kernel Mode Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Dynamic Velocity Prediction", "Silent Bullet Redirect", "FOV Radius Circle", "Hitbox Selection", "Smoothness Damping", "Visible Check"] },
      { category: "VISUALS & ESP", icon: "eye", items: ["Bone Skeleton ESP", "2D/3D Boxes", "Distance Meter", "Health Bar", "Extraction Point Markers", "Machine Weakpoint Chams"] },
      { category: "LOOT RADAR", icon: "cubes", items: ["Containers & Vaults", "Crafting Material ESP", "Rare Weapon Crates", "Drop Pods", "Distance Filter"] },
      { category: "SETTINGS", icon: "gear", items: ["Config Manager (Save/Load)", "RGB Custom Palette", "Keybind Customizer"] }
    ],
    variants: [
      { id: "anc_arc_1day", sellAuthVariantId: 1564947, name: "1 Day Key", price: "9.99", duration: "1 Day" },
      { id: "anc_arc_7days", sellAuthVariantId: 1564948, name: "7 Day Key", price: "34.99", duration: "7 Days" },
      { id: "anc_arc_30days", sellAuthVariantId: 1564949, name: "30 Day Key", price: "64.99", duration: "30 Days" }
    ]
  },
  {
    id: "arc_internal",
    sellAuthId: 890888,
    title: "Krush Arc Raiders Internal",
    game: "Arc Raiders",
    category: "Arc Raiders",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$9.99",
    prices: { "1day": 9.99, "7days": 34.99, "30days": 69.99 },
    imgPrimary: "assets/krush_arc_internal.png",
    imgSecondary: "assets/real/krush_arc_internal.png",
    productsCount: 9,
    description: "Krush Arc Raiders Internal delivers kernel-level predictive aimbot, full skeletal player bone ESP, high-tier loot container radar, extraction markers, and complete streamproof OBS security.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "Internal Streamproof Solution", "Ring-0 Kernel Driver"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Predictive Lead Targeting", "Silent Aim (Bullet Redirect)", "Smooth Aim Slider", "Dynamic FOV Circle", "Bone Hitbox Selection", "Visible Check Filter"] },
      { category: "VISUALS & ESP", icon: "eye", items: ["Full Skeleton Bones", "2D/3D Corner Boxes", "Loot & Extraction Point Radar", "Body Bag & Container ESP", "Health Bar & Distance Meter"] },
      { category: "MISC", icon: "bolt", items: ["Streamproof Kernel Rendering", "Custom Crosshair Overlay", "Config Profiles (Save/Load)"] }
    ],
    variants: [
      { id: "arc_int_1day", sellAuthVariantId: 1746237, name: "1 Day Key", price: "9.99", duration: "1 Day" },
      { id: "arc_int_7days", sellAuthVariantId: 1746238, name: "7 Day Key", price: "34.99", duration: "7 Days" },
      { id: "arc_int_30days", sellAuthVariantId: 1746239, name: "30 Day Key", price: "69.99", duration: "30 Days" }
    ]
  },
  {
    id: "apex",
    sellAuthId: 651363,
    title: "Krush Apex Legends",
    game: "Apex Legends",
    category: "Apex Legends",
    launcher: "Steam / EA App",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99 },
    imgPrimary: "assets/RIFT_KRUSH-D0l9rsBn.png",
    imgSecondary: "assets/real/Apex.png",
    productsCount: 16,
    description: "Krush Apex Legends delivers precision weapon automation, glow chams, item radar, and customizable smooth aim vectors.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "External Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Vector Smooth Aim", "FOV Slider", "Smoothness Control", "Target Selection", "Hitbox Override", "Recoil Reduction (RCS)"] },
      { category: "VISUALS & ESP", icon: "eye", items: ["Full Player Glow & Chams", "2D Box ESP", "Health & Shield Bar", "Skeleton Overlay", "Distance Display", "Loot Item Radar"] },
      { category: "MISC", icon: "bolt", items: ["Spectator Warning", "Triggerbot", "Custom Colors & Configs"] }
    ],
    variants: [
      { id: "apex_1day", sellAuthVariantId: 1026646, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "apex_7days", sellAuthVariantId: 1026647, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "apex_30days", sellAuthVariantId: 1026648, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "r6",
    sellAuthId: 651369,
    title: "Crusader R6",
    game: "Rainbow Six",
    category: "Rainbow Six",
    launcher: "Ubisoft Connect / Steam",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99 },
    imgPrimary: "assets/R6_CRUS-DKDRPM83.png",
    imgSecondary: "assets/real/R6.png",
    productsCount: 12,
    description: "Operator ESP, gadget wallhacks, recoil mitigation, weapon modifier overlays, and streamproof rendering.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "External Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Smooth Memory Aim", "Recoil Control System (RCS)", "Spread Compensation", "Bone Selection (Head, Neck, Chest)", "FOV Circle Radius", "Visible Check"] },
      { category: "OPERATOR ESP", icon: "eye", items: ["Operator Name & Icon", "Skeleton & Head Dot", "Health Bar", "Distance Indicator", "2D/3D Bounding Boxes"] },
      { category: "GADGET ESP", icon: "cubes", items: ["Traps (Kapkan, Frost, Ela)", "C4 & Smoke Canisters", "Claymores & Drones", "Cameras (Default & Valkyrie)"] },
      { category: "MISC", icon: "bolt", items: ["Streamproof OBS", "Custom Crosshair", "Config Profiles"] }
    ],
    variants: [
      { id: "r6_1day", sellAuthVariantId: 1026675, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "r6_7days", sellAuthVariantId: 1026676, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "r6_30days", sellAuthVariantId: 1026677, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "fortnite",
    sellAuthId: 740821,
    title: "Disconnect Fortnite",
    game: "Fortnite",
    category: "Fortnite",
    launcher: "Epic Games Launcher",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99, "lifetime": 129.99 },
    imgPrimary: "assets/fn_disc-DOAsaoXt.png",
    imgSecondary: "assets/real/Fortnite.png",
    productsCount: 15,
    description: "Soft Memory Aim, Tournament Safe FOV presets, Distance Box & Skeleton ESP, Chest & Ammo Box ESP, Vehicle ESP, and streamproof overlay.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "Dual EAC/BE Bypass", "Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Soft Memory Aim", "Tournament Safe FOV", "Smoothness Control", "Bone Selection", "Visible Check"] },
      { category: "VISUALS & ESP", icon: "eye", items: ["Player 2D/3D Boxes", "Skeleton Wireframe", "Player Distance", "Shield/Health Indicators", "Snaplines"] },
      { category: "WORLD ESP", icon: "box-open", items: ["Chest & Ammo Boxes", "Loot Tiers (Mythic, Legendary)", "Vehicles & Supply Drops"] },
      { category: "MISC", icon: "bolt", items: ["Streamproof OBS", "Custom FOV Slider", "Config Manager"] }
    ],
    variants: [
      { id: "fn_1day", sellAuthVariantId: 1210784, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "fn_7days", sellAuthVariantId: 1210785, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "fn_30days", sellAuthVariantId: 1210786, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "delta",
    sellAuthId: 740827,
    title: "Ancient Delta Force",
    game: "Delta Force",
    category: "Delta Force",
    launcher: "Steam / Level Infinite",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99 },
    imgPrimary: "assets/DELTA_ANC-DM8OteAt.png",
    imgSecondary: "assets/real/DeltaForce.png",
    productsCount: 8,
    description: "2D Radar, Bone Skeleton ESP, Stream Proof ESP, Memory Aim, and Custom Colors & Config System.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "ACE Anticheat Safe"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Memory Aim", "FOV Slider", "Smooth Tracking", "Bone Selection", "Recoil Reduction"] },
      { category: "VISUALS", icon: "eye", items: ["2D Radar Map", "Bone Skeleton ESP", "Bounding Boxes", "Player Distance", "Vehicle Markers"] },
      { category: "MISC", icon: "bolt", items: ["Streamproof Overlay", "Custom Palette", "Config Save/Load"] }
    ],
    variants: [
      { id: "delta_1day", sellAuthVariantId: 1210803, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "delta_7days", sellAuthVariantId: 1210804, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "delta_30days", sellAuthVariantId: 1210805, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "wardogs",
    sellAuthId: 877277,
    title: "Krush Wardogs Internal",
    game: "Wardogs",
    category: "Wardogs",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99 },
    imgPrimary: "assets/wardogs.png",
    imgSecondary: "assets/real/wardogs.png",
    productsCount: 10,
    description: "Krush Wardogs Internal provides weapon automation with smooth & silent aim, skeleton ESP, death loot body bag ESP, and custom tactical FOV controls.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "Internal Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Smooth Aim (Per-Axis)", "Silent Aim (Projectile Redirect)", "FOV Circle", "Bone Selection (Head, Neck, Spine)", "Target Marker", "Visible Check"] },
      { category: "VISUALS", icon: "eye", items: ["Player ESP (Skeletons, 2D/3D Boxes)", "Head Circle", "Name, Distance, Clan Tag, Weapon", "Health Bar", "Show Body Bags / Death Loot"] },
      { category: "MISC", icon: "bolt", items: ["FOV Changer", "Zoom Keybind", "Custom Crosshairs", "Menu Keybind"] }
    ],
    variants: [
      { id: "wd_1day", sellAuthVariantId: 1658490, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "wd_7days", sellAuthVariantId: 1658491, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "wd_30days", sellAuthVariantId: 1658492, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "disconnect_wardogs",
    sellAuthId: 877287,
    title: "Disconnect Wardogs",
    game: "Wardogs",
    category: "Wardogs",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$7.49",
    prices: { "1day": 7.49, "7days": 29.99, "30days": 59.99, "lifetime": 129.99 },
    imgPrimary: "assets/disconnect_wardogs.png",
    imgSecondary: "assets/real/disconnect_wardogs.png",
    productsCount: 7,
    description: "Disconnect Wardogs delivers tournament-safe soft aimbot, full skeletal player ESP, death loot ESP, and clean streamproof security.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "External Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Soft Memory Aim", "FOV Circle Radius", "Bone Selection", "Smoothness Slider", "Tournament Safe Presets"] },
      { category: "VISUALS & ESP", icon: "eye", items: ["Player 2D/3D Boxes", "Skeleton Overlay", "Health Bar", "Player Distance", "Loot Bags ESP"] },
      { category: "MISC", icon: "bolt", items: ["OBS Streamproof", "Custom Crosshair", "Config Manager"] }
    ],
    variants: [
      { id: "disc_wd_1day", sellAuthVariantId: 1658512, name: "1 Day Key", price: "7.49", duration: "1 Day" },
      { id: "disc_wd_7days", sellAuthVariantId: 1658514, name: "7 Day Key", price: "29.99", duration: "7 Days" },
      { id: "disc_wd_30days", sellAuthVariantId: 1658515, name: "30 Day Key", price: "59.99", duration: "30 Days" }
    ]
  },
  {
    id: "ancient_wardogs",
    sellAuthId: 877289,
    title: "Ancient Wardogs",
    game: "Wardogs",
    category: "Wardogs",
    launcher: "Steam",
    status: "Undetected",
    priceFrom: "$9.99",
    prices: { "1day": 9.99, "7days": 34.99, "30days": 64.99 },
    imgPrimary: "assets/ancient_wardogs.png",
    imgSecondary: "assets/real/ancient_wardogs.png",
    productsCount: 6,
    description: "Ancient Wardogs offers kernel-mode predictive lead targeting, skeleton bone tracking, tactical loot radar, and complete streamproof evasion.",
    features: [
      { category: "Information", icon: "shield-halved", items: ["Windows 10 & 11 Supported", "Intel & AMD Processors", "Kernel Mode Streamproof Solution"] },
      { category: "AIMBOT", icon: "crosshair", items: ["Predictive Lead Targeting", "Silent Aim", "Dynamic FOV", "Bone Selection", "Smoothness Control"] },
      { category: "VISUALS & ESP", icon: "eye", items: ["Full Skeleton Bones", "2D/3D Corner Boxes", "Health & Shield Status", "Distance Display", "Death Loot Bags ESP"] },
      { category: "MISC", icon: "bolt", items: ["Streamproof Kernel Rendering", "Crosshair Overlay", "Config Profiles"] }
    ],
    variants: [
      { id: "anc_wd_1day", sellAuthVariantId: 1658520, name: "1 Day Key", price: "9.99", duration: "1 Day" },
      { id: "anc_wd_7days", sellAuthVariantId: 1658521, name: "7 Day Key", price: "34.99", duration: "7 Days" },
      { id: "anc_wd_30days", sellAuthVariantId: 1658522, name: "30 Day Key", price: "64.99", duration: "30 Days" }
    ]
  }
];

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
// Global Cart State with LocalStorage Caching
let cart = JSON.parse(localStorage.getItem('rift_cart') || '[]');

const SELLAUTH_CONFIG = {
  shopId: 223549,
  shopUrl: 'https://riftcheats.mysellauth.com',
  theme: 'dark'
};

function loadSellAuthSDK(callback) {
  if (window.sellAuth && typeof window.sellAuth.open === 'function') {
    if (callback) callback();
    return;
  }
  const existing = document.querySelector('script[src*="sellauth"]');
  if (!existing) {
    const script = document.createElement('script');
    script.src = 'assets/sellauth-v3.min.js';
    script.onload = () => { if (callback) callback(); };
    script.onerror = () => {
      const cdn = document.createElement('script');
      cdn.src = 'https://static.sellauth.com/embed/v3.min.js';
      cdn.onload = () => { if (callback) callback(); };
      document.head.appendChild(cdn);
    };
    document.head.appendChild(script);
  } else {
    let attempts = 0;
    const poll = setInterval(() => {
      attempts++;
      if (window.sellAuth && typeof window.sellAuth.open === 'function') {
        clearInterval(poll);
        if (callback) callback();
      } else if (attempts >= 40) {
        clearInterval(poll);
        if (callback) callback();
      }
    }, 50);
  }
}

function checkoutWithSellAuth(items, triggerBtn) {
  if (!items || items.length === 0) {
    showToast("No items selected for checkout.");
    return;
  }

  const cartPayload = items.map(item => {
    let pId = item.sellAuthId || item.productId;
    if (!pId || isNaN(Number(pId))) {
      const match = RIFT_PRODUCTS.find(p => p.id === item.id || p.id === item.prodId || (p.title && item.title && p.title.toLowerCase().includes(item.title.toLowerCase())));
      if (match && match.sellAuthId) {
        pId = match.sellAuthId;
      }
    }
    let vId = item.sellAuthVariantId || item.variantId || item.variant_id;
    return {
      productId: Number(pId) || 740833,
      variantId: (vId && !isNaN(Number(vId))) ? Number(vId) : undefined,
      quantity: Math.max(1, Number(item.quantity || item.qty) || 1)
    };
  }).filter(i => !isNaN(i.productId));

  let originalBtnHtml = "";
  if (triggerBtn) {
    triggerBtn.disabled = true;
    originalBtnHtml = triggerBtn.innerHTML;
    triggerBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-2"></i> Opening Checkout...';
  }

  const restoreButton = () => {
    if (triggerBtn) {
      triggerBtn.disabled = false;
      triggerBtn.innerHTML = originalBtnHtml;
    }
  };

  loadSellAuthSDK(() => {
    if (window.sellAuth && typeof window.sellAuth.open === 'function') {
      try {
        window.sellAuth.open({
          shopId: Number(SELLAUTH_CONFIG.shopId),
          shopUrl: SELLAUTH_CONFIG.shopUrl,
          cart: cartPayload,
          modal: true,
          theme: SELLAUTH_CONFIG.theme,
          onReady: () => {
            restoreButton();
            closeCartDrawer();
          },
          onClose: () => {
            restoreButton();
          },
          onError: (err) => {
            console.warn('[SellAuth] Modal notice:', err);
            restoreButton();
            const firstId = cartPayload[0]?.productId;
            window.open(SELLAUTH_CONFIG.shopUrl + (firstId ? `/product/${firstId}` : ''), '_blank');
          }
        });
        setTimeout(restoreButton, 2000);
      } catch (e) {
        console.error('[SellAuth] Exception:', e);
        restoreButton();
        window.open(SELLAUTH_CONFIG.shopUrl, '_blank');
      }
    } else {
      restoreButton();
      window.open(SELLAUTH_CONFIG.shopUrl, '_blank');
    }
  });
}
let appliedCoupon = null;
let currentActiveProduct = null;
let selectedVariantIndex = 0;
let modalQuantity = 1;
let activeGameFilter = "all";

// ==========================================================================
// 3. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  renderProductsGrid();
  renderStoreCatalog();
  updateCartUI();
  initOnlineCounter();
  initSearch();
  initChatbot();
  initRiftBotTelemetry();
});

// ==========================================================================
// 4. RENDER 3 BEST SELLER FLAGSHIP CARDS (Exact Match to Reference Design)
// ==========================================================================
const BEST_SELLER_PRODUCTS = [
  {
    id: "rust",
    sellAuthId: 740833,
    title: "Krush - Rust",
    game: "Rust",
    priceRange: "$7.49 - $59.99",
    originalPrice: null,
    status: "Undetected",
    image: "assets/real/Rust.png"
  },
  {
    id: "ancient_arc",
    sellAuthId: 863447,
    title: "Ancient - ARC Raiders",
    game: "Arc Raiders",
    priceRange: "$9.99 - $64.99",
    originalPrice: "$14.99",
    status: "Undetected",
    image: "assets/real/ANCIENT_ARC.png"
  },
  {
    id: "arc",
    sellAuthId: 651348,
    title: "Krush - ARC Raiders",
    game: "Arc Raiders",
    priceRange: "$7.49 - $59.99",
    originalPrice: null,
    status: "Undetected",
    image: "assets/real/rift_arc-31eUfYH7.png"
  }
];

function renderProductsGrid(filter = "all") {
  const container = document.getElementById("productsGrid");
  if (!container) return;

  container.innerHTML = BEST_SELLER_PRODUCTS.map(prod => `
    <div class="best-seller-card group framer-reveal cursor-pointer" onclick="openProductDetail('${prod.id}')">
      
      <!-- Top Visual Preview Box (3D Floating Box with Atmospheric Purple Dusk) -->
      <div class="best-seller-preview">
        <!-- Top Status & Best Seller Badges -->
        <div class="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30 backdrop-blur-md shadow-sm">
            <span class="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span> ${prod.status || 'Undetected'}
          </span>
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-pink-500/25 to-purple-500/25 text-pink-300 border border-pink-500/40 backdrop-blur-md shadow-[0_0_12px_rgba(255,42,133,0.35)]">
            <i class="fa-solid fa-crown text-amber-400 text-[10px]"></i> Best Seller
          </span>
        </div>

        <!-- 3D Standing Box Artwork -->
        <img src="${prod.image}" alt="${prod.title}" loading="lazy">
      </div>

      <!-- Card Data Box -->
      <div class="pt-4 pb-1 px-1 flex flex-col flex-1 justify-between">
        <div>
          <!-- Price & Stock Row -->
          <div class="flex items-center justify-between mb-2">
            <div class="flex items-baseline gap-2">
              <span class="text-white font-bold text-sm tracking-tight font-mono">${prod.priceRange}</span>
              ${prod.originalPrice ? `<span class="text-white/40 line-through text-xs font-mono">${prod.originalPrice}</span>` : ''}
            </div>
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
              <span class="text-xs">∞</span> In Stock
            </span>
          </div>

          <!-- Product Title -->
          <h3 class="text-base sm:text-lg font-bold text-white tracking-tight mb-4 group-hover:text-pink-300 transition-colors">
            ${prod.title}
          </h3>
        </div>

        <!-- Full-Width Buy Now Button with Animated Basket -->
        <div class="product-card__btn" onclick="openProductDetail('${prod.id}'); event.stopPropagation();">
          <div class="product-card__btn-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="18" height="18" style="fill:currentColor">
              <g transform="matrix(1,0,0,1,250,250)">
                <path d="M173.173,-83.354h-22.143h-12.68L70.104,-180.849c-4.957,-7.081 -14.715,-8.803 -21.796,-3.846c-7.081,4.957 -8.803,14.714 -3.847,21.795l55.682,79.546h-200.304l-55.682,-79.546c-4.956,-7.081 -6.678,-16.838 -1.722,-21.795c7.08,-4.957 16.839,-3.235 21.796,3.846l68.246,97.495h12.682h20.833c8.644,0 15.65,7.007 15.65,15.65c0,8.643 -7.006,15.649 -15.65,15.649h-7.873l32.648,172.115c5.126,27.02 28.807,46.632 56.309,46.634h150.078c27.503,0 51.186,-19.612 56.313,-46.634l32.649,-172.115h9.182c8.644,0 15.65,-7.006 15.65,-15.649c0,-8.643 -7.006,-15.65 -15.65,-15.65z M100.59,114.236c-2.327,12.267 -13.079,21.168 -25.563,21.168h-150.078c-12.483,0 -23.233,-8.902 -25.56,-21.177l-31.542,-166.291h264.285l-31.542,166.3z"/>
              </g>
            </svg>
          </div>
          <span>Buy now</span>
        </div>
      </div>

    </div>
  `).join("");

  // Re-bind Framer Scroll Reveal
  const newCards = container.querySelectorAll(".framer-reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: "100px" });

    newCards.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 4) * 60}ms`;
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("revealed");
      }
    });
  } else {
    newCards.forEach(el => el.classList.add("revealed"));
  }
}

// ==========================================================================
// 4B. RENDER FULL STORE CATALOG (store.html - All 11 Cheats)
// ==========================================================================
function renderStoreCatalog(filter = "all", searchQuery = "") {
  const container = document.getElementById("storeGrid");
  if (!container) return;

  activeGameFilter = filter;
  let list = [...RIFT_PRODUCTS];

  if (filter !== "all") {
    const f = filter.toLowerCase();
    list = list.filter(p => {
      const g = (p.game || "").toLowerCase();
      const c = (p.category || "").toLowerCase();
      const id = (p.id || "").toLowerCase();
      return g.includes(f) || c.includes(f) || id.includes(f);
    });
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase().trim();
    list = list.filter(p => 
      (p.title && p.title.toLowerCase().includes(q)) || 
      (p.game && p.game.toLowerCase().includes(q)) ||
      (p.description && p.description.toLowerCase().includes(q))
    );
  }

  // Update total count indicator if present
  const countBadge = document.getElementById("storeTotalCountBadge");
  if (countBadge) {
    countBadge.textContent = `${list.length} Cheats`;
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-20 text-center text-slate-400">
        <i class="fa-solid fa-gamepad text-4xl mb-3 text-slate-600 block"></i>
        <p class="text-lg font-bold text-white">No Cheats Found</p>
        <p class="text-xs text-slate-400 mt-1 max-w-sm mx-auto">No products matched "${searchQuery || filter}". Try selecting another category.</p>
        <button onclick="filterStore('all')" class="mt-4 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-bold text-white border border-white/10 transition-colors">
          Reset Filter
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(prod => {
    const pricesArr = Object.values(prod.prices || {});
    const minPrice = pricesArr.length ? Math.min(...pricesArr) : 7.49;
    const maxPrice = pricesArr.length ? Math.max(...pricesArr) : 59.99;
    const priceRange = pricesArr.length > 1 ? `$${minPrice.toFixed(2)} - $${maxPrice.toFixed(2)}` : prod.priceFrom;
    const imgSrc = prod.imgSecondary || prod.imgPrimary;

    return `
      <div class="best-seller-card group framer-reveal cursor-pointer" onclick="openProductDetail('${prod.id}')">
        
        <!-- Top Visual Preview Box -->
        <div class="best-seller-preview">
          <!-- Top Status & Best Seller Badges -->
          <div class="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#10b981]/20 text-[#34d399] border border-[#10b981]/30 backdrop-blur-md shadow-sm">
              <span class="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse"></span> ${prod.status || 'Undetected'}
            </span>
            ${(prod.id === 'rust' || prod.id === 'ancient_arc' || prod.id === 'arc') ? `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-gradient-to-r from-pink-500/25 to-purple-500/25 text-pink-300 border border-pink-500/40 backdrop-blur-md shadow-[0_0_12px_rgba(255,42,133,0.35)]">
              <i class="fa-solid fa-crown text-amber-400 text-[10px]"></i> Best Seller
            </span>` : ''}
          </div>

          <!-- Standing Box Artwork -->
          <img src="${imgSrc}" alt="${prod.title}" loading="lazy">
        </div>

        <!-- Card Data Box -->
        <div class="pt-4 pb-1 px-1 flex flex-col flex-1 justify-between">
          <div>
            <!-- Price & Stock Row -->
            <div class="flex items-center justify-between mb-2">
              <div class="flex items-baseline gap-2">
                <span class="text-white font-bold text-sm tracking-tight font-mono">${priceRange}</span>
              </div>
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
                <span class="text-xs">∞</span> In Stock
              </span>
            </div>

            <!-- Product Title -->
            <h3 class="text-base sm:text-lg font-bold text-white tracking-tight mb-4 group-hover:text-pink-300 transition-colors">
              ${prod.title}
            </h3>
          </div>

          <!-- Buy Now Button with Animated Basket -->
          <div class="product-card__btn" onclick="openProductDetail('${prod.id}'); event.stopPropagation();">
            <div class="product-card__btn-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="18" height="18" style="fill:currentColor">
                <g transform="matrix(1,0,0,1,250,250)">
                  <path d="M173.173,-83.354h-22.143h-12.68L70.104,-180.849c-4.957,-7.081 -14.715,-8.803 -21.796,-3.846c-7.081,4.957 -8.803,14.714 -3.847,21.795l55.682,79.546h-200.304l-55.682,-79.546c-4.956,-7.081 -6.678,-16.838 -1.722,-21.795c7.08,-4.957 16.839,-3.235 21.796,3.846l68.246,97.495h12.682h20.833c8.644,0 15.65,7.007 15.65,15.65c0,8.643 -7.006,15.649 -15.65,15.649h-7.873l32.648,172.115c5.126,27.02 28.807,46.632 56.309,46.634h150.078c27.503,0 51.186,-19.612 56.313,-46.634l32.649,-172.115h9.182c8.644,0 15.65,-7.006 15.65,-15.649c0,-8.643 -7.006,-15.65 -15.65,-15.65z M100.59,114.236c-2.327,12.267 -13.079,21.168 -25.563,21.168h-150.078c-12.483,0 -23.233,-8.902 -25.56,-21.177l-31.542,-166.291h264.285l-31.542,166.3z"/>
                </g>
              </svg>
            </div>
            <span>Buy now</span>
          </div>
        </div>

      </div>
    `;
  }).join("");

  // Re-bind Framer Scroll Reveal
  const newCards = container.querySelectorAll(".framer-reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.02, rootMargin: "100px" });

    newCards.forEach((el, index) => {
      el.style.transitionDelay = `${(index % 4) * 50}ms`;
      observer.observe(el);
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add("revealed");
      }
    });
  } else {
    newCards.forEach(el => el.classList.add("revealed"));
  }
}

function filterStore(game, btn) {
  const buttons = document.querySelectorAll(".store-filter-btn");
  buttons.forEach(b => b.classList.remove("active"));
  if (btn) {
    btn.classList.add("active");
  } else {
    const allBtn = document.querySelector(".store-filter-btn[data-filter='all']");
    if (allBtn) allBtn.classList.add("active");
  }
  const searchInput = document.getElementById("storeSearchInput");
  const searchQuery = searchInput ? searchInput.value : "";
  renderStoreCatalog(game, searchQuery);
}

// Game filter button handler (kept for compatibility)
function filterByGame(game, btn) {
  renderProductsGrid();
}

// Legacy alias
function filterGames(game, btn) {
  filterByGame(game, btn);
}

// ==========================================================================
// 5. PRODUCT DETAIL MODAL (Image 2 Parity)
// ==========================================================================
function openProductDetail(productId) {
  const prod = RIFT_PRODUCTS.find(p => p.id === productId) || RIFT_PRODUCTS[0];
  currentActiveProduct = prod;
  selectedVariantIndex = 0;
  modalQuantity = 1;

  const modal = document.getElementById("product-detail-modal");
  const breadcrumb = document.getElementById("pd-modal-breadcrumb");
  const title = document.getElementById("pd-modal-title");
  const image = document.getElementById("pd-modal-image");
  const launcher = document.getElementById("pd-modal-launcher");
  const descBox = document.getElementById("pd-modal-description-box");
  const keysContainer = document.getElementById("pd-modal-keys-container");
  const qtyNum = document.getElementById("pd-modal-qty-num");
  const statusBadge = document.getElementById("pd-modal-status");

  if (breadcrumb) breadcrumb.textContent = `${prod.game} / ${prod.title}`;
  if (title) title.textContent = prod.title;
  if (image) image.src = prod.imgPrimary;
  if (launcher) launcher.textContent = prod.launcher;
  if (qtyNum) qtyNum.textContent = modalQuantity;
  if (statusBadge) statusBadge.textContent = prod.status;

  // Render Rich Information & Feature Groups (Matches Image 1 Exact Design)
  if (descBox) {
    let featuresHtml = "";
    if (prod.features && prod.features.length > 0) {
      featuresHtml = `
        <div class="space-y-3.5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
          ${prod.features.map(f => `
            <div class="rounded-xl border border-white/10 bg-[#0a0d18]/60 p-4 backdrop-blur-sm">
              <h4 class="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2.5 flex items-center gap-2">
                <i class="fa-solid fa-${f.icon || 'shield-halved'} text-pink-400"></i> ${f.category}
              </h4>
              <div class="flex flex-wrap gap-1.5">
                ${f.items.map(item => `
                  <span class="inline-flex items-center gap-1 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-slate-200">
                    <span class="h-1 w-1 rounded-full bg-pink-500"></span> ${item}
                  </span>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      `;
    }

    descBox.innerHTML = `
      <div class="mb-4 text-sm text-slate-300 leading-relaxed font-medium">${prod.description}</div>
      ${featuresHtml}
    `;
  }

  // Render Key Selection Radios (Matches Image 1 Exact Design)
  if (keysContainer && prod.variants) {
    keysContainer.innerHTML = prod.variants.map((v, idx) => {
      const isSelected = (idx === selectedVariantIndex);
      const borderClass = isSelected
        ? 'border-pink-500 bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
        : 'border-white/10 bg-[#0a0d18] hover:border-pink-500/40';
      const radioCircle = isSelected
        ? `<div class="flex h-5 w-5 items-center justify-center rounded-full border border-pink-500 bg-pink-500 text-white shrink-0"><svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"></path></svg></div>`
        : `<div class="flex h-5 w-5 items-center justify-center rounded-full border border-white/30 shrink-0"></div>`;

      return `
        <button type="button" onclick="selectModalVariant(${idx})" class="modal-variant-card flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-sm transition-all cursor-pointer ${borderClass}">
          <div class="flex items-center gap-3">
            ${radioCircle}
            <span class="font-medium text-white">${v.name}</span>
          </div>
          <div class="flex items-center gap-4">
            <span class="flex items-center gap-1.5 text-xs font-medium text-emerald-400 font-mono">
              <span class="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              In Stock
            </span>
            <span class="font-bold text-pink-400 font-mono text-base">$${v.price}</span>
          </div>
        </button>
      `;
    }).join("");
  }

  if (modal) {
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
}

function selectModalVariant(index) {
  selectedVariantIndex = index;
  if (!currentActiveProduct || !currentActiveProduct.variants) return;
  const cards = document.querySelectorAll(".modal-variant-card");
  cards.forEach((card, idx) => {
    const isSelected = (idx === index);
    if (isSelected) {
      card.className = "modal-variant-card flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-sm transition-all cursor-pointer border-pink-500 bg-pink-500/10 shadow-[0_0_15px_rgba(236,72,153,0.3)]";
      const iconWrap = card.querySelector("div:first-child > div");
      if (iconWrap) {
        iconWrap.className = "flex h-5 w-5 items-center justify-center rounded-full border border-pink-500 bg-pink-500 text-white shrink-0";
        iconWrap.innerHTML = '<svg class="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6 9 17l-5-5"></path></svg>';
      }
    } else {
      card.className = "modal-variant-card flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-sm transition-all cursor-pointer border-white/10 bg-[#0a0d18] hover:border-pink-500/40";
      const iconWrap = card.querySelector("div:first-child > div");
      if (iconWrap) {
        iconWrap.className = "flex h-5 w-5 items-center justify-center rounded-full border border-white/30 shrink-0";
        iconWrap.innerHTML = '';
      }
    }
  });
}

function changeModalQty(delta) {
  modalQuantity = Math.max(1, Math.min(10, modalQuantity + delta));
  const qtyNum = document.getElementById("pd-modal-qty-num");
  if (qtyNum) qtyNum.textContent = modalQuantity;
}

function closeProductDetail() {
  const modal = document.getElementById("product-detail-modal");
  if (modal) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Fast buy from product detail modal
function buyModalProductNow() {
  if (!currentActiveProduct) return;
  const variant = currentActiveProduct.variants[selectedVariantIndex] || currentActiveProduct.variants[0];
  const btn = document.getElementById("pd-modal-buy-btn");
  
  checkoutWithSellAuth([{
    sellAuthId: currentActiveProduct.sellAuthId || currentActiveProduct.id,
    sellAuthVariantId: variant.sellAuthVariantId || variant.id,
    productId: currentActiveProduct.sellAuthId || currentActiveProduct.id,
    variantId: variant.sellAuthVariantId || variant.id,
    quantity: modalQuantity,
    name: `${currentActiveProduct.title} (${variant.name})`,
    price: parseFloat(variant.price),
    image: currentActiveProduct.imgPrimary
  }], btn);
}

function buySelectedDetailVariant() {
  buyModalProductNow();
}

// Add to cart from product detail modal
function addModalProductToCart() {
  if (!currentActiveProduct) return;
  const variant = currentActiveProduct.variants[selectedVariantIndex] || currentActiveProduct.variants[0];
  const unitPrice = parseFloat(variant.price);

  const vId = variant.sellAuthVariantId || variant.id;
  const pId = currentActiveProduct.sellAuthId || currentActiveProduct.id;

  const existing = cart.find(i => (i.sellAuthId === pId || i.productId === pId || i.prodId === currentActiveProduct.id) && (i.sellAuthVariantId === vId || i.variantId === vId));
  if (existing) {
    existing.quantity = (existing.quantity || 1) + modalQuantity;
  } else {
    cart.push({
      sellAuthId: pId,
      sellAuthVariantId: vId,
      productId: pId,
      variantId: vId,
      id: `${currentActiveProduct.id}-${variant.id}`,
      prodId: currentActiveProduct.id,
      title: currentActiveProduct.title,
      name: `${currentActiveProduct.title} (${variant.name})`,
      tierName: variant.name,
      price: unitPrice,
      quantity: modalQuantity,
      img: currentActiveProduct.imgPrimary || currentActiveProduct.imgSecondary || 'assets/real/Rust.png',
      image: currentActiveProduct.imgPrimary || currentActiveProduct.imgSecondary || 'assets/real/Rust.png'
    });
  }

  localStorage.setItem('rift_cart', JSON.stringify(cart));
  updateCartUI();

  const addBtn = document.getElementById("pd-modal-add-cart-btn");
  if (addBtn) {
    const orig = addBtn.innerHTML;
    addBtn.innerHTML = '<i class="fa-solid fa-check text-emerald-400 mr-1"></i> Added to Cart!';
    setTimeout(() => { addBtn.innerHTML = orig; }, 1400);
  }
  showToast(`Added ${modalQuantity}x ${currentActiveProduct.title} (${variant.name}) to cart!`);

  setTimeout(() => {
    closeProductDetail();
    openCartDrawer();
  }, 350);
}

function addCurrentDetailToCart() {
  addModalProductToCart();
}

// Legacy alias
function openProductConfig(productId) {
  openProductDetail(productId);
}
function closeProductConfig() {
  closeProductDetail();
}

// ==========================================================================
// 6. SELLAUTH CART ENGINE & SLIDE DRAWER
// ==========================================================================
function updateCartUI() {
  const badge1 = document.getElementById("cartCountBadge");
  const badge2 = document.getElementById("cart-count");
  const badgeArctic = document.getElementById("cartBadgeCount");
  const container = document.getElementById("cart-items-container") || document.getElementById("cartItemsContainer") || document.getElementById("cartItemsList");
  const totalEl = document.getElementById("cart-total-price") || document.getElementById("cartTotal");
  const checkoutBtn = document.getElementById("drawer-checkout-btn");
  const clearBtn = document.getElementById("cart-clear-btn");

  const totalCount = cart.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);
  const totalPrice = cart.reduce((sum, item) => sum + ((Number(item.price) || 0) * (Number(item.quantity) || 1)), 0);

  if (badge1) {
    badge1.textContent = totalCount;
    badge1.style.display = totalCount > 0 ? "inline-flex" : "none";
  }
  if (badge2) {
    badge2.textContent = totalCount;
  }
  if (badgeArctic) {
    badgeArctic.textContent = totalCount;
    badgeArctic.style.display = totalCount > 0 ? "inline-flex" : "none";
  }
  if (totalEl) {
    totalEl.textContent = '$' + totalPrice.toFixed(2);
  }
  if (clearBtn) {
    clearBtn.style.display = totalCount > 0 ? "inline-flex" : "none";
  }
  if (checkoutBtn) {
    if (totalCount === 0) {
      checkoutBtn.disabled = true;
      checkoutBtn.classList.add("opacity-50", "cursor-not-allowed");
    } else {
      checkoutBtn.disabled = false;
      checkoutBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
  }

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <p class="cart-empty-title">Your cart is empty.</p>
        <p class="cart-empty-desc">Pick your cheat. The key lands in your inbox the moment payment clears.</p>
        <a href="store.html" class="btn btn-primary" onclick="closeCartDrawer()">
          Browse the store
        </a>
      </div>
    `;
  } else {
    const linesHtml = cart.map((item, idx) => `
      <li class="cart-line">
        <a href="store.html?game=${item.prodId || 'rust'}" class="cart-line-media" tabindex="-1" aria-hidden="true">
          <img src="${item.img || item.image || 'assets/real/Rust.png'}" alt="${item.title || item.name}" loading="lazy">
        </a>
        <div class="cart-line-body">
          <a href="store.html?game=${item.prodId || 'rust'}" class="cart-line-title">
            <span>${item.title || item.name}</span>
            <span class="cart-line-variant">
              <span>${item.tierName || 'Access Key'} · Instant Dispatch</span>
            </span>
          </a>
          <p class="cart-line-price"><span>$${(Number(item.price) || 0).toFixed(2)}</span></p>
          <div class="cart-qty" role="group" aria-label="Quantity">
            <button type="button" class="cart-qty-button" onclick="changeCartItemQty(${idx}, -1)" ${item.quantity <= 1 ? 'disabled' : ''} aria-label="Decrease quantity">−</button>
            <span class="cart-qty-value">${item.quantity || 1}</span>
            <button type="button" class="cart-qty-button" onclick="changeCartItemQty(${idx}, 1)" aria-label="Increase quantity">+</button>
          </div>
          <button type="button" class="cart-line-remove" onclick="removeFromCart(${idx})" aria-label="Remove item">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </li>
    `).join("");

    const freebieHtml = `
      <li class="cart-line is-free">
        <div class="cart-line-media-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
        </div>
        <div class="cart-line-body">
          <div class="cart-line-title">
            <span>Live Installation Support</span>
          </div>
          <p class="cart-line-desc">1-on-1 Discord technician screen share if you need setup help.</p>
          <p class="cart-line-price-free">Free with order</p>
        </div>
      </li>
    `;

    const recHtml = `
      <p class="cart-recs-title">Handpicked for you</p>
      <div class="cart-rec">
        <div class="cart-rec-media">
          <img src="assets/real/Rust.png" alt="Trace 2.0 Spoofer" loading="lazy">
        </div>
        <div class="cart-rec-body">
          <a href="store.html?game=spoofer" class="cart-rec-name">Trace 2.0 Spoofer</a>
          <div class="cart-rec-meta">
            <span>HWID Spoofer</span>
            <span class="cart-rec-tag">Recommended</span>
          </div>
          <p class="cart-rec-desc">Hardware-level serial cloaking for permanent EAC &amp; BE bypass.</p>
        </div>
        <div class="cart-rec-action">
          <span class="cart-rec-price">$4.99</span>
          <button type="button" class="cart-rec-add" onclick="addRecommendedSpooferToCart()">+ Add</button>
        </div>
      </div>
    `;

    container.innerHTML = `
      <ul class="cart-lines">
        ${linesHtml}
        ${freebieHtml}
      </ul>
      ${recHtml}
    `;
  }

  localStorage.setItem('rift_cart', JSON.stringify(cart));
}

function changeCartItemQty(index, delta) {
  if (!cart[index]) return;
  cart[index].quantity = (Number(cart[index].quantity) || 1) + delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  localStorage.setItem('rift_cart', JSON.stringify(cart));
  updateCartUI();
}

function clearCart() {
  if (!cart || cart.length === 0) return;
  cart = [];
  localStorage.setItem('rift_cart', JSON.stringify(cart));
  updateCartUI();
  showToast("Cart has been cleared.");
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('rift_cart', JSON.stringify(cart));
  updateCartUI();
}

function toggleCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;
  if (drawer.classList.contains("is-open")) {
    closeCartDrawer();
  } else {
    openCartDrawer();
  }
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;
  drawer.classList.add("is-open");
  updateCartUI();
  document.body.style.overflow = "hidden";
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  if (!drawer) return;
  drawer.classList.remove("is-open");
  document.body.style.overflow = "";
}

function addRecommendedSpooferToCart() {
  const existing = cart.find(i => i.id === "rift-spoofer" || (i.title && i.title.includes("Trace 2.0")));
  if (existing) {
    existing.quantity = (Number(existing.quantity) || 1) + 1;
  } else {
    cart.push({
      sellAuthId: 740833,
      sellAuthVariantId: 1210815,
      productId: 740833,
      variantId: 1210815,
      id: "rift-spoofer",
      prodId: "spoofer",
      title: "Trace 2.0 Spoofer",
      name: "Trace 2.0 Spoofer (HWID Bypass)",
      tierName: "1-Day Cleanse",
      price: 4.99,
      quantity: 1,
      img: "assets/real/Rust.png",
      image: "assets/real/Rust.png"
    });
  }
  localStorage.setItem('rift_cart', JSON.stringify(cart));
  updateCartUI();
  showToast("Added Trace 2.0 Spoofer to your cart!");
}

function proceedToSellAuthCheckout() {
  if (!cart || cart.length === 0) {
    showToast("Your cart is empty! Please select a product first.");
    return;
  }
  const btn = document.getElementById("drawer-checkout-btn");
  checkoutWithSellAuth(cart, btn);
}

function proceedToCheckoutFromCart() {
  proceedToSellAuthCheckout();
}

// ==========================================================================
// 7. CHECKOUT MODAL & VIP DISCORD SYNC
// ==========================================================================
let pendingCheckoutItem = null;

function openCheckoutModalWithProduct(item) {
  pendingCheckoutItem = item;
  const modal = document.getElementById("checkoutModal");
  const titleEl = document.getElementById("checkoutProdTitle");
  const tierEl = document.getElementById("checkoutProdTier");
  const priceEl = document.getElementById("checkoutProdPrice");
  const imgEl = document.getElementById("checkoutProdImg");

  if (titleEl) titleEl.textContent = item.title;
  if (tierEl) tierEl.textContent = item.tierName;
  if (priceEl) priceEl.textContent = `$${item.price}`;
  if (imgEl) imgEl.src = item.img;

  if (modal) modal.classList.add("active");
}

function closeCheckoutModal() {
  const modal = document.getElementById("checkoutModal");
  if (modal) modal.classList.remove("active");
}

function selectPaymentMethod(pill) {
  document.querySelectorAll(".payment-pill").forEach(p => p.classList.remove("active"));
  if (pill) pill.classList.add("active");
}

async function dispatchAutoRolePurchase({ discord, email, product, key, orderId, amount }) {
  const endpoints = [
    'http://localhost:3840/api/purchase',
    'http://45.61.161.245:3840/api/purchase',
    '/api/purchase'
  ];

  const payload = { discord, email, product, key, orderId, amount };

  for (const url of endpoints) {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 4000) : null;

      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: controller ? controller.signal : undefined
      });

      if (timeoutId) clearTimeout(timeoutId);

      if (res.ok) {
        const data = await res.json();
        console.log('[RiftBot Auto-Role] Verification dispatched:', data);
        const noticeEl = document.getElementById("orderSuccessDiscordNotice") || document.getElementById("successDiscordNotice");
        if (noticeEl) {
          if (data.roleGranted) {
            noticeEl.innerHTML = `<span style="color:#24d169; font-weight:800;"><i class="fa-solid fa-circle-check"></i> Customer Role Auto-Granted!</span><br><span style="font-size:0.78rem; color:#cbd5e1;">Rift Bot has assigned the <strong>Customer</strong> role to <strong>@${discord}</strong> in Discord. Check your server profile & DMs!</span>`;
            showToast(`👑 Rift Bot: Customer role auto-granted for @${discord}!`);
          } else if (data.pending) {
            noticeEl.innerHTML = `<span style="color:#ffb800; font-weight:800;"><i class="fa-solid fa-clock"></i> Customer Verification Queued</span><br><span style="font-size:0.78rem; color:#cbd5e1;">Your order is logged! Once you join the Rift Discord or use <code>/claim-role</code>, your role will be assigned automatically.</span>`;
            showToast(`Rift Bot: Order queued for @${discord}. Join server to activate!`);
          }
        }
        return data;
      }
    } catch (err) {
      // Try next endpoint
    }
  }
}

function processInstantOrder(e) {
  if (e) e.preventDefault();
  const emailInput = document.getElementById("checkoutEmail");
  const discordInput = document.getElementById("checkoutDiscord");

  const email = emailInput ? emailInput.value.trim() : "";
  const discord = discordInput ? discordInput.value.trim() : "";

  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email address for key delivery.");
    return;
  }
  if (!discord) {
    showToast("Please provide your Discord username for VIP role assignment.");
    return;
  }

  // Generate Authentic License Key & Order ID
  const randKey = "RIFT-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-" + Math.random().toString(36).substring(2, 6).toUpperCase() + "-LIFETIME";
  const orderId = "#RC-" + Math.floor(10000 + Math.random() * 90000);
  const productTitle = pendingCheckoutItem ? pendingCheckoutItem.title : "Krush Rust";
  const tierTitle = pendingCheckoutItem ? pendingCheckoutItem.tierName : "Lifetime Permanent";
  const orderAmount = pendingCheckoutItem ? `$${pendingCheckoutItem.price}` : '$49.99';

  // Dispatch to Rift Bot Auto-Role API
  dispatchAutoRolePurchase({
    discord: discord,
    email: email,
    product: productTitle,
    key: randKey,
    orderId: orderId,
    amount: orderAmount
  });

  // Dispatch simulated SellAuth automated license generator
  closeCheckoutModal();
  cart = [];
  updateCartUI();

  // Show Order Success Modal
  showOrderSuccessModal({
    email: email,
    discord: discord,
    keys: [
      {
        title: productTitle,
        tierName: tierTitle,
        key: randKey
      }
    ]
  });

  showToast("Order completed! Your key is ready.");
}

function showOrderSuccessModal({ email, discord, keys }) {
  const modal = document.getElementById("orderSuccessModal");
  const discordNotice = document.getElementById("orderSuccessDiscordNotice") || document.getElementById("successDiscordNotice");
  const keysContainer = document.getElementById("orderSuccessKeys") || document.getElementById("successKeysList");

  if (discordNotice) {
    discordNotice.innerHTML = `
      <span style="color:#24d169; font-weight:800;"><i class="fa-solid fa-spinner fa-spin mr-1"></i> Syncing VIP Customer Role...</span><br>
      <span style="font-size:0.78rem; color:#94a3b8;">Connecting to Rift Bot for Discord <strong>@${discord}</strong>. Dispatched license copy to <strong>${email}</strong>.</span>
    `;
  }

  if (keysContainer) {
    keysContainer.innerHTML = keys.map(k => `
      <div style="background:rgba(0,0,0,0.5); border:1px solid rgba(36,209,105,0.3); border-radius:10px; padding:12px 16px; margin-bottom:10px;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
          <span style="font-size:0.85rem; font-weight:800; color:#fff;">${k.title}</span>
          <span style="font-size:0.75rem; color:var(--accent-pink); font-weight:700;">${k.tierName}</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; background:#090a0f; padding:8px 12px; border-radius:6px; font-family:var(--font-mono); font-size:0.9rem;">
          <span style="color:#24d169; font-weight:700;">${k.key}</span>
          <button onclick="copyToClipboard('${k.key}')" class="qarin-btn-secondary text-[11px] py-1 px-3 ml-2" title="Copy Key">
            <i class="fa-solid fa-copy"></i> Copy
          </button>
        </div>
      </div>
    `).join("");
  }

  if (modal) modal.classList.add("active");
}

function closeOrderSuccessModal() {
  const modal = document.getElementById("orderSuccessModal");
  if (modal) modal.classList.remove("active");
}

// ==========================================================================
// 8. 24/7 AI SUPPORT CHATBOT (INGESTED FROM D:\ef\riftcheats\api\chat.js)
// ==========================================================================
function initChatbot() {
  const input = document.getElementById("chatbotInput");
  if (input) {
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        sendChatbotUserMessage();
      }
    });
  }
}

function toggleChatbot() {
  const windowEl = document.getElementById("chatbotWindow");
  if (!windowEl) return;
  windowEl.classList.toggle("active");
  if (windowEl.classList.contains("active")) {
    setTimeout(() => {
      const input = document.getElementById("chatbotInput");
      if (input) input.focus();
    }, 150);
  }
}

function sendChatbotUserMessage() {
  const input = document.getElementById("chatbotInput");
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;

  input.value = "";
  appendChatbotMessage("user", text);

  setTimeout(() => {
    const reply = generateChatbotReply(text);
    appendChatbotMessage("bot", reply);
  }, 500);
}

function appendChatbotMessage(sender, text) {
  const list = document.getElementById("chatbotMessages");
  if (!list) return;

  const bubble = document.createElement("div");
  bubble.className = `chatbot-bubble ${sender}`;
  bubble.innerHTML = text;
  list.appendChild(bubble);
  list.scrollTop = list.scrollHeight;
}

function sendPresetChip(chipText) {
  appendChatbotMessage("user", chipText);
  setTimeout(() => {
    const reply = generateChatbotReply(chipText);
    appendChatbotMessage("bot", reply);
  }, 400);
}

// Exact knowledge base from D:\ef\riftcheats\api\chat.js
// ==========================================================================
// 8. 24/7 AI SUPPORT CHATBOT ENGINE (Fully Responsive & Contextual)
// ==========================================================================
let botChatHistory = [];

function generateChatbotReply(prompt) {
  const q = (prompt || "").toLowerCase().trim();
  botChatHistory.push(q);

  // Greetings & Casual
  if (/^(hi|hey|hello|yo|sup|howdy|whats up|good morning|good evening)/i.test(q)) {
    const greetings = [
      `Hey there! Welcome to <strong>Rift Cheats</strong>. How can I help you dominate today? Looking for Rust, Arc Raiders, or one of our other undetected cheats?`,
      `Hello! I'm your 24/7 technical assistant. Ready to help with live status checks, pricing, key delivery, or loader setup. What game are you playing?`,
      `Hey! Great to have you here. All our cheats are currently <strong>100% undetected</strong>. Which game do you need access for?`
    ];
    return greetings[botChatHistory.length % greetings.length];
  }

  // Pricing / Cost / How much
  if (q.includes("price") || q.includes("cost") || q.includes("how much") || q.includes("cheap") || q.includes("rates")) {
    return `<strong>Transparent Pricing Across Our Catalog:</strong><br>
    • <strong>Krush - Rust:</strong> $7.49 (1-Day) · $29.99 (7-Day) · $59.99 (30-Day)<br>
    • <strong>Krush Arc Raiders:</strong> $7.49 (1-Day) · $29.99 (7-Day) · $59.99 (30-Day)<br>
    • <strong>Ancient Arc Raiders:</strong> $9.99 (1-Day) · $34.99 (7-Day) · $64.99 (30-Day)<br>
    • <strong>Krush Arc Raiders Internal:</strong> $9.99 (1-Day) · $34.99 (7-Day) · $69.99 (30-Day)<br>
    • <strong>Crusader R6:</strong> $7.49 (1-Day) · $29.99 (7-Day) · $59.99 (30-Day)<br>
    • <strong>Krush Apex Legends:</strong> $7.49 (1-Day) · $29.99 (7-Day) · $59.99 (30-Day)<br>
    • <strong>Disconnect Fortnite:</strong> $7.49 (1-Day) · $29.99 (7-Day) · $59.99 (30-Day)<br>
    • <strong>Ancient Delta Force:</strong> $7.49 (1-Day) · $29.99 (7-Day) · $59.99 (30-Day)<br>
    • <strong>Wardogs Cheats:</strong> from $7.49<br>
    • <strong>Trace 2.0 HWID Spoofer:</strong> $4.99<br>
    <button onclick="closeCartDrawer(); window.location.href='store.html'" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Browse All Cheats in Store &rarr;
    </button>`;
  }

  // Games available / list
  if (q.includes("what games") || q.includes("which game") || q.includes("list") || q.includes("catalog") || q.includes("menu")) {
    return `<strong>Our Current Game Lineup:</strong><br>
    We focus strictly on high-security private builds for 7 top games:<br>
    1. <strong>Rust</strong> (Krush Rust)<br>
    2. <strong>Arc Raiders</strong> (Krush, Ancient, & Internal)<br>
    3. <strong>Rainbow Six Siege</strong> (Crusader R6)<br>
    4. <strong>Apex Legends</strong> (Krush Apex)<br>
    5. <strong>Fortnite</strong> (Disconnect Fortnite)<br>
    6. <strong>Delta Force</strong> (Ancient Delta)<br>
    7. <strong>Wardogs</strong> (Internal, Disconnect, Ancient)<br>
    Plus our <strong>Trace 2.0 Spoofer</strong> for permanent ban evasion.`;
  }

  // Rust
  if (q.includes("rust")) {
    return `<strong>Krush Rust — 100% Undetected & Streamproof:</strong><br>
    • <strong>Pricing:</strong> $7.49 (1 Day) | $29.99 (7 Days) | $59.99 (30 Days)<br>
    • <strong>Combat:</strong> Silent Aim, Instant Eoka, Instant Bow, Instant Compound, Hitbox Override, No Spread.<br>
    • <strong>Visuals:</strong> Player ESP, Sleepers, Wounded State, Raid Distance Alerts, Raid Timer, Cupboard & Turret ESP, Sulfur/Metal Ore Radar.<br>
    • <strong>Movement:</strong> Spider Climb, Infinite Jump, Debug Camera, Battle Mode.<br>
    <button onclick="openProductDetail('rust')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Krush Rust &rarr;
    </button>`;
  }

  // Arc Raiders
  if (q.includes("arc") || q.includes("raider")) {
    return `<strong>Arc Raiders Cheat Lineup — 100% Undetected:</strong><br>
    • <strong>Krush Arc Raiders ($7.49):</strong> Kernel predictive aimbot, Loot Container ESP, 2D Box, Proximity Alert.<br>
    • <strong>Ancient Arc Raiders ($9.99):</strong> Next-gen velocity prediction, Bone Skeleton ESP, Extraction Point Radar.<br>
    • <strong>Krush Arc Raiders Internal ($9.99):</strong> Ring-0 internal memory bypass, OBS streamproof, custom FOV slider.<br>
    <button onclick="openProductDetail('arc')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Arc Raiders &rarr;
    </button>`;
  }

  // Rainbow Six Siege
  if (q.includes("r6") || q.includes("rainbow") || q.includes("siege")) {
    return `<strong>Crusader R6 — 100% Undetected:</strong><br>
    • <strong>Pricing:</strong> $7.49 (1 Day) | $29.99 (7 Days) | $59.99 (30 Days)<br>
    • <strong>Aimbot:</strong> Smooth Memory Aim, Recoil Control System (RCS), Spread Compensation.<br>
    • <strong>ESP:</strong> Operator Icons & Names, Head Dot, Traps (Kapkan/Frost/Ela), C4, Claymores, Drones, Cameras.<br>
    <button onclick="openProductDetail('r6')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Crusader R6 &rarr;
    </button>`;
  }

  // Apex Legends
  if (q.includes("apex")) {
    return `<strong>Krush Apex Legends — 100% Undetected:</strong><br>
    • <strong>Pricing:</strong> $7.49 (1 Day) | $29.99 (7 Days) | $59.99 (30 Days)<br>
    • <strong>Features:</strong> Vector Smooth Aim, Full Glow Chams, 2D Box ESP, Health & Shield Bars, Loot Item Radar, Spectator Warning.<br>
    <button onclick="openProductDetail('apex')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Krush Apex &rarr;
    </button>`;
  }

  // Fortnite
  if (q.includes("fortnite") || q.includes("fn")) {
    return `<strong>Disconnect Fortnite — 100% Undetected:</strong><br>
    • <strong>Pricing:</strong> $7.49 (1 Day) | $29.99 (7 Days) | $59.99 (30 Days)<br>
    • <strong>Features:</strong> Tournament Safe Soft Aim, 2D/3D Boxes, Skeleton Wireframe, Chest & Ammo Box ESP, Vehicle ESP, Streamproof.<br>
    <button onclick="openProductDetail('fortnite')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Disconnect Fortnite &rarr;
    </button>`;
  }

  // Delta Force
  if (q.includes("delta")) {
    return `<strong>Ancient Delta Force — 100% Undetected:</strong><br>
    • <strong>Pricing:</strong> $7.49 (1 Day) | $29.99 (7 Days) | $59.99 (30 Days)<br>
    • <strong>Features:</strong> 2D Radar, Bone Skeleton ESP, Bounding Boxes, Memory Aim, Recoil Reduction, Custom Config System.<br>
    <button onclick="openProductDetail('delta')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Ancient Delta &rarr;
    </button>`;
  }

  // Wardogs
  if (q.includes("wardog")) {
    return `<strong>Wardogs Private Cheats — 100% Undetected:</strong><br>
    • <strong>Krush Wardogs Internal ($7.49):</strong> Smooth & Silent Aim, Death Loot Body Bags ESP.<br>
    • <strong>Disconnect Wardogs ($7.49):</strong> Soft Memory Aim, 2D/3D Boxes.<br>
    • <strong>Ancient Wardogs ($9.99):</strong> Kernel Predictive Targeting, Skeleton Tracking.<br>
    <button onclick="openProductDetail('wardogs')" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      Configure Wardogs &rarr;
    </button>`;
  }

  // Spoofer / HWID
  if (q.includes("spoofer") || q.includes("hwid") || q.includes("ban") && q.includes("pc")) {
    return `<strong>Trace 2.0 HWID Spoofer ($4.99):</strong><br>
    • Cloaks BIOS serials, Disk GUIDs, NIC MAC addresses, and motherboard identifiers.<br>
    • Cleanse takes 30 seconds before launching any game.<br>
    • 100% compatible with EAC, BattlEye, and Ricochet anticheats.<br>
    <button onclick="addRecommendedSpooferToCart()" style="margin-top:8px; background:#ff2a85; color:#fff; border:none; padding:6px 14px; border-radius:999px; font-weight:800; font-size:0.75rem; cursor:pointer;">
      + Add Trace 2.0 Spoofer to Cart ($4.99)
    </button>`;
  }

  // Status / Undetected / Safe
  if (q.includes("status") || q.includes("undetected") || q.includes("safe") || q.includes("ban")) {
    return `<strong>Anticheat Status: 100% Operational & Undetected!</strong><br>
    Our automated honeypots continuously monitor Easy Anti-Cheat (EAC), BattlEye, ACE, and Vanguard. If a game updates, the store automatically freezes the listing to ensure you never get banned.<br>
    <a href="status.html" style="color:#ff2a85; text-decoration:underline; font-weight:bold;">Check Live Status Dashboard &rarr;</a>`;
  }

  // Delivery / Keys / License retrieval
  if (q.includes("key") || q.includes("delivery") || q.includes("instant") || q.includes("where") || q.includes("order")) {
    return `<strong>Instant 5-Second Key Delivery:</strong><br>
    The moment your payment clears via SellAuth:<br>
    1. Your key appears instantly on your order completion screen.<br>
    2. A copy is dispatched to your email address.<br>
    3. You can retrieve, unmask, or copy all active licenses directly inside the <a href="client-area.html" style="color:#ff2a85; text-decoration:underline; font-weight:bold;">Client Area</a>!`;
  }

  // Setup / How to inject / Loader
  if (q.includes("setup") || q.includes("loader") || q.includes("how to") || q.includes("inject") || q.includes("guide")) {
    return `<strong>Simple Loader Setup in 4 Steps:</strong><br>
    1. Add an exclusion for the loader folder in Windows Defender.<br>
    2. Right-click <code>RiftLoader.exe</code> and click <strong>Run as Administrator</strong>.<br>
    3. Paste your license key from your order confirmation or Client Area.<br>
    4. Launch your game when prompted. Press <strong>INSERT</strong> to open your in-game menu!`;
  }

  // Payment methods
  if (q.includes("pay") || q.includes("crypto") || q.includes("card") || q.includes("btc") || q.includes("paypal")) {
    return `<strong>Accepted Payment Methods:</strong><br>
    • <strong>Cards:</strong> Visa, MasterCard, American Express, Apple Pay, Google Pay.<br>
    • <strong>Crypto:</strong> Bitcoin (BTC), Ethereum (ETH), Solana (SOL), Litecoin (LTC), USDT.<br>
    All checkouts are encrypted and keys are delivered in under 5 seconds!`;
  }

  // Discord / Support
  if (q.includes("discord") || q.includes("ticket") || q.includes("admin") || q.includes("human")) {
    return `<strong>Join the Rift Cheats Discord:</strong><br>
    Our staff and verified technicians are available 24/7 for 1-on-1 screenshares and setup help.<br>
    <a href="https://discord.gg/riftcheats" target="_blank" style="color:#5865F2; font-weight:bold; text-decoration:underline;">Click here to join our Discord Community &rarr;</a>`;
  }

  // Contextual Dynamic Fallback (Never repeats robotic message)
  const dynamicAnswers = [
    `Regarding "<em>${prompt}</em>": our team has verified all our cheats for this wipe. You can check individual feature lists, instant delivery guarantees, or jump straight into the <a href="store.html" style="color:#ff2a85; font-weight:bold;">Store</a> to grab a key.`,
    `Got it! For questions about "<em>${prompt}</em>", our 24/7 technical staff in Discord can also assist. Alternatively, check out our <a href="status.html" style="color:#ff2a85; font-weight:bold;">Live Anticheat Status</a> or <a href="client-area.html" style="color:#ff2a85; font-weight:bold;">Client Area</a>.`,
    `I understand you're asking about "<em>${prompt}</em>". All our private builds include streamproof overlays, kernel ring-0 drivers, and 24-hour HWID reset options. Which game are you planning to run?`
  ];

  return dynamicAnswers[Math.abs(prompt.length) % dynamicAnswers.length];
}


// ==========================================================================
// 9. UTILITIES (ONLINE COUNTER, TOAST, SEARCH)
// ==========================================================================
function initOnlineCounter() {
  const el = document.getElementById("onlineUserCount");
  if (!el) return;
  setInterval(() => {
    const delta = Math.floor(Math.random() * 5) - 2;
    let count = parseInt(el.textContent) || 218;
    count = Math.max(190, Math.min(260, count + delta));
    el.textContent = count;
  }, 4000);
}

function showToast(msg) {
  const toast = document.getElementById("riftToast");
  const msgEl = document.getElementById("toastMsg");
  if (!toast || !msgEl) return;
  msgEl.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("License Key copied to clipboard!");
  }).catch(() => {
    showToast("Copied: " + text);
  });
}

function copyCoupon() {
  copyToClipboard("RIFT10");
  showToast("Code RIFT10 copied! 10% OFF applied.");
}

function initSearch() {
  const input = document.getElementById("globalSearchInput");
  const results = document.getElementById("searchResultsContainer");
  if (!input || !results) return;

  input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    if (!q) {
      results.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:20px;">Type a game name (Rust, Arc Raiders, Apex, R6, Fortnite)...</p>`;
      return;
    }
    const matches = RIFT_PRODUCTS.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.game.toLowerCase().includes(q)
    );

    if (matches.length === 0) {
      results.innerHTML = `<p style="color:var(--text-muted); text-align:center; padding:20px;">No cheats found matching "${q}".</p>`;
    } else {
      results.innerHTML = matches.map(prod => `
        <div onclick="closeSearch(); openProductDetail('${prod.id}')" style="display:flex; align-items:center; justify-content:space-between; padding:12px 14px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.08); border-radius:10px; margin-bottom:8px; cursor:pointer;">
          <div style="display:flex; align-items:center; gap:12px;">
            <img src="${prod.imgPrimary}" style="width:36px; height:36px; border-radius:8px; object-fit:cover;">
            <div>
              <div style="font-weight:700; color:#fff; font-size:0.85rem;">${prod.title}</div>
              <div style="font-size:0.75rem; color:#94a3b8;">${prod.game}</div>
            </div>
          </div>
          <span style="font-size:0.85rem; font-weight:800; color:var(--accent-pink);">${prod.priceFrom}</span>
        </div>
      `).join("");
    }
  });
}

function openSearch() {
  const modal = document.getElementById("searchModal");
  if (modal) {
    modal.classList.add("active");
    setTimeout(() => {
      const input = document.getElementById("globalSearchInput");
      if (input) input.focus();
    }, 100);
  }
}

function closeSearch() {
  const modal = document.getElementById("searchModal");
  if (modal) modal.classList.remove("active");
}

// ==========================================================================
// 10. RIFT BOT CONNECTION & TELEMETRY ENGINE
// ==========================================================================
const RIFT_BOT_CONFIG = {
  endpoints: [
    'http://localhost:3840/api/status',
    'http://127.0.0.1:3840/api/status',
    'http://45.61.161.245:3840/api/status',
    '/api/status'
  ],
  healthEndpoints: [
    'http://localhost:3840/health',
    'http://127.0.0.1:3840/health',
    'http://45.61.161.245:3840/health',
    '/health'
  ],
  pollIntervalMs: 25000,
  idMap: {
    "krush_rust": "rust",
    "rust": "rust",
    "krush_arc": "arc",
    "arc": "arc",
    "ancient_arc": "ancient_arc",
    "krush_arc_internal": "arc_internal",
    "arc_internal": "arc_internal",
    "krush_apex": "apex",
    "apex": "apex",
    "crusader_r6": "r6",
    "r6": "r6",
    "disconnect_fortnite": "fortnite",
    "fortnite": "fortnite",
    "ancient_delta": "delta",
    "delta": "delta",
    "krush_wardogs": "wardogs",
    "wardogs": "wardogs",
    "disconnect_wardogs": "disconnect_wardogs",
    "ancient_wardogs": "ancient_wardogs"
  }
};

window.RIFT_BOT_STATE = {
  online: false,
  latency: 0,
  lastSync: null,
  counts: null,
  products: null
};

async function syncRiftBotStatus() {
  const startTime = performance.now();
  let receivedData = null;
  let activeUrl = null;

  for (const url of RIFT_BOT_CONFIG.endpoints) {
    try {
      const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
      const timeoutId = controller ? setTimeout(() => controller.abort(), 3500) : null;
      const res = await fetch(url, { signal: controller ? controller.signal : undefined });
      if (timeoutId) clearTimeout(timeoutId);
      if (res.ok) {
        receivedData = await res.json();
        activeUrl = url;
        break;
      }
    } catch (err) {
      // Continue next endpoint
    }
  }

  if (receivedData && (receivedData.products || receivedData.success)) {
    const latency = Math.round(performance.now() - startTime);
    window.RIFT_BOT_STATE.online = true;
    window.RIFT_BOT_STATE.latency = latency;
    window.RIFT_BOT_STATE.lastSync = new Date().toISOString();
    window.RIFT_BOT_STATE.counts = receivedData.counts;
    window.RIFT_BOT_STATE.products = receivedData.products;

    // Synchronize RIFT_PRODUCTS status with bot products
    if (Array.isArray(receivedData.products)) {
      receivedData.products.forEach(botItem => {
        const targetId = RIFT_BOT_CONFIG.idMap[botItem.id] || botItem.id;
        const target = RIFT_PRODUCTS.find(p => p.id === targetId || (botItem.name && p.title.toLowerCase().includes(botItem.name.toLowerCase())));
        if (target) {
          target.status = botItem.status || target.status;
          target.botNotes = botItem.notes || '';
          target.botLastUpdated = botItem.last_updated;
        }
      });
    }

    // Refresh UI where rendered
    if (document.getElementById("productsGrid") && typeof renderProductsGrid === 'function') {
      renderProductsGrid(typeof activeGameFilter !== 'undefined' ? activeGameFilter : 'all');
    }
    if (document.getElementById("statusListBody") && typeof renderStatusList === 'function') {
      renderStatusList();
    }

    updateStatusTelemetryUI(receivedData.counts, latency);
    updateGlobalConnectionIndicators(true, latency);
  } else {
    window.RIFT_BOT_STATE.online = false;
    updateGlobalConnectionIndicators(false, 0);
  }
}

function updateStatusTelemetryUI(counts, latency) {
  if (!counts) return;

  // Active builds count metric
  const countEl = document.getElementById("statusCountActive");
  if (countEl) {
    countEl.textContent = `${counts.undetected} / ${counts.all}`;
  }

  // Active builds subtitle
  const countSub = document.getElementById("statusCountSub");
  if (countSub) {
    if (counts.undetected === counts.all) {
      countSub.innerHTML = `<i class="fa-solid fa-circle-check"></i> 100% Operational`;
      countSub.style.color = '#34d399';
    } else {
      const extra = [];
      if (counts.testing) extra.push(`${counts.testing} Testing`);
      if (counts.updating) extra.push(`${counts.updating} Updating`);
      countSub.innerHTML = `<i class="fa-solid fa-clock-rotate-left"></i> ${counts.undetected} Undetected (${extra.join(", ")})`;
      countSub.style.color = '#fbbf24';
    }
  }

  // Telemetry Heartbeat metric
  const latEl = document.getElementById("statusLatencyValue");
  if (latEl) {
    latEl.textContent = `${latency}ms`;
    latEl.style.color = '#34d399';
  }

  const latSub = document.getElementById("statusLatencySub");
  if (latSub) {
    latSub.innerHTML = `<i class="fa-solid fa-circle text-[8px] text-emerald-400 animate-pulse"></i> Auto-Synced (Rift Bot)`;
  }
}

function updateGlobalConnectionIndicators(online, latency) {
  // Status page eyebrow badge
  const botSyncEl = document.getElementById("botSyncStatusText");
  if (botSyncEl) {
    if (online) {
      botSyncEl.innerHTML = `<i class="fa-solid fa-circle text-[8px] text-emerald-400 animate-pulse"></i> Rift Bot Live (${latency}ms)`;
      botSyncEl.style.color = '#34d399';
    } else {
      botSyncEl.innerHTML = `<i class="fa-solid fa-circle text-[8px] text-amber-400"></i> Cloud Stream`;
      botSyncEl.style.color = '#94a3b8';
    }
  }

  // Footer connection badge
  const footerBadge = document.getElementById("footerBotTelemetry");
  if (footerBadge) {
    if (online) {
      footerBadge.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
        <span class="text-emerald-400 font-mono text-[11px]">Rift Bot Telemetry Live (${latency}ms)</span>
      `;
    } else {
      footerBadge.innerHTML = `
        <span class="w-1.5 h-1.5 rounded-full bg-slate-500"></span>
        <span class="text-slate-400 font-mono text-[11px]">Telemetry Cached</span>
      `;
    }
  }
}

function initRiftBotTelemetry() {
  // Initial sync immediately
  syncRiftBotStatus();
  // Recurring polling
  setInterval(syncRiftBotStatus, RIFT_BOT_CONFIG.pollIntervalMs);
}


// ==========================================================================
// 11. ARCTICCHEATS NAVBAR & RIFT AI BOT HANDLERS
// ==========================================================================
function toggleCheatsDropdown(event) {
  if (event) event.stopPropagation();
  const dropdown = document.getElementById("navCheatsDropdown");
  if (dropdown) dropdown.classList.toggle("is-open");
}

function togglePrefsMenu(event) {
  if (event) event.stopPropagation();
  const panel = document.getElementById("prefsPanel");
  if (panel) panel.classList.toggle("is-open");
}

function setLanguage(lang) {
  const label = document.getElementById("prefsLangLabel");
  if (label) label.textContent = lang;
  document.querySelectorAll(".lang-opt").forEach(btn => {
    if (btn.textContent.includes(lang) || (lang === 'EN' && btn.textContent.includes('English'))) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }
  });
  const panel = document.getElementById("prefsPanel");
  if (panel) panel.classList.remove("is-open");
}

function setCurrency(cur, symbol) {
  const label = document.getElementById("prefsCurLabel");
  if (label) label.textContent = symbol;
  document.querySelectorAll(".cur-opt").forEach(btn => {
    if (btn.textContent.includes(cur)) {
      btn.classList.add("is-active");
    } else {
      btn.classList.remove("is-active");
    }
  });
  const panel = document.getElementById("prefsPanel");
  if (panel) panel.classList.remove("is-open");
}

function toggleMobileNav() {
  const nav = document.querySelector(".site-nav");
  if (nav) {
    if (nav.classList.contains("hidden")) {
      nav.classList.remove("hidden");
      nav.classList.add("flex", "flex-col", "absolute", "top-full", "left-0", "w-full", "bg-[#0d0f17]", "p-6", "border-b", "border-white/10", "z-50");
    } else {
      nav.classList.add("hidden");
      nav.classList.remove("flex", "flex-col", "absolute", "top-full", "left-0", "w-full", "bg-[#0d0f17]", "p-6", "border-b", "border-white/10", "z-50");
    }
  }
}

// Global click outside listener to close dropdowns
document.addEventListener("click", (e) => {
  const cheatsDropdown = document.getElementById("navCheatsDropdown");
  if (cheatsDropdown && !cheatsDropdown.contains(e.target)) {
    cheatsDropdown.classList.remove("is-open");
  }
  const prefsMenu = document.getElementById("prefsMenu");
  if (prefsMenu && !prefsMenu.contains(e.target)) {
    const prefsPanel = document.getElementById("prefsPanel");
    if (prefsPanel) prefsPanel.classList.remove("is-open");
  }
});

// 24/7 Rift AI Support Chat Handlers
function toggleRiftAiChat() {
  const win = document.getElementById("riftChatWindow");
  if (!win) return;
  win.classList.toggle("is-open");
  if (win.classList.contains("is-open")) {
    setTimeout(() => {
      const input = document.getElementById("riftChatInput");
      if (input) input.focus();
    }, 150);
  }
}

// Aliases for compatibility
window.toggleChatbot = toggleRiftAiChat;
window.openChatbot = toggleRiftAiChat;

function sendQuickPrompt(promptText) {
  appendRiftChatMessage("user", promptText);
  processRiftAiResponse(promptText);
}

function handleRiftChatSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById("riftChatInput");
  if (!input) return;
  const val = input.value.trim();
  if (!val) return;
  input.value = "";
  appendRiftChatMessage("user", val);
  processRiftAiResponse(val);
}

function appendRiftChatMessage(sender, htmlContent) {
  const stream = document.getElementById("riftChatStream");
  if (!stream) return;
  const msgEl = document.createElement("div");
  msgEl.className = `rift-msg ${sender}`;
  msgEl.innerHTML = `<div class="msg-bubble">${htmlContent}</div>`;
  stream.appendChild(msgEl);
  stream.scrollTop = stream.scrollHeight;
}

function processRiftAiResponse(userText) {
  const anim = document.getElementById("riftNeuralAnim");
  const sendBtn = document.getElementById("riftChatSendBtn");
  if (anim) anim.classList.remove("hidden");
  if (sendBtn) sendBtn.disabled = true;

  const stream = document.getElementById("riftChatStream");
  if (stream) stream.scrollTop = stream.scrollHeight;

  setTimeout(() => {
    if (anim) anim.classList.add("hidden");
    if (sendBtn) sendBtn.disabled = false;
    const reply = generateChatbotReply(userText);
    appendRiftChatMessage("bot", reply);
  }, 650);
}


// ==========================================================================
// LOGIN MODAL CONTROLLERS
// ==========================================================================
function openLoginModal() {
  const modal = document.getElementById("loginModalOverlay");
  if (!modal) return;
  modal.classList.add("is-open");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    const input = document.getElementById("login-email");
    if (input) input.focus();
  }, 100);
}

function closeLoginModal() {
  const modal = document.getElementById("loginModalOverlay");
  if (!modal) return;
  modal.classList.remove("is-open");
  document.body.style.overflow = "";
}

function handleQuickLogin(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("login-email");
  const email = input ? input.value.trim() : "";
  if (!email || !email.includes("@")) {
    showToast("Please enter a valid email address.");
    if (input) input.focus();
    return;
  }
  const btn = document.querySelector(".login-modal__send-btn");
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Logging in...';
  }
  showToast(`Authenticating ${email}...`);
  setTimeout(() => {
    window.location.href = `client-area.html?email=${encodeURIComponent(email)}`;
  }, 800);
}
