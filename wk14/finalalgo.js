// Which folder its contained in. -parent
// file contents {uniqueName: File Object} -file
// subfolders {uniqueName: Folder object} - subfolder
var userInput = process.stdin;
userInput.setEncoding('utf-8');

class Folder {
    constructor(name, parent){
        this.Name = name;
        this.Parent = parent;
        this.File = {};
        this.Subfolder = {};
    }
}

class FolderStructure{
    constructor(){
        this.root = new Folder("root", null);
        this.currFolder = this.root;
    }

    newFolder(name) {
        if (name in this.currFolder.Subfolder){
            console.log("A folder with that name alredy exists!");
        } else {
            this.currFolder.Subfolder[name] = new Folder(name, this.currFolder);
        }
    }

    delFolder(name){
        if (name in this.currFolder.Subfolder){
            delete this.currFolder.Subfolder[name];
        } else {
            console.log("No such folder!")
        }
    }

    changeFolder(name){
        if (name === ".."){
            if(this.currFolder.parent !== null){
                this.currFolder = this.currFolder.parent;
            }
        }
        if (name in this.currFolder.Subfolder){
            this.currFolder = this.currFolder.Subfolder[name];
        } else {
            console.log(`There is no sub-folder named ${name} in the current folder`);
        }
    }

    createFile(fileName, fileRef){
        if (fileName in this.currFolder.File){
            console.log("A file with that name already exists. Overwrite? (y/n)")
            userInput.on('data', data => {
                if(data === "y\n"){
                    this.currFolder.File[fileName] = fileRef;
                } else if (data === "n\n"){
                    console.log("Please try again with a different name!")
                    return;
                } else {
                    console.log("This is a yes or no question bro.")
                }
            })
        }
    }
}
