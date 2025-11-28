export default function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen relative bg-gradient-to-br from-[#F8F3E8] to-[#D9CBB0] flex flex-col">
      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
