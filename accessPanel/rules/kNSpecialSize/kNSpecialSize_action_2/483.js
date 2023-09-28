var tableResults = lookup("Select Price_Per_Piece from Panel_Model_Sizing where Full_Size = :value", { "value": cfg.kNSize });
var pricePer = tableResults[0].get("Price_Per_Piece");
var length = cfg.kNLength;
var width = cfg.kNWidth;
var area = length*width;

var qty = cfg.kNPanelQty;

ProductList.id = cfg.kNProduct;
ProductList.price = area*pricePer/10000;
ProductList.qty = qty;
ProductList.uniqueIdentifier = "PANEL" +set.kNAccessPanelSet.size.optionValue;
ProductList.bomType = "SALES";
ProductList.next();

ProductList.id = "173991";
ProductList.qty = qty;
ProductList.bomType = "KMAT";
ProductList.parentProduct = "PANEL" +set.kNAccessPanelSet.size.optionValue;
ProductList.next();
return ProductList;