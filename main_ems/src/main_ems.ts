
import { ems } from "sub_ems_only";
import { cjs } from "sub_cjs";

console.log('main_esm');

console.log(ems('call ems module'));
console.log(cjs('call cjs module'));