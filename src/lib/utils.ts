import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const CLOUDINARY_UPLOAD_PRESET = "mealler"
export const CLOUDINARY_CLOUD_NAME = "ddkr2fkkv"
