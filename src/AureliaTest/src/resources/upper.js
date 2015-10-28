System.register([], function(exports_1) {
    var UpperValueConverter;
    return {
        setters:[],
        execute: function() {
            UpperValueConverter = (function () {
                function UpperValueConverter() {
                }
                UpperValueConverter.prototype.toView = function (value) {
                    return value && value.toUpperCase();
                };
                return UpperValueConverter;
            })();
            exports_1("UpperValueConverter", UpperValueConverter);
        }
    }
});
//# sourceMappingURL=upper.js.map