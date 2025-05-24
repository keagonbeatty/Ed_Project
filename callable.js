function getValue(cell) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Email");

  return sheet.getRange(cell).getValue();
}

function sendEmailWithChart() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName("Email");
  const charts = sheet.getCharts();

  const goals = {
    section1: {
      goal1: {
        value: getValue("J9"),
        class: sheet,
      },
      goal2: {
        value: sheet.getRange("J10").getValue(),
        class: sheet.getRange("J10").getValue() > 3.0 ? "green" : "red",
      },
      goal3: {
        value: sheet.getRange("J11").getValue(),
        class: sheet.getRange("J11").getValue() < 86 ? "green" : "red",
      },
      goal4: {
        value: sheet.getRange("J12").getValue(),
        class: sheet.getRange("J12").getValue() < 86 ? "green" : "red",
      },
    },
    section2: {
      goal1: {
        value: sheet.getRange("J14").getValue(),
        class: sheet.getRange("J14").getValue() < 60 ? "green" : "red",
      },
      goal2: {
        value: sheet.getRange("J15").getValue(),
        class: sheet.getRange("J15").getValue() > 3.0 ? "green" : "red",
      },
      goal3: {
        value: sheet.getRange("J16").getValue(),
      },
      goal4: {
        value: sheet.getRange("J17").getValue(),
      },
    },
    section3: {
      goal1: {
        value: sheet.getRange("J19").getValue(),
        class: sheet.getRange("J19").getValue() < 60 ? "green" : "red",
      },
      goal2: {
        value: sheet.getRange("J20").getValue(),
        class: sheet.getRange("J20").getValue() > 3.0 ? "green" : "red",
      },
      goal3: {
        value: sheet.getRange("J21").getValue(),
      },
      goal4: {
        value: sheet.getRange("J22").getValue(),
      },
      goal5: {
        value: sheet.getRange("J23").getValue(),
        class: sheet.getRange("J23").getValue() < 86 ? "green" : "red",
      },
      goal6: {
        value: sheet.getRange("J24").getValue(),
        class: sheet.getRange("J24").getValue() < 86 ? "green" : "red",
      },
    },
  };

  if (charts.length === 0) {
    Browser.msgBox("No charts found on the specified sheet.");
    return;
  }

  const chart1 = charts[0];
  const chartBlob1 = chart1.getAs("image/png");

  const chart2 = charts[1];
  const chartBlob2 = chart2.getAs("image/png");

  const chart3 = charts[2];
  const chartBlob3 = chart3.getAs("image/png");

  const inlineImages = {
    chartImage1: chartBlob1,
    chartImage2: chartBlob2,
    chartImage3: chartBlob3,
  };

  //const recipient = "ed.edens12@gmail.com";
  const recipient = "beatt1ks@gmail.com";
  const subject = "Test Report";
  const today = new Date();
  const shortFormat = today.toLocaleDateString("en-US", { dateStyle: "short" });

  // Fill in values in the HTML template
  const template = HtmlService.createTemplateFromFile("email_template");
  template.recipient = recipient;
  template.goals = goals;
  template.date = shortFormat;
  const htmlBody = template.evaluate().getContent();

  GmailApp.sendEmail(recipient, subject, "", {
    htmlBody: htmlBody,
    inlineImages: inlineImages,
  });
}
