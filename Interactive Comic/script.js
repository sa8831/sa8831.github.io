let currentPanel = 1;
const totalPanels = 6;
let firstPanelClickCount = 0;
let secondPanelClickCount = 0;
let thirdPanelClickCount = 0;
let fourthPanelClickCount = 0;
let fifthPanelClickCount = 0;
let sixthPanelClickCount = 0;

function updatePanel() {
    document.getElementById("panel").src = `page${currentPanel}.png`;
    document.getElementById("title").style.display = currentPanel === 1 ? "block" : "none";

    // Dynamically change the background image.
    document.body.style.backgroundImage = `url('background${currentPanel}.png')`;

    if (currentPanel === 1) {
        // Reset panel 1 interactions.
        firstPanelClickCount = 0;
        document.getElementById("speech1").classList.add("hidden");
        document.getElementById("speech1").classList.remove("visible");
        document.getElementById("paper").classList.add("hidden");
        document.getElementById("speech2").classList.add("hidden");
        document.getElementById("speech2").classList.remove("visible");

        // Hide panel 2 elements.
        let oxygen = document.getElementById("oxygen");
        if (oxygen) oxygen.style.display = "none";
        let beryllium = document.getElementById("beryllium");
        if (beryllium) beryllium.style.display = "none";

    } else if (currentPanel === 2) {
        // Reset panel 2 interactions.
        secondPanelClickCount = 0;

        // Show Oxygen image in its initial position.
        let oxygen = document.getElementById("oxygen");
        oxygen.style.display = "block";
        oxygen.style.position = "absolute";
        oxygen.style.right = "100px";  // Adjust as needed.
        oxygen.style.top = "40%";    // Adjust as needed.
        void oxygen.offsetWidth; 

        // Setup Beryllium off-screen to the left.
        let beryllium = document.getElementById("beryllium");
        beryllium.style.display = "block";
        beryllium.style.position = "absolute";
        beryllium.style.right = "100px";
        beryllium.style.top = "40%";  // Align vertically with Oxygen.
        void beryllium.offsetWidth;
        // Hide panel 2 speech bubbles.
        document.getElementById("speech3").classList.add("hidden");
        document.getElementById("speech3").classList.remove("visible");
        document.getElementById("speech4").classList.add("hidden");
        document.getElementById("speech4").classList.remove("visible");
        document.getElementById("speech5").classList.add("hidden");
        document.getElementById("speech5").classList.remove("visible");

        document.getElementById("speech1").classList.add("hidden");
        document.getElementById("speech1").classList.remove("visible");
        document.getElementById("paper").classList.add("hidden");
        document.getElementById("speech2").classList.add("hidden");
        document.getElementById("speech2").classList.remove("visible");

        document.getElementById("beryllium").classList.add("hidden");
        document.getElementById("beryllium").classList.remove("visible");
        document.getElementById("oxygen").classList.add("hidden");
        document.getElementById("oxygen").classList.remove("visible");

        document.getElementById("speech6").classList.add("hidden");
        document.getElementById("speech6").classList.remove("visible");
        document.getElementById("speech7").classList.add("hidden");
        document.getElementById("speech7").classList.remove("visible");
        document.getElementById("speech8").classList.add("hidden");
        document.getElementById("speech8").classList.remove("visible");

    } else if (currentPanel === 3) {
        // Reset panel 2 interactions.
        thirdPanelClickCount = 0;

        // Show Oxygen image in its initial position.
        let oxygen = document.getElementById("oxygen");
        oxygen.style.display = "block";
        oxygen.style.position = "absolute";
        oxygen.style.right = "100px";  // Adjust as needed.
        oxygen.style.top = "40%";    // Adjust as needed.
        void oxygen.offsetWidth; 

        // Setup Beryllium off-screen to the left.
        let beryllium = document.getElementById("beryllium");
        beryllium.style.display = "block";
        beryllium.style.position = "absolute";
        beryllium.style.right = "100px";
        beryllium.style.top = "40%";  // Align vertically with Oxygen.
        void beryllium.offsetWidth;

        // Hide panel 2 speech bubbles.
        document.getElementById("speech3").classList.add("hidden");
        document.getElementById("speech3").classList.remove("visible");
        document.getElementById("speech4").classList.add("hidden");
        document.getElementById("speech4").classList.remove("visible");
        document.getElementById("speech5").classList.add("hidden");
        document.getElementById("speech5").classList.remove("visible");

        document.getElementById("speech6").classList.add("hidden");
        document.getElementById("speech6").classList.remove("visible");
        document.getElementById("speech7").classList.add("hidden");
        document.getElementById("speech7").classList.remove("visible");
        document.getElementById("speech8").classList.add("hidden");
        document.getElementById("speech8").classList.remove("visible");

        document.getElementById("beryllium").classList.add("hidden");
        document.getElementById("beryllium").classList.remove("visible");
        document.getElementById("oxygen").classList.add("hidden");
        document.getElementById("oxygen").classList.remove("visible");

        document.getElementById("speech9").classList.add("hidden");
        document.getElementById("speech9").classList.remove("visible");
        document.getElementById("speech10").classList.add("hidden");
        document.getElementById("speech10").classList.remove("visible");
        document.getElementById("speech11").classList.add("hidden");
        document.getElementById("speech11").classList.remove("visible");
    } else if (currentPanel === 4) {
        // Reset panel 2 interactions.
        thirdPanelClickCount = 0;

        // Show Oxygen image in its initial position.
        let oxygen = document.getElementById("oxygen");
        oxygen.style.display = "block";
        oxygen.style.position = "absolute";
        oxygen.style.right = "100px";  // Adjust as needed.
        oxygen.style.top = "40%";    // Adjust as needed.
        void oxygen.offsetWidth; 

        // Setup Beryllium off-screen to the left.
        let beryllium = document.getElementById("beryllium");
        beryllium.style.display = "block";
        beryllium.style.position = "absolute";
        beryllium.style.right = "100px";
        beryllium.style.top = "40%";  // Align vertically with Oxygen.
        void beryllium.offsetWidth;

        // Hide panel 2 speech bubbles.
        document.getElementById("speech6").classList.add("hidden");
        document.getElementById("speech6").classList.remove("visible");
        document.getElementById("speech7").classList.add("hidden");
        document.getElementById("speech7").classList.remove("visible");
        document.getElementById("speech8").classList.add("hidden");
        document.getElementById("speech8").classList.remove("visible");

        document.getElementById("speech9").classList.add("hidden");
        document.getElementById("speech9").classList.remove("visible");
        document.getElementById("speech10").classList.add("hidden");
        document.getElementById("speech10").classList.remove("visible");
        document.getElementById("speech11").classList.add("hidden");
        document.getElementById("speech11").classList.remove("visible");

        document.getElementById("beryllium").classList.add("hidden");
        document.getElementById("beryllium").classList.remove("visible");
        document.getElementById("oxygen").classList.add("hidden");
        document.getElementById("oxygen").classList.remove("visible");

        document.getElementById("speech12").classList.add("hidden");
        document.getElementById("speech12").classList.remove("visible");
        document.getElementById("speech13").classList.add("hidden");
        document.getElementById("speech13").classList.remove("visible");
        document.getElementById("speech14").classList.add("hidden");
        document.getElementById("speech14").classList.remove("visible");

    } else if (currentPanel === 5) {
        // Reset panel 2 interactions.
        thirdPanelClickCount = 0;

        // Show Oxygen image in its initial position.
        let oxygen = document.getElementById("oxygen");
        oxygen.style.display = "block";
        oxygen.style.position = "absolute";
        oxygen.style.right = "100px";  // Adjust as needed.
        oxygen.style.top = "40%";    // Adjust as needed.
        void oxygen.offsetWidth; 

        // Setup Beryllium off-screen to the left.
        let beryllium = document.getElementById("beryllium");
        beryllium.style.display = "block";
        beryllium.style.position = "absolute";
        beryllium.style.right = "100px";
        beryllium.style.top = "40%";  // Align vertically with Oxygen.
        void beryllium.offsetWidth;

        // Hide panel 2 speech bubbles.
        document.getElementById("speech9").classList.add("hidden");
        document.getElementById("speech9").classList.remove("visible");
        document.getElementById("speech10").classList.add("hidden");
        document.getElementById("speech10").classList.remove("visible");
        document.getElementById("speech11").classList.add("hidden");
        document.getElementById("speech11").classList.remove("visible");

        document.getElementById("speech12").classList.add("hidden");
        document.getElementById("speech12").classList.remove("visible");
        document.getElementById("speech13").classList.add("hidden");
        document.getElementById("speech13").classList.remove("visible");
        document.getElementById("speech14").classList.add("hidden");
        document.getElementById("speech14").classList.remove("visible");

        document.getElementById("beryllium").classList.add("hidden");
        document.getElementById("beryllium").classList.remove("visible");
        document.getElementById("oxygen").classList.add("hidden");
        document.getElementById("oxygen").classList.remove("visible");

        document.getElementById("speech15").classList.add("hidden");
        document.getElementById("speech15").classList.remove("visible");
        document.getElementById("speech16").classList.add("hidden");
        document.getElementById("speech16").classList.remove("visible");
        document.getElementById("speech17").classList.add("hidden");
        document.getElementById("speech17").classList.remove("visible");
    } else if (currentPanel === 6) {
        // Reset panel 2 interactions. 
        thirdPanelClickCount = 0;

        // Show Oxygen image in its initial position.
        let oxygen = document.getElementById("oxygen");
        oxygen.style.display = "block";
        oxygen.style.position = "absolute";
        oxygen.style.right = "100px";  // Adjust as needed.
        oxygen.style.top = "40%";    // Adjust as needed.
        void oxygen.offsetWidth; 

        // Setup Beryllium off-screen to the left.
        let beryllium = document.getElementById("beryllium");
        beryllium.style.display = "block";
        beryllium.style.position = "absolute";
        beryllium.style.right = "100px";
        beryllium.style.top = "40%";  // Align vertically with Oxygen.
        void beryllium.offsetWidth;

        // Hide panel 2 speech bubbles.
        document.getElementById("speech12").classList.add("hidden");
        document.getElementById("speech12").classList.remove("visible");
        document.getElementById("speech13").classList.add("hidden");
        document.getElementById("speech13").classList.remove("visible");
        document.getElementById("speech14").classList.add("hidden");
        document.getElementById("speech14").classList.remove("visible");

        document.getElementById("speech15").classList.add("hidden");
        document.getElementById("speech15").classList.remove("visible");
        document.getElementById("speech16").classList.add("hidden");
        document.getElementById("speech16").classList.remove("visible");
        document.getElementById("speech17").classList.add("hidden");
        document.getElementById("speech17").classList.remove("visible");

        document.getElementById("beryllium").classList.add("hidden");
        document.getElementById("beryllium").classList.remove("visible");
        document.getElementById("oxygen").classList.add("hidden");
        document.getElementById("oxygen").classList.remove("visible");
    }
    else {
        // For other panels, hide panel 2 elements.
        let oxygen = document.getElementById("oxygen");
        if (oxygen) oxygen.style.display = "none";
        let beryllium = document.getElementById("beryllium");
        if (beryllium) beryllium.style.display = "none";
    }
}

function nextPanel(e) {
    e.stopPropagation(); // Prevent triggering handleClick.
    if (currentPanel < totalPanels) {
        currentPanel++;
        updatePanel();
    }
}

function prevPanel(e) {
    e.stopPropagation();
    if (currentPanel > 1) {
        currentPanel--;
        updatePanel();
    }
}

function handleClick() {
    if (currentPanel === 1) {

        firstPanelClickCount++;

        if (firstPanelClickCount === 1) {
            document.getElementById("speech1").classList.remove("hidden");
            document.getElementById("speech1").classList.add("visible");
        } else if (firstPanelClickCount === 2) {
            document.getElementById("speech1").classList.remove("visible");
            document.getElementById("speech1").classList.add("hidden");
            let paper = document.getElementById("paper");
            paper.classList.remove("hidden");
            paper.style.animation = "tossPaper 1.5s forwards";
        } else if (firstPanelClickCount === 3) {
            document.getElementById("speech2").classList.remove("hidden");
            document.getElementById("speech2").classList.add("visible");
        }
    } else if (currentPanel === 2) {
    

        secondPanelClickCount++;

        if (secondPanelClickCount === 1) {
            /*
            // Beryllium enters from the left to stand left of Oxygen.
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.style.transition = "left 1s ease-in-out";
            document.getElementById("beryllium").classList.remove("hidden");
            document.getElementById("beryllium").classList.add("visible");
            let oxygen = document.getElementById("oxygen");
           
            // Adjust the target left position as needed.
            beryllium.style.left = "60%";
            oxygen.style.display = "block";
            oxygen.style.transition = "left 1s ease-in-out";
            oxygen.style.left = "40%";*/
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.classList.remove("hidden");
            beryllium.classList.add("visible");
            beryllium.classList.add("beryllium-in");
            
            
        } else if (secondPanelClickCount === 2) {
            
            /*// Reveal the speech bubble from Beryllium (Oxygen's dialogue).
            document.getElementById("speech3").classList.remove("hidden");
            document.getElementById("speech3").classList.add("visible");
            
            document.getElementById("oxygen").classList.remove("hidden");
            document.getElementById("oxygen").classList.add("visible"); */
            
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.classList.remove("hidden");
            oxygen.classList.add("visible");
            oxygen.classList.add("oxygen-in");
            
        } else if (secondPanelClickCount === 3) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech3").classList.remove("hidden");
            document.getElementById("speech3").classList.add("visible");
        } else if (secondPanelClickCount === 4) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech4").classList.remove("hidden");
            document.getElementById("speech4").classList.add("visible");
        } else if (secondPanelClickCount === 5) {
            // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech5").classList.remove("hidden");
            document.getElementById("speech5").classList.add("visible");

        }
    } else if (currentPanel === 3) {
    

        thirdPanelClickCount++;

        if (thirdPanelClickCount === 1) {
            /*// Beryllium enters from the left to stand left of Oxygen.
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.style.transition = "left 1s ease-in-out";
            beryllium.style.left = "80%";
            document.getElementById("beryllium").classList.remove("hidden");
            document.getElementById("beryllium").classList.add("visible");
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.style.transition = "left 1s ease-in-out";
            
            // Adjust the target left position as needed.
           
            oxygen.style.left = "40%";*/
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.classList.remove("hidden");
            beryllium.classList.add("visible");
            beryllium.classList.add("beryllium-in");
            
        } else if (thirdPanelClickCount === 2) {
            /*// Reveal the speech bubble from Beryllium (Oxygen's dialogue).
            document.getElementById("speech6").classList.remove("hidden");
            document.getElementById("speech6").classList.add("visible");
            document.getElementById("oxygen").classList.remove("hidden");
            document.getElementById("oxygen").classList.add("visible");
            oxygen.style.left = "40%";*/
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.classList.remove("hidden");
            oxygen.classList.add("visible");
            oxygen.classList.add("oxygen-in");

            

        } else if (thirdPanelClickCount === 3) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech6").classList.remove("hidden");
            document.getElementById("speech6").classList.add("visible");
        } else if (thirdPanelClickCount === 4) {
            // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech7").classList.remove("hidden");
            document.getElementById("speech7").classList.add("visible");
        } else if (thirdPanelClickCount === 5) {
        // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech8").classList.remove("hidden");
            document.getElementById("speech8").classList.add("visible");
        }
    } else if (currentPanel === 4) {
    

        fourthPanelClickCount++;

        if (fourthPanelClickCount === 1) {
            /*// Beryllium enters from the left to stand left of Oxygen.
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.style.transition = "left 1s ease-in-out";
            beryllium.style.left = "80%";
            document.getElementById("beryllium").classList.remove("hidden");
            document.getElementById("beryllium").classList.add("visible");
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.style.transition = "left 1s ease-in-out";
            
            // Adjust the target left position as needed.
           
            oxygen.style.left = "40%";*/
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.classList.remove("hidden");
            beryllium.classList.add("visible");
            beryllium.classList.add("beryllium-in");
            
        } else if (fourthPanelClickCount === 2) {
            /*// Reveal the speech bubble from Beryllium (Oxygen's dialogue).
            document.getElementById("speech6").classList.remove("hidden");
            document.getElementById("speech6").classList.add("visible");
            document.getElementById("oxygen").classList.remove("hidden");
            document.getElementById("oxygen").classList.add("visible");
            oxygen.style.left = "40%";*/
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.classList.remove("hidden");
            oxygen.classList.add("visible");
            oxygen.classList.add("oxygen-in");

            

        } else if (fourthPanelClickCount === 3) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech9").classList.remove("hidden");
            document.getElementById("speech9").classList.add("visible");
        } else if (fourthPanelClickCount === 4) {
            // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech10").classList.remove("hidden");
            document.getElementById("speech10").classList.add("visible");
        } else if (fourthPanelClickCount === 5) {
        // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech11").classList.remove("hidden");
            document.getElementById("speech11").classList.add("visible");
        }
    } else if (currentPanel === 5) {
    

        fifthPanelClickCount++;

        if (fifthPanelClickCount === 1) {
            /*// Beryllium enters from the left to stand left of Oxygen.
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.style.transition = "left 1s ease-in-out";
            beryllium.style.left = "80%";
            document.getElementById("beryllium").classList.remove("hidden");
            document.getElementById("beryllium").classList.add("visible");
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.style.transition = "left 1s ease-in-out";
            
            // Adjust the target left position as needed.
           
            oxygen.style.left = "40%";*/
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.classList.remove("hidden");
            beryllium.classList.add("visible");
            beryllium.classList.add("beryllium-in");
            
        } else if (fifthPanelClickCount === 2) {
            /*// Reveal the speech bubble from Beryllium (Oxygen's dialogue).
            document.getElementById("speech6").classList.remove("hidden");
            document.getElementById("speech6").classList.add("visible");
            document.getElementById("oxygen").classList.remove("hidden");
            document.getElementById("oxygen").classList.add("visible");
            oxygen.style.left = "40%";*/
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.classList.remove("hidden");
            oxygen.classList.add("visible");
            oxygen.classList.add("oxygen-in");

            

        } else if (fifthPanelClickCount === 3) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech12").classList.remove("hidden");
            document.getElementById("speech12").classList.add("visible");
        } else if (fifthPanelClickCount === 4) {
            // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech13").classList.remove("hidden");
            document.getElementById("speech13").classList.add("visible");
        } else if (fifthPanelClickCount === 5) {
        // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech14").classList.remove("hidden");
            document.getElementById("speech14").classList.add("visible");
        }
    
    } else if (currentPanel === 6) {
    

        sixthPanelClickCount++;

        if (sixthPanelClickCount === 1) {
            /*// Beryllium enters from the left to stand left of Oxygen.
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.style.transition = "left 1s ease-in-out";
            beryllium.style.left = "80%";
            document.getElementById("beryllium").classList.remove("hidden");
            document.getElementById("beryllium").classList.add("visible");
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.style.transition = "left 1s ease-in-out";
            
            // Adjust the target left position as needed.
           
            oxygen.style.left = "40%";*/
            let beryllium = document.getElementById("beryllium");
            beryllium.style.display = "block";
            beryllium.classList.remove("hidden");
            beryllium.classList.add("visible");
            beryllium.classList.add("beryllium-in");
            
        } else if (sixthPanelClickCount === 2) {
            /*// Reveal the speech bubble from Beryllium (Oxygen's dialogue).
            document.getElementById("speech6").classList.remove("hidden");
            document.getElementById("speech6").classList.add("visible");
            document.getElementById("oxygen").classList.remove("hidden");
            document.getElementById("oxygen").classList.add("visible");
            oxygen.style.left = "40%";*/
            let oxygen = document.getElementById("oxygen");
            oxygen.style.display = "block";
            oxygen.classList.remove("hidden");
            oxygen.classList.add("visible");
            oxygen.classList.add("oxygen-in");

            

        } else if (sixthPanelClickCount === 3) {
            // Reveal the speech bubble from Oxygen (Beryllium's dialogue).
            document.getElementById("speech15").classList.remove("hidden");
            document.getElementById("speech15").classList.add("visible");
        } else if (sixthPanelClickCount === 4) {
            // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech16").classList.remove("hidden");
            document.getElementById("speech16").classList.add("visible");
        } else if (sixthPanelClickCount === 5) {
        // Reveal the final speech bubble from Beryllium (Oxygen's awkward reply).
            document.getElementById("speech17").classList.remove("hidden");
            document.getElementById("speech17").classList.add("visible");
        }
    }
}

window.onload = updatePanel;
