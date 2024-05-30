import React from 'react';
import '../styles/Filter.scss';

interface FilterProps {
  tags: string[];
  selectedTag: string | null;
  onTagSelect: (tag: string | null) => void;
}

const Filter: React.FC<FilterProps> = ({ tags, selectedTag, onTagSelect }) => {
  return (
    <div className="filter">
      <button
        className={`filter-button ${selectedTag === null ? 'selected' : ''}`}
        onClick={() => onTagSelect(null)}
      >
        Все темы
      </button>
      {tags.map(tag => (
        <button
          key={tag}
          className={`filter-button ${selectedTag === tag ? 'selected' : ''}`}
          onClick={() => onTagSelect(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Filter;
