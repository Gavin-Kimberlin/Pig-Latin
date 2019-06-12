
$(document).ready(function() {
  $('form#formInput').submit(function (event) {
    event.preventDefault();
    var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'w', 'x', 'z', 'B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'R', 'S', 'T', 'V', 'W', 'X', 'Z', 'Q', 'q'];
    var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    var y = ["y", "Y"];
    var empty = [];
    var userInput = ($("#sentence").val()).split(" ");
    for (i = 0; i < userInput.length;i++){
      var split = (userInput[i]).split('');
      // console.log(threeConsonants);
      if (vowels.includes(split[0])){
        split.push("w", "a", "y");
        var result = split.join("");
        userInput.splice(i,1,result);
      } else if (y.includes(split[0])){
        split.push("y", "a", "y");
        split.shift();
        var result = split.join("");
        userInput.splice(i,1,result);
        console.log("here");
      split.push(split[0],split[1],split[2], 'a', 'y');
    } else if (split[1] === 'q' || split[1] === 'Q') {
      split.push(split[0],split[1],split[2], 'a', 'y');
      split.splice(0,3);
      var result = split.join('');
      userInput.splice(i, 1, result);
    } else if (split[0] === 'q' || split[0] === 'Q') {
      split.push(split[0],split[1], 'a', 'y')
      split.splice(0,2);
      var result = split.join('');
      userInput.splice(i, 1, result);
    } else if (consonants.includes(split[0]) && consonants.includes(split[1]) && consonants.includes(split[2])){
      split.push(split[0],split[1],split[2], 'a', 'y');
      split.splice(0,3);
      var result = split.join('');
      userInput.splice(i, 1, result);

    }else if (consonants.includes(split[0]) && consonants.includes(split[1])){
      split.push(split[0],split[1], 'a', 'y');
      split.splice(0,2);
      var result = split.join('');
      userInput.splice(i, 1, result);

    } else if (consonants.includes(split[0])){
        split.push(split[0], 'a', 'y');
        split.shift();
        var result = split.join('');
        userInput.splice(i, 1, result);
      }
      console.log(split);
    };
    console.log(userInput);
    userInput.join(' ');
    $(".resultSentence").append(userInput.join(" "));

  });
});

//
// empty.unshift(split[0]);      split.shift();
// empty.push("ay");
// empty.join("");
// split.push(empty);
// var result = split.join("");
// userInput.splice(i, 1, result);
