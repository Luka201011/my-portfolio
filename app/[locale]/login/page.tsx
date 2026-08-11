"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Trans } from "@lingui/react/macro";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cookie für 10 Tage setzen
    document.cookie = `site_access=${code}; path=/; max-age=${60 * 60 * 24 * 10}`;
    router.push("/");
    router.refresh();
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center gap-2"
      >
        <input
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Zugangscode eingeben"
        />
        <button type="submit">
          <Trans>Entsperren</Trans>
        </button>
      </form>
    </div>
  );
}
