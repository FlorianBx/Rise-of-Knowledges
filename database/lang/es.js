const es = (val, insertMany) => {
    const addAllEs = val.quizz.es && [{
        path: val.quizz.es['débutant'],
        lang: 'es',
        difficulty: '0'
        },
        {
        path: val.quizz.es['confirmé'],
        lang: 'es',
        difficulty: '1'
        },
        {
        path: val.quizz.es['expert'],
        lang: 'es',
        difficulty: '2'
        }
    ];
    return typeof addAllEs != 'undefined' && addAllEs.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = es;