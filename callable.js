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
        goalText: getValue("H9"),
        value: getValue("J9"),
        class:
          getValue("O9") <= 0.66 * getValue("N9")
            ? "green"
            : getValue("O9") <= getValue("N9") * 0.9
            ? "yellow"
            : "red",
      },
      goal2: {
        goalText: getValue("H10"),
        value: getValue("J10"),
        class:
          getValue("O10") >= getValue("N10")
            ? "green"
            : getValue("O10") >= getValue("N10") * 0.8
            ? "yellow"
            : "red",
      },
      goal3: {
        goalText: getValue("H11"),
        value: getValue("J11"),
        class:
          getValue("O11") >= getValue("N11")
            ? "green"
            : getValue("O11") >= getValue("N11") - 0.12
            ? "yellow"
            : "red",
      },
      goal4: {
        goalText: getValue("H12"),
        value: getValue("J12"),
        class:
          getValue("O12") >= getValue("N12")
            ? "green"
            : getValue("O12") >= getValue("N12") - 0.12
            ? "yellow"
            : "red",
      },
    },
    section2: {
      goal1: {
        goalText: getValue("H14"),
        value: getValue("J14"),
        class:
          getValue("O14") <= getValue("N14")
            ? "green"
            : getValue("O14") < getValue("N14") * 1.5
            ? "yellow"
            : "red",
      },
      goal2: {
        goalText: getValue("H15"),
        value: getValue("J15"),
        class:
          getValue("O15") < getValue("N15")
            ? "green"
            : getValue("O15") < getValue("N15") * 2
            ? "yellow"
            : "red",
      },
      goal3: {
        goalText: getValue("H16"),
        value: getValue("J16"),
      },
      goal4: {
        goalText: getValue("H17"),
        value: getValue("J17"),
      },
    },
    section3: {
      goal1: {
        goalText: getValue("H19"),
        value: getValue("J19"),
        class: getValue("B163") <= getValue("N19") ? "green" : "red",
      },
      goal2: {
        goalText: getValue("H20"),
        value: getValue("J20"),
        class:
          getValue("O20") <= getValue("N20")
            ? "green"
            : getValue("O20") <= getValue("N20") * 1.5
            ? "yellow"
            : "red",
      },
      goal3: {
        goalText: getValue("H21"),
        value: getValue("J21"),
      },
      goal4: {
        goalText: getValue("H22"),
        value: getValue("J22"),
      },
      goal5: {
        goalText: getValue("H23"),
        value: getValue("J23"),
        class:
          getValue("O23") < getValue("N23") && getValue("O24") < getValue("N24")
            ? "green"
            : (getValue("O23") < getValue("N23") &&
                getValue("O24") > getValue("N24")) ||
              (getValue("O23") > getValue("N23") &&
                getValue("O24") < getValue("N24"))
            ? "yellow"
            : "red",
      },
      goal6: {
        goalText: getValue("H24"),
        value: getValue("J24"),
        class:
          getValue("O25") <= 0.8 * getValue("N25")
            ? "green"
            : getValue("O25") <= getValue("N25")
            ? "yellow"
            : "red",
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
