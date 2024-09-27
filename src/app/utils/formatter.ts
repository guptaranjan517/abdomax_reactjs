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
export const formatTimeString = (timeString: string, locale: string) => {
  // Split the input time string into time and period (AM/PM)
  const [time, period] = timeString.split(" ");
  console.log("time", time, period);

  // Parse the hours and minutes
  let [hours, minutes] = time.split(":").map(Number);

  // Convert 12-hour format to 24-hour format for correct Date object creation
  if (period === "PM" && hours < 12) hours += 12;
  if (period === "AM" && hours === 12) hours = 0;

  // Create a date object using today's date and the parsed time
  const date = new Date();
  date.setHours(hours, minutes);
  console.log("Da", date, locale);

  // Use Intl.DateTimeFormat to format the time according to the specified locale
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true, // Keep 12-hour format with AM/PM
  }).format(date);
};
