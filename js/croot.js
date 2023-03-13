import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";
import {getRandomColor} from "https://jscroot.github.io/image/croot.js";
import {tr} from "./template/table.js"


let URLPresensi = "https://gocroot.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    results.forEach(isiRow);
}

function isiRow(value){
    let row=tr.replace("#NAMA#",value.Biodata.Nama).replace("#PHONENUMBER#",value.Phone_number).replace("#LOKASI#",value.Location).replace("#KET#",value.Checkin).replace("#MASUK#",value.Datetime).replace("#PULANG#",value.Datetime).replace("#DURASI#",value.Datetime).replace("#WARNA#",getRandomColor());
    console.log(row)
    //addInner("karyawan",row)
}


setInner("namadivisi","Dari croot.js");