import * as bcrypt from "https://deno.land/x/bcrypt/mod.ts";
const hash = bcrypt.hashSync("test");
console.log(hash);
