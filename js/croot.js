import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

let URLPresensi = "https://gocroot.herokuapp.com/presensi";
hasil={};

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    console.log(results);
    hasil=results;
}
setInner("namadivisi","Dari croot.js");