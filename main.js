var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

//dong mo menu
mobileMenu.onclick = function() {
    var isClosed = header.clientHeight === headerHeight;
    if ( isClosed ) {
        header.style.height='235px';
    } else {
        header.style.height= null;
    }
}

//tu dong dong khi chon menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')

for ( var i=0; i< menuItems.length ; i++ ) {
    menuItems[i].onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if ( isParentMenu ) {
            event.preventDefault();
        } else {
            header.style.height= null;
        }
    }
}

// //Buy tickets

// const buyBtns = document.querySelectorAll('.js-buy-ticket');
// const modal = document.querySelector('.js-modal');
// const modalContainer = document.querySelector('.js-modal-container');
// const modalClose = document.querySelector('.js-modal-close');

// //Hàm mở modal mua vé ( thêm class open vào class modal )
// function showBuyTickets() {
//     modal.classList.add('open');
// }

// //Hàm mở modal mua vé ( gỡ bỏ class open của class modal )
// function hideBuyTickets() {
//     modal.classList.remove('open');
// }

// //Lặp qua từng thẻ button và nghe hành vi click
// for ( const buyBtn of buyBtns ) {
//     buyBtn.addEventListener('click', showBuyTickets);
// }

// //Nghe hành vi click vào button close
// modalClose.addEventListener('click', hideBuyTickets);

// modal.addEventListener('click', hideBuyTickets);

// modalContainer.addEventListener('click', function(event) {
//     event.stopPropagation();
// } )


// Xu ly mo nhac
const playMusicRumbling = document.querySelector('.js-play-music-rumbling');
console.log(playMusicRumbling);
playMusicRumbling.onclick = function() {
    document.querySelector('#audio1').play()
    document.querySelector('#audio2').pause()
    document.querySelector('#audio3').pause()
}

const playMusicMywar = document.querySelector('.js-play-music-mywar');
console.log(playMusicMywar);
playMusicMywar.onclick = function() {
    document.querySelector('#audio2').play()
    document.querySelector('#audio1').pause()
    document.querySelector('#audio3').pause()
}

const playMusicYsbg = document.querySelector('.js-play-music-ysbg');
console.log(playMusicYsbg);
playMusicYsbg.onclick = function() {
    document.querySelector('#audio3').play()
    document.querySelector('#audio1').pause()
    document.querySelector('#audio2').pause()
}