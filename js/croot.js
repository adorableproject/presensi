import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";
import {getRandomColor,getRandomColorName} from "https://jscroot.github.io/image/croot.js";
import {trcontent} from "./template/table.js"


let URLPresensi = "https://gocroot.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    results.forEach(isiRow);
}

function isiRow(value){
    let trtag = document.createElement('tr');
    trtag.classList.add('h-18');
    trtag.classList.add('border-b');
    trtag.classList.add('border-coolGray-100');
    let row=trcontent.replace("#NAMA#",value.Biodata.Nama).replace("#PHONENUMBER#",value.Phone_number).replace("#LOKASI#",value.Location).replace("#KET#",value.Checkin).replace("#MASUK#",value.Datetime).replace("#PULANG#",value.Datetime).replace("#DURASI#",value.Datetime).replace("#WARNA#",getRandomColor()).replace(/#WARNALOGO#/g,getRandomColorName());
    trtag.innerHTML = row 
    //console.log(trtag)
    document.getElementById('karyawan').appendChild(trtag);
}


setInner("namadivisi","Dari croot.js");