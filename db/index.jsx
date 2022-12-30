import * as SQLite from 'expo-sqlite'

const dbFavoritos = SQLite.openDatabase('favoritos.db')

export const init = () => {
    const promise = new Promise((resolve, reject)=> {
        dbFavoritos.transaction((tx)=>{
            tx.execute(`CREATE TABLE IF NOT EXISTS favoritos
                (   idLibro INTEGER PRIMARY KEY NOT NULL,
                    titulo TEXT NOT NULL,
                    autor TEXT NOT NULL,
                    fechaCreacion DATE NOT NULL
                )`, [],
            ()=> {resolve()},
            (_, err)=> {reject(err)}
            )
        })
    })
    return promise
}

export const insertFavorito = (idLibro, titulo, autor) => {
    const today = new Date();

    const promise = new Promise((resolve, reject)=> {
        dbFavoritos.transacion((tx)=> {
            tx.execute(`INSERT INTO favoritos (idLibro, titulo, autor, fechaCreacion) VALUES (?, ?, ?, ?);`,
            [idLibro, titulo, autor, today], [],
            (_,result)=> resolve(result),
            (_, err)=> reject(err))
        })
    })

    return promise
}