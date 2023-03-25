var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

const handleSubmit = (event) => {
    const opt1 = document.getElementById('opt-1').value;
    const opt2 = document.getElementById('opt-2').value;
    const opt3 = document.getElementById('opt-3').value;
    const opt4 = document.getElementById('opt-4').value;
    const opt5 = document.getElementById('opt-5').value;
    const opt6 = document.getElementById('opt-6').value;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const data = {
        opt1,
        opt2,
        opt3,
        opt4,
        opt5,
        opt6,
        name,
        email
    };

    console.log(data);

    // send this data to mail address
 
    Email.send({
        Host: "smtp.gmail.com",
        Username: "vikramsinhparmar2812@gmail.com",
        Password: "Vikram@28",
        To: "vikramsinhparmar2812@gmail.com",   
        From: "vikramsinhparmar2812@gmail.com",
        Subject: "New message on contact form",
        Body: `Name: ${name} <br/> Email: ${email} <br/> Option 1: ${opt1} <br/> Option 2: ${opt2} <br/> Option 3: ${opt3} <br/> Option 4: ${opt4} <br/> Option 5: ${opt5} <br/> Option 6: ${opt6}`,
    }).then(
        message => alert("mail sent successfully")
    );


}