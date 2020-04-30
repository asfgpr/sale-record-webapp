function doGet(e) {
  var op = e.parameter.action;
  var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1rxq15mzocIZN1tizvNzLnvZs28n7UPbLnngRJA_tRm0/");
  var sheet = ss.getSheetByName('Sheet1');
  if(e.parameter.action == 'insert')
    return insert_value(e,sheet);
  else
    var result ="fail";
}

function insert_value(request, sheet){
  var title = request.parameter.title;
  var sale = request.parameter.sale;
  var cost = request.parameter.cost;
  var debit = request.parameter.debit;
  var flag = 1;
  if(flag == 1){
    var d = new Date();
    var cdate = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
    var ctime  = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    var rowData = sheet.appendRow(["",cdate,ctime,title,sale,cost,debit]);
    var result ="success";
  }
  
  result = JSON.stringify({
    "result" : result
  });
  
  return ContentService.createTextOutput(
    result).setMimeType(
    ContentService.MimeType.JAVASCRIPT
  );
}