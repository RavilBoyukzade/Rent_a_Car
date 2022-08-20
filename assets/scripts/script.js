// document.getElementsByClassName("main-title")[0].style.color = "red";
document.getElementById("main-action").onclick =
    function(){
    // alert(1);
        document.getElementById("cars")
            .scrollIntoView({behavior:"smooth"});
    }
var buttons = document.getElementsByClassName(" car-button");

for (var i=0;i<buttons.length;i++){
    buttons[i].onclick =
        function(){
            document.getElementById("price")
                .scrollIntoView({behavior:"smooth"});
        }
}
var names = document.getElementById("name");
var phone = document.getElementById("phone");
var car = document.getElementById("car");
document.getElementById("price-action").onclick =
    function(){
        if(names.value ===""&&phone.value ===""&&car.value ===""){
            names.style.borderColor="red";
            phone.style.borderColor="red";
            car.style.borderColor="red";
            alert("Заполните все поля!");
        }
        else if(names.value ==="")
        {
            names.style.borderColor="red";
            alert("Заполните поле Имя");
        }
        else if(phone.value ==="")
        {
            phone.style.borderColor="red";
            alert("Заполните поле телефон");
        }
        else if(car.value ==="")
        {
            car.style.borderColor="red";
            alert("Заполните поле автомобили");
        }
        else
        {
            alert("Спасибо за заявку! Мы свяжемся с Вами в близжайшее время");
            names.value = "";
            phone.value = "";
            car.value = "";
            names.style.borderColor="#5D5D5F";
            phone.style.borderColor="#5D5D5F";
            car.style.borderColor="#5D5D5F";
        }
    }
document.addEventListener("DOMContentLoaded", function () {
    let layer = document.querySelector('.price-image');
    document.addEventListener('mousemove', (event) => {
        layer.style.transform = 'translate3d(' + ((event.clientX * 0.3) / 8) + 'px,' + ((event.clientY * 0.3) / 8) + 'px,0px)';
    });

    const elem = document.querySelector(".main");
    document.addEventListener('scroll', () => {
        elem.style.backgroundPositionX = '0' + (0.3 * window.pageYOffset) + 'px';
    })
});
