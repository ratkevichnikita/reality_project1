import './Categories.scss';
import Category from '../Category/Category'
import { useGetDataQuery } from '../../redux/services/realityApi';

export default function Categories() {
    const { data, isLoading } = useGetDataQuery(null);

    return (
        <section className='categories'>
            <div className='container'>
                { !isLoading && 
                <ul className='categories__list'>
                    {data.categories.map((item:any) => (
                        item.count && <Category key={item.name} image={item.image} label={item.label} />
                    ))}
                </ul> }
            </div>
        </section>
    );
};