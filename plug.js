/**
 * Copyright 2011 fapprika.com
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 * Author: fapprika.com
 * Info: info@fapprika.com
 */
function $plug(name, defaults, functions) {
    if (arguments.length == 2 && typeof name == 'string' && typeof defaults == 'string'
        && window.jQuery.fn[defaults] && name != defaults) {
        window.jQuery.fn[name] = $plug[name] = window.jQuery.fn[defaults];
        return;
    }
    if (typeof name != 'string') {
        functions = defaults;
        defaults = name;
        name = null;
    }
    if (name && !defaults && !functions)
        return $plug[name];
    if (!functions || typeof defaults == 'function') {
        functions = defaults;
        defaults = {};
    }
    if (typeof functions == 'function')
        functions = {init:functions};

    return (function ($) {
        var plug = function (element, options, init) {
            this.defaults = Object.create((plug.defaults||defaults));
            this.options = $.extend(this.defaults, options);
            this.element = $(element);
            if (init) this.init = init;
            this.init.apply(this, [this.element, this.options]);
        };
        if (plug.defaults)
            plug.prototype.defaults = plug.defaults;
        plug.prototype = $.extend(plug.prototype, functions);
        var fn = function (options) {
            $(this).each(function () {
                new plug(this, options);
            });
        };
        if (name) {
            $plug[name] = plug;
            $.fn[name] = fn;
        } else {
            return fn;
        }
    })(window.jQuery);
}