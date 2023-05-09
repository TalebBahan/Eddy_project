import { useState } from 'react';

export default function search(data, columns, searchTerm) {
  if (!searchTerm) {
    return data;
  }

  const normalizedSearchTerm = searchTerm.toLowerCase();

  return data.filter(row => {
    return columns.some(column => {
      const value = row[column.accessor];
      if (value) {
        return value.toString().toLowerCase().includes(normalizedSearchTerm);
      }
      return false;
    });
  });
}
