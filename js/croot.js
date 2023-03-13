import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";
import {setDebug,getDebug} from "./config/var.js";

let URLPresensi = "https://gocroot.herokuapp.com/presensi";

get(URLPresensi,isiTablePresensi);

function isiTablePresensi(results){
    console.log(results);
    setDebug(results);
}
setInner("namadivisi","Dari croot.js");