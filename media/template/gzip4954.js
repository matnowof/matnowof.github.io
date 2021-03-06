(function($){function focus(target){if(!document.activeElement||document.activeElement!==target){target.focus();}}
$.fn.caret=function(pos){var target=this[0];var isContentEditable=target&&target.contentEditable==='true';if(arguments.length==0){if(target){if(window.getSelection){if(isContentEditable){focus(target);var selection=window.getSelection();if(!selection.rangeCount){return 0;}
var range1=selection.getRangeAt(0),range2=range1.cloneRange();range2.selectNodeContents(target);range2.setEnd(range1.endContainer,range1.endOffset);return range2.toString().length;}
return target.selectionStart;}
if(document.selection){focus(target);if(isContentEditable){var range1=document.selection.createRange(),range2=document.body.createTextRange();range2.moveToElementText(target);range2.setEndPoint('EndToEnd',range1);return range2.text.length;}
var pos=0,range=target.createTextRange(),range2=document.selection.createRange().duplicate(),bookmark=range2.getBookmark();range.moveToBookmark(bookmark);while(range.moveStart('character',-1)!==0)pos++;return pos;}
if(target.selectionStart)
return target.selectionStart;}
return;}
if(target){if(pos==-1)
pos=this[isContentEditable?'text':'val']().length;if(window.getSelection){if(isContentEditable){focus(target);window.getSelection().collapse(target.firstChild,pos);}
else
target.setSelectionRange(pos,pos);}
else if(document.body.createTextRange){if(isContentEditable){var range=document.body.createTextRange();range.moveToElementText(target);range.moveStart('character',pos);range.collapse(true);range.select();}else{var range=target.createTextRange();range.move('character',pos);range.select();}}
if(!isContentEditable)
focus(target);}
return this;}})(jQuery);