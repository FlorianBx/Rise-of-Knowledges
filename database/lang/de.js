const de = (val, insertMany) => {
    const addAllDe = val.quizz.de && [{
        path: val.quizz.de['débutant'],
        lang: 'de',
        difficulty: '0'
        },
        {
        path: val.quizz.de['confirmé'],
        lang: 'de',
        difficulty: '1'
        },
        {
        path: val.quizz.de['expert'],
        lang: 'de',
        difficulty: '2'
        },
    ];
    return typeof addAllDe != 'undefined' && addAllDe.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = de;