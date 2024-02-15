import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'fundo-login': '#FFFFFF',
        'azul-google': '#2C6EF2',
        'fundo-site': '#F5F2F2',
        'texto-padrao': '#000000',
        'texto-insert': '#808080',
        'texto-branco': '#FFFFFF',
        'botao-recusar': '#FF0000',
        'botao-continuar': '#46E01F',
        'verde-claro': '#B1D7C6',
        'verde-escuro': '#2F6969',
        'heather': '#FFFFFF',
      },
    },
  },
  plugins: [],
};
export default config;
