//test to see if each possible sentence contains a letter. If so, then it is a valid sentence.

 var possibleSentences = [ 'Edit the Expression & Text to see matches',
  ' Roll over matches or the expression for details',
  ' Undo mistakes with cmd-z',
  ' Save Favorites & Share expressions with friends or the Community',
  ' Explore your results with Tools',
  ' A full Reference & Help is available in the Library, or watch the video Tutorial',
  '\nSample text for testing:\nabcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ\n0123456789 _+-',
  ',',
  '@#$%^&*();/',
  '<>"\'\n12345 -98',
  '7 3',
  '141 ',
  '6180 9,000 +42\n555',
  '123',
  '4567\t+1-(800)-555-2468\nfoo@demo',
  'net\tbar',
  'ba@test',
  'co',
  'uk\nwww',
  'demo',
  'com\thttp://foo',
  'co',
  'uk/\nhttp://regexr',
  'com/foo',
  'html',
  'q=bar\nhttps://mediatemple',
  'net' ]

var numberOfSentences = 0;

possibleSentences.forEach(sentence => {
  var sentenceTest = new RegExp(/[A-z]+/g)
  if(sentenceTest.test(sentence)){
    numberOfSentences ++
  } else {
  }
})

console.log(numberOfSentences)//21
