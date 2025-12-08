const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OWM0MmRhODRkOWNmMDA5NTFmNjRiZjA4MzNmN2FhNiIsIm5iZiI6MTc2NDg4NjU5NS42NzkwMDAxLCJzdWIiOiI2OTMyMDg0MzIwZjkxOGViMmI2OWJhMWIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.ru4KHUZeGe02JDhcl25bBdpC2LrbYFgwRw1QVKnWJRw'
  }
};

fetch('https://api.themoviedb.org/3/movie/' + sessionStorage.getItem("movieID") + '?language=en-US', options)
  .then(res => res.json())
  .then(details => console.log(details))
  .catch(err => console.error(err));

  