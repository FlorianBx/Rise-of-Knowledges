const nl = (val, insertMany) => {
    const addAllNl = val.quizz.nl && [{
        path: val.quizz.nl['débutant'],
        lang: 'nl',
        difficulty: 'débutant'
        },
        {
        path: val.quizz.nl['confirmé'],
        lang: 'nl',
        difficulty: 'confirmé'
        },
        {
        path: val.quizz.nl['expert'],
        lang: 'nl',
        difficulty: 'expert'
        }
    ];
    return typeof addAllNl != 'undefined' && addAllNl.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = nl;