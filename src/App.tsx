import React, { useEffect, useState } from "react";
import axios from "axios";
import CoursesList from "./components/CoursesList";
import Filter from "./components/Filter";
import "./styles/App.scss";

const App: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("https://logiclike.com/docs/courses.json")
      .then((response) => {
        const allTags = new Set<string>();
        response.data.forEach((course: any) => {
          course.tags.forEach((tag: string) => allTags.add(tag));
        });
        setTags(Array.from(allTags));
      })
      .catch((error) => {
        console.error("Error fetching tags:", error);
      });
  }, []);

  return (
    <div className="app">
      <div className="filter-container">
        <Filter
          tags={tags}
          selectedTag={selectedTag}
          onTagSelect={setSelectedTag}
        />
      </div>
      <div className="courses-container">
        <CoursesList selectedTag={selectedTag} />
      </div>
    </div>
  );
};

export default App;
