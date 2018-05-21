const {database} = require("../services/firebase");

const author = function(input) {
    this.save = function() {
        return new Promise(resolve => {
            database.ref("authors").push(input)
            .then(res => {
                resolve(Object.assign({id: res.key}, input)) 
            })
            .catch(error => {
                console.log("error", error)
            })
        })
    }
}
author.findAuthorById = (id) => {
    return new Promise(resolve => {
        database.ref("authors").orderByKey()
        .equalTo(id).once("value")
        .then(res => {
            resolve(Object.assign({id: id}, res.val()[id])) 
        })
        .catch(error => {
            console.log("error", error)
        })
    })
}
author.getAllAuthors = () => {
    return new Promise(resolve => {
        database.ref("authors").orderByKey().once("value")
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

module.exports = author