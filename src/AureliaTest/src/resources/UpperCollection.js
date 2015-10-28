System.register([], function(exports_1) {
    var UppercollectionValueConverter;
    return {
        setters:[],
        execute: function() {
            UppercollectionValueConverter = (function () {
                function UppercollectionValueConverter() {
                }
                UppercollectionValueConverter.prototype.toView = function (value) {
                    return value && value.map(function (s) { return s.toUpperCase(); });
                };
                return UppercollectionValueConverter;
            })();
            exports_1("UppercollectionValueConverter", UppercollectionValueConverter);
        }
    }
});
//# sourceMappingURL=UpperCollection.js.map