
const SPREADSHEET_ID = "1hMlvEbCSuRDGMEnlBFVY-nEDVKDnCXuwRChEaXliSFw";

function doPost(e){
  try{
    const data = JSON.parse(e.postData.contents);

    const ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    let sheet = ss.getSheetByName("Households");

    if(!sheet){
      sheet = ss.insertSheet("Households");
      sheet.appendRow(["Main Contact","Family Name","Phone","Address","Date"]);
    }

    sheet.appendRow([
      data.household.mainContact,
      data.household.familyName,
      data.household.phone,
      data.household.address,
      data.household.date
    ]);

    return ContentService.createTextOutput("ok");

  }catch(err){
    return ContentService.createTextOutput("error: "+err);
  }
}
