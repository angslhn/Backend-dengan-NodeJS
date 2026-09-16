// Break dan Continue

let value = 100
let stopAt = 20

// Break
let text = ''

for (let i = 1; i <= value; i++) {
  text += ` ${i}`
  
  if (i === stopAt) {
    break
  }
}

console.log(text)

// Continue
text = ''

value = 20

for (let i = 1; i <= value; i++) {
  if (i % 2 === 0) {
    continue
  }
  
  text += ` ${i}`
}

console.log(text)
