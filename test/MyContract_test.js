"use strict";

let MyContract = artifacts.require("MyContract.sol");

contract("MyContract", () => {
  let myContract;

  beforeEach(async function () {
    myContract = await MyContract.new();
  });

  describe("#returnsTrue", () => {
    it("Returns true", async function () {
      assert.isTrue(await myContract.returnsTrue.call());
    });
  });
});