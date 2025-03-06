//src/components/ui/FilterPopup.tsx

import React from 'react';
import { CourseFilterZoneTest } from '../CourseFilterZoneTest';
import { CourseDetails } from '@/app/types';

type filterprops = {
  onClose: () => void;
  isOpen: boolean;
  courses: CourseDetails[];
  setFilteredCourses: React.Dispatch<React.SetStateAction<CourseDetails[]>>;
}

const FilterPopup: React.FC<filterprops> = ({ isOpen, onClose, courses, setFilteredCourses }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">Filtres</h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 font-bold text-xl"
          >
            &times;
          </button>
        </div>
        <CourseFilterZoneTest courses={courses} setFilteredCourses={setFilteredCourses}/>
      </div>
    </div>
  );
};

export default FilterPopup;