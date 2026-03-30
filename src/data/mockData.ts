export interface Student {
  indexNumber: string;
  kcseYear: string;
  kcpeIndex: string;
  fullName: string;
  school: string;
  results: SubjectResult[];
  meanGrade: string;
  meanPoints: number;
  aggregate: number;
}

export interface SubjectResult {
  subject: string;
  grade: string;
  points: number;
}

export interface Course {
  code: string;
  name: string;
  university: string;
  category: "degree" | "diploma";
  cluster: string;
  cutoff2023: number;
  cutoff2022: number;
  cutoff2021: number;
  requiredSubjects: string[];
  minimumGrade: string;
}

const gradePoints: Record<string, number> = {
  "A": 12, "A-": 11, "B+": 10, "B": 9, "B-": 8,
  "C+": 7, "C": 6, "C-": 5, "D+": 4, "D": 3, "D-": 2, "E": 1,
};

export const mockStudents: Student[] = [
  {
    indexNumber: "11200301001",
    kcseYear: "2024",
    kcpeIndex: "30100101",
    fullName: "WANJIKU GRACE NJERI",
    school: "ALLIANCE GIRLS HIGH SCHOOL",
    results: [
      { subject: "English", grade: "A-", points: 11 },
      { subject: "Kiswahili", grade: "B+", points: 10 },
      { subject: "Mathematics", grade: "A", points: 12 },
      { subject: "Biology", grade: "A-", points: 11 },
      { subject: "Chemistry", grade: "A", points: 12 },
      { subject: "Physics", grade: "B+", points: 10 },
      { subject: "History", grade: "A-", points: 11 },
    ],
    meanGrade: "A-",
    meanPoints: 11,
    aggregate: 77,
  },
  {
    indexNumber: "20100401015",
    kcseYear: "2024",
    kcpeIndex: "40100215",
    fullName: "OCHIENG BRIAN OTIENO",
    school: "MARANDA HIGH SCHOOL",
    results: [
      { subject: "English", grade: "B+", points: 10 },
      { subject: "Kiswahili", grade: "B", points: 9 },
      { subject: "Mathematics", grade: "B+", points: 10 },
      { subject: "Biology", grade: "B", points: 9 },
      { subject: "Chemistry", grade: "B+", points: 10 },
      { subject: "Physics", grade: "B", points: 9 },
      { subject: "Geography", grade: "B+", points: 10 },
    ],
    meanGrade: "B+",
    meanPoints: 10,
    aggregate: 67,
  },
  {
    indexNumber: "30200501020",
    kcseYear: "2024",
    kcpeIndex: "50200320",
    fullName: "KIPCHOGE EMMANUEL KIBET",
    school: "MOI HIGH SCHOOL KABARAK",
    results: [
      { subject: "English", grade: "B", points: 9 },
      { subject: "Kiswahili", grade: "B-", points: 8 },
      { subject: "Mathematics", grade: "C+", points: 7 },
      { subject: "Biology", grade: "B", points: 9 },
      { subject: "Chemistry", grade: "B-", points: 8 },
      { subject: "Agriculture", grade: "B+", points: 10 },
      { subject: "CRE", grade: "B", points: 9 },
    ],
    meanGrade: "B",
    meanPoints: 9,
    aggregate: 60,
  },
];

export const mockCourses: Course[] = [
  // Degrees
  { code: "1013101", name: "Bachelor of Medicine and Surgery", university: "University of Nairobi", category: "degree", cluster: "Biological Sciences", cutoff2023: 44.0, cutoff2022: 43.5, cutoff2021: 43.0, requiredSubjects: ["Biology", "Chemistry", "Mathematics", "English"], minimumGrade: "A-" },
  { code: "1013102", name: "Bachelor of Pharmacy", university: "University of Nairobi", category: "degree", cluster: "Biological Sciences", cutoff2023: 42.0, cutoff2022: 41.5, cutoff2021: 41.0, requiredSubjects: ["Biology", "Chemistry", "Mathematics"], minimumGrade: "B+" },
  { code: "1023201", name: "Bachelor of Laws (LLB)", university: "Moi University", category: "degree", cluster: "Humanities", cutoff2023: 40.0, cutoff2022: 39.5, cutoff2021: 39.0, requiredSubjects: ["English", "Kiswahili"], minimumGrade: "B+" },
  { code: "1013301", name: "Bachelor of Engineering (Civil)", university: "University of Nairobi", category: "degree", cluster: "Engineering", cutoff2023: 39.0, cutoff2022: 38.5, cutoff2021: 38.0, requiredSubjects: ["Mathematics", "Physics", "Chemistry"], minimumGrade: "B+" },
  { code: "1033301", name: "Bachelor of Engineering (Electrical)", university: "JKUAT", category: "degree", cluster: "Engineering", cutoff2023: 38.0, cutoff2022: 37.5, cutoff2021: 37.0, requiredSubjects: ["Mathematics", "Physics"], minimumGrade: "B+" },
  { code: "1023101", name: "Bachelor of Science (Computer Science)", university: "Moi University", category: "degree", cluster: "Mathematics", cutoff2023: 36.0, cutoff2022: 35.5, cutoff2021: 35.0, requiredSubjects: ["Mathematics", "English"], minimumGrade: "B" },
  { code: "1013401", name: "Bachelor of Commerce", university: "University of Nairobi", category: "degree", cluster: "Business", cutoff2023: 34.0, cutoff2022: 33.5, cutoff2021: 33.0, requiredSubjects: ["Mathematics", "English"], minimumGrade: "B" },
  { code: "1043101", name: "Bachelor of Education (Science)", university: "Kenyatta University", category: "degree", cluster: "Education", cutoff2023: 32.0, cutoff2022: 31.5, cutoff2021: 31.0, requiredSubjects: ["English"], minimumGrade: "B-" },
  { code: "1043201", name: "Bachelor of Education (Arts)", university: "Kenyatta University", category: "degree", cluster: "Education", cutoff2023: 30.0, cutoff2022: 29.5, cutoff2021: 29.0, requiredSubjects: ["English", "Kiswahili"], minimumGrade: "C+" },
  { code: "1033401", name: "Bachelor of Science (Agriculture)", university: "JKUAT", category: "degree", cluster: "Agriculture", cutoff2023: 30.0, cutoff2022: 29.0, cutoff2021: 28.5, requiredSubjects: ["Biology", "Chemistry"], minimumGrade: "B-" },
  { code: "1053101", name: "Bachelor of Nursing", university: "Maseno University", category: "degree", cluster: "Biological Sciences", cutoff2023: 36.0, cutoff2022: 35.0, cutoff2021: 34.5, requiredSubjects: ["Biology", "Chemistry", "English"], minimumGrade: "B" },
  { code: "1013501", name: "Bachelor of Architecture", university: "University of Nairobi", category: "degree", cluster: "Engineering", cutoff2023: 38.0, cutoff2022: 37.0, cutoff2021: 36.5, requiredSubjects: ["Mathematics", "Physics"], minimumGrade: "B+" },
  // Diplomas
  { code: "4011101", name: "Diploma in Clinical Medicine", university: "KMTC", category: "diploma", cluster: "Health Sciences", cutoff2023: 28.0, cutoff2022: 27.0, cutoff2021: 26.5, requiredSubjects: ["Biology", "Chemistry", "English"], minimumGrade: "C" },
  { code: "4021101", name: "Diploma in Nursing", university: "KMTC", category: "diploma", cluster: "Health Sciences", cutoff2023: 26.0, cutoff2022: 25.5, cutoff2021: 25.0, requiredSubjects: ["Biology", "Chemistry", "English"], minimumGrade: "C" },
  { code: "4031101", name: "Diploma in Business Management", university: "Kenya Polytechnic", category: "diploma", cluster: "Business", cutoff2023: 22.0, cutoff2022: 21.5, cutoff2021: 21.0, requiredSubjects: ["Mathematics", "English"], minimumGrade: "C-" },
  { code: "4041101", name: "Diploma in Information Technology", university: "Technical University of Kenya", category: "diploma", cluster: "Technology", cutoff2023: 24.0, cutoff2022: 23.5, cutoff2021: 23.0, requiredSubjects: ["Mathematics"], minimumGrade: "C" },
  { code: "4051101", name: "Diploma in Mechanical Engineering", university: "Technical University of Mombasa", category: "diploma", cluster: "Engineering", cutoff2023: 25.0, cutoff2022: 24.5, cutoff2021: 24.0, requiredSubjects: ["Mathematics", "Physics"], minimumGrade: "C" },
  { code: "4061101", name: "Diploma in Agriculture", university: "Egerton University", category: "diploma", cluster: "Agriculture", cutoff2023: 20.0, cutoff2022: 19.5, cutoff2021: 19.0, requiredSubjects: ["Biology"], minimumGrade: "C-" },
];

export function getQualifiedCourses(student: Student): Course[] {
  return mockCourses.filter((course) => {
    // Check if student aggregate meets cutoff (use 2023 cutoff)
    if (student.aggregate < course.cutoff2023) return false;

    // Check required subjects - student must have taken them
    const studentSubjects = student.results.map((r) => r.subject);
    const hasRequired = course.requiredSubjects.every((req) =>
      studentSubjects.includes(req)
    );
    if (!hasRequired) return false;

    // Check minimum grade
    const minPoints = gradePoints[course.minimumGrade] || 0;
    if (student.meanPoints < minPoints) return false;

    return true;
  });
}

export function findStudent(indexNumber: string, kcseYear: string, kcpeIndex: string): Student | null {
  return mockStudents.find(
    (s) => s.indexNumber === indexNumber && s.kcseYear === kcseYear && s.kcpeIndex === kcpeIndex
  ) || null;
}
