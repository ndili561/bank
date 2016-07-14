var Account = require('../account');
var Bank = require('../bank');
var assert = require('chai').assert

describe('Bank', function(){

  beforeEach(function() {
    account = new Account("bubu", 1000);
    account1 = new Account("cucu", 1500);
    account2 = new Account("gigi", 1700);
    bank = new Bank("Nico", 100, "cc");
  });

  it('bank has a name', function(){
    assert.equal("Nico", bank.name);
  })

  it('account has a name', function(){
    assert.equal('bubu', account.name)
  })

  it('bank can add account', function(){
    bank.add(account);
    assert.equal(1,bank.accounts.length)
  })

  it('find account by name', function(){
    bank.add(account);
    assert.equal("bubu", bank.find_account_by_name(account))});

    it('find account by name', function(){
    bank.add(account1);
    assert.equal(null, bank.find_account_by_name(account2))});

    it('find max value of accounts', function(){
    bank.add(account);
    bank.add(account1);
    bank.add(account2);
    assert.equal(1700, bank.find_largest_account())
  });
    it('find sum of all accounts', function(){
      bank.add(account);
      bank.add(account1);
      bank.add(account2);
      assert.equal(4200, bank.find_sum())
    });
    it("find averange", function(){
      bank.add(account);
      bank.add(account1);
      bank.add(account2);
      assert.equal(1400, bank.find_averange())
    })


})