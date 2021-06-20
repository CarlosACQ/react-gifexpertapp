import React, { Fragment} from 'react';
import { useFetchGifts } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem'


export const GifGrid = ({ category }) => {

    const {data:images,loading} = useFetchGifts(category);

    return (
        <Fragment>
            <h3 className="animate__animated animate__fadeIn">{ category }</h3>
            {loading ? <p className="animate__animated animate__flash">Loading</p> : null}
                <div className="card-grid">
                    {
                        images.map((gif) => {
                            return(
                                <GifGridItem 
                                    key = {gif.id} 
                                    {...gif}
                                />
                            )
                        })
                    }
                </div>
        </Fragment>

    )
}
