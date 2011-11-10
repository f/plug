$plug('helloworld', {myname:'fapprika'}, {
    init:function () {
        this.element.html('Hello ' + this.options.myname);
    }
});
$plug('helloworld2', {
    init:function () {
        this.element.html('Hello ' + (this.options.myname || 'anyone.'));
    }
});
$plug('helloworld3', function () {
    this.element.html('Hello ' + (this.options.myname || 'anyone.'));
});

$.fn.helloworld5 = $plug({myname:'fapprika'}, function (elm) {
    this.element.html('Hello ' + this.options.myname);
});

$plug('helloworld6', 'html');

$plug('helloworld7', {myname: 'fapprika'}, function () {
    this.element.html('Hello ' + this.options.myname);
});
$plug.helloworld7.defaults = {myname: 'anyone'};


////
$plug('shadow', {
    inset: false,
    top: 3,
    left: 3,
    blur: 10,
    spread: 2,
    color: '#ccc',
    duration: '1000ms',
    prefixes: ['-webkit-', '-moz-', '-o-', '-ms-','']
}, {
    init: function() {
        for (var i in this.options.prefixes) {
            this.element.css(this.options.prefixes[i] + 'transition-duration',
                this.options.duration);

            var css = this.getCss(this.options.prefixes[i]);
            this.element.css(css);
        }
    },
    getCss: function(prefix) {
        var css = {};
        css[prefix + 'box-shadow'] =
            (this.options.inset?'inset ':'')
                + this.options.left + 'px '
                + this.options.top + 'px '
                + this.options.blur + 'px '
                + this.options.spread + 'px'
                + this.options.color;
        return css;
    }
});