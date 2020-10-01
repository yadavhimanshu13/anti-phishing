jQuery(function($) {

    'use strict';

    var addField = function(event) {
        var clone = $('#clone-source > *').clone();
        var container = $('#clone-container');
        clone.find('.raw-selectpicker')
            .removeClass('raw-selectpicker')
            .addClass('selectpicker')
            .selectpicker();
        container.append(clone);
        if (event !== undefined) {
            clone.find('input:text').first().focus();
        }
        else{
            clone.find('input:text').Second().focus();
        }
    }

    var selectChange = function(event) {
        var zis = $(this);
        if (zis.val() == 'text') {
            zis.closest('.form-group').find('.select-box-container').removeClass('col-sm-7').addClass('col-sm-3');
            zis.closest('.form-group').find('.custom-text').removeClass('hidden');
        } else {
            if (!zis.find('.custom-text').hasClass('hidden'))
            zis.closest('.form-group').find('.select-box-container').addClass('col-sm-7').removeClass('col-sm-3');
            zis.closest('.form-group').find('.custom-text').addClass('hidden');
        }
    }

    $(document).on('change', '.selectpicker', selectChange);


    $('.selectpicker').selectpicker();
    
    $(document).on('submit', '#form', function(event) {
        event.preventDefault();
        alert('Sorry dude, this is under development and currently doesn\'t work');
    });

    addField();

    $(document).on('click', '#add-field', addField);

});
