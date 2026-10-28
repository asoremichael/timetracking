// Select all the period buttons
const periodButtons = document.querySelectorAll(".period-button");

// Select all the activity cards
const activityCards = document.querySelectorAll(".activity-card");

// Text used for the previous period
const previousPeriodNames = {
    daily: "Yesterday",
    weekly: "Last Week",
    monthly: "Last Month"
};


// Function to update the dashboard
function updateDashboard(period) {

    // Loop through every activity card
    activityCards.forEach(function (card) {

        // Find the current hours element
        const currentHours = card.querySelector(".current-hours");

        // Find the previous hours element
        const previousHours = card.querySelector(".previous-hours");


        // Get the current hours for the selected period
        const currentValue = currentHours.dataset[period];

        // Get the previous hours for the selected period
        const previousValue =
            previousHours.dataset["previous" +
                period.charAt(0).toUpperCase() +
                period.slice(1)];


        // Update the current hours
        currentHours.textContent = currentValue + "hrs";

        // Update the previous hours
        previousHours.textContent =
            previousPeriodNames[period] + " - " +
            previousValue + "hrs";

    });


    // Update which period button is selected
    periodButtons.forEach(function (button) {

        // Check whether this button matches the selected period
        const isActive = button.dataset.period === period;

        // Add or remove the active class
        button.classList.toggle("active", isActive);

        // Update accessibility information
        button.setAttribute("aria-pressed", isActive);

    });

}


// Listen for clicks on the period buttons
periodButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Read the selected period
        const selectedPeriod = button.dataset.period;

        // Update all six cards
        updateDashboard(selectedPeriod);

    });

});


// Show weekly statistics when the page first loads
updateDashboard("weekly");