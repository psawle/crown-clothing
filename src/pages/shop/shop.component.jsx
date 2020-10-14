import React, { Component } from 'react'
import Shop_Data from "./shop.data.js"
import CollectionPreview from "../../components/collection-preview/collection-preview.component.jsx"

export default class ShopPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             collection:Shop_Data
        }
    }
    
    render() {
        const {collection} = this.state;
        return (
            <div className="shop-page">{
                collection.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
                
            </div>
        )
    }
}
