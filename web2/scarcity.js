let RandomTexts = ["vomiting leaf", "wandering trill", "good dull filler", "really thick curve", "winnowy gullet", "random hearth", "full belly", "orange", "loud keyboard", "calculating turn", "burgeoning suitcase", "zinger", "bandwidth", "time constraint", "tunneling"]
    let AllColors = ["#2815FA", "#FA2815", "#FAFA15", "black", "white", "#15FA28", "#FA15F2"]
                document.getElementById("random1").onclick = function() {
                    document.getElementById("random1").innerHTML = RandomTexts[Math.floor(Math.random() * RandomTexts.length)]
                };
                document.getElementById("random2").onclick = function() {
                    document.getElementById("random2").innerHTML = RandomTexts[Math.floor(Math.random() * RandomTexts.length)]
                };
                document.getElementById("random3").onclick = function() {
                    document.getElementById("random3").innerHTML = RandomTexts[Math.floor(Math.random() * RandomTexts.length)]
                };
                document.getElementById("bookthatiamreading").onmouseover = function() {
                    this.style.color = AllColors[Math.floor(Math.random() * AllColors.length)];
                };
const isComp = window.matchMeida('(min-width: 600px)')
if (isComp.matches) {
    alert("You're probably on your desktop!");
}