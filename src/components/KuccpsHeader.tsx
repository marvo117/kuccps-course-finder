import { Phone, Mail } from "lucide-react";
import kuccpsLogo from "@/assets/kuccps-logo.png";

const navItems = ["Home", "About Us", "Portals", "Downloads", "Opportunities", "FAQs", "Contact Us", "Student's Portal"];

const KuccpsHeader = () => {
  return (
    <header className="w-full">
      {/* Top contact bar - dark navy */}
      <div className="bg-primary text-primary-foreground text-xs py-1.5 px-4">
        <div className="max-w-6xl mx-auto flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
            +254 020 5137400 / +254 713 924 444
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
            info@kuccps.ac.ke
          </span>
        </div>
      </div>

      {/* Logo + Title */}
      <div className="bg-card py-3 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto flex items-center gap-4">
          <img
            src={kuccpsLogo}
            alt="KUCCPS Logo"
            width={70}
            height={70}
            className="object-contain"
          />
          <h1 className="text-secondary font-bold text-lg sm:text-xl tracking-wide leading-tight">
            Kenya Universities and Colleges Central Placement Service
          </h1>
        </div>
      </div>

      {/* Navigation bar */}
      <nav className="bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto flex items-center gap-0 overflow-x-auto">
          {navItems.map((item) => (
            <span
              key={item}
              className={`px-3 py-2.5 text-xs font-medium whitespace-nowrap cursor-pointer transition-colors hover:bg-secondary ${
                item === "Student's Portal" ? "bg-secondary" : ""
              }`}
            >
              {item}
            </span>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default KuccpsHeader;
