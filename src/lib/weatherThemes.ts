export interface WeatherTheme {
    background: string;
    icon: string;
    iconColor: string;
}

export const weatherThemes: Record<string, WeatherTheme> = {
    Clear: {
        background:
            "linear-gradient(135deg, #FDB813 0%, #F59E0B 50%, #EA580C 100%)",
        icon: `<g>
      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="20s" repeatCount="indefinite"/>
      <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41M12 7a5 5 0 100 10 5 5 0 000-10z"/>
    </g>`,
        iconColor: "rgba(254, 243, 199, 0.95)",
    },
    Cloudy: {
        background:
            "linear-gradient(135deg, #64748B 0%, #475569 50%, #334155 100%)",
        icon: `<path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z">
      <animateTransform attributeName="transform" type="translate" values="0,0; 3,0; 0,0" dur="4s" repeatCount="indefinite"/>
    </path>`,
        iconColor: "rgba(226, 232, 240, 0.9)",
    },
    Rain: {
        background:
            "linear-gradient(135deg, #1e293b 0%, #0f172a 50%, #020617 100%)",
        icon: `<g>
      <path d="M5 5a7 7 0 1114 0"/>
      <path d="M-5-8h18">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0.7; 1" dur="1.5s" repeatCount="indefinite"/>
      </path>
      <line x1="16" y1="13" x2="16" y2="21">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1.5s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0.7; 1" dur="1.5s" repeatCount="indefinite"/>
      </line>
      <line x1="8" y1="13" x2="8" y2="21">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0.7; 1" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
      </line>
    </g>`,
        iconColor: "rgba(203, 213, 225, 0.9)",
    },
    Drizzle: {
        background:
            "linear-gradient(135deg, #334155 0%, #1e293b 50%, #0f172a 100%)",
        icon: `<g>
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/>
      <line x1="8" y1="19" x2="8" y2="21">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,1.5; 0,0" dur="2s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0.8; 1" dur="2s" repeatCount="indefinite"/>
      </line>
      <line x1="16" y1="19" x2="16" y2="21">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,1.5; 0,0" dur="2s" begin="0.3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0.8; 1" dur="2s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="12" y1="14" x2="12" y2="16">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,1.5; 0,0" dur="2s" begin="0.6s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="1; 0.8; 1" dur="2s" begin="0.6s" repeatCount="indefinite"/>
      </line>
    </g>`,
        iconColor: "rgba(203, 213, 225, 0.85)",
    },
    Thunderstorm: {
        background:
            "linear-gradient(135deg, #1e1b4b 0%, #1e293b 50%, #0c0a09 100%)",
        icon: `<g>
      <path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9"/>
      <polyline points="13 11 9 17 15 17 11 23">
        <animate attributeName="opacity" values="1; 0.3; 1; 0.3; 1" dur="3s" repeatCount="indefinite"/>
      </polyline>
    </g>`,
        iconColor: "rgba(196, 181, 253, 0.9)",
    },
    Snow: {
        background:
            "linear-gradient(135deg, #E0F2FE 0%, #BAE6FD 50%, #7DD3FC 100%)",
        icon: `<g>
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="2.5s" repeatCount="indefinite"/>
        <line x1="8" y1="16" x2="8.01" y2="16"/>
        <line x1="8" y1="20" x2="8.01" y2="20"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
        <line x1="12" y1="22" x2="12.01" y2="22"/>
        <line x1="16" y1="16" x2="16.01" y2="16"/>
        <line x1="16" y1="20" x2="16.01" y2="20"/>
      </g>
    </g>`,
        iconColor: "rgba(7, 89, 133, 0.9)",
    },
    Fog: {
        background:
            "linear-gradient(135deg, #9CA3AF 0%, #6B7280 50%, #4B5563 100%)",
        icon: `<g>
      <path d="M3 15h18M3 9h18M3 12h18">
        <animate attributeName="opacity" values="1; 0.5; 1" dur="3s" repeatCount="indefinite"/>
      </path>
    </g>`,
        iconColor: "rgba(243, 244, 246, 0.9)",
    },
    Haze: {
        background:
            "linear-gradient(135deg, #A8A29E 0%, #78716C 50%, #57534E 100%)",
        icon: `<g>
      <circle cx="12" cy="12" r="10" opacity="0.5">
        <animate attributeName="opacity" values="0.5; 0.2; 0.5" dur="3s" repeatCount="indefinite"/>
      </circle>
      <path d="M3 15h18M3 9h18">
        <animate attributeName="opacity" values="1; 0.6; 1" dur="3s" repeatCount="indefinite"/>
      </path>
    </g>`,
        iconColor: "rgba(250, 250, 249, 0.8)",
    },
    Shower: {
        background:
            "linear-gradient(135deg, #0369A1 0%, #075985 50%, #0C4A6E 100%)",
        icon: `<g>
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/>
      <line x1="8" y1="19" x2="8" y2="21">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1s" repeatCount="indefinite"/>
      </line>
      <line x1="8" y1="13" x2="8" y2="15">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1s" begin="0.5s" repeatCount="indefinite"/>
      </line>
      <line x1="16" y1="19" x2="16" y2="21">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1s" begin="0.2s" repeatCount="indefinite"/>
      </line>
      <line x1="16" y1="13" x2="16" y2="15">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1s" begin="0.7s" repeatCount="indefinite"/>
      </line>
      <line x1="12" y1="21" x2="12" y2="23">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1s" begin="0.3s" repeatCount="indefinite"/>
      </line>
      <line x1="12" y1="15" x2="12" y2="17">
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="1s" begin="0.8s" repeatCount="indefinite"/>
      </line>
    </g>`,
        iconColor: "rgba(186, 230, 253, 0.95)",
    },
    Sleet: {
        background:
            "linear-gradient(135deg, #67E8F9 0%, #22D3EE 50%, #06B6D4 100%)",
        icon: `<g>
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="2.5s" repeatCount="indefinite"/>
        <line x1="8" y1="19" x2="8" y2="21"/>
        <circle cx="16" cy="20" r="1"/>
        <line x1="12" y1="17" x2="12" y2="19"/>
        <circle cx="8" cy="16" r="1"/>
      </g>
    </g>`,
        iconColor: "rgba(8, 51, 68, 0.9)",
    },
    Hail: {
        background:
            "linear-gradient(135deg, #E0E7FF 0%, #C7D2FE 50%, #A5B4FC 100%)",
        icon: `<g>
      <path d="M20 17.58A5 5 0 0018 8h-1.26A8 8 0 104 16.25"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; 0,2; 0,0" dur="2.5s" repeatCount="indefinite"/>
        <circle cx="8" cy="19" r="1.5"/>
        <circle cx="13" cy="21" r="1.5"/>
        <circle cx="16" cy="17" r="1.5"/>
      </g>
    </g>`,
        iconColor: "rgba(49, 46, 129, 0.9)",
    },
    Dust: {
        background:
            "linear-gradient(135deg, #D97706 0%, #B45309 50%, #92400E 100%)",
        icon: `<g>
      <path d="M21.5 12h-19M21.5 6h-19M21.5 18h-19"/>
      <g>
        <animateTransform attributeName="transform" type="translate" values="0,0; -0.5,0; 0.5,0; 0,0" dur="0.5s" repeatCount="indefinite"/>
        <circle cx="6" cy="6" r="1"/>
        <circle cx="18" cy="12" r="1"/>
        <circle cx="10" cy="18" r="1"/>
      </g>
    </g>`,
        iconColor: "rgba(254, 243, 199, 0.9)",
    },
    Unknown: {
        background:
            "linear-gradient(135deg, #52525B 0%, #3F3F46 50%, #27272A 100%)",
        icon: `<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01"/>`,
        iconColor: "rgba(228, 228, 231, 0.9)",
    },
};
