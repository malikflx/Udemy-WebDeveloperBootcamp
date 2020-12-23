const form = document.getElementById('searchForm');
form.addEventListener('submit', async function (e) {
  e.preventDefault();
  const userInput = form.elements.query.value;
  const config = { params: { q: userInput } };
  const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
  displayShows(response.data);
  form.elements.query.value = '';
})

const displayShows = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const img = document.createElement('IMG');
      img.src = result.show.image.medium;
      document.body.append(img);
    }
  }
}