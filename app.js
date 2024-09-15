import validator from "validator";
import chalk from "chalk";
import notes from "./notes.js";
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
        .option('body',{
            describe: 'body of the note',
            type: 'string',

        })
    },(argv)=>{
        notes.addNotes(argv.title,argv.body);

    })
    .command('remove','remove a note',(yargs)=>{
        return yargs
        .option('title',{
            describe: 'title of the note to be removed',
            type: 'string',
            demandOption: true
        })
    },(argv)=>{
        notes.removeNotes(argv.title)
    })
    .command('list','listing the notes',()=>{
        console.log("listing the notes");
    })
    .command('read','reading a note',()=>{
        console.log("reading a note");
        // you will provide a particular 
    })
    .help()
    .argv;


const mesg = notes.getNotes();
console.log("the notes is ", mesg);

// console.log(mesg);
// need to add those mesg to work with yargs 


console.log(argv)