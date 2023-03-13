import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

let URLPresensi = "https://gocroot.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    results.forEach(isiRow);
}

function isiRow(value){
    console.log(value.Biodata.Nama)
}



setInner("namadivisi","Dari croot.js");