import './Categories.scss';
import Category from './Category/Category'
import { useGetDataQuery } from '../../redux/services/realityApi';

type CategoryItem = {
    name: string;
    image: string;
    label: string;
    count: number;
  };

export default function Categories() {
    const { data, isLoading } = useGetDataQuery(null);

    return (
        <section className='categories'>
            <div className='container'>
                { !isLoading && 
                <ul className='categories__list'>
                    {data.categories.map((item: CategoryItem) => (
                        item.count && <Category key={item.name} image={item.image} label={item.label} />
                    ))}
                </ul> }
            </div>
        </section>
    );
};