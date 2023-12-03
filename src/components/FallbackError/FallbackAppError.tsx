import type { FallbackProps } from 'react-error-boundary';

interface FallbackAppPropsType extends FallbackProps {
  hasActions?: boolean;
  customErrorMessage?: string | null;
}

const FallbackAppError = ({
  error,
  resetErrorBoundary,
  customErrorMessage = null,
  hasActions = false
}: FallbackAppPropsType) => {
  return (
    <div className="m-auto p-4 w-full max-w-lg">
      <div className="text-black bg-yellow p-8 rounded-[0.625rem] shadow-black shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Oops..</h2>
        <p>{error.message}</p>
        {customErrorMessage && <p className="text-sm pt-3">Lorem ipsum set dolor at met.</p>}
        {hasActions && (
          <div className="flex gap-4 items-center justify-between">
            <button
              onClick={resetErrorBoundary}
              className="transition-colors bg-navy-700 text-navy-100 px-2 py-1 hover:text-white hover:bg-red-700"
            >
              reset error
            </button>
            <a
              href="info@test.pl"
              title="Contact us"
              className="font-semibold transition-all hover:text-red-700 hover:underline"
            >
              info@test.pl
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default FallbackAppError;
