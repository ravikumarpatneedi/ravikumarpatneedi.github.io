export function calculateExperience(startDateStr) {
  const startDate = new Date(startDateStr);
  const now = new Date();

  const diffInMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const years = Math.floor(diffInMonths / 12);
  const months = diffInMonths % 12;

  const decimalYears = (years + months / 12).toFixed(1);
  return `${decimalYears}+ years`;
}