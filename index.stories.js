import { defineCustomElements } from '@se/web-ui/loader';
defineCustomElements(window);
import './build/main.js';

var label = {
	title: "Was this helpful?",
	yes: "Yes",
	no: "No",
	commentTitle: "What can we do to improve?",
	commentSubmit: "Submit",
	successMsg: "Thank you for your feedback"
};
	
export default { title: 'SE Feedback' };

export const feedbackComponent = () => {
	var knowledgeElement = document.createElement('se-app');
	knowledgeElement.setAttribute("language", 'de');
	knowledgeElement.setAttribute("id", 'FA338988');
	//knowledgeElement.id="FA170903";
	knowledgeElement.label = label;
	return knowledgeElement;
};
