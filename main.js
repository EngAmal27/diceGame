function rollDice() {
    // Get the number of dice and ensure it's a valid integer
    let numOfDice = parseInt(document.getElementById("numOFDice").value);
    if (isNaN(numOfDice) || numOfDice < 1) {
      alert("Please enter a valid number of dice (1 or more).");
      return; // Exit the function if input is invalid
    }
  
    // Clear previous results
    let diceResult = document.getElementById("diceResult");
    diceResult.innerHTML = "";
    let diceImage = document.getElementById("diceImage");
    diceImage.innerHTML = "";
  
    // Roll the dice and display results
    let totalRoll = 0;
    let diceRolls = [];
    for (let i = 0; i < numOfDice; i++) {
      let roll = Math.floor(Math.random() * 6) + 1; // Generate random number between 1 and 6
      totalRoll += roll;
      diceRolls.push(roll);
    }
  
    // Display individual dice rolls and total
    diceResult.innerHTML = `<b>Individual Rolls:</b> ${diceRolls.join(", ")}<br><b>Total:</b> ${totalRoll}`;
  
    // Display dice image(s) based on roll(s)
    diceImage.innerHTML = ""; // Clear previous images
    for (let roll of diceRolls) {
      let image = createDiceImage(roll); // Call function to create dice image based on roll
      diceImage.appendChild(image); // Append image to the diceImage container
    }
  }
  
  function createDiceImage(roll) {
    // Create a new image element
    let image = document.createElement("img");
    image.src = `dice-image/${roll}.png`; // Set image source based on roll value
    image.alt = `Die showing ${roll}`;
    image.classList.add("dice-image"); // Add a class for styling (optional)
    return image;
  }
  