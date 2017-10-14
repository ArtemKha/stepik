const params = [ '4',' ','1','4','\n','a',':',' ','0','\n','b',':',' ','1','0',
'\n','c',':',' ','1','1','0','\n','d',':',' ','1','1','1','\n','0',
  '1', '0', '0', '1', '1', '0', '0', '1', '0', '0', '1', '1', '1', '\n'].join('')
const input = params.split('\n').slice(0, -1)
const last = input.length - 1
let string = input[last]
let code = {};
for (let i = 1; i < last; i++) {
  const pair = input[i].split(': ')
  code[pair[0]] = pair[1]
}

let decoded = ''

function cut(string) {
  for (let char in code) {
    if (string.startsWith(code[char])) {
      decoded += char;
      string = string.slice(code[char].length);
    }
  }
  if (string.length > 0) cut(string)
}

cut(string)
console.log(decoded)

