const {circle,triangle,square} =require('.lib/shapes')
const inquirer = require('inquirer')
const fs = require('fs')


 const question = [
    {
        input: 'input',
        name: 'brand',
        message: 'text use three characters for logo name',
        validate: (value) => {
            if(value.length < 3){
                return console.log('please enter 3 characters');
            }
            return true;
        }
    },
    {
        input: 'input',
        name: 'color-text',
        message: 'enter color for text or hexadecimal number'
    },
    {
        input: 'checkbox',
        name: 'shape',
        message: ['circle','square','triangle']
    },
    {
        input: 'input',
        name: 'color-shape',
        message: 'enter color for shape or hexadecimal number'   
    }
 ]

 function writeToFile(fileName,data){
     fs.writeFile(fileName,data, (err) => 
     err ? console.log(err) : console.log('logo file created'))
 }

 function init(){
     inquire.prompt(question).then((response) => {
         writeToFile('svg_file.svg',generatePage(response))
     })
 }

 init();