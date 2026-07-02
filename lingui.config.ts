import { defineConfig } from "@lingui/cli";
import { formatter } from "@lingui/format-po";

export default defineConfig({
  locales: ["en", "de"],
  sourceLocale: "de",
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      // Sucht überall im Projekt nach .ts, .tsx, .js, .jsx Dateien
      include: ["."],
      // Ignoriert Ordner, in denen ohnehin kein Quellcode von dir liegt
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
