// postcss.config.js  ← プロジェクトのルートにあるやつ
//import tailwindcss from "@tailwindcss/postcss";
//import autoprefixer from "autoprefixer";

import autoprefixer from "autoprefixer";

export default {
  plugins: {
    '@tailwindcss/postcss':{},
    autoprefixer:{},
  },
};
