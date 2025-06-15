import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Function to get status badge styling
export const getStatusBadge = (status) => {
    const styles = {
      "Completed": "bg-green-500/20 text-green-300 border-green-500/50 dark:bg-green-900/20 dark:text-green-200 dark:border-green-900/50",
      "In Progress": "bg-blue-500/20 text-blue-300 border-blue-500/50 dark:bg-blue-900/20 dark:text-blue-200 dark:border-blue-900/50",
      "Planning": "bg-purple-500/20 text-purple-300 border-purple-500/50 dark:bg-purple-900/20 dark:text-purple-200 dark:border-purple-900/50",
      "On Hold": "bg-amber-500/20 text-amber-300 border-amber-500/50 dark:bg-amber-900/20 dark:text-amber-200 dark:border-amber-900/50",
      "Cancelled": "bg-red-500/20 text-red-300 border-red-500/50 dark:bg-red-900/20 dark:text-red-200 dark:border-red-900/50"
    };
    return styles[status] || "bg-gray-500/20 text-gray-300 border-gray-500/50 dark:bg-gray-700/20 dark:text-gray-300 dark:border-gray-700/50";
  };
  
  // Function to get project type badge styling
  export const getTypeStyle = (type) => {
    const styles = {
      "Personal": "bg-indigo-500/20 text-indigo-300 border-indigo-500/50 dark:bg-indigo-900/20 dark:text-indigo-200 dark:border-indigo-900/50",
      "Client": "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 dark:bg-emerald-900/20 dark:text-emerald-200 dark:border-emerald-900/50",
      "Open Source": "bg-orange-500/20 text-orange-300 border-orange-500/50 dark:bg-orange-900/20 dark:text-orange-200 dark:border-orange-900/50",
      "Team": "bg-pink-500/20 text-pink-300 border-pink-500/50 dark:bg-pink-900/20 dark:text-pink-200 dark:border-pink-900/50"
    };
    return styles[type] || "bg-gray-500/20 text-gray-300 border-gray-500/50 dark:bg-gray-700/20 dark:text-gray-300 dark:border-gray-700/50";
  };
  
  // Format date function
  export const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };
  
  // Format currency function
  export const formatCurrency = (amount, currency = 'USD') => {
    if (!amount) return 'N/A';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount / 100);
  };
  