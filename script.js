import products from "./products.json" assert { type: "json" };
let coffe = document.querySelector('.coffe')
let tea = document.querySelector('.tea')
let dessert = document.querySelector('.dessert')
let n = document.querySelector('.buttondes')
let b = document.querySelector('.buttoncoffe')
let v = document.querySelector('.buttontea')
function llll() {
    b.classList.toggle('byba')
    coffe.classList.toggle('hide')
    tea.classList.add('hide')
    dessert.classList.add('hide')
    n.classList.remove('byba')
    v.classList.remove('byba')
}

function kkkk() {
    tea.classList.toggle('hide')
    coffe.classList.add('hide')
    dessert.classList.add('hide')
    b.classList.remove('byba')
    v.classList.toggle('byba')
    n.classList.remove('byba')
}

function vvvv() {
    dessert.classList.toggle('hide')
    coffe.classList.add('hide')
    tea.classList.add('hide')
    b.classList.remove('byba')
    n.classList.toggle('byba')
    v.classList.remove('byba')
};
v.addEventListener('click', kkkk);
n.addEventListener('click', vvvv);
b.addEventListener('click', llll);


let fff = document.querySelectorAll('.odin');
let hhh = document.querySelectorAll('.dva');
let jjj = document.querySelectorAll('.tri');
let hedings = document.querySelectorAll('.nazv');
let cxz = document.querySelectorAll('.price');
let zxc = document.querySelectorAll('.desc');
let bbb = document.querySelectorAll('.s');
let ddd = document.querySelectorAll('.m');
let ggg = document.querySelectorAll('.l');
let ppp = document.getElementById('s')
let pp = document.getElementById('m')
let p = document.getElementById('l')
let zxccxz = document.querySelector('.close')
function close() {
    kartochki.classList.toggle('hide')
}
zxccxz.addEventListener('click', close)
function kkkkk() {
    ppp.classList.toggle('alkani')
    pp.classList.remove('alkani')
    p.classList.remove('alkani')
}

function kkk() {
    ppp.classList.remove('alkani')
    pp.classList.toggle('alkani')
    p.classList.remove('alkani')
}

function kk() {
    ppp.classList.remove('alkani')
    p.classList.toggle('alkani')
    pp.classList.remove('alkani')
};
ppp.addEventListener('click', kkkkk);
pp.addEventListener('click', kkk);
p.addEventListener('click', kk);

let iiii = document.getElementById('odinn')
let iii = document.getElementById('dvaa')
let ii = document.getElementById('trii')
function zzzz() {
    iiii.classList.toggle('alkani')
}

function zzz() {
    iii.classList.toggle('alkani')
}

function zz() {
    ii.classList.toggle('alkani')
};
iiii.addEventListener('click', zzzz);
iii.addEventListener('click', zzz);
ii.addEventListener('click', zz);



let modxed = document.querySelector('.nazvv')
let moddesd = document.querySelector('.descc')
let david = document.querySelector('.imgggg')
let alkash = document.getElementById('dengii')
function getcardinfo(index) {
    return function () {
        let text = karti[index].querySelector("h2").innerText;
        let pathtoimg = karti[index].querySelector('img').src;
        let desc = karti[index].querySelector('p').innerText
        let dengi = karti[index].querySelector('.price').innerText

        modxed.innerHTML = text
        moddesd.innerHTML = desc
        david.src = pathtoimg
        alkash.innerHTML = dengi
        console.log(modxed, moddesd, david)
    }
}
//хороший вопрос. давид.срц




let karti = document.querySelectorAll('.kartochka');
let kartochki = document.querySelector('.modal');
function zczzczcz() {
    kartochki.classList.toggle('hide')
}
for (let i = 0; i < 20; i++) {
    karti[i].addEventListener('click', zczzczcz)
    karti[i].addEventListener('click', getcardinfo(i))
}


for (let x = 0; x < 20; x += 1) {
    hedings[x].innerText = products[x].name;
    cxz[x].innerHTML = "$" + products[x].price;
    zxc[x].innerHTML = products[x].description;
}
for (let v = 0; v < 20; v++) {
    fff[v].innerHTML = products[v].additives[v].name;
    hhh[v].innerHTML = products[v].additives[v + 1].name;
    jjj[v].innerHTML = products[v].additives[v + 2].name;
    bbb[v].innerHTML = products[v].sizes.s.size;
    ddd[v].innerHTML = products[v].sizes.m.size;
    ggg[v].innerHTML = products[v].sizes.l.size;
}











