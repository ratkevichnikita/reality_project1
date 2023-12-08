import "./styles.scss";

type CategoryProps = {
  image: string;
  label: string;
};

export default function Category({ image, label }: CategoryProps) {
  return (
    <li className="category">
      <a className="category__label" href="#">
        <div className="category__wrapper">
          <img className="category__image" src={image} alt={label} />
        </div>
        {label}
      </a>
    </li>
  );
}
