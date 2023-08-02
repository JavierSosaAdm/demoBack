return exerciseUtils.promisifiedReadFile('stanza-02.txt')
    .then((content) => {
      utils.blue(content);
  return exerciseUtils.promisifiedReadFile('stanza-03.txt');
    })
    .then((content) => {
      utils.blue(content);
      utils.blue('done');
    })


    const promiseB = new Promise((resolve, reject) => {
        return exerciseUtils.promisifiedReadFile('stanza-04.txt')
        .then((response) => utils.blue(response))
        .hamdleError((error) => utils.magenta(new Error(error)))
      })