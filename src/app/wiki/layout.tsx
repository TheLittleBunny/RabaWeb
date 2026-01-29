import Sidebar from "@/components/Sidebar";

export default function WikiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ display: "flex", minHeight: "calc(100vh - var(--header-height))" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "2rem", width: "100%" }}>
        <div style={{ maxWidth: "var(--max-width)", margin: "0 auto" }}>
          {children}
        </div>
      </main>
    </div>
  );
}
