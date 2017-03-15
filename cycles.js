(function (angular) {
    angular.module('cycles', ['ui.bootstrap'])
        .controller('cycleCalculator', ['$scope', function ($scope) {

            $scope.ps = [
                {
                    id: 1,
                    name: 'Pro A',
                    ds: [
                        { id: 1, cname: 'C1', dname: 'D1', add: 1 },
                        { id: 2, cname: null, dname: 'D8', add: 7 },
                        { id: 3, cname: null, dname: 'D15', add: 7 },
                        { id: 4, cname: null, dname: 'D22', add: 7 },
                        { id: 5, cname: 'C2', dname: 'D1', add: 7 },
                        { id: 6, cname: null, dname: 'D8', add: 7 },
                        { id: 7, cname: null, dname: 'D15', add: 7 },
                        { id: 8, cname: null, dname: 'D22', add: 7 },
                        { id: 9, cname: null, dname: 'Scan', add: 6 },
                        { id: 10, cname: 'C3', dname: 'D1', add: 1 },
                        { id: 11, cname: null, dname: 'D8', add: 7 },
                        { id: 12, cname: null, dname: 'D15', add: 7 },
                        { id: 13, cname: null, dname: 'D22', add: 7 },
                        { id: 14, cname: 'C4', dname: 'D1', add: 7 },
                        { id: 15, cname: null, dname: 'D8', add: 7 },
                        { id: 16, cname: null, dname: 'D15', add: 7 },
                        { id: 17, cname: null, dname: 'D22', add: 7 },
                        { id: 18, cname: null, dname: 'Scan', add: 6 },
                        { id: 19, cname: 'C5', dname: 'D1', add: 1 },
                        { id: 20, cname: null, dname: 'D8', add: 7 },
                        { id: 21, cname: null, dname: 'D15', add: 7 },
                        { id: 22, cname: null, dname: 'D22', add: 7 },
                        { id: 23, cname: 'C6', dname: 'D1', add: 7 },
                        { id: 24, cname: null, dname: 'D8', add: 7 },
                        { id: 25, cname: null, dname: 'D15', add: 7 },
                        { id: 26, cname: null, dname: 'D22', add: 7 },
                        { id: 27, cname: null, dname: 'Scan', add: 6 },
                        { id: 28, cname: 'C7', dname: 'D1', add: 1 },
                        { id: 29, cname: null, dname: 'D8', add: 7 },
                        { id: 30, cname: null, dname: 'D15', add: 7 },
                        { id: 31, cname: null, dname: 'D22', add: 7 },
                        { id: 32, cname: 'C8', dname: 'D1', add: 7 },
                        { id: 33, cname: null, dname: 'D8', add: 7 },
                        { id: 34, cname: null, dname: 'D15', add: 7 },
                        { id: 35, cname: null, dname: 'D22', add: 7 },
                        { id: 36, cname: null, dname: 'Scan', add: 6 },
                        { id: 37, cname: 'C9', dname: 'D1', add: 1 },
                        { id: 38, cname: null, dname: 'D8', add: 7 },
                        { id: 39, cname: null, dname: 'D15', add: 7 },
                        { id: 40, cname: null, dname: 'D22', add: 7 },
                        { id: 41, cname: 'C10', dname: 'D1', add: 7 },
                        { id: 42, cname: null, dname: 'D8', add: 7 },
                        { id: 43, cname: null, dname: 'D15', add: 7 },
                        { id: 44, cname: null, dname: 'D22', add: 7 },
                        { id: 45, cname: null, dname: 'Scan', add: 6 }
                    ]
                },
                {
                    id: 2,
                    name: 'Pro B',
                    ds: [
                        { id: 1, cname: null, dname: 'D-6', add: 1 },
                        { id: 2, cname: null, dname: 'D-5', add: 1 },
                        { id: 3, cname: 'C1', dname: 'D1', add: 5 },
                        { id: 4, cname: null, dname: 'D3', add: 2 },
                        { id: 5, cname: null, dname: 'D4', add: 1 },
                        { id: 6, cname: null, dname: 'D5', add: 1 },
                        { id: 7, cname: null, dname: 'D8', add: 3 },
                        { id: 8, cname: null, dname: 'D15', add: 7 },
                        { id: 9, cname: 'C2', dname: 'D1', add: 7 },
                        { id: 10, cname: null, dname: 'D3', add: 2 },
                        { id: 11, cname: 'C3', dname: 'D1', add: 19 },
                        { id: 12, cname: null, dname: 'D3', add: 2 },
                        { id: 13, cname: 'C4', dname: 'D1', add: 19 },
                        { id: 14, cname: null, dname: 'D3', add: 2 },
                        { id: 15, cname: 'C5', dname: 'D1', add: 19 },
                        { id: 16, cname: null, dname: 'D3', add: 2 },
                        { id: 17, cname: 'C6', dname: 'D1', add: 19 },
                        { id: 18, cname: null, dname: 'D3', add: 2 }
                    ]
                }
            ];

            $scope.dateChanged = function (p, index) {
                for (var i = index + 1; i < p.ds.length; i++) {
                    var last = p.ds[i - 1];
                    var d = p.ds[i];

                    d.date = new Date(last.date.getFullYear(), last.date.getMonth(), last.date.getDate() + d.add);
                }
            };
        }]);
})(angular);