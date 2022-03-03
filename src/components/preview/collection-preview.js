import { Collections } from '@material-ui/icons';
import React from 'react';


const CollectionPreview = ({title ,items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.map(({id, ...otherCollections}) => (
                    <Collections key={id} {...otherCollections} />
                ))
}
        </div>
    </div>
)   

export default CollectionPreview;