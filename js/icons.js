/* Ícones em SVG usados nas seções */
const ICONES = {
  cat:'<path d="M5 10V4l3.5 3h7L19 4v6c1.3 1.3 2 3 2 4.8C21 18.8 17 21 12 21s-9-2.2-9-6.2C3 13 3.7 11.3 5 10z"/><path d="M9 13.5h.01M15 13.5h.01M10.5 16.5 12 17.5l1.5-1"/>',
  owl:'<path d="M5 4l3 2.5h8L19 4v9.5a7 7 0 0 1-14 0z"/><circle cx="9" cy="11" r="2"/><circle cx="15" cy="11" r="2"/><path d="m11 14.2 1 1.3 1-1.3M9.5 20.5 9 22M14.5 20.5 15 22"/>',
  dna:'<path d="M7 3c0 5 10 6 10 12 0 2.5-1 4.5-2 6M17 3c0 5-10 6-10 12 0 2.5 1 4.5 2 6M9 6h6M8 9.5h8M8 15h8M9 18.5h6"/>',
  door:'<path d="M6 21V4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21M3 21h18M14.5 12.5v.01"/>',
  layout:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M9 9v11"/>',
  phone:'<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  db:'<ellipse cx="12" cy="5.5" rx="7" ry="2.5"/><path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5"/>',
  check:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="m8 12 3 3 5-6"/>',
  layers:'<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
  server:'<rect x="4" y="3.5" width="16" height="7" rx="1.5"/><rect x="4" y="13.5" width="16" height="7" rx="1.5"/><path d="M8 7h.01M8 17h.01"/>',
  tool:'<path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3.5 17.3a1.4 1.4 0 0 0 2 2l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.6 2.6-2-.6-.6-2z"/>',
  pin:'<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
  lang:'<path d="M4 5h9M8.5 3v2M6 5c.6 3.4 2.8 6 6 7.5M11 5c-.6 3.6-3 6.5-7 8"/><path d="m13 20 4-9 4 9M14.5 17h5"/>',
  bag:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>',
  github:'<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
  linkedin:'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>'
};
const svg = n => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONES[n] || ICONES.layout}</svg>`;
