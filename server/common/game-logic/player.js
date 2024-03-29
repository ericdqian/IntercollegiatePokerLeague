module.exports = class Player {
	/**
	 * Creates a new player to be used in a game
	 * @param {String} playerId  UUID of the player
	 * @param {Integer} position  position of the player, where 0 is the small blind and n-1 is the button
	 * maybe make position not a part of the Player class, just Game
	 * @param {Integer} initStack the amount of chips the player starts with
	 */
	constructor(playerId, seatNumber, initStack, playerName) {
		this.id = playerId;
		this.seatNumber = seatNumber;
		this.hand = [];
		this.stackSize = initStack;
		this.playerName = playerName
		this.investedInHand = 0;
		this.investedStack = 0;
		this.inHand = true; //defaulted for HU matches where there's no posting
	}

	/**
	 * Updates the player's hand so that the player holds card1 and card2
	 * @param  {Card} card1 the first card that the player holds
	 * @param  {Card} card2 the second card that the player holds
	 */
	updateHand(card1, card2) {
		this.hand[0] = card1;
		this.hand[1] = card2;
	}

	/**
	 * Updates the player's stack
	 * @param  {Integer} stackDelta the amount that the player's stack size changes by
	 */
	updateStack(stackDelta) {
		this.stackSize += stackDelta;
	}
}
