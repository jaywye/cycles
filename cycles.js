(function (angular) {
    angular.module('cycles', ['ui.bootstrap'])
        .controller('cycleCalculator', ['$scope', function ($scope) {

            $scope.cycleDate = new Date();

            $scope.cycles = [
                { day: 1, name: 'Day 1', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 1) },
                { day: 2, name: 'Day 2', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 2) },
                { day: 3, name: 'Day 3', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 3) },
                { day: 4, name: 'Day 4', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 4) },
                { day: 5, name: 'Day 5', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 5) },
                { day: 6, name: 'Day 6', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 6) },
                { day: 7, name: 'Day 7', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 7) },
                { day: 8, name: 'Day 8', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 8) },
                { day: 9, name: 'Day 9', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 9) },
                { day: 10, name: 'Day 10', date: new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + 10) }
            ];

            $scope.cycleDateChanged = function () {
                $scope.cycles.forEach(function (cycle) {
                    cycle.date = new Date($scope.cycleDate.getFullYear(), $scope.cycleDate.getMonth(), $scope.cycleDate.getDate() + cycle.day);
                });
            };
        }]);
})(angular);