/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      /* ---------------------------------------------------
         🕹 KEYFRAMES & ANIMATIONS
      ----------------------------------------------------*/
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

      /* ---------------------------------------------------
         🎨 COLORS — DARK & LIGHT MODE
      ----------------------------------------------------*/
      colors: {

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
            primarySoft: "#E6EDF3CC",   // نسخه ملایم‌تر متن اصلی
            secondary: "#8B949E",       // متن ثانویه و اطلاعات کم‌اهمیت
            secondarySoft: "#8B949ECC", // نسخه کمرنگ‌تر متن ثانویه
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
            active: "#1F6FE3",
            DEFAULT: "#2F81F7",         // رنگ اصلی برند
            fill: "#2F81F7",            // برای آیکون‌ها و SVG
            stroke: "#2F81F7",          // برای خطوط دور SVG
            hover: "#4B94FF",           // حالت هاور
            subtle: "#1A2A3F",          // پس‌زمینه بسیار ملایم برای کامپوننت‌ها
            soft: "#2F81F733",          // نسخه بسیار کم‌رنگ (Soft)
            faint: "#2F81F714",         // نسخه خیلی کمرنگ (Faint)
            tint: "#7AB2FF",            // نسخه روشن‌تر (Tint)
          },

          /* ----------------------
             🟣 ACCENT — رنگ فیروزه‌ای نئونی
          -----------------------*/
          accent: {
            DEFAULT: "#14F1D9",
            fill: "#14F1D9",
            stroke: "#14F1D9",
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
            successFill: "#21F38A",
            successStroke: "#21F38A",
            successSoft: "#21F38A33",
            successFaint: "#21F38A14",

            warning: "#FFC857",
            warningFill: "#FFC857",
            warningStroke: "#FFC857",
            warningSoft: "#FFC85733",
            warningFaint: "#FFC85714",

            danger: "#F85149",
            dangerFill: "#F85149",
            dangerStroke: "#F85149",
            dangerSoft: "#F8514933",
            dangerFaint: "#F8514914",

            info: "#3ABEF9",
            infoFill: "#3ABEF9",
            infoStroke: "#3ABEF9",
            infoSoft: "#3ABEF933",
            infoFaint: "#3ABEF914",
          },

          /* ----------------------
             🖌 ICON COLORS — استفاده آسان برای SVG / آیکون‌ها
          -----------------------*/
          icon: {
            primaryFill: "#2F81F7",
            primaryStroke: "#2F81F7",
            accentFill: "#14F1D9",
            accentStroke: "#14F1D9",
            successFill: "#21F38A",
            successStroke: "#21F38A",
            warningFill: "#FFC857",
            warningStroke: "#FFC857",
            dangerFill: "#F85149",
            dangerStroke: "#F85149",
            infoFill: "#3ABEF9",
            infoStroke: "#3ABEF9",
          },
        },

        /* ☀️ LIGHT MODE — نسخه مخصوص محیط‌های روشن */
        light: {
          bg: {
            base: "#F4F7FA",
            surface: "#FFFFFF",
            surfaceAlt: "#F0F3F7",
            overlay: "#00000020",
          },
          text: {
            primary: "#1F2328",
            primarySoft: "#1F2328CC",
            secondary: "#4C5561",
            secondarySoft: "#4C5561CC",
            muted: "#6B7280",
            mutedSoft: "#6B728099",
            inverted: "#FFFFFF",
          },
          border: {
            Brand: "#1F6FEB",
            Accent: "#14D8C8",
            DEFAULT: "#D0D7DE",
            light: "#E4E8EC",
            focus: "#1F6FEB",
            soft: "#D0D7DE80",
          },
          primary: {
            DEFAULT: "#1F6FEB",
            fill: "#1F6FEB",
            stroke: "#1F6FEB",
            hover: "#3C82F6",
            active: "#1554C9",
            activeLight: "#3C82F6",     // اضافه شد
            subtle: "#E7F0FF",
            soft: "#1F6FEB33",
            faint: "#1F6FEB14",
            tint: "#7AB0FF",
          },
          accent: {
            DEFAULT: "#14D8C8",
            fill: "#14D8C8",
            stroke: "#14D8C8",
            hover: "#26E4D6",
            active: "#0CB6A7",
            subtle: "#D6FFFA",
            soft: "#14D8C833",
            faint: "#14D8C814",
            tint: "#60FFF5",
          },
          state: {
            success: "#1CBF6A",
            successFill: "#1CBF6A",
            successStroke: "#1CBF6A",
            successSoft: "#1CBF6A33",
            successFaint: "#1CBF6A14",
            warning: "#E7A73C",
            warningFill: "#E7A73C",
            warningStroke: "#E7A73C",
            warningSoft: "#E7A73C33",
            warningFaint: "#E7A73C14",
            danger: "#D93025",
            dangerFill: "#D93025",
            dangerStroke: "#D93025",
            dangerSoft: "#D9302533",
            dangerFaint: "#D9302514",
            info: "#2FA6E9",
            infoFill: "#2FA6E9",
            infoStroke: "#2FA6E9",
            infoSoft: "#2FA6E933",
            infoFaint: "#2FA6E914",
          },
          icon: {
            primaryFill: "#1F6FEB",
            primaryStroke: "#1F6FEB",
            accentFill: "#14D8C8",
            accentStroke: "#14D8C8",
            successFill: "#1CBF6A",
            successStroke: "#1CBF6A",
            warningFill: "#E7A73C",
            warningStroke: "#E7A73C",
            dangerFill: "#D93025",
            dangerStroke: "#D93025",
            infoFill: "#2FA6E9",
            infoStroke: "#2FA6E9",
          },
        },
      },

      /* ---------------------------------------------------
         🌈 GRADIENTS — برای دکمه‌ها/CTA/Active states
      ----------------------------------------------------*/
      backgroundImage: {
        "brand-main":
          "linear-gradient(98deg, #2F81F7 30%, #14F1D9 100%)",
        "brand-reverse":
          "linear-gradient(98deg, #14F1D9 0%, #2F81F7 70%)",
        "brand-soft":
          "linear-gradient(135deg, rgba(47,129,247,0.25), rgba(20,241,217,0.25))",
        "brand-dark":
          "linear-gradient(135deg, #1A2A3F 0%, #0CCBB5 100%)",
        "brand-light":
          "linear-gradient(135deg, #E7F0FF 0%, #D6FFFA 100%)",
      },

      /* ---------------------------------------------------
         🕶 SHADOWS — مخصوص کارت‌ها در دارک/لایت
      ----------------------------------------------------*/
      boxShadow: {
        "brand-glow":
          "0 0 0 0 rgba(0,0,0,0), 0 8px 30px rgba(47,129,247,0.45), 0 4px 20px rgba(20,241,217,0.35)",
        "brand-glow-strong":
          "0 10px 40px rgba(47,129,247,0.6), 0 6px 30px rgba(20,241,217,0.5)",
        "brand-glow-soft":
          "0 4px 20px rgba(47,129,247,0.25), 0 2px 12px rgba(20,241,217,0.2)",
        "accent-glow":
          "0 0 25px rgba(20,241,217,0.6)",
        "primary-glow":
          "0 0 25px rgba(47,129,247,0.6)",
      },

      /* ---------------------------------------------------
         🟦 RADIUS SYSTEM
      ----------------------------------------------------*/
      borderRadius: {
        "xl": "14px",
        "2xl": "20px",
      },
    },
  },

  plugins: [
    require("tailwind-scrollbar")({ nocompatible: true }),
    require('tailwind-scrollbar-hide'),
  ],
};
