// 🚀 Day 5 Challenge: Start Coding! 🚀//
//Q16:More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
// to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people 
//that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
//• Print a new set of invitation messages, one for each person in your list.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guest_List = ["Nimra", "Ahsan", "Kainat"];
guest_List.forEach(function (guest_List) {
    console.log("Dear ".concat(guest_List, ", would you like to join me for dinner?"));
});
//a guest who can't make it
var guest11 = guest_List[1];
console.log("\nUnfortunately, ".concat(guest11, " can't make it to the dinner.\n"));
//Replace the guest who can't make it with a new guest
var newGuest = "Ayesha";
guest_List[1] = newGuest;
console.log(guest_List);
// Print second set of dinner invitations
for (var _i = 0, guest_List_1 = guest_List; _i < guest_List_1.length; _i++) {
    var guest = guest_List_1[_i];
    console.log("Dear ".concat(guest, ", \n\twould you like to join me for dinner?\n\t"));
}
var newGuest1 = "Mohsin";
guest_List.unshift(newGuest1);
var newGuest2 = "Ayan";
guest_List.splice(Math.floor(guest_List.length / 2), 0, newGuest2);
var newGuest3 = "Neha";
guest_List.push(newGuest3);
for (var _a = 0, guest_List_2 = guest_List; _a < guest_List_2.length; _a++) {
    var guest = guest_List_2[_a];
    console.log("Dear ".concat(guest, ",\n\twould you like to join me for dinner?\n\t"));
}
//Q17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
//and you have space for only two guests.
//• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite 
//only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name 
//from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually 
//have an empty list at the end of your program
var guestlist = ["Arohi", "Kanwal", "Nimra", "Ahsan", "Hassan"];
guestlist.forEach(function (guestlist) {
    console.log("Dear ".concat(guestlist, ", would you like to join me for dinner?"));
});
console.log(" \nSorry, the dinner table can only accommodate two guests.");
//Removing guest
while (guestlist.length > 2) {
    var removedGuest = guestlist.pop();
    if (removedGuest) {
        console.log("Sorry, ".concat(removedGuest, ", you can't be invited to dinne"));
    }
}
//print a message to remain guest
guestlist.forEach(function (remainingGuest) {
    console.log("".concat(remainingGuest, ", you're still invited to dinner."));
});
guestlist.slice(0, 2);
console.log(guestlist);
//Q18: Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order 
//has changed.
var fvtPlace = ["Kashmir", "switzerland", "Ukraine", "Austria"];
//In orignal order
console.log("Orignal order:", fvtPlace);
//In alphabatical order
var order_place = __spreadArray([], fvtPlace, true).sort();
console.log("Alphabatic order:", order_place);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
// in reverse alphabetical order
var rev_ord = __spreadArray([], fvtPlace, true).sort().reverse();
console.log("Reverse alphabetical order:", rev_ord);
// Show that the original array is still in its original order
console.log("Original Order (unchanged):", fvtPlace);
fvtPlace.reverse();
console.log("Reversed Order:", fvtPlace);
console.log(__spreadArray([], fvtPlace, true).sort());
console.log(__spreadArray([], fvtPlace, true).sort().reverse());
