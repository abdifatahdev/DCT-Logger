export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production
    ? "https://dct-issue-tracker.herokuapp.com/"
    : "http://localhost:5000";
}

// https://it-logger-jsonserver.herokuapp.com