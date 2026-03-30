import kuccpsLogo from "@/assets/kuccps-logo.png";

const KuccpsHeader = () => {
  return (
    <header className="w-full bg-card py-2 px-4 shadow-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center gap-3">
        <img
          src={kuccpsLogo}
          alt="KUCCPS - Kenya Universities and Colleges Central Placement Service"
          width={60}
          height={60}
          className="object-contain"
        />
        <div className="hidden sm:block">
          <h1 className="text-foreground font-bold text-base tracking-wide leading-tight">
            Kenya Universities and Colleges Central Placement Service
          </h1>
          <p className="text-muted-foreground text-xs">
            Student Course Eligibility Portal
          </p>
        </div>
      </div>
    </header>
  );
};

export default KuccpsHeader;
