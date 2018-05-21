const {database} = require("../services/firebase");

const book = function(input) {
    this.save = function() {
        return new Promise(resolve => {
            database.ref("books").push(input)
            .then(res => {
                resolve(Object.assign({id: res.key}, input)) 
            })
            .catch(error => {
                console.log("error", error)
            })
        })
    }
}
book.findBookById = (id) => {
    return new Promise(resolve => {
        database.ref("books").orderByKey()
        .equalTo(id).once("value")
        .then(res => {
            resolve(
                resolve(Object.assign({id: id}, res.val()[id]))
            ) 
        })
        .catch(error => {
            console.log("error", error)
        })
    })
}
book.findBookByAuthorId = (id) => {
    return new Promise(resolve => {
        database.ref("books").orderByChild("authorid")
        .equalTo(id).once("value")
        .then(res => {
            resolve(
                Object.keys(res.val()).map(key => Object.assign({id: key}, res.val()[key]))
            ) 
        })
        .catch(error => {
            console.log("error", error)
        })
    })
}
book.getAllBooks = () => {
    return new Promise(resolve => {
        database.ref("books").orderByKey().once("value")
        .then(res => {
            resolve(
                Object.keys(res.val()).map(key => Object.assign({id: key}, res.val()[key]))
            )
        })
        .catch(error => {
            console.log("error", error)
        })
    })
}

module.exports = book