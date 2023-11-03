const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "./cypress/cucumberReports/",
  reportPath: "cypress/cucumberReports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "118",
    },
    device: "AutomationDevice - DELL Latitude 5420",
    platform: {
      name: "windows",
      version: "11 Pro",
    },
  },
  customData: {
    title: "Aladini Automation",
    data: [
      { label: "Project", value: "Aladini Cypress" },
      { label: "Release", value: "0.0.1" },
      { label: "Cycle", value: "Test Only" },
      { label: "Execution Start Time", value: "Oct 2023" },
      { label: "Execution End Time", value: "On going" },
    ],
  },
});