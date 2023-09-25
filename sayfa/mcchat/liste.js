var color = {
  '1': 'blue',
  '2': 'green',
  '3': 'darkaqua',
  '4': 'red',
  '5': 'purple',
  '6': 'orange',
  '7': 'gray',
  '8': 'darkgray',
  '9': 'lightblue',
  '0': 'black',
  'a': 'lime',
  'b': 'aqua',
  'c': 'lightred',
  'd': 'pink',
  'e': 'yellow',
  'f': 'white'
};

var input = $('#input');
var output = $('#output');
var append;

input.keyup(function() {
  render($(this).val());
});

function render(string) {
  append = '';
  output.html(replacers(string));
}

function replacers(string) {
  replaced = string
    .replace(/&([a-f0-9])/gi, setColor)
    .replace(/&k/gi, setMagic)
    .replace(/&l/gi, '<strong>')
    .replace(/&m/gi, '<s>')
    .replace(/&n/gi, '<u>')
    .replace(/&o/gi, '<em>')
    .replace(/&r/gi, resetFormat)
    .replace(/\\n/gi, '<br />');
  return replaced;
}

function setColor(match) {
  var value = color[match.substr(1, match.length)];
  addClose;
  return '<span class="' + value + '">';
}

function setMagic(match) {
  return '<span class="magic"></span>';
}

function getMagic() {
return Math.random().toString(16).substr(1,2).split('.').join("");
}

function runMagic() {
  $('.magic').text(getMagic);
  window.setTimeout(runMagic, 60);
};
runMagic();

function resetFormat(match) {
  addClose;
  return '</strong></s></u></em><span class="white">';
}

function addClose() {
  append = '</span>' + append;
}