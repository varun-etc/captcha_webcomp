<script>
import { onMount, onDestroy } from 'svelte';
//import * as api from 'api'
//import successIcon from '../se_notification_ok_s.svg';
//import Modal from './Modal.svelte';
import swal from "sweetalert";

var capChecked =true;
window.verifyCallback = function(response){
	console.log("verifyCallback !!!");
	console.log(response);
	if(response)
		capChecked =true;
	else
		capChecked =false;
}

var capDiv;
//var widgetId1;
onMount(() => {
	console.log('the component has mounted');
	console.log(this);

	const script = document.createElement('script');
	console.log(capDiv);
    window.onloadCallback = function(){
		console.log("onloadCallback !!!!");
		window.widgetId1 = window.grecaptcha.render(capDiv, {
			'sitekey' : '6LcBYf8UAAAAANzlINTbqwMOnsK4zNYWU5cHvFVH',
			'callback': verifyCallback,
			'theme' : 'light'
		});
	}

    script.setAttribute(
      'src',
      'https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit',
    );
	script.async = true;
	script.defer = true;
	window.document.body.appendChild(script);
	
});
	
export let id;
export let language;
export let label;

var visible =false;
var sucMsg=false;


var articles;

let feedback = {
	Yes__c : !visible, 
	No__c : visible, 
	Comment_if_No__c : "" 
}

/*
async function getArticleRatings () {
  articles = await api.articles.getRatings(id, language);
  console.log(articles);
  return articles;
}
getArticleRatings();
*/

async function feedbackApi (feedback) {
  articles =  {test: 'response'}; //await api.articles.postFeedback(id, language, feedback);
  return articles;
}
/*
window.addEventListener('captcha-success', event => {
	capChecked = true;
	console.log("event response");
	console.log(event);
	var type = event.detail;
	//sucMsg =false;
	if (type == 'yes' || (type == 'submit' && feedback.Comment_if_No__c)){
		if(type =='yes')
			visible =false;
		else
			visible =true;
			
		feedback.Yes__c = !visible;
		feedback.No__c = visible;
		
		var res = feedbackApi(feedback).then(function(data){
			if(!data.errorCode) {
				feedback.Comment_if_No__c="";
				sucMsg=true;
				visible=false;
			}
		}).catch(function(err){
			//console.log("something went wrong");
			alert(err.message);
		});	
	}
	else if(type =='no'){
		visible =true;
	}
});

window.addEventListener('captcha-failure', event => {
	capChecked = false;
});
*/
window.myEvent = function(type){
console.log("myEvent");
	if(window.grecaptcha.getResponse(window.widgetId1)){
		capChecked = true;
		console.log("event response");
		console.log(event);
		//var type = event.detail;
		//sucMsg =false;
		if (type == 'yes' || (type == 'submit' && feedback.Comment_if_No__c)){
			if(type =='yes')
				visible =false;
			else
				visible =true;
				
			feedback.Yes__c = !visible;
			feedback.No__c = visible;
			
			var res = feedbackApi(feedback).then(function(data){
				if(!data.errorCode) {
					feedback.Comment_if_No__c="";
					sucMsg=true;
					visible=false;
				}
			}).catch(function(err){
				//console.log("something went wrong");
				alert(err.message);
			});	
		}
		else if(type =='no'){
			visible =true;
		}
	
	} else{
		capChecked = false;
	}
	if(type == "submit" || type =="yes")
		window.grecaptcha.reset(window.widgetId1);
/*
	console.log(this);
	console.log(this.getAttribute("data-choice"));
	sucMsg =false;
	const event = new CustomEvent('captcha-verify', {
		composed: true, // makes the event jump shadow DOM boundary
		detail: this.getAttribute("data-choice")
	});
	window.dispatchEvent(event);
*/
}

function addFeedback(type){				
	sucMsg =false;
	if (type == 'yes' || (type == 'submit' && feedback.Comment_if_No__c)){
		if(type =='yes')
			visible =false;
		else
			visible =true;
			
		feedback.Yes__c = !visible;
		feedback.No__c = visible;
		
		var res = feedbackApi(feedback).then(function(data){
			if(!data.errorCode) {
				feedback.Comment_if_No__c="";
				sucMsg=true;
				visible=false;
			}
		}).catch(function(err){
			//console.log("something went wrong");
			alert(err.message);
		});	
	}
	else if(type =='no'){
		visible =true;
	}
}

</script>
<style>
.container{
  max-width: 70%;
  background: rgb(255, 255, 255);
  border-radius: 0px;
  margin-bottom:0.3px;
  margin-left: 15px;
  margin-right: 15px;  
}
.title-font{
	color: rgb(51, 51, 51);
	font-family: ArialRoundedMTforSE-Bold;
	font-size: 16px;
	font-weight: bold;
}
.normal-font{
	color: rgb(51, 51, 51);
	font-family: ArialRoundedMTforSE-Regular;
	font-size: 16px;
	font-weight: normal;
}
.comment-label{
	color: rgb(98, 100, 105);
	font-family: ArialRoundedMTforSE-Regular;
	font-size: 16px;
	font-weight: normal;
}
.feedbck-txt{
	height: 80px;
	width: 90%;
}
.icon-success{
	padding-right: 5px;
	vertical-align: middle;
}
.card{
	margin-left: 40px;	
}
#warning-msg{
	color: rgb(194, 2, 65);
	font-family: ArialRoundedMTforSE-Regular;
	font-size: 12px;
	font-weight: normal;
}
</style>
<!--<svelte:options tag="se-captcha-tool" accessors />-->
<se-container class="container" direction="row">
	<se-container option="basic">
	  <se-block option="basic">
		<div class="card">
			<p class="title-font">{#if (typeof label !='undefined' && label.title)}{label.title}{:else}Was this helpful?{/if}</p>
			<div id="se-captcha" bind:this={capDiv}></div>
			<!--<slot class="se-faq-feedback"></slot>-->
			{#if !capChecked}
				<span id="warning-msg">Please check this box</span>
			{/if}
			<div>
			<!--
				<se-button option="outline" data-choice="yes" color="secondary" on:click="{() => addFeedback('yes')}">{#if (typeof label !='undefined' && label.yes)}{label.yes}{:else}Yes{/if}</se-button> 
				<se-button option="outline" data-choice="no" color="secondary" on:click="{() => addFeedback('no')}">{#if (typeof label !='undefined' && label.no)}{label.no}{:else}No{/if}</se-button>
			-->
				<se-button option="outline" data-choice="yes" color="secondary" on:click="{() => window.myEvent('yes')}">{#if (typeof label !='undefined' && label.yes)}{label.yes}{:else}Yes{/if}</se-button> 
				<se-button option="outline" data-choice="no" color="secondary" on:click="{() => window.myEvent('no')}">{#if (typeof label !='undefined' && label.no)}{label.no}{:else}No{/if}</se-button>

				<!--<button id="se-dispatch" on:click="{myEvent}">dispatch event</button>-->
			</div>
			{#if visible}
				<div>
					<p class="comment-label">{#if (typeof label !='undefined' && label.commentTitle)}{label.commentTitle}{:else}What can we do to improve?{/if}</p>
					<textarea class="feedbck-txt" bind:value={feedback.Comment_if_No__c}></textarea>
					<div>
						<!--<se-button option="flat" color="secondary" disabled={!feedback.Comment_if_No__c} on:click="{() => addFeedback('submit')}">{#if (typeof label !='undefined' && label.commentSubmit)}{label.commentSubmit}{:else}Submit{/if}</se-button>-->
						<se-button option="flat" data-choice="submit" color="secondary" disabled={!feedback.Comment_if_No__c} on:click="{() => window.myEvent('submit')}">{#if (typeof label !='undefined' && label.commentSubmit)}{label.commentSubmit}{:else}Submit{/if}</se-button>					
					</div>
				</div>
			{/if}
			{#if sucMsg}
				<p class="normal-font"><span class="icon-success"><!--<img alt="sucess-icon" src="{successIcon}" />--></span>{#if (typeof label !='undefined' && label.successMsg)}{label.successMsg}{:else}Thank you for your feedback{/if}</p>
			{/if}
		</div>
	  </se-block>
	</se-container>
</se-container>
