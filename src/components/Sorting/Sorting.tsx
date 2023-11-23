import "./styles.scss";

const Sorting = () => {
  return (
    <div className="sorting">
      <div className="sorting__wrapper">
        <span className="sorting__text">Сортировка:</span>
        <button className="sorting__btn">популярность</button>
        <button className="sorting__btn">новинки</button>
        <button className="sorting__btn">цена по возрастанию</button>
        <button className="sorting__btn">цена по убыванию</button>
        <button className="sorting__btn">скидка</button>
        <span className="sorting__counter">Найдено: 28</span>
      </div>
    </div>
  );
};

export default Sorting;
