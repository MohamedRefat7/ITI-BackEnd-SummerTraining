function userinformation() {
  var meassage = "enter the number of people: ";
  while (true) {
    var numberofpersons = prompt(meassage);
    if (!isNaN(numberofpersons)) break;
    meassage = "Enter a number not string";
  }
  const users = [];

  for (let i = 0; i < +numberofpersons; i++) {
    var name = prompt(`enter the name of persons ${i + 1}`);

    while (name.length < 4 || name.length > 10) {
      name = prompt(`enter name between 4 and 10`);
    }

    var age = parseInt(prompt(`enter the age ${i + 1} `));

    while (isNaN(age) || age < 11 || age > 60) {
      name = prompt(`age should be between 11 and 60`);
    }

    const user = {
      name: name,
      age: age,
    };
    users.push({ name, age });
  }

  let table = `<table border="1" width="200px">`;
  table += "<tr><th>NAME</th><th>AGE</th></tr>";
  for (let i = 0; i < users.length; i++) {
    const user = users[i];
    table += `<tr><td>${users[i].name}</td><td>${users[i].age}</td></tr>`;
  }
  table += "</table>";
  document.body.innerHTML += table;
}
userinformation();
