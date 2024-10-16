// index.js

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const xlsx = require("xlsx");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT =  5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sample endpoint to handle POST requests for quotations
app.post("/api/quotations", (req, res) => {
  const { clientName, clientAddress, serviceType, selectedServices, totalAmount } = req.body;

  // Prepare data for the Excel sheet
  const data = [
    ["Client Name", "Client Address", "Service Type", "Selected Services", "Total Amount"],
    [
      clientName,
      clientAddress,
      serviceType,
      JSON.stringify(selectedServices),
      totalAmount,
    ],
  ];

  // Create a new workbook and a worksheet
  const workbook = xlsx.utils.book_new();
  const worksheet = xlsx.utils.aoa_to_sheet(data);

  // Append the worksheet to the workbook
  xlsx.utils.book_append_sheet(workbook, worksheet, "Quotations");

  // Define the path for the Excel file
  const filePath = path.join(__dirname, "quotations.xlsx");
  //console.log(__dirname);
  
  // Write the workbook to a file
  if (fs.existsSync(filePath)) {
    // If the file exists, append the new data
    const existingWorkbook = xlsx.readFile(filePath);
    const existingData = xlsx.utils.sheet_to_json(existingWorkbook.Sheets["Quotations"]);

    // Append new row to existing data
    const newData = [
      clientName,
      clientAddress,
      serviceType,
      JSON.stringify(selectedServices),
      totalAmount,
    ];

    existingData.push(newData);
    const newWorksheet = xlsx.utils.json_to_sheet(existingData);
    existingWorkbook.Sheets["Quotations"] = newWorksheet;

    // Write the updated workbook
    xlsx.writeFile(existingWorkbook, filePath);
  } else {
    // Write the new workbook to the file
    xlsx.writeFile(workbook, filePath);
  }

  // Send a response back to the client
  res.status(200).json({
    message: "Quotation received and saved successfully",
    data: {
      clientName,
      clientAddress,
      serviceType,
      selectedServices,
      totalAmount,
    },
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});