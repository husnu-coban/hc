const akrep=document.getElementsByClassName("akrep");
const akrep2=document.getElementsByClassName("akrep2");
const yelkovan=document.getElementsByClassName("yelkovan");
const yelkovan2=document.getElementsByClassName("yelkovan2");
const saniye=document.getElementsByClassName("saniye");
const saniye2=document.getElementsByClassName("saniye2");

zaman();

function zaman(){
    const now=new Date();
    const hour=now.getHours();
    const minute=now.getMinutes();
    const second=now.getSeconds();

    akrep[0].style.transform=`rotate(${((hour/12)*360)+((minute/720)*360)}deg)`;
    akrep[1].style.transform=`rotate(${((hour/12)*360)+((minute/720)*360)}deg)`;
    akrep2[0].style.transform=`rotate(${((hour/12)*360)+((minute/720)*360)}deg)`;

    yelkovan[0].style.transform=`rotate(${(minute/60)*360}deg)`;
    yelkovan[1].style.transform=`rotate(${(minute/60)*360}deg)`;
    yelkovan2[0].style.transform=`rotate(${(minute/60)*360}deg)`;

    saniye[0].style.transform=`rotate(${(second/60)*360}deg)`;
    saniye2[0].style.transform=`rotate(${(second/60)*360}deg)`;
}

setInterval(zaman,1000);
