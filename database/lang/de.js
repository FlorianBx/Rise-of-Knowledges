const de = (val, insertMany) => {
    const addAllDe = val.quizz.de && [{
        path: val.quizz.de['débutant'],
        lang: 'de',
        difficulty: 'débutant'
        },
        {
        path: val.quizz.de['confirmé'],
        lang: 'de',
        difficulty: 'confirmé'
        },
        {
        path: val.quizz.de['expert'],
        lang: 'de',
        difficulty: 'expert'
        },
    ];
    return typeof addAllDe != 'undefined' && addAllDe.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = de;