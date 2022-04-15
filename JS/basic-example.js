//$(':header').addClass('headline');
/*$('li[id!="one"]')
    .hide()
    .delay(500)
    .fadeIn(1400);*/
//$('li:lt(3)').hide().fadeIn(1500);
let $list = $('li');
//$list.ready('click', function () {
//    $(this).remove();
//});
//$('li em').addClass('seasonal');
let $listHot = $('li.hot');
//$listHot.addClass('favorite');
let $unordered = $('ul');
/*let $listHTML = $unordered.html();
$unordered.append($listHTML);*/

/*let $listText = $unordered.text();
$unordered.append('<p>' + $listText + '</p>');*/

/*let  $listItemHTML = $list.html();
$list.append('<i>' + $listItemHTML + '</i>');*/

/*let $listItemText = $list.text();
$list.append('<i>' + $listItemText + '</i>');*/

/*$listHot.html(function () {
    return '<em>' + $(this).text() + '</em>';
});*/

/*$(function () {
    $('li:contains("pine")').text('almonds');
    $listHot.html(function () {
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
});*/

/*let $newFragment = $('<li>');
let $newItem = $('<li class="new">item</li>');*/

/*$(function () {
   $unordered.before('<p class="notice">Just updated</p>');
   $listHot.prepend('+ ');
   let $newListItem = $('<li><em>gluten-free</em> soy sauce</li>');
   $('li:last').after($newListItem);
});*/

/*$(function () {
   $('li#three').removeClass('hot');
   $('li.hot').addClass('favorite');
   $('ul').attr('id', 'group');
});


//$list.css('background-color', '#272727');
$list.css('padding-left', '+=20');

$list.css({
    'background-color': '#272727',
    'font-family': 'Courier'
});*/

/*$(function () {
    let $backgroundColor = $list.css('background-color');
    $unordered.append('<p>Color was: ' + $backgroundColor + '</p>');
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': '#000',
        'font-family': 'Georgia',
        'padding-left': '+=75'
    });
});*/


/*$list.each(function () {
   let ids = this.id;
   $(this).append('<em class="order">' + ids + '</em>');
});*/

/*$(function () {
    $list.each(function () {
        let ids = this.id;
        $(this).append(' <span class="order">' + ids + '</span>');
    });
});*/

/*$list.on('click', function () {
   $(this).addClass('complete');
});*/

/*$(function () {
    let ids = '';
    let $listItems = $('li');

    $listItems.on('mouseover click', function () {
        ids = this.id;
        $listItems.children('span').remove();
        $(this).append(' <span class="priority">' + ids + '</span>');
    });

    $listItems.on('mouseout', function () {
        $(this).children('span').remove();
    });
});*/


// Using Each
/*$list.on('click', function (e) {
    eventType = e.type;
    console.log(eventType);
});*/

// Event Object
/*$(function () {

    $list.on('click', function (e) {
        $('li span').remove();
        let date = new Date();
        date.setTime(e.timeStamp);
        let clicked = date.toDateString();
        $(this).append('<span class="date">' + clicked + ' ' + e.type + '</span>');
    });

});*/

// Delegating Events
/*$(function () {

    let listItem,
        itemStatus,
        eventType;

    $unordered.on(
        'click mouseover',
        ':not(#four)',
        {status: 'important'},
        function (e) {
            listItem = 'Item: ' + e.target.textContent + '<br />';
            itemStatus = 'Status: ' + e.data.status + '<br />';
            eventType = 'Event: ' + e.type;
            $('#notes').html(listItem + itemStatus + eventType);
        }
    );

});*/


// Basic Effects
/*$(function () {
    $('h2').hide().slideDown();
    $list.hide().each(function (index) {
        $(this).delay(700 * index).fadeIn(700);
    });
    $list.on('click', function () {
        $(this).fadeOut(700);
    });
});*/


// Using Animation
/*$(function () {
    $list.on('click', function () {
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=80'
        }, 500, function () {
            $(this).remove();
        });
    });
});*/

// Traversing
/*$(function () {
    let $h2 = $('h2');
    $unordered.hide();
    $h2.append('<a class="show">show</a>');

    $h2.on('click', function () {
        $h2.next()
            .fadeIn(500)
            .children('.hot')
            .addClass('complete');
        $h2.find('a').fadeOut();
    });
}); */

// Filters in Use
/*$list.filter('.hot:last').removeClass('hot');
$('li:not(.hot)').addClass('cool');
$list.has('em').addClass('complete');

$list.each(function () {
    let $this = $(this);
    if ($this.is('.hot')) {
        $this.prepend('Priority item: ');
    }
});

$('li:contains("honey")').append(' (local)');*/

// Using Index Numbers
/*$(function () {
    $('li:lt(2)').removeClass('hot');
    $('li').eq(0).addClass('complete');
    $('li:gt(2)').addClass('cool');
});*/

// Example Events
/*$(function () {
    $list.on('click', function () {
        $(this).css("background-color", "purple");
    });
});*/

// Working with forms

/*$(function () {

    let $newItemButton = $('#newItemButton');
    let $newItemForm = $('#newItemForm');
    let $textInput = $('input:text');

    $newItemButton.show();
    $newItemForm.hide();

    $('#showForm').on('click', function () {
       $newItemButton.hide();
       $newItemForm.show();
    });

    $newItemForm.on('submit', function (e) {
        e.preventDefault();
        let newText = $('input:text').val();
        $('li:last').after('<li>' + newText + '</li>');
        $newItemForm.hide();
        $newItemButton.show();
        $textInput.val('');
    });

});*/


// Cut, copy, paste
/*$(function () {
   let $p = $('p');
   let $clonedQuote = $p.clone();
   $p.remove();
   $clonedQuote.insertAfter('h2');

   let $moveItem = $('#one').detach();
   $moveItem.appendTo('ul');
});*/

// Changing Dimensions
/*$(function() {
    let listHeight = $('#page').height();

    $('ul').append('<p>Height: ' + listHeight + 'px</p>');
    $('li').width('50%');
    $('li#one').width(125);
    $('li#two').width('75%');
});*/

// Position of Elements on the page

/*let offset = $('div').offset();
let text = 'Left: ' + offset.left + ' Right: ' + offset.right;
console.log(text);*/

// Determining position of items on the page

$(function () {
    let $window = $(window);
    let $slideAd = $('#slideAd');
    let endZone = $('#footer').offset().top - $window.height() - 500;

    $window.on('scroll', function () {

        if ( (endZone) < $window.scrollTop()) {
            $slideAd.animate({ 'right': '0px' }, 250);
        } else {
            $slideAd.stop(true).animate({'right': '-360px'}, 250)
        }

    });
});





















































