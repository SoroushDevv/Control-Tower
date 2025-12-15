/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
       keyframes: {
        'bell-shake': {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '15%': { transform: 'rotate(10deg)' },
          '30%': { transform: 'rotate(-10deg)' },
          '45%': { transform: 'rotate(6deg)' },
          '60%': { transform: 'rotate(-6deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
      },
      animation: {
        'bell-shake': 'bell-shake 1.2s ease-in-out infinite',
      },
      colors: {
        /* ---------------------------------------------------
           🎨 CONTROL TOWER DESIGN SYSTEM — ADVANCED COLOR SET
           شامل حالت‌های کامل DARK و LIGHT + نسخه‌های Tint/Soft/Faint
        ----------------------------------------------------*/

        /* 🌑 DARK MODE — نسخه مخصوص محیط‌های تیره */
        dark: {
          /* ----------------------
             🔳 BACKGROUND LAYERS
          -----------------------*/
          bg: {
            base: "#0D1117",            // پس‌زمینه اصلی (Layer 0)
            surface: "#161B22",         // سطح کارت‌ها، با کنتراست کمی بالاتر
            surfaceAlt: "#1E2530",      // سطح ثانویه (Layer 2)
            overlay: "#1F2935CC",       // اوورلی نیمه‌شفاف برای مودال/دیالوگ
          },

          /* ----------------------
             ✏ TEXT COLORS
          -----------------------*/
          text: {
            primary: "#E6EDF3",         // متن اصلی و با اهمیت
            primarySoft: "#E6EDF3CC",    // نسخه ملایم‌تر متن اصلی
            secondary: "#8B949E",       // متن ثانویه و اطلاعات کم‌اهمیت
            secondarySoft: "#8B949ECC",  // نسخه کمرنگ‌تر متن ثانویه
            muted: "#6E7681",           // متن توضیحی یا غیرفعال
            mutedSoft: "#6E768199",     // نسخه خیلی کمرنگ متن راهنما
            inverted: "#0D1117",        // متن روی سطح‌های روشن یا نواحی معکوس
          },

          /* ----------------------
             ▧ BORDER COLORS
          -----------------------*/
          border: {
            DEFAULT: "#30363D",         // مرز پیش‌فرض
            light: "#3E4451",           // مرز روشن‌تر (برای سطوح بالاتر)
            focus: "#2F81F7",           // مرز حالت فوکوس (آبی تکنولوژیک)
            soft: "#30363D80",          // مرز خیلی کم‌رنگ و ملایم
          },

          /* ----------------------
             🔵 PRIMARY BRAND COLOR
          -----------------------*/
          primary: {
            DEFAULT: "#2F81F7",         // رنگ اصلی برند
            hover: "#4B94FF",           // حالت هاور
            active: "#1F6FE3",          // حالت Active
            subtle: "#1A2A3F",          // پس‌زمینه بسیار ملایم برای کامپوننت‌ها

            soft: "#2F81F733",          // نسخه بسیار کم‌رنگ (Soft)
            faint: "#2F81F714",         // نسخه خیلی کمرنگ (Faint)
            tint: "#7AB2FF",            // نسخه روشن‌تر (Tint)
          },

          /* ----------------------
             🟣 ACCENT — رنگ فیروزه‌ای نئونی
          -----------------------*/
          accent: {
            DEFAULT: "#14F1D9",         // Accent اصلی
            hover: "#3FF6E4",
            active: "#0CCBB5",
            subtle: "#0CCBB520",

            soft: "#14F1D933",
            faint: "#14F1D914",
            tint: "#63FFE9",
          },

          /* ----------------------
             🟢 STATE COLORS (Success/Warning/Danger/Info)
          -----------------------*/
          state: {
            success: "#21F38A",
            successSoft: "#21F38A33",
            successFaint: "#21F38A14",

            warning: "#FFC857",
            warningSoft: "#FFC85733",
            warningFaint: "#FFC85714",

            danger: "#F85149",
            dangerSoft: "#F8514933",
            dangerFaint: "#F8514914",

            info: "#3ABEF9",
            infoSoft: "#3ABEF933",
            infoFaint: "#3ABEF914",
          },
        },

        /* ☀️ LIGHT MODE — نسخه مخصوص محیط‌های روشن */
        light: {
          /* ----------------------
             🔳 BACKGROUND LAYERS
          -----------------------*/
          bg: {
            base: "#F4F7FA",            // پس‌زمینه کلی نرم و روشن
            surface: "#FFFFFF",         // کارت‌ها و نواحی اصلی
            surfaceAlt: "#F0F3F7",      // سطح ملایم‌تر
            overlay: "#00000020",       // شفاف برای مودال
          },

          /* ----------------------
             ✏ TEXT COLORS
          -----------------------*/
          text: {
            primary: "#1F2328",         // متن اصلی
            primarySoft: "#1F2328CC",    // نسخه ملایم
            secondary: "#4C5561",       // متن ثانویه
            secondarySoft: "#4C5561CC",  // ملایم‌تر
            muted: "#6B7280",           // متن راهنما
            mutedSoft: "#6B728099",     // خیلی کم‌رنگ
            inverted: "#FFFFFF",        // روی پس‌زمینه‌های پررنگ
          },

          /* ----------------------
             ▧ BORDER COLORS
          -----------------------*/
          border: {
            DEFAULT: "#D0D7DE",         // مرز استاندارد
            light: "#E4E8EC",           // مرز روشن‌تر
            focus: "#1F6FEB",           // مرز فوکوس
            soft: "#D0D7DE80",          // نسخه کمرنگ
          },

          /* ----------------------
             🔵 PRIMARY BRAND COLOR
          -----------------------*/
          primary: {
            DEFAULT: "#1F6FEB",
            hover: "#3C82F6",
            active: "#1554C9",
            subtle: "#E7F0FF",

            soft: "#1F6FEB33",
            faint: "#1F6FEB14",
            tint: "#7AB0FF",
          },

          /* ----------------------
             🟣 ACCENT
          -----------------------*/
          accent: {
            DEFAULT: "#14D8C8",
            hover: "#26E4D6",
            active: "#0CB6A7",
            subtle: "#D6FFFA",

            soft: "#14D8C833",
            faint: "#14D8C814",
            tint: "#60FFF5",
          },

          /* ----------------------
             🟢 STATE COLORS
          -----------------------*/
          state: {
            success: "#1CBF6A",
            successSoft: "#1CBF6A33",
            successFaint: "#1CBF6A14",

            warning: "#E7A73C",
            warningSoft: "#E7A73C33",
            warningFaint: "#E7A73C14",

            danger: "#D93025",
            dangerSoft: "#D9302533",
            dangerFaint: "#D9302514",

            info: "#2FA6E9",
            infoSoft: "#2FA6E933",
            infoFaint: "#2FA6E914",
          },
        },
      },

      /* ---------------------------------------------------
         🌈 GRADIENTS — برای دکمه‌ها/CTA/Active states
      ----------------------------------------------------*/
      backgroundImage: {
        "primary-active-dark":
          "linear-gradient(135deg, #14F1D9 0%, #2F81F7 100%)",

        "accent-glow-dark":
          "linear-gradient(180deg, #14F1D9 0%, #0D111700 100%)",

        "primary-active-light":
          "linear-gradient(135deg, #14D8C8 0%, #1F6FEB 100%)",

        "accent-glow-light":
          "linear-gradient(180deg, #14D8C820 0%, #FFFFFF00 100%)",
      },

      /* ---------------------------------------------------
         🕶 SHADOWS — مخصوص کارت‌ها در دارک/لایت
      ----------------------------------------------------*/
      boxShadow: {
        "surface-dark": "0 2px 8px rgba(0,0,0,0.35)",
        "surface-light": "0 2px 8px rgba(0,0,0,0.08)",
      },

      /* ---------------------------------------------------
         🟦 RADIUS SYSTEM
      ----------------------------------------------------*/
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),

  ],
};
