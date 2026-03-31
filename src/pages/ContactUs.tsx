import KuccpsHeader from "@/components/KuccpsHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Globe } from "lucide-react";
import kuccpsLogo from "@/assets/kuccps-logo.png";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <KuccpsHeader />

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-3 animate-fade-in-up">
          <img src={kuccpsLogo} alt="KUCCPS Logo" width={80} height={80} className="mx-auto object-contain" />
          <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
          <p className="text-muted-foreground text-sm">Get in touch with KUCCPS for any inquiries or support.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { icon: Phone, title: "Phone", lines: ["+254 020 5137400", "+254 713 924 444"] },
            { icon: Mail, title: "Email", lines: ["info@kuccps.ac.ke"] },
            { icon: MapPin, title: "Address", lines: ["P.O. Box 105166-00101", "Nairobi, Kenya", "ACK Garden Annex, 1st Ngong Avenue"] },
            { icon: Globe, title: "Website", lines: ["www.kuccps.net"] },
          ].map((item, i) => (
            <Card key={i} className={`animate-fade-in-up animate-delay-${(i + 1) * 100}`}>
              <CardContent className="p-5 flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  {item.lines.map((l) => (
                    <p key={l} className="text-sm text-muted-foreground">{l}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <footer className="text-center py-6 text-muted-foreground text-xs mt-8 border-t">
        <p>© {new Date().getFullYear()} Kenya Universities and Colleges Central Placement Service (KUCCPS). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;
