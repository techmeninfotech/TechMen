const arr = [];
let nameValue = '';
let emailValue = '';

const sendEmail = (from, name) => {
    console.log('from, name: ', from, name);
    Email.send({
        Host: "smtp.gmail.com",
        Username: "vikramsinhparmar2812@gmail.com",
        Password: "Vikrm@2812",
        To: 'vikramsinhparmar2812@gmail.com',
        From: from,
        Subject: "Sending Email using javascript",
        Body: `Well that was easy!! ${name}`,
    })
        .then(function (message) {
            console.log('message: ', message);
            alert("mail sent successfully")
        }).
        catch(function (error) {
            alert(error)
        });
}

const handleClick = (event) => {
    var checkboxValue = event.target.value;
    arr.push(checkboxValue);
}

const handleChangename = (event) => {
    nameValue = event.target.value;
}
const handleChangeEmail = (event) => {
    emailValue = event.target.value;
}

const handleSubmit = (event) => {

    event.preventDefault();
 
    if (arr.length === 0) {
        alert("Please select at least one option");
        return;
    }
    console.log(arr);
    console.log(nameValue);
    console.log(emailValue);

    sendEmail(emailValue, nameValue);
}

const sliderData = [
    {
      href: "https://www.nilkanthtextilegroup.com",
      imgSrc: "assets/img/work-victory.jpg",
      imgAlt: "Victory",
      title: "SHREE SHUKAN INDUSTRIES LLP",
      description: "At Shree Shukan Textiles Industries we are all the time concerned about the way we create wealth"
    },
    {
        href: "https://fantastic-food-customer-webapp.vercel.app/restaurant",
        imgSrc: "assets/img/fflogo.png",
        imgAlt: "Alex Nowak",
        title: "Fantastic Food",
        description: "Reservation, Digital Menu, Scan and Order, Restaurant management system"
    },
    {
      href: "https://www.whisttler.com",
      imgSrc: "assets/img/work-metiew-smith.jpg",
      imgAlt: "Metiew and Smith",
      title: "Whisttler",
      description: "The Influencer Marketing Mercenaries."
    },
    {
      href: "https://www.murlidharprinters.com/",
      imgSrc: "assets/img/work-alex-nowak.jpg",
      imgAlt: "Alex Nowak",
      title: "Murlidharprinters",
      description: "MPPL is powering high-fashion Indian wear brands spanning the globe, while delivering unparalleled excellence across the apparel value chain."
    },
    {
      href: "https://play.google.com/store/apps/details?id=com.stiklasko.visitlasko",
      imgSrc: "assets/img/lasko.png",
      imgAlt: "Alex Nowak",
      title: "Visit Lasko",
      description: "An tourist application for lasko"
    }
  ];
  
  const slider = document.getElementById('slid');
  
  sliderData.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('slider--item');
    
    if(index === 0) li.classList.add('slider--item-left');
    else if(index === 1) li.classList.add('slider--item-center');
    else li.classList.add('slider--item-right');
  
    li.innerHTML = `
      <a href="${item.href}">
        <div class="slider--item-image">
          <img src="${item.imgSrc}" alt="${item.imgAlt}">
        </div>
        <p class="slider--item-title">${item.title}</p>
        <p class="slider--item-description">${item.description}</p>
      </a>
    `;
    slider.appendChild(li);
  });
  