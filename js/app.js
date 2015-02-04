var app = (function(){
	return {
		init : function(){
			app.currColor = '#ffffff';
			$("#colorPicker").ColorPicker({
				onChange : app.onColorChange,
				color : '#ffffc0'
			});
			$("#addItem").click(app.addItem);
		},

		addItem : function(){
			var item = $(".items").val(),
				bg = app.currColor;
			if(item){
				$(".coloredItems").append('<li><div class="box" style="background:'+ 
					bg + 
					' "></div>' + 
					item + 
					' [' + bg + ']' +
					'<img class="actionImg removeItem" src="images/remove.png">' +
					'</li>' );

				$(".removeItem:last").click(function(e){
					$(e.target).parent().remove();
				})
				
			}
		},

		onColorChange : function(hsb, hex, rgb){
			app.currColor = '#' +hex;
			$(".colorHolder").css('background', "#" + hex);
		}
	}
})();

$(document).ready(app.init);