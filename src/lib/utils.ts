import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getDateSuffix = (day: number) => {
  if (day > 3 && day < 21) return "th";
  return ["th", "st", "nd", "rd"][day % 10] || "th";
};

export const formatNumber = (value: number): string => {
  const formatter = new Intl.NumberFormat("en-US");
  return formatter.format(value);
};

export const getTimeSince = (dateString: string): string => {
  const pushedDate = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor(
    (now.getTime() - pushedDate.getTime()) / 1000,
  );

  if (diffInSeconds < 60)
    return `${diffInSeconds} second${diffInSeconds === 1 ? "" : "s"} ago`;
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60)
    return `${diffInMinutes} minute${diffInMinutes === 1 ? "" : "s"} ago`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24)
    return `${diffInHours} hour${diffInHours === 1 ? "" : "s"} ago`;
  const diffInDays = Math.floor(diffInHours / 24);
  return `${diffInDays} day${diffInDays === 1 ? "" : "s"} ago`;
};

export const truncateText = (text: string, charLimit: number): string => {
  if (typeof text === "string" && text.length > charLimit) {
    return text.slice(0, charLimit) + "...";
  }
  return text;
};
