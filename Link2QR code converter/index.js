//Importing all the modules neede for the project
import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs'

//Using inquirer to get the user input 
inquirer
  .prompt([
    {message :"Enter your Url: ", name: "URL"}
  ])
  .then((answers) => {
    // saving the user input to the url variable
    var url = answers.URL;

    //using the qr-svg module to turn the user input into a qr png image
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(url));

    //Creating a text file with the user input as the content
   fs.writeFile('url.txt', url, (err)=> {
        if (err) throw err;

        //User feedback via the command line
        console.log("QR link has been created");
   });
  });
 
