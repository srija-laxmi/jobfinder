function searchJobs() {

    const jobInput = document.getElementById("jobSearch");
    const locationInput = document.getElementById("locationSearch");

    const job = jobInput.value.trim();
    const location = locationInput.value.trim();

    if (job === "" && location === "") {
        alert("Please enter a job title or location.");
        return;
    }

    let message = "Searching for";

    if (job !== "") {
        message += ` "${job}"`;
    }

    if (location !== "") {
        message += ` in "${location}"`;
    }

    alert(message);

    document
        .getElementById("jobs")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================
   APPLY BUTTONS
========================= */

const applyButtons = document.querySelectorAll(".apply-btn");

applyButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const jobCard = button.closest(".job-card");

        const jobTitle =
            jobCard.querySelector("h3").textContent;

        alert(
            `You selected the "${jobTitle}" position.`
        );

    });

});