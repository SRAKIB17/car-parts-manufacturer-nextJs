import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading';
import ShowProduct from './ShowProduct';

const FeatureProduct = () => {
    const { data, isLoading, refetch } = useQuery('featureProduct', () => axios.get(`https://fathomless-thicket-10172.herokuapp.com/products/0/6?newI=false`));

    if (isLoading) {
        return <Loading />
    }
    const products = data?.data?.products;

    return (
        <div className='mt-9 w-fit  border-primary rounded-md m-8 md:mr-4  md:ml-4 xl:mr-28 xl:ml-28'>
            <div>
                <h1 className='m-4 text-xl font-extrabold border-b-2 w-fit border-primary'>
                    Feature Products:
                </h1>
            </div>
            <div>
                <div className='grid p-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 xl:gap-5'>
                    {
                        products?.map((product, index) => <ShowProduct key={index} props={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;