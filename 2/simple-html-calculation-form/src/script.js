function calculateTotal()
{
  let unit_price={
    sugar: 595,
    butter: 45,
    eggs: 150,
    vanilla:300    
  };
  let item_price={}
  
  item_price.sugar = ($("#qty_sugar").val() * unit_price.sugar )
  $("#price_sugar").val(item_price.sugar);
  
  item_price.butter = ($("#qty_butter").val() * unit_price.butter )
  $("#price_butter").val(item_price.butter);
  
  item_price.eggs = ($("#qty_eggs").val() * unit_price.eggs )
  $("#price_eggs").val(item_price.eggs);  
  
  item_price.vanilla = ($("#qty_vanilla").val() * unit_price.vanilla )
  $("#price_vanilla").val(item_price.vanilla);    
  
  let total = item_price.sugar + item_price.butter + item_price.eggs + item_price.vanilla;

 
  $("#total_value").text(total);
  
}

$(function()
 {
    $(".qty").on("change keyup",calculateTotal)
})

