import { defineConfig } from "@lingui/cli";
import { formatter } from "@lingui/format-po";

export default defineConfig({
  locales: ["en", "de"],
  sourceLocale: "de",
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: ["."],
      exclude: [
        "**/node_modules/**",
        "**/.next/**",
        "**/dist/**",
        "src/locales/**",
      ],
    },
  ],
  format: formatter({ lineNumbers: false }),
});
