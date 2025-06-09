import React from 'react';

interface RestoreModalProps {
  onFileSelect: (file: File) => void;
  onCancel: () => void;
}

const RestoreModal: React.FC<RestoreModalProps> = ({ onFileSelect, onCancel }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-lg font-semibold mb-4">Charger une sauvegarde ?</h2>
        <input
          type="file"
          accept=".json"
          onChange={handleChange}
          className="mb-4"
        />
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Ignorer
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestoreModal;
