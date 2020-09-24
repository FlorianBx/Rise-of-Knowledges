const fr = (val, insertMany) => {
    const addAllFr = [{
        path: val.quizz.fr['débutant'],
        lang: 'fr',
        difficulty: '0'
        },
        {
        path: val.quizz.fr['confirmé'],
        lang: 'fr',
        difficulty: '1'
        },
        {
        path: val.quizz.fr['expert'],
        lang: 'fr',
        difficulty: '2'
        },
    ]
    return typeof addAllFr != 'undefined' && addAllFr.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = fr;