(function(d){var c=function(e,f){this.selector=e;this.callback=f};var b=[];b.initialize=function(e,h){var f=[];var g=function(){if(f.indexOf(this)==-1){f.push(this);d(this).each(h)}};d(e).each(g);this.push(new c(e,g))};var a=new MutationObserver(function(e){for(var f=0;f<b.length;f++){d(b[f].selector).each(b[f].callback)}});a.observe(document.documentElement,{childList:true,subtree:true,attributes:true});d.fn.initialize=function(e){b.initialize(this.selector,e)};d.initialize=function(e,f){b.initialize(e,f)}})(jQuery);$.initialize("#divAskParticipation",function(){setInviteBarHeight()});function setInviteBarHeight(){if($("#divAskParticipation").length>0){function a(){var b=$("#divAskParticipation").find(".message").height();$("#divAskParticipation").height(b+"px")}$(window).resize(function(){a()});a()}}require(["//www.webonderzoek-rijksoverheid.nl/CnTMVC/pub/108108108pre/cnt108108108pre.js"]);

// ROP FeedbackBar V2.1
var pageFeedback={initiated:!1,showOnPageTypes:["webpageextended","webpage","faq","governmentalproduct"],hideOnPartOfUrl:[{urlPart:"actueel",location:"all"},{urlPart:"ministeries",location:"first"},{urlPart:"regering",location:"first"},{urlPart:"documenten",location:"all"},{urlPart:"consignatiekas",location:"all"},{urlPart:"wetten-en-regelingen",location:"last"}],hideForElements:["#content form"],showOnClickElements:[{selector:".filterToolWrapper",trigger:".filtertool-finishQuestionsButton"}],cssFile:"/binaries/content/assets/rijksoverheid/presentation/css/page-feedback-bar.css",feedbackAwnser:"",init:function(){this.showQuestionBar()&&this.initQuestionBar()},getCurrentPageType:function(){var e=$("body").attr("data-stats")||"";if(e)for(var t=e.split(";"),i=0;i<t.length;i++)if(""!==t[i]){var a=t[i].split(":");if("type"===a[0])return a[1]}},showQuestionBar:function(){var e=this,t=!1,i=e.getCurrentPageType(),a=window.location.pathname.replace(".html","").split("/").filter(function(e){return e});return i&&-1!=e.showOnPageTypes.indexOf(i)&&(t=!0),a&&e.hideOnPartOfUrl.forEach(function(e,i){var s=a.indexOf(e.urlPart);-1!=s&&("all"===e.location&&(t=!1),"first"===e.location&&0===s&&(t=!1),"last"===e.location&&s===a.length-1&&(t=!1))}),e.hideForElements.forEach(function(e){$(e).length>0&&(t=!1)}),e.showOnClickElements.forEach(function(i){$(i.selector).length>0&&(t=!1,setTimeout(function(){$(i.trigger).on("click",function(){e.initiated||e.initQuestionBar()})},1e3))}),t},initQuestionBar:function(){this.loadFeedbackBarCSS(),this.createQuestionBar(),this.initiated=!0},loadFeedbackBarCSS:function(){$("<link/>",{rel:"stylesheet",type:"text/css",media:"all",href:this.cssFile}).appendTo("head")},createQuestionBar:function(){var e=this;this.$questionBar=$("<div/>",{class:"feedbackBar",style:"display:none;"}),this.$questionBarWrapper=$("<div/>",{class:"wrapper"}).appendTo(this.$questionBar),this.$questionBarContainer=$("<div/>",{class:"formContainer"}).appendTo(this.$questionBarWrapper),this.$questionBarForm=$("<form/>",{name:"feedbackForm"}).appendTo(this.$questionBarContainer),this.$questionsFieldset=$("<fieldset/>",{class:"awnsers",html:'<legend>Heeft deze informatie u geholpen?</legend><div class="radioInputs"><div class="radioInput"><input id="awnser1" data-submit="show" data-reasons="hide" type="radio" name="awnser" value="ja"><label for="awnser1">Ja</label></div><div class="radioInput"><input id="awnser2" data-submit="hide" data-reasons="show" type="radio" name="awnser" value="nee"><label for="awnser2">Nee</label></div></div>'}).appendTo(this.$questionBarForm),this.$reasonsFieldset=$("<fieldset/>",{class:"reasons","aria-hidden":"true",html:'<legend>Jammer. Graag horen we van u waarom niet. Zodat we onze website kunnen verbeteren.</legend><div class="radioInputs"><div class="radioInput"><input id="reason1" data-submit="show" type="radio" name="reason" value="nee – begrijp niet"><label for="reason1">Ik begrijp niet wat er staat</label></div><div class="radioInput"><input id="reason2" data-submit="show" type="radio" name="reason" value="nee – niet volledig"><label for="reason2">De informatie is niet volledig</label></div><div class="radioInput"><input id="reason3" data-submit="show" type="radio" name="reason" value="nee – situatie anders"><label for="reason3">Mijn situatie is anders</label></div><div class="radioInput"><input id="reason4" data-submit="show" type="radio" name="reason" value="nee – andere reden"><label for="reason4">Andere reden</label></div></div>'}).appendTo(this.$questionBarForm),this.$submitBtn=$("<input/>",{type:"submit","aria-hidden":"true",value:"Verzenden",disabled:"disabled"}).appendTo(this.$questionBarForm),this.$succesMessage=$("<div/>",{class:"succes","aria-hidden":"true",html:"<h3>Dank u wel voor uw reactie!</h3>"}).appendTo(this.$questionBarForm),$(window).resize(function(){e.setBarOffset()}),this.setBarOffset(),this.$questionBar.appendTo("#content"),this.handleUserInput()},setBarOffset:function(){var e=$("#content").offset().left+15,t=$(window).width();this.$questionBar.css({width:t+"px","margin-left":"-"+e+"px"})},handleUserInput:function(){var e=this;this.$radioInputs=this.$questionBar.find('input[type="radio"]'),this.$radioInputs.on("change",function(){e.feedbackAwnser=$(this).val(),$(this).attr("data-submit")&&e.toggleSubmitBtn($(this).attr("data-submit")),$(this).attr("data-reasons")&&e.toggleReasonForm($(this).attr("data-reasons"))}),this.$questionBarForm.on("submit",function(t){t.preventDefault(),e.sendPiwikData()})},toggleSubmitBtn:function(e){"show"===e?(this.$submitBtn.removeAttr("disabled"),this.$submitBtn.attr("aria-hidden","false")):(this.$submitBtn.attr("disabled","disabled"),this.$submitBtn.attr("aria-hidden","true"))},toggleQuestionForm:function(e){"show"===e?(this.$questionsFieldset.show(),this.$questionsFieldset.attr("aria-hidden","false")):(this.$questionsFieldset.find('input[type="radio"]').prop("checked",!1),this.$questionsFieldset.attr("aria-hidden","true"),this.$questionsFieldset.hide())},toggleReasonForm:function(e){"show"===e?(this.$reasonsFieldset.show(),this.$reasonsFieldset.attr("aria-hidden","false")):(this.$reasonsFieldset.find('input[type="radio"]').prop("checked",!1),this.$reasonsFieldset.attr("aria-hidden","true"),this.$reasonsFieldset.hide())},toggleSuccesMessage:function(e){"show"===e?(this.$succesMessage.show(),this.$succesMessage.attr("aria-hidden","false")):(this.$succesMessage.hide(),this.$succesMessage.attr("aria-hidden","true"))},sendPiwikData:function(){var e=window.location;_paq.push(["trackEvent","page-feedback",e.protocol+"//"+e.hostname+e.pathname,this.feedbackAwnser]),this.toggleSuccesMessage("show"),this.toggleQuestionForm("hide"),this.toggleReasonForm("hide"),this.toggleSubmitBtn("hide")}};pageFeedback.init();