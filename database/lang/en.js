const en = (val, insertMany) => {
    const addAllEn = val.quizz.en && [{
        path: val.quizz.en['débutant'],
        lang: 'en',
        difficulty: 'débutant'
        },
        {
        path: val.quizz.en['confirmé'],
        lang: 'en',
        difficulty: 'confirmé'
        },
        {
        path: val.quizz.en['expert'],
        lang: 'en',
        difficulty: 'expert'
        },
    ]
    return typeof addAllEn != 'undefined' && addAllEn.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = en;