"use client";

import { usePathname } from "next/navigation";
import { AdminProfile } from "@/lib/admin-profile";

const COMING_SOON = true;

export default function LayoutMain({
  children,
}: {
  children: React.ReactNode;
  adminProfile: AdminProfile | null;
}) {
  const pathname = usePathname();
  const isAdminPanel = pathname?.startsWith("/admin");

  if (isAdminPanel) {
    return <>{children}</>;
  }

  if (COMING_SOON) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
    </div>
  );
}
