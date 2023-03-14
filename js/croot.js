import { get } from "https://jscroot.github.io/api/croot.js";
import {setInner, addChild } from "https://jscroot.github.io/element/croot.js";
import {getRandomColor,getRandomColorName} from "https://jscroot.github.io/image/croot.js";
import {presensiTag,presensiClass,presensiContent} from "./template/table.js"
import {isiTablePresensi} from "./controller/table.js"
import {URLPresensi} from "./config/url.js"



get(URLPresensi,isiTablePresensi);




setInner("namadivisi","Dari croot.js");