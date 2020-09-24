const nl = (val, insertMany) => {
    const addAllNl = val.quizz.nl && [{
        path: val.quizz.nl['débutant'],
        lang: 'nl',
        difficulty: '0'
        },
        {
        path: val.quizz.nl['confirmé'],
        lang: 'nl',
        difficulty: '1'
        },
        {
        path: val.quizz.nl['expert'],
        lang: 'nl',
        difficulty: '2'
        }
    ];
    return typeof addAllNl != 'undefined' && addAllNl.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = nl;