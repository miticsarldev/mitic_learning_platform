import React from 'react';
import { FilterZone } from '../FilterZone';

type filterprops = {
    onClose: () => void;
    isOpen: boolean;
}

const FilterPopup: React.FC<filterprops> = ({ isOpen, onClose }) => {
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
        <FilterZone />
      </div>
    </div>
  );
};

export default FilterPopup;
