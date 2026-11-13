
const notes = [
  'I love you more than my pc, playstation, games and everything else combined.',
  'You make every little break we have together so memorable.',
  '"anytime thoughts like that come to ur mind that ur fat or shi, see ur not even fat at all, still u say that, and it pisses me off, so anytime they come, u js stfu and forget about those thoughts, cuz how tf r u telling me ur fat when u hv got the most curvaceous and keen to reproduce typa body."',
'"At one point ur left side(want) was tucked in, and ur right side(ignorance) was thicker and it dropped in front of ur face touching the corner of ur eye, was a mesmerising sight yk, ehh ur life is too boring cuz maybe u find urself pretty but u cant see u thru my eyes, and i can bet on it, u dont see urself as i do."',
'"The way u were giggling today, u looked like a baby today, like underneath all that attitude and hard ass behaviour, u r js a child, who doesnt know when to be a child, like thats the moment u finally put ur guard down, when u r with me, like today, like last thursday, on the calls, in fromt of others u r js soo tensed up physically mentally, and when u finally let ur guard down and u were all bubbly, i thought yup rafsan well done, she does feel safe with u."',
' BLEHHHHHHHHHH ',
'And imma bleh you as well',
'I love you soo muchhh',
'Life with you is amazing💖. SO, amazing that without you there is no life meri jaan.', 
"Don't loose them😅",
'You will always be my baby, even if you become the mother of our babies.',
'I scoreddddddddddddddd more than Ronaldo. SIUUUUUUUUUUUUUUUUUUUU!', 
'My good little girl.',
];

const noteButton = document.querySelector('#note-button');
const noteOutput = document.querySelector('#note-output');
let previousNoteIndex = -1;

noteButton.addEventListener('click', () => {
  let nextIndex = Math.floor(Math.random() * notes.length);
  if (notes.length > 1) {
    while (nextIndex === previousNoteIndex) {
      nextIndex = Math.floor(Math.random() * notes.length);
    }
  }

  previousNoteIndex = nextIndex;
  noteOutput.textContent = notes[nextIndex];
  noteButton.innerHTML = 'Pick another note <span aria-hidden="true">↗</span>';
});
