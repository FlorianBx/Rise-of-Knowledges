const it = (val, insertMany) => {
    const addAllIt = val.quizz.it && [{
        path: val.quizz.it['débutant'],
        lang: 'it',
        difficulty: '0'
        },
        {
        path: val.quizz.it['confirmé'],
        lang: 'it',
        difficulty: '1'
        },
        {
        path: val.quizz.it['expert'],
        lang: 'it',
        difficulty: '2'
        }
    ];
    return typeof addAllIt != 'undefined' && addAllIt.map(value => {
        insertMany(value.path, value.lang, value.difficulty);
    });
}

module.exports = it;