const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
 //   console.log('click'); // this will give a blink click written in the console screen to stop it we use prevent default function
  //  console.log(e);
     console.log(e.target);  // target the tag use and display it on the console
     console.log(e.target.className);   // for getting class name
    document.querySelector('#my-form').style.background = 'ccc';
    document.querySelector('body').classList.add('bg-dark');
});

btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
 //   console.log('click'); // this will give a blink click written in the console screen to stop it we use prevent default function
  //  console.log(e);
     console.log(e.target);  // target the tag use and display it on the console
     console.log(e.target.className);   // for getting class name
    document.querySelector('#my-form').style.background = 'ccc';
    document.querySelector('body').classList.add('bg-dark');
});