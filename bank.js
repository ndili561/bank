var _ = require ('lodash');

var Bank = function(name){
  this.name = name;
  this.accounts = [];
}

Bank.prototype = {
  add: function(account){
    this.accounts.push(account);
  },
  find_account_by_name: function(anAccount){
    var length = this.accounts.length
    for(i=0;i<length;i++)
    {
      if(this.accounts[i].name===anAccount.name)
      {
        return this.accounts[i].name;
      }
      else
      {
        return null;
      }
    }
  },
  find_largest_account: function(){
    var arr=[]
    var length = this.accounts.length
    for(i=0;i<length;i++)
    {
      arr.push(this.accounts[i].value)
    }
    return  Math.max.apply(Math,arr);
  },
  find_sum: function(){
    count = 0
    var length = this.accounts.length
    for(i=0;i<length;i++)
    {
      count+=this.accounts[i].value
    }
    return count;
  },
  find_averange: function()
  {
    var length = this.accounts.length
    return this.find_sum() / length
  },
  find_total_account_type: function(type)
  {
    var arr = []
    var length = this.accounts.length
    for(i=0;i<length;i++)
    { 
      if(this.accounts[i].type===type)
      {
        arr.push(this.accounts[i].value)
      }     
    }
    return _.reduce(arr, function(sum, n) {
     return sum + n;
   }, 0); 
  }
}
  



module.exports = Bank;