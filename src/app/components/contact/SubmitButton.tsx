type SubmitButtonProps = {
  isSubmitting: boolean;
};

export default function SubmitButton({ isSubmitting }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="neu-button-green px-6 py-3"
    >
      {isSubmitting ? 'Submitting...' : 'Get Your Free Quote'}
    </button>
  );
}