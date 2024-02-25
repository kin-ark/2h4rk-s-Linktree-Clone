const actionLink = document.querySelectorAll(".cards-copy");

console.log("actionLink : ", actionLink);

actionLink.forEach((action) => {
  action.addEventListener("click", (e) => {
    e.preventDefault();
    async function copyOperation(text) {
      await navigator.clipboard.writeText(text);
      console.log("Copy Success!");
    }
    setTimeout(() => {
      copyOperation(action.parentElement.getAttribute("href"));
    }, 1000);

    /**
     * Untuk memunculkan toast notification
     */
    document.getElementById("toast").innerHTML = `
        <div class="toast-container">
            <p>✅ Link <strong> ${action.parentElement.innerText} </strong> berhasil disalin!</p>
        </div>
    `;

    /**
     * Untuk menghilangkan toast notification
     */

    setTimeout(() => {
      document.querySelector("#toast .toast-container").classList.add("toast-gone");
    }, 300);

    setTimeout(() => {
      document.querySelector("#toast .toast-container").remove();
    }, 2000);
  });
});
