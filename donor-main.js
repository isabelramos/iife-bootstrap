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
	];

	oldDonorInfo.defaultDonorInfo = function() {
		for (var i=0; i<recentDonations.length; i++) {
			DonorInfo.setNewDonorInfo(recentDonations[i]);
		}
	}

  // Return the public interface that other code can interact with
  return oldDonorInfo;

})(DonorInfo || {});
