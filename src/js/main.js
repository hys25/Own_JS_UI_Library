import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('wrap').html (
    `
    <div class="dropdown">
    <buttoniv class="btn btn-primery dropdown-toggle" id="dropdowmMenuButton">Dropdown button</buttoniv>
    <div class="dropdown-menu" data-toggle-id="dropdowmMenuButton">
        <a href="#" class="dropdown-item">Action1</a>
        <a href="#" class="dropdown-item">Action2</a>
        <a href="#" class="dropdown-item">Action3</a>
    </div>
    </div>`
);

$('.dropdown-toggle').dropdown();