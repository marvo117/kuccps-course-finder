import { useState } from "react";
import { Student } from "@/data/mockData";
import LoginModal from "@/components/LoginModal";
import StudentDashboard from "@/components/StudentDashboard";

const Index = () => {
  const [student, setStudent] = useState<Student | null>(null);

  const handleLogin = (s: Student) => {
    setStudent(s);
  };

  const handleLogout = () => {
    setStudent(null);
  };

  if (student) {
    return <StudentDashboard student={student} onLogout={handleLogout} />;
  }

  return (
    <>
      <LoginModal open={!student} onLogin={handleLogin} />
      <div className="min-h-screen bg-background" />
    </>
  );
};

export default Index;
