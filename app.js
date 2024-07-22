import validator from "validator";
import chalk from "chalk";
import getNotes from "./notes.js";
import yargs from "yargs";
import {hideBin} from 'yargs/helpers'



const argv = yargs(hideBin(process.argv))
.command('add','add a note',()=>{
    console.log("adding a new note");
})
.command('remove','remove a note',()=>{
    console.log("removing a note");
})
.help()
.argv;


const mesg = getNotes();
console.log(mesg);

console.log(argv)