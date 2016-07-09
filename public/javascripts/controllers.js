/**
 * Created by jhan on 7/8/2016.
 */

// Managing the poll list
function PollListCtrl($scope){
    $scope.polls = [];
}

// viewing poll results
function PollItemCtrl($scope, $routePrarams){
    $scope.poll = {};
    $scope.vote = function() {};
}

// creating a new poll
function PollNewCtrl($scope){
    $scope.poll = {
        quesstion: '',
        choices: [{text: ''}, {text: ''}, {text: ''}]
    };
    $scope.addChoice = function(){
        $scope.poll.choices.push({text: ''});
    };
    $scope.createPoll = function() {};
}