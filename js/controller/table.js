export function isiTablePresensi(results){
    results.forEach(isiRow);
}

function isiRow(value){
    let content=presensiContent.replace("#NAMA#",value.Biodata.Nama).replace("#PHONENUMBER#",value.Phone_number).replace("#LOKASI#",value.Location).replace("#KET#",value.Checkin).replace("#MASUK#",value.Datetime).replace("#PULANG#",value.Datetime).replace("#DURASI#",value.Datetime).replace("#WARNA#",getRandomColor()).replace(/#WARNALOGO#/g,getRandomColorName());
    addChild("presensi",presensiTag,presensiClass,content);
}