import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseCard from "./CourseCard";
import { Course } from "../types";
import "../styles/CoursesList.scss";

interface CoursesListProps {
  selectedTag: string | null;
}

const CoursesList: React.FC<CoursesListProps> = ({ selectedTag }) => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    axios
      .get("https://logiclike.com/docs/courses.json")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const filteredCourses = selectedTag
    ? courses.filter((course) => course.tags.includes(selectedTag))
    : courses;

  return (
    <div className="courses-list">
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
