/*===============toggle icon navbar==========*/
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onlclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*=================scroll section active link===================*/
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll = () =>
    {
        sections.forEach(sec => {
            let top=window.scrollY;
            let offset=sec.offsetTop - 150;
            let height=sec.offsetHeight;
            let id=sec.getAttribute('id');

            if(top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            };

        });
        /*=======sticky navbar=======*/
        let header=document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 100);
        /*========================remove toggle icon and  navbar when click navbar link(scroll)===========================*/
        
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    };
    




/*=====================typed js====================*/
    const typed=new Typed('.multiple-text',{
        strings:['Backend Developer...','Frontend Developer...','Fullstack Developer...'],
        typeSpeed:100,
        backSpeed:100,
        backDelay:1000,
        loop:true

    });
    /*==================contact me==========================*/
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
    
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var emailsubject = document.getElementById('emailsubject').value;
        var message = document.getElementById('message').value;
    
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Mnumber:', number);
        console.log('emailsubject:', emailsubject);
        console.log('Message:', message);

        var formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('Mnumber', number);
        formData.append('emailsubject',emailsubject);
        formData.append('message', message);
    
        fetch('https://formspree.io/f/YOUR_FORM_ID', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(function(response) {
            if (response.ok) {
                alert('Thank you for your message!');
                document.getElementById('contactForm').reset();
            } else {
                alert('Oops! There was a problem submitting your form');
            }
        }).catch(function(error) {
            alert('Oops! There was a problem submitting your form');
        });
   } );