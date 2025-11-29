export default function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="
        min-h-screen
        relative
        bg-gradient-to-br
        from-[#ECE3D4]
        to-[#C7B79E]
        flex
        flex-col
      "
    >
      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
