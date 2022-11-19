import { readFileSync } from "fs";

const data = readFileSync("./src/uhyo.txt", { encoding: "utf8" });

console.log(data)
