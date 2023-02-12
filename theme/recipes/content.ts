import { defineRecipe } from "css-panda";

export const content = defineRecipe({
  name: "content",
  description: "A recipe for markdown content",
  base: {
    maxWidth: "4xl",
    mx: "auto",
    px: { base: "6", md: "8" },
    "&": {
      width: "full",
    },
    "& h1": {
      fontWeight: "semibold",
      mt: { base: "8", md: "24" },
      mb: { base: "4", md: "5" },
      textStyle: { base: "4xl", md: "6xl" },
    },
    "& h2": {
      fontWeight: "semibold",
      mt: { base: "8", md: "8" },
      mb: { base: "3", md: "4" },
      textStyle: { base: "xl", md: "2xl" },
    },
    "& h3": {
      fontWeight: "semibold",
      mt: { base: "5", md: "8" },
      mb: { base: "2", md: "3" },
      textStyle: { base: "lg", md: "xl" },
    },
    "& p": {
      color: "fg.muted",
      lineHeight: "relaxed",
      mb: "4",
      textStyle: { base: "md", md: "lg" },
    },
    "& ul": {
      color: "fg.muted",
      listStyle: "none",
      lineHeight: "loose",
      mb: "4",
      p: "0",
      pl: "1.675em",
    },
    "& li": {
      textStyle: { base: "md", md: "lg" },
    },
    "& li::before": {
      display: "inline-block",
      content: "'–'",
      width: "1em",
      textStyle: { base: "md", md: "lg" },
    },
    "& pre": {
      backgroundColor: "gray.950",
      borderRadius: "lg",
      boxShadow: "sm",
      fontFamily: "var(--font-roboto-mono)",
      my: "8",
      p: "4",
    },
    "& code:not([class])": {
      background: "bg.subtle",
      borderRadius: "sm",
      borderWidth: "1px",
      fontFamily: "var(--font-roboto-mono)",
      textStyle: "md",
      px: "1",
      py: "0.5",
    },
    "& kbd": {
      background: "bg.subtle",
      borderRadius: "sm",
      borderWidth: "1px",
      borderColor: "border.emphasized",
      borderBottomWidth: "3px",
      fontSize: "sm",
      fontWeight: "bold",
      fontFamily: "var(--font-roboto-mono)",
      lineHeight: "normal",
      px: "1",
      whiteSpace: "nowrap",
    },
    "& :first-child": {
      mt: "0",
    },
    "& :last-child": {
      mb: "0",
    },
  },
});
