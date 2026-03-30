import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Student, Course } from "@/data/mockData";

const KUCCPS_BLUE: [number, number, number] = [30, 80, 130];
const HEADER_GRAY = [245, 245, 245];

function addKuccpsHeader(doc: jsPDF, title: string, student: Student) {
  const pageWidth = doc.internal.pageSize.getWidth();

  // Header band
  doc.setFillColor(KUCCPS_BLUE[0], KUCCPS_BLUE[1], KUCCPS_BLUE[2]);
  doc.rect(0, 0, pageWidth, 28, "F");

  // Title text
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.text("KUCCPS", 14, 12);
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.text("Kenya Universities and Colleges Central Placement Service", 14, 18);
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.text(title, 14, 25);

  // Date on right
  doc.setFontSize(7);
  doc.setFont("helvetica", "normal");
  doc.text(`Generated: ${new Date().toLocaleDateString("en-KE")}`, pageWidth - 14, 12, { align: "right" });

  // Student info section
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text("Student Details", 14, 38);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  const infoY = 44;
  doc.text(`Name: ${student.fullName}`, 14, infoY);
  doc.text(`KCSE Index: ${student.indexNumber}`, 14, infoY + 5);
  doc.text(`School: ${student.school}`, 14, infoY + 10);
  doc.text(`Year: ${student.kcseYear}`, pageWidth / 2, infoY);
  doc.text(`Mean Grade: ${student.meanGrade} (${student.meanPoints} pts)`, pageWidth / 2, infoY + 5);
  doc.text(`Aggregate Points: ${student.aggregate}`, pageWidth / 2, infoY + 10);

  // Divider
  doc.setDrawColor(200, 200, 200);
  doc.line(14, infoY + 14, pageWidth - 14, infoY + 14);

  return infoY + 20;
}

function addFooter(doc: jsPDF, pageNum: number) {
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  doc.setDrawColor(200, 200, 200);
  doc.line(14, pageHeight - 15, pageWidth - 14, pageHeight - 15);

  doc.setFontSize(7);
  doc.setTextColor(120, 120, 120);
  doc.text(
    "© " + new Date().getFullYear() + " Kenya Universities and Colleges Central Placement Service (KUCCPS). All rights reserved.",
    14,
    pageHeight - 10
  );
  doc.text(`Page ${pageNum}`, pageWidth - 14, pageHeight - 10, { align: "right" });
  doc.text("This document is system-generated from the KUCCPS Student Portal.", 14, pageHeight - 6);
}

export function generateDegreePDF(student: Student, courses: Course[]) {
  const doc = new jsPDF();
  const startY = addKuccpsHeader(doc, "DEGREE PROGRAMMES — Course Eligibility Report", student);

  // KCSE Results table
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(KUCCPS_BLUE[0], KUCCPS_BLUE[1], KUCCPS_BLUE[2]);
  doc.text("KCSE Results Summary", 14, startY);

  autoTable(doc, {
    startY: startY + 3,
    head: [["#", "Subject", "Grade", "Points"]],
    body: student.results.map((r, i) => [String(i + 1), r.subject, r.grade, String(r.points)]),
    theme: "grid",
    headStyles: { fillColor: KUCCPS_BLUE, fontSize: 8 },
    bodyStyles: { fontSize: 8 },
    margin: { left: 14, right: 14 },
    tableWidth: "auto",
  });

  // Qualified degree courses
  const afterResults = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(KUCCPS_BLUE[0], KUCCPS_BLUE[1], KUCCPS_BLUE[2]);
  doc.text(`Qualified Degree Programmes (${courses.length} found)`, 14, afterResults);

  if (courses.length > 0) {
    autoTable(doc, {
      startY: afterResults + 3,
      head: [["Code", "Programme", "University", "Cutoff 2023", "Cutoff 2022", "Cutoff 2021", "Min. Grade"]],
      body: courses.map((c) => [
        c.code,
        c.name,
        c.university,
        String(c.cutoff2023),
        String(c.cutoff2022),
        String(c.cutoff2021),
        c.minimumGrade,
      ]),
      theme: "grid",
      headStyles: { fillColor: KUCCPS_BLUE, fontSize: 7 },
      bodyStyles: { fontSize: 7 },
      columnStyles: {
        0: { cellWidth: 18 },
        1: { cellWidth: 42 },
        2: { cellWidth: 40 },
      },
      margin: { left: 14, right: 14 },
    });
  } else {
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(150, 0, 0);
    doc.text("No degree programmes matched your current results and cutoff points.", 14, afterResults + 8);
  }

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addFooter(doc, i);
  }

  doc.save(`KUCCPS_Degree_Eligibility_${student.indexNumber}.pdf`);
}

export function generateDiplomaPDF(student: Student, courses: Course[]) {
  const doc = new jsPDF();
  const startY = addKuccpsHeader(doc, "DIPLOMA PROGRAMMES — Course Eligibility Report", student);

  // KCSE Results
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(KUCCPS_BLUE[0], KUCCPS_BLUE[1], KUCCPS_BLUE[2]);
  doc.text("KCSE Results Summary", 14, startY);

  autoTable(doc, {
    startY: startY + 3,
    head: [["#", "Subject", "Grade", "Points"]],
    body: student.results.map((r, i) => [String(i + 1), r.subject, r.grade, String(r.points)]),
    theme: "grid",
    headStyles: { fillColor: KUCCPS_BLUE, fontSize: 8 },
    bodyStyles: { fontSize: 8 },
    margin: { left: 14, right: 14 },
    tableWidth: "auto",
  });

  const afterResults = (doc as any).lastAutoTable.finalY + 10;
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(KUCCPS_BLUE[0], KUCCPS_BLUE[1], KUCCPS_BLUE[2]);
  doc.text(`Qualified Diploma Programmes (${courses.length} found)`, 14, afterResults);

  if (courses.length > 0) {
    autoTable(doc, {
      startY: afterResults + 3,
      head: [["Code", "Programme", "Institution", "Cutoff 2023", "Cutoff 2022", "Cutoff 2021", "Min. Grade"]],
      body: courses.map((c) => [
        c.code,
        c.name,
        c.university,
        String(c.cutoff2023),
        String(c.cutoff2022),
        String(c.cutoff2021),
        c.minimumGrade,
      ]),
      theme: "grid",
      headStyles: { fillColor: KUCCPS_BLUE, fontSize: 7 },
      bodyStyles: { fontSize: 7 },
      columnStyles: {
        0: { cellWidth: 18 },
        1: { cellWidth: 42 },
        2: { cellWidth: 40 },
      },
      margin: { left: 14, right: 14 },
    });
  } else {
    doc.setFontSize(9);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(150, 0, 0);
    doc.text("No diploma programmes matched your current results and cutoff points.", 14, afterResults + 8);
  }

  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    addFooter(doc, i);
  }

  doc.save(`KUCCPS_Diploma_Eligibility_${student.indexNumber}.pdf`);
}
