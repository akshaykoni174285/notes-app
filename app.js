import validator from "validator";
import chalk from "chalk";
import getNotes from "./notes.js";
import yargs from "yargs";
import {hideBin} from 'yargs/helpers'



const argv = yargs(hideBin(process.argv))
    .command('add','add a note',(yargs)=>{
        return yargs
        .option('title',{
            describe: 'title of the note',
            type: 'string',
            demandOption:true

        })
    },(argv)=>{
        console.log(`adding a new note with title ${argv.title}`);
    })
    .command('remove','remove a note',()=>{
        console.log("removing a note");
    })
    .command('list','listing the notes',()=>{
        console.log("listing the notes");
    })
    .command('read','reading a note',()=>{
        console.log("reading a note");
    })
    .help()
    .argv;


const mesg = getNotes();
// console.log(mesg);

// console.log(argv)