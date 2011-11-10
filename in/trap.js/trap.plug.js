/**
 * trap.js - trapping elements plugin made by plug.js framework for jQuery
 *
 * Copyright 2011 fapprika.com
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Author: fapprika.com
 * Info: info@fapprika.com
 */
$plug('trap', function() {
    var $this = this.element;
    $(window).on('scroll', function() {
        var scroll = $($.browser.mozilla?window:document.body).scrollTop();

        if (!$this.next().is('.trap-after'))
            $this.after($('<div/>').addClass('trap-after'));

        if (!$this.data('trap-fp'))
            $this.data('trap-fp', $this.position().top);

        var $next = $this.next();
        if ($this.data('trap-fp') <= scroll) {
            $this.addClass('trapped');

            $next.css({marginTop: $this.outerHeight(true)});
        } else {
            $this.removeClass('trapped');
            $next.css({marginTop: 0});
        }
    });
});