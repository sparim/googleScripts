function gettingTagContents() {
  
  // put the link for the XML file here
  var url = "putTheUrlHere";
  
  // put the tag you want to take its contents from here (without <> and </>)
  var tag = "putTheTagHere";
  
  // from here on, there is nothing else that need  to be modified
  
  // fetching the url and turning it into a string
  var response = UrlFetchApp.fetch(url);
  var xmlAsString = response.getContentText();
  
  // creating some variables to use later
  var beginTag = new RegExp("<"+tag+">", 'g');
  var endTag = new RegExp("</"+tag+">", 'g');
  var beginTagInDoc;
  var beginIndexList = [];
  var endTagInDoc;
  var endIndexList = [];
  var tagContentsList = [];
  var sizeOfBeginTag = (beginTag.source.replace("\\","")).length;
  var sizeOfEndTag = (endTag.source.replace("\\","")).length;
  
  // filling beginIndexList with the positions of the first letter of each of the beginTags found
  while ((beginTagInDoc = beginTag.exec(xmlAsString)) != null) {
    beginIndexList.push(beginTagInDoc.index);
  }
  
  // filling endIndexList with the positions of the first letter of each of the endTags found
  while ((endTagInDoc = endTag.exec(xmlAsString)) != null) {
    endIndexList.push(endTagInDoc.index);
  }
  
  // filling tagContentsList by taking what is written from the position right after the last letter of a beginTag to the position right before its endTag
  for (let i = 0; i < beginIndexList.length; i++) {
    tagContentsList.push(xmlAsString.substring(beginIndexList[i]+sizeOfBeginTag, endIndexList[i])); 
  }
  
  // printing tagContentsList in the console to check if it worked alright
  console.log(tagContentsList);
  
}
