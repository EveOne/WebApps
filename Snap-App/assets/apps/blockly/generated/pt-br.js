// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">um ambiente de programação visual</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Veja o código JavaScript gerado.</span><span id="linkTooltip">Salvar e ligar aos blocos.</span><span id="runTooltip">Execute o programa definido pelos blocos na área de trabalho.</span><span id="runProgram">Executar o programa</span><span id="resetProgram">Reiniciar</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancelar</span><span id="catLogic">Lógica</span><span id="catLoops">Laços</span><span id="catMath">Matemática</span><span id="catText">Texto</span><span id="catLists">Listas</span><span id="catColour">Cor</span><span id="catVariables">Variáveis</span><span id="catProcedures">Funções</span><span id="httpRequestError">Houve um problema com a requisição.</span><span id="linkAlert">Compartilhe seus blocos com este link:\n\n%1</span><span id="hashError">Desculpe, \'%1\' não corresponde a um programa salvo.</span><span id="xmlError">Não foi possível carregar seu arquivo salvo. Talvez ele tenha sido criado com uma versão diferente do Blockly?</span><span id="listVariable">lista</span><span id="textVariable">texto</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof turtlepage == 'undefined') { var turtlepage = {}; }


turtlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Turtle_moveTooltip">Move a tartaruga para frente ou para trás a quantidade especificada.</span><span id="Turtle_moveForward">avançar</span><span id="Turtle_moveBackward">mover para trás</span><span id="Turtle_turnTooltip">Gira a tartaruga para esquerda ou direita de acordo com o número de graus especificado.</span><span id="Turtle_turnRight">vire à direita</span><span id="Turtle_turnLeft">vire à esquerda</span><span id="Turtle_widthTooltip">Muda o tamanho da caneta.</span><span id="Turtle_setWidth">configurar largura para</span><span id="Turtle_colourTooltip">Muda a cor da caneta.</span><span id="Turtle_setColour">Configurar cor para</span><span id="Turtle_penTooltip">Levanta ou abaixa a caneta, para parar ou voltar a desenhar.</span><span id="Turtle_penUp">levantar caneta</span><span id="Turtle_penDown">abaixar caneta</span><span id="Turtle_turtleVisibilityTooltip">Torna a tartaruga (círculo e seta) visível ou invisível.</span><span id="Turtle_hideTurtle">esconder tartaruga</span><span id="Turtle_showTurtle">mostrar tartaruga</span><span id="Turtle_printHelpUrl">https://pt.wikipedia.org/wiki/Impress%C3%A3o</span><span id="Turtle_printTooltip">Desenha texto na direção da tartaruga em sua localização.</span><span id="Turtle_print">imprimir</span><span id="Turtle_fontHelpUrl">https://pt.wikipedia.org/wiki/Fonte_tipogr%C3%A1fica</span><span id="Turtle_fontTooltip">Configurar a fonte usada pelo bloco de impressão na tela.</span><span id="Turtle_font">fonte</span><span id="Turtle_fontSize">tamanho da fonte</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">negrito</span><span id="Turtle_fontItalic">itálico</span><span id="Turtle_unloadWarning">Deixar está página resultará na perda de seu trabalho.</span></div>';
};


turtlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return turtlepage.messages(null, null, opt_ijData) + '<div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50"><!-- Slow icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" /></svg><!-- Fast icon. --><!-- Extra SVG is temporary hack to fix bug #349701 in Chrome 34. --><!-- Harmless for other browsers. --><svg xmlns="http://www.w3.org/2000/svg" version="1.1"><clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="/assets/apps/blockly/media/icons.png" height=42 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></svg></td><td style="text-align: right"><button id="simButton" class="primary"><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21"> Simulate Program</button><button id="resetButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Reset Simulation</button></td></tr><tr><td><button id="codeButton" title="Veja o código JavaScript gerado."><img src=\'/assets/apps/blockly/media/1x1.gif\' class="code icon21">View JS Code</button></td><td style="text-align: right"><button id="runButton" class="primary" title="Faz a tartaruga executar o que os blocos dizem."><img src="/assets/apps/blockly/media/1x1.gif" class="run icon21">Run on Mirobot</button><button id="stopButton" class="primary" style="display: none"><img src="/assets/apps/blockly/media/1x1.gif" class="stop icon21"> Stop Mirobot</button></td></tr></table><button class="secondary" onclick="Blockly.getMainWorkspace().clear()">Clear Program</button><p id="lang">Language: <select id="languageMenu"></select></p><script type="text/javascript" src="/assets/apps/blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/common.js"><\/script><script type="text/javascript" src="/assets/apps/blockly/js/turtle.js"><\/script>' + turtlepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + apps.codeDialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


turtlepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="Tartaruga"><block type="draw_move"><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="draw_turn"><value name="VALUE"><block type="math_number"><field name="NUM">90</field></block></value></block><block type="draw_pen"></block></category><category name="Lógica"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Laços"><block type="controls_repeat_ext"><value name="TIMES"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Matemática"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant"></block><block type="math_number_property"></block><block type="math_change"><value name="DELTA"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="math_round"></block><block type="math_on_list"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Listas"><block type="lists_create_empty"></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><block type="math_number"><field name="NUM">5</field></block></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">lista</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">lista</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">lista</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">lista</field></block></value></block></category><category name="Variáveis" custom="VARIABLE"></category><category name="Funções" custom="PROCEDURE"></category></xml>';
};