export async function suggestPageTitle(): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 200)); // simulate latency

  const mockSuggestions = [
    "Contact Info",
    "User Details",
    "About You",
    "Finish Up",
    "Confirmation",
    "Preferences",
    "Personal Info",
    "Summary Page",
    "Final Step",
    "Additional Info",
  ];

  const index = Math.floor(Math.random() * mockSuggestions.length);
  return mockSuggestions[index];
}
