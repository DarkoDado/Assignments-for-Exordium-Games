$(function() {
   
    var sviElementi = $("#osnovni-kontejner .element");
    
   
    var leto = $("#leto");
    var jesen = $("#jesen");
    var zima = $("#zima");
    
   
    sviElementi.draggable();
    prolece.droppable({drop: function(event, ui) {
      
      ui.draggable.addClass("prolece");
      ui.draggable.appendTo(prolece);
    }});
    leto.droppable({drop: function(event, ui) {
     
      ui.draggable.addClass("leto");
      ui.draggable.appendTo(leto);
    }});
    jesen.droppable({drop: function(event, ui) {
    
      ui.draggable.addClass("jesen");
      ui.draggable.appendTo(jesen);
    }});
    zima.droppable({drop: function(event, ui) {
      
      ui.draggable.addClass("zima");
      ui.draggable.appendTo(zima);
    }});
  });
    