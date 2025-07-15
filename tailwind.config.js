module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - Nike's bold brand authority
        secondary: "#FFFFFF", // white - clean premium feel
        accent: "#FF6B35", // orange-500 - Nike's signature orange
        
        // Background Colors
        background: "#FAFAFA", // gray-50 - subtle off-white
        surface: "#F5F5F5", // gray-100 - light gray for cards
        
        // Text Colors
        'text-primary': "#111111", // gray-900 - near-black for readability
        'text-secondary': "#666666", // gray-500 - medium gray for supporting info
        
        // Status Colors
        success: "#22C55E", // green-500 - positive confirmations
        warning: "#F59E0B", // amber-500 - inventory alerts
        error: "#EF4444", // red-500 - validation errors
        
        // Border Colors
        border: "#E5E5E5", // gray-300 - minimal borders
        'border-active': "#FF6B35", // orange-500 - active states
        
        // Nike Brand Colors
        'nike-black': "#000000", // black
        'nike-white': "#FFFFFF", // white
        'nike-orange': "#FF6B35", // orange-500
        'nike-gray-50': "#FAFAFA", // gray-50
        'nike-gray-100': "#F5F5F5", // gray-100
        'nike-gray-300': "#E5E5E5", // gray-300
        'nike-gray-500': "#666666", // gray-500
        'nike-gray-900': "#111111", // gray-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        data: ['JetBrains Mono', 'monospace'],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'nike-sm': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'nike-lg': '0 10px 25px rgba(0, 0, 0, 0.15)',
        'nike-focus': '0 0 0 3px rgba(255, 107, 53, 0.1)',
      },
      transitionDuration: {
        'nike-fast': '200ms',
        'nike-smooth': '400ms',
      },
      transitionTimingFunction: {
        'nike-ease': 'ease-out',
        'nike-smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        'nike': '6px',
        'nike-lg': '8px',
      },
      spacing: {
        'nike-xs': '4px',
        'nike-sm': '8px',
        'nike-md': '12px',
        'nike-lg': '16px',
        'nike-xl': '24px',
        'nike-2xl': '32px',
      },
      animation: {
        'nike-bounce': 'bounce 0.5s ease-in-out',
        'nike-fade-in': 'fadeIn 0.3s ease-out',
        'nike-slide-up': 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}