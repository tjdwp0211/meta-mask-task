import { Urbanist } from "next/font/google";

const medium = Urbanist({
  weight: "500",
  style: "normal",
  display: "fallback",
  fallback: ["system-ui"],
  subsets: ["latin", "latin-ext"],
});

const semiBold = Urbanist({
  weight: "600",
  style: "normal",
  display: "fallback",
  fallback: ["system-ui"],
  subsets: ["latin", "latin-ext"],
});

const bold = Urbanist({
  weight: "700",
  style: "normal",
  display: "fallback",
  fallback: ["system-ui"],
  subsets: ["latin", "latin-ext"],
});

export { medium, semiBold, bold };
