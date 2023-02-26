export function apiDomain() {
  const production = process.env.NODE_ENV === "production";
  return production
    ? "https://dct-api.onrender.com"
    : "http://localhost:5000";
}


// https://dct-issue-tracker.herokuapp.com
// https://it-logger-jsonserver.herokuapp.com
// https://dct-issue-tracker.herokuapp.com
