export function splitTitle(title: string) {
  const words = title.trim().split(/\s+/);

  if (words.length <= 1) {
    return {
      leadingText: "",
      highlightedText: words[0] || "",
    };
  }

  return {
    leadingText: words.slice(0, -1).join(" "),
    highlightedText: words[words.length - 1],
  };
}
