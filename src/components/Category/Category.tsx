import './Category.scss';

export default function Category(props) {
 
  return (
    <li className="category">
        <a className="category__image-box" href='#' ><img className="category__image" src={props.image} alt={props.label}/></a>
        <a className="category__label" href='#' >{props.label}</a>
    </li>
  );
}