"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="my-24 text-center w-screen">
      <h2 className="text-2xl text-error">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        className="btn btn-error mt-8"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
