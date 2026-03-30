import { GraduationCap } from "lucide-react";

const KuccpsHeader = () => {
  return (
    <header className="w-full bg-primary py-3 px-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary-foreground/10 border-2 border-primary-foreground/30">
          <GraduationCap className="w-7 h-7 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-primary-foreground font-bold text-lg tracking-wide leading-tight">
            KUCCPS
          </h1>
          <p className="text-primary-foreground/70 text-xs">
            Kenya Universities and Colleges Central Placement Service
          </p>
        </div>
      </div>
    </header>
  );
};

export default KuccpsHeader;
