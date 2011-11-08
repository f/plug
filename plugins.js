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