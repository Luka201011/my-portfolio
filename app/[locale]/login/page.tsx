"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Cookie für 30 Tage setzen
    document.cookie = `site_access=${code}; path=/; max-age=${60 * 60 * 24 * 30}`;
    router.push("/");
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Zugangscode eingeben"
      />
      <button type="submit">Entsperren</button>
    </form>
  );
}
