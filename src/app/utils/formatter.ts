export const formatDate = (date: Date | null | undefined | string): string => {
  if (!date) return ""; // Return an empty string if date is null or undefined

  // Convert date string to Date object if it's a string
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Ensure dateObj is a valid Date instance
  if (isNaN(dateObj.getTime())) return ""; // Return empty string if dateObj is invalid

  const day = String(dateObj.getDate()).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = dateObj.getFullYear();

  return `${day}-${month}-${year}`;
};

export const generatePackageId = () => {
  const timestamp = Date.now();
  const randomId = Math.random().toString(36).substr(2, 9); // Generate random string
  const prefix = "PKG"; // Example prefix

  // Combine prefix, random ID, and timestamp
  const packageId = `${prefix}-${randomId}-${timestamp}`;

  return packageId;
};
