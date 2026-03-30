import { useState } from "react";
import { Student, getQualifiedCourses, Course } from "@/data/mockData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Search, LogOut, User, BookOpen, TrendingUp, Download, FileText } from "lucide-react";
import KuccpsHeader from "./KuccpsHeader";
import { generateDegreePDF, generateDiplomaPDF } from "@/lib/generatePDF";

interface StudentDashboardProps {
  student: Student;
  onLogout: () => void;
}

const gradeColor = (grade: string) => {
  if (grade.startsWith("A")) return "bg-success text-success-foreground";
  if (grade.startsWith("B")) return "bg-primary text-primary-foreground";
  if (grade.startsWith("C")) return "bg-warning text-warning-foreground";
  return "bg-muted text-muted-foreground";
};

const StudentDashboard = ({ student, onLogout }: StudentDashboardProps) => {
  const [showCourses, setShowCourses] = useState(false);
  const [qualifiedCourses, setQualifiedCourses] = useState<Course[]>([]);
  const [courseTab, setCourseTab] = useState("degree");

  const handleCheckCourses = () => {
    const courses = getQualifiedCourses(student);
    setQualifiedCourses(courses);
    setShowCourses(true);
  };

  const degrees = qualifiedCourses.filter((c) => c.category === "degree");
  const diplomas = qualifiedCourses.filter((c) => c.category === "diploma");

  const handleDownloadDegree = () => generateDegreePDF(student, degrees);
  const handleDownloadDiploma = () => generateDiplomaPDF(student, diplomas);

  return (
    <div className="min-h-screen bg-background">
      <KuccpsHeader />

      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-primary-foreground/10 flex items-center justify-center border-2 border-primary-foreground/20">
                <User className="w-7 h-7" />
              </div>
              <div>
                <p className="text-primary-foreground/70 text-sm">Welcome back,</p>
                <h2 className="text-xl sm:text-2xl font-bold tracking-wide">{student.fullName}</h2>
                <p className="text-primary-foreground/70 text-sm">{student.school}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={onLogout}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <LogOut className="w-4 h-4 mr-1" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-4 space-y-6 mt-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-muted-foreground text-xs uppercase tracking-wide">Mean Grade</p>
              <p className="text-3xl font-bold text-primary mt-1">{student.meanGrade}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-muted-foreground text-xs uppercase tracking-wide">Aggregate</p>
              <p className="text-3xl font-bold text-primary mt-1">{student.aggregate}</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <p className="text-muted-foreground text-xs uppercase tracking-wide">Subjects</p>
              <p className="text-3xl font-bold text-primary mt-1">{student.results.length}</p>
            </CardContent>
          </Card>
        </div>

        {/* KCSE Results */}
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <BookOpen className="w-5 h-5 text-primary" />
              KCSE {student.kcseYear} Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8">#</TableHead>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-center">Grade</TableHead>
                  <TableHead className="text-center">Points</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {student.results.map((result, idx) => (
                  <TableRow key={result.subject}>
                    <TableCell className="text-muted-foreground">{idx + 1}</TableCell>
                    <TableCell className="font-medium">{result.subject}</TableCell>
                    <TableCell className="text-center">
                      <Badge className={gradeColor(result.grade)}>{result.grade}</Badge>
                    </TableCell>
                    <TableCell className="text-center font-semibold">{result.points}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Check Courses Button */}
        {!showCourses && (
          <div className="flex justify-center">
            <Button size="lg" onClick={handleCheckCourses} className="px-8 py-6 text-lg shadow-lg">
              <Search className="w-5 h-5 mr-2" />
              Check Courses I Qualify For
            </Button>
          </div>
        )}

        {/* Qualified Courses */}
        {showCourses && (
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Courses You Qualify For ({qualifiedCourses.length} found)
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={handleDownloadDegree}>
                    <Download className="w-4 h-4 mr-1" />
                    <FileText className="w-3 h-3 mr-1" />
                    Degree PDF
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleDownloadDiploma}>
                    <Download className="w-4 h-4 mr-1" />
                    <FileText className="w-3 h-3 mr-1" />
                    Diploma PDF
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {qualifiedCourses.length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  No matching courses found based on your results and current cutoff points.
                </p>
              ) : (
                <Tabs value={courseTab} onValueChange={setCourseTab}>
                  <TabsList className="mb-4">
                    <TabsTrigger value="degree">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      Degrees ({degrees.length})
                    </TabsTrigger>
                    <TabsTrigger value="diploma">
                      <BookOpen className="w-4 h-4 mr-1" />
                      Diplomas ({diplomas.length})
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="degree">
                    <CourseTable courses={degrees} />
                  </TabsContent>

                  <TabsContent value="diploma">
                    <CourseTable courses={diplomas} />
                  </TabsContent>
                </Tabs>
              )}
            </CardContent>
          </Card>
        )}
      </div>

      <footer className="text-center py-6 text-muted-foreground text-xs mt-8 border-t">
        <p>© {new Date().getFullYear()} Kenya Universities and Colleges Central Placement Service (KUCCPS). All rights reserved.</p>
        <p className="mt-1">P.O. Box 105166-00101, Nairobi | Tel: +254 020 5137400 / +254 713 924 444 | Email: info@kuccps.ac.ke</p>
        <p className="mt-1">www.kuccps.net</p>
      </footer>
    </div>
  );
};

const CourseTable = ({ courses }: { courses: Course[] }) => (
  <div className="overflow-x-auto">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Code</TableHead>
          <TableHead>Course Name</TableHead>
          <TableHead>University / Institution</TableHead>
          <TableHead className="text-center">Cutoff 2023</TableHead>
          <TableHead className="text-center">Cutoff 2022</TableHead>
          <TableHead className="text-center">Cutoff 2021</TableHead>
          <TableHead className="text-center">Min. Grade</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((course) => (
          <TableRow key={course.code}>
            <TableCell className="font-mono text-xs">{course.code}</TableCell>
            <TableCell className="font-medium">{course.name}</TableCell>
            <TableCell className="text-muted-foreground text-sm">{course.university}</TableCell>
            <TableCell className="text-center font-semibold">{course.cutoff2023}</TableCell>
            <TableCell className="text-center text-muted-foreground">{course.cutoff2022}</TableCell>
            <TableCell className="text-center text-muted-foreground">{course.cutoff2021}</TableCell>
            <TableCell className="text-center">
              <Badge variant="outline">{course.minimumGrade}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default StudentDashboard;
