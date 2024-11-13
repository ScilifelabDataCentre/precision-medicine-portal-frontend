export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="kiarva-page h-screen flex flex-col overflow-hidden h-screen overflow-hidden w-screen relative -ml-[50vw] left-1/2">
      <main className="flex-1 overflow-hidden">
        <section className="outer w-[100%] h-[100%] overflow-hidden">
          {children}
        </section>
      </main>
    </div>
  );
}
