var Bank = function(name,type){
  this.name = name;
  this.type = type;
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
  }


}
  



module.exports = Bank;