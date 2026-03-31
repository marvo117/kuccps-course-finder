import KuccpsHeader from "@/components/KuccpsHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import kuccpsLogo from "@/assets/kuccps-logo.png";

const faqs = [
  { q: "How do I login to the portal?", a: "Use your KCSE Index Number, KCSE Year, and KCPE Index Number (as your password) to log in. These are the same credentials used on the official KUCCPS portal." },
  { q: "How much does it cost to check courses?", a: "The service costs KES 100, payable via M-Pesa. You will be prompted to pay when you click 'Check Courses I Qualify For' after viewing your results." },
  { q: "How do I make the payment?", a: "Go to M-Pesa on your phone, select 'Send Money', enter the number 0780911606, enter KES 100, confirm with your PIN, then enter the M-Pesa confirmation code on the portal." },
  { q: "What courses will I see?", a: "You will see all degree and diploma courses offered in Kenyan universities and colleges that match your KCSE results, based on the official KUCCPS cutoff points from 2021–2023." },
  { q: "Can I download my course eligibility report?", a: "Yes! After checking your courses, you can download separate PDF reports for degree and diploma courses. These reports include your bio-data, results, and full course listings." },
  { q: "Is my data secure?", a: "Yes. We do not store your personal information beyond the current session. Your payment details are processed securely via M-Pesa." },
  { q: "What if I entered wrong credentials?", a: "You will see an error message. Double-check your KCSE Index Number, year, and KCPE Index Number and try again." },
  { q: "Can I use this portal on my phone?", a: "Absolutely. The portal is fully responsive and works on all devices including smartphones, tablets, and computers." },
];

const FAQs = () => {
  return (
    <div className="min-h-screen bg-background">
      <KuccpsHeader />

      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="text-center space-y-3 animate-fade-in-up">
          <img src={kuccpsLogo} alt="KUCCPS Logo" width={80} height={80} className="mx-auto object-contain" />
          <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
          <p className="text-muted-foreground text-sm">Find answers to common questions about using the KUCCPS Course Checker portal.</p>
        </div>

        <Card className="animate-fade-in-up animate-delay-200">
          <CardContent className="pt-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-sm text-left">
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-secondary shrink-0" />
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground pl-6">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>

      <footer className="text-center py-6 text-muted-foreground text-xs mt-8 border-t">
        <p>© {new Date().getFullYear()} Kenya Universities and Colleges Central Placement Service (KUCCPS). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FAQs;
