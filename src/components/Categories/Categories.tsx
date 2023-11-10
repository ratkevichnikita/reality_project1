import './Categories.scss';
import other from '../../assets/images/other-category.png';
import Category from '../Category/Category'
import { useGetDataQuery } from '../../redux/services/realityApi';

export default function Categories() {
    const { data, isLoading } = useGetDataQuery(null);

    return (
        <section className='categories'>
            { !isLoading && <ul className='categories__list'>
                {data.categories.map((item:any) => (
                    item.count && <Category key={item.name} {...item} />
                ))}
                <Category label='Другое' image={other} />
            </ul> }
        </section>
    );
};