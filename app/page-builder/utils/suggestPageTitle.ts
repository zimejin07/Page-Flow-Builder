export async function suggestPageTitle(context: string): Promise<string> {
  const res = await fetch("/api/ai-suggest", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ context }),
  });

  const reader = res.body?.getReader();
  const decoder = new TextDecoder();
  let result = "";

  while (true) {
    const { done, value } = await reader!.read();
    if (done) break;
    result += decoder.decode(value);
  }

  return result.trim();
}
