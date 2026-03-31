import KuccpsHeader from "@/components/KuccpsHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, GraduationCap, FileText, CheckCircle } from "lucide-react";
import kuccpsLogo from "@/assets/kuccps-logo.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <KuccpsHeader />

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        <div className="text-center space-y-4 animate-fade-in-up">
          <img src={kuccpsLogo} alt="KUCCPS Logo" width={100} height={100} className="mx-auto object-contain" />
          <h2 className="text-2xl font-bold text-foreground">About KUCCPS Course Checker</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The KUCCPS Course Checker is a student service portal designed to help Kenya Certificate of Secondary Education (KCSE) graduates discover university and college courses they qualify for, based on their examination results and official KUCCPS cutoff points.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="animate-fade-in-up animate-delay-100">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <GraduationCap className="w-5 h-5 text-secondary" />
                How It Works
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>1. <strong>Login</strong> — Enter your KCSE Index Number, KCSE Year, and KCPE Index Number to access your results.</p>
              <p>2. <strong>View Results</strong> — See your full KCSE results including grades, points, and mean grade summary.</p>
              <p>3. <strong>Pay Access Fee</strong> — Pay a small fee of KES 100 via M-Pesa to unlock the course checker.</p>
              <p>4. <strong>Check Courses</strong> — View all degree and diploma courses you qualify for, with cutoff point comparisons from 2021–2023.</p>
              <p>5. <strong>Download Reports</strong> — Download official PDF reports for your qualified degree and diploma courses.</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animate-delay-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Shield className="w-5 h-5 text-secondary" />
                Our Mission
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>We aim to simplify the university and college placement process by providing students with accurate, data-driven course eligibility information.</p>
              <p>Our system compares your KCSE performance against historical cutoff points from KUCCPS, helping you make informed decisions about your higher education journey.</p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animate-delay-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="w-5 h-5 text-secondary" />
                Who Can Use This Portal
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <p>This portal is available to all KCSE graduates who wish to explore their course options at Kenyan universities and colleges.</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Current KCSE candidates awaiting placement</li>
                <li>Past candidates seeking course transfer options</li>
                <li>Parents and guardians helping students with course selection</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animate-delay-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="w-5 h-5 text-secondary" />
                Features
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <ul className="space-y-2">
                {[
                  "Secure login with KCSE credentials",
                  "Full KCSE results display with grade analysis",
                  "Course eligibility matching against KUCCPS cutoffs",
                  "Historical cutoff comparison (2021–2023)",
                  "Downloadable PDF eligibility reports",
                  "Degree and diploma course listings",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="text-center py-6 text-muted-foreground text-xs mt-8 border-t">
        <p>© {new Date().getFullYear()} Kenya Universities and Colleges Central Placement Service (KUCCPS). All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
