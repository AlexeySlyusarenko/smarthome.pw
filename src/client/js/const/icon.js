const icon = {
  1001: {
    title: 'apply',
    svg: `<path d="M4 13l5 5l11-11"/>`,
    color: '#c5e1a5'
  },
  1002: {
    title: 'clear',
    svg: `<path d="M6 6l12 12m-12 0l12-12"/>`,
    color: '#ffab91'
  },
  1003: {
    title: 'filter',
    svg: `<path d="M3 7h18M6 12h12M10 17h4"/>`,
    color: '#ffcc80'
  },
  1004: {
    title: 'more',
    svg: `<path d="M4 15l8-8l8 8"/>`,
    color: '#ffcc80'
  },
  1005: {
    title: 'less',
    svg: `<path d="M4 15l8 8l8-8"/>`,
    color: '#ffcc80'
  },
  1006: {
    title: 'balcony',
    svg: `<g><path d="M 4 21h16v-7h-16z m5 0v-7 m3 0v7m3 0v-7M7 14v-7a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v7m0-7h-10m5-4v4"/><circle cx="4" cy="13" r="1"/><circle cx="20" cy="13" r="1"/></g>`,
    color: '#90caf9'
  },
  1007: {
    title: 'bathroom',
    svg: `<path d="M6 21l1-2m10 0l1 2M2 14h20M4 14v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-11a2 2 0 0 0-2-2h-4v2"/>`,
    color: '#90caf9'
  },
  1008: {
    title: 'bedroom',
    svg: `<path d="M2 20v-7a30 30 0 0 1 20 0v7m0-3h-20M5 12v-5h14v5"/>`,
    color: '#ffcc80'
  },
  1009: {
    title: 'childrenroom',
    svg: `<g><circle cx="14.5" cy="10.5" r="1"/><circle cx="9.5" cy="10.5" r="1"/><path d="M4 9a9 10 0 0 1 16 0a3 3 0 1 1 0 6a9 10 0 0 1-16 0a3 3 0 1 1 0-6zM8 14.5h8a5 5 0 0 1-8 0z"/></g>`,
    color: '#ffab91'
  },
  1010: {
    title: 'diningroom',
    svg: `<path d="M7 22v-13h2a2 2 0 0 0 2-2v-5m-4 7h-2a2 2 0 0 1-2-2v-5m2.6 7v-7m2.6 7v-7M21 22v-20a4 4 0 0 0-3 4v6h3"/>`,
    color: '#ffcc80'
  },
  1011: {
    title: 'firstFloor',
    svg: `<path d="M2 10l3-3v11M11 18h2a2 2 0 0 0 0-4a2 2 0 0 1 0-4h1.5M20 7v9a2 2 0 0 0 2 2m0-8h-4"/>`,
    color: '#81d4fa'
  },
  1012: {
    title: 'hall',
    svg: `<path d="M2 21h20m-1-3h-18a9 9 0 0 1 18 0m-9-9a2 2 0 1 1 0.1 0M5 4l-2-2M19 4l2-2M4 8l-2-1M20 8l2-1"/>`,
    color: '#81d4fa'
  },
  1013: {
    title: 'kitchen',
    svg: `<path d="M5 22h14v-20h-14zm0-11h14M9 5v3m0 6v5"/>`,
    color: '#81d4fa'
  },
  1014: {
    title: 'loungeroom',
    svg: `<path d="M1 12v5a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v3h-14v-3a2 2 0 0 0-4 0m3-2v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3"/>`,
    color: '#c5e1a5'
  },
  1015: {
    title: 'playroom',
    svg: `<g><circle cx="7" cy="7" r="1" /><circle cx="7" cy="17" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="17" cy="7" r="1"/><path d="M22 20a2 2 0 0 1-2 2h-16a2 2 0 0 1-2-2v-16a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
    </g>`,
    color: '#ffab91'
  },
  1016: {
    title: 'wardrope',
    svg: `<path d="M4 19h16a1 2 100 1 0 1-2l-9-4l-9 4a1 2 80 1 0 1 2m8-6v-3a3 3 0 1 0-3-3"/>`,
    color: '#c5e1a5'
  },
  1017: {
    title: 'wc',
    svg: `<path d="M21 7v14h-10l1-5h-7a3 3 0 0 1-2-3h12v-10h6zm0 0h-6m-3 3h-8"/>`,
    color: '#c5e1a5'
  },
  1018: {
    title: 'all',
    svg: `<path d="M2.5 13h7M1 18l3-10a2.1 2.1 0 0 1 4 0l3 10m4-11v9a2 2 0 0 0 2 2m4-11v9a2 2 0 0 0 2 2"/>`,
    color: '#ffcc80'
  },
  1019: {
    title: 'cooler',
    svg: `<path d="M12 2v20M2 12h20M12 15.5L7 20.5M12 15.5L17 20.5M12 8.5L17 3.5M12 8.5L7 3.5M8.5 12L3.5 17M8.5 12L3.5 7M15.5 12L20.5 17M15.5 12L20.5 7"/>`,
    color: '#90caf9'
  },
  1020: {
    title: 'electric',
    svg: `<path d="M15 7v-4v4h-6v-4v4h-1a2 2 0 0 0 -2 2v6l3 3v3h6v-3l3-3v-6a2 2 0 0 0 -2 -2z"/>`,
    color: '#c5e1a5'
  },
  1021: {
    title: 'heatFloor',
    svg: `<path d="M4 4.5h14a2 2 0 1 1 0 5h-12a2 2 0 1 0 0 5h12a2 2 0 1 1 0 5h-14"/>`,
    color: '#ffab91'
  },
  1022: {
    title: 'heater',
    svg: `<g"><path d="M3 3v18m5.3-18v18m5.3-18v18m5.3-18v18"/><path d="M3 7h18M3 16h18" style="stroke-width: 2px;"/></g>`,
    color: '#ef9a9a'
  },
  1023: {
    title: 'leak',
    svg: `<path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31z"/>`,
    color: '#90caf9'
  },
  1024: {
    title: 'light',
    svg: `<path d="M9 17l6 0l0 -3a6 6 0 1 0 -6 0z m1 4l4 0"/>`,
    color: '#da9708'
  },
  1025: {
    title: 'sciene',
    svg: `<g><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="12" r="4"/><path d="M8 17l4.5-3M8 7l4.5 3"/></g>`,
    color: '#b39ddb'
  },
  1026: {
    title: 'security',
    svg: `<path d="M4 6v6A12 12 0 0 0 12 22A12 12 0 0 0 20 12v-6l-8-4zM4 12h16M12 2V22"/>`,
    color: '#9fa8da'
  },
  1027: {
    title: 'setup',
    svg: `<g><circle cx="12" cy="12" r="5"/><circle style="stroke-dasharray: 3, 7.4" cx="12" cy="12" r="10"/></g>`,
    color: '#bcaaa4'
  },
  1028: {
    title: 'valve',
    svg: `<g><path d="M12 10v6l9-4v8l-18-8v8l9-4"/><circle cx="12" cy="6" r="4"/></g>`,
    color: '#81d4fa'
  },
  1029: {
    title: 'vent',
    svg: `<g><circle cx="12" cy="12" r="3"/><path d="M15 11C17.6 8.9 18.5 4.8 15 3C10.3 0.9 8.2 3.6 9 4.2C10.2 5.3 11.1 6.6 11.1 9"/><path d="M15 11C17.6 8.9 18.5 4.8 15 3C10.3 0.9 8.2 3.6 9 4.2C10.2 5.3 11.1 6.6 11.1 9" transform="rotate(120 12 12)"/><path d="M15 11C17.6 8.9 18.5 4.8 15 3C10.3 0.9 8.2 3.6 9 4.2C10.2 5.3 11.1 6.6 11.1 9" transform="rotate(240 12 12)"/></g>`,
    color: '#a5d6a7'
  },
  1030: {
    title: 'video',
    svg: `<path d="M3 15a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-2l3 3v-8l-3 3v-2a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2z"/>`,
    color: '#80cbc4'
  },
  1031: {
    title: 'menu',
    svg: `<circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="19" r="1"></circle>`,
    color: '#80cbc4'
  },
};

export {
  icon,
}
