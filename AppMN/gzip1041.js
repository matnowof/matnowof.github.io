var modo="A";var arredondamento=16;var ultimaFunc="";var ultimoVal=[];var trigmedida="R";var trigmedidamask='Radianos';var memoria="";var ultimocampo="";var tema="P";var funcoesp=[];var funcoespc=[];function parsear(val){try{for(var k=0;k<funcoesp.length;k++)val=val.replace(new RegExp(funcoesp[k],'g'),funcoesp[k]+'__');}catch(e){}
val=val.replace(/ /gi,'');val=val.toLowerCase();val=val.replace(/([0-9]+)([a-z]+)/gi,'$1*$2');val=val.replace(/([a-z]+)([0-9]+)/gi,'$1*$2');val=val.replace(/\)\(/gi,')*(');val=val.replace(/([a-z]+)\(/gi,'$1*(');val=val.replace(/([0-9]+)\(/gi,'$1*(');val=val.replace(/\)([a-z]+)/gi,')*$1');val=val.replace(/\)([0-9]+)/gi,')*$1');val=val.replace(/,/g,'.');val=val.replace(/;/g,',');val=val.replace(/×/g,'*');val=val.replace(/valoravista\*\(/gi,'valoravista(');val=val.replace(/jcmontante\*\(/gi,'jcmontante(');val=val.replace(/jsmontante\*\(/gi,'jsmontante(');val=val.replace(/montante\*3\*\(/gi,'montante3(');val=val.replace(/montante\*2\*\(/gi,'montante2(');val=val.replace(/montante\*\(/gi,'montante(');val=val.replace(/mediana\*\(/gi,'mediana(');val=val.replace(/fatorar\*\(/gi,'fatorar(');val=val.replace(/inteiro\*\(/gi,'inteiro(');val=val.replace(/raiz\*3\*\(/gi,'raiz3(');val=val.replace(/acosec\*\(/gi,'acosec(');val=val.replace(/acotg\*\(/gi,'acotg(');val=val.replace(/cosec\*\(/gi,'cosec(');val=val.replace(/jciam\*\(/gi,'jciam(');val=val.replace(/jcima\*\(/gi,'jcima(');val=val.replace(/jsiam\*\(/gi,'jsiam(');val=val.replace(/jsima\*\(/gi,'jsima(');val=val.replace(/raizn\*\(/gi,'raizn(');val=val.replace(/delta\*\(/gi,'delta(');val=val.replace(/convt\*\(/gi,'convt(');val=val.replace(/convc\*\(/gi,'convc(');val=val.replace(/e\*2\*g\*\(/gi,'e2g(');val=val.replace(/ex\*10\*\(/gi,'ex10(');val=val.replace(/pfrac\*\(/gi,'pfrac(');val=val.replace(/raiz\*\(/gi,'raiz(');val=val.replace(/asen\*\(/gi,'asen(');val=val.replace(/acos\*\(/gi,'acos(');val=val.replace(/asec\*\(/gi,'asec(');val=val.replace(/jcvp\*\(/gi,'jcvp(');val=val.replace(/cotg\*\(/gi,'cotg(');val=val.replace(/medp\*\(/gi,'medp(');val=val.replace(/medh\*\(/gi,'medh(');val=val.replace(/medg\*\(/gi,'medg(');val=val.replace(/jsvp\*\(/gi,'jsvp(');val=val.replace(/perc\*\(/gi,'perc(');val=val.replace(/por\*\(/gi,'por(');val=val.replace(/logc\*\(/gi,'logc(');val=val.replace(/simp\*\(/gi,'simp(');val=val.replace(/objt\*\(/gi,'objt(');val=val.replace(/objp\*\(/gi,'objp(');val=val.replace(/obja\*\(/gi,'obja(');val=val.replace(/objo\*\(/gi,'objo(');val=val.replace(/piso\*\(/gi,'piso(');val=val.replace(/teto\*\(/gi,'teto(');val=val.replace(/frac\*\(/gi,'frac(');val=val.replace(/pint\*\(/gi,'pint(');val=val.replace(/jcn\*\(/gi,'jcn(');val=val.replace(/jci\*\(/gi,'jci(');val=val.replace(/hip\*\(/gi,'hip(');val=val.replace(/mmc\*\(/gi,'mmc(');val=val.replace(/mdc\*\(/gi,'mdc(');val=val.replace(/med\*\(/gi,'med(');val=val.replace(/rpa\*\(/gi,'rpa(');val=val.replace(/apr\*\(/gi,'apr(');val=val.replace(/exp\*\(/gi,'exp(');val=val.replace(/log\*\(/gi,'log(');val=val.replace(/atg\*\(/gi,'atg(');val=val.replace(/sen\*\(/gi,'sen(');val=val.replace(/cos\*\(/gi,'cos(');val=val.replace(/sec\*\(/gi,'sec(');val=val.replace(/jsn\*\(/gi,'jsn(');val=val.replace(/jsi\*\(/gi,'jsi(');val=val.replace(/pkn\*\(/gi,'pkn(');val=val.replace(/gpa\*\(/gi,'gpa(');val=val.replace(/spa\*\(/gi,'spa(');val=val.replace(/gpg\*\(/gi,'gpg(');val=val.replace(/ppg\*\(/gi,'ppg(');val=val.replace(/spg\*\(/gi,'spg(');val=val.replace(/dpr\*\(/gi,'dpr(');val=val.replace(/abs\*\(/gi,'abs(');val=val.replace(/ale\*\(/gi,'ale(');val=val.replace(/inv\*\(/gi,'inv(');val=val.replace(/akk\*\(/gi,'akk(');val=val.replace(/tkk\*\(/gi,'tkk(');val=val.replace(/tg\*\(/gi,'tg(');val=val.replace(/jc\*\(/gi,'jc(');val=val.replace(/js\*\(/gi,'js(');val=val.replace(/nb\*\(/gi,'nb(');val=val.replace(/cc\*\(/gi,'cc(');val=val.replace(/ac\*\(/gi,'ac(');val=val.replace(/ex\*\(/gi,'ex(');val=val.replace(/ln\*\(/gi,'ln(');val=val.replace(/ar\*\(/gi,'ar(');val=val.replace(/as\*\(/gi,'as(');val=val.replace(/cs\*\(/gi,'cs(');val=val.replace(/cr\*\(/gi,'cr(');val=val.replace(/ps\*\(/gi,'ps(');val=val.replace(/pc\*\(/gi,'pc(');val=val.replace(/lb\*\(/gi,'lb(');val=val.replace(/x\*2\*\(/gi,'x2(');val=val.replace(/x\*3\*\(/gi,'x3(');val=val.replace(/r\*3\*\(/gi,'r3(');val=val.replace(/r\*3\*\(/gi,'r3i(');val=val.replace(/!\(/gi,'fato(');val=val.replace(/%\(/gi,'porc(');val=val.replace(/\*mod\*/gi,'%');val=val.replace(/mod\*\(/gi,'%(');val=val.replace(/\)\*mod/gi,')%');val=val.replace(/([a-z]+)π+/gi,'$1*π');val=val.replace(/([0-9]+)π+/gi,'$1*π');val=val.replace(/π([a-z]+)/gi,'π*$1');val=val.replace(/π([0-9]+)/gi,'π*$1');val=val.replace(/π/gi,Math.PI.toFixed(arredondamento));val=val.replace(/pi$/gi,Math.PI.toFixed(arredondamento));val=val.replace(/\^/gi,'**');val=val.replace(/\*e\+/gi,'e+');val=val.replace(/\*e\-/gi,'e-');try{for(var k=0;k<funcoesp.length;k++)val=val.replace(new RegExp(funcoesp[k]+'__','g'),funcoesp[k]);}catch(e){}
return val;}
function gravabiscoito(nome,valor){var dt,n;dt=new Date();n=dt.getFullYear()+2;dt.setFullYear(n);jQuery.cookie(nome,valor,{expires:dt});}
function carregado(url){var v=false;jQuery('script').each(function(){if(this.src.indexOf(url)>=0)v=true;});return v;}
function mudamodo(md){switch(md){case'A':jQuery('#painelConv').hide('fast');jQuery('.uk-dropdown_').addClass('uk-dropdown');if(carregado("javascript_nova/bsc-a.min2")==false){var scp=document.createElement('script');scp.src="javascript_nova/bsc-a.min2";document.getElementsByTagName('head')[0].appendChild(scp);}
break;case'C':jQuery('#painelConv').show('fast');jQuery('.uk-dropdown_').html('');jQuery('.uk-dropdown_').removeClass('uk-dropdown');if(carregado("assets/calc/basica-c.min.js")==false){var scp=document.createElement('script');scp.src="assets/calc/basica-c.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
break;case'E':jQuery('#painelConv').hide('fast');jQuery('.uk-dropdown_').html('');jQuery('.uk-dropdown_').removeClass('uk-dropdown');if(carregado("assets/calc/basica-e.min.js")==false){var scp=document.createElement('script');scp.src="assets/calc/basica-e.min.js";document.getElementsByTagName('head')[0].appendChild(scp);}
break;}}
function mudatema(tm){switch(tm){case'P':jQuery('.ctrig').removeClass('bt5l').removeClass('bt5a').addClass('bt5');jQuery('.cfin').removeClass('bt3l').removeClass('bt3a').addClass('bt3');jQuery('.cest').removeClass('bt4l').removeClass('bt4a').addClass('bt4');jQuery('.ccom').removeClass('bt2l').addClass('bt2');jQuery('.cnum').removeClass('bt1l').addClass('bt1');jQuery('.quadt').removeClass('bt5l').removeClass('bt5a').addClass('bt5');jQuery('.quadf').removeClass('bt3l').removeClass('bt3a').addClass('bt3');jQuery('.quade').removeClass('bt4l').removeClass('bt4a').addClass('bt4');break;case'A':jQuery('.ctrig').removeClass('bt5').removeClass('bt5l').addClass('bt5a');jQuery('.cfin').removeClass('bt3').removeClass('bt3l').addClass('bt3a');jQuery('.cest').removeClass('bt4').removeClass('bt4l').addClass('bt4a');jQuery('.ccom').removeClass('bt2l').addClass('bt2');jQuery('.cnum').removeClass('bt1l').addClass('bt1');jQuery('.quadt').removeClass('bt5').removeClass('bt5l').addClass('bt5a');jQuery('.quadf').removeClass('bt3').removeClass('bt3l').addClass('bt3a');jQuery('.quade').removeClass('bt4').removeClass('bt4l').addClass('bt4a');break;case'L':jQuery('.ctrig').removeClass('bt5').removeClass('bt5a').addClass('bt5l');jQuery('.cfin').removeClass('bt3').removeClass('bt3a').addClass('bt3l');jQuery('.cest').removeClass('bt4').removeClass('bt4a').addClass('bt4l');jQuery('.ccom').removeClass('bt2').addClass('bt2l');jQuery('.cnum').removeClass('bt1').addClass('bt1l');jQuery('.quadt').removeClass('bt5').removeClass('bt5a').addClass('bt5l');jQuery('.quadf').removeClass('bt3').removeClass('bt3a').addClass('bt3l');jQuery('.quade').removeClass('bt4').removeClass('bt4a').addClass('bt4l');break;}
gravabiscoito('tem_b',tm);}
function replexp(){var val=jQuery('#TIExp').val();val=val.replace(/⁰/g,'^0');val=val.replace(/¹/g,'^1');val=val.replace(/²/g,'^2');val=val.replace(/³/g,'^3');val=val.replace(/⁴/g,'^4');val=val.replace(/⁵/g,'^5');val=val.replace(/⁶/g,'^6');val=val.replace(/⁷/g,'^7');val=val.replace(/⁸/g,'^8');val=val.replace(/⁹/g,'^9');jQuery('#TIExp').val(val);}
function testatrat(v){var r,tt=0,p;r=arredondamento;if(r!=16){p=((v+'').indexOf('.')>=0)?(v+'').split('.')[1]:v;switch(parseInt(r)){case 1:tt=0.1;break;case 2:tt=0.01;break;case 3:tt=0.001;break;case 4:tt=0.0001;break;case 5:tt=0.00001;break;}
if(parseFloat('0.'+p)<tt){r=16;}}
return r;}
function arrendtrat(v){var s,r;s=(v+'').split('.');r=v;if(s[1]!=undefined){if(s[1].substr(0,11)=='00000000000'){r=s[0];}
if(s[1].substr(0,11)=='99999999999'){r=parseInt(s[0])+1;}}
return r;}
function formataresultado(val){var r=(val+'').replace(/\./g,',');return r;}
function numseg(n){return(n>=-9007199254740991&&n<=9007199254740991)?n:n.toExponential();}
function calculachange(){var f,r,arr;replexp();f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='-';}
if(isNaN(r)||f==r)jQuery('#LBSubResu').html('');else jQuery('#LBSubResu').html(formataresultado(r));}
function inserevalor(val){jQuery('#TIExp').val(jQuery('#TIExp').val()+val);calculachange();if(jQuery('#painelcalcdesk').is(':visible')==true){jQuery('#TIExp').focus();}}
function inserefuncao(funcao){jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+funcao);jQuery('#btnfechaprog').click();}
function apagafuncao(obj){var funcs,td;jQuery(obj).remove();funcs='';jQuery('#tbfuncoesprog').find('tr').each(function(){td=jQuery(this).find('td:eq(2)').first();if(jQuery(td).html()!=undefined){funcs+=jQuery(td).html()+'_|_';}});funcs=funcs.substring(0,funcs.length-3);if(funcs=='')jQuery.removeCookie("fun_b");else gravabiscoito('fun_b',funcs);}
function salvarhistorico(){var biscoito='';jQuery('.tbresultado').each(function(){jQuery(this).find('[type=text]').each(function(){biscoito+=this.value+'_|_';});biscoito+=jQuery(this).find('.resu2l1i').text()+'_|_';biscoito+=jQuery(this).find('.italico').text();biscoito+='|-|';});gravabiscoito('his_b',biscoito);}
function limparhistorico(){jQuery('#result').html('');jQuery.removeCookie('his_b');}
function guardarmemoria(){var n;n=(jQuery('#TIExp').val()).replace(/,/g,'.');n=parseFloat(n).toFixed(arredondamento);n=parseFloat(n);memoria=(isNaN(n))?'':formataresultado(n);}
function limpamemoria(){memoria="";}
function alphanum(e){var regex=new RegExp("^[qwertyuiopasdfghjklzxcvbnm_;\(\)]+$");var str=String.fromCharCode(!e.charCode?e.which:e.charCode);if(regex.test(str)){return true;}
e.preventDefault();return false;}
function subfpg(val){val=val.replace(/⁰/g,'^0');val=val.replace(/¹/g,'^1');val=val.replace(/²/g,'^2');val=val.replace(/³/g,'^3');val=val.replace(/⁴/g,'^4');val=val.replace(/⁵/g,'^5');val=val.replace(/⁶/g,'^6');val=val.replace(/⁷/g,'^7');val=val.replace(/⁸/g,'^8');val=val.replace(/⁹/g,'^9');val=val.replace(/\^/g,'**');return val;}
function atzarrayf(){var c,v,i,nom,re='',vv,bi='',ver=true;jQuery.removeCookie('funp_b');for(var k=0;k<funcoesp.length;k++)eval(funcoesp[k]+'=undefined;');funcoesp=[],funcoespc=[];jQuery('#tbfuncoesprogftb tr').each(function(){c='';v='';i=0;jQuery(this).find('input').each(function(){if(i==0)c=this.value;if(i==1)v=subfpg(this.value);i++;});if(c!=''&&v!=''){nom=c.substring(0,c.indexOf('('));if(funcoesp.indexOf(nom)<0){funcoesp.push(nom);funcoespc.push(c+'|_|'+v);bi+=c+'|_|'+v+'|_|'+nom+'|-|';}}});for(var j=0;j<funcoespc.length;j++){vv=funcoespc[j].split('|_|');re+=" function "+vv[0].replace(';',',')+" { return "+vv[1]+"; }; ";}
try{jQuery('#funcoesdin').html('<script>'+re+'</script>');bi=bi.substring(0,bi.length-3);}catch(e){alert('Função inserida não é válida, por favor corrija e tente novamente.');ver=false;}
if(bi=='')ver=false;if(ver==true){gravabiscoito('funp_b',bi);}else{jQuery.removeCookie('funp_b');}}
function apagafunpg(obj){jQuery(obj).remove();atzarrayf();}
function inserefuncpg(obj){inserefuncao(jQuery(obj).find('input:first').val());}
function addnewfunc(){jQuery('#lnrtf').remove();var ct="<tr> <td onclick=\"inserefuncpg(this.parentNode)\" style='cursor:pointer;width:20px' class='uk-dropdown-close' title='Usar'> <i class='uk-icon-mail-forward'></i> </td> "+"<td onclick='apagafunpg(this.parentNode)' style='cursor:pointer;width:20px' title='Apagar'> <i class='uk-icon-close'></i> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Nome da função, ex: funcao(x;y)' onblur='atzarrayf();verifnfunc(this)' onkeypress='alphanum(event)'/> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Matemática da função' onblur='atzarrayf()'/> </td> "+"</tr> ";jQuery('#tbfuncoesprogftb').append(ct);}
function verifnfunc(obj){var v=obj.value;var c=v.indexOf('(');if(c>0){v=v.substring(0,c);if(eval("typeof "+v)=='function'&&funcoesp.indexOf(v)<0){alert('Função já existe. Por favor insira outro nome de função.');obj.value='';}}else obj.value='';}
function menuescolhido(num){var arr,ct,val,m;switch(num){case 1:modo='A';gravabiscoito('mod_b',modo);mudamodo('A');break;case 2:modo='C';gravabiscoito('mod_b',modo);mudamodo('C');break;case 3:modo='E';gravabiscoito('mod_b',modo);mudamodo('E');break;case 4:arredondamento=16;jQuery.removeCookie("arr_b");break;case 5:arredondamento=1;gravabiscoito('arr_b',arredondamento);break;case 6:arredondamento=2;gravabiscoito('arr_b',arredondamento);break;case 7:arredondamento=3;gravabiscoito('arr_b',arredondamento);break;case 8:arredondamento=4;gravabiscoito('arr_b',arredondamento);break;case 9:arredondamento=5;gravabiscoito('arr_b',arredondamento);break;case 10:inserevalor(' '+Math.PI.toFixed(arredondamento));break;case 11:inserevalor(' '+Math.E.toFixed(arredondamento));break;case 12:inserevalor(' '+(1.61803398875).toFixed(arredondamento));break;case 13:inserevalor(' '+Math.sqrt(2).toFixed(arredondamento));break;case 14:inserevalor(' '+(0.57721566490153286060651209008240243).toFixed(arredondamento));break;case 15:arr=(jQuery.cookie('fun_b')==undefined)?[]:decodeURIComponent(jQuery.cookie('fun_b')).split('_|_');ct="<div class='uk-overflow-container' id='tbfuncoesprog'>";if(arr.length>0){ct+="<table style='width:100%;text-align:left'>";ct+="<tr><th colspan='2'></th><th></th></tr>";for(var i=0;i<arr.length;i++){ct+="<tr><td onclick=\"inserefuncao('"+arr[i]+"')\" style='cursor:pointer;width:20px' class='uk-modal-close'> <i class='uk-icon-mail-forward'></i> </td>";ct+="<td onclick='apagafuncao(this.parentNode)' style='cursor:pointer;width:20px'> <i class='uk-icon-close'></i> </td>";ct+="<td style='padding:5px 0px 5px 20px'>"+arr[i]+"</td></tr>";}
ct+="</table>"}else{ct+="Não há expressão salva.";}
ct+="</div>";jQuery('#alvoprogramadosc').html(ct);break;case 16:if(jQuery('#TIExp').val()!=''){val=(jQuery.cookie('fun_b')==undefined)?jQuery('#TIExp').val():decodeURIComponent(jQuery.cookie('fun_b'))+'_|_'+jQuery('#TIExp').val();gravabiscoito('fun_b',val);}
break;case 17:salvarhistorico();break;case 18:limparhistorico();break;case 19:if(memoria!='')m=(memoria+'').replace(/\./g,',');else m='Memória vazia!';jQuery('#alvomemoriac').html(m);break;case 20:if(memoria!=''){m=(memoria+'').replace(/\./g,',');jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+m);}
break;case 21:guardarmemoria();break;case 22:limpamemoria();break;case 23:mudatema('P');break;case 24:mudatema('A');break;case 25:mudatema('L');break;case 26:jQuery('#alvocotacaoc').load('cron/cotacao_lightbox.html');break;case 27:var pd;arr=funcoespc;ct="<div class='uk-overflow-container' style='padding:5px'>";ct+="<div style='text-align:right;width:100%'><i class='uk-icon-small uk-icon-plus' style='cursor:pointer' title='Adicionar função' onclick='addnewfunc()'></i> </div>";ct+="<table style='width:100%;text-align:left;margin-top:10px' id='tbfuncoesprogftb'>";if(arr.length>0){for(var i=0;i<arr.length;i++){pd=arr[i].split('|_|');if(pd[0]=='')continue;ct+="<tr>"+"<td onclick=\"inserefuncao('"+pd[0]+"')\" style='cursor:pointer;width:20px' class='uk-modal-close' title='Usar'> <i class='uk-icon-mail-forward'></i> </td> "+"<td onclick='apagafunpg(this.parentNode);' style='cursor:pointer;width:20px' title='Apagar'> <i class='uk-icon-close'></i> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Nome da função, ex: funcao(x;y)' onblur='atzarrayf();verifnfunc(this)' onkeypress='alphanum(event)' value='"+pd[0]+"'/> </td>"+"<td> <input type='text' class='cemp' style='width:90%' placeholder='Matemática da função' onblur='atzarrayf()' value='"+pd[1].replace(/\*\*/g,'^')+"'/> </td> "+"</tr> ";}}else ct+="<tr id='lnrtf'><td colspan='4'> Não há função salva. </td></tr>";ct+='</table>';ct+="<div style='margin-top:30px;text-align:justify'><blockquote style='font-size:12px'> <p>Escreva a função atribuindo um nome seguido de parênteses contendo uma ou mais variáveis separadas por ponto e vírgula (;). No segundo campo, escreva o que a função deve calcular utilizando operadores, funções nativas da calculadora ou outras funções criadas por você. </p>"+"<p> Exemplo 1: minhafuncao(x) | 2*x <br/> Exemplo 2: mediaescolar(a;b;c;d) | (a+b+c+d)/4 <br/> Exemplo 3: areatriangulo(b;h) | (b*h)/2 </p></blockquote></div>";jQuery('#alvofprogramadosc').html(ct);break;}}
function cp_exp(val){if(jQuery('#TIExp').val()!='')jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+val);else jQuery('#TIExp').val(val);jQuery('#TIExp').focus();}
function cp_men(val){var n;n=(val+'').replace(/,/g,'.');n=parseFloat(n).toFixed(arredondamento);n=parseFloat(n);memoria=(isNaN(n))?'':formataresultado(n);}
function set_anot(obj){jQuery(obj).find('.Anotacao').focus();}
function fecha_res(obj){jQuery(obj).remove();}
function inserehistorico(exp,val,rot,desc){var r;desc=(desc==undefined)?'':desc;r="<div class='resultado'>"+"<table class='tbresultado'>"+" <tr>"+"  <td style='width:10px'><a class='uk-icon-justify uk-icon-level-up' title='Copiar expressão para o campo' onclick=\"cp_exp('"+exp+"')\"></a></td> "+
((rot)?" <td title='"+exp+"'> <table class='tbresusubtb'><tr><td style='width:40%'><input type='text' value='"+exp+"' onkeypress='return false'></text></td><td class='uk-hidden-small italico' style='width:60%'>"+rot+"</td></tr></table> </td> ":" <td title='"+exp+"'> <input type='text' value='"+exp+"' onkeypress='return false'></text> </td> ")+"  <td style='width:70px;text-align:right'>"+"   <a class='uk-icon-justify uk-icon-hdd-o' title='Copiar resultado para memória' onclick=\"cp_men('"+val+"')\"></a> "+"   <a class='uk-icon-justify uk-icon-edit' title='Anotação' onclick='set_anot(this.parentNode.parentNode.parentNode)'></a> "+"   <a class='uk-icon-justify uk-icon-remove' title='Remover este resultado' onclick='fecha_res(this.parentNode.parentNode.parentNode.parentNode.parentNode)'></a> "+"  </td>"+" </tr>"+" <tr>"+"  <td><a class='uk-icon-justify uk-icon-level-up' style='cursor:pointer' title='Copiar resultado para área de expressão' onclick=\"cp_exp('"+val+"')\"></a></td> "+"  <td colspan='2'><table style='width:100%'><tr><td style='width:60%'> <div class='resu2l1i'>"+val+"</div> </td><td style='width:40%'> <input type='text' class='Anotacao' value='"+desc+"'> </td></tr></table></td> "+" </tr>"+"</table>"+"</div>";jQuery('#result').prepend(r);jQuery('#LBSubResu').html('');}
function calcula(){var f,r,r2,arr;if(jQuery('#TIExp').val()=='')return;if(ultimaFunc!=''){calculaconvencional(ultimaFunc);return;}
f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
r2=r;inserehistorico(jQuery('#TIExp').val(),formataresultado(r));jQuery('#LBSubResu').html('');jQuery('#TIExp').val(formataresultado(r2));if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();}
function limpa(){jQuery('#TIExp').val('');calculachange();ultimaFunc='';ultimoVal=[];jQuery('#painelConv').html('&nbsp;');}
function calcula2(exp_,rot){var f,r,r2,arr;f=parsear(exp_);try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
r2=r;inserehistorico(exp_,formataresultado(r),rot);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(formataresultado(r2));if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();}
function somarmemoria(){calcula2(jQuery('#TIExp').val()+'+'+memoria);}
function subtrairmemoria(){calcula2(jQuery('#TIExp').val()+'-'+memoria);}
function mudatrigmedida(obj){switch(trigmedida){case'R':jQuery(obj).html('Graus');trigmedida='G';trigmedidamask='Graus';break;case'G':jQuery(obj).html('Grad');trigmedida='A';trigmedidamask='Grados';break;case'A':jQuery(obj).html('Rad');trigmedida='R';trigmedidamask='Radianos';break;}}
function calculaenter(e){var v;v=e.keyCode;if(v==13)calcula();}
function precalcula(op,id,ver){if(ver=='d'){switch(modo){case"A":if(jQuery('#'+id).hasClass("uk-open")!=true){jQuery('#dp'+id).html(abtns[parseInt(id.replace('b',''))]);}
break;case"C":calculaconvencional(op);break;case"E":modoexpressao(op);break;}}else{switch(modo){case"A":if(jQuery('#m'+id).hasClass("uk-open")!=true){jQuery('#mdp'+id).html(abtns[parseInt(id.replace('b',''))]);}
break;case"C":calculaconvencional(op);break;case"E":modoexpressao(op);break;}}}
function ins_visor(num){if(ultimocampo==''){if(jQuery('#'+num+'_0').val()=='')jQuery('#'+num+'_0').val(jQuery('#TIExp').val());else jQuery('#'+num+'_0').val(jQuery('#'+num+'_0').val()+' '+jQuery('#TIExp').val());jQuery('#'+num+'_0').focus();}else{if(jQuery('#'+ultimocampo).val()=='')jQuery('#'+ultimocampo).val(jQuery('#TIExp').val());else jQuery('#'+ultimocampo).val(jQuery('#'+ultimocampo).val()+' '+jQuery('#TIExp').val());jQuery('#'+ultimocampo).focus();}}
function ins_men(num){if(ultimocampo==''){if(jQuery('#'+num+'_0').val()=='')jQuery('#'+num+'_0').val(memoria);else jQuery('#'+num+'_0').val(jQuery('#'+num+'_0').val()+' '+memoria);jQuery('#'+num+'_0').focus();}
else{if(jQuery('#'+ultimocampo).val()=='')jQuery('#'+ultimocampo).val(memoria);else jQuery('#'+ultimocampo).val(jQuery('#'+ultimocampo).val()+' '+memoria);jQuery('#'+ultimocampo).focus();}}
function ins_pi(num){if(ultimocampo==''){if(jQuery('#'+num+'_0').val()='')jQuery('#'+num+'_0').val(Math.PI.toFixed(arredondamento));else jQuery('#'+num+'_0').val(jQuery('#'+num+'_0').val()+' '+Math.PI.toFixed(arredondamento));jQuery('#'+num+'_0').focus();}else{if(jQuery('#'+ultimocampo).val()=='')jQuery('#'+ultimocampo).val(Math.PI.toFixed(arredondamento));else jQuery('#'+ultimocampo).val(jQuery('#'+ultimocampo).val()+' '+Math.PI.toFixed(arredondamento));jQuery('#'+ultimocampo).focus();}}
function ultimofield(num){ultimocampo=num;}
function inseremoeda(val){jQuery('#TIExp').val(jQuery('#TIExp').val()+' '+val);jQuery('#btnfechacot').click();}
function trigmedidaconverte(val){switch(trigmedida){case"G":val=val*Math.PI/180;break;case"A":val=val*Math.PI/200;break;}
return val;}
function calcula3(exp_,rot){var f,r,r2;f=parsear(exp_);r=eval(f);r=arrendtrat(r);r2=r;inserehistorico(exp_,r,rot);jQuery('#LBSubResu').html('');jQuery('#TIExp').val(r2);}
function calculadireto(){var f,r,arr;if(jQuery('#TIExp').val()=='')return;f=parsear(jQuery('#TIExp').val());try{r=eval(f);arr=testatrat(r);r=arrendtrat(r);if(/^(-){0,1}\d+$/.test(r)==true)r=numseg(r);else{r=parseFloat(r).toFixed(arr);r=parseFloat(r);}}catch(e){r='Erro';}
jQuery('#LBSubResu').html('');jQuery('#TIExp').val('');return formataresultado(r);}
function abacarreg(aba){switch(aba){case'f':jQuery('#hlp_f').click();if(jQuery('#hlp_f').html()=='')jQuery('#hlp_f').load('assets/embed/basica-ajuda-financeira.html');break;case't':jQuery('#hlp_t').click();if(jQuery('#hlp_t').html()=='')jQuery('#hlp_t').load('assets/embed/basica-ajuda-trigonometrica.html');break;case'e':jQuery('#hlp_e').click();if(jQuery('#hlp_e').html()=='')jQuery('#hlp_e').load('assets/embed/basica-ajuda-estatistica.html');break;case'o':jQuery('#hlp_o').click();if(jQuery('#hlp_o').html()=='')jQuery('#hlp_o').load('assets/embed/basica-ajuda-outras.html');break;}}
function fechaabinha(id_){if(jQuery('#painelcalcdesk').is(':visible')==false){jQuery('#mb'+id_).click();}else{jQuery('#b'+id_).click();}}
function buskcmda(){var v=jQuery('#buskcmda_').val();if(v.length>=3){jQuery('#buskcre_').val("<div style='text-align:center;padding-top:130px'><i class='uk-icon-refresh uk-icon-spin uk-icon-large'></i><h3>&nbsp;&nbsp;&nbsp;Carregando...</h3></div>");jQuery.ajax({method:"POST",url:"/assets/rotina/ajax-cotacao.php",data:{op:'lstmd',val:v}}).done(function(msg){if(msg=='<table style="width:100%"></table>')jQuery('#buskcre_').html("<div style='width:100%;text-align:center'>Não encontrado.</div>");else jQuery('#buskcre_').html(msg);});}}
jQuery(document).ready(function(){var cb,v,fp,p,re='',vv;if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();if(jQuery.cookie('arr_b')!=undefined)arredondamento=jQuery.cookie('arr_b');if(jQuery.cookie('mod_b')!=undefined){modo=jQuery.cookie('mod_b');}else{if(jQuery('#painelcalcdesk').is(':visible')==false){modo='C';if(jQuery.cookie('arr_b')==undefined)arredondamento=5;}else modo='A';}
mudamodo(modo);if(jQuery.cookie('his_b')!=undefined){cb=jQuery.cookie('his_b').split('|-|');cb=cb.reverse();for(var i=0;i<cb.length;i++){v=cb[i].split('_|_');if(v[0]!='')inserehistorico(v[0],v[2],v[3],v[1]);}}
if(jQuery.cookie('tem_b')!=undefined){tema=jQuery.cookie('tem_b');mudatema(tema);}
if(jQuery.cookie('funp_b')!=undefined){if(jQuery.cookie('funp_b')!=''){fp=jQuery.cookie('funp_b').split('|-|');for(var i=0;i<fp.length;i++){p=fp[i].split('|_|');funcoesp.push(p[2]);funcoespc.push(p[0]+'|_|'+p[1]);}
for(var j=0;j<funcoespc.length;j++){vv=funcoespc[j].split('|_|');if(vv[0]=='')continue;re+=" function "+vv[0].replace(';',',')+" { return "+vv[1]+"; }; ";}
jQuery('#funcoesdin').html('<script>'+re+'</script>');}else{jQuery.removeCookie('funp_b');}}
jQuery('#TIExp').val('');if(jQuery('#painelcalcdesk').is(':visible')==true)jQuery('#TIExp').focus();});function x2(v){return Math.pow(v,2);}

function x3(v){return Math.pow(v,3);}
function exp(a,b){return Math.pow(a,b);}
function raizn(a,b){if(a>=0)return Math.pow(a,1/b);else{if(b%2==0)return Math.pow(a,1/b);else return-1*Math.pow(-1*a,1/b);}}
function raiz3(a){if(a>=0)return Math.pow(a,1/3);else return-1*Math.pow(-1*a,1/3);}
function raiz(v){return Math.sqrt(v);}
function log(a,b){return Math.log(a)/Math.log(b);}
function porc(a,b){return parseFloat(a)/100*b;}
function perc(a,b){return parseFloat(a)/parseFloat(b);}
function fato(x){var resultado=1;for(cont=1;cont<=x;cont++){resultado=resultado*cont;}
return resultado;}
function sen(a){return Math.sin(trigmedidaconverte(a));}
function cos(a){return Math.cos(trigmedidaconverte(a));}
function tg(a){return Math.tan(trigmedidaconverte(a));}
function r3(a,b,c){return(parseFloat(c)*parseFloat(b))/parseFloat(a);}
function r3i(a,b,c){return(parseFloat(a)*parseFloat(b))/parseFloat(c);}
function por(i,f){return parseFloat(f)/parseFloat(i)*100;}
function jcmontante(p,i,n){return parseFloat(p)*Math.pow(1+(parseFloat(i)/100),parseFloat(n));}
function jc(p,i,n){return jcmontante(p,i,n)-parseFloat(p);}
function jcvp(m,i,n){return parseFloat(m)/(Math.pow(1+(parseFloat(i)/100),parseFloat(n)))}
function jcn(p,i,m){return Math.log(parseFloat(m)/parseFloat(p))/Math.log(1+(parseFloat(i)/100));}
function jci(p,n,m){return(Math.pow(parseFloat(m)/parseFloat(p),1/parseFloat(n))-1)*100;}
function jciam(ia){return(Math.pow(1+parseFloat(ia)/100,1/12)-1)*100;}
function jcima(im){return(Math.pow(1+parseFloat(im)/100,12)-1)*100;}
function jsmontante(p,i,n){return p*(1+(parseFloat(i)/100)*parseFloat(n));}
function js(p,i,n){return parseFloat(p)*(parseFloat(i)/100)*parseFloat(n);}
function jsvp(m,i,n){return parseFloat(m)/(1+(parseFloat(i)/100)*parseFloat(n));}
function jsn(p,i,m){return(parseFloat(m)-parseFloat(p))/(parseFloat(p)*(parseFloat(i)/100));}
function jsi(p,n,m){return((parseFloat(m)-parseFloat(p))/(parseFloat(p)*parseFloat(n)))*100;}
function jsiam(ia){return parseFloat(ia)/12;}
function jsima(im){return parseFloat(im)*12;}
function cotg(x){return Math.cos(trigmedidaconverte(x))/Math.sin(trigmedidaconverte(x));}
function sec(x){return 1/Math.cos(trigmedidaconverte(x));}
function cosec(x){return 1/Math.sin(trigmedidaconverte(x));}
function rpgd(x){return(x*200)/Math.PI;}
function asen(x){var re=0;switch(trigmedida){case"R":re=Math.asin(x);break;case"G":re=rpa(Math.asin(x));break;case"A":re=rpgd(Math.asin(x));break;}
return re;}
function acos(x){var re=0;switch(trigmedida){case"R":re=Math.acos(x);break;case"G":re=rpa(Math.acos(x));break;case"A":re=rpgd(Math.acos(x));break;}
return re;}
function atg(x){var re=0;switch(trigmedida){case"R":re=Math.atan(x);break;case"G":re=rpa(Math.atan(x));break;case"A":re=rpgd(Math.atan(x));break;}
return re;}
function hip(x,y){return Math.sqrt(Math.pow(x,2)+Math.pow(y,2));}
function mmc(ar){var c,cont,fat,ver,veri,d,verif_,verif,resu;ar=ar.split(',');c=2;cont=true;fat=new Array();ver=false;while(cont){veri=new Array();for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d==0){ar[i]=parseInt(eval(ar[i]))/c;ver=true;}
veri.push(eval(ar[i]));}
if(ver)fat.push(c);verif_=false
for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))%c==0)verif_=true;if(verif_==false)c++;else c=2;ver=false;verif=false;for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))!=1)verif=true;if(verif==false)cont=false;}
resu=1;for(var i=0;i<fat.length;i++){resu=resu*parseInt(fat[i]);}
return resu;}
function mdc(ar){var c,comm,cont,fat,ver,veri_,d,verif_,veri,verif,resu;ar=ar.split(',');c=2;comm=new Array();cont=true;fat=new Array();ver=false;while(cont){veri_=true;for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d!=0)veri_=false;}
if(veri_==true){comm.push(c);}
veri=new Array();for(var i=0;i<ar.length;i++){d=parseInt(eval(ar[i]))%c;if(d==0){ar[i]=parseInt(eval(ar[i]))/c;ver=true;}else veri_=false;veri.push(eval(ar[i]));}
if(ver)fat.push(c);verif_=false
for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))%c==0)verif_=true;if(verif_==false)c++;else c=2;ver=false;verif=false;for(var k=0;k<ar.length;k++)if(parseInt(eval(ar[k]))!=1)verif=true;if(verif==false)cont=false;}
resu=1;for(var i=0;i<comm.length;i++){resu=resu*parseInt(comm[i]);}
return resu;}
function med(ar){ar=ar.split(',');var tot=0;for(var i=0;i<ar.length;i++){tot+=parseFloat(eval(ar[i]));}
return tot/ar.length;}
function medg(ar){ar=ar.split(',');var tot=1;for(var i=0;i<ar.length;i++){tot*=parseFloat(eval(ar[i]));}
return Math.pow(tot,1/ar.length);}
function medh(ar){ar=ar.split(',');var tot=0;for(var i=0;i<ar.length;i++){tot+=1/parseFloat(eval(ar[i]));}
return ar.length/tot;}
function medp(ar){var tot,den,prov;ar=ar.split(',');tot=0;var den=0;for(var i=0;i<ar.length;i++){prov=ar[i].split('*');tot+=parseFloat(eval(prov[0]))*parseFloat(eval(prov[1]));den+=parseFloat(eval(prov[1]));}
return tot/den;}
function mediana(ar){ar=ar.split(',');var tot=0;if(ar.length%2==0){tot=(parseFloat(eval(ar[parseInt(ar.length/2)-1]))+parseFloat(eval(ar[parseInt(ar.length/2)])))/2;}else{tot=eval(ar[parseInt(ar.length/2)]);}
return tot;}
function acotg(x){return Math.PI/2-Math.atan(trigmedidaconverte(x));}
function asec(x){return Math.acos(1/trigmedidaconverte(x));}
function acosec(x){return Math.asin(1/trigmedidaconverte(x));}
function delta(a,b,c){return Math.pow(b,2)-4*a*c;}
function apr(x){return(parseFloat(x)*Math.PI)/180;}
function rpa(x){return 180*parseFloat(x)/Math.PI;}
function ex(x){return Math.pow(Math.E,parseFloat(x));}
function ln(x){return log(parseFloat(x),Math.E);}
function lb(x){return log(parseFloat(x),2);}
function ex10(x){return Math.pow(10,parseFloat(x));}
function ar(n,r){return exp(parseFloat(n),parseFloat(r));}
function as(n,r){return fato(parseFloat(n))/fato(parseFloat(n)-parseFloat(r));}
function cs(n,r){return fato(parseFloat(n))/(fato(parseFloat(n)-parseFloat(r))*fato(parseFloat(r)));}
function cr(x,y){return fato(parseFloat(x)+parseFloat(y)-1)/(fato(parseFloat(y))*(fato(parseFloat(x)-1)));}
function ps(x){return fato(parseFloat(x));}
function pc(x){return fato(parseFloat(x)-1);}
function dpr(a,x,b,y,c){var val=parseFloat(a)*parseFloat(x)+parseFloat(b)*parseFloat(y)+parseFloat(c);val=(val<0)?val*-1:val;var val2=Math.sqrt(Math.pow(parseFloat(a),2)+Math.pow(parseFloat(b),2));return val/val2;}
function gpa(a,r,n){return parseFloat(a)+(parseFloat(n)-1)*parseFloat(r);}
function spa(a1,an,n){return((parseFloat(a1)+parseFloat(an))*parseFloat(n))/2;}
function gpg(a1,q,n){return parseFloat(a1)*Math.pow(parseFloat(q),parseFloat(n)-1);}
function ppg(a1,q,n){return Math.pow(parseFloat(a1),parseFloat(n))*Math.pow(parseFloat(q),(parseFloat(n)*(parseFloat(n)-1))/2);}
function spg(a1,q,n){return(parseFloat(a1)*(Math.pow(parseFloat(q),parseFloat(n))-1))/(parseFloat(q)-1);}
function nb(n,p){return fato(parseInt(n))/(fato(parseInt(p))*fato(parseInt(n)-parseInt(p)));}
function pkn(k,n,p){return nb(parseFloat(n),parseFloat(k))*Math.pow(parseFloat(p),parseFloat(k))*Math.pow(1-parseFloat(p),parseFloat(n)-parseFloat(k));}
function fatorar(nr){var partes,nr;partes='';nr=parseInt(nr);while(nr>1){for(var i=2;i<=nr;i++){if(nr%i)continue;partes+='*'+i;nr=nr/i;break;}}
return partes.substring(1);}
function abs(x){return Math.sqrt(Math.pow(parseFloat(x),2));}
function pfrac(x){var a=(x+'').split('.');return(a[1]==undefined)?'0':'0.'+a[1];}
function pint(x){return parseInt(x);}
function ale(min,max){return Math.floor(Math.random()*(parseInt(max)-parseInt(min)))+parseInt(min);}
function piso(x){return Math.floor(parseFloat(x));}
function teto(x){return Math.ceil(parseFloat(x));}
function inv(x){return 1/parseFloat(x);}
function frac(x){var p,a,b;p=(x+'').split('.');a=p[0];b=p[1];return(b==undefined)?'Erro':simp(a+''+b,Math.pow(10,b.length));}
function simp(n,d){var a,b,c;a=mdc(n+','+d);b=parseInt(n)/parseInt(a);c=parseInt(d)/parseInt(a);return b+'/'+c;}
function valoravista(r,i,n){return parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/((parseFloat(i)/100)*Math.pow(1+parseFloat(i)/100,parseFloat(n))));}
function objt(o,vp,r,i){return Math.log(((parseFloat(i)/100)*parseFloat(o)+parseFloat(r))/(parseFloat(r)+(parseFloat(i)/100)*parseFloat(vp)))/Math.log(1+(parseFloat(i)/100));}
function objp(o,vp,n,i){return((parseFloat(i)/100)*parseFloat(o)-(parseFloat(i)/100)*parseFloat(vp)*Math.pow(1+(parseFloat(i)/100),parseFloat(n)))/(Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1);}
function obja(o,t,p,i){return(parseFloat(o)*(parseFloat(i)/100)-parseFloat(p)*(Math.pow(1+(parseFloat(i)/100),parseFloat(t))-1))/((parseFloat(i)/100)*Math.pow(1+(parseFloat(i)/100),parseFloat(t)));}
function akk(vp,n,i){return((parseFloat(i)/100)*1000000-(parseFloat(i)/100)*parseFloat(vp)*Math.pow(1+(parseFloat(i)/100),parseFloat(n)))/(Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1);}
function tkk(vp,r,i){return Math.log(((parseFloat(i)/100)*1000000+parseFloat(r))/(parseFloat(r)+(parseFloat(i)/100)*parseFloat(vp)))/Math.log(1+(parseFloat(i)/100));}
function montante(vp,r,i,n){return jcmontante(vp,i,n)+parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100));}
function montante2(vp,r,i,n,s){return jcmontante(vp,i,n)+parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100))-parseFloat(s)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100));}
function montante3(vp,r,ii,n,s,f){var i=parseFloat(ii)-parseFloat(f);return jcmontante(vp,i,n)+parseFloat(r)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100))-parseFloat(s)*((Math.pow(1+(parseFloat(i)/100),parseFloat(n))-1)/(parseFloat(i)/100));}



function convc(val,de,para){re=0;switch(de){case'quilometro':switch(para){case'quilometro':re=val;break;case'metro':re=val*1000;break;case'polegada':re=val*39370.07874;break;case'milha':re=val*0.6213711922;break;case'jarda':re=val*1.0936132983;break;case'centimetros':re=val*100000;break;case'milimetro':re=val*1000000;break;case'pe':re=val*3280.84;break;case'milhana':re=val*4.054;break;}
break;case'metro':switch(para){case'quilometro':re=val*0.001;break;case'metro':re=val;break;case'polegada':re=val*39.37007874;break;case'milha':re=val*0.1093613298;break;case'jarda':re=val*1.9247594045;break;case'centimetros':re=val*100;break;case'milimetro':re=val*1000;break;case'pe':re=val*3.28;break;case'milhana':re=val*0.0005399568;break;}
break;case'polegada':switch(para){case'quilometro':re=val*0.0000254;break;case'metro':re=val*0.0254;break;case'polegada':re=val;break;case'milha':re=val*0.0000157828;break;case'jarda':re=val*0.027777728;break;case'centimetros':re=val*2.54;break;case'milimetro':re=val*25.4;break;case'pe':re=val*0.0000137149;break;case'milhana':re=val*0.0833333333;break;}
break;case'milha':switch(para){case'quilometro':re=val*1609.344;break;case'metro':re=val*1.609344;break;case'polegada':re=val*6.3346456693;break;case'milha':re=val;break;case'jarda':re=val*0.1759623797;break;case'centimetros':re=val*160934.4;break;case'milimetro':re=val*1.609344;break;case'pe':re=val*5280;break;case'milhana':re=val*0.8689762419;break;}
break;case'jarda':switch(para){case'quilometro':re=val*0.0009144;break;case'metro':re=val*0.9144;break;case'polegada':re=val*36;break;case'milha':re=val*0.0005681818;break;case'jarda':re=val;break;case'centimetros':re=val*91.44;break;case'milimetro':re=val*914.4;break;case'pe':re=val*3;break;case'milhana':re=val*0.0004937365;break;}
break;case'centimetros':switch(para){case'quilometro':re=val*0.00001;break;case'metro':re=val*0.01;break;case'polegada':re=val*0.3937007874;break;case'milha':re=val*0.0000062137;break;case'jarda':re=val*0.010936133;break;case'centimetros':re=val;break;case'milimetro':re=val*10;break;case'pe':re=val*0.0000053996;break;case'milhana':re=val*0.032808399;break;}
break;case'milimetro':switch(para){case'quilometro':re=val*0.000001;break;case'metro':re=val*0.001;break;case'polegada':re=val*0.0393700787;break;case'milha':re=val*0.00000062137;break;case'jarda':re=val*0.0010936133;break;case'centimetros':re=val*0.1;break;case'milimetro':re=val;break;case'pe':re=val*0.0032808399;break;case'milhana':re=val*0.0000005399568034599999;break;}
break;case'pe':switch(para){case'quilometro':re=val*0.0003048;break;case'metro':re=val*0.3048;break;case'polegada':re=val*12;break;case'milha':re=val*0.0001893939;break;case'jarda':re=val*0.3333333333;break;case'centimetros':re=val*30.48;break;case'milimetro':re=val*304.8;break;case'pe':re=val;break;case'milhana':re=val*0.0001645788;break;}
break;case'milhana':switch(para){case'quilometro':re=val*1.852;break;case'metro':re=val*1852;break;case'polegada':re=val*72913.385827;break;case'milha':re=val*1.150779448;break;case'jarda':re=val*2025.3718285;break;case'centimetros':re=val*185200;break;case'milimetro':re=val*1852000;break;case'pe':re=val*6076.1154856;break;case'milhana':re=val;break;}
break;}
return re;}

function convt(val,de,para){re=0;switch(de){case'hora':switch(para){case'hora':re=val;break;case'minuto':re=val*60;break;case'segundo':re=val*60*60;break;case'dia':re=val/24;break;case'mes':re=val/(30*24);break;case'ano':re=val/(365*24);break;}
break;case'minuto':switch(para){case'hora':re=val/60;break;case'minuto':re=val;break;case'segundo':re=val*60;break;case'dia':re=val/(24*60);break;case'mes':re=val/(30*24*60);break;case'ano':re=val/(365*24*60);break;}
break;case'segundo':switch(para){case'hora':re=val/(60*60)
break;case'minuto':re=val/60;break;case'segundo':re=val;break;case'dia':re=val/(24*60*60);break;case'mes':re=val/(30*24*60*60);break;case'ano':re=val/(365*24*60*60);break;}
break;case'dia':switch(para){case'hora':re=val*24;break;case'minuto':re=val*24*60;break;case'segundo':re=val*24*60*60;break;case'dia':re=val;break;case'mes':re=val/30;break;case'ano':re=val/365;break;}
break;case'mes':switch(para){case'hora':re=val*30*24;break;case'minuto':re=val*30*24*60;break;case'segundo':re=val*30*24*60*60;break;case'dia':re=val*30;break;case'mes':re=val;break;case'ano':re=val/12;break;}
break;case'ano':switch(para){case'hora':re=val*365*24;break;case'minuto':re=val*365*24*60;break;case'segundo':re=val*365*24*60*60;break;case'dia':re=val*365;break;case'mes':re=val*12;break;case'ano':re=val;break;}
break;}
return re;}
