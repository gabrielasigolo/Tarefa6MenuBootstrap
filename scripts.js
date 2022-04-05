var buttonPlus  = $(".cart-qty-plus");
var buttonMinus = $(".cart-qty-minus");

var incrementPlus = buttonPlus.click(function() {
	var $n = $(this)
		.parent(".counter")
		.parent(".card-body")
		.find(".qty");
	$n.val(Number($n.val())+1 );
});

var incrementMinus = buttonMinus.click(function() {
		var $n = $(this)
		.parent(".counter")
		.parent(".card-body")
		.find(".qty");
	var amount = Number($n.val());
	if (amount > 0) {
		$n.val(amount-1);
	}
});

function Calc() {
    var modal_body = document.getElementsByClassName('modal-body');
	var counter = $(".quantity");

	
}

/*var counter = $(".quantity");

    for(var i = 0; i <= counter.length; i++){
        if(counter[i] == 0){

        }
    }*/