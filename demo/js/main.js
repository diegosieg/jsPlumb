
  $("#btact1").on('click', function(){
    var newdiv = $('<div class="window" id="window7">BOX 1</div>');
    var styles = {
      top:"30px",
      left:"20px"
    };

    $("#main").append(newdiv);
    $("#window7").css(styles);
    _addEndpoints("window7", ["BottomCenter"], ["TopCenter"]);
    jsPlumb.draggable(jsPlumb.getSelector(".window"), { grid: [1, 1] });

      $("#window7").on('click', function(){
        var props = $('<div class="propert" id="propW7"><form><label>Valor 1: </label><input type="text" name="input" value="0" class="inpProp span10"/><label>Valor 2: </label><input type="text" name="input" value="0" class="inpProp span10"/></form></div>')
        $("#boxProp").empty().append(props);
      });

    });




  $("#btact2").on('click', function(){
    var newdiv = $('<div class="window" id="window8">BOX 2</div>');
    var styles = {
      top:"30px",
      left:"20px"
    };

    $("#main").append(newdiv);
    $("#window8").css(styles);
    _addEndpoints("window8", ["BottomCenter"], ["TopCenter"]);
    jsPlumb.draggable(jsPlumb.getSelector(".window"), { grid: [1, 1] });
    });




  $("#btact3").on('click', function(){
    var newdiv = $('<div class="window" id="window9">BOX 3</div>');
    var styles = {
      top:"30px",
      left:"20px"
    };

    $("#main").append(newdiv);
    $("#window9").css(styles);
    _addEndpoints("window9", ["BottomCenter"], ["TopCenter"]);
    jsPlumb.draggable(jsPlumb.getSelector(".window"), { grid: [1, 1] });

      $("#window9").on('click', function(){
        var props = $('<div class="propert" id="propW7"><form><input type="radio">teste<input type="radio">teste2<label>Valor 1: </label><input type="text" name="input" value="0" class="inpProp span10"/><label>Valor 2: </label><input type="text" name="input" value="0" class="inpProp span10"/></form></div>')
        $("#boxProp").empty().append(props);
      });
    });










