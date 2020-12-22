const form = document.getElementById('searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${userInput}`);
  console.log();
  const img = document.createElement('IMG');
  img.src = response.data[0].show.image.medium;
  document.body.append(img);
})