/*!
 * Alertiny v1.0.0 (https://github.com/markcell/jQuery-Alertiny)
 * Copyright (c) 2015 Celso Marques
 * Licensed under MIT (https://github.com/markcell/jQuery-Alertiny/blob/master/LICENSE)
 */

/**
 * @description Create and show alert from Bootstrap
 * @version 1.0.0
 * @author Celso Marques
 */

if (typeof jQuery === 'undefined') {
  throw new Error('Alertiny requires jQuery library.');
}

(function($) {
    'use strict';

    $.fn.Alertiny = function(type, message, options) {

        var $container = this;

        var defaults = {
            extraClass: '',
            closeButton: true,
            fadeEffect: true
        };

        var settings = $.extend({}, defaults, options);

        var closeButton = '<button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>';
        var fadeEffect = 'fade in';

        if (!settings.closeButton) {
            closeButton = '';
        }

        if (!settings.fadeEffect) {
            fadeEffect = '';
        }

        var html = '<div class="alert alert-' + type + ' ' + settings.extraClass + ' ' + fadeEffect + '" alert-dismissible">' + closeButton + message + '</div>';

        $container.empty().html(html);

        return $container;

    };

}(jQuery));
