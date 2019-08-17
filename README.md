# MI-Challenge
This is the repository for MI-Challenge of door2door

# Simulator Modifications
I've modified the simulator to use max_popular_points variable which was initialized to 10 but not used instead of number_or_request, cause this makes much more sense to me,
using number_of_requests assumes that every request to the ridepool service is popular and just crowded the map.

# Libraries Used
I've used Flask with Python3 to create the simulator API endpoint for an easy and testable way to create a restfull API,
also I've used Flask-cors library to enable my end point to be called from different origin as I'm using two different localhosts here (the same one but different ports).  
I've used [leaflet](https://leafletjs.com/index.html) as my Maps library as it's open source, free, and easy to use and get up and running quickly.  
I've also used an extenrl [repository](https://cdn.rawgit.com/pointhi/leaflet-color-markers) to get my marker icons.

# Building And Running The Backend (Python)
First you need to install virtualenv (if you havent already) using the command:
```python
pip install virtualenv
```
Then create a virtual environment with what ever the name you want using the command:
```python
virtualenv <name_of_the_environment> -p python3
```
the `-p python3` here instructs the environment to use python3 interpreter.
Then cd to the new created environment and activate it using the command:
```
source bin/activate
```
After activation of the environment you need to install the required libraries from requirements.txt using the command:
```python
pip install -r requirements.txt
```
Finally you just need to run the application using the command:
```python
python simulator_api_wrapper.py
```

# Testing
I've done some manual testing to ensure that everything is Ok before submission, you can't run the simulation with number of request &lt; 4 to be able to make sense of simulation results.
You can't submit an empty number of requests, and when re-simulate the components update just fine.

