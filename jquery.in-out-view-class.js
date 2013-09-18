/**
 * inOutViewClass plugin for jQuery
 * 
 * @param inViewClass:String defines class for matched elements that scroll in view. Default value is "inView".
 * @param outViewClass:String defines class for matched elements that scroll out of view. Default value is "outView".
 */
(function( $ )
{
	$.fn.inOutViewClass = function(inViewClass , outViewClass)
	{
		inViewClass = inViewClass?inViewClass:'inView';
		outViewClass = outViewClass?inViewClass:'outView';
		
		var viewTop = $(window).scrollTop();
		var viewBottom = viewTop+$(window).height();
		
		for ( var i = 0; i < this.length; i++)
		{
				var elementTop = this.eq(i).offset().top;
				var elementBottom = this.eq(i).height() + elementTop;
				
				if(elementBottom<viewTop || elementTop>viewBottom)
				{
						this.eq(i).removeClass(inViewClass);
						this.eq(i).addClass(outViewClass);
				}
				else
				{
						this.eq(i).removeClass(outViewClass);
						this.eq(i).addClass(inViewClass);
				}
		}
	};
})( jQuery );