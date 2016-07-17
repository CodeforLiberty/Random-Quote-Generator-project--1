// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Quotes Array of objects 
var quotes = [{quote:
	   "This is the real secret of life, to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
     source:"Alan Watts", year:1966 },//Quote number [0]
{quote:"We seldom realize, for example that our most private thoughts and emotions are not actually our own. For we think in terms of languages and images which we did not invent, but which were given to us by our society."
, source:"Alan Watts"}//Quote number[1]
,{quote:"\“It is dangerous to be right in matters on which the established authorities are wrong.\”", source:"Voltaire",citation:'The Age Of Louis XIV'},//Quote number [2]   
{quote:"Men are equal; it is not birth but virtue that makes the difference.",source:"Voltaire"},//Quote number [3]
{quote:"My brain is only a receiver, in the Universe there is a core from which we obtain knowledge, strength and inspiration. I have not penetrated into the secrets of this core, but I know that it exists.",
source:"Nikola Tesla"}//Quote number [4]
,{quote:"Our life is frittered away by detail. Simplify,Simplify", source:"Henry David Thoreau", citation:"Walden and other writings"}//Quote number [5]
,{quote:"Nothing gives one person so much advantage over another as to remain always cool and unruffled under all circumstances.", source:"Thomas Jefferson", citation:"Letters of Thomas Jefferson" }]//Quote number [6]       

 function getRandomQuote()
 {var randomValue=Math.random();
 console.log(randomValue);
 	//Generates random number Value
 	if(randomValue<0.1>0.0) {return quotes[0]} else if (randomValue<0.25>0.10) 
 	{return quotes[1]} else if(randomValue<0.45>0.3){
 		return quotes[2]}  else if(randomValue<0.60>0.46){
 			return quotes[3]} else if(randomValue<0.75>0.59){
 				return quotes[4]}  else if (randomValue<0.9>0.74){
 					return quotes[5]} else if(randomValue<1.0>0.85){
 						return quotes[6]}}
 	//returns quote object depending on the value of randomValue

function printQuote()
{ getRandomQuote()
	var selectedQuote= getRandomQuote();//Stores getRandomQuote Object
var printData= '<p class="quote">'+selectedQuote.quote+'</p>';//add quote and html
printData+='<p class="source">'+selectedQuote.source//add the source to the quote
if(selectedQuote.citation!=undefined){ printData+='<span class="citation">'+selectedQuote.citation}//if there is a citation property add a span with the citation
if(selectedQuote.year!=undefined) { printData+='<span class="year">'+selectedQuote.year}//if there is a year property then add it in a span
quoteBox=document.getElementById('quote-box')//variable connected to quotebox
quoteBox.innerHTML=printData;//change the quote box code to the printData variable onclick
}


//Tested for compatability on chrome, IE8, Microsoft Edge and Mozilla Firefox