import './Category.scss';

export default function Category({
  image,
  label
}) {
 
  return (
    <li className='category'>
        <a className='category__label' href='#' >
          <div className='category__wrapper'>
            <img className='category__image' src={image} alt={label}/>
          </div>
          {label}
        </a>
    </li>
  );
}