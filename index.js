let RandomTexts = ["vomiting leaf", "wandering trill", "good dull filler", "really thick curve", "winnowy gullet", "random hearth", "full belly", "orange", "loud keyboard", "calculating turn", "burgeoning suitcase", "zinger", "existentialism"]
    document.getElementById("time").onclick = function() {
        document.getElementById("time").innerHTML = Date();
    }
        document.getElementById("random").onclick = function() {
            document.getElementById("random").innerHTML = RandomTexts[Math.floor(Math.random() * RandomTexts.length)]
        }
const isComp = window.matchMeida('(min-width: 600px)')
if (isComp.matches) {
    alert("You're probably on your desktop!");
}