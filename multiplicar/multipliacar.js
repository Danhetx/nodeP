//require
const fs = require('fs');
const colors = require('colors');

let listarTrabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un numero`);
            return
        }
        if (!(limite > 0)) {
            reject(`${base} no es un numero`);
            return
        }

        let data = '';

        console.log('==============================='.green);
        console.log(`tabla de ${base}`.green);
        console.log('==============================='.green);
        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i} `);
        }
    })
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`Base: ${base} no es un numero`);
            return
        }
        if (!(limite > 0)) {
            reject(`Limite: ${limite} no es un numero mayor que 0`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve('se ha creado el archivo ' + `tabla-${base}.txt`.green);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTrabla
}