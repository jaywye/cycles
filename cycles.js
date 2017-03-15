(function (angular) {
    angular.module('cycles', ['ui.bootstrap'])
        .controller('cycleCalculator', ['$scope', function ($scope) {

            $scope.ps = [
                {
                    id: 1,
                    name: 'Pro A',
                    ds: [
                        { id: 1, name: 'C1D1', add: 1 },
                        { id: 2, name: 'C1D8', add: 7 },
                        { id: 3, name: 'C1D15', add: 7 },
                        { id: 4, name: 'C1D22', add: 7 },
                        { id: 5, name: 'C2D1', add: 7 },
                        { id: 6, name: 'C2D8', add: 7 },
                        { id: 7, name: 'C2D15', add: 7 },
                        { id: 8, name: 'C2D22', add: 7 },
                        { id: 9, name: 'C2Scan', add: 6 },
                        { id: 10, name: 'C3D1', add: 1 },
                        { id: 11, name: 'C3D8', add: 7 },
                        { id: 12, name: 'C3D15', add: 7 },
                        { id: 13, name: 'C3D22', add: 7 },
                        { id: 14, name: 'C4D1', add: 7 },
                        { id: 15, name: 'C4D8', add: 7 },
                        { id: 16, name: 'C4D15', add: 7 },
                        { id: 17, name: 'C4D22', add: 7 },
                        { id: 18, name: 'C4Scan', add: 6 },
                        { id: 19, name: 'C5D1', add: 1 },
                        { id: 20, name: 'C5D8', add: 7 },
                        { id: 21, name: 'C5D15', add: 7 },
                        { id: 22, name: 'C5D22', add: 7 },
                        { id: 23, name: 'C6D1', add: 7 },
                        { id: 24, name: 'C6D8', add: 7 },
                        { id: 25, name: 'C6D15', add: 7 },
                        { id: 26, name: 'C6D22', add: 7 },
                        { id: 27, name: 'C6Scan', add: 6 },
                        { id: 28, name: 'C7D1', add: 1 },
                        { id: 29, name: 'C7D8', add: 7 },
                        { id: 30, name: 'C7D15', add: 7 },
                        { id: 31, name: 'C7D22', add: 7 },
                        { id: 32, name: 'C8D1', add: 7 },
                        { id: 33, name: 'C8D8', add: 7 },
                        { id: 34, name: 'C8D15', add: 7 },
                        { id: 35, name: 'C8D22', add: 7 },
                        { id: 36, name: 'C8Scan', add: 6 },
                        { id: 37, name: 'C9D1', add: 1 },
                        { id: 38, name: 'C9D8', add: 7 },
                        { id: 39, name: 'C9D15', add: 7 },
                        { id: 40, name: 'C9D22', add: 7 },
                        { id: 41, name: 'C10D1', add: 7 },
                        { id: 42, name: 'C10D8', add: 7 },
                        { id: 43, name: 'C10D15', add: 7 },
                        { id: 44, name: 'C10D22', add: 7 },
                        { id: 45, name: 'C10Scan', add: 6 }
                    ]
                },
                {
                    id: 2,
                    name: 'Pro B',
                    ds: [
                        { id: 1, name: 'D-6', add: 1 },
                        { id: 2, name: 'D-5', add: 1 },
                        { id: 3, name: 'C1D1', add: 5 },
                        { id: 4, name: 'C1D3', add: 2 },
                        { id: 5, name: 'C1D4', add: 1 },
                        { id: 6, name: 'C1D5', add: 1 },
                        { id: 7, name: 'C1D8', add: 3 },
                        { id: 8, name: 'C1D15', add: 7 },
                        { id: 9, name: 'C2D1', add: 7 },
                        { id: 10, name: 'C2D3', add: 2 },
                        { id: 11, name: 'C3D1', add: 19 },
                        { id: 12, name: 'C3D3', add: 2 },
                        { id: 13, name: 'C4D1', add: 19 },
                        { id: 14, name: 'C4D3', add: 2 },
                        { id: 15, name: 'C5D1', add: 19 },
                        { id: 16, name: 'C5D3', add: 2 },
                        { id: 17, name: 'C6D1', add: 19 },
                        { id: 18, name: 'C6D3', add: 2 }
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