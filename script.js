const myRepos = new XMLHttpRequest();

myRepos.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    const temp = JSON.parse(this.responseText);
    console.log(temp);
    
    let repos = [];

    for (var i = 0; i < temp.length; i++) {
      if(temp[i].name) {
        $('<h4>' + temp[i].name + '</h4>').appendTo('#repos');
        console.log(temp[i].name);
      }
    }
  }

}

myRepos.open("GET","https://api.github.com/users/thecodercody/repos", true);
myRepos.send();

