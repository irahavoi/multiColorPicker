var app = (function(){
	return {
		init : function(){
			app.currHex = '#ffffff';
			app.currRGB = {
				r : 255,
				g : 255,
				b : 255
			}
			$("#colorPicker").ColorPicker({
				onChange : app.onColorChange,
				color : '#ffffc0'
			});
			$("#addItem").click(app.addItem);
			$(".colorHolder").css('background', app.currHex);

		},

		addItem : function(){
			var item = $(".items").val(),
				bg = app.currHex;
			if(item){
				$(".coloredItems").append('<li><div class="box" style="background:'+ 
					bg + 
					' "></div>' + 
					item + ': ' + 
					' rgb(' + app.currRGB.r + ',' + app.currRGB.g + ',' + app.currRGB.b + ')' +
					'<img class="actionImg removeItem" src="images/remove.png">' +
					'</li>' );

				$(".removeItem:last").click(function(e){
					$(e.target).parent().remove();
				})
				
			}
		},

		onColorChange : function(hsb, hex, rgb){
			app.currHex = '#' +hex;
			app.currRGB = rgb;
			$(".colorHolder").css('background', "#" + hex);
		}
	}
})();

$(document).ready(app.init);