
// document.addEventListener('DOMContentLoaded', () => {
    // document.getElementById('openPatientSummaryWindow(155692)').addEventListener('click',summarywindow);
// });

// Function to handle opening the patient summary window
/*console.log("CONSOLE IS RUNNING ")
function openPatientSummaryWindow(patientId) {
    // Construct the desired URL with the patient ID and other parameters
    const baseURL = "https://app1.intellechart.net/Eye1/workflow.aspx";
    const date = new Date().toLocaleDateString("en-US"); // Get today's date in MM/DD/YYYY format
    patientId=155692;
    const targetURL = `${baseURL}?Date=${date}&chart=${patientId}`;

    // Open the constructed URL in a new tab
    window.open(targetURL, "_blank");
}

// Event listener to simulate the onclick behavior for patient rows
document.addEventListener("DOMContentLoaded", () => {
    console.log("HELLO!!!")
    const patientRows = document.querySelectorAll('[data-qa^="patientSearchResults_patientRow_"]');
    console.log(patientRows)
    patientRows.forEach(row => {
        row.addEventListener("click", () => {
            // Extract the patient ID from the onclick attribute
            const onclickAttr = row.getAttribute("onclick");
            const patientIdMatch = onclickAttr.match(/openPatientSummaryWindow\((\d+)\)/);
           
            console.log(patientIdMatch);
            if (patientIdMatch) {
                // Pass the extracted patient ID to the function
                openPatientSummaryWindow(patientIdMatch[1]);
            } else {
                console.error("Patient ID not found in onclick attribute.");
            }
        });
    });
});*/

/*
console.log("CONSOLE IS RUNNING");

function openPatientSummaryWindow(patientId) {
    // Construct the desired URL with the patient ID and other parameters
    const baseURL = "https://app1.intellechart.net/Eye1/workflow.aspx";
    const date = new Date().toLocaleDateString("en-US"); // Get today's date in MM/DD/YYYY format
    const targetURL = `${baseURL}?Date=${date}&chart=${patientId}`;

    // Open the constructed URL in a new tab
    window.open(targetURL, "_blank");
}

// Event listener for predefined static rows
document.addEventListener("DOMContentLoaded", () => {
    console.log("HELLO!!!");

    // Manually select all rows with the specific 'data-qa' attribute
    const patientRows = document.querySelectorAll('tr[data-qa^="patientSearchResults_patientRow_"]');

    patientRows.forEach(row => {
        row.addEventListener("click", () => {
            // Extract the patient ID directly from the 'onclick' attribute
            const onclickAttr = row.getAttribute("onclick");
            const patientIdMatch = onclickAttr.match(/openPatientSummaryWindow\((\d+)\)/);

            console.log(patientIdMatch);

            if (patientIdMatch) {
                // Pass the extracted patient ID to the function
                openPatientSummaryWindow(patientIdMatch[1]);
            } else {
                console.error("Patient ID not found in onclick attribute.");
            }
        });
    });
});*/

/*function openPatientSummaryWindow(patientId) {
    console.log('HELLOOO');
    const url="https://app1.intellechart.net/Eye1MVC/Summary/Summary/Index/";
    window.location.href=url;
}


openPatientSummaryWindow('155692');*/


/*const currentUrl = new URL(window.location.href);

const redirectUrl = "https://app1.intellechart.net/Eye1MVC/Summary/Summary/Index/" +
    `?Date=${currentUrl.searchParams.get("Date")}&chart=${currentUrl.searchParams.get("chart")}`;

window.location.replace(redirectUrl);*/


// Function to open the patient summary window
function openPatientSummaryWindow(patientId) {
    console.log("Opening Patient Summary Window...");
    
    // Define the base URL
    const baseURL = "https://app1.intellechart.net/Eye1MVC/Summary/Summary/Index/";

    // Construct the full URL with the chart parameter
    const targetURL = `${baseURL}?Date=${new Date().toLocaleDateString("en-US")}&chart=${patientId}`;

    // Open the constructed URL in a new tab
    window.open(targetURL, "_blank");
}

// Example of calling the function dynamically with a patient ID
document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded!");

    // Simulating patient row behavior for demonstration
    const patientRows = document.querySelectorAll('[data-qa^="patientSearchResults_patientRow_"]');
    patientRows.forEach(row => {
        row.addEventListener("click", () => {
            // Extract the patient ID from a custom data attribute or other sources
            const patientId = row.getAttribute("data-patient-id");

            if (patientId) {
                // Call the function with the extracted patient ID
                openPatientSummaryWindow(patientId);
            } else {
                console.error("Patient ID not found for this row.");
            }
        });
    });
});

// Example of directly triggering the function
openPatientSummaryWindow("155692");

