import fs from 'fs';
export function getNotes() {
    return loadNotes()
}

export function addNotes(title,body){
    const notes = loadNotes();
    const duplicates = notes.filter((notes)=>{
        return notes.title === title
    })


    if (duplicates.length  === 0) {
 const notes = loadNotes();
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes)

    console.log("adding a new note")
    }
    else{
        console.log("note title taken!!")
    }
   

   
}
export function removeNotes(title){
    const notes = loadNotes();
    if(notes.length === 0){
        console.log("the notes are empty")
    }
    try{ const index = notes.findIndex((notes)=>{
        return notes.title === title
    })
    console.log(`${index} and ${notes[index].title}`)
    console.log("sucessfully removed the notes")}
    catch (e){
        print("no title found to be removed")
    }
}
export function saveNotes(notes){
    fs.writeFileSync('notes.json', JSON.stringify(notes));


}

export function loadNotes(){
    try{
        const databuffer = fs.readFileSync('notes.json')
        return JSON.parse(databuffer.toString())
    }
    catch (e){
        return []
    }
}



export default  {getNotes, addNotes, removeNotes};
