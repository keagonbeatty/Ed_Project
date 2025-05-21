function sendDailyEmail() {
  const sheet =
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Config_Sheet");
  const data = sheet.getRange("A1:B5").getValues();

  const config_data = sheet.getRange("A1:B5");

  let body = "Here is your daily update:\n\n";
  data.forEach((row) => {
    body += row.join(" | ") + "\n";
  });

  MailApp.sendEmail({
    to: "your_email@example.com",
    subject: "Daily Report from Google Sheet",
    body: body,
  });
}
