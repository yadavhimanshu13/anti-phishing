jQuery(function($) {

    'use strict';

    $('.selectpicker').selectpicker();
    
    $(document).on('submit', '#form', function(event) {
        event.preventDefault();
        if (!confirm('Start spamming?'))
            return;
        alert('hey');
    });

    $(document).on('click', '#add-field', function(event) {
        var methodName = $('#faker-box').val();
        if (methodName == 'text') {
            alert('text');
        } else {
            
        }
    });

});