export default function AppHeader({
  moduleName = "Quack for Courage Module",
  missionName = "Mission 1 // Awareness Patch v1.0",
}: {
  moduleName?: string;
  missionName?: string;
}) {
  return (
    <header className="w-full pt-10 pb-6 px-6">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-between gap-6">
        {/* Left: Jukanji Logo */}
        <div className="flex justify-center md:justify-start w-full md:w-auto">
          <img
            src="/images/jenn-yugen-jukanji-logo-red.png"
            alt="Jukanji Logo"
            className="w-[120px] md:w-[140px] drop-shadow-[0_6px_12px_rgba(204,65,37,0.25)]"
          />
        </div>
        {/* Center block */}
        <div className="flex flex-col text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-spaceGrotesk tracking-tight">
            <span className="font-semibold text-[#CC1A1A]">Soul</span>
            <span className="font-light text-[#2C2C25]">Ware</span>
            <sup className="text-sm text-[#2C2C25]">™</sup>{" "}
            <span className="text-[#FF6B35] font-semibold">OS</span>
          </h1>
          <h2 className="text-lg md:text-xl font-inter text-[#2C2C25]/90 mt-1">
            {moduleName}
          </h2>
          <p className="text-sm md:text-base font-inter text-[#2C2C25]/70">
            {missionName}
          </p>
        </div>
        {/* Right: placeholder for Clerk avatar */}
        <div className="hidden md:flex w-16 h-16 items-center justify-end">
          {/* Avatar goes here later */}
        </div>
      </div>
    </header>
  );
}
