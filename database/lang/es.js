const es = (val, insertMany) => {
    const addAllEs = val.quizz.es && [{
        path: val.quizz.es['débutant'],
        lang: 'es',
        difficulty: 'débutant'
        },
        {
        path: val.quizz.es['confirmé'],
        lang: 'es',
        difficulty: 'confirmé'
        },
        {
        path: val.quizz.es['expert'],
        lang: 'es',
        difficulty: 'expert'
        }
    ];
    return typeof addAllEs != 'undefined' && addAllEs.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = es;