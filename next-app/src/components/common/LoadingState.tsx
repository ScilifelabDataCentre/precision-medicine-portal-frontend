/**
 * Reusable loading state component
 * Can be used across different pages that need loading indicators
 */
export const LoadingState = () => (
  <div
    className="container mx-auto px-4 py-8"
    role="status"
    aria-live="polite"
    aria-label="Loading content"
  >
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
          role="status"
          aria-label="Loading spinner"
        ></div>
        <p className="text-muted-foreground">Loading registries...</p>
      </div>
    </div>
  </div>
);
