import { Course } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

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

export default CourseTable;
