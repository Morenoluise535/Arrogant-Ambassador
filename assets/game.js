$(document).ready(function() {




    // Your code here...
    var number1
    var number2
    var mathfunction
    var result
    
    
    
    $(".number").on("click", function() {
    number = this.value;
    $("#first-number").append(number)
    });
    
    $(".operator").on("click", function() {
    operator = this.value;
    $("#operator").text(operator)
    });
    
    $(".number").on("click", function() {
    number = this.value;
    $("#second-number").append(number);
    });
    
    
    });
    