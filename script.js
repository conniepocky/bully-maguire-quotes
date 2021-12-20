var text = document.getElementById("mainText");

function sayText() {
	var quotes = ["you want forgiveness, get religion", "i was looking through some photos and it looks very uh- similar", "they love me", "im gonna put some dirt in your eye", "see ya later chump", "gonna cry?", "look at little goblin jr, gonna cry?", "he despised you, you were an embarrassment to him", "stings, doesn't it?", "thats a cute outfit, did your husband give it to you?", "i missed the part where thats my problem", "you'll get your rent when you fix this DAMN DOOR", "now dig on this", "i had to beat an old lady with a stick to get these cranberries", "you're trash"]

	text.innerHTML = quotes[Math.floor(Math.random()*quotes.length)]; 
}





