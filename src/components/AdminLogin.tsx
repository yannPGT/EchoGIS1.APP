import React, { useState } from 'react';
import { Lock, Shield } from 'lucide-react';

interface AdminLoginProps {
  onLogin: (code: string) => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      setError('Veuillez saisir le code administrateur.');
      return;
    }
    onLogin(code);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <div className="text-center mb-6">
          <div className="bg-red-600 p-3 rounded-full w-16 h-16 mx-auto mb-4">
            <Shield className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Mode Administrateur</h2>
          <p className="text-gray-600 dark:text-gray-300">Veuillez saisir le code d'accès administrateur</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="adminCode" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Code administrateur
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                id="adminCode"
                value={code}
                onChange={(e) => {
                  setCode(e.target.value);
                  setError('');
                }}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"
                placeholder="Saisissez le code"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 bg-gray-200 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 bg-red-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
            >
              Se connecter
            </button>
          </div>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>Code par défaut: pompiers</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;