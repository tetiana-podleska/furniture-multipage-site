import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();

$(function() {
    $('.header__btn').on('click', function() {
        $('.rightside-menu').removeClass('rightside-menu--close');
    })
    $('.rightside-menu__close').on('click', function() {
        $('.rightside-menu').addClass('rightside-menu--close');
    })
})