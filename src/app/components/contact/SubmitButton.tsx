type SubmitButtonProps = {
  isSubmitting: boolean;
};

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="neu-button px-6 py-3"
    >
      {isSubmitting ? 'SUBMITTING...' : 'SUBMIT'}
    </button>
  );
}