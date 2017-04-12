window.onload = function(){
	
	var validated = false;

var size_selected;
var color_selected;
var quantity_selected;
var productInformation='PrettyGuide Womens 1920s Black Sequin Gatsby Maxi Long Evening Prom Dress';
$('#product').html(productInformation);
//document.getElementById("product").innerHTML=productInformation;
  $('#size-selection').show();

$('#nextToColor').on('click',function(){
size_selected = $('input[name=sizes]:checked', '#myForm').val();
console.log(size_selected);
 $('#size-selection').hide();
 $('#color-selection').show();
 $('#2').attr('class', 'active');
 $('#1').attr('class', '');
})

$('#nextToQuantity').on('click',function(){
	color_selected =  $('option[name=color]:checked', '#form2').val();
  console.log(color_selected);
	$('#color-selection').hide();
  $('#quantity-selection').show();
  $('#2').attr('class', '');
  $('#3').attr('class', 'active');
})

$('#nextToShipment').on('click',function(){
	quantity_selected = $('option[name=quantity]:checked', '#form3').val();
  console.log(quantity_selected);
  $('.container').hide();
	$('#quantity-selection').hide();
	$('#shipaddress').show();
})

var Order = Backbone.Model.extend({
		tagName : "spam",
		id : "add",
       defaults: {
		   
			'addressOne': '',
			'addressTwo': '',
			'city': '',
			'state':'',
			'zipcode':'',
		   'enter':''
	   
    },
	initialize : function(){
		console.log(this.el);
		console.log(this.$el);
	},

    validate: function (attrs) {
		$('#AddOneError').html("");
		$('#CityError').html("");
		$('#StateError').html("");
		$('#AddOneError').html("");
		$('#ZipcodeError').html("");
		
        if (!attrs.addressOne) {			
			$('#AddOneError').html("Enter AddressOne feild");  
			validated = false;
        }
        if (!attrs.city) {          
			$('#CityError').html("Enter city feild");	
			validated = false;
        }
         if (!attrs.state) {
           $('#StateError').html("Enter state feild");
			 validated = false;
        }
         if (!attrs.zipcode) {
          	 $('#ZipcodeError').html("Enter zipcode feild");
			 validated = false;
        }
		
		
    }
});
$('#finish').on('click', function() {
	
	validated = true;
	
 
  // Display the information picked up above.
  var address1 = $('input[name=address1]', '#addressForm').val();
  var address2 = $('input[name=address2]', '#addressForm').val();
  var city = $('input[name=city]', '#addressForm').val();
  var state = $('input[name=state]', '#addressForm').val();
  var zipcode = $('input[name=zipcode]', '#addressForm').val();
  
  addDetails = new Order({el : $('#shipaddress')});
  addDetails.set({'addressOne':address1 , 'addressTwo':address2, 'city':city , 'state':state , 'zipcode':zipcode})

  
  
  if(validated){
	   $('#analyticsinfo').show();
	   var html = "<p>"+address1+ "  "+address2+" <br/> "+city+"  "+state+ "  "+zipcode+"</p>"
    document.getElementById("productDisc").innerHTML=productInformation+"<br/>"+"selected size: "+size_selected+" color: "+color_selected+" Quentity: "+quantity_selected;
    document.getElementById("shippingAddress").innerHTML=html;
  }
 
})




}



