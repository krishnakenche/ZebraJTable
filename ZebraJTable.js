//ZebraJTable jQuery plugin is used to make visible table stripes to alternate colors.
/**@author Jayakrishna Kenche**/
(function($){
  $.fn.zebrajtable = function(options){
    //options object 
     var settings = $.extend({
       'oddBgColor': 'gray',
       'evenBgColor':'lightgray'
     },options);
    return this.each(function(){
        if(this.tagName == 'TABLE'){
          console.log('applied on table');
          $(this).find('tr:visible').filter(':odd').css('background-color',settings.oddBgColor);
          $(this).find('tr:visible').filter(':even').css('background-color',settings.evenBgColor);
          
        }else{
          console.log('apply this jquery method on table');
        }
    });
  }
  
}(jQuery));