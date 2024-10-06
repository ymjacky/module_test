
import { cjs } from "sub_cjs";
import { ems } from "sub_ems_only";

console.log('main_cjs');

console.log(cjs('call cjs module'));
console.log(ems('call ems module'));