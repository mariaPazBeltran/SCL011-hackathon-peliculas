const genderFilter = (data, condition) => {
    let result = data.filter(element => {
      return element.Genre.includes(condition);
    });
    return result;
  };

window.genderFilter = genderFilter;