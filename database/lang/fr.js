const fr = (val, insertMany) => {
    const addAllFr = [{
        path: val.quizz.fr['débutant'],
        lang: 'fr',
        difficulty: 'débutant'
        },
        {
        path: val.quizz.fr['confirmé'],
        lang: 'fr',
        difficulty: 'confirmé'
        },
        {
        path: val.quizz.fr['expert'],
        lang: 'fr',
        difficulty: 'expert'
        },
    ]
    return typeof addAllFr != 'undefined' && addAllFr.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = fr;