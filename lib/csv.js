// csv is the CSV file with headers
/**
 * exchange csv to json
 * 
 * @param {string} csv CSV file with headers 
 * @returns 
*/
export const csv_2_json = (csv) => {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");
    
    for (var i = 1; i < lines.length; i++){
        var obj = {};
        var currentline = lines[i].split(",");
        for (var j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j] ? currentline[j].replace(/\r/g, '') : '';
        }
        result.push(obj);
    }
    
    //return result; //JavaScript object
    return JSON.stringify(result); //JSON
}

