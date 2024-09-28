import type { Config } from "tailwindcss";

const config: Config = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '0.707rem',
        base: '1rem',
        xl: '1.414rem',
        '2xl': '1.999rem',
        '3xl': '2.827rem',
        '4xl': '3.997rem',
        '5xl': '5.652rem',

        'heading-1': '64px',
        'heading-2': '46px',
        'heading-3': '30px',
        'heading-4': '18px',

        'subtitle-1': '24px',
        'subtitle-2': '20px',

        'paragraph-1': '22px',
        'paragraph-2': '16px',

        'caption': '14px',

      },
      maxWidth: {
        hero: '1014px',
        'hero-inner': '785px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        vollkorn: ['Vollkorn', 'serif'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        "semi-bold": '600',
        bold: '800',
      },
      colors: {
        "primary-100": '#99E0FF',
        "primary-300": '#66D1FF',
        "primary-500": '#1AB9FF',
        "primary-700": '#1598D1',
        "primary-900": '#4792B2',
        "secondary-100": '#FFD0B7',
        "secondary-300": '#FFBC99',
        "secondary-500": '#FF9A66',
        "secondary-700": '#FF7731',
        "secondary-900": '#CC5F27',
        "accent-100": '#FFECC7',
        "accent-300": '#FFDA94',
        "accent-500": '#E5BC6E',
        "accent-700": '#F0B342',
        "accent-900": '#A3741D',
        "neutral-100": '#F2F2F2',
        "neutral-300": '#D1D9DE',
        "neutral-500": '#BAD1DE',
        "neutral-700": '#7E9BAB',
        "neutral-900": '#21333D',
        "t-dark": '#21333D',
        "t-light": '#F2F2F2',
        "t-default": '#919191',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        cocotheme: {
          "primary": "#1598D1",
          "primary-content": "#F2F2F2",
          "secondary": "#FF7731",
          "secondary-content": "#F2F2F2",
          "accent": "#F0B342",
          "accent-content": "#F2F2F2",
          "neutral": "#F2F2F2",
          "neutral-content": "#21333D",
          "base-100": "#FBFBFE",
          "base-200": "#dadadd",
          "base-300": "#bababd",
          "base-content": "#21333D",
          "info": "#4D74FF",
          "info-content": "#F2F2F2",
          "success": "#50E256",
          "success-content": "#21333D",
          "warning": "#FF7F08",
          "warning-content": "#21333D",
          "error": "#FF5B47",
          "error-content": "#F2F2F2"
        }
      },
      'dracula'
    ]
  },
  darkMode: ['class', '[data-theme="dracula"]']
};
export default config;
