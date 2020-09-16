const it = (val, insertMany) => {
    const addAllIt = val.quizz.it && [{
        path: val.quizz.it['débutant'],
        lang: 'it',
        difficulty: 'débutant'
        },
        {
        path: val.quizz.it['confirmé'],
        lang: 'it',
        difficulty: 'confirmé'
        },
        {
        path: val.quizz.it['expert'],
        lang: 'it',
        difficulty: 'expert'
        }
    ];
    return typeof addAllIt != 'undefined' && addAllIt.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = it;