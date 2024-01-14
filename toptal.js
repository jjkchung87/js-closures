var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

//"outer func: this.foo = bar"
//"outer func: self.foo = bar"
//"inner func: self.foo = bar"
//"inner func: self.foo = bar"


const isPalindrome = (string) => {
    string = string.toLowerCase()

    let left = 0
    let right = string.length -1;

    while(left < right){
        if(string[left] === " ") left++;
        if(string[right] === " ") right--;

        if(string[left] !== string[right]) return false
        left++;
        right--;
    }

    return true;

}

function sum(n1, n2) {
    return n1 + n2;
}

function sum2(n1) {
    (function(n2){
        return n1+n2
    })()

}