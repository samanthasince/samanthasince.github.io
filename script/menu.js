let itemList = JSON.parse(localStorage.getItem("itemList")) || [];
let priceList = JSON.parse(localStorage.getItem("priceList")) || [];
var index = 0;
var total = 0;

function item(trigger){
	switch(trigger){
	case 1:
		itemList.push("Espresso Macchiato");
		priceList.push(3.75);
		total += 3.75;
		break;
	case 2:
		itemList.push("Italian Cappuccino");
		priceList.push(4.75);
		total += 4.75;
		break;
	case 3:	
		itemList.push("Spanish Latte");
		priceList.push(5.25);
		total += 5.25;
		break;
	case 4:
		itemList.push("Minty Blended Mocha");
		priceList.push(5.5);
		total += 5.5;
		break;
	case 5:
		itemList.push("Hot Loose Leaf Tea");
		priceList.push(3.5);
		total += 3.5;
		break;
	case 6:	
		itemList.push("Green Tea Americano");
		priceList.push(4);
		total += 4;
		break;
	case 7:
		itemList.push("Chai Spice Latte");
		priceList.push(4.5);
		total += 4.5;
		break;
	case 8:	
		itemList.push("Thai Tea Latte");
		priceList.push(4.75);
		total += 4.75;
		break;
	case 9:
		itemList.push("Avocado Toast Sandwich");
		priceList.push(9.5);
		total += 9.5;
		break;
	case 10:
		itemList.push("Quinoa and Lentil Wrap");
		priceList.push(10);
		total += 10;
		break;
	case 11:	
		itemList.push("Hearty Vegetable and Protein Bowl");
		priceList.push(11);
		total += 11;
		break;
	case 12:
		itemList.push("Tahini and Tempeh Grains Bowl");
		priceList.push(11.5);
		total += 11.5;
		break;
	default:
		console.log("default")
	}
		localStorage.itemList = JSON.stringify(itemList);
		localStorage.priceList = JSON.stringify(priceList);
		localStorage.total = JSON.stringify(total);
		notify();
}	

	function notify(){
		var x = document.getElementById("snackbar");
		x.className = "show";
		setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
	}
	
	$(function(){     
		var d = new Date(),        
		h = d.getHours(),
		m = d.getMinutes();
		if(h < 10) h = '0' + h; 
		if(m < 10) m = '0' + m; 
		$('input[type="time"][value="now"]').each(function(){ 
		$(this).attr({'value': h + ':' + m});
		});
	});