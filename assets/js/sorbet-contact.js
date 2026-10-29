(() => {
  const button = document.getElementById("copy-discord");
  const username = document.getElementById("discord-username");
  const status = document.getElementById("discord-copy-status");
  if (!button || !username || !status || !navigator.clipboard?.writeText) return;

  button.hidden = false;
  button.addEventListener("click", async () => {
    button.disabled = true;
    status.textContent = "";
    try {
      await navigator.clipboard.writeText(username.textContent.trim());
      status.textContent = "Copied: wanwhite.";
    } catch {
      status.textContent = "Copy unavailable. Select and copy wanwhite. above, including the final period.";
    } finally {
      button.disabled = false;
    }
  });
})();
