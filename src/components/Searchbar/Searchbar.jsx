import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './Searchbar.module.css';

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      toast('Enter your query!');
      return;
    }

    onSubmit(searchQuery);
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <ImSearch />
        </button>
        <ToastContainer autoClose={2000} />
        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          name="searchQuery"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleChange}
          value={searchQuery}
        />
      </form>
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;

// class SearchBar extends Component {
//   state = {
//     searchQuery: '',
//   };

//   handleChange = e => {
//     this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.searchQuery.trim() === '') {
//       toast('Enter your query!');
//       return;
//     }

//     this.props.onSubmit(this.state.searchQuery);
//     this.setState({ searchQuery: '' });
//   };

//   render() {
//     const { searchQuery } = this.state;
//     return (
//       <header className={s.Searchbar}>
//         <form className={s.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={s.SearchFormButton}>
//             <ImSearch />
//           </button>
//           <ToastContainer autoClose={2000} />
//           <input
//             className={s.SearchFormInput}
//             type="text"
//             autoComplete="off"
//             name="searchQuery"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={searchQuery}
//           />
//         </form>
//       </header>
//     );
//   }
// }
