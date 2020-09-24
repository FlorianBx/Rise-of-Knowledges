const en = (val, insertMany) => {
    const addAllEn = val.quizz.en && [{
        path: val.quizz.en['débutant'],
        lang: 'en',
        difficulty: '0'
        },
        {
        path: val.quizz.en['confirmé'],
        lang: 'en',
        difficulty: '1'
        },
        {
        path: val.quizz.en['expert'],
        lang: 'en',
        difficulty: '2'
        },
    ]
    return typeof addAllEn != 'undefined' && addAllEn.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = en;