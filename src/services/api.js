import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
  key: '24006178-a076599a61b558ce501b87587',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImages = async (searchQuery, page) => {
  try {
    const { data } = await axios.get('', {
      params: { q: searchQuery, page },
    });

    return data;
  } catch (e) {
    console.error(e);
  }
};

export default fetchImages;
