# MI-Challenge
This is the repository for MI-Challenge of door2door

# Simulator Modifications
I've modified the simulator to use max_popular_points variable which was initialized to 10 but not used instead of number_or_request, cause this makes much more sense to me,
using number_of_requests assumes that every request to the ridepool service is popular and just crowded the map.

# Libraries Used
I've used Flask with Python3 to create the simulator API endpoint for an easy and testable way to create a restfull API,
also I've used Flask-cors library to enable my end point to be called from different origin as I'm using two different localhosts here (the same one but different ports)

