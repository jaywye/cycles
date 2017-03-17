(function (angular) {
    angular.module('cycles', ['ui.bootstrap'])
        .controller('cycleCalculator', ['$scope', function ($scope) {

            $scope.ps = [
                {
                    id: 1,
                    name: 'Pro A',
                    ds: [
                        { id: 1, name: 'C1D1', add: 1, hasColor: true, isScan: false },
                        { id: 2, name: 'C1D8', add: 7, hasColor: true, isScan: false },
                        { id: 3, name: 'C1D15', add: 7, hasColor: true, isScan: false },
                        { id: 4, name: 'C1D22', add: 7, hasColor: true, isScan: false },
                        { id: 5, name: 'C2D1', add: 7, hasColor: false, isScan: false },
                        { id: 6, name: 'C2D8', add: 7, hasColor: false, isScan: false },
                        { id: 7, name: 'C2D15', add: 7, hasColor: false, isScan: false },
                        { id: 8, name: 'C2D22', add: 7, hasColor: false, isScan: false },
                        { id: 9, name: 'Scan', add: 6, hasColor: false, isScan: true },
                        { id: 10, name: 'C3D1', add: 1, hasColor: true, isScan: false },
                        { id: 11, name: 'C3D8', add: 7, hasColor: true, isScan: false },
                        { id: 12, name: 'C3D15', add: 7, hasColor: true, isScan: false },
                        { id: 13, name: 'C3D22', add: 7, hasColor: true, isScan: false },
                        { id: 14, name: 'C4D1', add: 7, hasColor: false, isScan: false },
                        { id: 15, name: 'C4D8', add: 7, hasColor: false, isScan: false },
                        { id: 16, name: 'C4D15', add: 7, hasColor: false, isScan: false },
                        { id: 17, name: 'C4D22', add: 7, hasColor: false, isScan: false },
                        { id: 18, name: 'Scan', add: 6, hasColor: false, isScan: true },
                        { id: 19, name: 'C5D1', add: 1, hasColor: true, isScan: false },
                        { id: 20, name: 'C5D8', add: 7, hasColor: true, isScan: false },
                        { id: 21, name: 'C5D15', add: 7, hasColor: true, isScan: false },
                        { id: 22, name: 'C5D22', add: 7, hasColor: true, isScan: false },
                        { id: 23, name: 'C6D1', add: 7, hasColor: false, isScan: false },
                        { id: 24, name: 'C6D8', add: 7, hasColor: false, isScan: false },
                        { id: 25, name: 'C6D15', add: 7, hasColor: false, isScan: false },
                        { id: 26, name: 'C6D22', add: 7, hasColor: false, isScan: false },
                        { id: 27, name: 'Scan', add: 6, hasColor: false, isScan: true },
                        { id: 28, name: 'C7D1', add: 1, hasColor: true, isScan: false },
                        { id: 29, name: 'C7D8', add: 7, hasColor: true, isScan: false },
                        { id: 30, name: 'C7D15', add: 7, hasColor: true, isScan: false },
                        { id: 31, name: 'C7D22', add: 7, hasColor: true, isScan: false },
                        { id: 32, name: 'C8D1', add: 7, hasColor: false, isScan: false },
                        { id: 33, name: 'C8D8', add: 7, hasColor: false, isScan: false },
                        { id: 34, name: 'C8D15', add: 7, hasColor: false, isScan: false },
                        { id: 35, name: 'C8D22', add: 7, hasColor: false, isScan: false },
                        { id: 36, name: 'Scan', add: 6, hasColor: false, isScan: true },
                        { id: 37, name: 'C9D1', add: 1, hasColor: true, isScan: false },
                        { id: 38, name: 'C9D8', add: 7, hasColor: true, isScan: false },
                        { id: 39, name: 'C9D15', add: 7, hasColor: true, isScan: false },
                        { id: 40, name: 'C9D22', add: 7, hasColor: true, isScan: false },
                        { id: 41, name: 'C10D1', add: 7, hasColor: false, isScan: false },
                        { id: 42, name: 'C10D8', add: 7, hasColor: false, isScan: false },
                        { id: 43, name: 'C10D15', add: 7, hasColor: false, isScan: false },
                        { id: 44, name: 'C10D22', add: 7, hasColor: false, isScan: false },
                        { id: 45, name: 'Scan', add: 6, hasColor: false, isScan: true }
                    ]
                },
                {
                    id: 2,
                    name: 'Pro B',
                    ds: [
                        { id: 1, name: 'D-6', add: 1, hasColor: false, isScan: true },
                        { id: 2, name: 'D-5', add: 1, hasColor: false, isScan: true },
                        { id: 3, name: 'C1D1', add: 5, hasColor: true, isScan: false },
                        { id: 4, name: 'C1D3', add: 2, hasColor: true, isScan: false },
                        { id: 5, name: 'C1D4', add: 1, hasColor: true, isScan: false },
                        { id: 6, name: 'C1D5', add: 1, hasColor: true, isScan: false },
                        { id: 7, name: 'C1D8', add: 3, hasColor: true, isScan: false },
                        { id: 8, name: 'C1D15', add: 7, hasColor: true, isScan: false },
                        { id: 9, name: 'C2D1', add: 7, hasColor: false, isScan: false },
                        { id: 10, name: 'C2D3', add: 2, hasColor: false, isScan: false },
                        { id: 11, name: 'Scan', add: 18, hasColor: false, isScan: true },
                        { id: 12, name: 'C3D1', add: 1, hasColor: true, isScan: false },
                        { id: 13, name: 'C3D3', add: 2, hasColor: true, isScan: false },
                        { id: 14, name: 'C4D1', add: 19, hasColor: false, isScan: false },
                        { id: 15, name: 'C4D3', add: 2, hasColor: false, isScan: false },
                        { id: 16, name: 'Scan', add: 18, hasColor: false, isScan: true },
                        { id: 17, name: 'C5D1', add: 1, hasColor: true, isScan: false },
                        { id: 18, name: 'C5D3', add: 2, hasColor: true, isScan: false },
                        { id: 19, name: 'C6D1', add: 19, hasColor: false, isScan: false },
                        { id: 20, name: 'C6D3', add: 2, hasColor: false, isScan: false },
                        { id: 21, name: 'Scan', add: 18, hasColor: false, isScan: true }
                    ]
                },
                {
                    id: 3,
                    name: 'EOT',
                    ds: [
                        { id: 1, name: 'EOT', add: 1, hasColor: false, isScan: true },
                        { id: 2, name: 'SC', add: 28, hasColor: false, isScan: true },
                        { id: 3, name: '3m', add: 90, hasColor: true, isScan: false },
                        { id: 4, name: '6m', add: 90, hasColor: true, isScan: false },
                        { id: 5, name: '9m', add: 90, hasColor: true, isScan: false },
                        { id: 6, name: '1y', add: 90, hasColor: false, isScan: false },
                        { id: 7, name: '1y6m', add: 180, hasColor: false, isScan: false },
                        { id: 8, name: '2y', add: 180, hasColor: true, isScan: false },
                        { id: 9, name: '2y6m', add: 180, hasColor: true, isScan: false },
                        { id: 10, name: '3y', add: 180, hasColor: false, isScan: false },
                        { id: 11, name: '3y6m', add: 180, hasColor: false, isScan: false },
                        { id: 12, name: '4y', add: 180, hasColor: true, isScan: false },
                        { id: 13, name: '4y6m', add: 180, hasColor: true, isScan: false },
                        { id: 14, name: '5y', add: 180, hasColor: false, isScan: false },
                        { id: 15, name: '5y6m', add: 180, hasColor: false, isScan: false }
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