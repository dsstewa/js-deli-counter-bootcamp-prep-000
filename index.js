var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  var number = katzDeliLine.length + 1
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${number} in line.`

}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length < 1) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
  }
}


function currentLine(katzDeliLine) {
  var count = katzDeliLine.length
  var line = katzDeliLine
  if (count < 1) {
    return "The line is currently empty."
  } else {
    
    
    for (let i = count; i > 0; i--) {
         console.log(`The line is currently: ${i}. ${katzDeliLine[i]}`)
    }
  }
  }
  
