# googleScripts
Useful Google Apps Scripts

stringInPDF.gs

Originally, it was written to use Gooogle's OCR to repeatedly check for the author's name in a PDF file. This file was regularly updated by the government and contained a list of people that were hired for the public service. If the author's name was there, he would get an e-mail telling him about it. There was a trigger executing the code every 15 minutes and that's why there is a commented code in the end that would delete all the triggers once the name was there, so the author would receive a single e-mail instead of one every 15 minutes (until he manually deleted the trigger).

Code was adapted to look for any string in a PDF using Google's OCR and send an e-mail to whoever should be warned about it. Of course it can be modified to be used statically and just print something in the console if a specific string is or isn't found in the PDF file, instead of sending an e-mail. The trigger deleting part was kept commented in the end in case the user is interested in implementing triggers in a similar situation as the original author.

gettingTagContents.gs

Takes an XML file and stores the contents that are between repeated instances of <tag> and </tag> throughout the file in a list. Originally designed to take every product name from an XML file, exctracting them from every <title>product name</title> ocurrence. In the end it would store every product name in a list, which was then used for other purposes.
