// This IIFE augments the original one
var DonorInfo = (function(oldDonorInfo) {

  var privateDonorArray = [];

  // Augment the original object with another method
  oldDonorInfo.getDonorInfo = function() {
    return privateDonorArray;
  }

  oldDonorInfo.setNewDonorInfo = function(addNewDonor) {
    return privateDonorArray.push(addNewDonor);
  }

  // Return the new, augmented object with the new method on it
  return oldDonorInfo;

})(DonorInfo || {});