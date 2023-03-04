var posi=0;function replexp(){var val=jQuery('#formula').val();val=val.replace(/⁰/g,'^0');val=val.replace(/¹/g,'^1');val=val.replace(/²/g,'^2');val=val.replace(/³/g,'^3');val=val.replace(/⁴/g,'^4');val=val.replace(/⁵/g,'^5');val=val.replace(/⁶/g,'^6');val=val.replace(/⁷/g,'^7');val=val.replace(/⁸/g,'^8');val=val.replace(/⁹/g,'^9');val=val.replace(/\./g,',');val=val.replace(/−/g,'-');jQuery('#formula').val(val);}
function setcarret(){posi=jQuery('#formula').caret();}
function insere(val_){var frm=jQuery('#formula').val();if(posi==0)frm=frm+''+val_;else frm=frm.substr(0,posi)+val_+frm.substr(posi);jQuery('#formula').val(frm);mostraprev();posi=0;}
function mostraprev(){var f,f2,frm;replexp();jQuery('#previewasc').html('');f=trataascii(jQuery('#formula').val().toLowerCase());f2=trataascii2(f);frm="`"+f2+"`";jQuery('#previewasc').html(frm);atz();}
function atz(){try{MathJax.typeset();}catch(e){}}
function trataascii(val){val=val.replace(/,/g,'.');val=val.replace(/;/g,'|');val=val.replace(/raizn/gi,'root');val=val.replace(/raiz/gi,'sqrt');return val;}
function trataascii2(val){var f=false,re,c,vl,c1,c2,pos,p;re=val;c=0;while(f==false){if(re.indexOf('log(')==-1||c>100)f=true;else{vl=re.indexOf('log(');if(vl>=0){c1=0;c2=0;pos=[];p=-1;for(var i=vl;i<=re.length;i++){if(re.charAt(i)=='('){c1++;if(c1==1)pos.push(i);}
if(re.charAt(i)==')'){c2++;}
if(re.charAt(i)=='|'){if(c1==1||(c1-c2)==1){p=i;break;}}}}else{pos=[];p=-1;}
for(var i=0;i<pos.length;i++){if(i==0)re=re.substr(0,pos[i])+'_'+re.substr(pos[i]);}
if(p>=0){re=re.substr(0,p+1)+')('+re.substr(p+2);}
c++;}}
f=false;c=0;while(f==false){if(re.indexOf('root(')==-1||c>100)f=true;else{vl=re.indexOf('root(');if(vl>=0){c1=0;c2=0;pos=[];p=-1;for(var i=vl;i<=re.length;i++){if(re.charAt(i)=='('){c1++;if(c1==1)pos.push(i);}
if(re.charAt(i)==')'){c2++;}
if(re.charAt(i)=='|'){if(c1==1||(c1-c2)==1){p=i;break;}}}}else{pos=[];p=-1;}
for(var i=0;i<pos.length;i++){if(i==0)re=re.substr(0,pos[i])+' '+re.substr(pos[i]);}
if(p>=0){re=re.substr(0,p+1)+')('+re.substr(p+2);}
c++;}}
return re;}

function cp_exp(val){if(jQuery('#formula').val()!='')jQuery('#formula').val(jQuery('#formula').val()+' '+val);else jQuery('#formula').val(val);jQuery('#formula').focus();}

function trataf(val){val=val.toLowerCase();val=val.replace(/ /gi,'');val=val.replace(/([0-9]+)([a-z]+)/gi,'$1*$2');val=val.replace(/([a-z]+)([0-9]+)/gi,'$1*$2');val=val.replace(/\)\(/gi,')*(');val=val.replace(/([a-z]+)\(/gi,'$1*(');val=val.replace(/([0-9]+)\(/gi,'$1*(');val=val.replace(/\)([a-z]+)/gi,')*$1');val=val.replace(/\)([0-9]+)/gi,')*$1');val=val.replace(/\./g,'*');val=val.replace(/,/g,'.');val=val.replace(/;/g,',');val=val.replace(/×/g,'*');val=val.replace(/−/g,'-');val=val.replace(/raizn\*\(/gi,'root(');val=val.replace(/raiz\*\(/gi,'sqrt(');val=val.replace(/i/gi,'%i');val=val.replace(/p%i/gi,'%pi');val=val.replace(/e/gi,'%e');val=val.replace(/log_/gi,'log');val=val.replace(/log\*\(/gi,'log(');val=val.replace(/ln\*\(/gi,'log(');val=val.replace(/acotgh\*\(/gi,'acoth(');val=val.replace(/acosh\*\(/gi,'acosh(');val=val.replace(/acsch\*\(/gi,'acsch(');val=val.replace(/as%ech\*\(/gi,'asech(');val=val.replace(/as%enh\*\(/gi,'asinh(');val=val.replace(/cotgh\*\(/gi,'coth(');val=val.replace(/acotg\*\(/gi,'acot(');val=val.replace(/cotg\*\(/gi,'cot(');val=val.replace(/csch\*\(/gi,'csch(');val=val.replace(/cosh\*\(/gi,'cosh(');val=val.replace(/atgh\*\(/gi,'atanh(');val=val.replace(/acos\*\(/gi,'acos(');val=val.replace(/s%ech\*\(/gi,'sech(');val=val.replace(/s%enh\*\(/gi,'sinh(');val=val.replace(/acsc\*\(/gi,'acsc(');val=val.replace(/as%ec\*\(/gi,'asec(');val=val.replace(/as%en\*\(/gi,'asin(');val=val.replace(/atg\*\(/gi,'atan(');val=val.replace(/tgh\*\(/gi,'tanh(');val=val.replace(/cos\*\(/gi,'cos(');val=val.replace(/csc\*\(/gi,'csc(');val=val.replace(/s%ec\*\(/gi,'sec(');val=val.replace(/s%en\*\(/gi,'sin(');val=val.replace(/tg\*\(/gi,'tan(');val=val.replace(/(π)/gi,'$1*');val=val.replace(/(π)\*([^π]+)/gi,'$1$2');val=val.replace(/([a-z]+)π+/gi,'$1*π');val=val.replace(/([0-9]+)π+/gi,'$1*π');val=val.replace(/\)π/gi,')*π');val=val.replace(/π([a-z])/gi,'π*$1');val=val.replace(/π([0-9])/gi,'π*$1');val=val.replace(/π\(/gi,'π*(');val=val.replace(/π/gi,'%pi');val=(val.substring(val.length-1,val.length)=='*')?val.substring(0,val.length-1):val;return val;}
function valida(){var h=jQuery('#formula').val().toLowerCase();h=trataf2(h);h=trataf(h);jQuery('#formula2').val(h);return true;}
function trataf2(val){var f=false,re=val,c=0,vl,c1,c2,pos,p,pl1,pl2;while(f==false){if(re.indexOf('log(')==-1||c>100)f=true;else{vl=re.indexOf('log(');if(vl>=0){c1=0;c2=0;pos=[];p=-1;for(var i=vl;i<=re.length;i++){if(re.charAt(i)=='('){c1++;if(c1==1)pos.push(i);}
if(re.charAt(i)==')'){c2++;if(c1==c2){pos.push(i);break;}}
if(re.charAt(i)==';'){if(c1==1||(c1-c2)==1){p=i;}}}}else{pos=[];p=-1;}
if(p>=0){pl1='';pl2='';for(var i=0;i<pos.length;i++){if(i==0)pl1=re.substring(pos[i],p);else pl2=re.substring(p+1,pos[i]+1);}
re=re.substr(0,pos[0])+'_('+pl2+'/log_'+pl1+')'+re.substr(pos[1]+1);}
c++;}}
f=false;c=0;while(f==false){if(re.indexOf('raizn(')==-1||c>100)f=true;else{vl=re.indexOf('raizn(');if(vl>=0){c1=0;c2=0;pos=[];p=-1;for(var i=vl;i<=re.length;i++){if(re.charAt(i)=='('){c1++;if(c1==1)pos.push(i);}
if(re.charAt(i)==')'){c2++;if(c1==c2){pos.push(i);break;}}
if(re.charAt(i)==';'){if(c1==1||(c1-c2)==1){p=i;}}}}else{pos=[];p=-1;}
if(p>=0){pl1='';pl2='';for(var i=0;i<pos.length;i++){if(i==0)pl1=re.substring(pos[i],p);else pl2=re.substring(p+1,pos[i]+1);}
re=re.substr(0,vl)+'('+pl2+'^(1/'+pl1+'))'+re.substr(pos[1]+1);}
c++;}}
return re;}
jQuery(document).ready(function(){if(data1_!=undefined){jQuery('#formula').val(data1_);jQuery('#formula2').val(data2_);mostraprev();jQuery('#resultado').html("<div style='text-align:center;height:120px;'><i class='uk-icon-refresh uk-icon-spin uk-icon-large'></i><h3>&nbsp;&nbsp;&nbsp;Calculando...</h3></div>");jQuery.ajax({url:"/assets/rotina/ajax-calculo.php",method:"POST",data:{op:data3_,eq:data2_}}).done(function(res){res=res.replace(/ind/g,'Indefinido, mas limitado');res=res.replace(/und/g,'Indefinido');res=res.replace(/infinity/g,'Infinito');res=(res=='\\(\\left[  \\right] \\)')?'Sem solução':res;jQuery('#resultado').html('<h3 class="uk-panel-title">Resultado:</h3><div class="uk-panel-box resqst">'+res+'</div>');atz();});}});

$("input[name=apaga]").click (function(){
var len = $("#formula").val().length;

 var valor = $("#formula").val();
 
 valor = valor.replace(valor.charAt(len - 1), "");
 
 $("#formula").val(valor);
});
