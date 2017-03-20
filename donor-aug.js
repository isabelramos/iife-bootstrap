// This IIFE augments the original one
var DonorInfo = (function(oldDonorInfo) {

  var recentDonations = [
      {
      name: "Kyle",
      pledge: 275
      },
      {
      name: "Lisa",
      pledge: 150
      },
      {
      name: "Erika",
      pledge: 325
      },
      {
      name: "Eileen",
      pledge: 125
      },
      {
      name: "Dorit",
      pledge: 225
      },
      {
      name: "Kim",
      pledge: 300
      }
  ]

  // Augment the original object with another method
  oldDonorInfo.getDonorInfo = function() {
    return recentDonations;
  }

  // Return the new, augmented object with the new method on it
  return oldDonorInfo;
})(DonorInfo || {});