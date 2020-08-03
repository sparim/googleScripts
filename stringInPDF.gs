function findStringInPDF(){
  
  // =direct url to the pdf file
  var url = "http://yoururlhere.com/file.pdf";
  
  // string to search in the PDF file
  var theString = "this is the string to be found"; 
  
  
  // tries to access the url and prints the error number if failed
  var httpResponse = UrlFetchApp.fetch(url);
  if (httpResponse.getResponseCode() != 200) {
    console.log("error "+httpResponse.getResponseCode());
  }
  
  // all the code below will only be executed if successfully fecthed the url
  else {
    
    // gets a blob from the httpResponse
    // uses gogole OCR to make the PDF file readable and stores all its content in a String called text
    // to use the correct ocrLanguage attribute, check abbreviations in https://cloud.google.com/vision/docs/languages 
    var blob = httpResponse.getBlob();
    var resource = {
      title: blob.getName(),
      mimeType: blob.getContentType()
    }
    var file = Drive.Files.insert(resource, blob, {ocr: true, ocrLanguage: "en"});
    var doc = DocumentApp.openById(file.id);
    var text = doc.getBody().getText();
  
    // creates a boolean that returns true if the string is found
    var isStringFound = text.toLowerCase().indexOf(theString) != -1 ? true : false;
  
    // if true, sends an e-mail to whoever should be warned
    if (isStringFound) {
    MailApp.sendEmail({
    to: "email@domain.com",
    subject: "Sring Was Found",
      htmlBody: "Check the file by yourself: " + url,
    });
      
    //  if there were triggers set to execute the code indefinitely until the string was eventually found, the following commented lines would delete them 
    //  var triggers = ScriptApp.getProjectTriggers();
    //  for (var i = 0; i < triggers.length; i++) {
    //  ScriptApp.deleteTrigger(triggers[i]);
    //  }
    }
  }
}
