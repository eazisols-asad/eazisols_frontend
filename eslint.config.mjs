// eslint.config.js
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname  = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// 1) Inherit Next.js core‑web‑vitals preset
// 2) Phir apni custom rules override/add kar dein
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),

  // 👇 yahan se aapke overrides start hote hain
  {
    rules: {
      // `'` wali error ko sirf warning bana do (ya "off")
      "react/no-unescaped-entities": "warn",

      // <img> ke liye bhi sirf warning
      "@next/next/no-img-element": "warn",

      // missing‑dependency ko warning ya off
      "react-hooks/exhaustive-deps": "warn",
    },
  },
];

export default eslintConfig;
