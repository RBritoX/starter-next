import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '2xs': ['0.5rem', { lineHeight: '0.75rem' }], // 8px
        xs: ['0.75rem', { lineHeight: '1rem' }], // 12px
        sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px
        base: ['1rem', { lineHeight: '1.5rem' }], // 16px
        md: ['1.125rem', { lineHeight: '1.75rem' }], // 18px
        lg: ['1.25rem', { lineHeight: '1.75rem' }], // 20px
        xl: ['1.5rem', { lineHeight: '2rem' }], // 24px
        '2xl': ['2rem', { lineHeight: '2.5rem' }], // 32px
        '3xl': ['2.5rem', { lineHeight: '3rem' }], // 40px
        '4xl': ['3rem', { lineHeight: '3.5rem' }], // 48px
        '5xl': ['3.5rem', { lineHeight: '4rem' }], // 56px
        '6xl': ['4rem', { lineHeight: '1' }], // 64px
        '7xl': ['4.5rem', { lineHeight: '1' }], // 72px
        '8xl': ['5rem', { lineHeight: '1' }], // 80px
        '9xl': ['5.5rem', { lineHeight: '1' }], // 88px
        '10xl': ['6rem', { lineHeight: '1' }], // 96px
      },
    },
  },
  plugins: [
    plugin(({ theme, addUtilities }) => {
      const neonUtilities: Record<string, any> = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color]['500'];
          const color2 = colors[color]['700'];

          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
export default config;
