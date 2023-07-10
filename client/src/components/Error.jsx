import React, { useEffect } from 'react';

export default function Error({ message }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      const errorAlert = document.getElementById('error-alert');
      if (errorAlert) {
        errorAlert.style.display = 'none';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex:'10000' }}>
      <div
        id="error-alert"
        className="mb-3 inline-flex w-full items-center rounded-lg bg-red-700 px-6 py-5 text-base text-danger-700"
        role="alert"
      >
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        {message}
      </div>
    </div>
  );
}
