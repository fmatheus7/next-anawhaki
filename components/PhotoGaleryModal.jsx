import React from "react";

const PhotoGaleryModal = ({ images, title, data }) => {
  return (
    <div>
      {/* {TODO: FIX MODAL} */}
      <label htmlFor='my-modal-3' className='btn modal-button'>
        {title}
      </label>
      <input type='checkbox' id='my-modal-3' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box relative'>
          <label
            htmlFor='my-modal-3'
            className='btn btn-sm btn-circle absolute right-2 top-2'>
            ✕
          </label>
          <h3 className='text-lg font-bold'>{title}</h3>
          <p className='py-4'>
            <div className='grid grid-col-2 gap-4'>
              <div className='w-full p-1 md:p-2'>
                {images.map((img) => (
                  <div className='m-2'>
                    <a href={img.url} download target='_blank'>
                      <img
                        alt='/'
                        className='block object-cover object-center w-full h-full rounded-lg'
                        src={img.url}
                      />
                    </a>
                  </div>
                ))}
              </div>
              <button onClick={() => console.log(images, title, data)}>
                get images
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoGaleryModal;
