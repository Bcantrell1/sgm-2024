import React from 'react';

type SubmitButtonProps = {
  isSubmitting: boolean;
};

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="neu-button px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base"
    >
      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
    </button>
  );
}