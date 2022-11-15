console.log ('Hello World');

let h1_arr = document.getElementsByTagName ('h1')
console.log (h1_arr[0])
let h = h1_arr[0]
h.innerHTML = 'Lab12 Assignment'
h.style.color = 'blue'

let hr = document.createElement ('hr')
console.log (hr.classList);
document.body.appendChild(hr)

let h2 = document.createElement ('h2')
h2.innerHTML = 'Task'
h2.style.color = 'red'
document.body.appendChild (h2)

let p1 = document.createElement ('p1')
p1.innerHTML = 'In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:'
document.body.appendChild (p1)

let ul1 = document.createElement ('ul')
let li1 = document.createElement ('li')
li1.innerHTML = 'find elements in the DOM (' +'<b>5 points</b>' +');'
ul1.appendChild(li1)
ul1.style.color = 'green'

let li2 = document.createElement ('li')
li2.innerHTML = 'create/add/remove elements (' +'<b>5 points</b>' +');'
ul1.appendChild(li2)
li2.style.color = 'purple'
document.body.appendChild(ul1)

let li3 = document.createElement ('li')
li3.innerHTML = 'change content of the elements (' +'<b>5 points</b>' +');'
ul1.appendChild(li3)
li3.style.color = 'green'

let li4 = document.createElement ('li')
li4.innerHTML = 'change styles of the elements (' +'<b>5 points</b>' +');'
ul1.appendChild(li4)
li4.style.color = 'purple'
document.body.appendChild(ul1)

let li5 = document.createElement ('li')
li5.innerHTML = 'change attributes of the elements (' +'<b>5 points</b>' +');'
ul1.appendChild(li5)
li5.style.color = 'green'

let li6 = document.createElement ('li')
li6.innerHTML = 'change classes of the elements (' +'<b>5 points</b>' +');'
ul1.appendChild(li6)
li6.style.color = 'purple'
document.body.appendChild(ul1)

let p2 = document.createElement ('p2')
p2.innerHTML = 'Basic necessary code can be found in the supplementary materials to the Lecture 12 via this '
document.body.appendChild (p2)

let a2 = document.createElement('a');
a2.setAttribute('href', 'https://github.com/yessen/nu_web_programming/tree/main/week12');
a2.innerText = 'link.';
document.body.appendChild (a2);

let hr2 = document.createElement ('hr')
console.log (hr2.classList)
document.body.appendChild(hr2);

let h3 = document.createElement ('h2')
h3.innerHTML = 'Submission'
h3.style.color = 'red'
document.body.appendChild (h3)

let p3 = document.createElement ('p3')
p3.innerHTML = 'To submit your work, follow these instructions:'
document.body.appendChild (p3)

let ul2 = document.createElement ('ul')

let li7 = document.createElement ('li')
li7.innerHTML = 'Create a new repository on GitHub, named ' +'<b>lab12 (1 point)</b>' +'.'
ul2.appendChild(li7)
ul2.style.color = 'green'

let li8 = document.createElement ('li')
li8.innerHTML = 'Clone this repository to your local machine and work inside it.'
ul2.appendChild(li8)
li8.style.color = 'purple'
document.body.appendChild(ul2)

let li9 = document.createElement ('li')
li9.innerHTML = 'Create a new HTML file, called ' +'<b>index.html</b>' +', which has only one h1> tag with "Hello, World!" message (' +'<b>1 point</b>' +').'
ul2.appendChild(li9)
li9.style.color = 'green'

let li10 = document.createElement ('li')
li10.innerHTML = 'Create a new JavaScript file, called ' +'<b>main.js</b>' +', which must contain your program (assignment) described above (' +'<b>1 point</b>' +').'
ul2.appendChild(li10)
li10.style.color = 'purple'
document.body.appendChild(ul2)

let li11 = document.createElement ('li')
li11.innerHTML = 'Link this ' +'<b>main.js</b>' +' file to your ' +'<b>index.html</b>' +' file (Note: place your script at the end of the ' +'<b>body</b>' +' section).'
ul2.appendChild(li11)
ul2.style.color = 'green'

let li12 = document.createElement ('li')
li12.innerHTML = 'Write a JavaScript program in ' +'<b>main.js</b>' +' to make your ' +'<b>index.html</b>' +' look identical to this HTML file (' +'<b>5 points</b>' +').'
ul2.appendChild(li12)
li12.style.color = 'purple'
document.body.appendChild(ul2)

let li13 = document.createElement ('li')
li13.innerHTML = 'After you finish your work, submit it to the Github (' +'<b>2 points</b>' +');'
ul2.appendChild(li13)
li13.style.color = 'green'
document.body.appendChild(ul2)

let hr3 = document.createElement ('hr')
console.log (hr3.classList);
document.body.appendChild(hr3)
