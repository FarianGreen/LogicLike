import React from "react";
import "../styles/CourseCard.scss";

interface CourseCardProps {
  course: {
    id: string;
    name: string;
    image: string;
    bgColor: string;
    tags: string[];
  };
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="course-card" style={{ backgroundColor: course.bgColor }}>
      <img src={course.image} alt={course.name} className="course-image" />
      <div className="course-details">
        <h3 className="course-title">{course.name}</h3>
      </div>
    </div>
  );
};

export default CourseCard;
