import { useState } from "react";
import { Student } from "@/data/mockData";
import PaymentGate from "@/components/PaymentGate";
import LoginModal from "@/components/LoginModal";
import StudentDashboard from "@/components/StudentDashboard";

const Index = () => {
  const [paid, setPaid] = useState(false);
  const [student, setStudent] = useState<Student | null>(null);

  const handlePaymentComplete = () => setPaid(true);
  const handleLogin = (s: Student) => setStudent(s);
  const handleLogout = () => setStudent(null);

  if (student) {
    return <StudentDashboard student={student} onLogout={handleLogout} />;
  }

  if (!paid) {
    return (
      <>
        <PaymentGate open={true} onPaymentComplete={handlePaymentComplete} />
        <div className="min-h-screen bg-background" />
      </>
    );
  }

  return (
    <>
      <LoginModal open={!student} onLogin={handleLogin} />
      <div className="min-h-screen bg-background" />
    </>
  );
};

export default Index;
