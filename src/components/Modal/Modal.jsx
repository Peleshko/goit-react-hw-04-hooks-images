import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

function Modal({ onBackdrop, largeImageURL, tags }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onBackdrop();
    }
  };

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onBackdrop();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  onBackdrop: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

export default Modal;

// class Modal extends Component {
//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onBackdrop();
//     }
//   };

//   handleBackdropClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.onBackdrop();
//     }
//   };

//   render() {
//     const { content, tags } = this.props;
//     console.log(content);
//     return (
//       <div className={s.Overlay} onClick={this.handleBackdropClick}>
//         <div className={s.Modal}>
//           <img src={content} alt={tags} />
//         </div>
//       </div>
//     );
//   }
// }
